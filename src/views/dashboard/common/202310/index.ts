import { pay } from './pay'
import { getDataByOrderNo } from './income'

// 这里获取汇总的数据
// 吉客云支付的总金额 拼多多依据相关订单算出的净利润 退款金额

export const data202309 = {
  pay, // 吉客云数据
  getDataByOrderNo, // 查询9月份拼多多账单数据
}