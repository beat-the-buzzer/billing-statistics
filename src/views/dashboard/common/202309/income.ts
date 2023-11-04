// 数据来自吉客云，这里包含了取消的部分

import { billingData } from '/@/csv2json/202309'

const orderNoArr = [
  '230930-183380264451656',
  '230929-501958645171265',
  '230926-243720580750813',
  '230926-203423794692491',
  '230924-196487433073442',
  '230924-030298643463543',
  '230922-438656060282749',
  '230920-647563908620685',
  '230920-202280805353774',
  '230919-350048808333096',
  '230917-244910724663772',
  '230916-437450229301636',
  '230915-676667073500583',
  '230915-504868381660583',
  '230915-333069689820583',
  '230915-602768752283976',
  '230913-610512423841270',
  '230907-543969832531633',
  '230907-200372448851633',
  '230907-211466331043146',
  '230907-126190898100039',
  '230907-337625752442749',
  '230906-030125639252443',
  '230906-122536621101769',
  '230906-673023271981769',
  '230905-242147664791982',
  '230905-013474272791982',
  '230905-671424255590277',
  '230904-457168669471425',
  '230904-285369977631425',
  '230904-386211562911425',
  '230904-098859784991425',
  '230904-442457168671425',
  '230903-661085296101420',
  '230903-053487912432535',
  '230902-299295108791420',
  '230902-041041294282311',
  '230902-327910726453816',
  '230902-158570987081917',
  '230902-473982596141449',
  '230902-048056319411265',
  '230902-376029858731527',
  '230902-136608532114053',
  '230902-206139637142140',
  '230901-035064452752809',
]

export const getDataByOrderNo = (orderNo) => {
  if(orderNo) {
    return billingData.filter(v => v['商户订单号'] == orderNo && orderNoArr.includes(orderNo))
  }
  return billingData
}
