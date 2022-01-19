new Vue({
  el: "#app",
  data: {
    currentIndex: 0,
    temporaryMessage: "",
    searchBar: "",
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
    ],
  },
  methods: {
    indexAssignment: function (index) {
      this.currentIndex = index;
    },
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
    timeoutAnswer: function (index) {
      setTimeout(() => {
        this.contacts[index].messages.push({
          text: "ok",
          date: "test",
          status: "received",
        });
      }, 1000);
    },
    test: function () {
      console.log(this.searchBar);
      this.searchBar = "";
    },
    scrollFunction: function () {
      setTimeout(() => {
        let containerToScroll = this.$el.querySelector(".chat-space");
        containerToScroll.scrollTo(0, containerToScroll.scrollHeight);
      }, 1500);
    },
  },
});
