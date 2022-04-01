function find(array,number){
    var found=array.indexOf(number);
            if(found===-1)
            {
              return false;
            }
            else{
              return true;
            }

        }
var a=[2,33,3,2,7];
find(a,2);