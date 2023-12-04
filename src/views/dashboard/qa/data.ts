
interface contentItem {
  type: string,
  text: string
}

interface QuestionInfoItem {
  id: string,
  avatar: string; // 头像
  name?: string; // 姓名
  date: string; // 发表日期
  desc: string; // 描述 html文本
  link?: string; // 点击跳转
  detail: contentItem[]
}

export const questionInfoItems: QuestionInfoItem[] = [
  {
    id: '1',
    avatar: 'dynamic-avatar-1|svg',
    // name: '威廉',
    date: '刚刚',
    desc: `换货的操作流程`,
    link: '/dashboard/qa-detail?id=1',
    detail: [{
      type: 'P',
      text: '拼多多上支持给消费者换货，具体步骤为:'
    }, {
      type: 'P',
      text: '第一步：和消费者协商更换的货品（平台会让消费者选），在吉客云上去查货品编码；'
    }, {
      type: 'P',
      text: '第二步：在吉客云上手动创建一个订单，填入货品编码和消费者收货信息；'
    }, {
      type: 'P',
      text: '第三步：消费者填入退货物流，商家填入收货物流（手动填入）；'
    }, {
      type: 'P',
      text: '第四步：消费者签收新商品，商家收到退货，并且在微信上完成退款，整个流程结束；'
    }]
  },
  {
    id: '2',
    avatar: 'dynamic-avatar-1|svg',
    // name: '威廉',
    date: '刚刚',
    desc: `退货的操作流程`,
    link: '/dashboard/qa-detail?id=2',
    detail: [{
      type: 'P',
      text: '拼多多上支持给消费者退货，退货的流程需要分情况讨论：'
    }, {
      type: 'P',
      text: '情况一，仓库还未扫描快递单的时候，消费者发起退货申请。此时系统会自动取消订单。如果快递单未打印，那么在打印列表里这个快递单会被删除；如果快递单已打印，那么在扫码验货的时候会提示不存在；'
    }, {
      type: 'P',
      text: '情况二，仓库已扫描快递单，但是快递未被揽收，此时消费者发起退货申请。需要在仓库的群里拦截这个快递。拦截成功之后，会直接将货品还原至货架，此时需要分销商在吉客云驳回并取消订单；'
    }, {
      type: 'P',
      text: '情况三，快递在运输的过程中，消费者发起退货申请。此时需要联系快递公司拦截并退回快递，一般在平台上会自动退款，快递还回去之后，相关货款仓库会单独发至支付宝。'
    }, {
      type: 'P',
      text: '情况四，消费者收到货物之后的退款申请。如果没有质量问题，要求消费者连包装盒一起将货物寄回仓库，一般开启了运费险，消费者只需预约取件，然后在平台上填入快递单号即可，然后平台退款、仓库退款；如果有质量问题，要反馈给仓库。'
    }]
  },
  {
    id: '3',
    avatar: 'dynamic-avatar-1|svg',
    // name: '威廉',
    date: '刚刚',
    desc: `常见问题配置`,
    link: '/dashboard/qa-detail?id=3',
    detail: [{
      type: 'P',
      text: '常见问题可以给用户展示5个，可以将用户关心的问题预先提供准确的回答：'
    }, {
      type: 'P',
      text: '1. 发什么快递？'
    }, {
      type: 'P',
      text: '2. 面料材质是什么？'
    }, {
      type: 'P',
      text: '3. 是正品吗？'
    }, {
      type: 'P',
      text: '4. 尺码怎么选？'
    }]
  }
];

let questionInfoObj = {}
for (let i = 0; i < questionInfoItems.length; i++) {
  questionInfoObj[questionInfoItems[i].id] = questionInfoItems[i]
}
export const questionInfoObjs = questionInfoObj


