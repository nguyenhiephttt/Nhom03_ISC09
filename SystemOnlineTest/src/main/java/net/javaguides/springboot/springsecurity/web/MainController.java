package net.javaguides.springboot.springsecurity.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {

	
	@RequestMapping(value = { "/", "/index.html" }, method = RequestMethod.GET)
    public String index() {	 	
        return "index";
    }
 
	@RequestMapping(value = { "/main.html" }, method = RequestMethod.GET)
    public String main() {	 	
        return "main";
    }
    
    @RequestMapping(value = { "/introduce/introduce.html" }, method = RequestMethod.GET)
    public String introduce() {	 	
        return "introduce";
    }
 
    @RequestMapping(value = { "/suggest/suggest.html" }, method = RequestMethod.GET)
    public String suggest() {	 	
        return "suggest";
    }
 
    @RequestMapping(value = { "/test/test.html" }, method = RequestMethod.GET)
    public String test() {	 	
        return "test";
    }
    
    @GetMapping("/login")
    public String login(Model model) {
        return "login";
    }

    @GetMapping("/user")
    public String userIndex() {
        return "user/index";
    }
}

