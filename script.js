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
const bambooBtn = document.querySelector('.bamboo-btn');
const blackBtn = document.querySelector('.black-btn');


backProjectBtn.addEventListener('click', openModal)
bambooBtn.addEventListener('click', openModal)
blackBtn.addEventListener('click', openModal)




function openModal(){
    modal.classList.add('active');
    overlay.classList.add('active'); 
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


function closeModal(){
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
}



//radios


const noRewardRadio = document.querySelector('#no-reward-pledging-radio')
const blackRadio = document.querySelector('#black-pledging-radio');
const bambooRadio = document.querySelector('#bamboo-pledging-radio');

// end radios 

// titles

const noRewardTitle = document.querySelector('.no-reward-title');
const bambooTitle = document.querySelector('.bamboo-title');
const blackTitle = document.querySelector('.black-title');



//end titles

// no reward part 

noRewardRadio.addEventListener('click', showNoRewardPledgingPart);
noRewardTitle.addEventListener('click', showNoRewardPledgingPart);


let clicksOnNoRewardRadio =0;

function showNoRewardPledgingPart(){
    //this function show the bottom part of the div 
    clicksOnNoRewardRadio++;


    const noRewardMoneyBlock = document.querySelector('.no-reward-money-block');

    if(clicksOnNoRewardRadio %2 !==0){
        noRewardMoneyBlock.classList.add('show-block');
        noRewardRadio.checked = true;

    } else if (clickNum %2 ===0){
        
        noRewardMoneyBlock.classList.remove('show-block');
        noRewardRadio.checked = false;

    }

}

// bamboo part 

bambooRadio.addEventListener('click', showBambooPledgingPart);
bambooTitle.addEventListener('click', showBambooPledgingPart);


let clicksOnBambooRadio =0;

function showBambooPledgingPart(){
    //this function show the bottom part of the div 
    clicksOnBambooRadio++;


    const bambooMoneyBlock = document.querySelector('.bamboo-money-block');

    if(clicksOnBambooRadio %2 !==0){
        bambooMoneyBlock.classList.add('show-block');
        bambooRadio.checked = true;

    } else if (clickNum %2 ===0){
        
        bambooMoneyBlock.classList.remove('show-block');
        bambooRadio.checked = false;

    }

}


// black part 

blackRadio.addEventListener('click', showBlackPledgingPart);
blackTitle.addEventListener('click', showBlackPledgingPart);


let clicksOnBlackRadio =0;

function showBlackPledgingPart(){
    //this function show the bottom part of the div 
    clicksOnBlackRadio++;


    const blackMoneyBlock = document.querySelector('.black-money-block');

    if(clicksOnBlackRadio %2 !==0){
        blackMoneyBlock.classList.add('show-block');
        blackRadio.checked = true;

    } else if (clickNum %2 ===0){
        
        blackMoneyBlock.classList.remove('show-block');
        blackRadio.checked = false;

    }

}

//modal 2 

const bamboocontinueBtn = document.querySelector('.bamboo-continue-btn');
const blackcontinueBtn = document.querySelector('.black-continue-btn');
const noRewardcontinueBtn = document.querySelector('.no-reward-continue-btn');

const gotItBtn = document.querySelector('.got-it-btn');

const modal2 = document.querySelector('.modal2');

bamboocontinueBtn.addEventListener('click', openModal2); 
blackcontinueBtn.addEventListener('click', openModal2); 
noRewardcontinueBtn.addEventListener('click', openModal2); 


gotItBtn.addEventListener('click', closeModal2)

function openModal2(){
    modal2.classList.add('active');
    overlay.classList.remove('active');
    modal.classList.remove('active');
}

function closeModal2(){
    modal2.classList.remove('active');
}

const enterValueInput = document.querySelector('.enter-value'); 

/*bamboocontinueBtn.addEventListener('click', getInputValue);
blackcontinueBtn.addEventListener('click', getInputValue);
noRewardcontinueBtn.addEventListener('click', getInputValue);*/


/*function getInputValue(){
    let inputValue = parseInt(enterValueInput.value);
    const donatedMoneyDiv =  document.querySelector('.donated-money');
    let donatedMoney = parseInt(89914) +inputValue;
    donatedMoneyDiv.innerHTML = "$"+donatedMoney ;
}*/