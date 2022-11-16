// Exaple 1 

// let a = 3;
// let b = 5;
// //  for additon 
//  c = a+b;
//  document.write("Sum of "+ a +" and " + b +" is "+c + "<br>");

// // for subtraction
//  d = a-b;
// document.write("Subtraction of "+ a +" and " + b +" is "+d + "<br>");

// // for multiplication
// e = a*b;
// document.write("Multiplication of "+ a +" and " + b +" is "+ e + "<br>" );

// // for division 
// f = a/b;
// document.write("Divison of "+ a +" and " + b +" is "+ f + "<br>");

// // for modulus
// g = a%b;
// document.write("Modulus of "+ a +" and " + b +" is "+ g + "<br>");


// Exaple 2 
// document.write("Value after variable declaration is undefined" + "<br>");

// let a = 5;
//  document.write("Initial Value:"+a + "<br>");

// // After Increment
// e = ++a ;
// document.write("Value after increment is:"+ e + "<br>");

// // After Addition
// b = a++ + a;
// document.write("Value after Addition is:"+  b + "<br>");

// // After Decleration
// c = --a + a;
// document.write("Value after Decrement is:"+  c + "<br>");

// // Remeinder
// d = --a - a;
// document.write("The reminder is: "+ d  + "<br>");

// Exercise 3
// let tec1 = 5;
// let tecprice = 600;
// b = tec1*tecprice;

// document.write("Total cost to buy " + tec1 + " ticket to a movie is " + b + "PKR" );

// Exercise 4

// document.write("Table of 4" + "<br>");
// for(let i = 1 ; i < 11 ; i++ ){
//     document.write( " 4 x " + i + " = " + 4*i + "<br>" );
// }

// Exercise 5

// let c = 25;
//     // Centi = ( C - 32 ) * 5/9;
//     F = (c * 9/5)  + 32;  

//     document.write( c +"<sup>0</sup>C  is " + F + "<suP>0</suP>F <br>" ) ;


// let f = 70;
//     C = ( f - 32 ) * 5/9;

//     document.write( f +"<sup>0</sup>F  is " + C + "<suP>0</suP>C <br>" ) 

// Exercise 6
// let a = 650;
// let c = 3;
// let b = 100;
// let d = 7;
// let e = 100;
 
// tolal1 = 650 * 3;
// tolal2 = 100 * 7;

// let Grandtotal = tolal1 + tolal2 + e ;

// document.write("price of item 1 is " + a + "<br>");
// document.write("Quantity of item 1 is " + c + "<br>");

// document.write("price of item 2 is " + b + "<br>");
// document.write("Quantity of item 2 is " + 7 + "<br>");

// document.write("Shipping Charges " + e + "<br> <br>");

// document.write("Total cost of your order is " + Grandtotal);

// Exercise 7

// let TotalMarks = 980;
// let ObtainMarks = 804;

//  percentage = (ObtainMarks/TotalMarks)*100;
 
//  document.write("Total marks : " + TotalMarks +"<br>");
//  document.write("Marks Obtain : " + ObtainMarks +"<br>");

//  document.write("Percentage : " + percentage);

// Exercise 8
// 10 us dollar = 1048
// 25 saudi riyal = 700

// let ExcahngeDlr = 10*104.80;
// let ExcahngeRiyl = 25*28;

// totalcurrrency = ExcahngeDlr+ExcahngeRiyl;

// document.write("Total Currency in PKR : "+ totalcurrrency);

// same exercise but question # 10

// let a = (5*10 )/2;
// document.write(a);

// same exercise but question # 11
// let Currentyr = 2016;
// let BirthYear = 1992;

// calage = Currentyr-BirthYear;

// document.write("Current Year : " + Currentyr + "<br>");
// document.write("Birth Year : " + BirthYear + "<br>");

// document.write("Your Age is : " + calage);

// Exercise 12 
// alert("heelo")
// let rad = 20;
// let pie = 3.142;

//    let  Circumfernce = 2* pie*rad;
//     let Area =  pie*(rad)*rad;
    
//     document.write("Radius of circle : " + rad + "<br>");
//     document.write("The Circumference is : " + Circumfernce + "<br>");
//     document.write("The area is : " + Area);

// Ecercise 13

// let Favsnk = "chocolate chip"
// let cntage = 15 ;
// let maxage = 65 ;
// let prdy = 3 ;

