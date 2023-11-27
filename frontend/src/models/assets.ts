

interface Asset {
    _id:string;
    grownupsNum: number; // Number of adults the property can accommodate.
    childrenNum: number; // Number of children the property can accommodate.
    babies: number; // Number of babies the property can accommodate.
    arePetsAllowed: boolean; // Indicates whether pets are allowed in the property.
    city: string; // The city where the property is located.
    typeOfProperty: string; // Type of property (e.g., house, apartment, separate unit, hotel).
    isBreakfast: boolean; // Indicates whether breakfast is provided. 
    availability: Date[] | null; // Dates when the property is available.
  }

  export default Asset