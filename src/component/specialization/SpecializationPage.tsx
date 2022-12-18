import {useEntities} from "../../util/useEntities";
import {specializationApi} from "../../api/SpecializationApi";
import {useState} from "react";
import {Specialization} from "../../api/base";
import {SpecializationForm} from "./SpecializationForm";
import {SpecializationCard} from "./SpecializationCard";

export const SpecializationPage: React.FC = () => {
    const [specializations, _, refresh] = useEntities(specializationApi)
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (client: Specialization) => {
        specializationApi.create(client).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, client?: Specialization) => {
        if (!id || !client) return
        specializationApi.edit(id, client).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        specializationApi.delete(id).finally(refresh)
    }

    return (
        <div className="staff-page">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <SpecializationForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {specializations?.map(c => <SpecializationCard key={c.id} specialization={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}