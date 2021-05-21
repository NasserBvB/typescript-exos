interface ILocation {
    name: string;
    coordonneeX: number;
    coordonneeY: number;
}

interface IVehicle {
  location: ILocation;
  passengers: Array<IPassenger>;
}

interface IPassenger {
  location: ILocation;
  depart: ILocation
  destination: IDestination;
}

interface IDestination extends ILocation {
    station: string;
    numero: number;
}
