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
        title: 'The Hunt is Afoot',
        message: `A town terrorized by three monsters seeks someone brave
        to help them protect themselves from this scourge.
        Luckily, they're paying, pretty well.
        You, being a boastful adventurer, followed the boldness
        of your heart and entered a cave with no regard for life
        or limb. 
        
        At the mouth of the cave, you face a choice.
        A sign in front of you reads: <br><br> "Turn Back, monsters ahead", <br><br>
        What do you do? `,
        btns: ['turn back', 'keep going'],
        pths: ['/end1', '/goIn']
    })
})

app.get('/goIn', (req, res) => {
    res.render('start', {
        title: 'The Hunt is Afoot',
        message: `A large shape hidden by the shadows cast from the torch you brought
        skulks silently and slowly. 
        <br><br>
        "Answer my riddles three, and you make pass," it purrs.
        <br><br>
        "What with one voice, has four-feet, two, then three?"
         `,
        btns: ['Man', 'Attack the Voice', 'One of those tiktok dogs probably'],
        pths: ['/pass', '/deadend', '/pass']
    })
})

app.get('/pass', (req, res) => {
    res.render('start', {
        title: 'The Hunt is Afoot',
        message: `Coming close to the light of torch, the sphynx reveals its face.
        <br><br>
        "Excellent," it says. "Perhaps this next one will get you."
        <br><br>
    "A device that protects you from rain." `,
        btns: ['Umbrella', 'Poncho', 'Galoshes'],
        pths: ['/pass1', '/pass1', '/pass1']
    })
})

app.get('/pass1', (req, res) => {
    res.render('start', {
        title: 'The Hunt is Afoot',
        message: `"No its 11 letters long"
        <br><br>
        The flicker of your flame dashes 
        across the sphynx's paws, revealing whats underneath.
        <br><br>
        "Are you doing a crossword?"
        <br><br>
        "Yeah, so what if I am," said the Sphynx in a defensive tone.<br>
        "This is my house, you came wandering in, its not all roar and terrorize,
        sometimes I need to do things to recharge."
        <br><br>
        "Piss off, I figured it out, its bumbershoot."
         `,
        btns: ['Walk Past the Sphynx', 'Attack Sphynx'],
        pths: ['/next', '/deadend']
    })
})

app.get('/next', (req, res) => {
    res.render('start', {
        title: 'The Hunt is Afoot',
        message: `You walk past the sphynx and deeper into the cave, and hear the roar of a crowd.
        You see a bright opening and walk towards it.As you walk into it, the room falls
         silent, and its filled to the brim with a hodgepodge of different goblins.
        They all look at you and you hear a minotaur wearing a powdered wig at the end of the room, whos sitting at 
        a large podium say,
        <br><br>
        "Well, are you going to take the stand or not?"
        <br><br>
        You feel inclined to make your way to the end of the room, by the minotaur, and stand behind the empty
        podium.
        <br><br>
        "You've been accused of tresspassing. How do you plead?"
         `,
        btns: ['Not Guilty', 'Guilty'],
        pths: ['/notguilty', '/end2']
    })
})

app.get('/notguilty', (req, res) => {
    res.render('start', {
        title: 'The Hunt is Afoot',
        message: `"Well, what defense do you have?"`,
        btns: ['This is public property', 'Attack'],
        pths: ['/defense', '/deadend']
    })
})

app.get('/defense', (req, res) => {
    res.render('start', {
        title: 'The Hunt is Afoot',
        message: `
    "I mean, do any of you have a property deed?" The minotaur judge vaguely asks the crowd of
    Goblins.<br><br>
        
        The all look at each other and shrug, and start gathering their things.
        <br><br>
        "Well, I'll be damned, we'll clear out after our 30 day grace period, enjoy the cave."`,
        btns: ['Thanks, sorry!', 'Attack'],
        pths: ['/next2', '/deadend']
    })
})

