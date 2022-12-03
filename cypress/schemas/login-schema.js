export const errorLoginSchema = {
    "type": "object",
    "required": [
        "code",
        "errors"
    ],
    "properties": {
        "code": {
            "type": "integer"
        },
        "errors": {
            "type": "array"
        }
    }
}