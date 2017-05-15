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
            .map(c -> toResource(c))
            .collect(Collectors.toList());
        return ok(new CollectionResource<>(customers));
    }

    @GetMapping("/{id}")
    ResponseEntity<CustomerResource> findOne(@PathVariable String id) throws CardException, APIException, AuthenticationException, InvalidRequestException, APIConnectionException {
        Customer customer;
        try {
            customer = Customer.retrieve(id);
        } catch (Throwable t) {
            throw new NotFoundException();
        }
        CustomerResource customerResource = toResource(customer);
        return ok(customerResource);
    }

    private CustomerResource toResource(Customer c) {
        CustomerResource resource = new CustomerResource();
        resource.setId(c.getId());
        resource.setEmail(c.getEmail());
        resource.setFullName(c.getMetadata().get("fullName"));
        resource.setCity(c.getMetadata().get("city"));
        resource.setStreet(c.getMetadata().get("street"));
        resource.setHouseNumber(c.getMetadata().get("houseNumber"));
        resource.setZipCode(c.getMetadata().get("zipCode"));
        return resource;
    }
}
