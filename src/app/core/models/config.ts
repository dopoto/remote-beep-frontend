export interface IConfig {
    production: boolean;
    clientBuildNumber: string,
    serverBuildNumber: string,
    serverUrl: string;
    corsConnectSrcWhiteList: string;
}