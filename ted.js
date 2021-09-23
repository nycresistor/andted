const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => void console.log("be excellent to each other!"))

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!")
  }
})

client.login(process.env.BOT_TOKEN)
