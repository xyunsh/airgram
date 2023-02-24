/* eslint-disable no-use-before-define */
import * as api from './api';
import { ApiMethods } from './api-methods';
import { MiddlewareOn } from './api-middleware';

type PropType<T, PropT extends keyof T> = T[PropT];
type Predicate<T extends BaseTdObject> = PropType<NonNullable<T>, '_'>;
type ClassType<T> = new (...args: unknown[]) => T;

export type ErrorHandler = (error: Error, ctx?: Record<string, any>) => unknown;

export type TdLibConfig = Omit<api.TdlibParametersInput, '_'>;

export type PlainObjectToModelTransformer = (plainObject: TdObject) => ClassType<TdObject> | TdObject;

export type MiddlewareFn<ContextT = Context> = (ctx: ContextT, next: () => Promise<any>) => any;
export type Middleware<ContextT = Context> = { middleware: () => MiddlewareFn<ContextT> } | MiddlewareFn<ContextT>;
export type NextFn = () => any;

export interface Deferred<T = unknown, ErrorT = Error> {
    promise: Promise<T>;
    resolve: (value?: T) => unknown;
    reject: (error: ErrorT) => unknown;
}

export interface Composer<ContextT> {
    middleware(): MiddlewareFn<ContextT>;

    on(predicateTypes: string | string[], ...fns: Middleware<ContextT>[]): void;

    use(...fns: Middleware<ContextT>[]): void;
}

export interface Config extends TdLibConfig {
    context?:
        | ExtraContext
        | ((ctx: BaseApiResponse<any, any> | BaseUpdateContext<any>) => ExtraContext | Promise<ExtraContext>);
    // models?: PlainObjectToModelTransformer
    databaseEncryptionKey?: string;
    logVerbosityLevel?: number;
    name?: string;
}

export type ProviderFactory<ProviderT extends TdProvider> = (
    handleUpdate: (update: TdObject) => Promise<unknown>,
    handleError: (error: Error | string) => void,
) => ProviderT;

export type CreateProviderFactoryFn<ProviderT extends TdProvider, ConfigT = unknown> = (
    config: ConfigT,
) => ProviderFactory<ProviderT>;

export interface Instance<ProviderT extends TdProvider = TdProvider> {
    readonly api: ApiMethods;
    readonly config: Config;
    readonly provider: ProviderT;
    readonly name: string;
    handleError: ErrorHandler;

    readonly on: MiddlewareOn;

    catch(handler: (error: Error) => void): void;

    destroy(): Promise<void>;

    emit<UpdateT extends BaseTdObject>(update: UpdateT, state?: Record<string, unknown>): Promise<unknown>;

    use(...fns: Middleware<ApiResponse<unknown, TdObject> | UpdateContext<TdObject>>[]): void;
}

export type ApiMethod = keyof ApiMethods;

export type SyncApiMethod =
    | 'addLogMessage'
    | 'cleanFileName'
    | 'getFileExtension'
    | 'getFileMimeType'
    | 'getJsonString'
    | 'getJsonValue'
    | 'getLanguagePackString'
    | 'getLogStream'
    | 'getLogTagVerbosityLevel'
    | 'getLogTags'
    | 'getLogVerbosityLevel'
    | 'getPushReceiverId'
    | 'getTextEntities'
    | 'parseTextEntities'
    | 'setLogStream'
    | 'setLogTagVerbosityLevel'
    | 'setLogVerbosityLevel'
    | 'testReturnError';

export type AsyncApiMethod = Exclude<ApiMethod, SyncApiMethod>;

export interface ApiRequest<ParamsT = Record<string, any> | undefined> {
    method: string;
    params: ParamsT;
}

export interface ApiRequestOptions {
    state?: Record<string, unknown>;
}

export interface BaseApiResponse<ParamsT, ResultT extends BaseTdObject> extends ContextState {
    _: Predicate<ResultT> | 'error';
    request: ApiRequest<ParamsT>;
    response: ResultT | api.ErrorUnion;
    options: ApiRequestOptions;
    airgram: Instance;
}

export interface ApiResponse<ParamsT, ResultT extends BaseTdObject>
    extends BaseApiResponse<ParamsT, ResultT>,
        ExtraContext {}

export interface TdProvider {
    destroy(): Promise<void>;

    execute(request: ApiRequest): TdObject;

    send(request: ApiRequest): Promise<TdObject>;
}

export interface BaseTdObject {
    _: string;
}

export interface TdObject extends BaseTdObject {
    [key: string]: TdObject | TdObject[] | number | number[] | string | string[] | boolean | boolean[] | undefined;
}

export type SetStateFn = (nextState: Record<string, unknown>) => void;
export type GetStateFn = () => Record<string, unknown>;

export interface ContextState {
    setState: SetStateFn;
    getState: GetStateFn;
}

export interface BaseUpdateContext<UpdateT extends BaseTdObject> extends ContextState {
    _: Predicate<UpdateT>;
    update: UpdateT;
    airgram: Instance;
}

export interface UpdateContext<UpdateT extends BaseTdObject> extends BaseUpdateContext<UpdateT>, ExtraContext {}

export type Context = ApiResponse<unknown, TdObject> | UpdateContext<TdObject>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExtraContext {}
