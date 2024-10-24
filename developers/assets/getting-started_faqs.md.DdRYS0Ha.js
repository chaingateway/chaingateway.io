import{_ as s,c as e,o as a,a2 as i}from"./chunks/framework.vJVF7MiN.js";const m=JSON.parse(`{"title":"Developer FAQ's","description":"Browse answers for most asked questions from developers","frontmatter":{"title":"Developer FAQ's","description":"Browse answers for most asked questions from developers"},"headers":[],"relativePath":"getting-started/faqs.md","filePath":"getting-started/faqs.md","lastUpdated":1729588937000}`),t={name:"getting-started/faqs.md"},n=i(`<h1 id="developer-faq-s" tabindex="-1">Developer FAQ&#39;s <a class="header-anchor" href="#developer-faq-s" aria-label="Permalink to &quot;Developer FAQ&#39;s&quot;">​</a></h1><p>Here we answer the most asked questions from developers</p><details class="details custom-block"><summary>What is Chaingateway.io?</summary><p>Chaingateway.io is a comprehensive platform providing blockchain API solutions that enable developers to integrate blockchain functionalities into their applications. Our services support various blockchain networks, allowing seamless and efficient interaction with blockchain data and operations.</p></details><details class="details custom-block"><summary>How do I get started with Chaingateway.io?</summary><p>To get started, sign up for an account on <a href="https://app.chaingateway.io/register" target="_blank" rel="noreferrer">Chaingateway.io</a>. Once registered, you can access your API keys from the dashboard, which you&#39;ll need to authenticate your API requests. Our documentation provides detailed guides and examples to help you integrate our APIs into your application.</p></details><details class="details custom-block"><summary>Which blockchain networks are supported?</summary><p>Chaingateway.io supports a variety of blockchain networks, including but not limited to:</p><ul><li>Ethereum <ul><li>Mainnet</li><li>Sepolia</li></ul></li><li>Binance Smart Chain <ul><li>Mainnet</li><li>Testnet</li></ul></li><li>Bitcoin <ul><li>Mainnet</li><li>Testnet3</li></ul></li><li>Polygon <ul><li>Mainnet</li><li>Mumbai</li></ul></li><li>Tron <ul><li>Mainnet</li><li>Nile</li></ul></li></ul><p>For more information on how to access the different networks, please visit <a href="/developers/getting-started/supported-networks.html">Supported Networks</a>.</p></details><details class="details custom-block"><summary>What kind of APIs does Chaingateway.io offer?</summary><p>We offer a range of APIs to facilitate different blockchain operations, including:</p><ul><li><strong>Wallet Management</strong>: Create and manage wallets.</li><li><strong>Transaction Handling</strong>: Send, receive, and monitor transactions.</li><li><strong>Instant Payment Notification</strong>: Receiving Webhook Notifications on blockchain events.</li><li><strong>Data Retrieval</strong>: Fetch blockchain data like balances, transaction histories, and more.</li></ul></details><details class="details custom-block"><summary>How do I authenticate my API requests?</summary><p>API requests to Chaingateway.io need to be authenticated using an API key. You can find your API key in the dashboard after logging in. Include this key in the headers of your HTTP requests as follows:</p><p>http</p><p><code>Authorization: YOUR_API_KEY</code></p></details><details class="details custom-block"><summary>Are there usage limits for the APIs?</summary><p>Yes, there are usage limits based on your subscription plan. Free plans have lower limits, while higher-tier plans offer more generous usage quotas. Detailed information about the limits and pricing can be found on our pricing page.</p></details><details class="details custom-block"><summary>How do I handle errors from the API?</summary><p>If an API request fails, the response will include an error code and message indicating the issue. Common error codes include:</p><ul><li><code>400</code>: Bad Request - Your request is malformed.</li><li><code>401</code>: Unauthorized - Your API key is invalid or missing.</li><li><code>403</code>: Forbidden - You do not have permission to access the requested resource.</li><li><code>422</code>: Unprocessable Entity - The request was well-formed but unable to be followed due to semantic errors.</li><li><code>500</code>: Internal Server Error - Something went wrong on our end.</li></ul><p>Check the error handling section in our documentation for more details. We also add useful information within our response body. Here is an example:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">422</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;ok&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;insufficient funds for gas * price + value: balance 2000000000000, tx cost 195000000000000, overshot 193000000000000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;errors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">422</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;ok&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Data validation failed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;errors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        &quot;The password field is required.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Can I test the APIs in a sandbox environment?</summary><p>Yes, we provide a testnet environment for testing purposes. This allows you to test your integration without affecting real blockchain transactions on mainnet but only on testnet. Access to the sandbox can be configured from your dashboard. See <a href="/developers/getting-started/supported-networks.html">Supported Networks</a> on how to access the different networks.</p></details><details class="details custom-block"><summary>How can I monitor my API usage?</summary><p>You can monitor your API usage from the dashboard, which provides detailed analytics and reports on the number of requests made, data usage, and any errors encountered.</p></details><details class="details custom-block"><summary>How do I get support if I encounter issues?</summary><p>For support, you can reach out through our support portal available in the dashboard. We also provide a community forum and extensive documentation that might help resolve common issues. For urgent matters, contact our support team directly via email at <a href="mailto:support@chaingateway.io" target="_blank" rel="noreferrer">support@chaingateway.io</a>, via <a href="https://t.me/ChaingatewaySupportBot" target="_blank" rel="noreferrer">Telegram</a>, or via web chat on the website. We also host a <a href="https://t.me/chaingateway" target="_blank" rel="noreferrer">Telegram community</a> where you can find useful discussions.</p></details><details class="details custom-block"><summary>Is there a referral or partnership program?</summary><p>Yes, we offer referral and partnership programs for developers and businesses interested in promoting Chaingateway.io. For more information, please visit our partnership page.</p></details><details class="details custom-block"><summary>Where can I find the latest updates and news about Chaingateway.io?</summary><p>Stay updated with the latest news, feature releases, and announcements by following our <a href="https://chaingateway.io/blog" target="_blank" rel="noreferrer">blog</a> and subscribing to our newsletter.</p></details>`,14),o=[n];function r(l,p,h,d,u,c){return a(),e("div",null,o)}const g=s(t,[["render",r]]);export{m as __pageData,g as default};
