//Ex 1
for (let i = 1; i < 100; i++){
    if(i % 2 == 0){
        continue;
    }else{
        console.log(i);
    }
}

//Ex 2
for (let x = 1; x < 100; x++){
    if (x % 3 === 0 && x % 5 === 0){
        console.log(x,"FIZZBUZZ");
    }else{
        if (x % 3 === 0){
            console.log(x,"FIZZ");
        }
        if (x % 5 === 0){
            console.log(x,"BUZZ");
        }
    }
}

//Ex 3
let j = 1;
while(j <= 100){
    let output = "";
    if(j % 3 == 0){
        output = "FIZZ";
    }
    if(j % 5 ==0){
        output = "BUZZ";
    }
    if(j % 3 == 0 && j % 5 == 0){
        output = "FIZZBUZZ"
    }
    console.log(`${j} ${output}`);
    j++; 
  }

let y = 1
do{
    let output = "";
    if(y % 3 == 0){
        output = "FIZZ";
    }
    if(y % 5 ==0){
        output = "BUZZ";
    }
    if(y % 3 == 0 && y % 5 == 0){
        output = "FIZZBUZZ"
    }
    console.log(`${y} ${output}`);
    y++;    
}while (y <= 100);

//Ex 4
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let z = 1;z <= n; z++){
    if(z === value){
        console.log(`Found value ${value}!`);
        break;
    }
    if(z == n){
        console.log(`Did not find value ${value} in range 1-${z}`);
    }
}

//bonus
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i <= end; i++){
    let output = "";

    if (i % fizzDivisor == 0) {
      output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
      output += "BUZZ";
    }

    if (output == "") {
      output = i;
    }

    console.log(`${output}`);
  
}

