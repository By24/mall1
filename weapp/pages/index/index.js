// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
<<<<<<< HEAD

=======
    handleTouchMove:function (){},
    handleChange11: function handleChange11(e) {
        var index = e.detail.index;
        this.setData({
            current11: index
        });
    },
    handleContentChange11: function handleContentChange11(e) {
        var current = e.detail.current;
        this.setData({
            current11: current
        });
    },
    onRefresh: function (e){
        console.log('onRefresh', e)
    },
    onLoadMore: function (){
        console.log('onLoadMore',e)
    },
>>>>>>> aa9f959efe8a805a48d2f4de545a0d6609b881b6
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        wx.$api.goodCates()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})