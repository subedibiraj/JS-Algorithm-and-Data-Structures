function rot13(str) {
    let regex = /[A-Z]/;
    let temp = [];
    for(let i = 0 ; i< str.length ; i++){
      if(str[i].match(regex)){
        if((String.fromCharCode(str.charCodeAt(i) - 13)).match(regex)){
          temp.push(str.charCodeAt(i) - 13)
        }
        else{
          temp.push(str.charCodeAt(i) + 13);
        }
      }
      else{
        temp.push(str.charCodeAt(i));
      }
    }
    return(String.fromCharCode(...temp));
    console.log(temp);
    return str;
  }
  
  rot13("SERR PBQR PNZC");