function solution(arr) {
    var i = 2, j = 3;
    var answer = [];
    if(!arr.includes(2)){return [-1];}
    for(var id = arr.indexOf(2); id <= arr.lastIndexOf(2); id++){
        answer.push(arr[id]);
    }
    return answer;
}