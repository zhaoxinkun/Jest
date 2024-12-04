// 导出一个配置函数,返回一个对象
export const generateConfig = () => {
    return {
        server: "http://localhost",
        port: 8088,
        domain: "localhost",
        time: new Date()
    }
}
//
export const generateConfig02 = () => {
    return {
        server: "http://localhost:3000",
        port: 8088,
        domain: "localhost",
    }
}
