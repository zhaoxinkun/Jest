import { resultFunc } from "./main"

// 错误的,无返回值
// function callback() {
//     console.log("Hello World!")
// }

// 通过
function callback() {
    return "Hello World!"
}

it.only("测试函数的调用", () => {
    // 测试函数的调用
    expect(resultFunc(callback)).toBe("Hello World!")
})
