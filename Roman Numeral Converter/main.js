function convertToRoman(number)
{
    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let tempArr = [];
    let i=12;
    while(number>0)
    {
    let div = Math.floor(number/num[i]);
    number = number%num[i];
    while(div--)
    {
        tempArr.push(sym[i]);
    }
    i--;
    }
    tempArr = tempArr.join("");
    console.log(tempArr);
    return tempArr;
}
 

convertToRoman(36);