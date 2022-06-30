const bookmarkBtn = document.querySelector('.bookmark-btn');
const bookmarkText = document.querySelector('.text');
const bookmarkIcon = document.querySelector('.bookmark-icon');
let clickNum =0;
bookmarkBtn.addEventListener('click', bookmarking);

function bookmarking(){
    clickNum++;
    if(clickNum %2 !==0){
        bookmarkBtn.classList.add('bookmarked');
        bookmarkText.innerHTML= "";
        bookmarkText.innerHTML= "Bookmarked";
        bookmarkIcon.src = "images/icon-check.svg"

    } else if (clickNum %2 ===0){
        bookmarkBtn.classList.remove('bookmarked');
        bookmarkText.innerHTML= "";
        bookmarkText.innerHTML= "Bookmark";
        bookmarkIcon.src = "images/icon-bookmark.svg"
    }
}


//modal part

const modal = document.querySelector('.modal');
const overlay = document.querySelector('#overlay');
const closeModalBtn = document.querySelector('.close-btn');

const backProjectBtn = document.querySelector('.join-btn');
const selectRewardBtn = document.querySelector('.select-reward-btn');

backProjectBtn.addEventListener('click', openModal)

function openModal(){
    modal.classList.add('active');
    overlay.classList.add('active'); 
}
