import Emitter from 'events';

import React from 'react';

import {ensureObject} from './util';

const DATA = Symbol('store-data');
const CHANGE = 'store-change';

class Store extends Emitter {

	[DATA] = {}

	set = (key, value) => {
		const obj = ensureObject(key, value);
		Object.assign(this[DATA], obj);
		// TODO: don't emit for values that didn't actually change
		this.emit(CHANGE, obj);
	}

	get = key => this[DATA][key];
}

const store = new Store();

export default function connect (connectProps) {

	const propMap = Array.isArray(connectProps)
		? connectProps.reduce((acc, p) => ({...acc, [p]: p}), {})
		: connectProps;

	return function (Cmp) {
		return (
			class Connected extends React.Component {
				constructor (props) {
					super(props);
					store.on(CHANGE, this.onStoreChange);
				}

				static displayName = `Connected[${Cmp.displayName || Cmp.name || 'unknown'}]`

				shouldUpdate = storeValues => {
					return Object.keys(storeValues).some(key => propMap[key]);
				}

				onStoreChange = e => {
					if (this.shouldUpdate(e)) {
						this.forceUpdate();
					}
				}

				getStoreProps () {
					return Object.entries(propMap).reduce((acc, [key, prop]) => {
						acc[prop] = store.get(key);
						return acc;
					}, {store});
				}

				render () {
					const storeProps = this.getStoreProps();
					const props = {
						...storeProps,
						...this.props
					};

					return (
						<Cmp {...props} />
					);
				}
			}
		);
	};
}
