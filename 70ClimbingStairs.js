function climbingstairs(n){
    var seriesarr=[1,2]
    if(n ==1){
        return 1
    }else if(n ==2){
        return 2
    }else{
        for(var i=2;i<n;i++){
    seriesarr[i] = seriesarr[i-1] + seriesarr[i-2]
    console.log(seriesarr[i])
        }
        return seriesarr[n-1]
    }
    }console.log(climbingstairs(5))