const inputBox = document.getElementById('input-box');

const resultsDiv = document.getElementById('results-div');

let taskArray = [];

function addTask() {

  taskArray.push(inputBox.value);
  inputBox.value = '';
  resultsDiv.innerText = '';
  
	taskArray.forEach((innerArray, indexArray)  => {
  	const taskLine = document.createElement('p');
		taskLine.innerText = innerArray;
    
    //código incluído pra passar na aula de hoje
    taskLine.style.margin = '1vw';
    taskLine.style.color = '#fff';
    
    
    resultsDiv.appendChild(taskLine);
  });

}
