function hello(){
    return '<h1> Hello !! AJAX 2 </h1>';
}
var adminTab=x=>{
	return '<section id="'+x+'">'
	+'<h1 id="title">회원관리</h1>'
	  +'<table id="admin-main-table">'
	    +'<tr>'
	      +'<td >'
	        +'<a id="move_member_btn" style="cursor: pointer;">'
	          +'<img src="${image}/admin_main_member.jpg"'
	            +'id="move_member_btn_img"'
	           +'alt="" />'
	        +'</a>'
	      +'</td>'
	      +'<td >준비중</td>'
	      +'<td >준비중</td>'
	    +'</tr>'
	    +'<tr>'
	      +'<td>준비중</td>'
	      +'<td>준비중</td>'
	      +'<td> 테이블 생성 <br />'
	        +'<form id="admin-crate-table-form" action="${context}/admin.do?cmd=create-table">'
	          +'<select name="table_name" id="table_name">'
	            +'<option value="member">회 원</option>'
	            +'<option value="attend">출 석</option>'
	            +'<option value="mobile">모바일</option>'
	          +'</select>'
	          +'<button id="admin-create-table-btn">생 성</button>'
	        +'</form>'
	      +'</td>'
	    +'</tr>'
	  +'</table>'
	+'</section>';
}
var join=x=>{
	'<table id="'+x.id+'" class="table">'
	+'		<tr>	'
	+'			<td>아이디</td>'
	+'			<td >'
	+'				<input name="id" id="id" type="text"/>'
	+'				<button id="check_dupl_btn" name="check_dupl_btn">중복 확인</button>'
	+'			</td>'
	+'		</tr>'
	+'		<tr>'
	+'			<td >비밀번호</td>'
	+'			<td>'
	+'				<input name="pass" id="input-pass" type="text" />'
	+'			</td>'
	+'		</tr>'
	+'		<tr>'
	+'			<td>비밀번호 확인</td>'
	+'			<td>'
	+'				<input type="text"/>'
	+'					<button style="width: 160px; height: 30px">확인</button>'
	+'			</td>'
	+'		</tr>'
	+'		<tr>'
	+'			<td>이름</td>			'
	+'			<td>'
	+'				<input id="name" name="name" type="text" />'
	+'			</td>'
	+'		</tr>'
	+'		<tr>'
	+'		<td>가입일</td>'
	+'		<td><input type="date"/></td>'
	+'		</tr>'
	+'		<tr>'
	+'			<td>주민번호</td>'
	+'			<td>'
	+'				<input name="ssn" type="text" />'
	+'			</td>'
	+'		</tr>'
	+'		<tr>'
	+'			<td>핸드폰번호</td>'
	+'			<td>'
	+'				<input name="phone" type="tel"  />'
	+'				<input type="radio"value="KT" />KT'
	+'				<input type="radio"value="SKT"/>SKT'
	+'				<input type="radio"value="LG"/>LG'
	+'				<br />'
	+'				<select>'
	+'				<option>010</option>'
	+'				</select>'
	+'				<input pattern="[0-9]{4}" type="text" />'
	+'				<input pattern="[0-9]{4}" type="text" />'
	+'			</td>'
	+'		</tr>'
	+'		<tr>'
	+'			<td>이메일</td>'
	+'			<td>'
	+'				<input type="email" />@<select name="email" id=""></select>'
	+'			</td>'
	+'		</tr>'
	+'		<tr>'
	+'			<td>주소</td>'
	+'			<td>'
	+'				<input name="addr" type="text" />'
	+'					<button style="width: 160px; height: 30px">주소 검색</button>'
	+'			</td>'
	+'		</tr>'
	+'		<tr>'
	+'			<td>프로필사진</td>'
	+'			<td>'
	+'				<input name="profile" type="text"/>'
	+'				'
	+'			</td>'
	+'		</tr>'
	+'		<tr>'
	+'			<td colspan="2">'
	+'			<button id="join_confirm_btn" style="width: 160px; height: 30px">확인</button>'
	+'			<button style="width: 160px; height: 30px">취소</button>'
	+'			</td>'
	+'		</tr>'
	+'	</table>'
}
var createNav=x=>{
    return'<nav id="'+x.id+'" class="'+x.clazz+'"></nav>';
}
var pagiantion=x=>{
    return '<nav style="text-align:center;">'
    +'  <ul class="pagination">'
    +'    <c:if test="${page.prevBlock}">'
    +'      <li>'
    +'          <a href="#" aria-label="Previous" onclick="app.boardList('+x+');return false;">'
    +'            <span aria-hidden="true">&laquo;</span>'
    +'          </a>'
    +'      </li>'
    +'    </c:if>'
    +'  <c:forEach begin="${page.pageStart}" end="${page.pageEnd}"  step="1"  varStatus="i">'
    +'        <c:choose>'
    +'              <c:when test="${i.index eq page.pageNum}">'
    +'                <li>'
    +'                <a style="color: red" href="#"</a>'
    +'                </li>'
    +'               </c:when>'
    +'               '
    +'               <c:otherwise>'
    +'                <li>'
    +'                <a href="#">${i.index}</a>'
    +'                </li>'
    +'               </c:otherwise>'
    +'         </c:choose>'
    +'      </c:forEach>'
    +'    '
    +'    <c:if test="${page.nextBlock}">'
    +'      <li>'
    +'        <a href="#" aria-label="Next" onclick="app.boardList('+x+');return false;">'
    +'          <span aria-hidden="true">&raquo;</span>'
    +'        </a>'
    +'      </li>'
    +'    </c:if>'
    +'  </ul>'
    +'</nav>';
}
var createMyPageTab=(x,y,txt)=>{
       var tab = '<table id = "'+x+'" class = "'+y+'">'
       var arr = [1,2,3,4,5];
       $.each(arr,(i,j)=>{
           tab +='<tr>'
               +'<td id ="a'+j+'"></td>'
               +'<td id ="b'+j+'"></td>'
               +'<td id ="c'+j+'"></td>'
               +'<td id ="d'+j+'"></td>'
               +'<td id ="e'+j+'"></td>'
               +'</tr>';
               
       });
       tab += '</table>';
       return tab;
}      
       
