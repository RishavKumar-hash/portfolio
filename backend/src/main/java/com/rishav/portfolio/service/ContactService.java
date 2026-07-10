package com.rishav.portfolio.service;

import com.rishav.portfolio.model.ContactRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ContactService {

    private final JavaMailSender mailSender;

    @Value("${app.contact.recipient}")
    private String recipientEmail;

    public void sendContactEmail(ContactRequest request) {
        log.info("New contact form submission from: {} <{}>", request.getName(), request.getEmail());

        // Email to yourself (portfolio owner)
        SimpleMailMessage toOwner = new SimpleMailMessage();
        toOwner.setTo(recipientEmail);
        toOwner.setReplyTo(request.getEmail());
        toOwner.setSubject("Portfolio Contact: " +
                (request.getSubject() != null && !request.getSubject().isBlank()
                        ? request.getSubject()
                        : "New message from " + request.getName()));
        toOwner.setText(buildOwnerEmailBody(request));
        mailSender.send(toOwner);

        // Auto-reply to sender
        SimpleMailMessage toSender = new SimpleMailMessage();
        toSender.setTo(request.getEmail());
        toSender.setSubject("Thanks for reaching out, " + request.getName() + "!");
        toSender.setText(buildAutoReplyBody(request.getName()));
        mailSender.send(toSender);

        log.info("Contact emails sent successfully for: {}", request.getEmail());
    }

    private String buildOwnerEmailBody(ContactRequest req) {
        return """
                📬 New Portfolio Contact
                ─────────────────────────
                Name    : %s
                Email   : %s
                Subject : %s
                
                Message:
                %s
                
                ─────────────────────────
                Sent via rishavkumar.dev portfolio
                """.formatted(
                req.getName(),
                req.getEmail(),
                req.getSubject() != null ? req.getSubject() : "(no subject)",
                req.getMessage()
        );
    }

    private String buildAutoReplyBody(String name) {
        return """
                Hi %s,
                
                Thanks for reaching out! I've received your message and will get back to you within 24 hours.
                
                In the meantime, feel free to connect with me on:
                • LinkedIn: linkedin.com/in/rishavkr5302
                • GitHub  : github.com/rishavkr5302
                
                Best regards,
                Rishav Kumar
                Backend Software Engineer | Nokia via TCS
                """.formatted(name);
    }
}
