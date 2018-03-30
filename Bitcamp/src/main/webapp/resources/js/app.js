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
app= {init:x=>{
		$.getScript(x+'/resources/js/router.js',()=>{	
			$.extend(new Router(x));
			app.algorithm.onCreate();	
			app.member.onCreate();
		})
	}};
app.home={
		move : x=>{
			$.getScript(x,()=>{  
			$('#li-home').empty();
			$(createATag({id:'a-home',link:'#',val:createSpan({id:'',clazz:'glyphicon glyphicon-home',val:'HOME'})})).appendTo('#li-home')
			.on('click',()=>{
				alert('홈 클릭');
				app.member.onCreate();
			});
		});
	}
}
app.nav=(x=>{
	var $wrapper,context,view;
	var onCreate=()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		image = $.image();
		view = $.javascript()+'/view.js';
		setContentView();
		app.home.move(view);
	};
	var setContentView=()=>{
		
		(createATag({id:'a-board',val:createSpan({
			id:'span-board',
			clazz:'glyphicon-user',
			val:'게시판'})}))
		.appendTo($('#li-board'))
		.click(()=>{
			app.board.onCreate();
			$('#span-board').text('글쓰기');
			$('#a-board').on('click',e=>{
				e.preventDefault();
				$.getScript(view,()=>{
					$('#container').html(boardWrite({
						id:'board-write',
						clazz:'board-write'
					}));
					$(createAtag({
						id:'a-submit',
						val:'전송'
					})).appendTo('#div-btn-group')
					.on('click',e=>{
						e.preventDefault();
					});
					$(createAtag({
						id:'a-cancle',
						val:'취소'
					})).appendTo('#div-btn-group')
					.on('click',e=>{
						e.preventDefault();
					});
					$(createAtag({
						id:'a-fileupload',
						val:'파일추가'
					})).appendTo('#div-btn-group')
					.on('click',e=>{
						e.preventDefault();
						$.magnificPopup.open(
						{item:{src:boardWrite({clazz:'popup'})},type : 'inline'},0);
					});
					var jason = {clazz:'glyphicon-user',val:'로그인'}
					var jason ={id :'a-login',link:'',val :createSpan(jason)};
					$(createATag(jason))
					.appendTo($('#li-login'))
					.click(()=>{alert('로그인 버튼 클릭');});	
					$(createButtonNav1st())
					.appendTo($('#div-nav-1st'))
					.click(()=>{
						alert('버튼 클릭');
						getScript(view,()=>{
							login();
						})
					});
				});

			});
		});

	}
});
app.board=(x=>{
	var $wrapper,context,view;
	var onCreate=()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		image = $.image();
		view = $.javascript()+'/view.js';
		setContentView();
	};
	var setContentView = ()=>{
		articles(1);
	};
	var articles =x=>{
		$.getJSON(context+'/articles/'+x,d=>{
			$.getScript(view,()=>{	
    			$('#content').empty();
    			$(createTable({
    				 id:'articles',
    				 clazz : 'table table-striped'
    			})).appendTo('#content');
    			$(createTh({
    				  list :['글번호','제목','작성자','작성일','수정/삭제'],
    				  clazz : ''
    			})).appendTo('#articles');
    			$(createTr({
    				  list: d.list,
                      clazz: '',
                      jason:{
                    	  list:'',
                    	  clazz:'flag-'
                      }
    			})).appendTo('#articles');  
    			$('.flag-9')
    				.html('<a href="#">수정</a><a href="#">삭제</a>');
    			$('#articles').attr('style','with:80%;magin:0 auto');
    			//
    			$(createNav({id:'nav-page',clazz:''})).appendTo('#content');
    			$(createUL({id:'ul-page',clazz:'pagenation'})).appendTo('#nav-page');
    			var t = '';
    			if(d.page.prevBlock){
    				t+= '<li>'
    					+'<a href="#" onclick="app.board.articles('+d.page.prevPage+');return false;" aria-label="Previous">'
    					+'<span aria-hidden="true">&laquo;</span>'
    					+'</a>'
    					+'</li>';
    					
    				/*createLI({id:'li-prev'})
    				.appendTo('#ul-page');*/
    				
    			}
    			for(var i=d.page.pageStart;i<=d.page.pageEnd;i++){

    				if(i===d.page.pageNum){
    					t+='<li class="active">'
    						+'<a style="color: red" onclick="app.board.articles('+i+')" href="#">'+i+'</a></li>';
    					
    				}else{
    					t+='<li>'
    					+	'<a href="#"'
    						+'onclick="app.board.articles('
    						+i
    					+');return false;"'
    					+'>'+i+'</a></li>';
    				}}
    				if(d.page.nextBlock){
    					t+='<li><a href="#" onclick="app.board.articles('+d.page.nextPage+');'
    					+'return false;" aria-hidden="true">&raquo;</span></a></li>';
    				}
    				$('#ul-page').html(t);
    			});
    		});
		}
		return {onCreate:onCreate,articles:articles};
})();

