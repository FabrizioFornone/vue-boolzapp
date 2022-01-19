new Vue({
  el: "#app",
  data: {
    currentIndex: 0,
    temporaryMessage: "",
    searchInput: "",
    answersRandom: [
      "We uagliò",
      "Arigatou gozaimasu",
      "Maronn benedett",
      "Ca nisciun è fess",
      "Vuoi farla ingelosirla",
    ],
    contacts: [
      {
        name: "Michele",
        avatar: "avatar_1.jpg",
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
        avatar: "avatar_2.jpg",
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
        avatar: "avatar_3.jpg",
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
        avatar: "avatar_4.jpg",
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
        avatar: "avatar_5.jpg",
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
        avatar: "avatar_6.jpg",
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
        avatar: "avatar_7.jpg",
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
        avatar: "avatar_8.jpg",
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
  },
  methods: {
    // funzione per l'assegnazione di un indice al click su un utente
    indexAssignment: function (x) {
      this.currentIndex = x;
      console.log(this.currentIndex);
    },
    // funzione per aggiungere un nuovo messaggio custom
    newMessage: function (index) {
      this.contacts[index].messages.push({
        text: this.temporaryMessage,
        date: "test",
        status: "sent",
      });
      this.temporaryMessage = "";
      this.timeoutAnswer(index);
      this.scrollFunction();
    },
    // funzione per la risposta
    timeoutAnswer: function (i) {
      setTimeout(() => {
        const randomNumber = this.randomAnswer(this.answersRandom);
        this.contacts[i].messages.push({
          text: this.answersRandom[randomNumber],
          date: "test",
          status: "received",
        });
      }, 1000);
    },
    // funzione per rimanere sempre ancorato in basso
    scrollFunction: function () {
      setTimeout(() => {
        let containerToScroll = this.$el.querySelector(".chat-space");
        containerToScroll.scrollTo(0, containerToScroll.scrollHeight);
      }, 1500);
    },
    filterList: function (element) {
      return (
        element.name.toLowerCase().startsWith(this.searchInput) ||
        this.searchInput === ""
      );
    },
    randomAnswer: function (array) {
      const randomN = Math.floor(Math.random() * array.length);
      return randomN;
    },
  },
});
