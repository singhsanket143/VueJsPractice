new Vue({
  el: "#app",
  data: {
    startGame: true,
    player: 100,
    monster: 100,
    listArray: []
  },
  computed: {
    healthBarPlayer: function() {
      return {
        backgroundColor: "green",
        margin: 0,
        color: "white",
        width: this.player + "%"
      };
    },
    healthBarMonster: function() {
      return {
        backgroundColor: "green",
        margin: 0,
        color: "white",
        width: this.monster + "%"
      };
    }
  },
  methods: {
    attack: function() {
      console.log("Attack called");
      var plValue = parseInt(Math.random() * (10 - 2) + 2);
      var moValue = parseInt(Math.random() * (10 - 2) + 2);

      if (this.player > 0 && this.monster > 0) {
        this.listArray.push("Player Attacked By " + plValue);
        this.listArray.push("Monster Attacked By " + moValue);
        this.player = this.player - plValue;
        this.monster = this.monster - moValue;
      } else {
        alert("Game Over");
        this.startGame = !this.startGame;
        this.player = 100;
        this.monster = 100;
        this.listArray = [];
      }
    },
    spattack: function() {
      console.log("Special Attack called");
      var moValue = parseInt(Math.random() * (20 - 7) + 7);
      var plValue = parseInt(Math.random() * (10 - 2) + 2);

      if (this.player > 0 && this.monster > 0) {
        this.listArray.push("Player Attacked By " + plValue);
        this.listArray.push("Monster Attacked By " + moValue);
        this.player = this.player - plValue;
        this.monster = this.monster - moValue;
      } else {
        alert("Game Over");
        this.startGame = !this.startGame;
        this.player = 100;
        this.monster = 100;
        this.listArray = [];
      }
    },
    heal: function() {
      console.log("Heal called");
      var plValue = parseInt(Math.random() * (15 - 5) + 5);
      var moValue = parseInt(Math.random() * (10 - 2) + 2);
      if (this.player > 0 && this.monster > 0 && this.player < 100) {
        this.listArray.push("Player Healed By " + plValue);
        this.listArray.push("Monster Attacked By " + moValue);
        this.player = this.player + plValue;
        this.monster = this.monster - moValue;
      } else if (this.player < 0 || this.monster < 0) {
        alert("Game Over");
        this.startGame = !this.startGame;
        this.player = 100;
        this.monster = 100;
        this.listArray = [];
      }
    },
    giveUp: function() {
      this.startGame = !this.startGame;
      this.player = 100;
      this.monster = 100;
      this.listArray = [];
    }
  }
});
