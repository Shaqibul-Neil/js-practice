// show text
function showText(){
	document.getElementById('st').innerHTML = "Hi there";
}

// show date
function showDate(){
	document.getElementById('sd').innerHTML = Date();
}

// show date 2
function showDate2(){
	document.getElementById('sd2').innerHTML = Date();
}

// show date 3
function showDate3(){
	document.getElementById('sd3').innerHTML = Date();
}

// change text
function changeText(){
	document.getElementById('ct').innerHTML = "Shaqibul Islam Mabiu Neil Juneja"
}

// bulb on/off
function bulbOn(){
	document.getElementById('image').src="images/on.gif";
}
function bulbOff(){
	document.getElementById('image').src="images/off.gif";
}

// change image
function changeEurope(){
	document.getElementById('img2').src='images/rome.png';
}
function changeRome(){
	document.getElementById('img2').src="images/europe.png";
}
function changeLondon(){
	document.getElementById('img2').src="images/london.png";
}

// change font
function changeFont(){
	document.getElementById('fc').style.fontSize="50px";
	document.getElementById('fc').style.color="red";
	document.getElementById('fc').style.fontWeight="bold";
	document.getElementById('fc').style.opacity="0.5"
}

// text hide
function hideText(){
	document.getElementById('th').style.display="none"
}

// appear text
function appearText(){
	document.getElementById('at').style.display="block"
}

// addition
function addition(){
	window.alert(5+6);
}

// subtraction
function subtraction(){
	alert(11-5);
}

// multiplication
function multiplication(){
	console.log(11*5);
}

// addition2
function addition2(){
	document.getElementById('a2').innerHTML=5+6;
}

// division
function division(){
	document.getElementById('divi').innerHTML = (75/7);
}

// addition3
function addition3(){
	document.write(15+64);
}

// subtraction
function subtraction2(){
	document.write(64-40);
}

// print page
function printPage(){
	window.print();
}

// Js Statements Addition
let a, b, c;
a = 5;
b = 7;
c = a + b;
function jsStatementsAddition(){
	document.getElementById('jss').innerHTML = c;
}

// Js Statements Addition2
let x, y, z;
x = 50;
y = 7;
z = x + y;
function jsStatementsAddition2(){
	document.getElementById('jss2').innerHTML = "The value of z is " + z +".";
}

// Js Statements Operation
let d,f,r,g,h,i;
d = 12;
f = 5;
r = 3;
g = 7;
h = 15;
i = d * h / f + r - g + ( f * g );
function jsStatementsOperation(){
	document.getElementById('jss3').innerHTML = i;
}

// js variables
let qr;
qr = 7;
function jsVariables(){
	document.getElementById('jvar').innerHTML = qr;
}

// js Variables 2
function jsVariables2(){
	document.getElementById('jvar2').innerHTML = 5 * 6 * ( 10 / 2 );
}

// js variables 3
let xz, yz;
xz = 15;
yz = 3;
function jsVariables3(){
	document.getElementById('jvar3').innerHTML = xz * yz;
}

// js variables 4
let xq;
xq = 17;
function jsVariables4(){
	document.getElementById('jvar4').innerHTML = xq + 5;
}

// js variables 5
let hi, ii; // declare hii & ii
hi = 5 / 2; // declare hii & give it the value of 5 / 2
ii = hi * 4; // declare ii & give it the value of hi * 4 
function jsVariables5(){
	document.getElementById('jvar5').innerHTML = ii;
}

// onplay onpause event
function myvideo2(){
	document.getElementById('vids').innerHTML = "The video can play";
}
function myvideo(){
	document.getElementById('vids').innerHTML = "The video has started to play";
}
function myvideo1(){
	document.getElementById('vids').innerHTML = "The video is paused";
}
function myvideo3(event){
	document.getElementById('vids').innerHTML = event.currentTime;
}
function myvideo4(){
	document.getElementById('vids').innerHTML = "Thank You for Watching";
}
function myvideo5(){
	document.getElementById('vids1').innerHTML = "Do not seek";
}
function myvideo6(){
	document.getElementById('vids1').innerHTML = "Volume has been changed";
}


