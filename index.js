const express = require("express"); 
const app = express();
var http = require('http');


app.listen(3000, () => {
  console.log("project is running!");
})

http.createServer(function (req, res){
  res.write("I'm alive");
  res.end();
}).listen(8080);


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
client.setMaxListeners(0);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

const agents = ["Astra", "Breach", "Brimstone", "Chamber", "Cypher","Habor", "Jett", "KAY/O", "Killjoy","Neon","Omen","Phoenix","Raze","Reyna","Sage","Skye","Sova","Viper","Yoru"];


client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (message.content.includes("con") && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * agents.length);
        message.reply(agents[random])
    }
});

const duelist =["Jett","Neon","Phoenix","Reyna","Yoru","Raze","Sage chiến"];

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (!message.content.includes("con") && message.content.includes("duelist") && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * duelist.length);
        message.reply(duelist[random])
    }
});

const controller =["Omen","Viper","Brimstone","Habor"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (!message.content.includes("con") && message.content.includes("controller") && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * controller.length);
        message.reply(controller[random])
    }
});

const sentinel =["Killjoy","Chamber","Sage","Cypher"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (!message.content.includes("con") && (message.content.includes("sentinel") || message.content.includes("sen") ) && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * sentinel.length);
        message.reply(sentinel[random])
    }
});

const innitrator =["Skye","Sova","KAY/O","Breach"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (!message.content.includes("con") && (message.content.includes("innitrator") || message.content.includes("init") ) && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * innitrator.length);
        message.reply(innitrator[random])
    }
});

const gun =["Phantom","Vandal","Operator","Odin Gay"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if ((message.content.includes("súng") || message.content.includes("sung") ) && (message.content.includes("gì")|| (message.content.includes("gi"))) && !(message.content.includes("nghèo") || message.content.includes("eco") || message.content.includes("ngheo") ) ){
      const random = Math.floor(Math.random() * gun.length);
        message.reply(gun[random])
    }
});

const ngheo =["Sheriff","Marshal","Spectre","Ghost"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if ((message.content.includes("nghèo") || message.content.includes("eco") || message.content.includes("ngheo") ) && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * ngheo.length);
        message.reply(ngheo[random])
    }
});


const khen = ["Gke","10 điểm","10k momo","chòi oi! ghê quá"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (message.content.includes("ace")){
      const random = Math.floor(Math.random() * khen.length);
        message.reply(khen[random])
    }
});

const ban = ["Bùm chíu","pằng pằng","🔫🔫"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (message.content.includes("ban") || message.content.includes("bắn")){
      const random = Math.floor(Math.random() * ban.length);
        message.reply(ban[random])
    }
});

const choi = ["Dô  hoi","30s dô liền", "Tới sáng luôn nè"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (!(message.content.includes("gì") || message.content.includes("gi"))&& (message.content.includes("chơi") || message.content.includes("choi"))){
      const random = Math.floor(Math.random() * choi.length);
        message.reply(choi[random])
    }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (message.content.includes("invite")){
     message.reply("https://discord.gg/UShzKuv9")
    }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (message.content.includes("Tô") && message.content.includes("Đạt")){
     message.reply("☠️☠️☠️")
    }
});



const thuynhi = ["Thụy Nhi số 2 ko ai số 1","Thuy Nhi mai dinh"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if ( message.content.includes("Thuy Nhi") || message.content.includes("Thụy Nhi ")){
     const random = Math.floor(Math.random() * thuynhi.length);
        message.reply(thuynhi[random])
    }
});

const thuynhilenhoa = ["🗲 Thụy Nhi lên hoa coi, nhanh lên 🗲"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (message.content.includes("thuynhi") ||  message.content.includes("thụy nhi")){
     const random = Math.floor(Math.random() * thuynhilenhoa.length);
        message.reply(thuynhilenhoa[random])
    }
});


const bye = ["Bái bai mn","Ngủ nghỉ thui", "clm 4h sáng rồi hả, ngủ thui mai dậy đi làm"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (message.content.includes("bye") || message.content.includes("Bye") ){
     const random = Math.floor(Math.random() * bye.length);
        message.reply(bye[random])
    }
});

const daden = ["👨🏿","👨🏿👨🏿", "👨🏿👨🏿👨🏿"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
    if (message.content.includes("anhtoandaden") || message.content.includes("Anhtoandaden") ){
     const random = Math.floor(Math.random() * daden.length);
        message.reply(daden[random])
    }
});

client.login(process.env.token)
