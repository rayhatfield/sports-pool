export default function stopEvent (e) {
	e.stopPropagation();
	e.preventDefault();
}
