package com.example.hospitalManagement.repository;

import com.example.hospitalManagement.doclogin.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineRepository extends JpaRepository<Medicine,Long> {

}
