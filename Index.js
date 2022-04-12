const dis = require('discord.js');

const client = new dis.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
 
client.login(process.env.DISCORD_TOKEN);



client.on('ready',()=> {
    console.log(`bot ready como ${client.user.tag}`);

});

client.on('message', disme=>{
    disme.channel.send("a");
    if (disme.content==a) {
        disme.reply("A");
    }
    if(disme.author.equals("Consti")){
        disme.channel.send("guardado");
      
    }

});