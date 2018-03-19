var app = app || {};
var route = route || {};
app = (()=>{
	var init=x=>{
		onCreate();
		setContentView();
	};
	var onCreate=x=>{
		route.init(x);
		//기능에 대한 초기화
	};
	var setContentView=()=>{
		alert(route.$());
		$("#wrapper").empty();
		app.algorithm.init();
		//화면
	};
	return { // 클로저 :위 펑션이 오픈된다.
		init : init
}; // JSON
})(); //IIFE[이파이] 즉시 실행 함수 패턴
//jQuery 에서의 객체 생성

app.algorithm=(()=>{
	var init=()=>{
		onCreate();
		setContentView();
	};
	var onCreate=()=>{};
	var setContentView=()=>{
		$("#wrapper").html('<h1>Hello Ajax</h1>');
	};
	return {init:init};
})();

route = (()=>{
	var init=x=>
		{sessionStorage.setItem('x',x);
		};
	var onCreate=()=>{};
	var setContentView=()=>{};
	var $ =() =>{
		return sessionStorage.getItem('x');
		};
	return {init:init,$:$};
})();

//컨트롤러 느낌
