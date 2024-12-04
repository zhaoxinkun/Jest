import axios from 'axios';
import {fetchData} from "./demo";

jest.mock('axios');

it("测试fatchData", () => {
    axios.get.mockResolvedValue({ data: "function(){return '123'}" });
    return fetchData().then(
        data => expect(eval(data)).toEqual("123")
    )
})
