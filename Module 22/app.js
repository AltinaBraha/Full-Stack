console.log("Good Job Guys !")

var x = 5

//var 123 = 10 ; nuk duhet mi emertu variablat me numra
//var *ds = 45 ; nuk duhet me ja nis me special characters


var a = 50 + 50
console.log(a)

var b = 10
var c = 20
var d = b + c
console.log(d)


var g = c - b
console.log(g)


var k = 10
var l = 4;
var m = k % l
console.log(m)


var n = 99
n++ //postfix
console.log(n)

var o = 101;
o--
console.log(o)


var p = 5
var q = 2
var h = p**q // 5 ** 2
console.log(h)

///////////////////////////////////

var e = 15  // 15 
e +=5 // e = 15 + 5   --> 20
console.log(e)


e -=5
console.log(e) // -- > 15


/////////////////////////////

var u = 10 // u - 10
u *=3 // u = 10 * 3 
console.log(u) // u = 30


u /=2 // u = 30 / 2
console.log(u) // u = 15

//////////////////////


var t = 5
var i = 5
console.log(t == i) // 5 == 5  --> true


var n1 = 6
var n2 = 7
console.log(n1 != n2) // --> true


console.log(n1 > n2)/// 6 > 7 ?   False
console.log(n1 < n2)// 6 < 7 ? True


var numri = 123
var tekst = "123"
console.log(numri === tekst) // False


var firstName = "Digital"
var lastName = "School"
var fullName = firstName + " " + lastName
console.log(fullName)


var school = "Shkolla Digjitale"
console.log(`Hello from ${school}`)


//AND Operator - Duhet mu plotsu krejt kushtet qe me na kthy shprehja TRUE
var age = 24
console.log(age >=18  && age <=65)



//OR Opearator - Vetem nese nje kusht eshte True, shprehja na kthen True
var num1 = 5
var num2 = 6
console.log(num1==5 || num2 ==5)

var num3 = 9
var num4 = 10
console.log(!(num3==num4))