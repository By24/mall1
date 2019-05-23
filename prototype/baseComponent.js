import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import config from '../config'
import Ids from '../models/ids'
export default class BaseComponent {
	constructor() {
		this.idList = ['memberId', 'configId', 'goodsId', 'catId'];
	}
	//获取id列表
	async getId(type) {
		if (!this.idList.includes(type)) {
			console.log('id类型错误');
			throw new Error('id类型错误');
			return
		}
		try {
			const idData = await Ids.findOne();
			idData[type]++;
			await idData.save();
			return idData[type]
		} catch (err) {
			console.log('获取ID数据失败');
			throw new Error(err)
		}
	}
	encryption(password) {
		const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
		return newpassword
	}
	Md5(password) {
		const md5 = crypto.createHash('md5');
		return md5.update(password).digest('base64');
	}
	signtoken(obj){
		return jwt.sign(obj, config.jwtsecret)
	}
	verifytoken(token){
		jwt.verify(token, config.jwtsecret,function (err, decoded){
			if(err){
				return '无效的token.'
			}
			return decoded 
		})
	}
}

