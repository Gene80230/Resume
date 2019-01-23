!function(){
  var view = View('section.messages')

  var model = Model({resourceName:'Message'})
  
  var controller = Controller({
    messageList: null,
    form: null,
    init: function(view, model){
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.loadMessages()
    },
    loadMessages: function(){
      this.model.fetch().then(
         (messages) => {
          let array = messages.map((item) => item.attributes)
          array.forEach((item)=>{
            let li = document.createElement('li')
            li.innerText = `${item.name}: ${item.content}`
            this.messageList.append(li)
        })
      
      // 成功获得实例
      }
    )
  },
  bindEvents: function(){
      
      this.form.addEventListener('submit',(e) => {
      e.preventDefault()
      this.saveMessage()
    })
  },
  saveMessage: function(){
    let myForm = this.form
    var name = myForm.querySelector(`input[name=name]`).value
    var content = myForm.querySelector('input[name=content]').value
    this.model.save({'name': name,'content': content}).then(function(object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name} : ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        myForm.querySelector(`input[name=content]`).value = ''
        console.log(object)
      })
  }
  })
  

controller.init(view, model)

}.call()

// //创建一个TestObject的项目
// var TestObject = AV.Object.extend('TestObject');
// //在项目中创建一行数据
// var testObject = new TestObject();
// //给它的words添加入相应的内容，并保存
// //如果保存成功就运行alert（‘ ’）
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })
