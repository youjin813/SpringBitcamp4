function Router(x) {
	sessionStorage.setItem('context',x);
	sessionStorage.setItem('javascript',x+'/resources/js');
	sessionStorage.setItem('style',x+'/resources/css');
	sessionStorage.setItem('image',x+'/resources/img');
	//패턴없는, 디클러레이션 호출 전 작동 안함
	return{
		context: ()=>{return sessionStorage.getItem('context');},
		javascript: ()=>{return sessionStorage.getItem('javascript');},
		style: ()=>{return sessionStorage.getItem('style');},
		image: ()=>{return sessionStorage.getItem('image');}
	};
}
//컨트롤러 느낌