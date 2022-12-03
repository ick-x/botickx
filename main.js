import { axios } from "@pipedream/platform"
export default defineComponent({
  props: {
    twitter: {
      type: "app",
      app: "twitter",
    }
  },
  async run({steps, $}) {
    return await axios($, {
      url: `https://api.twitter.com/1.1/account/verify_credentials.json`,
    }, {
      token: {
        key: this.twitter.$auth.oauth_access_token,
        secret: this.twitter.$auth.oauth_refresh_token,
      },
      oauthSignerUri: this.twitter.$auth.oauth_signer_uri,
    })
  },
})