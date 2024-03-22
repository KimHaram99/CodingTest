using System;

public class Solution {
    public int[] solution(string my_string) {
        int[] answer = new int[52];
        
        foreach(char word in my_string){
            int num = word>64 && word<91 ? word-65 : word-71;
            answer[num]++;
        }
        
        return answer;
    }
}