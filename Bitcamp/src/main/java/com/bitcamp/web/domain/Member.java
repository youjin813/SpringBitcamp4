package com.bitcamp.web.domain;


import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Member {
	private String id,pass,name,ssn,phone,email,profile,addr;

	@Override
	public String toString() {
		return "회원정보 [ID:" + id + ", 비밀번호:" + pass + ", 이름:" + name + ", 주민번호(생년월일-첫번째 번호):" + ssn + ", "
				+ "전회번호:" + phone + ", 이메일:" + email + ", 프로필사진:" + profile + ", 주소:" + addr + "]";
	}
	
}