// calculate = (maxage - cntage)*prdy;
// document.write("Fravouite Snack : " + Favsnk + "<br>");
// document.write("Current age : " + cntage + "<br>");
// document.write("Estimated Maximun Age : " + maxage + "<br>");
// document.write("Amount of snacks per day : " + prdy + "<br>");

// document.write("You will need "+ calculate + " chocolate chip to last you until the rip old age of " + maxage);


// chapter 2
// let a = 10;

// document.write("Result :" + "<br>");
// document.write("The value of a is " + a + "<br>" );

// document.write("............................" + "<br>" + "<br>");
 
// document.write("The value of ++a is " + (++a) + "<br>");
// document.write("The value of a is " + a  + "<br>" + "<br>");

// document.write("The value of a++ is " + (a++)  + "<br>");
// document.write("The value of a is " + a  + "<br>" + "<br>");


// document.write("The value of --a is " + (--a)  + "<br>");
// document.write("The value of a is " + a + "<br>" +"<br>");


// document.write("The value of a-- is " + (a--)  + "<br>");
// document.write("The value of a is " + a + "<br>");


// Exercise 2

// var a = 2 ;
// var b = 1 ;

// var result = --a  -  --b  + ++b  +  b-- ; 
//                 1  -   0   +   1  +  0
// document.write("This is main result " +result+ "<br> <br>");

// document.write((--a) + " <br>");
// document.write((--a - --b) + " <br>");
// document.write((--a - --b + ++b) + " <br>");
// document.write((--a - --b + ++b + b--)+ " <br>");


// Exercise 3
// let a = prompt("Type anything");

// document.write(a);


// Exercise 4 

// let num = +prompt("Type the number for multiplication");

//     if(num){
        
//         document.write("The multiplication table of " + num + " is "  + "<br>");
//         for(let  i = 1 ; i < 11 ; i++){
//             document.write( num + " x " + i + " = " + num*i + " <br> ");

//         }
//     }
//     else{
//         document.write("The multiplication table of 5 is "+ "<br>"  );
//         for(let  i = 1 ; i < 11 ; i++){
//             document.write( 5 + " x " + i + " = " + 5*i + " <br> ");

//         }
//     }


// Exercise 6 

// document.getElementById("abc").innerHTML =
//   subject1  = prompt("enter the 1 subject") ;  
  

//   document.getElementById("abc1").innerHTML =
//   subject1  = +prompt("Total marks") ;  

  
//   document.getElementById("abc2").innerHTML =
//   subjec11  = +prompt("obtain marks") ;  

//   let per = (subjec11/subject1)*100;
//   document.getElementById("pr").innerHTML =
//  per + "%" ;  




//   document.getElementById("abcd").innerHTML =
//   subject2  = prompt("Enter the name of 2 subject") ;  ;

//   document.getElementById("abcd1").innerHTML =
//   subject2  = +prompt("Total Marks") ;  ;

//   document.getElementById("abcd2").innerHTML =
//   subjec22  = +prompt("Obtain Marks") ;  ;

//   let pr124 = (subjec22/subject2)*100;
//   document.getElementById("pr2s").innerHTML =
//  pr124 + "%" ;  


  
  
//   document.getElementById("abcc").innerHTML =
//   subject3  = prompt("Enter the name of 3 subject") ;

// document.getElementById("abcc1").innerHTML =
//   subject3  = +prompt("Total Marks") ;  

//   document.getElementById("abcc2").innerHTML =
//   subjec33  = +prompt("Obtain Marks") ;
  
//   let pr125 = (subjec22/subject2)*100;
//   document.getElementById("pr3s").innerHTML =
//  pr125 + "%" ;  




//   let Marksobt = subjec11 + subjec22 + subjec33;
  
// document.getElementById("obtt").innerHTML = 
// Marksobt;



// let percentagee = (Marksobt/300)*100;
  
// document.getElementById("pdm").innerHTML = 
// percentagee + "%";














// Exercise 1 

// let city = prompt("Enter the City Name");
// alert("Welcome To The City of lights");


// Exercise 2

// let Gender = prompt("What is Your Gender");

// if( Gender == "male" ){
//     document.write("Good Moring Sir");
// }
// else if (Gender == "female" ) {
//     document.write("Good Moring Madam");
// }


// Exercise 3

// document.getElementById("sclr").innerHTML = 
// clr =  prompt("Enter the color");
// if(clr == "red"){
//       document.getElementById("sclrr").innerHTML = 
//      `You Must Stop` 
// }

