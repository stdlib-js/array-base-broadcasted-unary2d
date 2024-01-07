// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@esm/index.mjs";function a(a,s,t){var d,e,i,o,f,n,m,b,c,j,l,p,h,u,v;if(i=(l=s[1])[1],o=l[0],!(i<=0||o<=0))for(u=(h=r(a[0],s[0],l)).data,d=(p=h.strides)[1],e=p[0],v=a[1],b=0,n=0;n<o;n++){for(m=0,c=u[b],j=v[n],f=0;f<i;f++)j[f]=t(c[m]),m+=d;b+=e}}export{a as default};
//# sourceMappingURL=index.mjs.map
