import {Users} from "kysely-codegen";
import {Selectable} from "kysely";
import {UserData} from "../schemas/storeUser.js";

export interface UserStoreServiceInterface{
    storeUser(data: UserData): Promise<Selectable<Users> | undefined>
}