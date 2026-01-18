(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Js="160",Ln={ROTATE:0,DOLLY:1,PAN:2},Pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fo=0,fr=1,Bo=2,Xa=1,zo=2,je=3,pn=0,Se=1,Ke=2,Qe=0,Cn=1,Ne=2,pr=3,mr=4,Ho=5,En=100,Go=101,ko=102,gr=103,_r=104,Vo=200,Wo=201,Xo=202,qo=203,Hs=204,Gs=205,Yo=206,$o=207,jo=208,Ko=209,Zo=210,Jo=211,Qo=212,tl=213,el=214,nl=0,il=1,sl=2,Yi=3,rl=4,al=5,ol=6,ll=7,qa=0,cl=1,hl=2,dn=0,Ya=1,$a=2,ja=3,Qs=4,ul=5,Ka=6,Za=300,Zn=301,Jn=302,ks=303,Vs=304,Qi=306,Ws=1e3,Fe=1001,Xs=1002,ve=1003,vr=1004,cs=1005,Re=1006,dl=1007,di=1008,fn=1009,fl=1010,pl=1011,tr=1012,Ja=1013,hn=1014,un=1015,tn=1016,Qa=1017,to=1018,bn=1020,ml=1021,Be=1023,gl=1024,_l=1025,Tn=1026,Qn=1027,vl=1028,eo=1029,xl=1030,no=1031,io=1033,hs=33776,us=33777,ds=33778,fs=33779,xr=35840,Mr=35841,Sr=35842,Er=35843,so=36196,yr=37492,Cr=37496,br=37808,Tr=37809,Ar=37810,wr=37811,Rr=37812,Lr=37813,Pr=37814,Dr=37815,Ir=37816,Ur=37817,Nr=37818,Or=37819,Fr=37820,Br=37821,ps=36492,zr=36494,Hr=36495,Ml=36283,Gr=36284,kr=36285,Vr=36286,ro=3e3,An=3001,Sl=3200,El=3201,yl=0,Cl=1,Pe="",le="srgb",nn="srgb-linear",er="display-p3",ts="display-p3-linear",$i="linear",jt="srgb",ji="rec709",Ki="p3",Dn=7680,Wr=519,bl=512,Tl=513,Al=514,ao=515,wl=516,Rl=517,Ll=518,Pl=519,Xr=35044,qr="300 es",qs=1035,Ze=2e3,Zi=2001;class Rn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xi=Math.PI/180,Ys=180/Math.PI;function pi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fe[s&255]+fe[s>>8&255]+fe[s>>16&255]+fe[s>>24&255]+"-"+fe[t&255]+fe[t>>8&255]+"-"+fe[t>>16&15|64]+fe[t>>24&255]+"-"+fe[e&63|128]+fe[e>>8&255]+"-"+fe[e>>16&255]+fe[e>>24&255]+fe[n&255]+fe[n>>8&255]+fe[n>>16&255]+fe[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function Dl(s,t){return(s%t+t)%t}function ms(s,t,e){return(1-e)*s+e*t}function Yr(s){return(s&s-1)===0&&s!==0}function $s(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ri(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Il={DEG2RAD:Xi};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,i,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],y=i[1],M=i[4],T=i[7],P=i[2],R=i[5],A=i[8];return r[0]=o*_+a*y+l*P,r[3]=o*p+a*M+l*R,r[6]=o*d+a*T+l*A,r[1]=c*_+h*y+u*P,r[4]=c*p+h*M+u*R,r[7]=c*d+h*T+u*A,r[2]=f*_+m*y+g*P,r[5]=f*p+m*M+g*R,r[8]=f*d+m*T+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gs.makeScale(t,e)),this}rotate(t){return this.premultiply(gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(gs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gs=new kt;function oo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ji(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ul(){const s=Ji("canvas");return s.style.display="block",s}const $r={};function ui(s){s in $r||($r[s]=!0,console.warn(s))}const jr=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kr=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mi={[nn]:{transfer:$i,primaries:ji,toReference:s=>s,fromReference:s=>s},[le]:{transfer:jt,primaries:ji,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ts]:{transfer:$i,primaries:Ki,toReference:s=>s.applyMatrix3(Kr),fromReference:s=>s.applyMatrix3(jr)},[er]:{transfer:jt,primaries:Ki,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Kr),fromReference:s=>s.applyMatrix3(jr).convertLinearToSRGB()}},Nl=new Set([nn,ts]),$t={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Nl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Mi[t].toReference,i=Mi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Mi[s].primaries},getTransfer:function(s){return s===Pe?$i:Mi[s].transfer}};function Kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let In;class lo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{In===void 0&&(In=Ji("canvas")),In.width=t.width,In.height=t.height;const n=In.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=In}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ji("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ol=0;class co{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=pi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vs(i[o].image)):r.push(vs(i[o]))}else r=vs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function vs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fl=0;class Te extends Rn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Fe,i=Fe,r=Re,o=di,a=Be,l=fn,c=Te.DEFAULT_ANISOTROPY,h=Pe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=pi(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===An?le:Pe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Za)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case Fe:t.x=t.x<0?0:1;break;case Xs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case Fe:t.y=t.y<0?0:1;break;case Xs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===le?An:ro}set encoding(t){ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===An?le:Pe}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Za;Te.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,T=(m+1)/2,P=(d+1)/2,R=(h+f)/4,A=(u+_)/4,K=(g+p)/4;return M>T&&M>P?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=R/n,r=A/n):T>P?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=R/i,r=K/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=K/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bl extends Rn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===An?le:Pe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Re,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ze extends Bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ho extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-a;const d=l*f+c*m+h*g+u*_,y=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const P=Math.sqrt(M),R=Math.atan2(P,d*y);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}const T=a*y;if(l=l*p+f*T,c=c*p+m*T,h=h*p+g*T,u=u*p+_*T,p===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xs.copy(this).projectOnVector(t),this.sub(xs)}reflect(t){return this.sub(xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xs=new I,Zr=new wn;class mi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(De.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(De.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=De.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,De):De.fromBufferAttribute(r,o),De.applyMatrix4(t.matrixWorld),this.expandByPoint(De);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Si.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Si.copy(n.boundingBox)),Si.applyMatrix4(t.matrixWorld),this.union(Si)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,De),De.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ai),Ei.subVectors(this.max,ai),Un.subVectors(t.a,ai),Nn.subVectors(t.b,ai),On.subVectors(t.c,ai),sn.subVectors(Nn,Un),rn.subVectors(On,Nn),_n.subVectors(Un,On);let e=[0,-sn.z,sn.y,0,-rn.z,rn.y,0,-_n.z,_n.y,sn.z,0,-sn.x,rn.z,0,-rn.x,_n.z,0,-_n.x,-sn.y,sn.x,0,-rn.y,rn.x,0,-_n.y,_n.x,0];return!Ms(e,Un,Nn,On,Ei)||(e=[1,0,0,0,1,0,0,0,1],!Ms(e,Un,Nn,On,Ei))?!1:(yi.crossVectors(sn,rn),e=[yi.x,yi.y,yi.z],Ms(e,Un,Nn,On,Ei))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,De).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(De).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(We),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const We=[new I,new I,new I,new I,new I,new I,new I,new I],De=new I,Si=new mi,Un=new I,Nn=new I,On=new I,sn=new I,rn=new I,_n=new I,ai=new I,Ei=new I,yi=new I,vn=new I;function Ms(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){vn.fromArray(s,r);const a=i.x*Math.abs(vn.x)+i.y*Math.abs(vn.y)+i.z*Math.abs(vn.z),l=t.dot(vn),c=e.dot(vn),h=n.dot(vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Hl=new mi,oi=new I,Ss=new I;class es{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oi.subVectors(t,this.center);const e=oi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(oi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ss.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oi.copy(t.center).add(Ss)),this.expandByPoint(oi.copy(t.center).sub(Ss))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xe=new I,Es=new I,Ci=new I,an=new I,ys=new I,bi=new I,Cs=new I;class ns{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xe.copy(this.origin).addScaledVector(this.direction,e),Xe.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Es.copy(t).add(e).multiplyScalar(.5),Ci.copy(e).sub(t).normalize(),an.copy(this.origin).sub(Es);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ci),a=an.dot(this.direction),l=-an.dot(Ci),c=an.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Es).addScaledVector(Ci,f),m}intersectSphere(t,e){Xe.subVectors(t.center,this.origin);const n=Xe.dot(this.direction),i=Xe.dot(Xe)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xe)!==null}intersectTriangle(t,e,n,i,r){ys.subVectors(e,t),bi.subVectors(n,t),Cs.crossVectors(ys,bi);let o=this.direction.dot(Cs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,t);const l=a*this.direction.dot(bi.crossVectors(an,bi));if(l<0)return null;const c=a*this.direction.dot(ys.cross(an));if(c<0||l+c>o)return null;const h=-a*an.dot(Cs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,r,o,a,l,c,h,u,f,m,g,_,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,m,g,_,p)}set(t,e,n,i,r,o,a,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Fn.setFromMatrixColumn(t,0).length(),r=1/Fn.setFromMatrixColumn(t,1).length(),o=1/Fn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gl,t,kl)}lookAt(t,e,n){const i=this.elements;return Ce.subVectors(t,e),Ce.lengthSq()===0&&(Ce.z=1),Ce.normalize(),on.crossVectors(n,Ce),on.lengthSq()===0&&(Math.abs(n.z)===1?Ce.x+=1e-4:Ce.z+=1e-4,Ce.normalize(),on.crossVectors(n,Ce)),on.normalize(),Ti.crossVectors(Ce,on),i[0]=on.x,i[4]=Ti.x,i[8]=Ce.x,i[1]=on.y,i[5]=Ti.y,i[9]=Ce.y,i[2]=on.z,i[6]=Ti.z,i[10]=Ce.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],y=n[3],M=n[7],T=n[11],P=n[15],R=i[0],A=i[4],K=i[8],S=i[12],b=i[1],k=i[5],V=i[9],st=i[13],L=i[2],B=i[6],G=i[10],q=i[14],W=i[3],X=i[7],Y=i[11],it=i[15];return r[0]=o*R+a*b+l*L+c*W,r[4]=o*A+a*k+l*B+c*X,r[8]=o*K+a*V+l*G+c*Y,r[12]=o*S+a*st+l*q+c*it,r[1]=h*R+u*b+f*L+m*W,r[5]=h*A+u*k+f*B+m*X,r[9]=h*K+u*V+f*G+m*Y,r[13]=h*S+u*st+f*q+m*it,r[2]=g*R+_*b+p*L+d*W,r[6]=g*A+_*k+p*B+d*X,r[10]=g*K+_*V+p*G+d*Y,r[14]=g*S+_*st+p*q+d*it,r[3]=y*R+M*b+T*L+P*W,r[7]=y*A+M*k+T*B+P*X,r[11]=y*K+M*V+T*G+P*Y,r[15]=y*S+M*st+T*q+P*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*m-n*l*m)+_*(+e*l*m-e*c*f+r*o*f-i*o*m+i*c*h-r*l*h)+p*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],y=u*p*c-_*f*c+_*l*m-a*p*m-u*l*d+a*f*d,M=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,T=h*_*c-g*u*c+g*a*m-o*_*m-h*a*d+o*u*d,P=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,R=e*y+n*M+i*T+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=y*A,t[1]=(_*f*r-u*p*r-_*i*m+n*p*m+u*i*d-n*f*d)*A,t[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*d+n*l*d)*A,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*m-n*l*m)*A,t[4]=M*A,t[5]=(h*p*r-g*f*r+g*i*m-e*p*m-h*i*d+e*f*d)*A,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*d-e*l*d)*A,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*m+e*l*m)*A,t[8]=T*A,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*d-e*u*d)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*A,t[12]=P*A,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*p+e*u*p)*A,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,_=o*h,p=o*u,d=a*u,y=l*c,M=l*h,T=l*u,P=n.x,R=n.y,A=n.z;return i[0]=(1-(_+d))*P,i[1]=(m+T)*P,i[2]=(g-M)*P,i[3]=0,i[4]=(m-T)*R,i[5]=(1-(f+d))*R,i[6]=(p+y)*R,i[7]=0,i[8]=(g+M)*A,i[9]=(p-y)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Fn.set(i[0],i[1],i[2]).length();const o=Fn.set(i[4],i[5],i[6]).length(),a=Fn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ie.copy(this);const c=1/r,h=1/o,u=1/a;return Ie.elements[0]*=c,Ie.elements[1]*=c,Ie.elements[2]*=c,Ie.elements[4]*=h,Ie.elements[5]*=h,Ie.elements[6]*=h,Ie.elements[8]*=u,Ie.elements[9]*=u,Ie.elements[10]*=u,e.setFromRotationMatrix(Ie),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Ze){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(a===Ze)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zi)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ze){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,m=(n+i)*h;let g,_;if(a===Ze)g=(o+r)*u,_=-2*u;else if(a===Zi)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fn=new I,Ie=new ce,Gl=new I(0,0,0),kl=new I(1,1,1),on=new I,Ti=new I,Ce=new I,Jr=new ce,Qr=new wn;class is{constructor(t=0,e=0,n=0,i=is.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qr.setFromEuler(this),this.setFromQuaternion(Qr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class nr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vl=0;const ta=new I,Bn=new wn,qe=new ce,Ai=new I,li=new I,Wl=new I,Xl=new wn,ea=new I(1,0,0),na=new I(0,1,0),ia=new I(0,0,1),ql={type:"added"},Yl={type:"removed"};class Ee extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new I,e=new is,n=new wn,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new kt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.premultiply(Bn),this}rotateX(t){return this.rotateOnAxis(ea,t)}rotateY(t){return this.rotateOnAxis(na,t)}rotateZ(t){return this.rotateOnAxis(ia,t)}translateOnAxis(t,e){return ta.copy(t).applyQuaternion(this.quaternion),this.position.add(ta.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ea,t)}translateY(t){return this.translateOnAxis(na,t)}translateZ(t){return this.translateOnAxis(ia,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ai.copy(t):Ai.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(li,Ai,this.up):qe.lookAt(Ai,li,this.up),this.quaternion.setFromRotationMatrix(qe),i&&(qe.extractRotation(i.matrixWorld),Bn.setFromRotationMatrix(qe),this.quaternion.premultiply(Bn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ql)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,t,Wl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,Xl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new I(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ue=new I,Ye=new I,bs=new I,$e=new I,zn=new I,Hn=new I,sa=new I,Ts=new I,As=new I,ws=new I;let wi=!1;class Oe{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ue.subVectors(t,e),i.cross(Ue);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ue.subVectors(i,e),Ye.subVectors(n,e),bs.subVectors(t,e);const o=Ue.dot(Ue),a=Ue.dot(Ye),l=Ue.dot(bs),c=Ye.dot(Ye),h=Ye.dot(bs),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$e)===null?!1:$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getUV(t,e,n,i,r,o,a,l){return wi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wi=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,$e)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$e.x),l.addScaledVector(o,$e.y),l.addScaledVector(a,$e.z),l)}static isFrontFacing(t,e,n,i){return Ue.subVectors(n,e),Ye.subVectors(t,e),Ue.cross(Ye).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ue.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),Ue.cross(Ye).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return wi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wi=!0),Oe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Oe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;zn.subVectors(i,n),Hn.subVectors(r,n),Ts.subVectors(t,n);const l=zn.dot(Ts),c=Hn.dot(Ts);if(l<=0&&c<=0)return e.copy(n);As.subVectors(t,i);const h=zn.dot(As),u=Hn.dot(As);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(zn,o);ws.subVectors(t,r);const m=zn.dot(ws),g=Hn.dot(ws);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Hn,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return sa.subVectors(r,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(sa,a);const d=1/(p+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(zn,o).addScaledVector(Hn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},Ri={h:0,s:0,l:0};function Rs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Dl(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Rs(o,r,t+1/3),this.g=Rs(o,r,t),this.b=Rs(o,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=le){const n=uo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=le){return $t.fromWorkingColorSpace(pe.copy(this),t),Math.round(xe(pe.r*255,0,255))*65536+Math.round(xe(pe.g*255,0,255))*256+Math.round(xe(pe.b*255,0,255))}getHexString(t=le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(pe.copy(this),e);const n=pe.r,i=pe.g,r=pe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(pe.copy(this),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=le){$t.fromWorkingColorSpace(pe.copy(this),t);const e=pe.r,n=pe.g,i=pe.b;return t!==le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ln),this.setHSL(ln.h+t,ln.s+e,ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(Ri);const n=ms(ln.h,Ri.h,e),i=ms(ln.s,Ri.s,e),r=ms(ln.l,Ri.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new ot;ot.NAMES=uo;let $l=0;class gi extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Cn,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hs,this.blendDst=Gs,this.blendEquation=En,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cn&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hs&&(n.blendSrc=this.blendSrc),this.blendDst!==Gs&&(n.blendDst=this.blendDst),this.blendEquation!==En&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ir extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ie=new I,Li=new bt;class ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Li.fromBufferAttribute(this,e),Li.applyMatrix3(t),this.setXY(e,Li.x,Li.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xr&&(t.usage=this.usage),t}}class fo extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class po extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class en extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jl=0;const we=new ce,Ls=new Ee,Gn=new I,be=new mi,ci=new mi,oe=new I;class He extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oo(t)?po:fo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return we.makeRotationFromQuaternion(t),this.applyMatrix4(we),this}rotateX(t){return we.makeRotationX(t),this.applyMatrix4(we),this}rotateY(t){return we.makeRotationY(t),this.applyMatrix4(we),this}rotateZ(t){return we.makeRotationZ(t),this.applyMatrix4(we),this}translate(t,e,n){return we.makeTranslation(t,e,n),this.applyMatrix4(we),this}scale(t,e,n){return we.makeScale(t,e,n),this.applyMatrix4(we),this}lookAt(t){return Ls.lookAt(t),Ls.updateMatrix(),this.applyMatrix4(Ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new en(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];be.setFromBufferAttribute(r),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(oe.addVectors(be.min,ci.min),be.expandByPoint(oe),oe.addVectors(be.max,ci.max),be.expandByPoint(oe)):(be.expandByPoint(ci.min),be.expandByPoint(ci.max))}be.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)oe.fromBufferAttribute(a,c),l&&(Gn.fromBufferAttribute(t,c),oe.add(Gn)),i=Math.max(i,n.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new I,h[b]=new I;const u=new I,f=new I,m=new I,g=new bt,_=new bt,p=new bt,d=new I,y=new I;function M(b,k,V){u.fromArray(i,b*3),f.fromArray(i,k*3),m.fromArray(i,V*3),g.fromArray(o,b*2),_.fromArray(o,k*2),p.fromArray(o,V*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);const st=1/(_.x*p.y-p.x*_.y);isFinite(st)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(st),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(st),c[b].add(d),c[k].add(d),c[V].add(d),h[b].add(y),h[k].add(y),h[V].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let b=0,k=T.length;b<k;++b){const V=T[b],st=V.start,L=V.count;for(let B=st,G=st+L;B<G;B+=3)M(n[B+0],n[B+1],n[B+2])}const P=new I,R=new I,A=new I,K=new I;function S(b){A.fromArray(r,b*3),K.copy(A);const k=c[b];P.copy(k),P.sub(A.multiplyScalar(A.dot(k))).normalize(),R.crossVectors(K,k);const st=R.dot(h[b])<0?-1:1;l[b*4]=P.x,l[b*4+1]=P.y,l[b*4+2]=P.z,l[b*4+3]=st}for(let b=0,k=T.length;b<k;++b){const V=T[b],st=V.start,L=V.count;for(let B=st,G=st+L;B<G;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ra=new ce,xn=new ns,Pi=new es,aa=new I,kn=new I,Vn=new I,Wn=new I,Ps=new I,Di=new I,Ii=new bt,Ui=new bt,Ni=new bt,oa=new I,la=new I,ca=new I,Oi=new I,Fi=new I;class Je extends Ee{constructor(t=new He,e=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Di.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ps.fromBufferAttribute(u,t),o?Di.addScaledVector(Ps,h):Di.addScaledVector(Ps.sub(e),h))}e.add(Di)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pi.copy(n.boundingSphere),Pi.applyMatrix4(r),xn.copy(t.ray).recast(t.near),!(Pi.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Pi,aa)===null||xn.origin.distanceToSquared(aa)>(t.far-t.near)**2))&&(ra.copy(r).invert(),xn.copy(t.ray).applyMatrix4(ra),!(n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],y=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=y,P=M;T<P;T+=3){const R=a.getX(T),A=a.getX(T+1),K=a.getX(T+2);i=Bi(this,d,t,n,c,h,u,R,A,K),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const y=a.getX(p),M=a.getX(p+1),T=a.getX(p+2);i=Bi(this,o,t,n,c,h,u,y,M,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],y=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=y,P=M;T<P;T+=3){const R=T,A=T+1,K=T+2;i=Bi(this,d,t,n,c,h,u,R,A,K),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const y=p,M=p+1,T=p+2;i=Bi(this,o,t,n,c,h,u,y,M,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Kl(s,t,e,n,i,r,o,a){let l;if(t.side===Se?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===pn,a),l===null)return null;Fi.copy(a),Fi.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Fi);return c<e.near||c>e.far?null:{distance:c,point:Fi.clone(),object:s}}function Bi(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,kn),s.getVertexPosition(l,Vn),s.getVertexPosition(c,Wn);const h=Kl(s,t,e,n,kn,Vn,Wn,Oi);if(h){i&&(Ii.fromBufferAttribute(i,a),Ui.fromBufferAttribute(i,l),Ni.fromBufferAttribute(i,c),h.uv=Oe.getInterpolation(Oi,kn,Vn,Wn,Ii,Ui,Ni,new bt)),r&&(Ii.fromBufferAttribute(r,a),Ui.fromBufferAttribute(r,l),Ni.fromBufferAttribute(r,c),h.uv1=Oe.getInterpolation(Oi,kn,Vn,Wn,Ii,Ui,Ni,new bt),h.uv2=h.uv1),o&&(oa.fromBufferAttribute(o,a),la.fromBufferAttribute(o,l),ca.fromBufferAttribute(o,c),h.normal=Oe.getInterpolation(Oi,kn,Vn,Wn,oa,la,ca,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};Oe.getNormal(kn,Vn,Wn,u.normal),h.face=u}return h}class _i extends He{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(u,2));function g(_,p,d,y,M,T,P,R,A,K,S){const b=T/A,k=P/K,V=T/2,st=P/2,L=R/2,B=A+1,G=K+1;let q=0,W=0;const X=new I;for(let Y=0;Y<G;Y++){const it=Y*k-st;for(let rt=0;rt<B;rt++){const H=rt*b-V;X[_]=H*y,X[p]=it*M,X[d]=L,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[d]=R>0?1:-1,h.push(X.x,X.y,X.z),u.push(rt/A),u.push(1-Y/K),q+=1}}for(let Y=0;Y<K;Y++)for(let it=0;it<A;it++){const rt=f+it+B*Y,H=f+it+B*(Y+1),$=f+(it+1)+B*(Y+1),ht=f+(it+1)+B*Y;l.push(rt,H,ht),l.push(H,$,ht),W+=6}a.addGroup(m,W,S),m+=W,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ti(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function _e(s){const t={};for(let e=0;e<s.length;e++){const n=ti(s[e]);for(const i in n)t[i]=n[i]}return t}function Zl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function mo(s){return s.getRenderTarget()===null?s.outputColorSpace:$t.workingColorSpace}const fi={clone:ti,merge:_e};var Jl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ql=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class me extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jl,this.fragmentShader=Ql,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ti(t.uniforms),this.uniformsGroups=Zl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class go extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Ze}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Le extends go{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xn=-90,qn=1;class tc extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Le(Xn,qn,t,e);i.layers=this.layers,this.add(i);const r=new Le(Xn,qn,t,e);r.layers=this.layers,this.add(r);const o=new Le(Xn,qn,t,e);o.layers=this.layers,this.add(o);const a=new Le(Xn,qn,t,e);a.layers=this.layers,this.add(a);const l=new Le(Xn,qn,t,e);l.layers=this.layers,this.add(l);const c=new Le(Xn,qn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _o extends Te{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Zn,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ec extends ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===An?le:Pe),this.texture=new _o(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Re}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _i(5,5,5),r=new me({name:"CubemapFromEquirect",uniforms:ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:Qe});r.uniforms.tEquirect.value=e;const o=new Je(i,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=Re),new tc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ds=new I,nc=new I,ic=new kt;class cn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ds.subVectors(n,e).cross(nc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ds),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ic.getNormalMatrix(t),i=this.coplanarPoint(Ds).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new es,zi=new I;class vo{constructor(t=new cn,e=new cn,n=new cn,i=new cn,r=new cn,o=new cn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],y=i[13],M=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,p-m,T-d).normalize(),n[1].setComponents(l+r,f+c,p+m,T+d).normalize(),n[2].setComponents(l+o,f+h,p+g,T+y).normalize(),n[3].setComponents(l-o,f-h,p-g,T-y).normalize(),n[4].setComponents(l-a,f-u,p-_,T-M).normalize(),e===Ze)n[5].setComponents(l+a,f+u,p+_,T+M).normalize();else if(e===Zi)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(t){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zi.x=i.normal.x>0?t.max.x:t.min.x,zi.y=i.normal.y>0?t.max.y:t.min.y,zi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xo(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function sc(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class sr extends He{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const y=d*f-o;for(let M=0;M<c;M++){const T=M*u-r;g.push(T,-y,0),_.push(0,0,1),p.push(M/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const M=y+c*d,T=y+c*(d+1),P=y+1+c*(d+1),R=y+1+c*d;m.push(M,T,R),m.push(T,P,R)}this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.width,t.height,t.widthSegments,t.heightSegments)}}var rc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ac=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_c=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ec=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ac=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ic=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Fc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$c=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,th=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ih=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ah=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Eh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ah=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ih=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$h=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const su=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ru=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ou=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,du=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_u=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Su=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Au=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ru=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ou=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:rc,alphahash_pars_fragment:ac,alphamap_fragment:oc,alphamap_pars_fragment:lc,alphatest_fragment:cc,alphatest_pars_fragment:hc,aomap_fragment:uc,aomap_pars_fragment:dc,batching_pars_vertex:fc,batching_vertex:pc,begin_vertex:mc,beginnormal_vertex:gc,bsdfs:_c,iridescence_fragment:vc,bumpmap_pars_fragment:xc,clipping_planes_fragment:Mc,clipping_planes_pars_fragment:Sc,clipping_planes_pars_vertex:Ec,clipping_planes_vertex:yc,color_fragment:Cc,color_pars_fragment:bc,color_pars_vertex:Tc,color_vertex:Ac,common:wc,cube_uv_reflection_fragment:Rc,defaultnormal_vertex:Lc,displacementmap_pars_vertex:Pc,displacementmap_vertex:Dc,emissivemap_fragment:Ic,emissivemap_pars_fragment:Uc,colorspace_fragment:Nc,colorspace_pars_fragment:Oc,envmap_fragment:Fc,envmap_common_pars_fragment:Bc,envmap_pars_fragment:zc,envmap_pars_vertex:Hc,envmap_physical_pars_fragment:Jc,envmap_vertex:Gc,fog_vertex:kc,fog_pars_vertex:Vc,fog_fragment:Wc,fog_pars_fragment:Xc,gradientmap_pars_fragment:qc,lightmap_fragment:Yc,lightmap_pars_fragment:$c,lights_lambert_fragment:jc,lights_lambert_pars_fragment:Kc,lights_pars_begin:Zc,lights_toon_fragment:Qc,lights_toon_pars_fragment:th,lights_phong_fragment:eh,lights_phong_pars_fragment:nh,lights_physical_fragment:ih,lights_physical_pars_fragment:sh,lights_fragment_begin:rh,lights_fragment_maps:ah,lights_fragment_end:oh,logdepthbuf_fragment:lh,logdepthbuf_pars_fragment:ch,logdepthbuf_pars_vertex:hh,logdepthbuf_vertex:uh,map_fragment:dh,map_pars_fragment:fh,map_particle_fragment:ph,map_particle_pars_fragment:mh,metalnessmap_fragment:gh,metalnessmap_pars_fragment:_h,morphcolor_vertex:vh,morphnormal_vertex:xh,morphtarget_pars_vertex:Mh,morphtarget_vertex:Sh,normal_fragment_begin:Eh,normal_fragment_maps:yh,normal_pars_fragment:Ch,normal_pars_vertex:bh,normal_vertex:Th,normalmap_pars_fragment:Ah,clearcoat_normal_fragment_begin:wh,clearcoat_normal_fragment_maps:Rh,clearcoat_pars_fragment:Lh,iridescence_pars_fragment:Ph,opaque_fragment:Dh,packing:Ih,premultiplied_alpha_fragment:Uh,project_vertex:Nh,dithering_fragment:Oh,dithering_pars_fragment:Fh,roughnessmap_fragment:Bh,roughnessmap_pars_fragment:zh,shadowmap_pars_fragment:Hh,shadowmap_pars_vertex:Gh,shadowmap_vertex:kh,shadowmask_pars_fragment:Vh,skinbase_vertex:Wh,skinning_pars_vertex:Xh,skinning_vertex:qh,skinnormal_vertex:Yh,specularmap_fragment:$h,specularmap_pars_fragment:jh,tonemapping_fragment:Kh,tonemapping_pars_fragment:Zh,transmission_fragment:Jh,transmission_pars_fragment:Qh,uv_pars_fragment:tu,uv_pars_vertex:eu,uv_vertex:nu,worldpos_vertex:iu,background_vert:su,background_frag:ru,backgroundCube_vert:au,backgroundCube_frag:ou,cube_vert:lu,cube_frag:cu,depth_vert:hu,depth_frag:uu,distanceRGBA_vert:du,distanceRGBA_frag:fu,equirect_vert:pu,equirect_frag:mu,linedashed_vert:gu,linedashed_frag:_u,meshbasic_vert:vu,meshbasic_frag:xu,meshlambert_vert:Mu,meshlambert_frag:Su,meshmatcap_vert:Eu,meshmatcap_frag:yu,meshnormal_vert:Cu,meshnormal_frag:bu,meshphong_vert:Tu,meshphong_frag:Au,meshphysical_vert:wu,meshphysical_frag:Ru,meshtoon_vert:Lu,meshtoon_frag:Pu,points_vert:Du,points_frag:Iu,shadow_vert:Uu,shadow_frag:Nu,sprite_vert:Ou,sprite_frag:Fu},at={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},ke={basic:{uniforms:_e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:_e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ot(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:_e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:_e([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:_e([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new ot(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:_e([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:_e([at.points,at.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:_e([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:_e([at.common,at.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:_e([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:_e([at.sprite,at.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:_e([at.common,at.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:_e([at.lights,at.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};ke.physical={uniforms:_e([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Hi={r:0,b:0,g:0};function Bu(s,t,e,n,i,r,o){const a=new ot(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let y=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?e:t).get(M)),M===null?_(a,l):M&&M.isColor&&(_(M,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Qi)?(h===void 0&&(h=new Je(new _i(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:ti(ke.backgroundCube.uniforms),vertexShader:ke.backgroundCube.vertexShader,fragmentShader:ke.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=$t.getTransfer(M.colorSpace)!==jt,(u!==M||f!==M.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Je(new sr(2,2),new me({name:"BackgroundMaterial",uniforms:ti(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=$t.getTransfer(M.colorSpace)!==jt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(Hi,mo(s)),n.buffers.color.setClear(Hi.r,Hi.g,Hi.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function zu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(L,B,G,q,W){let X=!1;if(o){const Y=_(q,G,B);c!==Y&&(c=Y,m(c.object)),X=d(L,q,G,W),X&&y(L,q,G,W)}else{const Y=B.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==Y)&&(c.geometry=q.id,c.program=G.id,c.wireframe=Y,X=!0)}W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,K(L,B,G,q),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,B,G){const q=G.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let X=W[B.id];X===void 0&&(X={},W[B.id]=X);let Y=X[q];return Y===void 0&&(Y=p(f()),X[q]=Y),Y}function p(L){const B=[],G=[],q=[];for(let W=0;W<i;W++)B[W]=0,G[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:q,object:L,attributes:{},index:null}}function d(L,B,G,q){const W=c.attributes,X=B.attributes;let Y=0;const it=G.getAttributes();for(const rt in it)if(it[rt].location>=0){const $=W[rt];let ht=X[rt];if(ht===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),$===void 0||$.attribute!==ht||ht&&$.data!==ht.data)return!0;Y++}return c.attributesNum!==Y||c.index!==q}function y(L,B,G,q){const W={},X=B.attributes;let Y=0;const it=G.getAttributes();for(const rt in it)if(it[rt].location>=0){let $=X[rt];$===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const ht={};ht.attribute=$,$&&$.data&&(ht.data=$.data),W[rt]=ht,Y++}c.attributes=W,c.attributesNum=Y,c.index=q}function M(){const L=c.newAttributes;for(let B=0,G=L.length;B<G;B++)L[B]=0}function T(L){P(L,0)}function P(L,B){const G=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;G[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),W[L]!==B&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),W[L]=B)}function R(){const L=c.newAttributes,B=c.enabledAttributes;for(let G=0,q=B.length;G<q;G++)B[G]!==L[G]&&(s.disableVertexAttribArray(G),B[G]=0)}function A(L,B,G,q,W,X,Y){Y===!0?s.vertexAttribIPointer(L,B,G,W,X):s.vertexAttribPointer(L,B,G,q,W,X)}function K(L,B,G,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const W=q.attributes,X=G.getAttributes(),Y=B.defaultAttributeValues;for(const it in X){const rt=X[it];if(rt.location>=0){let H=W[it];if(H===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){const $=H.normalized,ht=H.itemSize,xt=e.get(H);if(xt===void 0)continue;const _t=xt.buffer,Dt=xt.type,It=xt.bytesPerElement,Tt=n.isWebGL2===!0&&(Dt===s.INT||Dt===s.UNSIGNED_INT||H.gpuType===Ja);if(H.isInterleavedBufferAttribute){const Vt=H.data,N=Vt.stride,he=H.offset;if(Vt.isInstancedInterleavedBuffer){for(let Et=0;Et<rt.locationSize;Et++)P(rt.location+Et,Vt.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let Et=0;Et<rt.locationSize;Et++)T(rt.location+Et);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Et=0;Et<rt.locationSize;Et++)A(rt.location+Et,ht/rt.locationSize,Dt,$,N*It,(he+ht/rt.locationSize*Et)*It,Tt)}else{if(H.isInstancedBufferAttribute){for(let Vt=0;Vt<rt.locationSize;Vt++)P(rt.location+Vt,H.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Vt=0;Vt<rt.locationSize;Vt++)T(rt.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Vt=0;Vt<rt.locationSize;Vt++)A(rt.location+Vt,ht/rt.locationSize,Dt,$,ht*It,ht/rt.locationSize*Vt*It,Tt)}}else if(Y!==void 0){const $=Y[it];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(rt.location,$);break;case 3:s.vertexAttrib3fv(rt.location,$);break;case 4:s.vertexAttrib4fv(rt.location,$);break;default:s.vertexAttrib1fv(rt.location,$)}}}}R()}function S(){V();for(const L in a){const B=a[L];for(const G in B){const q=B[G];for(const W in q)g(q[W].object),delete q[W];delete B[G]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;const B=a[L.id];for(const G in B){const q=B[G];for(const W in q)g(q[W].object),delete q[W];delete B[G]}delete a[L.id]}function k(L){for(const B in a){const G=a[B];if(G[L.id]===void 0)continue;const q=G[L.id];for(const W in q)g(q[W].object),delete q[W];delete G[L.id]}}function V(){st(),h=!0,c!==l&&(c=l,m(c.object))}function st(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:st,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:k,initAttributes:M,enableAttribute:T,disableUnusedAttributes:R}}function Hu(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Gu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,T=o||t.has("OES_texture_float"),P=M&&T,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:M,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:R}}function ku(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new cn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,M=y*4;let T=d.clippingState||null;l.value=T,T=h(g,f,M,m);for(let P=0;P!==M;++P)T[P]=e[P];d.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,T=m;M!==_;++M,T+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Vu(s){let t=new WeakMap;function e(o,a){return a===ks?o.mapping=Zn:a===Vs&&(o.mapping=Jn),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ks||a===Vs)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ec(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Mo extends go{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $n=4,ha=[.125,.215,.35,.446,.526,.582],yn=20,Is=new Mo,ua=new ot;let Us=null,Ns=0,Os=0;const Sn=(1+Math.sqrt(5))/2,Yn=1/Sn,da=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Sn,Yn),new I(0,Sn,-Yn),new I(Yn,0,Sn),new I(-Yn,0,Sn),new I(Sn,Yn,0),new I(-Sn,Yn,0)];class fa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Us=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ga(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Us,Ns,Os),t.scissorTest=!1,Gi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zn||t.mapping===Jn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Us=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:tn,format:Be,colorSpace:nn,depthBuffer:!1},i=pa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wu(r)),this._blurMaterial=Xu(r,t,e)}return i}_compileMaterial(t){const e=new Je(this._lodPlanes[0],t);this._renderer.compile(e,Is)}_sceneToCubeUV(t,e,n,i){const a=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ua),h.toneMapping=dn,h.autoClear=!1;const m=new ir({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),g=new Je(new _i,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(ua),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;Gi(i,y*M,d>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zn||t.mapping===Jn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ga()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ma());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Gi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Is)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=da[(i-1)%da.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Je(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*yn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):yn;p>yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yn}`);const d=[];let y=0;for(let A=0;A<yn;++A){const K=A/_,S=Math.exp(-K*K/2);d.push(S),A===0?y+=S:A<p&&(y+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const T=this._sizeLods[i],P=3*T*(i>M-$n?i-M+$n:0),R=4*(this._cubeSize-T);Gi(e,P,R,3*T,2*T),l.setRenderTarget(e),l.render(u,Is)}}function Wu(s){const t=[],e=[],n=[];let i=s;const r=s-$n+1+ha.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-$n?l=ha[o-s+$n-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,y=new Float32Array(_*g*m),M=new Float32Array(p*g*m),T=new Float32Array(d*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,K=R>2?0:-1,S=[A,K,0,A+2/3,K,0,A+2/3,K+1,0,A,K,0,A+2/3,K+1,0,A,K+1,0];y.set(S,_*g*R),M.set(f,p*g*R);const b=[R,R,R,R,R,R];T.set(b,d*g*R)}const P=new He;P.setAttribute("position",new ge(y,_)),P.setAttribute("uv",new ge(M,p)),P.setAttribute("faceIndex",new ge(T,d)),t.push(P),i>$n&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pa(s,t,e){const n=new ze(s,t,e);return n.texture.mapping=Qi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Xu(s,t,e){const n=new Float32Array(yn),i=new I(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function ma(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function ga(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function rr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qu(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ks||l===Vs,h=l===Zn||l===Jn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new fa(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new fa(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yu(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $u(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let M=0,T=y.length;M<T;M+=3){const P=y[M+0],R=y[M+1],A=y[M+2];f.push(P,R,R,A,A,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,T=y.length/3-1;M<T;M+=3){const P=M+0,R=M+1,A=M+2;f.push(P,R,R,A,A,P)}}else return;const p=new(oo(f)?po:fo)(f,1);p.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ju(s,t,e,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*l),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*l,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let d=0;for(let y=0;y<_;y++)d+=g[y];e.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Ku(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Zu(s,t){return s[0]-t[0]}function Ju(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Qu(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ue,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let B=function(){st.dispose(),r.delete(h),h.removeEventListener("dispose",B)};var m=B;p!==void 0&&p.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],K=h.morphAttributes.color||[];let S=0;M===!0&&(S=1),T===!0&&(S=2),P===!0&&(S=3);let b=h.attributes.position.count*S,k=1;b>t.maxTextureSize&&(k=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const V=new Float32Array(b*k*4*_),st=new ho(V,b,k,_);st.type=un,st.needsUpdate=!0;const L=S*4;for(let G=0;G<_;G++){const q=R[G],W=A[G],X=K[G],Y=b*k*4*G;for(let it=0;it<q.count;it++){const rt=it*L;M===!0&&(o.fromBufferAttribute(q,it),V[Y+rt+0]=o.x,V[Y+rt+1]=o.y,V[Y+rt+2]=o.z,V[Y+rt+3]=0),T===!0&&(o.fromBufferAttribute(W,it),V[Y+rt+4]=o.x,V[Y+rt+5]=o.y,V[Y+rt+6]=o.z,V[Y+rt+7]=0),P===!0&&(o.fromBufferAttribute(X,it),V[Y+rt+8]=o.x,V[Y+rt+9]=o.y,V[Y+rt+10]=o.z,V[Y+rt+11]=X.itemSize===4?o.w:1)}}p={count:_,texture:st,size:new bt(b,k)},r.set(h,p),h.addEventListener("dispose",B)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let T=0;T<g;T++)_[T]=[T,0];n[h.id]=_}for(let T=0;T<g;T++){const P=_[T];P[0]=T,P[1]=f[T]}_.sort(Ju);for(let T=0;T<8;T++)T<g&&_[T][1]?(a[T][0]=_[T][0],a[T][1]=_[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(Zu);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let y=0;for(let T=0;T<8;T++){const P=a[T],R=P[0],A=P[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+T)!==p[R]&&h.setAttribute("morphTarget"+T,p[R]),d&&h.getAttribute("morphNormal"+T)!==d[R]&&h.setAttribute("morphNormal"+T,d[R]),i[T]=A,y+=A):(p&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),d&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),i[T]=0)}const M=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function td(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class So extends Te{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Tn,h!==Tn&&h!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Tn&&(n=hn),n===void 0&&h===Qn&&(n=bn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ve,this.minFilter=l!==void 0?l:ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Eo=new Te,yo=new So(1,1);yo.compareFunction=ao;const Co=new ho,bo=new zl,To=new _o,_a=[],va=[],xa=new Float32Array(16),Ma=new Float32Array(9),Sa=new Float32Array(4);function ni(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=_a[i];if(r===void 0&&(r=new Float32Array(i),_a[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ss(s,t){let e=va[t];e===void 0&&(e=new Int32Array(t),va[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ed(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;s.uniform2fv(this.addr,t),re(e,t)}}function id(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(se(e,t))return;s.uniform3fv(this.addr,t),re(e,t)}}function sd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;s.uniform4fv(this.addr,t),re(e,t)}}function rd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Sa.set(n),s.uniformMatrix2fv(this.addr,!1,Sa),re(e,n)}}function ad(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Ma.set(n),s.uniformMatrix3fv(this.addr,!1,Ma),re(e,n)}}function od(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;xa.set(n),s.uniformMatrix4fv(this.addr,!1,xa),re(e,n)}}function ld(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function cd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;s.uniform2iv(this.addr,t),re(e,t)}}function hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;s.uniform3iv(this.addr,t),re(e,t)}}function ud(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;s.uniform4iv(this.addr,t),re(e,t)}}function dd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function fd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;s.uniform2uiv(this.addr,t),re(e,t)}}function pd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;s.uniform3uiv(this.addr,t),re(e,t)}}function md(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;s.uniform4uiv(this.addr,t),re(e,t)}}function gd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?yo:Eo;e.setTexture2D(t||r,i)}function _d(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||bo,i)}function vd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||To,i)}function xd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Co,i)}function Md(s){switch(s){case 5126:return ed;case 35664:return nd;case 35665:return id;case 35666:return sd;case 35674:return rd;case 35675:return ad;case 35676:return od;case 5124:case 35670:return ld;case 35667:case 35671:return cd;case 35668:case 35672:return hd;case 35669:case 35673:return ud;case 5125:return dd;case 36294:return fd;case 36295:return pd;case 36296:return md;case 35678:case 36198:case 36298:case 36306:case 35682:return gd;case 35679:case 36299:case 36307:return _d;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return xd}}function Sd(s,t){s.uniform1fv(this.addr,t)}function Ed(s,t){const e=ni(t,this.size,2);s.uniform2fv(this.addr,e)}function yd(s,t){const e=ni(t,this.size,3);s.uniform3fv(this.addr,e)}function Cd(s,t){const e=ni(t,this.size,4);s.uniform4fv(this.addr,e)}function bd(s,t){const e=ni(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Td(s,t){const e=ni(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ad(s,t){const e=ni(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wd(s,t){s.uniform1iv(this.addr,t)}function Rd(s,t){s.uniform2iv(this.addr,t)}function Ld(s,t){s.uniform3iv(this.addr,t)}function Pd(s,t){s.uniform4iv(this.addr,t)}function Dd(s,t){s.uniform1uiv(this.addr,t)}function Id(s,t){s.uniform2uiv(this.addr,t)}function Ud(s,t){s.uniform3uiv(this.addr,t)}function Nd(s,t){s.uniform4uiv(this.addr,t)}function Od(s,t,e){const n=this.cache,i=t.length,r=ss(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Eo,r[o])}function Fd(s,t,e){const n=this.cache,i=t.length,r=ss(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||bo,r[o])}function Bd(s,t,e){const n=this.cache,i=t.length,r=ss(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||To,r[o])}function zd(s,t,e){const n=this.cache,i=t.length,r=ss(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Co,r[o])}function Hd(s){switch(s){case 5126:return Sd;case 35664:return Ed;case 35665:return yd;case 35666:return Cd;case 35674:return bd;case 35675:return Td;case 35676:return Ad;case 5124:case 35670:return wd;case 35667:case 35671:return Rd;case 35668:case 35672:return Ld;case 35669:case 35673:return Pd;case 5125:return Dd;case 36294:return Id;case 36295:return Ud;case 36296:return Nd;case 35678:case 36198:case 36298:case 36306:case 35682:return Od;case 35679:case 36299:case 36307:return Fd;case 35680:case 36300:case 36308:case 36293:return Bd;case 36289:case 36303:case 36311:case 36292:return zd}}class Gd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Md(e.type)}}class kd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hd(e.type)}}class Vd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Fs=/(\w+)(\])?(\[|\.)?/g;function Ea(s,t){s.seq.push(t),s.map[t.id]=t}function Wd(s,t,e){const n=s.name,i=n.length;for(Fs.lastIndex=0;;){const r=Fs.exec(n),o=Fs.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ea(e,c===void 0?new Gd(a,s,t):new kd(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Vd(a),Ea(e,u)),e=u}}}class qi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Wd(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ya(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Xd=37297;let qd=0;function Yd(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function $d(s){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(s);let n;switch(t===e?n="":t===Ki&&e===ji?n="LinearDisplayP3ToLinearSRGB":t===ji&&e===Ki&&(n="LinearSRGBToLinearDisplayP3"),s){case nn:case ts:return[n,"LinearTransferOETF"];case le:case er:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ca(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Yd(s.getShaderSource(t),o)}else return i}function jd(s,t){const e=$d(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Kd(s,t){let e;switch(t){case Ya:e="Linear";break;case $a:e="Reinhard";break;case ja:e="OptimizedCineon";break;case Qs:e="ACESFilmic";break;case Ka:e="AgX";break;case ul:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jn).join(`
`)}function Jd(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(jn).join(`
`)}function Qd(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function jn(s){return s!==""}function ba(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ta(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ef=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(s){return s.replace(ef,sf)}const nf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sf(s,t){let e=Bt[t];if(e===void 0){const n=nf.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return js(e)}const rf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Aa(s){return s.replace(rf,af)}function af(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wa(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function of(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xa?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===zo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===je&&(t="SHADOWMAP_TYPE_VSM"),t}function lf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zn:case Jn:t="ENVMAP_TYPE_CUBE";break;case Qi:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Jn:t="ENVMAP_MODE_REFRACTION";break}return t}function hf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qa:t="ENVMAP_BLENDING_MULTIPLY";break;case cl:t="ENVMAP_BLENDING_MIX";break;case hl:t="ENVMAP_BLENDING_ADD";break}return t}function uf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function df(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=of(e),c=lf(e),h=cf(e),u=hf(e),f=uf(e),m=e.isWebGL2?"":Zd(e),g=Jd(e),_=Qd(r),p=i.createProgram();let d,y,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(jn).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(jn).join(`
`),y.length>0&&(y+=`
`)):(d=[wa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jn).join(`
`),y=[m,wa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==dn?Kd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,jd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jn).join(`
`)),o=js(o),o=ba(o,e),o=Ta(o,e),a=js(a),a=ba(a,e),a=Ta(a,e),o=Aa(o),a=Aa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===qr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=M+d+o,P=M+y+a,R=ya(i,i.VERTEX_SHADER,T),A=ya(i,i.FRAGMENT_SHADER,P);i.attachShader(p,R),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function K(V){if(s.debug.checkShaderErrors){const st=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(R).trim(),B=i.getShaderInfoLog(A).trim();let G=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,R,A);else{const W=Ca(i,R,"vertex"),X=Ca(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+st+`
`+W+`
`+X)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(L===""||B==="")&&(q=!1);q&&(V.diagnostics={runnable:G,programLog:st,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:y}})}i.deleteShader(R),i.deleteShader(A),S=new qi(i,p),b=tf(i,p)}let S;this.getUniforms=function(){return S===void 0&&K(this),S};let b;this.getAttributes=function(){return b===void 0&&K(this),b};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(p,Xd)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let ff=0;class pf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mf(t),e.set(t,n)),n}}class mf{constructor(t){this.id=ff++,this.code=t,this.usedTimes=0}}function gf(s,t,e,n,i,r,o){const a=new nr,l=new pf,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,b,k,V,st){const L=V.fog,B=st.geometry,G=S.isMeshStandardMaterial?V.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),W=q&&q.mapping===Qi?q.image.height:null,X=g[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Y=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=Y!==void 0?Y.length:0;let rt=0;B.morphAttributes.position!==void 0&&(rt=1),B.morphAttributes.normal!==void 0&&(rt=2),B.morphAttributes.color!==void 0&&(rt=3);let H,$,ht,xt;if(X){const te=ke[X];H=te.vertexShader,$=te.fragmentShader}else H=S.vertexShader,$=S.fragmentShader,l.update(S),ht=l.getVertexShaderID(S),xt=l.getFragmentShaderID(S);const _t=s.getRenderTarget(),Dt=st.isInstancedMesh===!0,It=st.isBatchedMesh===!0,Tt=!!S.map,Vt=!!S.matcap,N=!!q,he=!!S.aoMap,Et=!!S.lightMap,Rt=!!S.bumpMap,mt=!!S.normalMap,Kt=!!S.displacementMap,Nt=!!S.emissiveMap,E=!!S.metalnessMap,v=!!S.roughnessMap,U=S.anisotropy>0,Q=S.clearcoat>0,Z=S.iridescence>0,tt=S.sheen>0,gt=S.transmission>0,ct=U&&!!S.anisotropyMap,pt=Q&&!!S.clearcoatMap,Ct=Q&&!!S.clearcoatNormalMap,Ot=Q&&!!S.clearcoatRoughnessMap,j=Z&&!!S.iridescenceMap,Yt=Z&&!!S.iridescenceThicknessMap,zt=tt&&!!S.sheenColorMap,Lt=tt&&!!S.sheenRoughnessMap,St=!!S.specularMap,ut=!!S.specularColorMap,C=!!S.specularIntensityMap,et=gt&&!!S.transmissionMap,vt=gt&&!!S.thicknessMap,ft=!!S.gradientMap,J=!!S.alphaMap,w=S.alphaTest>0,nt=!!S.alphaHash,lt=!!S.extensions,At=!!B.attributes.uv1,yt=!!B.attributes.uv2,Wt=!!B.attributes.uv3;let Xt=dn;return S.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Xt=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:$,defines:S.defines,customVertexShaderID:ht,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:It,instancing:Dt,instancingColor:Dt&&st.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:nn,map:Tt,matcap:Vt,envMap:N,envMapMode:N&&q.mapping,envMapCubeUVHeight:W,aoMap:he,lightMap:Et,bumpMap:Rt,normalMap:mt,displacementMap:f&&Kt,emissiveMap:Nt,normalMapObjectSpace:mt&&S.normalMapType===Cl,normalMapTangentSpace:mt&&S.normalMapType===yl,metalnessMap:E,roughnessMap:v,anisotropy:U,anisotropyMap:ct,clearcoat:Q,clearcoatMap:pt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Ot,iridescence:Z,iridescenceMap:j,iridescenceThicknessMap:Yt,sheen:tt,sheenColorMap:zt,sheenRoughnessMap:Lt,specularMap:St,specularColorMap:ut,specularIntensityMap:C,transmission:gt,transmissionMap:et,thicknessMap:vt,gradientMap:ft,opaque:S.transparent===!1&&S.blending===Cn,alphaMap:J,alphaTest:w,alphaHash:nt,combine:S.combine,mapUv:Tt&&_(S.map.channel),aoMapUv:he&&_(S.aoMap.channel),lightMapUv:Et&&_(S.lightMap.channel),bumpMapUv:Rt&&_(S.bumpMap.channel),normalMapUv:mt&&_(S.normalMap.channel),displacementMapUv:Kt&&_(S.displacementMap.channel),emissiveMapUv:Nt&&_(S.emissiveMap.channel),metalnessMapUv:E&&_(S.metalnessMap.channel),roughnessMapUv:v&&_(S.roughnessMap.channel),anisotropyMapUv:ct&&_(S.anisotropyMap.channel),clearcoatMapUv:pt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(S.sheenRoughnessMap.channel),specularMapUv:St&&_(S.specularMap.channel),specularColorMapUv:ut&&_(S.specularColorMap.channel),specularIntensityMapUv:C&&_(S.specularIntensityMap.channel),transmissionMapUv:et&&_(S.transmissionMap.channel),thicknessMapUv:vt&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(mt||U),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:yt,vertexUv3s:Wt,pointsUvs:st.isPoints===!0&&!!B.attributes.uv&&(Tt||J),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:st.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Tt&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ke,flipSided:S.side===Se,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:lt&&S.extensions.derivatives===!0,extensionFragDepth:lt&&S.extensions.fragDepth===!0,extensionDrawBuffers:lt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)b.push(k),b.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(y(b,S),M(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function T(S){const b=g[S.type];let k;if(b){const V=ke[b];k=fi.clone(V.uniforms)}else k=S.uniforms;return k}function P(S,b){let k;for(let V=0,st=c.length;V<st;V++){const L=c[V];if(L.cacheKey===b){k=L,++k.usedTimes;break}}return k===void 0&&(k=new df(s,b,S,r),c.push(k)),k}function R(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function K(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:T,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:K}}function _f(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function vf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ra(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function La(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,m,g,_,p){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),t++,d}function a(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function l(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||vf),n.length>1&&n.sort(f||Ra),i.length>1&&i.sort(f||Ra)}function h(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function xf(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new La,s.set(n,[o])):i>=r.length?(o=new La,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Mf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ot};break;case"SpotLight":e={position:new I,direction:new I,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Sf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Ef=0;function yf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Cf(s,t){const e=new Mf,n=Sf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const r=new I,o=new ce,a=new ce;function l(h,u){let f=0,m=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let _=0,p=0,d=0,y=0,M=0,T=0,P=0,R=0,A=0,K=0,S=0;h.sort(yf);const b=u===!0?Math.PI:1;for(let V=0,st=h.length;V<st;V++){const L=h[V],B=L.color,G=L.intensity,q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=B.r*G*b,m+=B.g*G*b,g+=B.b*G*b;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],G);S++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const Y=L.shadow,it=n.get(L);it.shadowBias=Y.bias,it.shadowNormalBias=Y.normalBias,it.shadowRadius=Y.radius,it.shadowMapSize=Y.mapSize,i.directionalShadow[_]=it,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=L.shadow.matrix,T++}i.directional[_]=X,_++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(G*b),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[d]=X;const Y=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,Y.updateMatrices(L),L.castShadow&&K++),i.spotLightMatrix[d]=Y.matrix,L.castShadow){const it=n.get(L);it.shadowBias=Y.bias,it.shadowNormalBias=Y.normalBias,it.shadowRadius=Y.radius,it.shadowMapSize=Y.mapSize,i.spotShadow[d]=it,i.spotShadowMap[d]=W,R++}d++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(B).multiplyScalar(G),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=X,y++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*b),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Y=L.shadow,it=n.get(L);it.shadowBias=Y.bias,it.shadowNormalBias=Y.normalBias,it.shadowRadius=Y.radius,it.shadowMapSize=Y.mapSize,it.shadowCameraNear=Y.camera.near,it.shadowCameraFar=Y.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=L.shadow.matrix,P++}i.point[p]=X,p++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(G*b),X.groundColor.copy(L.groundColor).multiplyScalar(G*b),i.hemi[M]=X,M++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const k=i.hash;(k.directionalLength!==_||k.pointLength!==p||k.spotLength!==d||k.rectAreaLength!==y||k.hemiLength!==M||k.numDirectionalShadows!==T||k.numPointShadows!==P||k.numSpotShadows!==R||k.numSpotMaps!==A||k.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=y,i.point.length=p,i.hemi.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=R+A-K,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=K,i.numLightProbes=S,k.directionalLength=_,k.pointLength=p,k.spotLength=d,k.rectAreaLength=y,k.hemiLength=M,k.numDirectionalShadows=T,k.numPointShadows=P,k.numSpotShadows=R,k.numSpotMaps=A,k.numLightProbes=S,i.version=Ef++)}function c(h,u){let f=0,m=0,g=0,_=0,p=0;const d=u.matrixWorldInverse;for(let y=0,M=h.length;y<M;y++){const T=h[y];if(T.isDirectionalLight){const P=i.directional[f];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(T.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(T.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),m++}else if(T.isHemisphereLight){const P=i.hemi[p];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function Pa(s,t){const e=new Cf(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bf(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Pa(s,t),e.set(r,[l])):o>=a.length?(l=new Pa(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Tf extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Af extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lf(s,t,e){let n=new vo;const i=new bt,r=new bt,o=new ue,a=new Tf({depthPacking:El}),l=new Af,c={},h=e.maxTextureSize,u={[pn]:Se,[Se]:pn,[Ke]:Ke},f=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:wf,fragmentShader:Rf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Je(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let d=this.type;this.render=function(R,A,K){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const S=s.getRenderTarget(),b=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Qe),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const st=d!==je&&this.type===je,L=d===je&&this.type!==je;for(let B=0,G=R.length;B<G;B++){const q=R[B],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const X=W.getFrameExtents();if(i.multiply(X),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||st===!0||L===!0){const it=this.type!==je?{minFilter:ve,magFilter:ve}:{};W.map!==null&&W.map.dispose(),W.map=new ze(i.x,i.y,it),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const Y=W.getViewportCount();for(let it=0;it<Y;it++){const rt=W.getViewport(it);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),V.viewport(o),W.updateMatrices(q,it),n=W.getFrustum(),T(A,K,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===je&&y(W,K),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(S,b,k)};function y(R,A){const K=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ze(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,K,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,K,m,_,null)}function M(R,A,K,S){let b=null;const k=K.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)b=k;else if(b=K.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=b.uuid,st=A.uuid;let L=c[V];L===void 0&&(L={},c[V]=L);let B=L[st];B===void 0&&(B=b.clone(),L[st]=B,A.addEventListener("dispose",P)),b=B}if(b.visible=A.visible,b.wireframe=A.wireframe,S===je?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,K.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=s.properties.get(b);V.light=K}return b}function T(R,A,K,S,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===je)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld);const st=t.update(R),L=R.material;if(Array.isArray(L)){const B=st.groups;for(let G=0,q=B.length;G<q;G++){const W=B[G],X=L[W.materialIndex];if(X&&X.visible){const Y=M(R,X,S,b);R.onBeforeShadow(s,R,A,K,st,Y,W),s.renderBufferDirect(K,null,st,Y,R,W),R.onAfterShadow(s,R,A,K,st,Y,W)}}}else if(L.visible){const B=M(R,L,S,b);R.onBeforeShadow(s,R,A,K,st,B,null),s.renderBufferDirect(K,null,st,B,R,null),R.onAfterShadow(s,R,A,K,st,B,null)}}const V=R.children;for(let st=0,L=V.length;st<L;st++)T(V[st],A,K,S,b)}function P(R){R.target.removeEventListener("dispose",P);for(const K in c){const S=c[K],b=R.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function Pf(s,t,e){const n=e.isWebGL2;function i(){let w=!1;const nt=new ue;let lt=null;const At=new ue(0,0,0,0);return{setMask:function(yt){lt!==yt&&!w&&(s.colorMask(yt,yt,yt,yt),lt=yt)},setLocked:function(yt){w=yt},setClear:function(yt,Wt,Xt,Jt,te){te===!0&&(yt*=Jt,Wt*=Jt,Xt*=Jt),nt.set(yt,Wt,Xt,Jt),At.equals(nt)===!1&&(s.clearColor(yt,Wt,Xt,Jt),At.copy(nt))},reset:function(){w=!1,lt=null,At.set(-1,0,0,0)}}}function r(){let w=!1,nt=null,lt=null,At=null;return{setTest:function(yt){yt?It(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(yt){nt!==yt&&!w&&(s.depthMask(yt),nt=yt)},setFunc:function(yt){if(lt!==yt){switch(yt){case nl:s.depthFunc(s.NEVER);break;case il:s.depthFunc(s.ALWAYS);break;case sl:s.depthFunc(s.LESS);break;case Yi:s.depthFunc(s.LEQUAL);break;case rl:s.depthFunc(s.EQUAL);break;case al:s.depthFunc(s.GEQUAL);break;case ol:s.depthFunc(s.GREATER);break;case ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=yt}},setLocked:function(yt){w=yt},setClear:function(yt){At!==yt&&(s.clearDepth(yt),At=yt)},reset:function(){w=!1,nt=null,lt=null,At=null}}}function o(){let w=!1,nt=null,lt=null,At=null,yt=null,Wt=null,Xt=null,Jt=null,te=null;return{setTest:function(qt){w||(qt?It(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(qt){nt!==qt&&!w&&(s.stencilMask(qt),nt=qt)},setFunc:function(qt,ne,Ge){(lt!==qt||At!==ne||yt!==Ge)&&(s.stencilFunc(qt,ne,Ge),lt=qt,At=ne,yt=Ge)},setOp:function(qt,ne,Ge){(Wt!==qt||Xt!==ne||Jt!==Ge)&&(s.stencilOp(qt,ne,Ge),Wt=qt,Xt=ne,Jt=Ge)},setLocked:function(qt){w=qt},setClear:function(qt){te!==qt&&(s.clearStencil(qt),te=qt)},reset:function(){w=!1,nt=null,lt=null,At=null,yt=null,Wt=null,Xt=null,Jt=null,te=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,d=!1,y=null,M=null,T=null,P=null,R=null,A=null,K=null,S=new ot(0,0,0),b=0,k=!1,V=null,st=null,L=null,B=null,G=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=X>=2);let it=null,rt={};const H=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ht=new ue().fromArray(H),xt=new ue().fromArray($);function _t(w,nt,lt,At){const yt=new Uint8Array(4),Wt=s.createTexture();s.bindTexture(w,Wt),s.texParameteri(w,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(w,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<lt;Xt++)n&&(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)?s.texImage3D(nt,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(nt+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return Wt}const Dt={};Dt[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Dt[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Dt[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Dt[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),It(s.DEPTH_TEST),l.setFunc(Yi),Nt(!1),E(fr),It(s.CULL_FACE),mt(Qe);function It(w){f[w]!==!0&&(s.enable(w),f[w]=!0)}function Tt(w){f[w]!==!1&&(s.disable(w),f[w]=!1)}function Vt(w,nt){return m[w]!==nt?(s.bindFramebuffer(w,nt),m[w]=nt,n&&(w===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=nt),w===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=nt)),!0):!1}function N(w,nt){let lt=_,At=!1;if(w)if(lt=g.get(nt),lt===void 0&&(lt=[],g.set(nt,lt)),w.isWebGLMultipleRenderTargets){const yt=w.texture;if(lt.length!==yt.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let Wt=0,Xt=yt.length;Wt<Xt;Wt++)lt[Wt]=s.COLOR_ATTACHMENT0+Wt;lt.length=yt.length,At=!0}}else lt[0]!==s.COLOR_ATTACHMENT0&&(lt[0]=s.COLOR_ATTACHMENT0,At=!0);else lt[0]!==s.BACK&&(lt[0]=s.BACK,At=!0);At&&(e.isWebGL2?s.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function he(w){return p!==w?(s.useProgram(w),p=w,!0):!1}const Et={[En]:s.FUNC_ADD,[Go]:s.FUNC_SUBTRACT,[ko]:s.FUNC_REVERSE_SUBTRACT};if(n)Et[gr]=s.MIN,Et[_r]=s.MAX;else{const w=t.get("EXT_blend_minmax");w!==null&&(Et[gr]=w.MIN_EXT,Et[_r]=w.MAX_EXT)}const Rt={[Vo]:s.ZERO,[Wo]:s.ONE,[Xo]:s.SRC_COLOR,[Hs]:s.SRC_ALPHA,[Zo]:s.SRC_ALPHA_SATURATE,[jo]:s.DST_COLOR,[Yo]:s.DST_ALPHA,[qo]:s.ONE_MINUS_SRC_COLOR,[Gs]:s.ONE_MINUS_SRC_ALPHA,[Ko]:s.ONE_MINUS_DST_COLOR,[$o]:s.ONE_MINUS_DST_ALPHA,[Jo]:s.CONSTANT_COLOR,[Qo]:s.ONE_MINUS_CONSTANT_COLOR,[tl]:s.CONSTANT_ALPHA,[el]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(w,nt,lt,At,yt,Wt,Xt,Jt,te,qt){if(w===Qe){d===!0&&(Tt(s.BLEND),d=!1);return}if(d===!1&&(It(s.BLEND),d=!0),w!==Ho){if(w!==y||qt!==k){if((M!==En||R!==En)&&(s.blendEquation(s.FUNC_ADD),M=En,R=En),qt)switch(w){case Cn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ne:s.blendFunc(s.ONE,s.ONE);break;case pr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Cn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ne:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}T=null,P=null,A=null,K=null,S.set(0,0,0),b=0,y=w,k=qt}return}yt=yt||nt,Wt=Wt||lt,Xt=Xt||At,(nt!==M||yt!==R)&&(s.blendEquationSeparate(Et[nt],Et[yt]),M=nt,R=yt),(lt!==T||At!==P||Wt!==A||Xt!==K)&&(s.blendFuncSeparate(Rt[lt],Rt[At],Rt[Wt],Rt[Xt]),T=lt,P=At,A=Wt,K=Xt),(Jt.equals(S)===!1||te!==b)&&(s.blendColor(Jt.r,Jt.g,Jt.b,te),S.copy(Jt),b=te),y=w,k=!1}function Kt(w,nt){w.side===Ke?Tt(s.CULL_FACE):It(s.CULL_FACE);let lt=w.side===Se;nt&&(lt=!lt),Nt(lt),w.blending===Cn&&w.transparent===!1?mt(Qe):mt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const At=w.stencilWrite;c.setTest(At),At&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),U(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?It(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(w){V!==w&&(w?s.frontFace(s.CW):s.frontFace(s.CCW),V=w)}function E(w){w!==Fo?(It(s.CULL_FACE),w!==st&&(w===fr?s.cullFace(s.BACK):w===Bo?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),st=w}function v(w){w!==L&&(W&&s.lineWidth(w),L=w)}function U(w,nt,lt){w?(It(s.POLYGON_OFFSET_FILL),(B!==nt||G!==lt)&&(s.polygonOffset(nt,lt),B=nt,G=lt)):Tt(s.POLYGON_OFFSET_FILL)}function Q(w){w?It(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function Z(w){w===void 0&&(w=s.TEXTURE0+q-1),it!==w&&(s.activeTexture(w),it=w)}function tt(w,nt,lt){lt===void 0&&(it===null?lt=s.TEXTURE0+q-1:lt=it);let At=rt[lt];At===void 0&&(At={type:void 0,texture:void 0},rt[lt]=At),(At.type!==w||At.texture!==nt)&&(it!==lt&&(s.activeTexture(lt),it=lt),s.bindTexture(w,nt||Dt[w]),At.type=w,At.texture=nt)}function gt(){const w=rt[it];w!==void 0&&w.type!==void 0&&(s.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function pt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ct(){try{s.texSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function zt(){try{s.texStorage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Lt(){try{s.texStorage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ut(){try{s.texImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function C(w){ht.equals(w)===!1&&(s.scissor(w.x,w.y,w.z,w.w),ht.copy(w))}function et(w){xt.equals(w)===!1&&(s.viewport(w.x,w.y,w.z,w.w),xt.copy(w))}function vt(w,nt){let lt=u.get(nt);lt===void 0&&(lt=new WeakMap,u.set(nt,lt));let At=lt.get(w);At===void 0&&(At=s.getUniformBlockIndex(nt,w.name),lt.set(w,At))}function ft(w,nt){const At=u.get(nt).get(w);h.get(nt)!==At&&(s.uniformBlockBinding(nt,At,w.__bindingPointIndex),h.set(nt,At))}function J(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},it=null,rt={},m={},g=new WeakMap,_=[],p=null,d=!1,y=null,M=null,T=null,P=null,R=null,A=null,K=null,S=new ot(0,0,0),b=0,k=!1,V=null,st=null,L=null,B=null,G=null,ht.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:It,disable:Tt,bindFramebuffer:Vt,drawBuffers:N,useProgram:he,setBlending:mt,setMaterial:Kt,setFlipSided:Nt,setCullFace:E,setLineWidth:v,setPolygonOffset:U,setScissorTest:Q,activeTexture:Z,bindTexture:tt,unbindTexture:gt,compressedTexImage2D:ct,compressedTexImage3D:pt,texImage2D:St,texImage3D:ut,updateUBOMapping:vt,uniformBlockBinding:ft,texStorage2D:zt,texStorage3D:Lt,texSubImage2D:Ct,texSubImage3D:Ot,compressedTexSubImage2D:j,compressedTexSubImage3D:Yt,scissor:C,viewport:et,reset:J}}function Df(s,t,e,n,i,r,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):Ji("canvas")}function _(E,v,U,Q){let Z=1;if((E.width>Q||E.height>Q)&&(Z=Q/Math.max(E.width,E.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const tt=v?$s:Math.floor,gt=tt(Z*E.width),ct=tt(Z*E.height);u===void 0&&(u=g(gt,ct));const pt=U?g(gt,ct):u;return pt.width=gt,pt.height=ct,pt.getContext("2d").drawImage(E,0,0,gt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+gt+"x"+ct+")."),pt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return Yr(E.width)&&Yr(E.height)}function d(E){return a?!1:E.wrapS!==Fe||E.wrapT!==Fe||E.minFilter!==ve&&E.minFilter!==Re}function y(E,v){return E.generateMipmaps&&v&&E.minFilter!==ve&&E.minFilter!==Re}function M(E){s.generateMipmap(E)}function T(E,v,U,Q,Z=!1){if(a===!1)return v;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let tt=v;if(v===s.RED&&(U===s.FLOAT&&(tt=s.R32F),U===s.HALF_FLOAT&&(tt=s.R16F),U===s.UNSIGNED_BYTE&&(tt=s.R8)),v===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(tt=s.R8UI),U===s.UNSIGNED_SHORT&&(tt=s.R16UI),U===s.UNSIGNED_INT&&(tt=s.R32UI),U===s.BYTE&&(tt=s.R8I),U===s.SHORT&&(tt=s.R16I),U===s.INT&&(tt=s.R32I)),v===s.RG&&(U===s.FLOAT&&(tt=s.RG32F),U===s.HALF_FLOAT&&(tt=s.RG16F),U===s.UNSIGNED_BYTE&&(tt=s.RG8)),v===s.RGBA){const gt=Z?$i:$t.getTransfer(Q);U===s.FLOAT&&(tt=s.RGBA32F),U===s.HALF_FLOAT&&(tt=s.RGBA16F),U===s.UNSIGNED_BYTE&&(tt=gt===jt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function P(E,v,U){return y(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==ve&&E.minFilter!==Re?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){return E===ve||E===vr||E===cs?s.NEAREST:s.LINEAR}function A(E){const v=E.target;v.removeEventListener("dispose",A),S(v),v.isVideoTexture&&h.delete(v)}function K(E){const v=E.target;v.removeEventListener("dispose",K),k(v)}function S(E){const v=n.get(E);if(v.__webglInit===void 0)return;const U=E.source,Q=f.get(U);if(Q){const Z=Q[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(E),Object.keys(Q).length===0&&f.delete(U)}n.remove(E)}function b(E){const v=n.get(E);s.deleteTexture(v.__webglTexture);const U=E.source,Q=f.get(U);delete Q[v.__cacheKey],o.memory.textures--}function k(E){const v=E.texture,U=n.get(E),Q=n.get(v);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(U.__webglFramebuffer[Z]))for(let tt=0;tt<U.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(U.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(U.__webglFramebuffer[Z]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[Z])}else{if(Array.isArray(U.__webglFramebuffer))for(let Z=0;Z<U.__webglFramebuffer.length;Z++)s.deleteFramebuffer(U.__webglFramebuffer[Z]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Z=0;Z<U.__webglColorRenderbuffer.length;Z++)U.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[Z]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Z=0,tt=v.length;Z<tt;Z++){const gt=n.get(v[Z]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(v[Z])}n.remove(v),n.remove(E)}let V=0;function st(){V=0}function L(){const E=V;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),V+=1,E}function B(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function G(E,v){const U=n.get(E);if(E.isVideoTexture&&Kt(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(U,E,v);return}}e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+v)}function q(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ht(U,E,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+v)}function W(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ht(U,E,v);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+v)}function X(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){xt(U,E,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+v)}const Y={[Ws]:s.REPEAT,[Fe]:s.CLAMP_TO_EDGE,[Xs]:s.MIRRORED_REPEAT},it={[ve]:s.NEAREST,[vr]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[Re]:s.LINEAR,[dl]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},rt={[bl]:s.NEVER,[Pl]:s.ALWAYS,[Tl]:s.LESS,[ao]:s.LEQUAL,[Al]:s.EQUAL,[Ll]:s.GEQUAL,[wl]:s.GREATER,[Rl]:s.NOTEQUAL};function H(E,v,U){if(U?(s.texParameteri(E,s.TEXTURE_WRAP_S,Y[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Y[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Y[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,it[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,it[v.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==Fe||v.wrapT!==Fe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,R(v.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==ve&&v.minFilter!==Re&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,rt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===ve||v.minFilter!==cs&&v.minFilter!==di||v.type===un&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===tn&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function $(E,v){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const Q=v.source;let Z=f.get(Q);Z===void 0&&(Z={},f.set(Q,Z));const tt=B(v);if(tt!==E.__cacheKey){Z[tt]===void 0&&(Z[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Z[tt].usedTimes++;const gt=Z[E.__cacheKey];gt!==void 0&&(Z[E.__cacheKey].usedTimes--,gt.usedTimes===0&&b(v)),E.__cacheKey=tt,E.__webglTexture=Z[tt].texture}return U}function ht(E,v,U){let Q=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=s.TEXTURE_3D);const Z=$(E,v),tt=v.source;e.bindTexture(Q,E.__webglTexture,s.TEXTURE0+U);const gt=n.get(tt);if(tt.version!==gt.__version||Z===!0){e.activeTexture(s.TEXTURE0+U);const ct=$t.getPrimaries($t.workingColorSpace),pt=v.colorSpace===Pe?null:$t.getPrimaries(v.colorSpace),Ct=v.colorSpace===Pe||ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Ot=d(v)&&p(v.image)===!1;let j=_(v.image,Ot,!1,i.maxTextureSize);j=Nt(v,j);const Yt=p(j)||a,zt=r.convert(v.format,v.colorSpace);let Lt=r.convert(v.type),St=T(v.internalFormat,zt,Lt,v.colorSpace,v.isVideoTexture);H(Q,v,Yt);let ut;const C=v.mipmaps,et=a&&v.isVideoTexture!==!0&&St!==so,vt=gt.__version===void 0||Z===!0,ft=P(v,j,Yt);if(v.isDepthTexture)St=s.DEPTH_COMPONENT,a?v.type===un?St=s.DEPTH_COMPONENT32F:v.type===hn?St=s.DEPTH_COMPONENT24:v.type===bn?St=s.DEPTH24_STENCIL8:St=s.DEPTH_COMPONENT16:v.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Tn&&St===s.DEPTH_COMPONENT&&v.type!==tr&&v.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=hn,Lt=r.convert(v.type)),v.format===Qn&&St===s.DEPTH_COMPONENT&&(St=s.DEPTH_STENCIL,v.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=bn,Lt=r.convert(v.type))),vt&&(et?e.texStorage2D(s.TEXTURE_2D,1,St,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,St,j.width,j.height,0,zt,Lt,null));else if(v.isDataTexture)if(C.length>0&&Yt){et&&vt&&e.texStorage2D(s.TEXTURE_2D,ft,St,C[0].width,C[0].height);for(let J=0,w=C.length;J<w;J++)ut=C[J],et?e.texSubImage2D(s.TEXTURE_2D,J,0,0,ut.width,ut.height,zt,Lt,ut.data):e.texImage2D(s.TEXTURE_2D,J,St,ut.width,ut.height,0,zt,Lt,ut.data);v.generateMipmaps=!1}else et?(vt&&e.texStorage2D(s.TEXTURE_2D,ft,St,j.width,j.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,zt,Lt,j.data)):e.texImage2D(s.TEXTURE_2D,0,St,j.width,j.height,0,zt,Lt,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){et&&vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,St,C[0].width,C[0].height,j.depth);for(let J=0,w=C.length;J<w;J++)ut=C[J],v.format!==Be?zt!==null?et?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ut.width,ut.height,j.depth,zt,ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,St,ut.width,ut.height,j.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ut.width,ut.height,j.depth,zt,Lt,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,St,ut.width,ut.height,j.depth,0,zt,Lt,ut.data)}else{et&&vt&&e.texStorage2D(s.TEXTURE_2D,ft,St,C[0].width,C[0].height);for(let J=0,w=C.length;J<w;J++)ut=C[J],v.format!==Be?zt!==null?et?e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ut.width,ut.height,zt,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,J,St,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?e.texSubImage2D(s.TEXTURE_2D,J,0,0,ut.width,ut.height,zt,Lt,ut.data):e.texImage2D(s.TEXTURE_2D,J,St,ut.width,ut.height,0,zt,Lt,ut.data)}else if(v.isDataArrayTexture)et?(vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,St,j.width,j.height,j.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,zt,Lt,j.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,j.width,j.height,j.depth,0,zt,Lt,j.data);else if(v.isData3DTexture)et?(vt&&e.texStorage3D(s.TEXTURE_3D,ft,St,j.width,j.height,j.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,zt,Lt,j.data)):e.texImage3D(s.TEXTURE_3D,0,St,j.width,j.height,j.depth,0,zt,Lt,j.data);else if(v.isFramebufferTexture){if(vt)if(et)e.texStorage2D(s.TEXTURE_2D,ft,St,j.width,j.height);else{let J=j.width,w=j.height;for(let nt=0;nt<ft;nt++)e.texImage2D(s.TEXTURE_2D,nt,St,J,w,0,zt,Lt,null),J>>=1,w>>=1}}else if(C.length>0&&Yt){et&&vt&&e.texStorage2D(s.TEXTURE_2D,ft,St,C[0].width,C[0].height);for(let J=0,w=C.length;J<w;J++)ut=C[J],et?e.texSubImage2D(s.TEXTURE_2D,J,0,0,zt,Lt,ut):e.texImage2D(s.TEXTURE_2D,J,St,zt,Lt,ut);v.generateMipmaps=!1}else et?(vt&&e.texStorage2D(s.TEXTURE_2D,ft,St,j.width,j.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,zt,Lt,j)):e.texImage2D(s.TEXTURE_2D,0,St,zt,Lt,j);y(v,Yt)&&M(Q),gt.__version=tt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function xt(E,v,U){if(v.image.length!==6)return;const Q=$(E,v),Z=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);const tt=n.get(Z);if(Z.version!==tt.__version||Q===!0){e.activeTexture(s.TEXTURE0+U);const gt=$t.getPrimaries($t.workingColorSpace),ct=v.colorSpace===Pe?null:$t.getPrimaries(v.colorSpace),pt=v.colorSpace===Pe||gt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Ct=v.isCompressedTexture||v.image[0].isCompressedTexture,Ot=v.image[0]&&v.image[0].isDataTexture,j=[];for(let J=0;J<6;J++)!Ct&&!Ot?j[J]=_(v.image[J],!1,!0,i.maxCubemapSize):j[J]=Ot?v.image[J].image:v.image[J],j[J]=Nt(v,j[J]);const Yt=j[0],zt=p(Yt)||a,Lt=r.convert(v.format,v.colorSpace),St=r.convert(v.type),ut=T(v.internalFormat,Lt,St,v.colorSpace),C=a&&v.isVideoTexture!==!0,et=tt.__version===void 0||Q===!0;let vt=P(v,Yt,zt);H(s.TEXTURE_CUBE_MAP,v,zt);let ft;if(Ct){C&&et&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,ut,Yt.width,Yt.height);for(let J=0;J<6;J++){ft=j[J].mipmaps;for(let w=0;w<ft.length;w++){const nt=ft[w];v.format!==Be?Lt!==null?C?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,w,0,0,nt.width,nt.height,Lt,nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,w,ut,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,w,0,0,nt.width,nt.height,Lt,St,nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,w,ut,nt.width,nt.height,0,Lt,St,nt.data)}}}else{ft=v.mipmaps,C&&et&&(ft.length>0&&vt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,ut,j[0].width,j[0].height));for(let J=0;J<6;J++)if(Ot){C?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,j[J].width,j[J].height,Lt,St,j[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ut,j[J].width,j[J].height,0,Lt,St,j[J].data);for(let w=0;w<ft.length;w++){const lt=ft[w].image[J].image;C?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,w+1,0,0,lt.width,lt.height,Lt,St,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,w+1,ut,lt.width,lt.height,0,Lt,St,lt.data)}}else{C?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,St,j[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ut,Lt,St,j[J]);for(let w=0;w<ft.length;w++){const nt=ft[w];C?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,w+1,0,0,Lt,St,nt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,w+1,ut,Lt,St,nt.image[J])}}}y(v,zt)&&M(s.TEXTURE_CUBE_MAP),tt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _t(E,v,U,Q,Z,tt){const gt=r.convert(U.format,U.colorSpace),ct=r.convert(U.type),pt=T(U.internalFormat,gt,ct,U.colorSpace);if(!n.get(v).__hasExternalTextures){const Ot=Math.max(1,v.width>>tt),j=Math.max(1,v.height>>tt);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,tt,pt,Ot,j,v.depth,0,gt,ct,null):e.texImage2D(Z,tt,pt,Ot,j,0,gt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),mt(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,Z,n.get(U).__webglTexture,0,Rt(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,Z,n.get(U).__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(E,v,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let Q=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||mt(v)){const Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===un?Q=s.DEPTH_COMPONENT32F:Z.type===hn&&(Q=s.DEPTH_COMPONENT24));const tt=Rt(v);mt(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,Q,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Q,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const Q=Rt(v);U&&mt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,v.width,v.height):mt(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Z=0;Z<Q.length;Z++){const tt=Q[Z],gt=r.convert(tt.format,tt.colorSpace),ct=r.convert(tt.type),pt=T(tt.internalFormat,gt,ct,tt.colorSpace),Ct=Rt(v);U&&mt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,pt,v.width,v.height):mt(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,pt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,pt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,Z=Rt(v);if(v.depthTexture.format===Tn)mt(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Qn)mt(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Tt(E){const v=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");It(v.__webglFramebuffer,E)}else if(U){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=s.createRenderbuffer(),Dt(v.__webglDepthbuffer[Q],E,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Dt(v.__webglDepthbuffer,E,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(E,v,U){const Q=n.get(E);v!==void 0&&_t(Q.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Tt(E)}function N(E){const v=E.texture,U=n.get(E),Q=n.get(v);E.addEventListener("dispose",K),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=v.version,o.memory.textures++);const Z=E.isWebGLCubeRenderTarget===!0,tt=E.isWebGLMultipleRenderTargets===!0,gt=p(E)||a;if(Z){U.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ct]=[];for(let pt=0;pt<v.mipmaps.length;pt++)U.__webglFramebuffer[ct][pt]=s.createFramebuffer()}else U.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)U.__webglFramebuffer[ct]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(tt)if(i.drawBuffers){const ct=E.texture;for(let pt=0,Ct=ct.length;pt<Ct;pt++){const Ot=n.get(ct[pt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&mt(E)===!1){const ct=tt?v:[v];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pt=0;pt<ct.length;pt++){const Ct=ct[pt];U.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[pt]);const Ot=r.convert(Ct.format,Ct.colorSpace),j=r.convert(Ct.type),Yt=T(Ct.internalFormat,Ot,j,Ct.colorSpace,E.isXRRenderTarget===!0),zt=Rt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,Yt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,U.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),H(s.TEXTURE_CUBE_MAP,v,gt);for(let ct=0;ct<6;ct++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)_t(U.__webglFramebuffer[ct][pt],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else _t(U.__webglFramebuffer[ct],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);y(v,gt)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const ct=E.texture;for(let pt=0,Ct=ct.length;pt<Ct;pt++){const Ot=ct[pt],j=n.get(Ot);e.bindTexture(s.TEXTURE_2D,j.__webglTexture),H(s.TEXTURE_2D,Ot,gt),_t(U.__webglFramebuffer,E,Ot,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),y(Ot,gt)&&M(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ct=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,Q.__webglTexture),H(ct,v,gt),a&&v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)_t(U.__webglFramebuffer[pt],E,v,s.COLOR_ATTACHMENT0,ct,pt);else _t(U.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,ct,0);y(v,gt)&&M(ct),e.unbindTexture()}E.depthBuffer&&Tt(E)}function he(E){const v=p(E)||a,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,Z=U.length;Q<Z;Q++){const tt=U[Q];if(y(tt,v)){const gt=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ct=n.get(tt).__webglTexture;e.bindTexture(gt,ct),M(gt),e.unbindTexture()}}}function Et(E){if(a&&E.samples>0&&mt(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,Q=E.height;let Z=s.COLOR_BUFFER_BIT;const tt=[],gt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(E),pt=E.isWebGLMultipleRenderTargets===!0;if(pt)for(let Ct=0;Ct<v.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Ct=0;Ct<v.length;Ct++){tt.push(s.COLOR_ATTACHMENT0+Ct),E.depthBuffer&&tt.push(gt);const Ot=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ot===!1&&(E.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[Ct]),Ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),pt){const j=n.get(v[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,j,0)}s.blitFramebuffer(0,0,U,Q,0,0,U,Q,Z,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let Ct=0;Ct<v.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,ct.__webglColorRenderbuffer[Ct]);const Ot=n.get(v[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Rt(E){return Math.min(i.maxSamples,E.samples)}function mt(E){const v=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Kt(E){const v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Nt(E,v){const U=E.colorSpace,Q=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===qs||U!==nn&&U!==Pe&&($t.getTransfer(U)===jt?a===!1?t.has("EXT_sRGB")===!0&&Q===Be?(E.format=qs,E.minFilter=Re,E.generateMipmaps=!1):v=lo.sRGBToLinear(v):(Q!==Be||Z!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=L,this.resetTextureUnits=st,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=mt}function If(s,t,e){const n=e.isWebGL2;function i(r,o=Pe){let a;const l=$t.getTransfer(o);if(r===fn)return s.UNSIGNED_BYTE;if(r===Qa)return s.UNSIGNED_SHORT_4_4_4_4;if(r===to)return s.UNSIGNED_SHORT_5_5_5_1;if(r===fl)return s.BYTE;if(r===pl)return s.SHORT;if(r===tr)return s.UNSIGNED_SHORT;if(r===Ja)return s.INT;if(r===hn)return s.UNSIGNED_INT;if(r===un)return s.FLOAT;if(r===tn)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ml)return s.ALPHA;if(r===Be)return s.RGBA;if(r===gl)return s.LUMINANCE;if(r===_l)return s.LUMINANCE_ALPHA;if(r===Tn)return s.DEPTH_COMPONENT;if(r===Qn)return s.DEPTH_STENCIL;if(r===qs)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===vl)return s.RED;if(r===eo)return s.RED_INTEGER;if(r===xl)return s.RG;if(r===no)return s.RG_INTEGER;if(r===io)return s.RGBA_INTEGER;if(r===hs||r===us||r===ds||r===fs)if(l===jt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ds)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xr||r===Mr||r===Sr||r===Er)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===xr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Er)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===so)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yr||r===Cr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yr)return l===jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Cr)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===br||r===Tr||r===Ar||r===wr||r===Rr||r===Lr||r===Pr||r===Dr||r===Ir||r===Ur||r===Nr||r===Or||r===Fr||r===Br)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===br)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tr)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ar)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wr)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rr)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lr)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pr)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dr)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ir)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ur)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nr)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Or)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fr)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Br)return l===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ps||r===zr||r===Hr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ps)return l===jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ml||r===Gr||r===kr||r===Vr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ps)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Gr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Uf extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hi extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nf={type:"move"};class Bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Of extends Rn{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,d=null;const y=[],M=[],T=new bt;let P=null;const R=new Le;R.layers.enable(1),R.viewport=new ue;const A=new Le;A.layers.enable(2),A.viewport=new ue;const K=[R,A],S=new Uf;S.layers.enable(1),S.layers.enable(2);let b=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=y[H];return $===void 0&&($=new Bs,y[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=y[H];return $===void 0&&($=new Bs,y[H]=$),$.getGripSpace()},this.getHand=function(H){let $=y[H];return $===void 0&&($=new Bs,y[H]=$),$.getHandSpace()};function V(H){const $=M.indexOf(H.inputSource);if($===-1)return;const ht=y[$];ht!==void 0&&(ht.update(H.inputSource,H.frame,c||o),ht.dispatchEvent({type:H.type,data:H.inputSource}))}function st(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",st),i.removeEventListener("inputsourceschange",L);for(let H=0;H<y.length;H++){const $=M[H];$!==null&&(M[H]=null,y[H].disconnect($))}b=null,k=null,t.setRenderTarget(p),m=null,f=null,u=null,i=null,d=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",st),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new ze(m.framebufferWidth,m.framebufferHeight,{format:Be,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,ht=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?Qn:Tn,ht=_.stencil?bn:hn);const _t={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(_t),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new ze(f.textureWidth,f.textureHeight,{format:Be,type:fn,depthTexture:new So(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Dt=t.properties.get(d);Dt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(H){for(let $=0;$<H.removed.length;$++){const ht=H.removed[$],xt=M.indexOf(ht);xt>=0&&(M[xt]=null,y[xt].disconnect(ht))}for(let $=0;$<H.added.length;$++){const ht=H.added[$];let xt=M.indexOf(ht);if(xt===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=M.length){M.push(ht),xt=Dt;break}else if(M[Dt]===null){M[Dt]=ht,xt=Dt;break}if(xt===-1)break}const _t=y[xt];_t&&_t.connect(ht)}}const B=new I,G=new I;function q(H,$,ht){B.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(ht.matrixWorld);const xt=B.distanceTo(G),_t=$.projectionMatrix.elements,Dt=ht.projectionMatrix.elements,It=_t[14]/(_t[10]-1),Tt=_t[14]/(_t[10]+1),Vt=(_t[9]+1)/_t[5],N=(_t[9]-1)/_t[5],he=(_t[8]-1)/_t[0],Et=(Dt[8]+1)/Dt[0],Rt=It*he,mt=It*Et,Kt=xt/(-he+Et),Nt=Kt*-he;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Nt),H.translateZ(Kt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=It+Kt,v=Tt+Kt,U=Rt-Nt,Q=mt+(xt-Nt),Z=Vt*Tt/v*E,tt=N*Tt/v*E;H.projectionMatrix.makePerspective(U,Q,Z,tt,E,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;S.near=A.near=R.near=H.near,S.far=A.far=R.far=H.far,(b!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,k=S.far);const $=H.parent,ht=S.cameras;W(S,$);for(let xt=0;xt<ht.length;xt++)W(ht[xt],$);ht.length===2?q(S,R,A):S.projectionMatrix.copy(R.projectionMatrix),X(H,S,$)};function X(H,$,ht){ht===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(ht.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ys*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let Y=null;function it(H,$){if(h=$.getViewerPose(c||o),g=$,h!==null){const ht=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let xt=!1;ht.length!==S.cameras.length&&(S.cameras.length=0,xt=!0);for(let _t=0;_t<ht.length;_t++){const Dt=ht[_t];let It=null;if(m!==null)It=m.getViewport(Dt);else{const Vt=u.getViewSubImage(f,Dt);It=Vt.viewport,_t===0&&(t.setRenderTargetTextures(d,Vt.colorTexture,f.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(d))}let Tt=K[_t];Tt===void 0&&(Tt=new Le,Tt.layers.enable(_t),Tt.viewport=new ue,K[_t]=Tt),Tt.matrix.fromArray(Dt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Dt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(It.x,It.y,It.width,It.height),_t===0&&(S.matrix.copy(Tt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),xt===!0&&S.cameras.push(Tt)}}for(let ht=0;ht<y.length;ht++){const xt=M[ht],_t=y[ht];xt!==null&&_t!==void 0&&_t.update(xt,$,c||o)}Y&&Y(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const rt=new xo;rt.setAnimationLoop(it),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}}function Ff(s,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,mo(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,y,M,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,T)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,y,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Se&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Se&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=M*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Se&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bf(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,M){const T=M.program;n.uniformBlockBinding(y,T)}function c(y,M){let T=i[y.id];T===void 0&&(g(y),T=h(y),i[y.id]=T,y.addEventListener("dispose",p));const P=M.program;n.updateUBOMapping(y,P);const R=t.render.frame;r[y.id]!==R&&(f(y),r[y.id]=R)}function h(y){const M=u();y.__bindingPointIndex=M;const T=s.createBuffer(),P=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,T),T}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=i[y.id],T=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let R=0,A=T.length;R<A;R++){const K=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,b=K.length;S<b;S++){const k=K[S];if(m(k,R,S,P)===!0){const V=k.__offset,st=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let B=0;B<st.length;B++){const G=st[B],q=_(G);typeof G=="number"||typeof G=="boolean"?(k.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,V+L,k.__data)):G.isMatrix3?(k.__data[0]=G.elements[0],k.__data[1]=G.elements[1],k.__data[2]=G.elements[2],k.__data[3]=0,k.__data[4]=G.elements[3],k.__data[5]=G.elements[4],k.__data[6]=G.elements[5],k.__data[7]=0,k.__data[8]=G.elements[6],k.__data[9]=G.elements[7],k.__data[10]=G.elements[8],k.__data[11]=0):(G.toArray(k.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,M,T,P){const R=y.value,A=M+"_"+T;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const K=P[A];if(typeof R=="number"||typeof R=="boolean"){if(K!==R)return P[A]=R,!0}else if(K.equals(R)===!1)return K.copy(R),!0}return!1}function g(y){const M=y.uniforms;let T=0;const P=16;for(let A=0,K=M.length;A<K;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,k=S.length;b<k;b++){const V=S[b],st=Array.isArray(V.value)?V.value:[V.value];for(let L=0,B=st.length;L<B;L++){const G=st[L],q=_(G),W=T%P;W!==0&&P-W<q.boundary&&(T+=P-W),V.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=q.storage}}}const R=T%P;return R>0&&(T+=P-R),y.__size=T,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}class Ao{constructor(t={}){const{canvas:e=Ul(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=le,this._useLegacyLights=!1,this.toneMapping=dn,this.toneMappingExposure=1;const M=this;let T=!1,P=0,R=0,A=null,K=-1,S=null;const b=new ue,k=new ue;let V=null;const st=new ot(0);let L=0,B=e.width,G=e.height,q=1,W=null,X=null;const Y=new ue(0,0,B,G),it=new ue(0,0,B,G);let rt=!1;const H=new vo;let $=!1,ht=!1,xt=null;const _t=new ce,Dt=new bt,It=new I,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return A===null?q:1}let N=n;function he(x,D){for(let F=0;F<x.length;F++){const z=x[F],O=e.getContext(z,D);if(O!==null)return O}return null}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Js}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",w,!1),e.addEventListener("webglcontextcreationerror",nt,!1),N===null){const D=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&D.shift(),N=he(D,x),N===null)throw he(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Et,Rt,mt,Kt,Nt,E,v,U,Q,Z,tt,gt,ct,pt,Ct,Ot,j,Yt,zt,Lt,St,ut,C,et;function vt(){Et=new Yu(N),Rt=new Gu(N,Et,t),Et.init(Rt),ut=new If(N,Et,Rt),mt=new Pf(N,Et,Rt),Kt=new Ku(N),Nt=new _f,E=new Df(N,Et,mt,Nt,Rt,ut,Kt),v=new Vu(M),U=new qu(M),Q=new sc(N,Rt),C=new zu(N,Et,Q,Rt),Z=new $u(N,Q,Kt,C),tt=new td(N,Z,Q,Kt),zt=new Qu(N,Rt,E),Ot=new ku(Nt),gt=new gf(M,v,U,Et,Rt,C,Ot),ct=new Ff(M,Nt),pt=new xf,Ct=new bf(Et,Rt),Yt=new Bu(M,v,U,mt,tt,f,l),j=new Lf(M,tt,Rt),et=new Bf(N,Kt,Rt,mt),Lt=new Hu(N,Et,Kt,Rt),St=new ju(N,Et,Kt,Rt),Kt.programs=gt.programs,M.capabilities=Rt,M.extensions=Et,M.properties=Nt,M.renderLists=pt,M.shadowMap=j,M.state=mt,M.info=Kt}vt();const ft=new Of(M,N);this.xr=ft,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=Et.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Et.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(x){x!==void 0&&(q=x,this.setSize(B,G,!1))},this.getSize=function(x){return x.set(B,G)},this.setSize=function(x,D,F=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=x,G=D,e.width=Math.floor(x*q),e.height=Math.floor(D*q),F===!0&&(e.style.width=x+"px",e.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(B*q,G*q).floor()},this.setDrawingBufferSize=function(x,D,F){B=x,G=D,q=F,e.width=Math.floor(x*F),e.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(b)},this.getViewport=function(x){return x.copy(Y)},this.setViewport=function(x,D,F,z){x.isVector4?Y.set(x.x,x.y,x.z,x.w):Y.set(x,D,F,z),mt.viewport(b.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(x){return x.copy(it)},this.setScissor=function(x,D,F,z){x.isVector4?it.set(x.x,x.y,x.z,x.w):it.set(x,D,F,z),mt.scissor(k.copy(it).multiplyScalar(q).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(x){mt.setScissorTest(rt=x)},this.setOpaqueSort=function(x){W=x},this.setTransparentSort=function(x){X=x},this.getClearColor=function(x){return x.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(x=!0,D=!0,F=!0){let z=0;if(x){let O=!1;if(A!==null){const dt=A.texture.format;O=dt===io||dt===no||dt===eo}if(O){const dt=A.texture.type,Mt=dt===fn||dt===hn||dt===tr||dt===bn||dt===Qa||dt===to,wt=Yt.getClearColor(),Pt=Yt.getClearAlpha(),Ht=wt.r,Ut=wt.g,Ft=wt.b;Mt?(m[0]=Ht,m[1]=Ut,m[2]=Ft,m[3]=Pt,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=Ht,g[1]=Ut,g[2]=Ft,g[3]=Pt,N.clearBufferiv(N.COLOR,0,g))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT),F&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",w,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),pt.dispose(),Ct.dispose(),Nt.dispose(),v.dispose(),U.dispose(),tt.dispose(),C.dispose(),et.dispose(),gt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",te),ft.removeEventListener("sessionend",qt),xt&&(xt.dispose(),xt=null),ne.stop()};function J(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=Kt.autoReset,D=j.enabled,F=j.autoUpdate,z=j.needsUpdate,O=j.type;vt(),Kt.autoReset=x,j.enabled=D,j.autoUpdate=F,j.needsUpdate=z,j.type=O}function nt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function lt(x){const D=x.target;D.removeEventListener("dispose",lt),At(D)}function At(x){yt(x),Nt.remove(x)}function yt(x){const D=Nt.get(x).programs;D!==void 0&&(D.forEach(function(F){gt.releaseProgram(F)}),x.isShaderMaterial&&gt.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,z,O,dt){D===null&&(D=Tt);const Mt=O.isMesh&&O.matrixWorld.determinant()<0,wt=Io(x,D,F,z,O);mt.setMaterial(z,Mt);let Pt=F.index,Ht=1;if(z.wireframe===!0){if(Pt=Z.getWireframeAttribute(F),Pt===void 0)return;Ht=2}const Ut=F.drawRange,Ft=F.attributes.position;let ee=Ut.start*Ht,ye=(Ut.start+Ut.count)*Ht;dt!==null&&(ee=Math.max(ee,dt.start*Ht),ye=Math.min(ye,(dt.start+dt.count)*Ht)),Pt!==null?(ee=Math.max(ee,0),ye=Math.min(ye,Pt.count)):Ft!=null&&(ee=Math.max(ee,0),ye=Math.min(ye,Ft.count));const ae=ye-ee;if(ae<0||ae===1/0)return;C.setup(O,z,wt,F,Pt);let Ve,Zt=Lt;if(Pt!==null&&(Ve=Q.get(Pt),Zt=St,Zt.setIndex(Ve)),O.isMesh)z.wireframe===!0?(mt.setLineWidth(z.wireframeLinewidth*Vt()),Zt.setMode(N.LINES)):Zt.setMode(N.TRIANGLES);else if(O.isLine){let Gt=z.linewidth;Gt===void 0&&(Gt=1),mt.setLineWidth(Gt*Vt()),O.isLineSegments?Zt.setMode(N.LINES):O.isLineLoop?Zt.setMode(N.LINE_LOOP):Zt.setMode(N.LINE_STRIP)}else O.isPoints?Zt.setMode(N.POINTS):O.isSprite&&Zt.setMode(N.TRIANGLES);if(O.isBatchedMesh)Zt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Zt.renderInstances(ee,ae,O.count);else if(F.isInstancedBufferGeometry){const Gt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,rs=Math.min(F.instanceCount,Gt);Zt.renderInstances(ee,ae,rs)}else Zt.render(ee,ae)};function Wt(x,D,F){x.transparent===!0&&x.side===Ke&&x.forceSinglePass===!1?(x.side=Se,x.needsUpdate=!0,xi(x,D,F),x.side=pn,x.needsUpdate=!0,xi(x,D,F),x.side=Ke):xi(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),p=Ct.get(F),p.init(),y.push(p),F.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),x!==F&&x.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(M._useLegacyLights);const z=new Set;return x.traverse(function(O){const dt=O.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){const wt=dt[Mt];Wt(wt,F,O),z.add(wt)}else Wt(dt,F,O),z.add(dt)}),y.pop(),p=null,z},this.compileAsync=function(x,D,F=null){const z=this.compile(x,D,F);return new Promise(O=>{function dt(){if(z.forEach(function(Mt){Nt.get(Mt).currentProgram.isReady()&&z.delete(Mt)}),z.size===0){O(x);return}setTimeout(dt,10)}Et.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Xt=null;function Jt(x){Xt&&Xt(x)}function te(){ne.stop()}function qt(){ne.start()}const ne=new xo;ne.setAnimationLoop(Jt),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(x){Xt=x,ft.setAnimationLoop(x),x===null?ne.stop():ne.start()},ft.addEventListener("sessionstart",te),ft.addEventListener("sessionend",qt),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(D),D=ft.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,D,A),p=Ct.get(x,y.length),p.init(),y.push(p),_t.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(_t),ht=this.localClippingEnabled,$=Ot.init(this.clippingPlanes,ht),_=pt.get(x,d.length),_.init(),d.push(_),Ge(x,D,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(W,X),this.info.render.frame++,$===!0&&Ot.beginShadows();const F=p.state.shadowsArray;if(j.render(F,x,D),$===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(_,x),p.setupLights(M._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let O=0,dt=z.length;O<dt;O++){const Mt=z[O];or(_,x,Mt,Mt.viewport)}}else or(_,x,D);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(M,x,D),C.resetDefaultState(),K=-1,S=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ge(x,D,F,z){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||H.intersectsSprite(x)){z&&It.setFromMatrixPosition(x.matrixWorld).applyMatrix4(_t);const Mt=tt.update(x),wt=x.material;wt.visible&&_.push(x,Mt,wt,F,It.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||H.intersectsObject(x))){const Mt=tt.update(x),wt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),It.copy(x.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),It.copy(Mt.boundingSphere.center)),It.applyMatrix4(x.matrixWorld).applyMatrix4(_t)),Array.isArray(wt)){const Pt=Mt.groups;for(let Ht=0,Ut=Pt.length;Ht<Ut;Ht++){const Ft=Pt[Ht],ee=wt[Ft.materialIndex];ee&&ee.visible&&_.push(x,Mt,ee,F,It.z,Ft)}}else wt.visible&&_.push(x,Mt,wt,F,It.z,null)}}const dt=x.children;for(let Mt=0,wt=dt.length;Mt<wt;Mt++)Ge(dt[Mt],D,F,z)}function or(x,D,F,z){const O=x.opaque,dt=x.transmissive,Mt=x.transparent;p.setupLightsView(F),$===!0&&Ot.setGlobalState(M.clippingPlanes,F),dt.length>0&&Do(O,dt,D,F),z&&mt.viewport(b.copy(z)),O.length>0&&vi(O,D,F),dt.length>0&&vi(dt,D,F),Mt.length>0&&vi(Mt,D,F),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Do(x,D,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const dt=Rt.isWebGL2;xt===null&&(xt=new ze(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?tn:fn,minFilter:di,samples:dt?4:0})),M.getDrawingBufferSize(Dt),dt?xt.setSize(Dt.x,Dt.y):xt.setSize($s(Dt.x),$s(Dt.y));const Mt=M.getRenderTarget();M.setRenderTarget(xt),M.getClearColor(st),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const wt=M.toneMapping;M.toneMapping=dn,vi(x,F,z),E.updateMultisampleRenderTarget(xt),E.updateRenderTargetMipmap(xt);let Pt=!1;for(let Ht=0,Ut=D.length;Ht<Ut;Ht++){const Ft=D[Ht],ee=Ft.object,ye=Ft.geometry,ae=Ft.material,Ve=Ft.group;if(ae.side===Ke&&ee.layers.test(z.layers)){const Zt=ae.side;ae.side=Se,ae.needsUpdate=!0,lr(ee,F,z,ye,ae,Ve),ae.side=Zt,ae.needsUpdate=!0,Pt=!0}}Pt===!0&&(E.updateMultisampleRenderTarget(xt),E.updateRenderTargetMipmap(xt)),M.setRenderTarget(Mt),M.setClearColor(st,L),M.toneMapping=wt}function vi(x,D,F){const z=D.isScene===!0?D.overrideMaterial:null;for(let O=0,dt=x.length;O<dt;O++){const Mt=x[O],wt=Mt.object,Pt=Mt.geometry,Ht=z===null?Mt.material:z,Ut=Mt.group;wt.layers.test(F.layers)&&lr(wt,D,F,Pt,Ht,Ut)}}function lr(x,D,F,z,O,dt){x.onBeforeRender(M,D,F,z,O,dt),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(M,D,F,z,x,dt),O.transparent===!0&&O.side===Ke&&O.forceSinglePass===!1?(O.side=Se,O.needsUpdate=!0,M.renderBufferDirect(F,D,z,O,x,dt),O.side=pn,O.needsUpdate=!0,M.renderBufferDirect(F,D,z,O,x,dt),O.side=Ke):M.renderBufferDirect(F,D,z,O,x,dt),x.onAfterRender(M,D,F,z,O,dt)}function xi(x,D,F){D.isScene!==!0&&(D=Tt);const z=Nt.get(x),O=p.state.lights,dt=p.state.shadowsArray,Mt=O.state.version,wt=gt.getParameters(x,O.state,dt,D,F),Pt=gt.getProgramCacheKey(wt);let Ht=z.programs;z.environment=x.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(x.isMeshStandardMaterial?U:v).get(x.envMap||z.environment),Ht===void 0&&(x.addEventListener("dispose",lt),Ht=new Map,z.programs=Ht);let Ut=Ht.get(Pt);if(Ut!==void 0){if(z.currentProgram===Ut&&z.lightsStateVersion===Mt)return hr(x,wt),Ut}else wt.uniforms=gt.getUniforms(x),x.onBuild(F,wt,M),x.onBeforeCompile(wt,M),Ut=gt.acquireProgram(wt,Pt),Ht.set(Pt,Ut),z.uniforms=wt.uniforms;const Ft=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ft.clippingPlanes=Ot.uniform),hr(x,wt),z.needsLights=No(x),z.lightsStateVersion=Mt,z.needsLights&&(Ft.ambientLightColor.value=O.state.ambient,Ft.lightProbe.value=O.state.probe,Ft.directionalLights.value=O.state.directional,Ft.directionalLightShadows.value=O.state.directionalShadow,Ft.spotLights.value=O.state.spot,Ft.spotLightShadows.value=O.state.spotShadow,Ft.rectAreaLights.value=O.state.rectArea,Ft.ltc_1.value=O.state.rectAreaLTC1,Ft.ltc_2.value=O.state.rectAreaLTC2,Ft.pointLights.value=O.state.point,Ft.pointLightShadows.value=O.state.pointShadow,Ft.hemisphereLights.value=O.state.hemi,Ft.directionalShadowMap.value=O.state.directionalShadowMap,Ft.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ft.spotShadowMap.value=O.state.spotShadowMap,Ft.spotLightMatrix.value=O.state.spotLightMatrix,Ft.spotLightMap.value=O.state.spotLightMap,Ft.pointShadowMap.value=O.state.pointShadowMap,Ft.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ut,z.uniformsList=null,Ut}function cr(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=qi.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function hr(x,D){const F=Nt.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Io(x,D,F,z,O){D.isScene!==!0&&(D=Tt),E.resetTextureUnits();const dt=D.fog,Mt=z.isMeshStandardMaterial?D.environment:null,wt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:nn,Pt=(z.isMeshStandardMaterial?U:v).get(z.envMap||Mt),Ht=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ut=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ft=!!F.morphAttributes.position,ee=!!F.morphAttributes.normal,ye=!!F.morphAttributes.color;let ae=dn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ae=M.toneMapping);const Ve=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Zt=Ve!==void 0?Ve.length:0,Gt=Nt.get(z),rs=p.state.lights;if($===!0&&(ht===!0||x!==S)){const Ae=x===S&&z.id===K;Ot.setState(z,x,Ae)}let Qt=!1;z.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==rs.state.version||Gt.outputColorSpace!==wt||O.isBatchedMesh&&Gt.batching===!1||!O.isBatchedMesh&&Gt.batching===!0||O.isInstancedMesh&&Gt.instancing===!1||!O.isInstancedMesh&&Gt.instancing===!0||O.isSkinnedMesh&&Gt.skinning===!1||!O.isSkinnedMesh&&Gt.skinning===!0||O.isInstancedMesh&&Gt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Gt.instancingColor===!1&&O.instanceColor!==null||Gt.envMap!==Pt||z.fog===!0&&Gt.fog!==dt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ot.numPlanes||Gt.numIntersection!==Ot.numIntersection)||Gt.vertexAlphas!==Ht||Gt.vertexTangents!==Ut||Gt.morphTargets!==Ft||Gt.morphNormals!==ee||Gt.morphColors!==ye||Gt.toneMapping!==ae||Rt.isWebGL2===!0&&Gt.morphTargetsCount!==Zt)&&(Qt=!0):(Qt=!0,Gt.__version=z.version);let mn=Gt.currentProgram;Qt===!0&&(mn=xi(z,D,O));let ur=!1,si=!1,as=!1;const de=mn.getUniforms(),gn=Gt.uniforms;if(mt.useProgram(mn.program)&&(ur=!0,si=!0,as=!0),z.id!==K&&(K=z.id,si=!0),ur||S!==x){de.setValue(N,"projectionMatrix",x.projectionMatrix),de.setValue(N,"viewMatrix",x.matrixWorldInverse);const Ae=de.map.cameraPosition;Ae!==void 0&&Ae.setValue(N,It.setFromMatrixPosition(x.matrixWorld)),Rt.logarithmicDepthBuffer&&de.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&de.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,si=!0,as=!0)}if(O.isSkinnedMesh){de.setOptional(N,O,"bindMatrix"),de.setOptional(N,O,"bindMatrixInverse");const Ae=O.skeleton;Ae&&(Rt.floatVertexTextures?(Ae.boneTexture===null&&Ae.computeBoneTexture(),de.setValue(N,"boneTexture",Ae.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(de.setOptional(N,O,"batchingTexture"),de.setValue(N,"batchingTexture",O._matricesTexture,E));const os=F.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0&&Rt.isWebGL2===!0)&&zt.update(O,F,mn),(si||Gt.receiveShadow!==O.receiveShadow)&&(Gt.receiveShadow=O.receiveShadow,de.setValue(N,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(gn.envMap.value=Pt,gn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),si&&(de.setValue(N,"toneMappingExposure",M.toneMappingExposure),Gt.needsLights&&Uo(gn,as),dt&&z.fog===!0&&ct.refreshFogUniforms(gn,dt),ct.refreshMaterialUniforms(gn,z,q,G,xt),qi.upload(N,cr(Gt),gn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qi.upload(N,cr(Gt),gn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&de.setValue(N,"center",O.center),de.setValue(N,"modelViewMatrix",O.modelViewMatrix),de.setValue(N,"normalMatrix",O.normalMatrix),de.setValue(N,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ae=z.uniformsGroups;for(let ls=0,Oo=Ae.length;ls<Oo;ls++)if(Rt.isWebGL2){const dr=Ae[ls];et.update(dr,mn),et.bind(dr,mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mn}function Uo(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function No(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,D,F){Nt.get(x.texture).__webglTexture=D,Nt.get(x.depthTexture).__webglTexture=F;const z=Nt.get(x);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,D){const F=Nt.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,F=0){A=x,P=D,R=F;let z=!0,O=null,dt=!1,Mt=!1;if(x){const Pt=Nt.get(x);Pt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):Pt.__webglFramebuffer===void 0?E.setupRenderTarget(x):Pt.__hasExternalTextures&&E.rebindTextures(x,Nt.get(x.texture).__webglTexture,Nt.get(x.depthTexture).__webglTexture);const Ht=x.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Mt=!0);const Ut=Nt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ut[D])?O=Ut[D][F]:O=Ut[D],dt=!0):Rt.isWebGL2&&x.samples>0&&E.useMultisampledRTT(x)===!1?O=Nt.get(x).__webglMultisampledFramebuffer:Array.isArray(Ut)?O=Ut[F]:O=Ut,b.copy(x.viewport),k.copy(x.scissor),V=x.scissorTest}else b.copy(Y).multiplyScalar(q).floor(),k.copy(it).multiplyScalar(q).floor(),V=rt;if(mt.bindFramebuffer(N.FRAMEBUFFER,O)&&Rt.drawBuffers&&z&&mt.drawBuffers(x,O),mt.viewport(b),mt.scissor(k),mt.setScissorTest(V),dt){const Pt=Nt.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Pt.__webglTexture,F)}else if(Mt){const Pt=Nt.get(x.texture),Ht=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.__webglTexture,F||0,Ht)}K=-1},this.readRenderTargetPixels=function(x,D,F,z,O,dt,Mt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Nt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){mt.bindFramebuffer(N.FRAMEBUFFER,wt);try{const Pt=x.texture,Ht=Pt.format,Ut=Pt.type;if(Ht!==Be&&ut.convert(Ht)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=Ut===tn&&(Et.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Ut!==fn&&ut.convert(Ut)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===un&&(Rt.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-z&&F>=0&&F<=x.height-O&&N.readPixels(D,F,z,O,ut.convert(Ht),ut.convert(Ut),dt)}finally{const Pt=A!==null?Nt.get(A).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(x,D,F=0){const z=Math.pow(2,-F),O=Math.floor(D.image.width*z),dt=Math.floor(D.image.height*z);E.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,F,0,0,x.x,x.y,O,dt),mt.unbindTexture()},this.copyTextureToTexture=function(x,D,F,z=0){const O=D.image.width,dt=D.image.height,Mt=ut.convert(F.format),wt=ut.convert(F.type);E.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,x.x,x.y,O,dt,Mt,wt,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,x.x,x.y,D.mipmaps[0].width,D.mipmaps[0].height,Mt,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,x.x,x.y,Mt,wt,D.image),z===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(x,D,F,z,O=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=x.max.x-x.min.x+1,Mt=x.max.y-x.min.y+1,wt=x.max.z-x.min.z+1,Pt=ut.convert(z.format),Ht=ut.convert(z.type);let Ut;if(z.isData3DTexture)E.setTexture3D(z,0),Ut=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)E.setTexture2DArray(z,0),Ut=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Ft=N.getParameter(N.UNPACK_ROW_LENGTH),ee=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ye=N.getParameter(N.UNPACK_SKIP_PIXELS),ae=N.getParameter(N.UNPACK_SKIP_ROWS),Ve=N.getParameter(N.UNPACK_SKIP_IMAGES),Zt=F.isCompressedTexture?F.mipmaps[O]:F.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Zt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,x.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,x.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?N.texSubImage3D(Ut,O,D.x,D.y,D.z,dt,Mt,wt,Pt,Ht,Zt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ut,O,D.x,D.y,D.z,dt,Mt,wt,Pt,Zt.data)):N.texSubImage3D(Ut,O,D.x,D.y,D.z,dt,Mt,wt,Pt,Ht,Zt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ee),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,ae),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve),O===0&&z.generateMipmaps&&N.generateMipmap(Ut),mt.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),mt.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,mt.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===er?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===ts?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===le?An:ro}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===An?le:nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class zf extends Ao{}zf.prototype.isWebGL1Renderer=!0;class Hf extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Gf extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Da=new ce,Ks=new ns,ki=new es,Vi=new I;class wo extends Ee{constructor(t=new He,e=new Gf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ki.copy(n.boundingSphere),ki.applyMatrix4(i),ki.radius+=r,t.ray.intersectsSphere(ki)===!1)return;Da.copy(i).invert(),Ks.copy(t.ray).applyMatrix4(Da);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Vi.fromBufferAttribute(u,p),Ia(Vi,p,l,i,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Vi.fromBufferAttribute(u,g),Ia(Vi,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ia(s,t,e,n,i,r,o){const a=Ks.distanceSqToPoint(s);if(a<e){const l=new I;Ks.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class kf extends me{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ua(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ua();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ua(){return(typeof performance>"u"?Date:performance).now()}class Wf{constructor(t,e,n=0,i=1/0){this.ray=new ns(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Zs(t,this,n,e),n.sort(Na),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Zs(t[i],this,n,e);return n.sort(Na),n}}function Na(s,t){return s.distance-t.distance}function Zs(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Zs(i[r],t,e,!0)}}class Oa{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);const Fa={type:"change"},zs={type:"start"},Ba={type:"end"},Wi=new ns,za=new cn,Xf=Math.cos(70*Il.DEG2RAD);class qf extends Rn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.DOLLY,RIGHT:Ln.PAN},this.touches={ONE:Pn.ROTATE,TWO:Pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Ct),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ct),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Fa),n.update(),r=i.NONE},this.update=function(){const C=new I,et=new wn().setFromUnitVectors(t.up,new I(0,1,0)),vt=et.clone().invert(),ft=new I,J=new wn,w=new I,nt=2*Math.PI;return function(At=null){const yt=n.object.position;C.copy(yt).sub(n.target),C.applyQuaternion(et),a.setFromVector3(C),n.autoRotate&&r===i.NONE&&V(b(At)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Wt=n.minAzimuthAngle,Xt=n.maxAzimuthAngle;isFinite(Wt)&&isFinite(Xt)&&(Wt<-Math.PI?Wt+=nt:Wt>Math.PI&&(Wt-=nt),Xt<-Math.PI?Xt+=nt:Xt>Math.PI&&(Xt-=nt),Wt<=Xt?a.theta=Math.max(Wt,Math.min(Xt,a.theta)):a.theta=a.theta>(Wt+Xt)/2?Math.max(Wt,a.theta):Math.min(Xt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*c),C.setFromSpherical(a),C.applyQuaternion(vt),yt.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Jt=!1;if(n.zoomToCursor&&R){let te=null;if(n.object.isPerspectiveCamera){const qt=C.length();te=Y(qt*c);const ne=qt-te;n.object.position.addScaledVector(T,ne),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const qt=new I(P.x,P.y,0);qt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Jt=!0;const ne=new I(P.x,P.y,0);ne.unproject(n.object),n.object.position.sub(ne).add(qt),n.object.updateMatrixWorld(),te=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;te!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(te).add(n.object.position):(Wi.origin.copy(n.object.position),Wi.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Wi.direction))<Xf?t.lookAt(n.target):(za.setFromNormalAndCoplanarPoint(n.object.up,n.target),Wi.intersectPlane(za,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Jt=!0);return c=1,R=!1,Jt||ft.distanceToSquared(n.object.position)>o||8*(1-J.dot(n.object.quaternion))>o||w.distanceToSquared(n.target)>0?(n.dispatchEvent(Fa),ft.copy(n.object.position),J.copy(n.object.quaternion),w.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Yt),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ct),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Oa,l=new Oa;let c=1;const h=new I,u=new bt,f=new bt,m=new bt,g=new bt,_=new bt,p=new bt,d=new bt,y=new bt,M=new bt,T=new I,P=new bt;let R=!1;const A=[],K={};let S=!1;function b(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function k(C){const et=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*et)}function V(C){l.theta-=C}function st(C){l.phi-=C}const L=function(){const C=new I;return function(vt,ft){C.setFromMatrixColumn(ft,0),C.multiplyScalar(-vt),h.add(C)}}(),B=function(){const C=new I;return function(vt,ft){n.screenSpacePanning===!0?C.setFromMatrixColumn(ft,1):(C.setFromMatrixColumn(ft,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(vt),h.add(C)}}(),G=function(){const C=new I;return function(vt,ft){const J=n.domElement;if(n.object.isPerspectiveCamera){const w=n.object.position;C.copy(w).sub(n.target);let nt=C.length();nt*=Math.tan(n.object.fov/2*Math.PI/180),L(2*vt*nt/J.clientHeight,n.object.matrix),B(2*ft*nt/J.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(vt*(n.object.right-n.object.left)/n.object.zoom/J.clientWidth,n.object.matrix),B(ft*(n.object.top-n.object.bottom)/n.object.zoom/J.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(C,et){if(!n.zoomToCursor)return;R=!0;const vt=n.domElement.getBoundingClientRect(),ft=C-vt.left,J=et-vt.top,w=vt.width,nt=vt.height;P.x=ft/w*2-1,P.y=-(J/nt)*2+1,T.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function it(C){u.set(C.clientX,C.clientY)}function rt(C){X(C.clientX,C.clientX),d.set(C.clientX,C.clientY)}function H(C){g.set(C.clientX,C.clientY)}function $(C){f.set(C.clientX,C.clientY),m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const et=n.domElement;V(2*Math.PI*m.x/et.clientHeight),st(2*Math.PI*m.y/et.clientHeight),u.copy(f),n.update()}function ht(C){y.set(C.clientX,C.clientY),M.subVectors(y,d),M.y>0?q(k(M.y)):M.y<0&&W(k(M.y)),d.copy(y),n.update()}function xt(C){_.set(C.clientX,C.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),G(p.x,p.y),g.copy(_),n.update()}function _t(C){X(C.clientX,C.clientY),C.deltaY<0?W(k(C.deltaY)):C.deltaY>0&&q(k(C.deltaY)),n.update()}function Dt(C){let et=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?st(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),et=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?st(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),et=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),et=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),et=!0;break}et&&(C.preventDefault(),n.update())}function It(C){if(A.length===1)u.set(C.pageX,C.pageY);else{const et=ut(C),vt=.5*(C.pageX+et.x),ft=.5*(C.pageY+et.y);u.set(vt,ft)}}function Tt(C){if(A.length===1)g.set(C.pageX,C.pageY);else{const et=ut(C),vt=.5*(C.pageX+et.x),ft=.5*(C.pageY+et.y);g.set(vt,ft)}}function Vt(C){const et=ut(C),vt=C.pageX-et.x,ft=C.pageY-et.y,J=Math.sqrt(vt*vt+ft*ft);d.set(0,J)}function N(C){n.enableZoom&&Vt(C),n.enablePan&&Tt(C)}function he(C){n.enableZoom&&Vt(C),n.enableRotate&&It(C)}function Et(C){if(A.length==1)f.set(C.pageX,C.pageY);else{const vt=ut(C),ft=.5*(C.pageX+vt.x),J=.5*(C.pageY+vt.y);f.set(ft,J)}m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const et=n.domElement;V(2*Math.PI*m.x/et.clientHeight),st(2*Math.PI*m.y/et.clientHeight),u.copy(f)}function Rt(C){if(A.length===1)_.set(C.pageX,C.pageY);else{const et=ut(C),vt=.5*(C.pageX+et.x),ft=.5*(C.pageY+et.y);_.set(vt,ft)}p.subVectors(_,g).multiplyScalar(n.panSpeed),G(p.x,p.y),g.copy(_)}function mt(C){const et=ut(C),vt=C.pageX-et.x,ft=C.pageY-et.y,J=Math.sqrt(vt*vt+ft*ft);y.set(0,J),M.set(0,Math.pow(y.y/d.y,n.zoomSpeed)),q(M.y),d.copy(y);const w=(C.pageX+et.x)*.5,nt=(C.pageY+et.y)*.5;X(w,nt)}function Kt(C){n.enableZoom&&mt(C),n.enablePan&&Rt(C)}function Nt(C){n.enableZoom&&mt(C),n.enableRotate&&Et(C)}function E(C){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",v),n.domElement.addEventListener("pointerup",U)),zt(C),C.pointerType==="touch"?Ot(C):Q(C))}function v(C){n.enabled!==!1&&(C.pointerType==="touch"?j(C):Z(C))}function U(C){Lt(C),A.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",U)),n.dispatchEvent(Ba),r=i.NONE}function Q(C){let et;switch(C.button){case 0:et=n.mouseButtons.LEFT;break;case 1:et=n.mouseButtons.MIDDLE;break;case 2:et=n.mouseButtons.RIGHT;break;default:et=-1}switch(et){case Ln.DOLLY:if(n.enableZoom===!1)return;rt(C),r=i.DOLLY;break;case Ln.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;H(C),r=i.PAN}else{if(n.enableRotate===!1)return;it(C),r=i.ROTATE}break;case Ln.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;it(C),r=i.ROTATE}else{if(n.enablePan===!1)return;H(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(zs)}function Z(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(C);break;case i.DOLLY:if(n.enableZoom===!1)return;ht(C);break;case i.PAN:if(n.enablePan===!1)return;xt(C);break}}function tt(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(zs),_t(gt(C)),n.dispatchEvent(Ba))}function gt(C){const et=C.deltaMode,vt={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(et){case 1:vt.deltaY*=16;break;case 2:vt.deltaY*=100;break}return C.ctrlKey&&!S&&(vt.deltaY*=10),vt}function ct(C){C.key==="Control"&&(S=!0,document.addEventListener("keyup",pt,{passive:!0,capture:!0}))}function pt(C){C.key==="Control"&&(S=!1,document.removeEventListener("keyup",pt,{passive:!0,capture:!0}))}function Ct(C){n.enabled===!1||n.enablePan===!1||Dt(C)}function Ot(C){switch(St(C),A.length){case 1:switch(n.touches.ONE){case Pn.ROTATE:if(n.enableRotate===!1)return;It(C),r=i.TOUCH_ROTATE;break;case Pn.PAN:if(n.enablePan===!1)return;Tt(C),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Pn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(C),r=i.TOUCH_DOLLY_PAN;break;case Pn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(C),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(zs)}function j(C){switch(St(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Et(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Rt(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Kt(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Nt(C),n.update();break;default:r=i.NONE}}function Yt(C){n.enabled!==!1&&C.preventDefault()}function zt(C){A.push(C.pointerId)}function Lt(C){delete K[C.pointerId];for(let et=0;et<A.length;et++)if(A[et]==C.pointerId){A.splice(et,1);return}}function St(C){let et=K[C.pointerId];et===void 0&&(et=new bt,K[C.pointerId]=et),et.set(C.pageX,C.pageY)}function ut(C){const et=C.pointerId===A[0]?A[1]:A[0];return K[et]}n.domElement.addEventListener("contextmenu",Yt),n.domElement.addEventListener("pointerdown",E),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",tt,{passive:!1}),document.addEventListener("keydown",ct,{passive:!0,capture:!0}),this.update()}}const Ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ii{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Yf=new Mo(-1,1,1,-1,0,1);class $f extends He{constructor(){super(),this.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new en([0,2,0,0,2,0],2))}}const jf=new $f;class ar{constructor(t){this._mesh=new Je(jf,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Yf)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Lo extends ii{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fi.clone(t.uniforms),this.material=new me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ar(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ha extends ii{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Kf extends ii{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Zf{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lo(Ro),this.copyPass.material.blending=Qe,this.clock=new Vf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ha!==void 0&&(o instanceof Ha?n=!0:o instanceof Kf&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jf extends ii{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Qf={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ei extends ii{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ze(r,o,{type:tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new ze(r,o,{type:tn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new ze(r,o,{type:tn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const a=Qf;this.highPassUniforms=fi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new me({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new bt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ro;this.copyUniforms=fi.clone(h.uniforms),this.blendMaterial=new me({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ne,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new ir,this.fsQuad=new ar(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ei.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ei.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ei.BlurDirectionX=new bt(1,0);ei.BlurDirectionY=new bt(0,1);const tp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ep extends ii{constructor(){super();const t=tp;this.uniforms=fi.clone(t.uniforms),this.material=new kf({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ar(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ya?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$a?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ka&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class np{constructor(t){this.canvas=t,this.width=window.innerWidth,this.height=window.innerHeight,this.bloomStrength=.8,this.bloomRadius=.4,this.bloomThreshold=.4,this.rotationSpeed=.05,this.autoRotate=!0,this.exposure=1,this.frameCount=0,this.lastTime=performance.now(),this.fps=60,this.init()}init(){this.scene=new Hf,this.scene.background=new ot(517),this.camera=new Le(50,this.width/this.height,.1,3e3),this.camera.position.set(0,40,120),this.renderer=new Ao({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Qs,this.renderer.toneMappingExposure=this.exposure,this.renderer.outputColorSpace=le,this.controls=new qf(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.03,this.controls.minDistance=30,this.controls.maxDistance=800,this.controls.autoRotate=this.autoRotate,this.controls.autoRotateSpeed=this.rotationSpeed,this.controls.enablePan=!0,this.controls.panSpeed=.5,this.controls.rotateSpeed=.5,this.controls.zoomSpeed=.8,this.setupPostProcessing(),window.addEventListener("resize",()=>this.onResize())}setupPostProcessing(){this.composer=new Zf(this.renderer);const t=new Jf(this.scene,this.camera);this.composer.addPass(t),this.bloomPass=new ei(new bt(this.width,this.height),this.bloomStrength,this.bloomRadius,this.bloomThreshold),this.composer.addPass(this.bloomPass);const e={uniforms:{tDiffuse:{value:null},time:{value:0},vignetteIntensity:{value:.4},vignetteSmoothness:{value:.5},grainIntensity:{value:.03},saturation:{value:1.1},contrast:{value:1.05}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform sampler2D tDiffuse;
                uniform float time;
                uniform float vignetteIntensity;
                uniform float vignetteSmoothness;
                uniform float grainIntensity;
                uniform float saturation;
                uniform float contrast;

                varying vec2 vUv;

                // Film grain noise
                float random(vec2 co) {
                    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
                }

                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);

                    // Vignette
                    vec2 center = vUv - 0.5;
                    float dist = length(center);
                    float vignette = 1.0 - smoothstep(vignetteSmoothness, vignetteSmoothness + vignetteIntensity, dist);
                    color.rgb *= vignette;

                    // Subtle film grain
                    float grain = random(vUv + fract(time * 0.01)) * grainIntensity;
                    color.rgb += grain - grainIntensity * 0.5;

                    // Saturation adjustment
                    float luminance = dot(color.rgb, vec3(0.299, 0.587, 0.114));
                    color.rgb = mix(vec3(luminance), color.rgb, saturation);

                    // Contrast adjustment
                    color.rgb = (color.rgb - 0.5) * contrast + 0.5;

                    // Slight warm tint for cinematic look
                    color.r *= 1.02;
                    color.b *= 0.98;

                    gl_FragColor = color;
                }
            `};this.cinematicPass=new Lo(e),this.composer.addPass(this.cinematicPass);const n=new ep;this.composer.addPass(n)}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.composer.setSize(this.width,this.height),this.bloomPass.resolution.set(this.width,this.height)}setBloomStrength(t){this.bloomStrength=t,this.bloomPass.strength=t}setBloomRadius(t){this.bloomRadius=t,this.bloomPass.radius=t}setBloomThreshold(t){this.bloomThreshold=t,this.bloomPass.threshold=t}setRotationSpeed(t){this.rotationSpeed=t,this.controls.autoRotateSpeed=t}setAutoRotate(t){this.autoRotate=t,this.controls.autoRotate=t}setExposure(t){this.exposure=t,this.renderer.toneMappingExposure=t}setVignetteIntensity(t){this.cinematicPass&&(this.cinematicPass.uniforms.vignetteIntensity.value=t)}add(t){this.scene.add(t)}remove(t){this.scene.remove(t)}render(){this.controls.update(),this.cinematicPass&&(this.cinematicPass.uniforms.time.value=performance.now()*.001),this.composer.render(),this.frameCount++;const t=performance.now();t-this.lastTime>=1e3&&(this.fps=Math.round(this.frameCount*1e3/(t-this.lastTime)),this.frameCount=0,this.lastTime=t)}getFPS(){return this.fps}getCamera(){return this.camera}getScene(){return this.scene}getControls(){return this.controls}dispose(){this.controls.dispose(),this.renderer.dispose(),this.composer.dispose()}}class ip{constructor(){this.geometry=null,this.material=null,this.points=null,this.molecules=[],this.basePointSize=2}create(t,e){this.molecules=t;const n=t.length;this.geometry=new He;const i=new Float32Array(n*3),r=new Float32Array(n*3),o=new Float32Array(n);return t.forEach((a,l)=>{var f;i[l*3]=a.x,i[l*3+1]=a.y,i[l*3+2]=a.z;const c=e(a);r[l*3]=c.r,r[l*3+1]=c.g,r[l*3+2]=c.b;const h=((f=a.properties)==null?void 0:f.mw)||300,u=Math.max(.5,Math.min(2.5,h/250));o[l]=u}),this.geometry.setAttribute("position",new ge(i,3)),this.geometry.setAttribute("color",new ge(r,3)),this.geometry.setAttribute("size",new ge(o,1)),this.material=new me({uniforms:{pointSize:{value:this.basePointSize},pixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
                attribute float size;
                varying vec3 vColor;
                varying float vSize;
                uniform float pointSize;
                uniform float pixelRatio;

                void main() {
                    vColor = color;
                    vSize = size;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * pointSize * pixelRatio * (300.0 / -mvPosition.z);
                    gl_PointSize = clamp(gl_PointSize, 2.0, 50.0);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,fragmentShader:`
                varying vec3 vColor;
                varying float vSize;

                void main() {
                    vec2 center = gl_PointCoord - vec2(0.5);
                    float dist = length(center);

                    // Discard outside circle
                    if (dist > 0.5) discard;

                    // Nebula-like soft glow with bright core
                    float core = 1.0 - smoothstep(0.0, 0.15, dist);
                    float glow = 1.0 - smoothstep(0.0, 0.5, dist);

                    // Combine core and glow
                    float alpha = core * 0.9 + glow * 0.6;
                    alpha = pow(alpha, 1.2);

                    // Brighter, more saturated center
                    float brightness = 1.0 + core * 1.5;
                    vec3 finalColor = vColor * brightness;

                    // Add slight white core for star-like appearance
                    finalColor = mix(finalColor, vec3(1.0), core * 0.3);

                    gl_FragColor = vec4(finalColor, alpha);
                }
            `,transparent:!0,vertexColors:!0,blending:Ne,depthWrite:!1}),this.points=new wo(this.geometry,this.material),this.points}updateColors(t){if(!this.geometry||!this.molecules.length)return;const e=this.geometry.attributes.color.array;this.molecules.forEach((n,i)=>{const r=t(n);e[i*3]=r.r,e[i*3+1]=r.g,e[i*3+2]=r.b}),this.geometry.attributes.color.needsUpdate=!0}setPointSize(t){this.basePointSize=t,this.material&&(this.material.uniforms.pointSize.value=t)}getMolecule(t){return this.molecules[t]}getPosition(t){if(!this.geometry)return null;const e=this.geometry.attributes.position.array;return new I(e[t*3],e[t*3+1],e[t*3+2])}getPoints(){return this.points}getCount(){return this.molecules.length}setColors(t){if(!this.geometry||!t.length)return;const e=this.geometry.attributes.color.array;t.forEach((n,i)=>{e[i*3]=n.r,e[i*3+1]=n.g,e[i*3+2]=n.b}),this.geometry.attributes.color.needsUpdate=!0}setSizes(t){if(!this.geometry||!t.length)return;const e=this.geometry.attributes.size.array;t.forEach((n,i)=>{e[i]=n}),this.geometry.attributes.size.needsUpdate=!0}pulseEffect(t){if(!this.geometry||t<0||t>=this.molecules.length)return;const e=this.geometry.attributes.size.array,n=e[t];(()=>{const r=performance.now(),o=1e3,a=()=>{const c=(performance.now()-r)/o;if(c<1){const h=1+Math.sin(c*Math.PI*4)*2*(1-c);e[t]=n*h,this.geometry.attributes.size.needsUpdate=!0,requestAnimationFrame(a)}else e[t]=n,this.geometry.attributes.size.needsUpdate=!0};a()})()}dispose(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose()}}class Ga{constructor(t={}){this.config={coreStars:t.coreStars||5e4,bulgeStars:t.bulgeStars||8e4,diskStars:t.diskStars||15e4,armStars:t.armStars||1e5,haloStars:t.haloStars||2e4,nebulaParticles:t.nebulaParticles||15e3,dustParticles:t.dustParticles||8e3,coreRadius:t.coreRadius||8,bulgeRadius:t.bulgeRadius||25,diskRadius:t.diskRadius||120,diskHeight:t.diskHeight||3,haloRadius:t.haloRadius||180,numArms:t.numArms||2,armWindingFactor:t.armWindingFactor||.5,armSpread:t.armSpread||.4,barLength:t.barLength||30,barWidth:t.barWidth||8,chunkSize:t.chunkSize||1e4,...t},this.layers=new Map,this.group=new hi,this.totalParticles=0,this.loadedParticles=0,this.isLoading=!1,this.onProgress=null}async create(t){return this.onProgress=t,this.isLoading=!0,this.totalParticles=this.config.coreStars+this.config.bulgeStars+this.config.diskStars+this.config.armStars+this.config.haloStars+this.config.nebulaParticles+this.config.dustParticles,await this.createCore(),await this.createBulge(),await this.createDisk(),await this.createSpiralArms(),await this.createHalo(),await this.createNebulae(),await this.createDustLanes(),this.isLoading=!1,this.group}async yieldToBrowser(){return new Promise(t=>setTimeout(t,0))}reportProgress(t,e){if(this.loadedParticles=t,this.onProgress){const n=Math.round(t/this.totalParticles*100);this.onProgress(n,e)}}async createCore(){const t=this.config.coreStars,e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=[new ot(16772829),new ot(16766617),new ot(16764006),new ot(16757575),new ot(16752704)];for(let o=0;o<t;o++){const a=Math.random(),l=this.config.coreRadius*Math.pow(a,.4),c=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);e[o*3]=l*Math.sin(h)*Math.cos(c),e[o*3+1]=l*Math.sin(h)*Math.sin(c)*.5,e[o*3+2]=l*Math.cos(h);const f=.4+l/this.config.coreRadius*.5+Math.random()*.2,m=r[Math.floor(Math.random()*r.length)];n[o*3]=m.r*f,n[o*3+1]=m.g*f,n[o*3+2]=m.b*f,i[o]=.6+Math.random()*1,o%this.config.chunkSize===0&&(this.reportProgress(o,"Generating galactic core..."),await this.yieldToBrowser())}this.reportProgress(t,"Core complete"),this.addLayer("core",e,n,i,{blending:Ne,opacity:.7})}async createBulge(){const t=this.config.bulgeStars,e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=[new ot(13934678),new ot(12615744),new ot(12088115),new ot(15251576),new ot(13468991)],o=this.config.coreStars,a=this.config.coreRadius*2,l=this.config.bulgeRadius;for(let c=0;c<t;c++){const h=Math.random(),u=a+Math.pow(h,.7)*(l-a),f=Math.random()*Math.PI*2,m=Math.exp(-u/(l*.6)),g=this.gaussianRandom()*this.config.bulgeRadius*.15*m;e[c*3]=u*Math.cos(f),e[c*3+1]=g,e[c*3+2]=u*Math.sin(f);const _=(u-a)/(l-a),p=Math.min(Math.floor(_*r.length),r.length-1),d=r[p],y=.3+Math.random()*.3;n[c*3]=d.r*y,n[c*3+1]=d.g*y,n[c*3+2]=d.b*y,i[c]=.4+Math.random()*.6,c%this.config.chunkSize===0&&(this.reportProgress(o+c,"Generating galactic bulge..."),await this.yieldToBrowser())}this.reportProgress(o+t,"Bulge complete"),this.addLayer("bulge",e,n,i,{blending:Ne,opacity:.5})}async createDisk(){const t=this.config.diskStars,e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=[new ot(4878245),new ot(7048366),new ot(9413823),new ot(13215852),new ot(13934678),new ot(15257504)],o=this.config.coreStars+this.config.bulgeStars;for(let a=0;a<t;a++){const l=this.config.bulgeRadius+Math.pow(Math.random(),.4)*(this.config.diskRadius-this.config.bulgeRadius);let c=Math.random()*Math.PI*2;if(l<this.config.barLength){const p=Math.PI/4,d=1-l/this.config.barLength;this.gaussianRandom()*this.config.barWidth*d,Math.random()<.7&&(c=p+(Math.random()-.5)*.5,Math.random()<.5&&(c+=Math.PI))}const h=Math.exp(-l/(this.config.diskRadius*.4)),u=this.gaussianRandom()*this.config.diskHeight*h;e[a*3]=l*Math.cos(c),e[a*3+1]=u,e[a*3+2]=l*Math.sin(c);const f=(l-this.config.bulgeRadius)/(this.config.diskRadius-this.config.bulgeRadius),m=Math.min(Math.floor((1-f)*r.length*.7+Math.random()*2),r.length-1),g=r[m],_=.5+Math.random()*.4;n[a*3]=g.r*_,n[a*3+1]=g.g*_,n[a*3+2]=g.b*_,i[a]=.4+Math.random()*.8,a%this.config.chunkSize===0&&(this.reportProgress(o+a,"Generating galactic disk..."),await this.yieldToBrowser())}this.reportProgress(o+t,"Disk complete"),this.addLayer("disk",e,n,i,{blending:Ne,opacity:.8})}async createSpiralArms(){const t=this.config.armStars,e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=[new ot(4020864),new ot(6060697),new ot(8087790),new ot(6970061),new ot(10017007),new ot(12113128)],o=this.config.coreStars+this.config.bulgeStars+this.config.diskStars,a=Math.floor(t/this.config.numArms);for(let l=0;l<this.config.numArms;l++){const c=l/this.config.numArms*Math.PI*2;for(let h=0;h<a;h++){const u=l*a+h,f=Math.pow(Math.random(),.6),m=this.config.barLength+f*(this.config.diskRadius-this.config.barLength),g=c+this.config.armWindingFactor*Math.log(m/this.config.barLength),_=this.gaussianRandom()*this.config.armSpread*(1+m/this.config.diskRadius*.5),p=g+_,d=this.gaussianRandom()*this.config.diskHeight*.5;e[u*3]=m*Math.cos(p),e[u*3+1]=d,e[u*3+2]=m*Math.sin(p);const y=r[Math.floor(Math.random()*r.length)],M=.7+Math.random()*.5;n[u*3]=y.r*M,n[u*3+1]=y.g*M,n[u*3+2]=y.b*M,i[u]=.6+Math.random()*1.5,u%this.config.chunkSize===0&&(this.reportProgress(o+u,`Generating spiral arm ${l+1}...`),await this.yieldToBrowser())}}this.reportProgress(o+t,"Spiral arms complete"),this.addLayer("arms",e,n,i,{blending:Ne,opacity:.95})}async createHalo(){const t=this.config.haloStars,e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=[new ot(16777164),new ot(16768426),new ot(16764057),new ot(16777215)],o=this.config.coreStars+this.config.bulgeStars+this.config.diskStars+this.config.armStars;for(let a=0;a<t;a++){const l=this.config.diskRadius+Math.pow(Math.random(),.3)*(this.config.haloRadius-this.config.diskRadius),c=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);e[a*3]=l*Math.sin(h)*Math.cos(c),e[a*3+1]=l*Math.sin(h)*Math.sin(c)*.7,e[a*3+2]=l*Math.cos(h);const u=r[Math.floor(Math.random()*r.length)],f=.3+Math.random()*.4;n[a*3]=u.r*f,n[a*3+1]=u.g*f,n[a*3+2]=u.b*f,i[a]=.3+Math.random()*.6,a%this.config.chunkSize===0&&(this.reportProgress(o+a,"Generating stellar halo..."),await this.yieldToBrowser())}this.reportProgress(o+t,"Halo complete"),this.addLayer("halo",e,n,i,{blending:Ne,opacity:.6})}async createNebulae(){const t=this.config.nebulaParticles,e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=[new ot(9109643),new ot(10040012),new ot(6697881),new ot(8087790),new ot(12211667),new ot(4286945)],o=this.config.coreStars+this.config.bulgeStars+this.config.diskStars+this.config.armStars+this.config.haloStars,a=Math.floor(t/this.config.numArms);for(let l=0;l<this.config.numArms;l++){const c=l/this.config.numArms*Math.PI*2;for(let h=0;h<a;h++){const u=l*a+h,f=Math.random(),m=this.config.barLength+f*(this.config.diskRadius*.8-this.config.barLength),g=c+this.config.armWindingFactor*Math.log(m/this.config.barLength),_=this.gaussianRandom()*this.config.armSpread*.8,p=g+_,d=this.gaussianRandom()*this.config.diskHeight*.3;e[u*3]=m*Math.cos(p),e[u*3+1]=d,e[u*3+2]=m*Math.sin(p);const y=r[Math.floor(Math.random()*r.length)],M=.4+Math.random()*.4;n[u*3]=y.r*M,n[u*3+1]=y.g*M,n[u*3+2]=y.b*M,i[u]=3+Math.random()*8,u%this.config.chunkSize===0&&(this.reportProgress(o+u,"Generating nebulae..."),await this.yieldToBrowser())}}this.reportProgress(o+t,"Nebulae complete"),this.addLayer("nebulae",e,n,i,{blending:Ne,opacity:.25,softParticles:!0})}async createDustLanes(){const t=this.config.dustParticles,e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=new ot(1706496),o=this.config.coreStars+this.config.bulgeStars+this.config.diskStars+this.config.armStars+this.config.haloStars+this.config.nebulaParticles,a=Math.floor(t/this.config.numArms);for(let l=0;l<this.config.numArms;l++){const c=l/this.config.numArms*Math.PI*2;for(let h=0;h<a;h++){const u=l*a+h,f=Math.pow(Math.random(),.7),m=this.config.barLength*.5+f*(this.config.diskRadius*.6),g=c+this.config.armWindingFactor*Math.log(m/this.config.barLength),_=-this.config.armSpread*.3,p=this.gaussianRandom()*this.config.armSpread*.3,d=g+_+p,y=this.gaussianRandom()*this.config.diskHeight*.2;e[u*3]=m*Math.cos(d),e[u*3+1]=y,e[u*3+2]=m*Math.sin(d),n[u*3]=r.r,n[u*3+1]=r.g,n[u*3+2]=r.b,i[u]=4+Math.random()*10,u%this.config.chunkSize===0&&(this.reportProgress(o+u,"Generating dust lanes..."),await this.yieldToBrowser())}}this.reportProgress(this.totalParticles,"Galaxy complete!"),this.addLayer("dust",e,n,i,{blending:Cn,opacity:.4,softParticles:!0})}addLayer(t,e,n,i,r={}){const o=new He;o.setAttribute("position",new ge(e,3)),o.setAttribute("color",new ge(n,3)),o.setAttribute("size",new ge(i,1));const a=new me({uniforms:{pixelRatio:{value:Math.min(window.devicePixelRatio,2)},time:{value:0}},vertexShader:`
                attribute float size;
                varying vec3 vColor;
                varying float vSize;
                uniform float pixelRatio;
                uniform float time;

                void main() {
                    vColor = color;
                    vSize = size;

                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

                    // Size attenuation with distance
                    float sizeAttenuation = 300.0 / -mvPosition.z;
                    gl_PointSize = size * pixelRatio * sizeAttenuation;
                    gl_PointSize = clamp(gl_PointSize, 0.5, ${r.softParticles?"80.0":"30.0"});

                    gl_Position = projectionMatrix * mvPosition;
                }
            `,fragmentShader:r.softParticles?`
                varying vec3 vColor;
                varying float vSize;

                void main() {
                    vec2 center = gl_PointCoord - vec2(0.5);
                    float dist = length(center);

                    if (dist > 0.5) discard;

                    // Very soft, diffuse glow for nebulae/dust
                    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
                    alpha = pow(alpha, 2.0);

                    gl_FragColor = vec4(vColor, alpha * ${r.opacity.toFixed(2)});
                }
            `:`
                varying vec3 vColor;
                varying float vSize;

                void main() {
                    vec2 center = gl_PointCoord - vec2(0.5);
                    float dist = length(center);

                    if (dist > 0.5) discard;

                    // Star-like appearance with bright core
                    float core = 1.0 - smoothstep(0.0, 0.15, dist);
                    float glow = 1.0 - smoothstep(0.0, 0.5, dist);

                    float alpha = core * 0.9 + glow * 0.5;
                    alpha = pow(alpha, 1.3);

                    // Bright center
                    float brightness = 1.0 + core * 1.2;
                    vec3 finalColor = vColor * brightness;

                    // White hot core for bright stars
                    finalColor = mix(finalColor, vec3(1.0), core * 0.4);

                    gl_FragColor = vec4(finalColor, alpha * ${r.opacity.toFixed(2)});
                }
            `,transparent:!0,vertexColors:!0,blending:r.blending||Ne,depthWrite:!1}),l=new wo(o,a);this.layers.set(t,{geometry:o,material:a,points:l}),this.group.add(l)}gaussianRandom(){let t=0,e=0;for(;t===0;)t=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}update(t,e){this.layers.forEach(n=>{n.material.uniforms.time&&(n.material.uniforms.time.value=e)})}getGroup(){return this.group}dispose(){this.layers.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.layers.clear()}}class ka{constructor(t,e){this.camera=t,this.pointCloud=e,this.raycaster=new Wf,this.raycaster.params.Points.threshold=2,this.mouse=new bt,this.lastRaycastTime=0,this.raycastInterval=33,this.hoveredIndex=-1,this.pinnedIndex=-1,this.onHover=null,this.onUnhover=null,this.onPin=null,this.onUnpin=null}updateMouse(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1}getScreenPosition(t){const e=this.pointCloud.getPosition(t);if(!e)return null;const n=e.clone();return n.project(this.camera),{x:(n.x*.5+.5)*window.innerWidth,y:(-n.y*.5+.5)*window.innerHeight}}raycast(){const t=performance.now();if(t-this.lastRaycastTime<this.raycastInterval)return this.hoveredIndex;if(this.lastRaycastTime=t,this.pinnedIndex>=0)return this.pinnedIndex;const e=this.pointCloud.getPoints();if(!e)return-1;this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObject(e);if(n.length>0){const i=n[0].index;return i!==this.hoveredIndex&&(this.hoveredIndex>=0&&this.onUnhover&&this.onUnhover(this.hoveredIndex),this.hoveredIndex=i,this.onHover&&this.onHover(i,this.getScreenPosition(i))),i}else return this.hoveredIndex>=0&&(this.onUnhover&&this.onUnhover(this.hoveredIndex),this.hoveredIndex=-1),-1}pin(){return this.hoveredIndex>=0?(this.pinnedIndex=this.hoveredIndex,this.onPin&&this.onPin(this.pinnedIndex,this.getScreenPosition(this.pinnedIndex)),!0):!1}unpin(){if(this.pinnedIndex>=0){const t=this.pinnedIndex;return this.pinnedIndex=-1,this.onUnpin&&this.onUnpin(t),!0}return!1}isPinned(){return this.pinnedIndex>=0}getPinnedIndex(){return this.pinnedIndex}getHoveredIndex(){return this.hoveredIndex}getActiveIndex(){return this.pinnedIndex>=0?this.pinnedIndex:this.hoveredIndex}setThreshold(t){this.raycaster.params.Points.threshold=t}setRaycastInterval(t){this.raycastInterval=t}}class Po{constructor(){this.baseUrl="https://pubchem.ncbi.nlm.nih.gov/rest/pug",this.viewUrl="https://pubchem.ncbi.nlm.nih.gov/rest/pug_view",this.cache=new Map,this.cidCache=new Map}async getCIDFromSMILES(t){var e,n;if(this.cidCache.has(t))return this.cidCache.get(t);try{const i=encodeURIComponent(t),r=`${this.baseUrl}/compound/smiles/${i}/cids/JSON`,o=await fetch(r);if(!o.ok)return null;const l=(n=(e=(await o.json()).IdentifierList)==null?void 0:e.CID)==null?void 0:n[0];return l&&this.cidCache.set(t,l),l}catch(i){return console.warn("Failed to get CID:",i),null}}async get3DStructure(t){const e=`3d_${t}`;if(this.cache.has(e))return this.cache.get(e);try{const n=encodeURIComponent(t),i=`${this.baseUrl}/compound/smiles/${n}/SDF?record_type=3d`,r=await fetch(i);if(!r.ok)return null;const o=await r.text();return this.cache.set(e,o),o}catch(n){return console.warn("Failed to get 3D structure:",n),null}}async getSafetyInfo(t){const e=`safety_${t}`;if(this.cache.has(e))return this.cache.get(e);try{const n=await this.getCIDFromSMILES(t);if(!n)return null;const i=`${this.viewUrl}/data/compound/${n}/JSON?heading=GHS+Classification`,r=await fetch(i);if(!r.ok)return null;const o=await r.json(),a=this.parseGHSData(o);return this.cache.set(e,a),a}catch(n){return console.warn("Failed to get safety info:",n),null}}parseGHSData(t){var n,i,r,o;const e=[];try{const a=((n=t.Record)==null?void 0:n.Section)||[];for(const l of a)if(l.TOCHeading==="GHS Classification"){const c=l.Section||[];for(const h of c)if(h.TOCHeading==="GHS Hazard Statements"){const u=h.Information||[];for(const f of u){const m=(o=(r=(i=f.Value)==null?void 0:i.StringWithMarkup)==null?void 0:r[0])==null?void 0:o.String;if(m){const g=m.match(/^(H\d+[a-z]?)\s*[:\-]?\s*(.+)/i);g&&e.push({code:g[1],description:g[2],icon:this.getHazardIcon(g[1])})}}}}}catch(a){console.warn("Error parsing GHS data:",a)}return e}getHazardIcon(t){const e=parseInt(t.substring(1));return e>=200&&e<300?"💥":e>=300&&e<320?"☠️":e>=320&&e<340?"⚠️":e>=340&&e<360?"🧬":e>=360&&e<400?"🫁":e>=400?"🌊":"⚠️"}async getBioactivity(t){const e=`bioactivity_${t}`;if(this.cache.has(e))return this.cache.get(e);try{const n=await this.getCIDFromSMILES(t);if(!n)return null;const i=`${this.baseUrl}/compound/cid/${n}/assaysummary/JSON`,r=await fetch(i);if(!r.ok)return null;const o=await r.json(),a=this.parseBioactivityData(o);return this.cache.set(e,a),a}catch(n){return console.warn("Failed to get bioactivity:",n),null}}parseBioactivityData(t){var r;const e=[],n=((r=t.Table)==null?void 0:r.Row)||[],i=new Set;for(const o of n.slice(0,20)){const a=o.Cell||[],l=a[2],c=a[4];if(l&&!i.has(l)&&(i.add(l),e.push({name:l,activity:c||"Active"})),e.length>=8)break}return e}async getLiterature(t){const e=`literature_${t}`;if(this.cache.has(e))return this.cache.get(e);try{const n=await this.getCIDFromSMILES(t);if(!n)return null;const i=`${this.viewUrl}/data/compound/${n}/JSON?heading=Literature`,r=await fetch(i);if(!r.ok)return null;const o=await r.json(),a=this.parseLiteratureData(o);return this.cache.set(e,a),a}catch(n){return console.warn("Failed to get literature:",n),null}}parseLiteratureData(t){var n;const e=[];try{const i=((n=t.Record)==null?void 0:n.Section)||[];for(const r of i)if(r.TOCHeading==="Literature"){const o=r.Section||[];for(const a of o){const l=a.Information||[];for(const c of l.slice(0,10)){const h=c.Name||c.Description,u=c.URL,f=c.ReferenceNumber;if(h&&e.push({title:h.length>100?h.substring(0,100)+"...":h,url:u,pmid:f,year:this.extractYear(h)||"N/A"}),e.length>=6)break}if(e.length>=6)break}}}catch(i){console.warn("Error parsing literature:",i)}return e}extractYear(t){const e=t.match(/\b(19|20)\d{2}\b/);return e?e[0]:null}async getPatents(t){const e=`patents_${t}`;if(this.cache.has(e))return this.cache.get(e);try{const n=await this.getCIDFromSMILES(t);if(!n)return null;const i=`${this.viewUrl}/data/compound/${n}/JSON?heading=Patent`,r=await fetch(i);if(!r.ok)return null;const o=await r.json(),a=this.parsePatentData(o);return this.cache.set(e,a),a}catch(n){return console.warn("Failed to get patents:",n),null}}parsePatentData(t){var n;const e=[];try{const i=((n=t.Record)==null?void 0:n.Section)||[];for(const r of i)if(r.TOCHeading==="Patent"){const o=r.Information||[];for(const a of o.slice(0,8)){const l=a.Name,c=a.Description||"Patent",h=a.URL;l&&e.push({number:l,title:c.length>60?c.substring(0,60)+"...":c,url:h})}}}catch(i){console.warn("Error parsing patents:",i)}return e}async getVendors(t){const e=`vendors_${t}`;if(this.cache.has(e))return this.cache.get(e);try{const n=await this.getCIDFromSMILES(t);if(!n)return null;const i=`${this.viewUrl}/data/compound/${n}/JSON?heading=Chemical+Vendors`,r=await fetch(i);if(!r.ok)return null;const o=await r.json(),a=this.parseVendorData(o);return this.cache.set(e,a),a}catch(n){return console.warn("Failed to get vendors:",n),null}}parseVendorData(t){var n;const e=[];try{const i=((n=t.Record)==null?void 0:n.Section)||[];for(const r of i)if(r.TOCHeading==="Chemical Vendors"){const o=r.Information||[];for(const a of o.slice(0,10)){const l=a.Name,c=a.URL;l&&e.push({name:l,url:c,availability:"In Stock"})}}}catch(i){console.warn("Error parsing vendors:",i)}return e}async getSimilarCompounds(t,e=90){var i,r;const n=`similar_${t}_${e}`;if(this.cache.has(n))return this.cache.get(n);try{const o=await this.getCIDFromSMILES(t);if(!o)return null;const a=`${this.baseUrl}/compound/fastsimilarity_2d/cid/${o}/cids/JSON?Threshold=${e}&MaxRecords=10`,l=await fetch(a);if(!l.ok)return null;const h=((i=(await l.json()).IdentifierList)==null?void 0:i.CID)||[];if(h.length>0){const u=`${this.baseUrl}/compound/cid/${h.join(",")}/property/CanonicalSMILES,IUPACName,MolecularWeight/JSON`,f=await fetch(u);if(f.ok){const g=((r=(await f.json()).PropertyTable)==null?void 0:r.Properties)||[];return this.cache.set(n,g),g}}return[]}catch(o){return console.warn("Failed to get similar compounds:",o),null}}async getSynonyms(t){var n,i,r;const e=`synonyms_${t}`;if(this.cache.has(e))return this.cache.get(e);try{const o=await this.getCIDFromSMILES(t);if(!o)return null;const a=`${this.baseUrl}/compound/cid/${o}/synonyms/JSON`,l=await fetch(a);if(!l.ok)return null;const u=(((r=(i=(n=(await l.json()).InformationList)==null?void 0:n.Information)==null?void 0:i[0])==null?void 0:r.Synonym)||[]).filter(f=>f.length<30&&/^[A-Z]/.test(f)).slice(0,10);return this.cache.set(e,u),u}catch(o){return console.warn("Failed to get synonyms:",o),null}}async getDrugStatus(t){const e=`drugstatus_${t}`;if(this.cache.has(e))return this.cache.get(e);try{const n=await this.getCIDFromSMILES(t);if(!n)return null;const i=`${this.viewUrl}/data/compound/${n}/JSON?heading=Drug+and+Medication+Information`,r=await fetch(i);if(!r.ok)return this.checkFDAStatus(n);const o=await r.json(),a=this.parseDrugStatus(o);return this.cache.set(e,a),a}catch(n){return console.warn("Failed to get drug status:",n),null}}parseDrugStatus(t){var n,i;const e={isApproved:!1,phase:null,indications:[]};try{const r=((n=t.Record)==null?void 0:n.Section)||[];for(const o of r){const a=((i=o.TOCHeading)==null?void 0:i.toLowerCase())||"";if(a.includes("drug")||a.includes("fda")){e.isApproved=!0;const l=o.Information||[];for(const c of l.slice(0,3))c.Description&&e.indications.push(c.Description)}}}catch(r){console.warn("Error parsing drug status:",r)}return e}async checkFDAStatus(t){return{isApproved:!1,phase:null,indications:[]}}clearCache(){this.cache.clear(),this.cidCache.clear()}}class sp{constructor(){this.popup=document.getElementById("molecule-popup"),this.nameEl=document.getElementById("popup-name"),this.idEl=document.getElementById("popup-id"),this.smilesEl=document.getElementById("popup-smiles"),this.propertiesEl=document.getElementById("popup-properties"),this.structure2dEl=document.getElementById("popup-structure-2d"),this.structure3dEl=document.getElementById("popup-structure-3d"),this.drugBadgesEl=document.getElementById("drug-badges"),this.toggle2dBtn=document.getElementById("toggle-2d"),this.toggle3dBtn=document.getElementById("toggle-3d"),this.tabsEl=document.getElementById("pubchem-tabs"),this.contentEl=document.getElementById("pubchem-content"),this.currentMolecule=null,this.rdkitModule=null,this.viewer3d=null,this.is3dMode=!1,this.activeTab="safety",this.pubchem=new Po,this.sdfCache=new Map,this.pubchemDataCache=new Map,this.initToggle(),this.initTabs(),this.initRDKit()}initToggle(){this.toggle2dBtn.addEventListener("click",()=>this.setMode("2d")),this.toggle3dBtn.addEventListener("click",()=>this.setMode("3d"))}initTabs(){this.tabsEl.querySelectorAll(".pubchem-tab").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.tab;this.setActiveTab(n)})})}async initRDKit(){if(typeof window.initRDKitModule=="function")try{this.rdkitModule=await window.initRDKitModule(),console.log("RDKit initialized")}catch(t){console.warn("RDKit initialization failed:",t)}}setMode(t){this.is3dMode=t==="3d",this.is3dMode?(this.toggle2dBtn.classList.remove("active"),this.toggle3dBtn.classList.add("active"),this.structure2dEl.classList.add("hidden"),this.structure3dEl.classList.add("visible"),this.render3DStructure()):(this.toggle2dBtn.classList.add("active"),this.toggle3dBtn.classList.remove("active"),this.structure2dEl.classList.remove("hidden"),this.structure3dEl.classList.remove("visible"))}setActiveTab(t){var i;this.activeTab=t,this.tabsEl.querySelectorAll(".pubchem-tab").forEach(r=>{r.classList.toggle("active",r.dataset.tab===t)}),this.contentEl.querySelectorAll(".tab-pane").forEach(r=>{r.classList.toggle("active",r.id===`tab-${t}`)}),(i=this.currentMolecule)!=null&&i.smiles&&this.loadTabData(t,this.currentMolecule.smiles)}show(t){this.currentMolecule=t,this.is3dMode=!1,this.toggle2dBtn.classList.add("active"),this.toggle3dBtn.classList.remove("active"),this.structure2dEl.classList.remove("hidden"),this.structure3dEl.classList.remove("visible"),this.nameEl.textContent=t.name||"Unknown Compound";const e=t.drugClass?` | ${t.drugClass}`:"";this.idEl.textContent=`ID: ${t.id||"-"}${e}`,this.smilesEl.textContent=t.smiles||"-",this.render2DStructure(t.smiles),this.renderProperties(t.properties),this.resetTabsLoading(),this.loadDrugBadges(t),this.loadTabData(this.activeTab,t.smiles),this.popup.classList.add("visible"),t.smiles&&this.prefetch3DStructure(t.smiles)}hide(){this.popup.classList.remove("visible"),this.currentMolecule=null,this.viewer3d&&this.viewer3d.clear()}resetTabsLoading(){Object.entries({safety:"Scanning hazard database...",bioactivity:"Analyzing targets...",literature:"Fetching publications...",patents:"Searching patent database...",vendors:"Querying suppliers..."}).forEach(([n,i])=>{const r=document.getElementById(`tab-${n}`);r&&(r.innerHTML=`
                    <div class="loading-indicator">
                        <div class="loading-spinner"></div>
                        <span>${i}</span>
                    </div>
                `)}),this.tabsEl.querySelectorAll(".pubchem-tab").forEach(n=>n.removeAttribute("data-count"))}async loadDrugBadges(t){var i;this.drugBadgesEl.innerHTML="";const e=["Aspirin","Caffeine","Ibuprofen","Acetaminophen","Naproxen","Diazepam","Omeprazole","Metformin","Atorvastatin","Lisinopril","Sertraline","Fluoxetine","Warfarin","Metoprolol","Losartan","Theophylline","Lorazepam","Alprazolam","Lansoprazole","Glipizide","Simvastatin","Rosuvastatin","Paroxetine","Citalopram","Enalapril","Valsartan","Atenolol","Propranolol","Rivaroxaban","Amoxicillin","Ciprofloxacin","Azithromycin"];if(t.drugClass){const o={NSAID:"#ff6b6b",Analgesic:"#ff9ff3",Stimulant:"#feca57",Benzodiazepine:"#5f27cd",PPI:"#54a0ff",Antidiabetic:"#00d2d3",Statin:"#1dd1a1",SSRI:"#ff9ff3","ACE Inhibitor":"#48dbfb",ARB:"#ff6b6b","Beta Blocker":"#c8d6e5",Anticoagulant:"#ee5253",Antibiotic:"#10ac84"}[t.drugClass]||"var(--neon-cyan)";this.drugBadgesEl.innerHTML=`
                <span class="drug-badge" style="background: ${o}22; border-color: ${o}; color: ${o};">
                    <span>◆</span> ${t.drugClass}
                </span>
            `}if(e.includes(t.name))this.drugBadgesEl.innerHTML+=`
                <span class="drug-badge approved">
                    <span>✓</span> FDA Approved
                </span>
            `;else if((i=t.name)!=null&&i.includes("Analog"))this.drugBadgesEl.innerHTML+=`
                <span class="drug-badge research">
                    <span>◈</span> Analog
                </span>
            `;else{const r=await this.pubchem.getDrugStatus(t.smiles);r!=null&&r.isApproved?this.drugBadgesEl.innerHTML+=`
                    <span class="drug-badge approved">
                        <span>✓</span> Approved Drug
                    </span>
                `:this.drugBadgesEl.innerHTML+=`
                    <span class="drug-badge research">
                        <span>◈</span> Research Compound
                    </span>
                `}const n=await this.pubchem.getSafetyInfo(t.smiles);n&&n.length>0&&n.some(o=>o.code.startsWith("H3")&&parseInt(o.code.substring(1))<320)&&(this.drugBadgesEl.innerHTML+=`
                    <span class="drug-badge warning">
                        <span>⚠</span> Hazardous
                    </span>
                `)}async loadTabData(t,e){var r;const n=`${t}_${e}`;if(this.pubchemDataCache.has(n)){this.renderTabContent(t,this.pubchemDataCache.get(n));return}let i=null;switch(t){case"safety":i=await this.pubchem.getSafetyInfo(e);break;case"bioactivity":i=await this.pubchem.getBioactivity(e);break;case"literature":i=await this.pubchem.getLiterature(e);break;case"patents":i=await this.pubchem.getPatents(e);break;case"vendors":i=await this.pubchem.getVendors(e);break}i&&this.pubchemDataCache.set(n,i),((r=this.currentMolecule)==null?void 0:r.smiles)===e&&this.renderTabContent(t,i)}renderTabContent(t,e){const n=document.getElementById(`tab-${t}`);if(!n)return;const i=this.tabsEl.querySelector(`[data-tab="${t}"]`);if(e&&e.length>0&&(i==null||i.setAttribute("data-count",e.length)),!e||e.length===0){n.innerHTML=`
                <div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.85rem;">
                    No ${t} data available
                </div>
            `;return}switch(t){case"safety":n.innerHTML=e.map(r=>`
                    <div class="safety-item">
                        <div class="safety-icon">${r.icon}</div>
                        <div class="safety-text">${r.description}</div>
                        <div class="safety-code">${r.code}</div>
                    </div>
                `).join("");break;case"bioactivity":n.innerHTML=e.map(r=>`
                    <div class="target-item">
                        <span class="target-name">${r.name}</span>
                        <span class="target-activity">${r.activity}</span>
                    </div>
                `).join("");break;case"literature":n.innerHTML=e.map(r=>`
                    <div class="paper-item">
                        <div class="paper-title">${r.title}</div>
                        <div class="paper-meta">
                            ${r.year?`Year: ${r.year}`:""}
                            ${r.pmid?` | PMID: ${r.pmid}`:""}
                        </div>
                    </div>
                `).join("");break;case"patents":n.innerHTML=e.map(r=>`
                    <div class="patent-item">
                        <span class="patent-number">${r.number}</span>
                        <span class="patent-title">${r.title}</span>
                    </div>
                `).join("");break;case"vendors":n.innerHTML=e.map(r=>`
                    <div class="vendor-item">
                        <span class="vendor-name">${r.name}</span>
                        <span class="vendor-price">${r.availability}</span>
                    </div>
                `).join("");break}}render2DStructure(t){if(!t){this.structure2dEl.innerHTML='<div style="color: var(--text-muted); text-align: center; padding: 80px 0; font-size: 0.8rem;">NO STRUCTURE DATA</div>';return}if(!this.rdkitModule){this.structure2dEl.innerHTML='<div style="color: var(--text-muted); text-align: center; padding: 80px 0; font-size: 0.8rem;">LOADING RENDERER...</div>',setTimeout(()=>{var e;this.rdkitModule&&((e=this.currentMolecule)==null?void 0:e.smiles)===t&&this.render2DStructure(t)},1e3);return}try{const e=this.rdkitModule.get_mol(t);if(e){const n=e.get_svg_with_highlights(JSON.stringify({width:320,height:180,backgroundColour:[1,1,1,1],bondLineWidth:1.8,fixedBondLength:25,addAtomIndices:!1,addStereoAnnotation:!0,highlightColour:[0,.6,.9,.3]}));this.structure2dEl.innerHTML=`
                    <div class="structure-2d-container" style="position: relative; background: white; border-radius: 8px; overflow: hidden;">
                        <div class="structure-2d-viewport" style="overflow: hidden; cursor: grab;">
                            <div class="structure-2d-content" style="transform-origin: center; transition: transform 0.1s ease-out;">
                                ${n}
                            </div>
                        </div>
                        <div class="structure-2d-controls" style="position: absolute; bottom: 4px; right: 4px; display: flex; gap: 2px;">
                            <button class="zoom-btn" data-action="zoom-in" title="Zoom In" style="width: 22px; height: 22px; border: 1px solid #ccc; background: rgba(255,255,255,0.9); border-radius: 3px; cursor: pointer; font-size: 14px; line-height: 1;">+</button>
                            <button class="zoom-btn" data-action="zoom-out" title="Zoom Out" style="width: 22px; height: 22px; border: 1px solid #ccc; background: rgba(255,255,255,0.9); border-radius: 3px; cursor: pointer; font-size: 14px; line-height: 1;">−</button>
                            <button class="zoom-btn" data-action="reset" title="Reset View" style="width: 22px; height: 22px; border: 1px solid #ccc; background: rgba(255,255,255,0.9); border-radius: 3px; cursor: pointer; font-size: 11px; line-height: 1;">⟲</button>
                            <button class="zoom-btn" data-action="download-svg" title="Download SVG" style="width: 22px; height: 22px; border: 1px solid #ccc; background: rgba(255,255,255,0.9); border-radius: 3px; cursor: pointer; font-size: 10px; line-height: 1;">⬇</button>
                            <button class="zoom-btn" data-action="download-png" title="Download PNG" style="width: 22px; height: 22px; border: 1px solid #ccc; background: rgba(255,255,255,0.9); border-radius: 3px; cursor: pointer; font-size: 8px; line-height: 1;">PNG</button>
                        </div>
                    </div>
                `,this.setup2DInteraction(),e.delete()}else this.structure2dEl.innerHTML='<div style="color: var(--neon-red); text-align: center; padding: 80px 0; font-size: 0.8rem;">INVALID SMILES</div>'}catch(e){console.warn("Failed to render 2D structure:",e),this.structure2dEl.innerHTML='<div style="color: var(--neon-red); text-align: center; padding: 80px 0; font-size: 0.8rem;">RENDER ERROR</div>'}}setup2DInteraction(){const t=this.structure2dEl.querySelector(".structure-2d-container"),e=this.structure2dEl.querySelector(".structure-2d-content"),n=this.structure2dEl.querySelector(".structure-2d-viewport");if(!t||!e)return;let i=1,r=0,o=0,a=!1,l,c;const h=()=>{e.style.transform=`translate(${r}px, ${o}px) scale(${i})`};t.querySelectorAll(".zoom-btn").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation();const m=u.dataset.action;m==="zoom-in"?(i=Math.min(i*1.3,4),h()):m==="zoom-out"?(i=Math.max(i/1.3,.5),h()):m==="reset"?(i=1,r=0,o=0,h()):m==="download-svg"?this.download2DSVG():m==="download-png"&&this.download2DPNG()})}),n.addEventListener("wheel",u=>{u.preventDefault();const f=u.deltaY>0?.9:1.1;i=Math.max(.5,Math.min(4,i*f)),h()}),n.addEventListener("mousedown",u=>{i>1&&(a=!0,l=u.clientX-r,c=u.clientY-o,n.style.cursor="grabbing")}),document.addEventListener("mousemove",u=>{a&&(r=u.clientX-l,o=u.clientY-c,h())}),document.addEventListener("mouseup",()=>{a=!1,n&&(n.style.cursor="grab")})}add3DControls(){if(!this.viewer3d||!this.structure3dEl)return;const t=document.createElement("div");t.className="structure-3d-controls",t.style.cssText="position: absolute; bottom: 4px; right: 4px; display: flex; gap: 2px; z-index: 10;",t.innerHTML=`
            <button class="ctrl-btn" data-action="spin" title="Toggle Spin" style="width: 26px; height: 22px; border: 1px solid rgba(0,212,255,0.3); background: rgba(0,0,0,0.6); border-radius: 3px; cursor: pointer; font-size: 11px; color: var(--neon-cyan);">⟳</button>
            <button class="ctrl-btn" data-action="reset" title="Reset View" style="width: 26px; height: 22px; border: 1px solid rgba(0,212,255,0.3); background: rgba(0,0,0,0.6); border-radius: 3px; cursor: pointer; font-size: 11px; color: var(--neon-cyan);">⟲</button>
            <button class="ctrl-btn" data-action="style" title="Toggle Style" style="width: 26px; height: 22px; border: 1px solid rgba(0,212,255,0.3); background: rgba(0,0,0,0.6); border-radius: 3px; cursor: pointer; font-size: 10px; color: var(--neon-cyan);">◉</button>
            <button class="ctrl-btn" data-action="download-xyz" title="Download XYZ" style="width: 30px; height: 22px; border: 1px solid rgba(0,212,255,0.3); background: rgba(0,0,0,0.6); border-radius: 3px; cursor: pointer; font-size: 8px; color: var(--neon-cyan);">XYZ</button>
            <button class="ctrl-btn" data-action="download-sdf" title="Download SDF" style="width: 30px; height: 22px; border: 1px solid rgba(0,212,255,0.3); background: rgba(0,0,0,0.6); border-radius: 3px; cursor: pointer; font-size: 8px; color: var(--neon-cyan);">SDF</button>
        `;const e=document.createElement("div");e.style.cssText="position: absolute; top: 4px; left: 4px; font-size: 9px; color: rgba(0,212,255,0.6); pointer-events: none;",e.textContent="Drag to rotate • Scroll to zoom",this.structure3dEl.style.position="relative",this.structure3dEl.appendChild(t),this.structure3dEl.appendChild(e);let n=!1,i=0;const r=["stick","sphere","line","cartoon"];t.querySelectorAll(".ctrl-btn").forEach(o=>{o.addEventListener("click",a=>{a.stopPropagation();const l=o.dataset.action;if(l==="spin")n=!n,this.viewer3d.spin(n?"y":!1,.5),o.style.background=n?"rgba(0,212,255,0.3)":"rgba(0,0,0,0.6)";else if(l==="reset")this.viewer3d.zoomTo(),this.viewer3d.render();else if(l==="style"){i=(i+1)%r.length;const c=r[i];c==="stick"?this.viewer3d.setStyle({},{stick:{radius:.12,colorscheme:"Jmol"},sphere:{scale:.25,colorscheme:"Jmol"}}):c==="sphere"?this.viewer3d.setStyle({},{sphere:{colorscheme:"Jmol"}}):c==="line"?this.viewer3d.setStyle({},{line:{colorscheme:"Jmol"}}):c==="cartoon"&&this.viewer3d.setStyle({},{stick:{radius:.08,colorscheme:"Jmol"}}),this.viewer3d.render()}else l==="download-xyz"?this.download3DXYZ():l==="download-sdf"&&this.download3DSDF()})})}download2DSVG(){var a,l;const t=this.structure2dEl.querySelector("svg");if(!t){console.warn("No SVG found to download");return}const e=t.cloneNode(!0);e.setAttribute("xmlns","http://www.w3.org/2000/svg");const n=new XMLSerializer().serializeToString(e),i=new Blob([n],{type:"image/svg+xml"}),r=URL.createObjectURL(i),o=((a=this.currentMolecule)==null?void 0:a.name)||((l=this.currentMolecule)==null?void 0:l.id)||"molecule";this.downloadFile(r,`${o.replace(/[^a-zA-Z0-9]/g,"_")}_2D.svg`),URL.revokeObjectURL(r)}download2DPNG(){const t=this.structure2dEl.querySelector("svg");if(!t){console.warn("No SVG found to download");return}const e=t.getBoundingClientRect(),n=e.width*2,i=e.height*2,r=t.cloneNode(!0);r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r.setAttribute("width",n),r.setAttribute("height",i);const o=new XMLSerializer().serializeToString(r),a=new Blob([o],{type:"image/svg+xml;charset=utf-8"}),l=URL.createObjectURL(a),c=new Image;c.onload=()=>{const h=document.createElement("canvas");h.width=n,h.height=i;const u=h.getContext("2d");u.fillStyle="white",u.fillRect(0,0,n,i),u.drawImage(c,0,0,n,i),h.toBlob(f=>{var _,p;const m=URL.createObjectURL(f),g=((_=this.currentMolecule)==null?void 0:_.name)||((p=this.currentMolecule)==null?void 0:p.id)||"molecule";this.downloadFile(m,`${g.replace(/[^a-zA-Z0-9]/g,"_")}_2D.png`),URL.revokeObjectURL(m)},"image/png"),URL.revokeObjectURL(l)},c.src=l}download3DXYZ(){var l,c;if(!this.viewer3d||!this.currentMolecule){console.warn("No 3D structure available");return}const t=this.viewer3d.getModel();if(!t){console.warn("No model in viewer");return}const e=t.selectedAtoms({});if(!e||e.length===0){console.warn("No atoms in model");return}const n=[];n.push(e.length.toString()),n.push(this.currentMolecule.name||this.currentMolecule.smiles||"molecule"),e.forEach(h=>{const u=h.elem||"X",f=(h.x||0).toFixed(6),m=(h.y||0).toFixed(6),g=(h.z||0).toFixed(6);n.push(`${u.padEnd(2)} ${f.padStart(12)} ${m.padStart(12)} ${g.padStart(12)}`)});const i=n.join(`
`),r=new Blob([i],{type:"chemical/x-xyz"}),o=URL.createObjectURL(r),a=((l=this.currentMolecule)==null?void 0:l.name)||((c=this.currentMolecule)==null?void 0:c.id)||"molecule";this.downloadFile(o,`${a.replace(/[^a-zA-Z0-9]/g,"_")}.xyz`),URL.revokeObjectURL(o)}download3DSDF(){var e,n,i;if(!((e=this.currentMolecule)!=null&&e.smiles)){console.warn("No molecule data available");return}const t=this.sdfCache.get(this.currentMolecule.smiles);if(t){const r=new Blob([t],{type:"chemical/x-mdl-sdfile"}),o=URL.createObjectURL(r),a=((n=this.currentMolecule)==null?void 0:n.name)||((i=this.currentMolecule)==null?void 0:i.id)||"molecule";this.downloadFile(o,`${a.replace(/[^a-zA-Z0-9]/g,"_")}.sdf`),URL.revokeObjectURL(o)}else this.pubchem.get3DStructure(this.currentMolecule.smiles).then(r=>{var o,a;if(r){const l=new Blob([r],{type:"chemical/x-mdl-sdfile"}),c=URL.createObjectURL(l),h=((o=this.currentMolecule)==null?void 0:o.name)||((a=this.currentMolecule)==null?void 0:a.id)||"molecule";this.downloadFile(c,`${h.replace(/[^a-zA-Z0-9]/g,"_")}.sdf`),URL.revokeObjectURL(c)}else alert("Could not retrieve SDF structure. Try viewing 3D first.")})}downloadFile(t,e){const n=document.createElement("a");n.href=t,n.download=e,n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}async prefetch3DStructure(t){if(!this.sdfCache.has(t))try{const e=await this.pubchem.get3DStructure(t);e&&this.sdfCache.set(t,e)}catch{}}async render3DStructure(){var e,n,i;if(!((e=this.currentMolecule)!=null&&e.smiles)){this.structure3dEl.innerHTML='<div style="color: var(--text-muted); text-align: center; padding: 80px 0; font-size: 0.8rem;">NO STRUCTURE DATA</div>';return}if(typeof $3Dmol>"u"){this.structure3dEl.innerHTML='<div style="color: var(--text-muted); text-align: center; padding: 80px 0; font-size: 0.8rem;">LOADING 3D ENGINE...</div>';return}const t=this.currentMolecule.smiles;this.structure3dEl.innerHTML=`
            <div style="color: var(--neon-cyan); text-align: center; padding: 70px 0; font-size: 0.8rem;">
                <div style="margin-bottom: 10px;">GENERATING 3D CONFORMATION</div>
                <div class="loading-spinner" style="margin: 0 auto;"></div>
            </div>
        `;try{let r=this.sdfCache.get(t);if(r||(r=await this.pubchem.get3DStructure(t),r&&this.sdfCache.set(t,r)),((n=this.currentMolecule)==null?void 0:n.smiles)!==t)return;if(!r)throw new Error("No 3D structure available");this.structure3dEl.innerHTML="",this.viewer3d=$3Dmol.createViewer(this.structure3dEl,{backgroundColor:"transparent",antialias:!0}),this.viewer3d.addModel(r,"sdf"),this.viewer3d.setStyle({},{stick:{radius:.12,colorscheme:"Jmol"},sphere:{scale:.25,colorscheme:"Jmol"}}),this.viewer3d.zoomTo(),this.viewer3d.spin(!1),this.viewer3d.render(),this.add3DControls()}catch(r){if(console.warn("Failed to render 3D structure:",r),((i=this.currentMolecule)==null?void 0:i.smiles)!==t)return;this.structure3dEl.innerHTML=`
                <div style="color: var(--text-muted); text-align: center; padding: 60px 20px; font-size: 0.8rem;">
                    <div style="color: var(--neon-red); margin-bottom: 8px;">3D UNAVAILABLE</div>
                    <div style="font-size: 0.7rem; opacity: 0.7;">Structure not found in PubChem database</div>
                </div>
            `}}renderProperties(t){if(!t){this.propertiesEl.innerHTML="";return}const e={mw:{label:"MW",unit:"",decimals:1},logp:{label:"LogP",unit:"",decimals:2},tpsa:{label:"TPSA",unit:"",decimals:0},hbd:{label:"HBD",unit:"",decimals:0},hba:{label:"HBA",unit:"",decimals:0},rotatable_bonds:{label:"RotB",unit:"",decimals:0},rings:{label:"Rings",unit:"",decimals:0},heavy_atoms:{label:"Atoms",unit:"",decimals:0}};let n="",i=0;for(const[r,o]of Object.entries(e))if(t[r]!==void 0&&i<8){const a=typeof t[r]=="number"?t[r].toFixed(o.decimals):t[r];n+=`
                    <div class="popup-property">
                        <div class="popup-property-label">${o.label}</div>
                        <div class="popup-property-value">${a}${o.unit}</div>
                    </div>
                `,i++}for(;i<4;)n+='<div class="popup-property"></div>',i++;this.propertiesEl.innerHTML=n}isVisible(){return this.popup.classList.contains("visible")}async getSimilarCompounds(t){return await this.pubchem.getSimilarCompounds(t)}}class rp{constructor(){this.colorSelect=document.getElementById("color-select"),this.sizeSlider=document.getElementById("size-slider"),this.sizeValue=document.getElementById("size-value"),this.bloomSlider=document.getElementById("bloom-slider"),this.bloomValue=document.getElementById("bloom-value"),this.rotationSlider=document.getElementById("rotation-slider"),this.rotationValue=document.getElementById("rotation-value"),this.legendMin=document.getElementById("legend-min"),this.legendMax=document.getElementById("legend-max"),this.onColorChange=null,this.onSizeChange=null,this.onBloomChange=null,this.onRotationChange=null,this.init()}init(){this.colorSelect.addEventListener("change",t=>{this.onColorChange&&this.onColorChange(t.target.value),this.updateLegend(t.target.value)}),this.sizeSlider.addEventListener("input",t=>{const e=parseFloat(t.target.value);this.sizeValue.textContent=e.toFixed(1),this.onSizeChange&&this.onSizeChange(e)}),this.bloomSlider.addEventListener("input",t=>{const e=parseFloat(t.target.value);this.bloomValue.textContent=e.toFixed(1),this.onBloomChange&&this.onBloomChange(e)}),this.rotationSlider.addEventListener("input",t=>{const e=parseFloat(t.target.value);this.rotationValue.textContent=e.toFixed(2),this.onRotationChange&&this.onRotationChange(e)})}updateLegend(t){const n={mw:{min:"100 Da",max:"600 Da"},logp:{min:"-2",max:"6"},tpsa:{min:"0",max:"150 A"},hbd:{min:"0",max:"5"},hba:{min:"0",max:"10"}}[t]||{min:"Low",max:"High"};this.legendMin.textContent=n.min,this.legendMax.textContent=n.max}getColorBy(){return this.colorSelect.value}getPointSize(){return parseFloat(this.sizeSlider.value)}getBloomIntensity(){return parseFloat(this.bloomSlider.value)}getRotationSpeed(){return parseFloat(this.rotationSlider.value)}}class ap{constructor(){this.input=document.getElementById("search-input"),this.results=document.getElementById("search-results"),this.molecules=[],this.maxResults=10,this.debounceTimeout=null,this.onSelect=null,this.init()}init(){this.input.addEventListener("input",t=>{clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout(()=>{this.search(t.target.value)},200)}),this.input.addEventListener("focus",()=>{this.input.value.trim()&&this.search(this.input.value)}),document.addEventListener("click",t=>{!this.input.contains(t.target)&&!this.results.contains(t.target)&&this.hideResults()}),this.input.addEventListener("keydown",t=>{this.handleKeydown(t)})}setMolecules(t){this.molecules=t}search(t){var i,r,o;if(!t.trim()){this.hideResults();return}const e=t.toLowerCase(),n=[];for(let a=0;a<this.molecules.length&&n.length<this.maxResults;a++){const l=this.molecules[a],c=(i=l.name)==null?void 0:i.toLowerCase().includes(e),h=(r=l.id)==null?void 0:r.toLowerCase().includes(e),u=(o=l.smiles)==null?void 0:o.toLowerCase().includes(e);(c||h||u)&&n.push({molecule:l,index:a})}this.showResults(n)}showResults(t){t.length===0?this.results.innerHTML=`
                <div class="search-result-item" style="color: var(--text-muted);">
                    No molecules found
                </div>
            `:(this.results.innerHTML=t.map(({molecule:e,index:n})=>`
                <div class="search-result-item" data-index="${n}">
                    <div class="search-result-name">${e.name||e.id||"Unknown"}</div>
                    <div class="search-result-smiles">${e.smiles||"-"}</div>
                </div>
            `).join(""),this.results.querySelectorAll(".search-result-item[data-index]").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.dataset.index);this.selectResult(n)})})),this.results.classList.add("visible")}hideResults(){this.results.classList.remove("visible")}selectResult(t){this.hideResults(),this.input.value="",this.onSelect&&this.onSelect(t,this.molecules[t])}handleKeydown(t){const e=this.results.querySelectorAll(".search-result-item[data-index]"),n=this.results.querySelector(".search-result-item.active");switch(t.key){case"ArrowDown":if(t.preventDefault(),!n&&e.length>0)e[0].classList.add("active");else if(n){const i=n.nextElementSibling;i&&i.dataset.index!==void 0&&(n.classList.remove("active"),i.classList.add("active"))}break;case"ArrowUp":if(t.preventDefault(),n){const i=n.previousElementSibling;i&&i.dataset.index!==void 0&&(n.classList.remove("active"),i.classList.add("active"))}break;case"Enter":if(t.preventDefault(),n){const i=parseInt(n.dataset.index);this.selectResult(i)}else if(e.length>0){const i=parseInt(e[0].dataset.index);this.selectResult(i)}break;case"Escape":this.hideResults(),this.input.blur();break}}clear(){this.input.value="",this.hideResults()}}class op{constructor(t={}){this.nComponents=t.nComponents||3,this.nNeighbors=t.nNeighbors||15,this.minDist=t.minDist||.1,this.spread=t.spread||1,this.nEpochs=t.nEpochs||200,this.learningRate=t.learningRate||1}fitTransform(t,e){const n=t.length;if(n===0)return[];e==null||e(10,"Building neighbor graph...");const i=this.buildKNNGraph(t);e==null||e(30,"Computing graph weights...");const r=this.computeFuzzySimplicialSet(i,t);e==null||e(40,"Initializing embedding...");let o=this.initializeEmbedding(n);for(let a=0;a<this.nEpochs;a++)if(o=this.optimizeLayout(o,r,a),a%20===0){const l=40+Math.floor(a/this.nEpochs*55);e==null||e(l,`Optimizing layout (${a}/${this.nEpochs})...`)}return e==null||e(95,"Scaling coordinates..."),this.normalizeEmbedding(o)}buildKNNGraph(t){const e=t.length,n=Math.min(this.nNeighbors,e-1),i=[];for(let r=0;r<e;r++){const o=[];for(let a=0;a<e;a++)if(r!==a){const l=this.euclideanDistance(t[r],t[a]);o.push({index:a,distance:l})}o.sort((a,l)=>a.distance-l.distance),i.push(o.slice(0,n))}return i}computeFuzzySimplicialSet(t,e){const n=e.length,i=new Map;for(let r=0;r<n;r++){const o=t[r];if(o.length===0)continue;const a=o[0].distance,l=this.computeSigma(o,a);for(const{index:c,distance:h}of o){const u=Math.exp(-Math.max(0,h-a)/l),f=`${r},${c}`,m=`${c},${r}`,g=i.get(f)||0;i.get(m);const _=g+u-g*u;i.set(f,_),i.set(m,_)}}return i}computeSigma(t,e,n=Math.log2(15)){let i=.001,r=1e3;for(let o=0;o<64;o++){const a=(i+r)/2;let l=0;for(const{distance:c}of t)l+=Math.exp(-Math.max(0,c-e)/a);if(Math.abs(l-n)<.001)return a;l>n?r=a:i=a}return(i+r)/2}initializeEmbedding(t){const e=[];for(let n=0;n<t;n++){const i=[];for(let r=0;r<this.nComponents;r++)i.push((Math.random()-.5)*10);e.push(i)}return e}optimizeLayout(t,e,n){const i=t.length,r=this.learningRate*(1-n/this.nEpochs);for(const[a,l]of e.entries()){if(l<.01)continue;const[c,h]=a.split(",").map(Number),u=[];let f=0;for(let _=0;_<this.nComponents;_++){const p=t[c][_]-t[h][_];u.push(p),f+=p*p}const m=Math.sqrt(f)+.001,g=-2*l*r/m;for(let _=0;_<this.nComponents;_++){const p=g*u[_];t[c][_]+=p,t[h][_]-=p}}const o=Math.min(5,i-1);for(let a=0;a<i;a++)for(let l=0;l<o;l++){const c=Math.floor(Math.random()*i);if(a===c)continue;let h=0;const u=[];for(let m=0;m<this.nComponents;m++){const g=t[a][m]-t[c][m];u.push(g),h+=g*g}const f=Math.sqrt(h)+.001;if(f<4*this.spread){const m=2*r*this.spread/(f*f+.01);for(let g=0;g<this.nComponents;g++)t[a][g]+=m*u[g]/f}}return t}normalizeEmbedding(t,e=80){const n=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(const l of t)for(let c=0;c<this.nComponents;c++)n[c]=Math.min(n[c],l[c]),i[c]=Math.max(i[c],l[c]);const r=i.map((l,c)=>l-n[c]),o=Math.max(...r),a=e/(o/2);return t.map(l=>l.map((c,h)=>(c-(n[h]+i[h])/2)*a))}euclideanDistance(t,e){let n=0;for(let i=0;i<t.length;i++){const r=t[i]-e[i];n+=r*r}return Math.sqrt(n)}}class lp{constructor(){this.patterns={benzene:/c1ccccc1/i,pyridine:/c1ccncc1|c1cnccc1/i,imidazole:/c1cnc\[nH\]1|c1c\[nH\]cn1/i,pyrrole:/c1cc\[nH\]c1/i,furan:/c1ccoc1/i,thiophene:/c1ccsc1/i,carboxylic_acid:/C\(=O\)O[H]?|C\(O\)=O/,ester:/C\(=O\)O[A-Z]/,amide:/C\(=O\)N/,amine_primary:/[^a-z]N(?![a-z])(?!.*C\(=O\))/,amine_secondary:/[A-Z]N[A-Z](?![a-z])/,amine_tertiary:/N\([A-Z]\)\([A-Z]\)/,hydroxyl:/[^C]O[H]?(?!=)/,carbonyl:/C=O(?!O)(?!N)/,ether:/[A-Z]O[A-Z](?!=)/,thiol:/S[H]?(?![A-Z=])/,sulfide:/[A-Z]S[A-Z]/,sulfonyl:/S\(=O\)\(=O\)/,nitro:/\[N\+\]\(=O\)\[O-\]|N\(=O\)=O/,nitrile:/C#N/,halogen_F:/F/,halogen_Cl:/Cl/,halogen_Br:/Br/,halogen_I:/I(?![a-z])/,phosphate:/P\(=O\)/},this.atomTypes=["C","N","O","S","P","F","Cl","Br","I"]}generate(t){if(!t)return new Array(128).fill(0);const e=[];for(const[u,f]of Object.entries(this.patterns))e.push(f.test(t)?1:0);for(const u of this.atomTypes){const f=new RegExp(u,"g"),m=(t.match(f)||[]).length;e.push(Math.min(m/10,1))}const i=(t.match(/[1-9]/g)||[]).length/2;e.push(Math.min(i/5,1)),e.push(i>=1?1:0),e.push(i>=2?1:0),e.push(i>=3?1:0),e.push(i>=4?1:0);const r=this.extractNgrams(t,2,3),o=new Array(64).fill(0);for(const u of r){const f=this.hashString(u)%64;o[f]=1}e.push(...o);const a=t.replace(/[^A-Za-z]/g,"").length;e.push(Math.min(a/50,1)),e.push(a>10?1:0),e.push(a>20?1:0),e.push(a>30?1:0),e.push(a>40?1:0);const l=(t.match(/\(/g)||[]).length;e.push(Math.min(l/10,1)),e.push(l>2?1:0),e.push(l>5?1:0);const c=(t.match(/=/g)||[]).length;e.push(Math.min(c/5,1));const h=(t.match(/#/g)||[]).length;return e.push(h>0?1:0),e}extractNgrams(t,e,n){const i=new Set,r=t.replace(/[0-9]/g,"");for(let o=e;o<=n;o++)for(let a=0;a<=r.length-o;a++)i.add(r.substring(a,a+o));return i}hashString(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);e=(e<<5)-e+i,e=e&e}return Math.abs(e)}}class cp{constructor(){this.fingerprinter=new lp,this.umap=new op({nComponents:3,nNeighbors:15,minDist:.1,nEpochs:150})}async embed(t,e){if(!t||t.length===0)return[];e==null||e(0,"Generating fingerprints...");const n=t.map((r,o)=>{if(o%100===0){const a=Math.floor(o/t.length*10);e==null||e(a,`Fingerprinting molecule ${o}/${t.length}...`)}return this.fingerprinter.generate(r.smiles)}),i=this.umap.fitTransform(n,e);return e==null||e(100,"Embedding complete!"),t.map((r,o)=>({...r,x:i[o][0],y:i[o][1],z:i[o][2],embeddingMethod:"UMAP"}))}similarity(t,e){const n=this.fingerprinter.generate(t),i=this.fingerprinter.generate(e);let r=0,o=0;for(let a=0;a<n.length;a++)n[a]>0&&i[a]>0&&r++,(n[a]>0||i[a]>0)&&o++;return o>0?r/o:0}findSimilar(t,e,n=10){const i=this.fingerprinter.generate(t);return e.map((o,a)=>{const l=this.fingerprinter.generate(o.smiles);let c=0,h=0;for(let u=0;u<i.length;u++)i[u]>0&&l[u]>0&&c++,(i[u]>0||l[u]>0)&&h++;return{index:a,molecule:o,similarity:h>0?c/h:0}}).sort((o,a)=>a.similarity-o.similarity).slice(0,n)}}class Va{constructor(t,e,n){this.pointCloud=t,this.colorMapper=e,this.renderer=n,this.pubchem=new Po,this.embeddingEngine=new cp,this.currentMode="explore",this.selectedMolecule=null,this.molecules=[],this.modeButtons=document.querySelectorAll(".mode-btn"),this.statMode=document.getElementById("stat-mode"),this.constellationOverlay=document.getElementById("constellation-overlay"),this.timelinePanel=document.getElementById("timeline-panel"),this.pharmacophorePanel=document.getElementById("pharmacophore-panel"),this.timelineSlider=document.getElementById("timeline-slider"),this.timelineYear=document.getElementById("timeline-year"),this.constellationLines=[],this.featureToggles=document.querySelectorAll(".toggle-switch"),this.init()}init(){this.modeButtons.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.mode;this.setMode(e)})}),this.timelineSlider&&this.timelineSlider.addEventListener("input",t=>{const e=t.target.value;this.timelineYear.textContent=e,this.filterByYear(e)}),this.featureToggles.forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("active"),this.updatePharmacophoreDisplay()})}),this.modeHint=document.getElementById("mode-hint")}getModeInfo(t){return{explore:{hint:null,description:"Free exploration mode"},constellation:{hint:"✦ Click a molecule to draw connections to similar compounds",description:"Shows structural similarity relationships"},supernova:{hint:"✴ Click a molecule to trigger pulse effect and highlight similar compounds",description:"Animated similarity visualization"},safety:{hint:"🔴 Red = High MW (>500) | 🟠 Orange = Medium | 🟡 Gold = Low | 🟢 Green = Safe range",description:"Coloring by molecular weight (safety proxy)"},targets:{hint:"🟢 High H-bond capacity | 🔵 Medium | 🟣 Low | Gray = Minimal interaction",description:"Coloring by H-bond donors + acceptors"},literature:{hint:"🟡 Gold = Optimal LogP (drug-like) | 🟠 Orange = Moderate | 🟣 Purple = Less optimal",description:"Coloring by LogP (research interest proxy)"},patents:{hint:"🟣 Purple = Likely patented (TPSA 40-90) | Others = Less likely patented",description:"Coloring by TPSA (patent likelihood proxy)"},timemachine:{hint:"Use the timeline slider to filter by discovery year",description:"Time-based filtering"},pharmacophore:{hint:"Toggle features to highlight pharmacophore properties",description:"Pharmacophore feature visualization"}}[t]||{hint:null,description:""}}showModeHint(t){const e=this.getModeInfo(t);this.modeHint&&e.hint?(this.modeHint.textContent=e.hint,this.modeHint.style.display="block"):this.modeHint&&(this.modeHint.style.display="none")}setMode(t){var e,n,i,r,o,a;switch(this.currentMode=t,this.modeButtons.forEach(l=>{l.classList.toggle("active",l.dataset.mode===t)}),this.statMode&&(this.statMode.textContent=t.toUpperCase()),this.showModeHint(t),(e=this.constellationOverlay)==null||e.classList.remove("visible"),(n=this.timelinePanel)==null||n.classList.remove("visible"),(i=this.pharmacophorePanel)==null||i.classList.remove("visible"),this.clearConstellationLines(),this.pointCloud.updateColors(this.colorMapper.createMapper()),t){case"explore":break;case"constellation":(r=this.constellationOverlay)==null||r.classList.add("visible"),this.activateConstellationMode();break;case"supernova":this.activateSupernovaMode();break;case"safety":this.activateSafetyAuraMode();break;case"targets":this.activateTargetHunterMode();break;case"literature":this.activateLiteratureGlowMode();break;case"patents":this.activatePatentShieldMode();break;case"timemachine":(o=this.timelinePanel)==null||o.classList.add("visible");break;case"pharmacophore":(a=this.pharmacophorePanel)==null||a.classList.add("visible");break}}activateConstellationMode(){console.log("Constellation mode activated")}drawConstellation(t,e){if(this.currentMode!=="constellation"||!(t!=null&&t.smiles)||!this.pointCloud)return;this.molecules=e,this.clearConstellationLines();const n=this.embeddingEngine.findSimilar(t.smiles,e,15);if(n.length===0){console.log("No similar compounds found");return}const i=e.findIndex(a=>a.id===t.id);if(i===-1)return;const r=this.pointCloud.getPosition(i);if(!r)return;const o=this.projectToScreen(r);n.forEach(({index:a,similarity:l})=>{if(a!==i&&l>.3){const c=this.pointCloud.getPosition(a);if(c){const h=this.projectToScreen(c);this.drawLine(o,h,l)}}}),this.highlightSimilarMolecules(e,n)}projectToScreen(t){const e=this.renderer.getCamera(),n=t.clone().project(e);return{x:(n.x+1)/2*window.innerWidth,y:-(n.y-1)/2*window.innerHeight}}drawLine(t,e,n=1){const i=this.constellationOverlay;if(!i)return;const r=document.createElementNS("http://www.w3.org/2000/svg","line");r.setAttribute("x1",t.x),r.setAttribute("y1",t.y),r.setAttribute("x2",e.x),r.setAttribute("y2",e.y),r.setAttribute("class","constellation-line"),r.style.opacity=.3+n*.7,r.style.strokeWidth=1+n*2,i.appendChild(r),this.constellationLines.push(r)}clearConstellationLines(){this.constellationLines.forEach(t=>t.remove()),this.constellationLines=[]}highlightSimilarMolecules(t,e){const n=new Set(e.map(o=>o.index)),i=new Map(e.map(o=>[o.index,o.similarity])),r=t.map((o,a)=>{if(n.has(a)){const c=i.get(a)||.5;return{r:c,g:.2+c*.3,b:1-c*.3}}const l=this.colorMapper.getColor(o);return{r:l.r*.3,g:l.g*.3,b:l.b*.3}});this.pointCloud.setColors(r)}activateSupernovaMode(){console.log("Supernova mode activated")}triggerSupernova(t,e){if(this.currentMode!=="supernova"||!(t!=null&&t.smiles)||!this.pointCloud)return;const n=e.findIndex(o=>o.id===t.id);n>=0&&this.pointCloud.pulseEffect(n);const i=this.embeddingEngine.findSimilar(t.smiles,e,20),r=e.map((o,a)=>{const l=i.find(c=>c.index===a);if(l){const c=l.similarity;return{r:1,g:c*.5,b:1-c*.3}}return{r:.15,g:.1,b:.2}});this.pointCloud.setColors(r)}async activateSafetyAuraMode(){console.log("Safety Aura mode activated");const t=e=>{var i;const n=((i=e.properties)==null?void 0:i.mw)||0;return n>500?{r:1,g:.2,b:.4}:n>350?{r:1,g:.6,b:0}:n>200?{r:1,g:.85,b:0}:{r:0,g:1,b:.5}};this.pointCloud.updateColors(t)}activateTargetHunterMode(){console.log("Target Hunter mode activated");const t=e=>{var o,a;const n=((o=e.properties)==null?void 0:o.hba)||0,i=((a=e.properties)==null?void 0:a.hbd)||0,r=n+i;return r>8?{r:0,g:1,b:.5}:r>5?{r:0,g:.83,b:1}:r>2?{r:.7,g:.5,b:1}:{r:.5,g:.5,b:.5}};this.pointCloud.updateColors(t)}activateLiteratureGlowMode(){console.log("Literature Glow mode activated");const t=e=>{var r;const n=((r=e.properties)==null?void 0:r.logp)||0,i=Math.abs(n-2);return i<1?{r:1,g:.85,b:0}:i<2?{r:1,g:.6,b:.2}:i<3?{r:.6,g:.4,b:.8}:{r:.3,g:.3,b:.4}};this.pointCloud.updateColors(t)}activatePatentShieldMode(){console.log("Patent Shield mode activated");const t=e=>{var i;const n=((i=e.properties)==null?void 0:i.tpsa)||0;return n>=40&&n<=90?{r:.75,g:0,b:1}:n>90&&n<=140?{r:.5,g:.2,b:.8}:{r:0,g:.5,b:.5}};this.pointCloud.updateColors(t)}filterByYear(t){console.log("Filtering by year:",t)}updatePharmacophoreDisplay(){const t=[];this.featureToggles.forEach(n=>{n.classList.contains("active")&&t.push(n.dataset.feature)}),console.log("Active pharmacophore features:",t);const e=n=>{let i=0;const r=n.properties||{};t.includes("hbd")&&r.hbd>0&&(i+=r.hbd),t.includes("hba")&&r.hba>0&&(i+=r.hba);const o=Math.min(i/10,1);return{r:o,g:.5+o*.5,b:1-o*.5}};this.pointCloud.updateColors(e)}onMoleculeSelect(t,e){switch(this.selectedMolecule=t,this.currentMode){case"constellation":this.drawConstellation(t,e);break;case"supernova":this.triggerSupernova(t,e);break}}updateConstellation(t){this.currentMode==="constellation"&&this.selectedMolecule&&this.drawConstellation(this.selectedMolecule,t)}getMode(){return this.currentMode}}class hp{constructor(){this.onProgress=null}async load(t){try{this.onProgress&&this.onProgress("Fetching dataset...");const e=await fetch(t);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);this.onProgress&&this.onProgress("Parsing data...");const n=await e.json();if(!n.molecules||!Array.isArray(n.molecules))throw new Error("Invalid dataset format: missing molecules array");return this.normalizeCoordinates(n.molecules),this.onProgress&&this.onProgress("Dataset loaded"),{metadata:n.metadata||{},molecules:n.molecules}}catch(e){throw console.error("Failed to load dataset:",e),e}}normalizeCoordinates(t){if(t.length===0)return;let e=1/0,n=-1/0,i=1/0,r=-1/0,o=1/0,a=-1/0;t.forEach(d=>{e=Math.min(e,d.x),n=Math.max(n,d.x),i=Math.min(i,d.y),r=Math.max(r,d.y),o=Math.min(o,d.z),a=Math.max(a,d.z)});const l=(e+n)/2,c=(i+r)/2,h=(o+a)/2,u=n-e||1,f=r-i||1,m=a-o||1,p=100/Math.max(u,f,m);t.forEach(d=>{d.x=(d.x-l)*p,d.y=(d.y-c)*p,d.z=(d.z-h)*p})}getPropertyStats(t,e){const n=t.map(h=>{var u;return(u=h.properties)==null?void 0:u[e]}).filter(h=>h!=null);if(n.length===0)return{min:0,max:1,mean:.5,std:0};const i=Math.min(...n),r=Math.max(...n),a=n.reduce((h,u)=>h+u,0)/n.length,l=n.reduce((h,u)=>h+(u-a)**2,0)/n.length,c=Math.sqrt(l);return{min:i,max:r,mean:a,std:c}}}class up{constructor(){this.colorStops=[{pos:0,color:new ot(4286945)},{pos:.15,color:new ot(6970061)},{pos:.3,color:new ot(8087790)},{pos:.45,color:new ot(9662683)},{pos:.55,color:new ot(12211667)},{pos:.7,color:new ot(13934678)},{pos:.85,color:new ot(12615744)},{pos:1,color:new ot(9127187)}],this.propertyRanges={mw:{min:100,max:600},logp:{min:-2,max:6},tpsa:{min:0,max:150},hbd:{min:0,max:5},hba:{min:0,max:10}},this.currentProperty="mw"}setProperty(t){this.currentProperty=t}setPropertyRange(t,e,n){this.propertyRanges[t]||(this.propertyRanges[t]={}),this.propertyRanges[t].min=e,this.propertyRanges[t].max=n}getColor(t){var r;const e=(r=t.properties)==null?void 0:r[this.currentProperty];if(e==null)return new ot(9662683);const n=this.propertyRanges[this.currentProperty]||{min:0,max:1},i=this.normalize(e,n.min,n.max);return this.interpolateColor(i)}normalize(t,e,n){return n===e?.5:Math.max(0,Math.min(1,(t-e)/(n-e)))}interpolateColor(t){t=Math.max(0,Math.min(1,t));let e=this.colorStops[0],n=this.colorStops[this.colorStops.length-1];for(let l=0;l<this.colorStops.length-1;l++)if(t>=this.colorStops[l].pos&&t<=this.colorStops[l+1].pos){e=this.colorStops[l],n=this.colorStops[l+1];break}const i=n.pos-e.pos,r=i===0?0:(t-e.pos)/i,o=r*r*(3-2*r),a=new ot;return a.r=e.color.r+(n.color.r-e.color.r)*o,a.g=e.color.g+(n.color.g-e.color.g)*o,a.b=e.color.b+(n.color.b-e.color.b)*o,a}getCurrentProperty(){return this.currentProperty}getRange(t){return this.propertyRanges[t||this.currentProperty]}createMapper(){return t=>this.getColor(t)}}class Wa{constructor(t={}){this.config={numArms:t.numArms||2,armSpread:t.armSpread||.3,innerRadius:t.innerRadius||20,outerRadius:t.outerRadius||120,heightSpread:t.heightSpread||3,windingFactor:t.windingFactor||.5,clusterSpread:t.clusterSpread||5,...t}}embed(t){if(!t||t.length===0)return[];const e=t.map(i=>this.generateFingerprint(i.smiles)),n=this.findSpiralOrdering(e,t);return this.assignSpiralCoordinates(t,n)}generateFingerprint(t){if(!t)return new Set;const e=new Set;for(let o=0;o<t.length-1;o++)e.add(t.substring(o,o+2)),o<t.length-2&&e.add(t.substring(o,o+3));const n=(t.match(/1|2|3|4|5|6|7|8|9/g)||[]).length/2;e.add(`rings:${Math.floor(n)}`);const i={carboxyl:/C\(=O\)O|C\(O\)=O/,amine:/N(?![a-z])/,hydroxyl:/O(?![a-z])(?!.*=)/,carbonyl:/C=O/,aromatic:/c1|c2|c3/,halogen:/F|Cl|Br|I/,ether:/COC|coc/,sulfur:/S(?![a-z])/,phosphorus:/P/,nitro:/\[N\+\]|N\(=O\)/,cyano:/C#N/};for(const[o,a]of Object.entries(i))a.test(t)&&e.add(`group:${o}`);const r=t.replace(/[^A-Za-z]/g,"").length;return e.add(`size:${Math.floor(r/10)}`),e}tanimotoSimilarity(t,e){if(t.size===0&&e.size===0)return 1;if(t.size===0||e.size===0)return 0;let n=0;for(const r of t)e.has(r)&&n++;const i=t.size+e.size-n;return i>0?n/i:0}findSpiralOrdering(t,e){if(e.length===0)return[];const i=this.groupByProperty(e),r=[];for(const o of i){if(o.length===0)continue;const a=new Set;let l=o[0];a.add(l);const c=[l];for(;a.size<o.length;){let h=-1,u=-1;for(const f of o){if(a.has(f))continue;const m=this.tanimotoSimilarity(t[l],t[f]);m>u&&(u=m,h=f)}h>=0&&(a.add(h),c.push(h),l=h)}r.push(...c)}return r}groupByProperty(t){const e=this.config.numArms,n=Array.from({length:e},()=>[]),i=t.map((r,o)=>{var a;return{index:o,mw:((a=r.properties)==null?void 0:a.mw)||300}});return i.sort((r,o)=>r.mw-o.mw),i.forEach((r,o)=>{const a=o%e;n[a].push(r.index)}),n}assignSpiralCoordinates(t,e){const n=[...t],i=e.length;return e.forEach((r,o)=>{const a=o%this.config.numArms,l=Math.floor(o/this.config.numArms),c=Math.ceil(i/this.config.numArms),h=c>1?l/(c-1):.5,u=this.config.innerRadius+h*(this.config.outerRadius-this.config.innerRadius),m=a/this.config.numArms*Math.PI*2+this.config.windingFactor*Math.log(u/this.config.innerRadius+1),g=this.gaussianRandom()*this.config.armSpread,_=this.gaussianRandom()*this.config.clusterSpread,p=u+_,d=m+g,y=p*Math.cos(d),M=p*Math.sin(d),T=1-h*.5,P=this.gaussianRandom()*this.config.heightSpread*T;n[r]={...n[r],x:y,y:P,z:M,spiralData:{armIndex:a,positionInArm:h,radius:p,angle:d}}}),n}gaussianRandom(){let t=0,e=0;for(;t===0;)t=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}getStats(t){const e=t.filter(i=>i.spiralData),n={};for(let i=0;i<this.config.numArms;i++)n[i]=e.filter(r=>{var o;return((o=r.spiralData)==null?void 0:o.armIndex)===i}).length;return{total:t.length,embedded:e.length,armCounts:n}}}class dp{constructor(){this.renderer=null,this.pointCloud=null,this.realisticGalaxy=null,this.raycaster=null,this.popup=null,this.controls=null,this.searchBar=null,this.modeController=null,this.dataLoader=null,this.colorMapper=null,this.spiralEmbedding=null,this.molecules=[],this.viewMode="spiral",this.filters={mwMin:0,mwMax:1e3,logpMin:-5,logpMax:10},this.filteredIndices=new Set,this.substructurePattern=null,this.substructureMatches=new Set,this.hideFilteredMode=!1,this.rdkitModule=null,this.loadingScreen=document.getElementById("loading-screen"),this.loadingText=document.getElementById("loading-text"),this.statMolecules=document.getElementById("stat-molecules"),this.statFps=document.getElementById("stat-fps"),this.lastTime=performance.now(),this.animationId=null,this.time=0,this.init()}async init(){try{this.updateLoadingStatus("INITIALIZING RENDERER"),this.initRDKit();const t=document.getElementById("galaxy-canvas");this.renderer=new np(t),this.dataLoader=new hp,this.dataLoader.onProgress=e=>this.updateLoadingStatus(e),this.colorMapper=new up,this.popup=new sp,this.controls=new rp,this.searchBar=new ap,this.viewMode==="cinematic"?await this.createRealisticGalaxy():this.viewMode==="spiral"?await this.createSpiralGalaxy():await this.loadDataset(),this.pointCloud&&(this.modeController=new Va(this.pointCloud,this.colorMapper,this.renderer)),this.setupControls(),this.setupEventListeners(),this.hideLoading(),this.animate()}catch(t){console.error("Failed to initialize app:",t),this.updateLoadingStatus(`ERROR: ${t.message}`)}}async createRealisticGalaxy(){this.realisticGalaxy=new Ga({coreStars:6e4,bulgeStars:1e5,diskStars:12e4,armStars:1e5,haloStars:25e3,nebulaParticles:12e3,dustParticles:6e3,coreRadius:10,bulgeRadius:30,diskRadius:150,diskHeight:4,haloRadius:220,numArms:2,armWindingFactor:.5,armSpread:.4,barLength:35,barWidth:10,chunkSize:8e3});const t=await this.realisticGalaxy.create((n,i)=>{this.updateLoadingStatus(`${i} [${n}%]`)});this.renderer.add(t);const e=423e3;this.statMolecules.textContent=e.toLocaleString(),this.generateMoleculeData()}async createSpiralGalaxy(){this.updateLoadingStatus("INITIALIZING SPIRAL EMBEDDING"),this.realisticGalaxy=new Ga({coreStars:0,bulgeStars:8e3,diskStars:4e4,armStars:3e4,haloStars:15e3,nebulaParticles:6e3,dustParticles:3e3,coreRadius:5,bulgeRadius:20,diskRadius:130,diskHeight:2,haloRadius:200,numArms:2,armWindingFactor:.5,armSpread:.35,barLength:20,barWidth:6,chunkSize:8e3});const t=await this.realisticGalaxy.create((e,n)=>{this.updateLoadingStatus(`${n} [${e}%]`)});this.renderer.add(t),this.updateLoadingStatus("EMBEDDING MOLECULES"),await this.generateSpiralMolecules(),this.createPointCloud(),this.raycaster=new ka(this.renderer.getCamera(),this.pointCloud),this.raycaster.onHover=e=>{const n=this.pointCloud.getMolecule(e);this.popup.show(n)},this.raycaster.onUnhover=()=>{this.raycaster.isPinned()||this.popup.hide()},this.raycaster.onPin=e=>{const n=this.pointCloud.getMolecule(e);this.popup.show(n),this.modeController&&this.modeController.onMoleculeSelect(n,this.molecules)},this.raycaster.onUnpin=()=>{this.popup.hide()},this.modeController=new Va(this.pointCloud,this.colorMapper,this.renderer),this.searchBar.setMolecules(this.molecules),this.statMolecules.textContent=this.molecules.length.toLocaleString(),this.updateDataStats(this.molecules),this.filteredIndices.clear(),this.molecules.forEach((e,n)=>this.filteredIndices.add(n))}async generateSpiralMolecules(){const t=[{name:"Aspirin",smiles:"CC(=O)OC1=CC=CC=C1C(=O)O",class:"NSAID"},{name:"Ibuprofen",smiles:"CC(C)CC1=CC=C(C=C1)C(C)C(=O)O",class:"NSAID"},{name:"Naproxen",smiles:"COC1=CC2=CC(=CC=C2C=C1)C(C)C(=O)O",class:"NSAID"},{name:"Acetaminophen",smiles:"CC(=O)NC1=CC=C(C=C1)O",class:"Analgesic"},{name:"Caffeine",smiles:"CN1C=NC2=C1C(=O)N(C(=O)N2C)C",class:"Stimulant"},{name:"Theophylline",smiles:"CN1C=NC2=C1C(=O)NC(=O)N2C",class:"Stimulant"},{name:"Diazepam",smiles:"CN1C(=O)CN=C(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3",class:"Benzodiazepine"},{name:"Lorazepam",smiles:"OC1N=C(C2=CC=CC=C2Cl)C2=CC(Cl)=CC=C2NC1=O",class:"Benzodiazepine"},{name:"Alprazolam",smiles:"CC1=NN=C2CN=C(C3=CC=CC=C3F)C3=CC=CC=C3N12",class:"Benzodiazepine"},{name:"Omeprazole",smiles:"COC1=CC2=NC(=NC2=CC1OC)S(=O)CC3=NC=C(C)C(=C3)C",class:"PPI"},{name:"Lansoprazole",smiles:"CC1=C(C=CN=C1CS(=O)C2=NC3=CC=CC=C3N2)OCC(F)(F)F",class:"PPI"},{name:"Metformin",smiles:"CN(C)C(=N)NC(=N)N",class:"Antidiabetic"},{name:"Glipizide",smiles:"CC1=NC=C(C=C1)C(=O)NCCC2=CC=C(C=C2)S(=O)(=O)NC(=O)NC3CCCCC3",class:"Antidiabetic"},{name:"Atorvastatin",smiles:"CC(C)C1=C(C(=C(N1CCC(CC(CC(=O)O)O)O)C2=CC=C(C=C2)F)C3=CC=CC=C3)C(=O)NC4=CC=CC=C4",class:"Statin"},{name:"Simvastatin",smiles:"CCC(C)(C)C(=O)OC1CC(C)C=C2C=CC(C)C(CCC3CC(O)CC(=O)O3)C12",class:"Statin"},{name:"Rosuvastatin",smiles:"CC(C)C1=NC(=NC(=C1C=CC(CC(CC(=O)O)O)O)C2=CC=C(C=C2)F)N(C)S(=O)(=O)C",class:"Statin"},{name:"Sertraline",smiles:"CNC1CCC(C2=CC=CC=C12)C3=CC(=C(C=C3)Cl)Cl",class:"SSRI"},{name:"Fluoxetine",smiles:"CNCCC(C1=CC=CC=C1)OC2=CC=C(C=C2)C(F)(F)F",class:"SSRI"},{name:"Paroxetine",smiles:"FC1=CC=C(C2CCNCC2COC3=CC4=C(OCO4)C=C3)C=C1",class:"SSRI"},{name:"Citalopram",smiles:"CN(C)CCCC1(C2=CC=C(C=C2)F)OCC3=CC(=CC=C3C1=O)C#N",class:"SSRI"},{name:"Lisinopril",smiles:"NCCCC[C@H](N[C@@H](CCC1=CC=CC=C1)C(=O)O)C(=O)N2CCC[C@H]2C(=O)O",class:"ACE Inhibitor"},{name:"Enalapril",smiles:"CCOC(=O)C(CCC1=CC=CC=C1)NC(C)C(=O)N2CCCC2C(=O)O",class:"ACE Inhibitor"},{name:"Losartan",smiles:"CCCCC1=NC(=C(N1CC2=CC=C(C=C2)C3=CC=CC=C3C4=NNN=N4)CO)Cl",class:"ARB"},{name:"Valsartan",smiles:"CCCCC(=O)N(CC1=CC=C(C=C1)C2=CC=CC=C2C3=NNN=N3)C(C(C)C)C(=O)O",class:"ARB"},{name:"Metoprolol",smiles:"COCCC1=CC=C(C=C1)OCC(O)CNC(C)C",class:"Beta Blocker"},{name:"Atenolol",smiles:"CC(C)NCC(O)COC1=CC=C(C=C1)CC(=O)N",class:"Beta Blocker"},{name:"Propranolol",smiles:"CC(C)NCC(O)COC1=CC=CC2=CC=CC=C12",class:"Beta Blocker"},{name:"Warfarin",smiles:"CC(=O)CC(C1=CC=CC=C1)C2=C(C3=CC=CC=C3OC2=O)O",class:"Anticoagulant"},{name:"Rivaroxaban",smiles:"ClC1=CC=C(C=C1)N2C(=O)C(NCC3=CC=C(C=C3)N4CCOCC4=O)OC5=CC=CC=C52",class:"Anticoagulant"},{name:"Amoxicillin",smiles:"CC1(C(N2C(S1)C(C2=O)NC(=O)C(C3=CC=C(C=C3)O)N)C(=O)O)C",class:"Antibiotic"},{name:"Ciprofloxacin",smiles:"C1CC1N2C=C(C(=O)C3=CC(=C(C=C32)N4CCNCC4)F)C(=O)O",class:"Antibiotic"},{name:"Azithromycin",smiles:"CC1C(C(CC(C(C(C(C(C(C(=O)O1)C)OC2CC(C(C(O2)C)O)(C)OC)C)OC3C(C(CC(O3)C)N(C)C)O)(C)O)C)C)O",class:"Antibiotic"}],e=[];let n=0;for(const i of t){e.push({id:`MOL${String(++n).padStart(5,"0")}`,name:i.name,smiles:i.smiles,drugClass:i.class,properties:this.generateProperties(i.smiles)});const r=20+Math.floor(Math.random()*30);for(let o=0;o<r;o++)e.push({id:`MOL${String(++n).padStart(5,"0")}`,name:`${i.name} Analog ${o+1}`,smiles:i.smiles,drugClass:i.class,properties:this.generateVariedProperties(i.smiles)})}this.spiralEmbedding=new Wa({numArms:2,innerRadius:8,outerRadius:100,armSpread:.2,heightSpread:1.5,windingFactor:.4,clusterSpread:3}),this.molecules=this.spiralEmbedding.embed(e),this.updatePropertyRanges()}generateProperties(t){const e=t.replace(/[^A-Za-z]/g,"").length,n=(t.match(/1|2|3|4|5|6|7|8|9/g)||[]).length/2;return{mw:100+e*12+Math.random()*50,logp:-1+n*.5+Math.random()*3,tpsa:20+e*2+Math.random()*50,hbd:Math.floor(Math.random()*4),hba:Math.floor(Math.random()*8)}}generateVariedProperties(t){const e=this.generateProperties(t);return{mw:e.mw*(.85+Math.random()*.3),logp:e.logp+(Math.random()-.5)*1.5,tpsa:e.tpsa*(.8+Math.random()*.4),hbd:Math.floor(Math.random()*5),hba:Math.floor(Math.random()*10)}}generateMoleculeData(){const t=[{name:"Aspirin",smiles:"CC(=O)OC1=CC=CC=C1C(=O)O"},{name:"Caffeine",smiles:"CN1C=NC2=C1C(=O)N(C(=O)N2C)C"},{name:"Ibuprofen",smiles:"CC(C)CC1=CC=C(C=C1)C(C)C(=O)O"},{name:"Acetaminophen",smiles:"CC(=O)NC1=CC=C(C=C1)O"},{name:"Naproxen",smiles:"COC1=CC2=CC(=CC=C2C=C1)C(C)C(=O)O"},{name:"Diazepam",smiles:"CN1C(=O)CN=C(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3"},{name:"Omeprazole",smiles:"COC1=CC2=NC(=NC2=CC1OC)S(=O)CC3=NC=C(C)C(=C3)C"},{name:"Metformin",smiles:"CN(C)C(=N)NC(=N)N"},{name:"Atorvastatin",smiles:"CC(C)C1=C(C(=C(N1CCC(CC(CC(=O)O)O)O)C2=CC=C(C=C2)F)C3=CC=CC=C3)C(=O)NC4=CC=CC=C4"},{name:"Lisinopril",smiles:"NCCCC[C@H](N[C@@H](CCc1ccccc1)C(=O)O)C(=O)N2CCC[C@H]2C(=O)O"},{name:"Sertraline",smiles:"CNC1CCC(C2=CC=CC=C12)C3=CC(=C(C=C3)Cl)Cl"},{name:"Fluoxetine",smiles:"CNCCC(C1=CC=CC=C1)OC2=CC=C(C=C2)C(F)(F)F"},{name:"Warfarin",smiles:"CC(=O)CC(c1ccccc1)c2c(O)c3ccccc3oc2=O"},{name:"Metoprolol",smiles:"COCCc1ccc(OCC(O)CNC(C)C)cc1"},{name:"Losartan",smiles:"CCCCc1nc(Cl)c(n1Cc2ccc(cc2)c3ccccc3c4nn[nH]n4)C(=O)O"}],e=5e3;this.molecules=[];const n=2,i=.4,r=150,o=35;for(let a=0;a<e;a++){const c=a%n/n*Math.PI*2,h=Math.pow(Math.random(),.6),u=o+h*(r-o),f=c+.5*Math.log(u/o)+this.gaussianRandom()*i,m=Math.cos(f)*u,g=this.gaussianRandom()*3,_=Math.sin(f)*u,p=Math.sqrt(m*m+_*_),d=150+p/r*400+Math.random()*100,y=-2+p/r*6+this.gaussianRandom()*1,M=20+Math.random()*130,T=Math.floor(Math.random()*6),P=Math.floor(Math.random()*11),R=t[Math.floor(Math.random()*t.length)];this.molecules.push({id:`MOL${String(a+1).padStart(5,"0")}`,name:a<t.length?R.name:`Compound ${a+1}`,smiles:R.smiles,x:m,y:g,z:_,properties:{mw:d,logp:y,tpsa:M,hbd:T,hba:P}})}this.searchBar.setMolecules(this.molecules)}async loadDataset(){try{const t=await this.dataLoader.load("./datasets/sample-10k.json");this.molecules=t.molecules,this.updatePropertyRanges(),this.createPointCloud(),this.statMolecules.textContent=this.molecules.length.toLocaleString(),this.searchBar.setMolecules(this.molecules)}catch(t){console.warn("Failed to load dataset, generating sample data:",t),this.generateSampleData()}}generateSampleData(){this.updateLoadingStatus("GENERATING MOLECULAR GALAXY");const t=[{name:"Aspirin",smiles:"CC(=O)OC1=CC=CC=C1C(=O)O"},{name:"Caffeine",smiles:"CN1C=NC2=C1C(=O)N(C(=O)N2C)C"},{name:"Ibuprofen",smiles:"CC(C)CC1=CC=C(C=C1)C(C)C(=O)O"},{name:"Acetaminophen",smiles:"CC(=O)NC1=CC=C(C=C1)O"},{name:"Naproxen",smiles:"COC1=CC2=CC(=CC=C2C=C1)C(C)C(=O)O"},{name:"Diazepam",smiles:"CN1C(=O)CN=C(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3"},{name:"Omeprazole",smiles:"COC1=CC2=NC(=NC2=CC1OC)S(=O)CC3=NC=C(C)C(=C3)C"},{name:"Metformin",smiles:"CN(C)C(=N)NC(=N)N"}],e=5e3;this.molecules=[];const n=4,i=.5,r=60;for(let o=0;o<e;o++){const l=o%n/n*Math.PI*2,h=Math.pow(Math.random(),.6)*r,u=l+h*.08+this.gaussianRandom()*i,f=Math.cos(u)*h+this.gaussianRandom()*(3+h*.1),m=this.gaussianRandom()*(2+h*.03),g=Math.sin(u)*h+this.gaussianRandom()*(3+h*.1),_=Math.sqrt(f*f+g*g),p=150+_/r*400+Math.random()*100,d=-2+_/r*6+this.gaussianRandom()*1,y=20+Math.random()*130,M=Math.floor(Math.random()*6),T=Math.floor(Math.random()*11),P=t[Math.floor(Math.random()*t.length)];this.molecules.push({id:`MOL${String(o+1).padStart(5,"0")}`,name:o<t.length?P.name:`Compound ${o+1}`,smiles:P.smiles,x:f,y:m,z:g,properties:{mw:p,logp:d,tpsa:y,hbd:M,hba:T}})}this.updatePropertyRanges(),this.createPointCloud(),this.statMolecules.textContent=this.molecules.length.toLocaleString(),this.searchBar.setMolecules(this.molecules)}gaussianRandom(){let t=0,e=0;for(;t===0;)t=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}updatePropertyRanges(){["mw","logp","tpsa","hbd","hba"].forEach(e=>{const n=this.dataLoader.getPropertyStats(this.molecules,e);this.colorMapper.setPropertyRange(e,n.min,n.max)})}createPointCloud(){this.pointCloud&&(this.renderer.remove(this.pointCloud.getPoints()),this.pointCloud.dispose()),this.pointCloud=new ip;const t=this.pointCloud.create(this.molecules,this.colorMapper.createMapper());this.renderer.add(t),this.raycaster=new ka(this.renderer.getCamera(),this.pointCloud),this.raycaster.onHover=e=>{const n=this.pointCloud.getMolecule(e);this.popup.show(n)},this.raycaster.onUnhover=()=>{this.raycaster.isPinned()||this.popup.hide()},this.raycaster.onPin=e=>{const n=this.pointCloud.getMolecule(e);this.popup.show(n),this.modeController&&this.modeController.onMoleculeSelect(n,this.molecules)},this.raycaster.onUnpin=()=>{this.popup.hide()}}setupControls(){this.controls.onColorChange=t=>{this.colorMapper.setProperty(t),this.pointCloud&&this.pointCloud.updateColors(this.colorMapper.createMapper())},this.controls.onSizeChange=t=>{this.pointCloud&&this.pointCloud.setPointSize(t)},this.controls.onBloomChange=t=>{this.renderer.setBloomStrength(t)},this.controls.onRotationChange=t=>{this.renderer.setRotationSpeed(t)},this.searchBar.onSelect=t=>{this.focusOnMolecule(t)}}setupEventListeners(){var e,n;const t=document.getElementById("galaxy-canvas");t.addEventListener("mousemove",i=>{this.raycaster&&this.raycaster.updateMouse(i)}),t.addEventListener("click",()=>{this.raycaster&&(this.raycaster.isPinned()?this.raycaster.unpin():this.raycaster.pin())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&this.raycaster&&this.raycaster.unpin()}),(e=document.getElementById("help-btn"))==null||e.addEventListener("click",()=>{const i=document.getElementById("instructions");i&&(i.style.display=i.style.display==="none"?"block":"none")}),(n=this.renderer.getControls())==null||n.addEventListener("change",()=>{this.modeController&&this.modeController.updateConstellation(this.molecules)}),this.setupFileUpload()}setupFileUpload(){var o,a,l;const t=document.getElementById("upload-zone"),e=document.getElementById("file-input");if(!t||!e)return;t.addEventListener("click",()=>e.click()),e.addEventListener("change",c=>{var h;((h=c.target.files)==null?void 0:h.length)>0&&this.handleFileUpload(c.target.files[0])}),t.addEventListener("dragover",c=>{c.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",c=>{var h;c.preventDefault(),t.classList.remove("dragover"),((h=c.dataTransfer.files)==null?void 0:h.length)>0&&this.handleFileUpload(c.dataTransfer.files[0])}),(o=document.getElementById("load-drugs"))==null||o.addEventListener("click",()=>{this.loadSampleDataset("drugs")}),(a=document.getElementById("load-chembl"))==null||a.addEventListener("click",()=>{this.loadSampleDataset("chembl")}),(l=document.getElementById("load-natural"))==null||l.addEventListener("click",()=>{this.loadSampleDataset("natural")});const n=document.getElementById("data-panel"),i=document.getElementById("data-toggle"),r=document.getElementById("data-close");i==null||i.addEventListener("click",()=>{n==null||n.classList.add("visible")}),r==null||r.addEventListener("click",()=>{n==null||n.classList.remove("visible")}),this.setupFilters()}setupFilters(){const t=document.getElementById("mw-min-slider"),e=document.getElementById("mw-max-slider"),n=document.getElementById("mw-range-value"),i=document.getElementById("logp-min-slider"),r=document.getElementById("logp-max-slider"),o=document.getElementById("logp-range-value"),a=document.getElementById("export-btn"),l=document.getElementById("reset-filters-btn"),c=()=>{const f=parseFloat((t==null?void 0:t.value)||0),m=parseFloat((e==null?void 0:e.value)||1e3);f>m&&(t===document.activeElement?e.value=f:t.value=m),this.filters.mwMin=parseFloat((t==null?void 0:t.value)||0),this.filters.mwMax=parseFloat((e==null?void 0:e.value)||1e3),n&&(n.textContent=`${this.filters.mwMin}-${this.filters.mwMax}`),this.applyFilters()};t==null||t.addEventListener("input",c),e==null||e.addEventListener("input",c);const h=()=>{const f=parseFloat((i==null?void 0:i.value)||-5),m=parseFloat((r==null?void 0:r.value)||10);f>m&&(i===document.activeElement?r.value=f:i.value=m),this.filters.logpMin=parseFloat((i==null?void 0:i.value)||-5),this.filters.logpMax=parseFloat((r==null?void 0:r.value)||10),o&&(o.textContent=`${this.filters.logpMin.toFixed(1)} - ${this.filters.logpMax.toFixed(1)}`),this.applyFilters()};i==null||i.addEventListener("input",h),r==null||r.addEventListener("input",h),a==null||a.addEventListener("click",()=>{this.exportSelection()}),l==null||l.addEventListener("click",()=>{this.resetFilters()});const u=document.getElementById("hide-filtered-toggle");u==null||u.addEventListener("change",f=>{this.hideFilteredMode=f.target.checked,this.applyFilters()}),this.setupSubstructureSearch()}async initRDKit(){if(typeof window.initRDKitModule=="function")try{this.rdkitModule=await window.initRDKitModule(),console.log("RDKit initialized for substructure search")}catch(t){console.warn("RDKit initialization failed:",t)}}setupSubstructureSearch(){const t=document.getElementById("substruct-input"),e=document.getElementById("substruct-search-btn");document.getElementById("substruct-status"),document.getElementById("substruct-count"),e==null||e.addEventListener("click",()=>{this.performSubstructureSearch((t==null?void 0:t.value)||"")}),t==null||t.addEventListener("keydown",n=>{n.key==="Enter"&&this.performSubstructureSearch((t==null?void 0:t.value)||"")}),t==null||t.addEventListener("input",n=>{n.target.value.trim()||this.clearSubstructureSearch()})}async performSubstructureSearch(t){const e=document.getElementById("substruct-status"),n=document.getElementById("substruct-count");if(!t.trim()){this.clearSubstructureSearch();return}if(!this.rdkitModule&&(await this.initRDKit(),!this.rdkitModule)){e&&(e.textContent="RDKit not loaded. Refresh page.",e.style.color="var(--neon-red)");return}e&&(e.textContent="Searching...",e.style.color="var(--neon-cyan)"),this.substructurePattern=t,this.substructureMatches.clear();let i=null,r=!1;try{if(i=this.rdkitModule.get_qmol(t),i&&i.is_valid()?(r=!0,console.log("Parsed as SMARTS pattern")):(i&&i.delete(),i=this.rdkitModule.get_mol(t),i&&i.is_valid()?console.log("Parsed as SMILES pattern"):(i&&i.delete(),i=null)),!i){e&&(e.textContent="Invalid SMILES/SMARTS pattern",e.style.color="var(--neon-red)");return}}catch(l){e&&(e.textContent=`Parse error: ${l.message}`,e.style.color="var(--neon-red)"),console.error("Substructure search parse error:",l);return}let o=0;const a=100;for(let l=0;l<this.molecules.length;l++){const c=this.molecules[l];if(c.smiles){try{const h=this.rdkitModule.get_mol(c.smiles);if(h&&h.is_valid()){const u=h.get_substruct_match(i);u&&u.length>2&&u!=="{}"&&(this.substructureMatches.add(l),o++),h.delete()}}catch(h){console.debug(`Skipping molecule ${l}: ${h.message}`)}l%a===0&&e&&(e.textContent=`Searching... ${Math.round(l/this.molecules.length*100)}%`)}}i&&i.delete(),console.log(`Substructure search complete: ${o} matches for pattern "${t}"`),e&&(o>0?(e.textContent=`Found ${o} matches`,e.style.color="var(--neon-green)"):(e.textContent="No matches found",e.style.color="var(--neon-yellow)")),n&&(n.textContent=o>0?`${o}`:""),this.applyFilters()}clearSubstructureSearch(){const t=document.getElementById("substruct-status"),e=document.getElementById("substruct-count");this.substructurePattern=null,this.substructureMatches.clear(),t&&(t.textContent=""),e&&(e.textContent=""),this.applyFilters()}applyFilters(){if(!this.molecules.length||!this.pointCloud)return;this.filteredIndices.clear();const t=this.substructurePattern&&this.substructureMatches.size>0,e=[],n=[];this.molecules.forEach((o,a)=>{var m,g,_,p;const l=((m=o.properties)==null?void 0:m.mw)||0,c=((g=o.properties)==null?void 0:g.logp)||0,h=l>=this.filters.mwMin&&l<=this.filters.mwMax&&c>=this.filters.logpMin&&c<=this.filters.logpMax,u=!t||this.substructureMatches.has(a);if(h&&u){this.filteredIndices.add(a);const d=((_=o.properties)==null?void 0:_.mw)||300;n.push(Math.max(.5,Math.min(2.5,d/250))),t&&this.substructureMatches.has(a)?e.push({r:0,g:1,b:.5}):e.push(this.colorMapper.getColor(o))}else if(this.hideFilteredMode)n.push(0),e.push({r:0,g:0,b:0});else{const d=((p=o.properties)==null?void 0:p.mw)||300;n.push(Math.max(.5,Math.min(2.5,d/250)));const y=this.colorMapper.getColor(o);e.push({r:y.r*.1,g:y.g*.1,b:y.b*.1})}}),this.pointCloud.setColors(e),this.pointCloud.setSizes(n);const i=document.getElementById("stat-filtered");i&&(i.textContent=this.filteredIndices.size.toLocaleString());const r=document.getElementById("export-btn");r&&(r.textContent=`⬇ Export Selection (${this.filteredIndices.size} molecules)`)}resetFilters(){this.filters={mwMin:0,mwMax:1e3,logpMin:-5,logpMax:10},this.substructurePattern=null,this.substructureMatches.clear();const t=document.getElementById("mw-min-slider"),e=document.getElementById("mw-max-slider"),n=document.getElementById("logp-min-slider"),i=document.getElementById("logp-max-slider");t&&(t.value="0"),e&&(e.value="1000"),n&&(n.value="-5"),i&&(i.value="10");const r=document.getElementById("mw-range-value"),o=document.getElementById("logp-range-value");r&&(r.textContent="0-1000"),o&&(o.textContent="-5.0 - 10.0");const a=document.getElementById("substruct-input"),l=document.getElementById("substruct-status"),c=document.getElementById("substruct-count");a&&(a.value=""),l&&(l.textContent=""),c&&(c.textContent=""),this.hideFilteredMode=!1;const h=document.getElementById("hide-filtered-toggle");h&&(h.checked=!1),this.pointCloud&&this.molecules.length&&this.pointCloud.updateColors(this.colorMapper.createMapper()),this.filteredIndices.clear(),this.molecules.forEach((f,m)=>this.filteredIndices.add(m));const u=document.getElementById("export-btn");u&&(u.textContent=`⬇ Export Selection (${this.molecules.length} molecules)`)}exportSelection(){if(this.filteredIndices.size===0){alert("No molecules to export. Adjust filters or load data first.");return}const e=[["id","name","smiles","drugClass","mw","logp","tpsa","hbd","hba","x","y","z"].join(",")];this.filteredIndices.forEach(a=>{var h,u,f,m,g,_,p,d,y,M,T;const l=this.molecules[a],c=[l.id||"",`"${(l.name||"").replace(/"/g,'""')}"`,`"${(l.smiles||"").replace(/"/g,'""')}"`,`"${(l.drugClass||"").replace(/"/g,'""')}"`,((u=(h=l.properties)==null?void 0:h.mw)==null?void 0:u.toFixed(2))||"",((m=(f=l.properties)==null?void 0:f.logp)==null?void 0:m.toFixed(2))||"",((_=(g=l.properties)==null?void 0:g.tpsa)==null?void 0:_.toFixed(2))||"",((p=l.properties)==null?void 0:p.hbd)||"",((d=l.properties)==null?void 0:d.hba)||"",((y=l.x)==null?void 0:y.toFixed(4))||"",((M=l.y)==null?void 0:M.toFixed(4))||"",((T=l.z)==null?void 0:T.toFixed(4))||""];e.push(c.join(","))});const n=e.join(`
`),i=new Blob([n],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(i),o=document.createElement("a");o.setAttribute("href",r),o.setAttribute("download",`chemspace-galaxy-export-${this.filteredIndices.size}-molecules.csv`),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)}async handleFileUpload(t){this.showLoading(),this.updateLoadingStatus("PARSING FILE...");try{const e=await t.text();let n;if(t.name.endsWith(".csv")?n=this.parseCSV(e):t.name.endsWith(".smi")||t.name.endsWith(".txt")?n=this.parseSMILES(e):t.name.endsWith(".sdf")||t.name.endsWith(".mol")?n=this.parseSDF(e):e.includes("$$$$")||e.includes("M  END")?n=this.parseSDF(e):e.includes(",")?n=this.parseCSV(e):n=this.parseSMILES(e),n.length===0)throw new Error("No valid molecules found");await this.loadMolecules(n),this.updateDataStats(n)}catch(e){console.error("Failed to load file:",e),alert(`Failed to load file: ${e.message}`)}this.hideLoading()}parseCSV(t){var l,c,h;const e=t.trim().split(`
`);if(e.length<2)return[];const n=e[0].toLowerCase().split(",").map(u=>u.trim()),i=n.findIndex(u=>u==="smiles"||u==="canonical_smiles"||u==="structure"),r=n.findIndex(u=>u==="name"||u==="compound_name"||u==="title"),o=n.findIndex(u=>u==="class"||u==="drug_class"||u==="category");if(i===-1)throw new Error('CSV must have a "smiles" column');const a=[];for(let u=1;u<e.length;u++){const f=this.parseCSVLine(e[u]),m=(l=f[i])==null?void 0:l.trim();if(!m)continue;const g={id:`MOL${String(u).padStart(5,"0")}`,smiles:m,name:r>=0?(c=f[r])==null?void 0:c.trim():`Compound ${u}`,drugClass:o>=0?(h=f[o])==null?void 0:h.trim():null,properties:this.generateProperties(m)};["mw","logp","tpsa","hbd","hba"].forEach(p=>{const d=n.findIndex(y=>y===p||y===p.toUpperCase());if(d>=0&&f[d]){const y=parseFloat(f[d]);isNaN(y)||(g.properties[p]=y)}}),a.push(g)}return a}parseCSVLine(t){const e=[];let n="",i=!1;for(const r of t)r==='"'?i=!i:r===","&&!i?(e.push(n),n=""):n+=r;return e.push(n),e}parseSMILES(t){const e=t.trim().split(`
`),n=[];for(let i=0;i<e.length;i++){const r=e[i].trim();if(!r||r.startsWith("#"))continue;const o=r.split(/[\t\s]+/),a=o[0],l=o[1]||`Compound ${i+1}`;n.push({id:`MOL${String(i+1).padStart(5,"0")}`,smiles:a,name:l,properties:this.generateProperties(a)})}return n}parseSDF(t){var i;const e=[],n=t.split("$$$$").filter(r=>r.trim());for(let r=0;r<n.length;r++){const o=n[r].trim();if(!o)continue;const a=o.split(`
`);if(a.length<4)continue;const l=a[0].trim()||`Compound ${r+1}`;let c=null,h=null,u=null;for(let f=0;f<a.length;f++){const m=a[f];if(m.startsWith(">")){const g=m.toLowerCase(),_=(i=a[f+1])==null?void 0:i.trim();g.includes("smiles")&&_?c=_:g.includes("mw")||g.includes("molecular_weight")?h=parseFloat(_):(g.includes("logp")||g.includes("alogp"))&&(u=parseFloat(_))}}if(!c){const f=a[3];parseInt(f.substring(0,3).trim()),c=`[${l.replace(/[^a-zA-Z0-9]/g,"").substring(0,10)}]`,console.warn(`No SMILES in SDF for ${l}, using placeholder. 2D/similarity features limited.`)}e.push({id:`MOL${String(r+1).padStart(5,"0")}`,smiles:c,name:l,sdfBlock:o,properties:{mw:h||this.generateProperties(c).mw,logp:u||this.generateProperties(c).logp,...this.generateProperties(c)}})}return e}async loadMolecules(t){this.updateLoadingStatus("EMBEDDING MOLECULES..."),this.spiralEmbedding=new Wa({numArms:2,innerRadius:8,outerRadius:Math.min(100,30+t.length*.05),armSpread:.2,heightSpread:1.5,windingFactor:.4,clusterSpread:3}),this.molecules=this.spiralEmbedding.embed(t),this.updatePropertyRanges(),this.createPointCloud(),this.searchBar.setMolecules(this.molecules),this.statMolecules.textContent=this.molecules.length.toLocaleString(),this.filteredIndices.clear(),this.molecules.forEach((e,n)=>this.filteredIndices.add(n))}async loadSampleDataset(t){this.showLoading(),this.updateLoadingStatus(`LOADING ${t.toUpperCase()} DATASET...`),await this.generateSpiralMolecules(),this.createPointCloud(),this.updateDataStats(this.molecules),this.hideLoading()}updateDataStats(t){const e=document.getElementById("stat-mol-count"),n=document.getElementById("stat-class-count");if(e&&(e.textContent=t.length.toLocaleString()),n){const i=new Set(t.map(r=>r.drugClass).filter(Boolean));n.textContent=i.size||"-"}}showLoading(){this.loadingScreen&&this.loadingScreen.classList.remove("hidden")}focusOnMolecule(t){if(!this.pointCloud)return;const e=this.pointCloud.getPosition(t);if(!e)return;const n=this.renderer.getCamera(),i=this.renderer.getControls();i.target.copy(e);const r=n.position.clone().sub(i.target).normalize();n.position.copy(i.target).add(r.multiplyScalar(50)),this.raycaster&&(this.raycaster.pinnedIndex=t);const o=this.molecules[t];this.popup.show(o),this.modeController&&this.modeController.onMoleculeSelect(o,this.molecules)}updateLoadingStatus(t){this.loadingText&&(this.loadingText.textContent=t)}hideLoading(){this.loadingScreen&&this.loadingScreen.classList.add("hidden")}animate(){this.animationId=requestAnimationFrame(()=>this.animate());const t=performance.now(),e=(t-this.lastTime)/1e3;this.lastTime=t,this.time+=e,this.realisticGalaxy&&this.realisticGalaxy.update(e,this.time),this.raycaster&&this.raycaster.raycast(),this.renderer.render(),this.statFps&&(this.statFps.textContent=this.renderer.getFPS())}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.pointCloud&&this.pointCloud.dispose(),this.realisticGalaxy&&this.realisticGalaxy.dispose(),this.renderer&&this.renderer.dispose()}}document.addEventListener("DOMContentLoaded",()=>{window.app=new dp});
//# sourceMappingURL=index-Vk9c60Ze.js.map
