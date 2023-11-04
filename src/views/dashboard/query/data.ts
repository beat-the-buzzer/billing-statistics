import { FormSchema } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table/index';
export const schemas: FormSchema[] = [
  {
    field: 'queryMonth',
    component: 'DatePicker',
    label: '月份',
    colProps: {
      span: 8,
    },
    required: true,
    defaultValue: (new Date().getFullYear())+''+(new Date().getMonth()+1),
    componentProps: ({ formModel }) => {
      return {
        placeholder: '请选择月份',
        mode: 'month',
        format: 'YYYY-MM',
        valueFormat: 'YYYY-MM',
        onPanelChange: (value) => {
          let month = value.month() + 1 >= 10 ? value.month() + 1 : '0' + (value.month() + 1 )
          formModel.queryMonth = value.year() + '' + month
        },
      }
    },
  },
  {
    field: 'orderId',
    component: 'Input',
    label: '订单号',
    colProps: {
      span: 8,
    },
    componentProps: {
      placeholder: '请输入订单号',
    },
  },
];

export function getColumns(): BasicColumn[] {
  return [
    {
      dataIndex: '商户订单号',
      title: '商户订单号',
    },
    {
      dataIndex: '收入金额（+元）',
      title: '收入金额（+元）',
    },
    {
      dataIndex: '支出金额（-元）',
      title: '支出金额（-元）',
    },
    {
      dataIndex: '发生时间',
      title: '发生时间',
    }
  ];
}