import {JSONSchemaType} from "ajv"

export interface UserData {
    name: string,
    surname: string
    email: string,
}

const requestSchema: JSONSchemaType<UserData> = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 3,
            "maxLength": 255,
            "errorMessage": {
                "minLength": "Ime mora imati barem 3 karaktera",
                "maxLength": "Ime može imati maksimalno 255 karaktera",
            },
            "transform": ["trim", "toUpperCase"]
        },
        "surname": {
            "type": "string",
            "minLength": 3,
            "maxLength": 255,
            "errorMessage": {
                "minLength": "Prezime mora imati barem 3 karaktera",
                "maxLength": "Prezime može imati maksimalno 255 karaktera",
            },
            "transform": ["trim", "toUpperCase"]
        },
        "email": {
            "type": "string",
            "format": "email",
            "minLength": 3,
            "maxLength": 255,
            "errorMessage": {
                "format": "Nevalidan format e-mail adrese",
                "minLength": "E-mail mora imati barem 3 karaktera",
                "maxLength": "E-mail može imati maksimalno 255 karaktera",
            },
            "transform": ["trim", "toLowerCase"]

        },
    },
    "required": ["name", "surname", "email"],
    "errorMessage": {
        "type": "should be an object",
        "required": {
            "name": "Ime je obavezno",
            "surname": "Prezime je obavezno",
            "email": "E-mail je obavezan",
        }
    }
}

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
        user: UserListItem
    }
}
const responseSchema: JSONSchemaType<UserListResponse> =
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
                    "user": {
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
                },
                "required": ["user"],
                "additionalProperties": false
            }
        },
        "required": ["message", "data"],
        "additionalProperties": false
    }


interface BadRequest {
    errors: string[]
}
const badRequestSchema: JSONSchemaType<BadRequest> = {
    "type": "object",
    "properties": {
        "errors": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    "required": ["errors"]
}


export {requestSchema, responseSchema, badRequestSchema}