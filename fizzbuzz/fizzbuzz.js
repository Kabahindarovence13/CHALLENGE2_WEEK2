function fizzBuzz(list1, list2) {
    let combinedlist= list1.concat(list2);
           let output='';
           let length = combinedlist.length;
           
           if(length%3 == 0 && length % 5 == 0){
               output += 'Fizzbuzz';
           }else if(length%3==0){  
            output += 'Fizz';
           }else if(length%5==0){  
            output += 'Buzz';
           }else{  
            output +='' + length;
           }
        return output;
}

module.exports = fizzBuzz;
