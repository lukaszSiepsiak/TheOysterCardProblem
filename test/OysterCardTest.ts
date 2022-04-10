import { OysterCard } from "../src/OysterCard";
import { OysterCardStationsData } from "../src/data/OysterCardStationsData";
import { OysterCardTransportTypeEnum } from "../src/enums/OysterCardTransportTypeEnum";
import { OysterCardsStationNameEnum } from "../src/enums/OysterCardsStationNameEnum";
import { OysterCardsStationTypeEnum } from "../src/enums/OysterCardsStationTypeEnum";

describe("Oyster card problem tests:", () => {
  it("should create card object", () => {
    const card = new OysterCard();

    expect(card).not.toBe(null);
  });

  it("should create card and recharge card with 30£", () => {
    const card = new OysterCard();

    card.rechargeCard(30);

    expect(card.balance).toEqual(30);
  });

  it("should create card and set start station to Holborn and transport type to Tube", () => {
    const card = new OysterCard();

    card.setStartStation(
      OysterCardStationsData.HOLBORN,
      OysterCardTransportTypeEnum.TUBE
    );

    expect(
      card.getStationName(OysterCardsStationTypeEnum.START_STATION)
        .stationName === OysterCardsStationNameEnum.HOLBORN &&
        card.transportType === OysterCardTransportTypeEnum.TUBE
    ).toBeTruthy();
  });

  it("should create card, enter station, set start station to Holborn and transport type to Tube and get balance 26.8 ", () => {
    const card = new OysterCard();

    card.rechargeCard(30);

    card.setStartStation(
      OysterCardStationsData.HOLBORN,
      OysterCardTransportTypeEnum.TUBE
    );

    card.enterStation();

    expect(card.balance).toEqual(26.8);
  });

  it("should create card, enter station, set start station to Holborn and transport type to Tube and set end station to Earl's Court ", () => {
    const card = new OysterCard();

    card.rechargeCard(30);

    card.setStartStation(
      OysterCardStationsData.HOLBORN,
      OysterCardTransportTypeEnum.TUBE
    );

    card.enterStation();

    card.setEndStation(OysterCardStationsData.EARLS_COURT);

    expect(
      card.getStationName(OysterCardsStationTypeEnum.END_STATION).stationName
    ).toEqual(OysterCardsStationNameEnum.EARLS_COURT);
  });

  it("should create card, enter station, set start station to Holborn and transport type to Tube, set end station to Earl's Court and get balance without exiting station, balance be equal to 26.8 ", () => {
    const card = new OysterCard();

    card.rechargeCard(30);

    card.setStartStation(
      OysterCardStationsData.HOLBORN,
      OysterCardTransportTypeEnum.TUBE
    );

    card.enterStation();

    card.setEndStation(OysterCardStationsData.EARLS_COURT);

    expect(card.balance).toEqual(26.8);
  });

  it("should create card, enter station, set start station to Holborn and transport type to Tube, set end station to Earl's Court and get balance with exiting station, balance be equal to 27.5 ", () => {
    const card = new OysterCard();

    card.rechargeCard(30);

    card.setStartStation(
      OysterCardStationsData.HOLBORN,
      OysterCardTransportTypeEnum.TUBE
    );

    card.enterStation();

    card.setEndStation(OysterCardStationsData.EARLS_COURT);

    card.exitStation();

    expect(card.balance).toEqual(27.5);
  });
  it("should create card, enter station, set start station to Earl's Court and transport type to Tube, set end station to Wimbledon and get balance with exiting station, balance be equal to 27.75 ", () => {
    const card = new OysterCard();

    card.rechargeCard(30);

    card.setStartStation(
      OysterCardStationsData.EARLS_COURT,
      OysterCardTransportTypeEnum.TUBE
    );

    card.enterStation();

    card.setEndStation(OysterCardStationsData.WIMBLEDON);

    card.exitStation();

    expect(card.balance).toEqual(27.75);
  });

  it("should create card, enter station, set start station to Holborn and transport type to Tube, set end station to Wimbledon and get balance with exiting station, balance be equal to 26.8 ", () => {
    const card = new OysterCard();

    card.rechargeCard(30);

    card.setStartStation(
      OysterCardStationsData.HOLBORN,
      OysterCardTransportTypeEnum.TUBE
    );

    card.enterStation();

    card.setEndStation(OysterCardStationsData.WIMBLEDON);

    card.exitStation();

    expect(card.balance).toEqual(26.8);
  });

  it("should create card, enter station, set start station to Holborn and transport type to Bus, set end station to Wimbledon and get balance with exiting station, balance be equal to 28.2 ", () => {
    const card = new OysterCard();

    card.rechargeCard(30);

    card.setStartStation(
      OysterCardStationsData.HOLBORN,
      OysterCardTransportTypeEnum.BUS
    );

    card.enterStation();

    card.setEndStation(OysterCardStationsData.WIMBLEDON);

    card.exitStation();

    expect(card.balance).toEqual(28.2);
  });
});
