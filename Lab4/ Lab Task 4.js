var num1 = 10;
var num2 = 5;
console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
var num1 = 15;
var num2 = 22;
var num3 = 8;
var largest = num1;
if (num2 > largest) {
largest = num2;
}
if (num3 > largest) {
largest = num3;
}
console.log("The largest number is: " + largest);
var num = 5;
var factorial = 1;
for (var i = num; i > 0; i--) {
factorial *= i;
}
console.log("Factorial of " + num + " is: " + factorial);
var str="JavaScript";
var reversedStr="";
for(var i=str.length-1;i>=0;i--){
    reversedStr+=str[i];
}
console.log("Reversed string: "+reversedStr);
var arr=[1,2,3,4,5];
var sum=0;
for(var i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log("Sum of array elements: "+sum);
var number=29;
var prime=true;
for(var i=2; i<number;i++)
{
    if(number%i==0){
        prime=false;
        break;
    }
}
if(prime){
    console.log(number+"is a Prime Number");
}
else{
    console.log(number+"is not a Prime Number");
}
var arr = [1, 2, 3, 4, 5];
// Add an element to the end of the array
arr.push(6);
// Remove the first element
arr.shift();
console.log("Modified array: " + arr);
var person = {
name: "Alice",
age: 30
};
console.log("Name: " + person.name);
console.log("Age: " + person.age);