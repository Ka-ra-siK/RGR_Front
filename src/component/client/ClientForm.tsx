import {Clients} from "../../api/base/api";
import {useEntities} from "../../util/useEntities";
import {orderServiceApi} from "../../api/OrderServiceApi";
import React, {useState} from "react";
import {Property} from "../Property";

interface Props {
    client?: Clients
    onSubmit: (client: Clients) => void
}

export const ClientForm: React.FC<Props> = ({ client, onSubmit }) => {

    const [orders] = useEntities(orderServiceApi)

    const [surname, setSurname] = useState(client?.surname ?? '')
    const [name, setName] = useState(client?.name ?? '')
    const [patronymic, setPatronymic] = useState(client?.patronymic ?? '')
    const [phoneNumber, setPhoneNumber] = useState(client?.phoneNumber ?? '')
    const [selectOrders, setSelectedOrders] = useState<string[]>(client?.order?.map(o => o.id?.toString() ?? '') ?? [])
    // const [orderService, setOrderService] = useState<string[]>(orderFromDb.filter(ac => (client?.orderService.findIndex(fa => fa._id.equals(ac._id ?? new Mongo.ObjectID)) ?? -1) !== -1).map(ac => ac._id?.toHexString() ?? '') ?? [])


    const onClick = () => {
        if (surname === '') return
        onSubmit({
            surname,
            name,
            patronymic,
            phoneNumber,
            order: orders?.filter(os => !!selectOrders.find(so => so === os.id?.toString() ?? '-1'))
        })
        setSurname('')
        setName('')
        setPatronymic('')
        setPhoneNumber('')
        setSelectedOrders([])
    }

    return (
        <div className="staff-form">
            <Property title="Фамилия:" value={<input type="text" value={surname} onChange={e => setSurname(e.target.value)} />} />
            <Property title="Имя:" value={<input type="text" value={name} onChange={e => setName(e.target.value)} />} />
            <Property title="Отчество:" value={<input type="text" value={patronymic} onChange={e => setPatronymic(e.target.value)} />} />
            <Property title="Номер телефона:" value={<input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />} />
            <Property title="Услуги:" value={
                <select multiple value={selectOrders} onChange={e => setSelectedOrders(Array.from(e.target.selectedOptions, option => option.value))}>
                    {orders?.map(mi => <option key={mi.id} value={mi.id?.toString()}>{mi.serviceName}</option>)}
                </select>
            } />
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}