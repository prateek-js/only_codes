var listElm = document.querySelector('#infinite-list');
const pStart = { x: 0, y: 0 };
const pStop = { x: 0, y: 0 };

// Add 20 items.
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 20; i++) {
    var item = document.createElement('li');
    item.innerText = 'Item ' + nextItem++;
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

function swipeStart(e) {
  console.log("swipeStart");
  if (typeof e["targetTouches"] !== "undefined")    {
    let touch = e.targetTouches[0];
    pStart.x = touch.screenX;
    pStart.y = touch.screenY;
  } else {
    pStart.x = e.screenX;
    pStart.y = e.screenY;
  }
}

function swipeEnd(e) {
  console.log("swipeEnd");
  if (typeof e['changedTouches'] !== "undefined")     {
        var touch = e.changedTouches[0];
        pStop.x = touch.screenX;
        pStop.y = touch.screenY;
    } else {
        pStop.x = e.screenX;
        pStop.y = e.screenY;
    }
    swipeCheck();
}
function swipeCheck() {
  var changeY = pStart.y < pStop.y ?Math.abs(pStart.y - pStop.y) : 0;
  if (document.body.scrollTop === 0) {
    if (changeY > 100) {
      console.log("here 123");
    }
  }
}

// Initially load some items.
loadMore();


document.getElementById('loadingContainer').addEventListener("touchstart", e => swipeStart(e), true);
document.getElementById('loadingContainer').addEventListener("touchend", e => swipeEnd(e), true);
