"use strict";

import MD5Util from '../utils/MD5Encode'

const app = getApp();


// 跳转到登陆
function jumpToLogin(callback) {
    let ext = {
        js_code: '',
        key: MD5Util.hexMD5('eshare'),
        preview: false,
        weapp_id: wx.$ext.weAppId,
    }
    wx.login({
        success(res) {
            if (res.code) {
                ext.js_code = res.code
                wx.$api.login(ext, (res) => {
                    setStorage('token', res.data.token)
                })
            }
        }
    })
}

// 获取localStorage
function getStorage(name){
    if (!name) return
    return wx.getStorageSync(name)
}

// 设置localStorage
function setStorage(name, content) {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    wx.setStorageSync(name, content)
}


export default {
    getStorage: getStorage,
    jumpToLogin: jumpToLogin
}
