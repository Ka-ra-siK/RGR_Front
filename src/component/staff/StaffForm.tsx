import {Staff} from "../../api/base";
import {movingInformationApi} from "../../api/MovingInformationApi";
import {useEntities} from "../../util/useEntities";
import React, {useState} from "react";
import {Property} from "../Property";
import {staffApi} from "../../api/StaffApi";
import {StaffCard} from "./StaffCard";

interface Props {
    stafff?: Staff
    onSubmit: (stafff: Staff) => void
}

export const StafffForm: React.FC<Props> = ({ stafff, onSubmit }) => {

    const [movingInformations] = useEntities(movingInformationApi)

    const [surname, setSurname] = useState(stafff?.surname ?? '')
    const [name, setName] = useState(stafff?.name ?? '')
    const [patronymic, setPatronymic] = useState(stafff?.patronymic ?? '')
    const [address, setAddress] = useState(stafff?.address ?? '')
    const [birthDate, setBirthDate] = useState(stafff?.birthDate ?? '')
    const [position, setPosition] = useState(stafff?.position ?? '')
    const [salary, setSalary] = useState<number>(stafff?.salary ?? 0)

    const [selectMovingInformation, setSelectMovingInformation] = useState<string[]>(stafff?.movingInformation?.map(o => o.id?.toString() ?? '') ?? [])


    const onClick = () => {
        if (surname === '') return
        onSubmit({
            surname,
            name,
            patronymic,
            address,
            birthDate,
            position,
            salary,
            movingInformation: movingInformations?.filter(os => !!selectMovingInformation.find(so => so === os.id?.toString() ?? '-1'))
        })
        setSurname('')
        setName('')
        setPatronymic('')
        setAddress('')
        setBirthDate('')
        setPosition('')
        setSalary(0)
        setSelectMovingInformation([])
    }

    return (
        <div className="staff-form">
            <Property title="Фамилия:" value={<input type="text" value={surname} onChange={e => setSurname(e.target.value)} />} />
            <Property title="Имя:" value={<input type="text" value={name} onChange={e => setName(e.target.value)} />} />
            <Property title="Отчество:" value={<input type="text" value={patronymic} onChange={e => setPatronymic(e.target.value)} />} />
            <Property title="Адрес:" value={<input type="text" value={address} onChange={e => setAddress(e.target.value)} />} />
            <Property title="День рождения:" value={<input type="text" value={birthDate} onChange={e => setBirthDate(e.target.value)} />} />
            <Property title="Зарплата:" value={<input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} />} />
            
            <Property title="Информация о передвижении:">
                <select multiple value={selectMovingInformation}
                        onChange={e => setSelectMovingInformation(Array.from(e.target.selectedOptions, option => option.value))}>
                    {movingInformations?.map(m => <option key={m.id}
                                                       value={m.id}>{m.transferReason}</option>)}
                </select>
            </Property>
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}