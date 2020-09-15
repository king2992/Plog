package kr.ac.dju.plog.Controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController {

    @PostMapping("/login")
	int login(@RequestBody Map<String, Object> loginInfo, HttpSession session) {
        session.setAttribute("id", loginInfo.get("id"));
        System.out.println(loginInfo.toString());
        System.out.println("session : " + session.getAttribute("id"));

        return 1;
    }
    
}