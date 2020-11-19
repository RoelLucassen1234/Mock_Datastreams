package nl.michelbijnen.spektrax;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
public class TestResult {
    @Id
    private String testId;
    private String location;
    private Date date;
    private boolean result;
}
