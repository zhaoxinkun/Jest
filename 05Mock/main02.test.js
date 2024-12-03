// import {resultFunc} from "./main";


// // 测试mock函数的使用
// it("测试mock函数", () => {
//     // 创建mock函数
//     const func = jest.fn();
//     // 使用
//     resultFunc(func)
//     // 断言测试看看是否调用
//     expect(func).toBeCalled();
//     console.log(func.mock)
// })


// 测试calls属性(调用次数[数组])
// it("测试calls", () => {
//     // 创建mock函数
//     const func = jest.fn();
//     // 使用并传参
//     // 这里是第一次
//     func("123")
//     // 这里是第二次
//     func("123")
//     // 这里是第三次
//     func("123")
//     // 断言测试看看是否调用
//     expect(func).toBeCalled();
//     console.log(func.mock)
//     console.log(func.mock.calls.length)  //2
//     console.log(func.mock.calls[0])  //[]
// })


// // 绑定自定义的 this 上下文----使用bind显示修改
// const customContext = {name: 'Custom'};
//
// // 测试context属性(this)
// it("测试context", () => {
//     // 创建mock函数
//     const func = jest.fn();   //你也可以在此传递箭头函数,修改this
//     const funcBind = func.bind(customContext)
//     // 使用并传参
//     funcBind("123")
//     // 断言测试看看是否调用
//     expect(func).toBeCalled();
//     console.log(func.mock)
//     console.log(func.mock.contexts[0])
// })


// 测试context属性(this)  使用mockImplementationOnce
// it("测试context", () => {
//     // 创建mock函数
//     const func = jest.fn();
//
//     // 使用 mockImplementationOnce 来为每次调用设置不同的上下文
//     func.mockImplementationOnce(function() {
//         this.name = 'First Context';
//     });
//     func.mockImplementationOnce(function() {
//         this.name = 'Second Context';
//     });
//
//     const context1 = {};
//     func.call(context1);
//     console.log(context1.name); // 输出: 'First Context'
//
//     const context2 = {};
//     func.call(context2);
//     console.log(context2.name); // 输出: 'Second Context'
//
//     // 断言测试看看是否调用
//     expect(func).toBeCalled();
//     console.log(func.mock)
// })


// 测试invocationCallOrder (调用次序[数组])
// it("测试测试invocationCallOrder", () => {
//     // 创建mock函数
//     const func = jest.fn();
//     func("123")
//     func("456")
//     func("789")
//     // 断言测试看看是否调用
//     expect(func).toBeCalled();
//     console.log(func.mock)
// })


// 测试result的value (可以自己写)
// it("测试", () => {
//     // 创建mock函数
//     // 方式一 箭头函数的return
//     const func = jest.fn(() => 456);
//
//     // 或方式二
//     // func.mockReturnValue("Hello")
//
//     // 或方式三,链式使用
//
//     // func.mockReturnValue("Hello")        // 第一次设置返回值
//     //     .mockReturnValue("Hello02")      // 第二次设置返回值，覆盖了第一次
//     //     .mockReturnValue("Hello03");     // 第三次设置返回值，覆盖了第二次
//
//     // // 使用 mockReturnValueOnce 来设置每次调用的返回值
//     func.mockReturnValueOnce("Hello")   // 第一次调用返回 "Hello"
//         .mockReturnValueOnce("Hello02") // 第二次调用返回 "Hello02"
//         .mockReturnValueOnce("Hello03"); // 第三次调用返回 "Hello03"
//
//     // 使用
//     func("123")
//     func("456")
//     func("789")
//     // 断言测试看看是否调用
//     expect(func).toBeCalled();
//     console.log(func.mock)
//
// })


// // 测试lastCalls
// it("测试lastCalls", () => {
//     // 创建mock函数
//     // 方式一 箭头函数的return
//     const func = jest.fn(() => 456);
//
//     // // 使用 mockReturnValueOnce 来设置每次调用的返回值
//     func.mockReturnValueOnce("Hello")   // 第一次调用返回 "Hello"
//         .mockReturnValueOnce("Hello02") // 第二次调用返回 "Hello02"
//         .mockReturnValueOnce("Hello03"); // 第三次调用返回 "Hello03"
//
//     // 使用
//     func("123")
//     func("456")
//     func("789")
//     // 断言测试看看是否调用
//     expect(func).toBeCalled();
//     console.log(func.mock)
//
// })


// 测试mockClear
it("测试mockClear", () => {
    // 创建mock函数
    // 方式一 箭头函数的return
    const func = jest.fn(() => 456);

    // // 使用 mockReturnValueOnce 来设置每次调用的返回值
    func.mockReturnValueOnce("Hello")   // 第一次调用返回 "Hello"
        .mockReturnValueOnce("Hello02") // 第二次调用返回 "Hello02"
        .mockReturnValueOnce("Hello03"); // 第三次调用返回 "Hello03"

    // 使用
    func("123")
    func("456")
    func("789")


    // 断言测试看看是否调用
    expect(func).toBeCalled();
    // 没有清除
    console.log(func.mock)
    // 清除函数
    func.mockClear()
    // 清楚后
    console.log(func.mock)

})


// 测试instance

// it("测试", () => {
//     // 创建mock函数
//     const func = jest.fn();
//     func.mockReturnValue("Hello")
//
//     // 使用 ,查看实例,this指向
//     createObject(func)
//     // 断言测试看看是否调用
//     expect(func).toBeCalled();
//     console.log(func.mock)
//
// })
