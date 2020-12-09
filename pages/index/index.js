//index.js
//获取应用实例
// 0 引入用来 发送请求的 方法
import { request } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    cateList:[],
    floorList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1 发送一部请求获取轮播图数据
    /* var reqTask = wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (result)=>{
        this.setData({
          swiperList: result.data.message
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    }); */
    // 2 使用 es6 的Promise 优化异步请求
    this.getSwiperList();
    // 获取首页分类导航数据
    this.getCateList();
    this.getFloorList();
  },
  // 获取首页轮播图数据
  getSwiperList() {
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    .then(result=>{
      this.setData({
        swiperList: result.data.message
      })
    })
  },
  // 获取首页分类导航数据
  getCateList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(result=>{

      this.setData({
        cateList: result.data.message
      })
    })
  },
  // 获取首页楼层数据
  getFloorList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
    .then(result=>{

      this.setData({
        floorList: result.data.message
      })
    })
  },

})