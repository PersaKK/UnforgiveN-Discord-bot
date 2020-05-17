const Discord = require("discord.js");

module.exports = {
    komut: "otorol", 
    açıklama: "",
    kategori: "genel", 
    alternatifler: ['otorol-ayarla',"otorolayarla"],
    kullanım: "!otorol", 
    yetki: 3,
    args: [
    {
          anahtar:"role",
          soru:"Hangi rolün otomatik olarak verilmesini istiyorsunuz?",
          tip:"rol"
    }
    ]
};

module.exports.baslat = (client,message,args)  => {

//rolümüzü çektik
 var veri = args.role;
 var rolid = veri.id;
 let botIcon = client.user.avatarURL;
 let userIcon = message.author.avatarURL;

//veritabanına veri yazdırma
client.veritabanı.ayarla("otorol-" + message.guild.id,rolid)
message.channel.send(new Discord.RichEmbed()
.addField("Ayarlayan : " ,`<@${message.author.id}>` )
.addField("Ayarlanan Rol" , " <@&" + rolid + ">")
.addField(`Rol Listesi [${message.guild.roles.size -1}]`, message.guild.roles.map(r => r).join(" ").replace("@everyone", " "))
.setColor("BLACK")
.setTimestamp()
.setTitle("Otorol Tablosu")
.setFooter(message.author.avatar + message.author.username)
.setThumbnail(message.guild.iconURL)
.setAuthor(message.guild.name , botIcon)
.setFooter(message.author.tag)
)
}