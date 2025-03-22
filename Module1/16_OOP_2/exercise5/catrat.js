function Rat(name, weight, speed, status) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.setName = function(name) {
        this.name = name;
    }
    this.getName = function() {
        return this.name;
    }
    this.setWeight = function(weight) {
        this.weight = weight;
    }
    this.getWeight = function() {
        return this.weight;
    }
    this.setSpeed = function(speed) {
        this.speed = speed;
    }
    this.getSpeed = function() {
        return this.speed;
    }
    this.getStatus = function() {
        return this.status;
    }
    this.ratSay = function() {
        return 'Chít Chít';
    }
}

function Cat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.count = 1;
    this.setName = function(name) {
        this.name = name;
    }
    this.getName = function() {
        return this.name;
    }
    this.setWeight = function(weight) {
        this.weight = weight;
    }
    this.getWeight = function() {
        return this.weight;
    }
    this.setSpeed = function(speed) {
        this.speed = speed;
    }
    this.getSpeed = function() {
        return this.speed;
    }
    this.catSay = function() {
        return 'Meo Meo';
    }
    this.catchRat = function(Rat) {
        if ( this.speed > Rat.getSpeed() && this.count == 1) {
            this.count++;
            return `Mèo đã bắt được chuột!`;
        } else {
            return `Mèo không bắt được chuột!`;
        }
    }
    this.eatRat = function(rat) {
        if( rat.getStatus() ) {
            this.weight = this.weight + rat.getWeight();
            rat.status = false;
            return `Mèo đã ăn chuột!`;
        } else {
            return `Mèo không thèm ăn chuột!`;
        }
    }
}

let jerry = new Rat('Jerry', 5, 50, true);
let tom = new Cat('Tom', 30, 100);
console.log(jerry.getStatus());
console.log(tom.catchRat(jerry));
console.log(tom.catchRat(jerry));
console.log(tom.eatRat(jerry));
console.log(tom.getWeight());