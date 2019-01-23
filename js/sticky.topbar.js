!function(){
    var view = View('#topNavBar')
    var controller = {
        view: null,                  //需要一个view         填充它
        init: function(view){       //需要一个初始化函数
            this.view = view        
            this.bindEvents()       //次函数访问不到view  需要下面的事件来中转  传不进去
            //this.bindEvents.call(this)
        },
        bindEvents:function(){      //绑定事件   对this进行操作
            var view = this.view
            window.addEventListener('scroll',(x) =>{
                if(window.scrollY > 0){
                    this.active()
                }else{
                    this.deactive()
                }
            })
        },
        active: function(){
            this.view.classList.add('sticky');
        },
        deactive: function(){
            this.view.classList.remove('sticky');
        }
    }
     controller.init(view)                  //入口     进入到上面的.view
    //controller.init.call(controller,view)
}.call()


// !function(){
//     var person = {
//         name: 'frank',
//         age:18
//     }
//     window.ggGrowUp = function(){
//         person.age += 1
//         return person.age
//     }
// }.call()
/*
1.立即执行函数使得person无法被外部访问
2.闭包使得匿名函数可以操作person
3.window.ggGrowUp保存了匿名函数的地址
4.任何地方都可以使用window.ggGrowUp
=>任何地方都可以使用window.ggGrowUp操作person，
  但是不能直接访问person
*/