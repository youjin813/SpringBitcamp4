package com.bitcamp.web.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bitcamp.web.domain.Admin;
import com.bitcamp.web.domain.Board;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.Image;
import com.bitcamp.web.domain.Member;
import com.bitcamp.web.domain.Page;
import com.bitcamp.web.enums.ImageRepo;
import com.bitcamp.web.mapper.Mapper;
import com.bitcamp.web.service.ICountService;
import com.bitcamp.web.service.IGetService;
import com.bitcamp.web.service.ISearchService;
import com.bitcamp.web.util.FileProxy;
import com.bitcamp.web.util.PageAdapter;


@RestController
public class Controller {
    private static final Logger logger = LoggerFactory.getLogger(Controller.class);
    @Autowired Mapper mapper;
    @Autowired Command cmd;
    @Autowired Member user;
    @Autowired PageAdapter adapter;
    @Autowired Page page;
    @Autowired Board board;
    @Autowired Image image;
    @Autowired Admin admin;
	//private Map<?, ?> map;
/*//resController을 사용하여 SOP방식을 사용하게 해야된다.
//RestController을 사용하면 리스폰스 바디가 생략이 된다.
@RestController 
@RequestMapping(value="")
public class MemberController {
	private static final org.slf4j.Logger logger=LoggerFactory.getLogger(MemberController.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Autowired MemberDTO member;
	@Autowired Page page;
	@Autowired PageAdapter adapter;
	@Autowired ImageDTO image;
	
	@RequestMapping(value="/search/{keyword}",
			method=RequestMethod.POST,consumes="application/json")
	public Object searchOne(		
			@PathVariable("keyword")String keyword,
			@RequestBody HashMap<String, String> param){
		Map<String,Object> map = new HashMap<>();
		Object o =null;
		System.out.println("넘어온 검색 data : "+param.get("type")+"/"+param.get("content"));
	 switch (param.get("type")) {
		case "member":
			param.put("id", "id");
			o= new ISerchService() {
				
				@Override
				public Object execute(HashMap<?, ?> param) {
					
					return mapper.searchMemberById((HashMap<?, ?>) param);
				}
			}.execute(param);
			break;
		case "admin":
			o= new ISerchService() {
				
				@Override
				public Object execute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
					return mapper.searchAdminById((HashMap<?, ?>) map);
				}
			}.execute(param);
			
			break;
		default:
			break;
		}
		return o;
		
		
	}*/
    @RequestMapping("/search/{keyword}")
    public Object searchOne(@PathVariable("keyword") String keyword,
    		@RequestBody HashMap<String, String>param){
    	Object o =null;
		switch (param.get("type")) {
		case "member":
			o= new ISearchService() {
				@Override
				public Object execute(HashMap<?, ?> param) {
					return mapper.searchMemberById(param);
				}
			}.execute(param);

		case "admin":
			o= new ISearchService() {
				@Override
				public Object execute(HashMap<?, ?> param) {
					return mapper.searchAdminById(param);
				}
			}.execute(param);
		}
		return o;
    }
    
