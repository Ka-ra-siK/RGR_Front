import {BaseApi} from "./BaseApi";
import {Materials, MaterialsControllerApi} from "./base/api";
import {customFetch} from "./util/customFetch";
import {configuration} from "./util/apiConfiguration";

class MaterialsApi implements BaseApi<Materials>{
    api = new MaterialsControllerApi(configuration, configuration.basePath, customFetch);
    create(entity: Materials): Promise<Materials> {
        return this.api.createUsingPOST2(entity)
    }

    edit(id: number, entity: Materials): Promise<Materials> {
        return this.api.editUsingPUT2(id, entity)
    }

    findAll(): Promise<Materials[]> {
        return this.api.getAllMaterialsUsingGET()
    }

    delete(id: number): Promise<Response> {
        return this.api.deleteUsingDELETE2(id)
    }
}

export const materialApi = new MaterialsApi()