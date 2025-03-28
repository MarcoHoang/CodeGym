// Yêu cầu bài toàn test trí nhớ: 
// 1. Tạo giao diện : 
//     - Tạo lưới chứa các ô
//     - Mỗi ô chứa 1 hình ảnh mặt trước và sau ( các hình ảnh đi theo cặp )
//     - Trộn ngẫu nhiều các hình ảnh mỗi khi bắt đầu
// 2. Tương tác :
//     - Chọn chủ đề và ấn bắt đầu 
//     - Ấn vào 1 thẻ sẽ lật ( giới hạn 1 lần lật nhiều nhất 2 thẻ )
//     - Kiểm tra 2 thẻ được lật : 
//         + Giống nhau : giữ nguyên trạng thái mở
//         + Khác nhau : Lật lại sau 1 khoảng thời gian 
//     --> Khi tất cả thẻ được lật, người chơi thắng
// 3. Tạo bộ đếm số lần lật thẻ và điểm số khi chơi : 
//     - Mỗi lần lật thì tăng số lần lật và giảm điểm nếu lật sai ( điểm bắt đầu là 100 )


const categories = 
    [
        "images/anime/naruto.png", "images/anime/naruto.png", "images/anime/luffy.png", "images/anime/luffy.png",
        "images/anime/goku.png", "images/anime/goku.png", "images/anime/sasuke.png", "images/anime/sasuke.png",
        "images/anime/tanjiro.png", "images/anime/tanjiro.png", "images/anime/nezuko.png", "images/anime/nezuko.png",
        "images/anime/zoro.png", "images/anime/zoro.png", "images/anime/yamato.png", "images/anime/yamato.png"
    ]
;

let gameBoard = document.getElementById("gameBoard");
        let restartBtn = document.getElementById("restartBtn");

        let gameCards = [...categories];

        gameCards.sort(() => 0.5 - Math.random());

        let flippedCards = [];
        let matchedCards = [];

        function createBoard() {
            gameBoard.innerHTML = "";
            gameBoard.style.display = "grid";
            gameBoard.style.gridTemplateColumns = "repeat(4, 80px)";
            gameBoard.style.gridGap = "10px";

            gameCards.forEach((img, index) => {
                let card = document.createElement("button");
                card.textContent = "❓";
                card.dataset.img = img;
                card.dataset.index = index;
                card.style.width = "80px";
                card.style.height = "80px";
                card.style.fontSize = "2em";
                card.addEventListener("click", flipCard);
                gameBoard.appendChild(card);
            });
        }

        function flipCard() {
            if (flippedCards.length < 2 && this.textContent === "❓") {
                this.textContent = this.dataset.img;
                flippedCards.push(this);

                if (flippedCards.length === 2) {
                    setTimeout(checkMatch, 800);
                }
            }
        }

        function checkMatch() {
            let [card1, card2] = flippedCards;
            if (card1.dataset.img === card2.dataset.img) {
                matchedCards.push(card1, card2);
            } else {
                card1.textContent = "❓";
                card2.textContent = "❓";
            }
            flippedCards = [];

            if (matchedCards.length === gameCards.length) {
                setTimeout(() => alert("🎉 Chúc mừng! Bạn đã hoàn thành trò chơi!"), 300);
            }
        }

        // Reset game
        restartBtn.addEventListener("click", () => {
            flippedCards = [];
            matchedCards = [];
            gameCards.sort(() => 0.5 - Math.random());
            createBoard();
        });

        // Khởi tạo bảng lần đầu
        createBoard();