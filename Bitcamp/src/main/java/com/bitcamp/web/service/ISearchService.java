package com.bitcamp.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

@Service
public interface ISearchService {
	public Object execute(HashMap<?, ?>param);
}
