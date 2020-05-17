module.exports = {
    komut: "ping", 
    açıklama: "Botun pingini ölçer.",
    kategori: "genel", 
    alternatifler: ['ping','p','gecikmesüresi'],
    kullanım: "!ping", 
    yetki: '',
};
                 
module.exports.baslat = (client, message) => {

    if (message.content.startsWith(! + "ping")) 
    
        var ping = Date.now() - message.createdTimestamp + " ms";
        message.channel.sendMessage("Pinginiz `" + `${Date.now() - message.createdTimestamp}` + " ms`");
    
      
    

};