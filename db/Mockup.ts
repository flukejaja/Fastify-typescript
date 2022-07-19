export interface mockupPrame {
  itemName: string;
  cateGory: string;
  Description: string;
  Locations: boolean;
  myBusiness: boolean;
  locations: boolean;
};
export interface mockupTop {
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
};
export interface mockupStock {
  item: string;
  price: number;
  id: string;
};
export interface mockupFluck {
  attributeName: string;
  Text: string;
  Selecttion: boolean;
  Quantity: boolean;
  Number: number;
  Precision: number;
  Toggle: boolean;
};
export interface userMock {
  email :string;
  password: string;
};
export const Fluck:mockupFluck = {
  attributeName: "asdf",
  Text: "asdff",
  Selecttion: true,
  Quantity: false,
  Number: 1234,
  Precision: 11332,
  Toggle: true
};
export const Stock:mockupStock = {
  item:"Mouse",
  price:1000,
  id:"1"
};
export const mockupFortop: mockupTop={
  optionName: "test",
  displayName: "fluke",
  Options: "test",
  Variation: "test",
  Sku: "test",
  Price: 1000,
  createMethod: true,
  addVariations: "foo",
  manageStock: "foo",
  Track:  "foo",
};
export const mockup: mockupPrame = {
  itemName: "Mockup",
  cateGory: "test",
  Description: "test",
  Locations: true,
  myBusiness: false,
  locations: true,
};