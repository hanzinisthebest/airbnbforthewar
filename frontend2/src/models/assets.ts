

interface Asset {
    _id:string;
    assetID: string; // Unique identifier for each asset (property).
    grownupsNum: number; // Number of adults the property can accommodate.
    childrenNum: number; // Number of children the property can accommodate.
    babies: number; // Number of babies the property can accommodate.
    arePetsAllowed: boolean; // Indicates whether pets are allowed in the property.
    city: string; // The city where the property is located.
    typeOfProperty: string; // Type of property (e.g., house, apartment, separate unit, hotel).
    isWifi: boolean; // Indicates whether the property has Wi-Fi.
    isLaundryMachine: boolean; // Indicates whether the property has a laundry machine.
    isAirConditioner: boolean; // Indicates whether the property has air conditioning.
    isKitchen: boolean; // Indicates whether the property has a kitchen.
    isTV: boolean; // Indicates whether the property has a television.
    isWorkstation: boolean; // Indicates whether the property has a workstation.
    isPool: boolean; // Indicates whether the property has a pool.
    isFreeParking: boolean; // Indicates whether free parking is available.
    isCradle: boolean; // Indicates whether a cradle or crib is available.
    isGym: boolean; // Indicates whether the property has a gym.
    isBreakfast: boolean; // Indicates whether breakfast is provided.
    isSmokingAllowed: boolean; // Indicates whether smoking is allowed in the property.
    isElectricCarCharger: boolean; // Indicates whether the property has an electric car charger.
    isSmokeDetector: boolean; // Indicates whether smoke detectors are installed.
    isCO2Detector: boolean; // Indicates whether carbon monoxide (CO2) detectors are installed.
    isWithoutStairs: boolean; // Indicates whether the property is without stairs for accessibility.
    isAccessibleParkingLot: boolean; // Indicates whether there is accessible parking.
    isEntranceAccessible: boolean; // Indicates whether the entrance is accessible.
    isShowerHandrail: boolean; // Indicates whether there are handrails in the shower.
    isToiletHandrail: boolean; // Indicates whether there are handrails near the toilet.
    isChairInShower: boolean; // Indicates whether a shower chair is available for those with mobility needs.
    hostLanguage: string; // The language spoken by the host.
    availability: Date[]; // Dates when the property is available.
  }

  export default Asset