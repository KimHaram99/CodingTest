function solution(array) {
    var answer = {};
    if (array.length == 1) return array[0];
    
    array.forEach(num => {
        answer[num] = (answer[num] || 0) + 1;
    });
    
    var maxFrequency = 0;
    var maxElement = null;
    
    for (var num in answer) {
        if (answer[num] == maxFrequency) maxElement = -1;
        else if (answer[num] > maxFrequency) {
            maxFrequency = answer[num];
            maxElement = num;
        }
    }
    return +maxElement;
}
