package lt.lunar.platform.customer

import com.stripe.Stripe
import com.stripe.exception.*
import com.stripe.model.Customer
import com.stripe.model.CustomerCollection
import groovy.transform.CompileStatic
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

import static org.springframework.http.ResponseEntity.ok

@RequestMapping('/api/customers')
@RestController
@CompileStatic
class CustomerRest {

    CustomerRest(@Value('${apis.stripe}') String stripeApiKey) {
        Stripe.apiKey = stripeApiKey
    }

    @GetMapping
    ResponseEntity<CollectionResource<CustomerResource>> list() throws CardException, APIException, AuthenticationException, InvalidRequestException, APIConnectionException {
        CustomerCollection stripeResponse = Customer.list([limit: 50] as HashMap<String, Object>)
        List<CustomerResource> customers = stripeResponse.data.collect { toResource(it) }
        return ok(new CollectionResource<>(customers))
    }

    @GetMapping('/{id}')
    ResponseEntity<CustomerResource> findOne(@PathVariable String id) {
        Customer customer
        try {
            customer = Customer.retrieve(id)
        } catch (Throwable t) {
            throw new NotFoundException()
        }
        CustomerResource customerResource = toResource(customer)
        return ok(customerResource)
    }

    @PostMapping
    ResponseEntity create(@RequestBody CustomerResource request) {
        Customer customer
        try {
            customer = Customer.create([
                email: request.email,
                metadata: [
                    fullName: request.fullName,
                    city: request.city,
                    street: request.street,
                    houseNumber: request.houseNumber,
                    zipCode: request.zipCode
                ]
            ] as HashMap<String, Object>)
        } catch (Throwable ignored) {
            throw new BadRequestException()
        }

        return ok(toResource(customer))
    }

    private static CustomerResource toResource(Customer customer) {
        return new CustomerResource(
            id: customer.id,
            email: customer.email,
            fullName: customer.metadata.fullName,
            city: customer.metadata.city,
            street: customer.metadata.street,
            houseNumber: customer.metadata.houseNumber,
            zipCode: customer.metadata.zipCode
        )
    }
}
