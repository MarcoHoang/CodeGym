function Control(code, television) {
    this.code = code;
    this.television = television;
    this.setCode = function(code) {
        this.code = code;
    }
    this.getCode = function() {
        return this.code;
    }
    this.getTelevision = function() {
        return this.television;
    }
    this.setChannel = function(channel) {
        if (this.television && this.television.getStatus()) {
            this.television.setChannel(channel);
        } else {
            console.log("Bật tivi trước đi th ng.");
        }
    };
    
    this.setVolume = function(volume) {
        if (this.television && this.television.getStatus()) {
            this.television.setVolume(volume);
        } else {
            console.log("Bật tivi trước đi thằng ng.");
        }
    };
}

function Television(channel, volume, status) {
    this.channel = channel;
    this.volume = volume;
    this.status = status;
    this.setChannel = function(newChannel) {
        this.channel = newChannel;
    }
    this.getChannel = function() {
        return this.channel;
    }
    this.setVolume = function(newVolume) {
        this.volume = newVolume;
    }
    this.getVolume = function() {
        return this.volume;
    }
    this.getStatus = function() {
        return this.status;
    }
    this.turnOn = function() {
        this.status = true;
        console.log('Đã bật tivi')
    }
    this.turnOff = function() {
        this.status = false;
        console.log('Bật tivi trước đi thằng ng.');
    }
}

let samsung = new Television(2, 16, false);
let remote = new Control(11, samsung);

console.log(samsung.getStatus());
samsung.turnOff();
samsung.turnOn();
console.log(samsung.getStatus());
samsung.setChannel(5);
samsung.setVolume(20);
console.log(samsung.getChannel());
console.log(samsung.getVolume());
remote.setChannel(7);
remote.setVolume(22);
console.log(samsung.getChannel());
console.log(samsung.getVolume());