package com.demo.orderPlanning.order.services;

import com.demo.orderPlanning.order.entity.Buyer;
import com.demo.orderPlanning.order.repository.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BuyerService {

    @Autowired
    private BuyerRepository buyerRepository;

    public List<Buyer> getAllBuyers() {
        return buyerRepository.findAll();
    }

    public Optional<Buyer> getBuyerById(Long id) {
        return buyerRepository.findById(id);
    }

    public Buyer createBuyer(Buyer buyer) {
        return buyerRepository.save(buyer);
    }

    public Buyer updateBuyer(Long id, Buyer buyerDetails) {
        Buyer buyer = buyerRepository.findById(id).orElseThrow(() -> new RuntimeException("Buyer not found"));
        buyer.setName(buyerDetails.getName());

        return buyerRepository.save(buyer);
    }

    public void deleteBuyer(Long id) {
        Buyer buyer = buyerRepository.findById(id).orElseThrow(() -> new RuntimeException("Buyer not found"));
        buyerRepository.delete(buyer);
    }

}
