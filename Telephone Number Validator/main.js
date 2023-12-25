function telephoneCheck(str) {
    let regex = /[0-9]/;
    let temp = [];
    if(str[0] === "-" || str[str.length -2] ==="-"){
      return false;
    }
  
   
    for(let i =0 ; i < str.length ; i++){
      if(str[i] === "?"){
        return false;
      }
      if(str[i] === "(" && str[i+4]!== ")"){
        return false;
      }
        if(str[i] === ")" && str[i-4] !=="("){
          return false;
          }
      else{
      if(str[i].match(regex)){
        temp.push(str[i]);
      }
    }
    }
    console.log(temp);
    if(temp.length === 10 || temp.length === 11){
      if(temp[0]!== "1" && temp.length === 11){
        return false;
      }
      return true;
    }
    else{
      return false;
    }
  }
  
  telephoneCheck("55 55-55-555-5") ;