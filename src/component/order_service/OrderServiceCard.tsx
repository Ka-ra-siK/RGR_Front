import {OrderService} from "../../api/base";
import React, {useState} from "react";
import {OrderServiceForm} from "./OrderServiceForm";
import {Property} from "../Property";

interface Props {
    orderService: OrderService
    onEdit: (id?: number, orderService?: OrderService) => void
    onDelete: (id?: number) => void
}

export const OrderServiceCard: React.FC<Props> = ({ orderService, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false)


    return (
        <div className="card staff-card">
            {isEdit ?
                <OrderServiceForm orderService={orderService} onSubmit={(newClient) => { onEdit(orderService.id, newClient); setIsEdit(false) }} />
                :
                <div className="staff-card__main">

                    <Property title="Услуга:" value={orderService.serviceName} />
                    <Property title="Стоимость:" value={orderService.servicePrice} />

                    {/*<Property title="Услуги:" value={<span>{client.order?.map((order, idx) => <span key={order.id} className="client-card__order">{order.serviceName}{`${idx !== (client.order?.length ?? 0) - 1 ? ',' : ''} `}</span>)}</span>} />*/}
                </div>
            }
            <div className="staff-card__controls">
                <button className="button"
                        onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(orderService.id)}>Удалить</button>
            </div>
        </div>
    )
}