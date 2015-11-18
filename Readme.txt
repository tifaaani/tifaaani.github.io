Ong Shumin
A0101374U
NM2207 Computational Media Literacy 

I designed an interactive web-based application where users can learn more about the 12 zodiac constellations. I wanted to create an immersive learning experience instead of merely reading about the constellations, because constellations are what you see in the sky and should be visualised. Since there are too many constellations (there are 88 in total), I only selected a specific group of them i.e. the Zodiacs. I want to allow users to navigate through each of the constellations and trace them out with the drawing function we learnt in class. 

I also thought that the inclusion of background music (which sounds like some trip outer space song) could be used to add to the whole space-travel-explore the stars experience. I bought the song “Beach Baby” by Miracle Fortress on iTunes and converted it to MP3, then inserted the audio code into the javascript element of my code like what we learnt in class. I put the song on loop. 

I decided to write an app with the Raphael canvas as the underlying aspect. I created 12 different buttons, with event listeners for each button such that when each was clicked, its corresponding image would appear. 

I also created “dots” as the stars in the constellations with the paper.circle feature of RaphaeJS such that users would be able to see these dots and then join them by drawing lines with their mouse over the screen. For this, I used not only the paper.circle() feature to create dots which we had learnt in class, I also used the paper.path() feature and the mouse event listeners such that the user would only “draw” (i.e. Create a path) when the user has a mousedown and mousemove event.

I thus created different mouse event listeners and kept track of the mouse state such that different things happen when the user clicks and drags and when the user releases the click. One issue I previously had was to differentiate the mousedown event between the user clicking a button to select a constellation and the user clicking the canvas to start drawing. It was initially done in the way that once the user clicked the button, my code would recognise it as a mousedown and immediately start drawing from the point of click (i.e. from the button). That was extremely undesirable and with the help of Professor Lonce I created a separate drawing variable “drawing” such that I could use it in an “if” statement (if (drawing) then… [insert code to start pathString]). 

I also incorporated the use of HSL sliders which we learnt in class such that users could change the colours of their strokes. This makes the entire app more customisable since it is a drawing app after all. 

Since this was a drawing app, I also let users clear their mess after they were done with the help of the paper.clear() function. I create a function such that Javascript would recognise which “constellation” state the user was in, and that allowed me to place the dots back on the drawing canvas even though the user hits “clear”, which would typically clear all SVG elements on the page. 

Using what we learnt in CSS, I also customised the look and feel of my web app in terms of colour, buttons etc. 

I think I could have improved this web application further if I was able to standardise the images of the constellations used. The ones I featured on my app are all from the web. I would also have liked to create certain event listeners such that when the user successfully connected one dot to another, the dot would change color/the line would straighten into a proper line, such as in the instance of using the pen tool in Adobe Illustrator where the point snaps into place… 





