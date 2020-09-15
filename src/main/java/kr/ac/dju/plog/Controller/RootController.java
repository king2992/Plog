package kr.ac.dju.plog.Controller;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

	@RequestMapping(value="/api", method = RequestMethod.POST)
	int home(HttpSession session){
		int result;

		if(session.getAttribute("id") == null){
			result = 0;
		}else{
			result = 1;
		}

		System.out.println(result);
		return 1;
	}

}