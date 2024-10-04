package com.project.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
@SpringBootApplication
public class ProjectEcommerceApplication {
	@RequestMapping("/")
@ResponseBody
String home() {
		return "hello word";
	}
	public static void main(String[] args) {
		SpringApplication.run(ProjectEcommerceApplication.class, args);
	}

}
