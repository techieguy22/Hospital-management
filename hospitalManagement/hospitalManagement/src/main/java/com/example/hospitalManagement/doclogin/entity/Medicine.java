package com.example.hospitalManagement.doclogin.entity;

import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;

@Entity
@Table(name = "medicines")
public class Medicine {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "drugName")
    private String drugName;
    private Medicine(){

    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDruName() {
        return drugName;
    }

    public void setDrug_name(String drugName) {
        this.drugName = drugName;
    }

    public String getStock() {
        return stock;
    }

    public void setStock(String stock) {
        this.stock = stock;
    }

    private String stock;

    public Medicine(long id, String stock, String drugName){
        super();
        this.id= id;
        this.stock = stock;
        this.drugName = drugName;
    }

}
