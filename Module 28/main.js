var input = document.getElementById('input_id')
var button = document.getElementById('btn_id')
var text = document.getElementById("teksti_id")

button.onclick = function(){
    text.innerHTML = input.value
}

var text1 = "The best school is Digital School"
var result1 = text1.search("Digital School") 
document.getElementById("rez1").innerHTML = result1// etregon poziten ncilen o qajo fjal, -1 e shfaq kur se permbush kushtin

var text2 = "The best school is Digital School"
var result2 = text2.search(/Digital School/)//e njejt e kthen
document.getElementById("rez2").innerHTML = result2

var text3 = "The best school is Digital School"
var result3 = text3.replace(/Digital School/, "Another School")
document.getElementById("rez3").innerHTML = result3

var text4 = "abcdef"
var regex = new RegExp('abc')
document.getElementById('rez4').innerHTML = regex.test(text4)

var text5 = "The best school is Digital School"
var regex1 = /school/g;//me g perfundon shprehja
document.getElementById('rez5').innerHTML = text5.match(regex1)

var text6 = "The best school is Digital School"
var regex2 = /[abc]/g
document.getElementById('rez6').innerHTML = text6.match(regex2)

var text7 = "Digital School is in top 10 best schools"
var regex3 = /[0-9]/g;
document.getElementById('rez8').innerHTML = text7.match(regex3)

var text8 = "100 percent"
var regex4 = /\d/g;
document.getElementById('rez9').innerHTML = text8.match(regex4)

var text9 = "hello, helloo, heloooo, helloooooo"
var regex5 = /o{3,5}/g
document.getElementById('rez10').innerHTML = text9.match(regex5)

var text10 = "bestfriend, girlfriend, boyfriend"
var regex6 = /end$/g
document.getElementById('rez11').innerHTML = text10.match(regex6)

var text11 = "cat, catalog, category"
var regex7 = /^cat/g
document.getElementById('rez12').innerHTML = text11.match(regex7)