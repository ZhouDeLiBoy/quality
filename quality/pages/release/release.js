//release.js
Page({
  data: {
    imageList: []
  },
  onLoad: function () {
  },
  chooseimage: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#CED63A",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },

  chooseWxImage: function (type) {
   var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      count: 4,
      success: function (res) {
        console.log(res);
        that.setData({
          imageList: res.tempFilePaths,
        })
      }
    })
  },
  onRelease:function(){
    console.log("发布动态");
  }
})
