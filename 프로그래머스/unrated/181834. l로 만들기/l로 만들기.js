function solution(myString) {
    var answer = [...myString].map(a => a.charCodeAt(0) < 'l'.charCodeAt(0) ? 'l' : a).join('');
    
    return answer;
}