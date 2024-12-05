import axios from "axios"

export const fatchData = (fn) => {
    // 发送请求
    axios.get("http://www.dell-lee.com/react/api/demo.json").then(res => {
        // 使用fn,返回请求结果
        fn(res.data)
    })
}
