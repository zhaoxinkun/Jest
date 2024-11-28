import {axiosData} from "./asyncFn";

// 使用done
test("axiosData 为", (done) => {
    // 回调
    axiosData((data) => {
        expect(data).toEqual({
            success: true,
        })
        done()
    })
})
