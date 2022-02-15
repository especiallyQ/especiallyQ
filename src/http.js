import axios from 'axios'
import { Loading, Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
let loadingInstance = ''
axios.defaults.baseURL='http://127.0.0.1:8088'
//开始加载动画
function startLoading() {
    loadingInstance = Loading.service({
        //是否显示动画
        lock: true,
        //显示文字
        text: '拼命加载中......',
        background: 'rgba(0,0,0,7)'
    })

}
//关闭加载动画
function endLoading() {
    loadingInstance.close()
}


//请求拦截
axios.interceptors.request.use((config) => {
    NProgress.start()
    //开始加载动画
    startLoading();
    //判断是否存有token，如果有将其放入请求头的Authorization字段发送至服务端进行验证
    if (sessionStorage.eleToken) {
        config.headers.Authorization = sessionStorage.eleToken
    }
    return config
}), error => {
    //关闭加载动画
    endLoading()
    return Promise.reject(error)
}


//响应拦截
axios.interceptors.response.use(response => {
    NProgress.done()
    //关闭加载动画
    endLoading()

    return response;


}), error => {
    endLoading()
    Message.error(error.response.data)
    return Promise.reject(error)
}

export default axios