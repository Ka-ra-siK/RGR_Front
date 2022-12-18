import {useEntities} from "../../util/useEntities";
import {movingInformationApi} from "../../api/MovingInformationApi";
import {useState} from "react";
import {MovingInformation} from "../../api/base";
import {MovingInformationForm} from "./MovingInformationForm";
import {MovingInformationCard} from "./MovingInformationCard";

export const MovingInformationPage: React.FC = () => {
    const [movingInformations, _, refresh] = useEntities(movingInformationApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (client: MovingInformation) => {
        movingInformationApi.create(client).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, client?: MovingInformation) => {
        if (!id || !client) return
        movingInformationApi.edit(id, client).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        movingInformationApi.delete(id).finally(refresh)
    }

    return (
        <div className="staff-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <MovingInformationForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {movingInformations?.map(c => <MovingInformationCard key={c.id} movingInformation={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}