app.board2={
	articles : x =>{
		alert('전달받은 값:'+x);
		//싱글톤 이름이 없음 충돌날 일 없음 한번 쓰고 사라짐 
		//$.ajax({});  
       
		//에러가 날 일이 없음 무조건 성공하는 로직
        $.getJSON(x.context+'/articles'+x.pageNum,d=>{
    		$.getScript(x.context+'/resources/js/router.js',()=>{	
    			$('#content').empty();
    			$(createTable({
    				 id:'articles',
    				 clazz : ''
    			})).appendTo('#content');
    			$(createTh({
    				  list :['글번호','제목','작성자','작성일','수정/삭제'],
    				  clazz : ''
    			})).appendTo('#articles');
    			$(createTr({
    				  list: d.list,
                      clazz: '',
                      jason:{
                    	  list:'',
                    	  clazz:'flag-'
                      }
    			})).appendTo('#articles');  
    			$('.flag-9')
    				.html('<a href="#">수정</a><a href="#">삭제</a>');
    			$('#articles').attr('style','with:80%;magin:0 auto');
    			//
    			$(createNav({id:'nav-page',clazz:''})).appendTo('#content');
    			$(createUL({id:'ul-page',clazz:'pagination'})).appendTo('#nav-page');
    			var t = '';
    			if(d.page.nextBlock){
    				t+= '<li>'
    					+'<a href="#" onclick="app.board.articles('+d.page.prevPage+')";return false>'
    					+'<span aria-hidden="true">&laquo;</span>'
    					+'</a>'
    					+'</li>';
    					
    				createLI({id:'li-prev'})
    				.appendTo('#ul-page');
    				
    			}
    			for(var i=d.page,pageStart;i<=d.page.pageEnd;i++){

    				if(i==d.page.pageNum){
    					t+='<a style="color: red" href="#"><font>'+i+'</font></a>'
    					
    				}else{
    					t+='<a href="#">'
    						+'onclick="app.board.articles('
    						+{context:x.context,pageNum:i}
    					+');return false;"'
    					+'>'+i+'</a>'
    				}
    				if(d.page.nextBlock){
    					t+='<li><a href="#" onclick="app.board.articles('+d.page.nextPage+');'
    					+'return false;" aria-hidden="true">&raquo;</span></a></li>';
    				}
    				$('#ul-page').html(t);
    			}
    		});
        });
	}
};
app.member=(()=>{
	var $wrapper,context,algo,image,view;
	var onCreate=()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		image = $.image();
		view = $.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$('#container').remove();
		$.getScript(view,()=>{
			$(createDiv({id:'container',clazz:'login-container'}))
			.appendTo($wrapper);
			$(createDiv({id:'content',clazz:'login-content'}))
			.appendTo('#container');
			$(loginOutBox('login-outbox'))
			.appendTo('#content');
			$(loginInBox('login-inbox'))
			.appendTo('#inbox');
			$(createButton({id:'login-btn',clazz:'default',val:'로그인'}))
			.appendTo('#td-login-btn')
			.on('click',e=>{
				e.preventDefault();
			login();
			});
		})
	};
	var login=()=>{
		var id = $('#input-userid').val();
		var jason={
				'pass' : $('#input-password').val()
				};
		alert('로그인 버튼 클릭');
		$.ajax({
			url : context+'/members/'+id+'/login',
			method : 'POST',
			data : JSON.stringify(jason),
			dataType : 'json',
			contentType : 'application/json',
			success : x=>{
				alert('로그인 성공 여부'+x.success);
				if(x.success==='1'){
					var id = x.user.id;
					alert('로그인 성공 아이디 :' +x.user.id);
					//var jason = x.user;
					var jason = {
							id : x.user.id,
							pass : x.user.pass
					};
					mypage(jason);
				}else{
					alert('로그인 실패 아이디 :' +x.user.id);
				}
			},
			error: (x,h,m)=>{
				alert('로그인에서 에러 발생 x='+x+'h ='+h+'m='+m);
			}	
		});//안쪽에 잭슨 객체
	};
		var mypage=x=>{//x는 mypage가 가지고 있는 모든 정보 jason 객체
	         $.getScript(view,()=>{    
	     		alert('마이페이지를 구성하기위한 정보'+x.id);
	                 $('#content').html(createMyPageTab('table-mypage','table-mypage-class'))
	                 .attr('style','border:solid black 2px; width:55%;');
	                 $('#b1').remove();
	                    $('#c1').remove();
	                    $('#d1').remove();
	                    $('#e1').remove();
	                    $('#a1').attr('colspan',5);
	                    $('#a3').remove();
	                    $('#a1').html(createHTag({num:'1',val:'MY PAGE'}));
	                    $('#a2').attr('rowspan',2);
	                    $('#b2').html(createHTag({num:'2',val:'ID'}));
	                    $('#b3').html(createHTag({num:'2',val:'PASS'}));
	                    $('#b4').html(createHTag({num:'2',val:'주민번호'}));
	                    $('#b5').html(createHTag({num:'2',val:'이름'}));
	                    $('#c5').html(createHTag({num:'2',val:x.name}));
	                    $('#c2').html(createHTag({num:'2',val:x.id}));
	                    $('#c3').html(createHTag({num:'2',val:x.pass}));
	                    $('#c4').html(createHTag({num:'2',val:x.ssn}));
	                    $('#d2').html(createHTag({num:'2',val:'EMAIL'}));
	                    $('#d3').html(createHTag({num:'2',val:'ADDRESS'}));
	                    $('#d4').html(createHTag({num:'2',val:'PHONE'}));
	                    $('#e2').html(createHTag({num:'2',val:x.email}));
	                    $('#e3').html(createHTag({num:'2',val:x.addr}));
	                    $('#e4').html(createHTag({num:'2',val:x.phone}));   
	                });
	     };
	     return{onCreate:onCreate};
	})();
