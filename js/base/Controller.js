window.Controller = function(options){
    var init = options.init
   

    let object =  {
        view: null,
        model: null,                  //需要一个view         填充它
        init: function(view, model){       //需要一个初始化函数
            this.view = view  
            this.model = model   
            this.model.init()   
            init.call(this, view, model)    //这是 options.init
            options.bindEvents.call(this)       //次函数访问不到view  需要下面的事件来中转  传不进去
            //this.bindEvents.call(this)
            
        }, 
    }
    for(let key in options){
        if(key !== 'init'){
            object[key] = options[key]
        }
    }
    return object
}