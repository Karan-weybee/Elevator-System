let lifts = document.getElementById('lifts')
let mainEl = document.getElementById('main')
let rolar1 = document.getElementById(`rolar1`)


let repeatLift = 1;
function repeat(repeatLift) {
    var id = 1;
    for (let i = 0; i < repeatLift - 1; i++) {
        id++;
        let html = `<div class="lift" id="lift${id}">
    <div class="floor" id="lift${id}-5">5-${id}</div>
    <div class="floor" id="lift${id}-4">4</div>
    <div class="floor" id="lift${id}-3">3</div>
    <div class="floor" id="lift${id}-2">2</div>
    <div class="floor" id="lift${id}-1">1</div>
    <div class="active" id="active${id}"><input type="checkbox" name="" id="check-lift1"> </div>
    </div>`;
        lifts.insertAdjacentHTML('afterbegin', html);
    }
}
repeat(repeatLift)

lifts.style.display = 'grid';
repeatLift = repeatLift == 0 ? 1 : repeatLift;
lifts.style.gridTemplateColumns = `repeat(${repeatLift},1fr)`;
// console.log(((150*repeatLift)+150)/10);
let widths = `${((150 * repeatLift) + 150) / 10}`
var size = window.screen.width;
console.log(size)
let margins = `${(120 - widths) / 2}`
console.log(margins)
mainEl.style.width = `${widths}em`
mainEl.style.marginLeft = `${margins}em`

var pos=null;
var marginRolar=null;
function slider(id) {
    let id1 = null;
//    let ids=Number(id);
  
    pos = Number(rolar1.style.marginTop.slice(0,rolar1.style.marginTop.length-2));
    

    marginRolar = 95 * (5 - id);
    console.log(pos);
    console.log('marginrolar',marginRolar)
    if (marginRolar <= pos) {
        clearInterval(id1);
        id1 = setInterval(frame, 5);
        function frame() {
            if (pos == marginRolar) {
                clearInterval(id1);
            } else {
                pos -= 95;
                rolar1.style.marginTop = `${pos}px`;
                rolar1.style.transitionDuration = '2s';
                console.log(pos)
            }
        }
    }
    else {
        clearInterval(id1);
        id1 = setInterval(frame, 5);
        function frame() {
            if (pos == marginRolar) {
                clearInterval(id1);
            } else {
                pos += 95;
                rolar1.style.marginTop = `${pos}px`;
                rolar1.style.transitionDuration = '2s';
                console.log(pos)
            }
        }
    }
}