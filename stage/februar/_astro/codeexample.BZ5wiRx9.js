import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as c}from"./index.DwQS_Y10.js";import{C as d,a as p,b as l,c as u,i as h,j as m,k as g,l as y}from"./index.1PqYOaUf.js";import{S as w,a as v}from"./scroll-area.B9KnUHIL.js";import{T as b,a as x,b as T}from"./tabs.CZbE3ddZ.js";const _=()=>{const[o,n]=c.useState("create-addresses"),[a,i]=c.useState("javascript"),s=r.find(t=>t.id===o);return e.jsx("section",{className:"py-8 lg:py-32",children:e.jsx("div",{className:"container rounded-lg bg-white/10 p-2 lg:p-8 lg:pt-8 pt-4 shadow-lg backdrop-blur-sm",children:e.jsxs("div",{className:"grid lg:gap-8 lg:grid-cols-3",children:[e.jsxs("div",{className:"mb-4 space-y-3 lg:hidden",children:[e.jsx("select",{className:"bg-background w-full rounded-md border px-3 py-2 text-sm",value:o,onChange:t=>n(t.target.value),children:r.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))}),e.jsx("select",{className:"bg-background w-full rounded-md border px-3 py-2 text-sm",value:a,onChange:t=>i(t.target.value),children:s?.code.map(t=>e.jsx("option",{value:t.language,children:t.language},t.language))})]}),e.jsx("div",{className:"hidden lg:col-span-1 lg:block",children:e.jsx("div",{className:"space-y-2",children:r.map(t=>e.jsx("div",{className:`cursor-pointer rounded-lg p-4 transition-all ${o===t.id?"bg-muted":"hover:bg-muted"}`,onClick:()=>n(t.id),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"rounded-lg p-2",children:e.jsx("span",{className:`${t.icon} text-primary size-4 size-6`})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate font-medium",children:t.title}),e.jsx("p",{className:"text-muted-foreground line-clamp-2 text-sm",children:t.description})]})]})},t.id))})}),e.jsx("div",{className:"min-w-0 lg:col-span-2",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(b,{value:a,onValueChange:i,children:e.jsx("div",{className:"hidden overflow-x-auto lg:block",children:e.jsx(x,{className:"grid w-full min-w-max grid-cols-4 bg-black/30 p-1",children:s?.code.map(t=>e.jsxs(T,{value:t.language,className:"flex items-center gap-2 whitespace-nowrap capitalize",children:[e.jsx("span",{className:`${t.icon} size-4`}),e.jsx("span",{className:"hidden text-white lg:inline",children:t.language})]},t.language))})})}),e.jsx("div",{className:"w-full overflow-hidden",children:e.jsxs(d,{data:s?.code||[],value:a,className:"w-full",children:[e.jsxs(p,{children:[e.jsx(l,{children:t=>e.jsx(u,{value:t.language,className:"truncate",children:t.filename},t.language)}),e.jsx(h,{onCopy:()=>console.log("Copied code to clipboard"),onError:()=>console.error("Failed to copy code to clipboard")})]}),e.jsxs(w,{className:"w-full",children:[e.jsx(m,{children:t=>e.jsx(g,{value:t.language,className:"max-h-96 w-full overflow-x-auto",children:e.jsx(y,{language:t.language,children:t.code})},t.language)}),e.jsx(v,{orientation:"horizontal"})]})]})})]})})]})})})},r=[{id:"create-addresses",title:"Create Secure Wallet Addresses",description:"Create password-protected wallets for Ethereum, BSC, Polygon & Tron via the Chaingateway Wallet API.",icon:"icon-[mdi--wallet]",code:[{language:"javascript",filename:"create-address.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Create a password-protected EVM address
// Docs: /developers/tutorials/create-addresses.html

const axios = require('axios');

async function createSecureAddress() {
  const url = 'https://api.chaingateway.io/v2/ethereum/addresses';
  const payload = {
    // Optional: omit password to get privatekey in response (single-use only)
    password: 'your_secure_password',
  };

  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'YOUR_API_TOKEN',
  };

  const response = await axios.post(url, payload, { headers });

  console.log('Created address:', response.data);

  // Example response:
  // {
  //   "status": 201,
  //   "ok": true,
  //   "message": "Address created",
  //   "data": {
  //     "address": "0xYourNewAddress",
  //     "keystore": "{...}" // only for EVM when password given
  //   }
  // }
}

// For BSC/Polygon just replace /ethereum with /bsc or /polygon
// For Tron replace /ethereum with /tron
createSecureAddress().catch(console.error);`},{language:"python",filename:"create_address.py",icon:"icon-[devicon--python]",code:`# Chaingateway - Create a password-protected EVM address
# Docs: /developers/tutorials/create-addresses.html

import requests

url = "https://api.chaingateway.io/v2/ethereum/addresses"
payload = {
    # Optional: omit password to receive privatekey (for single-use wallets only)
    "password": "your_secure_password"
}
headers = {
    "Accept": "application/json",
    "content-type": "application/json",
    "Authorization": "YOUR_API_TOKEN",
}

response = requests.post(url, json=payload, headers=headers)
data = response.json()
print("Created address:", data)

# Example response:
# {
#   "status": 201,
#   "ok": true,
#   "message": "Address created",
#   "data": {
#       "address": "0xYourNewAddress",
#       "keystore": "{...}"
#   }
# }`},{language:"ruby",filename:"create_address.rb",icon:"icon-[devicon--ruby]",code:`# Chaingateway - Create a password-protected EVM address
# Docs: /developers/tutorials/create-addresses.html

require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.chaingateway.io/v2/ethereum/addresses')

req = Net::HTTP::Post.new(uri)
req['Accept'] = 'application/json'
req['content-type'] = 'application/json'
req['Authorization'] = 'YOUR_API_TOKEN'
req.body = { password: 'your_secure_password' }.to_json

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

data = JSON.parse(res.body)
puts "Created address: #{data}"

# Example response:
# {
#   "status" => 201,
#   "ok" => true,
#   "message" => "Address created",
#   "data" => { "address" => "0xYourNewAddress" }
# }`},{language:"laravel",filename:"CreateAddressController.php",icon:"icon-[devicon--laravel]",code:`<?php
// Chaingateway - Create a password-protected EVM address in Laravel
// Docs: /developers/tutorials/create-addresses.html

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

class CreateAddressController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'content-type' => 'application/json',
            'Authorization' => 'YOUR_API_TOKEN',
        ])->post('https://api.chaingateway.io/v2/ethereum/addresses', [
            'password' => 'your_secure_password',
        ]);

        // Example JSON response:
        // {
        //   "status": 201,
        //   "ok": true,
        //   "message": "Address created",
        //   "data": {
        //     "address": "0xYourNewAddress",
        //     "keystore": "{...}"
        //   }
        // }

        return response()->json($response->json());
    }
}`}]},{id:"native-transactions",title:"Create Native Token Transactions",description:"Send ETH, BNB, MATIC, TRX or BTC using a single API call with your Chaingateway wallet.",icon:"icon-[mdi--transfer]",code:[{language:"javascript",filename:"native-tx.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Create a native token transaction (EVM example)
// Docs: /developers/tutorials/create-transactions.html

const axios = require('axios');

async function sendEth() {
  const url = 'https://api.chaingateway.io/v2/ethereum/transactions';
  const payload = {
    from: '0xYourSenderAddress',
    to: '0xRecipientAddress',
    amount: '0.1',
    password: 'YourPassword', // password of the keystore
  };

  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'YOUR_API_TOKEN',
  };

  const response = await axios.post(url, payload, { headers });
  console.log('Transaction created:', response.data);

  // Example response:
  // {
  //   "status": 201,
  //   "ok": true,
  //   "message": "Succesfully created transaction",
  //   "data": {
  //     "txid": "0x7334...b71f27"
  //   }
  // }
}

// For BSC/Polygon/BTC replace /ethereum with /bsc, /polygon or /bitcoin
sendEth().catch(console.error);`},{language:"python",filename:"native_tx.py",icon:"icon-[devicon--python]",code:`# Chaingateway - Create a native token transaction (EVM example)
# Docs: /developers/tutorials/create-transactions.html

import requests

url = "https://api.chaingateway.io/v2/ethereum/transactions"
payload = {
    "from": "0xYourSenderAddress",
    "to": "0xRecipientAddress",
    "amount": "0.1",
    "password": "YourPassword",
}
headers = {
    "Accept": "application/json",
    "content-type": "application/json",
    "Authorization": "YOUR_API_TOKEN",
}

response = requests.post(url, json=payload, headers=headers)
data = response.json()
print("Transaction created:", data)

# Example:
# {
#   "status": 201,
#   "ok": true,
#   "message": "Succesfully created transaction",
#   "data": { "txid": "0x7334...b71f27" }
# }`},{language:"ruby",filename:"native_tx.rb",icon:"icon-[devicon--ruby]",code:`# Chaingateway - Create a native token transaction (EVM example)
# Docs: /developers/tutorials/create-transactions.html

require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.chaingateway.io/v2/ethereum/transactions')

req = Net::HTTP::Post.new(uri)
req['Accept'] = 'application/json'
req['content-type'] = 'application/json'
req['Authorization'] = 'YOUR_API_TOKEN'
req.body = {
  from: '0xYourSenderAddress',
  to: '0xRecipientAddress',
  amount: '0.1',
  password: 'YourPassword'
}.to_json

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

data = JSON.parse(res.body)
puts "Transaction created: #{data}"

# => {
#   "status" => 201,
#   "ok" => true,
#   "message" => "Succesfully created transaction",
#   "data" => { "txid" => "0x7334...b71f27" }
# }`},{language:"laravel",filename:"NativeTransactionController.php",icon:"icon-[devicon--laravel]",code:`<?php
// Chaingateway - Create a native token transaction (EVM example in Laravel)
// Docs: /developers/tutorials/create-transactions.html

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

class NativeTransactionController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'content-type' => 'application/json',
            'Authorization' => 'YOUR_API_TOKEN',
        ])->post('https://api.chaingateway.io/v2/ethereum/transactions', [
            'from' => '0xYourSenderAddress',
            'to' => '0xRecipientAddress',
            'amount' => '0.1',
            'password' => 'YourPassword',
        ]);

        // For Tron native TRX use:
        // https://api.chaingateway.io/v2/tron/transactions
        // and provide "privateKey" instead of "password".

        return response()->json($response->json());
    }
}`}]},{id:"token-transactions",title:"Create ERC20 / BEP20 / TRC20 Token Transfers",description:"Send ERC20, BEP20 and TRC20 tokens with a single API call for any supported network.",icon:"icon-[mdi--cash-fast]",code:[{language:"javascript",filename:"token-tx.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Create ERC20/BEP20/TRC20 token transfer
// Docs: /developers/tutorials/create-token-transactions.html

const axios = require('axios');

async function sendErc20() {
  const url = 'https://api.chaingateway.io/v2/ethereum/transactions/erc20';
  const payload = {
    from: '0xYourSenderAddress',
    to: '0xRecipientAddress',
    amount: '100',
    contractaddress: '0xTokenContractAddress',
    password: 'YourPassword',
  };

  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'YOUR_API_TOKEN',
  };

  const response = await axios.post(url, payload, { headers });
  console.log('Token transaction created:', response.data);

  // Example:
  // {
  //   "status": 201,
  //   "ok": true,
  //   "message": "Succesfully created transaction",
  //   "data": { "txid": "0x7334...b71f27" }
  // }
}

// For BEP20: /v2/bsc/transactions/bep20
// For TRC20: /v2/tron/transactions/trc20
sendErc20().catch(console.error);`},{language:"python",filename:"token_tx.py",icon:"icon-[devicon--python]",code:`# Chaingateway - Create ERC20/BEP20/TRC20 token transfer
# Docs: /developers/tutorials/create-token-transactions.html

import requests

url = "https://api.chaingateway.io/v2/ethereum/transactions/erc20"
payload = {
    "from": "0xYourSenderAddress",
    "to": "0xRecipientAddress",
    "amount": "100",
    "contractaddress": "0xTokenContractAddress",
    "password": "YourPassword",
}
headers = {
    "Accept": "application/json",
    "content-type": "application/json",
    "Authorization": "YOUR_API_TOKEN",
}

response = requests.post(url, json=payload, headers=headers)
data = response.json()
print("Token transaction created:", data)`},{language:"ruby",filename:"token_tx.rb",icon:"icon-[devicon--ruby]",code:`# Chaingateway - Create ERC20/BEP20/TRC20 token transfer
# Docs: /developers/tutorials/create-token-transactions.html

require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.chaingateway.io/v2/ethereum/transactions/erc20')

req = Net::HTTP::Post.new(uri)
req['Accept'] = 'application/json'
req['content-type'] = 'application/json'
req['Authorization'] = 'YOUR_API_TOKEN'
req.body = {
  from: '0xYourSenderAddress',
  to: '0xRecipientAddress',
  amount: '100',
  contractaddress: '0xTokenContractAddress',
  password: 'YourPassword'
}.to_json

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

data = JSON.parse(res.body)
puts "Token transaction created: #{data}"`},{language:"laravel",filename:"TokenTransactionController.php",icon:"icon-[devicon--laravel]",code:`<?php
// Chaingateway - Create ERC20/BEP20/TRC20 token transfer in Laravel
// Docs: /developers/tutorials/create-token-transactions.html

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

class TokenTransactionController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'content-type' => 'application/json',
            'Authorization' => 'YOUR_API_TOKEN',
        ])->post('https://api.chaingateway.io/v2/ethereum/transactions/erc20', [
            'from' => '0xYourSenderAddress',
            'to' => '0xRecipientAddress',
            'amount' => '100',
            'contractaddress' => '0xTokenContractAddress',
            'password' => 'YourPassword',
        ]);

        // For BEP20 use /v2/bsc/transactions/bep20
        // For TRC20 use /v2/tron/transactions/trc20

        return response()->json($response->json());
    }
}`}]},{id:"webhooks",title:"Create & Receive Webhooks",description:"Subscribe to on-chain events and receive real-time payment notifications via Webhooks.",icon:"icon-[mdi--webhook]",code:[{language:"javascript",filename:"webhook.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Webhook receiver + subscription (JavaScript)
// Docs: /developers/tutorials/create-webhooks.html

// 1) Simple Express webhook receiver
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).send('Webhook received');
});

app.listen(3000, () => {
  console.log('Webhook receiver listening at http://localhost:3000/webhook');
});

// 2) Subscribe a webhook in Chaingateway
async function subscribeWebhook() {
  const url = 'https://api.chaingateway.io/v2/webhooks';
  const payload = {
    url: 'https://yourdomain.com/webhook',
    from: 'TXSenderAddress',         // optional
    to: 'TXReceiverAddress',         // optional
    contractaddress: '0xTokenContractAddress', // optional
    token_id: '12345',               // required if from/to missing
    type: 'TRC20',                   // TRX, TRC10, TRC20, TRC721
  };

  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'YOUR_API_TOKEN',
  };

  const response = await axios.post(url, payload, { headers });
  console.log('Webhook created:', response.data);

  // Example:
  // {
  //   "status": 201,
  //   "ok": true,
  //   "message": "Webhook created",
  //   "data": { "id": "webhook_id" }
  // }
}

subscribeWebhook().catch(console.error);`},{language:"python",filename:"webhook.py",icon:"icon-[devicon--python]",code:`# Chaingateway - Webhook receiver + subscription (Python)
# Docs: /developers/tutorials/create-webhooks.html

from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# 1) Webhook receiver endpoint
@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    print('Received webhook:', data)
    return jsonify({'status': 'Webhook received'}), 200

# 2) Subscribe webhook at Chaingateway
def subscribe_webhook():
    url = "https://api.chaingateway.io/v2/webhooks"
    payload = {
        "url": "https://yourdomain.com/webhook",
        "from": "TXSenderAddress",
        "to": "TXReceiverAddress",
        "contractaddress": "0xTokenContractAddress",
        "token_id": "12345",
        "type": "TRC20",
    }
    headers = {
        "Accept": "application/json",
        "content-type": "application/json",
        "Authorization": "YOUR_API_TOKEN",
    }
    response = requests.post(url, json=payload, headers=headers)
    print("Webhook created:", response.json())

if __name__ == "__main__":
    # Run receiver (for local testing)
    # app.run(port=3000)
    subscribe_webhook()`},{language:"ruby",filename:"webhook.rb",icon:"icon-[devicon--ruby]",code:`# Chaingateway - Webhook subscription (Ruby example)
# Docs: /developers/tutorials/create-webhooks.html

require 'sinatra'
require 'net/http'
require 'json'
require 'uri'

# 1) Webhook receiver
post '/webhook' do
  payload = JSON.parse(request.body.read)
  STDERR.puts "Received webhook: #{payload.inspect}"
  content_type :json
  { status: 'Webhook received' }.to_json
end

# 2) Subscribe webhook
def subscribe_webhook
  uri = URI('https://api.chaingateway.io/v2/webhooks')

  req = Net::HTTP::Post.new(uri)
  req['Accept'] = 'application/json'
  req['content-type'] = 'application/json'
  req['Authorization'] = 'YOUR_API_TOKEN'
  req.body = {
    url: 'https://yourdomain.com/webhook',
    from: 'TXSenderAddress',
    to: 'TXReceiverAddress',
    contractaddress: '0xTokenContractAddress',
    token_id: '12345',
    type: 'TRC20'
  }.to_json

  res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
    http.request(req)
  end

  puts "Webhook created: #{res.body}"
end

# subscribe_webhook`},{language:"laravel",filename:"WebhookController.php",icon:"icon-[devicon--laravel]",code:`<?php
// Chaingateway - Webhook receiver + subscription (Laravel)
// Docs: /developers/tutorials/create-webhooks.html

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

class WebhookController extends Controller
{
    // 1) Webhook receiver
    public function handle(Request $request)
    {
        // Log payload or dispatch job
        Log::info('Chaingateway webhook received', $request->all());

        return response()->json(['status' => 'Webhook received'], 200);
    }

    // 2) Create webhook subscription
    public function subscribe()
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'content-type' => 'application/json',
            'Authorization' => 'YOUR_API_TOKEN',
        ])->post('https://api.chaingateway.io/v2/webhooks', [
            'url' => 'https://yourdomain.com/webhook',
            'from' => 'TXSenderAddress',
            'to' => 'TXReceiverAddress',
            'contractaddress' => '0xTokenContractAddress',
            'token_id' => '12345',
            'type' => 'TRC20',
        ]);

        return response()->json($response->json());
    }
}

// routes/web.php
// Route::post('/webhook', [WebhookController::class, 'handle']);
// Route::post('/webhook/subscribe', [WebhookController::class, 'subscribe']);`}]},{id:"decoded-transactions",title:"Fetch Decoded Tron Transactions",description:"Fetch and decode Tron transactions to human-readable data (method, parameters, amounts).",icon:"icon-[mdi--hexadecimal]",code:[{language:"javascript",filename:"decoded-tron-tx.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Fetch a decoded Tron transaction
// Endpoint (Tron): GET /api/v2/tron/transactions/{txid}/decoded
// Great for debugging TRC20 transfers and Paymaster flows.

const axios = require('axios');

async function fetchDecodedTx(txid) {
  const url = \`https://api.chaingateway.io/v2/tron/transactions/\${txid}/decoded\`;

  const headers = {
    Accept: 'application/json',
    Authorization: 'YOUR_API_TOKEN',
  };

  const response = await axios.get(url, { headers });
  console.log('Decoded transaction:', response.data);

  // Example response (structure simplified):
  // {
  //   "status": 200,
  //   "ok": true,
  //   "message": "Successfully decoded transaction",
  //   "data": {
  //     "txid": "YOUR_TXID",
  //     "method": "transfer",
  //     "type": "TRC20",
  //     "from": "TSenderAddress",
  //     "to": "TReceiverAddress",
  //     "amount": "100.000000",
  //     "contractaddress": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  //     "raw": { ... } // full raw Tron transaction
  //   }
  // }
}

fetchDecodedTx('YOUR_TRON_TXID').catch(console.error);`},{language:"python",filename:"decoded_tron_tx.py",icon:"icon-[devicon--python]",code:`# Chaingateway - Fetch a decoded Tron transaction
# Endpoint: GET /api/v2/tron/transactions/{txid}/decoded

import requests

def fetch_decoded_tx(txid: str):
    url = f"https://api.chaingateway.io/v2/tron/transactions/{txid}/decoded"
    headers = {
        "Accept": "application/json",
        "Authorization": "YOUR_API_TOKEN",
    }
    response = requests.get(url, headers=headers)
    data = response.json()
    print("Decoded transaction:", data)

    # data["data"] will contain decoded fields such as:
    # method, type, from, to, amount, contractaddress, etc.

fetch_decoded_tx("YOUR_TRON_TXID")`},{language:"ruby",filename:"decoded_tron_tx.rb",icon:"icon-[devicon--ruby]",code:`# Chaingateway - Fetch a decoded Tron transaction
# Endpoint: GET /api/v2/tron/transactions/{txid}/decoded

require 'net/http'
require 'json'
require 'uri'

def fetch_decoded_tx(txid)
  uri = URI("https://api.chaingateway.io/v2/tron/transactions/#{txid}/decoded")

  req = Net::HTTP::Get.new(uri)
  req['Accept'] = 'application/json'
  req['Authorization'] = 'YOUR_API_TOKEN'

  res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
    http.request(req)
  end

  data = JSON.parse(res.body)
  puts "Decoded transaction: #{data}"
end

fetch_decoded_tx('YOUR_TRON_TXID')`},{language:"laravel",filename:"DecodedTronTransactionController.php",icon:"icon-[devicon--laravel]",code:`<?php
// Chaingateway - Fetch a decoded Tron transaction in Laravel
// Endpoint: GET /api/v2/tron/transactions/{txid}/decoded

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

class DecodedTronTransactionController extends Controller
{
    public function show(string $txid)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Authorization' => 'YOUR_API_TOKEN',
        ])->get("https://api.chaingateway.io/v2/tron/transactions/{$txid}/decoded");

        return response()->json($response->json());
    }
}

// routes/web.php
// Route::get('/tron/transactions/{txid}/decoded', [DecodedTronTransactionController::class, 'show']);`}]}];export{_ as C};
