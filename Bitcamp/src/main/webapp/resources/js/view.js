//선언만되고 로딩되지 않은 상태
function hello(){
	return '<h1>HELLO AJAX2</h1>';
}
var fileupload=x=>{
	return
}
var boardWrite=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'">'
	+'    <h2>글쓰기<br/>'
	+'    <small>Title(제목), Content(내용)을 완성하시고 전송을 눌러주세요.</small>'
	+'    </h2><br/>'
	+'    <div class="form-group">'
	
	+'        <label for="usr">제목</label>'
	+'        <input name="brotitle" type="text" class="form-control"><br/>'
	+'        <label for="comment">내용</label><br />'
	+'        <textarea name="brocontent" class="form-control" rows="15" >'
	+'        </textarea><br />'
	+'        <div class="">'
	+'          <img src="${path.img}/${uploadImage}" style="width: 150px; height: 150px" alt="" />'
	+'        </div>'

	+'    <button id="fileUpload-btn" class="btn btn-default pull-right"><span class="glyphicon glyphicon-open-file"></span></button>'
	+'    </div><br />'
	+'    <div class="row">'
	+'        <div class="col-sm-8"></div>'
	+'        <div class="col-sm-4">'
	+'            <div id="div-btn-group" class="btn-group">'
/*	+'                <a id="submit-btn" href="#" class="btn btn-success">전송</a>'
	+'                <a id="cancel-btn" href="#" class="btn btn-danger">취소</a>'
	+'<a class="popup-with-form" href="#test-form">파일 업로드</a>'*/
	+'            </div>'
	+'        </div>'
	+'    </div>'

	+'</div>'

	+'   <div class="row">'
	+'    <div class="btn-group pull-right" style="margin-right: 40px">'
	+'      <input class="btn btn-danger" type="reset" value="취소">'
	+'      <input class="btn btn-primary" type="submit" value="확인">'
	+'    </div>'
	+'  </div>'

	+'</div>'

}
var pagenation =x=>{
	return '<div class="container">'
	+'<button class="pull-right" id="btn-write">글쓰기</button>'
	+'<div>'
	+'	총 게시글 수 : ${page.totalCount} 개'
	+'</div>'
	+'<table class="table table-striped">'

	+'	<c:forEach begin="" items="${list}" step="1" var="article" varStatus="">'
	+'		<tr>'
	+'			<td>${article.bbsSeq}</td>'
	+'			<td>'
	+'				<a href="${path.context}/board/detail/${article.bbsSeq}">'
	+'					${article.title}'
	+'				</a>'
	+'			</td>'
	+'			<td>${article.id}</td>'
	+'			<td>${article.regdate}</td>'
	+'		</tr>'
	+'	</c:forEach>'
	+'</table>'
	+'<nav>'
	+'  <ul class="pagination">'
	+'  	<c:if test="${page.prevBlock}">'
	+'  	 	<li>'
	+'     	 <a href="#" aria-label="Previous" onclick="app.boardList(${page.pageStart-page.pageSize});return false;">'
	+'        	<span aria-hidden="true">&laquo;</span>'
	+'      	 </a>'
	+'   	  </li> '
	+'  	</c:if>'
	+' '
	+'    <c:forEach begin="${page.pageStart}" end="${page.pageEnd}" step="1" varStatus="i">'
	+'	   	<c:choose>'
	+'	   		<c:when test="">'
	+'	   			<li><a style="color: red" href="#" onclick="${path.context}/board/list?pageNum=${i.index}">${i.index}</a></li>'
	+'	   		</c:when>'
	+'	   		<c:otherwise>'
	+'	   			<li><a href="#" onclick="app.boardList('+x+')">${i.index}</a></li>'
	+'	   		</c:otherwise>'
	+'	   	</c:choose>'
	+'    </c:forEach>'
	+'    '
	+'    <c:if test="${page.nextBlock}">'
	+'    	 <li>'
	+'     		 <a href="#" onclick="app.boardList(${page.pageStart+page.pageSize});return false;" aria-label="Next">'
	+'       			 <span aria-hidden="true">&raquo;</span>'
	+'     		 </a>'
	+'    	</li>  '
	+'    </c:if>'
	+'  </ul>'
	+'</nav>'
	+'</div>';
}
var createNav=x=>{
	return '<nav id="'+x.id+'" class="'+x.clazz+'" > </nav>';
}
var createFont=x=>{
	return '<font>'+x.val+'</font>';
}

