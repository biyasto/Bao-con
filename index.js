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

const agents = ["Breach", "Brimstone", "Chamber", "Cypher", "Jett", "KAY/O", "Killjoy", "Neon", "Omen","Phoenix", "Raze","Reyna", "Sage", "Skye", "Sova", "Viper", "Yoru"];

const thangthua = ["Ez win", "Thua sml"];
const duelist =["Jett","Neon","Phoenix","Reyna","Yoru","Raze","Sage chiến > duelist"];
const controller =["Omen","Viper","Brimstone","Habor","Đi thẳng vào mà bắn, khói làm gì"];
const sentinel =["Killjoy","Chamber","Sage","Cypher"];
const innitrator =["Skye","Sova","KAY/O","Breach"];

const gun =["Phantom","Vandal","Operator","Odin Gay"];
const ecogun =["Sheriff","Marshal","Spectre","Ghost"];
const sungluc=["Cờlácsít","Ghost 👻","Sheriff 🤠","Frenzy go brrrr"]
const khen = ["Gke","10 điểm","10k momo","chòi oi! ghê quá"];
const ban = ["Bùm chíu","pằng pằng","🔫🔫"];
const choi = ["Dô hoi","30s dô liền", "Tới sáng luôn nè"];
const bye = ["Bái bai mn","Ngủ nghỉ thui"];
const daden = ["👨🏿","👨🏿👨🏿", "👨🏿👨🏿👨🏿"];
const warmup = ["ông hoàng bắn bot, chúa tể warmup","Bắn như đbrr mà suốt ngày warmup", "Vô luôn đi bạn ê! warmup cũng bắn gà như thường à"];

const thuynhi = ["Thụy Nhi số 2 ko ai số 1","Thuy Nhi mai dinh"];
const thuynhilenhoa = ["🗲 Thụy Nhi lên hoa coi, nhanh lên 🗲"];
const khoa = ["Anh Khoa bội bạc","Anh Khoa hiếp dâm con heo, đẩy bà dà xuống biển", "Anh Khoa tồy quá"];
const oke = ["Ôkê con dê","Ôkê luôn nè"];
const doo = ["hai ba dô, hai ba dô","Dô liền nè"];
const meow = ["meow meow"];
client.on('messageCreate', (message) => {
  //avoid reply to self and other bot
   if (message.author.bot) return;
  //Lowercase msg and normalize
  var message_lc= message.content.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  //kick
  console.log(message_lc);
    if (message_lc.includes("kick")){
      const random = Math.floor(Math.random() * thangthua.length);
      message.reply("con người chứ phải con bot đâu mà có 1 câu dọa hoài")
      return;
    }
   // thang hay thua 
    if ((message_lc.includes("thang"))  && message_lc.includes("thua")){
      const random = Math.floor(Math.random() * thangthua.length);
      message.reply(thangthua[random])
      return;
    }
  
  // duelist random
    if (message_lc.includes("duel") && message_lc.includes("gi")){
      const random = Math.floor(Math.random() * duelist.length);
      message.reply(duelist[random])
      return;
    }
  //controller
  if (message_lc.includes("control") && message_lc.includes("gì")){
      const random = Math.floor(Math.random() * controller.length);
      message.reply(controller[random])
      return;
    }
  //sentinel
  if (message_lc.includes("sen") && message_lc.includes("gì")){
      const random = Math.floor(Math.random() * sentinel.length);
      message.reply(sentinel[random])
      return;
    }
    //innitrator
  if (message_lc.includes("inni") && message_lc.includes("gì")){
      const random = Math.floor(Math.random() * innitrator.length);
      message.reply(innitrator[random])
      return;
    }
  // gun pistol
    if ((message_lc.includes("luc") || message_lc.includes("pist")) && message_lc.includes("gi")){
      const random = Math.floor(Math.random() * gun.length);
      message.reply(gun[random]);
      return;
    }
  //eco gun
   if ((message_lc.includes("eco") || message_lc.includes("ngheo")) && message_lc.includes("gi")){
      const random = Math.floor(Math.random() * ecogun.length);
      message.reply(ecogun[random]);
      return;
    }
  //good gun
    if (message_lc.includes("sung") && message_lc.includes("gi")){
      const random = Math.floor(Math.random() * gun.length);
      message.reply(gun[random]);
      return;
    }
  //agent random
  if ((message_lc.includes("con") || message_lc.includes("agent")) && message_lc.includes("gi")){
      const random = Math.floor(Math.random() * agents.length);
      message.reply(agents[random]);
      return;
    }
  //To Dat
  if ((message_lc.includes("to") && message_lc.includes("dat")) || message_lc.includes("tdat")){
     message.reply("☠️☠️☠️")
    }
  //thuynhi ko len hoa
  if (message.content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("thuy") &&       
      message.content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("nhi")){
        const random = Math.floor(Math.random() * thuynhilenhoa.length);
        message.reply(thuynhilenhoa[random]);
        return;
    }
  //Thuy Nhi 
  if ( message.content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("Thuy") &&
      message.content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("Nhi")){
      const random = Math.floor(Math.random() * thuynhi.length);
      message.reply(thuynhi[random]);
      return;
    }
  //Khoa
  if (message_lc.includes("khoa")){
      const random = Math.floor(Math.random() * khoa.length);
      message.reply(khoa[random]);
      return;
    }
  //chơi
  if (message_lc.includes("choi")){
      const random = Math.floor(Math.random() * choi.length);
      message.reply(choi[random]);
      return;
    }
  //khen
    if (message_lc.includes("ace")){
      const random = Math.floor(Math.random() * khen.length);
      message.reply(khen[random]);
      return;  
    }
  //bắn
  if (message_lc.includes("ban")){
      const random = Math.floor(Math.random() * ban.length);
      message.reply(ban[random]);
      return;
    }
  
  //invite
  if (message_lc.includes("invite")){
       message.reply("https://discord.gg/UShzKuv9");
      return;
    }
  //bye
  if (message_lc.includes("bye")){
        const random = Math.floor(Math.random() * bye.length);
        message.reply(bye[random]);
        return;
    }
  //daden
  if (message_lc.includes("daden")){
        const random = Math.floor(Math.random() * daden.length);
        message.reply(daden[random]);
        return;
    }
  //warmup
  if (message_lc.includes("warmup") || message_lc.includes("warm up") ){
        const random = Math.floor(Math.random() * warmup.length);
        message.reply(warmup[random]);
        return;
    }
   //oke
  if (message_lc.includes("o ke") || message_lc.includes("ok")){
        const random = Math.floor(Math.random() * oke.length);
        message.reply(oke[random]);
        return;
    }
   //dô
  if ( message.content.includes("dô")){
        const random = Math.floor(Math.random() * doo.length);
        message.reply(doo[random]);
        return;
    }
     //meow
  if (message_lc.includes("meow") || message_lc.includes("meo")){
        const random = Math.floor(Math.random() * meow.length);
        message.reply(meow[random]);
        return;
    }
   //chê
  if (message_lc.includes("che") || message_lc.includes("cke")){
        const random = Math.floor(Math.random() * meow.length);
        message.reply("cke^ nka");
        return;
    }
});

client.login(process.env.token)
const keep_alive = require('./keepalive.js')
