export default function ensureObject (key, value) {
	return typeof key === 'object' ? key : {[key]: value};
}
