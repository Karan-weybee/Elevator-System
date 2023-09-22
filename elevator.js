
let lifts = document.getElementById('lifts')
let mainEl = document.getElementById('main')
let rolar1 = document.getElementById(`rolar1`)

var rolar1DeActive = 0;
var numOfBtn=5;
var repeatLift =3;
var repeatLiftRolar=repeatLift;
document.addEventListener('keydown',function(event){
    if(event.key == 'Enter'){
        event.preventDefault();
        numOfLifts();
    }
})
function numOfLifts()
{
    let ans = document.getElementById('numOfFloor').value;
    let ans1 = document.getElementById('numOfLifts').value;
    numOfBtn=ans;
    repeatLift=ans1;
    while (lifts .hasChildNodes()){
        lifts.removeChild(lifts .firstChild)
    }
    lifts.style.display = 'grid';
    // repeatLift = repeatLift == 0 ? 1 : repeatLift;
    lifts.style.gridTemplateColumns = `repeat(${repeatLift},1fr)`;
    // console.log(((150*repeatLift)+150)/10);
    let widths = `${((150 * repeatLift) + 150) / 10}`
    var size = window.screen.width;
    console.log(size)
    let margins = `${(120 - widths) / 2}`
    console.log(margins)
    mainEl.style.width = `${widths}em`
    mainEl.style.marginLeft = `${margins}em`

    repeat(repeatLift);
if(numOfBtn<5 || repeatLift<3){
    alert("default floor is 5 and Default lifts is 3!!")
    location.reload();
}
    for(let j=5;j<9999;j++){
        if( document.getElementById(`btn${j}`)){
        document.getElementById(`btn${j}`).remove()
        }
    }

    repeatBtns();

}
function repeat(repeatLift) {
    var id = 0;
    for (let i = 0; i < repeatLift; i++) {
        id++;
        let html = `<div class="lift" id="lift${id}">
    <div class="floor" id="lift${id}-5"><div class='main_rolar' id="rolar${id}" style="margin-top: 388px;"><span class='main-span' id="span${id}">5</span></div></div>
    <div class="floor" id="lift${id}-4">4</div>
    <div class="floor" id="lift${id}-3">3</div>
    <div class="floor" id="lift${id}-2">2</div>
    <div class="floor" id="lift${id}-1">1</div>
    <div class="active" id="active${id}"></div>
    <div class="active" id="active1"><label class="switch" >
    <input type="checkbox" id="check-lift${id}" onclick="checkBtn()">
    <span class="slider round"></span>
  </label>
  </div>    
    </div>`;
        lifts.insertAdjacentHTML('afterbegin', html);

        function repeatFloor(){
            for(let j=6;j<=numOfBtn;j++){
        let html1=` <div class="floor" id="lift${id}-${j}"><span class='up'> ${j}</span></div>`;
        document.getElementById(`lift${id}`).insertAdjacentHTML('afterbegin', html1);
            }
        }
        repeatFloor();
    }
}
repeat(repeatLift)

function repeatBtns(){
    for(let j=5;j<=numOfBtn;j++){
let html2=`<div class="button" id="btn${j}" >${j}<button id="${j}" class="btn" onclick="slider(id)">🔼</button></div>`;
document.getElementById(`buttons`).insertAdjacentHTML('afterbegin', html2);
    }
    for(let j=5;j<numOfBtn;j++){
        let html3=`<button id="${j}" class="btn" onclick="slider(id)">🔽</button>`;
        document.getElementById(`btn${j}`).insertAdjacentHTML('beforeend', html3);
            }
}
repeatBtns();
// let rolar2 = document.getElementById(`rolar2`);
// let rolar3 = document.getElementById(`rolar3`);
// let rolar4 = document.getElementById(`rolar4`);
// let rolar5 = document.getElementById(`rolar5`);

