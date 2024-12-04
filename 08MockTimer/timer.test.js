import {timer} from "./timer"

// mock一个定时器
jest.useFakeTimers()


// it("测试timer", (done) => {
//     timer(() => {
//         expect(2).toBe(1)
//         done()
//     })
//
// })

// 测试mock的定时器
// it("测试timer", () => {
//     // mock一个函数
//     const fn = jest.fn()
//     // timer传递函数
//     timer(fn)
//     // 运行所有的timer
//     jest.runAllTimers()
//     // 测试fn的执行次数
//     expect(fn).toHaveBeenCalledTimes(1)
// })

// 测试两个timer
// it("测试timer", () => {
//     // mock一个函数
//     const fn = jest.fn()
//     // timer传递函数
//     timer(fn)
//     // 运行所有的timer
//     jest.runAllTimers()
//     // 测试fn的执行次数
//     expect(fn).toHaveBeenCalledTimes(2)
// })

// 测试两个,执行一个
// it("测试timer", () => {
//     // mock一个函数
//     const fn = jest.fn()
//     // timer传递函数
//     timer(fn)
//     // 运行所有的timer
//     jest.runOnlyPendingTimers()
//     // 测试fn的执行次数
//     expect(fn).toHaveBeenCalledTimes(1)
// })


// // 测试加速
it("测试timer", () => {
    // mock一个函数
    const fn = jest.fn()
    // timer传递函数
    timer(fn)
    // 运行所有的timer
    jest.advanceTimersByTime(3000)
    // 测试fn的执行次数
    expect(fn).toHaveBeenCalledTimes(2)
})
