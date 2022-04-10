import "./styles.css";
import { OysterCard } from "./OysterCard";
import { OysterCardStationsData } from "./data/OysterCardStationsData";
import { OysterCardTransportTypeEnum } from "./enums/OysterCardTransportTypeEnum";

const oysterCard = new OysterCard();

oysterCard.rechargeCard(30);
console.log("After recharged card", oysterCard.balance);
oysterCard.setStartStation(
  OysterCardStationsData.HOLBORN,
  OysterCardTransportTypeEnum.TUBE
);
oysterCard.enterStation();
oysterCard.setEndStation(OysterCardStationsData.WIMBLEDON);
oysterCard.exitStation();
console.log(
  "After setting end station and exiting station",
  oysterCard.balance
);
