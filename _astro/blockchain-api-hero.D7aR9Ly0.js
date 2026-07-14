import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{B as t}from"./button.NxUmuIcs.js";import{B as n}from"./badge.Ct4EaDmA.js";import{S as c,a as o}from"./scroll-area.BRM5VdQA.js";import{r as l}from"./index.BIIuLtGZ.js";import{C as d,a as i,b as p,c as u,d as m,e as g,f as h,g as x,h as f,i as B,j,k as A,l as _}from"./index.D_9ve1Yp.js";import{m as s}from"./proxy.De8B0uqP.js";import{Z as N}from"./zap.Bayq02vR.js";import{M as E}from"./move-right.GqFJd_0Q.js";import{C as b}from"./code-xml.Cj2wr6iU.js";import"./index.D3WsJFcM.js";import"./index.C2ovpW4z.js";import"./index.EoS_Dwas.js";import"./utils.CDN07tui.js";import"./index.wcNIonxt.js";import"./index.gm_U_fpi.js";import"./index.CNQQzEnM.js";import"./index.B04Pf2oS.js";import"./index.8Fs9o3Lo.js";import"./index.BYgb-DOb.js";import"./select.Dwq_F6nT.js";import"./index.Bsgdn0ft.js";import"./chevron-down.zagxd5A3.js";import"./createLucideIcon.BvtyDlwS.js";import"./check.mYDd3Fjn.js";import"./iconBase.r92-bMmI.js";import"./copy.PAQmpMnL.js";import"./preload-helper.BlTxHScW.js";const r=[{language:"javascript",filename:"token-balance.js",code:`const API_BASE = 'https://app.chaingateway.io/api/v2';
const API_TOKEN = 'YOUR_SECRET_TOKEN';

// Fetch TRC20 token balance
async function getTRC20Balance(address, contractAddress) {
  const response = await fetch(
    \`\${API_BASE}/tron/balances/\${address}/trc20/\${contractAddress}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`
      }
    }
  );
  const data = await response.json();
  console.log('TRC20 Balance:', data.data.balance);
  return data.data;
}

// Fetch ERC20 token balance
async function getERC20Balance(address, contractAddress) {
  const response = await fetch(
    \`\${API_BASE}/ethereum/balances/\${address}/erc20/\${contractAddress}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`
      }
    }
  );
  const data = await response.json();
  console.log('ERC20 Balance:', data.data.balance);
  return data.data;
}

// Usage
getTRC20Balance('TVF2Mp9QY7FEGTnr3DBpFLobA6jguHyMvi', 'TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj');
getERC20Balance('0x...', '0x...');`},{language:"python",filename:"token_balance.py",code:`import requests

API_BASE = 'https://app.chaingateway.io/api/v2'
API_TOKEN = 'YOUR_SECRET_TOKEN'

def get_trc20_balance(address, contract_address):
    url = f'{API_BASE}/tron/balances/{address}/trc20/{contract_address}'
    headers = {'Authorization': f'Bearer {API_TOKEN}'}
    
    response = requests.get(url, headers=headers)
    data = response.json()
    print(f'TRC20 Balance: {data["data"]["balance"]}')
    return data['data']

def get_erc20_balance(address, contract_address):
    url = f'{API_BASE}/ethereum/balances/{address}/erc20/{contract_address}'
    headers = {'Authorization': f'Bearer {API_TOKEN}'}
    
    response = requests.get(url, headers=headers)
    data = response.json()
    print(f'ERC20 Balance: {data["data"]["balance"]}')
    return data['data']

# Usage
get_trc20_balance('TVF2Mp9QY7FEGTnr3DBpFLobA6jguHyMvi', 'TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj')
get_erc20_balance('0x...', '0x...')`},{language:"go",filename:"token_balance.go",code:`package main

import (
    "fmt"
    "io"
    "net/http"
    "encoding/json"
)

const (
    APIBase   = "https://app.chaingateway.io/api/v2"
    APIToken  = "YOUR_SECRET_TOKEN"
)

