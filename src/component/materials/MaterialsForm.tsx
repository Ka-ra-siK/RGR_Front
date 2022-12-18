import {Materials} from "../../api/base";
import {useEntities} from "../../util/useEntities";
import {materialApi} from "../../api/MaterialsApi";
import React, {useState} from "react";
import {Property} from "../Property";

interface Props {
    material?: Materials
    onSubmit: (materials: Materials) => void
}

export const MaterialsForm: React.FC<Props> = ({ material, onSubmit }) => {

    const [materials] = useEntities(materialApi)
    const [name, setName] = useState(material?.name ?? '')
    const [unitMeasurement, setUnitMeasurement] = useState(material?.unitMeasurement ?? '')
    const [cost, setCost] = useState<number>(material?.cost ?? 0)

    const onClick = () => {
        if (name === '') return
        onSubmit({
            name,
            unitMeasurement,
            cost
        })
        setName('')
        setUnitMeasurement('')
        setCost(0)
    }

    return (
        <div className="materials-form">
            <Property title="Название:" value={<input type="text" value={name} onChange={e => setName(e.target.value)} />} />
            <Property title="Единица измерения:" value={<input type="text" value={unitMeasurement} onChange={e => setUnitMeasurement(e.target.value)} />} />
            <Property title="Цена:" value={<input type="number" value={cost} onChange={e => setCost(Number(e.target.value))} />} />
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}