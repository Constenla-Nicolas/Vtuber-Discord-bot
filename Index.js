const dis = require('discord.js');

const client = new dis.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.login("process.env.BOT_TOKENhe");
client.on('ready',()=> {
    console.log(`bot ready como ${client.user.tag}`);

});

