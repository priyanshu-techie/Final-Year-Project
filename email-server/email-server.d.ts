interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    TZ: string;
    DB_STRING:string;
}

declare const process: {
    env: ProcessEnv;
};