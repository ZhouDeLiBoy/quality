//picture-detail.js
//获取应用实例
var api = require('../../utils/api.js')
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    systemInfo: {},
    latest_last_id: 0
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
  }
})
