const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('Ping degeriniz __AZN__ tarafından ölçüldü ve **' + client.ping + '** **ms** olarak belirlendi. ');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
