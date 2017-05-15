package lt.lunar.platform.customer;

import com.stripe.Stripe;
import com.stripe.exception.*;
import com.stripe.model.Customer;
import com.stripe.model.CustomerCollection;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static org.springframework.http.ResponseEntity.ok;

@RequestMapping("/api/customers")
@RestController
class CustomerRest {

    public CustomerRest(@Value("${apis.stripe}") String stripeApiKey) {
        Stripe.apiKey = stripeApiKey;
    }

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
    ResponseEntity<CustomerResource> findOne(@PathVariable String id) {
        Customer customer;
        try {
            customer = Customer.retrieve(id);
        } catch (Throwable t) {
            throw new NotFoundException();
        }
        CustomerResource customerResource = toResource(customer);
        return ok(customerResource);
    }

    @PostMapping
    ResponseEntity create(@RequestBody CustomerResource request) {
        Map<String, Object> customerParams = new HashMap<>();
        customerParams.put("email", request.getEmail());

        Map<String, Object> customerMeta = new HashMap<>();
        customerMeta.put("fullName", request.getFullName());
        customerMeta.put("city", request.getCity());
        customerMeta.put("street", request.getStreet());
        customerMeta.put("houseNumber", request.getHouseNumber());
        customerMeta.put("zipCode", request.getZipCode());
        customerParams.put("metadata", customerMeta);

        Customer customer;
        try {
            customer = Customer.create(customerParams);
        } catch (Throwable e) {
            throw new BadRequestException();
        }

        return ok(toResource(customer));
    }

    private CustomerResource toResource(Customer customer) {
        CustomerResource resource = new CustomerResource();
        resource.setId(customer.getId());
        resource.setEmail(customer.getEmail());
        resource.setFullName(customer.getMetadata().get("fullName"));
        resource.setCity(customer.getMetadata().get("city"));
        resource.setStreet(customer.getMetadata().get("street"));
        resource.setHouseNumber(customer.getMetadata().get("houseNumber"));
        resource.setZipCode(customer.getMetadata().get("zipCode"));
        return resource;
    }
}
