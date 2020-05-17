const Discord = require("discord.js");

module.exports = {
    komut: "banList", 
    açıklama: ".",
    kategori: "genel", 
    alternatifler: ["blist","yasaklananlar"],
    kullanım: "!yasaklananlar", 
    yetki: 0,
};

module.exports.baslat = (client,message) => {
    message.guild.fetchBans()
    .then(banned => {
      let list = banned.map(user => user.tag).join('\n');
  
      if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;
  
      message.channel.send(`**${banned.size} yasaklanan kişi bulunmakta! :**\n${list}`);
    })
    .catch(console.error);
}