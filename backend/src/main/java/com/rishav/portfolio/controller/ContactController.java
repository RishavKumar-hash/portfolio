package com.rishav.portfolio.controller;

import com.rishav.portfolio.model.ApiResponse;
import com.rishav.portfolio.model.ContactRequest;
import com.rishav.portfolio.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    /**
     * POST /api/contact
     * Receives contact form data from the React frontend,
     * validates it, then sends an email notification + auto-reply.
     */
    @PostMapping("/contact")
    public ResponseEntity<ApiResponse> handleContact(
            @Valid @RequestBody ContactRequest request) {
        try {
            contactService.sendContactEmail(request);
            return ResponseEntity.ok(
                    new ApiResponse(true, "Message sent successfully! I'll reply within 24 hours.")
            );
        } catch (Exception e) {
            log.error("Failed to send contact email: {}", e.getMessage());
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse(false, "Failed to send message. Please try again or email me directly."));
        }
    }

    /**
     * GET /api/health — quick health-check for the backend
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of(
                "status", "UP",
                "service", "Rishav Portfolio API",
                "version", "1.0.0"
        ));
    }
}
