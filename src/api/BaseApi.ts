export interface BaseApi<T> {
    create(entity: T): Promise<T>;
    edit(id: number, entity: T): Promise<T>
    findAll(): Promise<T[]>
    delete(id: number): Promise<Response>
}