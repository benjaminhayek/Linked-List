var addBtn = document.querySelector(".add-button");
var urlInput = document.querySelector(".url-input");
var titleInput = document.querySelector(".title-input");
var cardList = document.querySelector('.list');
var page = document.querySelector('.list')

addBtn.addEventListener('click', function() {
   var title = titleInput.value;
   var url = urlInput.value;
   console.log()
var card = `
	<article class="bookmark" id="bmark">
      <h2 class="title-output">${title}</h2>
      <p class="url-output">${url}</p>
      <div class="buttons">
        <button class="read-btn" id="red">Read</button>
        <button class="delete-btn" id="delete" >Delete</button>
      </div>
    </article>
`
	

  cardList.innerHTML += card

  });

page.addEventListener('click', function(event) {
  if (event.target.className === "read-btn");
  event.target.parentNode.parentNode.classList.toggle("read");
  event.target.classList.toggle("read");
  });

page.addEventListener('click', function(event) {
  if (event.target.className === "delete-btn");
  event.target.parentNode.parentNode.remove();
  });






	