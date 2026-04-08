export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  image_url: string | null;
  sku: string | null;
  weight: number;
  width: number | null;
  height: number | null;
  category_id?: string | null;
  created_at: string;
}

export interface Order {
  id: string;
  flow_order_id: string | null;
  status: 'pending' | 'paid' | 'failed' | 'refunded';
  total: number;
  shipping_cost: number | null;
  customer_name: string | null;
  customer_email: string | null;
  region: string | null;
  comuna: string | null;
  address: string | null;
  payment_method: string | null;
  created_at: string;
  shipit_id: string | null;
  tracking_number: string | null;
  courier_name: string | null;
  courier_id: number | null;
  shipping_status: string | null;
  flow_token: string | null;
}

export interface OrderItem {
  id: string;
  order_id: string | null;
  product_id: string | null;
  quantity: number;
  price: number;
  product_name: string | null;
}
