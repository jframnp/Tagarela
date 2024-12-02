package com.example.SpringBoot2.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull; // Import necessário para a anotação
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) { // Adiciona a anotação @NonNull
        registry.addMapping("/**") // Permitir acesso a todos os endpoints
                .allowedOrigins("http://localhost:3000") // Substitua pelo domínio do seu frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos permitidos
                .allowedHeaders("*") // Cabeçalhos permitidos
                .allowCredentials(true); // Permitir envio de credenciais, se necessário
    }
}