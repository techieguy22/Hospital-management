package com.example.hospitalManagement.doclogin.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "appointments")
public class Appointment {
    @Override
    public String toString() {
        return "Appointment{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age='" + age + '\'' +
                ", symtomps='" + symtomps + '\'' +
                ", number='" + number + '\'' +
                '}';
    }
    public Appointment(){
    }
    public Appointment(long id, String name, String age, String symtomps, String number ){
        super();
        this.id = id;
        this.age = age;
        this.name = name;
        this.symtomps = symtomps;
        this.number = number;
    }
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

    public String getSymtomps() {
        return symtomps;
    }

    public void setSymtomps(String symtomps) {
        this.symtomps = symtomps;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String age;
    private String symtomps;
    private String number;

}
