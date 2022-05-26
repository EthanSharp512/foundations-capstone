const {cardValues, BTNSB, CO, LJHJ, UTG} = require('./hands')



module.exports = {


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


        let recommendation = []


        for(let key in position){
            if(key === hand) {
                recommendation.push(position[key]);
            } 
        }

        res.status(200).send(position)
    },

   



    updateVpip: (req, res) => {

    }
}