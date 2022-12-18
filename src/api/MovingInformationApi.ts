import {BaseApi} from "./BaseApi";
import {MovingInformation, MovingInformationControllerApi} from "./base/api";
import {configuration} from "./util/apiConfiguration";
import {customFetch} from "./util/customFetch";

class MovingInformationApi implements BaseApi<MovingInformation>{
    api = new MovingInformationControllerApi(configuration, configuration.basePath, customFetch);
    create(entity: MovingInformation): Promise<MovingInformation> {
        return this.api.createUsingPOST3(entity)
    }

    edit(id: number, entity: MovingInformation): Promise<MovingInformation> {
        return this.api.editUsingPUT3(id, entity)
    }

    findAll(): Promise<MovingInformation[]> {
        return this.api.getAllmovingInformationsUsingGET()
    }

    delete(id: number): Promise<Response> {
        return this.api.deleteUsingDELETE3(id)
    }
}

export const movingInformationApi = new MovingInformationApi()