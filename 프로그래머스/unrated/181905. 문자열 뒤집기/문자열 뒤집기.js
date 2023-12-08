const solution = (my_string, s, e) => 
                  my_string.substring(0,s) +
                  [...my_string.substring(s,e+1)].reverse().join('') +
                  my_string.substring(e+1);
