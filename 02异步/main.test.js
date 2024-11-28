import axios from "axios";
import {axiosData} from "./main";

// 模拟 axios 请求
jest.mock("axios");

// 使用async 解决异步函数测试
test.only("axiosData 获取数据", async () => {
    // 设置模拟的返回数据
    axios.get.mockResolvedValue({data: {success: true}});

    // 使用 async/await 处理异步函数
    const data = await axiosData();  // 假设 axiosData 内部可以直接返回 Promise
    expect(data).toEqual({success: true});
});
