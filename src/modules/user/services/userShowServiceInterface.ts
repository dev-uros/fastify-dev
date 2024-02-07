import {Users} from "kysely-codegen";
import {Selectable} from "kysely";

export interface UserShowServiceInterface{
    showUser(userId: number): Promise<Selectable<Users> | undefined>
}