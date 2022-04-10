## The Oyster Card Problem

You are required to model the following fare card system which is a limited version of London’s Oyster card system. At the end of the test, you should be able to demonstrate a user loading a card with £30, and taking the following trips, and then viewing the balance.

* Tube Holborn to Earl’s Court
* 328 bus from Earl’s Court to Chelsea
* Tube Earl’s court to Hammersmith

## Operation

When the user passes through the inward barrier at the station, their oyster card is charged the maximum fare. When they pass out of the barrier at the exit station, the fare is calculated and the maximum fare transaction removed and replaced with the real transaction (in this way, if the user doesn’t swipe out, they are charged the maximum fare).

All bus journeys are charged at the same price. The system should favour the customer where more than one fare is possible for a given journey. E.g. Holburn to Earl’s Court is charged at £2.50. For the purposes of this test use the following data:

## Stations and zones:

Station Zone(s): 
* Holborn 1 
* Earl’s Court 1, 2 
* Wimbledon 3 
* Hammersmith 2

## Fares:

* Journey Fare Anywhere in Zone 1 £2. 
* Any one zone outside zone 1 £2. 
* Any two zones including zone 1 £3. 
* Any two zones excluding zone 1 £2. 
* Any three zones £3. Any bus journey £1. 
* The maximum possible fare is therefore £3.20.

## How to use this project?

1. Clone project from github to your environment
2. Install all dependencies. Use terminal and invoke this command: npm i
3. Build your project. Use NPM SCRIPTS tool (build:dev) and click Play button or use terminal and invoke this command: npm run build:dev
4. If you can start application on browser side:
    a) start development server. Use NPM SCRIPTS tool (start:dev option) and click Play button or use terminal and invoke this command: npm run start:dev
    b) open browser and load the page at the address: localhost:3000
5. If you can invoke tests:
    a) start karma configuration. Use NPM SCRIPTS tool (test option) and click Play button or use terminal and invoke this command: npm run test
    b) in terminal you can see completed tests

## To properly invoke methods you must:

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
