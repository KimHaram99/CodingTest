function solution(myString, pat) {
    var answer = 0;
    while(myString.includes(pat)){
        answer++;
        myString = myString.slice(myString.indexOf(pat)+1);
    }
    return answer;
}