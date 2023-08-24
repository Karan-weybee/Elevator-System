let lifts = document.getElementById('lifts')
let mainEl=document.getElementById('main')
let repeatLift=1;
function repeat(repeatLift){
    var id = 1;
for(let i=0;i<repeatLift-1;i++){
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
repeatLift=repeatLift ==0 ? 1: repeatLift;
lifts.style.gridTemplateColumns =`repeat(${repeatLift},1fr)`;
// console.log(((150*repeatLift)+150)/10);
let widths=`${((150*repeatLift)+150)/10}`
var size=window.screen.width;
console.log(size)
let margins=`${(120-widths)/2}`
console.log(margins)
mainEl.style.width=`${widths}em`
mainEl.style.marginLeft=`${margins}em`