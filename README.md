# SEI Project 2: Mom's Spaghetti

## Overview
For our second project in the General Assembly SEI we were put in pairs and given a day and a half to create a React app which accesses an API and presents data from it in a way of our choice. This project came at the end of our two week-long second module which covered the basics of React and APIs. The short time frame and relative inexperience with both React and APIs certainly made this an intense exercise! It was also the first time we had meaningfully worked in groups. But the combination of all this made it a really exciting challenge to work through. 

## Brief
* Consume a public API – this could be anything but it must make sense for your project.
* Have several components.
* Include wireframes - that you designed before building the app.
* The app can have a router - with several "pages".
* Have a visually impressive design.
* Be deployed online and accessible to the public.

## Deployment
<a href='https://spaghettimom.netlify.app/' > Get rhyming </a>

## Timeframe

Timeframe : One day and a half

Working Team: Pairs


## Technologies used:

### Planning
Excalidraw

### Front-End
HTML5
CSS3
SASS
JavaScript ES6+
React.js
VSCode
Bootstrap
Insomnia
Google Fonts
Git & GitHub


## Installation

* Clone or download the repo
* npm install for installing the packages
* npm run start for opening the local host on the browser

## Planning


Me and my partner’s first thought was to find an API that was related to music in some way. We were immediately attracted to Spotify’s API, however we quickly saw that at our experience level this might be a tall order. So, we continued to look around. There were some potentially really good APIs that stored artist’s concerts, or the history of the making of certain albums – there was one that had audio and info on the entire back catalogue of Phish! - but to access most of them you needed written consent from the owner or at least to contact them, which we didn’t have time for, or for the ones that did work, the information was either inadequate or simply uninteresting. 
We decided to move on from the music idea and searched around more broadly, NASA’s API was a possibility for a bit, and then we finally came upon a website called API Ninjas, which hosted a bunch of different funky looking APIs! I found one that returns rhymes of an inputted word and my partner found one which returns a random words and we quickly saw potential for a simple but fun app which allows you input a word and it’ll return words which rhyme with it, and if you want a word input for you, you can click a button and a random word is put into the input.

Now that we had the concept, the first thing we did was make a wireframe of the app:


![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847726/Project%202%20ReadMe/image-1_snekkx.png)

