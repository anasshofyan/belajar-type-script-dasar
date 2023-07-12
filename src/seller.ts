export interface Seller {
  id: number;
  name: string;
  email: string;
  address?: string;
  readonly nip: string;
}
