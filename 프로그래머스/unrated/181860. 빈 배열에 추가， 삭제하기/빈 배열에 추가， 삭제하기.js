function solution(arr, flag) {
    var answer = [];
    for(var i in flag){
        if(flag[i]){
            for(var j = 0 ; j < arr[i]*2 ; j++){
                flag[i] ? answer.push(arr[i]) : null;
            }
        } else {
            answer.splice(-arr[i]);
        }
    }
    return answer;
}