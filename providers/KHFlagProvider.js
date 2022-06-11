import { useEffect, useState } from "react";
import initFirebase from "./firebase";
import {
	getRemoteConfig,
	fetchAndActivate,
	getAll,
} from "firebase/remote-config";
import { FlagsContext } from '../context/flagsContext';

export const defaultFlags = {
	customUser: false,
};

export const KHFlagProvider = ({ defaults, children }) => {
	const [flags, setFlags] = useState(defaults);

	useEffect(() => {
		const remoteConfig = getRemoteConfig(initFirebase());
		remoteConfig.settings.minimumFetchIntervalMillis = 0;
		remoteConfig.defaultConfig = defaults;
		fetchAndActivate(remoteConfig)
			.then(() => {
				return getAll(remoteConfig);
			})
			.then((remoteFlags) => {
				Object.entries(remoteFlags).forEach(e => remoteFlags[e[0]] = e[1].asBoolean())
				setFlags(remoteFlags);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>
	);
};
