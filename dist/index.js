"use strict";var p=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var S=p(function(l,q){
var A=require('@stdlib/array-base-broadcast-array/dist');function g(a,r,m){var n,c,e,s,v,t,o,u,f,y,i,d,x,b,j;if(i=r[1],e=i[1],s=i[0],!(e<=0||s<=0))for(x=A(a[0],r[0],i),b=x.data,d=x.strides,n=d[1],c=d[0],j=a[1],u=0,t=0;t<s;t++){for(o=0,f=b[u],y=j[t],v=0;v<e;v++)y[v]=m(f[o]),o+=n;u+=c}}q.exports=g
});var h=S();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
