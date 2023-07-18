
export interface IServerErrors {
	message: string;
	errors?: PropertyError[]
}

export class PropertyError {
	public message: string = "";
	public fieldName: string = "";

	constructor(message: string, fieldName: string) {
		this.message = message;
		this.fieldName = fieldName;
	}
}
