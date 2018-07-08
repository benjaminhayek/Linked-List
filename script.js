var addBtn = document.querySelector(".add-button");
var deleteBtn = document.querySelector(".delete-btn");
var readBtn = document.querySelector(".read-btn");
var urlOutput = document.querySelector(".url-output");
var titleOutput = document.querySelector(".title-output");
var urlInput = document.querySelector(".url-input");
var titleInput = document.querySelector(".title-input");

addBtn.addEventListener('click', function() {
  titleOutput.innerText += titleInput.value;
  urlOutput.innerText += urlInput.value;
  
})