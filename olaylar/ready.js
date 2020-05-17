  const chalk = require("chalk")
module.exports = async(client) => {
    
    var oynuyorkısmı = [
    `!yardım | Yazarak yardım alabilirsiniz`,
    `!kayıt | Dünya da ilk otomatik kayıt botu!`,
    `${client.guilds.size} sunucumuza, ${client.users.size} kullanıcımıza teşekkürler!`
    ];
    
    setInterval(function() {
    //sürekli tekrarlanacak bölüm
    // 6000 milisaniye yani 6 saniyede bir gerçekleşecek eylem
        var random = Math.floor(Math.random()*(oynuyorkısmı.length-0+1)+0);
       client.user.setActivity(oynuyorkısmı[random], { type: 'WATCHING' });
        }, 2 * 3000);
    }
    
    