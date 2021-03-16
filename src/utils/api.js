import fetch from './axios'

// axios 的 GET 请求，用 params 选项向后端传递数据
// axios 的 POST 请求，用 data 选项向后端传递数据

// 和后端联调接口，一般只考虑这三件事儿
// 1、是 GET 还是 POST ？
// 2、URL 是多少？
// 3、怎么传参：总共有哪些参数？哪些是必填参数？哪些是非必填？数据类型？


// 获取QQ音乐
export function fetchQqMusic(params) {
  return fetch({
    url: '/soso/fcgi-bin/client_search_cp',
    method: 'GET',
    params
  })
}

// 登录  { username: String, password: String }
export function fetchLogin(data) {
  return fetch({
    url: '/api/v1/user/login',
    method: 'POST',
    data
  })
}

// 商品添加
export function fetchGoodAddOrEdit(data) {
  return fetch({
    url: '/api/v1/good/addOrEdit',
    method: 'POST',
    data
  })
}

// 获取当前系统支持的所有品类
export function fetchAllCates(params) {
  return fetch({
    url: '/api/v1/good/cates',
    method: 'GET',
    params
  })
}

// 商品列表（都是非必填）
// {
//   size: Number,
//   page: Number,
//   cate: String,
//   hot: Boolean,
//   text: String
// }
export function fetchGoodList(params) {
  return fetch({
    url: '/api/v1/good/list',
    method: 'GET',
    params
  })
}

// 删除商品  { id: 商品 _id }
export function fetchGoodDel(params) {
  return fetch({
    url: '/api/v1/good/delete',
    method: 'GET',
    params
  })
}

// 品类列表
// /api/v1/good/cates

// 商品列表
// /api/v1/good/list

// 商品详情
// /api/v1/good/detail

// 商品删除
// /api/v1/good/delete

// 商品编辑与新增
// /api/v1/good/addOrEdit

export default {
  fetchQqMusic,
  fetchLogin,
  fetchGoodAddOrEdit,
  fetchAllCates,
  fetchGoodList,
  fetchGoodDel
}
