const express = require("express"); 
const app = express();

app.listen(3000, () => {
  console.log("project is running!");
})



const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
  ],
});


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

const agents = ["Astra", "Breach", "Brimstone", "Chamber", "Cypher","Habor", "Jett", "KAY/O", "Killjoy","Neon","Omen","Phoenix","Raze","Reyna","Sage","Skye","Sova","Viper","Yoru"];



client.on('messageCreate', (message) => {
    if (message.content.includes("con gi")|| message.content.includes("con gì")){
      const random = Math.floor(Math.random() * agents.length);
        message.reply(agents[random])
    }
});


const khen = ["Gke","10 điểm","10k momo","chòi oi! ghê quá"];
client.on('messageCreate', (message) => {
    if (message.content.includes("ace")){
      const random = Math.floor(Math.random() * khen.length);
        message.reply(khen[random])
    }
});

const ban = ["Bùm chíu","pằng pằng","🔫🔫"];
client.on('messageCreate', (message) => {
    if (message.content.includes("ban") || message.content.includes("bắn")){
      const random = Math.floor(Math.random() * ban.length);
        message.reply(ban[random])
    }
});

client.on('messageCreate', (message) => {
    if (message.content.includes("invite")){
     message.reply("https://discord.gg/UShzKuv9")
    }
});

client.on('messageCreate', (message) => {
    if (message.content.includes("Tô") && message.content.includes("Đạt")){
     message.reply("☠️☠️☠️")
    }
});
client.login(process.env.token)
