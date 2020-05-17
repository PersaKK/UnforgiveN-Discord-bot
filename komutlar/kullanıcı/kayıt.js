const Discord = require("discord.js");
module.exports = {
    komut: "kayıt", 
    açıklama: "Herhangi bir rolü istediğiniz kişiye verirsiniz.",
    kategori: "kullanıcı", 
    alternatifler: ['register'],
    kullanım: "!kayıt", 
    yetki: "MANAGE_NICKNAMES",
    args : [
{
    anahtar:"kayıtedilecekkisi",
    soru:"Hangi kişiye kayıt etmek istersiniz?",
    tip:"kullanici"
},
{
    anahtar:"alınacakrol",
    soru:"Bu kişiden hangi rolü almak istersiniz?",
    tip:"rol"
 },
{
   anahtar:"verilecekrol",
   soru:"Bu kişiye hangi rolü vermek istersiniz?",
   tip:"rol"
},
{
    anahtar:"ismidegisecekkisi",
    soru:"Bu kişinin ismi ne olsun?",
    tip:"yazi"
}
]
};

module.exports.baslat = (client,message, args) => {

if(!message.guild) {
    return;
}

if(message.author.bot === true) {
    return;
}
//tanımlamları
var kisi = args.kayıtedilecekkisi
let isim = args.ismidegisecekkisi
var rol = args.verilecekrol
var rol2 = args.alınacakrol
var rol2ID = rol2.id;
var rolID = rol.id;


if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) 
return message.channel.send("Lütfen rol vermem için bana `Rolleri yönet` yetkisini veriniz.")

//rol verme kısmı
message.guild.member(kisi).removeRole(rol2ID)
message.guild.member(kisi).addRole(rolID)
message.guild.member(kisi).setNickname(isim)


const embed = new Discord.RichEmbed()
.setColor("#00FF00")
.setTitle("Başarılı!")
.addField("Kayıt eden :",`${message.author}`)
.addField("Yeni isimi: " , `**${isim}**`)
.addField("Kayıt edilen",`<@${kisi.id}>`)
.addField("Verilen Rol :" , `**${rol.name}**`,true)
.addField("Alınan Rol :" , `**${rol2.name}**`,true)
.setFooter("UnforgiveN gelişmiş kayıt sistemi")
.setThumbnail("https://cdn.discordapp.com/attachments/709424774945832990/710450307993174087/ss.png")
.setTimestamp()
message.channel.send({embed:embed})


}