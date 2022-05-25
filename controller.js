module.exports = {

    updateVPIP: (req, res) => {
        console.log(req.params);
        console.log(req.body);
        let {id} = req.params;
        let {type} = req.body;

        let index = movies.findIndex((movie) => {
            return movie.id === +id;
        })

        //example of handling erros on back end. using if statements chekcing conditions
        if(movies[index].rating === 5 && type === "plus") {
            res.status(400).send('Cannot rate above 5');
        } else if(movies[index].rating === 1 && type === "minus") {
            res.status(400).send("Cannot rate below 1");
        } else if(type === "plus") {
            movies[index].rating++;
            res.status(200).send(movies);
        } else if(type === "minus") {
            movies[index].rating--;
            res.status(200).send(movies);
        }
    }
}