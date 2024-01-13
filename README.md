# WebdriverIOLogin
This project demonstrates the usage of WebDriverIO with javascript framework for Login functionality Testing.

## Project Setup
Install Node.js
Instal VS Code
Create a Project Folder in preferred drive
Open the folder in VS Code
Open Terminal and start installation
npm init -y
Install WebDriverIO (npm init wdio) with preferred setup (Mocha framework,ChromeDriver,PageObject setup etc)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites

- Node.js installed on your machine.
- VS Code installed on your machine.

### Installing

1. Clone the repository:
   git clone https://github.com/your-username/your-webdriverio-project.git
   
2.  Navigate to the project directory:
    cd your-webdriverio-project

3.  Install dependencies
    npm install
    
5.  Running the Tests
    Execute the following command to run the tests:    
    npm run wdio
    This will trigger the WebDriverIO tests using the configured test runner.

Configuration
The configuration for WebDriverIO is located in the wdio.conf.js file. Adjust the configuration based on your needs.

Folder Structure
test/specs: Contains the test files.
test/pageobjects: Contains page objects used in the tests.

Additional Notes
Update the browser capabilities in the configuration file for cross-browser testing.
Extend and customize the wdio.conf.js file for specific requirements.
Ensure that the WebDriver version matches the browser versions installed on your machine.

Built With
WebDriverIO - WebDriver bindings for Node.js.
Mocha - Test framework.



