import { OysterCardTransportTypeEnum } from "./enums/OysterCardTransportTypeEnum";
import { IOysterCardStation } from "./interfaces/IOysterCardStation";
import { OysterCardFaresData } from "./data/OysterCardFaresData";
import { OysterCardsStationTypeEnum } from "./enums/OysterCardsStationTypeEnum";

export class OysterCard {
  private static readonly DEFAULT_TRANSPORT_TYPE =
    OysterCardTransportTypeEnum.TUBE;

  private _balance: number;
  private _fare: number;
  private _transportType: OysterCardTransportTypeEnum;
  private _stations: {
    [type: string]: IOysterCardStation;
  } = {};

  constructor() {
    this._balance = 0;
    this._fare = 0;
    this._transportType = OysterCard.DEFAULT_TRANSPORT_TYPE;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance = value;
  }

  get fare(): number {
    return this._fare;
  }

  set fare(value: number) {
    this._fare = value;
  }

  get transportType(): OysterCardTransportTypeEnum {
    return this._transportType;
  }

  set transportType(value: OysterCardTransportTypeEnum) {
    this._transportType = value;
  }

  public rechargeCard(amount: number): void {
    this.balance = amount;
  }

  public getStationName(type: OysterCardsStationTypeEnum): IOysterCardStation {
    return this._stations[type];
  }

  public setStartStation(
    station: IOysterCardStation,
    transportType: OysterCardTransportTypeEnum
  ): void {
    if (!station) {
      throw new Error("You must provide station type.");
    }

    this._stations[OysterCardsStationTypeEnum.START_STATION] = station;

    this.setTransportType(transportType);
  }

  public setEndStation(station: IOysterCardStation): void {
    if (!station) {
      throw new Error("You must provide station type.");
    }

    this._stations[OysterCardsStationTypeEnum.END_STATION] = station;
  }

  public enterStation(): void {
    if (
      !this._stations[OysterCardsStationTypeEnum.START_STATION] &&
      this.transportType === OysterCardTransportTypeEnum.TUBE
    ) {
      throw new Error("You must provide station type.");
    }

    this.fare = this.getInitialFare();

    const calculateBalance = this.balance - this._fare;

    if (calculateBalance < 0) {
      throw new Error("You have not enough money to buy a ticket");
    } else {
      this.balance = calculateBalance;
    }
  }

  public exitStation(): void {
    if (
      !this._stations[OysterCardsStationTypeEnum.END_STATION] &&
      this.transportType === OysterCardTransportTypeEnum.TUBE
    ) {
      throw new Error("You must provide station type.");
    }

    if (this.transportType === OysterCardTransportTypeEnum.BUS) {
      this.clearStations();

      return;
    }

    this.fare = this.calculateFinalFare(
      this.getTraveledZonesCount(
        this._stations[OysterCardsStationTypeEnum.START_STATION].stationZone,
        this._stations[OysterCardsStationTypeEnum.END_STATION].stationZone
      ),
      this.isZoneOneCrossed(
        this._stations[OysterCardsStationTypeEnum.START_STATION].stationZone,
        this._stations[OysterCardsStationTypeEnum.END_STATION].stationZone
      )
    );

    this.balance = this._balance - this.fare + OysterCardFaresData.MAX_FARE;

    this.clearStations();
  }

  private setTransportType(transportType: OysterCardTransportTypeEnum): void {
    if (!transportType) {
      throw new Error("You must provide transport type.");
    }

    this.transportType = transportType;
  }

  private clearStations(): void {
    Object.keys(this._stations).forEach((station: string, index: number) => {
      delete this._stations[index];
    });
  }

  private calculateFinalFare(
    traveledZonesCount: number,
    isZoneOneCrossed: boolean
  ): number {
    let result: number = OysterCardFaresData.MAX_FARE;

    if (traveledZonesCount == 1 && isZoneOneCrossed) {
      result = OysterCardFaresData.ANYWHERE_IN_ZONE_1;
    }
    if (traveledZonesCount == 1 && !isZoneOneCrossed) {
      result = OysterCardFaresData.ONE_ZONE_OUTSIDE_ZONE_1;
    }
    if (traveledZonesCount == 2 && isZoneOneCrossed) {
      result = OysterCardFaresData.TWO_ZONE_INCLUDING_ZONE_1;
    }
    if (traveledZonesCount == 2 && !isZoneOneCrossed) {
      result = OysterCardFaresData.TWO_ZONE_EXCLUDING_ZONE_1;
    }
    if (traveledZonesCount == 3) {
      result = OysterCardFaresData.MAX_FARE;
    }

    return result;
  }

  private getInitialFare(): number {
    return this.transportType === OysterCardTransportTypeEnum.BUS ? 1.8 : 3.2;
  }

  private getTraveledZonesCount(
    startStation: number[],
    endStation: number[]
  ): number {
    let count = 0;

    for (let indexStart = 0; indexStart < startStation.length; indexStart++) {
      for (let indexEnd = 0; indexEnd < endStation.length; indexEnd++) {
        count = Math.abs(startStation[indexStart] - endStation[indexEnd]) + 1;

        if (count === 1) break;
      }
    }

    return count;
  }

  private isZoneOneCrossed(
    startStation: number[],
    endStation: number[]
  ): boolean {
    return (
      (startStation.length == 1 && startStation.includes(1)) ||
      (endStation.length == 1 && endStation.includes(1))
    );
  }
}
