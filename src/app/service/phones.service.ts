import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
export interface Phones {
  age: number, 
  id: string, 
  imageUrl: string, 
  name: string, 
  snippet: string
}
export interface PhoneType {
  additionalFeatures: string,
  android: {
    os: string,
    ui: string
  },
  availability: string[],
  battery: {
    standbyTime: string,
    talkTime: string,
    type: string
  },
  camera: {
    features: string[],
    primary: string
  },
  connectivity: {
    bluetooth: string,
    cell: string,
    gps: boolean,
    infrared: boolean,
    wifi: string
  },
  description: string,
  display: {
    screenResolution: string,
    screenSize: string,
    touchScreen: boolean
  },
  hardware: {
    accelerometer: boolean,
    audioJack: string,
    cpu: string,
    fmRadio: boolean,
    physicalKeyboard: boolean,
    usb: string
  },
  id: string,
  images: string[],
  name: string,
  sizeAndWeight: {
    dimensions: string[],
    weight: string
  },
  storage: {
    flash: string,
    ram: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
phones: Phones[] = [];
constructor(private http: HttpClient) { }

getPhones() {
return this.http.get<Phones[]>('/mock/phones');
}
getHero(phoneId: string) {
  return this.http.get<PhoneType>('/mock/' + phoneId);
}

}
