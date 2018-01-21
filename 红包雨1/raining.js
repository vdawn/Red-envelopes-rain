(function() {

    var NUMBER_OF_LEAVES = 80;

    function init() {

        var container = document.getElementById('petalbox');

        try {

            for (var i = 0;

                 i < NUMBER_OF_LEAVES;

                 i++) {

                container.appendChild(createALeaf());

            }

        }

        catch(e) {

        }

    }

    function randomInteger(low, high) {

        return low + Math.floor(Math.random() * (high - low));

    }

    function randomFloat(low, high) {

        return low + Math.random() * (high - low);

    }

    function pixelValue(value) {

        return value + 'px';

    }

    function durationValue(value) {

        return value + 's';

    }

    function createALeaf() {

        var leafDiv = document.createElement('div');

        var image = document.createElement('img');

        image.src ='images/hb/petal'+ randomInteger(1, 10) + '.png';

        leafDiv.style.top = pixelValue(randomInteger(-200, -100));

        leafDiv.style.left = pixelValue(randomInteger(0, 1920));

        var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin':'counterclockwiseSpinAndFlip';  

        leafDiv.style.webkitAnimationName ='fade, drop';

        leafDiv.style.animationName ='fade, drop';

        image.style.webkitAnimationName = spinAnimationName;

        image.style.animationName = spinAnimationName;

        var fadeAndDropDuration = durationValue(randomFloat(1.2, 8.2));

        var spinDuration = durationValue(randomFloat(3, 4));

        leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

        leafDiv.style.animationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

        // 随机delay时间

        var leafDelay = durationValue(randomFloat(0, 2));

        leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;

        leafDiv.style.animationDelay = leafDelay + ', ' + leafDelay;

        image.style.webkitAnimationDuration = spinDuration;

        image.style.animationDuration = spinDuration;

        leafDiv.appendChild(image);

        return leafDiv;

    }

    init();

}

)();