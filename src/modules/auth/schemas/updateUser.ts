import {JSONSchemaType} from "ajv";

export interface UserData {
    name: string,
    surname: string
    email: string,
}

const updateUserRequestSchema: JSONSchemaType<UserData> = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 3,
            "maxLength": 255,
            "errorMessage": {
                "minLength": "Ime mora imati barem 3 karaktera",
                "maxLength": "Ime može imati maksimalno 255 karaktera"
            },
            "transform": ["trim", "toUpperCase"]
        },
        "surname": {
            "type": "string",
            "minLength": 3,
            "maxLength": 255,
            "errorMessage": {
                "minLength": "Prezime mora imati barem 3 karaktera",
                "maxLength": "Prezime može imati maksimalno 255 karaktera"
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
                "maxLength": "E-mail može imati maksimalno 255 karaktera"
            },
            "transform": ["trim", "toLowerCase"]
        }
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
export {updateUserRequestSchema}