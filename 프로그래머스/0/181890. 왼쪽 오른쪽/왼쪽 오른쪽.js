function solution(str_list) {
    // 배열에서 문자를 발견하면 리턴하는 반복문
    for (let i=0 ; i < str_list.length ; i++){
        if (str_list[i] == "l") return str_list.slice(0,i);
        if (str_list[i] == "r") return str_list.slice(i+1);        
    }
    
    return [];
}