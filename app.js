const { Telegraf }  = require('telegraf');
const requireAll    = require('require-all');
const logSymbols    = require('log-symbols');
const chalk         = require('chalk');
const PrettyError   = require('pretty-error');
const pe            = new PrettyError();

require('dotenv').config()
 
const bot = new Telegraf(process.env.BOT_TOKEN);
const BOT_COMMANDS = requireAll({ dirname: `${__dirname}/commands` });

bot.catch((err, ctx) => {
    console.log(logSymbols.error, chalk.bold.red(`Ooops, encountered an error for: ${ctx.updateType}`))
    console.log(pe.render(err));
  })

Object.keys(BOT_COMMANDS).forEach(command => {
    console.log(logSymbols.success, "Loading command: " + command);
    BOT_COMMANDS[command](bot) 
});

bot.launch();
console.log(logSymbols.info, chalk.black.bgGreen("Bot up and running"))