import { OysterCardsStationNameEnum } from "../enums/OysterCardsStationNameEnum";
import { IOysterCardStation } from "../interfaces/IOysterCardStation";

export const OysterCardStationsData = {
  HOLBORN: {
    stationName: OysterCardsStationNameEnum.HOLBORN,
    stationZone: [1],
  } as IOysterCardStation,
  EARLS_COURT: {
    stationName: OysterCardsStationNameEnum.EARLS_COURT,
    stationZone: [1, 2],
  } as IOysterCardStation,
  HAMMERSMITH: {
    stationName: OysterCardsStationNameEnum.HAMMERSMITH,
    stationZone: [2],
  } as IOysterCardStation,
  WIMBLEDON: {
    stationName: OysterCardsStationNameEnum.WIMBLEDON,
    stationZone: [3],
  } as IOysterCardStation,
};
