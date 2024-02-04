// const originView = document.querySelector('.links');
// const currentView = document.querySelector('.currentview');
// const allLinks = document.querySelectorAll('.link'); 
// function search(v) {
//     if (v == "") {
//         originView.classList.remove('dpnone')
//         currentView.classList.add('dpnone');
//     } else {
//         originView.classList.add('dpnone');
//         currentView.classList.remove('dpnone')
//     };
//     const n = document.querySelector('.item-name');
// }
const itemContainer = document.querySelector('.item-container');
const currentView = document.querySelector('.currentview');
const allItem = document.querySelectorAll('.item'); 
    const inputSearch = document.getElementById('input-search');
const f = document.querySelector('footer');

function search() {
    const searchValue = inputSearch.value;
    const currentItem = document.getElementById(searchValue);
    console.log(searchValue)
    if (searchValue > 0) {
        allItem.forEach(item => {
            item.classList.add('dpnone');
        });
        currentItem.classList.remove('dpnone');
    } else {
        allItem.forEach(item => {
            item.classList.remove('dpnone');
        });        
    }
}
console.log(inputSearch.value);