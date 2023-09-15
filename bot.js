require("dotenv").config();  

  //import fetch from "node-fetch"; 
  const moment = require("moment-timezone"); 
  //const fetch = require("node-fetch"); 
  const axios = require("axios"); 
  const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia,  areJidsSameUser, getContentType, downloadMediaMessage } = require("@adiwajshing/baileys");  
  const fs = require("fs");  
  const util = require("util");  
  const chalk = require("chalk");  
  const googleTTS = require("google-tts-api");
  const { Configuration, OpenAIApi } = require("openai");  
  const { DiscussServiceClient } = require("@google-ai/generativelanguage"); 
  const { GoogleAuth } = require("google-auth-library");
  const pm2 = require('pm2');
  const chokidar = require('chokidar');
  const eco = require('discord-mongoose-economy');
  //const ty =  eco.connect('mongodb+srv://rajuji:8jJOF9xIbf4F71U6@cluster0.ojdxgnu.mongodb.net/?retryWrites=true&w=majority');
  const mongoDB = require("./lib/mongoDB");
  const ytdl = require('ytdl-core');
  const ytsr = require('ytsr');
//  const translate = require('translate-google');
  const vm = require('node:vm');
  const translate = require('translate-google-api');
  const os = require('os');

// Your code using fetch here


  

  
  
  module.exports = client = async (client, m, chatUpdate, store) => {  
    try {  
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";  

  
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//If you want a single prefix, you replace it with this = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await client.decodeJid(client.user.id)

const { parseMention } = require('./lib/myfunc.js');
 

//const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
//const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
//const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
//const groupName = m.isGroup ? groupMetadata.subject : ''
//const participants = m.isGroup ? await groupMetadata.participants : ''
//const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
//const isBotAdmins = m.isGroup ? groupAdmins.includes(owner) : false
//const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//const welcm = m.isGroup ? wlcm.includes(from) : false
//const welcmm = m.isGroup ? wlcmm.includes(from) : false
//const AntiLink = m.isGroup ? ntilink.includes(from) : false 
//const isBan = banned.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const qtod = m.quoted? "true":"false"
const owner = "919142294671";

const MODE = process.env.MODE;

//const thinking = await client.sendMessage(m.chat, { text: 'Thinking...' }); 
const BOT_NAME = process.env.BOT_NAME || 'GSS Botwa'
const OWNER_NAME = process.env.OWNER_NAME || 'Goutam'
const APIKEY = process.env.APIKEY;
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]


const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const isEval = body.startsWith('=>')
 
//=================================================//}  
//  Bot Prosess Time
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);
//Uptime
  const uptimeMessage = `*I am alive now since ${hours}h ${minutes}m ${seconds}s*`;
  

           //TIME Wisher 
 const xtime = moment.tz('Asia/Colombo').format('HH:mm:ss') 
 const xdate = moment.tz('Asia/Colombo').format('DD/MM/YYYY') 
 const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')   
   if(time2 < "23:59:00"){ 
 var pushwish = `Good Night 🌌` 
  } 
  if(time2 < "19:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "18:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "15:00:00"){ 
 var pushwish = `Good Afternoon 🌅` 
  } 
  if(time2 < "11:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  } 
  if(time2 < "05:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  }  
    
  

//const sendMsg = await sock.sendMessage(id, reactionMessage)
    //  const from = m.chat;  
      const reply = m.reply;  
      //const sender = m.sender;  
     // const mek = chatUpdate.messages[0];  
  
      const color = (text, color) => {  
        return !color ? chalk.green(text) : chalk.keyword(color)(text);  
      };  
  



function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function loading () {
var goutamload = [
`ㅤʟᴏᴀᴅɪɴɢ
《 █▒▒▒▒▒▒▒▒▒▒▒》10%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ████▒▒▒▒▒▒▒▒》30%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ███████▒▒▒▒▒》50%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ██████████▒▒》80%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ████████████》100%`,
"ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ"
]
let { key } = await client.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < goutamload.length; i++) {
//await delay(10)

    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: goutamload[i]
        }
      }
    }, {});
}}  
  

// Update client's presence based on environment variables
if (process.env.REACODING === 'false' && command) {
  client.sendPresenceUpdate('recording', from);
}

if (process.env.AUTO_READ === 'false' && command) {
  client.readMessages([m.key]);
}

