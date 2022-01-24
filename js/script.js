new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "_1.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2.jpg",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },

      {
        name: "Samuele",
        avatar: "_3.jpg",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa la Baffuta",
        avatar: "_4.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
      {
        name: "Peppe",
        avatar: "_5.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Cosa ne pensi della baffuta?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Non ho capito se è un uomo o una donna",
            status: "received",
          },
        ],
      },
      {
        name: "Franca",
        avatar: "_6.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Ieri  sono uscito con Luisa La Baffuta",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ha davvero i baff?",
            status: "received",
          },
        ],
      },
      {
        name: "Giovannino",
        avatar: "_7.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sapevi che Franca è uscita con Luisa La Baffuta?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "I baffi sono irresistibili",
            status: "received",
          },
        ],
      },
      {
        name: "Johnny Lo Zio",
        avatar: "_8.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Ciao Johnny come stai?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Male, Luisa La Baffuta mi ha lasciato",
            status: "received",
          },
        ],
      },
    ],
    currentIndex: 0,
    temporaryMessage: "",
    searchInput: "",
    modalValue: false,
    messageIndex: null,
    answersRandom: [
      "We uagliò",
      "Deux fritures",
      "Sta senza pensier",
      "Ca nisciun è fess",
      "Vuoi farla ingelosirla",
    ],
  },
  methods: {
    // funzione per l'assegnazione di un indice al click su un utente
    indexAssignment: function (x) {
      this.currentIndex = x;
      this.modalValue = false;
    },
    // funzione per aggiungere un nuovo messaggio tramite input
    newMessage: function () {
      this.contacts[this.currentIndex].messages.push({
        text: this.temporaryMessage,
        date: this.getDate(),
        status: "sent",
      });
      this.temporaryMessage = "";
      this.timeoutAnswer(this.currentIndex);
      this.scrollFunction();
    },
    // funzione per la risposta automatica
    timeoutAnswer: function (i) {
      setTimeout(() => {
        const randomNumber = this.randomAnswer(this.answersRandom);
        this.contacts[i].messages.push({
          text: this.answersRandom[randomNumber],
          date: this.getDate(),
          status: "received",
        });
      }, 1000);
    },
    // funzione per rimanere sempre ancorato in basso nella chat
    scrollFunction: function () {
      setTimeout(() => {
        let containerToScroll = this.$el.querySelector(".chat-space");
        containerToScroll.scrollTo(0, containerToScroll.scrollHeight);
      }, 1000);
    },
    // funzione per filtrare nella barra di ricerca i contatti
    filterList: function (element) {
      return (
        element.name.toLowerCase().startsWith(this.searchInput) ||
        this.searchInput === ""
      );
    },
    // funzione per generare un numero random 
    randomAnswer: function (array) {
      const randomN = Math.floor(Math.random() * array.length);
      return randomN;
    },
    // funzione per prendere la data attuale
    getDate: function () {
      return dayjs().format("DD/MM/YYYY HH:mm:ss");
    },
    // funzione per calcolare l'ultimo accesso
    lastMessageDate: function (i) {
      if (this.contacts[i].messages.length > 0) {
        return this.contacts[i].messages[this.contacts[i].messages.length - 1]
          .date;
      } else {
        return "";
      }
    },
    // funzione per l'assegnazione di un indice al messaggio
    messageIndexAssignment: function (y) {
      this.modalValue = y;
    },
    /* funzione per l'apparizione della modale sul
     messaggio designato*/ 
    modalAppear: function (z) {
      this.messageIndex = z;
      this.modalToggle();
    },
    // funzione per rimuovere un messaggio
    removeMessage: function (k) {
      this.contacts[this.currentIndex].messages.splice(k, 1);
      this.modalToggle();
    },
    // funzione per cambiare il valore booleano di modalValue
    modalToggle: function () {
      this.modalValue = !this.modalValue;
    },
  },
});
