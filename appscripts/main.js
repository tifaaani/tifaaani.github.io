//http://speckyboy.com/demo/windmill-demo/index.html
require(
    ["../jslibs/raphael.lonce"],
    
    function () {
            
        console.log("yo, I'm alive!");
        var sound = new Audio('../tifaaani.github.io/resources/Beach.mp3');
            sound.loop= true;
            sound.play();

        var svgdiv =document.getElementById("svgcanvas");
 		var paper = new Raphael(svgcanvas);     
 		var mouseDown=false;  
        var circle=paper.circle(0, 0, 5).attr({"fill": "yellow", "stroke" : "white"});
        var raphaelPath;
        var pathString;
        var drawing=false;
        var currentConstellation;
	
        var clearButton = document.getElementById("clearButton");
	    clearButton.addEventListener("click", function(ev){
	    paper.clear();
        constellation(currentConstellation);
	    });
        
        //create a mouseclick event listener to get coordinates of the constellation, which can be used to place dots to draw later
        svgdiv.addEventListener("click", function(ev){
        	paper.circle(ev.offsetX, ev.offsetY, 5).attr({"fill": "yellow", "stroke" : "white"});
            var mx = ev.offsetX;
            var my = ev.offsetY;
            console.log("the x and y position is: " + mx + ", " + my);
        });
        

        //-----------------mousedown event listener------------------ 
        svgdiv.addEventListener('mousedown', function(ev){
            mouseDown=true;
            drawing=true;
            pathString = (" M " + x + " " + y);
            var x = ev.offsetX;
            var y = ev.offsetY;

            //----------------------------------------------------------------------------------------------------
            //-------------------------CREATE A COLORSTRING IN MOUSEDOWN------------------------------------------
            //----------------------------------------------------------------------------------------------------
            var colorString = "hsl(" + 360*sliderH.value + "," + 100*sliderS.value + "," + 100*sliderL.value + ")";   

            function updateColor(h, s, l) {
                var sliderH = document.getElementById('sliderH');
                var sliderS = document.getElementById('sliderS');
                var sliderL = document.getElementById('sliderL');

                var h = 360*sliderH.value;
                var s = 100*sliderS.value;
                var l = 100*sliderL.value;

                var colorString = "hsl(" + h + "," + s + "," + l + ")";   
                return colorString;
            };

            //----------------MAKE COLORSTRING THE STROKE OF RAPHAELPATH------------
            pathString = (" M " + x + " " + y);
            raphaelPath = paper.path(pathString);
                raphaelPath.attr({
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 5,
                        'stroke': colorString
                        });
        });

        //-----------------mousemove event listener--------------------
        svgdiv.addEventListener('mousemove', function(ev){
            var x = ev.offsetX;
            var y = ev.offsetY;
            if (drawing){
                pathString+= (" L " + x + " " + y);
                raphaelPath = paper.path(pathString);
                }        
            });

        //-----------------mouseup event listener--------------------
        svgdiv.addEventListener('mouseup', function(ev){
            mouseDown=false;
            drawing=false;
            var x = ev.offsetX;
            var y = ev.offsetY;

            var colorString = "hsl(" + 360*sliderH.value + "," + 100*sliderS.value + "," + 100*sliderL.value + ")";   
        
            function updateColor(h, s, l) {
            
                var sliderH = document.getElementById('sliderH');
                var sliderS = document.getElementById('sliderS');
                var sliderL = document.getElementById('sliderL');

                var h = 360*sliderH.value;
                var s = 100*sliderS.value;
                var l = 100*sliderL.value;

                var colorString = "hsl(" + h + "," + s + "," + l + ")";
                return colorString;
                };

                    mouseDown=false;
                    pathString+= (" M " + x + " " + y);
                    raphaelPath = paper.path(pathString);   
                    raphaelPath.attr({
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 5,
                        'stroke' : colorString
                        });
        });
        
        //Create vars for the diff buttons so I can call them in event listeners later (button click):
        var ariesButton = document.getElementById("Aries");
        var taurusButton = document.getElementById("Taurus");
        var geminiButton = document.getElementById("Gemini");
        var cancerButton = document.getElementById("Cancer");
        var leoButton = document.getElementById("Leo");
        var virgoButton = document.getElementById("Virgo");
        var libraButton = document.getElementById("Libra");
        var scorpioButton = document.getElementById("Scorpio");
        var sagittariusButton = document.getElementById("Sagittarius");
        var capricornButton = document.getElementById("Capricorn");
        var aquariusButton = document.getElementById("Aquarius");
        var piecesButton = document.getElementById("Pieces")


        //Create vars to hold the different images so they will be displayed when called 
        var ariesImage = "url('resources/aries.jpg')";
        var taurusImage = "url('../tifaaani.github.io/resources/taurus.jpg')";
        var geminiImage = "url('../tifaaani.github.io/resources/gemini.jpg')";
        var cancerImage = "url('../tifaaani.github.io/resources/cancer.jpg')";
        var leoImage = "url('../tifaaani.github.io/resources/leo.jpg')";
        var virgoImage = "url('../tifaaani.github.io/resources/virgo.jpg')";
        var libraImage = "url('../tifaaani.github.io/resources/libra.jpg')";
        var scorpioImage = "url('../tifaaani.github.io/resources/scorpio.jpg')";
        var sagittariusImage = "url('../tifaaani.github.io/resources/sagittarius.jpg')";
        var capricornImage = "url('../tifaaani.github.io/resources/capricorn.jpg')";
        var aquariusImage = "url('../tifaaani.github.io/resources/aquarius.jpg')";
        var piecesImage = "url('../tifaaani.github.io/resources/pieces.jpg')";


        //Add event listeners for the different buttons 
        ariesButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The star ram");
                constellation("aries");
                currentConstellation = "aries";
            } 
        });

        taurusButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The Bull");
                constellation("taurus");
                currentConstellation = "taurus";
            }
        });

        geminiButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The twins");
                constellation("gemini");
                currentConstellation = "gemini";
            }
        });

        cancerButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The Crab");
                constellation("cancer");
                currentConstellation = "cancer";
            }
        });

        leoButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The Lion");
                constellation("leo");
                currentConstellation = "leo";
            }
        });

        virgoButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The Virgin");
                constellation("virgo");
                currentConstellation = "virgo";
            }
        });

        libraButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The Scales");
                constellation("libra");
                currentConstellation = "libra";
            }
        });

        scorpioButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("Scorpion King forever");
                constellation("scorpio");
                currentConstellation = "scorpio";
            }
        });

        sagittariusButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The Archer");
                constellation("sagittarius");
                currentConstellation = "sagittarius";
            }
        });

        capricornButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The Goat");
                constellation("capricorn");
                currentConstellation = "capricorn";
            }
        });

        aquariusButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The Water Bearer");
                constellation("aquarius");
                currentConstellation = "aquarius";
            }
        });

        piecesButton.addEventListener("click", function(ev){
            if (mouseDown=true){
                alert("The Fish");
                constellation("pieces");
                currentConstellation = "pieces";
            }
        });
        

        //Create the different dots that will be drawn with each different constellation 
        var constellation = function (stars){
            if (stars==="aries") {
                paper.clear();
                svgdiv.style.backgroundImage = ariesImage;
                paper.circle(488, 219, 8).attr({"fill": "#ff357c", "stroke" : "white"});
                paper.circle(460, 245, 5).attr({"fill": "#ff357c", "stroke" : "white"});
                paper.circle(310, 220, 5).attr({"fill": "#ff357c", "stroke" : "white"});
                paper.circle(265, 241, 8).attr({"fill": "#ff357c", "stroke" : "white"});
                paper.circle(249, 225, 3).attr({"fill": "#ff357c", "stroke" : "white"});
                } else if (stars==="taurus") {
                    paper.clear();
                    svgdiv.style.backgroundImage = taurusImage;
                    paper.circle(185, 47, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(138, 171, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(427, 265, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(495, 314, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(372, 255, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(626, 353, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(543, 122, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(394, 206, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(420, 242, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(433, 236, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(622, 523, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(732, 484, 3).attr({"fill": "yellow", "stroke" : "white"});
                } else if (stars==="gemini"){
                    paper.clear();
                    svgdiv.style.backgroundImage = geminiImage;
                    paper.circle(390, 165, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(323, 201, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(263, 153, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(371, 228, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(441, 264, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(433, 215, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(307, 273, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(246, 279, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(182, 323, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(205, 351, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(369, 312, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(319, 338, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(372, 387, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(237, 401, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(270, 450, 3).attr({"fill": "yellow", "stroke" : "white"});        
                } else if (stars==="cancer") {
                    paper.clear();
                    svgdiv.style.backgroundImage = cancerImage;
                    paper.circle(200, 185, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(138, 413, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(429, 274, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(362, 247, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(429, 273, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(627, 265, 8).attr({"fill": "yellow", "stroke" : "white"});
                } else if (stars==="leo"){
                    paper.clear();
                    svgdiv.style.backgroundImage = leoImage;
                    paper.circle(121, 253, 5).attr({"fill": "yellow", "stroke" : "yellow"});
                    paper.circle(232, 161, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(236, 246, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(602, 283, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(583, 215, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(533, 162, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(534, 110, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(627, 54, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(663, 90, 3).attr({"fill": "yellow", "stroke" : "white"});
                } else if (stars==="virgo"){
                    paper.clear();
                    svgdiv.style.backgroundImage = virgoImage;
                    paper.circle(680, 175, 8).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(677, 242, 5).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(574, 284, 5).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(507, 293, 5).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(451, 219, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(429, 121, 8).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(357, 429, 8).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(324, 289, 5).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(403, 349, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                } else if (stars==="libra") {
                    paper.clear();
                    svgdiv.style.backgroundImage = libraImage;
                    paper.circle(467, 254, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(393, 478, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(207, 228, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(313, 93, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(102, 280, 3).attr({"fill": "yellow", "stroke" : "white"});
                } else if (stars==="scorpio"){
                    paper.clear();
                    svgdiv.style.backgroundImage = scorpioImage;
                    paper.circle(533, 227, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(532, 173, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(515, 127, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(430, 227, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(409, 255, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(366, 347, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(363, 403, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(311, 483, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(240, 491, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(216, 436, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(238, 401, 3).attr({"fill": "yellow", "stroke" : "white"});
                } else if (stars==="sagittarius"){
                    paper.clear();
                    svgdiv.style.backgroundImage = sagittariusImage;
                    paper.circle(265, 253, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(381, 287, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(448, 288, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(334, 205, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(386, 379, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(206, 326, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(177, 290, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(218, 247, 5).attr({"fill": "yellow", "stroke" : "white"});
                } else if (stars==="capricorn"){
                    paper.clear();
                    svgdiv.style.backgroundImage = capricornImage;
                    paper.circle(18, 350, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(41, 338, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(190, 470, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(168, 332, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(264, 342, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(546, 222, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(559, 155, 8).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(471, 525, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(438, 563, 3).attr({"fill": "yellow", "stroke" : "white"});
                } else if (stars==="aquarius") {
                    paper.clear();
                    svgdiv.style.backgroundImage = aquariusImage;
                    paper.circle(417, 73, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(518, 130, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(643, 182, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(387, 165, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(414, 236, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(367, 91, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(353, 69, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(334, 70, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(211, 155, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(256, 172, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(280, 259, 5).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(248, 334, 3).attr({"fill": "yellow", "stroke" : "white"});
                    paper.circle(216, 184, 3).attr({"fill": "yellow", "stroke" : "white"});
                } else if (stars==="pieces"){
                    paper.clear();
                    svgdiv.style.backgroundImage = piecesImage;
                    paper.circle(645, 376, 8).attr({"fill": "#6b7cff", "stroke" : "white", "stroke-width" : 3});
                    paper.circle(609, 378, 5).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(581, 403, 5).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(534, 406, 5).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(521, 384, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(542, 359, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(578, 351, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(595, 360, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(480, 342, 5).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(333, 335, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(289, 342, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(215, 348, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(178, 355, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(122, 400, 8).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(161, 309, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(205, 241, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(266, 96, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(279, 133, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                    paper.circle(283, 175, 3).attr({"fill": "#6b7cff", "stroke" : "black", "stroke-width" : 3});
                }
            } 
        
    

});