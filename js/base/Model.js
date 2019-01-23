window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init: function(){
            var APP_ID = 'eMTLuvNGJSCy3oz06DIlFEc3-gzGzoHsz'
            var APP_KEY = '0zwk4yBrHTeVgNtulEmdjNh3'
             AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch: function(){
            var query = new AV.Query(resourceName);
            return query.find()  // promise 对象
        },
        save: function(object){
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        } 
    }
}