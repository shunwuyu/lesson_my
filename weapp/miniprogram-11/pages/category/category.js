// pages/category/category.js
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from '../../service/category.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    categoryData: {
    },
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    this._getData()
  },
  _getData() {
    this._getCategory()

  },
  _getCategory() {
    getCategory().then(res => {
      // console.log(res);
      const categories = res.data.category.list;
      const categoryData = {}
      for (let i = 0; i < categories.length; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
        }
      }
      this.setData({
        categories: res.data.category.list,
        categoryData: categoryData
      })
      // console.log('//////')
      this._getSubcategory(0)
      this._getCategoryDetail(0)
    })
  },
  _getCategoryDetail(currentIndex) {
    // 1.获取对应的miniWallKey
    const miniWallKey = this.data.categories[currentIndex].miniWallkey;

    // 2.请求数据类别的数据
    this._getRealCategoryDetail(currentIndex, miniWallKey, 'pop');
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'new');
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'sell');
  },
  _getRealCategoryDetail(index, miniWallKey, type) {
    getCategoryDetail(miniWallKey, type).then(res => {
      // 1.获取categoryData
      const categoryData = this.data.categoryData;

      // 2.修改数据
      categoryData[index].categoryDetail = res;

      // 3.修改data中的数据
      this.setData({
        categoryData: categoryData
      })
    })
  },
  _getSubcategory(currentIndex) {
    // 1.获取对应的maitkey
    const maitkey = this.data.categories[currentIndex].maitKey;
    getSubcategory(maitkey).then(res => {
      const tempCategoryData = this.data.categoryData;
      tempCategoryData[currentIndex].subcategories = res.data.list;
      this.setData({
        categoryData: tempCategoryData
      })
    })
  },
  menuClick(e) {
    const currentIndex = e.detail.currentIndex;
    this.setData({
      currentIndex
    })

    // 2.请求对应currentIndex的数据
    this._getSubcategory(currentIndex);
    // 3.请求对应的currentIndex的详情数据
    this._getCategoryDetail(currentIndex)
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