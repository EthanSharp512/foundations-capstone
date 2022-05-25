const {cardValues, BTNSB, CO, LJHJ, UTG} = require('./hands')



module.exports = {


    preflopCalc: (req, res) => {
        const {position, suited, card1, card2} = req.body





        // for(let key in obj){
        //     if(key === 'x'){
        //        return obj.key
        //      }
        //    }

        res.status(200).send();
    },

    // addFortune: (req, res) => {
    //     const {newFortune} = req.body
    //     fortunes.push(newFortune)
    //     res.status(200).send("Fortune added!")
    //     console.log(fortunes)
    // },



    updateVpip: (req, res) => {

    }
}