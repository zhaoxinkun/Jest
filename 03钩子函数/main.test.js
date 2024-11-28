// 导入构造函数
import Dog from './main';

// 测试用例

let dog = null

beforeEach(() => {
    console.log("beforeEach 执行了")
    // 实例化构造函数
    dog = new Dog();
})

afterEach(() => {
    console.log("afterEach is runing")
})

beforeAll(() => {
    console.log("beforeAll is runing")
})
afterAll(() => {
    console.log("afterAll is runing")
})
describe("测试加法", () => {
    test("测试addOne", () => {
        dog.addOne();
        expect(dog.number).toBe(1);
    })
    test("测试addTwo", () => {
        dog.addOne();
        expect(dog.number).toBe(1);
    })
})

describe("测试减法", () => {
    test("测试minusOne", () => {
        dog.minusOne();
        //这里会报错,因为,我们使用的还是同一个dos 的示例对象,所以公用一个number
        expect(dog.number).toBe(-1);
    })

    test("测试minusTwo", () => {
        dog.minusOne();
        //这里会报错,因为,我们使用的还是同一个dos 的示例对象,所以公用一个number
        expect(dog.number).toBe(-1);
    })
})
