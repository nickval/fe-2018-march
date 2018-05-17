window.onload = function () {
    var block = document.querySelector(".square"),
        h = 200,
        step = 50,
        isMove = false,
        isSeat = false,
        styleGet = window.getComputedStyle(block),
        topPos = +styleGet.getPropertyValue('top').split("px")[0],
        leftPos = +styleGet.getPropertyValue('left').split("px")[0],
        widthBlock = +styleGet.getPropertyValue('width').split("px")[0],
        heightBlock = +styleGet.getPropertyValue('height').split("px")[0],
        speedAnim = +styleGet.getPropertyValue('transition-duration').split("s")[0] * 1000,
        seatBlock = document.querySelector(".seatSquare");

    window.addEventListener("keydown", function (event) {
        if (!isMove) {
            isMove = true;
            console.log(event);
            calcMove(event);
        }
        if (!isSeat && event.ctrlKey) {
            isSeat = true;
            seat(event);
        }
    });

    window.addEventListener("keyup", function (event) {

        if (!event.ctrlKey) {
            isSeat = false;
            console.log('up', event);
            standUp(event);
        }
    })

    function calcMove(event) {
        if (event.keyCode == 32 && !isSeat) {
            jump();
        } else if (event.keyCode == 39) {
            leftPos += step;
        } else if (event.keyCode == 37) {
            leftPos -= step;
        } else if (event.keyCode === 38 && !isSeat) {
            topPos -= step;
        } else if (event.keyCode === 40 && !isSeat) {
            topPos += step;
        } else {
            isMove = false;
        }

        if (event.keyCode !== 32) {
            move();
        }
    }

    function move(event) {
        seatBlock.style.left = block.style.left = leftPos + "px";
        seatBlock.style.top = block.style.top = topPos + "px";
        isMoveChange();
    }

    function jump() {
        topPos -= h;
        block.style.top = topPos + "px";
        setTimeout(function () {
            // console.log("back " + block);
            topPos += h;
            block.style.top = topPos + "px";
            isMoveChange();
        }, speedAnim);
    }

    function isMoveChange() {
        setTimeout(function () {
            isMove = false;
        }, speedAnim);
    }

    function seat() {
        seatBlock.style.top = topPos;
        seatBlock.style.left = leftPos;
        seatBlock.style.height = heightBlock * 0.6 + "px";
        seatBlock.style.width = widthBlock * 1.15 + "px";
        block.style.width = widthBlock * 1.15 + "px";
    }

    function standUp() {
        seatBlock.style.top = topPos;
        seatBlock.style.left = leftPos;
        seatBlock.style.height = 0 + "px";
        seatBlock.style.width = widthBlock + "px";
        block.style.width = widthBlock + "px";
    }
}