# Front-End Challenge

This challenge is designed to let you show your thought process and approach to some basic tasks of front-end engineering. There are many ways to perform these tasks and we are not looking for a particular "right way". However, we do appreciate some basic principles of software design including performance, maintainability, usability, etc... 

Along with these tasks, we welcome any commentary or feedback. It can either be included in comments in your code or as a narrative. 

Please refrain from using external libraries other than jQuery and Bootstrap.  We'd like to see how well you code, not how well you can hammer together a bunch of libraries. 

Here you are given an HTML, JSON, javascript and css file that pull data from the JSON file and display it for the user to see. In order to work, this challenge must be hosted on a web server of some kind, because the Javascript code does make some AJAX calls.  We've found MAMP to be an easy and convenient way to do this, if you don't already have a favorite way.  If you have it set up correctly, you should see something like this screenshot when you navigate to index.html:

<img src="https://github.com/WhitehawkVentures/FrontEndChallenge/blob/master/img/front-end-challenge-screenshot.png?raw=true"/>  

## Tasks to complete

Please complete the following tasks:

1. In addition to its title and tagline, each product has an attribute named "description". We'd like to update the UI so that whenever you mouseover a product, an overlay comes across it with the description. 
2. Convert the page to use Bootstrap to make it responsive, so when it's viewed on a mobile device there's no left-right scrolling and it still looks ok visually (i.e. it's easy to read) 
3. Add an "X" in the top right corner of each product. When you click on it, have it remove itself from the page. 
4. Perform a few style edits: link colors should be #0096ff, The title of the page should be 36 pixels high. The tagline of the page should be 18. Title of each product should be 16 pixels high. The product tagline should be 16. Center everything on the page including titles and the products display. 
5. The way we load products is buggy and suboptimal.  Try refactoring it to work better and tell us why you did what you did.



[ x ] In addition to its title and tagline, each product has an attribute named "description". We'd like to update the UI so that whenever you mouseover a product, an overlay comes across it with the description.
 - Line 152 to 166 in script.js
 
[ x ] Convert the page to use Bootstrap to make it responsive, so when it's viewed on a mobile device there's no left-right scrolling and it still looks ok visually (i.e. it's easy to read) 
- Took advantage of Bootstrap's row, justify-content-md-center, col-xs-9, col-sm-5, col-md-3, glyphicon

[ x ] Add an "X" in the top right corner of each product. When you click on it, have it remove itself from the page. 
- Modify product-template.html to add button element using glyphicon-remove class icon
- Line 65, 122 - 145 in script.js
- Line 68 - 75 in script.js is where I thought about accessibility and how important for user to be able to use key 'Enter' to remove product

[ x ] Perform a few style edits: link colors should be #0096ff, The title of the page should be 36 pixels high. The tagline of the page should be 18. Title of each product should be 16 pixels high. The product tagline should be 16. Center everything on the page including titles and the products display. 
[ x ] The way we load products is buggy and suboptimal.  Try refactoring it to work better and tell us why you did what you did.
- Instead of using jquery ajax or getJSON method, I used async, await, and setTimeout for refactoring
- This asynchronously reads and parses a JSON file. Used await and fetch promise to get the response Once the response has been made, use .json() to parse the body text as JSON
- For error handle, I implemented try and catch if JSON file fails
- To fetch JSON data asynchronously, I added async to getJSONData function and it returns a Promise object, products
- By using .then() method, I was able to render the HTML content once I got the products object/array
- I used setTimeOut to wait html finish loading DOM for products list

For bonus points, throw in some of these:

1. It takes a second or two to load the page. Let the user know that the page is still loading until the page renders.
2. Use some kind of transition when removing a product from the page via the "X"
3. Optimize and improve the code and layout where you see fit (and tell us how and why you did)
4. Give any thoughts or commentary on your solution.  What things would you optimize?  If you could use libraries, what libraries would you use?

[ x ] It takes a second or two to load the page. Let the user know that the page is still loading until the page renders.
- line 22 - 24 in script.js

[ x ] Use some kind of transition when removing a product from the page via the "X"
- Use jQuery fadeOut to animates the opacity of the remove product 
- line 147 - 149 in script.js

[ x ] Optimize and improve the code and layout where you see fit (and tell us how and why you did)
- Improved accessibility by adding event clicker for the button (Remove product)
- Truncate the string for product description for overlay functionality (line 78 - 93 in script.js)
- Style modifications: changed background color, added box shadow

[ x ] Give any thoughts or commentary on your solution.  What things would you optimize?  If you could use libraries, what libraries would you use?
- I would React.js library to create components of each product-container class element to render images and other details. I would have used componentDidMount to use fetch promise method to json data and then set the state for the data. Then, I would render into ProductCard component.

## How to submit your results

Please follow these directions precisely because they affect our ability to evaluate your results.

1. Download this repo
2. Do your coding challenge and zip up your local repo
3. Email the link to the zip file to steven@touchofmodern.com and the recruiter you're working with to let us know you're ready.

## What we are looking for
We are looking for several things with this challenge.  First, of course, we're looking for your answer to be technically correct. Beyond that, we're also looking for:

1. Is your code easy to read and understand?
2. Are you following the usual conventions for front end web development?
3. In addition to being technically elegant, are your solutions visually elegant?
4. Did you follow these directions?

Basically, write the code as if you were going to release it to a real website with an actual warehouse and if you mess it up then boxes will start piling up on the floor and stuff.  Because that's what happened to us.

When we get your response, here's exactly what we're going to do:

1. Clone your forked code to a laptop and run it through a local Apache server.
2. Look at the code itself to see its correctness, readability, and general elegance.
3. Simulate a mobile browser in our browser.
4. Click and scroll around to see how things work.

That's it.  There aren't any hidden gotchas or trick questions.  That's really what we're going to do.

