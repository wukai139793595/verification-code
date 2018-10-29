(function () {
    var oCanvas = document.getElementsByTagName('canvas')[0];
    var oReflash = document.getElementsByClassName('reflash')[0];
    var oSubmit = document.getElementsByClassName('submit')[0];
    var oInput = document.getElementsByTagName('input')[0];
    var oHintImg = document.getElementsByClassName('hint_img')[0];
    var oHintWord = document.getElementsByClassName('hint_word')[0];
    var ctx = oCanvas.getContext('2d');
    var canvasArr = '';
    // var wordArr = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var wordArr = [];
    initArr(wordArr);
    console.log(wordArr)
    function initArr(arr) {
        for(let i = 48; i < 58 ; i++){
            arr.push(String.fromCharCode(i))
        }
        for(let i = 65; i < 91 ; i ++){
            arr.push(String.fromCharCode(i))
        }
        for(let i = 97; i < 123 ; i ++){
            arr.push(String.fromCharCode(i))
        }
    }
    function randWord(arr) {
        var str = '';
        for(let i = 0; i < 6; i++) {
            str += arr[Math.floor(Math.random()*62)];
        }
        return str;
    }
    function reflash() {
        canvasArr = randWord(wordArr);
        ctx.clearRect(0,0,300,80);
        ctx.font = '60px Roboto Slab';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.setTransform(1, -0.12, 0.6, 1.2, 20, 30);
        ctx.fillText(canvasArr, 110, 60);
    }
    reflash();
    oReflash.onclick = function (e) {
        e = e || window.event;
        reflash();
    }
    oSubmit.onclick = function (e) {
        e = e || window.event;
        if(oInput.value.toUpperCase() == canvasArr.toUpperCase()) {
            oHintImg.style.backgroundImage = 'url("./images/true.png")';
            oHintImg.style.display = 'inline-block';
            setTimeout(function () {
                location.href = 'https://www.baidu.com'
            }, 1000)
        }else{
            console.log(111)
            oHintImg.style.backgroundImage = 'url("./images/false.png")';
            oHintImg.style.display = 'inline-block';
            oHintWord.style.display = 'inline-block';
            reflash();
        }
        e.preventDefault();
    }
})()