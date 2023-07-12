"use client"

import Image from "next/image";

import { toast } from "react-hot-toast"
import { X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
    data: Product
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    return ( 
        <div>
            Catr Item
        </div>
     );
}
 
export default CartItem;