<template>
  <div class="p-4">
    <div class="common-form-wrapper">
      <BasicForm
      :labelWidth="100"
      :schemas="schemas"
      :actionColOptions="{ span: 24 }"
      @submit="handleSubmit"
    />
    </div>
    
    <BasicTable @register="register">
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicTable, useTable, TableAction } from '/@/components/Table/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getColumns } from './data';
  import { schemas } from './data'
  import { data202309 } from '../common/202309/index'

  const { createMessage } = useMessage();
  const loading = ref(true);

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
    }
    // createMessage.success('click search,values:' + JSON.stringify(values));
  }

  

  

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