// document.getElementById("sclr1").innerHTML = 
// clr =  prompt("Enter the color");

//  if(clr == "yellow"){
// document.getElementById("sclrr222").innerHTML = `Ready to move` 
// }

// document.getElementById("sclr2").innerHTML = 
// clr =  prompt("Enter the color");
//  if(clr == "green"){
//   document.getElementById("sclrr44").innerHTML = 
//   `Move now` 
// }


// Example 5

//  var a = 4 ;

//  if(++a === 5 ){
//    alert("given condition for variable is true");
//  }

//  var b = 82;
//  if(b++ === 83){
//   alert("given condition for variable is true");
//  }

//  var c = 12;
//  if(c++ === 13){
//   alert("condition 1 is true");
//  }
// if ( c === 13){
//   alert("condition 2 is true");
// }
// if(++c < 14){
//   alert("condition 3 is true");
// }
// if(++c === 14){
//   alert("condition 4 is true");
// }


// Exercise d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if(true){
//   alert("True");
//   }
//   if (false){
//   alert("False");
//   }  

  // if("car" < "cat"){
  //   alert("car is smaller than cat");
  // }   
  

  // Exercise 6

  //   document.write(`<h1> Marks Sheet </h1>`);

  //   let sub1 = +prompt("Marks of subject 1");
  //   let sub2 = +prompt("Marks of subject 2");
  //   let sub3 = +prompt("Marks of subject 3");

  //   let obtainMarks = sub1+sub2+sub3;
  //   let TotalMarks = 300;
  //   let percentage = (obtainMarks/TotalMarks)*100 ;

    
    
  //   document.write("Total Marks :" + TotalMarks + "<br>");
  //   document.write("Marks Obtain :" + obtainMarks + "<br>");
  //   document.write("Percentage : " + percentage + "<br>");
    
  //   if(percentage >= 80 ){
  //     document.write( "Grade : " + "A-one" + " <br> ");
  //     document.write("Remarks : Execllent");
  //   }
    
  //  else if(percentage >= 70 ){
  //     document.write( "Grade : " + "A" + "<br>");
  //     document.write("Remarks :  Good" );

  //   }
  //   else if(percentage >= 60 ){
  //     document.write( "Grade : " + "B" + "<br>");
  //     document.write("Remarks :  You Need To Improve");

  //   }
    
  //   else if(percentage < 60 ){
  //     document.write( "Grade : " +"Fail" + "<br>");
  //     document.write("Remarks :  Sory");
  //   }

 // Exercise 7

// let secret =  6;

// let num = +prompt("Guess any number");

// if(num == 6){
//   alert("Bingo ,Correct Answer");
// }
// else if(num == 7  ){
//   alert("Close Enough to the correct answer");
// }
// else{
//   alert("try again")
// }


 // Exercise 8

//  let num = +prompt("Enter any number which is divisible by 3");

//  if(num %= 3){
//   document.write("Number is divisible by 3")
//  } 
// else{
//   document.write("Number is NOT divisible by 3")

// }


// Exercise 9

// let num = +prompt("enter the number");

// if(num % 2 == 0){
//   alert("the number is even");
// }
// else{
//   alert("the number is odd");
// }

// Exercise 10

// let temp = +prompt("enter the temperature");
// if(temp > 40 ){
//   alert("IT is to hot outside");
// }
// else if(temp > 30){
//   alert("The weather is Normal");;
// }
// else if(temp > 20){
//   alert("The weather is cool");;
// }
// else if(temp > 10){
//   alert("OMG! Today's weather is so cool ");
// }

// Exercise 11

// let num1 = +prompt("Enter the first value");
// let num2 = +prompt("Enter the second value");

// if(num1 || num2){
//   document.write(num1+num2 + "<br>");
//   document.write(num1-num2 + "<br>");
//   document.write(num1*num2 + "<br>");
//   document.write(num1/num2 + "<br>");
//   document.write(num1%num2 + "<br>");
// }


// Exercise 1

// let num = prompt("enter number or character or string");

// if(num += num){
//   alert("its a number");
// }
// else if( num === "num" && num == "toUpperCase" || num == "toLowerCase" ) {
//   if(num === "num" && num == "toUpperCase")
//   alert("its a character");
// }

// Exercise 2
// let int1 = +prompt("enter the first integer");
// let int2 = +prompt("enter the second integer");

