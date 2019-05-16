import './static/utils/system';
import common from './static/common/common';
import * as Api from './static/api/api';
wx['$ext'] = wx.getExtConfigSync();
wx['$api'] = Api;

App({
    globalData: {
        key:'eshare'
    },
    onLaunch: function onLaunch() { 
        common.jumpToLogin()
        wx.$api.goodCates({},)
    },
    onShow: function onShow() {},
    onHide: function onHide() {}
});