'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const systemSchema = new Schema({
    mall_id: Number,
	mall_title: { type: String, default: '' },// 商城名称
	mall_avatar: { type: String, default: 'default.jpg' },// 商城头像
	mall_mobile: { type: Number, default: '' },// 联系电话
	mall_wechat_service_show: { type: Number, default: '' },// 开启微信在线客服 1:开启 0: 关闭
	mall_wechat_service_icon: { type: String, default: '' },// 微信客服图标
    mall_mobile_service_show: { type: Number, default: '' }, // 开启一键拨号 1:开启 0: 关闭
    mall_mobile_service_icon: { type: String, default: '' },// 电话客服图标
    mall_receiving_time:  { type: Number, default: '' },  //自动确认收货的时间
    mall_payment_way: Array, // 支付方式
    mall_order_time: { type: Number, default: '' }, // 未支付订单超时时间
    mall_delivery_way: Array, // 发货方式
    mall_goods_service: { type: String, default: '' }// 商品服务内容
})

systemSchema.index({ id: 1 });

const System = mongoose.model('ff__System', systemSchema);


export default System