// mouse event
// single/double click
function changeColorSingle(){
	document.getElementById('ccsd').style.color = "blue";
}
function changeColorDouble(){
	document.getElementById('ccsd').style.color = "red";
}

// copy text
function copyTextInput(){
	document.getElementById('input2').value=document.getElementById('input1').value;
}
function copyTextInput2(){
	document.getElementById('input4').value=document.getElementById('input3').value;
}
 // bg color change
// window.onclick = backGroundColour;
// function backGroundColour(){
// document.getElementsByTagName("body")[0].style.backgroundColor = "powderblue";
// }
// window.onclick = bgColor;
// function bgColor(){
// 	document.getElementsByTagName('h3')[4].style.backgroundColor= "orange"
// }
// window.onclick = bgColorChange;
// function bgColorChange(){
// 	document.getElementsByTagName('h4')[0].style.backgroundColor = "red";
// }

// dropdown
document.getElementById("myBtn").onclick = function(){myFunction()};
function myFunction(){
  document.getElementById("myDropdown").classList.toggle("show");
}

document.getElementById('ddb').onclick = function (){dropDownMenu()};
function dropDownMenu(){
	document.getElementById('ddc').classList.toggle('show2');
}

document.getElementById('dd3').onclick = function() {anotherDropDown()};
function anotherDropDown(){
	document.getElementById('dc3').classList.toggle("show3")
}

// double click
function doubleClickMe(){
	document.getElementById('dcm').innerHTML = "This is type 1";
}

document.getElementById('dcm2').onclick = function (){doubleClickMe2()};
function doubleClickMe2(){
document.getElementById('dcm2').innerHTML = "This is type 2";
}

// on mouse down
function onMouseDown(){
	document.getElementById('msdown').style.color = "red";
}
function onMouseUp(){
	document.getElementById('msdown').style.color = "green"
}

// on mouse enter/leave/move
function onMouseEnter(x){
	x.style.height = "914px";
	x.style.width = "618px";
}
function onMouseLeave(x){
	x.style.height = "457px";
	x.style.width = "314px";
}
function btnMouseEnter(x){
	x.style.width = "200px";
	x.style.height = "75px";
	x.style.backgroundColour = "black";
	x.style.fontSize = "30px";
	x.style.color = "white";

}
function btnMouseLeave(x){
	x.style.width = "100px";
	x.style.height = "40px";
	x.style.backgroundColour = "red";
	x.style.fontSize = "16px";
	x.style.color = "white";
}
document.getElementById('hvt').onmouseenter = function(){hoverOverText()};
document.getElementById('hvt').onmouseleave = function(){hoverLeaveText()};
function hoverOverText(){
	document.getElementById('hvt').style.fontFamily = "serif";
	document.getElementById('hvt').style.fontStyle = "italic";
	document.getElementById('hvt').style.fontSize = "50px";
}
function hoverLeaveText(){
	document.getElementById('hvt').style.fontFamily = "sans-serif";
	document.getElementById('hvt').style.fontStyle = "normal";
	document.getElementById('hvt').style.fontWeight = "bold";
	document.getElementById('hvt').style.fontSize = "30px";
}
let xe = 0;  yl= 0; zm = 0; om = 0; oo = 0;
function onMouseMove(){
	document.getElementById('mmove').innerHTML = zm+=0.00005;
}
function onEnterMouse(){
	document.getElementById('menter').innerHTML = xe+=0.1;
}
function onLeaveMouse(){
	document.getElementById('mleave').innerHTML = yl-=1;
}
function onOverMouse(){
	document.getElementById('mover').innerHTML = om+=0.0005;
}
function onOutMouse(){
	document.getElementById('mout').innerHTML = oo-=0.0005;
}

// keyboard events
function isKeyPressed(event){
	let text = "";
	if (event.altKey){
		text = "The Alt Key was pressed";
	}
	else{
		text = "The Alt key was not pressed";
	}
	document.getElementById('altkey').innerHTML = text;
}

function ctrlKeyPressed(event){
	let text = "";
	if (event.ctrlKey){
		text = "ctrl key pressed";
	}
	else{
		text = "ctrl not pressed";
	}
	document.getElementById('crkey').innerHTML = text;
}

