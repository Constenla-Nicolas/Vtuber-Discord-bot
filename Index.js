const dis = require('discord.js');

const client = new dis.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
 
client.login(process.env.DISCORD_TOKEN);



client.on('ready',()=> {
    console.log(`bot ready como ${client.user.tag}`);

});

client.on('message', disme=>{
    if(disme.author.equals("Consti#3398")){
        dis.Channel.send("guardado");
        console.log("guardada");
    }

});