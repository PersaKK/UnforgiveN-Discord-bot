const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
  komut: "avatar",
  açıklama: "hava durumunu gösterir",
  kategori: "genel",
  alternatifler: ['avatar'],
  kullanım: "!avatar",
  yetki: 0,
  args: [
  {
    anahtar:"avatargösterilcekkisi",
    soru:"Hangi kişinin avatarını görüntülemek istiyorsun",
    tip:"kullanici"
  }
  ]
};

module.exports.baslat = (client, message, args) => {
var avatarkisi = args.avatargösterilcekkisi

var embed = new Discord.RichEmbed()

.setImage(avatarkisi.avatarURL)
.setDescription(`${avatarkisi} profil fotosu`)
.setColor('#275BF0')
  message.channel.send(embed)
}