var mypagebox=x=>{
    return '<table id="'+x+'">' 
    +'    <tr>'
    +'      <td id="mypage-profile-img-td" rowspan="5"></td>'  
    +'      <td class="mypage-column">ID</td>'
    +'      <td class="mypage-data"></td>'
    +'      <td class="mypage-column">BIRTHDAY</td>'
    +'      <td class="mypage-data"></td>'
    +'    </tr>'
    +'    <tr>'
    +'      <td class="mypage-column">PASSWORD</td>'
    +'      <td class="mypage-data">****</td>'
    +'      <td class="mypage-column">PHONE</td>'
    +'      <td id="td-phone" class="mypage-data">'
    +'        <a id="mypage-phone" href="#">개통</a>'
    +'      </td>'
    +'    </tr>'
    +'    <tr>'
    +'      <td class="mypage-column">NAME</td>'
    +'      <td class="mypage-data"></td>'
    +'      <td class="mypage-column">EMAIL</td>'
    +'      <td class="mypage-data"></td>'
    +'    </tr>'
    +'    <tr>'
    +'      <td class="mypage-column">SSN</td>'
    +'      <td class="mypage-data"></td>'
    +'      <td class="mypage-column">ADDRESS</td>'
    +'      <td class="mypage-data"></td>'
    +'    </tr>'
    +'    <tr>'
    +'      <td class="mypage-column">ACCOUNT</td>'
    +'      <td class="mypage-data"></td>'
    +'      <td class="mypage-column"></td>'
    +'      <td class="mypage-data"></td>'
    +'    </tr>'
    +'  </table>'
}
var loginInbox=x=>{
    return '  <table id="'+x+'">'
    +'    <tr>'
    +'      <td><input id="input-userid" name="userid"'
    +'           type="text" value="lee" placeholder="ID" tabindex="1" />'
    +'      </td>'
    +'      <td id="td-login-btn" rowspan="2">'
    +'       </td>'
    +'    </tr>'
    +'    <tr>'
    +'      <td><input id="input-password" name="password"'
    +'        type="password" value="1" placeholder="PASSWORD" tabindex="2" />'
    +'        <input type="hidden" name="cmd" value="login" />'
    +'        <input type="hidden" name="page" value="mypage" />'
    +'      </td>'
    +'    </tr>'
    +'  </table> ';
}
/*var loginOutbox=x=>{
    return'<table id="'+x+'">' 
    +'<tr rowspan=2>'
    +' <a id="" href="#"> 관리자 </a>'
    +'<a id="" href="#"> 회원가입 </a>'
    +'</tr>'
    +'</table>';
}*/
var navigation=x=>{
    return ' <nav class="navbar navbar-default">'
    +'  <div class="container-fluid">'
    +'    <!-- Brand and toggle get grouped for better mobile display -->'
    +'    <div class="navbar-header"><div id ="div-nav-1st">'
    /*
    +'      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'
    +'        <span class="sr-only">Toggle navigation</span>'
    +'        <span class="icon-bar"></span>'
    +'        <span class="icon-bar"></span>'
    +'        <span class="icon-bar"></span>'
    +'      </button>'
     * */
    +'      </div><a class="navbar-brand" href="#">'
    +'    <img style="height: 130%" src="'+$.image()+'/logo.jpg" />'
    +'    </a>'
    +'    </div>'
    +'    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
    +'      <ul class="nav navbar-nav">'
    +'        <li id="li-home" class="active">'
    // mainHome 
    +           '</li>'
    +'        <li><a id="a-about" href="#">'
    +'          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> about</span>'
    +'        </a></li>'
    +'        <li id="li-board"></li>'
    +'        <li class="dropdown">'
    +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"  aria-expanded="false"> 선택 <span class="caret"></span></a>'
    +'          <ul class="dropdown-menu" role="menu">'
    +'            <li id = "li-sequence"></li>'
    +'            <li id = "li-math"></li>'
    +'            <li id = "li-matrix"></li>'
    +'            <li id = "li-sort"></li>'
    +'            <li id = "li-application"></li>'
    +'          </ul>'
    +'        </li>'
    //검색필터
    +'        <li id="li-search-option">'
//
    +'	</li>'
    +'      </ul>'
    +'      <form  id="nav-form" class="navbar-form navbar-left" role="search">'
    +'        <div class="form-group">'
    +'          <input id="input-search" type="text" class="form-control" placeholder="Search">'
    +'        </div>'
   /* +'        <button type="submit" class="btn btn-default">검 색</button>'*/
    +'      </form>'
    +'      <ul class="nav navbar-nav navbar-right">'
    +'        <li class="dropdown">'
    +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">'
    +'            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>'
    +'          <span class="caret"></span></a>'
    +'          <ul class="dropdown-menu" role="menu">'
    +'                    <li id = "li-login">'
    +'                        <a id="a-join" href="#"> '
    +'                            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true">&nbsp;회원가입</span>'
    +'                        </a>'
    +'                    </li>'
    +'                    <li>'
    +'                        <a id="a-logout" href="#">'
    +'                            <span class="glyphicon glyphicon-log-out" aria-hidden="true">&nbsp;로그아웃</span>'
    +'                        </a>'
    +'                    </li>                '
    +'          </ul>'
    +'      </ul>'
    +'    </div>'
    +'  </div>'
    +'</nav>'
    ;
}
var createSelect=x=>{
	return  '<select id="'+x.id+'" name="'+x.name+'"></select>';	  
}
var createOption=x=>{
	var temp = '';
	$.each(x.arr,(i,j)=>{
		temp += '<option id="option-'+i+'" value="'+j+'"></option>'
	});
	return temp;
}
/*var createTH=x=>{
    var tr = '<tr>'
        $.each(x.list,(i,j)=>{
            tr +='<th>'+j+'</th>';
        });
    tr+='</tr>'
    return tr;
}*/

