const textElement = document.getElementById("text")
const optionButtons = document.getElementById("option-buttons")

let state = {}

function startGame(){
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while(optionButtons.firstChild){
        optionButtons.removeChild(optionButtons.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtons.appendChild(button)
        }
    })
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
 const nextTextNodeId = option.nextText
 if(nextTextNodeId <= 0){
     return startGame()
 }
 state = Object.assign(state, option.setState)
 showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'You wake up in a strange place with a jar of blue goo beside you.',
        options: [
            {
                text: 'Take Goo',  
                setState: { blueGoo: true},
                nextText: 2         
            },
            {
                text:'leave the goo',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You go onwards in search of answers and come across a merchant.',
        options: [
            {
                text: 'Trade the goo for a sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true},
                nextText: 3
            },
            {
                text: 'Trade the goo for a shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true},
                nextText: 3
            }, 
            {
                text: 'Ignore the merchant',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Leaving the merchant behind you begin to tire as you approach a small town next to a ominous castle.',
        options: [
            {
                text: 'Explore the castle',
                nextText: 4
            },
            {
                text: 'Find someplace to sleep in Town',
                nextText: 5
            },
            {
                text: 'Find a spot outside to sleep',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'You enter the castle grounds becoming more and more drowsy not noticing the monster creeping up behind you before it is too late.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 5,
        text: 'Without money you desperately try to sneak into a place to sleep btu are caught by the town guard and get thrown in prison. Forever',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'Sleeping in the cold outside you fall ill and are burnt at the stake to prevent the spread of disease',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
]

startGame()

