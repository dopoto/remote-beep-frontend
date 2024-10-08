// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IConfig } from 'src/app/core/models/config';

export const environment: IConfig = {
    production: false,
    clientBuildNumber: 'DEV',
    serverBuildNumber: 'DEV',
    serverUrl: 'https://localhost:7004', //'https://remote-beep.runasp.net', // 'https://localhost:7133',
    corsConnectSrcWhiteList: ' -- Not in use. Set directly in index.html -- '
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
