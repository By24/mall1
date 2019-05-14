'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	user_id: Number,
	user_name: String,
	user_mobile: Number,
	user_email: String,
	user_password: String,
	user_create_time: String,
	user_status:  Number,  //1:普通管理、 2:超级管理员
	avatar: { type: String, default: 'default.jpg' },
})

adminSchema.index({ id: 1 });

const Admin = mongoose.model('ff__Admin', adminSchema);


export default Admin