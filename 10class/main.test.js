import Util from "./main"

let util = null;

beforeAll(() => {
    util = new Util()
})

it("测试类", () => {
    expect(util.af("akun", "akun02")).toEqual("akunakun02")
})
