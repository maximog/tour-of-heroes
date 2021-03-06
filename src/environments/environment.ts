 // This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	name: 'Local',
	production: false,
  version: '2.76',
	isMockEnabled: true, // You have to switch this, when your real back-end is done
	authTokenKey: 'authce9d77b308c149d5992a80073637105',
	API_URL: 'http://0.0.0.0:3000',
	APP_URL: 'http://0.0.0.0:4200',
	API_23GATEWAY_URL: 'https://stage-gateway.23blocks.com',
  API_23CRM_URL: 'http://dev-crm.23blocks.com',
	WEBSOCKETS_23_URL: 'wss://stage-conversations.23blocks.com/cable',
	APPID: 'UkBAIEV_7pBbsQ',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