if (process.env.ALWAYS_ONLINE === 'false') {
  client.sendPresenceUpdate('available', m.chat);
} else {
  client.sendPresenceUpdate('unavailable', m.chat);
}

  
      // Group  
     const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";  
     const groupName = m.isGroup ? groupMetadata.subject : "";  
  
      // Push Message To Console  
      let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;  
  
      if (isCmd && !m.isGroup) {  
        console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));  
      } else if (isCmd && m.isGroup) {  
        console.log(  
          chalk.black(chalk.bgWhite("[ LOGS ]")),  
          color(argsLog, "turquoise"),  
          chalk.magenta("From"),  
          chalk.green(pushname),  
          chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),  
          chalk.blueBright("IN"),  
          chalk.green(groupName)  
        );  
      }  
  
      if (isCmd) {  
        switch (command) {  
          case "menu":  
const reactionMessage = {
            react: {
                text: "🕐", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "📑", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage);              
    // let thumb = "./me.jpg"; 
     let me = m.sender 


 await loading()
   await m.reply(`
╭◯━━━━━━━━━━━━━◯
│    ${BOT_NAME}  
╰◯━━━━━━━━━━━━━◯
│ Hi 👋 *${pushname}*
╭◯━━━ *User Info* ━━━◯
│ 🧑 - *Name*: ${pushname}   
│ 📞 - *Number*: @${me.split('@')[0]}
│ ✅ - *Premium*: ✅        
╰◯━━━━━━━━━━━━◯

╭◯━━ *Time Info* ━━◯
│ ⏰ - *Time*: ${xtime}   
│ 📅 - *Date*: ${xdate}   
╰◯━━━━━━━━━━━━━━━━◯

╭◯━━━━━ *Help* ━━━━━◯
│ 🆘 - Please Type */help* 
╰◯━━━━━━━━━━━━━━━━◯

╭◯━ *Bot Commands* ━━━━━◯
│ 1️⃣ - .gpt 🅕 - 
│ 2️⃣ - .img 🅕 - 
│ 3️⃣ - .dall 🅕 -   
╰◯━━━━━━━━━━━━━━━━◯

╭◯━━━ *Bard* ━━━━━◯
│ 🎭 - .bard 🅕           
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Tools Menu* ━━━━━◯
│ 🗣 - .tts 🅕
│ 📋 - .delete 🅕
│ 🌐 - .translate 🅕
│ ℹ️ - .info 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Group Menu* ━━━━━◯
│ 🚫 - .kick @user
│ ➕ - .add @user
│ 👑 - .promote @user
│ 👤 - .demote @user
│ 📣 - .group off / on
│ 🔗 - .linkgc
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Owner Menu* ━━━━━◯
│ ✏️ - .setname 🅕
│ 📝 - .setbio 🅕
│ 🚫 - .block 🅕
│ ✅ - .unblock 🅕
│ 😴 - .sleep 🅕
│ 🔁 - .autoread 🅕
│ 🌐 - .self 🅕
│ 🌍 - .public 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Bug Reporting* ━━◯
│ 🐞 - .bug 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Sticker Menu* ━━━◯
│ 🎨 - .sticker 🅕          
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Search Menu* ━━━━━◯
│ 🔍 - .google 🅕
│ 📷 - .insta 🅕
│ 📦 - .apk 🅕
│ 🎬 - .yts
│ 🌦️ - .weather 🅕
│ 🎵 - .lyrics 🅕
│ 🕵️️ - .githubstalk 🅕
│ 👤 - .igs 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━ *Downloaders* ━◯
│ 🎬 - video  
│ 🎵 - song
╰◯━━━━━━━━━━━━━◯
╭◯━*Anime (18+)*━━━━◯
│ 🍑 - .hentai 🅕 
│ 😺 - .neko  🅕 
│ 🙇♂️ - .trap   🅕 
│ 💦 - .gasm 🅕 
│ 😮 - .ahegao 🅕 
│ 🍑 - .ass 🅕 
│ 🔞 - .bdsm 🅕 
│ 👄 - .blowjob 🅕 
│ 👀 - .cuckold 🅕 
│ 💦 - .cum 🅕
│ 👩🦰 - .milf 🅕 
│ 🦄 - .eba 🅕 
│ 💋 - .ero 🅕 
│ 👠 - .femdom 🅕 
│ 👣 - .foot 🅕 
│ 🥂 - .gangbang 🅕
│ 👓 - .glasses 🅕 
│ 🎸 - .jahy 🅕 
│ 🍆 - .masturbation 🅕 
│ 📚 - .manga   🅕 
│ 😼 - .neko-hentai  🅕 
│ 😽 - .neko-hentai2 🅕 
│ 🍭 - .nsfwloli 🅕 
│ 🎉 - .orgy 🅕 
│ 👙 - .panties 🅕 
│ 🍑 - .pussy 🅕 
│ 🐙 - .tentacles 🅕
│ 🦵 - .thighs 🅕 
│ 👭 - .yuri 🅕 
│ 🩱 - .zettai 🅕 
╰◯━━━━━━━━━━━━━◯
          `);
    
break;

    case 'deleteall': case 'delall': case 'delete': case 'del': {
client.sendMessage(from, { react: { text: "🫡" , key: m.key }})

if (!m.quoted) return reply('Please mention a message')
let { chat, fromMe, id} = m.quoted

const key = {
 remoteJid: m.chat,
 fromMe: false,
 id: m.quoted.id,
 participant: m.quoted.sender
}

await client.sendMessage(m.chat, { delete: key })
}
break;
case 'yts':
case 'ytsearch': {
    if (!args.join(" ")) {
        return client.sendMessage(from, `Example: -yts Heat waves`, m.id); // Fix message sending
    }

    const yts = require("youtube-yts");

    try {
        const search = await yts(args.join(" "));
        const text = args.join(" ");
        let teks = `**YouTube Search Results for: ${text}**\n\n`;

        if (search.all.length === 0) {
            teks += "No results found for the given search query.";
        } else {
            search.all.forEach((result, index) => {
                teks += `**Result No: ${index + 1}**\n\n` +
                    `**Title:** ${result.title}\n` +
                    `**Views:** ${result.views}\n` +
                    `**Duration:** ${result.timestamp}\n` +
                    `**Uploaded:** ${result.ago}\n` +
                    `**Author:** ${result.author.name}\n` +
                    `**URL:** ${result.url}\n\n`;
            });
        }

        // Send the results in a more readable format
        client.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, m);
    } catch (error) {
        console.error("Error searching YouTube:", error);
        client.sendMessage(from, "An error occurred while searching YouTube.");
    }
    break;
}




case 'ping': {
  const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "📌",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 
  const startTime = new Date();
  const pingMsg = await client.sendMessage(m.chat, { text: 'cheking...' });

 await client.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `Respond Speed: ${new Date() - startTime} ms`
        }
      }
    }, {});
  } 
