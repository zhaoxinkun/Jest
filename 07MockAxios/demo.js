import axios from 'axios'

// 在这里,我们暴露一个函数
export const fetchData = () => {
   return  axios.get("/").then(response => response.data)
}
