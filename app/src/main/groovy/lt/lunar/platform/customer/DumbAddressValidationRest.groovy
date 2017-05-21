package lt.lunar.platform.customer

import groovy.transform.CompileStatic
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestOperations
import org.springframework.web.client.RestTemplate

import static org.springframework.http.ResponseEntity.badRequest
import static org.springframework.http.ResponseEntity.ok

@RequestMapping('/api/address-validation')
@RestController
@CompileStatic
class DumbAddressValidationRest {

    @Value('${apis.google}')
    String googleApiKey
    final RestOperations restOperations

    DumbAddressValidationRest() {
        this.restOperations = new RestTemplate()
    }

    //For show and tell
    @PostMapping
    ResponseEntity<Void> getAddressStatus(@RequestBody CustomerResource request) {
        String googleAddress = "${request.city}+${request.street}+${request.houseNumber}+${request.zipCode}"

        ResponseEntity<HashMap> response = restOperations.getForEntity(
            'https://maps.googleapis.com/maps/api/geocode' +
                '/json' +
                "?address=$googleAddress" +
                "&key=$googleApiKey",
            HashMap)

        if (!response.statusCode.is2xxSuccessful()) {
            return badRequest().build()
        }

        HashMap body = response.body
        boolean addressValid =  'OK' == body.status && ((Collection) body.results).size() > 0

        if (addressValid) {
            return ok().build()
        } else {
            return badRequest().build()
        }
    }

}
