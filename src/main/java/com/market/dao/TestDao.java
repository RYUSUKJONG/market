package com.market.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class TestDao {
	
	@Autowired
	private JdbcTemplate sql;
	
	public List<Map<String, Object>> getList() throws SQLException{
		String query  = "SELECT	test_seq testSeq, test_name testName, test_id testId FROM test";
		return sql.queryForList(query);
	}
}
