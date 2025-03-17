// environment variable handling in production build images
// require runtime placement of vars to prevent rebuilding the image
// this application is destined to be run via a caddy file server.
// caddy file server has the https://caddyserver.com/docs/caddyfile/directives/templates
// templates directive to easily handle runtime variables

const config = {
  // KEYCLOAK_CLIENT_ID: window.REACT_APP_KEYCLOAK_CLIENT_ID || process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
  // API_BASE_URL: window.REACT_APP_API_URL || process.env.REACT_APP_API_URL,
  // KEYCLOAK_URL: window.REACT_APP_KEYCLOAK_URL || process.env.REACT_APP_KEYCLOAK_URL,
  // KEYCLOAK_REALM: window.REACT_APP_KEYCLOAK_REALM || process.env.REACT_APP_KEYCLOAK_REALM,
  // COMS_URL: window.REACT_APP_COMS_URL || process.env.REACT_APP_COMS_URL,
  // COMS_BUCKET: window.REACT_APP_COMS_BUCKET || process.env.REACT_APP_COMS_BUCKET,
  ENVIRONMENT_NAME: (window.VITE_ENVIRONMENT_NAME || import.meta.env.VITE_ENVIRONMENT_NAME) ?? "production",
  GRAPHQL_URL: (window.VITE_GRAPHQL_URL || import.meta.env.VITE_GRAPHQL_URL) ?? "",
  PORT: (window.VITE_PORT || import.meta.env.VITE_PORT) ?? 3000,
  BASE_URL: (window.VITE_BASE_URL || import.meta.env.VITE_BASE_URL) ?? "",
  OIDC_ISSUER_URI: (window.VITE_OIDC_ISSUER_URI || import.meta.env.VITE_OIDC_ISSUER_URI) ?? "",
  OIDC_CLIENT_ID: (window.VITE_OIDC_CLIENT_ID || import.meta.env.VITE_OIDC_CLIENT_ID) ?? "",
  OIDC_SSO_SESSION_IDLE_SECONDS: (window.VITE_OIDC_SSO_SESSION_IDLE_SECONDS || import.meta.env.VITE_OIDC_SSO_SESSION_IDLE_SECONDS) ?? 0,
  OIDC_SCOPE: (window.VITE_OIDC_SCOPE || import.meta.env.VITE_OIDC_SCOPE) ?? "",
};

export default config;
