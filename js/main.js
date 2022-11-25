import contacts from '/js/usersList.js';
const {createApp} = Vue;

createApp({
	//Inserisci qui i dati
	data() {
		return {
			contacts,
		};
	},
	//inserisci qui le tue funzioni
	methods: {},
}).mount('#app');
