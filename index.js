require('dotenv').config()
const { Client, IntentsBitField, ActivityType } = require('discord.js')

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
})
const birthdayArray = [ // Тут типа даты
	{ date: '02-01', userId: '853367711040143410', name: 's1nlef' }, // Lucas_Paradise
]
const currentDate = new Date().toISOString().slice(5, 10)

function compareDates(date1, date2) {
	return date1 === date2
}
function checkBirthdays() {
	for (const birthday of birthdayArray) {
		if (compareDates(birthday.date, currentDate)) {
			client.channels.cache
				.get('1200893470890541129')
				.send(
					`@everyone Уважаемые друзья, сегодня у нашего :heart: <@${birthday.userId}> День Рождения :heart:.  Давайте все вместе поздравим его и напишем свои пожелания!`
				)
		}
	}
}
//
client.on('ready', () => {
	console.log(`Бот ${client.user.tag} готов!`)
	checkBirthdays()
	setInterval(checkBirthdays, 24 * 60 * 60 * 1000) // 24 * 60 * 60 * 1000 = 86400000 ms
})

client.login(process.env.TOKEN)

