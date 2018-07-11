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

page.addEventListener('click', function() {
  if (event.target.className === "read-btn") {
  event.target.parentNode.parentNode.classList.toggle("read");
  }
  countRead();
});

page.addEventListener('click', function() {
  if (event.target.className === "delete-btn") {
  event.target.parentNode.parentNode.remove();
  }
});

titleInput.addEventListener('keyup', addEnable);
urlInput.addEventListener('keyup', addEnable);

function addEnable() {
  var inputField = (titleInput.value.length * urlInput.value.length);
  if (inputField === 0) {
    addBtn.disabled = true;
  } else {
    addBtn.disabled = false;
  }
};

function countRead() {
  var count = document.querySelectorAll(".read").length;
  console.log(count);
}






	