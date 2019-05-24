'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const weappSchema = new Schema({
    weappId: Number,  // 小程序id
    weappName: String, // 小程序名称
    appId: Number, // AppID
    appSecret: Number, // AppSecret
    weappCode: { type: String, default: 'default.jpg' }, // 小程序码
    avatar: { type: String, default: 'default.jpg' }, // 小程序头像
    version: String, // 小程序版本
    expireAt: String, // 到期时间
    packageId:{ // 小程序级别 试用、标准、 尊享
        type: Schema.Types.objectId, 
        ref: 'ff__weapp_package'
    },
    baseConfig: { // 支付配置 客服配置 公众号配置 云资源 短信配置
        type: Schema.Types.objectId,
        ref: 'ff__weapp_config'
    }, 
    styleConfig: { // 样式配置
        type: Schema.Types.objectId,
        ref: 'ff__weapp_style_config'
    }
})

weappSchema.index({ id: 1 });

const Weapp = mongoose.model('ff__weapp', weappSchema);


export default Weapp