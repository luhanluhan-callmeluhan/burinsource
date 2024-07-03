const { Events, EmbedBuilder } = require("discord.js");
module.exports = {
  name: Events.GuildMemberAdd,
  async execute(client, member) {
      if (member.user.bot) {
        const embed = new EmbedBuilder()
        const channel = member.guild.channels.cache.find(c => c.id == '1258017798550978641');
        embed.setAuthor({name : "Welcome To Ency Hills", iconURL : "https://media.discordapp.net/attachments/1257998518241460238/1257998598952714290/ency.jpg?ex=668671fe&is=6685207e&hm=aa13e901d95e49ccca5c8b07c8218b6f8b4c2696ac6af760d21fb95900e21c61&=&format=webp&width=473&height=473"})
        embed.setTitle(`Chào mừng ${(member.user.username).toUpperCase()} đến với ENCY HILLS`)
        embed.setImage("https://media.discordapp.net/attachments/1257998518241460238/1257998637842169886/ency-city.jpg?ex=66867207&is=66852087&hm=ae8e918dbfa35046da3eedb7ba3ac75d1472b850f99f6ce8ffb622c5136a864a&=&format=webp&width=350&height=350")
        embed.setThumbnail(member.user.avatarURL());
        embed.setDescription("Cảm ơn bạn vì đã là một phần của Ency Hills")
        embed.setFooter({text : `Bạn là thành viên thứ ${member.guild.memberCount}`})
        await channel.send({content : `Welcome to ENCY HILLS !!! <@${member.user.id}>`, embeds : [embed]});
      } else {
        const embed = new EmbedBuilder()
        const channel = member.guild.channels.cache.find(c => c.id == '1258017798550978641');
        embed.setAuthor({name : "Welcome To Ency Hills", iconURL : "https://media.discordapp.net/attachments/1257998518241460238/1257998598952714290/ency.jpg?ex=668671fe&is=6685207e&hm=aa13e901d95e49ccca5c8b07c8218b6f8b4c2696ac6af760d21fb95900e21c61&=&format=webp&width=473&height=473"})
        embed.setTitle(`Chào mừng ${(member.user.username).toUpperCase()} đến với ENCY HILLS`)
        embed.setImage("https://media.discordapp.net/attachments/1257998518241460238/1257998637842169886/ency-city.jpg?ex=66867207&is=66852087&hm=ae8e918dbfa35046da3eedb7ba3ac75d1472b850f99f6ce8ffb622c5136a864a&=&format=webp&width=350&height=350")
        embed.setThumbnail(member.user.avatarURL());
        embed.setDescription("Cảm ơn bạn vì đã là một phần của Ency Hills")
        embed.setFooter({text : `Bạn là thành viên thứ ${member.guild.memberCount}`})
        await channel.send({content : `Welcome to ENCY HILLS !!! <@${member.user.id}>`, embeds : [embed]});
      }
    }
  }
