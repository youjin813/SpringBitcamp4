package com.bitcamp.web.util;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;
@Data @Lazy
@Component
public class FileProxy{
	private MultipartFile file;
	private List<MultipartFile> files;

}
