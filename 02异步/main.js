import axios from 'axios';

// 返回一个promise
export const axiosData = () => {
    return axios.get('http://www.dell-lee.com/react/api/demo.json')
        .then((res) => res.data)  // 返回响应的数据
        .catch((error) => {
            throw new Error('Error fetching data');  // 如果请求失败，抛出错误
        });
};
