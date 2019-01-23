//添加 offset 类
!function(){
let specialTags = document.querySelectorAll('[data-x]');
 for(let i = 0;i<specialTags.length;i++){
        specialTags[i].classList.add('offset');
}

findClosestAndRemoveOffset();
window.addEventListener('scroll',function(x){
    findClosestAndRemoveOffset();
})


/* helper */
function findClosestAndRemoveOffset(){
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for(let i = 0;i<specialTags.length;i++){
        if(Math.abs(specialTags[i].offsetTop) - scrollY < Math.abs(specialTags[minIndex].offsetTop - scrollY)){
            minIndex = i;
        }
    }

    //minIndex就是离窗口顶部最近的元素 移除offset
    specialTags[minIndex].classList.remove('offset')
    var id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#' + id + '"]');
    let li = a.parentNode;
    let anm = li.parentNode.children;
    for(let i=0;i<anm.length;i++){
        anm[i].classList.remove('highlight');
    }
    
    li.classList.add('highlight');
}
let liTags = document.querySelectorAll('nav.menu > ul > li');

for(let i = 0;i<liTags.length;i++){
    liTags[i].onmouseenter = function(x){
    x.currentTarget.classList.add('active');
   }
   liTags[i].onmouseleave = function(x){
    x.currentTarget.classList.remove('active');
   }
}
}.call()