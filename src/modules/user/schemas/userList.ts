import {JSONSchemaType} from "ajv"
import {Static, Type} from '@sinclair/typebox'

interface UserListItem {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    created_at: string
}

export interface UserListResponse {
    message: string,
    data: {
        users: UserListItem[]
    }
}

const userListResponseSchema: JSONSchemaType<UserListResponse> =
    {
        "type": "object",
        "summary": "Pregled korisnika",
        "description": "Pregled korisnika ba",
        "properties": {
            "message": {
                "type": "string",
                "value": "Uspešno učitani korisnici"
            },
            "data": {
                "type": "object",
                "properties": {
                    "users": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {"type": "integer"},
                                "first_name": {"type": "string"},
                                "last_name": {"type": "string"},
                                "email": {"type": "string", "format": "email"},
                                "created_at": {"type": "string", "format": "timestamp"}
                            },
                            "required": ["id", "first_name", "last_name", "email", "created_at"],
                            "additionalProperties": false
                        }
                    }
                },
                "required": ["users"],
                "additionalProperties": false
            }
        },
        "required": ["message", "data"],
        "additionalProperties": false

    }

export const User = Type.Object({
    hababa: Type.String({errorMessage: 'ne'}),
    bababa: Type.Optional(Type.String({format: 'email', errorMessage: 'mora biti email'}))
}, {
    additionalProperties: true,
})

export type UserType = Static<typeof User>
export {userListResponseSchema}