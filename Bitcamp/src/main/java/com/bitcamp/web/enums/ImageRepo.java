package com.bitcamp.web.enums;

import java.io.File;

public enum ImageRepo {
	UPLOAD_PATH{
		@Override
		public String toString() {
			return "C:"+ File.separator + "Users" 
					+ File.separator + "hb1002" 
					+ File.separator + "git" 
					+ File.separator + "SpringBitcamp"
					+ File.separator +"Bitcamp"
					+ File.separator +"src"
					+ File.separator + "main"
					+ File.separator + "webapp"
					+ File.separator +"resources"
					+ File.separator +"img/";
		}
	}
}
