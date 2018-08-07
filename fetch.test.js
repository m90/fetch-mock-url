const assert = require('assert');
const fetchMock = require('fetch-mock');

const { fetch, fetchURL } = require('./fetch');

describe('fetch', () => {
	before(() => {
		fetchMock.get('http://api.example.com/resource/123', { ok: true });
	});
	after(() => {
		fetchMock.restore();
		fetchMock.reset();
	});
	it('resolves with the payload', () => {
		return fetch('http://api.example.com/resource/123').then((payload) => {
			assert.deepStrictEqual(payload, { ok: true });
		});
	});
});

describe('fetchURL', () => {
	context('with string matcher', () => {
		before(() => {
			fetchMock.get('http://api.example.com/resource/123', { ok: true });
		});
		after(() => {
			fetchMock.restore();
			fetchMock.reset();
		});
		it('resolves with the payload', () => {
			return fetchURL('http://api.example.com/resource/123').then((payload) => {
				assert.deepStrictEqual(payload, { ok: true });
			});
		});
	});

	context('with URL matcher', () => {
		before(() => {
			fetchMock.get(new URL('http://api.example.com/resource/123'), { ok: true });
		});
		after(() => {
			fetchMock.restore();
			fetchMock.reset();
		});
		it('resolves with the payload', () => {
			return fetchURL('http://api.example.com/resource/123').then((payload) => {
				assert.deepStrictEqual(payload, { ok: true });
			});
		});
	});
});
