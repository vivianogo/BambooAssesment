# Bamboo Assessment
This repository contains work item answers for the questions of assement task 3. These answers are in folders `task3.1` and `task3.2` respectively.

## Task3.1
Contained in `task3.1` folder is an exported postman collection for api testing named `"Bamboo Postman Test.postman_collection.json"`.

### How To Setup
* Install [Postman](https://www.postman.com/downloads/) if you don't already have.
* Open Postman, click on the import button, select the file in `task3.1` folder and click the import button on the prompt to load the collection.
* You can now run the tests.


## Task3.2
This task is an automated test written in [cypress](https://www.cypress.io/). When ran, it navigates to [amazon](https://www.amazon.com) , searches for a shoe and browses the first show that shows up.

### How To Setup
* First of all install [node.js](https://nodejs.org) prefarably v12+ .
* through the command prompt or terminal navigate into `task3.2` folder.
* Execute
   ```
   npm install
   ```
* Then execute
    ```
    npx cypress open
    ```
* cypress opens showing the automated test to run, click the test name and the test runs.