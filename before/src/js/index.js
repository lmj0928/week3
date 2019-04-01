require.config({
	paths:{
		"mui":"libs/mui.min"
	}
})

require(["mui"],function(mui){
	function init(){
		getData()
		getUsr()
	}
	
	function getData() {
			mui.ajax('/getData', {
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				success: function(data) {
					var str = '';	
					data.data.forEach(function(item) {
						str += `<p>${item.title}</p>`
					})
				document.querySelector('.tabh').innerHTML=str;
					var lis=[...document.querySelectorAll('.tabb dl')];
					lis.forEach(function(i, v) {
						i.onclick = function() {
							var arr = '';
							if (v == 0) {
								data.data[0].content.forEach(function(i) {
									arr += `	<dl>
									<p>${i.name}</p>
							<span>${i.says}</span>
							</dl>
											`
								})
							} else if(v==1){
								data.data[1].content.forEach(function(i) {
									arr += `<dl>
												<p>${i.name}</p>
							<span>${i.says}</span>
											</dl>`
								})
							}
							else if(v==2){
								data.data[2].content.forEach(function(i) {
									arr += `<dl>
												<p>${i.name}</p>
							<span>${i.says}</span>
											</dl>`
								})
							}
							else if(v==3){
								data.data[3].content.forEach(function(i) {
									arr += `<dl>
												<p>${i.name}</p>
							<span>${i.says}</span>
											</dl>`
								})
							}
							
							document.querySelector('.tabb').innerHTML=arr;
						}
					})
					
				}
			});
		}

		function getUsr() {
			mui.ajax('/getUsr', {
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				success: function(data) {
					var str = '';
					data.data.forEach(function(item) {
						item.content.forEach(function(file) {
							str += `<dl>
												<p>${file.name}</p>
							<span>${file.says}</span>
											</dl> `
						})
					})
				document.querySelector('.tabb').innerHTML=str;
				}
			});
		}
	init()
})






	