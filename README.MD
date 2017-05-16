# Customer Management App

A simple **ReactJS** single page application that connects to **stripe.com** API to create and read Customers.
 
## Requirements

 - JDK 8
 - Node (v7.7.3)
 - Docker (version 17.03.1-ce)
 - Docker-Compose (version 1.11.2)

## Before running

You must obtain or have [Strip API secret (API key)](https://stripe.com/) and [google maps API key].
You may set them in `app/src/main/resources/applications.yaml` file or through environment variable:
* `APIS_STRIPE=<your_stripe_sk_secret>`
* `APIS_GOOGLE=<google_maps_API_key>`

See `docker-compose.yml` to set these for docker.

## Instructions

| Command                            | Description                          |
| ---------------------------------- | ------------------------------------ |
| `./gradlew build`                  | Build back-end and front-end apps    |
| `./docker-compose up --build`      | Starts app on port 8080              |

## Design notes

Most of these decisions were made to reduce scope.
* [React-slingshot](https://github.com/coryhouse/react-slingshot) to avoid time-sinking effort into bootstrapping everything.
  * Additional libraries added: `axios`, `redux-logger`, `redux-thunk`, `less`, `less-loader`, `proxy-middleware`, `url`, `antd`
  * [Ant Design](https://ant.design/) UI component library for extraordinary documentation.
  
* Basic spring boot back-end for faster integration with **Stripe**.
* Google maps API address validation is simplified.

## Not Implemented

* Security
* Back-End tests
* Proper customer paging
* More complex test cases
* More refined configuration of frame-works in use
* More refined docker/docker-compose configuration
