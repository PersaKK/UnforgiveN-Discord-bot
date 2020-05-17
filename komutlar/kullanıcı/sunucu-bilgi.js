const Discord = require("discord.js")
   
   module.exports = {
        komut: "sunucu-bilgi", //komut adı 
        açıklama: "sunucunun hakkında bilgileri gösterir", //komut açıklaması
        kategori: "kullanıcı", //ilk örnekteki kategori oluşturma kısmına göre buraya tam olarak ne yazabileceğinizi anlayacaksınız. (komut kategorisi)
        alternatifler: ['sunucu-info'], //komutun asıl adı dışında kullanılabileceği alternatifler. Örneğin; (komut adını x olarak düşünürsek) alternatifler: ["y", "z"], olabilir mesela.
        kullanım: "!sunucu-bilgi", //komutun doğru kullanımı
        yetki: 0, /*Komutu kullanabilecek yetkiyi belirtiyorsunuz.
        Tüm yetkileri https://discordapp.com/developers/docs/topics/permissions adresinden öğrenebilir/görebilirsiniz.
        Eğer gereken yetki bot sahibi olacaksa "BOT_OWNER" yazınız.
        Eğer hiç bir yetki gerekmiyor ise yetki: "" alanını siliniz.
        */
    };
                     
    module.exports.baslat = (client, message) => {
        var size = message.guild.users.size
        message.channel.send(`Sunucuda ${size} kişi var.`)
        const embed = new Discord.RichEmbed()
        .setTitle("Sunucu bilgi")
        .addField(` ${message.guild.users.size}`)
        message.channel.send({embed:embed})
    };