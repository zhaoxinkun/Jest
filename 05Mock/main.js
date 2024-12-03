//一个函数,接收一个函数,并执行这个函数
const resultFunc = (callBackFn) => {
    return callBackFn()
}

const createObject = (calssItem) => {
    new calssItem()
}

export {
    resultFunc, createObject
}
