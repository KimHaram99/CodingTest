function solution(n, slicer, num_list) {
    let answer = [];
    let s, e, c = 1 ;
    
    if (n==1) {s=0; e=slicer[1];}
    if (n==2) {s=slicer[0]; e=num_list.length-1;}
    if (n>2) {s=slicer[0]; e=slicer[1];}
    if (n==4) c=slicer[2];    
    
    for (let i=s ; i<=e ; i+=c ) {answer.push(num_list[i]);}
    
    
    return answer;
}