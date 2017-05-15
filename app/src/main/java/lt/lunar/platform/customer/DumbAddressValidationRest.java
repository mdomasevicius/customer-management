package lt.lunar.platform.customer;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;

import java.util.Collection;
import java.util.HashMap;

import static org.springframework.http.ResponseEntity.*;
import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RequestMapping("/api/address-validation")
@RestController
class DumbAddressValidationRest {

    @Value("${apis.google}")
    private String googleApiKey;
    private final RestOperations restOperations;

    DumbAddressValidationRest() {
        this.restOperations = new RestTemplate();
    }

    //For show and tell
    @PostMapping
    ResponseEntity<Void> getAddressStatus(@RequestBody CustomerResource request) {
        String googleAddress = request.getCity() +
            "+" + request.getStreet() +
            "+" + request.getHouseNumber() +
            "+" + request.getZipCode();

        ResponseEntity<HashMap> response = restOperations.getForEntity(
            "https://maps.googleapis.com/maps/api/geocode" +
                "/json" +
                "?address=" + googleAddress  +
                "&key=" + googleApiKey,
            HashMap.class);

        if (!response.getStatusCode().is2xxSuccessful()) {
            return badRequest().build();
        }

        HashMap body = response.getBody();
        boolean addressValid =  "OK".equals(body.get("status")) && ((Collection) body.get("results")).size() > 0;

        if (addressValid) {
            return ok().build();
        } else {
            return badRequest().build();
        }
    }

}
