import contacts from './usersList.js';
const {createApp} = Vue;

createApp({
	//Inserisci qui i dati
	data() {
		return {
			contacts,
			activeContactIndex: 0,
			msgToSend: '',
			filter: '',
			dateTime: luxon.DateTime,
		};
	},
	//inserisci qui le tue funzioni
	methods: {
		formatDate() {
			contacts.forEach((contact) => {
				const messages = contact.messages;
				messages.forEach((message) => {
					const formattedDate = this.dateTime.fromFormat(
						message.date,
						`dd/MM/yyyy TT`
					);
					message.date = formattedDate;
				});
			});
		},

		changeActiveChat(index) {
			this.activeContactIndex = index;
		},

		createNewMessage(msg, status) {
			const newMessage = {};
			const currentTime = this.dateTime.now();
			newMessage.message = msg;
			newMessage.date = currentTime;
			newMessage.status = status;
			return newMessage;
		},

		sendOk() {
			const okMsg = this.createNewMessage('Ok', 'received');
			const index = this.activeContactIndex;
			setTimeout(() => {
				this.contacts[index].messages.push(okMsg);
			}, 1000);
		},

		sendMsg() {
			const msg = this.createNewMessage(this.msgToSend, 'sent');
			this.contacts[this.activeContactIndex].messages.push(msg);
			this.sendOk();

			this.msgToSend = '';
		},

		filterChats() {
			const filter = this.filter.toLowerCase();
			this.contacts.forEach((contact) => {
				const name = contact.name.toLowerCase();
				contact.visible = true;

				if (!name.includes(filter)) {
					contact.visible = false;
				}
			});
		},

		deleteMsg(index) {
			const activeContactMessages =
				this.contacts[this.activeContactIndex].messages;

			activeContactMessages.splice(index, 1);
		},
	},

	beforeMount() {
		this.formatDate();
	},
}).mount('#app');
