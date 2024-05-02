function calculateBMI() {
    var weightInKg = document.getElementById('weight').value;
    var heightInCm = document.getElementById('height').value;
  
    weightInKg = parseFloat(weightInKg);
    heightInCm = parseFloat(heightInCm);
  
    heightInMeters = heightInCm / 100;
  
    var bmi = (weightInKg) / (heightInMeters * heightInMeters);
    document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2)
  }