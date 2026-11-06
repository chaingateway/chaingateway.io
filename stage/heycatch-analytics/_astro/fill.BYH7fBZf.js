function f(n,r){return n.replace(/\{(\w+)\}/g,(t,i)=>i in r?String(r[i]):t)}export{f};
