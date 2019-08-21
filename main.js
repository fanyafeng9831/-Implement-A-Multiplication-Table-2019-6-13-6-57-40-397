function createMulTable (start, end) {
    var checkResult = checkNum(start, end);
    if(checkResult!=="Success"){
        return checkResult;
    }else{
        return getMulTable(start, end);
    }
}


function checkNum(start, end){
    var checkResult;
    if(!(Number.isInteger(start) && Number.isInteger(end))){
        checkResult = "输入的数据类型错误";
    }else if(start > end){
        checkResult = "输入的起始值大于结束值";
    }else if(start > 1000 ||end > 1000){
        checkResult = "输入数字超出范围";
    }else {
        checkResult = "Success";
    }
 return checkResult;
}

function getMulTable(start, end){
    var mulTable = [];
    for(var i=start; i<=end; i++){
        for (var j=start; j<=i; j++){
            mulTable+=j+"*"+i+"="+i*j;
            if(i!==j){
                mulTable += "  "
            }
        }
          if(i<end) {
              mulTable+="\r\n";
          }
    }
    return mulTable;
}

module.exports = createMulTable;
