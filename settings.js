//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : CypherX
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972

//----------------------[ CYPHER-X ]----------------------//

const fs = require('fs')
//File System module - because even bots need to read and write💁‍♂️
const { color } = require('./lib/color')
//Colouring console because plain text is quite boring😑
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAI2Fulr06NiJwQQAAJUIAAAKAAAAY3JlZHMuanNvbq1Va4+iSBT9K5v6qhl5P0w6GUARfCMq6mY*lFBoyVOqQGHif99gd890MrOzvcnyqSiq7j333HMu30CaYYImqAb9byAvcAUpape0zhHoA70MQ1SALggghaAPOtPTSGtuS+860cOeXQmKIWZjbxyttxwju5brjC*LqxB1PPsFPLogL48x9n8TsA5SaxYouu9dqjAP1*H0tlHYieFFHKwPBuMLEhmqQahu9y*g0UaEuMDpaZifUYIKGE9QvYS4+Bz80cDfJUXUYea4CYXm0OkoCsma7RJmdR3MuIE9Ta4I0T37SfhmPUTbKX+aV*uTK1qSuOBCW97bSlltT1g8WsNOMDdVQ3dur*AJPqUosAOUUkzrT*MuzEaX5ipstgxjXwLjurxHK1O0fWfld3RPIHJPX9E0N*fs6XPAG27h5b3NMb1EjjzIFo2J0Vmf4nB3iNO40me9eObT0LvvhI*Al8W7VqL*wns2EzM28A69qpwTdIwrPK1PemDI+XWgGL2S84ZE9Tv+ivE*B1*xo9q3U*Ww5rNxZ5W6SrYPNvB+3fk3NrhOZ9czK947DoeVH*AhLYvfobxZluade1xlzlNNu9tny6x9HNL7asxfdqmYVHZ92GniwhgSKR9eemy9gJ1oEwbhdHzi4EbbavuByi7GCB8r35Ec+WDcXp4VRai2A9BnH11QoBMmtIAUZ2m7J*BdAIPKRX6B6JNdEC2cMhmW+7tTQ9Orl8lCzhx0zM+7mFs0BkPDYOIJgS6aygvogrzIfEQICixMaFbUM0QIPCEC+n8+G9XWXKAko2iMA9AHHC+oLCtwvKIwwlfy5XaGlMA8*5IiCrogLLJkhkCfFiXqgucNRVd4eTDkVdVg5CHDyBrPSYYqcwIzkHiJaUtMXrOucYIIhUkO+qwsKJwsKxz*6P5PQCRONBRFFvShwg0kQ5Y0SWNMZqiKiiSYQ+73QCTp8VcXpOhOX4Xc0s+zXRDigtBNWuZxBoN3lb9*hL6flSl169Q32gUqQP*DNqIUpyfSllamsPDPuEJGWwfohzAm6HvHUYGC91reppiRBa0QRYHzhJm8BC32NtDP5PT5n+lJYXsajAqYBjn8w6gLHIMuiJ+3WYYRRJZheUWRGJXp81*b*cd33G2aAFGIYwL6wJhb5+hOnOtx7d6c*V5zNW2iaa243ut8N9CrQlfThLv5uxlWJVdjsq1L0OrixkkcTYk2Uo*NwFOtJs4nl9mvgrS*EpvtufukuS1vpjm7NUWi59o6M*lLnORRecCj3dBHmj297cWwJHeDxI7CWstTIrjT6ZbE3oWwS8Gar5l7bwuN3XpOdeelzRagCvvoY7IsOBcrab2tL8cmWcUa0dLAwdvUgkfuvE*XU4*Z7+5LMbWOxmpTF6ZsuocQpUwx4t3dOVpelzw7U8cGLLWtZi0GPbwenF6t*Rwt8dtIx2+uw8*XEKPnhHzr1L929BV4Kzzm0f0Q423m*sPc0jeuSIllNnaFotN8Ym4KK9oz+SE*GLKmV55yY6uVIkI3a8CjdUAeQxpmRQL6gCRHCLqgyMpWxnYaZr*JZOi2*eT40QUxJFT7YY1fuI0VX08tiyy3IDm3DIwELSlbnddanrsU0nenAa19DKcCj78BUEsBAhQDFAAACAgAjYW6WvTo2InBBAAAlQgAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAA6QQAAAAA' 
// You know the drill. Put your CypherX session id here. Should look like: XPLOADER-BOT:~ (don't forget that, it's crucial!)

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'CypherX' 
// Pick a name for the bot. Default is "CypherX" — but who doesn’t love a cool bot name?

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254116285598' 
// Your personal contact number. If you want to call Tylor, this is the number. 👀

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Tylor' 
// Set your name, currently it's the mastermind's. The one and only... Tylor. (Don't ask how I got here, it's a mystery.)

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "Cypher" 
// Time to decide the name for your sticker pack. This will appear every time you create a sticker. "Cypher" is the default because... well, why not?

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "X" 
// Who's the artist behind those epic stickers? You, of course! Unless you're just using the default name "X" – mystery vibes!

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
// The bot is time-traveling. Set the timezone correctly. Trust us, you don't want the bot to get confused. 🕒

