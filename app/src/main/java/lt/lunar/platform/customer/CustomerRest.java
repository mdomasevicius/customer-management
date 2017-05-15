package lt.lunar.platform.customer;

import com.stripe.Stripe;
import com.stripe.exception.*;
import com.stripe.model.Customer;
import com.stripe.model.CustomerCollection;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.ResponseEntity.*;


@RequestMapping("/api/customers")
@RestController
class CustomerRest {

    @GetMapping
    ResponseEntity<CollectionResource<CustomerResource>> list() throws CardException, APIException, AuthenticationException, InvalidRequestException, APIConnectionException {
        HashMap<String, Object> params = new HashMap<>();
        params.put("limit", 50);
        CustomerCollection stripeResponse = Customer.list(params);
        List<CustomerResource> customers = stripeResponse.getData()
            .stream()
            .map(c -> {
                CustomerResource customer = new CustomerResource();
                customer.setId(customer.getId());
                customer.setEmail(c.getEmail());
                customer.setFullName(c.getMetadata().get("fullName"));
                customer.setCity(c.getMetadata().get("city"));
                customer.setStreet(c.getMetadata().get("street"));
                customer.setHouseNumber(c.getMetadata().get("houseNumber"));
                customer.setZipCode(c.getMetadata().get("zipCode"));
                return customer;
            }).collect(Collectors.toList());
        return ok(new CollectionResource<>(customers));
    }
}
