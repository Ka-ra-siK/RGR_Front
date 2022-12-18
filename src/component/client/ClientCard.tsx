import { Clients } from "../../api/base/api";
import React, { useState } from "react";
import { ClientForm } from "./ClientForm";
import { Property } from "../Property";

interface Props {
    client: Clients
    onEdit: (id?: number, client?: Clients) => void
    onDelete: (id?: number) => void
}

export const ClientCard: React.FC<Props> = ({ client, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false)


    return (
        <div className="card staff-card">
            {isEdit ?
                <ClientForm client={client} onSubmit={(newClient) => { onEdit(client.id, newClient); setIsEdit(false) }} />
                :
                <div className="staff-card__main">

                    <Property title="Фамилия:" value={client.surname} />
                    <Property title="Имя:" value={client.name} />
                    <Property title="Отчество:" value={client.patronymic} />
                    <Property title="Номер телефона:" value={client.phoneNumber} />

                    <Property title="Услуги:" value={<span>{client.order?.map((order, idx) => <span key={order.id} className="client-card__order">{order.serviceName}{`${idx !== (client.order?.length ?? 0) - 1 ? ',' : ''} `}</span>)}</span>} />
                </div>
            }
            <div className="staff-card__controls">
                <button className="button"
                    onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(client.id)}>Удалить</button>
            </div>
        </div>
    )
}