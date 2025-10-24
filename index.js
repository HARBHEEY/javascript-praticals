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
// for (let i = 10; i > 0; i--) {
//     console.log(i)   
// } 
// console.log("HAPPY NEW YEAR")

for (let i= 1; i <= 20; i++) {
    if (i == 13) {
        //continue   //this 'continue' keyword is used to skip iteration
        break;       // this 'break' keyword means it will break out of the loop
    }
    else{
        console.log(i)
    }   
}

//NUMBER GUESSING GAME
// const minNum = 1
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
// console.log(answer) 

// let attempts = 0;
// let guess;
// let running = true;
// while (running) {
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//     guess = Number(guess)
//     if (isNaN(guess)) {
//         window.alert(`Please enter a valid number`)
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert(`Please enter a number between the range`)
//     }
//     else{
//         attempts++
//         if (guess < answer) {
//             window.alert(`TOO LOW TRY AGAIN!`)
//         }
//         else if(guess > answer){
//             window.alert(`TOO HIGH TRY AGAIN!`)
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer}. it took you ${attempts} attempts`)
//             running = false
//         }
//     }
//     //console.log(typeof guess, guess)
   
// }


//FUNCTION = A section of reusuable code.
//           declare code once, use it whenever you want.
//           call the function to execute the code.

function happyBirthday(username, age){
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!")
    console.log(`Happy birthday dear ${username}`)
    console.log("Happy birthday to you!")
    console.log(`You are ${age} years old`)
}
happyBirthday("Muyiwa", 36)
happyBirthday("Abiodun", 33)

function add(x, y) {
    return x + y
}
function subtract(x, y) {
    return x - y
}
function multiply(x, y){
    return x * y
}
function divide(x, y){
    return x / y
}
function isEven(number) {
   // if(number % 2 === 0){
    //    return true
   // }
   // else {
   //     return false
   // }
      //boolean method(tenary operator)
   return number % 2 === 0 ? true : false
}
function isValidEmail(Email){
    // if(Email.includes("@")){
    //     return true
    // }
    // else{
    //     return false
    // }

    //tenary operator
   return Email.includes("@") ? true : false
}
console.log(isValidEmail("BroCode@.com"))
console.log(isValidEmail("ElonMusk.com"))
console.log(isValidEmail("MarkZukerberg@.com"))


//Variable scope = where a variable is recognized
//                 and accessible (local vs global)
   //local scope = is when a variable is declare  within a certain callibraxes
   //               that variable is then only accesible to anything within the certain callibraxes
// function2()
// function function1() {
//     let x = 1;
//     console.log(x)
// }
// function function2() {
//     let x = 2;
//     console.log(x)
// }

     //global scope = Any variable decalare outside a function,itts available throughout the program
// let x = 3
// function1()
// function function1() {   
//     console.log(x)
// }
// function function2() {
//     console.log(x)
// }


//TEMPERATURE CONVERSION PROGRAM
const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const resultconv = document.getElementById("resultconv")
let temp;

function convert(){
    if (toFahrenheit.checked) {
        //Celsius to Fahrenheit
        temp = Number(textBox.value)
        temp = temp * 9/5 + 32
        resultconv.textContent = `${temp.toFixed(1)}°F`
    } 
    else if (toCelsius.checked) {
        //Fahrenheit to Celsius
        temp = Number(textBox.value)
        temp = (temp - 32) * 5/9
        resultconv.textContent = `${temp.toFixed(1)}°C`
    } 
    else{
        resultconv.textContent = `Select a unit`
    }  
}


//Array = a variable like structure that can hold more than 1 value
//let fruits = ["apple", "orange","banana", "pawpaw"]

//fruits[0] = "coconut"
//fruits.push("pineapple")
//fruits.pop();
//fruits.unshift("mango")
//fruits.shift()
//fruits.sort()
//fruits.sort().reverse()
//let numOfFruits = fruits.length
//let index = fruits.indexOf("banana")
       //For loop method
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }
// 

     //shortway to write for loop to display elements in array
//for(let fruit of fruits){
//    console.log(fruit)
//}
//console.log(index)
//console.log(numOfFruits)
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])



//spread operator = ... allows an iterable such as an array
//               or string to be expanded into seperate elements
//               (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5]
// let maximum = Math.max(...numbers)
// let minimum = Math.min(...numbers)
// console.log(minimum)
// console.log(maximum)

// let username = "Bro code"
// let letters = [...username].join("-")
// console.log(letters)

//let fruits = ["apple", "orange","banana"]
//let vegetables = ["carrots", "celery", "potatoes"]
//let foods = [...fruits, ...vegetables, "eggs", "milk"]
//console.log(foods)


//Rest parametes = (...rest)allows a function work with a variable 
//                 number of arguments by bundling them into an array 
//                 spread = expands an array into seperate elements 
//                 rest = bundles seperate elements into an array

// function openFridge(...foods){
//     console.log(...foods)
// }
// function getFood(...foods){
//     return foods
// }
// const food1 = "pizza"
// const food2 = "hambrger"
// const food3 = "hotdog"
// const food4 = "sushi"
// const food5 = "ramen"
// //openFridge(food1, food2, food3, food4, food5)
// const foods = getFood(food1, food2, food3, food4, food5)
// console.log(foods)


// function sum(...numbers){
//     let result = 0
//     for(let number of numbers){
//         result += number;
//     }
//     return result
// }
// const total = sum(1, 2, 3, 4, 5)
// console.log(`Your total is $${total}`)

// function getAverage(...numbers){
//     let result = 0
//     for(let number of numbers){
//         result += number;
//     }
//     return result/numbers.length
// }
// const total1 = getAverage(75, 100,85,90,50)
// console.log(`Your total is $${total1}`)

// function combineStrings(...strings){
//     return strings.join(" ")
// }
// const fullName = combineStrings("Mr", "Spongebob", "Squarepants", "III")
// console.log(fullName)


//DICE ROLLER PROGRAM
function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value)
        images.push(`<img src="dice_images/${value}.png">`)
    } 
      diceResult.textContent = `dice: ${values.join(", ")}`
      diceImages.innerHTML = images.join("")
}


//RANDOM PASSWORD GENERATOR
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-="

    let allowedChars = ""
    let password = ""
    allowedChars += includeLowerCase ? lowerCaseChars : ""
    allowedChars += includeUpperCase ? upperCaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolChars : ""
    if (length <= 0) {
        return `Password length must be greater than 0`
    }
    if (allowedChars.length === 0) {
        return `At least one character type must be selected`
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }
    return password;
}
const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)
console.log(`Generated password: ${password}`)


//callback = A fnction that is passed as an 
//           agument to another function 
//           used to handle asychronous operations:
//            1. Reading a file 
//            2. Network requests 
//            3. interacting with databases 
//       "Hey , when youre done, call this next."


// function hello(callback){
//     console.log("Hello")
//     callback();
// }
// function leave(){
//     console.log("Leave")
// }
// function wait(){
//     console.log("Wait!")
// }
// function goodbye(){
//     console.log("Goodbye!")
// }
// hello(wait)

function addition(callback, x, y){
    let result = x + y
    callback(result);
}
function displayConsole(result){
    console.log(result)
}
addition(displayPage, 5, 7)

function displayPage(result){
    document.getElementById("bee").textContent = `The result is ${result}`
}


//ForEach() = method used to iterate over the 
//           elements of an array and apply to 
//           specified function (callback) 
//            array.forEach(callback)

// 

// let fruits = ["apple", "orange", "banana", "coconut"]

// fruits.forEach(capitalize)
// //fruits.forEach(uppercase)
// fruits.forEach(display)

// //to make them uppercase/lowercase
// function uppercase(element, index, array){
//     array[index] = element.toUpperCase()
// }
// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1)
// }
// function display(element){
//     console.log(element)
// }



//.map() = accepts a callback and applies that 
//         functions to each element of an array,
//         then return a new array

// const numbers = [1, 2, 3, 4, 5]


// const squares = numbers.map(square)
// const cubes = numbers.map(cube)
// console.log(cubes)
// console.log(squares)

// function square(element){
//     return Math.pow(element,2)
// }
// function cube(element){
//     return Math.pow(element,3)
// }

// const students = ["spongebob", "patrick", "bola", "ope"]
// const uppercases = students.map(uppercase)
// const lowercases = students.map(lowercase)
// console.log(uppercases)
// console.log(lowercases)
// function uppercase(element){
//     return element.toUpperCase()
// }
// function lowercase(element){
//     return element.toLowerCase()
// }

const dates = ["2024-01-10", "2025-02-20", "2026-03-30"]

const formattedDates = dates.map(formatDates)
console.log(formattedDates)
function formatDates(element){
    const parts = element.split("-")
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}


//filter() = Creates a new array by filtering 
//           out elements

// let numbers = [1, 2, 3, 4, 5, 6, 7]
// let evenNums = numbers.filter(isEven)
// let oldNums = numbers.filter(isOld)
// console.log(evenNums)
// console.log(oldNums)
// function isEven(element){
//     return element % 2 === 0    // % modulus means it gives remainder of any division, u can also use to check if a number is even
// }
// function isOld(element){
//     return element % 2 !== 0    // % modulus means it gives remainder of any division, u can also use to check if a number is even
// }

const ages = [16, 17, 18, 19, 20, 60]
const adults = ages.filter(isAdult)
const minors = ages.filter(isMinor)
console.log(adults)
console.log(minors)
function isAdult(element){
    return element >= 18
}
function isMinor(element){
    return element < 18
}

const words = ["apple", "orange", "banana", "kiwi", 
                "pomegranate", "coconut"]

const shortWords = words.filter(getShortWords)
const longWords = words.filter(getLongWords)
console.log(shortWords)
console.log(longWords)
function getShortWords(element){
    return element.length <= 6;
}
function getLongWords(element){
    return element.length > 6;
}


//.reduce() = reduce the elements of an array 
//            to a single value
const prices = [5, 10, 30, 50, 100]

// const total = prices.reduce(sum)
// console.log(`$${total.toFixed(2)}`)

// function sum(accumulator, element){
//     return accumulator + element
// }

const grades = [75, 50, 90, 80, 65, 95]
const maximum = grades.reduce(getMax)
const minimum = grades.reduce(getMin)
console.log(maximum)
console.log(minimum)
function getMax(accumulator, element){
    return Math.max(accumulator, element)
}
function getMin(accumulator, element){
    return Math.min(accumulator, element)
}


//function declaration = define as a reusable block of code that 
//            perform a specific task
//function expression = a way to define function 
//                       as values or variables.

// 
// const hello = function(){
//     console.log("Hello")
// }
// setTimeout(hello,3000)


setTimeout(function(){
    console.log("I love you")
},3000)

// const numbers = [1, 2, 3, 4, 5, 6]
// const squared = numbers.map(function(element){
//     return Math.pow(element, 2)
// })
// console.log(squared)

// const cubed = numbers.map(function(element){
//     return Math.pow(element, 3)
// })
// console.log(cubed)

// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0
// })
// console.log(evenNums)
// const oddNums = numbers.filter(function(element){
//     return element % 2 !== 0
// })
// console.log(oddNums)
// const sum = numbers.reduce(function(accumulator, element){
//     return accumulator + element
// })
// console.log(`$${sum.toFixed(2)}`)


//Arrow function = a concise way to write function 
//        expressions good for simple functions 
//       that you can use only once (parameters) => some code
// const hello = (name, age) => {
//     console.log(`Hello ${name}`)
//     console.log(`You are ${age} years old`)
// }
// hello("Bee", 33)

// setTimeout( () =>{
//     console.log("I love you Muyiwa")
// },3000)

// const numbers = [1, 2, 3, 4, 5, 6]
// const squares = numbers.map( (element) =>{
//     return Math.pow(element, 2)
// }) 
// console.log(squares)
// const cubes = numbers.map( (element) =>{
//     return Math.pow(element, 3)
// }) 
// console.log(cubes)
// const evenNums = numbers.filter( (element) =>{
//     return element % 2 === 0
// }) 
// console.log(evenNums)
// const oddNums = numbers.filter( (element) =>{
//     return element % 2 !== 0
// }) 
// console.log(oddNums)
// const total = numbers.reduce( (accumulator, element) => accumulator + element) 
// console.log(total)


//Object- is a collection of related properties 
//         and/or methods can represent real 
//          world objects (prople, products, places) 
//           object = {key: value, function()}

// const person1 = {
//     firstName: "spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log("Hi! I am spongebob")},
//     eat: () => console.log("I am eating a Krabby Patty")
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 42,
//     isEmployed: false,
//     sayHello: () => console.log("Hey I'm patrick..."),
//     eat: function(){console.log("I am eating roast beef, chicken, and pizza")}
// }
// person1.sayHello()
// person2.sayHello()
// person1.eat()
// person2.eat()

// console.log(person1.firstName)
// console.log(person1.lastName)
// console.log(person1.age)
// console.log(person1.isEmployed)

// console.log(person2.firstName)
// console.log(person2.lastName)
// console.log(person2.age)
// console.log(person2.isEmployed)


//this = reference to the object where THIS is used 
//       (the object depends on the immediate context) 
//       person.name = this.name

// const person1 = {
//     name: "Patrick",
//     favFood: "hamburgers",
//     sayHello: function(){console.log(`Hey I'm ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// const person2 = {
//     name: "Spngebob",
//     favFood: "Pizza",
//     sayHello: function(){console.log(`Hey I'm ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }
// person1.sayHello()
// person1.eat()
// person2.eat()


