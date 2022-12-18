import {BaseApi} from "./BaseApi";
import {Staff, StaffControllerApi} from "./base/api";
import {customFetch} from "./util/customFetch";
import {configuration} from "./util/apiConfiguration";

class StaffApi implements BaseApi<Staff>{
    api = new StaffControllerApi(configuration, configuration.basePath, customFetch);

    create(entity: Staff): Promise<Staff> {
        return this.api.createUsingPOST6(entity)
    }

    edit(id: number, entity: Staff): Promise<Staff> {
        return this.api.editUsingPUT6(id, entity)
    }

    findAll(): Promise<Staff[]> {
        return this.api.getAllmovingInformationsUsingGET2()
    }

    delete(id: number): Promise<Response> {
        return this.api.deleteUsingDELETE6(id)
    }
}

export const staffApi = new StaffApi()