app.get('/next2', (req, res) => {
    res.render('start', {
        title: 'The Hunt is Afoot',
        message: `
        As you traverse down into the cave, it gets progressively warmer, making the trek harder. 
    You pass a few hot springs on your way, but finally you make it to the final monsters chamber.
    A sign hanging on a large wooden door reads, "Abominable Ice", you creak the door open and see a yeti
    with a small pair of reading spectacles hovering over a tax calculator.
    <br><br>
"Oh a customer!" The yeti exclaims. "What can I get you?"
<br><br>
You look up and read the menu beautifully chalked above him. 
`,
        btns: ['Vanilla', 'Chocolate', 'Strawberry'],
        pths: ['/ice', '/ice', '/ice']
    })
})

app.get('/ice', (req, res) => {
    res.render('start', {
        title: 'The Hunt is Afoot',
        message: `It's the best ice cream you've ever had.`,
        btns: ['why are you terrorizing this town?', 'Attack'],
        pths: ['/yeti', '/endFin']
    })
})

app.get('/yeti', (req, res) => {
    res.render('start', {
        title: 'The Hunt is Afoot',
        message: `"I'm just under a lot of stress sourcing the local ingredients
        and trying to make this location work.I definitely yelled at one of the local farmers, I'm sorry." 
        <br><br>
        The yeti seems mentally preoccupied, and you see over the thick matted hair on its shoulder a picture of
    this yeti holding two smaller yetis and smiling.
    <br><br>
        "Id just need a large sum of money to buy property and formally start a business in town, and I thought
        I could advertise this place by word of mouth."
        
        `,
        btns: [`I'll front the money, lets talk percentages`, 'Good luck with the business'],
        pths: ['/goodend', '/badend']
    })
})

app.get('/deadend', (req, res) => {
    res.render('end', {
        message: `
        `,
        btns: [`Try Again!`],
        pths: ['/start']
    })
})

app.get('/end1', (req, res) => {
    res.render('start', {
        title: 'Lazy Ending',
        message: `You go home and lay in your comfy bed. <br>
        <br> Every problem in the world isn't your business.
        <br><br> God damn.`,
        btns: ['Run it back!'],
        pths: ['/start']
    })
})

app.get('/end2', (req, res) => {
    res.render('start', {
        title: 'Justice is Served',
        message: `You serve your sentence respectfully. <br>
        <br> Justice is relative, but equal punishments for everyone makes the world a better place.
        <br><br> You're a free man now, but your experience will always stay with you.<br>
        It's going to be hard to reenter society, but you think you're ready.`,
        btns: ['Run it back!'],
        pths: ['/start']
    })
})

app.get('/endFin', (req, res) => {
    res.render('start', {
        title: 'A Terrible Loss',
        message: `The Yeti doesn't put up a fight, simply lets you finish it's existence. You see it when you look in the Yeti's eyes, relief from all the stress. <br>
        <br> As you look over the blood stained counter, you see the picture of the Yeti's family together, and overcome with grief you realize something you never had before.
        <br><br> A healthy worklife balance is important.<br>`,
        btns: ['Oh god what have I done!'],
        pths: ['/start']
    })
})

app.get('/badend', (req, res) => {
    res.render('start', {
        title: 'Not my Business',
        message: `You go home, but have this sinking feeling<br><br>
        Did you miss an investment opportunity?`,
        btns: ['My Portfolio Needs It!'],
        pths: ['/start']
    })
})

app.get('/goodend', (req, res) => {
    res.render('start', {
        title: 'You Win!',
        message: `Congrats! You've developed a market need for real estate.<br><br>
        Now you can finally launch that real estate firm you dreamed of.<br><br>
        Adventuring is a short term venture, what you've done is created a long term investment.`,
        btns: ['Oink Oink, You Capitalist Pig'],
        pths: ['/']
    })
})

app.get('/goodend', (req, res) => {
    res.render('trueend', {
        message: `
        `,
        btns: [`Try Again!`],
        pths: ['/start']
    })
})


///////////////////////////////////////////SERVER

app.listen(port, () => {
    console.log(`I'm listening`)
})
