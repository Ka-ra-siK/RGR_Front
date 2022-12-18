import {useEntities} from "../../util/useEntities";
import {orderServiceApi} from "../../api/OrderServiceApi";
import {useState} from "react";
import {OrderService} from "../../api/base";
import {OrderServiceForm} from "./OrderServiceForm";
import {OrderServiceCard} from "./OrderServiceCard";

export const OrderServicePage: React.FC = () => {
    const [orderServies, _, refresh] = useEntities(orderServiceApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (client: OrderService) => {
        orderServiceApi.create(client).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, client?: OrderService) => {
        if (!id || !client) return
        orderServiceApi.edit(id, client).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        orderServiceApi.delete(id).finally(refresh)
    }

    return (
        <div className="staff-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <OrderServiceForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {orderServies?.map(c => <OrderServiceCard key={c.id} orderService={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}