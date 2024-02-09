//{num : "", title : "", img : "./img/thumb/",link : "", tag1:"" , tag2:"" , tag0:""},
const itemContainer = document.querySelector('.item-container');
const itemDB = [
    {num : "001", img : "./img/thumb/001.jpg", title : "레이저 가위", link : "https://link.coupang.com/a/bps53dx", tag1:"완벽하게" , tag2:"싹뚝싹뚝" , tag0:""},
    {num : "002", img : "./img/thumb/002.jpg", title : "공간절약 건조기", link : "https://s.click.aliexpress.com/e/_DmgVial", tag1:"이게바로" , tag2:"공간절약" , tag0:"알리"},
    {num : "002-1", img : "./img/thumb/002-1.jpg", title : "미니 의류 건조기", link : "https://link.coupang.com/a/bpRHqm", tag1:"이게바로" , tag2:"공간절약" , tag0:"로켓"},
    {num : "003", img : "./img/thumb/003.jpg", title : "원형 샤워커튼 샤워부스", link : "https://link.coupang.com/a/bpANt0", tag1:"완벽차단" , tag2:"샤워커튼" , tag0:"로켓"},
    {num : "004", img : "./img/thumb/004.jpg", title : "북라이트 무드등", link : "https://link.coupang.com/a/bpNiAm", tag1:"펼치면" , tag2:"은은해지는" , tag0:""},
    {num : "005", img : "./img/thumb/005.jpg", title : "페달식 도어스토퍼", link : "https://link.coupang.com/a/bpNlyF", tag1:"손대신" , tag2:"발로" , tag0:"로켓"},
    {num : "006", img : "./img/thumb/", title : "인체모형 보드게임", link : "https://link.coupang.com/a/bpTa44", tag1:"" , tag2:"" , tag0:""},
    {num : "007", img : "./img/thumb/", title : "펀치킹 뿅망치 스피드게임", link : "https://link.coupang.com/a/bpTb5O", tag1:"" , tag2:"" , tag0:""},
    {num : "008", img : "./img/thumb/", title : "GIIKER 창의력 발달 게임", link : "https://link.coupang.com/a/bpTcQQ", tag1:"" , tag2:"" , tag0:""},
    {num : "009", img : "./img/thumb/", title : "스릴팡 폭탄돌리기 게임", link : "https://link.coupang.com/a/bpTdnC", tag1:"" , tag2:"" , tag0:""},
    {num : "010", img : "./img/thumb/", title : "심장이 쫄깃해지는 풍선 복불복게임", link : "https://link.coupang.com/a/bpTelp", tag1:"" , tag2:"" , tag0:""},
    {num : "011", img : "./img/thumb/", title : "상어를 조심해! 복불복 게임", link : "https://link.coupang.com/a/bpTeBZ", tag1:"" , tag2:"" , tag0:""},
    {num : "012", img : "./img/thumb/", title : "샤크룰렛 복불복게임", link : "https://link.coupang.com/a/bpTeSe", tag1:"" , tag2:"" , tag0:"", },
    {num : "013", img : "./img/thumb/013.jpg", title : "1+1 셀프 롤러 마사지기", link : "https://link.coupang.com/a/bpXTFm", tag1:"1+1 으로" , tag2:"시원하게" , tag0:""},
    {num : "013-1", img : "./img/thumb/013-1.jpg", title : "셀프 롤러 마사지기", link : "https://link.coupang.com/a/bpXVaa", tag1:"어우" , tag2:"시원해" , tag0:"로켓"},
    {num : "013-2", img : "./img/thumb/013.jpg", title : "주무르넥 셀프 롤러 마사지기", link : "https://link.coupang.com/a/bpYelN", tag1:"어우" , tag2:"시원해" , tag0:"로켓"},
    {num : "014", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "015", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "016", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "017", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "018", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "019", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "020", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "021", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "022", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "023", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "024", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "025", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "026", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "027", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "028", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "029", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "030", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "031", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "032", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "033", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "034", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "035", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "036", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "037", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "038", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "039", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "040", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "041", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "042", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "043", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "044", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "045", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "046", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "047", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "048", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
    {num : "049", img : "./img/thumb/", title : "", link : "", tag1:"" , tag2:"" , tag0:""},
]
// itemDB의 각 항목을 HTML 형식에 맞게 itemContainer에 추가합니다.
const reversedItemDB = itemDB.slice().reverse();
reversedItemDB.forEach(item => {
    if (item.img === "./img/thumb/") {return;}

    const itemElement = document.createElement('a');
        itemElement.href = item.link;
        itemElement.classList.add('item', 'box-type-3');
        // a
    const itemLeft = document.createElement('div');
        itemLeft.classList.add('item-l');
        // a>.item-l
    const imgElement = document.createElement('img');
        imgElement.src = item.img;
        imgElement.alt = "product thumbnail";
        imgElement.classList.add('item-img');
        itemLeft.appendChild(imgElement);
        //a>.item-l>.item-img
    const itemRight = document.createElement('div');
        itemRight.classList.add('item-r');
        // a>.item-r
    const tagContainer = document.createElement('div');
        tagContainer.classList.add('tag-container');
        // .tag-container
    const tags = [item.tag1, item.tag2, item.tag0];
        tags.forEach((tag, index) => {
            if (tag !== "") {
                const tagElement = document.createElement('div');
                tagElement.classList.add('tag');
                tagElement.textContent = tag;
                if (index === 1) {
                    // tag2의 배경색을 랜덤으로 지정합니다.
                    const randomColor = getRandomColor();
                    tagElement.style.backgroundColor = randomColor;
                    // 배경색에 따라 글자색을 조정합니다.
                    const textColor = getTextColor(randomColor);
                    tagElement.style.color = textColor;
                }
                if (tag === "쿠팡") {
                    tagElement.classList.add('tag-coupang');
                } else if (tag === "알리") {
                    tagElement.classList.add('tag-ali');
                } else if (tag === "로켓") {
                    tagElement.classList.add('tag-rocket');
                    tagElement.textContent = tag + "🚀";
                }
                tagContainer.appendChild(tagElement);
            }
        });
        // .tag-container>.tag*3

    const itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = `${item.num}. ${item.title}`;
        //.item-name
        itemRight.appendChild(tagContainer);
        itemRight.appendChild(itemName);

        itemElement.appendChild(itemLeft);
        itemElement.appendChild(itemRight);

        itemContainer.appendChild(itemElement);
});

// 랜덤한 색상을 생성하는 함수
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    color = color + 'a1';
    return color;
}
// 배경색에 따라 글자색을 조정하는 함수
function getTextColor(bgColor) {
    // 배경색을 rgba에서 RGB로 변환합니다.
    let rgbColor = bgColor.substring(0, 7); // alpha 값 제거
    const r = parseInt(rgbColor.substring(1, 3), 16);
    const g = parseInt(rgbColor.substring(3, 5), 16);
    const b = parseInt(rgbColor.substring(5, 7), 16);
    // 밝기 계산
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    // 밝기에 따라 글자색 결정
    return brightness > 125 ? '#000000' : '#ffffff';
}


{/* <a href="https://s.click.aliexpress.com/e/_DmgVial" class="item box-type-3">
    <div class="item-l">
        <img src="./img/thumb/002.jpg" alt="product thumbnail" class="item-img"></img>
    </div>
    <div class="item-r">
        <div class="tag-container">
            <div class="tag">이게바로</div>
            <div class="tag" style="background-color: rgb(252, 195, 178);">공간절약</div>
            <div class="tag" style="background-color: rgb(255, 98, 0); color:#fff;">알리</div>
        </div>
        <span class="item-name">002. 공간절약 건조기</span>
    </div>
</a> */}