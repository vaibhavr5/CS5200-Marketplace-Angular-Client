import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angularx-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("971318108998-8hul8b6od5maucpke8iapu89ldb39fj9.apps.googleusercontent.com")
  }]);

  return config;
}
