import {Materials} from "../../api/base";
import React, {useState} from "react";
import {MaterialsForm} from "./MaterialsForm";
import {Property} from "../Property";

interface Props {
    material: Materials
    onEdit: (id?: number, material?: Materials) => void
    onDelete: (id?: number) => void
}

export const MaterialsCard: React.FC<Props> = ({ material, onEdit, onDelete  }) => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card materials-card">
            {isEdit ?
                <MaterialsForm material={material} onSubmit={(newMaterial) => { onEdit(material.id, newMaterial); setIsEdit(false) }} />
                :
                <div className="materials-card__main">

                    <Property title="Название:" value={material.name} />
                    <Property title="Единица измерения:" value={material.unitMeasurement} />
                    <Property title="Цена:" value={material.cost} />
                </div>
            }
            <div className="materials-card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Закрыть' : 'Редактировать'}</button>
                <button className="button button_red" onClick={() => onDelete(material.id)}>Удалить</button>
            </div>
        </div>
    )
}