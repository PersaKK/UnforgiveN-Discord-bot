const Discord = require("discord.js");

module.exports = {
    komut: "sunucu", 
    açıklama: "sunucu bilgilerini gösterir",
    kategori: "genel", 
    alternatifler: ['sunucu'],
    kullanım: "!sunucu", 
    yetki: '',
};
module.exports.baslat = (client, message,args) => {
    let userIcon = message.author.avatarURL;
    let botIcon = client.user.avatarURL;
    let inline = true;  

    var serverinfo = new Discord.RichEmbed()
    .setAuthor(message.guild.name, botIcon)
    .addField("Sunucu İsmi", message.guild.name, inline)
    .addField("Sunucunun İDSİ", message.guild.id, inline)
    .addField("Sunucu Sahibi" , message.guild.owner, inline)
    .addField("Ülke" , message.guild.region, inline)
    .addField("Kanallar" , message.guild.channels.size , inline)
    .addField("Katıldın" , message.member.joinedAt, inline) 
    .addField("Sunucu Kuruluş" , message.guild.createdAt, inline)
    .addField("Emojiler" , message.guild.emojis.size, inline)
    .addField(" Toplam Üyeler" , `${message.guild.memberCount} Üyeler`, inline)
    .addField("Çevrimiçi", `${message.guild.members.filter(o => o.presence.status === 'online').size} Online`, inline)
    .addField("Çevrimdışı", `${message.guild.members.filter(o => o.presence.status === 'offline').size} Offline`, inline)
    .addField("Boşta", `${message.guild.members.filter(o => o.presence.status === 'idle').size} Boşta`, inline)
    .addField("Rahatsız Etmeyin", ` ${message.guild.members.filter(o => o.presence.status === 'dnd').size} Rahatsız Etmeyin`, inline)
    .setThumbnail(message.guild.iconURL)
    .setColor("#36393")
    .addField(`Rol Listesi [${message.guild.roles.size -1}]`, message.guild.roles.map(r => r).join(" ").replace("@everyone", " "))
    message.channel.send(serverinfo)    


}