// if( int1 > int2){
//   alert("integer 1 is greater");
// }
// else if (in1 = int2){
//   alert(" both integer is equal ");
// }

//  Exercise 3
// let num = +prompt("Enter any number");

// if(num > 0){
//   alert("its is positive");
// }
// else if( num < 0 ){
//   alert("its is negetive");
// }
// else{
//   alert("its is Zero");
// }

//  Exercise 4
// let char = prompt("Enter any 1  Character to check vowel");

// if( char == "a" || char == "e"  || char == "i"  || char == "o"  || char == "u"){
// alert("True its a vowel");
// }
// else{
// alert("False its Not a vowel");
// }

//  Exercise 5
// let password = "Hafeez123"
// let pass = prompt("Enter the password");

// if( password == pass){
//   document.write("“Correct! The password you entered matches the original password");
// }
// else if(password != pass){
//   document.write("Incorrect Password");
// }
// else{
//   document.write("Please Enter Your Password");
// }


//  Exercise 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// alert( "Good day");
// }
// else{
// alert( "Good evening");
// }

//  Exercise 7
// let time = +prompt("Enter the time in 24 hour formate");

// if(time >= 0000 && time < 1200 ){
//   alert("Good Morning");
// }
// else if( time >= 1200 && time < 1700){
//   alert("Good afternoon");
// }
// else if(time >= 1700 && time < 2100){
//   alert("Good evening");
// }
// else if(time >= 2100 && time <= 2359){
//   alert("Good night");
// }

//  Exercise 1
  // Q1,2)     let a= [];
//Q3)    // let a = ["hafeez","waqar","ali"];
//Q4)   //  let b = [2,8,9,5,6];
//Q5)      //  let c = [true, false];
//Q6)      // let d = [2,5,"hafeez","ali",true,false];

 // Q7)     // let abc = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
      // for(let i = 0 ; i < 8 ;i++){
      //   document.write(i+1 + ")" +abc[i]+"<br>")
      // }

// //  Exercise 8

// let arr1 = [" Michael "," John "," Tony "];
// let arr2 = [320,230,480];
//   for(let i = 0 ;i < 3 ; i++){
//       document.write("Score of "+ arr1[i] + " is " + arr2[i] + " Percentage: " + (arr2[i]/500)*100 + " % <br>");
//   }

 //  Exercise 9
  // let array = ["Blue","Green","White","Black"];

  // for(let i = 0; i < array.length ; i++){
  //   document.write(array[i] + "<br>");
  // }


  //  Exercise 9 (a)
  // let array = ["Blue","Green","White","Black"];

  //   array.unshift(prompt("Enter the colour name you want to add in begning"));
  // for(let i = 0; i < array.length ; i++){
  //   document.write(array[i] + "<br>");
  // }
  
  
 //  Exercise 9 (.b)
//  let array = ["Blue","Green","White","Black"];
  
//     array.unshift(prompt("Enter the colour name you want to add in begning"));
//     array.push(prompt("Enter the colour you want to add in last"))

//   for(let i = 0; i < array.length ; i++){
//     document.write(array[i] + "<br>");
//   }

 //  Exercise 9 (.c)
//  let array = ["Blue","Green","White","Black"];
  
//     array.unshift(prompt("Enter the colour name you want to add in begning")+ "<br>" +prompt("Enter the second colour in begning"));

//   for(let i = 0; i < array.length ; i++){
//     document.write(array[i] + "<br>");
//   }

//  Exercise 9 (.d)
//  let array = ["Blue","Green","White","Black"];

//       array.shift();
//   for(let i = 0; i < array.length ; i++){
//     document.write(array[i] + "<br>");
//   }

//  Exercise 9 (.e)
//  let array = ["Blue","Green","White","Black"];

//       array.pop();
//   for(let i = 0; i < array.length ; i++){
//     document.write(array[i] + "<br>");
//   }

// Exercise 9(.f)
//  let array = ["Blue","Green","White","Black"];

//  let abc = +prompt("Enter the index you want to add colour")
//  let clr = prompt("Enter the colour you want to add")

//    array.splice(abc,0,clr);

//   for(let i = 0; i < array.length ; i++){
//     document.write(array[i] + "<br>");
//   }

// Exercise 9(.f)
//  let array = ["Blue","Green","White","Black"];

//  let abc = +prompt("Enter the index you want to delect colour")
//  let clr = +prompt("How many colour color you want to delect")

//    array.splice(abc,clr);

