/* part one 1:8 */
/*
1- Write a program that allow to user enter number then printit
Example
Input: 5
Output: 5 
 */

// console.log("example 1 : ");
// var number=prompt("pleas enter number: " );
// console.log('output '+number);
//===================================================================================================
/*
2- Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no
Example1
Input: 12 Output Yes 
Example 2
Input: 9 Output No*/

// console.log("example 2 : ");

// var number=Number(prompt('pleas enter number: '));

 
  
// if(       !(number%3) && !(number%4)  ){
//     console.log('yes');
// }

// else{
//     console.log('No,because : ');
//     if(number%3!=0)
//     console.log(number+' : can not divid 3');
//     if(number%4!=0)
//     console.log(number+' : can not divid 4');
// }

//===================================================================================================
/*
Write a program that allows the user to insert 2 integers then print the max
Example1
Input: 3 5
Output: 5
Example 2
Input: 10 7
Output: 10
*/
// var firstNumber=Number( prompt('enter first number') );
// var secondNumber=Number( prompt('enter seconde number'));

// if(firstNumber>secondNumber)
// console.log('maxuimam number : '+firstNumber);
// else if (secondNumber>firstNumber ) {
//     console.log('maxuimam number : '+secondNumber);
// }

//  else {
//     console.log(firstNumber + 'and' + secondNumber +'  both number are equal');
// }

//===================================================================================================

/*
4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.
Example 1
Input: -5
Output negative 
Example2
Input: 10 
Output positive
*/

// var number =Number(   prompt('enter the number' )  );
// if(number>=0)
// console.log(number+' : postive number');
// else
// console.log(number+' : nagtive number ');

//===================================================================================================
/*
5- Write a program that take 3 integers from user then print the max element 
and the min element.
Example 1
 Input:7,8,5
Output:
max element = 8 
min element = 5 
Example2
Input: 3 6 9 
Outputs:
Max element = 9 
Min element = 3
*/
// var n1=Number(     prompt('plese enter number one')   );
// var max=n1;
// var numberMax='n1';
// var min=n1;
// var numberMin='n1';
// var n2=Number(     prompt('plese enter number two')   );
// if(n2>max){
// max=n2;
// numberMax='n2';
// numberMin
// }
// if(n2<n1)
// {
//    min=min; 
//    numberMin='n2';
// }
// var n3=Number(     prompt('plese enter numberthree')   );
// if(n3>max){
// max=n3;
// numberMax='n3';
// }

// if(n3<min){
//     min=n3;
//     numberMin='n3';
// }
// if(n1===n2&&n1===n3){
// console.log('n1 and n2 and n3 are equale')
// var equal=true;
// }
// if(!equal){
// console.log('maxiumam Number is : '+numberMax+'='+ max);

// console.log('miniumam Number is : '+numberMin+'='+min);
// }




//===================================================================================================


/*
6- Write a program that allows the user to insert integer number then 
check If a number is oven or odd
7- Example 1
Input: 8 
Output: even
Example 2
Input: 7
Output: odd
*/


// var number=Number(      prompt( 'pleas enter intger number'  )   );

// if(number%2)
// console.log(number +' is: odd Number');
// else
// console.log(number+'  is: even Number');





//===================================================================================================



/*
8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant
Example1
Input: O
Output: vowel 
Example 2
Input: b
Output:
Consonan
*/

// var character=prompt('pleas enter character ');
// if(character=='a'||character=='A'||character=='e'||character=='E'||character=='o'||character=='O'||
// character=='i'||character=='I'||character=='u'||character=='U')
// console.log(character+': is vowel  character');
// else
// console.log(character +' is cosonan character');



//===================================================================================================
/* addtion programe   */
// electroal exame
/*
برنامج بيعمل اختبار الكتروني للطالب وبيطبع درجته


*/
var answer;
var grade=0;
var nameStudent=prompt('enter your name');
var GBA;

answer=prompt('1- How ------- you ?');

if(answer==='are')
grade+=10;


answer=prompt('2- what------- your name ?');
if(answer==='is')
grade+=10;


answer=prompt('3- How old ------- you ?');
if(answer==='are')
grade+=10;


answer=prompt('4- see ------- latter ?');
if(answer==='you')
grade+=10;


answer=prompt('5- shut-------  ?');
if(answer==='up')
grade+=10;


if(grade<(.5*50))
GBA='F';
else if(grade>=(.50*50)&&grade<(.60*50))
GBA='D';

else if(grade>=(.60*50)&&grade<(.70*50))
GBA='C';

else if(grade>=(.70*50)&&grade<(.85*50))
GBA='B';

else if(grade>=(.80*50)&&grade<(1*50))
GBA='A';
else 
console.log('maxuimam grade 50')

console.log('|    your GBA is    : '+GBA+'             |');
console.log('the grade of student : '+nameStudent);
console.log('------------------------------------');
console.log('|     your grade is : '+grade+' frome 50  |');
console.log('|    your GBA is    : '+GBA+'             |');
console.log('|----------------------------------|');




