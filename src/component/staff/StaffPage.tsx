import {useEntities} from "../../util/useEntities";
import {staffApi} from "../../api/StaffApi";
import {useState} from "react";
import {Staff} from "../../api/base";
import {StafffForm} from "./StaffForm";
import {StaffCard} from "./StaffCard";

export const StaffPage: React.FC = () => {
    const [staffs, _, refresh] = useEntities(staffApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (client: Staff) => {
        staffApi.create(client).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, client?: Staff) => {
        if (!id || !client) return
        staffApi.edit(id, client).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        staffApi.delete(id).finally(refresh)
    }

    return (
        <div className="staff-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <StafffForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {staffs?.map(c => <StaffCard key={c.id} client={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}