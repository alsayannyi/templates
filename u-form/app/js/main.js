
let viewportDim = {
    height: function() {
        let viewportH = window.innerHeight;
        return viewportH;
    },
    width: function() {
        let viewportW =  document.body.clientWidth || window.innerWidth ;
        return viewportW;
    },
    setTextParam: function () {
        
        let x =  0.37/ this.height();
        let y = 0.49749 / this.width();
        // let y = 0.6 / this.width();
        let transformScale = document.getElementById('clip-00').style.transform = "scale(" + x+ "," + y+")";
        let video = document.getElementById('videoText');
        let h = - video.offsetHeight / 2 + "px";
        video.style.transform = "translateY(-125px)";
        return transformScale;
     },
     setTextParam2: function () {
        let parentH = document.getElementById('videoPapa').offsetHeight ;
        let parentW = document.getElementById('videoPapa').offsetWidth ;
        let video = document.getElementById('videoText');
        let margin = window.innerWidth - document.getElementById('videoPapa').offsetWidth ;
        const  x =  (1 - 1/ (parentW + margin))/ 1280;
        const y = (1  / 720) * ( 1/parentH )*100;
        console.log(x, y);
        // document.getElementById('videoPapa').style.height = document.getElementById('videoText').offsetHeight /2 + "px";
        let transformScale = document.getElementById('clip-00').style.transform = "scale(" +x+ "," + y+")";
        // debugger;
        // parentH.style.height = document.getElementById('videoText').offsetHeight /2 + "px";
        // let delta = (document.getElementById('videoPapa').offsetHeight - document.getElementById('videoText').offsetHeight);
        // console.log(delta);
        // video.style.transform = "translateY(" + delta/2 + "px)";
        document.getElementById('videoPapa').style.height = document.getElementById('videoText').offsetHeight /2 + "px";
        return transformScale;
     },
     setparentHeight: function() {
       let newHeight = document.getElementById('videoPapa').style.height;
       newHeight = document.getElementById('videoText').offsetHeight /2 + "px";
       return newHeight;
     }
}
console.log('test done2');
viewportDim.setTextParam2()

let liSwitcher = document.querySelectorAll('.h-switcher li');
function showForm() {
    let trigger = this.className;
    let info = document.getElementById('noForm');
    let form = document.getElementById('privatePerson');
    let sibling = this.nextElementSibling; 
    if ( trigger!== "f-active" ) {
        sibling.classList.remove('f-active');
        this.className = "f-active";
        info.classList = "el-hidden";
        form.classList = "h-grid";
    }
}
function hideForm() {
    let trigger = this.className;
    let form = document.getElementById('privatePerson');
    let info = document.getElementById('noForm');
    let sibling = this.previousElementSibling; 
    if ( trigger!== "f-active" ) {
        sibling.classList.remove('f-active');
        this.className = "f-active";
        form.classList = "h-grid el-hidden";
        info.className ="";
    }
}
liSwitcher[0].addEventListener('click',showForm, false );
liSwitcher[1].addEventListener('click',hideForm, false );

// handling Events on servive btns
let btn1 = document.getElementById('serviceBtn1');
let btn2 = document.getElementById('serviceBtn2');
let btn3 = document.getElementById('serviceBtn3');
let btn4 = document.getElementById('serviceBtn4');

function onBtnClick(activeBtn, unactiveBtn, unactiveBtn2, unactiveBtn3, setElemStyles ){
    let curContext = event.currentTarget;
    activeBtn.classList.add('active');
    deactiveBtn(unactiveBtn);
    deactiveBtn(unactiveBtn2);
    deactiveBtn(unactiveBtn3);
    addActiveStyles(curContext);
}

function addActiveStyles(btnObj) {
    btnObj.children[0].classList.add('active-icon');
    btnObj.children[1].classList.add('active-title');
    console.log('style1');
    // fill-in color for svg element
    // btnContext.children[0].firstChild.classList.add()
}
 
function deactiveBtn(btnName) {
    btnName.classList.remove('active');
    btnName.children[0].classList.remove('active-icon');
    btnName.children[1].classList.remove('active-title');
}

