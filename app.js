                                // CHAPTER # 21 TO 25 (STRING METHODS)
                                // CHAPTER # 21 TO 25 (STRING METHODS)   
                                // CHAPTER # 21 TO 25 (STRING METHODS)
                                // CHAPTER # 21 TO 25 (STRING METHODS)                              
                                // CHAPTER # 21 TO 25 (STRING METHODS)
                                // CHAPTER # 21 TO 25 (STRING METHODS) 

                        // Chapter # 21 to 25 string methods . 1

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + lastName;
// alert("Assalam-O-Alikum " + " " + fullName)




                         // Chapter # 21 to 25 string methods . 2
                        
// var  favMobile = prompt("Enter your mobile phone model");
// var lengthOfMobile = favMobile.length;
// document.write("Myb Favorite mobile phone is :" + " " + favMobile + "<br />");
// document.write("Length of Sring :" + " " + lengthOfMobile)






                         // Chapter # 21 to 25 string methods . 3

// var pakistan = "Pakistani"
// var index = pakistan.indexOf("n")
// document.write("String :" + " " + pakistan + "<br />")
// document.write("Index of 'n' :" + " " + index)




                         // Chapter # 21 to 25 string methods . 4

// var helloWorld = "Hello World";
// var lastIndex = helloWorld.lastIndexOf("l");
// document.write("String :" + " " + helloWorld + "<br />")
// document.write("Lasti ndex of 'l' :" + " " + lastIndex)





                         // Chapter # 21 to 25 string methods . 5

// var Pakistani = "Pakistani"
// var charAt = Pakistani.charAt(3)
// document.write("String :" + " " + Pakistani + "<br />")
// document.write("Character at index 3 :" + " " + charAt)





                         // Chapter # 21 to 25 string methods . 6

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert(firstName + " " + lastName)





                         // Chapter # 21 to 25 string methods . 7

// var city = "Hyderabad";
// var replacement =""
// for(var i=0 ; i < city.length; i++){
//         if(city.slice(i,i+5) === "Hyder"){
//                 replacement = "Islam" + city.slice(i+5)
//         }
// }
// document.write("City :" + " " + city + "<br />")
// document.write("After replacement :" + " " + replacement)





                         // Chapter # 21 to 25 string methods . 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var messageReplace = message.replace(/and/g,"&");
// document.write(messageReplace)






                         // Chapter # 21 to 25 string methods . 9

// var string = "472"
// var number = Number(string)
// document.write("Value :" + " " + string + "<br />")
// document.write("Type :" + " String" + "<br />")
// document.write("Value :" + " " + number + "<br />")
// document.write("Type :" + " Number" + "<br />")






                         // Chapter # 21 to 25 string methods . 10
                
// var input = prompt("Enter a word to make it upper case");
// var upperCase = input.toUpperCase();
// document.write("User Input :" + " " + input + "<br / >")
// document.write("Upper case :" + " " + upperCase)





                         // Chapter # 21 to 25 string methods . 11

// var userInput = prompt("Enter your word")
// var firstState = userInput.slice(0,1);
// var secondState = userInput.slice(1)
// firstState = firstState.toUpperCase()
// var titleCase = firstState + secondState
// document.write("User Input :" + " " + userInput + "<br />")
// document.write("Title Case" + " " + titleCase)






                         // Chapter # 21 to 25 string methods . 12

// var num = 33.77;
// var str = num.toString()
// var indexOff = str.indexOf(".")
// var firStr = str.slice(0,indexOff)
// var secStr = str.slice(indexOff+1)
// var complete = firStr+secStr;
// document.write("Number :" + " " + num + "<br />");
// document.write("Result :" + " " + complete)






                         // Chapter # 21 to 25 string methods . 13

// var userName = prompt("Enter your name")
// for(var i = 0; i < userName.length; i++){
        // if(userName[i] === "!" || userName[i] === "," || userName[i] === "." || userName[i] === "@" ){
//              prompt("Enter valid Username")
//              break
//         }
// }






                         // Chapter # 21 to 25 string methods . 14

// var bakery = ["Cake","Biscuit","Pastry","Chips","Chocolate","Egg","Roll","Samosa"]
// var userSearch = prompt("Enter your choice")
// var firstSearch = userSearch.slice(0,1)
// var secondSearch = userSearch.slice(1)
// var firstSearchToUpper = firstSearch.toUpperCase()
// var secondSearchToLower = secondSearch.toLowerCase()
// var combine = firstSearchToUpper + secondSearchToLower
//         if(bakery.indexOf(combine) !== -1){
//                 document.write(combine + " " + "is available in our bakery at index" + " " + bakery.indexOf(combine))
//         }
//         else{
//                 document.write("We are Sorry ." + " " + combine + " is not available in our bakery")
//         }







                         // Chapter # 21 to 25 string methods . 15

