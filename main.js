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
            if(i!==j)
                mulTable += "  "
            }
        }
          if(i<end) {
              mulTable+="\r\n";
          ret
    }
	function getLine(start,end){
	let temp = [];
	for (let i = 0; i<=end-start;i++) {
	temp[i] = getItem(i+start, end);
	}
	return temp;
	}
	
	function getItem(left, right) {
	let temp;
	temp = `${left}*${right}=${left*right}`;
	return temp;
	}
	function multiplyToTable(multiplyTable){
	var result = "";
	for (let i = 0;i < multiplyTable.length;i++){
	for (let j=0;j < multiplyTable[i].length;j++){
	if(i == multiplyTable.length-1 && j == multiplyTable[i].length-1){
	result += multiplyTable[i][j];
	break;
	}else if (multiplyTable[i][j+1]==null){
	result += multiplyTable[i][j]+'\r\n';
	break;
	}else{
	result += multiplyTable[i][j]+" ";
	}
	}
	}
	return result;

}

module.exports = createMulTable;
