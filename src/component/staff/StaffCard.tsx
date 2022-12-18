import {Staff} from "../../api/base";
import React, {useState} from "react";
import {StafffForm} from "./StaffForm";
import {Property} from "../Property";

interface Props {
    client: Staff
    onEdit: (id?: number, client?: Staff) => void
    onDelete: (id?: number) => void
}

export const StaffCard: React.FC<Props> = ({ client, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false)


    return (
        <div className="card staff-card">
            {isEdit ?
                <StafffForm stafff={client} onSubmit={(newClient) => { onEdit(client.id, newClient); setIsEdit(false) }} />
                :
                <div className="staff-card__main">

                    <Property title="Фамилия:" value={client.surname} />
                    <Property title="Имя:" value={client.name} />
                    <Property title="Отчество:" value={client.patronymic} />
                    <Property title="Адрес:" value={client.address} />
                    <Property title="День рождения:" value={client.birthDate} />
                    <Property title="Должность:" value={client.position} />
                    <Property title="Зарплата:" value={client.salary} />

                    {/*<Property title="Услуги:" value={<span>{client.order?.map((order, idx) => <span key={order.id} className="client-card__order">{order.serviceName}{`${idx !== (client.order?.length ?? 0) - 1 ? ',' : ''} `}</span>)}</span>} />*/}
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