// var password = prompt("Enter your password")
// for(var i = 0; i < password.length; i++){
// if(password.length <= 5 || (password.charCodeAt() >=32 && password.charCodeAt(i) <= 63) || (password.charCodeAt(1) <= 48 && password.charCodeAt(1) >= 57)){
//       document.write("Entered Password :" + " " + password +"<br />");
//       document.write("Password can not begin with a number" +"<br />")
//       document.write("Password must contain at least 6 characters" +"<br />")
//       document.write("Please enter a valid password")
//       break
// }
// }






                         // Chapter # 21 to 25 string methods . 16

// var university = "University of Karachi";
// var arr = university.split("")
// for(var i = 0; i < arr.length; i++){
//         document.write(arr[i] + "<br />")
// }

                         





                         // Chapter # 21 to 25 string methods . 17

// var input = prompt("enter your input")
// var length = input.slice(input.length-1,input.length)
// document.write("User Input" + " " + input + "<br />");
// document.write("Last Character of input : " + " " + length)





                         // Chapter # 21 to 25 string methods . 18

// var para = "the quick brown fox jumps over the lazy dog"
// var num = 0
// for(var i = 0; i < para.length; i++){
//         if(para.slice(i,i+3) === "the"){
//             num= num + 1
//         }
// }
// document.write("TEXT :" + " " + para +"<br />");
// document.write("There are " + num + " occurabce(s) of the word 'the'")













                         


                                // CHAPTER # 26 TO 30 (MATH METHODS)
                                // CHAPTER # 26 TO 30 (MATH METHODS)
                                // CHAPTER # 26 TO 30 (MATH METHODS)
                                // CHAPTER # 26 TO 30 (MATH METHODS)
                                // CHAPTER # 26 TO 30 (MATH METHODS)
                                // CHAPTER # 26 TO 30 (MATH METHODS)
                                // CHAPTER # 26 TO 30 (MATH METHODS)

                         // Chapter # 26 to 30 math methods . 1

// var enterNum = prompt("Enter positive integer");
// document.write(enterNum +"<br />");
// document.write("round off number" + " " + Math.round(enterNum) +"<br />");
// document.write("floor value" + " " + Math.floor(enterNum) +"<br />");
// document.write("ceil value" + " " + Math.ceil(enterNum) +"<br />");






                        // Chapter # 26 to 30 math methods . 2

// var enterNum = prompt("Enter negative floating point number");
// document.write(enterNum +"<br />");
// document.write("round off number" + " " + Math.round(enterNum) +"<br />");
// document.write("floor value" + " " + Math.floor(enterNum) +"<br />");
// document.write("ceil value" + " " + Math.ceil(enterNum) +"<br />");







                        // Chapter # 26 to 30 math methods . 3

// var pro = +prompt("Enter negative number");
// if(pro < 0){
//      document.write("The absolute value of " + " " + pro + " is" + " " + (pro+-pro*2))
// }
// else{
//      document.write("The absolute value of " + " " + pro + " is" + " " + pro)
// }






                        // Chapter # 26 to 30 math methods . 4

// var mathRandom = Math.random()*6;
// var round = Math.ceil(mathRandom);
// document.write("Random Dice Value :" + " " + round)







                        // Chapter # 26 to 30 math methods . 5

// var math = Math.random()*2;
// var roundOff = Math.ceil(math);
// if(roundOff === 2){
//         document.write("2" + "<br / > " + "Random coin value : " + "Heads")
// }
// else{
//         document.write("1" + "<br / > " + "Random coin value : " + "Tails")
// }







                        // Chapter # 26 to 30 math methods . 6

// var between = Math.random()*100;
// var controller = Math.ceil(between)
// document.write("Random number between 1 and 100:" + " " + controller)








                        // Chapter # 26 to 30 math methods . 7

// var weightMeasure = prompt("Enter your weight");
// document.write("The weight of user is " + " " + weightMeasure + " kilograms")







                        // Chapter # 26 to 30 math methods . 8

// var choice = Math.random()*10;
// var changing = Math.ceil(choice);
// var take = +prompt("Enter number between 1 to 10")
// if(take === changing){
//         alert("Congratulations, you have won")
// }
// else{
//         alert("Try Again")
// }








 








                                // CHAPTER # 31 TO 34 (DATE METHODS)
                                // CHAPTER # 31 TO 34 (DATE METHODS)
                                // CHAPTER # 31 TO 34 (DATE METHODS)
                                // CHAPTER # 31 TO 34 (DATE METHODS)
                                // CHAPTER # 31 TO 34 (DATE METHODS)
                                // CHAPTER # 31 TO 34 (DATE METHODS)
                                // CHAPTER # 31 TO 34 (DATE METHODS)

                        // Chapter # 31 to 34 date methods . 1

