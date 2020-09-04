let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#quince').addEventListener('click', plus15)
document.querySelector('#tooOld').addEventListener('click', minus30)


function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function plus15() {
  total = total + 15
  document.querySelector('#placeToPutResult').innerHTML = total
}

function minus30() {
  total = total - 30
  document.querySelector('#placeToPutResult').innerHTML = total
}
