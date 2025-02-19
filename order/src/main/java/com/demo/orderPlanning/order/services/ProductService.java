package com.demo.orderPlanning.order.services;

import com.demo.orderPlanning.order.dtos.ProductBody;
import com.demo.orderPlanning.order.entity.Order;
import com.demo.orderPlanning.order.entity.Product;
import com.demo.orderPlanning.order.repository.OrderRepository;
import com.demo.orderPlanning.order.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    private OrderRepository orderRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Product createProduct(ProductBody product) {
        Product newProduct = new Product(
            product.name(),
            product.price()
        );

        return productRepository.save(newProduct);
    }

    public Product updateProduct(Long id, ProductBody productDetails) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));

        product.setName(productDetails.name());
        product.setPrice(productDetails.price());

        Optional<Order> order = orderRepository.findById(productDetails.orderId());

        if (order.isPresent()) {
            product.setOrder(order.get());
        } else {
            throw new RuntimeException("Order not found");
        }

        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        productRepository.delete(product);
    }
}