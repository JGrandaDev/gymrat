function animation() {
    let animationText = [
        ["O", "u", "r", " ", "S", "o", "c", "i", "a", "l", " ", "M", "e", "d", "i", "a"],
        ["F", "i", "t", "n", "e", "s", "s", " ", "M", "o", "d", "e", "l"]
    ];

    let letterCounter = -1;
    let levelIndex = 0;

    const animationContainer = document.querySelector(".text-container-animation");

    function drawText() {
        letterCounter++;
        animationContainer.textContent += animationText[levelIndex][letterCounter];

        if (letterCounter === animationText[levelIndex].length - 1) {
            clearInterval(interval);

            setTimeout(() => {
                interval = setInterval(() => {
                    animationContainer.textContent = "";
                    letterCounter--;
                    animationText[levelIndex].pop();

                    animationText[levelIndex].forEach((element) => {
                        animationContainer.textContent += element;
                    });

                    if (letterCounter < 0) {
                        clearInterval(interval);
                        levelIndex++;
                        interval = setInterval(drawText, 150);

                        if (levelIndex > animationText.length - 1) {
                            clearInterval(interval);
                            levelIndex = 0;
                            animation();
                        }
                    }
                }, 150);
            }, 1000);
        }
    }

    let interval = setInterval(drawText, 150);
}

window.addEventListener("load", animation);
