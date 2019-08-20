function getAPIDomain() {
  const isDev = window.location.hostname === 'localhost';
  return isDev ? 'http://localhost:1337' : 'http://babylindley.com';
}

export default {
  getAPIDomain,
};
