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


    const [selectMaterials, setSelectMaterials] = useState<string[]>(master?.materials?.map(o => o.id?.toString() ?? '') ?? [])
    const [selectSpecialization, setSelectSpecialization] = useState<string[]>(master?.specializations?.map(o => o.id?.toString() ?? '') ?? [])

    const [selectStaff, setSelectStaff] = useState<string[]>(staff?.map(o=> o.id?.toString() ?? '') ?? [])
    console.log(selectStaff)

    const onClick = () => {
        if (staff === null) return
        onSubmit({
            //name,
            staffByStaffId: staff?.find(st => !!selectStaff.find(ts => ts === st.id?.toString() ?? '-1')),
            materials: materials?.filter(os => !!selectMaterials.find(so => so === os.id?.toString() ?? '-1')),
            specializations: specializations?.filter(os => !!selectSpecialization.find(so => so === os.id?.toString() ?? '-1'))
        })
        setSelectStaff([])
        setSelectMaterials([])
        setSelectSpecialization([])
    }

    return (
        <div className="master-form">
            <Property title="Персонал:">
                <select value={selectStaff}
                        onChange={e => setSelectStaff(Array.from(e.target.selectedOptions, option => option.value))}>
                    {staff?.map(m => <option key={m.id}
                                               value={m.id}>{m?.surname}</option>)}
                </select>
            </Property>
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