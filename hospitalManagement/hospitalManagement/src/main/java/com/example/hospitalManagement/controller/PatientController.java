package com.example.hospitalManagement.controller;

import com.example.hospitalManagement.doclogin.entity.Medicine;
import com.example.hospitalManagement.entity.Patient;
import com.example.hospitalManagement.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PatientController {
    public PatientController(PatientRepository patientRepository) {
        super();
        this.patientRepository = patientRepository;
    }

    @Autowired
    PatientRepository patientRepository;
    @PostMapping("/insert")
    public Patient createPatient(@RequestBody Patient patient){
        return patientRepository.save(patient);
    }

    @GetMapping("/list")
    public List<Patient> getAll(){
        return patientRepository.findAll();
    }
    @DeleteMapping("/patient/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMedicine(@PathVariable long id) throws AttributeNotFoundException {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Appointment with id " + id + " not found"));

        patientRepository.delete(patient);

        Map<String, Boolean> response = new HashMap<String,Boolean>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
    @PutMapping("patient/update/{id")
    public ResponseEntity<Patient>updatePatient(@PathVariable long id, @RequestBody Patient patientDetails)throws AttributeNotFoundException{
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Appointment with id " + id + " not found"));
        patient.setAge(patientDetails.getAge());
        patient.setName(patientDetails.getName());
        patient.setDose(patientDetails.getDose());
        patient.setBlood(patientDetails.getBlood());
        patient.setId(patientDetails.getId());
        patient.setFees(patientDetails.getFees() );
        patient.setPrescription(patientDetails.getPrescription());
        patient.setUrgency(patientDetails.getUrgency());
        Patient savedPatient = patientRepository.save(patient);
        return ResponseEntity.ok(savedPatient);
    }

}
