package com.example.hospitalManagement.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String name;

    @Column(name = "age")
    private String age;

    @Column(name = "blood_group")
    private String blood;

    @Column(name = "prescription")
    private String prescription;

    @Column(name = "dose")
    private String dose;

    @Column(name="urgency")
    private String urgency;

    @Column(name="fees")
    private String fees;

    // Default constructor
    public Patient() {
    }

    // Parameterized constructor
    public Patient(String name, String age, String blood, String prescription, String dose, String urgency, String fees) {
        this.name = name;
        this.age = age;
        this.blood = blood;
        this.prescription = prescription;
        this.dose = dose;
        this.urgency = urgency;
        this.fees = fees;
    }

    // Getters and Setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getBlood() {
        return blood;
    }

    public void setBlood(String blood) {
        this.blood = blood;
    }

    public String getPrescription() {
        return prescription;
    }

    public void setPrescription(String prescription) {
        this.prescription = prescription;
    }

    public String getDose() {
        return dose;
    }

    public void setDose(String dose) {
        this.dose = dose;
    }

    public String getUrgency() {
        return urgency;
    }

    public void setUrgency(String urgency) {
        this.urgency = urgency;
    }

    public String getFees() {
        return fees;
    }

    public void setFees(String fees) {
        this.fees = fees;
    }
}
