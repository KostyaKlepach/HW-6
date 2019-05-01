// 1 task
// A function which prints str after n seconds.

function printTimeout(str,n) {
   setTimeout(()=>{console.log(str); }, n * 1000);
}
printTimeout('hello', 5);

// 2 task
// A function which returns sum of all numbers from 1 to n using recursion.
function sumAll(n) {
  if(n == 1){
    return n;
  }
  return n + sumAll(n - 1);
}

console.log(sumAll(2)); //3
console.log(sumAll(4)); //10

// 3 task

// A function which takes str and time in seconds as arguments, then every second it should
// count down from time to 0 and print current time to console when time equals to 0 it prints str

function bombTimer(str, time) {
  let counter = setInterval(()=>{    
    console.log(time);
    time--; 
    if (time < 1) {
    clearInterval(counter);
    setTimeout(()=> console.log(str), 1000);
    }
  }, 1000);
};
bombTimer('Boooom', 3);

// 4 task
//A function which returns factorial of number using recursion.
function factorial(n) {
  if(n==1){
    return n;
  }
  return n * factorial(n-1);
}
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120

// 5 task 
function bombTimer(str, time) {
  let counter = () => {
    console.log(time);
    if(time === 1){    
      setTimeout(()=> console.log(str), 1000);
    }
    return bombTimer(str, time - 1);
  }
  if(time)setTimeout(counter, 1000);
}
bombTimer('Boooom', 6);

// 6 task
// A function which takes an array of numbers and maxNumber, the 
// function returns new array with numbers not higher than maxNumber.

// version 1
let filterNumbers = (arr, maxNumber) => arr.filter(item => item > maxNumber);

console.log(filterNumbers( [1, 4, 8, 1, 20], 5) ); //[1, 4, 1]
console.log(filterNumbers( [1, 7, 8, 99, 20], 35) );

// version 2
function filterNumbers(arr, maxNumber) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < maxNumber){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(filterNumbers( [1, 4, 8, 1, 20], 5) ); //[1, 4, 1]
console.log(filterNumbers( [1, 7, 8, 99, 20], 35) );

// 7 task
// A function that returns object with min and max numbers from array of numbers.
function minMax(arr) { 
  arr.sort((a,b) => a - b);
  console.log({ max: arr.length-1, min: arr[0] });
}
minMax([1, 4, 8, 2, 20]); // 

// 8 task
//A function that returns average of numbers in array.

// version 1

let average = (arr) => {
  let result = arr.reduce((total, item) => total + item);
  return result / arr.length;
}

console.log(average([1,4,2])); // 2.33
console.log(average([5,9,3]));

// version 2

function average(arr) {
  let result = arr.join('');
  let averageNumber = 0;
  for(let i = 0; i < result.length; i++){
    averageNumber += result[i] / result.length;
  }
  return averageNumber;
}
console.log(average([1,4,2])); // 2.33
console.log(average([5,9,3]));

// 9 task
// A function which concats all first-nested arrays in one array (use reduce):

function concatFirstNestedArrays(arr) {
  console.log(arr.reduce((previous, current) => previous.concat(current)));
}

concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]); // [0, 1, 2, 3, 4, 5]

// 10 task
//A function accepts array of users and returns object of users where key is user id and value user data.
const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-3-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

function usersToObject(users) {
   let objOfUsers = users.reduce((obj, item) => {
     obj[item.id] = item;
     return obj;
   }, {})
   return objOfUsers;
}
console.log(usersToObject(users));

// 11 task
//A function returns array of users that have birthdays in a specific month.
const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' }
];


let filterUsersByMonth = (users, month) => {
    let arrayOfUsers = [];
    users.forEach((user)=>{
        let birthdays = new Date(user.birthday);
        if (birthdays.getMonth() === month){
            arrayOfUsers.push(user);
        };
    })
    return arrayOfUsers;
}

console.log(filterUsersByMonth(users, 0));
// [{ name: 'Bill', birthday: '1999-1-19' }]

//12 task
//A function returns name and age of users separated by comma that are older than 18.
const users = [
  { name: 'John', birthday: '1999-6-12' },
  { name: 'Bill', birthday: '2005-5-19' },
  { name: 'Carol', birthday: '2003-10-11' },
  { name: 'Luce', birthday: '2000-11-22' }
];

let getAdultNames = users =>{
  let adultUsers = [];
  users.forEach((user)=>{
      let adult = new Date().getFullYear() - new Date(user.birthday).getFullYear();
      if (adult >=18){
          adultUsers.push(user.name + ' ' + adult);
      };
  });
  return adultUsers.join();
}
console.log(getAdultNames(users)); // 'John 20, Luce 19'