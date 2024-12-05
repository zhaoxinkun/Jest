// 模拟类  他一看是类,就自动转为mock fn
jest.mock("./main")

import Util from "./main"

import demoFunc from "./MockClass";


it("测试", () => {
    demoFunc();
    // 检查 Util 是否被实例化
    expect(Util).toHaveBeenCalledTimes(1);

    // 查看 mock 类信息
    console.log(Util.mock)  // 查看 mock 类结构
    console.log(Util.mock.instances[0])  // 查看第一次实例化的对象
    expect(Util.mock.instances[0].af).toHaveBeenCalled()
    expect(Util.mock.instances[0].bf).toHaveBeenCalled()
})
