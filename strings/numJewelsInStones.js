

const numJewelsInStones=(stones,jewels)=>{
    // if(jewels.length<1 || stones.length>50) return 0;
let count=0;

for(let stone of stones){
   jewels.includes(stone)&&count++;
}
return count;
}
console.log(numJewelsInStones("aAAbbbb","aA"));