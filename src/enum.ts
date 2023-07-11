export enum CustomerType {
  REGULAR,
  PREMIUM,
  VIP,
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
