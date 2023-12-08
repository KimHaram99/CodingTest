function solution(num_list) {
    var answer = 0;
    for(var i of num_list){
        while(i!==1){
            i = (i % 2) === 0 ? i/2 : (i-1)/2 ; 
            answer++;
        }        
    }
    return answer;
}