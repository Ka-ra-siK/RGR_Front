import {Masters} from "../../api/base";
import {useEntities} from "../../util/useEntities";
import {orderServiceApi} from "../../api/OrderServiceApi";
import {materialApi} from "../../api/MaterialsApi";
import {specializationApi} from "../../api/SpecializationApi";
import {staffApi} from "../../api/StaffApi";
import React, {useState} from "react";
import {Property} from "../Property";

interface Props {
    master?: Masters
    onSubmit: (master: Masters) => void
}

export const MasterForm: React.FC<Props> = ({master, onSubmit}) => {

    const [materials] = useEntities(materialApi)
    const [specializations] = useEntities(specializationApi)
    const [staff] = useEntities(staffApi)

    const [name, setName] = useState(master?.staffByStaffId?.name ?? '')
    const [selectMaterials, setSelectMaterials] = useState<string[]>(master?.materials?.map(o => o.id?.toString() ?? '') ?? [])
    const [selectSpecialization, setSelectSpecialization] = useState<string[]>(master?.specializations?.map(o => o.id?.toString() ?? '') ?? [])


    const onClick = () => {
        if (staff === null) return
        onSubmit({
            //name,
            materials: materials?.filter(os => !!selectMaterials.find(so => so === os.id?.toString() ?? '-1')),
            specializations: specializations?.filter(os => !!selectSpecialization.find(so => so === os.id?.toString() ?? '-1'))
        })
        setName('')
        setSelectMaterials([])
        setSelectSpecialization([])
    }

    return (
        <div className="master-form">
            <Property title="Имя:" value={<input type="text" value={name} onChange={e => setName(e.target.value)} />} />
            <Property title="Материалы на руках:">
                <select multiple value={selectMaterials}
                        onChange={e => setSelectMaterials(Array.from(e.target.selectedOptions, option => option.value))}>
                    {materials?.map(m => <option key={m.id}
                                                      value={m.id}>{m.name}</option>)}
                </select>
            </Property>
            <Property title="Специальности:">
                <select multiple value={selectSpecialization}
                        onChange={e => setSelectSpecialization(Array.from(e.target.selectedOptions, option => option.value))}>
                    {specializations?.map(m => <option key={m.id}
                                                 value={m.id}>{m.name}</option>)}
                </select>
            </Property>
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}