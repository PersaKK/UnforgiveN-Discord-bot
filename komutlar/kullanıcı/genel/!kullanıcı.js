const Discord = require("discord.js");

module.exports = {
    komut: "kullanıcı", 
    açıklama: "komutları gösterir",
    kategori: "genel", 
    alternatifler: ['kullanıcı'],
    kullanım: "!kullanıcı", 
    yetki: '',
};
module.exports.baslat = (client, message) => {
    //mesaj gönderme
const embed = new Discord.RichEmbed()
.setColor("#D3D3D3")
.setTitle("Kullanıcı Komutları")
.setFooter("Prsk")
.addField(`**avatar**`,"belirtilen kişinin avatarını gösterir",false)
message.channel.send({embed:embed})
}