const express = require('express');
const app = express();
app.use(express.json());
const persons = [
    {
        id: 1,
        name: "arto Hellas",
        number: "040-103456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]



app.get("/info", (req, res) => { res.json(persons); })
app.post("/api/persons", (req, res) => {
    console.log(req.body);
    res.send(req.body.test);
})
app.post("/test");
const port = process.env.PORT || 3001;

app.listen(port);
console.log(`server running at port :${port}`);
