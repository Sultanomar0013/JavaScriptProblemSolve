var maxProfit=function(prices){
    let profit =0;
    let min = prices[0]
    for(let i=1; i<prices.length;i++){
        min=Math.min(min,prices[i-1]);
        profit=Math.max(prices[i]-min,profit);
    }
    return profit;
}

console.log(maxProfit([5,3,4,1,2,6,7]));