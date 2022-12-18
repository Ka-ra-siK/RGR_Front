import {BaseApi} from "./BaseApi";
import {Specialization, SpecializationControllerApi} from "./base/api";
import {customFetch} from "./util/customFetch";
import {configuration} from "./util/apiConfiguration";

class SpecializationApi implements BaseApi<Specialization>{
    api = new SpecializationControllerApi(configuration, configuration.basePath, customFetch);

    create(entity: Specialization): Promise<Specialization> {
        return this.api.createUsingPOST5(entity)
    }

    edit(id: number, entity: Specialization): Promise<Specialization> {
        return this.api.editUsingPUT5(id, entity)
    }

    findAll(): Promise<Specialization[]> {
        return this.api.getAllmovingInformationsUsingGET1()
    }

    delete(id: number): Promise<Response> {
        return this.api.deleteUsingDELETE5(id)
    }
}

export const specializationApi = new SpecializationApi()