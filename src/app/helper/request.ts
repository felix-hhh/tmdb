import axios from "axios"

axios.defaults.baseURL = ''

const instance = axios.create({
    timeout: 1000 * 60 * 2,
    headers: {
        'Content-Type': 'application/json'
    }
})

//拦截器
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

/**
 * 发送post请求
 * @param url url
 * @param params 请求参数
 * @returns 
 */
const sendPost = (url: string, params?: any) => {
    if (params == null) {
        params = {}
        return instance.post(url, params).then(res => res.data)
    }
}

export default{
    sendPost
}