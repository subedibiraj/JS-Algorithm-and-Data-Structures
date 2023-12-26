function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    
    let totalcid = 0;
  
    let currency = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  
  
    //Total cash in drawer
    for(let i=0; i<cid.length ; i++){
      totalcid = totalcid + cid [i][1];
    }
    
    if(change > totalcid){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    if(change === totalcid){
      return {status: "CLOSED", change: cid};
    }
   
  let coinInReg = [];
  let temp= [];
  for(let i = 0; i< cid.length ; i++){
    coinInReg.push([currency[i][0],Math.round(cid[i][1]/currency[i][1])]);
  }
  
  currency = currency.reverse();
  coinInReg = coinInReg.reverse();
  for(let i =0 ; i< cid.length ;i++){
    let ratio = (change/currency[i][1]);
    if(parseInt(ratio) === 0){
  
    }
    else{
      ratio = Math.min(parseInt(ratio),coinInReg[i][1]);
      change = (change - ratio * currency[i][1]).toFixed(2);
      temp.push([currency[i][0],ratio * currency[i][1]]);
      if(change == 0){
        console.log(temp);
        return {status: "OPEN" , change: temp};
      }
    }
  }
  return {status:"INSUFFICIENT_FUNDS", change: []};
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);