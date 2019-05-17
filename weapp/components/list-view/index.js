// components/list-view/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        EVENT_REFRESH: 'onRefresh',
        EVENT_LOADMORE: 'onLoadMore',
        rotateAngle: 0,
        scrollY: true, //默认true
        state: 0, //控件的状态 0:无状态 1:下拉中 2:下拉达到刷新条件 3:下拉刷新中 4:上拉中 5:上拉加载中 6:加载失败
        scrollToTop: true, //是否到顶部了
        scrollToBottom: false, //是否到底部了
    },

    methods: {
        // 滚动事件
        scrollListener: function(e) {
            if (e.detail.scrollTop == 0) {
                //到顶部了
                this.data.scrollToTop = true;
            } else {
                //离开顶部了
                this.data.scrollToTop = false;
            }
        },
        // 滚动到顶部
        scrollTopListener: function(e) {
            this.data.scrollToTop = true;
            this.data.scrollToBottom = false;
        },
        // 滚动到底部
        scrollBottomListener: function (e) {

        },
        //  手指点击
        touchStart: function(e) {
            this.data.touchStartY = e.touches[0].pageY;
            console.log(this.data.touchStartY);
            this.triggerEvent('bindScrollTouchStart');
        },
        // 手指滑动
        touchMove: function(e) {
            var dropDownInterval = (e.touches[0].pageY - this.data.touchStartY);
            this.data.rotateAngle = dropDownInterval * this.data.scale / this.data.headHeightDef * 90;
            if (this.data.rotateAngle > 180) {
                this.data.rotateAngle = 180;
            }
            // 2.下拉时
            if (dropDownInterval > 0 && this.data.scrollToTop && this.data.state != 3 && this.data.state != 5 && this.data.refresh){
                this.setData({ scrollY: false });
                // // 3.没有在加载的时候去计算head和margin-top 
                // if (this.data.state != 3 && this.data.state != 5) {
                //     var marginTop = -this.data.headHeightDef + (dropDownInterval);
                //     this.data.headMarginTop = marginTop > 0 ? 0 : marginTop;
                // }
                console.log(dropDownInterval)
            } else if (this.data.state != 3 && this.data.state != 5) {
                this.data.state = 4; //上拉中
            }
            // this.setData(this.data);
        },
        // 手指松开
        touchEnd: function(e) {

        }
    }
})