break;


case 'support': case 'supportgc': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "🆘️",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

      
    reply(`⚙ *My developer's group:* ⚙ support grouo bana le ek`)
    }
    break;
    

case 'runtime':
case 'alive': {
  const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "👀", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage);
  await m.reply(uptimeMessage);
}
break;

case 'weather':
        client.sendMessage(from, { react: { text: "✨", key: m.key }}) 
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        client.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;
        

case 'lyrics': {
  const reactionMessage = {
            react: {
                text: "🔍",
                key: m.key
            }
        }
        const successReactionMessage = {
            react: {
                text: "🎼", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
    m.reply('please wait...')	
if (!text) return reply(`Comand usage: ${prefix}lyrics Thunder`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break;




 case 'bard': 
   if (!text) throw `*Chat With Bard AI*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Hello*\n*◉ ${prefix + command} write a hello world program in python*`;  
 const thinking = await client.sendMessage(m.chat, { text: 'Thinking...' }); 
 const MODEL_NAME = "models/chat-bison-001"; 
 const API_KEY = process.env.API_KEY; 
  
 const clint = new DiscussServiceClient({ 
   authClient: new GoogleAuth().fromAPIKey(API_KEY), 
 }); 
  
 async function main() { 
   const result = await clint.generateMessage({ 
     model: MODEL_NAME, // Required. The model to use to generate the result. 
     temperature: 0.5, // Optional. Value `0.0` always uses the highest-probability result. 
     candidateCount: 1, // Optional. The number of candidate results to generate. 
     prompt: { 
       // optional, preamble context to prime responses 
       context: "Respond to all the question in good manner.", 
       // Optional. Examples for further fine-tuning of responses. 
  
       // Required. Alternating prompt/response messages.
       messages: [{ content: text }], 
     }, 
  }); 
      
 // await m.reply(`${result[0].candidates[0].content}`);  
    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: thinking.key,
        type: 14,
        editedMessage: {
          conversation: result[0].candidates[0].content
        }
      }
    }, {});
  
 } 
  
 main(); 
 break;


case 'setbio':{
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "👤",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

if (!text) return m.reply(`Example: ${prefix + command} Hello World`)
    await client.updateProfileStatus(text)
    m.reply(`Bio Sucsessfully changed 2 ${text}`)
    }
 break;
  
case 'setname':{

if (!text) return m.reply(`Where is the name?\nExample: ${prefix + command} Goutam`)
    await client.updateProfilename(text)
    m.reply(`Bot Name Sucsessfully changed 2 ${text}`)
    }
break;

case 'apk': case 'yts': case 'sticker':
  m.reply("This feature is Comming Soon");
break;


  

const languages = require('./lib/languages'); // Import the language codes module

// Function to validate language code
function isValidLanguageCode(code) {
    return (code);
}

// Command handler for 'say', 'tts', and 'gtts'
case 'say':
case 'tts':
case 'gtts': {
    if (!args[0] || !text) {
        return m.reply('Usage: .say <language code> <text>');
    }

    const langCode = args[0]; // Language code provided by the user
    const textToSpeak = args.slice(1).join(" "); // Get the text to speak

    // Validate the language code
    if (!isValidLanguageCode(langCode)) {
        return m.reply('Invalid language code. Please provide a valid language code.');
    }

    // Generate the audio URL using the specified language code and text
    const audioUrl = googleTTS.getAudioUrl(textToSpeak, {
        lang: langCode,
        slow: false,
        host: "https://translate.google.com",
    });

    // Send the audio message
    return client.sendMessage(m.chat, {
        audio: {
            url: audioUrl,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
}
break;





function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
 

// Define the command
case 'info': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "💻",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 
  // Gather system information
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const hostname = os.hostname();
  const uptime = process.uptime();
  const cpuCount = os.cpus().length;
  const loadAvg = os.loadavg();
  const timestamp = performance.now();

  // Calculate memory usage
  const usedMemory = totalMemory - freeMemory;
  const memoryUsagePercent = ((usedMemory / totalMemory) * 100).toFixed(2);

  // Format the response
  const response = `
  System Information:
  - Hostname: ${hostname}
  - Uptime: ${uptime.toFixed(2)} seconds
  - Total Memory: ${formatBytes(totalMemory)}
  - Used Memory: ${formatBytes(usedMemory)} (${memoryUsagePercent}%)
  - CPU Count: ${cpuCount}
  - Load Average (1 min): ${loadAvg[0].toFixed(2)}

  Response Speed: ${(performance.now() - timestamp).toFixed(4)} milliseconds
  `;

  // Send the response
  m.reply(response);
}
break;

case 'insta': case 'ig': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "✔",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

if (!args[0]) return m.reply(`Enter Instagram Username\n\nExample: ${prefix + command} world_reacode_egg`)

const igs = require('api-dylux')
    try {
    let res = await igs.igStalk(args[0])
    let te = `
┌──「 *Information* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await client.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        m.reply(`Make sure the username comes from *Instagram*`)
      }
}
break;
  
 case "img": 
   await loading()
   if (!text) throw `*This command generates image from texts*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} elon musk in pink output*`;  
  
    try {  
      m.reply('*Please wait, generating images...*');  
  
      const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${text}&model=art`;  
      const response = await fetch(endpoint);  
      const data = await response.json();  
  
      if (data.result && Array.isArray(data.result)) {  
        for (let i = 0; i < Math.min(data.result.length, 2); i++) {  
          const imageUrl = data.result[i];  
          const imageResponse = await fetch(imageUrl);  
          const imageBuffer = await imageResponse.buffer();  
          console.log(response); 
          await client.sendImage(from, imageBuffer, text, mek);  
        }  
      } else {  
        throw '*Image generation failed*';  
      }  
    } catch {  
      throw '*Oops! Something went wrong while generating images. Please try again later.*';  
    }  
  
 break;
  
case 'google': {
const reactionMessage = {
            react: {
                text: "🔍",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "👍",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

if (!q) return m.reply(`Example : ${prefix + command} ${botname}`)

let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break;

case 's': case 'sticker': case 'stiker': {

if (!quoted) return m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)

if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break;


case 'bug': case 'request': case 'report': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "🐞",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

	if (!text) return m.reply(`Example : ${

        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                client.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            client.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break;
case "ai": case "gpt":   
  const think = await client.sendMessage(m.chat, { text: 'Thinking...' }); 

           try {  
              if (!process.env.OPENAI_API_KEY) return reply("Aabe Api key to dal de");  
              if (!text) return reply(`*Chat With ChatGPT*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Hello*\n*◉ ${prefix + command} write a hello world program in python*`);  
  
              const configuration = new Configuration({  
                apiKey: process.env.OPENAI_API_KEY,  
              });  
              const openai = new OpenAIApi(configuration);  
  
              const response = await openai.createChatCompletion({  
            model: "gpt-3.5-turbo",  
            messages: [{role: "user", content: text}],  
            });  
           // m.reply(`${response.data.choices[0].message.content}`);
         await client.relayMessage(m.chat, {
            protocolMessage: {
             key: think.key,
             type: 14,
             editedMessage: {
          conversation: response.data.choices[0].message.content
        }
      }
    }, {});
            } catch (error) {  
            if (error.response) {  
              console.log(error.response.status);  
              console.log(error.response.data);  
              console.log(`${error.response.status}\n\n${error.response.data}`);  
            } else {  
              console.log(error);  
              m.reply("Erroring :"+ error.message);  
            }  
          }  
            break;




  
          case "dall": case "ai-img": case "image": case "dalle":  
            if (!text) throw `*This command generates image with Dall-E*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} elon musk in pink output*`;  
  
    try {  
      m.reply('*Please wait, generating images...*');  
             const configuration = new Configuration({  
                apiKey: process.env.OPENAI_API_KEY,  
              });  
              const openai = new OpenAIApi(configuration);  
              const response = await openai.createImage({  
                prompt: text,  
                n: 1,  
                size: "512x512",  
              });  
              //console.log(response.data.data[0].url)  
              client.sendImage(from, response.data.data[0].url, text, mek);  
              } catch (error) {  
            if (error.response) {  
              console.log(error.response.status);  
              console.log(error.response.data);  
              console.log(`${error.response.status}\n\n${error.response.data}`);  
            } else {  
              console.log(error);  
              m.reply("Erroring :"+ error.message);  
            }  
          }  
            break;
            case "sc": case "script": case "scbot":  
             m.reply("https://github.com/sid238/GSS-Botwa");  
            break;
case 'ahegao':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/ahegao.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'ass':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/ass.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'bdsm':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/bdsm.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'milf':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/milf.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'blowjob':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/blowjob.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'cuckold':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/cuckold.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'cum':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/cum.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'eba':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/eba.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'ero':

loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/pussy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'femdom':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/femdom.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'foot':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/foot.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'gangbang':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/gangbang.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'glasses':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/glasses.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'hentai':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/hentai.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'jahy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/jahy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'manga':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/manga.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'masturbation':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/masturbation.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'neko-hentai':
case 'neko':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/neko.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'neko-hentai2':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/neko2.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'nsfwloli':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/nsfwloli.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'orgy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/orgy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'panties':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/panties.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'pussy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/pussy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'tentacles':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/tentacles.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'thighs':
case 'trap':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/thighs.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'yuri':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/yuri.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'zettai':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/zattai.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;

case 'gifblowjob':
//if (!m.isGroup) return m.reply("only work in group");
//if xufufzitx
loading()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await client.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break;

case 'gifhentai':
//if (!m.isGroup) return m.reply("only work in group");
//if xufufzitx
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/gifs.json'))
var nsfwresultx = pickRandom(botwansfw)
    await client.sendMessage(m.chat,{video:nsfwresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break;

case 'promote': {
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) {
        return reply(`*Usage*\n${prefix + command} @tag`);
    }

    // Promote the user in the group
    await client.groupParticipantsUpdate(from, [users], "promote")
        .then((res) => {
            const response = {
                success: true,
                message: `User ${users} has been promoted to admin.`
            };
            reply(JSON.stringify(response)); // Convert the response to JSON string
        })
        .catch((err) => {
            console.error(err);
            const response = {
                success: false,
                message: "An error occurred while promoting the user."
            };
            reply(JSON.stringify(response)); // Convert the error response to JSON string
        });
    break;
}

case 'autoread': {
  if (!args[0]) return reply(`Send the command with options: on or off. Example: ${prefix}${command} on`);

  if (args[0].toLowerCase() === 'on') {
    AUTO_READ = true;
  } else if (args[0].toLowerCase() === 'off') {
    AUTO_READ = false;
  } else {
    reply('Invalid option. Use "on" or "off".');
  }
  break;
}


case 'linkgc': {
    try {
        // Generate the group invite link
        const inviteCode = await client.groupInviteCode(from);

        // Create the full invite link
        const inviteLink = 'https://chat.whatsapp.com/' + inviteCode;

        // Reply with the invite link
        reply(inviteLink);
    } catch (error) {
        console.error("Error generating group invite link:", error);
        reply("Error generating group invite link.");
    }
    break;
}


 case 'group': {

    if (args[0] == "off") {
        // Disable group announcements
        await client.groupSettingUpdate(from, 'announcement', false);
        reply("Group announcements turned off.");
    } else if (args[0] == "on") {
        // Enable group announcements
        await client.groupSettingUpdate(from, 'not_announcement', true);
        reply("Group announcements turned on.");
    } else {
        reply(`Send the command #${command} _options_\nOptions: on & off\nExample: ${prefix + command} on`);
    }
    break;
 }
    
case 'demote': {
    try {
        // Check if it's a group chat
        // Extract the user to be demoted (from mention or quoted message)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        if (!users) {
            return reply(`*Usage*\n${prefix + command} @tag`);
        }

        // Demote the user in the group
        await client.groupParticipantsUpdate(from, [users], "demote");

        reply(`User ${users} has been demoted.`);
    } catch (error) {
        console.error("Error demoting user:", error);
        reply("An error occurred while demoting the user.");
    }
    break;
}
// Define an async function to mention all group members

case 'block': {
  try {
    // Check if there is no text and no quoted message
    if (!text && !m.quoted) return reply(`🚩 Mention or Reply chat target.`);

    let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : text.split`@`[1]) : text;

    // Check if 'number' is not a valid number
    if (isNaN(number)) return reply(`🚩 Invalid number.`);

    // Check if 'number' length is greater than 15
    if (number.length > 15) return reply(`🚩 Invalid format.`);

    let user;

    // Check if 'text' is provided
    if (text) {
      user = number + '@s.whatsapp.net';
    }
    // Check if 'm.quoted.sender' exists
    else if (m.quoted.sender) {
      user = m.quoted.sender;
    }
    // Check if 'm.mentionedJid' exists
    else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    // Check if the user is trying to block the bot itself
    if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return reply(`🚩 ??`);

    // Update the block status
    client.updateBlockStatus(user, 'block');
  } catch (error) {
    console.error("Error blocking user:", error);
    reply("An error occurred while blocking the user.");
  }
  break;
}

case 'unblock': {
  try {
    // Check if there is no text and no quoted message
    if (!text && !m.quoted) return reply(`🚩 Mention or Reply chat target.`);

    let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : text.split`@`[1]) : text;

    // Check if 'number' is not a valid number
    if (isNaN(number)) return reply(`🚩 Invalid number.`);

    // Check if 'number' length is greater than 15
    if (number.length > 15) return reply(`🚩 Invalid format.`);

    let user;

    // Check if 'text' is provided
    if (text) {
      user = number + '@s.whatsapp.net';
    }
    // Check if 'm.quoted.sender' exists
    else if (m.quoted.sender) {
      user = m.quoted.sender;
    }
    // Check if 'm.mentionedJid' exists
    else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    // Check if the user is trying to unblock the bot itself
    if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return reply(`🚩 ??`);

    // Update the block status
    client.updateBlockStatus(user, 'unblock');
  } catch (error) {
    console.error("Error unblocking user:", error);
    reply("An error occurred while unblocking the user.");
  }
  break;
}

