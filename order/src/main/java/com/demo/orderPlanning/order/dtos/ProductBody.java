package com.demo.orderPlanning.order.dtos;

public record ProductBody(
    String name,
    double price,
    Long orderId
) {
}
