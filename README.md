# Tests for Login Functionality

This repository contains test cases for performing simple login tests using the **WebDriverIO** JavaScript framework.

### Prerequisites

- Node.js (of version) installed on your machine

### How to run the test

  1. Clone this git repository and navigate into the cloned repository.
  2. To install the dependencies, run the following command:

     ```bash
     npm install
     ```

  3. To execute the tests, run the following command. This will trigger the tests using the configured test runner.

     ```bash
     npm run wdio
     ```

### Configuration

    The configuration for WebDriverIO is located in the `wdio.conf.js` file. Adjust the configuration based on your needs.

### Folder Structure

    `test/specs`: Contains the test files.
    `test/pageobjects`: Contains page objects used in the tests.

### Additional Notes

    Update the browser capabilities in the configuration file for cross-browser testing.
    Extend and customize the `wdio.conf.js` file for specific requirements.
    Ensure that the WebDriver version matches the browser versions installed on your machine.

### Built With

    WebDriverIO - WebDriver bindings for Node.js.
    Mocha - Test framework.
