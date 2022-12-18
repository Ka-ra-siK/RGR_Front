import {OrderService} from "../../api/base";
import {useEntities} from "../../util/useEntities";
import {masterApi} from "../../api/MastersApi";
import React, {useState} from "react";
import {Property} from "../Property";

interface Props {
    orderService?: OrderService
    onSubmit: (orderService: OrderService) => void
}

// name: string
// price: Number
export const OrderServiceForm: React.FC<Props> = ({orderService, onSubmit}) => {

    const [masters] = useEntities(masterApi)
    //const staffFromDb = useTracker(() => StafffCollection.find({}).fetch())

    const [serviceName, setName] = useState(orderService?.serviceName ?? '')
    const [servicePrice, setPrice] = useState<number>(orderService?.servicePrice ?? 0)
   // const [selectMasters, setSelectMasters] = useState<string[]>(orderService?.mastersByMasterId?.id?.map(o => o.id?.toString() ?? '') ?? [])



    const onClick = () => {
        if (serviceName === '') return
        onSubmit({
            serviceName,
            servicePrice
        })
        setName('')
        setPrice(0)
    }
    return (
        <div className="order-form">
            <Property title="Услуга:" value={<input type="text" value={serviceName} onChange={e => setName(e.target.value)} />} />
            <Property title="Стоимость:" value={<input type="number" value={servicePrice} onChange={e => setPrice(Number(e.target.value))} />} />
            {/*<Property title="Мастер:" value={*/}
            {/*    <select multiple value={master}*/}
            {/*            onChange={e => setMaster(Array.from(e.target.selectedOptions, option => option.value))}>*/}
            {/*        {masterFromDb.map(m => <option key={m._id?.toHexString()}*/}
            {/*                                       value={m._id?.toHexString()}>{m.name}</option>)}*/}
            {/*    </select>*/}
            {/*}/>*/}
            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}