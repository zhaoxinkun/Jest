// 测试函数

// 基本匹配器

// toBe  相当于===
test('toBe 示例', () => {
    expect(2 + 2).toBe(4); // 通过
});

// 断言值是否 深度相等（适用于对象和数组）
test('toEqual 示例', () => {
    expect({ a: 1 }).toEqual({ a: 1 }); // 通过
});

// .not.toBe 检查实际值与预期值 不相等
test('should not be equal to 5', () => {
    expect(3 + 2).not.toBe(6); // 成功，因为 3 + 2 不等于 6
});


// 布尔匹配器

// 是否是Null
test('toBeNull 示例', () => {
    expect(null).toBeNull(); // 通过
});

// 是否是Undefined
test('toBeUndefined 示例', () => {
    expect(undefined).toBeUndefined(); // 过
});

// 是否定义
test('toBeDefined 示例', () => {
    expect(42).toBeDefined(); // 通过
});

// 是否为真
test('toBeTruthy 示例', () => {
    expect(true).toBeTruthy(); // 通过
    expect(1).toBeTruthy(); // 通过
});

// 是否为假
test('toBeFalsy 示例', () => {
    expect(false).toBeFalsy(); // 通过
    expect(0).toBeFalsy(); // 通过
});


// 数字匹配器

// 比某个数字大
test('value should be greater than 10', () => {
    const value = 15;
    expect(value).toBeGreaterThan(10); // 成功，因为 15 大于 10
});

// 大于等于
test('toBeGreaterThanOrEqual 示例', () => {
    expect(10).toBeGreaterThanOrEqual(10); // 通过
});


// 比某个数字小
test('value should be less than 10', () => {
    const value = 5;
    expect(value).toBeLessThan(10); // 成功，因为 5 小于 10
});

// 小于等于
test('toBeLessThanOrEqual 示例', () => {
    expect(10).toBeLessThanOrEqual(10); // 通过
});

// 浮点数
test('should be close to the expected value', () => {
    const actual = 0.1 + 0.2;
    expect(actual).toBeCloseTo(0.3); // 成功，因为 0.1 + 0.2 和 0.3 非常接近
});


// 字符串匹配器

test('should match substring', () => {
    const text = 'Hello, world!';
    expect(text).toMatch('world'); // 成功，因为 text 包含 "world"
});

test('should match a regular expression', () => {
    const text = 'Hello, world!';
    expect(text).toMatch(/world/); // 成功，因为 text 匹配正则表达式 /world/
});

// 测试异步函数
test('resolves to lemon', () => {
    // make sure to add a return statement
    return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
});

test('rejects to octopus', () => {
    // make sure to add a return statement
    return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
        'octopus',
    );
});


test('should not be equal to 5', () => {
    expect(3 + 2).not.toBe(6); // 成功，因为 3 + 2 不等于 6
});


// 数组和可迭代对象匹配器

// 是否包含
test('array should contain the specified item', () => {
    const colors = ['red', 'green', 'blue'];
    expect(colors).toContain('green'); // 成功，因为数组中包含 "green"
});

// 断言数组中是否包含与某个对象深度相等的元素
test('toContainEqual 示例', () => {
    expect([{ a: 1 }, { b: 2 }]).toContainEqual({ a: 1 }); // 通过
});

// 断言数组、字符串或类似对象的长度是否符合预期
test('toHaveLength 示例', () => {
    expect([1, 2, 3]).toHaveLength(3); // 通过
});


// 异常匹配器
test('function should throw an error', () => {
    const throwError = () => {
        throw new Error('Something went wrong');
    };
    expect(throwError).toThrow(); // 成功，因为 throwError 抛出了一个异常
});