// var date = new Date()
// document.write(date)






                        // Chapter # 31 to 34 date methods . 2

// var arrr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var monthDate = new Date()
// var month = monthDate.getMonth();
// var index = arrr[month];
// document.write("Current Month :" + " " + index)






                        // Chapter # 31 to 34 date methods . 3

// var arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var newDate = new Date();
// var week =arr[newDate.getDay()];
// document.write("<h1>Today is " + " " + week + "</h1>")






                        // Chapter # 31 to 34 date methods . 4

// var day = new Date();
// var indexOf = day.getDay();
// if(indexOf === 0,6){
//         document.write("<h1> It is Fun Day </h1>")
// }






                        // Chapter # 31 to 34 date methods . 5

// var forMoth = new Date();
// var month = forMoth.getDate();
// if(month <= 15){
//         document.write("<h1> First fifteen days of the month</h1>")
// }
// else{
//         document.write("<h1> Last fifteen days of the month </h1>")
// }







                        // Chapter # 31 to 34 date methods . 6

// var dateVar = new Date();
// var freeFor = dateVar.getTime();
// var convertor = freeFor / (1000*60);
// document.write("Current Date :" + dateVar + "<br />");
// document.write("Elapsed milliseconds since January 1, 1970" + " " + freeFor + "<br />");
// document.write("Elapsed minutes since January 1, 1970" + " " + convertor + "<br />")






                        // Chapter # 31 to 34 date methods . 7

// var year = new Date();
// var hour = year.getHours();
// if(hour < 12){
//         alert("It is AM");
// }
// else{
//         alert("It is PM")
// }







                        // Chapter # 31 to 34 date methods . 8

// var newMethod = new Date("Dec 31,2020");
// document.write("<h1>Later Date : " + " " + newMethod + "</h1>")






                        // Chapter # 31 to 34 date methods . 9

// var newRamdan = new Date("April 25,2020")
// var newWhole = new Date();
// var milliRamdan = newRamdan.getTime();
// var milliWhole = newWhole.getTime();
// var diff = milliWhole - milliRamdan;
// var convert =Math.floor(diff / (1000*60*60*24))
// document.write(convert + " days have passed since 1st Ramdan 2020")







                        // Chapter # 31 to 34 date methods . 10

// var reference = new Date()
// var since = new Date("jan 1, 2020")
// var milliReference = reference.getTime();
// var milliSince = since.getTime();
// var diff = milliReference - milliSince
// var changer = Math.floor(diff / (1000))
// document.write("On reference date " + " " + reference + " ," + "<br />");
// document.write(changer + " seconds had passed since beginning of 2020")







                        // Chapter # 31 to 34 date methods . 11

// var newThing = new Date();
// var neewThing = new Date();
// neewThing.setHours(neewThing.getHours()-1)
// document.write("Current Date :" + " " + newThing + "<br />")
// document.write("1 Hour ago , it was " + " " + neewThing)






                        // Chapter # 31 to 34 date methods . 12

// var newdAte = new Date();
// var newForHour = new Date();
// newForHour.setFullYear(newForHour.getFullYear()-100);
// alert("Current Date " + " " + newdAte)
// alert("100 years back , it was " + " " + newForHour)






                        // Chapter # 31 to 34 date methods . 13

// var age = prompt("Enter your age");
// var daOfBir = new Date();
// var diff = daOfBir.getFullYear()-age;
// document.write("<h1> Your age is" + " " + age + "</h1>")
// document.write("<h1> Your birth year is" + " " + diff + "</h1>")







                        // Chapter # 31 to 34 date methods . 13

// var getmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var myName = "Okasha Tanoli"
// var forMonth = new Date();
// var pickMonth =getmonth[forMonth.getMonth()];
// var noOfUnits = 379;
// var chargesPerUnit = 13
// var netAmount = noOfUnits*chargesPerUnit;
// var latePayCharges = 245
// var afterDue = netAmount+latePayCharges
// document.write("<h1>K-Electric Bill</h1>" + "<br / >")
// document.write("Customer's Name :" + " <b>" + myName + "</b>" + "<br / >")
// document.write("Month :" + " <b>" + pickMonth + "</b>" + "<br / >")
// document.write("Number of units:" + " <b>" + noOfUnits + "</b>" + "<br / >")
// document.write("Charges per unit :" + " <b>" + chargesPerUnit + "</b>" + "<br / >" + "<br / >")
// document.write("Net Amount Payable (within Due Date):" + " <b>" + netAmount + "</b>" + "<br / >")
// document.write("Late payment surcharges:" + " <b>" + latePayCharges + "</b>" + "<br / >")
// document.write("Gross Amount Payable (after Due Date) :" + " <b>" + afterDue + "</b>" + "<br / >")






















                                // CHAPTER # 35 TO 38 (FUNCTIONS)
                                // CHAPTER # 35 TO 38 (FUNCTIONS)
                                // CHAPTER # 35 TO 38 (FUNCTIONS)
                                // CHAPTER # 35 TO 38 (FUNCTIONS)
                                // CHAPTER # 35 TO 38 (FUNCTIONS)
                                // CHAPTER # 35 TO 38 (FUNCTIONS)
                                // CHAPTER # 35 TO 38 (FUNCTIONS)

                        // Chapter # 35 to 38 functions. 1

