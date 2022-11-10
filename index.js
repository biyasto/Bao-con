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

const agents = ["Astra", "Breach", "Brimstone", "Chamber", "Cypher","Habor", "Jett", "KAY/O", "Killjoy", "Neon", "Omen","Phoenix", "Raze","Reyna", "Sage", "Skye", "Sova", "Viper", "Yoru"];

const duelist =["Jett","Neon","Phoenix","Reyna","Yoru","Raze","Sage chiến > duelist"];
const controller =["Omen","Viper","Brimstone","Habor","YOLO bạn ei, khói làm gì"];
const sentinel =["Killjoy","Chamber","Sage","Cypher"];
const innitrator =["Skye","Sova","KAY/O","Breach"];

const gun =["Phantom","Vandal","Operator","Odin Gay"];
const ecogun =["Sheriff","Marshal","Spectre","Ghost"];

const khen = ["Gke","10 điểm","10k momo","chòi oi! ghê quá"];
const ban = ["Bùm chíu","pằng pằng","🔫🔫"];
const choi = ["Dô hoi","30s dô liền", "Tới sáng luôn nè"];
const bye = ["Bái bai mn","Ngủ nghỉ thui"];
const daden = ["👨🏿","👨🏿👨🏿", "👨🏿👨🏿👨🏿"];
const warmup = ["ông hoàng bắn bot, chúa tể warmup","Bắn như đbrr mà suốt ngày warmup", "Vô luôn đi bạn ê! warmup cũng bắn gà như thường à"];

const thuynhi = ["Thụy Nhi số 2 ko ai số 1","Thuy Nhi mai dinh"];
const thuynhilenhoa = ["🗲 Thụy Nhi lên hoa coi, nhanh lên 🗲"];
const khoa = ["Anh Khoa bội bạc","Anh Khoa hiếp dâm con heo, đẩy bà dà xuống biển", "Anh Khoa tồy quá"];
const oke = ["Ô kê con dê","Ôkê luôn nè"];
const doo = ["hai ba dô, hai ba dô","Dô liền nè"];
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  // duelist random
    if ((message.content.includes("duelist") || (message.content.includes("duel"))) && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * duelist.length);
      message.reply(duelist[random])
      return;
    }
  //controller
  if ((message.content.includes("controller") || (message.content.includes("control") )) && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * controller.length);
      message.reply(controller[random])
      return;
    }
  //sentinel
  if ((message.content.includes("sentinel") || (message.content.includes("sen"))) && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * sentinel.length);
      message.reply(sentinel[random])
      return;
    }
    //innitrator
  if ((message.content.includes("innitrator") || (message.content.includes("inni"))) && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * innitrator.length);
      message.reply(innitrator[random])
      return;
    }
  
  //eco gun
   if ((message.content.includes("nghèo") || message.content.includes("eco") || message.content.includes("ngheo")) && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * ecogun.length);
      message.reply(ecogun[random]);
      return;
    }
  //good gun
    if ((message.content.includes("súng") || message.content.includes("sung")) && (message.content.includes("gì")|| (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * gun.length);
      message.reply(gun[random]);
      return;
    }
  //agent random
  if ((message.content.includes("con") || message.content.includes("agent")) && (message.content.includes("gì") || (message.content.includes("gi")))){
      const random = Math.floor(Math.random() * agents.length);
      message.reply(agents[random]);
      return;
    }
  
  

  //To Dat
  if ((message.content.includes("Tô") || message.content.includes("To")) && (message.content.includes("Đạt")||message.content.includes("Dat")) || message.content.includes("TĐạt") || message.content.includes("TDat")){
     message.reply("☠️☠️☠️")
    }
  //thuynhi ko len hoa
  if (message.content.includes("thuynhi") ||  message.content.includes("thụy nhi")){
        const random = Math.floor(Math.random() * thuynhilenhoa.length);
        message.reply(thuynhilenhoa[random]);
        return;
    }
  //Thuy Nhi 
  if ( message.content.includes("Thuy Nhi") || message.content.includes("Thụy Nhi")){
      const random = Math.floor(Math.random() * thuynhi.length);
      message.reply(thuynhi[random]);
      return;
    }
  //Khoa
  if ( message.content.includes("Khoa") || message.content.includes("khoa")){
      const random = Math.floor(Math.random() * khoa.length);
      message.reply(khoa[random]);
      return;
    }
  //chơi
  if (!(message.content.includes("gì") || message.content.includes("gi"))&& (message.content.includes("chơi") || message.content.includes("choi"))){
      const random = Math.floor(Math.random() * choi.length);
      message.reply(choi[random]);
      return;
    }
  //khen
    if (message.content.includes("ace")){
      const random = Math.floor(Math.random() * khen.length);
      message.reply(khen[random]);
      return;  
    }
  //bắn
  if (message.content.includes("ban") || message.content.includes("bắn")){
      const random = Math.floor(Math.random() * ban.length);
      message.reply(ban[random]);
      return;
    }
  
  //invite
  if (message.content.includes("invite")){
       message.reply("https://discord.gg/UShzKuv9");
      return;
    }
  //bye
  if (message.content.includes("bye") || message.content.includes("Bye") || message.content.includes("bai") ){
        const random = Math.floor(Math.random() * bye.length);
        message.reply(bye[random]);
        return;
    }
  //daden
  if (message.content.includes("daden")){
        const random = Math.floor(Math.random() * daden.length);
        message.reply(daden[random]);
        return;
    }
  //warmup
  if (message.content.includes("warmup") || message.content.includes("warm up") ){
        const random = Math.floor(Math.random() * warmup.length);
        message.reply(warmup[random]);
        return;
    }
   //oke
  if (message.content.includes("Ô kê") || message.content.includes("oke")|| message.content.includes("ô kê") || message.content.includes("ok")){
        const random = Math.floor(Math.random() * oke.length);
        message.reply(oke[random]);
        return;
    }
   //dô
  if (message.content.includes("dô") || message.content.includes("Dô")){
        const random = Math.floor(Math.random() * doo.length);
        message.reply(doo[random]);
        return;
    }
});

client.login(process.env.token)
const keep_alive = require('./keepalive.js')
