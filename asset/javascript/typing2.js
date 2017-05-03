var aText2 = new Array(
"Skills gained from Gunpla:", 
"1. Process: Following instruction.",
"2. Effort: ability to fully concentrate in a project.",
"3. Enhance: implementing own ideas to improve project."

);
var iSpeed2 = 85; // time delay of print out
var iIndex2 = 0; // start printing array at this posision
var iArrLength2 = aText2[0].length; // the length of the text array
var iScrollAt2 = 20; // start scrolling up at this many lines
 
var iTextPos2 = 0; // initialise text position
var sContents2 = ''; // initialise contents variable
var iRow2; // initialise current row

 
function typewriter2()
{
 sContents2 =  ' ';
 iRow2 = Math.max(0, iIndex2-iScrollAt2);
 var destination = document.getElementById("console2");
 
 while ( iRow2 < iIndex2 ) {
  sContents2 += aText2[iRow2++] + '<br />';
 }
 destination.innerHTML = sContents2 + aText2[iIndex2].substring(0, iTextPos2) + "_";
 if ( iTextPos2++ == iArrLength2 ) {
  iTextPos2 = 0;
  iIndex2++;
  if ( iIndex2 != aText2.length ) {
   iArrLength2 = aText2[iIndex2].length;
   setTimeout("typewriter2()", 500);
  }
 } else {
  setTimeout("typewriter2()", iSpeed);
 }
}



$("#runCode2").on("click", function(){
    typewriter2();
});