var createButtonNav1st=x=>{
    return '<button id="btn-nav-1st" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'
    +'        <span class="sr-only">Toggle navigation</span>'
    +'        <span class="icon-bar"></span>'
    +'        <span class="icon-bar"></span>'
    +'        <span class="icon-bar"></span>'
    +'      </button>';
}
var createFont=x=>{
    return '<font>'+x.val+'</font>';
}
var createATag=x=>{
        return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
}
var createSpan=x=>{
    return '<span id="'+x.id+'" class="glyphicon '+x.clazz+'" aria-hidden="true"> &nbsp;'
    
    +x.val+'</span>'
}
var createHTag=x=>{
    return '<h'+x.num+'>'+x.val+'</h'+x.num+'>';
}
var createDiv=x=>{
    return '<div id="'+x.id+'" class="'+x.clazz+'"></div>';
}// style="margin-top: 50px;"
var createAlgoTab=x=>{
    //createDiv(x,y)
    //createTab('2',수열알고리즘)
    return '        <table id="'+x.id+'" class="table table-bordered">'
    +'            <tr>'
    +'            <td rowspan="5"><li id = "li-algo-arith"></li>'
    +'                  <li id = "li-algo-switch"></li><li id = "li-algo-geo"></li>'
    +'                  <li id = "li-algo-fact">'
    +'                  <li id = "li-algo-fibo">'
    +'                  </td>'
    +'            <tr>'
    +'                <td rowspan="5" id="td-algo-arith-init"></td>'
    +'            </tr>'
    +'        </table>';
}
var createTab=x=>{
    return tab = '<table id="'+x.id+'" class="'+x.clazz+'"></table>';
}
var createTH=x=>{
    var tr = '<tr>'
        $.each(x.list,(i,j)=>{
            tr +='<th>'+j+'</th>';
        });
    tr+='</tr>'
    return tr;
}
var createTr=x=>{
       var temp = '';
       $.each(x.trList, (k,val)=>{
           temp +='<tr id="tr_'+k+'" class="'+x.trClazz+'">'
                       +createTd({
                           tdList: val,
                           trNum: k,
                           clazz: x.jason.tdClazz
                           })+'</tr>';
       });
       return temp;
    }
