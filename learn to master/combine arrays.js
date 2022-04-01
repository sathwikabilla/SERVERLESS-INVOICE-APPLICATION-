function combine(){
    var res=[];
    for(var i=0; i<arguments.length;i++){
        arguments[i].forEach(function(e){
            if(res.indexOf(e)===-1){
                res.push(e);
            }
    })
    };
    console.log(res);

}
combine([1,2,3,4],[2,4,1,6,3]);


