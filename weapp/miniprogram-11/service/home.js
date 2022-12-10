// 基于 network request 方法 
import request from './network.js'
// getMultiData 向外暴露 
export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
} 

export function getProduct(type, page) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://www.fastmock.site/mock/3e71828f1ed0a442164c8f3bb947f6ec/weipiao/list',
      success: (data) => {
        resolve(data)
      }
    })
  })
  // return request({
  //   // url: '/home/data',
  //   url: 'https://www.fastmock.site/mock/3e71828f1ed0a442164c8f3bb947f6ec/weipiao/list',
  //   data: {
  //     type,
  //     page
  //   }
  // })
}