var createTd=x=>{
       var temp = '';
       var w = 0;
        $.each(x.tdList,(k,val)=>{
            w++;
            temp +='<td id="td_'+x.trNum+'_'+k+'" class="'+x.clazz+w+'">'
                                            +'&nbsp;'+val+'</td>';
        });
       return temp;
    }
var createArrayTab=(x,y,jason,txt,type)=>{
    var tab= '<table id="'+x+'" class="'+y+'">'
    +'<thead><tr>'
    +'<th colspan="5">'+txt+'</th>'
    +'</tr></thead>';
    $.each(jason,(i,j)=>{
        tab +=
            '<tr>'
            +'<td><a id="a-td'+i+'" >' +j+'</a></td>'
            +'<td id="sort'+i+'" ></td>'
            +'</tr>';
    });
    tab += '</table>'
    return tab;
}
var createMathTab=(x,y,jason,txt)=>{
    var tab = '<table id="'+x+'" class="'+y+'">'
    +'<thead><tr>'
    +'<th colspan="6">'+txt+'</th>'
    +'</tr></thead>';
    $.each(jason,(i,j)=>{
        tab +=
            '<tr>'
            +'<td><a id="a-td'+i+'" >' +j+'</a></td>'
            +'<td id="math'+i+'" ></td>'
            +'</tr>';
    });
    tab += '</table>'
    return tab;
}
var createAppTab=(x,y,jason,txt)=>{
    var tab = '<table id="'+x+'" class="'+y+'">'
    +'<thead><tr>'
    +'<th colspan="4">'+txt+'</th>'
    +'</tr></thead>';
    $.each(jason,(i,j)=>{
        tab +=
            '<tr>'
            +'<td><a id="a-td'+i+'" >' +j+'</a></td>'
            +'<td  id="app'+i+'"></td>'
            +'</tr>';
    });
    tab += '</table>'
    return tab;
}
var createButton=x=>{
    return '<button type="button" id="'+x.id+'" class="btn'+x.clazz+'" >'+x.val+'</button>';
}
var createUL=x=>{
    return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
}
var createLI=x=>{
    return '<ll id="'+x.id+'" class="'+x.clazz+'"></ll>';
}
var createInput=x=>{
    return '<input id="'+x.id+'" class="'+x.clazz+'" type="'+x.type+'"/> <br/>'
}
//placeholder
var createText=x=>{
    return '<h1 style="text-align: center;" id="'+x+'"></h1>';
}
var fileupload=x=>{
	return '<div class="'+x.clazz+'">'
	+'<h1>FILE UPLOAD</h1>'
		+'</div>'
			+'<div class="row">'
				+'<div class="col-sm-6 col-sm-offset-3">'
					+'<div id="imaginary_container">'
						+'<div id="div-fileupload" class="input-group stylish-input-group">'
							+'<span id="span-file-1"></span><span id="span-file-2"></span>'
						+'</div>'
					+'</div>'
				+'</div>'
	//+'<button id= type="submit" class="btn btn-primary btn-lg">확 인</button>'
	//+'<button type="button" class="btn btn-default btn-lg">취 소</button>'
			+'</div>';
}
var createForm=x=>{
		return '<form id="'+x.id+'" class="'+x.clazz+'" action="'+x.action+'" method="post"></form>';
}
var boardW=x=>{
    return '<div id="" class="">'
    +'    <div class="board_type1_write_wrap">'
    +'      <table class="board_write_type1">'
    +'        <tr>'
    +'          <td class="left" >'
    +'            <div class="column_name">글제목</div>'
    +'            <div class="column_desc"><input id="input-title" type="text" name="title" class="text_type1"/></div>'
    +'          </td>'
    +'        </tr>'
    +'        <tr>'
    +'          <td class="left">'
    +'            <ul class="split_three">'
    +'              <li>'
    +'                <div class="column_name">ID</div>'
    +'                <div class="column_desc"><input id="input-name" type="text" name="userid" class="text_type1"/></div>'
    +'              </li>'
    +'              <li>'
    +'                <div class="column_desc">'
    +'                </div>'
    +'              </li> '
    +'            </ul>'
    +'          </td>'
    +'        </tr>'
    +'        <tr>'
    +'        <td class="left">'
    +'          <div class="column_name">업로드 이미지</div>  '
    +'          <div class="column_desc"></div>'
    +'        </td>'
    +'        </tr>'
    +'        <tr>'
    +'          <td class="left" >'
    +'            <div class="column_name">내용</div> '
    +'              <textarea id="input-content" name="content" rows="" cols="" class="textarea_type1" ></textarea>'
    +'            <div class="column_desc">'
    +'            </div>'
    +'          </td>'
    +'        </tr> '
    +'      </table>'
    +'    </div>'
    +'    <!-- ok -->'
    +'    <div class="button_margin"></div>'
    +'    <div class="board_type1_write_button_wrap">'
    +'      <div id="div-btn-group">'
    +'      </div>  '
    +'  </div>';
}