const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: AZN efendimizin botu aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
client.user.setGame(" “Merhaba arkadaş. Merhaba arkadaş. Çok ezikçe. Belki sana bir isim vermeliyim. Ama bu çok saçma olur. Sen sadece bir düşüncesin, bunu unutmamalıyız. Si*tir, bu gerçekten oldu. Hayali bir insanla konuşuyorum. Size anlatacağım şey çok gizli. Hepimizi aşan bir komplo. Dışarıda dünyayı yöneten güçlü insanlardan oluşan gizli bir grup var. Size görünmeyen ve hakkında hiçbir şey bilinmeyen insanlardan bahsedeceğim. %1′in üstünde %1′e sahip, izne gerek duymadan Tanrı’yı oynayan insanlardan. Ve şimdi de sanırım beni takip ediyorlar.” ", "https://twitch.tv/scarew0");
}