app.algorithm=(()=>{
	var $wrapper,context,algo,view;
	var onCreate=()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		algo = $.javascript()+'/algo.js';
		image = $.image();
		view = $.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view,()=>{
			$wrapper.html(navigation);
			app.nav.onCreate();
			/*$wrapper2.html($(createDiv('content-tab','container'))
                          .attr('style', 'margin-top: 50px;')
                          .append(createHTag('2', '수열 알고리즘'))
                          .append(createAlgoTab()));
                                      
                          */
			var jason ={id :'',link:'',val: '수열'}
			$(createATag(jason))  
			.appendTo($('#li-seq'))
			.click(()=>{
				$(createDiv({id:'content',clazz:'container'})
				.appendTo($wrapper));
				$(createAlgoTab('tab-algo'))
				.appendTo('#content');
				var $right = $('#td-algo-right'),$left = $('#td-algo-left');
				$(createLI({id:'li-arith',clazz:'list-group-item'})).appendTo($left);
				$(createLI({id:'li-switch',clazz:'list-group-item'})).appendTo($left);
				$(createLI({id:'li-geo',clazz:'list-group-item'})).appendTo($left);
				$(createLI({id:'li-fibo',clazz:'list-group-item'})).appendTo($left);
				$(createLI({id:'li-fact',clazz:'list-group-item'})).appendTo($left);
				$(createATag({id:'a-arith',link:'',val:'등차수열의 합'})).appendTo('#li-arith');
				$(createATag({id:'a-switch',link:'',val:'스위치 수열 합'})).appendTo('#li-switch');
				$(createATag({id:'a-geo',link:'',val:'등비수열 합'})).appendTo('#li-geo');
				$(createATag({id:'a-fibo',link:'',val:'피보나치 수열의 합'})).appendTo('#li-fibo');
				$(createATag({id:'a-fact',link:'',val:'팩토리얼 수열의 합'})).appendTo('#li-fact');
				createInputText({id:'input-init-val',clazz:'form-control'})
				.attr('placeholder','초기값 입력').appendTo($right);				
				createInputText({id:'input-limit-val',clazz:'form-control'})
				.attr('placeholder','리미트값 입력').appendTo($right);
				createInputText({id:'input-diff-val',clazz:'form-control'})
				.attr('placeholder','공차 입력').appendTo($right);
				$(createButton({id:'btn-result',clazz:'btn-primary',val:'결과보기'})).appendTo($right)
				.attr('style','margin-top:10px;magin-left:100px;width:200px');
				$(createText('create-result'))
				.text('').appendTo($right);
				$('#btn-result').on('click',()=>{
					var x = $('#input-init-val').val();
					var y = $('#input-limit-val').val();
					var z = $('#input-diff-val').val();
					if(x !== '' && x>0 && y !== '' && y>0 && z !== '' && z>0 ){//validation
						$.getScript(algo,()=>{
							$('#create-result')
							.text('')
							.text(arith(x,y,z));
						});
					}else{
						alert('값을 입력해주세요.');
					}			
				});
				
				$('#a-switch')
				.on('click',()=>{
					$right.empty();
					createInputText({id:'input-init-val',clazz:'form-control'})
					.attr('placeholder','초기값 입력').appendTo($right);
					createInputText({id:'input-limit-val',clazz:'form-control'})
					.attr('placeholder','리미트값 입력').appendTo($right);
					createInputText({id:'input-diff-val',clazz:'form-control'})
					.attr('placeholder','공차 입력').appendTo($right);
					$(createButton({id:'btn-result',clazz:'btn-primary',val:'결과보기'})).appendTo($right)
					.attr('style','margin-top:10px;magin-left:100px;width:200px');
					$(createText('create-result'))
					.text('').appendTo($right);
					$('#btn-result').on('click',()=>{
						var x = $('#input-init-val').val();
						var y = $('#input-limit-val').val();
						var z = $('#input-diff-val').val();
						if(x !== '' && x>0 && y !== '' && y>0 && z !== '' && z>0){
							$.getScript(algo,()=>{
								$('#create-result')
								.text('')
								.text(switchSeq(x,y,z));
							});
						}else{
							alert('값을 입력해주세요.');
						}
					})					
				})
				
				$('#a-fibo').on('click',()=>{
					$right.empty();
					createInputText({id:'input-init-val',clazz:'form-control'})
					.attr('placeholder','초기값 입력').appendTo($right);
					createInputText({id:'input-limit-val',clazz:'form-control'})
					.attr('placeholder','리미트값 입력').appendTo($right);
					$(createButton({id:'btn-result',clazz:'btn-primary',val:'결과보기'})).appendTo($right)
					.attr('style','margin-top:10px;magin-left:100px;width:200px');
					$(createText('create-result'))
					.text('').appendTo($right);
					$('#btn-result').on('click',()=>{
						var x = $('#input-init-val').val();
						var y = $('#input-limit-val').val();
						if(x !== '' && x>0 && y !== '' && y>0){
							$.getScript(algo,()=>{
								$('#create-result')
								.text('')
								.text(faSeq(x,y));
							});
						}else{
							alert('값을 입력해주세요.');
						}
					})			
				})
			});
			/*
			 $('#a-switch')
				.on('click',()=>{
				$right.empty();
				$.getScript(algo,()=>{
				$right.html(
				createArryTab('test','tab-algo-fiveByFive',findByFive(),'Basic','default')
				);
				})
				})
			 * */

			$(createATag({id:'',link:'',val:'수학'}))
			.appendTo($('#li-math'))
			.click(()=>{
				alert('수학 선택');
				$wrapper.html($.getScript(view,()=>{
					$(createDiv({id:'content',clazz:'container'})).appendTo($wrapper);
					$(createAlgoTab('tab-math')).appendTo('#content');
					var $right = $('#td-algo-right'),$left = $('#td-algo-left');
					$(createTab('tab-arr','table table-bordered',mathTitle())).appendTo($left);
					$('#td-0').on('click',()=>{
						$right.empty();
						createInputText({id:'input-value',clazz:'form-control'})
						.attr('placeholder','값 입력').appendTo($right);
						$(createButton({id:'btn-result',clazz:'btn-primary',val:'결과보기'})).appendTo($right)
						.attr('style','margin-top:10px;magin-left:100px;width:200px');
						$(createText('create-result'))
						.text('').appendTo($right);
						$('#btn-result').on('click',()=>{
							var x =$('#input-value').val();
							if(x !== '' && x>0){
								alert('확인');
								$.getScript(algo,()=>{
									$('#create-result').text('').text(decimal(x));
								});
							}else{alert('값을 입력해주세요.');}
						
						})
						
					});
				}))
			});
			/*$('#btn-result').on('click',()=>{
				var x = $('#input-init-val').val();
				var y = $('#input-limit-val').val();
				var z = $('#input-diff-val').val();
				if(x !== '' && x>0 && y !== '' && y>0 && z !== '' && z>0){
					$.getScript(algo,()=>{
						$('#create-result')
						.text('')
						.text(switchSeq(x,y,z));
					});
				}else{
					alert('값을 입력해주세요.');
				}*/
			$(createATag({id:'',link:'',val:'배열'}))
			.appendTo($('#li-mtx'))
			.click(()=>{
				var jason={id:'test',clazz };
				$wrapper.html($.getScript(view,()=>{
					$(createDiv({id:'content',clazz:'container'})).appendTo($wrapper);
					$(createAlgoTab('tab-arr')).appendTo('#content');
					var $right = $('#td-algo-right'),$left = $('#td-algo-left');
					$(createTab('tab-arr','table table-bordered',arrTitle())).appendTo($left);
					$('#td-0')
					.on('click',()=>{
						$right.empty();
						$.getScript(algo,()=>{
							$right.html(
								
						     createArrayTab({id:'test',clazz:'tab-algo-fiveByFive',jason:fiveByFive(),txt:'Basic'})
						);
					})
				})
			}))
		});	
			$(createATag({id:'',link:'',val:'정렬'}))
			.appendTo($('#li-sort'))
			.click(()=>{
				alert('정렬 선택');
			$.getScript(view,()=>{
				$wrapper.html($(createDiv({id:'content',clazz:'container'}))
				.appendTo($wrapper));
				$(createAlgoTab('tab-mtx')).appendTo('#content');
				var $right = $('#td-algo-right'),$left = $('#td-algo-left');
				$(createTab({id:'tab-mtx',clazz:'table table-bordered',jason:sortTitle()}))
				.appendTo($left);
			
				})
			});
			$(createATag({id:'',link:'',val:'응용'}))
			.appendTo($('#li-app'))
			.click(()=>{
				$(createDiv({id:'content',clazz:'container'}))
				.appendTo($wrapper);
				$wrapper.html($(createAlgoTab('tab-app')).appendTo('#content'));
				var $right = $('#td-algo-right'),$left = $('#td-algo-left');
				$(createTab({id:'tab-app',clazz:'table table-bordered',jason:sortTitle()})).appendTo($left);
				alert('응용');
			});
		});	
	};
	return {onCreate:onCreate};
})();
