var aText3 = new Array(
"Zelda Games allowed Marcos to:", 
"1. Improve Problem Solving Skills.",
"2. Identify problem and look for possible solutions.",
"3. Implement solutions."
);
var iSpeed3 = 85; // time delay of print out
var iIndex3 = 0; // start printing array at this posision
var iArrLength3 = aText3[0].length; // the length of the text array
var iScrollAt3 = 20; // start scrolling up at this many lines
 
var iTextPos3 = 0; // initialise text position
var sContents3 = ''; // initialise contents variable
var iRow3; // initialise current row

 
function typewriter3()
{
 sContents3 =  ' ';
 iRow3 = Math.max(0, iIndex3-iScrollAt3);
 var destination = document.getElementById("console3");
 
 while ( iRow3 < iIndex3 ) {
  sContents3 += aText3[iRow3++] + '<br />';
 }
 destination.innerHTML = sContents3 + aText3[iIndex3].substring(0, iTextPos3) + "_";
 if ( iTextPos3++ == iArrLength3 ) {
  iTextPos3 = 0;
  iIndex3++;
  if ( iIndex3 != aText3.length ) {
   iArrLength3 = aText2[iIndex3].length;
   setTimeout("typewriter3()", 500);
  }
 } else {
  setTimeout("typewriter3()", iSpeed);
 }
}



$("#runCode3").on("click", function(){
    typewriter3();
});