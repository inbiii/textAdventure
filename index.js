const express = require('express');
const app = express();
const port = process.env.PORT || 3400;
app.set("view engine", 'ejs');
app.use(express.static(__dirname + '/public'));
////////////////////////////////////////////Routes
app.get('/', (req, res) => {
    res.render('title')
})

app.get('/start', (req, res) => {
    res.render('start', {
        message: `A town terrorized by three monsters seeks someone brave
        to help them protect themselves from this scourge.
        Luckily, they're paying, pretty well.
        You, being a boastful adventurer, followed the boldness
        of your heart and entered a cave with no regard for life
        or limb. 
        
        At the mouth of the cave, you face a choice.
        A sign in front of you reads, "turn back, monsters ahead",
        What do you do? `,
        btns: ['turn back', 'keep going'],
        pths: ['/end1', '/goIn']
    })
})

app.get('/goIn', (req, res) => {
    res.render('start', {
        message: `A large shape hidden by the shadows cast from the torch you brought
        skulks silently and slowly. 
        
        "Answer my riddles three, and you make pass," it purrs.

        "What with one voice, has four-feet, two, then three?"
         `,
        btns: ['Man', 'Attack the Voice', 'One of those tiktok dogs probably'],
        pths: ['/pass', '/end', '/pass']
    })
})

app.get('/goIn', (req, res) => {
    res.render('start', {
        message: `A large shape hidden by the shadows cast from the torch you brought
        skulks silently and slowly. 
      
        "Answer my riddles three, and you make pass," it purrs.

        "What with one voice, has four-feet, two, then three?"
         `,
        btns: ['Man', 'Attack the Voice', 'One of those tiktok dogs probably'],
        pths: ['/pass', '/end', '/pass']
    })
})

app.get('/pass', (req, res) => {
    res.render('start', {
        message: `Coming close to the light of torch, the sphynx reveals its face.
        
        "Excellent," it says. "Perhaps this next one will get you."
      
        "A device that protects you from rain." `,
        btns: ['Umbrella', 'Poncho', 'Galoshes'],
        pths: ['/pass1', '/pass1', '/pass1']
    })
})

app.get('/pass1', (req, res) => {
    res.render('start', {
        message: `"No its 11 letters long"
    
        The flicker of your flame dashes 
        across the sphynx's paws, revealing whats underneath.
        
        "Are you doing a crossword?"
        
        "Yeah, so what if I am," said the Sphynx in a defensive tone.
        "This is my house, you came wandering in, its not all roar and terrorize,
        sometimes I need to do things to recharge."
        
        "Piss off, I figured it out, its bumbershoot."
         `,
        btns: ['Walk Past the Sphynx', 'Attack Sphynx'],
        pths: ['/next', '/end1']
    })
})

app.get('/next', (req, res) => {
    res.render('start', {
        message: `You walk past the sphynx and deeper into the cave, and hear the roar of a crowd.
        You see a bright opening and walk towards it. As you walk into it, the room falls
        silent, and its filled to the brim with a hodgepodge of different goblins.
        They all look at you and you hear a minotaur wearing a powdered wig at the end of the room, whos sitting at 
        a large podium say, 
        
        "Well, are you going to take the stand or not?"
        You feel inclined to make your way to the end of the room, by the minotaur, and stand behind the empty 
        podium.
       
        "You've been accused of tresspassing. How do you plead?"
         `,
        btns: ['Not Guilty', 'Guilty'],
        pths: ['/notguilty', '/end2']
    })
})

app.get('/notguilty', (req, res) => {
    res.render('start', {
        message: `"Well, what defense do you have?"`,
        btns: ['This is public property', 'Attack'],
        pths: ['/defense', '/end3']
    })
})

app.get('/defense', (req, res) => {
    res.render('start', {
        message: `
        "I mean, do any of you have a property deed?" The minotaur judge vaguely asks the crowd of 
        Goblins.
        
        The all look at each other and shrug, and start gathering their things.
        
        "Well, I'll be damned, we'll clear out after our 30 day grace period, enjoy the cave."`,
        btns: ['Thanks, sorry!', 'Attack'],
        pths: ['/next2', '/end4']
    })
})

app.get('/next2', (req, res) => {
    res.render('start', {
        message: `
        As you traverse down into the cave, it gets progressively warmer, making the trek harder. 
You pass a few hot springs on your way, but finally you make it to the final monsters chamber.
A sign hanging on a large wooden door reads, "Abominable Ice", you creak the door open and see a yeti
with a small pair of reading spectacles hovering over a tax calculator.

"Oh a customer!" The yeti exclaims. "What can I get you?"

You look up and read the menu beautifully chalked above him. 
`,
        btns: ['Vanilla', 'Chocolate', 'Strawberry'],
        pths: ['/ice', '/ice', '/ice']
    })
})

app.get('/ice', (req, res) => {
    res.render('start', {
        message: `It's the best ice cream you've ever had.`,
        btns: ['why are you terrorizing this town?', 'Attack'],
        pths: ['/yeti', '/endFin']
    })
})

app.get('/yeti', (req, res) => {
    res.render('start', {
        message: `"I'm just under a lot of stress sourcing the local ingredients
        and trying to make this location work. I definitely yelled at one of the local farmers, I'm sorry." 
        
        The yeti seems mentally preoccupied, and you see over the thick matted hair on its shoulder a picture of 
        this yeti holding two smaller yetis and smiling.
        
        "Id just need a large sum of money to buy property and formally start a business in town, and I thought
        I could advertise this place by word of mouth."
        
        `,
        btns: [`I'll front the money, lets talk percentages`, 'Good luck with the business'],
        pths: ['/goodend', '/badend']
    })
})



///////////////////////////////////////////SERVER

app.listen(port, () => {
    console.log(`I'm listening`)
})
