funcs["update"]=function(){
  var fs=require('fs')
  require('child_process').exec("cd Avatar-L & c:\\progra~1\\git\\bin\\git pull origin master & cd..", function(err, stdout, stderr){
    fs.writeFileSync("m.txt", stdout.toString() + stderr.toString());
  });
}
funcs["download"] = function(r){
   request("http://www.baidu.com/s?wd=" + r, function(err, resp, body){

	if(!err && resp.statusCode === 200){
console.log(body)
		var a = body.toString().match(/class="c-btn c-btn-primary OP_LOG_BTN" href="([^"]*?)" target="_blank">/)
		if(a){
			fs.writeFileSync("m.txt", a[1]);
			return;
		}
		var a = body.toString().match(/href="([^"]*?)" class="c-btn c-btn-mini/)
		if(a){
			fs.writeFileSync("m.txt", a[1]);
			return;
		}
			fs.writeFileSync("m.txt", "I got the wrong avatar. Ask the big avatar");		
	}
   })
}
