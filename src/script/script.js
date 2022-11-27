let currentItem = 0;
let items;
let container = document.querySelector('.slideContainer');

function setup() {
    items = document.querySelectorAll('.slideItem');
    
    for (let i = 0; i<items.length; i++) {
        let rotation = getRotation() + 'deg';
        let item = items[i];
        item.style.transform = "rotate(" + rotation + ")";
        item.style.zIndex = 100 - i;
    };
};
setup();
container.addEventListener("keydown", navigateCarousel, false);
container.addEventListener("touchstart", startTouch, false);        
container.addEventListener("touchmove", moveTouch, false);

//keyboard
function navigateCarousel(e) {
    let key = e.keyCode;
    if (key === 37) {
        previousItem();
    } else if (key === 39) {
        nextItem();
    };
};

//swipe
    let initialX = null;

    function click(e) {
        initialX.e.click[0].clientX;
    }
    function startTouch(e) {
        initialX = e.touches[0].clientX;
    }
    function moveTouch(e) {
        if (initialX === null) {
            return;
        }

        let currentX = e.touches[0].clientX;
        let diffX = initialX - currentX;

        if (diffX > 0) {
            nextItem();
        } else {
            previousItem();
        }

        initialX = null;
        e.preventDefault();
    }

    function previousItem() {
        if (currentItem > 0) {
            currentItem--;

            let item = items[currentItem];
            let rotation = getRotation() + 'deg';
            item.style.transitionDuration = '.5s';
            item.style.transform = 'translate3d(0px, 0, 0) rotate(' +rotation + ")";
            item.style.opacity = 1;
        } else {
            currentItem = 0;
        }
    }

    function nextItem() {
        if (currentItem < items.length - 1) {
            let item = items[currentItem];

            item.style.transitionDuration = '.7s';
            item.style.transform = 'translate3d(-100px, 0, 0) rotate(15deg)';
            item.style.opacity = 0;

            currentItem++;
        } else {
            currentItem = items.length - 1;
        }
    }

function getRotation() {
    return Math.round(-2 + Math.random() *15);
}