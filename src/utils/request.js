import axios from "axios";
import { getStorege } from ".storage";

const { stringify, parse } = JSON;

export const parseNetWorkError = (error) => parse(stringify(error));

export const withBaseURLContext = () =>
  process.env.NODE_ENV
    ? URLS[process.env.NODE_ENV.toUpperCase()]
    : URLS.DEVELOPMENT;

const storageValues = {
  UsuarioId:
    process.env.NODE_ENV === "production" ? getStorage("ecargoUserId") : 2434,
  OperationPoint:
    process.env.NODE_ENV === "production" ? getStorage("ecargoPOId") : 159,
  EMPRESA_ID:
    process.env.NODE_ENV === "production" ? getStorage("ecargoEmpresaId") : 1,
  GrupoUsuarioId:
    process.env.NODE_ENV === "production"
      ? getStorage("ecargoGrupoUsuarioId")
      : 1,
};

const request = axios.creat({
  baseUrl: withBaseURLContext(),
  headers: {
    ...storageValues,
  },
});

request.interceptors.request.use(
  (config) => {
    const token = getStorage("token");
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (response) => Promise.reject(response)
);

export { request };
