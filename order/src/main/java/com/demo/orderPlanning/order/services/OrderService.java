package com.demo.orderPlanning.order.services;

import com.demo.orderPlanning.order.dtos.OrderBody;
import com.demo.orderPlanning.order.entity.Buyer;
import com.demo.orderPlanning.order.entity.Order;
import com.demo.orderPlanning.order.entity.Supplier;
import com.demo.orderPlanning.order.repository.BuyerRepository;
import com.demo.orderPlanning.order.repository.OrderRepository;
import com.demo.orderPlanning.order.repository.ProductRepository;
import com.demo.orderPlanning.order.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private BuyerRepository buyerRepository;

    @Autowired
    private SupplierRepository supplierRepository;

    @Autowired
    private ProductRepository productRepository;

    public Order createOrder(OrderBody request) {
        Order order = new Order();

        order.setBuyer(getBuyerById(request.buyerId()));
        order.setSupplier(getSupplierById(request.supplierId()));
        order.setProducts(productRepository.findAllById(request.productIds()));
        order.setTotalAmount(request.totalAmount());

        return orderRepository.save(order);
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order updateOrder(Long id, OrderBody request) {
        Optional<Order> existing = orderRepository.findById(id);
        if (existing.isPresent()) {
            Order order = existing.get();

            if (request.buyerId() != null) {
                order.setBuyer(getBuyerById(request.buyerId()));
            }

            if (request.supplierId() != null) {
                order.setSupplier(getSupplierById(request.supplierId()));
            }

            if (request.productIds() != null) {
                order.setProducts(productRepository.findAllById(request.productIds()));
            }

            order.setTotalAmount(request.totalAmount());
            return orderRepository.save(order);
        }
        throw new RuntimeException("Order not found");
    }

    public void deleteOrder(Long id) {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
        } else {
            throw new RuntimeException("Order not found");
        }
    }

    private Buyer getBuyerById(Long buyerId) {
        return buyerRepository.findById(buyerId).orElseThrow(() -> new RuntimeException("Buyer not found"));
    }

    private Supplier getSupplierById(Long supplierId) {
        return supplierRepository.findById(supplierId).orElseThrow(() -> new RuntimeException("Supplier not found"));
    }
}
