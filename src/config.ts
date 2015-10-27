export const homeDirPath: string = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
export const configDirName: string = '.misskey';
export const configFileName: string = 'userContentsServer.json';
export const configDirectoryPath: string = `${homeDirPath}/${configDirName}`;
export const configPath: string = `${configDirectoryPath}/${configFileName}`;

export default loadConfig();

function loadConfig(): IConfig {
	'use strict';
	try {
		return <IConfig>require(configPath);
	} catch (e) {
		return null;
	}
}

export interface IConfig {
	passkey: string;
	port: {
		internal: number;
		http: number;
		https: number;
	};
	storagePath: string;
}

export const defaultConfig: IConfig = {
	passkey: "",
	port: {
		internal: 616,
		http: 80,
		https: 443
	},
	storagePath: ""
};
