
# Token Machine Template

An Onchain App Template build with [OnchainKit](https://onchainkit.xyz), and ready to be deployed to Vercel.

The template is a simple swap app made with the OnchainKit [Swap component](https://onchainkit.xyz/docs/swap/swap).

![token-community](https://github.com/fakepixels/token-machine/blob/main/public/token-community.png)

<br />

## Setup

To ensure all components work seamlessly, set the following environment variables in your `.env` file using `.local.env.example` as a reference.

You can find the API key on the [Coinbase Developer Portal's OnchainKit page](https://portal.cdp.coinbase.com/products/onchainkit). If you don't have an account, you will need to create one. 

You can find your Wallet Connector project ID at [Wallet Connect](https://cloud.walletconnect.com).

```sh
# See https://portal.cdp.coinbase.com/products/onchainkit
NEXT_PUBLIC_CDP_API_KEY="GET_FROM_COINBASE_DEVELOPER_PLATFORM"

# See https://cloud.walletconnect.com
NEXT_PUBLIC_WC_PROJECT_ID="GET_FROM_WALLET_CONNECT"
```
<br />

## Locally run

```sh
# Install bun in case you don't have it
curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL
# to install a specific version
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.0"


# Install packages
bun i

# Run Next app
bun run dev
```
<br />

## Resources

- [OnchainKit documentation](https://onchainkit.xyz)

<br />

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
