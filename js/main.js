import contacts from '/js/usersList.js';
const {createApp} = Vue;

createApp({
	//Inserisci qui i dati
	data() {
		return {
			contacts,
			activeContactIndex: 0,
			msgToSend: '',
		};
	},
	//inserisci qui le tue funzioni
	methods: {
		changeActiveChat(index) {
			this.activeContactIndex = index;
		},

		createNewMessage(msg, status) {
			const newMessage = {};
			newMessage.message = msg;
			newMessage.date = luxon.DateTime.local();
			newMessage.status = status;
			return newMessage;
		},

		sendOk() {
			const okMsg = this.createNewMessage('ok', 'received');
			const index = this.activeContactIndex;
			setTimeout(function () {
				contacts[index].messages.push(okMsg);
			}, 1000);
		},

		sendMsg() {
			const msg = this.createNewMessage(this.msgToSend, 'sent');
			this.contacts[this.activeContactIndex].messages.push(msg);
			this.sendOk();

			this.msgToSend = '';
		},
	},
}).mount('#app');
