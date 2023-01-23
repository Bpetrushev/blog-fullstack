const BASE_URL = 'http://localhost:8080';

interface IRequest {
  method: string;
  path: string;
}

const request = async ({ method, path }: IRequest) => {
  const res = await fetch(`${BASE_URL}${path}`, { method });
  const data = await res.json();
  return data;
};

export default request;
