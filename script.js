const heightInput = document.getElementById("height");
const wightInput = document.getElementById("weight");
const resultE1 = document.getElementById("result");
const categoryE1 = document.getElementById("category");
const calcBtn = document.getElementById("calcBtn");

function classify(bmi) {
  if (bmi < 18.5) return { label: "Underweight", cls: "cat-under" };
  if (bmi < 25) return { label: "Normal", cls: "cat-normal" };
  if (bmi < 30) return { label: "Overweight", cls: "cat-over" };
  return { label: "Obese", cls: "cat-obese" };
}

function calculate() {
    const h = parseFloat(heightInput.value);
    const w = parseFloat(wightInput.value);

if (!h || !w || h<= 0 || w<= 0) {
    resultE1.textContent = '--';;
    categoryE1.textContent = '--';
    categoryE1.className = '';
    return;
}

const heightInMeters = h/100;
const bmi = w /(heightInMeters * heightInMeters );
const {label,cls} = classify(bmi);

resultE1.textContent = bmi.toFixed(1);
categoryE1.textContent = label;
categoryE1.className = cls;

}

heightInput.addEventListener('click',calculate)
wightInput.addEventListener('click',calculate)
calcBtn.addEventListener('click',calculate)

calculate()

