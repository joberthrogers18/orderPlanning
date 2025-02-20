import Buyer from "../models/Buyer";
import Product from "../models/Product";
import Supplier from "../models/Supplier";

export interface BuyerBody {
    name: string;
}

export interface SupplierBody {
    name: string;
}

export interface ProductBody {
    name: string;
    price: number;
}

export interface IOrder {
    id: number;
    buyer: Buyer;
    supplier: Supplier;
    products: Product[];
    totalAmount: number;
}