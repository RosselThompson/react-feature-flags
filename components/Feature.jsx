import { useContext } from 'react';
import { FlagsContext } from '../context/flagsContext';

export const Feature = ({ name, children }) => {
	const flags = useContext(FlagsContext);
	const isActive = flags[name];

	return <>{isActive ? children : null}</>;
};

export default Feature;
