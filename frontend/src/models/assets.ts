

interface Asset {
    grownupsNum: number; // Number of adults the property can accommodate.
    childrenNum: number; // Number of children the property can accommodate.
    babies: number; // Number of babies the property can accommodate
    city: string; // The city where the property is located.
    typeOfProperty: string; // Type of property (e.g., house, apartment, separate unit, hotel).
    isBreakfast: boolean; // Indicates whether breakfast is provided. 
    availability: Date[] ;// Dates when the property is available.
    ownerId:string;
  }

  export default Asset