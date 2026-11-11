'use strict';
let potato = 0;
let carrot = 0;
let sweetpotato = 0;
let turnip = 0;
let textnonetime;
let lotnonetime;
let btntime;
const stomach = [];
const potatonum = document.getElementById('potato')
const sweetpotatonum = document.getElementById('sweetpotato')
const carrotnum = document.getElementById('carrot')
const turnipnum = document.getElementById('turnip')

function texton() {
    document.getElementById('text').classList.add('text');
    document.getElementById('text').classList.remove('textnone');
}; //id="text"にclass="text"を加えて"textnone"を削除

function textnone() {
    if (document.getElementById('text').textContent === '') {
        document.getElementById('text').classList.add('textnone');
        document.getElementById('text').classList.remove('text');
    };
} //テキストが無いときにid="text"のclass="text"を削除して"textnone"を加える

function lottery() {
    let number = Math.random();
    let num1;
    if (number < 0.07) {
        num1 = 3
    } else if (number < 0.2) {
        num1 = 2
    } else if (number < 0.5) {
        num1 = 1
    } else {
        num1 = 0
    }
    if (num1 === 0 && potato < 99) {
        potato += 1;
        let potatoResult = String(potato).padStart(2, '0');
        potatonum.textContent = potatoResult;
    } else if (num1 === 1 && carrot < 99) {
        carrot += 1;
        let carrotResult = String(carrot).padStart(2, '0');
        carrotnum.textContent = carrotResult;
    } else if (num1 === 2 && sweetpotato < 99) {
        sweetpotato += 1;
        let sweetpotatoResult = String(sweetpotato).padStart(2, '0');
        sweetpotatonum.textContent = sweetpotatoResult;
    } else if (num1 === 3 && turnip < 99) {
        turnip += 1;
        let turnipResult = String(turnip).padStart(2, '0');
        turnipnum.textContent = turnipResult;
    }
    return num1;
} // 確率の計算と結果で各ごはん用バスケットに加算

function nekkoResult() {
    let stomachnum = 0
    for (let stomachsum of stomach) {
        stomachnum += stomachsum;
    }
    if (stomachnum > 84) { //激レア成長
        document.querySelector('#nekko').src = 'images/nekkoanime/nekkoResult4.gif'
        document.getElementById('text').textContent = 'ねっこは神々しく育った！'
        document.getElementById('text').insertAdjacentHTML('beforeend', `<p id="retry">また<br>育てる</p>`); //リトライボタンを表示する
        document.getElementById('retry').onclick = function () {
            location.reload();
        };  //リトライボタンを押したらページをリロードする
    } else if (stomachnum > 59 && stomachnum < 85) { //レア成長
        document.querySelector('#nekko').src = 'images/nekkoanime/nekkoResult2.gif'
        document.getElementById('text').textContent = 'ねっこは美味しそうに育った！'
        document.getElementById('text').insertAdjacentHTML('beforeend', `<p id="retry">また<br>育てる</p>`); //リトライボタンを表示する
        document.getElementById('retry').onclick = function () {
            location.reload();
        };  //リトライボタンを押したらページをリロードする
    } else if (stomachnum > 31 && stomachnum < 60) { //ちょいレア成長
        document.querySelector('#nekko').src = 'images/nekkoanime/nekkoResult3.gif'
        document.getElementById('text').textContent = 'ねっこはきれいに育った！'
        document.getElementById('text').insertAdjacentHTML('beforeend', `<p id="retry">また<br>育てる</p>`); //リトライボタンを表示する
        document.getElementById('retry').onclick = function () {
            location.reload();
        };  //リトライボタンを押したらページをリロードする
    } else { //通常成長
        document.querySelector('#nekko').src = 'images/nekkoanime/nekkoResult1.gif'
        document.getElementById('text').textContent = 'ねっこはのびのびと育った！'
        document.getElementById('text').insertAdjacentHTML('beforeend', `<p id="retry">また<br>育てる</p>`); //リトライボタンを表示する
        document.getElementById('retry').onclick = function () {
            location.reload();
        };  //リトライボタンを押したらページをリロードする
    }
};



function stomachfull() {
    texton();
    clearTimeout(textnonetime);
    document.querySelector('#nekko').src = 'images/nekko_sleepy.png'
    document.getElementById('text').textContent = 'お腹がいっぱいのようだ、寝かせてあげる？'
    document.getElementById('text').insertAdjacentHTML('beforeend', `<p id="yesbtn">はい</p>`)

    // stomachが30個の数値を手に入れた時にメッセージとボタン

    document.getElementById('yesbtn').onclick = function () {
        clearTimeout(textnonetime);
        document.getElementById('text').textContent = 'ねっこは寝ている。';
        document.querySelector('#nekko').src = 'images/nekkoanime/nekkosleep.gif'
        setTimeout(function () {
            nekkoResult();
        }, 10000);//はいボタンを押したら10秒後に成長する
    };
};



