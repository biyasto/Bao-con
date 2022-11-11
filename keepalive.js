const express = require("express")
const app = express()

const server = app.listen(8080, () => {
    console.log(`Express running → PORT ${server.address().port}`)
})

app.get("/", (req, res) => {
    res.send("Ah, ha, ha, ha, stayin' alive, stayin' alive.\n Ah, ha, ha, ha, stayin' alive.")
    //https://tinyurl.com/43a5e3ez
})