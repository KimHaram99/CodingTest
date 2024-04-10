function solution(arr, query) {
    for (let i in query) {
       arr = (i % 2 == 0) ? arr.slice(0,query[i]+1) : arr.slice(query[i])
    }
    
    return arr;
}