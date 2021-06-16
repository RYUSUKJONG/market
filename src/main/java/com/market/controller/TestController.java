package com.market.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.market.service.TestService;

@RestController
public class TestController {
	
	@Autowired
	private TestService service;
	
	@RequestMapping(value="/test")
	public Map<String, Object> test() {
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("name", "류숙종");
		result.put("age", 26);
		return result;
	}
	
	@RequestMapping(value="/getList")
	public List<Map<String, Object>> getList() {
		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String, Object>> list = null;
		
		try {
			list = service.getList();
			result.put("data", list);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

}
