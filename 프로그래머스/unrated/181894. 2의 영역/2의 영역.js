function solution(arr) {
    var start = arr.indexOf(2), end = arr.lastIndexOf(2);
    var answer = [];
    if(!arr.includes(2)){return [-1];}
    for(var id = start; id <= end; id++){
        answer.push(arr[id]);
    }
    return answer;
}