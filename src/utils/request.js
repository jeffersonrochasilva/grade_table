import axios from 'axios'
import { URLS } from './enum'
import { getStorage } from './storage'

const { stringify, parse } = JSON

export const parseNetworkError = (error) => parse(stringify(error))

export const withBaseURLContext = () =>
	process.env.NODE_ENV
		? URLS[process.env.NODE_ENV.toUpperCase()]
		: URLS.DEVELOPMENT

const storageValues = {
	UsuarioId:
		process.env.NODE_ENV === 'production' ? getStorage('usuarioId') : 1,
	GrupoUsuarioId:
		process.env.NODE_ENV === 'production' ? getStorage('GrupoUsuarioId') : 1,
	EmpresaId:
		process.env.NODE_ENV === 'production' ? getStorage('EmpresaId') : 1,
}

const request = axios.create({
	baseURL: withBaseURLContext(),
	headers: {
		...storageValues,
	},
})

request.interceptors.request.use(
	(config) => {
		const token = getStorage('token')
		if (token) {
			config.headers.common.Authorization = `Bearer ${token}`
		}

		return config
	},
	(response) => Promise.reject(response)
)

export { request }
