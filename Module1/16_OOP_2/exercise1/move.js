function Idol(width, height, top, image, left) {
    this.width = width; 
    this.height = height;
    this.image = image;
    this.top = top;
    this.left = left;
    this.direction = "right";

    this.moveRight = function(n) {
        this.left += n;
    }

    this.moveLeft = function(n) {
        this.left = this.left - n;
    }

    this.moveTop = function(n) {
        this.top = this.top - n;
    }

    this.moveBottom = function(n) {
        this.top += n;
    }

    this.getIdolElement = function() {
        return `<img width= "${this.width}" height= "${this.height}" src= "${this.image}" style="top:${this.top}px; left:${this.left}px; position:absolute;" />`;
    }
}
    let n = parseInt(prompt('Nhập vào tốc độ của ảnh mà bạn muốn: '));

    let idol = new Idol(400, 300, 50, 'reus.png', 50);
    if ( n <= 0 ) {
        alert('Tốc độ phải lớn hơn 0!');
    } else {
        function start(){
            let maxMoveRight = window.innerWidth - idol.width - 50 - idol.left;
            let maxMoveBottom = window.innerHeight - idol.height - 50 - idol.top;
            let maxMoveLeft = idol.left - 50;
            let maxMoveTop = idol.top - 50;
            
            if ( idol.direction === "right" ) {
                if ( maxMoveRight > 0 ){
                    idol.moveRight(Math.min(n, maxMoveRight));
                } else {
                    idol.direction = "down";
                }
            }

            if ( idol.direction === "down" ) {
                if ( maxMoveBottom > 0 ){
                    idol.moveBottom(Math.min(n, maxMoveBottom));
                } else {
                    idol.direction = "left";
                }
            }

            if ( idol.direction === "left" ) {
                if ( maxMoveLeft > 0 ){
                    idol.moveLeft(Math.min(n, maxMoveLeft));
                } else {
                    idol.direction = "up";
                }
            }

            if ( idol.direction === "up" ) {
                if ( maxMoveTop > 0 ) {
                    idol.moveTop(Math.min(n, maxMoveTop));
                } else {
                    idol.direction = "right";
                }
            }

            document.getElementById('game').innerHTML = idol.getIdolElement();
            setTimeout(start, 300)
        }

    start();
}