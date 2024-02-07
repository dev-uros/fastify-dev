import {Selectable} from "kysely";
import {Users} from "kysely-codegen";
import {UserData} from "../schemas/storeUser.js";

export default interface UserRepositoryInterface {
    getUsers(): Promise<Selectable<Users>[]>

    getUser(userId: number): Promise<Selectable<Users> | undefined>

    getUserByEmail(email: string): Promise<Selectable<Users> | undefined>

    storeUser(data: UserData, password: string): Promise<Selectable<Users> | undefined>,

    updateUser(userId: number, data: UserData): Promise<Selectable<Users> | undefined>,

    checkDoesEmailExist(userEmail: string): Promise<{id: number}| undefined>

    checkDoesEmailExistIgnoringUserId(userEmail: string, userId: number): Promise<{id: number}| undefined>

    checkDoesUserExist(userId: number): Promise<{id: number}| undefined>
}