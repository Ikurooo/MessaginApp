package app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Messaging {

    // https://phoenixnap.com/kb/install-cassandra-on-windows
    public static void main(String[] args) {
        SpringApplication.run(Messaging.class, args);
    }

}