case 'translate': {
  try {
    if (!text) return m.reply(isPrefix, command, 'id what is translater');
    if (text && m.quoted && m.quoted.text) {
      let lang = text.slice(0, 2);
      try {
        let data = m.quoted.text;
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    } else if (text) {
      let lang = text.slice(0, 2);
      try {
        let data = text.substring(2).trim();
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    }
  } catch (error) {
    console.error("Error in 'translate' command:", error);
    m.reply(` An error occurred while translating.`);
  }
  break; // Case break statement
}

case 'enhance': {
  const { Jimp, sharp } = require('jimp');
  
  // Check if there is a quoted message (reply)
  if (m.quoted && m.quoted.mimetype && m.quoted.mimetype.startsWith('image')) {
    try {
      // Download the replied image
      const imageBuffer = await m.quoted.download();
  
      // Load the image using Jimp
      const image = await Jimp.read(imageBuffer);
  
      // Apply enhancements using Jimp (e.g., brightness, contrast, etc.)
      image.brightness(1.2); // Adjust brightness (1.2 is just an example value)
      image.contrast(1.1);   // Adjust contrast (1.1 is just an example value)
  
      // Convert the enhanced Jimp image to a Buffer
      const enhancedBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);
  
      // Apply additional enhancements using sharp (e.g., resize)
      const sharpBuffer = await sharp(enhancedBuffer)
        .resize(800) // Adjust width (800 is just an example value)
        .toBuffer();
  
      // Send the enhanced image as a reply
      await client.sendFile(m.chat, sharpBuffer, 'enhanced.jpg', '', m);
    } catch (error) {
      console.error('Error enhancing photo:', error);
      return m.reply(m.chat, 'Error enhancing photo.', m);
    }
  } else {
    // No quoted image found
    m.reply(m.chat, 'Reply to an image to enhance it.', m);
  }
  break;
}



case 'video':
case 'mp4':
  if (!text) {
          const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
          return m.reply(
            `Please provide a valid link!  for valid link try\n\nExample: *${prefix}yts no love*`
          );
        }
  // API Startpoint URL
const apiUrl = "https://muddy-slug-handbag.cyclic.cloud/download"; // Stark API

const videoUrl = text; // yt url from the user

// Axios GET request to fetch data from the API
axios
  .get(`${apiUrl}?url=${encodeURIComponent(videoUrl)}`)
  .then((response) => {
    // Response data from the Goutam Stark's YTDL API
    const data = response.data;

    // Check if data contains title, audio_url, and video_url properties
    if (data.title && data.audio_url && data.video_url) {
      // Extract title, audio_url, and video_url
      const title = data.title;
      // const audioUrl = data.audio_url;
      const videoUrl = data.video_url;

      // User ko Video Vejne ka Code
      client.sendMessage(
          from,
          {
            video: { url: videoUrl },
            caption: `${title} By: *${botname}*`,
          },
          { quoted: m }
        );
  
    } else {
      console.error("Incomplete data received from the API");
    }
  })
  .catch((error) => {
    console.error("Error fetching data from Goutam Starks API:", error);
  });
  break;


case 'self': {
        client.sendMessage(from, { react: { text: "🔐" , key: m.key }})
        client.public = false
        reply('mode changed in to private. only admin can use me!')
        client.setStatus(`Mode : Self`)
        }
        break;

case 'public': {
        client.sendMessage(from, { react: { text: "🔓" , key: m.key }})
        client.public = true
        reply('mode changed in to public. now all user user me!')
        client.setStatus(`Mode : Public`)
        }
        break;

// Define the sleep function
// Define the sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let isSleeping = false; // Variable to track if the bot is sleeping

// Your command handler function
// Define the sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Your command handler function
case 'shutdown': case 'sleep':
    await client.sendMessage(from, { react: { text: "⚠️" , key: m.key }});

    reply(`Okey bye time to sleep!`);
    await sleep(5000); // Pause for 5 seconds
   process.exit();
    // Remove the process.exit() statement to prevent automatic restart
    break;
case 'githubstalk': {
  if (!args[0]) return m.reply(`🕒 Mention a GitHub username to stalk.`);
  
  const username = args[0];
  
  // Fetch GitHub user data (Replace with your actual GitHub API request)
  const githubData = await fetch(`https://api.github.com/users/${username}`);
  const userData = await githubData.json();

  if (userData.message === 'Not Found') {
    return m.reply(`🚩 GitHub user not found.`);
  }

  let caption = `乂  *G I T H U B - S T A L K*\n\n`;
  caption += `  ◦  *Name* : ${userData.name || 'N/A'}\n`;
  caption += `  ◦  *Username* : ${userData.login}\n`;
  caption += `  ◦  *Followers* : ${userData.followers}\n`;
  caption += `  ◦  *Following* : ${userData.following}\n`;
  caption += `  ◦  *Public Repositories* : ${userData.public_repos}\n\n`;
  
  await client.sendMessage(m.chat, { image: { url: userData.avatar_url }, caption: caption }, { quoted: m });
  break;
}

case 'instagramstalk': {
  if (!args[0]) return m.reply(`🕒 Mention an Instagram username to stalk.`);
  
  const username = args[0];
  
  // Fetch Instagram user data (Replace with your actual Instagram API request)
  const instagramData = await fetch(`https://api.instagram.com/v1/users/${username}`);
  const userData = await instagramData.json();

  if (userData.message === 'Not Found') {
    return m.reply(`🚩 insta user not found.`);
  }

  let caption = `乂  *I N S T A G R A M - S T A L K*\n\n`;
  caption += `  ◦  *Full Name* : ${userData.data.full_name || 'N/A'}\n`;
  caption += `  ◦  *Username* : ${userData.data.username}\n`;
  caption += `  ◦  *Followers* : ${userData.data.counts.followers}\n`;
  caption += `  ◦  *Following* : ${userData.data.counts.follows}\n`;
  caption += `  ◦  *Posts* : ${userData.data.counts.media}\n\n`;
  
  await client.sendMessage(m.chat, { image: { url: userData.data.profile_picture }, caption: caption }, { quoted: m });
  break;
}


case 'afk': {
  try {
    const user = m.sender;
    user.afk = +new Date;
    user.afkReason = text;
    user.afkObj = m;
    let tag = m.sender.split`@`[0];
    return m.reply(`🚩 @${tag} is now AFK!`);
  } catch (error) {
    console.error("Error in 'afk' command:", error);
    m.reply('An error occurred while setting AFK status.');
  }
  break;
}

case 'play': {
  const match = /^play\s(.+)$/i.exec(!text);
  if (!match) return m.reply("_Need song name, e.g., .play starboy_");
 const songName = match[1].trim();
  
  let sr = (await searchYT(songName)).videos[0];
  if (!sr) return m.reply("_No results found for this song_");

  const title = await ytTitle(sr.id);
  await m.reply(`*Downloading:* _${title}_`);
  
  let sdl = await dlSong(sr.id);
  ffmpeg(sdl)
    .save('./temp/song.mp3')
    .on('end', async () => {
      var song = await addInfo('./temp/song.mp3', title, BOT_INFO.split(";")[0], "Raganork audio downloader", await skbuffer(`https://i3.ytimg.com/vi/${sr.id}/hqdefault.jpg`))
      return await client.sendMessage(message.jid, {
        audio: song,
        mimetype: 'audio/mp4'
      }, {
        quoted: message.data
      });
    });
  break;
}
  case 'setnam': {
  let value = m.quoted ? m.quoted.text : text;
  if (!value) return m.reply('sid bhai');
  if (value.length > 25) return m.reply('🚩 Text is too long, maximum 25 characters.');
  await client.groupUpdateSubject(m.chat, value);
  break; // Case break statement
}
case 'setdesc': {
  let value = m.quoted ? m.quoted.text : text;
  if (!value) return m.reply('sid bhai.');
  await client.groupUpdateDescription(m.chat, value);
  break; // Case break statement
}

case 'sider': {
  try {
    let member = participants.filter(u => u.admin == null).map(u => u.id);
    var day = 86400000 * 7;
    var sider = [];

    member.filter(jid => {
      if (!global.db.users.some(v => v.jid == jid) && typeof global.db.groups.find(v => v.jid == m.chat).member[jid] === 'undefined' && jid != client.decodeJid(client.user.id)) sider.push(jid);
    });

    var lastseen = Object.entries(global.db.groups.find(v => v.jid == m.chat).member).filter(([jid, data]) => data.lastseen).sort((a, b) => a[1].lastseen - b[1].lastseen).filter(([v, x]) => x.lastseen != 0 && ((now - x.lastseen > day) || (now - global.db.users.find(c => c.jid == v).lastseen > day)) && (global.db.users.some(c => c.jid == v) && !global.db.users.find(c => c.jid == v).premium && !global.db.users.find(c => c.jid == v).whitelist) && v != client.decodeJid(client.user.id));

    if (args && args[0] == '-y') {
      let arr = Object.entries(lastseen).map(([jid, _]) => jid).concat(sider);
      if (arr.length == 0) return m.reply(`🚩 There is no sider in this group.`);
      for (let jid of arr) {
        await Func.delay(2000);
        await client.groupParticipantsUpdate(m.chat, [jid], 'remove');
      }
      await m.reply(`🚩 Done, ${arr.length} siders successfully removed.`);
    } else {
      if (sider.length == 0 && lastseen.length == 0) return m.reply( `🚩 There is no sider in this group.`);
      let teks = `乂  *S I D E R*\n\n`;
      teks += sider.length == 0 ? '' : `“List of *${sider.length}* members with no activity.”\n\n`;
      teks += sider.length == 0 ? '' : sider.map(v => '	◦  @' + v.replace(/@.+/, '')).join('\n');
      teks += '\n\n';
      teks += lastseen.length == 0 ? '' : `“List of *${lastseen.length}* members not online for 1 week.”\n\n`;
      teks += lastseen.length == 0 ? '' : lastseen.map(([v, x]) => '	◦  @' + v.replace(/@.+/, '') + '\n	     *Lastseen* : ' + Func.toDate(now - x.lastseen).split('D')[0] + ' days ago').join('\n');
      teks += `\n\n*Note*: This feature will be accurate when the bot has been in the group for 1 week, send *${isPrefix + command} -y* to remove them.`;
      teks += `\n\n${global.footer}`;
      m.reply(m.chat, teks, m);
    }
    break; // Case break statement
  } catch (e) {
    m.reply(m.chat, Func.jsonFormat(e), m);
    break; // Case break statement
  }
}

case 'cal':
case 'calc':
case 'calcular':
case 'calculadora':
  try {
    let id = m.chat;
    conn.math = conn.math ? conn.math : {};

    if (id in conn.math) {
      clearTimeout(conn.math[id][3]);
      delete conn.math[id];
      return m.reply('...');
    }

    let val = text
      .replace(/[^0-9\-\/+*×÷πEe()piPI.]/g, '') // Allow decimal point '.'
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π|pi/gi, 'Math.PI')
      .replace(/e/gi, 'Math.E')
      .replace(/\/+/g, '/')
      .replace(/\++/g, '+')
      .replace(/-+/g, '-');

    let format = val
      .replace(/Math\.PI/g, 'π')
      .replace(/Math\.E/g, 'e')
      .replace(/\//g, '÷')
      .replace(/\*×/g, '×');

    let result = (new Function('return ' + val))();

    if (isNaN(result)) throw 'Invalid result';

    m.reply(`*${format}* = _${result}_`);
  } catch (e) {
    // Handle specific error messages
    if (typeof e === 'string') {
      return m.reply(e);
    } else {
      // Handle unexpected errors
      return m.reply('An unexpected error occurred.');
    }
  }
  break; // Case break statement for the calculator command


// Case for removing image background
/*case 'rmbg':
case 'removebg':
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    const img = await q.download();

    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', img, 'file.jpg');

    const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': process.env.REMOVE_BG_API_KEY,
      },
      responseType: 'arraybuffer',
      encoding: null,
    });

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const imageData = response.data;

    fs.writeFileSync('no-bg.png', imageData);

    // Add the caption to the image
    const caption = 'ᗰᗩᗪE ᗷY GSS_BOTWA';
    client.sendFile(m.chat, 'no-bg.png', '', caption, m);
  } catch (e) {
    console.error(e);
    m.reply('Sorry, an error occurred while processing the image, maybe check your API key.');
  }
  break; // Case break statement for removing image background*/

// Case for taking a screenshot of a web page
case 'ss':
case 'ssf':
case 'ssweb':
  if (!args[0]) {
    m.reply(m.chat, '*[🔎] Give a URL*');
  } else {
    try {
      let ss = await (await fetch(`https://image.thum.io/get/fullpage/${args[0]}`)).buffer();
     client.sendFile(m.chat, ss, 'error.png', args[0], m);
    } catch (e) {
      console.error(e);
      client.reply(m.chat, 'An error occurred while capturing the screenshot. Please check the URL.', m);
    }
  }
  break; // Case break statement for taking a screenshot of a web page



case 'kick': {
    // Check if it's a group chat
    // Extract the user to be kicked (from mention or quoted message)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) {
        return reply(`*Usage*\n${prefix + command} @tag`);
    }

    // Kick the user from the group
    await client.groupParticipantsUpdate(from, [users], 'remove')
        .then((res) => {
            const response = {
                success: true,
                message: `User ${users} has been kicked from the group.`
            };
            reply(JSON.stringify(response)); // Convert the response to JSON string
        })
        .catch((err) => {
            console.error(err);
            const response = {
                success: false,
                message: "An error occurred while kicking the user."
            };
            reply(JSON.stringify(response)); // Convert the error response to JSON string
        });

    break;
}

