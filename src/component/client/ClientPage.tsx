import {useEntities} from "../../util/useEntities";
import {clientApi} from "../../api/ClientApi";
import {useState} from "react";
import {Clients} from "../../api/base/api";
import {ClientForm} from "./ClientForm";
import {ClientCard} from "./ClientCard";

export const ClientPage: React.FC = () => {
    const [clients, _, refresh] = useEntities(clientApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (client: Clients) => {
        clientApi.create(client).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, client?: Clients) => {
        if (!id || !client) return
        clientApi.edit(id, client).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        clientApi.delete(id).finally(refresh)
    }

    return (
        <div className="staff-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <ClientForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {clients?.map(c => <ClientCard key={c.id} client={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}