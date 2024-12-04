// export const timer = (fn) => {
//     setTimeout(() => {
//         fn()
//     }, 3000)
// }

// 两次
export const timer = (fn) => {
    setTimeout(() => {
        fn()
        setTimeout(() => {
            fn()
        }, 5000)
    }, 3000)
    setTimeout(() => {
        fn()
    }, 2000)
}


// 一次
// export const timer = (fn) => {
//     setTimeout(() => {
//         fn()
//         setTimeout(() => {
//             fn()
//         }, 5000)
//         setTimeout(() => {
//             fn()
//         }, 2000)
//     }, 3000)
// }
