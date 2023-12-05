function solution(a, b, c, d) {
    var answer = {};
    
    [a,b,c,d].forEach(num => { answer[num] = (answer[num] || 0) + 1; });
    var keys = Object.keys(answer);

    if(keys.length === 1){ return 1111*(+keys[0]); }
    
    if(keys.length === 2){
        var num1 = +keys[0], num2 = +keys[1];
        if(answer[num1]===3 || answer[num2]===3){
            var p = answer[num1] === 3 ? num1 : num2;
            var q = answer[num1] === 3 ? num2 : num1;
            return (10*p+q)**2;
        }
        return (num1+num2)*Math.abs(num1-num2);
    }
    
    if(keys.length === 3){
        var num1 = +keys[0], num2 = +keys[1], num3 = +keys[2];
        return  answer[num1] === 2 ? num2*num3 :
                answer[num2] === 2 ? num1*num3 : num1*num2 ;
        
    }
    return Math.min(a, b, c, d);
}