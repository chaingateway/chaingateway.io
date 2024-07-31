import{_ as s,c as i,o as a,a2 as e}from"./chunks/framework.vJVF7MiN.js";const c=JSON.parse('{"title":"Quickstart Guide","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/quickstart.md","filePath":"getting-started/quickstart.md"}'),t={name:"getting-started/quickstart.md"},n=e(`<h1 id="quickstart-guide" tabindex="-1">Quickstart Guide <a class="header-anchor" href="#quickstart-guide" aria-label="Permalink to &quot;Quickstart Guide&quot;">​</a></h1><p>This guide helps you making your first steps in Chaingateway. It describes you how to read the api docs, create an api key and authorize you to use our api.</p><h2 id="get-up-and-running-with-the-chaingateway-api" tabindex="-1">Get Up and running with the Chaingateway API <a class="header-anchor" href="#get-up-and-running-with-the-chaingateway-api" aria-label="Permalink to &quot;Get Up and running with the Chaingateway API&quot;">​</a></h2><p>The Chaingateway API provides an simple interface for developers to interact with multiple blockchains like Tron, Binance Smart Chain (BNB Chain), Ethereum , Polygon and Bitcoin. Our API endpoints provides you with several functionalities like creating transactions, sending fungible and non-fungible tokens and query useful blockchain data such as account balances and blocks heights.</p><h2 id="get-up-and-running-with-the-chaingateway-api-1" tabindex="-1">Get Up and running with the Chaingateway API <a class="header-anchor" href="#get-up-and-running-with-the-chaingateway-api-1" aria-label="Permalink to &quot;Get Up and running with the Chaingateway API&quot;">​</a></h2><p>The Chaingateway API provides a simple interface for developers to interact with multiple blockchains like Tron, Binance Smart Chain (BNB Chain), Ethereum, Polygon, and Bitcoin. Our API endpoints provide several functionalities like creating transactions, sending fungible and non-fungible tokens, and querying useful blockchain data such as account balances and block heights.</p><ul><li>How to setup your account</li><li>How to create your API key</li><li>The basic concepts behind our API</li><li>How to send your first API Request</li></ul><h2 id="account-setup" tabindex="-1">Account setup <a class="header-anchor" href="#account-setup" aria-label="Permalink to &quot;Account setup&quot;">​</a></h2><p>First, create a <a href="https://app.chaingateway.io/register" target="_blank" rel="noreferrer">Chaingateway Account</a> or <a href="https://app.chaingateway.io/register" target="_blank" rel="noreferrer">sign in</a>. Next, navigate to the <a href="https://app.chaingateway.io/account/apiKeys" target="_blank" rel="noreferrer">API key page</a> to create a new token. Type in a name for your token and hit &quot;+ Create Token&quot;. Your new Token should now be visible on the UI. Please store it in a safe place and do not give this token to others!</p><h2 id="quickstart-language" tabindex="-1">Quickstart language <a class="header-anchor" href="#quickstart-language" aria-label="Permalink to &quot;Quickstart language&quot;">​</a></h2><p>During the next sections, you have the possibility to choose your programming language between curl, php, nodejs, and python. In case you need code examples for other languages, our <a href="https://chaingateway.io/docs" target="_blank" rel="noreferrer">API reference</a> supports a lot of other languages.</p><h2 id="setup-your-development-environment" tabindex="-1">Setup your development environment <a class="header-anchor" href="#setup-your-development-environment" aria-label="Permalink to &quot;Setup your development environment&quot;">​</a></h2><p>To create API calls to Chaingateway, you need an HTTP client. For some popular programming languages, we will link you tutorials here:</p><ul><li><a href="https://curl.se/docs/" target="_blank" rel="noreferrer">CURL for command line interfaces like bash or shell</a></li><li><a href="https://pypi.org/project/requests/" target="_blank" rel="noreferrer">Requests for Python</a></li><li><a href="https://github.com/axios/axios?tab=readme-ov-file#installing" target="_blank" rel="noreferrer">Axios for JavaScript and Node.js</a></li><li><a href="https://docs.guzzlephp.org/en/stable/overview.html" target="_blank" rel="noreferrer">Guzzle for PHP</a></li><li><a href="https://laravel.com/docs/11.x/http-client" target="_blank" rel="noreferrer">HTTP client for Laravel</a></li></ul><p>We recommend using a central storage for our API key, which could be an <a href="https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment_Variables.html" target="_blank" rel="noreferrer">environment variable</a> for curl and python or an .env file for <a href="https://www.codementor.io/@parthibakumarmurugesan/what-is-env-how-to-set-up-and-run-a-env-file-in-node-1pnyxw9yxj" target="_blank" rel="noreferrer">Node.js</a> and <a href="https://www.inmotionhosting.com/support/edu/laravel/understanding-the-laravel-env-file/" target="_blank" rel="noreferrer">PHP/Laravel</a>.</p><h2 id="basic-api-concept" tabindex="-1">Basic API Concept <a class="header-anchor" href="#basic-api-concept" aria-label="Permalink to &quot;Basic API Concept&quot;">​</a></h2><h3 id="rest" tabindex="-1">REST <a class="header-anchor" href="#rest" aria-label="Permalink to &quot;REST&quot;">​</a></h3><p>Chaingateway&#39;s REST API follows the principles of REST, using HTTP requests to communicate. It offers endpoints representing resources, like /addresses, and supports standard methods like GET, POST, PUT, DELETE for actions such as retrieving, creating, updating, and deleting resources. Responses are typically in JSON format. Authentication ensures secure access to resources.</p><p>Let&#39;s make an example with the address resource:</p><ul><li><p><strong>GET</strong>: Retrieve address data by sending a GET request to <code>/addresses</code> for a list of addresses or <code>/addresses/{id}</code> for a specific address.</p></li><li><p><strong>POST</strong>: Create a new address by sending a POST request to <code>/addresses</code> with the address details in the request body.</p></li><li><p><strong>PUT</strong>: Update an existing address by sending a PUT request to <code>/addresses/{id}</code> with the complete updated address information in the request body. As updating any address information is not allowed on blockchains, this method does not exist.</p></li><li><p><strong>DELETE</strong>: Remove an address by sending a DELETE request to <code>/addresses/{id}</code>.</p></li><li><p><strong>PATCH</strong>: Make partial updates to an address by sending a PATCH request to <code>/addresses/{id}</code> with only the specific changes. As updating any address information is not allowed on blockchains, this method does not exist.</p></li></ul><p>These methods allow clients to perform CRUD operations on various resources in a predictable and consistent manner, adhering to REST principles. You need to ensure that the method always fits your needed functionality.</p><h3 id="headers" tabindex="-1">Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;">​</a></h3><p>HTTP headers provide additional information about the request or response. Here are some commonly used headers:</p><ul><li><p><strong>Authorization Header</strong>: The Authorization header is used to send credentials (such as a token or username/password) along with a request to access protected resources. For example, <code>Authorization: &lt;token&gt;</code> indicates that the request is authorized using a token.</p></li><li><p><strong>Accept Header</strong>: The Accept header specifies the media types that the client is willing to receive in the response. It helps the server understand what kind of content the client prefers. For instance, <code>Accept: application/json</code> tells the server that the client prefers JSON-formatted responses. Multiple media types can be specified, separated by commas, and the server will choose the most appropriate one based on its capabilities and the preferences expressed by the client.</p></li><li><p><strong>Content-Type Header</strong>: The Content-Type header indicates the media type of the request body being sent to the server. It tells the server how to interpret the data in the request. For example, <code>Content-Type: application/json</code> indicates that the request body is formatted as JSON. This header is particularly important for POST and PUT requests, where the client is sending data to the server.</p></li></ul><h2 id="make-your-first-api-request" tabindex="-1">Make your first API request <a class="header-anchor" href="#make-your-first-api-request" aria-label="Permalink to &quot;Make your first API request&quot;">​</a></h2><p>After you have configured your HTTP client and understood how the API works, we can start using it in our project. To show you how our API works, we will first create an Ethereum address.</p><p>Let&#39;s break down the different components of this API call:</p><p>We use the <strong>POST method</strong> because we want to submit data to the API.</p><p>The <strong>data</strong> we send is defined in the request body <code>{&quot;password&quot;: &quot;architecto&quot;}</code>. It&#39;s a JSON object with a key-value pair where the key is &quot;password&quot; and the value is &quot;architecto&quot;. This data will be processed by the server according to the API&#39;s specifications.</p><p>The <strong>Authorization Header</strong> adds an Authorization header with a value of &quot;YOUR_SECRET_TOKEN&quot; (replace this with your own token!). The <strong>Content-Type</strong> and <strong>Accept</strong> both are set to application/json, ensuring that both systems want to communicate with the application/json filetype.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FERVI" id="tab-BiXfvVc" checked><label for="tab-BiXfvVc">curl</label><input type="radio" name="group-FERVI" id="tab-yKoxtPJ"><label for="tab-yKoxtPJ">python</label><input type="radio" name="group-FERVI" id="tab-S8OGUPB"><label for="tab-S8OGUPB">javascript</label><input type="radio" name="group-FERVI" id="tab-QRQ0hal"><label for="tab-QRQ0hal">php</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://api.chaingateway.io/api/v2/ethereum/addresses</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Authorization: YOUR_SECRET_TOKEN&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Content-Type: application/json&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;password&quot;: &quot;architecto&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&#39;</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://api.chaingateway.io/api/v2/ethereum/addresses&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">payload </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;architecto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">headers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;Authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YOUR_SECRET_TOKEN&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests.post(url, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">payload, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">headers)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(response.json())</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;axios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;POST&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://api.chaingateway.io/api/v2/ethereum/addresses&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    headers: {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Content-Type&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;application/json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Authorization: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;YOUR_SECRET_TOKEN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: {password: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;architecto&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\GuzzleHttp\\Client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $client</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;POST&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://api.chaingateway.io/api/v2/ethereum/addresses&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;body&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;password&quot;: &quot;architecto&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;headers&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;Authorization&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;YOUR_SECRET_TOKEN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;Content-Type&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;application/json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div></div></div><p>The response will be:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">201</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ok&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Address created&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>To fetch data such as getting a list of addresses, you can utilize the <strong>GET</strong> method. This method usually doesn&#39;t use any request body.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-AeTJJ" id="tab-DWBF_oi" checked><label for="tab-DWBF_oi">curl</label><input type="radio" name="group-AeTJJ" id="tab-z5s9OS-"><label for="tab-z5s9OS-">python</label><input type="radio" name="group-AeTJJ" id="tab-71G2Q4n"><label for="tab-71G2Q4n">javascript</label><input type="radio" name="group-AeTJJ" id="tab-UDlQd_a"><label for="tab-UDlQd_a">php</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GET</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://api.chaingateway.io/api/v2/ethereum/addresses</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Authorization: YOUR_SECRET_TOKEN&#39;</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://api.chaingateway.io/api/v2/ethereum/addresses&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">headers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YOUR_SECRET_TOKEN&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests.get(url, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">headers)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(response.json())</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;axios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;GET&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    headers: {Authorization: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;YOUR_SECRET_TOKEN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\GuzzleHttp\\Client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $client</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;GET&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://api.chaingateway.io/api/v2/ethereum/addresses&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;headers&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div></div></div><p>The response will be:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;ok&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,37),h=[n];function p(l,r,k,o,d,E){return a(),i("div",null,h)}const u=s(t,[["render",p]]);export{c as __pageData,u as default};
