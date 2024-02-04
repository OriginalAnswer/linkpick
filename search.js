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
const originView = document.querySelector('.links');
const currentView = document.querySelector('.currentview');
const allLinks = document.querySelectorAll('.link'); 
const inputSearch = document.getElementById('input-search');
const f = document.querySelector('footer');

function search() {
    const searchValue = inputSearch.value;
    const linkToShow = document.getElementById(searchValue);
    console.log(searchValue)
    if (searchValue > 0) {
        // 모든 링크를 숨기기
        allLinks.forEach(link => {
            link.classList.add('dpnone');
        });
        // 해당 id를 가진 링크만 보이기
        // if (linkToShow) {
        //     console.log(linkToShow)
        // }
        linkToShow.classList.remove('dpnone');
        f.style.marginTop = '300px';
    } else {
        allLinks.forEach(link => {
            link.classList.remove('dpnone');
        });
        
        f.style.marginTop = '30px';
    }
}
search();
console.log(inputSearch.value);
// inputSearch.addEventListener('keyup', function() {
//     search(this.value);
// });
