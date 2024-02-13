/* 91보다 작으면 대문자 */
function solution(my_string) {
    var answer = '';
    var str = [...my_string];
    for(var word of str){
        word.charCodeAt() < 91 ? answer += word.toLowerCase() : 
                                 answer += word.toUpperCase() ;
    }
    return answer;
}