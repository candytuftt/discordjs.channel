const Discord = require( 'discord.js' );
const fs = require( 'fs' );
const client = new Discord.Client();
const token = "トークンを";
 
 
 
client.on("ready", () => {
  console.log("bot is start");


client.user.setActivity('discord.js');
});
 
client.on("message", (message) =>
{

  let arg = message.content.split( /\s+/ );
  const cmd = arg.shift();
  const ch_name = arg[0];
 
  if ( cmd === '!ch' )
  {

    if ( !message.guild.channels.exists( 'name', ch_name ) )
    {
      message.guild.createChannel( ch_name, 'text' )
        .then( (ch) => {
          ch.send( message.member.displayName + 'が' + ch_name + 'を作成しました' );
        })
        .catch( (err) => { console.log( err ); } );
    }
  }
  if ( cmd === '!dch' )
  {
    let channel = message.guild.channels.find( 'name', ch_name );
 {

      {
        channel.delete()
          .then( (ch) => {
            if ( ch.id !== message.channel.id ) {
              message.channel.send( message.member.displayName + 'が' + ch_name + 'を削除しました' );
            }
          })
          .catch( (err) => { console.log( err ); } );
      }
    }
  }
});



client.login(token);