var mypage=x=>{
	return '<article>'
	+'	<table id="mypage_table">'
	+'		<tr>'
	+'			<td rowspan="5"><img src="" /></td>'
	+'			<td class="column">ID</td>'
	+'			<td>'+x+'</td>'
	+'			<td class="column">PW</td>'
	+'			<td></td>'
	+'		</tr>'
	+'	</table>'
	+'		<button id="pass_update_btn" name ="pass_update_btn" style="width: 200px">비밀번호 변경</button>'
	+'		<input type="hidden" name="cmd" value="move" />'
	+'		<input type="hidden" name="dir" value="user" />'
	+'		<input type="hidden" name="page" value="change_pass" />'
	+'	<button id="delete_btn" name ="delete_btn" style="width: 200px">탈퇴</button> '
	+'		<button id="btn-mypage-change" style="width: 200px">수정</button> '
	+'		<button id="nav_btn">네비 바 이동</button>'
	+'	</article>'
}
var mypagetab=(x)=>{
	return '<table id="'+x+'" class="table table-bordered">'
+'	  <tr>'
+'			<td class="column"></td>'
+'			<td></td>'
+'			<td class="column"></td>'
+'			<td></td>'
+'	 </tr>'

	}

/*var createTab=(x, y,txt)=>{
var tab = '<table id="'+x+'" class="'+y+'">'
var	arr =[1,2,3,4,5];
$.each(arr, (i, j)=> {
	tab += '<tr>'
		+'<td id=""></td>'
		+'<td id=""></td>'
		+'<td id=""></td>'
		+'<td id=""></td>'
		+'<td id=""></td>'						
		+'</tr>'
});
tab += '</table>'
return tab;
};*/

var loginOutBox=x=>{
	return '<table id="'+x+'">'
	+'			<tr id="first_child">'
	+'				<td id="inbox">'
	+'				</td>'
	+'			</tr>'
	+'			<tr id="first_child">'
	+'					<td>'
	+'					   <a id="go_admin_link" >관리자</a>'
	+'					   <a id="go_jdbc_link" >JDBC TEST</a>'
	+'					</td>'
	+'				</tr>'
	+'			</table>';
}
var loginInBox=x=>{
	return '<table id="'+x+'" >'
	+'				 		<tr>'
	+'				 			<td > '
	+'					 			<input id="input-userid" type="text" name="userid" placeholder="id"/>'
	+'				 			</td>'
	+'				 			<td id="td-login-btn" rowspan="2">'
	
	+'							</td>'
	+'				 		</tr>'
	+'				 		<tr>'
	+'				 			<td >'
	+'				 				<input id="input-password" type="text" name="password" placeholder="pass"/>'
	+'				 			</td>'
	+'				 		</tr>'
	+'				 	</table>'
}
function navigation(x){
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
    +'    <img style="height: 130%" src="'+x+'/logo.jpg" alt="" />'
    +'    </a>'
    +'    </div>'
    +'    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
    +'      <ul class="nav navbar-nav">'
    +'        <li id="li-home" class="active">'
/*    +		'<a href="#">'
    +'          <span class="glyphicon glyphicon-home" aria-hidden="true"> HOME</span></a>'*/
    +'</li>'
    +'        <li><a id="a-about" href="#">'
    +'          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> about</span>'
    +'        </a></li>'
    +'        <li id="li-board"><a id="a-board" href="#">'
/*    +'          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> 게시판</span>'*/
    +'        </a></li>'
    +'        <li class="dropdown">'
    +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"  aria-expanded="false"> 선택 <span class="caret"></span></a>'
    +'          <ul id="ul-algo" class="dropdown-menu" role="menu">'  
    +'            <li id="li-seq"> </li>'
    +'            <li id="li-math"> </li>'
    +'            <li id="li-mtx"> </li>'
    +'            <li id="li-sort"> </li>'
  	+'            <li id="li-app"> </li>'
    +'          </ul>'
    +'        </li>'
    +'      </ul>'
    +'      <form class="navbar-form navbar-left" role="search">'
    +'        <div class="form-group">'
    +'          <input type="text" class="form-control" placeholder="Search">'
    +'        </div>'
    +'        <button type="submit" class="btn btn-default">검 색</button>'
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
    +'                    </li>'
    +'          </ul>'
    +'      </ul>'
    +'    </div>'
    +'  </div>'
    +'</nav>';
}
var createHTag=(x,y)=>{
	return '<h'+x+'>'+y+'</h'+x+'>';
}
var createDiv=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'"></div>';
	//style="margin-top: 50px;
}
var createAlgoTab=x=>{
	var tab = '';
	return '<table id="tab-algo" class="table table-bordered">'
	+'	<tr>'
	+'  <td id="td-algo-left" class="td1" style="width: 400px;"></td>'
    +'  <td id="td-algo-right" class="td2" rowspan="5" style="width: 400px;"></td>'
	+'	</tr>'
	+'</table>';
}
var createArrayTab=x=>{
	var tab = '<table id ="'+x+'" class ="'+x.clazz+'">'
	+'<thead><tr>'
	+'<th colspan="5">'+x.txt+'</th>'
	+'</tr></thead>';
	$.each(x.list,(i,j)=>{  
		tab +=
		'<tr>'
		+'<td>'+j.a+'</td>'
		+'<td>'+j.b+'</td>'
		+'<td>'+j.c+'</td>'
		+'<td>'+j.d+'</td>'
		+'<td>'+j.e+'</td>'
		'</tr>';
	});
	tab+='</table>';
	return tab;
}

