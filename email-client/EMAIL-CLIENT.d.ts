interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    TZ: string;
    MONGODB_URI:string;
}

declare const process: {
    env: ProcessEnv;
};