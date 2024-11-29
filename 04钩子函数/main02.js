let usersDatabase = [];

function initializeDatabase() {
    usersDatabase = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ];
    console.log('数据库已初始化');
}

function cleanupDatabase() {
    usersDatabase = [];
    console.log('数据库已清理');
}

function addUser(name) {
    const newUser = { id: usersDatabase.length + 1, name };
    usersDatabase.push(newUser);
    return newUser;
}

function getUserById(id) {
    return usersDatabase.find(user => user.id === id);
}

export {
    usersDatabase,
    initializeDatabase,
    cleanupDatabase,
    addUser,
    getUserById,
};
