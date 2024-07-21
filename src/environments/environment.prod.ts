import { IConfig } from 'src/app/core/models/config';

export const environment: IConfig = {
  production: true,
  clientBuildNumber: '#{Build.BuildNumber}#',
  serverBuildNumber: 'TODO',
  serverUrl: 'https://remote-beep-api.azurewebsites.net',
  corsConnectSrcWhiteList: '#{CorsConnectSrcWhiteList}#'
};
