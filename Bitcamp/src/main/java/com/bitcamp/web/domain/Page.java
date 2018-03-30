package com.bitcamp.web.domain;

import org.springframework.stereotype.Component;

@Component
public class Page {
	int pageNum,totalCount,pageSize,blockSize,startRow,endRow,pageStart,pageEnd,totalPage;
	//pageNum 지금 페이지
	boolean prevBlock,nextBlock;
	
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
		
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getBlockSize() {
		return blockSize;
	}
	public void setBlockSize(int blockSize) {
		this.blockSize = blockSize;
	}
	public int getStartRow() {
		return startRow;
	}
	public void setStartRow(int startRow) {
		this.startRow = (pageNum-1)*pageSize +1;
	}
	public int getEndRow() {
		return endRow;
	}
	public void setEndRow(int endRow) {
		this.endRow = pageSize * pageNum;
	}
	public int getPageStart() {
		return pageStart;
	}
	public void setPageStart(int pageStart) {
		this.pageStart =	
		/*
		 (1,2,3,4,5) -1 일때 몫은 0 => pageStart 1 : (5*0)+1
		 (6,7,8,9,10) -1 일때 몫은 1 => pageStart 6 : (5*1)+1
		 (11,12,13,14,15) -1 일때 몫은 2 => pageStart 11 : (5*2)+1
		 (16,17,18,19,20) -1 일때 몫은 3 => pageStart 16 : (5*3)+1
		 (21,22,23,24,25) -1 일때 몫은 4 => pageStart 21 : (5*4)+1
		  */
		(blockSize*((pageNum-1)/blockSize))+1;
	}
	public int getPageEnd() {
		return pageEnd;
	}
	public void setPageEnd(int pageEnd) {
		this.pageEnd = (totalPage==pageNum) ? totalPage:(pageStart+blockSize)-1;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = (totalCount % pageSize == 0) ? totalCount/pageSize : (totalCount/pageSize)+1;
	}	
	public boolean isPrevBlock() {
		return prevBlock;
	}
	public void setPrevBlock(boolean prevBlock) {
		this.prevBlock = (pageNum > 5) ? true : false;
	}
	public boolean isNextBlock() {
		return nextBlock;
	}
	public void setNextBlock(boolean nextBlock) {
		this.nextBlock = (pageNum<totalPage) ? true : false;
		
	}
}
