import {MovingInformation} from "../../api/base";
import React, {useState} from "react";
import {MovingInformationForm} from "./MovingInformationForm";
import {Property} from "../Property";

interface Props {
    movingInformation: MovingInformation
    onEdit: (id?: number, movingInformation?: MovingInformation) => void
    onDelete: (id?: number) => void
}

export const MovingInformationCard: React.FC<Props> = ({ movingInformation, onEdit, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card film-card">
            {isEdit ?
                <MovingInformationForm movingInformation={movingInformation} onSubmit={(newClient) => { onEdit(movingInformation.id, newClient); setIsEdit(false) }} />
                :
                <div className="moving_information-card__main">

                    <Property title="Предыдущая позиция:" value={movingInformation.position} />
                    <Property title="Причина ухода:" value={movingInformation.transferReason} />
                    <Property title="Номер приказа:" value={movingInformation.orderNumber} />
                    <Property title="Дата приказа:" value={movingInformation.orderDate} />
                </div>
            }
            <div className="moving_information-card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(movingInformation.id)}>Удалить</button>
            </div>
        </div>
    )
}