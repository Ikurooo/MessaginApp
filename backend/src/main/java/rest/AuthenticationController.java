package rest;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = AuthenticationController.BASE_PATH)
public class AuthenticationController {

    static final String BASE_PATH = "/session";
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/")
    public String process(Model model, HttpSession session) {
        if (session.isNew()) {
            logger.debug("New session created");
        }
        List<String> messages = getSessionMessages(session);
        model.addAttribute("sessionMessages", messages);
        logger.debug("Session messages retrieved: {}", messages);
        return "index";
    }

    @PostMapping("/persistMessage")
    public String persistMessage(@RequestParam("msg") String msg, HttpServletRequest request) {
        HttpSession session = request.getSession();
        List<String> messages = getSessionMessages(session);
        messages.add(msg);
        session.setAttribute("MY_SESSION_MESSAGES", messages);
        logger.debug("Message '{}' persisted in session", msg);
        return "redirect:/";
    }

    @PostMapping("/destroy")
    public String destroySession(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
            logger.debug("Session invalidated");
        } else {
            logger.warn("No session found to invalidate");
        }
        return "redirect:/";
    }

    private List<String> getSessionMessages(HttpSession session) {
        @SuppressWarnings("unchecked")
        List<String> messages = (List<String>) session.getAttribute("MY_SESSION_MESSAGES");
        if (messages == null) {
            messages = new ArrayList<>();
            session.setAttribute("MY_SESSION_MESSAGES", messages);
        }
        return messages;
    }
}
