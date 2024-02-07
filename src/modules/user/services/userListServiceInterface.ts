import {Users} from "kysely-codegen";
import {Selectable} from "kysely";

export interface UserListServiceInterface{
    getUserList(): Promise<Selectable<Users>[]>
}