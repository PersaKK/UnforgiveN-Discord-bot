const Discord = require("discord.js");
const chalk = require("chalk");
const Advanced = require('discordjs-advanced');
const moment =require("moment");
require("moment-duration-format");
                         
const client = new Advanced.Client({
    token: "tokeniniz buraya yazılmalı", 
    prefix: "!", 
    sahip: ["396352062008459266"], 
    komutDosya: "komutlar",
    veritabanı : {
       dosya:"database.json"
    },
    varsayılanKomutlar: ['yardım'],
    everyoneKapat: true
});  

client.eventYükle("olaylar");

client.kategoriYükle([ 
    ['eglence', 'Eglence Komutları'],
    ['moderasyon','Moderasyon Komutları'],
    ['kullanıcı','Kullanıcı komutları'] ,
    ['genel', 'Genel komutlar']
]);

//-Bot hazır mesajı-
var log =  chalk.red("Bot başarı ile giriş yaptı.")
var log01 = chalk.bold.yellow("Bot başarı ile giriş yaptı.")
    

client.on("ready",() => {
 console.log(log)
 console.log(log01)
});


client.giris();