//   for(let i = 0; i < array.length ; i++){
//     document.write(array[i] + "<br>");
//   }


// Exercise 10
// let array1 = [320 , 230 , 480 , 120];
// let array2 = [120,230,320,480];

// document.write("Scores of students : ");
// for(let j = 0; j < array1.length ; j++){
//   document.write(array1[j] + " " );
// }
// document.write("<br>")
// document.write("Orderd Scores of students : ");
// for(let i = 0; i < 4 ; i++){
//     array1.sort()
//     document.write(array1[i] + " " );
// }

// Exercise 11
// let array = ["Karachi","Lahore","Islamabad","Quetta","Peshwar"];

// document.write("Cites List" + "<br>");
// for(let i = 0 ; i < array.length ; i++){
//   document.write(array[i] + " " );
// }
// document.write("<br>")
// document.write("<br>")
// let abc = array.slice(2,4);
// document.write("Selected Cities List : " + " <br>" + abc);

// Exercise 12
// let array = ["This","is","my","cat"];

// let abc = array.concat();
// document.write("Array : "+ "<br>" +abc);

// document.write("<br>");

// let abd = array.join(" ");
// document.write("string : "+ "<br>" +abd);

// Exercise 13
// let array = ["Keyboard","mouse","printer","moniter"];

// document.write("Devices" + "<br>");
// document.write(array + "<br> <br>");

// for(let i =0 ; i < array.length ;i++){
//   document.write(" Out: " + " <br> " + array[i] + "<br> ");
// }


// Exercise 14
// let array = ["Keyboard","mouse","printer","moniter"];

// document.write("Devices" + "<br>");
// document.write(array + "<br> <br>");

// for(let i = 3  ; i >= 0  ;i--){
//   document.write(" Out: " + " <br> " + array[i] + "<br> <br>");
// }

// Exercise 15
// let array = ["Apple","Samsung","Motorola","Nokia","Soni","Hair"];
// 
// 
// 
// 
// 
// 


// Exercise 1 and Exrcise 2 (mix)
// let array = [ [0,1,2,3],
//               [1,0,1,2],
//               [2,1,0,1] ];

//  for(let i = 0 ; i < 3;i++){
//   for(let j = 0 ; j < 4 ; j++){
//     document.write(array[i][j] + " " );
//   }
//   document.write("<br>")
//  }              

// Exercise 3
// for(let i = 0; i <= 10 ; i++ ){
//   document.write(i + "<br>")
// }

// Exercise 4

// let table = +prompt("Enter the number for numtiplication")
// let len = +prompt("write the length you want to multiply ")

// for(let i = 1 ; i <= len ; i++){
//   document.write(table + " x " + i + " = " + table*i + "<br>");
// }

// Exercise 5
// let fruits = ["apple","banana","mango","orange","strawbery"];
// for(let i =0 ; i< fruits.length ; i++){
//   document.write( fruits[i] + " <br> ")
// }
// document.write(  " <br> ")

// for(let i=0 ; i < fruits.length ; i++){

//   document.write("Element at index " + i + " is " + fruits[i] + " <br>")
// }

// // Exercise 6
// let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// document.write(" <b> Counting : </b>" )
// for(let i = 0 ; i < arr1.length ; i++){
//   document.write(  arr1[i] + " ");
// }

// document.write( "<br> <br>" )
// document.write(" <b> Reverse Counting : </b>" )
// for(let i = 14 ; i >= 0  ; i--){
//   document.write(  arr1[i] + " ");
// }


// document.write( "<br> <br>" )
// document.write(" <b> Even :  </b>" )
// document.write("0,2,4,6,8,10,12,14,18,20")


// document.write( "<br> <br>" )
// document.write(" <b> Odd :  </b>" )
// document.write("1,3,5,7,9,,11,13,15,17,19")


// document.write( "<br> <br>" )
// document.write(" <b> Series :  </b>" )
// document.write("2k,4k,6k,8k,10k,12k,14k,16k,18k,20k");

// // Exercise 7
// let A = ["cake","apple pie","cookie","chips","patties"];

// let srch = prompt("Welcome to ABC Backery ,What do you want to oder sir ");

// for(let  i = 0 ; i < A.length ; i++){

//   if(A[i] = srch ){
//     document.write(srch + " is <b>avaliable</b> at index " + i + " in our bakery");
//     break ;
//   }
//   else{
//     document.write("Wr are sorry . " + srch  +"is Not <b>avalible</b>");
//   }
// }














