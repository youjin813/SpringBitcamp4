package com.bitcamp.web.service;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bitcamp.web.domain.Command;

@Service
public interface IUpdateService {
	public Map<?, ?> execute(Command cmd); //메소드 이름 전부 execute
}
