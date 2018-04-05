package com.bitcamp.web.service;

import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.mapper.Mapper;

@Service
public class TXService implements ITXService{
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	/*@Override @Transactional
	public Object withdraw(HashMap<?, ?> parm) {
		mapper.exist(cmd);
		mapper.insertMember(cmd);
		mapper.searchAdminById(parm);
		return null;
	}*/
	@Override
	public Object withdraw(HashMap<?, ?> parm) {
		// TODO Auto-generated method stub
		return null;
	}
}

//이게 트랜잭션 거는 방법
//인터페이스에는 @Component 걸기