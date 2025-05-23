import { useEffect, useState } from "react"
import { Order, OrderListItem } from "../models/order.model"
import { fetchOrder, fetchOrders } from "../api/order.api";

export const useOrders = () => {
    const [orders, setOrders] = useState<OrderListItem[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    useEffect(() => {
        fetchOrders().then((orders) => {
            setOrders(orders);
        });
    }, []);

    const selectOrderItem = (orderId: number) => {
        // 이미 가지고 있는 데이터에 대한 요청 방어
        if (orders.filter((item) => item.id === orderId)[0].detail) {
            setSelectedItemId(orderId);
            return;
        }

        fetchOrder(orderId).then((orderDetail) => {
            setSelectedItemId(orderId);
            setOrders(
                orders.map((item) => {
                    if (item.id === orderId) {
                        return {
                            ...item,
                            detail: orderDetail
                        };
                    }
                    return item;
                })
            );
        });
    };

    return { orders, selectedItemId, selectOrderItem };
};