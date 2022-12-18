import {useEntities} from "../../util/useEntities";
import {masterApi} from "../../api/MastersApi";
import {useState} from "react";
import {Masters} from "../../api/base";
import {MasterForm} from "./MasterForm";
import {MasterCard} from "./MasterCard";

export const MasterPage: React.FC = () => {
    const [masters, _, refresh] = useEntities(masterApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (master: Masters) => {
        masterApi.create(master).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, master?: Masters) => {
        if (!id || !master) return
        masterApi.edit(id, master).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        masterApi.delete(id).finally(refresh)
    }

    return (
        <div className="staff-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <MasterForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {masters?.map(c => <MasterCard key={c.id} master={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}