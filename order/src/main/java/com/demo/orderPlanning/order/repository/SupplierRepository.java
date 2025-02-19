package com.demo.orderPlanning.order.repository;

import com.demo.orderPlanning.order.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
