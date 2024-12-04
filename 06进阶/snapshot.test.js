import { generateConfig, generateConfig02 } from "./snapshot";

// 测试用例
it("测试generateConfig", () => {
  // 测试
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    {
      "domain": "localhost",
      "port": 8088,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

// // 测试用例
it("测试generateConfig02", () => {
  // 测试
  expect(generateConfig02()).toMatchInlineSnapshot(
    {
      server: "http://localhost:3000",
      port: 8088,
    },
    `
    {
      "domain": "localhost",
      "port": 8088,
      "server": "http://localhost:3000",
    }
  `
  );
});
