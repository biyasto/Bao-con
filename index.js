const {
    Client,
    GatewayIntentBits
} = require('discord.js');
const {
    map
} = require('./map.js')
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

//if (map instanceof Map) {
//const result = map.get('agents');
//message.reply(result[Math.floor(Math.random() * result.length)]);
//}
function GetMapRandomValue(name) {
    const value = map.get(name);
    const result = value[Math.floor(Math.random() * value.length)];
    console.log("reply: " + result);
    return result
}

//debug:
//GetMapRandomValue('doo')

client.on('messageCreate', (message) => {
    //avoid reply to self and other bot
    if (!(map instanceof Map) || message.author.bot) return;
    //Lowercase msg and normalize
    //Note: Tại vì Chữ Đ ko ko có normalize
    const message_lc = message.content.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");;
    //kick
    console.log(message_lc);
    if (message_lc.includes("kick")) {
        message.reply(GetMapRandomValue('kick'));
        return;
    }
    // thang hay thua 
    if ((message_lc.includes("thang")) && message_lc.includes("thua")) {
        message.reply(GetMapRandomValue('thangthua'));
        return;
    }
    // duelist random
    if (message_lc.includes("duel") && message_lc.includes("gi")) {
        message.reply(GetMapRandomValue('duelist'));
        return;
    }
    //controller
    if (message_lc.includes("control") && message_lc.includes("gi")) {
        message.reply(GetMapRandomValue('controller'));
        return;
    }
    //sentinel
    if (message_lc.includes("sen") && message_lc.includes("gi")) {
        message.reply(GetMapRandomValue('sentinel'));
        return;
    }
    //innitrator
    if (message_lc.includes("inni") && message_lc.includes("gi")) {
        message.reply(GetMapRandomValue('innitrator'));
        return;
    }
    // gun pistol
    if ((message_lc.includes("luc") || message_lc.includes("pist")) && message_lc.includes("gi")) {
        message.reply(GetMapRandomValue('sungluc'));
        return;
    }
    //eco gun
    if ((message_lc.includes("eco") || message_lc.includes("ngheo")) && message_lc.includes("gi")) {
        message.reply(GetMapRandomValue('ecogun'));
        return;
    }
    //good gun
    if (message_lc.includes("sung") && message_lc.includes("gi")) {
        message.reply(GetMapRandomValue('gun'));
        return;
    }
    //agent random
    if ((message_lc.includes("con") || message_lc.includes("agent")) && message_lc.includes("gi")) {
        message.reply(GetMapRandomValue('agents'));
        return;
    }
    //To Dat
    if ((message_lc.includes("to") && message_lc.includes("dat")) || message_lc.includes("tdat")) {
        message.reply(GetMapRandomValue('todat'));
        return;
    }
    //thuynhi ko len hoa
    if (message.content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("thuy") &&
        message.content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("nhi")) {
        message.reply(GetMapRandomValue('thuynhilenhoa'));
        return;

    }
    //Thuy Nhi 
    if (message.content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("Thuy") &&
        message.content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("Nhi")) {
        message.reply(GetMapRandomValue('thuynhi'));
        return;
    }
    //Khoa
    if (message_lc.includes("khoa")) {
        message.reply(GetMapRandomValue('khoa'));
        return;
    }
    //chơi
    if (message_lc.includes("choi")) {
        message.reply(GetMapRandomValue('choi'));
        return;
    }
    //ace
    if (message_lc.includes("ace")) {
        message.reply(GetMapRandomValue('ace'));
        return;
    }
    //bắn
    if (message_lc.includes("ban")) {
        message.reply(GetMapRandomValue('ban'));
        return;
    }

    //invite
    if (message_lc.includes("invite")) {
        message.reply(GetMapRandomValue('invite'));
        return;
    }
    //bye
    if (message_lc.includes("bye")) {
        message.reply(GetMapRandomValue('bye'));
        return;
    }
    //daden
    if (message_lc.includes("daden")) {
        message.reply(GetMapRandomValue('daden'));
        return;
    }
    //warmup
    if (message_lc.includes("warmup") || message_lc.includes("warm up")) {
        message.reply(GetMapRandomValue('warmup'));
        return;
    }
    //oke
    if (message_lc.includes("o ke") || message_lc.includes("ok")) {
        message.reply(GetMapRandomValue('oke'));
        return;
    }
    //dô
    if (message.content.includes("dô")) {
        message.reply(GetMapRandomValue('doo'));
        return;
    }
    //meow
    if (message_lc.includes("meow") || message_lc.includes("meo")) {
        message.reply(GetMapRandomValue('meow'));
        return;
    }
    //chê
    if (message_lc.includes("che") || message_lc.includes("cke")) {
        message.reply(GetMapRandomValue('chê'));
        return;
    }
});

client.login(process.env.token)
const keep_alive = require('./keepalive.js')