// The buttons Property
function mouseButtonClick(event){
	let text = "You Pressed button:" + event.button;
	document.getElementById('mbutton').innerHTML = text;
}

function mouseButtonsClick(event){
	let xb = event.buttons;
	document.getElementById('mbuttons').innerHTML = xb;
}

// The clientXY and screenXY Properties
function showCoordinates(event){
	let cx = event.clientX;
	let	cy = event.clientY;
	let sx = event.screenX;
	let sy = event.screenY;
	let text1 = "clientX:" + cx +", clientY:" + cy;
	let text2 = "screenX" + sx +", screenY:" + sy;
	document.getElementById('co_ordinate').innerHTML = text1 + text2;
}

// The detail Property
function clickMeFast(event){
	let num = event.detail;
	document.getElementById('cmf').innerHTML = num;
}

// The relatedTarget Property
function getRelatedElement(event){
	let text = "The cursor entered " + event.relatedTarget.className;
	document.getElementById('infos').innerHTML = text;
}

// The onkeydown Event
function onKeyDown(element){
	document.getElementById('kdown').innerHTML = "You pressed a key inside the input field";
	element.style.backgroundColor = "red";
}
function onKeyDown2(element){
	element.style.backgroundColor = "red";
}
document.getElementById('kdown3').onkeydown = function() {onKeyDown3()};
function onKeyDown3(){
	document.getElementById('kdown3').style.textDecoration = "underline";
}

function onKeyDown4(){
	document.getElementById('kdown4').style.backgroundColor = "purple";
}
function onKeyUp4(){
	document.getElementById('kdown4').style.color = "white";
}
document.getElementById('kdown5').onkeydown = function(){onKeyDown5()};
function onKeyDown5(){
	document.getElementById('kdown5').style.color = "red";
}
document.getElementById('kdown5').onkeyup = function(){onKeyUp5()};
function onKeyUp5(){
	document.getElementById('kdown5').style.backgroundColor = "yellow";
}

// onkeypress
function onKeyPress(){
	alert("You pressed a key inside the input field");
}

// The keyup Event
document.getElementById('fname').onkeyup = function() {onKeysUp()};
function onKeysUp(){
	let xk = document.getElementById('fname');
	xk.value = xk.value.toUpperCase();
}
function onKeysUp2(){
	let xt = document.getElementById('lname');
	xt.value = xt.value.toUpperCase();
}
function onKeysUp3(event){
 let key = event.code;
 document.getElementById('dets').innerHTML = key;
}
function onKeysUp4(event){
	let key = event.key;
	document.getElementById('dets2').innerHTML = "the key was: " + key;
}
function onKeysUp5(event){
	let key = event.key;
	if (key == "a" || key == "A"){
		let text = "you pressed a key";
		document.getElementById('dets3').innerHTML = text;
	}
	else{
		text = "you didnt press a key";
		document.getElementById('dets3').innerHTML = text;
	}

}
// Press metaKey
function onKeyMeta(event){
	const x = document.getElementById('kmeta');
	if (event.metaKey){
		x.innerHTML = "meta key pressed";
	}
	else{
		x.innerHTML = "meta not pressed";
	}
}

// Caps Lock Activated
function capsLockActivated(event){
	let x = event.getModifierState("CapsLock");
	document.getElementById('cla').innerHTML = "Caps Lock Activated " + x;
}

// focus blur event
function onBlur(){
	let ob = document.getElementById('fname2');
	ob.value = ob.value.toUpperCase();
}

// this/event on onblur
function validateEmailThis(inputField){
	const email = inputField.value;
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

	if (!email.match(emailPattern)){
		inputField.style.borderColor = "red";
		document.getElementById('vmt').innerText = "Please Enter a Valid Email"
	}
	else{
		inputField.style.borderColor = "green";
		document.getElementById('vmt').innerText = "Valid Email";
	}
	document.getElementById('vein').style.backgroundColor = "yellow";
}

function validateEmailEvent(event){
	const email = event.target.value;
	const emailPattern  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

	if (!email.match(emailPattern)){
		event.target.style.borderColor = "blue";
		document.getElementById('vme').innerHTML = "Invalid Email";
	}
	else{
		event.target.style.borderColor = "aqua";
		document.getElementById('vme').innerHTML = "Valid Email";
	}
}

