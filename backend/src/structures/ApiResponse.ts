import { 
	RawAPIResponseData, 
	HTTPResponseCode, 
	APIResponseCompilerOptions, 
	CompiledAPIResponseData } from "../util/types/APIResponseData";

export class APIResponse {

	private _useMessage: boolean | null;
	private _useStatusIndicator: boolean | null;
	private _useSuccessfulIndicator: boolean | null;

	private _data: any;
	private _message: string | null;
	private _successful: boolean | null;
	private _statusCode: HTTPResponseCode;

	private _meta: any;

	constructor(data?: RawAPIResponseData) {
		this._useMessage = (data?.useMessage ? data?.useMessage : null)
		this._useStatusIndicator = (data?.useStatusIndicator ? data?.useStatusIndicator : null);
		this._useSuccessfulIndicator = (data?.useSuccessfulIndicator ? data?.useSuccessfulIndicator : null);
		
		this._statusCode = (data?.statusCode ? data?.statusCode : 200);
		this._message = (data?.message ? data?.message : null);
		this._successful = (data?.successful ? data?.successful : null);
		this._data = (data?.data ? data?.data : null);

		this._meta = (data?.meta ? data?.meta : null);
	}

	get useMessage(): boolean | null {
		return this._useMessage;
	}

	get useStatusIndicator(): boolean | null {
		return this._useStatusIndicator
	}

	get useSuccessfulIndicator(): boolean | null {
		return this._useSuccessfulIndicator
	}


	get status(): HTTPResponseCode {
		return this._statusCode;
	}

	get message(): string | null{
		return this._message;
	}

	get successful(): boolean | null {
		return this._successful;
	}
	
	setStatus(status: HTTPResponseCode): APIResponse {
		this._statusCode = status;
		this._useStatusIndicator = true;
		
		return this;
	}

	setSuccessful(successful?: boolean): APIResponse {
		if (successful == undefined) this._successful = true;
		this._useSuccessfulIndicator = true;

		return this;
	}

	setMessage(msg: string): APIResponse {
		msg = msg.toString();

		this._useMessage = true;
		this._message = msg;
		
		return this;
	}

	setData(data: any): APIResponse {
		this._data = data;
		return this;
	}

	setMeta(meta: any): APIResponse {
		this._meta = meta;
		return this;
	}

	compile(options?: APIResponseCompilerOptions): CompiledAPIResponseData {
		let dataReturned: CompiledAPIResponseData = {};
		
		/** Define HTTP Status Code */
		(() => {
			if (this._useStatusIndicator == false) return;
			dataReturned.status = this.status;
		})();

		/** Define Successful Key */
		(() => {
			if (this.useSuccessfulIndicator == false || this.successful == null) return;
			dataReturned.successful = this.successful;
		})();

		/** Define Message (if any) */
		(() => {
			if (this._useMessage == false || this.message == null) return;
			dataReturned.message = this.message;
		})();

		/** Define Response Data */
		(() => {
			if (!this._data) return;
			dataReturned.data = this._data;
		})();

		/** Define Response Meta */
		(() => {
			if (!this._meta) return;
			dataReturned.meta = this._meta;
		})();

		return dataReturned;
	}

}