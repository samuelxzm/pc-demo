import axios from 'axios'


// // 请求拦截器
// axios.interceptors.request.use(
//   config => {
//   let cancel
//   // 设置cancelToken对象
//     config.cancelToken = new axios.CancelToken(function(c) {
//       cancel = c
//     })
//     // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
//     stopRepeatRequest(reqList, config.url, cancel, `${config.url} 请求被中断`)
//     return config
//   },
//   err => Promise.reject(err)
// )

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 增加延迟，相同请求不得在短时间内重复发送
    console.log(response)
    if(!!response.data&&response.data.code=='-1'){
        alert("未登录")
    }

  },
  error => {

      console.log(error.message);

  }
)
export default axios