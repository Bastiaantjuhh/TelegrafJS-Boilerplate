const jsonPackage = require("./../package.json");

module.exports = bot => {
    bot.command("info", (ctx) => {
        // package.json NAME
        if(jsonPackage.name !== undefined && jsonPackage.name !== null) {
            ctx.reply(`🤖 Name: ${jsonPackage.name}`);
        }

        // package.json DESCRIPTION
        if(jsonPackage.description !== undefined && jsonPackage.description !== null) {
            ctx.reply(`🤖 Description: ${jsonPackage.description}`);
        }

        // package.json AUTHOR
        if(jsonPackage.author !== undefined && jsonPackage.author !== null) {
            ctx.reply(`🤖 Author: ${jsonPackage.author}`);
        }

        // package.json VERSION
        if(jsonPackage.version !== undefined && jsonPackage.version !== null) {
            ctx.reply(`🤖 Version: ${jsonPackage.version}`);
        }
    });
};