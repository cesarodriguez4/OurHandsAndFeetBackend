# Our Hands And Feet Back end
[![CircleCI](https://circleci.com/gh/UltimatePromotions/OurHandsAndFeetBackend.svg?style=svg)](https://circleci.com/gh/UltimatePromotions/OurHandsAndFeetBackend)

#Install
- npm install
- Request a copy of the .env file, which includes credentials to development mLab and to connect to the Google Auth Service<br><br>

#Run the server
<b>npm start</b> starts the express server at localhost:7000<br>
<br>
<b>npm run debug</b> also starts the node debugger, which allows you to use Chrome browser to debug. You should also install the NIM add-on to Chrome and set it to automatic mode.

#Authorization
The .env contains a variable that points to the localhost of the front end.<br>
Change this to be either the development (9000) or production (8080) server port.

#test
<b>npm test</b><br>
runs the tests and generates a coverage report. This report folder should remain outside of the test folder so that Mocca does not confuse the files inside coverage with files that it should be testing.<br><br>
<b>npm run test:debug</b><br>
runs the tests and allows debugging within a Chrome browser. If you install the NIM chrome extension, and set it to automatic mode, then Chrome will open automatically after you run this command.
