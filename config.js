const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "224629826246";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_43_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgzLFxuICAgICAgICA5NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYzLFxuICAgICAgICA4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgODUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNixcbiAgICAgICAgMTgsXG4gICAgICAgIDczLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDk5LFxuICAgICAgICA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcyLFxuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldBaERyOHFGWStnSHhaelZOQXRLV1pVR0RpanVyejZmSmZTZERzRnMrVjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI0NjI5ODI2MjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNzMyMDM5RkE0REYzMzEwMzY5ODMxOEREMkI0RkM3Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4NTYxOTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjQ2Mjk4MjYyNDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVFQjQ2RkU3MkM0NUFFMzg5Mjc1NDQ4OTA1QzlFNkU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzg1NjE5M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyNjNGcW81dFIydVlpeG9FQklRRG9nXCIsXG4gIFwicGhvbmVJZFwiOiBcImVlMWMwYjQ3LWJiOTgtNGEwNS1iY2JkLTJiM2IyNDA5Mzc5MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICAyMzIsXG4gICAgICAxODQsXG4gICAgICAxMTEsXG4gICAgICAxMjMsXG4gICAgICA4MSxcbiAgICAgIDIwMSxcbiAgICAgIDQ0LFxuICAgICAgMTAsXG4gICAgICAxMzgsXG4gICAgICAxOTAsXG4gICAgICAzOSxcbiAgICAgIDI1MSxcbiAgICAgIDc5LFxuICAgICAgMjM2LFxuICAgICAgMTAyLFxuICAgICAgODEsXG4gICAgICA1MyxcbiAgICAgIDIxNCxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxNjksXG4gICAgICAyNDgsXG4gICAgICAxMjIsXG4gICAgICAxMCxcbiAgICAgIDIyMCxcbiAgICAgIDEyMCxcbiAgICAgIDUyLFxuICAgICAgMzMsXG4gICAgICAxOCxcbiAgICAgIDE4NCxcbiAgICAgIDczLFxuICAgICAgMTIyLFxuICAgICAgMjA5LFxuICAgICAgNTcsXG4gICAgICAyNCxcbiAgICAgIDE3MSxcbiAgICAgIDE0NyxcbiAgICAgIDIxMSxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxNjZFUUhXUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI0NjI5ODI2MjQ2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCS8J2QhPCdkIjwnZCG8J2QjfCdkITwnZCU8J2QkSDwnZCV8J2QhPCdkI3wnZCO8J2QjFwiLFxuICAgIFwibGlkXCI6IFwiMTc2NDAwNjgyMzE0MjI6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYUFtdjRCRUxtWDRyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZJa1IyV1hmMjZMSFhBQW1EdmJlUFV6aVpxT3pod1lQb1VWbVVnNFBEa0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibjVDWTFCUEJYZ0dEWDVlYUV1aGc4eHlBcjl1STN2ZHNCQ01jSm9mNnlxZU90RzE4VkVtRC9xSkdwdUkrK2gwSFlOaXl0UVlqd1VvYnJKSndFYWJIQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieHI3NnJXTUVNNXFJWnNBKzJyMmhHM01HMHBENkc0MzJuK3AxaEV3Y2JlNWJuL21KdWJuV2tXU1FsY1MrK3J5RE1iMEFCMEMrU0VQOGpyZEpjZTN0Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI0NjI5ODI2MjQ2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM4NTYxOTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJQWlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlBaS5qc29uIjogIntcImtleURhdGFcIjpcIjJWUXJ6TXhLa0ZOemxTcktNMW52aFVxYWZaWXdqNWZSR3hjN3VwY2ZnQ009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTMzMTAyNjk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM4NTYxOTI0NjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
