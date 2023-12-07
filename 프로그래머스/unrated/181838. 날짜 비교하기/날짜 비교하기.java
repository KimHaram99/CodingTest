class Solution {
    public int solution(int[] date1, int[] date2) {
        String answer1 = ""+date1[0]+date1[1]+date1[2];
        String answer2 = ""+date2[0]+date2[1]+date2[2];
        
        return (Integer.parseInt(answer1)-Integer.parseInt(answer2))<0?1:0;
    }
}