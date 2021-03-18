console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log('for loop', i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
  console.log('for loop', i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {
  console.log('for loop', i);
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?

// Explanation of code: used a % variable to show that I wanted the code to count by two
// and I decided to use a modulous operator to count down by two, since each number listed in the array is divisible by two. 
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for ( let i = 2; i <= 10; i+=2){
  if(i % 2 == 0){
    console.log('even numbers:',i + 0);
  }
}

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for ( let i = 5; i >= 0; i--){
    console.log('count backwards:', i - 0);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
let eachStar = 0;

for (let eachStar of stars){
  console.log('List of stars:', eachStar);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
// Explanation of code: To explain how I listed out the list of stars in a while loop,I created a variable called s,
// and then I added stars.length to list out the number of stars. and I used stars[s] to list out a single star, to get the list in an array of each star.
let s = 0;

while(s < stars.length){
  s++;
  console.log('List of Stars in while loop:', stars[s]);
}


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('Count from 0 to 5');
let i = 0;
const max = 6;
// while loop
while( i < max ){
  console.log('In while loop. i:', i );
  i++;
}


// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let number = 10;
const min = 4;
// while loop
while( number > min ){
  console.log('In while loop. number:', number );
  number--;
}
