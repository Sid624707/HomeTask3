function getMiddle(str) {
    var length = str.length;
    // var res="";
    // if(length%2==0){
    //   res+=str[length/2-1]+str[length/2];
    // }else{
    //   res+=str[Math.floor(length/2)];
    // }
    return length % 2 == 0 ? str[length / 2 - 1] + str[length / 2] : str[Math.floor(length / 2)];
}

var str = "middle";
console.log(getMiddle(str))