// The relatedTarget property
function getRelatedElement(event){
	document.getElementById('focusblur').innerHTML = "The related element that lost focus was: " + event.relatedTarget.tagName;
}
function getRelated(event){
	alert("The related element that gain focus was: " + event.relatedTarget.tagName);
}

// animation Event
const div1 = document.getElementById('andiv');
function animationEvent(){
	div1.style.animation = "moving 4s 2";
}
div1.addEventListener("animationstart", animationStartEvent);
div1.addEventListener("animationiteration",animationRepeatEvent);
div1.addEventListener("animationend",animationEndEvent);

function animationStartEvent(){
	this.innerHTML = "The animation Has started";
	this.style.backgroundColor = "pink";
}
function animationRepeatEvent(){
	this.innerHTML = "The Animation was played again";
	this.style.backgroundColor = "powderblue";
}
function animationEndEvent(){
	this.innerHTML = "The animation has ended";
	this.style.backgroundColor = "orange";
}

// animation name
const div2 = document.getElementById('andiv2');
div2.addEventListener("animationstart", animationName);
function animationName(event){
	this.innerHTML= "" + event.animationName;
	this.style.backgroundColor = "blue";
}

// The elapsedTime Property
const div3 = document.getElementById('andiv3');
div3.addEventListener("animationiteration", anyDivRepeatAnimation);

function anyDivRepeatAnimation(event){
	this.style.backgroundColor = "red";
	this.innerHTML = "Elapsed time: " + event.elapsedTime + "seconds";
}

// The beforeunload Event
// function beforeUnload(){
	// return "hi how are you";
// }

// window.addEventListener("beforeunload", function(event){
	// event.returnValue = "x";
// });

// The blur Event
// function myFirstName(){
	// let xn = document.getElementById('f_name');
	// xn.value = xn.value.toUpperCase(); 
// }
// document.getElementById('f_name').onblur = function() {myFirstName()};
// function myFirstName(){
	// alert('missing.');
// }
document.getElementById('f_name').addEventListener("blur", myFirstName);
function myFirstName(){
	alert('missing input');
}

// --------------------------

// The focus and blur Events
let xd = document.getElementById('myForm');
xd.addEventListener("focus", myFocusFunction, true);
xd.addEventListener("blur", myBlurFunction, true);

function myFocusFunction(){
	document.getElementById('myInput').style.backgroundColor = "yellow";
}
function myBlurFunction(){
	document.getElementById('myInput').style.backgroundColor = "red";
}

// The focusin and focusout Events
let xf = document.getElementById('myForm2');
xf.addEventListener("focusin", myFocusInFunction);
xf.addEventListener("focusout", myFocusOutFunction);

function myFocusInFunction(){
	document.getElementById('myInput2').style.backgroundColor = "orange";
}
function myFocusOutFunction(){
	document.getElementById('myInput2').style.backgroundColor = "purple";
}

// ------------------------------
// onchange Event
function mySelection(){
	let xs = document.getElementById('mySelect').value
	document.getElementById('result').innerHTML = "You Selected: " + xs;
}

// The onclick Event
function changeMyColor(element, color){
	element.style.color = color;
}
function clickToCopy(){
	document.getElementById('fieldy').value = document.getElementById('fieldx').value;
}

// The contextmenu Event
const divx = document.getElementById('cdiv');
divx.addEventListener("contextmenu", (e)=> {e.preventDefault()});

// The contextmenu custom Event
const divc = document.getElementById('divc');
divc.addEventListener("contextmenu",(e)=>{e.preventDefault()});
function onContextMenu(){
	const divc = document.getElementById('cdivc');
	divc.style.visibility = "visible";
}

// on Error
document.getElementById('imge').onerror = function(){onImageError()}
function onImageError(){
	document.getElementById('imgep').innerHTML = "the image do not exist.";
}

// on input
function onInputText(){
	let xti = document.getElementById('oni').value;
	document.getElementById('onpi').innerHTML = "u wrote: " + xti;
}

// Get User Input
function displayInput(){
	const userInput = document.getElementById('userInput').value;
	document.getElementById('output').innerHTML = "hello, " + userInput;
}