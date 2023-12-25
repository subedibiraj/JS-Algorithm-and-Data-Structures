function palindrome(str) {
    let straight = str.toLowerCase();
    let tempArr = straight.split("");
    tempArr.reverse();
    let nonStraight = tempArr.join("");
    let regex = /[a-z0-9]/
    tempArr = [];
    for(let i= 0 ; i< straight.length ;i++){
      if(straight[i].match(regex)){
        tempArr.push(straight[i]);
      }
    }
    straight = tempArr.join("");
    tempArr = [];
      for(let i= 0 ; i< nonStraight.length ;i++){
      if(nonStraight[i].match(regex)){
        tempArr.push(nonStraight[i]);
      }
    }
    nonStraight = tempArr.join("");
    if(straight === nonStraight){
      return true;
    }
    else{
      return false;
    }
  }
  
  palindrome("1 eye for of 1 eye.");
  