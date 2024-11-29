// 导入构造函数
import Dog from './main';

// 测试用例

let dog = null

// 用于在所有测试用例执行之前执行一次，通常用来进行全局的初始化工作，比如创建数据库连接、启动服务器等
beforeAll(() => {
    // 进行全局设置或初始化，比如数据库连接等
    console.log('在所有测试用例之前执行');
})

// 在每个测试用例执行之前执行，适合用于每个测试之间都需要进行的操作，比如初始化对象、清空数据库等
beforeEach(() => {
    console.log('在每个测试用例之前执行');
    // 每个测试之前的设置，比如清空数据、重置计数器等
    // 实例化构造函数
    dog = new Dog();
})

// 在所有测试用例执行完毕后执行一次，适用于进行清理工作，比如关闭数据库连接、停止服务器等
afterAll(() => {
    console.log('在所有测试用例之后执行');
    // 进行全局清理，比如关闭数据库连接等
})


afterEach(() => {
    console.log('在每个测试用例之后执行');
    // 每个测试之后的清理工作，比如删除临时文件、清理 mock 等
})



describe("测试加法", () => {
    test("测试 addOne", () => {
        dog.addOne();
        expect(dog.number).toBe(1);
    })
    test("测试 addTwo", () => {
        dog.addTwo();
        expect(dog.number).toBe(2);
    })
})

describe("测试减法", () => {
    test("测试minusOne", () => {
        dog.minusOne();
        //这里会报错,因为,我们使用的还是同一个dos 的示例对象,所以公用一个number
        expect(dog.number).toBe(-1);
    })

    test("测试minusTwo", () => {
        dog.minusTwo();
        //这里会报错,因为,我们使用的还是同一个dos 的示例对象,所以公用一个number
        expect(dog.number).toBe(-2);
    })
})