// function DateTime(){ 
//         document.write(new Date())
// }
// DateTime()






                        // Chapter # 35 to 38 functions. 2


// function greet(a,b){
//        a = prompt("Enter First Name");
//        b = prompt("Enter Last Name");
//       return  a + " " +  b
      
// }
// alert("Hello" + " " + greet())







                        // Chapter # 35 to 38 functions. 3

// function sum(c,d){
//         c = +prompt("Enter first value")
//         d = +prompt("Enter Last value")
//         return c+d
// }
// alert(sum())






                        // Chapter # 35 to 38 functions. 4

// function calculator(val1,ope,val2){
//       val1 = +prompt("Enter first value")
//       ope = prompt("Enter operator")
//       val2 = +prompt("Enter Second value")
//     if(ope === "+"){
//             return val1 + val2
//     }
//     else if(ope === "-"){
//             return val1 - val2
//     }
//     else if(ope === "*"){
//             return val1 * val2
//     }
//     else if(ope === "/"){
//             return val1 / val2
//     }
//     else if(ope === "%"){
//             return val1 % val2
//     }
//     else{
//             return "Enter correct operator"
//     } 

// }

// alert(calculator())









                        // Chapter # 35 to 38 functions. 5

// function square(a){
//       alert(a*a)
// }
// square(2)






                        // Chapter # 35 to 38 functions. 6


// function factorial(n){
//         var h = 1
//         for(var i = 1; i <= n; i++){
//              h = h*i
//         }
//         return h
// }
// alert(factorial(5))








                        // Chapter # 35 to 38 functions. 7

// function count(start,end){
//         start = prompt("Enter start number")
//         end = prompt("Enter end number")
//         for(var i = start; i <= end; i++){
//                 document.write(i + "<br />")
//         }
// }
// count()








                        // Chapter # 35 to 38 functions. 9

// function area(width,height){
//         var A  = width * height
//         return A
// }
// var hei = 20
// var s = area(2,hei)
// alert("Area =" + " " + s)







                        // Chapter # 35 to 38 functions. 10

// function pan(){
//         var inp = prompt("Enter word") 
//         var b = ""
//         for(var i = inp.length-1; i >= 0; i--){
//                 b += inp[i]
//         }
//         if(inp === b){
//                 alert("yes")
//         }
//         else{
//                 alert("no")
//         }
// }
// pan()





                        // Chapter # 35 to 38 functions. 11 1st Way

// var str = "Okasha Ali Zain OkashaTanoli";
// var arrstr = str.split(" ");
// var find = arrstr.sort((strA,strB) =>{ return strB.length - strA.length});

// console.log(find[0])


                        // Chapter # 35 to 38 functions. 11 2nd Way

// var str = "Okasha Ali Zain OkashaTanoli";
// var arrstr = str.split(" ");
// var form = arrstr.reduce((first ,second) => {return first.length > second.length ? first : second})
// console.log(form)







                        // Chapter # 35 to 38 functions. 12

// const toCapital = str => {
// const grape = str.split(" ")
//  return  grape.map(grape => grape[0].toUpperCase() + grape.slice(1).toLowerCase()).join(" ");
// }
// alert(toCapital("okasha ali zain okashaTanoli"));








                        // Chapter # 35 to 38 functions. 13

// function identifier(string,letter){
//         var c = 0
//            for(var i = 0; i < string.length; i++){
//                    if(string[i] === letter){
//                         c = c + 1
//                    }
//            }
//            return c
// }
// var s = prompt("Enter string");
// var p = prompt("Enter word which is to be count")
// console.log(identifier(s,p))








                        // Chapter # 35 to 38 functions. 14

// function calcCircumference(radius){
//         var circum = 2*3.142*radius;
//         return alert("The Circumference is :" + " " + circum)
// }
// calcCircumference(2);



// function calcArea(radius){
//         var area = 3.142 * ( radius*radius);
//         return alert("The calcArea is :" + " " + area)
// }
// calcArea(3)






























