package com.example.hospitalManagement.controller;
import com.example.hospitalManagement.doclogin.entity.Appointment;
import com.example.hospitalManagement.doclogin.entity.Medicine;
import com.example.hospitalManagement.entity.Patient;
import com.example.hospitalManagement.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")

public class MedicineController {
    @Autowired
    MedicineRepository medicineRepository;

    public MedicineController(MedicineRepository medicineRepository) {
        super();
        this.medicineRepository = medicineRepository;
    }

    @PostMapping("/insert")
    public Medicine createMedicine(@RequestBody Medicine medicine){
        return medicineRepository.save(medicine);
    }
    @GetMapping("/list")
    public List<Medicine> getAll(){
        return medicineRepository.findAll();
    }
    @DeleteMapping("/medicine/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMedicine(@PathVariable long id) throws AttributeNotFoundException {
        Medicine medicine = medicineRepository.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Appointment with id " + id + " not found"));

        medicineRepository.delete(medicine);

        Map<String, Boolean> response = new HashMap<String,Boolean>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
    @PutMapping("medicine/update/{id")
    public ResponseEntity<Medicine>updateMedicine(@PathVariable long id, @RequestBody Medicine medicineDetails)throws AttributeNotFoundException{
        Medicine medicine = medicineRepository.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Appointment with id " + id + " not found"));
        medicine.setDrug_name(medicineDetails.getDruName());
        medicine.setStock(medicineDetails.getStock());
        medicine.setId(medicineDetails.getId());
        Medicine savedMedicine = medicineRepository.save(medicine);
        return ResponseEntity.ok(savedMedicine);
    }

}

