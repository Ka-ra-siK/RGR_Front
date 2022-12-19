import {OrderService} from "../../api/base";
import React, {useState} from "react";
import {OrderServiceForm} from "./OrderServiceForm";
import {Property} from "../Property";
import {useEntities} from "../../util/useEntities";
import {masterApi} from "../../api/MastersApi";

interface Props {
    orderService: OrderService
    onEdit: (id?: number, orderService?: OrderService) => void
    onDelete: (id?: number) => void
}

export const OrderServiceCard: React.FC<Props> = ({ orderService, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [masters] = useEntities(masterApi)


    return (
        <div className="card staff-card">
            {isEdit ?
                <OrderServiceForm orderService={orderService} onSubmit={(newClient) => { onEdit(orderService.id, newClient); setIsEdit(false) }} />
                :
                <div className="staff-card__main">

                    <Property title="Услуга:" value={orderService.serviceName} />
                    <Property title="Стоимость:" value={orderService.servicePrice} />
                    <Property title="Мастер:" value={orderService.mastersByMasterId?.staffByStaffId?.surname} />
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