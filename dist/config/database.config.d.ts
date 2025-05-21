declare const _default: (() => {
    user: string | undefined;
    password: string | undefined;
    server: string | undefined;
    database: string | undefined;
    options: {
        encrypt: boolean;
        enableArithAbort: boolean;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    user: string | undefined;
    password: string | undefined;
    server: string | undefined;
    database: string | undefined;
    options: {
        encrypt: boolean;
        enableArithAbort: boolean;
    };
}>;
export default _default;
