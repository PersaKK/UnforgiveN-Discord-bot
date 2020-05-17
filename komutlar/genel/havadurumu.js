const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
  komut: "havadurumu",
  açıklama: "hava durumunu gösterir",
  kategori: "genel",
  alternatifler: ['hava', 'havadurumu'],
  kullanım: "havadurumu",
  yetki: 0,
  args: [
  {
    anahtar:"yer",
    soru:"Hangi şehrin havadurumunu görüntülemek istiyorsun",
    tip:"yazi"
  }
  ]
};

module.exports.baslat = (client, message, args) => {
  weather.find({search: args.yer, degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Lütfen bir yer gir.').setColor('RANDOM'));
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} için hava durumu`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Zaman Dilimi',`UTC${location.timezone}`, true)
          .addField('Derece Türü',location.degreetype, true)
          .addField('Sıcaklık',`${current.temperature} Derece`, true)
          .addField('Hava', `${current.feelslike}`, true)
          .addField('Rüzgar',current.winddisplay, true)
          .addField('Nem', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}