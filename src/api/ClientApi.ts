import { BaseApi } from "./BaseApi";
import {configuration} from "./util/apiConfiguration";
import {customFetch} from "./util/customFetch";
import {Clients, ClientsControllerApi} from "./base";

class ClientApi implements BaseApi<Clients>{

    api = new ClientsControllerApi(configuration, configuration.basePath, customFetch);

    create(client: Clients){
        return this.api.createUsingPOST(client)
    }

    edit(id: number, client: Clients){
        return this.api.editUsingPUT(client, id)
    }

    findAll(){
        return this.api.getAllClientsUsingGET()
    }

    delete(id: number){
        return this.api.deleteUsingDELETE(id)
    }

}

export const clientApi = new ClientApi()