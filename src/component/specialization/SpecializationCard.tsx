import {Specialization} from "../../api/base";
import React, {useState} from "react";
import {SpecializationForm} from "./SpecializationForm";
import {Property} from "../Property";

interface Props {
    specialization: Specialization
    onEdit: (id?: number, specialization?: Specialization) => void
    onDelete: (id?: number) => void
}

export const SpecializationCard: React.FC<Props> = ({ specialization, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false)


    return (
        <div className="card staff-card">
            {isEdit ?
                <SpecializationForm specialization={specialization} onSubmit={(newClient) => { onEdit(specialization.id, newClient); setIsEdit(false) }} />
                :
                <div className="staff-card__main">
                    <Property title="Имя:" value={specialization.name} />
                </div>
            }
            <div className="staff-card__controls">
                <button className="button"
                        onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(specialization.id)}>Удалить</button>
            </div>
        </div>
    )
}