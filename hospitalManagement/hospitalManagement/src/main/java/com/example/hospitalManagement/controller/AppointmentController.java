package com.example.hospitalManagement.controller;

import com.example.hospitalManagement.doclogin.entity.Appointment;
import com.example.hospitalManagement.entity.Patient;
import com.example.hospitalManagement.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public AppointmentController(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @PostMapping("/insert")
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @GetMapping("/list")
    public List<Appointment> getAll() {
        return appointmentRepository.findAll();
    }

    @DeleteMapping("/delete/appointments/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable long id) throws AttributeNotFoundException {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Appointment with id " + id + " not found"));

        appointmentRepository.delete(appointment);

        Map<String, Boolean> response = new HashMap<String,Boolean>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
    @PutMapping("appointment/update/{id")
    public ResponseEntity<Appointment>updateAppointment(@PathVariable long id, @RequestBody Appointment appointmentDetails)throws AttributeNotFoundException{
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Appointment with id " + id + " not found"));
        appointment.setAge(appointmentDetails.getAge());
        appointment.setName(appointmentDetails.getName());
        appointment.setNumber(appointmentDetails.getNumber());
        appointment.setSymtomps(appointmentDetails.getSymtomps());
        appointment.setId(appointmentDetails.getId());
        Appointment savedAppointment = appointmentRepository.save(appointment);
        return ResponseEntity.ok(savedAppointment);
    }

}
