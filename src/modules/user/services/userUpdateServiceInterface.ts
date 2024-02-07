import {Users} from "kysely-codegen";
import {Selectable} from "kysely";
import {UserData} from "../schemas/storeUser.js";

export interface UserUpdateServiceInterface{
    updateUser(userId: number, data: UserData): Promise<Selectable<Users> | undefined>
}