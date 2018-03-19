var app = app || {};  //최상위는 한 페이지당 하나
/*app = (()=>{
	var init=x=>{ //init은 최상위에서만
		onCreate();
		setContentView();
	};
	var onCreate=x=>{
		app.router.onCreate(x);
		//기능에 대한 초기화
	};
	var setContentView=()=>{
		$('#wrapper').empty();
		app.algorithm.onCreate();
		//화면
	};
	return { // 클로저 :위 펑션이 오픈된다.
		init : init
}; // JSON
})(); //IIFE[이파이] 즉시 실행 함수 패턴 
//jQuery 에서의 객체 생성
*/
app= (()=>{
	var init=x=>{
		$.getScript(x+'/resources/js/router.js',()=>{	
			$.extend(new Router(x));
			app.algorithm.onCreate();
		})
	};
	return {init:init};
})();

app.algorithm=(()=>{
	var $wrapper,context,algorithm,view;
	var onCreate=()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		algorithm = $.javascript()+'/algorithm.js';
		image = $.image();
		view = $.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
		$.getScript(view,()=>{	
			$wrapper.html(navigation(image));
			$(createButtonNav1st())
			.appendTo($('#div-nav-1st'))
			.click(()=>{
				alert('버튼 클릭');
			});
			$(createButtonLogin())
			.appendTo($('#li-login'))
			.click(()=>{
				alert('로그인 버튼 클릭');
			});	
		});
	};
	return {onCreate:onCreate};
})();
