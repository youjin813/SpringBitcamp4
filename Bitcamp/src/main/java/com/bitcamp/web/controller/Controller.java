package com.bitcamp.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.Member;
import com.bitcamp.web.domain.Page;
import com.bitcamp.web.mapper.Mapper;
import com.bitcamp.web.service.ICountService;
import com.bitcamp.web.service.IGetService;
import com.bitcamp.web.util.PageAdapter;

@RestController   //soap방식 사용 안한다는 단일 시스템 @ResponseBody 생략
@RequestMapping("")
public class Controller {
	private static final Logger logger = LoggerFactory.getLogger(Controller.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Autowired Member user;
	@Autowired Page page;
	@Autowired PageAdapter adapter;
	@RequestMapping(value="/members/{id}/login",method=RequestMethod.POST,consumes="application/json") //consumes app,js에서 준거랑 똑같이
	public Map<?, ?> getId(@PathVariable String id,@RequestBody Member m) {
		Map<String, Object>map = new HashMap<>();
		logger.info("Welcom {}","Member!");
		logger.info("ID {}",id);
		logger.info("PASS {}",m.getPass());
		cmd = new Command();
		cmd.setData1(id);
		cmd.setData2(m.getPass());
		int count =  new ICountService() {
			@Override
			public int execute(Command cmd) {
				return mapper.exist(cmd);
			}
		}.execute(cmd);
		System.out.println("로그인 성공 여부"+count);
		if(count == 1) {
			user.setId("lee");
			map.put("user", user);
		}
		map.put("success",count+"");
		return map;
	}
	@RequestMapping("/articles/{pageNum}")
		public  Map<?,?>getArticles(
				@PathVariable String pageNum
				){ //전체를 가져와라
		logger.info("welcome{}","getArticles()");
		Map<String,Object> map =  new HashMap<>();
			page.setPageNum(Integer.parseInt(pageNum));
			page.setBlockSize(5);
			page.setPageSize(5);
			page.setTotalCount(25);
			page = (Page) adapter.attr(page);
			cmd.setData1(page.getStartRow()+"");
			cmd.setData2(page.getEndRow()+"");
			//디버깅
			System.out.println("================");
			System.out.println((List<?>) new IGetService() {
				@Override
				public Object execute(Command cmd) {
					return mapper.articles(cmd);
					
				}
			}.execute(cmd));
			System.out.println("================");
			//디버깅 끝
			map.put("list",(List<?>) new IGetService() {
				
				@Override
				public Object execute(Command cmd) {
					return mapper.articles(cmd);
				}
			}.execute(cmd));
			map.put("page", page);
			return map;
	}
	@RequestMapping("/boards/{seq}")
	public  Map<?, ?>getArticle(
			@PathVariable String seq){
		Map<String, Object>map = new HashMap<>();
		return map;
	}
	//.PUT은 업데이트
	@RequestMapping(value="/boards/{seq}",method=RequestMethod.PUT,consumes="application/json")
	public  Map<?, ?>putArticle(
			@PathVariable String seq){
		Map<String, Object>map = new HashMap<>();
		return map;
	}
}

