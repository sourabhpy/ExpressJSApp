const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("This is Home Page.");
});

app.get("/about", (req, res) => {
    res.send("This is About Page.");
});

app.get("/contact", (req, res) => {
    res.send("This is Contact Page.");
});

app.get("/temperature", (req, res) => {
    // res.json or res.send work identical but res.json converts non-objects into JSON,
    // like null or undefined. While res.send can be used only when objects or arrays
    // are passed.
    res.json([
        {
            id : 1,
            name : "Souabh",
            ckas : 12,
            asda : "asdasd",
        },
        {
            id : 1,
            name : "Souabh",
            ckas : 12,
            asda : "asdasd",
        },
        {
            id : 1,
            name : "Souabh",
            ckas : 12,
            asda : "asdasd",
        },
        
    ]);
});

app.listen(port, () => {
    console.log(`Listerning to port ${port}`);    
});