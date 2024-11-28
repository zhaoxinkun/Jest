import {add, minus, multiply, divide} from "./main";

// 测试加法
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

// 测试减法
test('minus 2 - 1 to equal 1', () => {
    expect(minus(2, 1)).toBe(1);
});

// 测试乘法
test('multiply 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
});

// 测试除法
test('divide 2 / 2 to equal 1', () => {
    expect(divide(2, 2)).toBe(1);
});
