package com.demo.orderPlanning.order.dtos;

import java.util.List;

public record OrderBody(
    Long buyerId,
    Long supplierId,
    List<Long> productIds,
    double totalAmount
) {
}
