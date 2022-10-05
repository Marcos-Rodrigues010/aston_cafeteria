package br.com.aston.cafeteria.astoncafeteria.services;

import br.com.aston.cafeteria.astoncafeteria.dto.ClientDto;
import br.com.aston.cafeteria.astoncafeteria.models.Client;
import br.com.aston.cafeteria.astoncafeteria.models.Product;
import br.com.aston.cafeteria.astoncafeteria.repository.ClientRepository;
import br.com.aston.cafeteria.astoncafeteria.repository.ProductRepository;
import br.com.aston.cafeteria.astoncafeteria.utils.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;


@Service
public class ClientService {

    private ClientRepository clientRepository;
    private ProductRepository productRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository, ProductRepository productRepository){
        this.clientRepository = clientRepository;
        this.productRepository = productRepository;
    }

    public Message signup(Client client) {
        Message message = validateData(client);

        if (message.getBody() == null) {
            clientRepository.save(client);

            message.setTitle("Sucesso!");
            message.setBody("Cadastro realizado com sucesso.");
        }

        return message;
    }

    public Message validateData(Client client) {

        Message message = new Message();
        if (
                client.getName() == null ||
                client.getName().trim().equals("") ||
                client.getCpf() == null ||
                client.getCpf().trim().equals("") ||
                client.getRg() == null ||
                client.getRg().trim().equals("") ||
                client.getStreet() == null ||
                client.getStreet().trim().equals("") ||
                client.getHouseNumber() == null ||
                client.getHouseNumber().trim().equals("") ||
                client.getDistrict() == null ||
                client.getDistrict().trim().equals("") ||
                client.getPostcode() == null ||
                client.getPostcode().trim().equals("") ||
                client.getMobileNumber() == null ||
                client.getMobileNumber().trim().equals("") ||
                client.getEmail() == null ||
                client.getEmail().trim().equals("") ||
                client.getPassword() == null ||
                client.getPassword().trim().equals("")
        ) {
            return new Message("Erro!", "Dados inválidos");
        }
        return message;
    }

    public ClientDto signin(ClientDto clientDto) {
        Client client = clientRepository.findByEmailAndPassword(clientDto.getEmail(), clientDto.getPassword());

        ClientDto user = new ClientDto();
        user.setId(client.getId());
        user.setName(client.getName());

        return user;
    }

    public ClientDto findById(Integer idClient) {
        Client client = clientRepository.findById(idClient)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        ClientDto clientDto = new ClientDto();
        clientDto.setName(client.getName());
        clientDto.setId(client.getId());
        clientDto.setStreet(client.getStreet());
        clientDto.setPostcode(client.getPostcode());
        clientDto.setHouseNumber(client.getHouseNumber());
        clientDto.setDistrict(client.getDistrict());

        return clientDto;
    }

    public void addFavorite(Integer idClient, Integer idProduct) {
        Client client = clientRepository.findById(idClient)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        Product product = productRepository.findById(idProduct)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        client.getFavorites().add(product);
        clientRepository.save(client);
    }

    public List<Product> getFavoritesByUserId(Integer idClient) {
        Client client = clientRepository.findById(idClient)
            .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        return client.getFavorites();
    }

    public void removeFavorite(Integer idClient, Integer idProduct) {
        Client client = clientRepository.findById(idClient)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        Product product = productRepository.findById(idProduct)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        client.getFavorites().remove(product);
        clientRepository.save(client);
    }

    public void addToCart(Integer idClient, Integer idProduct) {
        Client client = clientRepository.findById(idClient)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        Product product = productRepository.findById(idProduct)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        client.getCart().add(product);
        clientRepository.save(client);
    }

    public List<Product> getCartByUserId(Integer idClient) {
        Client client = clientRepository.findById(idClient)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        return client.getCart();
    }

    public void removeFromCart(Integer idClient, Integer idProduct) {
        Client client = clientRepository.findById(idClient)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        Product product = productRepository.findById(idProduct)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        client.getCart().remove(product);
        clientRepository.save(client);
    }
}
