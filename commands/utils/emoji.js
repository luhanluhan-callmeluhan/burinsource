const { PermissionsBitField, Util } = require("discord.js");
module.exports = {
  name: "emoji",
  async execute(client, m, args) {
    if (!m.member.permissions.has(PermissionsBitField.Flags.ManageMessages))
      return m.channel.send(
        ":x: Bạn cần quyền `Quản Lý Tin Nhắn - Manage Message` để sử dụng lệnh Copy Emoji."
      );
    if (
      !m.guild.me.permissions.has(
        PermissionsBitField.Flags.ManageGuildExpressions
      )
    )
      return m.channel.send(
        ":x: Tôi cần quyền `Quản Lý Biểu Thức - Manage Guild Expressions` để sử dụng lệnh Copy Emoji."
      );
    if (args.length < 1)
      return m.channel.send(":x: Please include 1 or more emojis.");

    for (const rawEmoji of args) {
      const parsedEmoji = Util.parseEmoji(rawEmoji);

      if (parsedEmoji.id) {
        const extension = parsedEmoji.animated ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/emojis/${
          parsedEmoji.id + extension
        }`;
        let name;
        if (args.length < 2) name = parsedEmoji.name;
        else name = args[1];

        m.guild.emojis
          .create(url, name)
          .catch((err) => {
            m.channel.send(
              ":x: Số lượng Emoji tại Ency Hills đã vượt mức giới hạn !(50)."
            );
            return;
          })
          .then((emoji) =>
            m.channel.send(
              `:white_check_mark: Cùng sử dụng Emoji **${name}** của Ency Hills thôi!!!\n\n:${emoji.name}:`
            )
          );
      }
    }
  },
};