//constructor = special method for defining the 
//             properties and methods of object

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}
const car1 = new Car("Ford", "Mustang", 2024, "red")
const car2 = new Car("Chevrolet", "Camero", 2025, "blue")
const car3 = new Car("Dodge", "Charger", 2026, "grey")
console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)

console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)

console.log(car3.make)
console.log(car3.model)
console.log(car3.year)
console.log(car3.color)
car1.drive()
car2.drive()
car3.drive()


//class = (ES6 feature) provides a more structured 
// and cleaner way to work with objects compared to traditional constructor functions 
// ex. static keyword, encapsulation, inheritance

class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`product:${this.name}`)
        console.log(`product:$${this.price.toFixed(2)}`)
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}
const salesTax = 0.05
const product1 = new product("Shirt", 19.99)
const product2 = new product("Pants", 22.50)
const product3 = new product("Underwear", 100)
const total = product3.calculateTotal(salesTax)
console.log(`Total price (with tax): $${total.toFixed(2)}`)
product1.displayProduct()
product2.displayProduct()
product3.displayProduct()


//static = keyword that defines properties or methods 
//       that belong to a class itself rather than 
//        the object created from the class
//     (class owns anthing static, not the objects)

// class mathUtil{
//     static PI = 3.14159

//     static getDiameter(radius){
//         return radius * 2
//     }
//     static getCircumference(radius){
//         return 2 *this.PI * radius
//     }
//     static getArea(radius){
//         return this.PI * radius * radius
//     }
// } 
// console.log(mathUtil.PI)
// console.log(mathUtil.getDiameter(10))
// console.log(mathUtil.getCircumference(10))
// console.log(mathUtil.getArea(10))

