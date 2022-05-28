const {cardValues, BTNSB, CO, LJHJ, UTG} = require('./hands')
const {Two, Three, Four, Five, Six, Seven, Eight, Nine} = require('./pair')

function getChart (chart) {
    for (const key in chart) {
            rangeHands.push(key)
    }
}

let rangeHands = [] 

module.exports = {

    pairWinCalc: (req, res) => {

        const {player, pair} = req.body

        let pairPercentage = []

        pairPercentage.splice(0)

        if(player === '2') {
            for(let key in Two){
                if(key === pair) {
                    pairPercentage.push(Two[key]);
                }
            }
        } else if(player === '3') {
            for(let key in Three){
                if(key === pair) {
                    pairPercentage.push(Three[key]);
                }
            }
        } else if(player === '4') {
            for(let key in Four){
                if(key === pair) {
                    pairPercentage.push(Four[key]);
                }
            }
        } else if(player === '5') {
            for(let key in Five){
                if(key === pair) {
                    pairPercentage.push(Five[key]);
                }
            }
        } else if(player === '6') {
            for(let key in Six){
                if(key === pair) {
                    pairPercentage.push(Six[key]);
                }
            }
        } else if(player === '7') {
            for(let key in Seven){
                if(key === pair) {
                    pairPercentage.push(Seven[key]);
                }
            }
        } else if(player === '8') {
            for(let key in Eight){
                if(key === pair) {
                    pairPercentage.push(Eight[key]);
                }
            }
        } else if(player === '9') {
            for(let key in Nine){
                if(key === pair) {
                    pairPercentage.push(Nine[key]);
                }
            }
        } 
       
        pairPercentageStr = pairPercentage.join()

        res.status(200).send(pairPercentageStr)
    },



    
    rangeList: (req, res) => {
        
        let pos = req.params.chart

        rangeHands.splice(0)

        if(pos === 'BTNSB') {
            getChart(BTNSB)
            }
        else if(pos === 'CO') {
            getChart(CO)
            }
        else if(pos === 'LJHJ') {
            getChart(LJHJ)
            }
        else if(pos === 'UTG') {
            getChart(UTG)
            }

        const rangeHandsStr = rangeHands.join().replaceAll(',', ', ')  
        res.status(200).send(rangeHandsStr)
    },




    preflopCalc: (req, res) => {

        const {position, suited, card1, card2} = req.body

        cardNumVals = []
        if(+card1 >= +card2){
            cardNumVals.push(card1, card2).toString()
        } else if(+card1 < +card2) {
            cardNumVals.push(card2, card1).toString()
        }

        let cardStrVals = cardNumVals.join().split(',') 
        const card1num = cardStrVals[0]
        const card2num = cardStrVals[1]

        const cardLetters = [];
        for (const key in cardValues) {
            if (key === card1num || key === card2num) {
                cardLetters.unshift(cardValues[key])
            }
        }

        let handStr = cardLetters.join().replace(',', '')
        let hand = ''
        if(suited === 'yes' && card1 !== card2) {
            hand = handStr.concat('s');
        } else if(card1 === card2) {
            hand = handStr.concat(handStr)
        } else {
            hand = handStr.concat('');
        }

        let recommendation = ["Fold this hand"]

        if(position === 'BTNSB') {
            for(let key in BTNSB){
                if(key === hand) {
                    recommendation.splice(0, 1, BTNSB[key]);
                }
            }
        } else if(position === 'CO') {
            for(let key in CO){
                if(key === hand) {
                    recommendation.splice(0, 1, CO[key]);
                }
            }
        } else if(position === 'LJHJ') {
            for(let key in LJHJ){
                if(key === hand) {
                    recommendation.splice(0, 1, LJHJ[key]);
                }
            }
        } else if(position === 'UTG') {
            for(let key in UTG){
                if(key === hand) {
                    recommendation.splice(0, 1, UTG[key]);
                }
            }
        }
       
        recommendationStr = recommendation.join()

        res.status(200).send(recommendationStr)
    },

   



    updateVpip: (req, res) => {

    }
}