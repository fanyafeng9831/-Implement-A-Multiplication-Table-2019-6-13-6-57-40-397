const createMulTable = require('../main');

it ('should return multiply table from 2 to 4 when call createMulTable given 2 to 4', () => {
    expect(createMulTable(2, 4)).toBe("2*2=4\r\n" +
                                          "2*3=6  3*3=9\r\n" +
                                          "2*4=8  3*4=12  4*4=16");
});

it ('should return multiply table from 2 to 4 when call createMulTable given 2 to 4', () => {
    expect(createMulTable(9, 1)).toBe("输入的起始值大于结束值");
});

it ('should return multiply table from 2 to 4 when call createMulTable given 2 to 4', () => {
    expect(createMulTable(6, 6)).toBe("6*6=36");
});


it ('should return multiply table from 2 to 4 when call createMulTable given 2 to 4', () => {
    expect(createMulTable(1.1, 1.1)).toBe("输入的数据类型错误");
});

it ('should return multiply table from 2 to 4 when call createMulTable given 2 to 4', () => {
    expect(createMulTable(6, "")).toBe("输入的数据类型错误");
});

it ('should return multiply table from 2 to 4 when call createMulTable given 2 to 4', () => {
    expect(createMulTable(3, 1001)).toBe("输入数字超出范围");
});

