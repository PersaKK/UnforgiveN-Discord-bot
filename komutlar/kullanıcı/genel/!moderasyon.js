const Discord = require("discord.js");

module.exports = {
    komut: "moderasyon", 
    açıklama: "komutları gösterir",
    kategori: "genel", 
    alternatifler: ['mod'],
    kullanım: "!moderasyon", 
    yetki: '',
};
module.exports.baslat = (client, message) => {
    //mesaj gönderme 
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Moderasyon Komutları")
    .addField(`**ban**`,"belirtilen kişiyi banlayıp hakkında log tutar")
    .setFooter("Prsk")
    message.channel.send({embed:embed})
};