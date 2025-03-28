
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        const carImg = new Image();
        carImg.src = 'car.png';

        const car = { x: 400, y: 400, width: 40, height: 40, speed: 2, dx: 0, dy: 0 };
        let obstacles = [];
        let rewards = [];
        let score = 0;
        let gameOver = false;

        function generateObjects() {
            rewards = [];
            for (let i = 0; i < 10; i++) {
                obstacles.push({ x: 60 + Math.random() * (800 - 60 * 2), y: 60 + Math.random() * (800 - 60*2), width: 20, height: 20 });
                rewards.push({ x: Math.random() * (800 - 15), y: Math.random() * (800 -15), width: 15, height: 15 });
            }
        }
        generateObjects();

        function drawCar() {
            ctx.drawImage(carImg, car.x, car.y, car.width, car.height);
        }

        function drawObjects(arr, color) {
            ctx.fillStyle = color;
            arr.forEach(obj => ctx.fillRect(obj.x, obj.y, obj.width, obj.height));
        }

        function update() {
            if (gameOver) return;
            car.x += car.dx * car.speed;
            car.y += car.dy * car.speed;

            if (car.x < 0 || car.x > 760 || car.y < 0 || car.y > 760) gameOver = true;
            obstacles.forEach(obstacle => {
                if (car.x < obstacle.x + obstacle.width && car.x + car.width > obstacle.x &&
                    car.y < obstacle.y + obstacle.height && car.y + car.height > obstacle.y) {
                    gameOver = true;
                }
            });
            rewards = rewards.filter(reward => {
                if (car.x < reward.x + reward.width && car.x + car.width > reward.x &&
                    car.y < reward.y + reward.height && car.y + car.height > reward.y) {
                    score += 10;
                    return false;  // filter loại bỏ phần thưởng nếu đã ăn
                }
                return true;    // giữ lại do chưa ăn
            });
            if ( rewards.length === 0 ) {
                    generateObjects();
                }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawCar();
            drawObjects(obstacles, "black");
            drawObjects(rewards, "red");
            ctx.fillStyle = "green";
            ctx.font = "20px Arial";
            ctx.fillText("Score: " + score, 5, 20);
            if (gameOver) {
                ctx.font = "30px Arial";
                ctx.fillText("Game Over", 330, 400);
            }
        }

        function gameLoop() {
            update();
            draw();
            if (!gameOver) requestAnimationFrame(gameLoop);  // bắt đầu animation
            // // Dừng animation sau 2 giây
            // setTimeout(() => cancelAnimationFrame(animationId), 2000);
        }
        gameLoop();

        document.addEventListener("keydown", function(event) {  // sự kiện nhấn phím keydown
            if (event.key === "ArrowUp") { car.dx = 0; car.dy = -1; }
            else if (event.key === "ArrowDown") { car.dx = 0; car.dy = 1; }
            else if (event.key === "ArrowLeft") { car.dx = -1; car.dy = 0; }
            else if (event.key === "ArrowRight") { car.dx = 1; car.dy = 0; }
            else if (event.ctrlKey) { car.speed = 4; }
        });

        document.addEventListener("keyup", function(event) {
            if (!event.ctrlKey) { car.speed = 2; }
        });
