const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: AZN efendimizin botu aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
client.user.setGame("   ?yardım - |  AZN Impact DEVREDE !  | - __ " + client.guilds.size + " Sunucum ve " + client.users.size + " Kullanıcım var. __ ", "https://twitch.tv/scarew0");
}