const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Ping degeriniz __AZN__ tarafından ölçüldü ve **' + client.ping + '** **ms** olarak belirlendi. ');
  }
  if (msg.content.toLowerCase() === prefix + 'sigara') {
    msg.send('Niye sigara içtiriyorsun! Neyse içeyim bi dal..');
    msg.edit(' :smoking: :cloud: :cloud: :cloud: ');
    msg.edit(' :smoking: :cloud: :cloud: ');
    msg.edit(' :smoking: :cloud:  ');
    msg.edit(' :smoking:  ');
    msg.edit(' AZN`den mesaj var. **Bot İçsin Ama Siz İçmeyin!**');
  }
  if (msg.content.toLowerCase() === prefix + 'yazdır') {
    msg.delete();
    msg.channel.sendMessage(msg.content);
  }
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("AZN için **100** adet mesaj silindi!");
  }
  if (msg.content.toLowerCase() === prefix + 'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin! KISACASI SEN BİR __**AZN**__ DEGİLSİN !');
    } else {
      msg.channel.sendMessage(`Bot **AZN** tarafindan yeniden başlatiliyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});

client.login(ayarlar.token);
