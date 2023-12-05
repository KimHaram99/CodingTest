function solution(binomial) {
    var answer = binomial.split(' ');
    answer[0]=+answer[0];
    answer[2]=+answer[2];
    return answer[1]==='+'? answer[0]+answer[2] : 
           answer[1]==='-'? answer[0]-answer[2] : answer[0]*answer[2];
}