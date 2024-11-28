import axios from "axios";
import {axiosData} from "./Jestzidl"
// 模拟 axios 请求
jest.mock("axios");

test("", () => {
    // 设置模拟的返回数据
    axios.get.mockResolvedValue({data: {success: true}});
    return expect(axiosData()).resolves.toEqual({success: true});
})
