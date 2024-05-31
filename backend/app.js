const mysql = require('mysql2')
const express = require('express')
const cors = require('cors')

const PORT = 5000
const app = express()

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'crm'
})

app.use(cors())
app.use(express.json())


app.get('/deals',(req, res) => {
    const q = `
    SELECT deal.name, amount, curr, direction, stage, numberContract, contacts, deal.date, company.name AS company, CONCAT(representative.name, ' ', representative.surname) AS agent
    FROM deal
    JOIN representative ON deal.representative_id = representative.id 
    JOIN company ON deal.company_id = company.id;
    `
    db.query(q, (err,data) => {
        if(err) return res.status(500)
        return res.json(data)
    })
})

app.get('/events/:dealId',(req, res) => {
    const dealId = req.params.dealId
    const q = `
    SELECT 'comment' AS type, text AS message, date, CONCAT(company_operator.name, ' ', company_operator.surname) AS person
    FROM comment 
    JOIN company_operator ON comment.company_operator_id = company_operator.id AND deal_id = ?

    UNION ALL

    SELECT 'meeting' AS type, CONCAT (time, ' ', place) AS message, date, CONCAT(company_operator.name, ' ', company_operator.surname) AS person
    FROM meeting 
    JOIN company_operator ON meeting.company_operator_id = company_operator.id AND deal_id = ?

    UNION ALL
    
    SELECT messenger AS type, text AS message, date, CONCAT(company_operator.name, ' ', company_operator.surname) AS person
    FROM message 
    JOIN company_operator ON message.company_operator_id = company_operator.id AND deal_id = ?

    UNION ALL
    
    SELECT 'task' AS type, text AS message, date, CONCAT(company_operator.name, ' ', company_operator.surname) AS person
    FROM task 
    JOIN company_operator ON task.company_operator_id = company_operator.id AND deal_id = ?
    `
    db.query(q,[dealId, dealId, dealId, dealId], (err,data) => {
        if(err) return res.status(500)
        return res.json(data)
    })
})

app.post('/comments', (req, res) => {
    const { text, company_operator_id, deal_id } = req.body;
    const q = `
        INSERT INTO comment (text, company_operator_id, deal_id, date)
        VALUES (?, ?, ?, NOW());
    `;
    db.query(q, [text, company_operator_id, deal_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to add comment");
        }
        res.status(201).send("Comment added successfully");
    });
});

app.post('/tasks', (req, res) => {
    const { text, company_operator_id, deal_id } = req.body;
    const q = `
        INSERT INTO task (text, company_operator_id, deal_id, date)
        VALUES (?, ?, ?, NOW());
    `;
    db.query(q, [text, company_operator_id, deal_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to add task");
        }
        res.status(201).send("Task added successfully");
    });
});

app.post('/messages', (req, res) => {
    const { text, messenger, sender, company_operator_id, deal_id } = req.body;
    const q = `
        INSERT INTO message (text, messenger, sender, company_operator_id, deal_id, date)
        VALUES (?, ?, ?, ?, ?, NOW());
    `;
    db.query(q, [text, messenger, sender, company_operator_id, deal_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to add message");
        }
        res.status(201).send("Message added successfully");
    });
});

app.post('/meetings', (req, res) => {
    const { time, place, company_operator_id, deal_id, date } = req.body;
    const q = `
        INSERT INTO meeting (time, place, company_operator_id, deal_id, date)
        VALUES (?, ?, ?, ?, ?);
    `;
    db.query(q, [time, place, company_operator_id, deal_id, date], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to add meeting");
        }
        res.status(201).send("Meeting added successfully");
    });
});

npm init
npm i express axios