type BalanceResponse struct {
    Data struct {
        Balance string \`json:"balance"\`
    } \`json:"data"\`
}

func getTRC20Balance(address, contractAddress string) error {
    url := fmt.Sprintf("%s/tron/balances/%s/trc20/%s", APIBase, address, contractAddress)
    
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", APIToken))
    
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    
    var result BalanceResponse
    json.NewDecoder(resp.Body).Decode(&result)
    fmt.Println("TRC20 Balance:", result.Data.Balance)
    return nil
}

func getERC20Balance(address, contractAddress string) error {
    url := fmt.Sprintf("%s/ethereum/balances/%s/erc20/%s", APIBase, address, contractAddress)
    
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", APIToken))
    
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    
    var result BalanceResponse
    json.NewDecoder(resp.Body).Decode(&result)
    fmt.Println("ERC20 Balance:", result.Data.Balance)
    return nil
}

func main() {
    getTRC20Balance("TVF2Mp9QY7FEGTnr3DBpFLobA6jguHyMvi", "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj")
    getERC20Balance("0x...", "0x...")
}`},{language:"ruby",filename:"token_balance.rb",code:`require 'net/http'
require 'json'

API_BASE = 'https://app.chaingateway.io/api/v2'
API_TOKEN = 'YOUR_SECRET_TOKEN'

def get_trc20_balance(address, contract_address)
  url = URI("#{API_BASE}/tron/balances/#{address}/trc20/#{contract_address}")
  
  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = true
  
  request = Net::HTTP::Get.new(url)
  request['Authorization'] = "Bearer #{API_TOKEN}"
  
  response = http.request(request)
  data = JSON.parse(response.body)
  puts "TRC20 Balance: #{data['data']['balance']}"
  data['data']
end

def get_erc20_balance(address, contract_address)
  url = URI("#{API_BASE}/ethereum/balances/#{address}/erc20/#{contract_address}")
  
  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = true
  
  request = Net::HTTP::Get.new(url)
  request['Authorization'] = "Bearer #{API_TOKEN}"
  
  response = http.request(request)
  data = JSON.parse(response.body)
  puts "ERC20 Balance: #{data['data']['balance']}"
  data['data']
end

# Usage
get_trc20_balance('TVF2Mp9QY7FEGTnr3DBpFLobA6jguHyMvi', 'TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj')
get_erc20_balance('0x...', '0x...')`}],ae=({})=>{const[T,C]=l.useState("javascript");return e.jsxs("section",{className:"relative w-full py-20 md:py-32 px-4 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",children:e.jsx("div",{className:"absolute inset-0",style:{background:`
              radial-gradient(
                circle at 20% 50%,
                oklch(from var(--secondary) calc(l * 0.85) calc(c * 0.8) h / 0.1) 0%,
                transparent 50%
              ),
              radial-gradient(
                circle at 80% 80%,
                oklch(from var(--secondary) calc(l * 0.8) calc(c * 0.75) h / 0.08) 0%,
                transparent 50%
              )
            `}})}),e.jsx("div",{className:"container max-w-7xl mx-auto relative z-10",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"flex flex-col gap-6",children:[e.jsxs(n,{variant:"secondary",className:"w-fit",children:[e.jsx(N,{className:"w-3 h-3"}),"Blockchain API"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-bold tracking-tight",children:"Build Blockchain Apps in Minutes"}),e.jsx("p",{className:"text-lg text-muted-foreground max-w-xl",children:"One unified API for all major blockchains. Send transactions, check balances, and decode token data—all with identical endpoints across chains. No more chain-specific complexity."})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs(t,{size:"lg",className:"gap-2",children:["Start Building ",e.jsx(E,{className:"w-4 h-4"})]}),e.jsxs(t,{size:"lg",variant:"outline",children:[e.jsx(b,{className:"w-4 h-4"}),"View Docs"]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-8",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-2xl font-bold",children:"6+"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Blockchain Networks"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-2xl font-bold",children:"1 API"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Unified Interface"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-2xl font-bold",children:"99.9%"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Uptime SLA"})]})]})]}),e.jsx(s.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.2},className:"relative",children:e.jsx("div",{className:"flex w-full flex-col gap-1 overflow-hidden",children:e.jsxs(d,{data:r,defaultValue:r[0].language,children:[e.jsxs(i,{children:[e.jsx(p,{children:a=>e.jsx(u,{value:a.language,children:a.filename},a.language)}),e.jsxs(m,{children:[e.jsx(g,{children:e.jsx(h,{})}),e.jsx(x,{children:a=>e.jsx(f,{value:a.language,children:a.language},a.language)})]}),e.jsx(B,{onCopy:()=>console.log("Copied code to clipboard"),onError:()=>console.error("Failed to copy code to clipboard")})]}),e.jsxs(c,{className:"w-full",children:[e.jsx(j,{children:a=>e.jsx(A,{value:a.language,className:"max-h-96",children:e.jsx(_,{language:a.language,children:a.code})},a.language)}),e.jsx(o,{orientation:"horizontal"})]})]})})})]})})]})};export{ae as default};
