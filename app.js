
function calc()
{
    var amount = document.querySelector("#amount").value;
    var persons= document.querySelector("#people").value;

    var result= (amount/persons).toFixed(0);
    document.querySelector(".heading").innerHTML= result;
}


function bmi()
{
    var height= document.querySelector("#height").value;
    var weight= document.querySelector("#weight").value;
    var BMI= weight/ (height*height);
    console.log(BMI);

    if(BMI< 18.5)
        document.querySelector(".heading2").innerHTML= "Underweight";

    else if(BMI>= 18.5  &&   BMI<24.9)
        document.querySelector(".heading2").innerHTML= "Normal";
    
    else if(BMI>=24.9 && BMI<29.9)
        document.querySelector(".heading2").innerHTML="Overweight";

    else if(BMI>29.9 && BMI<35)
        document.querySelector(".heading2").innerHTML="Obesity";
    else
    document.querySelector(".heading2").innerHTML="Severe Obesity";
}
