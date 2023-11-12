// 数据来自吉客云，这里包含了取消的部分

import { billingData } from '/@/csv2json/202310'

const orderNoArr = [
  
  
]

export const getDataByOrderNo = (orderNo) => {
  if(orderNo) {
    return billingData.filter(v => v['商户订单号'] == orderNo && orderNoArr.includes(orderNo))
  }
  return billingData
}

