//user.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    messages:[
      {
        groupName:"收藏",
        icon:"/images/user/collection.png",
        rightImage:"/images/tip.png"
      },
      {
        groupName:"动态",
        icon:"/images/user/dynamic.png",
        rightImage:"/images/tip.png"
      },
      {
        groupName:"粉丝",
        icon:"/images/user/fans.png",
        rightImage:"/images/tip.png"
      }
    ]
  },
  onItemClick0:function(){
         console.log(0)
  },
  onItemClick1:function(){
         console.log(1)
  },

  onItemClick2:function(){
         console.log(2)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
