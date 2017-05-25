 var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setUseWrapMode(true);
    document.getElementById('editor').style.fontSize='11px';


 var editor2 = ace.edit("editor2");
    editor2.setTheme("ace/theme/monokai");
    editor2.getSession().setMode("ace/mode/javascript");
    editor2.getSession().setUseWrapMode(true);
    document.getElementById('editor2').style.fontSize='11px';

 var editor3 = ace.edit("editor3");
    editor3.setTheme("ace/theme/monokai");
    editor3.getSession().setMode("ace/mode/javascript");
    editor3.getSession().setUseWrapMode(true);
    document.getElementById('editor3').style.fontSize='11px';

 var editor4 = ace.edit("editor4");
    editor4.setTheme("ace/theme/monokai");
    editor4.getSession().setMode("ace/mode/javascript");
    editor4.getSession().setUseWrapMode(true);
    document.getElementById('editor4').style.fontSize='11px';


// display resume in javascript format
var resume1 = `/* Since little, Marcos loved playing with legos. He loved the fact that the potential to build something was never-ending.
Legos allowed Marcos to explorer his creativity and imagination. */
var planning = "identifies the goals or objectives to be achieved.";
var problemSolving = "using generic or ad hoc methods, in an orderly manner, for finding solutions to problems.";

var lego = {

    creativity: "Learned designing and prototyping",

    organization: Planning + ProblemSolving,

    fun: "develop lateral thinking in fun enviroment",

    persistent: function(err) {
        if(err) {
            findSolution();
            return solution;
        }
        else if (err) {
            takeBreak();
            findSolution();
            return solution;
        }
        else {
            enjoyLife();
        }
    },

    //How this applies to Development
    codingSkills: {
        spatialAwareness,
        problemSolving,
        organization,
        designAndArchitecture
    }

};`;

var resume2 = `/* Marcos is also passionate about Gunpla.
Gunpla not only challanges his precision and detailing skills, but also allows him to be artistic. He loves painting each model differently making them unique */
var fs = require("fs");

var precision = "the quality, condition, or fact of being exact and accurate."
var concentration = "the action or power of focusing one's attention or mental effort."

var gunpla = {

    process: "Following specific instruction to build project",

    effort: precision + concentration,

    enhance: "intensify, increase, or further improve the quality",

    build: function() {
        fs.readFile("instruction.txt", "utf8", function(error, data) {

            if (error) {

                readFileAgain();
            }
            else {

                build(data);
            }

        })

    },

    //How this applies to Development
    codingSkills: {
        detail,
        artistic,
        followInstruction,
        enhance
    }

};`;

var resume3 = `/* Marcos Loves Video Games specially the ones that requires critical thinking. His Favorite Game is The Legend Of Zelda series,  Zelda games have always been known for being puzzle-filled action adventure games */

var exploration = "the action of traveling in or through an unfamiliar area in order to learn about it.";
var puzzle = "problem designed to test ingenuity or knowledge.";

var zelda = {

	memorization: "memorize the correct sequence",

	concept: "provides general idea on how to solve a problem",

	inquisitive: exploration + puzzle,

	senseOfAchievement: "a proud feeling of having done something difficult and worthwhile",


	//How this applies to Development
	codingSkills: {
		debugging,
		exploringNewTechnologies,
		concept,
		senseOfAchievement
	}

};`;

var resume4 = `/* Marcos is a passionate Web Developer. His loves towards Coding came from his passions in legos, gundams and video games.*/

var marcos = {

	bornIn: "Asuncion Paraguay",

	ethnicity: "Korean",

	interests: ["Lego","Gunpla","Zelda","Final Fantasy", "Cooking",          "HearthStone"],

	developmentSkills: {

		frontEnd: ["HTML5", "CSS3", "Bootstrap", "Javascript", "JQuery",     "Handlebars JS", "React JS" ],
		backEnd: ["FireBase", "MySQL", "MongoDB", "Node JS"]

	},
	personalSKills: {

		language: ["Spanish","Korean","English"],
		fastLearner: "enthusiastic about gaining knowledge and new insights",
		highlyMotivated: "assertive individual who takes initiative with minimal supervision",
		leadership: "recognized by various employers. Achieved manager position in every job he worked for"

	}
	

};`;

//====================================================================================================================================
editor.setValue(resume1, -1);
editor2.setValue(resume2, -1);
editor3.setValue(resume3, -1);
editor4.setValue(resume4, -1);



$("#content1").hide();

$("#work").hide();
$("#section-edu").hide();
$("#section-contact").hide();

$("#about").on("click", function(){
    $("#content1").show();
    $("#section-intro").fadeOut();
    $("#work").fadeOut();
    $("#section-edu").fadeOut();
    $("#section-contact").fadeOut();
});

$("#portfolio").on("click", function(){
    $("#work").show();
    $("#section-intro").fadeOut();
    $("#content1").fadeOut();
    $("#section-edu").fadeOut();
    $("#section-contact").fadeOut();
    $('.work-inner').mixItUp();
});

$("#education").on("click", function(){
    $("#section-edu").show();
    $("#section-intro").fadeOut();
    $("#content1").fadeOut();
    $("#work").fadeOut();
    $("#section-contact").fadeOut();
});

$("#contact").on("click", function(){
    $("#section-contact").show();
    $("#section-intro").fadeOut();
    $("#content1").fadeOut();
    $("#work").fadeOut();
    $("#section-edu").fadeOut();
});


//when findOut button is clicked, Display about section and slide up Section-Intro
$("#findOut").on("click", function(){
	$("#content1").show();
	$("#section-intro").slideUp();
});


//tab1 function
$(".tab1").on("click", function(){
	$("#title").html("1.He Loves Legos");
	$("#subTitle").html("Creative Mind");
});


//tab2 function
$(".tab2").on("click", function(){
    $("#title").html("2.Gunpla");
    $("#subTitle").html("Artistic View");


});


//tab3 function
$(".tab3").on("click", function(){
    $("#title").html("3.Zelda");
    $("#subTitle").html("Problem Solving");
	
});


// tab4 function
$(".tab4").on("click", function(){
    $("#title").html("So Who is Marcos?");
    $("#subTitle").html("Someone Creative, Artistic Who Enjoys Problem Solving");

	
});



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


