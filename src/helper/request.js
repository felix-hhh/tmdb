const axios = require("axios");

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const tokenStr = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTRkN2FmNjc5NjhjMGVjYzM3MmI2NTA4YjY1YTU3YSIsInN1YiI6IjY1OWJiNmFkYzUwYWQyMDA5NTRlYmRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.elEQhKP7XzBpTRSO7AR6qIDQKibRLtnLdXyLDdKx-XM'

const instance = axios.create({
    timeout: 1000 * 60 * 2,
    headers: {
        'Content-Type': 'application/json'
    }
})

//拦截器
instance.interceptors.request.use(
    config => {
        const token = tokenStr !== undefined ? `bearer ${tokenStr}` : '';
        if (token !== '' && token !== undefined) {
            config.headers.authorization = token;
        }
        console.log(`请求地址：${config.url}`  );
        console.log(config.params);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
/**
 * 发送 Get 请求
 * @param url 请求地址
 * @param params 请求参数
 * @returns
 */
const sendGet = (url, params) => {
    if (params == null) {
        params = {};
    }
    return instance.get(url, {params}).then(res => res.data);
};

/**
 * 发送post请求
 * @param url url
 * @param params 请求参数
 * @returns
 */
const sendPost = (url, params) => {
    if (params == null) {
        params = {}
        return instance.post(url, params).then(res => res.data)
    }
}

module.exports ={
    sendGet,
    sendPost
}