package com.ramen.ranking.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://j6c104.p.ssafy.io:8888")
                .allowedOrigins("http://j6c104.p.ssafy.io:80")
                .allowedOrigins("http://j6c104.p.ssafy.io")
                .allowedMethods("*");
    }
}