document.getElementById('potatoBasket').onclick = function () {
    clearTimeout(textnonetime);
    if (potato > 0 && stomach.length < 30) {
        stomach.push(1);
        texton();
        document.getElementById('text').textContent = 'じゃがいもを食べさせた。'
        document.querySelector('#nekko').src = 'images/nekkoanime/nekkofeed.gif'
        textnonetime = setTimeout(function () {
            document.getElementById('text').textContent = '';
            textnone()
            document.querySelector('#nekko').src = 'images/nekkoanime/nekko.gif'
        }, 1500);
        potato--;
        potatonum.textContent = String(potato).padStart(2, '0');
    } else if (stomach.length === 30) {
        stomachfull('text');
    } else {
        texton();
        document.getElementById('text').textContent = 'じゃがいもがない。'
        textnonetime = setTimeout(function () {
            document.getElementById('text').textContent = '';
            textnone();
        }, 1500);
    }
}//じゃがいもをクリックした時にstomachに１収納、カウンターを減らす、０の場合にメッセージ。満腹の時に派生。

document.getElementById('carrotBasket').onclick = function () {
    clearTimeout(textnonetime);
    if (carrot > 0 && stomach.length < 30) {
        stomach.push(2);
        texton();
        document.getElementById('text').textContent = 'にんじんを食べさせた。'
        document.querySelector('#nekko').src = 'images/nekkoanime/nekkofeed.gif'
        textnonetime = setTimeout(function () {
            document.getElementById('text').textContent = '';
            textnone()
            document.querySelector('#nekko').src = 'images/nekkoanime/nekko.gif'
        }, 1500);
        carrot--;
        carrotnum.textContent = String(carrot).padStart(2, '0');
    } else if (stomach.length === 30) {
        stomachfull('text');
    } else {
        texton()
        document.getElementById('text').textContent = 'にんじんがない。'
        textnonetime = setTimeout(function () {
            document.getElementById('text').textContent = '';
            textnone();
        }, 1500);
    }
} //にんじんをクリックした時にstomachに２収納、カウンターを減らす、０の場合にメッセージ。

document.getElementById('sweetpotatoBasket').onclick = function () {
    if (sweetpotato > 0 && stomach.length < 30) {
        clearTimeout(textnonetime);
        stomach.push(3);
        texton();
        document.getElementById('text').textContent = 'さつまいもを食べさせた。'
        document.querySelector('#nekko').src = 'images/nekkoanime/nekkofeed.gif'
        textnonetime = setTimeout(function () {
            document.getElementById('text').textContent = '';
            textnone();
            document.querySelector('#nekko').src = 'images/nekkoanime/nekko.gif'
        }, 1500);
        sweetpotato--;
        sweetpotatonum.textContent = String(sweetpotato).padStart(2, '0');
    } else if (stomach.length === 30) {
        stomachfull('text');
    } else {
        texton();
        document.getElementById('text').textContent = 'さつまいもがない。'
        textnonetime = setTimeout(function () {
            document.getElementById('text').textContent = '';
            textnone();
        }, 1500);
    }
} //さつまいもをクリックした時にstomachに３収納、カウンターを減らす、０の場合にメッセージ。

document.getElementById('turnipBasket').onclick = function () {
    if (turnip > 0 && stomach.length < 30) {
        clearTimeout(textnonetime);
        texton();
        stomach.push(5);
        document.getElementById('text').textContent = '黄金のかぶを食べさせた。'
        document.querySelector('#nekko').src = 'images/nekkoanime/nekkofeed.gif'
        textnonetime = setTimeout(function () {
            document.getElementById('text').textContent = '';
            textnone();
            document.querySelector('#nekko').src = 'images/nekkoanime/nekko.gif'
        }, 1500);
        turnip--;
        turnipnum.textContent = String(turnip).padStart(2, '0');
    } else if (stomach.length === 30) {
        stomachfull();
    } else {
        texton();
        document.getElementById('text').textContent = '黄金のかぶがない。'
        textnonetime = setTimeout(function () {
            document.getElementById('text').textContent = '';
            textnone();
        }, 1500);
    }
} //黄金のかぶをクリックした時にstomachに５収納、カウンターを減らす、０の場合にメッセージ。



document.getElementById('lot_btn').onclick = function () {
    clearTimeout(lotnonetime)
    document.getElementById('lot_btn').classList.add('btnclick');
    document.getElementById('lot_btn').classList.remove('btn');
    let num = lottery();
    let foods = ['N:近くに落ちてたじゃがいも', 'S:畑で採れたにんじん', 'SR:大きなさつまいも', 'SSR:黄金のかぶ',];
    let result = foods[num];
    document.getElementById('lot_food').textContent = result;
    btntime = setTimeout(function () {
        document.getElementById('lot_btn').classList.add('btn');
        document.getElementById('lot_btn').classList.remove('btnclick');
    }, 300);
    lotnonetime = setTimeout(function () {
        document.getElementById('lot_food').textContent = '';
    }, 1500);
} //ガチャ結果の表示




document.getElementById('aboutbtn').onclick = function () {
    document.getElementById('aboutimg').classList.add('aboutopen');
    document.getElementById('aboutimg').classList.remove('about');
} //アプリについての説明を表示


document.getElementById('aboutimg').onclick = function () {
    document.getElementById('aboutimg').classList.add('about');
    document.getElementById('aboutimg').classList.remove('aboutopen');
} //アプリについての説明を閉じる
