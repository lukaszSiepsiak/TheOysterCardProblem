How to use this project?

1. Clone project from github to your environment
2. Install all dependencies. Use terminal and invoke this command: npm i
3. Build your project. Use NPM SCRIPTS tool (build:dev) and click Play button or use terminal and invoke this command: npm run build:dev
4. If you can start application on browser side:
    a) start development server. Use NPM SCRIPTS tool (start:dev option) and click Play button or use terminal and invoke this command: npm run start:dev
    b) open browser and load the page at the address: localhost:3000
5. If you can invoke tests:
    a) start karma configuration. Use NPM SCRIPTS tool (test option) and click Play button or use terminal and invoke this command: npm run test
    b) in terminal you can see completed tests

To properly invoke methods you must:

1. Create OysterCard object
2. Invoke rechargeCard() method on OysterCard object with parameter:
    a) amount parameter of card balance
3. Invoke setStartStation() method on OysterCard object with two parameters:
    a) station which is start station
    b) type of transport
4. Invoke enterStation() method on OysterCard object to enter station and calculate balance in the case of transport type
5. Invoke setEndStation() method on OysterCard object to set end station with parameter:
    a) station which is end station
6. Invoke exitStation() method on Oyster card object to exit station and recalculate balance in the case of given fare. If you do not exit station, maximum fare will be calculated.