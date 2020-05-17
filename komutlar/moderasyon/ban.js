const Discord = require("discord.js");

module.exports = {
    komut: "ban", 
    açıklama: ".",
    kategori: "moderasyon", 
    alternatifler: ['.'],
    kullanım: "!ban", 
    yetki: "BAN_MEMBERS",
    args: [
        {
           anahtar:"banlanacakkisi",
           soru:"Hangi üyeyi banlamak istiyorsunuz?",
           tip:"kullanici"  
        },
        {
            anahtar:"banlanmanedeni",
            soru:"Bu kişiyi neden banlamak istiyorsunuz?",
            tip:"yazi"
        }
    ]
};

module.exports.baslat = (client,message, args) => {

//verilerimizi çekelim
let banlanacakkisi = args.banlanacakkisi;
let banlanmanedeni = args.banlanmanedeni;
let banlogchannel = message.guild.channels.find(x => x.name === "ban-log")

if(!banlogchannel) {
return message.channel.send("Ban atabilmek için lütfen ban-log adlı kanalı oluşturunuz.")
}

message.guild.member(banlanacakkisi).ban()

message.channel.send(":wrench:  |  "+ `<@${banlanacakkisi.id}>` + " kullanıcısı banlandı.")


message.guild.channels.get(banlogchannel.id).send(new Discord.RichEmbed()
.addField("Banlanan kişi:",`${banlanacakkisi}`,true)
.addField("Banlayan kişi:",`${message.author}`,true)
.addField("Banlanma Nedeni:",banlanmanedeni)
.setColor("RANDOM")
.setTimestamp()
.setFooter(`powered by ${client.users.get("396352062008459266").tag}`)
.setTitle("Ban-Log Sistemi")
.setAuthor(message.author.username,message.author.avatarURL)
)

}