var createTable=x=>{
	return '<table id ="'+x.id+'" class ="'+x.clazz+'"></table>';
}
var createTh =x=>{
	var tr = '<tr>';
	$.each(x.list,(i,j)=>{
		tr +='<th>'+j+'</th>';  //th
	});
	tr+='</tr>';
	return tr;
}
var createTr=x=>{
	   var temp = '';
	   $.each(x.list, (i,j)=>{
	       temp +='<tr id="tr_'+i+'" class="'+x.clazz+'">'
	                   +createTd({
	                       list: j,
	                       idx: i,
	                       clazz: x.jason.clazz
	                       })+'</tr>';
	   });
	   return temp;
	}
var createTd=x=>{
	   var temp = '';
	   var k =0;
	   $.each(x.list,(i,j)=>{ //x.idx
	        temp +='<td id="td_'+x.idx+'_'+(k++)+'" class="'+x.clazz+(k++)+'">'
	                                        +'&nbsp;'+j+'</td>';
	    });
	   return temp;
	}

var createTab=x=>{
	var tab = '<table id ="'+x.id+'" class ="'+x.clazz+'">'
	$.each(x.jason,(i,j)=>{
		tab +=
			'<tr>'
			+'<td id="td-'+i+'" href="#">'+j+'</td>'
			'</tr>'
	});
	tab+='</table>';
	return tab;
}

/*var createTab=(x, y, json, type)=>{
	var a = 1;
	var tab = '<table id="'+x+'" class="table table-'+y+'">'
		+'<tr><th style="width: 50%">목록</th>'
		+'<th style="width: 50%;"><a id="a-th"></a></th></tr>';
	$.each(json, (i, j)=> {
		tab += '<tr>'
			+'<td><a id="a-td'+i+'" href="#">'+(a++)+'. '+j+'</a></td>'
			+'<td id="'+i+'"></td>'
	});
	tab += '</tr></table>'
	return tab;
};*/

var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>';
}
var createInputText=x=>{
	return $('<input type="text" id="'
			+x.id
			+'" class="'
			+x.clazz
			+'" placeheolder="example" aria-describedby="basic-addon1">');

}
var createButton=x=>{
	return '<button type="button" id="'+x.id+'" class="btn '+x.clazz+'">'+x.val+'</button>'
}

var createButtonNav1st=()=>{
	return '<button id="btn-nav-1st" type="button"'
	+'class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'
	+'<span class="sr-only">Toggle navigation</span>'
	+'<span class="icon-bar"></span>'
	+'<span class="icon-bar"></span>'
	+'<span class="icon-bar"></span>'
	+'</button>';
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
var createATag=x=>{
	return '<a id="'+x.id+'" href="'+x.link+'">'+x.val+'</a>';
}
var createSpan=x=>{
	return '<span id="'+x.id+'" class="glyphicon '+x.clazz+'" aria-hidden="true">&nbsp;'
	+x.val+'</span>';
}
/*    +'<span class="glyphicon glyphicon-map-marker" aria-hidden="true"> 게시판</span>'*/
var createText=x=>{
	return '<span id="'+x+'"></span>';
}

var sortTitle=()=>{
	return ['선택정렬','버블정렬','삽입정렬','석차구하기'];
}
var arrTitle=()=>{
	var x = ['기본배열'];
	return x;
}
var mathTitle=()=>{
	var x = ['소수의 합 구하기','최대공약수','소인수 분해','최대값,최소값 구하기','5의 배수의 개수와 합','7에 가장 가까운 수 구하기'];
	return x;
}
var appTitle=()=>{
	var x =['화폐단위','사과구입','구구단','반배정'];
	return x;
}
function createButtonSequence(){
	return '<a id="a-sequence" href="#"> 수열 </a>';
}
function createButtonMath(){
	return '<a id="a-math" href="#"> 수학 </a>';
}
function createButtonMatrix(){
	return '<a id="a-matrix" href="#"> 배열 </a>';
}
function createButtonSort(){
	return '<a id="a-sort" href="#"> 정렬 </a>';
}
function createButtonApplication(){
	return '<a id="a-application" href="#"> 응용 </a>';
}