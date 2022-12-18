import {BaseApi} from "./BaseApi";
import {Masters, MastersControllerApi} from "./base/api";
import {customFetch} from "./util/customFetch";
import {configuration} from "./util/apiConfiguration";

class MastersApi implements BaseApi<Masters>{
    api = new MastersControllerApi(configuration, configuration.basePath, customFetch);
    create(masters: Masters){
        return this.api.createUsingPOST1(masters)
    }
    edit(id: number, masters: Masters) {
        return this.api.editUsingPUT1(id, masters)
    }

    findAll(): Promise<Masters[]> {
        return this.api.getAllMastersUsingGET()
    }

    delete(id: number): Promise<Response> {
        return this.api.deleteUsingDELETE1(id)
    }
}

export const masterApi = new MastersApi()