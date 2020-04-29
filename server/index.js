const express = require('express')
const serverless = require('serverless-http')

const mysql = require('serverless-mysql')({
  config: {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
  }
})

const app = express()
app.use(express.json())

app.get('/characters', async (req, res) => {
  try {
    const tableName = 'characters'
    const results = await mysql.query(`SELECT * FROM ${tableName}`)
    await mysql.end()
    res.json(results)
  } catch (err) {
    console.log({ err })
    res.status(500)
  }
})

module.exports.handler = serverless(app)
