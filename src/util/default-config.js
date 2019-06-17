export default {
  oidc: {
    clientId: "0oaq734ljN2sbfqEL356",
    issuer: "https://dev-710580.okta.com/oauth2/default",
    redirectUri: "http://localhost:3000/implicit/callback",
    scope: "openid profile email"
  },
  resourceServer: {
    messagesUrl: "http://localhost:3000/api/messages"
  }
};
