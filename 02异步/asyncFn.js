import axios from "axios"

// 异步函数
export const axiosData = (fn) => {
    axios.get("http://www.dell-lee.com/react/api/demo.json").then((res) => {
        fn(res.data)
    })
}
