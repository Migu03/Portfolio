function loadScript(src,callback){
    const script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        callback(script);
    }
    script.onerror = function(){
        callback(new Error('Loi roi hehee'))
    }
    document.head.append(script);
}
loadScript("https://www.pinterest.com/",function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})