//index.js
//获取应用实例
var api = require('../../utils/api.js')
var util = require('../../utils/util.js')
var app = getApp()
Page({
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/page/user?id=123',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  },
  data: {
    systemInfo: {},
    navbar: ['动态', '美图'],
    currentNavbar: '0',
    imgList: [
      '/images/index/index1.png',
      '/images/index/index2.png',
      '/images/index/index3.png',
      '/images/index/index4.png',
      '/images/index/index5.png'
    ],
    list: [],
    hot_last_id: 0,
    latest_list: [],
    latest_last_id: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    var feed = util.getData0();
    var feed_data = feed.data;
    app.getSystemInfo(function(res) {
      that.setData({
        systemInfo: res,
        latest_list:feed_data
      })
    })
  },  
  /**
   * 切换 navbar
   */
  swichNav (e) {
    var index = e.currentTarget.dataset.idx;
    this.setData({
      currentNavbar: index
    })
    if(index == 0){
      if (this.data.latest_list.length == 0) {
            this.pullUpLoadLatest()
          }
    }else if(index == 1){
      if (this.data.latest_list.length == 0) {
            this.pullUpLoadLatest()
          }
    }else if(index == 2){
      if (this.data.latest_list.length == 0) {
            this.pullUpLoadLatest()
          }
    }
  },
    /**
   * 下拉刷新
   */
  onPullDownRefresh () {
    switch (this.data.currentNavbar) {
      case '0':
        this.setData({
          list: [],
          hot_last_id: 0
        })
        this.pullUpLoad()
        break
      case '1':
        this.setData({
          latest_list: [],
          latest_list_id: 0
        })
        this.pullUpLoadLatest()
        break
      case '2':
        wx.stopPullDownRefresh()
        break
    }
  },
  /**
   * [推荐]上拉刷新
   */
  pullUpLoad () {
    wx.showNavigationBarLoading();
    var feed = util.getData0();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      latest_list:feed_data
    });
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },/**
   * [最新]上拉刷新
   */
  pullUpLoadLatest () {
    wx.showNavigationBarLoading()
    var feed = util.getData0();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      latest_list:feed_data
    });
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
  },  
  /**
   * 点击跳转详情页
   */
  onItemPictureClick (e) {
    var targetUrl = api.PAGE_PICTURE_DETAIL
    console.log(e.currentTarget.dataset.rowId);
    //if (e.currentTarget.dataset.rowId != null)
    //targetUrl = targetUrl + '?rowId=' + e.currentTarget.dataset.rowId
    wx.navigateTo({
      url: targetUrl
    })
  },
  onItemDynamicClick (e) {
    var targetUrl = api.PAGE_DYNAMIC_DETAIL
    console.log(e.currentTarget.dataset.rowId);
    //if (e.currentTarget.dataset.rowId != null)
    //targetUrl = targetUrl + '?rowId=' + e.currentTarget.dataset.rowId
    wx.navigateTo({
      url: targetUrl
    })
  }
})
