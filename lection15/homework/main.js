window.onload = function () {
    var block = document.querySelector(".square"),
        h = 200,
        step = 50,
        movingFlag = false,
        seatingFlag = false,
        getStyle = window.getComputedStyle(block),
        topPosition = +getStyle.getPropertyValue('top').split("px")[0],
        leftPosition = +getStyle.getPropertyValue('left').split("px")[0],
        widthBlock = +getStyle.getPropertyValue('width').split("px")[0],
        heightBlock = +getStyle.getPropertyValue('height').split("px")[0],
        animationSpeed = +getStyle.getPropertyValue('transition-duration').split("s")[0] * 1000,
        seatBlock = document.querySelector(".seatSquare");

    window.addEventListener("keydown", function (event) {
        if (!movingFlag) {
            movingFlag = true;
            console.log(event);
            calcMove(event);
        }
        if (!seatingFlag && event.ctrlKey) {
            seatingFlag = true;
            seat(event);
        }
    });

    window.addEventListener("keyup", function (event) {

        if (!event.ctrlKey) {
            seatingFlag = false;
            console.log('up', event);
            standUp(event);
        }
    })

    function calcMove(event) {
        if (event.keyCode == 32 && !seatingFlag) {
            jump();
        } else if (event.keyCode == 39) {
            leftPosition += step;
        } else if (event.keyCode == 37) {
            leftPosition -= step;
        } else if (event.keyCode === 38 && !seatingFlag) {
            topPosition -= step;
        } else if (event.keyCode === 40 && !seatingFlag) {
            topPosition += step;
        } else {
            movingFlag = false;
        }

        if (event.keyCode !== 32 && movingFlag) {
            move();
        }
    }

    function move(event) {
        seatBlock.style.left = block.style.left = leftPosition + "px";
        seatBlock.style.top = block.style.top = topPosition + "px";
        isMoveChange();
    }

    function jump() {
        topPosition -= h;
        block.style.top = topPosition + "px";
        setTimeout(function () {
            // console.log("back " + block);
            topPosition += h;
            block.style.top = topPosition + "px";
            isMoveChange();
        }, animationSpeed);
    }

    function isMoveChange() {
        setTimeout(function () {
            movingFlag = false;
        }, animationSpeed);
    }

    function seat() {
        seatBlock.style.top = topPosition;
        seatBlock.style.left = leftPosition;
        seatBlock.style.height = heightBlock * 0.6 + "px";
        seatBlock.style.width = widthBlock * 1.15 + "px";
        block.style.width = widthBlock * 1.15 + "px";
    }

    function standUp() {
        seatBlock.style.top = topPosition;
        seatBlock.style.left = leftPosition;
        seatBlock.style.height = 0 + "px";
        seatBlock.style.width = widthBlock + "px";
        block.style.width = widthBlock + "px";
    }
}