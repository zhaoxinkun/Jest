import {testFn} from "./main";


// 是否调用
// it("测试toHaveBeenCalled", () => {
//     // mock函数
//     const func = jest.fn()
//     // 传入使用mock函数
//     testFn(func)
//     // 查看是否使用(仅限mock函数)
//     expect(func).toHaveBeenCalled()
// })

// 调用几次?
// it("测试toHaveBeenCalledTimes", () => {
//     // mock函数
//     const func = jest.fn()
//     // 传入使用mock函数
//     testFn(func)
//     // 查看是否使用(仅限mock函数)
//     expect(func).toHaveBeenCalledTimes(1)
// })


// 是否使用特定的函数和符合预期的参数
// it("toHaveBeenCalledWith", () => {
//     // mock函数
//     const func = jest.fn()
//
//     // 传入使用mock函数
//     testFn(func)
//     // 查看是否使用(仅限mock函数)
//     expect(func).toHaveBeenCalledWith("Hello","World" )
// })



// 是否使用特定的函数和符合预期的参数
it("toHaveBeenLastCalledWith", () => {
    // mock函数
    const func = jest.fn()

    // 传入使用mock函数
    testFn(func)
    // 查看是否使用(仅限mock函数)
    expect(func).toHaveBeenLastCalledWith("Hello","World" )
})
