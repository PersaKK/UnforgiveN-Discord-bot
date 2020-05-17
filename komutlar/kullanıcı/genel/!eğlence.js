const Discord = require("discord.js");

module.exports = {
    komut: "eğlence", 
    açıklama: "komutları gösterir",
    kategori: "genel", 
    alternatifler: ['eglence'],
    kullanım: "!eğlence", 
    yetki: '',
};
module.exports.baslat = (client, message) => {
    //mesaj gönderme 
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Eğlence komutları")
    .addField("Malesef komutlarımda 'eğlence' adında bir kategori bulamadım")
    .setFooter("Prsk")
    message.channel.send({embed:embed})
}