lifts.style.display = 'grid';
// repeatLift = repeatLift == 0 ? 1 : repeatLift;
lifts.style.gridTemplateColumns = `repeat(${repeatLift},1fr)`;
// console.log(((150*repeatLift)+150)/10);
let widths = `${((150 * repeatLift) + 150) / 10}`
var size = window.screen.width;
console.log(size)
let margins = `${(120 - widths) / 2}`
console.log(margins)
mainEl.style.width = `${widths}em`
mainEl.style.marginLeft = `${margins}em`

var pos = null;
var marginRolar = null;

// for check button in lift 
var checkedButton = [];
function checkBtn() {
    checkedButton.splice(0, checkedButton.length);
    for (let i = 0; i <=999; i++) {
        if (document.getElementById(`rolar${i}`) && document.getElementById(`check-lift${i}`).checked == true) {
            console.log(i, 'checked')
            checkedButton.push(i)

            let pos1 = Number(document.getElementById(`rolar${i}`).style.marginTop.slice(0, document.getElementById(`rolar${i}`).style.marginTop.length - 2));
            let id1 = null;
            clearInterval(id1);
            id1 = setInterval(frame, 5);
            function frame() {
                if (pos1 == 388) {
                    clearInterval(id1);
                    document.getElementById(`span${i}`).style.display = 'none';
                        
                } else {
                    pos1 += 97;
                    document.getElementById(`rolar${i}`).style.marginTop = `${pos1}px`;
                    document.getElementById(`rolar${i}`).style.transitionDuration = '2s';
                    // console.log('position',pos)
                }
            }
        }
    }
    console.log(checkedButton)
}

function ischecked(id) {
    for (let i = 0; i < checkedButton.length; i++) {
        if (id == checkedButton[i]) {
            return 1;
        }
    }
    return 0;
}

function slider(id) {
    let random =Math.random()*2;
    id = Number(id);
    console.log(typeof id)
    marginRolar = 97 * (5 - id);
    let id1 = null;
    let r_No;
    let diff = 99999;



    // if (availableRolar == 0) {
    for (let i = 1; i <=999; i++) {
        if (document.getElementById(`rolar${i}`)) {
            if (!ischecked(i)) {
                let temp = Math.abs(marginRolar - Number(document.getElementById(`rolar${i}`).style.marginTop.slice(0, document.getElementById(`rolar${i}`).style.marginTop.length - 2)));
                console.log("temp", temp)
                console.log(Number(document.getElementById(`rolar${i}`).style.marginTop.slice(0, document.getElementById(`rolar${i}`).style.marginTop.length - 2)))
                if(random<1){
                if (temp <= diff) {
                    diff = temp;
                    r_No = i;
                }
            }
                else{
                    if (temp <= diff) {
                        diff = temp;
                        r_No = i;
                    }
                }

            }
        }
    }
    console.log(r_No)
    document.getElementById(`span${r_No}`).style.display = 'none';
    pos = Number(document.getElementById(`rolar${r_No}`).style.marginTop.slice(0, document.getElementById(`rolar${r_No}`).style.marginTop.length - 2));
    console.log(pos);
    console.log('marginrolar', marginRolar)
    if (marginRolar <= pos) {
        clearInterval(id1);
        id1 = setInterval(frame, 1);
        function frame() {
            if (pos == marginRolar) {
                clearInterval(id1);

            } else {
                pos -= 97;
                document.getElementById(`rolar${r_No}`).style.marginTop = `${pos}px`;
                document.getElementById(`rolar${r_No}`).style.transitionDuration = `0.7s`;
                console.log('position', pos);

            }
        }
    }
    else {
        clearInterval(id1);
        id1 = setInterval(frame, 1);
        function frame() {
            if (pos == marginRolar) {
                clearInterval(id1);

            } else {
                pos += 97;
                document.getElementById(`rolar${r_No}`).style.marginTop = `${pos}px`;
                document.getElementById(`rolar${r_No}`).style.transitionDuration = `0.7s`;
                console.log('position', pos);

            }
        }

    }

    setTimeout(() => {
        console.log('positionss', pos)
        if (pos == 0) {
            document.getElementById(`span${r_No}`).style.display = 'block';
        }

    }, diff / 97 *0.9*1000);

}