//--------------[ POSTGRES DATABASE ]----------------//

global.postgresqls = process.env.DATABASE_URL || "";
// Your database URL. If you're using panel, no need to fill, if you're using Heroku, this will be automatically filled. Let the magic happen!

//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg---"
// Where does the journey end? Maybe an Instagram link? Or WhatsApp link🤔 Or maybe just a placeholder. Who knows? 👀

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "©CypherX is on fire!🔥"
// Add a watermark finished tasks because... every masterpiece needs a signature.

//---------------------[ REPLIES ]-----------------------//
global.mess = { 
  done: '✅ *Mission Accomplished!* All systems go, CypherX finished the task!',
  success: '🎉 *BOOM! Success!* CypherX is too cool for this world. We did it!',
  owner: '🚫 *Hold up!* This command is for the big boss only. You’re not the boss of me!',
  group: '👥 *Join the club!* This feature is exclusive to group chats!',
  admin: '🔒 *Admin powers required!* Make me an admin, and I’ll unlock this magic for you.',
  notadmin: '⚠️ *Not Quite There Yet!* You gotta be the admin to wield this feature. Better start begging!',
//new
  error: '🤖 *Oopsie!* Something went wrong. Maybe try again? Or blame the developer. Your call!',
  wait: '⏳ *Hold your horses!* I’m working on it... (No, seriously, I’m not slacking off.)',
  nolink: '🔗 *Link not found!* Did you forget to include it, or are you just testing me?',
  notext: '🤔 *No query detected!* Did you forget to include it, or are you just testing me?',
  ban: '🚨 *Banned!* You’ve been banished to the shadow realm. (Don’t worry, it’s not permanent... probably.)',
  unban: '🎈 *Unbanned!* Welcome back! We missed you... kind of.'
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! Or I’ll send CypherX after you... 😈 */

//😹😹🙆‍♂️
// botz = m (Not to be confused with 'The bot'... he's cooler.)
// isOwner = 🤔 (But only on special days... we keep it mysterious)
// isCypherAdmin = 🗿 (Admin powers are granted by CypherX, no exceptions!)


//--------------------[ WATCHER ]-----------------------//
// Who’s watching the watchers? 🤔
// Let’s keep track of any changes like a hawk in a top hat. 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red')) 
  delete require.cache[file]
  require(file)
})

//----------------------[ CYPHER-X ]----------------------//
// CypherX is like a cat. It might ignore you, but it knows what you’re up to. 🐱
// It only responds when it feels like it. It’s the true master of mystery.
// Please proceed with caution. Our code doesn’t bite, but it might give you an awkward look.
// Tylor? If you’ve found this, you’ve unlocked a secret... but only if you truly understand it.
