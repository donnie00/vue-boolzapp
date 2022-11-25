import contacts from '/js/usersList.js';
const {createApp} = Vue;

createApp({
	//Inserisci qui i dati
	data() {
		return {
			contacts,
			activeContactIndex: 0,
			messageSent: '',
			newMessage: {
				date: '',
				message: '',
				status: 'sent',
			},
		};
	},
	//inserisci qui le tue funzioni
	methods: {
		changeActiveChat(index) {
			this.activeContactIndex = index;
		},
		sendNewMessage() {
			const sendingTime = luxon.DateTime.now();
			const sendingHour = sendingTime.hour;
			const sendingMinute = sendingTime.minute;

			this.newMessage.message = this.messageSent;
			this.newMessage.date = `${sendingHour}:${sendingMinute}`;
			this.contacts[this.activeContactIndex].messages.push(this.newMessage);

			this.messageSent = '';
		},

		sendOkAnswer() {},
	},
}).mount('#app');
