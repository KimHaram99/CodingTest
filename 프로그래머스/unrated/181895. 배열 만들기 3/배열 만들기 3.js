function solution(arr, intervals) {
    var answer = [];
    for(var i of intervals){
        for(var j = i[0] ; j<= i[1] ; j++){
            answer.push(arr[j]);
        }
    }
    return answer;
}