import fetchMock from 'jest-fetch-mock';
import { globalThis } from 'globalthis/polyfill';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
fetchMock.enableMocks();
