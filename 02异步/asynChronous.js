async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("数据加载完成"), 1000);
    });
}

async function run() {
    try {
        const result = await fetchData();
        console.log(result);

        const nextResult = "下一步操作";
        console.log(nextResult);
    } catch (err) {
        console.error(err);
    }
}

run();
