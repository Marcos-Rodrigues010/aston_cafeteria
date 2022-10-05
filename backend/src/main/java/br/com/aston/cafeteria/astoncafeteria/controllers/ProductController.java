package br.com.aston.cafeteria.astoncafeteria.controllers;

import br.com.aston.cafeteria.astoncafeteria.models.Product;
import br.com.aston.cafeteria.astoncafeteria.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/product")
public class ProductController {

    private ProductService productService;


    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/findAll", produces = "application/json")
    public List<Product> findAll() {
        return productService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/findById/{idProduct}", produces = "application/json")
    public Product findById(@PathVariable Integer idProduct) {
        return productService.findById(idProduct);
    }
}



