import _StyleHelper from '../../static/libs/StyleHelper';
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        customStyle: {
            type: Object | String,
            value: {
                height: 200
            }
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        rotateAngle: 0,
        scrollY: true, //默认true
        state: 0, //控件的状态 0:无状态 1:下拉中 2:下拉达到刷新条件 3:下拉刷新中 4:上拉中 5:上拉加载中 6:加载失败
        scrollToTop: true, //是否到顶部了
        scrollToBottom: false, //是否到底部了
    },
    ready: function ready() {
        let style = {
        }
        this.setData({
            selfCustomStyle: _StyleHelper.getPlainStyle(this.data.customStyle),
        })
    },
    /**
     * 组件的方法列表
     */
    methods: {
        //  手指点击
        touchStart: function (e) {
            this.data.touchStartY = e.touches[0].pageY;
            this.data.rotateAngle = 0
            console.log('touchStart=>' + this.data.touchStartY);
            // this.triggerEvent('bindScrollTouchStart');
        },
        // 手指滑动
        touchMove: function (e) {
            var dropDownInterval = (e.touches[0].pageY - this.data.touchStartY);
            this.data.rotateAngle = dropDownInterval * 0 / this.data.headHeightDef * 90;
            if (this.data.rotateAngle > 180) {
                this.data.rotateAngle = 180;
            }
            console.log(dropDownInterval)

        },
        // 手指松开
        touchEnd: function (e) {}
    }
})
