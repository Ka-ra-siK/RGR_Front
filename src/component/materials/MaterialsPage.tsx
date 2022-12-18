import {useEntities} from "../../util/useEntities";
import {materialApi} from "../../api/MaterialsApi";
import {useState} from "react";
import {Materials} from "../../api/base";
import {MaterialsForm} from "./MaterialsForm";
import {MaterialsCard} from "./MaterialsCard";

export const MaterialsPage: React.FC = () => {
    const [materials, _, refresh] = useEntities(materialApi)

    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (materials: Materials) => {
        materialApi.create(materials).finally(refresh)
        setAddFormShow(false)
    }

    const onEdit = (id?: number, client?: Materials) => {
        if (!id || !client) return
        materialApi.edit(id, client).finally(refresh)
    }

    const onDelete = (id?: number) => {
        if (!id) return
        materialApi.delete(id).finally(refresh)
    }
    return (
        <div className="materialspage">
            <div className="card">
                <button className="button" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Закрыть' : 'Добавить'}`}</button>
                {addFormShow &&
                    <MaterialsForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {materials?.map(c => <MaterialsCard key={c.id} material={c} onEdit={onEdit} onDelete={onDelete} />)}
            </div>
        </div>
    )
}