package br.com.aston.cafeteria.astoncafeteria.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientDto {
    private Integer id;
    private String name;
    private String email;
    private String password;
    private String street;
    private String postcode;
    private String houseNumber;
    private String district;
}
