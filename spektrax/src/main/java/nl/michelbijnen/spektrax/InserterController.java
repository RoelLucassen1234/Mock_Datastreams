package nl.michelbijnen.spektrax;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@CrossOrigin
@RestController
public class InserterController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TestResultRepository repository;

    @GetMapping
    public ResponseEntity<List<TestResult>> getAll() {
        List<TestResult> testResults = this.repository.findAll();
        return ResponseEntity.ok(testResults);
    }

    @GetMapping("/last")
    public ResponseEntity<TestResult> getLast() {
        List<TestResult> testResults = this.repository.findAll();
        TestResult lastTestResult = testResults.get(0);
        for (TestResult testResult : testResults) {
            if (testResult.getDate().after(lastTestResult.getDate())) {
                lastTestResult = testResult;
            }
        }
        return ResponseEntity.ok(lastTestResult);
    }

    @PostMapping
    public ResponseEntity insert() throws URISyntaxException {
        TestResult testResult = new TestResult();
        testResult.setTestId(UUID.randomUUID().toString());
        testResult.setDate(Date.from(Instant.now()));
        testResult.setLocation("Eindhoven");
        Random rnd = new Random();
        testResult.setResult(rnd.nextBoolean());

        this.repository.save(testResult);

        this.logger.info("Test with testId " + testResult.getTestId() + " successfully inserted");

        return ResponseEntity.created(new URI("/" + testResult.getTestId())).build();
    }
}
