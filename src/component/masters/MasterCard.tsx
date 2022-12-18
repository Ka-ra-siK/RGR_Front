import {Masters} from "../../api/base";
import React, {useState} from "react";
import {MasterForm} from "./MasterForm";
import {Property} from "../Property";

interface Props {
    master: Masters
    onEdit: (id?: number, master?: Masters) => void
    onDelete: (id?: number) => void
}

export const MasterCard: React.FC<Props> = ({ master , onEdit, onDelete}) => {


    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="card master-card">
            {isEdit ?
                <MasterForm master={master} onSubmit={(newClient) => { onEdit(master.id, newClient); setIsEdit(false) }} />
                :
                <div className="master-card__main">

                    <Property title="Имя:" value={master.staffByStaffId?.name} />
                    <Property title="Материалы:" value={<span>{master.materials?.map((order, idx) => <span key={order.id} className="client-card__order">{order.name}{`${idx !== (master.materials?.length ?? 0) - 1 ? ',' : ''} `}</span>)}</span>} />
                    <Property title="Специальности:" value={<span>{master.specializations?.map((order, idx) => <span key={order.id} className="client-card__order">{order.name}{`${idx !== (master.specializations?.length ?? 0) - 1 ? ',' : ''} `}</span>)}</span>} />
                </div>
            }
        </div>
    )
}