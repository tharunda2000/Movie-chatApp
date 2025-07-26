
let keyWords = [
  "movie",
  "film",
  "show",
  "search",
  "find",
  "look for",
  "any movies",
  "with",
  "starring",
  "actor",
  "actress",
  "director",
  "directed by",
  "from",
  "released in",
  "year",
  "new",
  "latest",
  "classic",
  "top-rated",
  "highly rated",
  "good",
  "bad",
  "review",
  "rating",
  "IMDb score",
  "about",
  "plot",
  "storyline",
  "summary",
  "part of",
  "series",
  "franchise",
  "recommend",
  "suggest",
  "what to watch",
  "give me a movie",
  "another one",
  "something else",
  "like",
  "similar to",
  "another movie like",
  "in the mood for",
  "something funny",
  "a scary movie",
  "popular",
  "trending",
  "what's hot",
  "most watched",
  "for me",
  "based on my taste",
  "tell me about",
  "what is",
  "who is in",
  "information",
  "details",
  "cast",
  "actors",
  "release date",
  "how long is",
  "runtime",
  "trailer",
  "preview",
  "teaser",
  "reviews",
  "score",
  "where to watch",
  "is it on Netflix",
  "showtimes",
  "hi",
  "hello",
  "hey",
  "howdy",
  "bye",
  "goodbye",
  "see you",
  "please",
  "thank you",
  "thanks",
  "who are you",
  "what can you do",
  "yes",
  "no",
  "yep",
  "nope",
  "cool",
  "awesome",
  "that's great",
  "I don't like it"
]



const search = () =>{

    let query = document.getElementById("inText").value;
    

   

        document.getElementById("setText").innerHTML+=`<div id="labelIn" class="mt-10 w-150 bg-blue-400 p-5 rounded-4xl" data-aos="fade-right" >
                <p>${query}</p>
            </div>`;
        
       

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "contents": [
            {
            
            "parts": [
                {
                    "text":"your name is paul the movie database."
                },
                {
                    "text":"You are a movie database.dont reply out of context questions."
                },
            ],
            "parts": [
                {
                "text": `${query}`
                },
                
            ],
            }
        ]
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB0ccA7GBOByToWJeEt0gTDEnuBBUHFNCE", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result.candidates[0].content.parts[0].text)
            document.getElementById("setText").innerHTML+=`<div id="label" class="bg-green-300 p-5 rounded-4xl w-[700px] ml-auto mt-10" data-aos="fade-left">
                <p>${marked.parse(result.candidates[0].content.parts[0].text)}</p>
            </div>`
    })
        
        
    

    
    

    

    


    




}





  