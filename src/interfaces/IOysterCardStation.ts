import { OysterCardsStationNameEnum } from "../enums/OysterCardsStationNameEnum";

export interface IOysterCardStation {
  stationName: OysterCardsStationNameEnum;
  stationZone: number[];
}
