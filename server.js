const express = require("express");
const app = express();
const bcrypt = require('bcrypt')

app.use(express.json())

app.use(express.static(path.join(__dirname, "./public")))



app.put("/api/profile/:id", updateVPIP);



// const users = []

// app.get('/users', (req, res) => {
//     res.json(users)
// })

// app.post('/users', async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt()
//         const hashedPassword = await bcrypt.hash(req.body.password, salt)
//         const user = { username: req.body.username, password: hashedPassword}
//         users.push(user)
//         res.status(200).send()
//     } catch {
//         res.status(500).send()
//     }
// })

// app.post('/users/login', async (req, res) => {
//     const user = users.find(user => user.username = req.body.username)
//     if(user == null) {
//         return res.status(400).send('Cannot find user')
//     }
//     try {
//         if(await bcrypt.compare(req.body.password, user.password)) {
//             res.send('Success')
//         } else {
//             res.send('Not Allowed')
//         }
//     }
//     catch {
//         res.status(500).send()
//     }
// })

app.listen(3000);