interface FetchWrapper {
  url: string;
  method?: string;
  payload?: object;
  headers?: object;
}

export const fetchWrapper = async ({
  url,
  method = 'GET',
  payload,
  headers,
}: FetchWrapper) => {
  try {
    const requestInit = {
      method,
      headers,
    };
    if (payload) {
      //@ts-ignore
      requestInit.body = JSON.stringify(payload);
    }
    //@ts-ignore
    const resp = await fetch(url, requestInit);
    const respJson = await resp.json();
    return {...respJson, status: resp.status};
  } catch (e) {
    return e;
  }
};
