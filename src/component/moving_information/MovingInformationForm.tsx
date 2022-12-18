import {MovingInformation} from "../../api/base";
import React, {useState} from "react";
import {movingInformationApi} from "../../api/MovingInformationApi";
import {Property} from "../Property";

interface Props {
    movingInformation?: MovingInformation
    onSubmit: (movingInformation: MovingInformation) => void
}

export const MovingInformationForm: React.FC<Props> = ({ movingInformation, onSubmit }) => {

    const [movingInformations] = useState(movingInformationApi)

    const [position, setPosition] = useState(movingInformation?.position ?? '')
    const [transferReason, setTransferReason] = useState(movingInformation?.transferReason ?? '')
    const [orderNumber, setOrderNumber] = useState(movingInformation?.orderNumber ?? 0)
    const [orderDate, setOrderDate] = useState(movingInformation?.orderDate ?? '')

    const onClick = () => {
        if (transferReason === '') return
        onSubmit({
            position,
            transferReason,
            orderNumber,
            orderDate
        })
        setPosition('')
        setTransferReason('')
        setOrderNumber(0)
        setOrderDate('')
    }

    return (
        <div className="moving_information-form">
            <Property title="Предыдущая позиция:"
                      value={<input type="text" value={position} onChange={e => setPosition(e.target.value)} />} />
            <Property title="Причина ухода:" value={<input type="text" value={transferReason}
                                                           onChange={e => setTransferReason(e.target.value)} />} />
            <Property title="Номер приказа:"
                      value={<input type="number" value={orderNumber} onChange={e => setOrderNumber(Number(e.target.value))} />} />
            <Property title="Дата приказа:" value={<input type="text" value={orderDate} onChange={e => setOrderDate(e.target.value)} />} />

            <button className="button button_green" onClick={onClick}>Ок</button>
        </div>
    )
}