Our MVP was the inputting of a word and the random button being clicked, and if we had time we were keen to play around with local storage to save what the user had searched. I had also read a few days earlier that Chat GPT had given access to their API and was really interested in the idea of implementing that into the project – maybe get it to write a poem with the lines rhyming with the word the user inputs – but we did only have a day and a half for this project so I settled for experimenting with it in my own time on the first evening and seeing if it could be done. I followed the quickstart tutorial on chat ai’s website (https://platform.openai.com/docs/quickstart) and got to a point where it could definitely be deployed on the app, but it would definitely take a bit of time, so decided to just keep it in mind and if we had time me and my partner could go through it. 

For the visual design of the app, we very quickly decided on an Eminem theme, for no reason other than it made us laugh really! The idea of having a random word generator shaped like a meatball was just too good to resist. 

We then talked through how we would handle the APIs:

* We would have two asynchronous functions to access the respective APIs, and set state for the input, the output, the random word, and errors.
* We then decided to use Bootstrap to create a form which had an input, a submit button, and the random word meatball. The API requests were attached to the submit button for the rhyming API and the meatball for the random word, and the submit request would also navigate the user to a results page.

Then we figured out how were going to present the data:

* We decided to use the same bootstrap form structure as the input, but to replace the previous elements with an h1, a button to send the user back to the input page, and the results. 
* The API returned the results as an array, so we could present them by using the map method to iterate through and present each result.
* We also needed a page for if the API didn’t find any rhymes.



## Build Process

Since this was a learning exercise, me and partner decided to pair code, with Tommy coding on the first day and me coding on the second. We split off at one point on the first afternoon as we were a little bit behind schedule, Tommy dealt with the random API whilst I worked on pagination, but apart from that we worked together on all parts of the project. This was certainly challenging at times but on a personal level it was fascinating to watch someone else code in a different way to me and achieve the same logic. 

### Accessing the APIs
Both APIs were from the same source so we only needed one API key, which we used axios.create to set as a header for any post request we made: 

![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847726/Project%202%20ReadMe/image-5_vkpxye.png)

### Input Form
Using Bootstrap we formatted the form so that it could morph according to window size, and then we implemented our own CSS from there. 
We put an input which has an onChange which triggers our handChange function, a function which tracks the input from the user and alters the state which eventually is used to get information from the rhyming API. 

We then used two ternaries for the submit button and random meatball. These were attached to two separate states that were defaulted to false and switched to true if the random meatball or the submit button were clicked. If this state is true, an Eminem gif appears where the relevant buttons are, and it remains there until the given API request is completed, acting as a loading spinner:


![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847726/Project%202%20ReadMe/image-5_vkpxye.png)


### handleSubmit Function

This function is responsible for the request to the rhyming API. It’s triggered by an onSubmit attached to the form. 

It’s main functions are to:
*	trigger a spinner whilst the API request is loading.
*	submit an API request to return back the rhymes of the word that’s been inputted.
*	to set the output state to these rhymes.
*	To navigate the user to the results page.

![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847728/Project%202%20ReadMe/image-8_xwq063.png)

### submitRandom function
This function is much the same as the handleSubmit, but it communicates with the random word API instead of the rhyming one and sets the input state to the result that’s sent back. We initially created a separate state to handle the random word, however this caused a lot of issues and we eventually realised it was simply unnecessary.

![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847728/Project%202%20ReadMe/image-7_uv4cax.png)

### Results form

The structure of the results form was the same as the input form, but we switched out the elements inside. We put in a button which returns the user back to the input page, and then used the map function to create a list of the results that the API sends back. Initially, I tried to grapple with proper API pagination, i.e. adding it into the API request itself, but I either just couldn’t get my head round it or the API didn’t support pagination, I still don’t really know which it is, it’s something I’m really keen to understand for our next project. I therefore decided to paginate by setting index limits on my map function, and repeated the map function so that the first one returned only the first 100 results, the second the 200th – 300th results and the last the 300th - 400th results, the last of which was put in a separate component. I used a ternary to put a Link at the bottom of the first results page to the second page if there are more than 200 rhymes returned by the API:

#### Results Page 1

![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847728/Project%202%20ReadMe/image-11_rv7qyn.png)

#### Results Page 2

![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847728/Project%202%20ReadMe/image-12_lippph.png)

The last part of the results page needed was a backup for if the API returned no results. This was a simple ternary wrapped around all the components, dependent upon if the length of the output state was true or not, if it was true, then all the above components would be displayed, if false then a different tile with a fab Eminem lyric, a gif, and some fun icons would be presented:

![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847729/Project%202%20ReadMe/image-13_fsmcot.png)
![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847729/Project%202%20ReadMe/image-14_jsdj69.pnggit)



## Challenges

The majority of our difficulties were actually pretty basic, and weren’t things that in different contexts the two of us would struggle on, however I think that it took a while for us to be able to error handle as a team. In the beginning, we didn’t communicate as calmly and objectively as we could have, and ended up panicking each other instead of properly working together. However, we very quickly got better and better at this skill and by the second day, though still imperfect, our ability to error handle as a team was really greatly improved. I think above all this was the biggest learning curve of this project. 

For me, the change came down to better listening and patience and having more faith in our own thoughts.

### The specific difficulties


#### The base URL of our API request

The first difficulty that arose was when using axios.create to set a header for our API key. The struggle came in understanding which part of the API url was the base URL and what needed to be added on at each request. It was a simple fix but is something I now fully understand.

#### The mapping process

This problem took up the most time of all of them, which made it difficult when we realised how simple the solution was! We used the map function to display our results in the results page, and the function returned the results in one long string. The two of us immediately tensed up at this and assumed that we’d done something wrong with mapping the data, instead of how we’d chosen to display that data. 
This led us down many many rabbit holes which confused us even more, there were times when we thought the API was actually giving back an object, so we used Object.values to access the results, which worked because it was technically true that the array was an object. I think our teamwork fell down a bit here, we weren’t properly listening to each other, just trying what we thought would work, and so our individual error handling existed not quite in parallel and not quite interwoven. 
We eventually asked our instructor to help, and he showed us that what we actually wanted to do was use a <ul> and <li> instead of just a div in the map function. What this also showed is that it was an error of planning, because we hadn’t really spoken about how we were going to present the data, or whether it was going to be a list of something else. If we had done that, we could’ve gone into the mapping process with a clearer idea of what our desired output was going to be I think.

Seeing how much we’d struggled on a simple point was pretty painful, but I’m really proud with how we dealt with that.mIt was at this point that we decided to split off and work on different parts of the project. This had the combined effect of making up for lost time and also recalibrating ourselves by working solo. Once I’d worked through the pagination and Tommy the random button we joined back together and continued.


#### The Random Meatball
This was a useEffect problem. The random word was being generated, but the input was receiving it a step behind. We therefore,immediately knew that it was a problem of state and that useEffect was needed, but we struggled to know where it was needed. It was also late in the day at this point and we were pretty exhausted from the difficulties of the day. We therefore decided to table this problem and have some fun with the CSS for the rest of the night. This worked wonders as it allowed the two of us to have fun as a pair, and make the app look great! 
The next day I woke up and looked through some lectures from the week before and slowly worked on the problem, eventually seeing that setting the input to the randomWord state needed to be in a useEffect with the randomWord state being in the dependency array. This solved the problem as the input was now being set at the same time as the randomWord, but the results were still coming out wrong. We struggled for a long time with this and eventually asked the instructor for help, who showed us that we didn’t actually need a separate state for the random word, we could just set the input state to random word!



## Wins

### Pagination

This was a real win for me, even though I hadn’t done it the proper way! Getting the results to spread over two pages reaffirmed my understanding of the map method, having been battered a bit during the day, and it pulled together the presentation of the results perfectly. From my end, it was from this point that I started to feel much more confident about the project, and I was able to bring this energy with me to the end. 

### The design

This was what we mainly looked at after I had got the pagination working and Tommy got the random button nearly there. Using the visual elements as a time to play was what won the project for me. It allowed us to loosen up a bit and realise that there was still so much we could put into the project even though the day had been hard. Tommy coded most of it and it was really good to see how he went about the process.

### Using two APIs

Having both APIs in the app made this a really well-rounded project. As a pretty simple concept and design, having two APIs gave it complex capability. I was also happy that the two interacted with each other and weren’t there just for the sake of having two APIs; they both had clear and necessary roles within the app.

### Understanding useEffect

Like with the pagination, getting through the difficulty of useEffect was a great win for me. We had struggled with the random meatball for a while and I had really lost my confidence in understanding useEffect, which was frustrating because throughout our lessons it was something that I felt good about. 
Giving myself the time in the morning to go back through lectures and notes and slowly figure out the problem was fantastic and let me back into understanding the concept. 


### Working through it as a team, realising when to move on

I think me and Tommy worked really well together, it was a real pleasure to be happy with the project at th end and be laughing together throughout the process!



## Key Learnings

### Error handling as team

By error handling I mean both in the code and how we handle the act of making a mistake as a team. This project has shown me how much can be achieved through compassionate communication. By this I mean really supporting the other people in your group so they can feel confident in their abilities, whatever their standard. I strongly believe that if everyone in a team starts with that goal in mind, any project will be achieved in a more satisfactory manner. 
I think me and Tommy did incredibly well at this towards the end of our project, but at the start I feel as though neither of us had the confidence in our own ability to allow the other person to flourish. It certainly had an impact on how we went about achieving the project, and meant that there were too many times when our error handling became just throwing ideas at the wall and seeing what would stick, and not following through with figuring out why they didn’t work. It was fascinating to see that the lack of confidence in ourselves and each other also made us forget how to do even the most basic tasks!

Seeing this dynamic change between us was the most satisfying part of the project, it was a really visceral feeling of shifting from being stuck to moving fluidly and as one. 

### useEffect and the map method

As I mentioned, these were things that I was comfortable with before the project, however the basics of them just slid out of my brain through panic and discomfort. As a result I had to take myself right back to basics and build again from the ground up. This was a slow and frustrating process, but has meant that I have re-solidified my foundations in both these topics, which can only be a good thing!
 


## Bugs

The rhyming API just wasn’t that great, so there are words that definitely have rhymes that the API won’t find any for.

If you click search before anything it gets stuck.


## Future Improvements

Implementing chat GPT into the app

Using local storage to store the user’s previous searches, and potentially make a capability for chat GPT to make a poem out of those results !


## Final Project

### Input Page
![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847729/Project%202%20ReadMe/image-2_irqqdk.png)

### Results Page
![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684847728/Project%202%20ReadMe/image-3_myjyl6.png)
If a word has more than 200 rhymes there is a second page, the maximum number of rhymes the app can show is 400. 

If the API can’t find any rhymes for the input word this page shows:
![](https://res.cloudinary.com/detjuq0lu/image/upload/v1684848964/Project%202%20ReadMe/image-15_apbtry.png)









