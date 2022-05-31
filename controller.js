const {cardValues, BTNSB, CO, LJHJ, UTG} = require('./hands')

const Two = {
    "22": "49.3%",
    "33": "52.9%",
    "44": "56.3%",
    "55": "59.6%",
    "66": "62.7%",
    "77": "65.7%",
    "88": "68.7%",
    "99": "71.7%",
    "TT": "74.7%",
    "JJ": "77.1%",
    "QQ": "79.6%",
    "KK": "82.1%",
    "AA": "84.9%",
}

const Three = {
    "22": "30.2%",
    "33": "33.2%",
    "44": "36.4%",
    "55": "39.6%",
    "66": "42.8%",
    "77": "46.1%",
    "88": "49.6%",
    "99": "53.3%",
    "TT": "57.2%",
    "JJ": "60.9%",
    "QQ": "64.7%",
    "KK": "68.6%",
    "AA": "73.2%",
}

const Four = {
    "22": "21.7%",
    "33": "23.7%",
    "44": "26.0%",
    "55": "28.6%",
    "66": "31.2%",
    "77": "34.1%",
    "88": "37.3%",
    "99": "40.8%",
    "TT": "44.9%",
    "JJ": "48.9%",
    "QQ": "53.2%",
    "KK": "58.0%",
    "AA": "63.6%",
}

const Five = {
    "22": "17.6%",
    "33": "18.8%",
    "44": "20.3%",
    "55": "22.1%",
    "66": "24.2%",
    "77": "26.4%",
    "88": "29.1%",
    "99": "32.3%",
    "TT": "36.0%",
    "JJ": "40.0%",
    "QQ": "44.4%",
    "KK": "49.5%",
    "AA": "55.6%",
}

const Six = {
    "22": "15.4%",
    "33": "16.1%",
    "44": "17.0%",
    "55": "18.2%",
    "66": "19.8%",
    "77": "21.5%",
    "88": "23.7%",
    "99": "26.3%",
    "TT": "29.5%",
    "JJ": "33.2%",
    "QQ": "37.6%",
    "KK": "42.7%",
    "AA": "49.0%",
}

const Seven = {
    "22": "14.0%",
    "33": "14.4%",
    "44": "15.0%",
    "55": "15.7%",
    "66": "16.9%",
    "77": "18.2%",
    "88": "20.0%",
    "99": "22.1%",
    "TT": "24.8%",
    "JJ": "28.1%",
    "QQ": "32.2%",
    "KK": "37.2%",
    "AA": "43.3%",
}

const Eight = {
    "22": "13.1%",
    "33": "13.3%",
    "44": "13.6%",
    "55": "14.1%",
    "66": "15.0%",
    "77": "16.0%",
    "88": "17.4%",
    "99": "19.1%",
    "TT": "21.3%",
    "JJ": "24.2%",
    "QQ": "28.0%",
    "KK": "32.7%",
    "AA": "38.5%",
}

const Nine = {
    "22": "12.4%",
    "33": "12.5%",
    "44": "12.6%",
    "55": "12.9%",
    "66": "13.6%",
    "77": "14.4%",
    "88": "15.5%",
    "99": "16.8%",
    "TT": "18.7%",
    "JJ": "21.3%",
    "QQ": "24.6%",
    "KK": "28.9%",
    "AA": "34.4%",
}

function getChart (chart) {
    for (const key in chart) {
            rangeHands.push(key)
    }
}

let rangeHands = [] 
cardNumVals = [];

module.exports = {
    pairWinCalc: (req, res) => {

        const {player, pair} = req.body

        pairArr = []
        if(pair === pair){
            pairArr.push(pair).toString()
        }

        let pairArray = pairArr.join().split(',') 
        const pairA = pairArray[0]

        let pairPercentage = ['pair']

        if(player === '2') {
            for(let key in Two){
                if(key === pairA) {
                    pairPercentage.splice(0, 1, Two[key]);
                }
            }
        } else if(player === '3') {
            for(let key in Three){
                if(key === pairA) {
                    pairPercentage.splice(0, 1, Three[key]);
                }
            }
        } else if(player === '4') {
            for(let key in Four){
                if(key === pairA) {
                    pairPercentage.splice(0, 1, Four[key]);
                }
            }
        } else if(player === '5') {
            for(let key in Five){
                if(key === pairA) {
                    pairPercentage.splice(0, 1, Five[key]);
                }
            }
        } else if(player === '6') {
            for(let key in Six){
                if(key === pairA) {
                    pairPercentage.splice(0, 1, Six[key]);
                }
            }
        } else if(player === '7') {
            for(let key in Seven){
                if(key === pairA) {
                    pairPercentage.splice(0, 1, Seven[key]);
                }
            }
        } else if(player === '8') {
            for(let key in Eight){
                if(key === pairA) {
                    pairPercentage.splice(0, 1, Eight[key]);
                }
            }
        } else if(player === '9') {
            for(let key in Nine){
                if(key === pairA) {
                    pairPercentage.splice(0, 1, Nine[key]);
                }
            } 
        } 
        pairPercentageStr = pairPercentage.join()
        res.status(200).send(pairPercentageStr)
    },
    
    rangeList: (req, res) => {

        rangeHands.splice(0)
        
        let pos = req.params.chart

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

        cardNumVals = [];

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
    }
}