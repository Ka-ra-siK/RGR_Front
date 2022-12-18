import {BaseApi} from "./BaseApi";
import {customFetch} from "./util/customFetch";
import {configuration} from "./util/apiConfiguration";
import {OrderService, OrderServiceControllerApi} from "./base";

class OrderServiceApi implements BaseApi<OrderService>{
    api = new OrderServiceControllerApi(configuration, configuration.basePath, customFetch);

    create(entity: OrderService): Promise<OrderService> {
        return this.api.createUsingPOST4(entity)
    }

    edit(id: number, entity: OrderService): Promise<OrderService> {
        return this.api.editUsingPUT4(entity, id)
    }

    findAll(): Promise<OrderService[]> {
        return this.api.getAllOrderServicesUsingGET()
    }

    delete(id: number): Promise<Response> {
        return this.api.deleteUsingDELETE4(id)
    }

}

export const orderServiceApi = new OrderServiceApi()