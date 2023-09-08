function calculateBMI() {
    var heightInput = document.getElementById("Height");
    var WeightInput = document.getElementById("Weight");
    var resultDiv = document.getElementById ("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(WeightInput.value);

    if (isNaN(height)||isNaN(weight)){  
       resultDiv.innerHTML ="Please enter valid height and weight.";
       return;
    }

    var bmi = weight / ((height/100)** 2);
    var category = "";

    if (bmi <18.5) {
        category =" Underweight";
    } else if (bmi <25) {
        category = "Normal weight";
    } else if (bmi <30) {
        category = "Overweight";
    } else {
        category ="Obese"
    }

    resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";

    }