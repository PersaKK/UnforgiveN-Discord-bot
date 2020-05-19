const Discord = require("discord.js");

module.exports = {
    komut: "tag-ayarla", 
    açıklama: "Sunucuya girenlere otomatik verilecek tagı ayarlar",
    kategori: "genel", 
    alternatifler: ["autotag"],
    kullanım: "!tag-ayarla", 
    yetki: "MANAGE_GUILD",
    args: [
        {
              anahtar:"ototag",
              soru:"Sunucuya girenlere hangi tag verilsin?",
              tip:"yazi"
        }
        ]
};

module.exports.baslat = (client,message,args) => {

    var ototagverilecekler = args.ototag;
    
    client.veritabanı.ayarla("tag_" + message.guild.id,ototagverilecekler)

    message.channel.send("Bundan sonra sunucuya giren herkese   " + `${ototagverilecekler}` + "tagı verilecek.")

}