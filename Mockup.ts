export interface mockupPrame {
  itemName: string;
  cateGory: string;
  Description: string;
  //   image: File;
  Locations: boolean;
  myBusiness: boolean;
  locations: boolean;
}
export const user1: mockupPrame = {
  itemName: "stone",
  cateGory: "stone",
  Description: "stone",
  Locations: true,
  myBusiness: false,
  locations: false,
};

interface mockupTop {
  optionName: string;
  displayName: string;
  Options: string;
  Variation: string;
  Sku: string;
  Price: number;
  createMethod: boolean;
  addVariations: string;
  manageStock: string;
  Track: string;
}
interface mockupFluck {
  attributeName: string;
  Text: string;
  Selecttion: boolean;
  Quantity: boolean;
  Number: number;
  Precision: number;
  Toggle: boolean;
}
