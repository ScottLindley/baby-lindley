function getAPIDomain() {
  return window.location.origin;
}

function configToURLParams(config) {
  return config
    ? Object.entries(config)
        .filter(([, val]) => !!val)
        .reduce((p, [key, val]) => [...p, `${key}=${encodeURIComponent(String(val))}`], [])
        .join('&')
    : '';
}

function URLParamsToConfig(url) {
  const [, queryString = ''] = url.split('?');
  return queryString.split('&').reduce((config, keyVal) => {
    const [key, val] = keyVal.split('=');
    let decodedVal = decodeURIComponent(val);
    if (decodedVal.toLocaleLowerCase() === 'true') decodedVal = true;
    else if (decodedVal.toLocaleLowerCase() === 'false') decodedVal = false;

    return { ...config, [key]: decodedVal };
  }, {});
}

export default {
  getAPIDomain,
  configToURLParams,
  URLParamsToConfig,
};
