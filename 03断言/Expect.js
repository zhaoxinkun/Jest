// expect函数 params-- 一个函数的返回值作为参数
//
function expect(actual) {
    return {
        // tobe匹配器的实现   params--期望值
        toBe(expected) {
            // 如果你的返回值和期望值不同
            if (actual !== expected) {
                // 抛出异常
                throw new Error(`Expected ${actual} to be ${expected}`);
            }
            console.log('✔ toBe passed');
        }
    };
}

// Test cases
try {
    expect(2 + 2).toBe(4); // ✔ toBe passed
} catch (error) {
    console.error(error.message);
}
