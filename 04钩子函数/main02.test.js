import { usersDatabase, initializeDatabase, cleanupDatabase, addUser, getUserById } from './main02';

describe('数据库测试示例', () => {

    // 1. 在所有测试之前执行一次，初始化数据库
    beforeAll(() => {
        console.log('beforeAll：所有测试用例执行之前');
        initializeDatabase(); // 初始化数据库
    });

    // 2. 在每个测试之前执行
    beforeEach(() => {
        console.log('beforeEach：每个测试用例执行之前');
        // 清空数据库，避免 `Test User` 影响到其他测试
        // 确保数据库在每个测试之前是干净的
        usersDatabase.length = 0;
        initializeDatabase(); // 再次初始化数据库
    });

    // 3. 在每个测试之后执行
    afterEach(() => {
        console.log('afterEach：每个测试用例执行之后');
        // 清理操作，可以选择清理数据库等
        // 这里为了简单起见，我们不做操作，因为每次 `beforeEach` 都会重新初始化
    });

    // 4. 在所有测试之后执行
    afterAll(() => {
        console.log('afterAll：所有测试用例执行之后');
        cleanupDatabase(); // 清理数据库
    });

    // 第一个测试用例：验证添加用户
    test('should add a new user to the database', () => {
        const newUser = addUser('Charlie');
        expect(newUser).toHaveProperty('name', 'Charlie');
        expect(usersDatabase).toContainEqual({ id: 3, name: 'Charlie' });
    });

    // 第二个测试用例：通过 ID 获取用户
    test('should retrieve a user by ID', () => {
        const user = getUserById(1);
        expect(user).toHaveProperty('name', 'Alice');
    });

    // 第三个测试用例：查找不存在的用户
    test('should not find a non-existing user', () => {
        const user = getUserById(999);
        expect(user).toBeUndefined();
    });

});
