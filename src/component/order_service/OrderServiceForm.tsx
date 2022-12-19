import {OrderService} from "../../api/base";
import {useEntities} from "../../util/useEntities";
import {masterApi} from "../../api/MastersApi";
import React, {useState} from "react";
import {Property} from "../Property";

interface Props {
    orderService?: OrderService
    onSubmit: (orderService: OrderService) => void
}

export const OrderServiceForm: React.FC<Props> = ({orderService, onSubmit}) => {

    const [masters] = useEntities(masterApi)

    const [selectMasters, setSelectMasters] = useState<string[]>(masters?.map(o=> o.staffByStaffId?.id?.toString() ?? '') ?? [])

    const [serviceName, setName] = useState(orderService?.serviceName ?? '')
    const [servicePrice, setPrice] = useState<number>(orderService?.servicePrice ?? 0)


    const onClick = () => {
        if (serviceName === '') return
        onSubmit({
            mastersByMasterId : masters?.find(ma => !!selectMasters.find(am => am === ma.id?.toString() ?? '-1')),
            serviceName,
            servicePrice,
        })
        setSelectMasters([])
        setName('')
        setPrice(0)
    }
    return (
        <div className="order-form">
            <Property title="Услуга:"
                      value={<input type="text" value={serviceName} onChange={e => setName(e.target.value)}/>}/>
            <Property title="Стоимость:" value={<input type="number" value={servicePrice}
                                                       onChange={e => setPrice(Number(e.target.value))}/>}/>
            <Property title="Мастера:">
                <select multiple value={serviceName}
                        onChange={e => setSelectMasters(Array.from(e.target.selectedOptions, option => option.value))}>
                    {masters?.map(m => <option key={m.id}
                                                       value={m.id}>{m.staffByStaffId?.surname}</option>)}
                </select>
            </Property>
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}