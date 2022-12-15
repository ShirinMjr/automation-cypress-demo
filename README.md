## Start here:

* Checking node version
`npm -v`
* Checking nmp (node package manager) version
`npm -v`
* Create node project => Creates package.Json filde
`npm init` to create the project again you need to only run `npm install package.json`



* Install Cypress
`npm install cypress --save-dev`
  * ` --save-dev` installs dependencies

* Get Cypress version
`npx cypress -v`

* Open Cypress
`npx cypress open`

* to get the latest version of cypress
  * `npm install -D cypress@latest`
  * `-D` updates the lates dependencies
  
* Cypress Real Events plugin 
https://github.com/dmtrKovalenko/cypress-real-events
  * `⚡ npm install cypress-real-events`
  * Import it in project available for all the specs. Add this to `e2e.js` under support
    * `import "cypress-real-events";`
