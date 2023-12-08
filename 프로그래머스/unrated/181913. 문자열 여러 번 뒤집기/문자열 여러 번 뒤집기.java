class Solution {
    public String solution(String my_string, int[][] queries) {
        String answer = my_string;
        for(int[] a : queries){
            String mid = "";
            for(int i = a[1] ; i >= a[0] ; i--){
                mid += answer.charAt(i);
            }
            answer = answer.substring(0,a[0])+
                     mid+
                     answer.substring(a[1]+1);
        }
        return answer;
    }
}