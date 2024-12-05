import {fatchData} from "./done";
import axios from "axios";

it("测试done 异步函数", (done) => {
    // 调用请求函数
    fatchData((data) => {
        // 拿到结果,匹配内容
        expect(data).toEqual({
            success: true
        })
        done();
    })
})
