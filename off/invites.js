const arraySort = require("array-sort");
const t = require("table");

exports.run = async ({Discord, client, message, args, dono}) => {
	if (!message.author.id === dono) {if (!message.member.hasPermission("ADMINISTRATOR")) {return message.reply("> Desculpe, Apenas Administradores do Grupo tem acesso a isto.")}}
	

try {
        const embed = new Discord.RichEmbed().setColor('RANDOM')
        if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
            embed.setAuthor("❌ Error").setDescription("Não tenho acesso aos convites do servidor, verifique minhas permissões!");
            return message.channel.send({
                embed
            });
        }
        let invites = await message.guild.fetchInvites();
        if (invites.size === 0) {
            embed.setAuthor("❌ Error").setDescription("Atualmente não existem convites criados no servidor!");
            return message.channel.send({
                embed
            });
        }
        invites = invites.array();
        arraySort(invites, "uses", {
            reverse: true
        });
        const usedInvites = [
            ["Usuário", "Usos"]
        ];
        invites.forEach(invite => usedInvites.push([invite.inviter.tag, invite.uses]));
        embed.setTitle(`📜 Rank de Convites`).setDescription(usedInvites);
        return message.channel.send({
            embed
        });
    } catch (err) {
        console.log(err.stack);
        return this.client.embed("", message);
    }


}