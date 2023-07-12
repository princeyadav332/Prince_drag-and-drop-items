
let draggedItem = null;      //variable declariation
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const successMessage = document.getElementById('successMessage');
const resetButton = document.getElementById('resetButton');
// even listeners
container1.addEventListener('dragstart', dragStart);
container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);
resetButton.addEventListener('click', reset);


//drag start
function dragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.setData('text/plain', null);
  draggedItem.classList.add('dragging');
}
//on drag over
function dragOver(event) {
  event.preventDefault();
}
//on drag enter
function dragEnter(event) {
  event.preventDefault();
  container2.classList.add('highlight');
}
// on drag leave
function dragLeave(event) {
  container2.classList.remove('highlight');
}
//drop
function drop(event) {
  event.preventDefault();
  container2.appendChild(draggedItem);
  container2.classList.remove('highlight');
  draggedItem.classList.remove('dragging');
  successMessage.textContent = 'wow! Item dropped successfully.';
  setTimeout(setTime,2100);
  function setTime(){
       successMessage.textContent = '';
  } 
}

//reset functionality
function reset() {
  container2.innerHTML = '<h2>Container 2</h2>';
  container1.innerHTML = `
    <h2>Container 1</h2>
    <div class="imageDiv" draggable="true"  ><img src="Prince.jpg.jpeg" alt="Image Not found" class="item"></div>
    <div class="item" draggable="true">Prince Yadav</div>
    <div class="item" draggable="true">Prayag Singh</div>
    <div class="item" draggable="true">Atul Kumar</div>
    <div class="item" draggable="true">Aakash Gupta</div>

  `;

   successMessage.textContent = '';
}
