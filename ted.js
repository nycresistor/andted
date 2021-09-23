if (!process.env.BOT_TOKEN) die('Missing BOT_TOKEN in environment')

const { Client, Intents } = require('discord.js')
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS, // Needed to join a guild
    Intents.FLAGS.GUILD_MESSAGES // Needed to read guild messages
  ]
})

client.on('ready', () => void console.log('be excellent to each other!'))

client.on('messageCreate', (message) => {
  if (message.content.startsWith('ping')) {
    message.channel.send('pong!')
  }
})

client.login(process.env.BOT_TOKEN)

function die (message, exit_code = 1) {
  console.error(message)
  process.exit(exit_code)
}
