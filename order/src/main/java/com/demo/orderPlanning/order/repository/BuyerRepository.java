package com.demo.orderPlanning.order.repository;

import com.demo.orderPlanning.order.entity.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuyerRepository extends JpaRepository<Buyer, Long> {
}
