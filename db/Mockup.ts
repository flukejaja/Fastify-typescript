interface mockupPrame {
  itemName: string;
  cateGory: string;
  Description: string;
  //   image: File;
  Locations: boolean;
  myBusiness: boolean;
  locations: boolean;
}
export const mockup: mockupPrame = {
  itemName: "Mockup",
  cateGory: "test",
  Description: "test",
  Locations: true,
  myBusiness: false,
  locations: true,
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
export interface userMock {
  username: string;
  password: string;
}
export const user: userMock = {
  username: "test",
  password: "1234",
};
export const user1: userMock = {
  username: "test1",
  password: "1234",
};
