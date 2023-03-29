const { Telegraf, Markup} = require('telegraf')

const bot = new Telegraf('6072368863:AAFi0D6WQa_i6sUmMQX1GvOr6eErz7l2uVA')
bot.start((ctx) => {
  // console.log(ctx)
  return ctx.reply(
    'Dynamic buttons example.',
    Markup.inlineKeyboard([
      Markup.callbackButton('Option 1', 'option1'),
      Markup.callbackButton('Option 2', 'option2'),
      Markup.callbackButton('Option 3', 'option3')
    ]).extra()
  // ctx.reply("Выберите действие.", Markup.inlineKeyboard([
  //   Markup.callbackButton("1", "groups"),
  //   Markup.callbackButton("2", "create")
  // ]))
  )
});
// bot.command('dynamic-buttons', (ctx) => {
//   return ctx.reply(
//     'Dynamic buttons example.',
//     Markup.inlineKeyboard([
//       Markup.callbackButton('Option 1', 'option1'),
//       Markup.callbackButton('Option 2', 'option2'),
//       Markup.callbackButton('Option 3', 'option3')
//     ]).extra()
//   )
// })
// bot.start((ctx) => {
//   console.log(ctx)
//   ctx.reply('Welcome')
// })
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()


bot.action('option1', (ctx) => {
  return ctx.answerCbQuery('Option 1 selected!')
})

bot.action('option2', (ctx) => {
  return ctx.answerCbQuery('Option 2 selected!')
})

bot.action('option3', (ctx) => {
  console.log(ctx)
  return ctx.answerCbQuery('Option 3 selected!')
})

