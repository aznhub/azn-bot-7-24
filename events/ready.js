const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: AZN efendimizin botu aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
client.user.setGame("  YAŞAMA ki FAZLA!  'Amaçsız ve aptal çocuklar için sinekler ne ise, biz de tanrılar için oyuz. Eğlenmek için öldürüyorlar.' ", "https://twitch.tv/scarew0");
}
