const dis = require('discord.js');

const client = new dis.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.login("ODIxODgxNDg0MjgwNzI1NTE1.YFKKxw.obXbg4jgj2RCFtvrVboi4ZDmiLw");
client.on('ready',()=> {
    console.log(`bot ready como ${client.user.tag}`);

});