class User{
    static userCount = 0

    constructor(username){
        this.username = username;
        User.userCount++
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello, My username is ${this.username}`)
    }
}
const user1 = new User("Spongebob")
const user2 = new User("Patrick")
const user3 = new User("Sandy")
console.log(user1.username)
console.log(user2.username)
console.log(user3.username)
console.log(User.userCount)
user1.sayHello()
user2.sayHello()
user3.sayHello()
User.getUserCount()


//inheritance = allows a new class to inherit properties 
//             and methods from an existing class (parent => child) 
//              helps with code reusability
     //the parent animal having the properties and method
// class Animal{
//     alive = true;
//     eat(){
//         console.log(`This ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     }
// }
//     //the chidren inheriting the properties and method from the parent
// class Rabbit extends Animal{
//     name = "rabbit"
//     run(){
//         console.log(`This ${this.name} is running`)
//     }
// }
// class Fish extends Animal{
//     name = "fish"
//     swim(){
//         console.log(`This ${this.name} is swimming`)
//     }
// }
// class Hawk extends Animal{
//     name = "hawk"
//     fly(){
//         console.log(`This ${this.name} is flying`)
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish()
// const hawk = new Hawk()

// console.log(rabbit.alive)
// rabbit.eat()
// rabbit.sleep()
// console.log(fish.alive)
// fish.eat()
// fish.sleep()
// console.log(hawk.alive)
// hawk.eat()
// hawk.sleep()
// rabbit.run()
// fish.swim()
// hawk.fly()


//super = keyword is used in classes to call the 
//            constructor or access the properties and 
//            methods of a parent (superclass) 
//            this = this object 
//            super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
       this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age)
       this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age)
       this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age)
       this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed)
    }
}
const rabbit = new Rabbit("rabbit", 1, 25)
const fish = new Fish("fish", 2, 12)
const hawk = new Hawk("hawk", 3, 50)

