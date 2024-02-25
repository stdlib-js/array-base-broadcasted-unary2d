// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@v0.2.0-esm/index.mjs";function a(a,s,t){var d,e,i,o,f,n,m,b,c,j,l,p,v,h,u;if(i=(l=s[1])[1],o=l[0],!(i<=0||o<=0))for(h=(v=r(a[0],s[0],l)).data,d=(p=v.strides)[1],e=p[0],u=a[1],b=0,n=0;n<o;n++){for(m=0,c=h[b],j=u[n],f=0;f<i;f++)j[f]=t(c[m]),m+=d;b+=e}}export{a as default};
//# sourceMappingURL=index.mjs.map
