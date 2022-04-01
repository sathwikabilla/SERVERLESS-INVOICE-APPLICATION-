function finfsmallest(){
    var r=84975987439857826;
    for(var i=0;i<arguments.length;i++){
        for(var j=0;j<arguments[i].length;j++){
            if(arguments[i][j]<r){
                r= arguments[i][j];
            }
        }
        return r;
    }
}
finfsmallest([23,1,4,6],[3,1,7,9,2,5]);
//acceapts array and retrn new array with values grtaer than a given number

function bigarray(arr,n)
{
    var r=arr.filter(function(e){
        return e> n;
    });
    return r;
}
bigarray([2,1,4,0,7,44,72,8,12,45],10);