import {Selectable} from "kysely";
import {Users} from "kysely-codegen";
import {UserData} from "../schemas/storeUser.js";

export default interface AuthRepositoryInterface {
    getUsers(): Promise<Selectable<Users>[]>

    getUser(userId: number): Promise<Selectable<Users> | undefined>

    storeUser(data: UserData): Promise<Selectable<Users> | undefined>,

    updateUser(userId: number, data: UserData): Promise<Selectable<Users> | undefined>,

    checkDoesEmailExist(userEmail: string): Promise<{id: number}| undefined>

    checkDoesEmailExistIgnoringUserId(userEmail: string, userId: number): Promise<{id: number}| undefined>

    checkDoesUserExist(userId: number): Promise<{id: number}| undefined>
}