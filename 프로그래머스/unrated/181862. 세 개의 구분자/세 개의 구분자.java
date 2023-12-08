class Solution {
    public String[] solution(String myStr) {
        String[] arr = {"a","b","c"};
        
        for(String i : arr){
            myStr = myStr.replace(i," ");
        }
        myStr = myStr.trim();

        return myStr.isEmpty() ? new String[]{"EMPTY"} : myStr.split(" +");
    }
}
