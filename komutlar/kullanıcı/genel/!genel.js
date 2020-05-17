const Discord = require("discord.js");

module.exports = {
    komut: "genel", 
    açıklama: "komutları gösterir",
    kategori: "genel", 
    alternatifler: ['genel'],
    kullanım: "!genel", 
    yetki: '',
};
module.exports.baslat = (client, message) => {
    //mesaj gönderme 
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Genel Komutları")
    .addField(`**hg-ayarla**`,"Hoşgeldin kanalını ayarlar")
    .addField(`**temizle**`,"belirtilen miktar kadar mesaj siler ")
    .addField(`**ping**`,"Botun pingini ölçer")
    .addField(`**rol-oluştur**`,"rol oluşturur")
    .addField(`**rol-ver**`,"belirtilen kişiye rol verir")
    .setFooter(`powered by ${client.users.get("396352062008459266").tag}`)
    message.channel.send({embed:embed})
};