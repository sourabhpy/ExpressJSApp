const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 8000;

// For using static path (inside public directory)
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// set partial's path
const partialsPath = path.join(__dirname, "../partials");
hbs.registerPartials(partialsPath);

// setting view engine 
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("datesheet", {
        tempName : "Datesheet",
        subject1 : "Maths",
        date1 : "12/04/2021",
        type1 : "Written",
        subject2 : "Science",
        date2 : "14/04/2021",
        type2 : "Written",
        subject3 : "Maths",
        date3 : "17/04/2021",
        type3 : "Written",
        subject4 : "Social Science",
        date4 : "20/04/2021",
        type4 : "Written",
        subject5 : "English",
        date5 : "22/04/2021",
        type5 : "Written",
        subject6 : "Computer Science",
        date6 : "24/04/2021",
        type6 : "Computer Practical",
        subject7 : "Physical Education",
        date7 : "26/04/2021",
        type7 : "Physical",
    }); 
});

app.get("/conduct", (req, res) => {
    res.render("conduct", {
        tempName : "Conduct",
        name1 : "Sourabh",
        rollno1 : "01",
        roomno1 : "01",
        name2 : "Shubham",
        rollno2 : "02",
        roomno2 : "05",
        name3 : "Shreya",
        rollno3 : "03",
        roomno3 : "01",
        name4 : "Kavish",
        rollno4 : "04",
        roomno4 : "02",
        name5 : "Khushi",
        rollno5 : "05",
        roomno5 : "03",
        name6 : "Aakash",
        rollno6 : "06",
        roomno6 : "02",
        name7 : "Shweta",
        rollno7 : "07",
        roomno7 : "04",    
    });
});

app.get("/discrepancy", (req, res) => {
    res.render("discrepancy", {
        tempName : "Discrepancy",
        exam1 : "Maths",
        q1 : "01",
        disc1 : "Printed 'x' in place of 'y'.",
        exam2 : "Science",
        q2 : "05",
        disc2 : "Wrong chemical formula for Benzene printed.",
        exam3 : "Social Science",
        q3 : "02",
        disc3 : "Wrong dates mentioned for French Revolution.",
        exam4 : "Computer Science",
        q4 : "02",
        disc4 : "Incorrect server link for SQL.",
        exam5 : "Computer Science",
        q5 : "03",
        disc5 : "Repeating question for all sets.",
        exam6 : "Physical Education",
        q6 : "05",
        disc6 : "Printed 20 sec instead of 10 sec sprinting time.",
        exam7 : "Physical Education",
        q7 : "06",
        disc7 : "Repeated question.",
    });
});

app.get("/result", (req, res) => {
    res.render("result", {
        tempName : "Result",
        name1 : "Sourabh",
        rollno1 : "01",
        result1 : "95%",
        name2 : "Shubham",
        rollno2 : "02",
        result2 : "63%",
        name3 : "Shreya",
        rollno3 : "03",
        result3 : "76%",
        name4 : "Kavish",
        rollno4 : "04",
        result4 : "83%",
        name5 : "Khushi",
        rollno5 : "05",
        result5 : "87%",
        name6 : "Aakash",
        rollno6 : "06",
        result6 : "90%",
        name7 : "Shweta",
        rollno7 : "07",
        result7 : "92%",
    });
});



app.listen(port, () => {
    console.log(`Listening the port at ${port}`);
});