btn1.addEventListener("click", event => {
    let currentEl = event.currentTarget;
    document.getElementById('fin-wrapper').classList.remove('active-state');
    document.getElementById('no-details').classList.add('el-visible'); 
    this.onBtnClick(btn1, btn2, btn3, btn4, currentEl.addActiveStyles);
})
btn2.addEventListener("click", event => {
    let currentEl = event.currentTarget;
    document.getElementById('fin-wrapper').classList.add('active-state');
    document.getElementById('no-details').classList.remove('el-visible'); 
    this.onBtnClick(btn2, btn1, btn3, btn4, currentEl.addActiveStyles);
})
btn3.addEventListener("click", event => {
    let currentEl = event.currentTarget;
    document.getElementById('fin-wrapper').classList.remove('active-state');
    document.getElementById('no-details').classList.add('el-visible'); 
    this.onBtnClick(btn3, btn1, btn2, btn4, currentEl.addActiveStyles);
})
btn4.addEventListener("click", event => {
    let currentEl = event.currentTarget;
    document.getElementById('fin-wrapper').classList.remove('active-state');
    document.getElementById('no-details').classList.add('el-visible'); 
    this.onBtnClick(btn4, btn1, btn2, btn3, currentEl.addActiveStyles);
})

// handling Events on finance-service btns

let finBtn1 = document.getElementById('financeBtn1');
let finBtn2 = document.getElementById('financeBtn2');
let finBtn3 = document.getElementById('financeBtn3');
let finBtn4 = document.getElementById('financeBtn4');
let finBtn5 = document.getElementById('financeBtn5');

function onFinBtnClick(activeBtn, unactiveBtn1, unactiveBtn2, unactiveBtn3, unactiveBtn4, setElemStyles ){
    
    let curContext = event.currentTarget;
    activeBtn.classList.add('active');
    deactiveFinBtn(unactiveBtn1);
    deactiveFinBtn(unactiveBtn2);
    deactiveFinBtn(unactiveBtn3);
    deactiveFinBtn(unactiveBtn4);
    addActiveStyles2(curContext);
}
function addActiveStyles2(btnObj) {
    btnObj.classList.add('fin-active')
    btnObj.children[0].classList.add('active-icon');
}
function deactiveFinBtn(btnName) {
    btnName.classList.remove('active', 'fin-active');
    btnName.children[0].classList.remove('active-icon');
}

finBtn1.addEventListener("click", event => {
    let currentEl = event.currentTarget;
    document.querySelector('form.credit-card').classList.remove('active-state');
    this.onFinBtnClick(finBtn1, finBtn2, finBtn3, finBtn4, finBtn5, currentEl.addActiveStyles2);
})
finBtn2.addEventListener("click", event => {
    let currentEl = event.currentTarget;
    document.querySelector('form.credit-card').classList.add('active-state');
    this.onFinBtnClick(finBtn2, finBtn1, finBtn3, finBtn4, finBtn5, currentEl.addActiveStyles2);
})
finBtn3.addEventListener("click", event => {
    let currentEl = event.currentTarget;
    document.querySelector('form.credit-card').classList.remove('active-state');
    this.onFinBtnClick(finBtn3, finBtn1, finBtn2, finBtn4, finBtn5, currentEl.addActiveStyles2);
})
finBtn4.addEventListener("click", event => {
    let currentEl = event.currentTarget;
    document.querySelector('form.credit-card').classList.remove('active-state');
    this.onFinBtnClick(finBtn4, finBtn1, finBtn2, finBtn3, finBtn5, currentEl.addActiveStyles2);
})
finBtn5.addEventListener("click", event => {
    let currentEl = event.currentTarget;
    document.querySelector('form.credit-card').classList.remove('active-state');
    this.onFinBtnClick(finBtn5, finBtn1, finBtn2, finBtn3, finBtn4, currentEl.addActiveStyles2);
})

// for (let i=1; i<6; i++) {
//     if (i != 2) {
//         `finBtn${i}`.addEventListener("click", function (event) {
//             let currentEl = event.currentTarget;
//             document.querySelector('form.credit-card').classList.remove('active-state');
//             this.onBtnClick(btn1, btn2, btn3, btn4, btn5, currentEl.addActiveStyles);
//         })
//     }
// }