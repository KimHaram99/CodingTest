using System;

public class Solution {
    public int[] solution(string my_string) {
        int[] answer = new int[52];
        
        foreach(char word in my_string){
            int num = (int)word>64 && (int)word<91 ? (int)word-65 : (int)word-71;
            answer[num]++;
        }
        
        return answer;
    }
}