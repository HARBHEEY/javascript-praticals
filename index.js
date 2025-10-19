const decreaseBtn = document.getElementById("decreaseBtn")
const increaseBtn = document.getElementById("increaseBtn")
const reseBtn = document.getElementById("resetBtn")
const countLabel = document.getElementById("countLabel")

let count = 0
increaseBtn.onclick = function(){
    count ++
    countLabel.textContent = count
}
decreaseBtn.onclick = function(){
    count --
    countLabel.textContent = count
}
resetBtn.onclick = function(){
    count = 0
    countLabel.textContent = count
}

const mylabel1 = document.getElementById("mylabel1")
const mylabel2 = document.getElementById("mylabel2")
const mylabel3 = document.getElementById("mylabel3")
const mybutton = document.getElementById("mybutton")
const max = 9
const min = 1
let randomNum1
let randomNum2
let randomNum3

mybutton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min
    mylabel1.textContent = randomNum1
    randomNum2 = Math.floor(Math.random() * max) + min
    mylabel2.textContent = randomNum2
    randomNum3 = Math.floor(Math.random() * max) + min
    mylabel3.textContent = randomNum3

}

const mytext = document.getElementById("mytext")
const mysubmit = document.getElementById("mysubmit")
const result = document.getElementById("result")
let age 
mysubmit.onclick =  function(){
    age = mytext.value;
    age = Number(age)
if (age >= 100) {
    result.textContent = `You are too OLD to enter this site`
} 
else if(age == 0) {
    result.textContent =`You're a Baby`
}
else if(age >= 18){
    result.textContent = `You are OLD enough to enter this site`
}
else if (age < 0) {
    result.textContent = `Your age cant be below 0`
}
else{
    result.textContent = `You must be 18+ to enter this site`
}
}


const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const masterCardBtn = document.getElementById("masterCardBtn")
const payPalBtn = document.getElementById("payPalBtn")
const mySubmit = document.getElementById("mySubmit")
const subresult = document.getElementById("subresult")
const paymentresult = document.getElementById("paymentresult")

mySubmit.onclick = function(){
if (myCheckBox.checked) {
    subresult.textContent = `You are subscribed`
} else {
    subresult.textContent = `You are NOT subscribed`
}

if (visaBtn.checked) {
    paymentresult.textContent = `You are paying with a visa`
}
else if (masterCardBtn.checked) {
    paymentresult.textContent = `You are paying with a masterCard`
}
else if(payPalBtn.checked){
    paymentresult.textContent = `You are paying with a payPal`
}
else{
    paymentresult.textContent = `You must select a payment type`
}
}


//FOR LOOP = repeat some code a LIMITED amount of times 
