package br.com.aston.cafeteria.astoncafeteria.controllers;


import br.com.aston.cafeteria.astoncafeteria.dto.ClientDto;
import br.com.aston.cafeteria.astoncafeteria.models.Client;
import br.com.aston.cafeteria.astoncafeteria.models.Product;
import br.com.aston.cafeteria.astoncafeteria.services.ClientService;
import br.com.aston.cafeteria.astoncafeteria.utils.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/client")
public class ClientController {

    private ClientService clientService;


    @Autowired
    public ClientController(ClientService clientService){
        this.clientService = clientService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/signup", produces = "application/json")
    public Message signup(@RequestBody Client client) {
        return clientService.signup(client);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/signin", produces = "application/json")
    public ClientDto signin(@RequestBody ClientDto client) {
        return clientService.signin(client);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/findById/{idClient}", produces = "application/json")
    public ClientDto findById(@PathVariable Integer idClient) {
        return clientService.findById(idClient);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/addFavorite/{idClient}/{idProduct}", produces = "application/json")
    public void addFavorite(@PathVariable Integer idClient, @PathVariable Integer idProduct) {
        clientService.addFavorite(idClient, idProduct);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/getFavoritesByUserId/{idClient}", produces = "application/json")
    public List<Product> getFavoritesByUserId(@PathVariable Integer idClient) {
        return clientService.getFavoritesByUserId(idClient);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/removeFavorite/{idClient}/{idProduct}", produces = "application/json")
    public void removeFavorites(@PathVariable Integer idClient, @PathVariable Integer idProduct) {
        clientService.removeFavorite(idClient, idProduct);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/addToCart/{idClient}/{idProduct}", produces = "application/json")
    public void addToCart(@PathVariable Integer idClient, @PathVariable Integer idProduct) {
        clientService.addToCart(idClient, idProduct);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/getCartByUserId/{idClient}", produces = "application/json")
    public List<Product> getCartByUserId(@PathVariable Integer idClient) {
        return clientService.getCartByUserId(idClient);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/removeFromCart/{idClient}/{idProduct}", produces = "application/json")
    public void removeFromCart(@PathVariable Integer idClient, @PathVariable Integer idProduct) {
        clientService.removeFromCart(idClient, idProduct);
    }
}