    @RequestMapping(value="/{type}/{id}/login",
            method=RequestMethod.POST,
            consumes="application/json")
    public  Map<?,?> login(
    		@PathVariable String type,
    		@PathVariable String id,
            @RequestBody Member m) {
        Map<String,Object> map = new HashMap<>();
        logger.info("welcome {}","member!");
        logger.info("전달된ID {}",m.getId());
        logger.info("전달된PASS {}",m.getPass());
        cmd = new Command();
        cmd.setType(type);
        switch (type) {
		case "member":
			  cmd.setId("id");
		      cmd.setPass("pass");
			break;
		case "admin":
			System.out.println("admin");
			  cmd.setId("admid");
		      cmd.setPass("admpass");   
			break;

		default:
			break;
		}
        cmd.setData1(m.getId());
	    cmd.setData2(m.getPass());
        int count = new ICountService() {
            @Override
            public int execute(Command cmd) {
                return mapper.exist(cmd);
            }
        }.execute(cmd);
        if(type.equals("member") && count == 1) {
            Object o = new IGetService() {
                
                @Override
                public Object execute(Command cmd) {
                    return mapper.selectMemberById(cmd);
                }
            }.execute(cmd);
            map.put("user", o);
            System.out.println("Member : "+o);
        }else if(type.equals("admin") && count == 1){
        	Object o = new IGetService() {
                
                @Override
                public Object execute(Command cmd) {
                    return mapper.selectAdminById(cmd);
                }
            }.execute(cmd);
            map.put("admin", o);
            System.out.println("admin : "+o);
        }
        
        System.out.println("로그인 성공 여부"+count);
        map.put("success", count+"");
        return map;
    }
    @RequestMapping(value="/articles/{pageNum}")
    public Map<?,?> getArticles(
    		@PathVariable String pageNum){
    	logger.info("welcome {}","getArticles()");
    	Map<String,Object>  map = new HashMap<>();
    	int count = new ICountService() {
			
			@Override
			public int execute(Command cmd) {
				return mapper.existArticles(cmd);
			}
		}.execute(cmd);
		page.setTotalCount(count);
		page.setPageNum(Integer.parseInt(pageNum));
		page.setBlockSize(5);
		page.setPageSize(5);
		page = (Page) adapter.attr(page);
		cmd.setId(page.getStartRow()+"");
		cmd.setPass(page.getEndRow()+"");
		map.put("list",(List<?>) new IGetService() {
			@Override
			public Object execute(Command cmd) {
				
				return mapper.articles(cmd);
			}
		}.execute(cmd));
		map.put("page", page);
		return map;
		
    }
    @RequestMapping(value="/boards/{seq}",
            method=RequestMethod.GET,
            consumes="application/json")
    public Map<?,?> getArticle(@PathVariable String seq){
        Map<String,Object> map = new HashMap<>();
        
        return map;
    }
    @RequestMapping(value="/boards/{seq}",
            method=RequestMethod.PUT,
            consumes="application/json")
    public Map<?,?> putArticle(@PathVariable String seq){
        Map<String,Object> map = new HashMap<>();
        
        return map;
    }
    @RequestMapping(value="/board/post/articles",
            method=RequestMethod.POST,
            consumes="application/json")
    public Map<?,?> postArticle(@RequestBody Board b ){
        Map<String,Object> map = new HashMap<>();
        System.out.println("넘어온 getTitle"+b.getTitle());
        System.out.println("넘어온 getId"+b.getId());
        System.out.println("넘어온 getContent"+b.getContent());
       
        return map;
    }
    @RequestMapping(value="/board/file/upload", 
    		method=RequestMethod.POST)
    public Map<?,?> fileupload(
    		MultipartHttpServletRequest request,
    		HttpSession session) throws IllegalStateException, IOException {
    	Map<String, Object>map = new HashMap<>();
    	FileProxy pxy = new FileProxy();
    	Iterator<String> it = request.getFileNames();
    	if(it.hasNext()) {
    		MultipartFile file = request.getFile(it.next());
    		//String rootPath = request.getSession().getServletContext().getRealPath("/");
    		//String uploadPath = "resources/img/";
    		String filename = file.getOriginalFilename();
    		System.out.println("파일 네임"+filename);
    		image.setImageID(new SimpleDateFormat("yyMMdd_hhmmss_").format(new Date())+filename);
    		image.setFilename(filename);
    	}
    	String fileName = 
    			pxy.getFile()
    			.getOriginalFilename();
    	System.out.println("업로드된div-fileupload 파일 : " + fileName);
    	String path = ImageRepo.UPLOAD_PATH.toString() + fileName;
    	File file = new File(path);
    	pxy.getFile().transferTo(file);
        return map;
    }
}