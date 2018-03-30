var arith = (x,y,z)=>{
	   // 등차수열 초기값, 리밋값, 공차
	   // 1+2+3+...+10 = 55
	 var x=x*1, y=y*1, z=z*1;  //integer.parseInt
	 var sum = 0;
	 var str = "";
	 for(var i = 1; i<=y; i++){
	         if(i<y){
	             str += i + "+";
	             sum += i;
	         }else if(i = y){
	             str += i + "=";
	             sum += i;
	      }
	   }
	 return str + sum;
	}
var faSeq=(x,y)=>{
	var x=x*1, y=y*1;
	var i=1,K=1,J=1;
	for(var i=x;i<y;i++){
		J*=i;
		K+=J;
	}
	return K;
}
var switchSeq = (x,y,z) =>{
	//스위치수열 초기값,리밋값 20번째 항, 공차 = 2
	//1-2+3-4+5-6+.......-100=50
	console.log(x+','+y+','+','+z);
	var i,J,SW;
	var i =x*1,J=0*1;
	var SW=0;
	var k=0;
	var str = '';
	for(;i<=y;){
		i++;
		k+=z*1;
		if(SW==0){
			str += '+'+k;
			J = J+k;
			SW=1;
		}else{
			str += '-'+k;
			J=J-k;
			SW=0;
		}
	}
	return str +' = '+J;
}
var factory=()=>{
	
}
var geometric = (x,y,z) =>{
	//등비수열 2+6+18+54+060=242
	 var sum = 0; 
}
//자바에서 arry

var fiveByFive=()=>{
	var mtx = new Array(new Array(5),new Array(5),
			new Array(5),new Array(5),new Array(5));
	var x=[
			{ //jason의 배열 객체
				a:1,
				b:2,
				c:3,
				d:4,
				e:5
			},
			{
				a:6,
				b:7,
				c:8,
				d:8,
				e:10
			},
			{
				a:11,
				b:12,
				c:13,
				d:14,
				e:15
			},
			{
				a:16,
				b:17,
				c:18,
				d:19,
				e:20
			},
			{
				a:21,
				b:22,
				c:23,
				d:24,
				e:25
			}
		];
	var a = new Array();
	var o = null;
	var k =1;
	for(var i=0;i<5;i++){
		o = new Object();
		o.a = k++;
		o.b = k++;
		o.c = k++;
		o.d = k++;
		o.e = k++;
		a.push(o);   //add
	}
	return JSON.stringify(a);
	}
var decimal =(x)=> {
	var x=x*1
	var A,HAP,K,J;
	var A=x;
	var HAP=0;
	var K=2;
	//1번
	for(var J=2;J==K;J++){
	if(K%J==0){
		if(K==J){
			HAP=HAP+K;
		}
			if(A!=K){
				K=K+1
	
			}else{
				break;
				}
	}
	return HAP;
}
}
var measure =(x,y)=>{
	var A=x*1, B=y*1
	var BIG,SMALL,MOK,NMG,GCM,LCM;
	
	
}