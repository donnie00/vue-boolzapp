import contacts from '/js/usersList.js';
const {createApp} = Vue;

createApp({
	//Inserisci qui i dati
	data() {
		return {
			contacts,
			activeContactIndex: 0,
		};
	},
	//inserisci qui le tue funzioni
	methods: {
		changeActiveChat(index) {
			this.activeContactIndex = index;
		},
	},
}).mount('#app');
