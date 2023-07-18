import { injectable } from "inversify";

@injectable()
export class ObjectHelper {
    public transformDtoFieldToCamelCase = (field: string): string => (
        field.charAt(0).toLowerCase() + field.slice(1)
    )
}