fish.swim()
console.log(hawk.name)
console.log(hawk.age)
console.log(hawk.flySpeed)


//getter = special method that makes a property readable
//setter = special method that makes a poperty writeable
//validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    set width(newWidth){
        if (newWidth > 0) {
           this._width = newWidth   //using underscore in width means this is a private property,shouldnt be touched 
        }
        else{
            console.error(`Width must be a positive number`)
        }
    }

    set height(newHeight){
        if (newHeight > 0) {
           this._height = newHeight   //using underscore means this is a private property,shouldnt be touched 
        }
        else{
            console.error(`Height must be a positive number`)
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`
    }
    get height(){
        return `${this._height.toFixed(1)}cm`
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)}cm`
    }
}
const rectangle = new Rectangle(3, 4)

// rectangle.width = 5;
// rectangle.height = 6
console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)


class Person {
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    set firstname(newfirstname){
        if(typeof newfirstname === "string" && newfirstname.length > 0){
            this._firstname = newfirstname
        }
        else{
            console.error(`Firstname must be a non empty string`)
        }
    }
    set lastname(newlastname){
        if(typeof newlastname === "string" && newlastname.length > 0){
            this._lastname = newlastname
        }
        else{
            console.error(`lastname must be a non empty string`)
        }
    }
    set age(newage){
        if(typeof newage === "number" && newage >= 0){
            this._age = newage
        }
        else{
            console.error(`age must be a non negative number`)
        }
    }
    get firstname(){
        return this._firstname
    }
    get lastname(){
        return this._lastname
    }
    get age(){
        return this._age
    }
    get fullname(){
        return this._firstname + " " +  this._lastname
    }
}
const person = new Person("abiodun", "adeiye", 33)
console.log(person.firstname)
console.log(person.lastname)
console.log(person.fullname)
console.log(person.age)


//destructuring = extract values from arrrays and objects,
//      then assign them to variables in a convenient way 
//           [] = to perform array destructuring 
//           {} = to perform object destructuring
//     Example 1 - swap the value of two variables    //

let a = 1;
let b= 2;
[a, b] = [b, a]
console.log(a)
console.log(b)

//  Example 2 - swap 2 elements in an array  //

// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);


//  Example 3 - we can assign array to variables  //

const colors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor,thirdColor, ...extraColors] = colors;
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)



//  Example 4 - extract values from objects  //
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     agee: 30,
//     job: "Fry cook"

// }
// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     agee: 34,

// }
// //const {firstName, lastName, agee, job} = person1;
// const {firstName, lastName, agee, job = "unemployed"} = person2;

// console.log(firstName)
// console.log(lastName)
// console.log(agee)
// console.log(job)


//  Example 5 - destructure in function parameters  //
function displayPerson({firstName, lastName, agee, job = "unemployed"}){
    console .log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${agee}`)
    console.log(`job: ${job}`)
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    agee: 30,
    job: "Fry cook"

}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    agee: 34,

}
displayPerson(person1)