<template>
  <div class="p-4">
    <div class="common-form-wrapper">
      <BasicForm @register="registerForm" @submit="handleSubmit" />
      <div class="total">总计：{{ totalData }}</div>
    </div>
    
    <BasicTable @register="register">
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicTable, useTable, TableAction } from '/@/components/Table/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getColumns } from './data';
  import { schemas } from './data'
  import { data202309 } from '../common/202309/index'
  import { data202310 } from '../common/202310/index'

  const { createMessage } = useMessage();
  const loading = ref(true);
  const totalData = ref(0)

  const dataObj = {
    data202309,
  }

  const [register, { setTableData }] = useTable({
    columns: getColumns(),
  });

  const handleSubmit = async (values: any) => {
    var queryMonth = values.queryMonth // 取前6位
    var orderId = values.orderId
    let showData = dataObj[`data${String(queryMonth).substr(0, 6)}`]
    if(showData) {
      setTableData(showData.getDataByOrderNo(orderId))
      var totalArr = showData.getDataByOrderNo() || []
      for(var i = 0; i < totalArr.length; i++) {
        totalData.value = Number(totalData.value) + Number(totalArr[i]['收入金额（+元）']) + Number(totalArr[i]['支出金额（-元）'])
      }
      totalData.value = Number(totalData.value.toFixed(2))
    }
    
  }

  const [registerForm] = useForm({
    schemas,
    labelWidth: 100,
    baseColProps: { span: 6 },
    actionColOptions: { span: 24 },
    autoSubmitOnEnter: true,
  });


  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>

<style scoped>
.total {
  padding-left: 20px;
}
</style>
