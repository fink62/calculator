const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;


app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmicalculator', (req, res) => {
  console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height)/100;
  res.send(calculateBMI(weight, height));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

function calculateBMI (weight, height) {
  var w = weight;
  var h = height;
  var bmi = w/(h*h);
  bmi = bmi.toFixed(2);
  var interpretation;

  if (bmi < 18.5) {
      interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  }

  if ((bmi >= 18.5) && (bmi <= 24,9)) {
      interpretation = "Your BMI is " + bmi + ", so you have normal weight.";
  }

  if (bmi > 24.9) {
      interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  return interpretation;
}
