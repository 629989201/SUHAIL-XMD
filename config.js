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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_54_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyLFxuICAgICAgICA3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMwLFxuICAgICAgICA4MixcbiAgICAgICAgMjUyLFxuICAgICAgICA2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM3LFxuICAgICAgICA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGR1doVXdESHh5WE5TVEcvTytQWTBxUWwwMFZUYWtQbTFGNVpJcXkyVzdvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNDYyOTk4OTIwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUNBQzU0NDBGMzJDQzdFQUI3MENCOUFFQUEzRkFDRTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzODQ2MDI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI0NjI5OTg5MjAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQTQ2RDVGQ0Y2OTY5MzhBRTgwNDgyRDdBMjdCNDU4Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4NDYwMjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQzN1ZHFUX0lRUHkwSF9NTFUtaXI5Z1wiLFxuICBcInBob25lSWRcIjogXCJlMzZlNDZkZi1iZTk3LTQ3MDYtYTg0ZS00OTllNGFhZThhNDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTE0LFxuICAgICAgMjksXG4gICAgICAxMTUsXG4gICAgICAxMjcsXG4gICAgICA1OCxcbiAgICAgIDE0OSxcbiAgICAgIDE4NSxcbiAgICAgIDE0LFxuICAgICAgODksXG4gICAgICAxODEsXG4gICAgICAyNDUsXG4gICAgICAzNyxcbiAgICAgIDE3NyxcbiAgICAgIDEwOCxcbiAgICAgIDIzNixcbiAgICAgIDQxLFxuICAgICAgMjUyLFxuICAgICAgMyxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMTIyLFxuICAgICAgNTEsXG4gICAgICAzNCxcbiAgICAgIDM4LFxuICAgICAgMjEyLFxuICAgICAgOTgsXG4gICAgICAxNDgsXG4gICAgICA4OCxcbiAgICAgIDIyMyxcbiAgICAgIDE3OSxcbiAgICAgIDg3LFxuICAgICAgMTY4LFxuICAgICAgMTgxLFxuICAgICAgOTAsXG4gICAgICA2LFxuICAgICAgMjAzLFxuICAgICAgMjE0LFxuICAgICAgMjUxLFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXTTc5UUxZN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI0NjI5OTg5MjAxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NzE2NzU3NzU1NDk4MToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkITwnZCM8J2QiPCdkI3wnZCE8J2QjfCdkILwnZCE4piG8J2QlfCdkITwnZCN8J2QjvCdkIxcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdkFuc1FGRVAzSDRib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1zbWxGNVBaSWRES1VOMk5xY3Y1RlZKdWdQRDBnSFpFOWx0SUhmR2tGdzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaGZXN1ZHRDVOZTNQTlRKOXpvN1JDak80Y3l2ZDY5ZTkwaHVLUXBFbHNUYTNtS0JLY1YxTC9LT01pY3dpNDh1SllBMThJcms1ZEZjU2hwNzN5T1RsQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN0dHemxnbVFLQ0dFQ0VWb252VEE0aG8xL0sxZnpvK2JVV29jUjlmQ0cvWXNOYVNWaktyMnp1T2hIbU5vZnlkSTNJSGFyYlZSeUFTRmtZNFM3Y245QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI0NjI5OTg5MjAxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzODQ2MDE4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFB4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEUHguanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
