const dis = require('discord.js');

const client = new dis.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.login("ODIxODgxNDg0MjgwNzI1NTE1.YFKKxw.dC9UC4JAyhfpME4BMnFaTy67XtM");
client.on('ready',()=> {
    console.log(`bot ready como ${client.user.tag}`);

});

