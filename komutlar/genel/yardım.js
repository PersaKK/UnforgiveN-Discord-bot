const Discord = require("discord.js");


module.exports = {
    komut: "yardım", 
    açıklama: "komutları gösterir",
    kategori: "genel", 
    alternatifler: ['yardım','help','destek'],
    kullanım: "!yardım", 
    yetki: '',
};
                 
module.exports.baslat = (client, message) => {
    //mesaj gönderme 
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Komutlar")
    .addField(`**Moderasyon**`, "!moderasyon",false)
    .addField(`**Kullanıcı**`,"!kullanıcı",false)
    .addField(`**Genel**`,"!genel",false)
    .addField(`**Eğlence komutlar**`,"!eğlence",false)
    .setFooter("Prsk")
    message.channel.send({embed:embed})
};
