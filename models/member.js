'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    memberId: Number, // 商户ID
    passWord: String, // 商户密码
    balance: Number,
    avatar: { type: String, default: 'default.jpg' },
    lastLogin: String, // 最近登录日期
    // 上次登录IP
    telephone: Number, // 电话
    email: String, // 邮箱
	createTime: String, // 创建日期
})

memberSchema.index({ id: 1 });

const member = mongoose.model('ff__member', memberSchema);


export default member


