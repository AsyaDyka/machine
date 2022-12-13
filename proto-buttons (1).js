window.onload = function () {
  function Machine(info) {
    this.info = info;
    this.state = "stopped";
    this.time = 2000;
    this.timer = null;
    this.interval = null;
  }

  Machine.prototype.run = function () {
    try {
      if (this.state == "started") {
        //this.info.innerHTML += 'Машина занята!';
        throw new Error("Машина зайнята!");
        //setTimeout(function (){(new CoffeeMachine(info)).run(drink)}, this.time);
      } else {
        this.state = "started";
        this.info.innerHTML += "Починаю роботу...";
        this.info.innerHTML += "Час приготування - " + this.time + " ";
        this.interval = setInterval(
          function () {
            this.info.innerHTML += " | ";
          }.bind(this),
          1000
        );
        this.timer = setTimeout(this.onReady.bind(this), this.time);
        this.info.innerHTML += this.state;
      }
    } catch (ex) {
      this.info.innerHTML += ex.message;
    }
  };

  Machine.prototype.onReady = function () {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.info.innerHTML += "Готово!";
    this.state = "stopped";
    this.info.innerHTML += this.state;
  };

  Machine.prototype.stop = function () {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.info.innerHTML = "Примусове вимкнення!";
    this.state = "stopped";
    this.info.innerHTML += this.state;
  };

  function CofeeMachine(info) {
    this.drink = "вода";
    //Machine.apply(this);
    Machine.call(this, info);
  }

  CofeeMachine.prototype = Object.create(Machine.prototype);
  CofeeMachine.prototype.constructor = CofeeMachine;

  CofeeMachine.prototype.run = function (drink) {
    try {
      if (this.state == "started") {
        throw new Error("Машина зайнята!");
      } else {
        if (drink != undefined) {
          this.drink = drink;
        }
        this.info.innerHTML = "Приготування: " + this.drink + " ";
        if (this.drink == "latte") {
          this.time = 5000;
        }
        if (this.drink == "espresso") {
          this.time = 3000;
        }
        Machine.prototype.run.apply(this);
      }
    } catch (ex) {
      this.info.innerHTML += ex.message;
    }
  };

  // let cofeeMachine = new CofeeMachine();
  // cofeeMachine.run("espresso");

  /* Buttons */
  let info = document.getElementById("info");
  let latte = document.getElementById("latte");
  let espresso = document.getElementById("espresso");
  let stop = document.getElementById("stop");

  /* Create mashine */

  //let machine = new Machine(info);
  let coffeeMachine = new CofeeMachine(info);

  /* Listen to click button events */
  latte.addEventListener("click", function () {
    coffeeMachine.run("latte");
  });

  espresso.addEventListener("click", function () {
    coffeeMachine.run("espresso");
  });

  stop.addEventListener("click", function () {
    coffeeMachine.stop();
  });




function MultiCooker(info1) {
  this.eat = "м'ясо";
  //Machine.apply(this);
  Machine.call(this, info1);
}

MultiCooker.prototype = Object.create(Machine.prototype);
MultiCooker.prototype.constructor = MultiCooker;

MultiCooker.prototype.run =  function (eat) {
  try {
    if (this.state == "started") {
      throw new Error("Машина зайнята!");
    } else {
      if (eat != undefined) {
        this.eat = eat;
      }
      this.info.innerHTML = "Приготування: " + this.eat + " ";
      if (this.eat == "fish") {
        this.time = 5000;
      }
      if (this.eat == "meat") {
        this.time = 3000;
      }
      Machine.prototype.run.apply(this);
    }
  } catch (ex) {
    this.info.innerHTML += ex.message;
  }
};

// let cofeeMachine = new CofeeMachine();
// cofeeMachine.run("espresso");

/* Buttons */
let info1 = document.getElementById("info1");
let meat = document.getElementById("meat");
let soup = document.getElementById("soup");
let stop1 = document.getElementById("stop1");

/* Create mashine */

//let machine = new Machine(info);
let multicooker = new MultiCooker(info1);

/* Listen to click button events */
meat.addEventListener("click", function () {
  multicooker.run("meat");
});

soup.addEventListener("click", function () {
  multicooker.run("soup");
});

stop1.addEventListener("click", function () {
  multicooker.stop();
});
};