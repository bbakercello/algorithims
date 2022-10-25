let sum =0
var romanToInt = function(s){
    for(i=0;i<s.length;i++){
        if(s[i] == 'I' && s[i+1] != 'I' && s[i-1] != 'I'){
            if(s[i+1]== 'V'){
                sum += 4
                i += 1
            }
            else if(s[i+1]== 'X'){
                sum += 9
                i += 1
            }
        }

        else if(s[i] == 'X' && s[i+1] != 'X' && s[i-1] != 'X'){
            if(s[i+1]== 'L'){
                sum += 40
                i += 1
            }
            else if(s[i+1]== 'C'){
                sum += 90
                i += 1
            }
        }

        else if(s[i] == 'C' && s[i+1] != 'C' && s[i-1] != 'C'){
            if(s[i+1]== 'D'){
                sum += 400
                i += 1
            }
            else if(s[i+1]== 'M'){
                sum += 900
                i += 1
            }
        }
    
        else if(s[i] == 'I'){
            sum += 1
            
            
        }
        else if(s[i]== 'V'){
            sum += 5
            
        }
        else if(s[i]== 'X'){
            sum += 10
        }
        else if(s[i] == 'L'){
            sum += 50
        }
        else if(s[i] == 'C'){
            sum += 100
        }
        else if(s[i] == 'D'){
            sum += 500
        }
        else{
            sum += 1000
        }
       
    } console.log(sum)

}


romanToInt('LVIII')