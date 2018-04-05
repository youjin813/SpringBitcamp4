var arith = (x,y,z)=>{
    // 등차수열 초기값, 리밋값, 공차
    // 1+2+3+...+10 = 55
    var x = x*1;
    var y = y*1;
    var z = z*1;
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
var switchSeq =(x, y, z)=>{
    var  x = x*1, y = y*1, z = z*1;
    var SW = 0;
    var k = x;
    var sum = 0;
    var str = "";
    for(var i=1; i<=y; i++){
        if((i%2) != 0) {
            k += z;
            sum += k;
            SW=1;
        } else {
            k += z;
            sum -= k;
            SW=0;
        }
    }
    return str+sum;
}
var geoSeq = (x,y,z)=>{
//2+6+18+54+162 = 242
	var x = x*1, y = y*1 , z=z*1;
	var k = x;
	var sum = 0;
	var str = "";
	for(var i=1; i<=y; i++){
		sum += k;
		k *= z;
	}
	return str+sum;
}
var math016 = (x) =>{
	var i,j,k,k,m;
	var a=[10];
	i=-1;
	var str ="";
}
var decimal=(x)=>{
	var   b,c,d,e,mok,nmg;
	var a = [100];
	b = x*1;
	c = -1;
	d = 2;
	var str ="";
	for(var i=0;i<1;){
		 e = b;
		for(var j=0;j<1;){
			if(d>e){
				d=b;
				break;
			}else{
				mok = b/d;
				nmg = b-mok*d;
			}if(nmg == 0){
				break;
			}
			d++;
		}
		c++;
		a[c] = d;
		if(b==d){
			break;
			b = mok;
		}
		for(var a = 0; a<=c; a++){
			a[i];
		}
	}
	return str+a[i];
}
var primeSeq = (x)=>{
	 var i, j, sum = 0;
     /**
      * 1과 자기 자신으로만 나뉘어지는 수가 소수
      */
	 var str="";
     for(i = 1; i <= x; i++) { // i는 1에서 1000까지 증가
    	 var count = 0;
         for(j = 1; j <= i; j++) { // j는 1에서 i까지 증가
             if((i%j) == 0) { // i를 j로 나눈 나머지가 0이면
                 count++; // count를 증가시킴
             }
         }
         if(count == 2) { // count가 2이면 소수이므로
            
             sum += i; // 합계에 i를 더해줌
         }
     }
	 return str+sum;
}
var common  = (x,y,z)=>{
	var a,b,big,small,mok,nmg,gcm,lcm;
	 a = x*1;
	 b = y*1;
	
	
	
}
var  fiveByfive=()=>{
	var mtx = new Array(new Array(5),new Array(5),new Array(5),new Array(5),new Array(5));
	var x = [
		{a:1,
			b:2,
			c:3,
			d:4,
			e:5},
		{a:6,
				b:7,
				c:8,
				d:9,
				e:10},
		{a:11,
					b:12,
					c:13,
					d:14,
					e:15},
		{a:16,
						b:17,
						c:18,
						d:19,
						e:20},
		{a:21,
							b:22,
							c:23,
							d:24,
							e:25}
	];
	var a = new Array();
	var o = null;
	var k = 1;
	for(var i=0; i<5; i++){
		o = new Object();
		o.a = k++;
		o.b = k++;
		o.c = k++;
		o.d = k++;
		o.e = k++;
		a.push (o);
	}
				
	return JSON.stringify(a);
}
var arrange=()=>{
	var mtx = ['선택정렬','버블정렬','삽입정렬','병합정렬','스택정렬'];
	return mtx;
}
var math=()=>{
	var mtx = ['소수 판별','소수의 합구하기','최대공약수','소인수분해','최대값,최소값','5의배수의 합','7에 가장 가까운 수'];
	return mtx;
}
var application=()=>{
	var mtx = ['화폐단위','사과구입','구구단','반배정'];
	return mtx;
}