const prompt = require('prompt-sync')()

async function chatBot(promptData){
    const url = "https://api.openai.com/v1/images/generations"
    const imgKey = "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"

    const options = {
        method: "POST",
        headers: {
        Authorization: "Bearer " + imgKey,
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "dall-e-3",
            prompt: promptData,
            "n": 1,
            "size": "1024x1024"
        })
    }
    const response = await fetch(url, options);

  const data = await response.json();
  console.log(data); 
  return data;
}

console.log("Hello user, today I come to speak about volleyball. What would you like to know")

let choice = prompt("1: What is volleyball?, 2: What volleyball positions are there?, 3: Generate a volleyball game, 4: Exit")

if(choice == 1){
    console.log("Volleyball is a team sport, typically played between 2 teams with 6 players on each time on the court. At the pro level, teams play best of 5 sets, with each set being first to 25, win by 2. However, the 5th set is a first to 15 win by 2. The goal is to have the ball touch the floor on the other team's side while staying inbounds. Teams have 3 touches before they have to send the ball to the other side.")
} else if (choice == 2){
    console.log("In volleyball, there are 6 primary positions. These positions are Outside Hitter, Oppoisite Hitter, Setter, Middle Blocker, Libero, and Defensive Spiecalist")
} else if (choice == 3){
    let img = prompt("I can generate a few volleyball images for you. What kind of volleyball image would you like you generate?")
    chatBot(img)
} else {
    console.log("Have a good day...")
}