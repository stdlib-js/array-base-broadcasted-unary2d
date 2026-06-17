"use strict";var p=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var m=p(function(l,S){
var A=require('@stdlib/array-base-broadcast-array/dist');function g(a,r,e){var c,f,s,o,v,t,u,d,y,b,i,x,n,j,q;if(i=r[1],s=i[1],o=i[0],!(s<=0||o<=0))for(n=A(a[0],r[0],i),j=n.data,x=n.strides,c=x[1],f=x[0],q=a[1],d=0,t=0;t<o;t++){for(u=0,y=j[d],b=q[t],v=0;v<s;v++)b[v]=e(y[u]),u+=c;d+=f}}S.exports=g
});var h=m();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