case 'add': {
  // Check if it's a group chat

  // Extract the user to be added (from mention, quoted message, or provided text)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  if (!users) {
    return reply(`*Usage*\n${prefix + command} @tag`);
  }

  // Add the user to the group
  await client.groupParticipantsUpdate(from, [users], 'add')
    .then(() => {
      reply(`User ${users} has been added to the group.`);
    })
    .catch((err) => {
      console.error(err);
      reply('An error occurred while adding the user to the group.');
    });

  break;
}

case 'tt': {
  const messageText = message.body; // Get the text of the incoming message

  // Extract the TikTok URL from the message
  const tiktokUrl = messageText.slice(3).trim(); // Assuming "tt " as the prefix

  // Download TikTok video
  const videoUrl = await downloadTikTokVideo(tiktokUrl);

  // Send the downloaded video back to the user
  if (videoUrl) {
    const media = MessageType.video;
    media.url = videoUrl;
    media.mimetype = 'video/mp4';
    await m.sendMessage(message.key.remoteJID, media, MessageType.video);
  } else {
    await m.sendMessage(message.key.remoteJID, 'Sorry, I couldn\'t download the TikTok video.');
  }
  break;
}



default: {  
            if (isCmd && budy.toLowerCase() != undefined) {  
              if (m.chat.endsWith("broadcast")) return;  
              if (m.isBaileys) return;  
              if (!budy.toLowerCase()) return;  
              if (argsLog || (isCmd && !m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              } else if (argsLog || (isCmd && m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              }  
            }  
          }  
        }  
      }  
    } catch (err) {  
      m.reply(util.format(err));  
    }  
  };  
  
  let file = require.resolve(__filename);  
  fs.watchFile(file, () => {  
    fs.unwatchFile(file);  
    console.log(chalk.redBright(`Update ${__filename}`));  
    delete require.cache[file];  
    require(file);  
  });