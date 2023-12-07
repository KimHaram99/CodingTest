function solution(arr, queries) {
    var answer = arr;
    for(var i of queries){
        for(var j = i[0] ; j<=i[1] ; j++){
            arr[j]++;
        }
    }
    return answer;
}