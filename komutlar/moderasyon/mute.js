const Discord = require("discord.js");
const ms = require("ms")

module.exports = {
    komut: "mute", 
    açıklama: ".",
    kategori: "moderasyon", 
    alternatifler: ['sustur'],
    kullanım: "!mute", 
    yetki: "MUTE_MEMBERS",
    args: [
        {
           anahtar:"mutelenecekkisi",
           soru:"Hangi üyeyi susturmak istiyorsunuz?",
           tip:"kullanici"  
        },
        {
            anahtar:"mutelenmenedeni",
            soru:"Bu kişiyi neden susturmak istiyorsunuz?",
            tip:"yazi"
        },
        {
            anahtar:"cezasuresi",
            soru:"Bu kullanıcı kaç milisaniye mutelemek istiyorsunuz.",
            tip:"yazi"  
        }
    ]
};

module.exports.baslat = async (client,message,args) => {
    let mutelenecekkisi = args.mutelenecekkisi;
    let mutelenmenedeni = args.mutelenmenedeni;
    let cezasuresi = args.cezasuresi;
    let muterolu = message.guild.roles.find(role => role.name == "muted")
    let mutelogchannel = message.guild.channels.find(x => x.name == "mute-log");

    if(!mutelogchannel) {
        return message.channel.send("Lütfen mute atabilmem için mute-log adlı kanalı oluşturun.")
    }

    if(!muterolu){
        return message.channel.send("muted adında bir rol oluşturun \n İzinlerini kendiniz ayarlayabilirsiniz.")
    }


    
    message.guild.member(mutelenecekkisi).addRole(muterolu.id)
    
    message.channel.send(":name_badge: | " + mutelenecekkisi.tag +" " + "susturuldu \n artık mesaj yazamayacak.")

setTimeout(function(){
    message.guild.member(mutelenecekkisi).removeRole(muterolu.id);
    message.channel.send(`${mutelenecekkisi} ceza süresi doldu.`)  
}, ms(cezasuresi)) 

    message.guild.channels.get(mutelogchannel.id).send(new Discord.RichEmbed()
    .addField("Mutelenen kişi:", mutelenecekkisi.username,true )
    .addField("Muteleyen kişi:", message.author.username, true )
    .addField("Sebep:", mutelenmenedeni,true)
    .addField("Süre :" , cezasuresi + "" + "milisaniye")
    .addField("İD:" , mutelenecekkisi.id , true)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(message.author.tag)
    .setTitle("Mute-Log Sistemi")
    

    
    ) 
    
}
