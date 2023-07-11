export enum CustomerType {
  REGULAR = "REGULAR",
  PREMIUM = "PREMIUM",
  VIP = "VIP",
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
