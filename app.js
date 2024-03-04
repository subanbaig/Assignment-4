alert("CHapter 14-16")

// Q-1
var myArr = [];

// Q-2
var emptyArr=[];

// Q-3
var pets=["Cat","Dog","Sheep"];
console.log(pets);

// Q-4
var num=[2,5,8,9];
console.log(num);

// Q-5
var bool=[true,false];
console.log(bool);

// Q-6
var mix=[5,"car",true,65,"sheep",false];
console.log(mix);

// Q-7
var qual=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("1."+qual[0]+"<br>"+"2."+qual[1]+"<br>"+"3."+qual[2]+"<br>"+"4."+qual[3]+"<br>"
+"5."+qual[4]+"<br>"+"6."+qual[5]+"<br>"+"7."+qual[6]+"<br>"+"8."+qual[7]+"<br>");

// Q-8
var names=["Ali","Ahmed","Zohaib"];
var num=[320,250,420];
var perc=[(num[0]/500)*100 ,(num[1]/500)*100,(num[2]/500)*100 ];

document.write("<br> Score of"+" "+names[0]+" is "+num[0]+". Percentage"+" "+perc[0]+"% . <br>"+
"<br> Score of"+" "+names[1]+" is "+num[1]+". Percentage"+" "+perc[1]+"% . <br>"+
"<br> Score of"+" "+names[2]+" is "+num[2]+". Percentage"+" "+perc[2]+"% . <br><br>")

// Q-9
var color=["Red","Blue","Yellow","Black"];
document.write(color+"<br><br>");

// a
color.unshift(prompt("Enter Color Start")); 
document.write(color+"<br><br>");
// b
color.push(prompt("Enter Color to End")); 
document.write(color+"<br><br>");
// c
color.unshift("Teal","Light Blue","Purple");
document.write(color+ "<br><br>");
// d
color.shift();
document.write(color+"<br><br>")
// e
color.pop();
document.write(color+"<br><br>")
// f
var index=+prompt("Enter the index where you want to add the color:");
var colorName=prompt("Enter the name of the color you want to add:");
color.splice(index,0,colorName);
document.write(color.join(", ")+"<br><br>");
// g
var index=+prompt("Enter Index Number");
var numToDelete=+prompt("Enter Number of color you want to Delete");
color.splice(index, numToDelete);
document.write(color.join(", ")+"<br><br>");

// Q-10
var studentScore=[320,230,480,120];
studentScore.sort((a,b)=> a-b);
document.write(studentScore+"<br><br>");

// Q-11
var cities=["Karachi","Lahore","Quetta","Murree","Skardu"]
var selectedCites = cities.slice(1,4);
document.write("Cities List: <br>"+cities+"<br> <br>Slected Cities List: <br>"+selectedCites+"<br><br>")

// Q-12
var myArr=["This","is","my","cat."];
var string = myArr.join(" ");
document.write(string+"<br><br>");

// Q-13
var newArr=["Keyboard","Mouse","Printer","Monitor"];
document.write("Out: <br>"+newArr[0]+"<br> Out: <br>"+newArr[1]+"<br> Out: <br>"+newArr[2]+"<br> Out: <br>"+newArr[3]+"<br><br>")

// Q-14
var newArr=["Keyboard","Mouse","Printer","Monitor"];
document.write("Out: <br>"+newArr[3]+"<br> Out: <br>"+newArr[2]+"<br> Out: <br>"+newArr[1]+"<br> Out: <br>"+newArr[0]+"<br><br>")

// Q-15
var brand=["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
document.write("<select><option>"+brand[0]+"</option>"+"<option>"+brand[1]+"</option>"+"<option>"+brand[2]+"</option>"+
"<option>"+brand[3]+"</option>"+"<option>"+brand[4]+"</option>"+"<option>"+brand[5]+"</option>"+"</select>")

// ************************* Chapter 14 *************************
document.write("<h2>Chapter 14</h2>")
// Q-1
var emptyArr=[" "];

// Q-2
var myArr=["Hello"];
document.write(myArr+"<br><br>");

// Q-3
var alphabet = ["h","i","j","k"];
document.write(alphabet[2]+"<br><br>");

// Q-4
var alphabet = ["h","i","j","k","l","m","n","o"];
document.write(alphabet.length+"<br><br>");

// Q-5
var arr=["First"];
arr[1]="Second"
document.write(arr[1]);

// ************************* Chapter 15 *************************
document.write("<h2>Chapter 15</h2>")
// Q-1
var pet=["Dog"];
document.write(pet+"<br>");
pet.push("Cat");
document.write(pet+"<br><br>");
alert(pet[1]);

// Q-2
var alphabet = ["h","i","j","k"];
document.write(alphabet+"<br>");
alphabet.pop();
document.write(alphabet+"<br><br>");

// Q-3
var alphabet = ["h","i","j","k"];
document.write(alphabet+"<br>");
alphabet.push(1,2);
document.write(alphabet+"<br><br>");

// ************************* Chapter 16 *************************
document.write("<h2>Chapter 16</h2>")
// Q-1
var size=["S","M","XL","XXL","XXXL"];
document.write(size+"<br>");
size.shift();
document.write(size+"<br><br>");

// Q-2
var size=["S","M","XL","XXL","XXXL"];
document.write(size+"<br>");
size.unshift("XXM");
document.write(size+"<br><br>");

// Q-3
var arr=["First"];
arr.unshift("Second")
document.write(arr+"<br><br>");
alert(arr[0]);

// Q-4
var size=["S","M","XL","XXL","XXXL"];
var indexOfXL = size.indexOf("XL");
size.splice(indexOfXL,0,"L");
document.write(size+"<br><br>");

// Q-5
var size=["S","M","XL","XXL","XXXL"];
var newSize= size.slice(0,3);
document.write(newSize+"<br><br>");

// Q-6
var pet=["dog","cat","ox","duck","frog"];
document.write(pet+"<br><br>");
pet.splice(1,3,"Snake","Fox");
document.write(pet+"<br><br>");

// Q-7
var pet=["dog","cat","ox","duck","frog"];
document.write(pet+"<br><br>");
pet.splice(1,2);
document.write(pet+"<br><br>");

// Q-8
var pet=["dog","cat","ox","duck","frog","flea"];
var newPets=pet.slice(3,5);
document.write(pet+"<br>");
document.write(newPets+"<br>");
