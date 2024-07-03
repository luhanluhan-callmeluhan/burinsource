module.exports = {
	name : "start",
    async execute(client, m, args) {
		const memberId = m.author.id;
    let schema = await client.signUp(memberId);
    if (!schema) return m.reply(`${m.author.username} đã có tài khoản, bạn không thể đăng ký thêm!`)
    await m.reply(`Đã tạo thành công tài khoản, bạn hiện có ${schema.money} coin, giới hạn rút tiền là ${schema.limited} coin!`)      
  },
};