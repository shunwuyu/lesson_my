// pages/detail/detail.js
import {
  getDetail,
  GoodsBaseInfo,
  ShopInfo,
  ParamInfo
} from '../../service/detail.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid: 0,
    topImages: [],
    baseInfo: {},
    shopInfo: {},
    detailInfo: {},
    paramInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      iid: options.iid
    })
    this._getDetailData()
  },
  _getDetailData() {
    getDetail(this.data.iid).then(res => {
      const data = res.result;
      const topImages = data.itemInfo.topImages;
      const baseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)
      const shopInfo = new ShopInfo(data.shopInfo);
      const detailInfo = data.detailInfo;
      const paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)
      this.setData({
        topImages,
        baseInfo,
        shopInfo,
        detailInfo,
        paramInfo
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})