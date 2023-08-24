let lifts = document.getElementById('lifts')
let repeatLift=5;
function repeat(repeatLift){
    var id = 1;
for(let i=0;i<repeatLift-1;i++){
    id++;
    let html = `<div class="lift" id="lift${id}">
    <div class="floor" id="lift${id}-5">5</div>
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
lifts.style.gridTemplateColumns =`repeat(${repeatLift},1fr)`;