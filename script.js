var addBtn = document.querySelector(".add-button");
var urlInput = document.querySelector(".url-input");
var titleInput = document.querySelector(".title-input");
var cardList = document.querySelector('.list')

addBtn.addEventListener('click', function() {
   var title = titleInput.value;
   var url = urlInput.value;
   console.log()
var card = `
	<article class="bookmark">
      <h2 class="title-output">${title}</h2>
      <p class="url-output">${url}</p>
      <div class="buttons">
        <button class="read-btn">Read</button>
        <button class="delete-btn">Delete</button>
      </div>
    </article>
`
	cardList.innerHTML += card
})



// function addBookmark()




	