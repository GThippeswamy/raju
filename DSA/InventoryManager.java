package com.masai;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class InventoryManager {
    private Map<String, Integer> stockMap = new HashMap<>();
    private Set<String> categories = new HashSet<>();
    private List<String> salesHistory = new ArrayList();

    public void addProductStock(String sku, int quantity) {
        stockMap.put(sku, stockMap.getOrDefault(sku, 0) + quantity);
    }

    public int getProductStock(String sku) {

        return stockMap.getOrDefault(sku, 0);
    }

    public void addCategory(String categoryName) {
        categories.add(categoryName);
    }

    public Set<String> getAvailableCategories() {
        return categories;
    }

    public void recordSale(String sku) {
        salesHistory.add(sku);
    }

    public List<String> getSalesHistory() {
        return salesHistory;
    }

    public static void main(String[] args) {
        InventoryManager res = new InventoryManager();
        res.addProductStock("SKU123", 56);
        res.addProductStock("SKU143", 86);
        res.addProductStock("SKU103", 90);
        System.out.println("Stock of SKU123 : " + res.getProductStock("SKU123"));
        System.out.println("Stock of SKU143 : " + res.getProductStock("SKU143"));
        System.out.println("Stock of SKU103 : " + res.getProductStock("SKU103"));
        System.out.println(" categories : " + res.getAvailableCategories());
        res.recordSale("SKU123");
        res.recordSale("SKU143");
        res.recordSale("SKU103");
        System.out.println("salesHistory : " + res.getSalesHistory());
    }
}
