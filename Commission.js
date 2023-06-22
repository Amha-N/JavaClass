let prompt = require(" prompt-sync")()
let salesMan = prompt(" is the employee is salarid")
let sales    = prompt(" how much he sold ?")
let commision 
if(salesMan === "salaried"){
    
    if(sales < 300){
        console.log(" no commission")
    }else if ( sales >= 300 && sales <= 500){
         commision = sales * 0.01
        console.log(" you are making " + commision + " $")
        //.....
    } else {
         commision = sales * 0.02
        console.log(" you make " + commision)
        //...
    }
    //....

} else  {
    //....

    if(sales > 300 && sales < 500){
        commision = sales * 0.02
        console.log("you make " + commision)
        //.....
    } else if(sales > 500){

        
        commision = sales * 0.03
        console.log("you make " + commision + " $")

    }
}