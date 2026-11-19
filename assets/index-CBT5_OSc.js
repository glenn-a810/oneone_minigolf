var a0=Object.defineProperty;var l0=(i,t,e)=>t in i?a0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var I=(i,t,e)=>l0(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ec="187",c0=0,Dh=1,h0=2,Mo=1,kd=2,js=3,Mi=0,sn=1,dn=2,vs=0,Ms=1,oi=2,Ih=3,Nh=4,u0=5,fs=100,d0=101,f0=102,p0=103,m0=104,g0=200,x0=201,_0=202,v0=203,Bd=204,Gd=205,M0=206,y0=207,S0=208,b0=209,w0=210,E0=211,T0=212,A0=213,R0=214,ml=0,gl=1,xl=2,hr=3,_l=4,vl=5,Ml=6,yl=7,Hd=0,C0=1,P0=2,ai=0,Vd=1,Wd=2,Xd=3,Tc=4,Yd=5,qd=6,$d=7,Zd=300,ws=301,ur=302,ua=303,da=304,ki=1e3,ii=1001,Sl=1002,Ke=1003,L0=1004,Ir=1005,hn=1006,fa=1007,si=1008,gn=1009,Kd=1010,Jd=1011,dr=1012,Ac=1013,kn=1014,On=1015,Bn=1016,Rc=1017,Cc=1018,Es=1020,jd=35902,Qd=35899,tf=1021,ef=1022,Cn=1023,yi=1026,vi=1027,nf=1028,Pc=1029,Bi=1030,Lc=1031,Dc=1033,yo=33776,So=33777,bo=33778,wo=33779,bl=35840,wl=35841,El=35842,Tl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Ll=37489,Lo=37490,Dl=37491,Il=37808,Nl=37809,Ul=37810,Fl=37811,Ol=37812,zl=37813,kl=37814,Bl=37815,Gl=37816,Hl=37817,Vl=37818,Wl=37819,Xl=37820,Yl=37821,ql=36492,$l=36494,Zl=36495,Kl=36283,Jl=36284,Do=36285,jl=36286,D0=3200,Ql=0,I0=1,ni="",ke="srgb",Io="srgb-linear",No="linear",_e="srgb",pa=7680,N0=519,U0=512,F0=513,O0=514,sf=515,z0=516,k0=517,rf=518,of=519,af=35044,Uh="300 es",Pn=2e3,fr=2001;function B0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function G0(){const i=Uo("canvas");return i.style.display="block",i}const Fh={};function Fo(...i){const t="THREE."+i.shift();console.log(t,...i)}function lf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=lf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ue(...i){i=lf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ys(...i){const t=i.join(" ");t in Fh||(Fh[t]=!0,Zt(...i))}function H0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const V0={[ml]:ml,[xl]:Ml,[_l]:_l,[hr]:vl,[gl]:gl,[Ml]:xl,[yl]:yl,[vl]:hr};class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oh=1234567;const nr=Math.PI/180,pr=180/Math.PI;function hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function Ic(i,t){return(i%t+t)%t}function W0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function X0(i,t,e){return i!==t?(e-i)/(t-i):0}function ir(i,t,e){return(1-e)*i+e*t}function Y0(i,t,e,n){return ir(i,t,1-Math.exp(-e*n))}function q0(i,t=1){return t-Math.abs(Ic(i,t*2)-t)}function $0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Z0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function K0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function J0(i,t){return i+Math.random()*(t-i)}function j0(i){return i*(.5-Math.random())}function Q0(i){i!==void 0&&(Oh=i);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tm(i){return i*nr}function em(i){return i*pr}function nm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*u,a*h,a*c);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Nc(i,t){if(t.constructor===Float32Array)return i;const e=qo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Uc(i,t){if(t.constructor===Float32Array)return i;const e=qo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const sr={DEG2RAD:nr,RAD2DEG:pr,generateUUID:hi,clamp:re,euclideanModulo:Ic,mapLinear:W0,inverseLerp:X0,lerp:ir,damp:Y0,pingpong:q0,smoothstep:$0,smootherstep:Z0,randInt:K0,randFloat:J0,randFloatSpread:j0,seededRandom:Q0,degToRad:tm,radToDeg:em,isPowerOfTwo:nm,ceilPowerOfTwo:im,floorPowerOfTwo:cf,setQuaternionFromProperEuler:sm,normalize:Uc,denormalize:Nc},xh=class xh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;let ft=xh;class Wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==f||c!==u||h!==p){let g=l*f+c*u+h*p+d*x;g<0&&(f=-f,u=-u,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){const _=Math.acos(g),b=Math.sin(_);m=Math.sin(m*_)/b,a=Math.sin(a*_)/b,l=l*m+f*a,c=c*m+u*a,h=h*m+p*a,d=d*m+x*a}else{l=l*m+f*a,c=c*m+u*a,h=h*m+p*a,d=d*m+x*a;const _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _h=class _h{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_h.prototype.isVector3=!0;let C=_h;const ma=new C,zh=new Wi,vh=class vh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=s[0],g=s[3],m=s[6],_=s[1],b=s[4],M=s[7],T=s[2],A=s[5],v=s[8];return r[0]=o*x+a*_+l*T,r[3]=o*g+a*b+l*A,r[6]=o*m+a*M+l*v,r[1]=c*x+h*_+d*T,r[4]=c*g+h*b+d*A,r[7]=c*m+h*M+d*v,r[2]=f*x+u*_+p*T,r[5]=f*g+u*b+p*A,r[8]=f*m+u*M+p*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+n*f+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ga.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vh.prototype.isMatrix3=!0;let jt=vh;const ga=new jt,kh=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rm(){const i={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?No:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Io]:{primaries:t,whitePoint:n,transfer:No,toXYZ:kh,fromXYZ:Bh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:kh,fromXYZ:Bh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const ce=rm();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class om{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yi===void 0&&(Yi=Uo("canvas")),Yi.width=t.width,Yi.height=t.height;const s=Yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Uo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let am=0;class Fc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?om.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let lm=0;const _a=new C;class rn extends Vi{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=ii,s=ii,r=hn,o=si,a=Cn,l=gn,c=rn.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=hi(),this.name="",this.source=new Fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Zd;rn.DEFAULT_ANISOTROPY=1;const Mh=class Mh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(u+1)/2,T=(m+1)/2,A=(h+f)/4,v=(d+x)/4,w=(p+g)/4;return b>M&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=v/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=w/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=v/r,s=w/r),this.set(n,s,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;let Le=Mh;class cm extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new rn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends cm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hf extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hm extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Yo=class Yo{constructor(t,e,n,s,r,o,a,l,c,h,d,f,u,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,u,p,x,g)}set(t,e,n,s,r,o,a,l,c,h,d,f,u,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),r=1/qi.setFromMatrixColumn(t,1).length(),o=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f+x*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(um,t,dm)}lookAt(t,e,n){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),fi.crossVectors(n,pn),fi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),fi.crossVectors(n,pn)),fi.normalize(),Nr.crossVectors(pn,fi),s[0]=fi.x,s[4]=Nr.x,s[8]=pn.x,s[1]=fi.y,s[5]=Nr.y,s[9]=pn.y,s[2]=fi.z,s[6]=Nr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],b=n[7],M=n[11],T=n[15],A=s[0],v=s[4],w=s[8],U=s[12],P=s[1],F=s[5],k=s[9],Z=s[13],D=s[2],W=s[6],K=s[10],X=s[14],ht=s[3],$=s[7],j=s[11],rt=s[15];return r[0]=o*A+a*P+l*D+c*ht,r[4]=o*v+a*F+l*W+c*$,r[8]=o*w+a*k+l*K+c*j,r[12]=o*U+a*Z+l*X+c*rt,r[1]=h*A+d*P+f*D+u*ht,r[5]=h*v+d*F+f*W+u*$,r[9]=h*w+d*k+f*K+u*j,r[13]=h*U+d*Z+f*X+u*rt,r[2]=p*A+x*P+g*D+m*ht,r[6]=p*v+x*F+g*W+m*$,r[10]=p*w+x*k+g*K+m*j,r[14]=p*U+x*Z+g*X+m*rt,r[3]=_*A+b*P+M*D+T*ht,r[7]=_*v+b*F+M*W+T*$,r[11]=_*w+b*k+M*K+T*j,r[15]=_*U+b*Z+M*X+T*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],x=t[7],g=t[11],m=t[15],_=l*u-c*f,b=a*u-c*d,M=a*f-l*d,T=o*u-c*h,A=o*f-l*h,v=o*d-a*h;return e*(x*_-g*b+m*M)-n*(p*_-g*T+m*A)+s*(p*b-x*T+m*v)-r*(p*M-x*A+g*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=e*a-n*o,b=e*l-s*o,M=e*c-r*o,T=n*l-s*a,A=n*c-r*a,v=s*c-r*l,w=h*x-d*p,U=h*g-f*p,P=h*m-u*p,F=d*g-f*x,k=d*m-u*x,Z=f*m-u*g,D=_*Z-b*k+M*F+T*P-A*U+v*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/D;return t[0]=(a*Z-l*k+c*F)*W,t[1]=(s*k-n*Z-r*F)*W,t[2]=(x*v-g*A+m*T)*W,t[3]=(f*A-d*v-u*T)*W,t[4]=(l*P-o*Z-c*U)*W,t[5]=(e*Z-s*P+r*U)*W,t[6]=(g*M-p*v-m*b)*W,t[7]=(h*v-f*M+u*b)*W,t[8]=(o*k-a*P+c*w)*W,t[9]=(n*P-e*k-r*w)*W,t[10]=(p*A-x*M+m*_)*W,t[11]=(d*M-h*A-u*_)*W,t[12]=(a*U-o*F-l*w)*W,t[13]=(e*F-n*U+s*w)*W,t[14]=(x*b-p*T-g*_)*W,t[15]=(h*T-d*b+f*_)*W,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,x=o*h,g=o*d,m=a*d,_=l*c,b=l*h,M=l*d,T=n.x,A=n.y,v=n.z;return s[0]=(1-(x+m))*T,s[1]=(u+M)*T,s[2]=(p-b)*T,s[3]=0,s[4]=(u-M)*A,s[5]=(1-(f+m))*A,s[6]=(g+_)*A,s[7]=0,s[8]=(p+b)*v,s[9]=(g-_)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=qi.set(s[0],s[1],s[2]).length();const a=qi.set(s[4],s[5],s[6]).length(),l=qi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),En.copy(this);const c=1/o,h=1/a,d=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Pn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Pn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Pn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===fr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Yo.prototype.isMatrix4=!0;let ve=Yo;const qi=new C,En=new ve,um=new C(0,0,0),dm=new C(1,1,1),fi=new C,Nr=new C,pn=new C,Gh=new ve,Hh=new Wi;class ci{constructor(t=0,e=0,n=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fm=0;const Vh=new C,$i=new Wi,$n=new ve,Ur=new C,zs=new C,pm=new C,mm=new Wi,Wh=new C(1,0,0),Xh=new C(0,1,0),Yh=new C(0,0,1),qh={type:"added"},gm={type:"removed"},Zi={type:"childadded",child:null},va={type:"childremoved",child:null};class Be extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new C,e=new ci,n=new Wi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new jt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Xh,t)}rotateZ(t){return this.rotateOnAxis(Yh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Xh,t)}translateZ(t){return this.translateOnAxis(Yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ur.copy(t):Ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(zs,Ur,this.up):$n.lookAt(Ur,zs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),$i.setFromRotationMatrix($n),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qh),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gm),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qh),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Be.DEFAULT_UP=new C(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Te extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xm={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Ic(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ya(o,r,t+1/3),this.g=ya(o,r,t),this.b=ya(o,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=uf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ce.workingToColorSpace(en.copy(this),t),Math.round(re(en.r*255,0,255))*65536+Math.round(re(en.g*255,0,255))*256+Math.round(re(en.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(en.copy(this),e);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=ke){ce.workingToColorSpace(en.copy(this),t);const e=en.r,n=en.g,s=en.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Fr);const n=ir(pi.h,Fr.h,e),s=ir(pi.s,Fr.s,e),r=ir(pi.l,Fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Bt;Bt.NAMES=uf;class $o{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new $o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zc extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Tn=new C,Zn=new C,Sa=new C,Kn=new C,Ki=new C,Ji=new C,$h=new C,ba=new C,wa=new C,Ea=new C,Ta=new Le,Aa=new Le,Ra=new Le;class Sn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Zn.subVectors(n,e),Sa.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(Zn),l=Tn.dot(Sa),c=Zn.dot(Zn),h=Zn.dot(Sa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ta.setScalar(0),Aa.setScalar(0),Ra.setScalar(0),Ta.fromBufferAttribute(t,e),Aa.fromBufferAttribute(t,n),Ra.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ta,r.x),o.addScaledVector(Aa,r.y),o.addScaledVector(Ra,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Zn.subVectors(t,e),Tn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Tn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ki.subVectors(s,n),Ji.subVectors(r,n),ba.subVectors(t,n);const l=Ki.dot(ba),c=Ji.dot(ba);if(l<=0&&c<=0)return e.copy(n);wa.subVectors(t,s);const h=Ki.dot(wa),d=Ji.dot(wa);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Ki,o);Ea.subVectors(t,r);const u=Ki.dot(Ea),p=Ji.dot(Ea);if(p>=0&&u<=p)return e.copy(r);const x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ji,a);const g=h*p-u*d;if(g<=0&&d-h>=0&&u-p>=0)return $h.subVectors(r,s),a=(d-h)/(d-h+(u-p)),e.copy(s).addScaledVector($h,a);const m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(Ki,o).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class wr{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),zr.subVectors(this.max,ks),ji.subVectors(t.a,ks),Qi.subVectors(t.b,ks),ts.subVectors(t.c,ks),mi.subVectors(Qi,ji),gi.subVectors(ts,Qi),Ci.subVectors(ji,ts);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ci.z,Ci.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ci.z,0,-Ci.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ci.y,Ci.x,0];return!Ca(e,ji,Qi,ts,zr)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,ji,Qi,ts,zr))?!1:(kr.crossVectors(mi,gi),e=[kr.x,kr.y,kr.z],Ca(e,ji,Qi,ts,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Jn=[new C,new C,new C,new C,new C,new C,new C,new C],An=new C,Or=new wr,ji=new C,Qi=new C,ts=new C,mi=new C,gi=new C,Ci=new C,ks=new C,zr=new C,kr=new C,Pi=new C;function Ca(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ze=new C,Br=new ft;let _m=0;class Je extends Vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=af,this.updateRanges=[],this.gpuType=On,this.version=0,this._normalizationScale=t!==void 0?qo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Nc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Uc(t,this.array)}}class df extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ff extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}const vm=new wr,Bs=new C,Pa=new C;class Er{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Pa)),this.expandByPoint(Bs.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Mm=0;const _n=new ve,La=new Be,es=new C,mn=new wr,Gs=new wr,Xe=new C;class Fe extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B0(t)?ff:df)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(mn.min,Gs.min),mn.expandByPoint(Xe),Xe.addVectors(mn.max,Gs.max),mn.expandByPoint(Xe)):(mn.expandByPoint(Gs.min),mn.expandByPoint(Gs.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xe.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(t,c),Xe.add(es)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Je(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)a[U]=new C,l[U]=new C;const h=new C,d=new C,f=new C,u=new ft,p=new ft,x=new ft,g=new C,m=new C;function _(U,P,F){c[U]=c[P]=c[F]=1,h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,P),f.fromBufferAttribute(n,F),u.fromBufferAttribute(r,U),p.fromBufferAttribute(r,P),x.fromBufferAttribute(r,F),d.sub(h),f.sub(h),p.sub(u),x.sub(u);const k=1/(p.x*x.y-x.x*p.y);isFinite(k)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(k),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(k),a[U].add(g),a[P].add(g),a[F].add(g),l[U].add(m),l[P].add(m),l[F].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,P=b.length;U<P;++U){const F=b[U],k=F.start,Z=F.count;for(let D=k,W=k+Z;D<W;D+=3)_(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const M=new C,T=new C,A=new C,v=new C;function w(U){A.fromBufferAttribute(s,U),v.copy(A);const P=a[U];M.copy(P),M.sub(A.multiplyScalar(A.dot(P))).normalize(),T.crossVectors(v,P);const k=T.dot(l[U])<0?-1:1;o.setXYZW(U,M.x,M.y,M.z,k)}for(let U=0,P=n.count;U<P;++U)c[U]&&w(U);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let f=0,u=t.count;f<u;f+=3){const p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[u++]}return new Je(f,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ym{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=af,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Zh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Zh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Zh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=hi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const ln=new C;class Oo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?qo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Oo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Nc(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Uc(t,this.data.array)}}const Da=new C,Sm=new C,bm=new jt;class ei{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Da.subVectors(n,e).cross(Sm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Da),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bm.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let wm=0;class Ei extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Ms,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Gd,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ei().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xi extends Ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ns;const Hs=new C,is=new C,ss=new C,rs=new ft,Vs=new ft,pf=new ve,Gr=new C,Ws=new C,Hr=new C,Kh=new ft,Ia=new ft,Jh=new ft;class Ds extends Be{constructor(t=new Xi){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ym(e,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new Oo(n,3,0,!1)),ns.setAttribute("uv",new Oo(n,2,3,!1))}this.geometry=ns,this.material=t,this.center=new ft(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),pf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Vr(Gr.set(-.5,-.5,0),ss,o,is,s,r),Vr(Ws.set(.5,-.5,0),ss,o,is,s,r),Vr(Hr.set(.5,.5,0),ss,o,is,s,r),Kh.set(0,0),Ia.set(1,0),Jh.set(1,1);let a=t.ray.intersectTriangle(Gr,Ws,Hr,!1,Hs);if(a===null&&(Vr(Ws.set(-.5,.5,0),ss,o,is,s,r),Ia.set(0,1),a=t.ray.intersectTriangle(Gr,Hr,Ws,!1,Hs),a===null))return;const l=t.ray.origin.distanceTo(Hs);l<t.near||l>t.far||e.push({distance:l,point:Hs.clone(),uv:Sn.getInterpolation(Hs,Gr,Ws,Hr,Kh,Ia,Jh,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Vr(i,t,e,n,s,r){rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Vs.x=r*rs.x-s*rs.y,Vs.y=s*rs.x+r*rs.y):Vs.copy(rs),i.copy(t),i.x+=Vs.x,i.y+=Vs.y,i.applyMatrix4(pf)}const jn=new C,Na=new C,Wr=new C,Xr=new C;class Zo{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Na.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Xr.copy(this.origin).sub(Na);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wr),a=Xr.dot(this.direction),l=-Xr.dot(Wr),c=Xr.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){const x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Na).addScaledVector(Wr,f),u}intersectSphere(t,e){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,_=n.y-o.y,b=n.z-o.z,M=Math.abs(l),T=Math.abs(c),A=Math.abs(h);let v,w,U,P,F,k,Z,D,W,K,X,ht;if(M>=T&&M>=A?(U=l,k=d,W=p,ht=m,l>=0?(v=c,w=h,P=f,F=u,Z=x,D=g,K=_,X=b):(v=h,w=c,P=u,F=f,Z=g,D=x,K=b,X=_)):T>=A?(U=c,k=f,W=x,ht=_,c>=0?(v=h,w=l,P=u,F=d,Z=g,D=p,K=b,X=m):(v=l,w=h,P=d,F=u,Z=p,D=g,K=m,X=b)):(U=h,k=u,W=g,ht=b,h>=0?(v=l,w=c,P=d,F=f,Z=p,D=x,K=m,X=_):(v=c,w=l,P=f,F=d,Z=x,D=p,K=_,X=m)),U===0)return null;const $=v/U,j=w/U,rt=1/U,Dt=P-$*k,Nt=F-j*k,Q=Z-$*W,gt=D-j*W,Lt=K-$*ht,Gt=X-j*ht,xt=Lt*gt-Gt*Q,Ut=Dt*Gt-Nt*Lt,he=Q*Nt-gt*Dt;if(s){if(xt<0||Ut<0||he<0)return null}else if((xt<0||Ut<0||he<0)&&(xt>0||Ut>0||he>0))return null;const tt=xt+Ut+he;if(tt===0)return null;const Pt=rt*(xt*k+Ut*W+he*ht);return(tt>0?Pt<0:Pt>0)?null:this.at(Pt/tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bn extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jh=new ve,Li=new Zo,Yr=new Er,Qh=new C,qr=new C,$r=new C,Zr=new C,Ua=new C,Kr=new C,tu=new C,Jr=new C;class qt extends Be{constructor(t=new Fe,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ua.fromBufferAttribute(d,t),o?Kr.addScaledVector(Ua,h):Kr.addScaledVector(Ua.sub(e),h))}e.add(Kr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Yr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Yr,Qh)===null||Li.origin.distanceToSquared(Qh)>(t.far-t.near)**2))&&(jh.copy(r).invert(),Li.copy(t.ray).applyMatrix4(jh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const g=f[p],m=o[g.materialIndex],_=Math.max(g.start,u.start),b=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let M=_,T=b;M<T;M+=3){const A=a.getX(M),v=a.getX(M+1),w=a.getX(M+2);s=jr(this,m,t,n,c,h,d,A,v,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let g=p,m=x;g<m;g+=3){const _=a.getX(g),b=a.getX(g+1),M=a.getX(g+2);s=jr(this,o,t,n,c,h,d,_,b,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const g=f[p],m=o[g.materialIndex],_=Math.max(g.start,u.start),b=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let M=_,T=b;M<T;M+=3){const A=M,v=M+1,w=M+2;s=jr(this,m,t,n,c,h,d,A,v,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let g=p,m=x;g<m;g+=3){const _=g,b=g+1,M=g+2;s=jr(this,o,t,n,c,h,d,_,b,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Em(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;Jr.copy(a),Jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:i}}function jr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,qr),i.getVertexPosition(l,$r),i.getVertexPosition(c,Zr);const h=Em(i,t,e,n,qr,$r,Zr,tu);if(h){const d=new C;Sn.getBarycoord(tu,qr,$r,Zr,d),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,l,c,d,new ft)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,d,new ft)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new C,materialIndex:0};Sn.getNormal(qr,$r,Zr,f.normal),h.face=f,h.barycoord=d}return h}class mf extends rn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ke,h=Ke,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Di=new Er,Tm=new ft(.5,.5),Qr=new C;class mr{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],b=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-o,u-h,m-p,T-_).normalize(),s[1].setComponents(c+o,u+h,m+p,T+_).normalize(),s[2].setComponents(c+a,u+d,m+x,T+b).normalize(),s[3].setComponents(c-a,u-d,m-x,T-b).normalize(),n)s[4].setComponents(l,f,g,M).normalize(),s[5].setComponents(c-l,u-f,m-g,T-M).normalize();else if(s[4].setComponents(c-l,u-f,m-g,T-M).normalize(),e===Pn)s[5].setComponents(c+l,u+f,m+g,T+M).normalize();else if(e===fr)s[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);const e=Tm.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Qr.x=s.normal.x>0?t.max.x:t.min.x,Qr.y=s.normal.y>0?t.max.y:t.min.y,Qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const eu=new ve;class kc{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];eu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new mr),n[s].setFromProjectionMatrix(eu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new mr),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new kc().copy(this)}}class gf extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zo=new C,ko=new C,nu=new ve,Xs=new Zo,to=new Er,Fa=new C,iu=new C;class Am extends Be{constructor(t=new Fe,e=new gf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zo.fromBufferAttribute(e,s-1),ko.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zo.distanceTo(ko);t.setAttribute("lineDistance",new me(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),to.radius+=r,t.ray.intersectsSphere(to)===!1)return;nu.copy(s).invert(),Xs.copy(t.ray).applyMatrix4(nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=u,g=p-1;x<g;x+=c){const m=h.getX(x),_=h.getX(x+1),b=eo(this,t,Xs,l,m,_,x);b&&e.push(b)}if(this.isLineLoop){const x=h.getX(p-1),g=h.getX(u),m=eo(this,t,Xs,l,x,g,p-1);m&&e.push(m)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=u,g=p-1;x<g;x+=c){const m=eo(this,t,Xs,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=eo(this,t,Xs,l,p-1,u,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function eo(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(zo.fromBufferAttribute(a,s),ko.fromBufferAttribute(a,r),e.distanceSqToSegment(zo,ko,Fa,iu)>n)return;Fa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fa);if(!(c<t.near||c>t.far))return{distance:c,point:iu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class xf extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const su=new ve,tc=new Zo,no=new Er,io=new C;class Rm extends Be{constructor(t=new Fe,e=new xf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(s),no.radius+=r,t.ray.intersectsSphere(no)===!1)return;su.copy(s).invert(),tc.copy(t.ray).applyMatrix4(su);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,x=u;p<x;p++){const g=c.getX(p);io.fromBufferAttribute(d,g),ru(io,g,l,s,t,e,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,x=u;p<x;p++)io.fromBufferAttribute(d,p),ru(io,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ru(i,t,e,n,s,r,o){const a=tc.distanceSqToPoint(i);if(a<e){const l=new C;tc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class _f extends rn{constructor(t=[],e=ws,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Is extends rn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ts extends rn{constructor(t,e,n=kn,s,r,o,a=Ke,l=Ke,c,h=yi,d=1){if(h!==yi&&h!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class vf extends Ts{constructor(t,e=kn,n=ws,s,r,o=Ke,a=Ke,l,c=yi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mf extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gn extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function p(x,g,m,_,b,M,T,A,v,w,U){const P=M/v,F=T/w,k=M/2,Z=T/2,D=A/2,W=v+1,K=w+1;let X=0,ht=0;const $=new C;for(let j=0;j<K;j++){const rt=j*F-Z;for(let Dt=0;Dt<W;Dt++){const Nt=Dt*P-k;$[x]=Nt*_,$[g]=rt*b,$[m]=D,c.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[m]=A>0?1:-1,h.push($.x,$.y,$.z),d.push(Dt/v),d.push(1-j/w),X+=1}}for(let j=0;j<w;j++)for(let rt=0;rt<v;rt++){const Dt=f+rt+W*j,Nt=f+rt+W*(j+1),Q=f+(rt+1)+W*(j+1),gt=f+(rt+1)+W*j;l.push(Dt,Nt,gt),l.push(Nt,Q,gt),ht+=6}a.addGroup(u,ht,U),u+=ht,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ri extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ae extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const x=[],g=n/2;let m=0;_(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(u,2));function _(){const M=new C,T=new C;let A=0;const v=(e-t)/n;for(let w=0;w<=r;w++){const U=[],P=w/r,F=P*(e-t)+t;for(let k=0;k<=s;k++){const Z=k/s,D=Z*l+a,W=Math.sin(D),K=Math.cos(D);T.x=F*W,T.y=-P*n+g,T.z=F*K,d.push(T.x,T.y,T.z),M.set(W,v,K).normalize(),f.push(M.x,M.y,M.z),u.push(Z,1-P),U.push(p++)}x.push(U)}for(let w=0;w<s;w++)for(let U=0;U<r;U++){const P=x[U][w],F=x[U+1][w],k=x[U+1][w+1],Z=x[U][w+1];(t>0||U!==0)&&(h.push(P,F,Z),A+=3),(e>0||U!==r-1)&&(h.push(F,k,Z),A+=3)}c.addGroup(m,A,0),m+=A}function b(M){const T=p,A=new ft,v=new C;let w=0;const U=M===!0?t:e,P=M===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*P,0),f.push(0,P,0),u.push(.5,.5),p++;const F=p;for(let k=0;k<=s;k++){const D=k/s*l+a,W=Math.cos(D),K=Math.sin(D);v.x=U*K,v.y=g*P,v.z=U*W,d.push(v.x,v.y,v.z),f.push(0,P,0),A.x=W*.5+.5,A.y=K*.5*P+.5,u.push(A.x,A.y),p++}for(let k=0;k<s;k++){const Z=T+k,D=F+k;M===!0?h.push(D,D+1,Z):h.push(D+1,D,Z),w+=3}c.addGroup(m,w,M===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $e extends Ae{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new $e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bc extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const b=new C,M=new C,T=new C;for(let A=0;A<e.length;A+=3)u(e[A+0],b),u(e[A+1],M),u(e[A+2],T),l(b,M,T,_)}function l(_,b,M,T){const A=T+1,v=[];for(let w=0;w<=A;w++){v[w]=[];const U=_.clone().lerp(M,w/A),P=b.clone().lerp(M,w/A),F=A-w;for(let k=0;k<=F;k++)k===0&&w===A?v[w][k]=U:v[w][k]=U.clone().lerp(P,k/F)}for(let w=0;w<A;w++)for(let U=0;U<2*(A-w)-1;U++){const P=Math.floor(U/2);U%2===0?(f(v[w][P+1]),f(v[w+1][P]),f(v[w][P])):(f(v[w][P+1]),f(v[w+1][P+1]),f(v[w+1][P]))}}function c(_){const b=new C;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(_),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){const _=new C;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];const M=g(_)/2/Math.PI+.5,T=m(_)/Math.PI+.5;o.push(M,1-T)}p(),d()}function d(){for(let _=0;_<o.length;_+=6){const b=o[_+0],M=o[_+2],T=o[_+4],A=Math.max(b,M,T),v=Math.min(b,M,T);A>.9&&v<.1&&(b<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function u(_,b){const M=_*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function p(){const _=new C,b=new C,M=new C,T=new C,A=new ft,v=new ft,w=new ft;for(let U=0,P=0;U<r.length;U+=9,P+=6){_.set(r[U+0],r[U+1],r[U+2]),b.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),A.set(o[P+0],o[P+1]),v.set(o[P+2],o[P+3]),w.set(o[P+4],o[P+5]),T.copy(_).add(b).add(M).divideScalar(3);const F=g(T);x(A,P+0,_,F),x(v,P+2,b,F),x(w,P+4,M,F)}}function x(_,b,M,T){T<0&&_.x===1&&(o[b]=_.x-1),M.x===0&&M.z===0&&(o[b]=T/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.vertices,t.indices,t.radius,t.detail)}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ft:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,s=[],r=[],o=[],a=new C,l=new ve;for(let u=0;u<=t;u++){const p=u/t;s[u]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(re(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(re(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Gc extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cm extends Gc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ou=new C,au=new C,Oa=new Hc,za=new Hc,ka=new Hc;class yf extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(au.subVectors(s[0],s[1]).add(s[0]),c=au);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ou.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ou),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Oa.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,x,g),za.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,x,g),ka.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Oa.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),za.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),ka.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Oa.calc(l),za.calc(l),ka.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Pm(i,t){const e=1-i;return e*e*t}function Lm(i,t){return 2*(1-i)*i*t}function Dm(i,t){return i*i*t}function rr(i,t,e,n){return Pm(i,t)+Lm(i,e)+Dm(i,n)}function Im(i,t){const e=1-i;return e*e*e*t}function Nm(i,t){const e=1-i;return 3*e*e*i*t}function Um(i,t){return 3*(1-i)*i*i*t}function Fm(i,t){return i*i*i*t}function or(i,t,e,n,s){return Im(i,t)+Nm(i,e)+Um(i,n)+Fm(i,s)}class Sf extends Vn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Om extends Vn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y),or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bf extends Vn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zm extends Vn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends Vn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class km extends Vn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y),rr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ef extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(lu(a,l.x,c.x,h.x,d.x),lu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:Cm,CatmullRomCurve3:yf,CubicBezierCurve:Sf,CubicBezierCurve3:Om,EllipseCurve:Gc,LineCurve:bf,LineCurve3:zm,QuadraticBezierCurve:wf,QuadraticBezierCurve3:km,SplineCurve:Ef});class Bm extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ec[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class nc extends Bm{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bf(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new wf(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Sf(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ef(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Gc(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Vc extends nc{constructor(t){super(t),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new nc().fromJSON(s))}return this}}function Gm(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Tf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ym(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let f=e;f<s;f+=e){const u=i[f],p=i[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return gr(r,o,e,a,l,c,0),o}function Tf(i,t,e,n,s){let r;if(s===ig(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=cu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=cu(o/n|0,i[o],i[o+1],r);return r&&As(r,r.next)&&(_r(r),r=r.next),r}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(As(e,e.next)||De(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Jm(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Vm(i,n,s,r):Hm(i)){t.push(l.i,i.i,c.i),_r(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Wm(Gi(i),t),gr(i,t,e,n,s,r,2)):o===2&&Xm(i,t,e,n,s,r):gr(Gi(i),t,e,n,s,r,1);break}}}function Hm(i){const t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Qs(s,a,r,l,o,c,p.x,p.y)&&De(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Vm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(De(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),x=Math.max(a,l,c),g=Math.max(h,d,f),m=ic(u,p,t,e,n),_=ic(x,g,t,e,n);let b=i.prevZ,M=i.nextZ;for(;b&&b.z>=m&&M&&M.z<=_;){if(b.x>=u&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Qs(a,h,l,d,c,f,b.x,b.y)&&De(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=u&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Qs(a,h,l,d,c,f,M.x,M.y)&&De(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=m;){if(b.x>=u&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Qs(a,h,l,d,c,f,b.x,b.y)&&De(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=_;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Qs(a,h,l,d,c,f,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Wm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!As(n,s)&&Rf(n,e,e.next,s)&&xr(n,s)&&xr(s,n)&&(t.push(n.i,e.i,s.i),_r(e),_r(e.next),e=i=s),e=e.next}while(e!==i);return Gi(e)}function Xm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tg(o,a)){let l=Cf(o,a);o=Gi(o,o.next),l=Gi(l,l.next),gr(o,t,e,n,s,r,0),gr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ym(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Tf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Qm(c))}s.sort(qm);for(let r=0;r<s.length;r++)e=$m(s[r],e);return e}function qm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function $m(i,t){const e=Zm(i,t);if(!e)return t;const n=Cf(e,i);return Gi(n,n.next),Gi(e,e.next)}function Zm(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(As(i,e))return e;do{if(As(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Af(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);xr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Km(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Km(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function Jm(i,t,e,n){let s=i;do s.z===0&&(s.z=ic(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jm(s)}function jm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ic(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Qm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Af(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Qs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Af(i,t,e,n,s,r,o,a)}function tg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!eg(i,t)&&(xr(i,t)&&xr(t,i)&&ng(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||As(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function As(i,t){return i.x===t.x&&i.y===t.y}function Rf(i,t,e,n){const s=ro(De(i,t,e)),r=ro(De(i,t,n)),o=ro(De(e,n,i)),a=ro(De(e,n,t));return!!(s!==r&&o!==a||s===0&&so(i,e,t)||r===0&&so(i,n,t)||o===0&&so(e,i,n)||a===0&&so(e,t,n))}function so(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ro(i){return i>0?1:i<0?-1:0}function eg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function ng(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cf(i,t){const e=sc(i.i,i.x,i.y),n=sc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cu(i,t,e,n){const s=sc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ig(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class sg{static triangulate(t,e,n=2){return Gm(t,e,n)}}class gs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return gs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];hu(t),uu(n,t);let o=t.length;e.forEach(hu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,uu(n,e[l]);const a=sg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function hu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ko extends Fe{constructor(t=new Vc([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:rg;let b,M=!1,T,A,v,w;if(m){b=m.getSpacedPoints(h),M=!0,f=!1;const J=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,J),A=new C,v=new C,w=new C}f||(g=0,u=0,p=0,x=0);const U=a.extractPoints(c);let P=U.shape;const F=U.holes;if(!gs.isClockWise(P)){P=P.reverse();for(let J=0,ot=F.length;J<ot;J++){const z=F[J];gs.isClockWise(z)&&(F[J]=z.reverse())}}function Z(J){const z=10000000000000001e-36;let Y=J[0];for(let V=1;V<=J.length;V++){const ut=V%J.length,lt=J[ut],It=lt.x-Y.x,Ht=lt.y-Y.y,Qt=It*It+Ht*Ht,N=Math.max(Math.abs(lt.x),Math.abs(lt.y),Math.abs(Y.x),Math.abs(Y.y)),Me=z*N*N;if(Qt<=Me){J.splice(ut,1),V--;continue}Y=lt}}Z(P),F.forEach(Z);const D=F.length,W=P;for(let J=0;J<D;J++){const ot=F[J];P=P.concat(ot)}function K(J,ot,z){return ot||ue("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ot,z)}const X=P.length;function ht(J,ot,z){let Y,V,ut;const lt=J.x-ot.x,It=J.y-ot.y,Ht=z.x-J.x,Qt=z.y-J.y,N=lt*lt+It*It,Me=lt*Qt-It*Ht;if(Math.abs(Me)>Number.EPSILON){const oe=Math.sqrt(N),ye=Math.sqrt(Ht*Ht+Qt*Qt),bt=ot.x-It/oe,Ne=ot.y+lt/oe,$t=z.x-Qt/ye,Kt=z.y+Ht/ye,R=(($t-bt)*Qt-(Kt-Ne)*Ht)/(lt*Qt-It*Ht);Y=bt+lt*R-J.x,V=Ne+It*R-J.y;const y=Y*Y+V*V;if(y<=2)return new ft(Y,V);ut=Math.sqrt(y/2)}else{let oe=!1;lt>Number.EPSILON?Ht>Number.EPSILON&&(oe=!0):lt<-Number.EPSILON?Ht<-Number.EPSILON&&(oe=!0):Math.sign(It)===Math.sign(Qt)&&(oe=!0),oe?(Y=-It,V=lt,ut=Math.sqrt(N)):(Y=lt,V=It,ut=Math.sqrt(N/2))}return new ft(Y/ut,V/ut)}const $=[];for(let J=0,ot=W.length,z=ot-1,Y=J+1;J<ot;J++,z++,Y++)z===ot&&(z=0),Y===ot&&(Y=0),$[J]=ht(W[J],W[z],W[Y]);const j=[];let rt,Dt=$.concat();for(let J=0,ot=D;J<ot;J++){const z=F[J];rt=[];for(let Y=0,V=z.length,ut=V-1,lt=Y+1;Y<V;Y++,ut++,lt++)ut===V&&(ut=0),lt===V&&(lt=0),rt[Y]=ht(z[Y],z[ut],z[lt]);j.push(rt),Dt=Dt.concat(rt)}let Nt;if(g===0)Nt=gs.triangulateShape(W,F);else{const J=[],ot=[];for(let z=0;z<g;z++){const Y=z/g,V=u*Math.cos(Y*Math.PI/2),ut=p*Math.sin(Y*Math.PI/2)+x;for(let lt=0,It=W.length;lt<It;lt++){const Ht=K(W[lt],$[lt],ut);Ut(Ht.x,Ht.y,-V),Y===0&&J.push(Ht)}for(let lt=0,It=D;lt<It;lt++){const Ht=F[lt];rt=j[lt];const Qt=[];for(let N=0,Me=Ht.length;N<Me;N++){const oe=K(Ht[N],rt[N],ut);Ut(oe.x,oe.y,-V),Y===0&&Qt.push(oe)}Y===0&&ot.push(Qt)}}Nt=gs.triangulateShape(J,ot)}const Q=Nt.length,gt=p+x;for(let J=0;J<X;J++){const ot=f?K(P[J],Dt[J],gt):P[J];M?(v.copy(T.normals[0]).multiplyScalar(ot.x),A.copy(T.binormals[0]).multiplyScalar(ot.y),w.copy(b[0]).add(v).add(A),Ut(w.x,w.y,w.z)):Ut(ot.x,ot.y,0)}for(let J=1;J<=h;J++)for(let ot=0;ot<X;ot++){const z=f?K(P[ot],Dt[ot],gt):P[ot];M?(v.copy(T.normals[J]).multiplyScalar(z.x),A.copy(T.binormals[J]).multiplyScalar(z.y),w.copy(b[J]).add(v).add(A),Ut(w.x,w.y,w.z)):Ut(z.x,z.y,d/h*J)}for(let J=g-1;J>=0;J--){const ot=J/g,z=u*Math.cos(ot*Math.PI/2),Y=p*Math.sin(ot*Math.PI/2)+x;for(let V=0,ut=W.length;V<ut;V++){const lt=K(W[V],$[V],Y);Ut(lt.x,lt.y,d+z)}for(let V=0,ut=F.length;V<ut;V++){const lt=F[V];rt=j[V];for(let It=0,Ht=lt.length;It<Ht;It++){const Qt=K(lt[It],rt[It],Y);M?Ut(Qt.x,Qt.y+b[h-1].y,b[h-1].x+z):Ut(Qt.x,Qt.y,d+z)}}}Lt(),Gt();function Lt(){const J=s.length/3;if(f){let ot=0,z=X*ot;for(let Y=0;Y<Q;Y++){const V=Nt[Y];he(V[2]+z,V[1]+z,V[0]+z)}ot=h+g*2,z=X*ot;for(let Y=0;Y<Q;Y++){const V=Nt[Y];he(V[0]+z,V[1]+z,V[2]+z)}}else{for(let ot=0;ot<Q;ot++){const z=Nt[ot];he(z[2],z[1],z[0])}for(let ot=0;ot<Q;ot++){const z=Nt[ot];he(z[0]+X*h,z[1]+X*h,z[2]+X*h)}}n.addGroup(J,s.length/3-J,0)}function Gt(){const J=s.length/3;let ot=0;xt(W,ot),ot+=W.length;for(let z=0,Y=F.length;z<Y;z++){const V=F[z];xt(V,ot),ot+=V.length}n.addGroup(J,s.length/3-J,1)}function xt(J,ot){let z=J.length;for(;--z>=0;){const Y=z;let V=z-1;V<0&&(V=J.length-1);for(let ut=0,lt=h+g*2;ut<lt;ut++){const It=X*ut,Ht=X*(ut+1),Qt=ot+Y+It,N=ot+V+It,Me=ot+V+Ht,oe=ot+Y+Ht;tt(Qt,N,Me,oe)}}}function Ut(J,ot,z){l.push(J),l.push(ot),l.push(z)}function he(J,ot,z){Pt(J),Pt(ot),Pt(z);const Y=s.length/3,V=_.generateTopUV(n,s,Y-3,Y-2,Y-1);Tt(V[0]),Tt(V[1]),Tt(V[2])}function tt(J,ot,z,Y){Pt(J),Pt(ot),Pt(Y),Pt(ot),Pt(z),Pt(Y);const V=s.length/3,ut=_.generateSideWallUV(n,s,V-6,V-3,V-2,V-1);Tt(ut[0]),Tt(ut[1]),Tt(ut[3]),Tt(ut[1]),Tt(ut[2]),Tt(ut[3])}function Pt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Tt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return og(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ec[s.type]().fromJSON(s)),new Ko(n,t.options)}}const rg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ft(r,o),new ft(a,l),new ft(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],u=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-d),new ft(f,1-p),new ft(x,1-m)]:[new ft(a,1-l),new ft(h,1-d),new ft(u,1-p),new ft(g,1-m)]}};function og(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Jo extends Bc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jo(t.radius,t.detail)}}class Si extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],x=[],g=[];for(let m=0;m<h;m++){const _=m*f-o;for(let b=0;b<c;b++){const M=b*d-r;p.push(M,-_,0),x.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const b=_+c*m,M=_+c*(m+1),T=_+1+c*(m+1),A=_+1+c*m;u.push(b,M,A),u.push(M,T,A)}this.setIndex(u),this.setAttribute("position",new me(p,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hn extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const f=(e-t)/s,u=new C,p=new ft;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const m=r+g/n*o;u.x=d*Math.cos(m),u.y=d*Math.sin(m),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}d+=f}for(let x=0;x<s;x++){const g=x*(n+1);for(let m=0;m<n;m++){const _=m+g,b=_,M=_+n+1,T=_+n+2,A=_+1;a.push(b,M,A),a.push(M,T,A)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ln extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new C,f=new C,u=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){const _=[],b=m/n,M=o+b*a,T=t*Math.cos(M),A=Math.sqrt(t*t-T*T);let v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const U=w/e,P=s+U*r;d.x=-A*Math.cos(P),d.y=T,d.z=A*Math.sin(P),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(U+v,1-b),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const b=h[m][_+1],M=h[m][_],T=h[m+1][_],A=h[m+1][_+1];(m!==0||o>0)&&u.push(b,M,A),(m!==n-1||l<Math.PI)&&u.push(M,T,A)}this.setIndex(u),this.setAttribute("position",new me(p,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bi extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],f=new C,u=new C,p=new C;for(let x=0;x<=n;x++){const g=o+x/n*a;for(let m=0;m<=s;m++){const _=m/s*r;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),c.push(u.x,u.y,u.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){const m=(s+1)*x+g-1,_=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,M=(s+1)*x+g;l.push(m,_,M),l.push(_,b,M)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(du(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(du(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){const t={};for(let e=0;e<i.length;e++){const n=Rs(i[e]);for(const s in n)t[s]=n[s]}return t}function du(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ag(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const lg={clone:Rs,merge:cn};var cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ug extends wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qe extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dg extends qe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class fg extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pg extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Wc extends Be{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Lf extends Wc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ba=new ve,fu=new C,pu=new C;class Df{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ba,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oo=new C,ao=new Wi,Dn=new C;class If extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oo,ao,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(oo,ao,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new C,mu=new ft,gu=new ft;class yn extends If{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,mu,gu),e.subVectors(gu,mu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class mg extends Df{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}}class gg extends Wc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Nf extends If{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xg extends Df{constructor(){super(new Nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jo extends Wc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new xg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const os=-90,as=1;class rc extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(os,as,t,e);s.layers=this.layers,this.add(s);const r=new yn(os,as,t,e);r.layers=this.layers,this.add(r);const o=new yn(os,as,t,e);o.layers=this.layers,this.add(o);const a=new yn(os,as,t,e);a.layers=this.layers,this.add(a);const l=new yn(os,as,t,e);l.layers=this.layers,this.add(l);const c=new yn(os,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class _g extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const xu=new ve;class vg{constructor(t,e,n=0,s=1/0){this.ray=new Zo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(t,e=!0,n=[]){return oc(t,this,n,e),n.sort(_u),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oc(t[s],this,n,e);return n.sort(_u),n}}function _u(i,t){return i.distance-t.distance}function oc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)oc(r[o],t,e,!0)}}function vu(i,t,e,n){const s=Mg(n);switch(e){case tf:return i*t;case nf:return i*t/s.components*s.byteLength;case Pc:return i*t/s.components*s.byteLength;case Bi:return i*t*2/s.components*s.byteLength;case Lc:return i*t*2/s.components*s.byteLength;case ef:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case Dc:return i*t*4/s.components*s.byteLength;case yo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:case Tl:return Math.max(i,16)*Math.max(t,8)/4;case bl:case El:return Math.max(i,8)*Math.max(t,8)/2;case Al:case Rl:case Pl:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cl:case Lo:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ql:case $l:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Do:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mg(i){switch(i){case gn:case Kd:return{byteLength:1,components:1};case dr:case Jd:case Bn:return{byteLength:2,components:1};case Rc:case Cc:return{byteLength:2,components:4};case kn:case Ac:case On:return{byteLength:4,components:1};case jd:case Qd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);function Uf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yg(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const x=d[u];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bg=`#ifdef USE_ALPHAHASH
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
#endif`,wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rg=`#ifdef USE_AOMAP
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
#endif`,Cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ug=`#ifdef USE_IRIDESCENCE
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
#endif`,Fg=`#ifdef USE_BUMPMAP
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
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Yg=`vec3 transformedNormal = objectNormal;
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
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
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
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,fx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,vx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mx=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lx=`#if defined( USE_POINTS_UV )
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
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ux=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,o_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,M_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S_=`uniform sampler2D t2D;
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,R_=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C_=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,P_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,F_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,O_=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,z_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,k_=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,B_=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,G_=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,H_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,W_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,X_=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Y_=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,q_=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,$_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Z_=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,K_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,J_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,j_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Q_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,tv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ie={alphahash_fragment:Sg,alphahash_pars_fragment:bg,alphamap_fragment:wg,alphamap_pars_fragment:Eg,alphatest_fragment:Tg,alphatest_pars_fragment:Ag,aomap_fragment:Rg,aomap_pars_fragment:Cg,batching_pars_vertex:Pg,batching_vertex:Lg,begin_vertex:Dg,beginnormal_vertex:Ig,bsdfs:Ng,iridescence_fragment:Ug,bumpmap_pars_fragment:Fg,clipping_planes_fragment:Og,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Bg,color_fragment:Gg,color_pars_fragment:Hg,color_pars_vertex:Vg,color_vertex:Wg,common:Xg,defaultnormal_vertex:Yg,displacementmap_pars_vertex:qg,displacementmap_vertex:$g,emissivemap_fragment:Zg,emissivemap_pars_fragment:Kg,colorspace_fragment:Jg,colorspace_pars_fragment:jg,envmap_fragment:Qg,envmap_common_pars_fragment:tx,envmap_pars_fragment:ex,envmap_pars_vertex:nx,envmap_physical_pars_fragment:fx,envmap_vertex:ix,fog_vertex:sx,fog_pars_vertex:rx,fog_fragment:ox,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:ux,lights_pars_begin:dx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:xx,lights_physical_fragment:_x,lights_physical_pars_fragment:vx,lights_fragment_begin:Mx,lights_fragment_maps:yx,lights_fragment_end:Sx,lightprobes_pars_fragment:bx,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Rx,map_pars_fragment:Cx,map_particle_fragment:Px,map_particle_pars_fragment:Lx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Nx,morphcolor_vertex:Ux,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:zx,normal_fragment_begin:kx,normal_fragment_maps:Bx,normal_pars_fragment:Gx,normal_pars_vertex:Hx,normal_vertex:Vx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:$x,opaque_fragment:Zx,packing:Kx,premultiplied_alpha_fragment:Jx,project_vertex:jx,dithering_fragment:Qx,dithering_pars_fragment:t_,roughnessmap_fragment:e_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:s_,shadowmap_vertex:r_,shadowmask_pars_fragment:o_,skinbase_vertex:a_,skinning_pars_vertex:l_,skinning_vertex:c_,skinnormal_vertex:h_,specularmap_fragment:u_,specularmap_pars_fragment:d_,tonemapping_fragment:f_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:g_,uv_pars_fragment:x_,uv_pars_vertex:__,uv_vertex:v_,worldpos_vertex:M_,background_vert:y_,background_frag:S_,backgroundCube_vert:b_,backgroundCube_frag:w_,cube_vert:E_,cube_frag:T_,depth_vert:A_,depth_frag:R_,distance_vert:C_,distance_frag:P_,equirect_vert:L_,equirect_frag:D_,linedashed_vert:I_,linedashed_frag:N_,meshbasic_vert:U_,meshbasic_frag:F_,meshlambert_vert:O_,meshlambert_frag:z_,meshmatcap_vert:k_,meshmatcap_frag:B_,meshnormal_vert:G_,meshnormal_frag:H_,meshphong_vert:V_,meshphong_frag:W_,meshphysical_vert:X_,meshphysical_frag:Y_,meshtoon_vert:q_,meshtoon_frag:$_,points_vert:Z_,points_frag:K_,shadow_vert:J_,shadow_frag:j_,sprite_vert:Q_,sprite_frag:tv},Rt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Nn={basic:{uniforms:cn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:cn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:cn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:cn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:cn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:cn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:cn([Rt.points,Rt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:cn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:cn([Rt.common,Rt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:cn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:cn([Rt.sprite,Rt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:cn([Rt.common,Rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:cn([Rt.lights,Rt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Nn.physical={uniforms:cn([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const lo={r:0,b:0,g:0},ev=new ve,Ff=new jt;Ff.set(-1,0,0,0,1,0,0,0,1);function nv(i,t,e,n,s,r){const o=new Bt(0);let a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){const M=_.backgroundBlurriness>0;b=t.get(b,M)}return b}function p(_){let b=!1;const M=u(_);M===null?g(o,a):M&&M.isColor&&(g(M,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,b){const M=u(b);M&&M.isCubeTexture?(c===void 0&&(c=new qt(new Gn(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Rs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ff),c.material.toneMapped=ce.getTransfer(M.colorSpace)!==_e,(h!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new qt(new Si(2,2),new wi({name:"BackgroundMaterial",uniforms:Rs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ce.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,b){_.getRGB(lo,Pf(i)),e.buffers.color.setClear(lo.r,lo.g,lo.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:x,dispose:m}}function iv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(F,k,Z,D,W){let K=!1;const X=d(F,D,Z,k);r!==X&&(r=X,c(r.object)),K=u(F,D,Z,W),K&&p(F,D,Z,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,M(F,k,Z,D),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function d(F,k,Z,D){const W=D.wireframe===!0;let K=n[k.id];K===void 0&&(K={},n[k.id]=K);const X=F.isInstancedMesh===!0?F.id:0;let ht=K[X];ht===void 0&&(ht={},K[X]=ht);let $=ht[Z.id];$===void 0&&($={},ht[Z.id]=$);let j=$[W];return j===void 0&&(j=f(l()),$[W]=j),j}function f(F){const k=[],Z=[],D=[];for(let W=0;W<e;W++)k[W]=0,Z[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:D,object:F,attributes:{},index:null}}function u(F,k,Z,D){const W=r.attributes,K=k.attributes;let X=0;const ht=Z.getAttributes();for(const $ in ht)if(ht[$].location>=0){const rt=W[$];let Dt=K[$];if(Dt===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(Dt=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(Dt=F.instanceColor)),rt===void 0||rt.attribute!==Dt||Dt&&rt.data!==Dt.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function p(F,k,Z,D){const W={},K=k.attributes;let X=0;const ht=Z.getAttributes();for(const $ in ht)if(ht[$].location>=0){let rt=K[$];rt===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(rt=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(rt=F.instanceColor));const Dt={};Dt.attribute=rt,rt&&rt.data&&(Dt.data=rt.data),W[$]=Dt,X++}r.attributes=W,r.attributesNum=X,r.index=D}function x(){const F=r.newAttributes;for(let k=0,Z=F.length;k<Z;k++)F[k]=0}function g(F){m(F,0)}function m(F,k){const Z=r.newAttributes,D=r.enabledAttributes,W=r.attributeDivisors;Z[F]=1,D[F]===0&&(i.enableVertexAttribArray(F),D[F]=1),W[F]!==k&&(i.vertexAttribDivisor(F,k),W[F]=k)}function _(){const F=r.newAttributes,k=r.enabledAttributes;for(let Z=0,D=k.length;Z<D;Z++)k[Z]!==F[Z]&&(i.disableVertexAttribArray(Z),k[Z]=0)}function b(F,k,Z,D,W,K,X){X===!0?i.vertexAttribIPointer(F,k,Z,W,K):i.vertexAttribPointer(F,k,Z,D,W,K)}function M(F,k,Z,D){x();const W=D.attributes,K=Z.getAttributes(),X=k.defaultAttributeValues;for(const ht in K){const $=K[ht];if($.location>=0){let j=W[ht];if(j===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){const rt=j.normalized,Dt=j.itemSize,Nt=t.get(j);if(Nt===void 0)continue;const Q=Nt.buffer,gt=Nt.type,Lt=Nt.bytesPerElement,Gt=gt===i.INT||gt===i.UNSIGNED_INT||j.gpuType===Ac;if(j.isInterleavedBufferAttribute){const xt=j.data,Ut=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,he=j.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let tt=0;tt<$.locationSize;tt++)m($.location+tt,xt.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let tt=0;tt<$.locationSize;tt++)g($.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let tt=0;tt<$.locationSize;tt++)b($.location+tt,Dt/$.locationSize,gt,rt,Ut*Lt,(he+Dt/$.locationSize*tt)*Lt,Gt)}else{if(j.isInstancedBufferAttribute){for(let xt=0;xt<$.locationSize;xt++)m($.location+xt,j.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xt=0;xt<$.locationSize;xt++)g($.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let xt=0;xt<$.locationSize;xt++)b($.location+xt,Dt/$.locationSize,gt,rt,Dt*Lt,Dt/$.locationSize*xt*Lt,Gt)}}else if(X!==void 0){const rt=X[ht];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv($.location,rt);break;case 3:i.vertexAttrib3fv($.location,rt);break;case 4:i.vertexAttrib4fv($.location,rt);break;default:i.vertexAttrib1fv($.location,rt)}}}}_()}function T(){U();for(const F in n){const k=n[F];for(const Z in k){const D=k[Z];for(const W in D){const K=D[W];for(const X in K)h(K[X].object),delete K[X];delete D[W]}}delete n[F]}}function A(F){if(n[F.id]===void 0)return;const k=n[F.id];for(const Z in k){const D=k[Z];for(const W in D){const K=D[W];for(const X in K)h(K[X].object),delete K[X];delete D[W]}}delete n[F.id]}function v(F){for(const k in n){const Z=n[k];for(const D in Z){const W=Z[D];if(W[F.id]===void 0)continue;const K=W[F.id];for(const X in K)h(K[X].object),delete K[X];delete W[F.id]}}}function w(F){for(const k in n){const Z=n[k],D=F.isInstancedMesh===!0?F.id:0,W=Z[D];if(W!==void 0){for(const K in W){const X=W[K];for(const ht in X)h(X[ht].object),delete X[ht];delete W[K]}delete Z[D],Object.keys(Z).length===0&&delete n[k]}}}function U(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:w,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function sv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Cn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const w=v===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==gn&&v!==On&&!w&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:A}}function ov(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ei,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{const _=r?0:n,b=_*4;let M=m.clippingState||null;l.value=M,M=h(p,f,b,u);for(let T=0;T!==b;++T)M[T]=e[T];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,p!==!0||g===null){const m=u+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,M=u;b!==x;++b,M+=4)o.copy(d[b]).applyMatrix4(_,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}class Xc extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _f(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:vs});r.uniforms.tEquirect.value=e;const o=new qt(s,r),a=e.minFilter;return e.minFilter===si&&(e.minFilter=hn),new rc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Mu=256,av=3,lv=20,Of=256,zf=16,cv=3,hv=new C,uv=new Bt;class vr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new rc(1,10,null),this._boxMesh=new qt(new Gn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=hv}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(uv));const g=new rc(n,s,h);return g.position.copy(a),g.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Mu,cf(t))}_fromTexture(t,e){t.mapping===ws||t.mapping===ur?this._setSize(t.image.length===0?Mu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=yu(t,!1,!1),n=Math.log2(t)-av;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ws||t.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Su()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=dv(),this._integrationMaterial=fv());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/zf);for(let o=0;o<=n;o++){const a=vr.lodToRoughness(o,n);if(o>n-cv)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Of*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=pv());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function yu(i,t,e){return new Xc(i,{minFilter:si,generateMipmaps:t,type:Bn,colorSpace:Io,depthBuffer:e})}function Tr(i,t,e){return new wi({name:i,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:sn,blending:vs,depthTest:!1,depthWrite:!1})}function dv(){return Tr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Of}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fv(){return Tr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pv(){return Tr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Su(){return Tr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function bu(){return Tr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===ua||u===da)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new Xc(p.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===ua||u===da,x=u===ws||u===ur;if(p||x){let g=e.get(f);const m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new vr(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const _=f.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new vr(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,u){return u===ua?f.mapping=ws:u===da&&(f.mapping=ur),f}function l(f){let u=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function gv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ys("WebGLRenderer: "+n+" extension not supported."),s}}}function xv(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const g in x)t.update(x[g],i.ARRAY_BUFFER)}function d(p){const x=p.index,g=p.attributes.position;let m=0;if(g===void 0)return;const _=x!==null?x.array.length:g.array.length/3-1,b=g.count>=65535?ff:df,M=new b(Math.ceil(_/3)*6,1),T=M.array;if(x!==null){const v=x.array;m=x.version;for(let w=0,U=0;w<_;w+=3){const P=v[w+0],F=v[w+1],k=v[w+2];T[U++]=P,T[U++]=F,T[U++]=F,T[U++]=k,T[U++]=k,T[U++]=P}}else{m=g.version;for(let v=0,w=0;v<_;v+=3){const U=v+0,P=v+1,F=v+2;T[w++]=U,T[w++]=P,T[w++]=P,T[w++]=F,T[w++]=F,T[w++]=U}}M.version=m;const A=r.get(p);A&&t.remove(A),r.set(p,M)}function f(p){const x=r.get(p);if(x){const g=p.index;g!==null&&x.version<g.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in s){const x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function _v(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let g=0;g<u;g++)x+=f[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mv(i,t,e){const n=new WeakMap,s=new Le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let U=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;u===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let M=a.attributes.position.count*b,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*T*4*d),v=new hf(A,M,T,d);v.type=On,v.needsUpdate=!0;const w=b*4;for(let P=0;P<d;P++){const F=g[P],k=m[P],Z=_[P],D=M*T*4*P;for(let W=0;W<F.count;W++){const K=W*w;u===!0&&(s.fromBufferAttribute(F,W),A[D+K+0]=s.x,A[D+K+1]=s.y,A[D+K+2]=s.z,A[D+K+3]=0),p===!0&&(s.fromBufferAttribute(k,W),A[D+K+4]=s.x,A[D+K+5]=s.y,A[D+K+6]=s.z,A[D+K+7]=0),x===!0&&(s.fromBufferAttribute(Z,W),A[D+K+8]=s.x,A[D+K+9]=s.y,A[D+K+10]=s.z,A[D+K+11]=Z.itemSize===4?s.w:1)}}f={count:d,texture:v,size:new ft(M,T)},n.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function yv(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Sv={[Vd]:"LINEAR_TONE_MAPPING",[Wd]:"REINHARD_TONE_MAPPING",[Xd]:"CINEON_TONE_MAPPING",[Tc]:"ACES_FILMIC_TONE_MAPPING",[qd]:"AGX_TONE_MAPPING",[$d]:"NEUTRAL_TONE_MAPPING",[Yd]:"CUSTOM_TONE_MAPPING"};function bv(i,t,e,n,s,r){const o=new zn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Fe;h.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new me([0,2,0,0,2,0],2));const d=new ug({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new qt(h,d),u=new Nf(-1,1,1,-1,0,1);let p=null,x=null,g=!1,m,_=null,b=[],M=!1;this.setSize=function(T,A){o.setSize(T,A),a!==null&&a.setSize(T,A),l!==null&&l.setSize(T,A);for(let v=0;v<b.length;v++){const w=b[v];w.setSize&&w.setSize(T,A)}},this.setEffects=function(T){b=T,M=b.length>0&&b[0].isRenderPass===!0;const A=o.width,v=o.height;b.length>0&&a===null&&(a=new zn(A,v,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),l=new zn(A,v,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&b.some(U=>U.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new Ts(A,v),r===!0&&(c.format=vi,c.type=Es)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let U=0;U<b.length;U++){const P=b[U];P.setSize&&P.setSize(A,v),w&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(T,A){if(g||T.toneMapping===ai&&b.length===0)return!1;if(_=A,A!==null){const v=A.width,w=A.height;(o.width!==v||o.height!==w)&&this.setSize(v,w)}return M===!1&&T.setRenderTarget(o),m=T.toneMapping,T.toneMapping=ai,!0},this.hasRenderPass=function(){return M},this.end=function(T,A){T.toneMapping=m,g=!0;let v=o,w=a;for(let U=0;U<b.length;U++){const P=b[U];P.enabled!==!1&&(P.render(T,w,v,A),P.needsSwap!==!1&&(v=w,w=w===a?l:a))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,d.defines={},ce.getTransfer(p)===_e&&(d.defines.SRGB_TRANSFER="");const U=Sv[x];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,T.setRenderTarget(_),T.render(f,u),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const kf=new rn,Bf=new Ts(1,1),Gf=new vf(1),Hf=new hf,Vf=new hm,Wf=new _f,wu=[],Eu=[],Tu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function Ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=wu[s];if(r===void 0&&(r=new Float32Array(s),wu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qo(i,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function Tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function Av(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function Rv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Ru.set(n),i.uniformMatrix2fv(this.addr,!1,Ru),He(e,n)}}function Cv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Au.set(n),i.uniformMatrix3fv(this.addr,!1,Au),He(e,n)}}function Pv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Tu.set(n),i.uniformMatrix4fv(this.addr,!1,Tu),He(e,n)}}function Lv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function Iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function Nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function Uv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function Ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function ta(i){return i.version===0&&(i.compareFunction=of,i.needsUpdate=!0),i}function kv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ta(Bf):r=kf,e.setTexture2D(t||r,s)}function Bv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vf,s)}function Gv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ta(Gf):r=Wf,e.setTextureCube(t||r,s)}function Hv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hf,s)}function Vv(i){switch(i){case 5126:return wv;case 35664:return Ev;case 35665:return Tv;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Iv;case 35669:case 35673:return Nv;case 5125:return Uv;case 36294:return Fv;case 36295:return Ov;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Wv(i,t){i.uniform1fv(this.addr,t)}function Xv(i,t){const e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Yv(i,t){const e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function qv(i,t){const e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function $v(i,t){const e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zv(i,t){const e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kv(i,t){const e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jv(i,t){i.uniform1iv(this.addr,t)}function jv(i,t){i.uniform2iv(this.addr,t)}function Qv(i,t){i.uniform3iv(this.addr,t)}function tM(i,t){i.uniform4iv(this.addr,t)}function eM(i,t){i.uniform1uiv(this.addr,t)}function nM(i,t){i.uniform2uiv(this.addr,t)}function iM(i,t){i.uniform3uiv(this.addr,t)}function sM(i,t){i.uniform4uiv(this.addr,t)}function rM(i,t,e){const n=this.cache,s=t.length,r=Qo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ta(Bf):o=kf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function oM(i,t,e){const n=this.cache,s=t.length,r=Qo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vf,r[o])}function aM(i,t,e){const n=this.cache,s=t.length,r=Qo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=ta(Gf):o=Wf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function lM(i,t,e){const n=this.cache,s=t.length,r=Qo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hf,r[o])}function cM(i){switch(i){case 5126:return Wv;case 35664:return Xv;case 35665:return Yv;case 35666:return qv;case 35674:return $v;case 35675:return Zv;case 35676:return Kv;case 5124:case 35670:return Jv;case 35667:case 35671:return jv;case 35668:case 35672:return Qv;case 35669:case 35673:return tM;case 5125:return eM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}class hM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vv(e.type)}}class uM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cM(e.type)}}class dM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Cu(i,t){i.seq.push(t),i.map[t.id]=t}function fM(i,t,e){const n=i.name,s=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),o=Ga.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cu(e,c===void 0?new hM(a,i,t):new uM(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new dM(a),Cu(e,d)),e=d}}}class Eo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);fM(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Pu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pM=37297;let mM=0;function gM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Lu=new jt;function xM(i){ce._getMatrix(Lu,ce.workingColorSpace,i);const t=`mat3( ${Lu.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case No:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Du(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+gM(i.getShaderSource(t),a)}else return r}function _M(i,t){const e=xM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const vM={[Vd]:"Linear",[Wd]:"Reinhard",[Xd]:"Cineon",[Tc]:"ACESFilmic",[qd]:"AgX",[$d]:"Neutral",[Yd]:"Custom"};function MM(i,t){const e=vM[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const co=new C;function yM(){ce.getLuminanceCoefficients(co);const i=co.x.toFixed(4),t=co.y.toFixed(4),e=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function bM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function tr(i){return i!==""}function Iu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const EM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(EM,TM)}function TM(i,t){const e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ac(e)}const AM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(i){return i.replace(AM,RM)}function RM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const CM={[Mo]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function PM(i){return CM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LM={[ur]:"ENVMAP_MODE_REFRACTION"};function DM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":LM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IM={[Hd]:"ENVMAP_BLENDING_MULTIPLY",[C0]:"ENVMAP_BLENDING_MIX",[P0]:"ENVMAP_BLENDING_ADD"};function NM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":IM[i.combine]||"ENVMAP_BLENDING_NONE"}function UM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=PM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=DM(e),d=NM(e),f=SM(e),u=bM(r),p=s.createProgram();let x,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(tr).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(tr).join(`
`),g.length>0&&(g+=`
`)):(x=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),g=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?ie.tonemapping_pars_fragment:"",e.toneMapping!==ai?MM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,_M("linearToOutputTexel",e.outputColorSpace),yM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),o=ac(o),o=Iu(o,e),o=Nu(o,e),a=ac(a),a=Iu(a,e),a=Nu(a,e),o=Uu(o),a=Uu(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=m+x+o,b=m+g+a,M=Pu(s,s.VERTEX_SHADER,_),T=Pu(s,s.FRAGMENT_SHADER,b);s.attachShader(p,M),s.attachShader(p,T),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function A(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(p)||"",k=s.getShaderInfoLog(M)||"",Z=s.getShaderInfoLog(T)||"",D=F.trim(),W=k.trim(),K=Z.trim();let X=!0,ht=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,T);else{const $=Du(s,M,"vertex"),j=Du(s,T,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+$+`
`+j)}else D!==""?Zt("WebGLProgram: Program Info Log:",D):(W===""||K==="")&&(ht=!1);ht&&(P.diagnostics={runnable:X,programLog:D,vertexShader:{log:W,prefix:x},fragmentShader:{log:K,prefix:g}})}s.deleteShader(M),s.deleteShader(T),v=new Eo(s,p),w=wM(s,p)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(p,pM)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}let FM=0;class OM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zM(t),e.set(t,n)),n}}class zM{constructor(t){this.id=FM++,this.code=t,this.usedTimes=0}}function kM(i){return i===Bi||i===Lo||i===Do}function BM(i,t,e,n,s,r){const o=new Oc,a=new OM,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,w,U,P,F,k){const Z=P.fog,D=F.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,X=t.get(v.envMap||W,K),ht=f[v.type];let $=n.precision;v.precision!==null&&($=n.getMaxPrecision(v.precision),$!==v.precision&&Zt("WebGLProgram.getParameters:",v.precision,"not supported, using",$,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,rt=j!==void 0?j.length:0;let Dt=0;D.morphAttributes.position!==void 0&&(Dt=1),D.morphAttributes.normal!==void 0&&(Dt=2),D.morphAttributes.color!==void 0&&(Dt=3);let Nt,Q,gt,Lt;if(ht){const At=Nn[ht];Nt=At.vertexShader,Q=At.fragmentShader}else{Nt=v.vertexShader,Q=v.fragmentShader;const At=a.getVertexShaderStage(v),xe=a.getFragmentShaderStage(v);a.update(v,At,xe),gt=At.id,Lt=xe.id}const Gt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,he=F.isBatchedMesh===!0,tt=!!v.map,Pt=!!v.matcap,Tt=!!X,J=Tt&&X.isPMREMTexture===!0,ot=!!v.aoMap,z=!!v.lightMap,Y=!!v.bumpMap&&v.wireframe===!1,V=!!v.normalMap,ut=!!v.displacementMap,lt=!!v.emissiveMap,It=!!v.metalnessMap,Ht=!!v.roughnessMap,Qt=v.anisotropy>0,N=v.clearcoat>0,Me=v.diffuseRoughness>0,oe=v.dispersion>0,ye=v.retroreflectivity>0,bt=v.iridescence>0,Ne=v.sheen>0,$t=v.transmission>0,Kt=Qt&&!!v.anisotropyMap,R=N&&!!v.clearcoatMap,y=N&&!!v.clearcoatNormalMap,G=N&&!!v.clearcoatRoughnessMap,dt=Me&&!!v.diffuseRoughnessMap,ct=bt&&!!v.iridescenceMap,_t=bt&&!!v.iridescenceThicknessMap,wt=Ne&&!!v.sheenColorMap,nt=Ne&&!!v.sheenRoughnessMap,st=!!v.specularMap,Mt=!!v.specularColorMap,L=!!v.specularIntensityMap,at=$t&&!!v.transmissionMap,et=$t&&!!v.thicknessMap,yt=!!v.gradientMap,mt=!!v.alphaMap,vt=v.alphaTest>0,Vt=!!v.alphaHash,ne=!!v.extensions;let pt=ai;v.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Yt=J?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,ee={shaderID:ht,shaderType:v.type,shaderName:v.name,vertexShader:Nt,fragmentShader:Q,defines:v.defines,customVertexShaderID:gt,customFragmentShaderID:Lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:$,batching:he,batchingColor:he&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,outputColorSpace:Gt===null?i.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:Pt,envMap:Tt,envMapMode:Tt&&X.mapping,envMapPMREM:J,envMapMaxLod:J?Yt.length-1:null,envMapSize:J?Yt[0].width:null,aoMap:ot,lightMap:z,bumpMap:Y,normalMap:V,displacementMap:ut,emissiveMap:lt,normalMapObjectSpace:V&&v.normalMapType===I0,normalMapTangentSpace:V&&v.normalMapType===Ql,packedNormalMap:V&&v.normalMapType===Ql&&kM(v.normalMap.format),metalnessMap:It,roughnessMap:Ht,anisotropy:Qt,anisotropyMap:Kt,clearcoat:N,clearcoatMap:R,clearcoatNormalMap:y,clearcoatRoughnessMap:G,diffuseRoughness:Me,diffuseRoughnessMap:dt,dispersion:oe,retroreflection:ye,iridescence:bt,iridescenceMap:ct,iridescenceThicknessMap:_t,sheen:Ne,sheenColorMap:wt,sheenRoughnessMap:nt,specularMap:st,specularColorMap:Mt,specularIntensityMap:L,transmission:$t,transmissionMap:at,thicknessMap:et,gradientMap:yt,opaque:v.transparent===!1&&v.blending===Ms&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:vt,alphaHash:Vt,combine:v.combine,mapUv:tt&&u(v.map.channel),aoMapUv:ot&&u(v.aoMap.channel),lightMapUv:z&&u(v.lightMap.channel),bumpMapUv:Y&&u(v.bumpMap.channel),normalMapUv:V&&u(v.normalMap.channel),displacementMapUv:ut&&u(v.displacementMap.channel),emissiveMapUv:lt&&u(v.emissiveMap.channel),metalnessMapUv:It&&u(v.metalnessMap.channel),roughnessMapUv:Ht&&u(v.roughnessMap.channel),anisotropyMapUv:Kt&&u(v.anisotropyMap.channel),clearcoatMapUv:R&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:y&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:ct&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:nt&&u(v.sheenRoughnessMap.channel),specularMapUv:st&&u(v.specularMap.channel),specularColorMapUv:Mt&&u(v.specularColorMap.channel),specularIntensityMapUv:L&&u(v.specularIntensityMap.channel),transmissionMapUv:at&&u(v.transmissionMap.channel),thicknessMapUv:et&&u(v.thicknessMap.channel),alphaMapUv:mt&&u(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(V||Qt),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(tt||mt),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&V===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Dt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&ce.getTransfer(v.map.colorSpace)===_e,decodeVideoTextureEmissive:lt&&v.emissiveMap.isVideoTexture===!0&&ce.getTransfer(v.emissiveMap.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||he)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function x(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)w.push(U),w.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(g(w,v),m(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapPMREM),v.push(w.envMapMaxLod),v.push(w.envMapSize),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.diffuseRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.numLightProbeGrids),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function m(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){const w=f[v.type];let U;if(w){const P=Nn[w];U=lg.clone(P.uniforms)}else U=v.uniforms;return U}function b(v,w){let U=h.get(w);return U!==void 0?++U.usedTimes:(U=new UM(i,w,v,s),c.push(U),h.set(w,U)),U}function M(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function A(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function GM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function HM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,x,g,m){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},i[t]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=p,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=g,_.group=m),t++,_}function l(f,u,p,x,g,m,_){_.reversedDepth===!0&&(g=-g);const b=a(f,u,p,x,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):e.push(b)}function c(f,u,p,x,g,m){const _=a(f,u,p,x,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,u){e.length>1&&e.sort(f||HM),n.length>1&&n.sort(u||Ou),s.length>1&&s.sort(u||Ou)}function d(){for(let f=t,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function VM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new zu,i.set(n,[o])):s>=r.length?(o=new zu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function WM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Bt};break;case"SpotLight":e={position:new C,direction:new C,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function XM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let YM=0;function qM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $M(i){const t=new WM,e=XM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new ve,o=new ve;function a(c){let h=0,d=0,f=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let u=0,p=0,x=0,g=0,m=0,_=0,b=0,M=0,T=0,A=0,v=0,w=0,U=0,P=0;c.sort(qM);for(let k=0,Z=c.length;k<Z;k++){const D=c[k],W=D.color,K=D.intensity,X=D.distance;let ht=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Bi?ht=D.shadow.map.texture:ht=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=W.r*K,d+=W.g*K,f+=W.b*K;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],K);P++}else if(D.isSunLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,rt=e.get(D);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=rt,n.sunShadowMap[p]=ht;const Dt=j.getViewportCount();for(let Nt=0;Nt<Dt;Nt++)n.sunShadowMatrix[x+Nt]=j.getMatrix(Nt),n.sunShadowCascade[x+Nt]=j._cascadeData[Nt];x+=Dt,p++}n.sun[u]=$,u++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,rt=e.get(D);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize=j.mapSize,n.directionalShadow[g]=rt,n.directionalShadowMap[g]=ht,n.directionalShadowMatrix[g]=D.shadow.matrix,T++}n.directional[g]=$,g++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(W).multiplyScalar(K),$.distance=X,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[_]=$;const j=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,j.updateMatrices(D),D.castShadow&&U++),n.spotLightMatrix[_]=j.matrix,D.castShadow){const rt=e.get(D);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize=j.mapSize,n.spotShadow[_]=rt,n.spotShadowMap[_]=ht,v++}_++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(W).multiplyScalar(K),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=$,b++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const j=D.shadow,rt=e.get(D);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize=j.mapSize,rt.shadowCameraNear=j.camera.near,rt.shadowCameraFar=j.camera.far,n.pointShadow[m]=rt,n.pointShadowMap[m]=ht,n.pointShadowMatrix[m]=D.shadow.matrix,A++}n.point[m]=$,m++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(K),$.groundColor.copy(D.groundColor).multiplyScalar(K),n.hemi[M]=$,M++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const F=n.hash;(F.sunLength!==u||F.directionalLength!==g||F.pointLength!==m||F.spotLength!==_||F.rectAreaLength!==b||F.hemiLength!==M||F.numSunShadows!==p||F.numDirectionalShadows!==T||F.numPointShadows!==A||F.numSpotShadows!==v||F.numSpotMaps!==w||F.numLightProbes!==P)&&(n.sun.length=u,n.directional.length=g,n.spot.length=_,n.rectArea.length=b,n.point.length=m,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+w-U,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=P,F.sunLength=u,F.directionalLength=g,F.pointLength=m,F.spotLength=_,F.rectAreaLength=b,F.hemiLength=M,F.numSunShadows=p,F.numDirectionalShadows=T,F.numPointShadows=A,F.numSpotShadows=v,F.numSpotMaps=w,F.numLightProbes=P,n.version=YM++)}function l(c,h){let d=0,f=0,u=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){const M=c[_];if(M.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),d++}else if(M.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(M.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const T=n.point[u];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function ku(i){const t=new $M(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ZM(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ku(i),t.set(s,[a])):r>=o.length?(a=new ku(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],QM=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Bu=new ve,Ys=new C,Ha=new C;function t1(i,t,e){let n=new mr;const s=new ft,r=new ft,o=new Le,a=new fg,l=new pg,c={},h=e.maxTextureSize,d={[Mi]:sn,[sn]:Mi,[dn]:dn},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:KM,fragmentShader:JM}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new Fe;p.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let m=this.type;this.render=function(A,v,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===kd&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mo);const U=i.getRenderTarget(),P=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(vs),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Z=m!==this.type;Z&&v.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=A.length;D<W;D++){const K=A[D],X=K.shadow;if(X===void 0){Zt("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ht=X.getFrameExtents();s.multiply(ht),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,X.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=$,X.map===null||Z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===js){if(K.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new zn(s.x,s.y,{format:Bi,type:Bn,minFilter:hn,magFilter:hn,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new Ts(s.x,s.y,On),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=yi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ke,X.map.depthTexture.magFilter=Ke}else K.isPointLight?(X.map=new Xc(s.x),X.map.depthTexture=new vf(s.x,kn)):(X.map=new zn(s.x,s.y),X.map.depthTexture=new Ts(s.x,s.y,kn)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=yi,this.type===Mo?(X.map.depthTexture.compareFunction=$?rf:sf,X.map.depthTexture.minFilter=hn,X.map.depthTexture.magFilter=hn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ke,X.map.depthTexture.magFilter=Ke);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);const j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();K.isPointLight!==!0&&X.updateMatrices(K,w);const rt=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:w.layers;for(let Dt=0;Dt<j;Dt++){const Nt=X.getCamera(Dt);if(K.isPointLight){const Q=X.camera,gt=X.matrix,Lt=K.distance||Q.far;Lt!==Q.far&&(Q.far=Lt,Q.updateProjectionMatrix()),Ys.setFromMatrixPosition(K.matrixWorld),Q.position.copy(Ys),Ha.copy(Q.position),Ha.add(jM[Dt]),Q.up.copy(QM[Dt]),Q.lookAt(Ha),Q.updateMatrixWorld(),gt.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Bu.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Bu,Q.coordinateSystem,Q.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Dt),i.clear();else{Dt===0&&(i.setRenderTarget(X.map),i.clear());const Q=X.getViewport(Dt);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),k.viewport(o)}n=X.getFrustum(Dt),M(v,w,Nt,K,rt,this.type)}X.isPointLightShadow!==!0&&this.type===js&&_(X,w),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(U,P,F)};function _(A,v){const w=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null?A.mapPass=new zn(s.x,s.y,{format:Bi,type:Bn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(v,null,w,f,x,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(v,null,w,u,x,null)}function b(A,v,w,U){let P=null;const F=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)P=F;else if(P=w.isPointLight===!0?l:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const k=P.uuid,Z=v.uuid;let D=c[k];D===void 0&&(D={},c[k]=D);let W=D[Z];W===void 0&&(W=P.clone(),D[Z]=W,v.addEventListener("dispose",T)),P=W}if(P.visible=v.visible,P.wireframe=v.wireframe,U===js?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:d[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const k=i.properties.get(P);k.light=w}return P}function M(A,v,w,U,P,F){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===js)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const D=t.update(A),W=A.material;if(Array.isArray(W)){const K=D.groups;for(let X=0,ht=K.length;X<ht;X++){const $=K[X],j=W[$.materialIndex];if(j&&j.visible){const rt=b(A,j,U,F);A.onBeforeShadow(i,A,v,w,D,rt,$),i.renderBufferDirect(w,null,D,rt,A,$),A.onAfterShadow(i,A,v,w,D,rt,$)}}}else if(W.visible){const K=b(A,W,U,F);A.onBeforeShadow(i,A,v,w,D,K,null),i.renderBufferDirect(w,null,D,K,A,null),A.onAfterShadow(i,A,v,w,D,K,null)}}const Z=A.children;for(let D=0,W=Z.length;D<W;D++)M(Z[D],v,w,U,P,F)}function T(A){A.target.removeEventListener("dispose",T);for(const w in c){const U=c[w],P=A.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function e1(i,t){function e(){let L=!1;const at=new Le;let et=null;const yt=new Le(0,0,0,0);return{setMask:function(mt){et!==mt&&!L&&(i.colorMask(mt,mt,mt,mt),et=mt)},setLocked:function(mt){L=mt},setClear:function(mt,vt,Vt,ne,pt){pt===!0&&(mt*=ne,vt*=ne,Vt*=ne),at.set(mt,vt,Vt,ne),yt.equals(at)===!1&&(i.clearColor(mt,vt,Vt,ne),yt.copy(at))},reset:function(){L=!1,et=null,yt.set(-1,0,0,0)}}}function n(){let L=!1,at=!1,et=null,yt=null,mt=null;return{setReversed:function(vt){if(at!==vt){const Vt=t.get("EXT_clip_control");vt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),at=vt;const ne=mt;mt=null,this.setClear(ne)}},getReversed:function(){return at},setTest:function(vt){vt?xt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(vt){et!==vt&&!L&&(i.depthMask(vt),et=vt)},setFunc:function(vt){if(at&&(vt=V0[vt]),yt!==vt){switch(vt){case ml:i.depthFunc(i.NEVER);break;case gl:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=vt}},setLocked:function(vt){L=vt},setClear:function(vt){mt!==vt&&(mt=vt,at&&(vt=1-vt),i.clearDepth(vt))},reset:function(){L=!1,et=null,yt=null,mt=null,at=!1}}}function s(){let L=!1,at=null,et=null,yt=null,mt=null,vt=null,Vt=null,ne=null,pt=null;return{setTest:function(Yt){L||(Yt?xt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Yt){at!==Yt&&!L&&(i.stencilMask(Yt),at=Yt)},setFunc:function(Yt,ee,At){(et!==Yt||yt!==ee||mt!==At)&&(i.stencilFunc(Yt,ee,At),et=Yt,yt=ee,mt=At)},setOp:function(Yt,ee,At){(vt!==Yt||Vt!==ee||ne!==At)&&(i.stencilOp(Yt,ee,At),vt=Yt,Vt=ee,ne=At)},setLocked:function(Yt){L=Yt},setClear:function(Yt){pt!==Yt&&(i.clearStencil(Yt),pt=Yt)},reset:function(){L=!1,at=null,et=null,yt=null,mt=null,vt=null,Vt=null,ne=null,pt=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],x=null,g=!1,m=null,_=null,b=null,M=null,T=null,A=null,v=null,w=new Bt(0,0,0),U=0,P=!1,F=null,k=null,Z=null,D=null,W=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ht=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ht>=1):$.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ht>=2);let j=null,rt={};const Dt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Q=new Le().fromArray(Dt),gt=new Le().fromArray(Nt);function Lt(L,at,et,yt){const mt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(L,vt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<et;Vt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(at+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return vt}const Gt={};Gt[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Gt[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Gt[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Gt[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xt(i.DEPTH_TEST),o.setFunc(hr),Y(!1),V(Dh),xt(i.CULL_FACE),ot(vs);function xt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ut(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function he(L,at){return f[L]!==at?(i.bindFramebuffer(L,at),f[L]=at,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=at),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=at),!0):!1}function tt(L,at){let et=p,yt=!1;if(L){et=u.get(at),et===void 0&&(et=[],u.set(at,et));const mt=L.textures;if(et.length!==mt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Vt=mt.length;vt<Vt;vt++)et[vt]=i.COLOR_ATTACHMENT0+vt;et.length=mt.length,yt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,yt=!0);yt&&i.drawBuffers(et)}function Pt(L){return x!==L?(i.useProgram(L),x=L,!0):!1}const Tt={[fs]:i.FUNC_ADD,[d0]:i.FUNC_SUBTRACT,[f0]:i.FUNC_REVERSE_SUBTRACT};Tt[p0]=i.MIN,Tt[m0]=i.MAX;const J={[g0]:i.ZERO,[x0]:i.ONE,[_0]:i.SRC_COLOR,[Bd]:i.SRC_ALPHA,[w0]:i.SRC_ALPHA_SATURATE,[S0]:i.DST_COLOR,[M0]:i.DST_ALPHA,[v0]:i.ONE_MINUS_SRC_COLOR,[Gd]:i.ONE_MINUS_SRC_ALPHA,[b0]:i.ONE_MINUS_DST_COLOR,[y0]:i.ONE_MINUS_DST_ALPHA,[E0]:i.CONSTANT_COLOR,[T0]:i.ONE_MINUS_CONSTANT_COLOR,[A0]:i.CONSTANT_ALPHA,[R0]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(L,at,et,yt,mt,vt,Vt,ne,pt,Yt){if(L===vs){g===!0&&(Ut(i.BLEND),g=!1);return}if(g===!1&&(xt(i.BLEND),g=!0),L!==u0){if(L!==m||Yt!==P){if((_!==fs||T!==fs)&&(i.blendEquation(i.FUNC_ADD),_=fs,T=fs),Yt)switch(L){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ue("WebGLState: Invalid blending: ",L);break}else switch(L){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ih:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nh:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",L);break}b=null,M=null,A=null,v=null,w.set(0,0,0),U=0,m=L,P=Yt}return}mt=mt||at,vt=vt||et,Vt=Vt||yt,(at!==_||mt!==T)&&(i.blendEquationSeparate(Tt[at],Tt[mt]),_=at,T=mt),(et!==b||yt!==M||vt!==A||Vt!==v)&&(i.blendFuncSeparate(J[et],J[yt],J[vt],J[Vt]),b=et,M=yt,A=vt,v=Vt),(ne.equals(w)===!1||pt!==U)&&(i.blendColor(ne.r,ne.g,ne.b,pt),w.copy(ne),U=pt),m=L,P=!1}function z(L,at){L.side===dn?Ut(i.CULL_FACE):xt(i.CULL_FACE);let et=L.side===sn;at&&(et=!et),Y(et),L.blending===Ms&&L.transparent===!1?ot(vs):ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const yt=L.stencilWrite;a.setTest(yt),yt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),lt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(L){F!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),F=L)}function V(L){L!==c0?(xt(i.CULL_FACE),L!==k&&(L===Dh?i.cullFace(i.BACK):L===h0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),k=L}function ut(L){L!==Z&&(X&&i.lineWidth(L),Z=L)}function lt(L,at,et){L?(xt(i.POLYGON_OFFSET_FILL),(D!==at||W!==et)&&(D=at,W=et,o.getReversed()&&(at=-at,et=-et),i.polygonOffset(at,et))):Ut(i.POLYGON_OFFSET_FILL)}function It(L){L?xt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function Ht(L){L===void 0&&(L=i.TEXTURE0+K-1),j!==L&&(i.activeTexture(L),j=L)}function Qt(L,at,et){et===void 0&&(j===null?et=i.TEXTURE0+K-1:et=j);let yt=rt[et];yt===void 0&&(yt={type:void 0,texture:void 0},rt[et]=yt),(yt.type!==L||yt.texture!==at)&&(j!==et&&(i.activeTexture(et),j=et),i.bindTexture(L,at||Gt[L]),yt.type=L,yt.texture=at)}function N(){const L=rt[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Me(){try{i.compressedTexImage2D(...arguments)}catch(L){ue("WebGLState:",L)}}function oe(){try{i.compressedTexImage3D(...arguments)}catch(L){ue("WebGLState:",L)}}function ye(){try{i.texSubImage2D(...arguments)}catch(L){ue("WebGLState:",L)}}function bt(){try{i.texSubImage3D(...arguments)}catch(L){ue("WebGLState:",L)}}function Ne(){try{i.compressedTexSubImage2D(...arguments)}catch(L){ue("WebGLState:",L)}}function $t(){try{i.compressedTexSubImage3D(...arguments)}catch(L){ue("WebGLState:",L)}}function Kt(){try{i.texStorage2D(...arguments)}catch(L){ue("WebGLState:",L)}}function R(){try{i.texStorage3D(...arguments)}catch(L){ue("WebGLState:",L)}}function y(){try{i.texImage2D(...arguments)}catch(L){ue("WebGLState:",L)}}function G(){try{i.texImage3D(...arguments)}catch(L){ue("WebGLState:",L)}}function dt(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function ct(L,at){d[L]!==at&&(i.pixelStorei(L,at),d[L]=at)}function _t(L){Q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function wt(L){gt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),gt.copy(L))}function nt(L,at){let et=c.get(at);et===void 0&&(et=new WeakMap,c.set(at,et));let yt=et.get(L);yt===void 0&&(yt=i.getUniformBlockIndex(at,L.name),i.uniformBlockBinding(at,yt,yt),et.set(L,yt))}function st(L,at,et){const mt=c.get(at).get(L);l[mt]!==et&&(i.bindBufferBase(i.UNIFORM_BUFFER,mt,et),l[mt]=et)}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,rt={},f={},l={},u=new WeakMap,p=[],x=null,g=!1,m=null,_=null,b=null,M=null,T=null,A=null,v=null,w=new Bt(0,0,0),U=0,P=!1,F=null,k=null,Z=null,D=null,W=null,Q.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xt,disable:Ut,bindFramebuffer:he,drawBuffers:tt,useProgram:Pt,setBlending:ot,setMaterial:z,setFlipSided:Y,setCullFace:V,setLineWidth:ut,setPolygonOffset:lt,setScissorTest:It,activeTexture:Ht,bindTexture:Qt,unbindTexture:N,compressedTexImage2D:Me,compressedTexImage3D:oe,texImage2D:y,texImage3D:G,pixelStorei:ct,getParameter:dt,updateUBOMapping:nt,uniformBlockBinding:st,texStorage2D:Kt,texStorage3D:R,texSubImage2D:ye,texSubImage3D:bt,compressedTexSubImage2D:Ne,compressedTexSubImage3D:$t,scissor:_t,viewport:wt,reset:Mt}}function n1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,x=new FinalizationRegistry(R=>p.delete(R));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,y){return g?new OffscreenCanvas(R,y):Uo("canvas")}function _(R,y,G){let dt=1;const ct=Kt(R);if((ct.width>G||ct.height>G)&&(dt=G/Math.max(ct.width,ct.height)),dt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const _t=Math.floor(dt*ct.width),wt=Math.floor(dt*ct.height);f===void 0&&(f=m(_t,wt));const nt=y?m(_t,wt):f;return nt.width=_t,nt.height=wt,nt.getContext("2d").drawImage(R,0,0,_t,wt),Zt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+_t+"x"+wt+")."),nt}else return"data"in R&&Zt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),R;return R}function b(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(R,y,G,dt,ct,_t=!1){if(R!==null){if(i[R]!==void 0)return i[R];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let wt;dt&&(wt=t.get("EXT_texture_norm16"),wt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=y;if(y===i.RED&&(G===i.FLOAT&&(nt=i.R32F),G===i.HALF_FLOAT&&(nt=i.R16F),G===i.UNSIGNED_BYTE&&(nt=i.R8),G===i.UNSIGNED_SHORT&&wt&&(nt=wt.R16_EXT),G===i.SHORT&&wt&&(nt=wt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(nt=i.R8UI),G===i.UNSIGNED_SHORT&&(nt=i.R16UI),G===i.UNSIGNED_INT&&(nt=i.R32UI),G===i.BYTE&&(nt=i.R8I),G===i.SHORT&&(nt=i.R16I),G===i.INT&&(nt=i.R32I)),y===i.RG&&(G===i.FLOAT&&(nt=i.RG32F),G===i.HALF_FLOAT&&(nt=i.RG16F),G===i.UNSIGNED_BYTE&&(nt=i.RG8),G===i.UNSIGNED_SHORT&&wt&&(nt=wt.RG16_EXT),G===i.SHORT&&wt&&(nt=wt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(nt=i.RG8UI),G===i.UNSIGNED_SHORT&&(nt=i.RG16UI),G===i.UNSIGNED_INT&&(nt=i.RG32UI),G===i.BYTE&&(nt=i.RG8I),G===i.SHORT&&(nt=i.RG16I),G===i.INT&&(nt=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),G===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),G===i.UNSIGNED_INT&&(nt=i.RGB32UI),G===i.BYTE&&(nt=i.RGB8I),G===i.SHORT&&(nt=i.RGB16I),G===i.INT&&(nt=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),G===i.UNSIGNED_INT&&(nt=i.RGBA32UI),G===i.BYTE&&(nt=i.RGBA8I),G===i.SHORT&&(nt=i.RGBA16I),G===i.INT&&(nt=i.RGBA32I)),y===i.RGB&&(G===i.UNSIGNED_SHORT&&wt&&(nt=wt.RGB16_EXT),G===i.SHORT&&wt&&(nt=wt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),y===i.RGBA){const st=_t?No:ce.getTransfer(ct);G===i.FLOAT&&(nt=i.RGBA32F),G===i.HALF_FLOAT&&(nt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(nt=st===_e?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&wt&&(nt=wt.RGBA16_EXT),G===i.SHORT&&wt&&(nt=wt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(R,y){let G;return R?y===null||y===kn||y===Es?G=i.DEPTH24_STENCIL8:y===On?G=i.DEPTH32F_STENCIL8:y===dr&&(G=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===kn||y===Es?G=i.DEPTH_COMPONENT24:y===On?G=i.DEPTH_COMPONENT32F:y===dr&&(G=i.DEPTH_COMPONENT16),G}function w(R,y){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ke&&R.minFilter!==hn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function U(R){const y=new WeakRef(R);n.get(R).__ref=y,p.add(y),x.register(R,y,y)}function P(R){const y=n.get(R).__ref;y!==void 0&&(p.delete(y),x.unregister(y))}function F(R){Z(R.target)}function k(R){D(R.target)}function Z(R){R.removeEventListener("dispose",F),P(R),K(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function D(R){R.removeEventListener("dispose",k),P(R),ht(R)}function W(){for(const R of p){const y=R.deref();y!==void 0&&(y.isRenderTarget===!0?D(y):Z(y))}p.clear(),d.clear()}function K(R){const y=n.get(R);if(y.__webglInit===void 0)return;const G=R.source,dt=u.get(G);if(dt){const ct=dt[y.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&X(R),Object.keys(dt).length===0&&u.delete(G)}n.remove(R)}function X(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const G=R.source,dt=u.get(G);delete dt[y.__cacheKey],o.memory.textures--}function ht(R){const y=n.get(R);y.__depthDisposeCallback&&y.__depthDisposeCallback();const G=R.depthTexture;if(G&&G.renderTarget===R&&Z(G),R.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(y.__webglFramebuffer[ct]))for(let _t=0;_t<y.__webglFramebuffer[ct].length;_t++)i.deleteFramebuffer(y.__webglFramebuffer[ct][_t]);else i.deleteFramebuffer(y.__webglFramebuffer[ct]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ct])}else{if(Array.isArray(y.__webglFramebuffer))for(let ct=0;ct<y.__webglFramebuffer.length;ct++)i.deleteFramebuffer(y.__webglFramebuffer[ct]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ct=0;ct<y.__webglColorRenderbuffer.length;ct++)y.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ct]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const dt=R.textures;for(let ct=0,_t=dt.length;ct<_t;ct++){const wt=n.get(dt[ct]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(dt[ct])}n.remove(R)}let $=0;function j(){$=0}function rt(){return $}function Dt(R){$=R}function Nt(){const R=$;return R>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,R}function Q(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.mipmapsAutoUpdate),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function gt(R,y){const G=n.get(R);if(R.isVideoTexture&&Ne(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const dt=R.image;if(dt===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{z(G,R,y);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function Lt(R,y){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){z(G,R,y);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function Gt(R,y){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){z(G,R,y);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function xt(R,y){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Y(G,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const Ut={[ki]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},he={[Ke]:i.NEAREST,[L0]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},tt={[U0]:i.NEVER,[of]:i.ALWAYS,[F0]:i.LESS,[sf]:i.LEQUAL,[O0]:i.EQUAL,[rf]:i.GEQUAL,[z0]:i.GREATER,[k0]:i.NOTEQUAL};function Pt(R,y){if(y.type===On&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===hn||y.magFilter===fa||y.magFilter===Ir||y.magFilter===si||y.minFilter===hn||y.minFilter===fa||y.minFilter===Ir||y.minFilter===si)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ut[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ut[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ut[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,he[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,tt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ke||y.minFilter!==Ir&&y.minFilter!==si||y.type===On&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Tt(R,y){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",F),U(y));const dt=y.source;let ct=u.get(dt);ct===void 0&&(ct={},u.set(dt,ct));const _t=Q(y);if(_t!==R.__cacheKey){ct[_t]===void 0&&(ct[_t]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ct[_t].usedTimes++;const wt=ct[R.__cacheKey];wt!==void 0&&(ct[R.__cacheKey].usedTimes--,wt.usedTimes===0&&X(y)),R.__cacheKey=_t,R.__webglTexture=ct[_t].texture}return G}function J(R,y,G){return Math.floor(Math.floor(R/G)/y)}function ot(R,y,G,dt){const _t=R.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,G,dt,y.data);else{_t.sort((L,at)=>L.start-at.start);let wt=0;for(let L=1;L<_t.length;L++){const at=_t[wt],et=_t[L],yt=at.start+at.count,mt=J(et.start,y.width,4),vt=J(at.start,y.width,4);et.start<=yt+1&&mt===vt&&J(et.start+et.count-1,y.width,4)===mt?at.count=Math.max(at.count,et.start+et.count-at.start):(++wt,_t[wt]=et)}_t.length=wt+1;const nt=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let L=0,at=_t.length;L<at;L++){const et=_t[L],yt=Math.floor(et.start/4),mt=Math.ceil(et.count/4),vt=yt%y.width,Vt=Math.floor(yt/y.width),ne=mt,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Vt),e.texSubImage2D(i.TEXTURE_2D,0,vt,Vt,ne,pt,G,dt,y.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function z(R,y,G){let dt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(dt=i.TEXTURE_3D);const ct=Tt(R,y),_t=y.source;e.bindTexture(dt,R.__webglTexture,i.TEXTURE0+G);const wt=n.get(_t);if(_t.version!==wt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const pt=ce.getPrimaries(ce.workingColorSpace),Yt=y.colorSpace===ni?null:ce.getPrimaries(y.colorSpace),ee=y.colorSpace===ni||pt===Yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let st=_(y.image,!1,s.maxTextureSize);st=$t(y,st);const Mt=r.convert(y.format,y.colorSpace),L=r.convert(y.type);let at=A(y.internalFormat,Mt,L,y.normalized,y.colorSpace,y.isVideoTexture);Pt(dt,y);let et;const yt=y.mipmaps,mt=y.isVideoTexture!==!0,vt=wt.__version===void 0||ct===!0,Vt=_t.dataReady,ne=w(y,st);if(y.isDepthTexture)at=v(y.format===vi,y.type),vt&&(mt?e.texStorage2D(i.TEXTURE_2D,1,at,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,at,st.width,st.height,0,Mt,L,null));else if(y.isDataTexture)if(yt.length>0){mt&&vt&&e.texStorage2D(i.TEXTURE_2D,ne,at,yt[0].width,yt[0].height);for(let pt=0,Yt=yt.length;pt<Yt;pt++)et=yt[pt],mt?Vt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,et.width,et.height,Mt,L,et.data):e.texImage2D(i.TEXTURE_2D,pt,at,et.width,et.height,0,Mt,L,et.data);y.generateMipmaps=!1}else mt?(vt&&e.texStorage2D(i.TEXTURE_2D,ne,at,st.width,st.height),Vt&&ot(y,st,Mt,L)):e.texImage2D(i.TEXTURE_2D,0,at,st.width,st.height,0,Mt,L,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){mt&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,at,yt[0].width,yt[0].height,st.depth);for(let pt=0,Yt=yt.length;pt<Yt;pt++)if(et=yt[pt],y.format!==Cn)if(Mt!==null)if(mt){if(Vt)if(y.layerUpdates.size>0){const ee=vu(et.width,et.height,y.format,y.type);for(const At of y.layerUpdates){const xe=et.data.subarray(At*ee/et.data.BYTES_PER_ELEMENT,(At+1)*ee/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,At,et.width,et.height,1,Mt,xe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,et.width,et.height,st.depth,Mt,et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,at,et.width,et.height,st.depth,0,et.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,et.width,et.height,st.depth,Mt,L,et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,at,et.width,et.height,st.depth,0,Mt,L,et.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{mt&&vt&&e.texStorage2D(i.TEXTURE_2D,ne,at,yt[0].width,yt[0].height);for(let pt=0,Yt=yt.length;pt<Yt;pt++)et=yt[pt],y.format!==Cn?Mt!==null?mt?Vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,et.width,et.height,Mt,et.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,at,et.width,et.height,0,et.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Vt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,et.width,et.height,Mt,L,et.data):e.texImage2D(i.TEXTURE_2D,pt,at,et.width,et.height,0,Mt,L,et.data)}else if(y.isDataArrayTexture)if(mt){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,at,st.width,st.height,st.depth),Vt)if(y.layerUpdates.size>0){const pt=vu(st.width,st.height,y.format,y.type);for(const Yt of y.layerUpdates){const ee=st.data.subarray(Yt*pt/st.data.BYTES_PER_ELEMENT,(Yt+1)*pt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Yt,st.width,st.height,1,Mt,L,ee)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,L,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,at,st.width,st.height,st.depth,0,Mt,L,st.data);else if(y.isData3DTexture)mt?(vt&&e.texStorage3D(i.TEXTURE_3D,ne,at,st.width,st.height,st.depth),Vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,L,st.data)):e.texImage3D(i.TEXTURE_3D,0,at,st.width,st.height,st.depth,0,Mt,L,st.data);else if(y.isFramebufferTexture){if(vt)if(mt)e.texStorage2D(i.TEXTURE_2D,ne,at,st.width,st.height);else{let pt=st.width,Yt=st.height;for(let ee=0;ee<ne;ee++)e.texImage2D(i.TEXTURE_2D,ee,at,pt,Yt,0,Mt,L,null),pt>>=1,Yt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),st.parentNode!==pt){pt.appendChild(st),d.add(y),pt.onpaint=Yt=>{const ee=Yt.changedElements;for(const At of d)ee.includes(At.image)&&(At.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{const ee=i.RGBA,At=i.RGBA,xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ee,At,xe,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(yt.length>0){if(mt&&vt){const pt=Kt(yt[0]);e.texStorage2D(i.TEXTURE_2D,ne,at,pt.width,pt.height)}for(let pt=0,Yt=yt.length;pt<Yt;pt++)et=yt[pt],mt?Vt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Mt,L,et):e.texImage2D(i.TEXTURE_2D,pt,at,Mt,L,et);y.generateMipmaps=!1}else if(mt){if(vt){const pt=Kt(st);e.texStorage2D(i.TEXTURE_2D,ne,at,pt.width,pt.height)}Vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,L,st)}else e.texImage2D(i.TEXTURE_2D,0,at,Mt,L,st);b(y)&&y.mipmapsAutoUpdate===!0&&M(dt),wt.__version=_t.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Y(R,y,G){if(y.image.length!==6)return;const dt=Tt(R,y),ct=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const _t=n.get(ct);if(ct.version!==_t.__version||dt===!0){e.activeTexture(i.TEXTURE0+G);const wt=ce.getPrimaries(ce.workingColorSpace),nt=y.colorSpace===ni?null:ce.getPrimaries(y.colorSpace),st=y.colorSpace===ni||wt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const Mt=y.isCompressedTexture||y.image[0].isCompressedTexture,L=y.image[0]&&y.image[0].isDataTexture,at=[];for(let At=0;At<6;At++)!Mt&&!L?at[At]=_(y.image[At],!0,s.maxCubemapSize):at[At]=L?y.image[At].image:y.image[At],at[At]=$t(y,at[At]);const et=at[0],yt=r.convert(y.format,y.colorSpace),mt=r.convert(y.type);let vt=A(y.internalFormat,yt,mt,y.normalized,y.colorSpace);const Vt=y.isVideoTexture!==!0,ne=_t.__version===void 0||dt===!0,pt=ct.dataReady;let Yt=w(y,et);Pt(i.TEXTURE_CUBE_MAP,y);let ee;if(y.isDepthTexture){if(vt=v(y.format===vi,y.type),ne)if(Vt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,vt,et.width,et.height);else for(let At=0;At<6;At++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,vt,et.width,et.height,0,yt,mt,null)}else if(Mt){Vt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,vt,et.width,et.height);for(let At=0;At<6;At++){ee=at[At].mipmaps;for(let xe=0;xe<ee.length;xe++){const Ve=ee[xe];y.format!==Cn?yt!==null?Vt?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,0,0,Ve.width,Ve.height,yt,Ve.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,vt,Ve.width,Ve.height,0,Ve.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,0,0,Ve.width,Ve.height,yt,mt,Ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,vt,Ve.width,Ve.height,0,yt,mt,Ve.data)}}}else{if(ee=y.mipmaps,Vt&&ne){ee.length>0&&Yt++;const At=Kt(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,vt,At.width,At.height)}for(let At=0;At<6;At++)if(L){Vt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,at[At].width,at[At].height,yt,mt,at[At].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,vt,at[At].width,at[At].height,0,yt,mt,at[At].data);for(let xe=0;xe<ee.length;xe++){const ui=ee[xe].image[At].image;Vt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,0,0,ui.width,ui.height,yt,mt,ui.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,vt,ui.width,ui.height,0,yt,mt,ui.data)}}else{Vt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,yt,mt,at[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,vt,yt,mt,at[At]);for(let xe=0;xe<ee.length;xe++){const Ve=ee[xe];Vt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,0,0,yt,mt,Ve.image[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,vt,yt,mt,Ve.image[At])}}}b(y)&&y.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),_t.__version=ct.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function V(R,y,G,dt,ct,_t){const wt=r.convert(G.format,G.colorSpace),nt=r.convert(G.type),st=A(G.internalFormat,wt,nt,G.normalized,G.colorSpace),Mt=n.get(y),L=n.get(G);if(L.__renderTarget=y,!Mt.__hasExternalTextures){const at=Math.max(1,y.width>>_t),et=Math.max(1,y.height>>_t);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,_t,st,at,et,y.depth,0,wt,nt,null):e.texImage2D(ct,_t,st,at,et,0,wt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),bt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ct,L.__webglTexture,0,ye(y)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,ct,L.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(R,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const dt=y.depthTexture,ct=dt&&dt.isDepthTexture?dt.type:null,_t=v(y.stencilBuffer,ct),wt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;bt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(y),_t,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(y),_t,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_t,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,R)}else{const dt=y.textures;for(let ct=0;ct<dt.length;ct++){const _t=dt[ct],wt=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),st=A(_t.internalFormat,wt,nt,_t.normalized,_t.colorSpace);bt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(y),st,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(y),st,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,st,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(R,y,G){const dt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ct=n.get(y.depthTexture);ct.__renderTarget=y;const _t=dt?y.depthTexture.image[0]:y.depthTexture.image;(!ct.__webglTexture||_t.width!==y.width||_t.height!==y.height)&&(_t.width=y.width,_t.height=y.height,y.depthTexture.needsUpdate=!0),dt?xt(y.depthTexture,0):gt(y.depthTexture,0);const wt=ct.__webglTexture,nt=ye(y),st=dt?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Mt=y.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===yi)bt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,st,wt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,st,wt,0);else if(y.depthTexture.format===vi)bt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,st,wt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,st,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(R){const y=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const dt=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),dt){const ct=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,dt.removeEventListener("dispose",ct)};dt.addEventListener("dispose",ct),y.__depthDisposeCallback=ct}y.__boundDepthTexture=dt}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let dt=0;dt<6;dt++)lt(y.__webglFramebuffer[dt],R,dt);else R.texture.mipmaps.length>0?lt(y.__webglFramebuffer[0],R,0):lt(y.__webglFramebuffer,R,0);else if(G){y.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[dt]),y.__webglDepthbuffer[dt]===void 0)y.__webglDepthbuffer[dt]=i.createRenderbuffer(),ut(y.__webglDepthbuffer[dt],R,!1);else{const ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=y.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,_t)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ut(y.__webglDepthbuffer,R,!1);else{const ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,_t)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(R,y,G){const dt=n.get(R);y!==void 0&&V(dt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&It(R)}function Qt(R){const y=R.texture,G=n.get(R),dt=n.get(y);R.addEventListener("dispose",k),U(R);const ct=R.textures,_t=R.isWebGLCubeRenderTarget===!0,wt=ct.length>1;if(wt||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=y.version,o.memory.textures++),_t){G.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(y.mipmaps.length>0){G.__webglFramebuffer[nt]=[];for(let st=0;st<y.mipmaps.length;st++)G.__webglFramebuffer[nt][st]=i.createFramebuffer()}else G.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(y.mipmaps.length>0){G.__webglFramebuffer=[];for(let nt=0;nt<y.mipmaps.length;nt++)G.__webglFramebuffer[nt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(wt)for(let nt=0,st=ct.length;nt<st;nt++){const Mt=n.get(ct[nt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&bt(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let nt=0;nt<ct.length;nt++){const st=ct[nt];G.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[nt]);const Mt=r.convert(st.format,st.colorSpace),L=r.convert(st.type),at=A(st.internalFormat,Mt,L,st.normalized,st.colorSpace,R.isXRRenderTarget===!0),et=ye(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,at,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,G.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,y);for(let nt=0;nt<6;nt++)if(y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)V(G.__webglFramebuffer[nt][st],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,st);else V(G.__webglFramebuffer[nt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);b(y)?M(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(wt){for(let nt=0,st=ct.length;nt<st;nt++){const Mt=ct[nt],L=n.get(Mt);let at=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,L.__webglTexture),Pt(at,Mt),V(G.__webglFramebuffer,R,Mt,i.COLOR_ATTACHMENT0+nt,at,0),b(Mt)&&M(at)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,dt.__webglTexture),Pt(nt,y),y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)V(G.__webglFramebuffer[st],R,y,i.COLOR_ATTACHMENT0,nt,st);else V(G.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,nt,0);b(y)?M(nt):y.mipmaps.length>0&&i.texParameteri(nt,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&It(R)}function N(R){const y=R.textures;for(let G=0,dt=y.length;G<dt;G++){const ct=y[G];if(b(ct)&&ct.mipmapsAutoUpdate===!0){const _t=T(R),wt=n.get(ct).__webglTexture;e.bindTexture(_t,wt),M(_t),e.unbindTexture()}}}const Me=[];function oe(R){if(R.samples>0){if(bt(R)===!1){const y=R.textures,G=R.width,dt=R.height;let ct=i.COLOR_BUFFER_BIT;const _t=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(R),nt=y.length>1;if(nt)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Mt]);const L=n.get(y[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,G,dt,0,0,G,dt,ct,i.NEAREST),l===!0&&(Me.length=0,Me.push(i.COLOR_ATTACHMENT0+Mt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Me.push(_t),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Mt]);const L=n.get(y[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,L,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ye(R){return Math.min(s.maxSamples,R.samples)}function bt(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ne(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function $t(R,y){const G=R.colorSpace,dt=R.format,ct=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Io&&G!==ni&&(ce.getTransfer(G)===_e?(dt!==Cn||ct!==gn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",G)),y}function Kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Nt,this.resetTextureUnits=j,this.getTextureUnits=rt,this.setTextureUnits=Dt,this.setTexture2D=gt,this.setTexture2DArray=Lt,this.setTexture3D=Gt,this.setTextureCube=xt,this.rebindTextures=Ht,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=V,this.useMultisampledRTT=bt,this.dispose=W}function i1(i,t){function e(n,s=ni){let r;const o=ce.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===Rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kd)return i.BYTE;if(n===Jd)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Ac)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===tf)return i.ALPHA;if(n===ef)return i.RGB;if(n===Cn)return i.RGBA;if(n===yi)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===nf)return i.RED;if(n===Pc)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Lc)return i.RG_INTEGER;if(n===Dc)return i.RGBA_INTEGER;if(n===yo||n===So||n===bo||n===wo)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===wl||n===El||n===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Lo||n===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Rl)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lo)return r.COMPRESSED_RG11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Il||n===Nl||n===Ul||n===Fl||n===Ol||n===zl||n===kl||n===Bl||n===Gl||n===Hl||n===Vl||n===Wl||n===Xl||n===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Il)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ql||n===$l||n===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ql)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===Jl||n===Do||n===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const s1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Mf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wi({vertexShader:s1,fragmentShader:r1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a1 extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null;const x=typeof XRWebGLBinding<"u",g=new o1,m={},_=e.getContextAttributes();let b=null,M=null;const T=[],A=[],v=new ft;let w=null,U=null;const P=new yn;P.viewport=new Le;const F=new yn;F.viewport=new Le;const k=[P,F],Z=new _g;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let gt=T[Q];return gt===void 0&&(gt=new Ma,T[Q]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(Q){let gt=T[Q];return gt===void 0&&(gt=new Ma,T[Q]=gt),gt.getGripSpace()},this.getHand=function(Q){let gt=T[Q];return gt===void 0&&(gt=new Ma,T[Q]=gt),gt.getHandSpace()};function K(Q){const gt=A.indexOf(Q.inputSource);if(gt===-1)return;const Lt=T[gt];Lt!==void 0&&(Lt.update(Q.inputSource,Q.frame,c||o),Lt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<T.length;Q++){const gt=A[Q];gt!==null&&(A[Q]=null,T[Q].disconnect(gt))}D=null,W=null,g.reset();for(const Q in m)delete m[Q];if(t.setRenderTarget(b),u=null,f=null,d=null,s=null,M=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(v.width,v.height,!1),U!==null){const Q=U.camera;Q.fov=U.fov,Q.zoom=U.zoom,Q.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ht),_.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Gt=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=_.stencil?vi:yi,Gt=_.stencil?Es:kn);const Ut={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new zn(f.textureWidth,f.textureHeight,{format:Cn,type:gn,depthTexture:new Ts(f.textureWidth,f.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Lt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new zn(u.framebufferWidth,u.framebufferHeight,{format:Cn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ht(Q){for(let gt=0;gt<Q.removed.length;gt++){const Lt=Q.removed[gt],Gt=A.indexOf(Lt);Gt>=0&&(A[Gt]=null,T[Gt].disconnect(Lt))}for(let gt=0;gt<Q.added.length;gt++){const Lt=Q.added[gt];let Gt=A.indexOf(Lt);if(Gt===-1){for(let Ut=0;Ut<T.length;Ut++)if(Ut>=A.length){A.push(Lt),Gt=Ut;break}else if(A[Ut]===null){A[Ut]=Lt,Gt=Ut;break}if(Gt===-1)break}const xt=T[Gt];xt&&xt.connect(Lt)}}function $(Q,gt){gt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(gt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let gt=Q.near,Lt=Q.far;g.texture!==null&&(g.depthNear>0&&(gt=g.depthNear),g.depthFar>0&&(Lt=g.depthFar)),Z.near=F.near=P.near=gt,Z.far=F.far=P.far=Lt,(D!==Z.near||W!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),D=Z.near,W=Z.far),Z.layers.mask=Q.layers.mask|6,P.layers.mask=Z.layers.mask&-5,F.layers.mask=Z.layers.mask&-3;const Gt=Q.parent,xt=Z.cameras;$(Z,Gt);for(let Ut=0;Ut<xt.length;Ut++)$(xt[Ut],Gt);Z.projectionMatrix.copy(P.projectionMatrix),Z.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&Q.isPerspectiveCamera&&(U={camera:Q,fov:Q.fov,zoom:Q.zoom}),j(Q,Z,Gt)};function j(Q,gt,Lt){Lt===null?Q.matrix.copy(gt.matrixWorld):(Q.matrix.copy(Lt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(gt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(gt.projectionMatrix),Q.projectionMatrixInverse.copy(gt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=pr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Z)},this.getCameraTexture=function(Q){return m[Q]};let rt=null;function Dt(Q,gt){if(h=gt.getViewerPose(c||o),p=gt,h!==null){const Lt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let Gt=!1;Lt.length!==Z.cameras.length&&(Z.cameras.length=0,Gt=!0);for(let tt=0;tt<Lt.length;tt++){const Pt=Lt[tt];let Tt=null;if(u!==null)Tt=u.getViewport(Pt);else{const ot=d.getViewSubImage(f,Pt);Tt=ot.viewport,tt===0&&(t.setRenderTargetTextures(M,ot.colorTexture,ot.depthStencilTexture),t.setRenderTarget(M))}let J=k[tt];J===void 0&&(J=new yn,J.layers.enable(tt),J.viewport=new Le,k[tt]=J),J.matrix.fromArray(Pt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Pt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),tt===0&&(Z.matrix.copy(J.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Gt===!0&&Z.cameras.push(J)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const tt=d.getDepthInformation(Lt[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,s.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let tt=0;tt<Lt.length;tt++){const Pt=Lt[tt].camera;if(Pt){let Tt=m[Pt];Tt||(Tt=new Mf,m[Pt]=Tt);const J=d.getCameraImage(Pt);Tt.sourceTexture=J}}}}for(let Lt=0;Lt<T.length;Lt++){const Gt=A[Lt],xt=T[Lt];Gt!==null&&xt!==void 0&&xt.update(Gt,gt,c||o)}rt&&rt(Q,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),p=null}const Nt=new Uf;Nt.setAnimationLoop(Dt),this.setAnimationLoop=function(Q){rt=Q},this.dispose=function(){}}}const l1=new ve,Xf=new jt;Xf.set(-1,0,0,0,1,0,0,0,1);function c1(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Pf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,b,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&u(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=t.get(m),b=_.envMap,M=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(l1.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Xf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,_){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function h1(i,t,e,n){let s={},r={};function o(_,b){const M=b.program;n.uniformBlockBinding(_,M,s[_.id])}function a(_,b){let M=s[_.id];M===void 0&&(p(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",g));const T=b.program;n.updateUBOMapping(_,T);const A=t.render.frame;r[_.id]!==A&&(c(_),r[_.id]=A)}function l(_){const b=i.createBuffer(),M=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(_){const b=s[_.id],M=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,v=M.length;A<v;A++){const w=M[A];if(Array.isArray(w))for(let U=0,P=w.length;U<P;U++)h(w[U],A,U,T);else h(w,A,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,b,M,T){if(f(_,b,M,T)===!0){const A=_.__offset,v=_.value;if(Array.isArray(v)){let w=0;for(let U=0;U<v.length;U++){const P=v[U],F=x(P,!0);d(P,_.__data,w),w+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,_.__data)}}function d(_,b,M){typeof _=="number"||typeof _=="boolean"?b[M]=_:_.isMatrix3?(b[M]=_.elements[0],b[M+1]=_.elements[1],b[M+2]=_.elements[2],b[M+3]=0,b[M+4]=_.elements[3],b[M+5]=_.elements[4],b[M+6]=_.elements[5],b[M+7]=0,b[M+8]=_.elements[6],b[M+9]=_.elements[7],b[M+10]=_.elements[8],b[M+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-M),M):_.toArray(b,M)}function f(_,b,M,T){const A=_.value,v=b+"_"+M;if(Array.isArray(A)){T[v]===void 0&&(T[v]=[]);const w=T[v];let U=!1;for(let P=0;P<A.length;P++)u(A[P],w,P)===!0&&(U=!0);return U}return u(A,T,v)}function u(_,b,M){if(b[M]===void 0)return typeof _=="number"||typeof _=="boolean"?b[M]=_:ArrayBuffer.isView(_)?b[M]=_.slice():b[M]=_.clone(),!0;{const T=b[M];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return b[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function p(_){const b=_.uniforms;let M=0;const T=16;for(let v=0,w=b.length;v<w;v++){const U=Array.isArray(b[v])?b[v]:[b[v]];for(let P=0,F=U.length;P<F;P++){const k=U[P],Z=Array.isArray(k.value)?k.value:[k.value],D=Array.isArray(b[v])||Array.isArray(k.value);let W=M;for(let X=0,ht=Z.length;X<ht;X++){const $=Z[X],j=x($,D),rt=M%T,Dt=rt%j.boundary,Nt=rt+Dt;M+=Dt,Nt!==0&&T-Nt<j.storage&&(M+=T-Nt),X===0&&(W=M),M+=j.storage}const K=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new K((M-W)/Float32Array.BYTES_PER_ELEMENT),k.__offset=W}}const A=M%T;return A>0&&(M+=T-A),_.__size=M,_.__cache={},this}function x(_,b){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(_){const b=_.target;b.removeEventListener("dispose",g),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:m}}const u1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function d1(){return In===null&&(In=new mf(u1,16,16,Bi,Bn),In.name="DFG_LUT",In.minFilter=hn,In.magFilter=hn,In.wrapS=ii,In.wrapT=ii,In.generateMipmaps=!1,In.needsUpdate=!0),In}class f1{constructor(t={}){const{canvas:e=G0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=gn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=u,g=new Set([Dc,Lc,Pc]),m=new Set([gn,kn,dr,Es,Rc,Cc]),_=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let T=null,A=null;const v=[],w=[];let U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let F=!1,k=null,Z=null,D=null,W=null;this._outputColorSpace=ke;let K=0,X=0,ht=null,$=-1,j=null;const rt=new Le,Dt=new Le;let Nt=null;const Q=new Bt(0);let gt=0,Lt=e.width,Gt=e.height,xt=1,Ut=null,he=null;const tt=new Le(0,0,Lt,Gt),Pt=new Le(0,0,Lt,Gt);let Tt=!1;const J=new mr,ot=new kc;let z=!1,Y=!1;const V=new ve,ut=new C,lt=new Le,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function Qt(){return ht===null?xt:1}let N=n;function Me(S,O){return e.getContext(S,O)}let oe,ye,bt,Ne,$t,Kt,R,y,G,dt,ct,_t,wt,nt,st,Mt,L,at,et,yt,mt,vt,Vt;try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ec}`),e.addEventListener("webglcontextlost",Yt,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",At,!1),N===null){const O="webgl2";if(N=Me(O,S),N===null)throw Me(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(S){throw e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",At,!1),ue("WebGLRenderer: "+S.message),S}function ne(){oe=new gv(N),oe.init(),mt=new i1(N,oe),ye=new rv(N,oe,t,mt),bt=new e1(N,oe),ye.reversedDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),Z=N.createFramebuffer(),D=N.createFramebuffer(),W=N.createFramebuffer(),Ne=new vv(N),$t=new GM,Kt=new n1(N,oe,bt,$t,ye,mt,Ne),R=new mv(P),y=new yg(N),vt=new iv(N,y),G=new xv(N,y,Ne,vt),dt=new yv(N,G,y,vt,Ne),at=new Mv(N,ye,Kt),st=new ov($t),ct=new BM(P,R,oe,ye,vt,st),_t=new c1(P,$t),wt=new VM,nt=new ZM(oe),L=new nv(P,R,bt,dt,p,l),Mt=new t1(P,dt,ye),Vt=new h1(N,Ne,ye,bt),et=new sv(N,oe,Ne),yt=new _v(N,oe,Ne),Ne.programs=ct.programs,P.capabilities=ye,P.extensions=oe,P.properties=$t,P.renderLists=wt,P.shadowMap=Mt,P.state=bt,P.info=Ne}x!==gn&&(U=new bv(x,e.width,e.height,a,s,r));const pt=new a1(P,N);this.xr=pt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(S){S!==void 0&&(xt=S,this.setSize(Lt,Gt,!1))},this.getSize=function(S){return S.set(Lt,Gt)},this.setSize=function(S,O,q=!0){if(pt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=S,Gt=O,e.width=Math.floor(S*xt),e.height=Math.floor(O*xt),q===!0&&(e.style.width=S+"px",e.style.height=O+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(Lt*xt,Gt*xt).floor()},this.setDrawingBufferSize=function(S,O,q){Lt=S,Gt=O,xt=q,e.width=Math.floor(S*q),e.height=Math.floor(O*q),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(x===gn){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(rt)},this.getViewport=function(S){return S.copy(tt)},this.setViewport=function(S,O,q,B){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,O,q,B),bt.viewport(rt.copy(tt).multiplyScalar(Qt()).round())},this.getScissor=function(S){return S.copy(Pt)},this.setScissor=function(S,O,q,B){S.isVector4?Pt.set(S.x,S.y,S.z,S.w):Pt.set(S,O,q,B),bt.scissor(Dt.copy(Pt).multiplyScalar(Qt()).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(S){bt.setScissorTest(Tt=S)},this.setOpaqueSort=function(S){Ut=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,q=!0){let B=0;if(S){let H=!1;if(ht!==null){const Et=ht.texture.format;H=g.has(Et)}if(H){const Et=ht.texture.type,Ft=m.has(Et),St=L.getClearColor(),Ct=L.getClearAlpha(),kt=St.r,te=St.g,ae=St.b;Ft?(_[0]=kt,_[1]=te,_[2]=ae,_[3]=Ct,N.clearBufferuiv(N.COLOR,0,_)):(b[0]=kt,b[1]=te,b[2]=ae,b[3]=Ct,N.clearBufferiv(N.COLOR,0,b))}else B|=N.COLOR_BUFFER_BIT}O&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",At,!1),L.dispose(),wt.dispose(),nt.dispose(),Kt.dispose(),$t.dispose(),R.dispose(),dt.dispose(),G.dispose(),vt.dispose(),Vt.dispose(),ct.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Sh),pt.removeEventListener("sessionend",bh),Ti.stop()};function Yt(S){S.preventDefault(),Fo("WebGLRenderer: Context Lost."),F=!0}function ee(){Fo("WebGLRenderer: Context Restored."),F=!1;const S=Ne.autoReset,O=Mt.enabled,q=Mt.autoUpdate,B=Mt.needsUpdate,H=Mt.type;ne(),Ne.autoReset=S,Mt.enabled=O,Mt.autoUpdate=q,Mt.needsUpdate=B,Mt.type=H}function At(S){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function xe(S){const O=S.target;O.removeEventListener("dispose",xe),Ve(O)}function Ve(S){ui(S),$t.remove(S)}function ui(S){const O=$t.get(S).programs;O!==void 0&&(O.forEach(function(q){ct.releaseProgram(q)}),S.isShaderMaterial&&ct.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,q,B,H,Et){O===null&&(O=It);const Ft=H.isMesh&&H.matrixWorld.determinantAffine()<0,St=s0(S,O,q,B,H);bt.setMaterial(B,Ft);let Ct=q.index,kt=1;if(B.wireframe===!0){if(Ct=G.getWireframeAttribute(q),Ct===void 0)return;kt=2}const te=q.drawRange,ae=q.attributes.position;let Ot=te.start*kt,le=(te.start+te.count)*kt;Et!==null&&(Ot=Math.max(Ot,Et.start*kt),le=Math.min(le,(Et.start+Et.count)*kt)),Ct!==null?(Ot=Math.max(Ot,0),le=Math.min(le,Ct.count)):ae!=null&&(Ot=Math.max(Ot,0),le=Math.min(le,ae.count));const Oe=le-Ot;if(Oe<0||Oe===1/0)return;vt.setup(H,B,St,q,Ct);let be,Se=et;if(Ct!==null&&(be=y.get(Ct),Se=yt,Se.setIndex(be)),H.isMesh)B.wireframe===!0?(bt.setLineWidth(B.wireframeLinewidth*Qt()),Se.setMode(N.LINES)):Se.setMode(N.TRIANGLES);else if(H.isLine){let je=B.linewidth;je===void 0&&(je=1),bt.setLineWidth(je*Qt()),H.isLineSegments?Se.setMode(N.LINES):H.isLineLoop?Se.setMode(N.LINE_LOOP):Se.setMode(N.LINE_STRIP)}else H.isPoints?Se.setMode(N.POINTS):H.isSprite&&Se.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const je=H._multiDrawStarts,zt=H._multiDrawCounts,an=H._multiDrawCount,ge=Ct?y.get(Ct).bytesPerElement:1,Ai=$t.get(B).currentProgram.getUniforms();for(let Qe=0;Qe<an;Qe++)Ai.setValue(N,"_gl_DrawID",Qe),Se.render(je[Qe]/ge,zt[Qe])}else if(H.isInstancedMesh)Se.renderInstances(Ot,Oe,H.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zt=Math.min(q.instanceCount,je);Se.renderInstances(Ot,Oe,zt)}else Se.render(Ot,Oe)};function yh(S,O,q,B){k!==null&&S.isNodeMaterial&&k.setObject(B,S),z===!0&&st.setState(S,q,!1),S.transparent===!0&&S.side===dn&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,Os(S,O,B),S.side=Mi,S.needsUpdate=!0,Os(S,O,B),S.side=dn):Os(S,O,B)}this.compile=function(S,O,q=null){q===null&&(q=S),k!==null&&k.renderStart(S,O,q),A=nt.get(q),A.init(O),w.push(A),q.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),S!==q&&S.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights(),k!==null&&k.updateLights(A.state.lightsArray),Y=this.localClippingEnabled,z=st.init(this.clippingPlanes,Y),z===!0&&st.setGlobalState(this.clippingPlanes,O),k!==null&&Mt.render(A.state.shadowsArray,q,O);const B=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Et=H.material;if(Et)if(Array.isArray(Et))for(let Ft=0;Ft<Et.length;Ft++){const St=Et[Ft];yh(St,q,O,H),B.add(St)}else yh(Et,q,O,H),B.add(Et)}),A=w.pop(),k!==null&&k.renderEnd(),B},this.compileAsync=function(S,O,q=null){const B=this.compile(S,O,q);return new Promise(H=>{function Et(){if(B.forEach(function(Ft){const Ct=$t.get(Ft).currentProgram;(Ct===void 0||Ct.isReady())&&B.delete(Ft)}),B.size===0){H(S);return}setTimeout(Et,10)}oe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ca=null;function n0(S){ca&&ca(S)}function Sh(){Ti.stop()}function bh(){Ti.start()}const Ti=new Uf;Ti.setAnimationLoop(n0),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(S){ca=S,pt.setAnimationLoop(S),S===null?Ti.stop():Ti.start()},pt.addEventListener("sessionstart",Sh),pt.addEventListener("sessionend",bh),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(S,O);const q=pt.enabled===!0&&pt.isPresenting===!0,B=U!==null&&(ht===null||q)&&U.begin(P,ht);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(O),O=pt.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,O,ht),A=nt.get(S,w.length),A.init(O),A.state.textureUnits=Kt.getTextureUnits(),w.push(A),V.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?ot.setFromArrayCamera(O):J.setFromProjectionMatrix(V,Pn,O.reversedDepth),Y=this.localClippingEnabled,z=st.init(this.clippingPlanes,Y),T=wt.get(S,v.length),T.init(),v.push(T),this.info.render.frame++,pt.enabled===!0&&pt.isPresenting===!0){const Ft=P.xr.getDepthSensingMesh();Ft!==null&&ha(Ft,O,-1/0,P.sortObjects)}ha(S,O,0,P.sortObjects),T.finish(),k!==null&&k.updateLights(A.state.lightsArray),P.sortObjects===!0&&T.sort(Ut,he),Ht=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Ht&&L.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),z===!0&&st.beginShadows();const H=A.state.shadowsArray;if(Mt.render(H,S,O),z===!0&&st.endShadows(),(B&&U.hasRenderPass())===!1){const Ft=T.opaque,St=T.transmissive;if(A.setupLights(),O.isArrayCamera){const Ct=O.cameras;if(St.length>0)for(let kt=0,te=Ct.length;kt<te;kt++){const ae=Ct[kt];Eh(Ft,St,S,ae)}Ht&&L.render(S);for(let kt=0,te=Ct.length;kt<te;kt++){const ae=Ct[kt];wh(T,S,ae,ae.viewport)}}else St.length>0&&Eh(Ft,St,S,O),Ht&&L.render(S),wh(T,S,O)}ht!==null&&X===0&&(Kt.updateMultisampleRenderTarget(ht),Kt.updateRenderTargetMipmap(ht)),B&&U.end(P),S.isScene===!0&&S.onAfterRender(P,S,O),vt.resetDefaultState(),$=-1,j=null,w.pop(),w.length>0?(A=w[w.length-1],Kt.setTextureUnits(A.state.textureUnits),z===!0&&st.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,v.pop(),v.length>0?T=v[v.length-1]:T=null,k!==null&&k.renderEnd()};function ha(S,O,q,B){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){const Ft=O.isArrayCamera?ot:J;if(!S.frustumCulled||S.intersectsFrustum(Ft)){B&&lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(V);const St=dt.update(S),Ct=S.material;Ct.visible&&T.push(S,St,Ct,q,lt.z,null,O)}}else if(S.isMesh||S.isLine||S.isPoints){const Ft=O.isArrayCamera?ot:J;if(!S.frustumCulled||S.intersectsFrustum(Ft)){const St=dt.update(S),Ct=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),lt.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),lt.copy(St.boundingSphere.center)),lt.applyMatrix4(S.matrixWorld).applyMatrix4(V)),Array.isArray(Ct)){const kt=St.groups;for(let te=0,ae=kt.length;te<ae;te++){const Ot=kt[te],le=Ct[Ot.materialIndex];le&&le.visible&&T.push(S,St,le,q,lt.z,Ot,O)}}else Ct.visible&&T.push(S,St,Ct,q,lt.z,null,O)}}}const Et=S.children;for(let Ft=0,St=Et.length;Ft<St;Ft++)ha(Et[Ft],O,q,B)}function wh(S,O,q,B){const{opaque:H,transmissive:Et,transparent:Ft}=S;A.setupLightsView(q),z===!0&&st.setGlobalState(P.clippingPlanes,q),B&&bt.viewport(rt.copy(B)),H.length>0&&Lr(H,O,q),Et.length>0&&Lr(Et,O,q),Ft.length>0&&Lr(Ft,O,q),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Eh(S,O,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){const Ot=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new zn(1,1,{generateMipmaps:!0,type:Ot?Bn:gn,minFilter:si,samples:Math.max(4,ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}const Et=A.state.transmissionRenderTarget[B.id],Ft=B.viewport||rt;Et.setSize(Ft.z*P.transmissionResolutionScale,Ft.w*P.transmissionResolutionScale);const St=P.getRenderTarget(),Ct=P.getActiveCubeFace(),kt=P.getActiveMipmapLevel();P.setRenderTarget(Et),P.getClearColor(Q),gt=P.getClearAlpha(),gt<1&&P.setClearColor(16777215,.5),P.clear(),Ht&&L.render(q);const te=P.toneMapping;P.toneMapping=ai;const ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),z===!0&&st.setGlobalState(P.clippingPlanes,B),Lr(S,q,B),Kt.updateMultisampleRenderTarget(Et),Kt.updateRenderTargetMipmap(Et),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let le=0,Oe=O.length;le<Oe;le++){const be=O[le],{object:Se,geometry:je,material:zt,group:an}=be;if(zt.side===dn&&Se.layers.test(B.layers)){const ge=zt.side;zt.side=sn,zt.needsUpdate=!0,Th(Se,q,B,je,zt,an),zt.side=ge,zt.needsUpdate=!0,Ot=!0}}Ot===!0&&(Kt.updateMultisampleRenderTarget(Et),Kt.updateRenderTargetMipmap(Et))}P.setRenderTarget(St,Ct,kt),P.setClearColor(Q,gt),ae!==void 0&&(B.viewport=ae),P.toneMapping=te}function Lr(S,O,q){const B=O.isScene===!0?O.overrideMaterial:null;for(let H=0,Et=S.length;H<Et;H++){const Ft=S[H],{object:St,geometry:Ct,group:kt}=Ft;let te=Ft.material;te.allowOverride===!0&&B!==null&&(te=B),St.layers.test(q.layers)&&Th(St,O,q,Ct,te,kt)}}function Th(S,O,q,B,H,Et){k!==null&&H.isNodeMaterial&&k.setObject(S,H),S.onBeforeRender(P,O,q,B,H,Et),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(P,O,q,B,S,Et),H.transparent===!0&&H.side===dn&&H.forceSinglePass===!1?(H.side=sn,H.needsUpdate=!0,P.renderBufferDirect(q,O,B,H,S,Et),H.side=Mi,H.needsUpdate=!0,P.renderBufferDirect(q,O,B,H,S,Et),H.side=dn):P.renderBufferDirect(q,O,B,H,S,Et),S.onAfterRender(P,O,q,B,H,Et)}function Ah(S){let O=0;for(const q of S)q.texture!==null&&O++;return O}function Os(S,O,q){O.isScene!==!0&&(O=It);const B=$t.get(S),H=A.state.lights,Et=A.state.shadowsArray,Ft=H.state.version,St=ct.getParameters(S,H.state,Et,O,q,A.state.lightProbeGridArray),Ct=ct.getProgramCacheKey(St);let kt=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,B.fog=O.fog;const te=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=R.get(S.envMap||B.environment,te),B.envMapRotation=B.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,kt===void 0&&(S.addEventListener("dispose",xe),kt=new Map,B.programs=kt,B.programVariants=new Map);let ae=kt.get(Ct);if(ae!==void 0){if(B.currentProgram===ae&&B.lightsStateVersion===Ft)return Ch(S,St),ae}else St.uniforms=ct.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,q,St),S.onBeforeCompile(St,P),ae=ct.acquireProgram(St,Ct),kt.set(Ct,ae),B.uniforms=St.uniforms;const Ot=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ot.clippingPlanes=st.uniform),Ch(S,St),B.needsLights=o0(S),B.lightsStateVersion=Ft,B.needsLights&&(Ot.ambientLightColor.value=H.state.ambient,Ot.lightProbe.value=H.state.probe,Ot.sunLights.value=H.state.sun,Ot.sunLightShadows.value=H.state.sunShadow,Ot.directionalLights.value=H.state.directional,Ot.directionalLightShadows.value=H.state.directionalShadow,Ot.spotLights.value=H.state.spot,Ot.spotLightShadows.value=H.state.spotShadow,Ot.rectAreaLights.value=H.state.rectArea,Ot.ltc_1.value=H.state.rectAreaLTC1,Ot.ltc_2.value=H.state.rectAreaLTC2,Ot.pointLights.value=H.state.point,Ot.pointLightShadows.value=H.state.pointShadow,Ot.hemisphereLights.value=H.state.hemi,Ot.sunShadowMatrix.value=H.state.sunShadowMatrix,Ot.sunShadowCascade.value=H.state.sunShadowCascade,Ot.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ot.spotLightMatrix.value=H.state.spotLightMatrix,Ot.spotLightMap.value=H.state.spotLightMap,Ot.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=Ah(A.state.lightProbeGridArray),B.currentProgram=ae,B.uniformsList=null,ae}function i0(S,O,q,B,H){const Et=$t.get(S),Ft=Et.currentProgram.id+","+B+","+H;let St=Et.programVariants.get(Ft);return St===void 0?(St=Os(S,O,q),Et.programVariants.set(Ft,St)):(Et.currentProgram=St,Et.uniformsList=null,Et.outputColorSpace=B,Et.toneMapping=H),St}function Rh(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Eo.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Ch(S,O){const q=$t.get(S);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function s0(S,O,q,B,H){O.isScene!==!0&&(O=It),Kt.resetTextureUnits();const Et=O.fog,Ft=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?O.environment:null,St=ht===null?P.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ce.workingColorSpace,Ct=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,kt=R.get(B.envMap||Ft,Ct),te=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ae=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ot=!!q.morphAttributes.position,le=!!q.morphAttributes.normal,Oe=!!q.morphAttributes.color;let be=ai;B.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(be=P.toneMapping);const Se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,je=Se!==void 0?Se.length:0,zt=$t.get(B),an=A.state.lights;if(z===!0&&(Y===!0||S!==j)){const Re=S===j&&B.id===$;st.setState(B,S,Re)}let ge=!1,Ai=!1;B.version===zt.__version?zt.needsLights&&zt.lightsStateVersion!==an.state.version||H.isBatchedMesh&&zt.batching===!1||!H.isBatchedMesh&&zt.batching===!0||H.isBatchedMesh&&zt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&zt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&zt.instancing===!1||!H.isInstancedMesh&&zt.instancing===!0||H.isSkinnedMesh&&zt.skinning===!1||!H.isSkinnedMesh&&zt.skinning===!0||H.isInstancedMesh&&zt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&zt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&zt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&zt.instancingMorph===!1&&H.morphTexture!==null||zt.envMap!==kt||B.fog===!0&&zt.fog!==Et||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==st.numPlanes||zt.numIntersection!==st.numIntersection)||zt.vertexAlphas!==te||zt.vertexTangents!==ae||zt.morphTargets!==Ot||zt.morphNormals!==le||zt.morphColors!==Oe||zt.morphTargetsCount!==je||zt.numLightProbeGrids!==Ah(A.state.lightProbeGridArray)?ge=!0:(zt.outputColorSpace!==St||zt.toneMapping!==be)&&(Ai=!0):(ge=!0,zt.__version=B.version);let Qe=zt.currentProgram;(ge===!0||Ai===!0)&&(Qe=Ai===!0?i0(B,O,H,St,be):Os(B,O,H),k&&B.isNodeMaterial&&k.onUpdateProgram(B,Qe,zt));let Dr=!1,di=!1,Ri=!1;const de=Qe.getUniforms(),Ze=zt.uniforms;if(bt.useProgram(Qe.program)&&(Dr=!0,di=!0,Ri=!0),B.id!==$&&($=B.id,di=!0),Dr||j!==S){bt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),de.setValue(N,"projectionMatrix",S.projectionMatrix),de.setValue(N,"viewMatrix",S.matrixWorldInverse);const We=de.map.cameraPosition;We!==void 0&&We.setValue(N,ut.setFromMatrixPosition(S.matrixWorld)),ye.logarithmicDepthBuffer&&de.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&de.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,di=!0,Ri=!0)}if(zt.needsLights&&(an.state.sunShadowMap.length>0&&de.setValue(N,"sunShadowMap",an.state.sunShadowMap,Kt),an.state.directionalShadowMap.length>0&&de.setValue(N,"directionalShadowMap",an.state.directionalShadowMap,Kt),an.state.spotShadowMap.length>0&&de.setValue(N,"spotShadowMap",an.state.spotShadowMap,Kt),an.state.pointShadowMap.length>0&&de.setValue(N,"pointShadowMap",an.state.pointShadowMap,Kt)),H.isSkinnedMesh){de.setOptional(N,H,"bindMatrix"),de.setOptional(N,H,"bindMatrixInverse");const Re=H.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),de.setValue(N,"boneTexture",Re.boneTexture,Kt))}H.isBatchedMesh&&(de.setOptional(N,H,"batchingTexture"),de.setValue(N,"batchingTexture",H._matricesTexture,Kt),de.setOptional(N,H,"batchingIdTexture"),de.setValue(N,"batchingIdTexture",H._indirectTexture,Kt),de.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&de.setValue(N,"batchingColorTexture",H._colorsTexture,Kt));const wn=q.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&at.update(H,q,Qe),(di||zt.receiveShadow!==H.receiveShadow)&&(zt.receiveShadow=H.receiveShadow,de.setValue(N,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&O.environment!==null&&(Ze.envMapIntensity.value=O.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=d1()),di){if(de.setValue(N,"toneMappingExposure",P.toneMappingExposure),zt.needsLights&&r0(Ze,Ri),Et&&B.fog===!0&&_t.refreshFogUniforms(Ze,Et),_t.refreshMaterialUniforms(Ze,B,xt,Gt,A.state.transmissionRenderTarget[S.id]),zt.needsLights&&zt.numLightProbeGrids>0){const Re=M;let We=0;for(const qn of A.state.lightProbeGridArray)qn.texture!==null&&(Re.textures[We]=qn.texture,Re.min[We]=qn.boundingBox.min,Re.max[We]=qn.boundingBox.max,Re.resolution[We]=qn.resolution,We++);for(const qn in Re)Re[qn].length=We;Ze.probesSH.value=Re.textures,Ze.probesMin.value=Re.min,Ze.probesMax.value=Re.max,Ze.probesResolution.value=Re.resolution}Eo.upload(N,Rh(zt),Ze,Kt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Eo.upload(N,Rh(zt),Ze,Kt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&de.setValue(N,"center",H.center),de.setValue(N,"modelViewMatrix",H.modelViewMatrix),de.setValue(N,"normalMatrix",H.normalMatrix),de.setValue(N,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const Re=B.uniformsGroups;for(let We=0,qn=Re.length;We<qn;We++){const Lh=Re[We];Vt.update(Lh,Qe),Vt.bind(Lh,Qe)}}return Qe}function r0(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function o0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(S,O,q){const B=$t.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),$t.get(S.texture).__webglTexture=O,$t.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const q=$t.get(S);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,q=0){ht=S,K=O,X=q;let B=null,H=!1,Et=!1;if(S){const St=$t.get(S);if(St.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(N.FRAMEBUFFER,St.__webglFramebuffer),rt.copy(S.viewport),Dt.copy(S.scissor),Nt=S.scissorTest,bt.viewport(rt),bt.scissor(Dt),bt.setScissorTest(Nt),$=-1;return}else if(St.__webglFramebuffer===void 0)Kt.setupRenderTarget(S);else if(St.__hasExternalTextures)Kt.rebindTextures(S,$t.get(S.texture).__webglTexture,$t.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const te=S.depthTexture;if(St.__boundDepthTexture!==te){if(te!==null&&$t.has(te)&&(S.width!==te.image.width||S.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Kt.setupDepthRenderbuffer(S)}}const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Et=!0);const kt=$t.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?B=kt[O][q]:B=kt[O],H=!0):S.samples>0&&Kt.useMultisampledRTT(S)===!1?B=$t.get(S).__webglMultisampledFramebuffer:Array.isArray(kt)?B=kt[q]:B=kt,rt.copy(S.viewport),Dt.copy(S.scissor),Nt=S.scissorTest}else rt.copy(tt).multiplyScalar(xt).floor(),Dt.copy(Pt).multiplyScalar(xt).floor(),Nt=Tt;if(q!==0&&(B=Z),bt.bindFramebuffer(N.FRAMEBUFFER,B)&&bt.drawBuffers(S,B),bt.viewport(rt),bt.scissor(Dt),bt.setScissorTest(Nt),H){const St=$t.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,St.__webglTexture,q)}else if(Et){const St=O;for(let Ct=0;Ct<S.textures.length;Ct++){const kt=$t.get(S.textures[Ct]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ct,kt.__webglTexture,q,St)}}else if(S!==null&&q!==0){const St=$t.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,St.__webglTexture,q)}$=-1};function Ph(S){const O=$t.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=ye.textureFormatReadable(S.format),O.__typeReadable=ye.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,q,B,H,Et,Ft,St=0){if(!(S&&S.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=$t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ct=Ct[Ft],Array.isArray(Ct)&&(Ct=Ct[0])),Ct){bt.bindFramebuffer(N.FRAMEBUFFER,Ct);try{const kt=S.textures[St],te=kt.format,ae=kt.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+St);const Ot=Ph(kt);if(Ot.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-B&&q>=0&&q<=S.height-H&&N.readPixels(O,q,B,H,mt.convert(te),mt.convert(ae),Et)}finally{const kt=ht!==null?$t.get(ht).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(S,O,q,B,H,Et,Ft,St=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=$t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ct=Ct[Ft],Array.isArray(Ct)&&(Ct=Ct[0])),Ct)if(O>=0&&O<=S.width-B&&q>=0&&q<=S.height-H){bt.bindFramebuffer(N.FRAMEBUFFER,Ct);const kt=S.textures[St],te=kt.format,ae=kt.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+St);const Ot=Ph(kt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,le),N.bufferData(N.PIXEL_PACK_BUFFER,Et.byteLength,N.STREAM_READ),N.readPixels(O,q,B,H,mt.convert(te),mt.convert(ae),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Oe=ht!==null?$t.get(ht).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,Oe);const be=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await H0(N,be,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,le),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Et),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(le),N.deleteSync(be),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,q=0){const B=Math.pow(2,-q),H=Math.floor(S.image.width*B),Et=Math.floor(S.image.height*B),Ft=O!==null?O.x:0,St=O!==null?O.y:0;Kt.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Ft,St,H,Et),bt.unbindTexture()},this.copyTextureToTexture=function(S,O,q=null,B=null,H=0,Et=0){let Ft,St,Ct,kt,te,ae,Ot,le,Oe;const be=S.isCompressedTexture?S.mipmaps[Et]:S.image;if(q!==null)Ft=q.max.x-q.min.x,St=q.max.y-q.min.y,Ct=q.isBox3?q.max.z-q.min.z:1,kt=q.min.x,te=q.min.y,ae=q.isBox3?q.min.z:0;else{const de=Math.pow(2,-H);Ft=Math.floor(be.width*de),St=Math.floor(be.height*de),S.isDataArrayTexture?Ct=be.depth:S.isData3DTexture?Ct=Math.floor(be.depth*de):Ct=1,kt=0,te=0,ae=0}B!==null?(Ot=B.x,le=B.y,Oe=B.z):(Ot=0,le=0,Oe=0);const Se=mt.convert(O.format),je=mt.convert(O.type);let zt;O.isData3DTexture?(Kt.setTexture3D(O,0),zt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Kt.setTexture2DArray(O,0),zt=N.TEXTURE_2D_ARRAY):(Kt.setTexture2D(O,0),zt=N.TEXTURE_2D),bt.activeTexture(N.TEXTURE0),bt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),bt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),bt.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const an=bt.getParameter(N.UNPACK_ROW_LENGTH),ge=bt.getParameter(N.UNPACK_IMAGE_HEIGHT),Ai=bt.getParameter(N.UNPACK_SKIP_PIXELS),Qe=bt.getParameter(N.UNPACK_SKIP_ROWS),Dr=bt.getParameter(N.UNPACK_SKIP_IMAGES);bt.pixelStorei(N.UNPACK_ROW_LENGTH,be.width),bt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be.height),bt.pixelStorei(N.UNPACK_SKIP_PIXELS,kt),bt.pixelStorei(N.UNPACK_SKIP_ROWS,te),bt.pixelStorei(N.UNPACK_SKIP_IMAGES,ae);const di=S.isDataArrayTexture||S.isData3DTexture,Ri=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const de=$t.get(S),Ze=$t.get(O),wn=$t.get(de.__renderTarget),Re=$t.get(Ze.__renderTarget);bt.bindFramebuffer(N.READ_FRAMEBUFFER,wn.__webglFramebuffer),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let We=0;We<Ct;We++)di&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.get(S).__webglTexture,H,ae+We),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.get(O).__webglTexture,Et,Oe+We)),N.blitFramebuffer(kt,te,kt+Ft,te+St,Ot,le,Ot+Ft,le+St,N.DEPTH_BUFFER_BIT,N.NEAREST);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||$t.has(S)){const de=$t.get(S),Ze=$t.get(O);bt.bindFramebuffer(N.READ_FRAMEBUFFER,D),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,W);for(let wn=0;wn<Ct;wn++)di?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,de.__webglTexture,H,ae+wn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,H),Ri?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.__webglTexture,Et,Oe+wn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ze.__webglTexture,Et),H!==0?N.blitFramebuffer(kt,te,kt+Ft,te+St,Ot,le,Ot+Ft,le+St,N.COLOR_BUFFER_BIT,N.NEAREST):Ri?N.copyTexSubImage3D(zt,Et,Ot,le,Oe+wn,kt,te,Ft,St):N.copyTexSubImage2D(zt,Et,Ot,le,kt,te,Ft,St);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ri?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(zt,Et,Ot,le,Oe,Ft,St,Ct,Se,je,be.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(zt,Et,Ot,le,Oe,Ft,St,Ct,Se,be.data):N.texSubImage3D(zt,Et,Ot,le,Oe,Ft,St,Ct,Se,je,be):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Et,Ot,le,Ft,St,Se,je,be.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Et,Ot,le,be.width,be.height,Se,be.data):N.texSubImage2D(N.TEXTURE_2D,Et,Ot,le,Ft,St,Se,je,be);bt.pixelStorei(N.UNPACK_ROW_LENGTH,an),bt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ge),bt.pixelStorei(N.UNPACK_SKIP_PIXELS,Ai),bt.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),bt.pixelStorei(N.UNPACK_SKIP_IMAGES,Dr),Et===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&N.generateMipmap(zt),bt.unbindTexture()},this.initRenderTarget=function(S){$t.get(S).__webglFramebuffer===void 0&&Kt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Kt.setTextureCube(S,0):S.isData3DTexture?Kt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Kt.setTexture2DArray(S,0):Kt.setTexture2D(S,0),bt.unbindTexture()},this.resetState=function(){K=0,X=0,ht=null,bt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}const Ue=[{index:0,par:4,name:"퍼스트 드라이브",hint:"드라이버로 멀리 보낸 뒤 그린 왼쪽을 노려보세요",tee:[0,32],cup:[1.5,-30],path:[[0,32],[0,24],[-1.5,12],[0,0],[1.5,-12],[1.5,-30]],fairwayWidth:6.4,roughWidth:14,green:{x:1.5,z:-30,r:7},zones:[{kind:"bunker",x:8.6,z:-26.5,rx:3.4,rz:2.9}],decor:[{kind:"pine",x:-13.4,z:26,s:1.35,r:.55},{kind:"tree",x:13.2,z:22,s:1.25,r:.6},{kind:"pine",x:-14.6,z:12,s:1.15,r:.5},{kind:"tree",x:15.4,z:8,s:1.1,r:.55},{kind:"pine",x:-13.8,z:-1,s:1.3,r:.5},{kind:"tree",x:14.2,z:-8,s:1.2,r:.55},{kind:"pine",x:13.6,z:-18,s:1.05,r:.45},{kind:"tree",x:-13.2,z:-20,s:1.15,r:.5},{kind:"rock",x:-10.6,z:4,s:1.1,r:.6},{kind:"rock",x:11.4,z:-2.4,s:.8,r:.5},{kind:"bush",x:9.4,z:14,s:1,r:.4},{kind:"bush",x:-9.8,z:-14,s:.9,r:.4},{kind:"pine",x:0,z:-40,s:1.4,r:.5},{kind:"tree",x:-8,z:-38,s:1.2,r:.5},{kind:"tree",x:10,z:-37,s:1.15,r:.5}]},{index:1,par:4,name:"도그레그 벙커",hint:"오른쪽으로 휘어지는 코스 · 그린 앞 벙커를 피하세요",tee:[0,34],cup:[0,-30],path:[[0,34],[0,22],[3,9],[7,-5],[4,-19],[0,-30]],fairwayWidth:6.2,roughWidth:14,green:{x:0,z:-30,r:7.2},zones:[{kind:"water",x:-12.5,z:-3,rx:6.4,rz:7.4},{kind:"bunker",x:-7.4,z:-26,rx:3.3,rz:2.7},{kind:"bunker",x:7.6,z:-25,rx:2.6,rz:2.2}],decor:[{kind:"tree",x:-14.4,z:28,s:1.3,r:.55},{kind:"pine",x:13.6,z:30,s:1.2,r:.5},{kind:"pine",x:-13.2,z:14,s:1.05,r:.45},{kind:"tree",x:15.8,z:16,s:1.15,r:.55},{kind:"tree",x:16.4,z:1,s:1.25,r:.6},{kind:"pine",x:-6.4,z:-14,s:1.1,r:.45},{kind:"tree",x:13.6,z:-13,s:1.1,r:.5},{kind:"pine",x:14.4,z:-30,s:1.2,r:.5},{kind:"tree",x:-13.6,z:-34,s:1.25,r:.55},{kind:"rock",x:-8.4,z:6.4,s:1,r:.6},{kind:"rock",x:12.4,z:-4.6,s:.85,r:.5},{kind:"bush",x:9.6,z:22,s:1.05,r:.4},{kind:"bush",x:-10.4,z:-20,s:.95,r:.4},{kind:"tree",x:-2,z:-40,s:1.3,r:.5}]},{index:2,par:3,name:"워터 아일랜드",hint:"그린 앞 연못을 넘겨야 합니다 · 카트 길까지 거리 재기",tee:[0,22],cup:[.5,-24],path:[[0,22],[0,13],[0,3],[0,-7],[.5,-16],[.5,-24]],fairwayWidth:6,roughWidth:15,green:{x:.5,z:-24,r:7.2},zones:[{kind:"water",x:0,z:-5.5,rx:12,rz:6.2},{kind:"bunker",x:-7.8,z:-28.5,rx:3.1,rz:2.4}],decor:[{kind:"pine",x:-15.6,z:18,s:1.3,r:.55},{kind:"tree",x:15.2,z:16,s:1.2,r:.6},{kind:"pine",x:-16.4,z:4,s:1.1,r:.5},{kind:"tree",x:16.6,z:2,s:1.15,r:.55},{kind:"pine",x:-15.2,z:-12,s:1.05,r:.45},{kind:"tree",x:15.8,z:-14,s:1.1,r:.5},{kind:"pine",x:-12.6,z:-30,s:1.2,r:.5},{kind:"tree",x:12.4,z:-31,s:1.25,r:.55},{kind:"rock",x:10.4,z:-3.4,s:1.1,r:.7},{kind:"rock",x:-10.8,z:-6.2,s:.9,r:.6},{kind:"bush",x:8.6,z:12,s:1,r:.4},{kind:"bush",x:-8.4,z:8,s:.95,r:.4},{kind:"pine",x:4.4,z:-40,s:1.35,r:.5},{kind:"tree",x:-6.4,z:-38,s:1.2,r:.5}]}],Gu=new Map;function p1(i,t){if(typeof document>"u")return null;const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");return n?{canvas:e,ctx:n}:null}function Yc(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Us(i,t,e,n,s=1,r=1){if(typeof document>"u")return null;let o=Gu.get(i);if(!o){const l=p1(t,e);if(!l)return null;n(l.ctx,t,e),o=l.canvas,Gu.set(i,o)}const a=new Is(o);return a.colorSpace=ke,a.wrapS=ki,a.wrapT=ki,a.repeat.set(s,r),a.anisotropy=8,a.needsUpdate=!0,a}function Yf(i=.15){return Us("water",512,512,(t,e,n)=>{const s=Yc(9923),r=t.createLinearGradient(0,0,e,n);r.addColorStop(0,"#2f9fd6"),r.addColorStop(.5,"#3cb2e6"),r.addColorStop(1,"#2b8fc4"),t.fillStyle=r,t.fillRect(0,0,e,n);for(let o=0;o<240;o+=1){const a=s()*e,l=s()*n,c=8+s()*46;t.strokeStyle=`rgba(255,255,255,${.04+s()*.16})`,t.lineWidth=1+s()*2,t.beginPath(),t.moveTo(a,l),t.quadraticCurveTo(a+c*.5,l-4-s()*6,a+c,l),t.stroke()}},i,i)}function m1(){return Us("sky",64,512,(i,t,e)=>{const n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#2f7fcb"),n.addColorStop(.3,"#57a7df"),n.addColorStop(.55,"#8cc9ec"),n.addColorStop(.74,"#c9e8f8"),n.addColorStop(.9,"#e7f5e8"),n.addColorStop(1,"#cfe8cd"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function g1(){return Us("flag",256,160,(i,t,e)=>{i.fillStyle="#ff5c78",i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,0.92)",i.beginPath(),i.arc(t*.28,e*.5,e*.24,0,Math.PI*2),i.fill(),i.fillStyle="#ff5c78",i.beginPath(),i.arc(t*.28,e*.5,e*.12,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.9)",i.font="700 46px system-ui, sans-serif",i.textAlign="left",i.textBaseline="middle",i.fillText("ONEOINE",t*.44,e*.54)})}function x1(){return Us("ball",256,256,(i,t,e)=>{const n=Yc(1211);i.fillStyle="#ffffff",i.fillRect(0,0,t,e);for(let s=8;s<e;s+=15)for(let r=8;r<t;r+=15){const o=r+(s%30===8?7:0)+(n()-.5)*2,a=s+(n()-.5)*2,l=i.createRadialGradient(o,a,0,o,a,5);l.addColorStop(0,"rgba(186,196,204,0.95)"),l.addColorStop(.7,"rgba(212,222,229,0.75)"),l.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=l,i.beginPath(),i.arc(o,a,5,0,Math.PI*2),i.fill()}})}function _1(){return Us("softdot",128,128,(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function v1(){return Us("cloud",256,128,(i,t,e)=>{const n=Yc(6262);i.clearRect(0,0,t,e);for(let s=0;s<14;s+=1){const r=40+n()*(t-80),o=e*.55+(n()-.5)*e*.4,a=22+n()*34,l=i.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.95)"),l.addColorStop(.6,"rgba(255,255,255,0.6)"),l.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=l,i.beginPath(),i.arc(r,o,a,0,Math.PI*2),i.fill()}})}const M1={water:3779035};function qc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Fe;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0,u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let f=0;f<i.length;++f){const u=i[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Hu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);const p=Hu(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Hu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Je(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<e;p++){const x=h.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const qs=new C;function vn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;qs.copy(t),qs[n]=0,qs.normalize();const c=.5*o/(o+a),h=1-qs.angleTo(i)/l;return Math.sign(qs[e])===1?h*c:a/(o+a)+c+c*(1-h)}class $c extends Gn{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new C,c=new C,h=new C(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,x=new C,g=.5/o;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*r,d[m+1]=h.y*Math.sign(l.y)+c.y*r,d[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),u[_+0]=vn(x,c,"z","y",r,n),u[_+1]=1-vn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),u[_+0]=1-vn(x,c,"z","y",r,n),u[_+1]=1-vn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),u[_+0]=1-vn(x,c,"x","z",r,t),u[_+1]=vn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),u[_+0]=1-vn(x,c,"x","z",r,t),u[_+1]=1-vn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),u[_+0]=1-vn(x,c,"x","y",r,t),u[_+1]=1-vn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),u[_+0]=vn(x,c,"x","y",r,t),u[_+1]=1-vn(x,c,"y","x",r,e);break}}static fromJSON(t){return new $c(t.width,t.height,t.depth,t.segments,t.radius)}}const y1=Math.cos(45*Math.PI/180),S1=Math.cos(72*Math.PI/180),Oi=new C,Mr=new C,yr=new C,Bo=new C,Go=new C,Ce=new C,Ii=new C,Va=new C,Wa=new C,Xa=[Oi,Mr,yr];function qf(i,t=y1){let e=i;e.index&&(e=e.toNonIndexed());const n=e.getAttribute("position");if(!n||n.count<3)return e;const s=n.count,r=new Int32Array(s),o=new Map;let a=0;for(let f=0;f<s;f+=1){const u=`${Math.round(n.getX(f)*1e3)},${Math.round(n.getY(f)*1e3)},${Math.round(n.getZ(f)*1e3)}`;let p=o.get(u);p===void 0&&(p=a,a+=1,o.set(u,p)),r[f]=p}const l=Math.floor(s/3),c=new Float32Array(l*3),h=new Float32Array(a*3);for(let f=0;f<l;f+=1){const u=f*3;Oi.fromBufferAttribute(n,u),Mr.fromBufferAttribute(n,u+1),yr.fromBufferAttribute(n,u+2),Bo.subVectors(Mr,Oi),Go.subVectors(yr,Oi),Ce.crossVectors(Bo,Go);const p=Ce.length();p>1e-12&&Ce.divideScalar(p),c[u]=Ce.x,c[u+1]=Ce.y,c[u+2]=Ce.z;for(let x=0;x<3;x+=1){const g=Xa[x];Va.subVectors(Xa[(x+1)%3],g),Wa.subVectors(Xa[(x+2)%3],g);const m=Va.length(),_=Wa.length(),b=m>1e-9&&_>1e-9?Math.acos(sr.clamp(Va.dot(Wa)/(m*_),-1,1)):0,M=r[u+x]*3;h[M]+=Ce.x*b,h[M+1]+=Ce.y*b,h[M+2]+=Ce.z*b}}const d=new Float32Array(s*3);for(let f=0;f<l;f+=1){const u=f*3;Ce.set(c[u],c[u+1],c[u+2]);const p=Ce.length();if(p<1e-9){for(let x=0;x<3;x+=1)d[(u+x)*3+1]=1;continue}Ce.divideScalar(p);for(let x=0;x<3;x+=1){const g=u+x,m=r[g]*3;if(Ii.set(h[m],h[m+1],h[m+2]),Ii.lengthSq()<1e-12){d[g*3]=Ce.x,d[g*3+1]=Ce.y,d[g*3+2]=Ce.z;continue}Ii.normalize();const _=Ii.dot(Ce)>=t;d[g*3]=_?Ii.x:Ce.x,d[g*3+1]=_?Ii.y:Ce.y,d[g*3+2]=_?Ii.z:Ce.z}}return e.setAttribute("normal",new Je(d,3)),e}const $f=S1;function b1(i,t,e){const n=Math.sin(i*12.9898+t*78.233+e*37.719)*43758.5453;return n-Math.floor(n)}function Vu(i,t){const e=i.getAttribute("position"),n=i.getAttribute("normal"),s=Math.abs(Math.round(t*1e4))+1;if(!e)return;i.computeVertexNormals();const r=i.getAttribute("normal")??n;for(let o=0;o<e.count;o+=1){const a=e.getX(o),l=e.getY(o),c=e.getZ(o),h=b1(a*s,l*s,c*s)-.5,d=r?r.getX(o):0,f=r?r.getY(o):0,u=r?r.getZ(o):0;e.setXYZ(o,a+d*h*t,l+f*h*t,c+u*h*t)}i.computeVertexNormals()}function Zf(i,t=!1,e){const n=i.parameters??{},s=i.type;let r;switch(s){case"BoxGeometry":{const o=n.width??1,a=n.height??1,l=n.depth??1,c=Math.min(o,a,l)*.2;r=new $c(o,a,l,2,Math.max(.001,c));break}case"CylinderGeometry":{const o=n.radiusTop??1,a=n.radiusBottom??1,l=n.height??1,c=Math.max(16,n.radialSegments??8),h=Math.max(1,Math.min(4,(n.heightSegments??1)+1));r=new Ae(o,a,l,c,h,n.openEnded??!1);break}case"ConeGeometry":{const o=n.radius??1,a=n.height??1,l=Math.max(20,n.radialSegments??8),c=Math.max(3,n.heightSegments??1);r=new $e(o,a,l,c),t&&Vu(r,o*.06);break}case"IcosahedronGeometry":{const o=n.radius??1,a=e??Math.max(1,Math.min(2,(n.detail??0)+1));r=new Jo(o,Math.max(1,Math.min(3,a))),t&&Vu(r,o*.16);break}case"SphereGeometry":{const o=n.radius??1;r=new Ln(o,Math.max(18,n.widthSegments??12),Math.max(12,(n.heightSegments??8)+4));break}case"TorusGeometry":{r=new bi(n.radius??1,n.tube??.4,Math.max(10,n.radialSegments??8),Math.max(24,n.tubularSegments??16));break}case"RingGeometry":{r=new Hn(n.innerRadius??.5,n.outerRadius??1,Math.max(40,n.thetaSegments??16));break}case"CircleGeometry":{r=new ri(n.radius??1,Math.max(40,n.segments??16));break}case"PlaneGeometry":{const o=n.width??1,a=n.height??1,l=n.widthSegments??1,c=n.heightSegments??1;r=new Si(o,a,Math.min(16,Math.max(l,Math.ceil(o*2))),Math.min(16,Math.max(c,Math.ceil(a*2))));break}default:r=i.clone();break}return r.computeVertexNormals(),r}function Kf(i){if(i.getAttribute("uv"))return!1;const t=i.getAttribute("position");if(!t)return!1;const e=t.count,n=new Float32Array(e*2);for(let s=0;s<e;s+=3){Oi.fromBufferAttribute(t,s),Mr.fromBufferAttribute(t,s+1),yr.fromBufferAttribute(t,s+2),Bo.subVectors(Mr,Oi),Go.subVectors(yr,Oi),Ce.crossVectors(Bo,Go);const r=Math.abs(Ce.x),o=Math.abs(Ce.y),a=Math.abs(Ce.z),l=o>=r&&o>=a,c=!l&&r>=a;for(let h=0;h<3;h+=1){const d=t.getX(s+h),f=t.getY(s+h),u=t.getZ(s+h),p=l?d:c?u:d,x=l?u:f;n[(s+h)*2]=p,n[(s+h)*2+1]=x}}return i.setAttribute("uv",new Je(n,2)),!0}const Zc={turf:{tile:5.5,size:512,normalStrength:.62,roughness:.95,metalness:0,envIntensity:.45},fairway:{tile:4.2,size:512,normalStrength:.5,roughness:.92,metalness:0,envIntensity:.5},green:{tile:3,size:256,normalStrength:.38,roughness:.8,metalness:0,envIntensity:.55},sand:{tile:2.6,size:512,normalStrength:1.3,roughness:.97,metalness:0,envIntensity:.35},soil:{tile:3,size:256,normalStrength:1.2,roughness:.98,metalness:0,envIntensity:.3},rock:{tile:2.6,size:512,normalStrength:1.5,roughness:.86,metalness:0,envIntensity:.5},stone:{tile:2.2,size:256,normalStrength:.7,roughness:.76,metalness:0,envIntensity:.6},wood:{tile:1.2,size:256,normalStrength:.28,roughness:.58,metalness:0,envIntensity:.6},bark:{tile:1,size:256,normalStrength:1.2,roughness:.95,metalness:0,envIntensity:.25},leaf:{tile:.85,size:256,normalStrength:1.1,roughness:.86,metalness:0,envIntensity:.22},water:{tile:3.5,size:512,normalStrength:1,roughness:.07,metalness:.02,envIntensity:1.25},metal:{tile:.8,size:256,normalStrength:.35,roughness:.3,metalness:1,envIntensity:1.5},fabric:{tile:.6,size:256,normalStrength:.5,roughness:.9,metalness:0,envIntensity:.45},skin:{tile:.45,size:256,normalStrength:.25,roughness:.55,metalness:0,envIntensity:.55},generic:{tile:2,size:256,normalStrength:.6,roughness:.82,metalness:0,envIntensity:.5}};function ho(i,t,e){let n=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function un(i,t,e,n,s){const r=i*e,o=t*n,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=c*c*(3-2*c),f=h*h*(3-2*h),u=(a%e+e)%e,p=((a+1)%e+e)%e,x=(l%n+n)%n,g=((l+1)%n+n)%n,m=ho(u,x,s),_=ho(p,x,s),b=ho(u,g,s),M=ho(p,g,s),T=m+(_-m)*d,A=b+(M-b)*d;return T+(A-T)*f}function Ee(i,t,e,n,s,r){let o=0,a=.5,l=0,c=e,h=n;for(let d=0;d<r;d+=1)o+=a*un(i,t,c,h,s+d*57),l+=a,a*=.5,c=Math.min(1024,c*2),h=Math.min(1024,h*2);return o/l}function Jt(i){return i<0?0:i>1?1:i}function _i(i,t,e){const n=Jt((e-i)/(t-i||1e-6));return n*n*(3-2*n)}function Ya(i,t,e){return i+(t-i)*e}function Ho(i,t,e){return[Ya(i[0],t[0],e),Ya(i[1],t[1],e),Ya(i[2],t[2],e)]}const qa={turf:{dark:[.6,.68,.5],light:[.95,.98,.8],dry:[.92,.88,.6]},fairway:{dark:[.68,.76,.56],light:[1,1,.86],dry:[.95,.93,.68]},green:{dark:[.78,.85,.68],light:[1,1,.92],dry:[.96,.95,.76]}};function $a(i,t,e,n,s,r,o){const a=Ee(i,t,4,4,e,3),l=Ee(i,t,11,11,e+11,3),c=un(i,t,n,Math.max(8,Math.round(n*.62)),e+23),h=un(i,t,Math.round(n*1.6),Math.round(n*1.6),e+31),d=Jt(c*.3+l*.34+a*.3+h*.06),f=_i(.56,.88,a)*r,u=.84+d*.22-(1-h)*.05;let p=Ho(s.dark,s.light,d);p=Ho(p,s.dry,f*.45);const x=1+o*Math.sin((i+t*.25)*Math.PI*2*2);return{r:Jt(p[0]*u*x),g:Jt(p[1]*u*x),b:Jt(p[2]*u*x),h:d*.65+h*.25,rough:.94-d*.05}}function w1(i,t,e){switch(i){case"turf":return $a(t,e,1901,96,qa.turf,1,.012);case"fairway":return $a(t,e,3307,150,qa.fairway,.6,.045);case"green":return $a(t,e,5501,230,qa.green,.25,.03);case"sand":{const n=Ee(t,e,3,3,7717,2),s=Math.sin((e*7+n*2.4)*Math.PI*2),r=Math.sin((t*11+n*1.6)*Math.PI*2)*.35,o=un(t,e,210,210,7723),a=Ee(t,e,8,8,7729,2),l=.9+s*.06+r*.02+(o-.5)*.16-a*.05;return{r:Jt(1*l),g:Jt(.965*l),b:Jt(.86*l-a*.03),h:.5+s*.22+r*.1+(o-.5)*.5,rough:.97-o*.02}}case"soil":{const n=Ee(t,e,5,5,6619,3),s=un(t,e,170,170,6623),r=_i(.78,.95,Ee(t,e,22,22,6637,2)),o=.74+n*.25+(s-.5)*.16+r*.1;return{r:Jt(.94*o),g:Jt(.87*o),b:Jt(.78*o),h:n*.6+s*.25+r*.2,rough:.98}}case"rock":{const n=Ee(t,e,5,5,4481,4),s=Ee(t,e,3,3,4483,3),r=1-_i(0,.032,Math.abs(s-.5)),o=Ee(t,e,34,34,4487,2),a=_i(.6,.82,Ee(t,e,6,6,4493,3)),l=.78+n*.3+(o-.5)*.14-r*.34;let c=[l,l*1.01,l*.98];return c=Ho(c,[.62,.72,.5],a*.55),{r:Jt(c[0]),g:Jt(c[1]),b:Jt(c[2]),h:n*.62+o*.18-r*.4,rough:.87-a*.05+(1-n)*.05}}case"stone":{const n=Ee(t,e,4,4,9719,3),s=1-_i(0,.05,Math.abs(Ee(t,e,18,18,9721,2)-.5)),r=un(t,e,190,190,9727),o=.82+n*.2+(r-.5)*.1-s*.12;return{r:Jt(1*o),g:Jt(.985*o),b:Jt(.94*o),h:n*.5+r*.3-s*.2,rough:.72+(1-n)*.16}}case"wood":{const n=Ee(t,e,4,4,8801,3),s=.5+.5*Math.sin((e*34+n*1.5)*Math.PI*2),r=un(t,e,60,220,8807),o=_i(.8,.97,Ee(t,e,6,6,8813,3)),a=.82+s*.13+(r-.5)*.1-o*.14;return{r:Jt(1*a),g:Jt(.93*a),b:Jt(.84*a),h:s*.4+r*.35,rough:.5+(1-s)*.16+o*.1}}case"bark":{const n=un(t,e,26,5,2281),s=un(t,e,52,9,2287),r=Ee(t,e,60,24,2293,2),o=.52+n*.34+s*.14+(r-.5)*.14;return{r:Jt(.92*o),g:Jt(.8*o),b:Jt(.68*o),h:n*.55+s*.3+r*.15,rough:.93}}case"leaf":{const n=Ee(t,e,10,10,1117,3),s=un(t,e,70,70,1123),r=un(t,e,150,44,1129),o=_i(.6,.85,Ee(t,e,6,6,1131,2)),a=.5+n*.34+(s-.5)*.38+r*.14,l=Ho([.86*a,1*a,.64*a],[1*a,1*a,.66*a],o*.5);return{r:Jt(l[0]),g:Jt(l[1]),b:Jt(l[2]),h:n*.45+s*.45+r*.1,rough:.76-s*.08}}case"water":{const n=Math.sin((t*3+e*5+Ee(t,e,3,3,313,2)*2)*Math.PI*2),s=Math.sin((t*7-e*4+Ee(t,e,5,5,317,2)*3)*Math.PI*2),r=Ee(t,e,14,14,331,3),o=n*.45+s*.25+(r-.5)*.3,a=_i(.72,.95,r)*.25;return{r:Jt(.5+o*.12+a),g:Jt(.72+o*.1+a),b:Jt(.78+o*.06+a),h:.5+o*.45,rough:.06+(1-Math.abs(o))*.04}}case"metal":{const n=un(t,e,240,7,617),s=Ee(t,e,6,6,619,2),r=.82+n*.18-s*.06;return{r:Jt(r),g:Jt(r*1.005),b:Jt(r*1.01),h:n*.7+s*.3,rough:.26+s*.12}}case"fabric":{const n=Math.sin(t*Math.PI*2*160),s=Math.sin(e*Math.PI*2*160),r=(n*s+1)*.5,o=Ee(t,e,8,8,863,2),a=.82+r*.12+o*.06;return{r:Jt(a),g:Jt(a),b:Jt(a),h:r*.6+o*.4,rough:.92-r*.04}}case"skin":{const n=un(t,e,130,130,359),s=Ee(t,e,5,5,361,2),r=.94+(n-.5)*.06-s*.03;return{r:Jt(r),g:Jt(r*.985),b:Jt(r*.97),h:n*.5+s*.5,rough:.52+s*.1}}default:{const n=Ee(t,e,6,6,1013,3),s=un(t,e,150,150,1019),r=.84+n*.18+(s-.5)*.1;return{r:Jt(r),g:Jt(r),b:Jt(r),h:n*.6+s*.4,rough:.8+(1-n)*.1}}}}const Wu=new Map;function Za(i,t,e){const n=new mf(i,t,t,Cn);return n.wrapS=ki,n.wrapT=ki,n.magFilter=hn,n.minFilter=si,n.generateMipmaps=!0,n.anisotropy=8,n.colorSpace=e?ke:ni,n.needsUpdate=!0,n}function E1(i){const t=Zc[i],e=t.size,n=e*e,s=new Uint8Array(n*4),r=new Uint8Array(n*4),o=new Uint8Array(n*4),a=new Float32Array(n);for(let d=0;d<e;d+=1){const f=d/e;for(let u=0;u<e;u+=1){const p=u/e,x=w1(i,p,f),g=d*e+u;a[g]=x.h;const m=g*4;s[m]=Math.round(Jt(x.r)*255),s[m+1]=Math.round(Jt(x.g)*255),s[m+2]=Math.round(Jt(x.b)*255),s[m+3]=255;const _=Math.round(Jt(x.rough)*255);o[m]=_,o[m+1]=_,o[m+2]=_,o[m+3]=255}}const l=t.normalStrength*9;for(let d=0;d<e;d+=1){const f=(d-1+e)%e*e,u=(d+1)%e*e,p=d*e;for(let x=0;x<e;x+=1){const g=(x-1+e)%e,m=(x+1)%e,_=(a[p+m]-a[p+g])*.5,b=(a[u+x]-a[f+x])*.5;let M=-_*l,T=-b*l;const A=1,v=Math.hypot(M,T,A)||1;M/=v,T/=v;const w=(p+x)*4;r[w]=Math.round((M*.5+.5)*255),r[w+1]=Math.round((T*.5+.5)*255),r[w+2]=Math.round((A/v*.5+.5)*255),r[w+3]=255}}const c={map:Za(s,e,!0),normalMap:Za(r,e,!1),roughnessMap:Za(o,e,!1)},h=t.tile;for(const d of[c.map,c.normalMap,c.roughnessMap])d.repeat.setScalar(1/h);return c}function Kc(i){const t=Wu.get(i);if(t)return t;const e=E1(i);return Wu.set(i,e),e}function T1(i){for(const t of i)Kc(t)}function lc(i,t={}){const e=Zc[i],n=Kc(i),s=t.keepMap??null,r=new qe({color:t.color??16777215,vertexColors:t.vertexColors??!1,roughness:n.roughnessMap?1:t.roughness??e.roughness,metalness:t.metalness??e.metalness,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Mi,depthWrite:t.depthWrite??!0,flatShading:!1,map:s??n.map,normalMap:i==="water"?null:n.normalMap,roughnessMap:n.roughnessMap,normalScale:new ft(1,1),emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,envMapIntensity:t.envIntensity??e.envIntensity});return r.name=t.name??`real-${i}`,r.userData.oneoneReal=!0,r.userData.oneoneSurface=i,r}const Jf=new Set;function A1(i={}){const t=Zc.water,e=Kc("water"),n=new dg({color:i.color??1987942,roughness:t.roughness,metalness:t.metalness,transparent:!0,opacity:i.opacity??.92,normalMap:e.normalMap,normalScale:new ft(.45,.45),roughnessMap:null,envMapIntensity:t.envIntensity,clearcoat:.55,clearcoatRoughness:.14});return n.name="real-water",n.userData.oneoneReal=!0,n.userData.oneoneSurface="water",n.onBeforeCompile=s=>{s.uniforms.uWaveTime={value:0},s.fragmentShader=s.fragmentShader.replace("#include <common>",["#include <common>","uniform float uWaveTime;"].join(`
`)).replace("#include <normal_fragment_maps>",["#include <normal_fragment_maps>","#ifdef USE_NORMALMAP_TANGENTSPACE","  // 두 겹으로 천천히 흐르는 잔물결 — 서로 다른 방향으로 스크롤해 간섭 무늬를 만든다","  vec3 waveA = texture2D( normalMap, vNormalMapUv * 1.7 + vec2( uWaveTime * 0.016, uWaveTime * -0.011 ) ).xyz * 2.0 - 1.0;","  vec3 waveB = texture2D( normalMap, vNormalMapUv * 2.9 - vec2( uWaveTime * 0.009, uWaveTime * 0.019 ) ).xyz * 2.0 - 1.0;","  normal = normalize( normal + vec3( waveA.xy + waveB.xy, 0.0 ) * 0.5 );","#endif"].join(`
`)),n.userData.shader=s},n.customProgramCacheKey=()=>"oneone-real-water",Jf.add(n),n}function R1(i){Jf.forEach(t=>{const e=t.userData.shader;e?.uniforms.uWaveTime&&(e.uniforms.uWaveTime.value=i)})}let ps=null,Xu=!1;function C1(){const i=new zc,t=new wi({side:sn,depthWrite:!1,uniforms:{uTop:{value:new Bt(3110080)},uMid:{value:new Bt(10473711)},uHorizon:{value:new Bt(15266534)}},vertexShader:["varying vec3 vPos;","void main() {","  vPos = position;","  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["varying vec3 vPos;","uniform vec3 uTop;","uniform vec3 uMid;","uniform vec3 uHorizon;","void main() {","  float h = clamp( vPos.y / 110.0 * 0.5 + 0.5, 0.0, 1.0 );","  vec3 color = mix( uHorizon, uMid, smoothstep( 0.48, 0.62, h ) );","  color = mix( color, uTop, smoothstep( 0.62, 0.95, h ) );","  gl_FragColor = vec4( color, 1.0 );","}"].join(`
`)}),e=new qt(new Ln(120,32,20),t);i.add(e);const n=new bn({color:new Bt(.16,.3,.11),side:dn}),s=new qt(new ri(118,32),n);s.rotation.x=-Math.PI/2,s.position.y=-6,i.add(s);const r=new bn({color:new Bt(4.2,3.8,3)}),o=new qt(new Ln(5.5,16,12),r);o.position.set(.42,.62,.46).normalize().multiplyScalar(95),i.add(o);const a=new bn({color:new Bt(.09,.18,.1)});for(let l=0;l<18;l+=1){const c=l/18*Math.PI*2,h=new qt(new $e(9+l%3*3,10+l%4*3,8),a);h.position.set(Math.cos(c)*78,1.5,Math.sin(c)*78),i.add(h)}return i}function cc(i){if(ps||Xu||!i)return ps;Xu=!0;const t=C1();let e=null;try{e=new vr(i),ps=e.fromScene(t,.02,.5,240).texture}catch{ps=null}finally{e?.dispose(),t.traverse(n=>{const s=n;if(!s.isMesh)return;s.geometry.dispose();const r=s.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r?.dispose()})}return ps}function P1(){return ps}const E={grass:7651914,grassLight:8965979,grassMid:6862148,grassDark:5347642,fairway:9163351,fairwayDark:8637008,green:11068793,greenDark:10148458,fringe:8965461,rough:6137924,roughDark:5543996,meadow:4883766,meadowDark:4356655,sand:15785130,sandLight:16246978,sandDark:14468236,soil:9398854,soilDark:7295287,soilLight:11109210,rock:11121336,rockLight:12634316,rockDark:8818582,stone:14406331,stoneLight:15656658,stoneDark:12168853,water:3913693,wood:12618322,woodLight:14066537,woodDark:9331256,bark:9067067,barkDark:6701355,leaf:5681738,leafLight:7260508,leafDark:4166720,pine:3112775,pineLight:3970130,pineDark:2385465,coral:16743001,coralDark:14835775,cream:16446176,creamDark:15260868,teal:3120794,tealDark:2391420,roof:14242634,roofDark:11681592,sky:10475253,metal:12174025,metalDark:9279390,gold:15909198,white:16777215,glass:10408934,flowerPink:16748456,flowerYellow:16765286,flowerPurple:13081599,dark:2898752},jf=new Map;function Wn(i,t){for(const e of t)jf.set(e,i)}Wn("wood",[E.wood,E.woodLight,E.woodDark]);Wn("bark",[E.bark,E.barkDark]);Wn("leaf",[E.leaf,E.leafLight,E.leafDark,E.pine,E.pineLight,E.pineDark,E.grass,E.grassLight,E.grassMid,E.grassDark,E.fairway,E.fairwayDark,E.green,E.greenDark,E.fringe,E.rough,E.roughDark,E.meadow,E.meadowDark]);Wn("sand",[E.sand,E.sandLight,E.sandDark]);Wn("soil",[E.soil,E.soilDark,E.soilLight]);Wn("rock",[E.rock,E.rockLight,E.rockDark]);Wn("stone",[E.stone,E.stoneLight,E.stoneDark]);Wn("metal",[E.metal,E.metalDark,E.gold]);Wn("skin",[16768952,15318160]);Wn("fabric",[E.cream,E.creamDark,E.white,E.coral,E.coralDark,E.teal,E.tealDark,E.roof,E.roofDark,E.glass,E.flowerPink,E.flowerYellow,E.flowerPurple,E.dark,E.sky]);function Qf(i){if(i.kind)return i.kind;const t=i.bucket??"solid";return t==="metal"?"metal":t==="glow"?"fabric":jf.get(i.color)??"fabric"}const Yu=new Map;function L1(i,t){const e=`${t}|${i}`,n=Yu.get(e);if(n)return n;const s=new qe({vertexColors:!0,flatShading:!0,roughness:t==="metal"?.32:t==="glow"?.45:.87,metalness:t==="metal"?.62:t==="glow"?.1:0,...t==="glow"?{emissive:new Bt(16770726),emissiveIntensity:.75}:{}});return s.name=`poly-${t}-${i}`,s.userData.oneoneSurface=i,s.userData.oneonePropBucket=t,Yu.set(e,s),s}const qu=new Map;function D1(i,t){const e=`${t}|${i}`,n=qu.get(e);if(n)return n;const s=t==="glow"?lc("fabric",{vertexColors:!0,roughness:.5,metalness:.05,emissive:16770726,emissiveIntensity:.55,envIntensity:.5}):lc(i,{vertexColors:!0,...t==="metal"?{roughness:.3,metalness:.95,envIntensity:1.5}:{}});return s.name=`real-${t}-${i}`,s.userData.oneonePropBucket=t,qu.set(e,s),s}function fn(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const $u=fn(20973),Zu=new ve,Ku=new ci,Ju=new Wi,ju=new C,uo=new C,Ni=new Bt;function I1(i,t=!1){const e=Qf(i),n=e==="leaf"||e==="rock",s=t?Zf(i.geo,n,i.realDetail):i.geo,r=s.index?s.toNonIndexed():s.clone();r.deleteAttribute("uv"),r.deleteAttribute("uv1"),r.deleteAttribute("uv2"),i.scale!==void 0?typeof i.scale=="number"?uo.setScalar(i.scale):uo.set(i.scale[0],i.scale[1],i.scale[2]):uo.set(1,1,1),ju.set(i.pos?.[0]??0,i.pos?.[1]??0,i.pos?.[2]??0),Ku.set(i.rot?.[0]??0,i.rot?.[1]??0,i.rot?.[2]??0),Ju.setFromEuler(Ku),Zu.compose(ju,Ju,uo),r.applyMatrix4(Zu),r.computeVertexNormals(),t&&qf(r,$f);const o=r.getAttribute("position"),a=o.count,l=new Float32Array(a*3);Ni.setHex(i.color);const c=(i.jitter??.07)*(t?.4:1),h=i.shade??.12;let d=1/0,f=-1/0;for(let p=0;p<a;p+=1){const x=o.getY(p);x<d&&(d=x),x>f&&(f=x)}const u=Math.max(1e-4,f-d);if(t)for(let p=0;p<a;p+=1){const x=1+($u()-.5)*c,g=(o.getY(p)-d)/u,m=x*(1-h*(1-g)),_=p*3;l[_]=Math.min(1,Ni.r*m),l[_+1]=Math.min(1,Ni.g*m),l[_+2]=Math.min(1,Ni.b*m)}else for(let p=0;p<a;p+=3){const x=1+($u()-.5)*c,m=((o.getY(p)+o.getY(p+1)+o.getY(p+2))/3-d)/u,_=x*(1-h*(1-m));for(let b=0;b<3;b+=1){const M=(p+b)*3;l[M]=Math.min(1,Ni.r*_),l[M+1]=Math.min(1,Ni.g*_),l[M+2]=Math.min(1,Ni.b*_)}}return r.setAttribute("color",new Je(l,3)),r}const hc=new Map;function tp(i,t){const e=new Map;for(const s of i){const r=s.bucket??"solid",o=Qf(s),a=`${r}|${o}`;let l=e.get(a);l||(l={bucket:r,kind:o,geometries:[]},e.set(a,l)),l.geometries.push(I1(s,t))}const n=[];return e.forEach(s=>{const r=qc(s.geometries,!1);s.geometries.forEach(o=>o.dispose()),r&&(r.computeBoundingSphere(),t&&Kf(r),n.push({geometry:r,material:t?D1(s.kind,s.bucket):L1(s.kind,s.bucket),cast:s.bucket!=="glow",kind:s.kind}))}),n}function fe(i,t){let e=hc.get(i);e||(e={parts:t,poly:tp(t,!1)},hc.set(i,e));const n=new Te;n.userData.propKey=i;for(const s of e.poly){const r=new qt(s.geometry,s.material);r.castShadow=s.cast,r.receiveShadow=!0,n.add(r)}return n}const To=new Map;function ea(i,t){To.set(i,t)}function N1(i){const t=To.get(i);if(t)return t;let e=null;return To.forEach((n,s)=>{i.startsWith(s)&&(!e||s.length>e.length)&&(e=s)}),e?To.get(e):void 0}function ep(i){const t=hc.get(i);if(!t)return null;if(!t.real){const n=N1(i),s=n?[...t.parts,...n(t.parts)]:t.parts;t.real=tp(s,!0)}const e=new Te;e.name=`${i}-real`,e.userData.oneoneVariantOf="real";for(const n of t.real){const s=new qt(n.geometry,n.material);s.castShadow=n.cast,s.receiveShadow=!0,e.add(s)}return e}function np(i){i.updateMatrixWorld(!0);const t=new Map,e=[];i.traverse(r=>{if(!r.userData?.propKey)return;let o=r;for(;o;){if(o.userData?.oneoneDynamic)return;o=o.parent}e.push(r)});for(const r of e){const o=r.userData.propKey,a=ep(o);if(a){r.userData.realMerged=!0,r.updateWorldMatrix(!0,!1);for(const l of a.children){const c=l;if(!c.isMesh)continue;const h=c.material;let d=t.get(h);d||(d={material:h,cast:c.castShadow,geometries:[]},t.set(h,d));const f=c.geometry.clone();f.applyMatrix4(r.matrixWorld),d.geometries.push(f)}}}if(t.size===0)return null;const n=new Te;n.name="real-merged",n.visible=!1;const s=[];return t.forEach(r=>{const o=qc(r.geometries,!1);if(r.geometries.forEach(l=>l.dispose()),!o)return;o.computeBoundingSphere();const a=new qt(o,r.material);a.castShadow=r.cast,a.receiveShadow=!0,n.add(a),s.push(o)}),n.userData={oneoneRealMerged:!0,geometries:s},n}const fo=new Bt;function ip(i,t){i.updateMatrixWorld(!0);const e=new Map,n=[];i.traverse(r=>{const o=r;if(!o.isMesh||Array.isArray(o.material))return;const a=o.material;if(a.map||a.transparent||!o.geometry.getAttribute("color"))return;let l=o;for(;l;){if(t?.has(l))return;l=l.parent}n.push(o)});for(const r of n){const o=r.material,a=`${o.uuid}|${r.castShadow?1:0}|${r.receiveShadow?1:0}`;let l=e.get(a);l||(l={material:o,cast:r.castShadow,geometries:[]},e.set(a,l));const c=r.geometry.clone();c.applyMatrix4(r.matrixWorld),l.geometries.push(c)}const s=[];for(const r of n)r.parent?.remove(r);for(const r of e.values()){const o=qc(r.geometries,!1);if(r.geometries.forEach(l=>l.dispose()),!o)continue;o.computeBoundingSphere();const a=new qt(o,r.material);a.castShadow=r.cast,a.receiveShadow=!0,i.add(a),s.push(o)}return s}const U1=fn(12081);function Mn(i,t,e=.055){const n=i.index?i.toNonIndexed():i;n.deleteAttribute("uv");const s=n.getAttribute("position"),r=s.count,o=new Float32Array(r*3),a=new C,l=new C,c=new C;for(let h=0;h<r;h+=3){const d=s.getX(h),f=s.getY(h),u=s.getZ(h),p=s.getX(h+1),x=s.getY(h+1),g=s.getZ(h+1),m=s.getX(h+2),_=s.getY(h+2),b=s.getZ(h+2),M=(d+p+m)/3,T=(f+x+_)/3,A=(u+g+b)/3;a.set(p-d,x-f,g-u),l.set(m-d,_-f,b-u),c.crossVectors(a,l).normalize(),t(M,T,A,c.y,fo);const v=1+(U1()-.5)*e;for(let w=0;w<3;w+=1){const U=(h+w)*3;o[U]=Math.min(1,fo.r*v),o[U+1]=Math.min(1,fo.g*v),o[U+2]=Math.min(1,fo.b*v)}}return n.setAttribute("color",new Je(o,3)),n}function Wt(i,t,e,n=6){return new Ae(i,t,e,n,1)}function it(i,t,e){return new Gn(i,t,e)}function pe(i=1){return new Jo(i,0)}function Vo(i=1){const t=[{geo:Wt(.14,.24,.3,5),color:E.barkDark,pos:[0,.15,0],jitter:.06,shade:.2},{geo:Wt(.07,.14,2.1,5),color:E.bark,pos:[0,1.15,0],jitter:.05,shade:.28},{geo:Wt(.115,.13,.12,5),color:E.barkDark,pos:[0,1,0],jitter:.04},{geo:Wt(.09,.105,.1,5),color:E.barkDark,pos:[0,1.72,0],jitter:.04}];[{y:2.5,r:1.28,h:1.42,color:E.pineDark},{y:3.32,r:1.02,h:1.34,color:E.pine},{y:4.06,r:.76,h:1.18,color:E.pineLight},{y:4.68,r:.48,h:.92,color:E.pine}].forEach((s,r)=>{t.push({geo:new $e(s.r,s.h,7,1),color:s.color,pos:[0,s.y,0],rot:[0,r*.62,0],jitter:.16,shade:.34});for(let o=0;o<3;o+=1){const a=r*.9+o/3*Math.PI*2,l=s.r*.78;t.push({geo:new $e(s.r*.3,s.h*.52,5,1),color:r%2===0?E.pineDark:E.pine,pos:[Math.cos(a)*l,s.y-s.h*.4,Math.sin(a)*l],rot:[Math.cos(a)*.85,a,Math.sin(a)*.85],jitter:.14,shade:.3})}}),t.push({geo:new $e(.13,.52,5),color:E.pineDark,pos:[0,5.2,0],jitter:.1});const n=fe("pine",t);return n.scale.setScalar(i),n}function Wo(i=1){const t=[{geo:Wt(.16,.26,.34,5),color:E.barkDark,pos:[0,.17,0],jitter:.05,shade:.2},{geo:Wt(.12,.2,1.5,5),color:E.bark,pos:[0,1.02,0],jitter:.06,shade:.3},{geo:Wt(.06,.11,1,5),color:E.bark,pos:[-.3,1.85,.05],rot:[0,0,.72],jitter:.05},{geo:Wt(.06,.11,1,5),color:E.bark,pos:[.3,1.85,-.06],rot:[0,0,-.72],jitter:.05},{geo:Wt(.05,.09,.8,5),color:E.barkDark,pos:[0,1.95,.24],rot:[-.6,0,0],jitter:.05}];[[0,2.55,0,1.02,E.leaf],[.62,2.32,.2,.74,E.leafDark],[-.66,2.26,-.12,.7,E.leafLight],[.18,3.05,-.42,.66,E.leafLight],[-.24,2.98,.5,.62,E.leaf],[.5,2.9,.62,.5,E.leafDark],[-.62,2.86,.34,.48,E.leaf],[0,3.34,.06,.5,E.leafLight]].forEach(([s,r,o,a,l])=>{t.push({geo:pe(1),color:l,pos:[s,r,o],scale:[a,a*.88,a],rot:[s*.4,r*.3,o*.4],jitter:.2,shade:.34})});const n=fe("tree",t);return n.scale.setScalar(i),n}function F1(i=1){const t=[{geo:pe(1),color:E.leaf,pos:[0,.32,0],scale:[.52,.42,.48],jitter:.2,shade:.3},{geo:pe(1),color:E.leafDark,pos:[.36,.24,.12],scale:[.34,.28,.32],rot:[.4,.8,0],jitter:.2},{geo:pe(1),color:E.leafLight,pos:[-.32,.26,-.1],scale:[.32,.26,.3],rot:[.2,1.6,.3],jitter:.2},{geo:pe(1),color:E.leaf,pos:[.04,.46,-.28],scale:[.26,.22,.26],jitter:.2},{geo:pe(.16),color:E.flowerPink,pos:[.24,.46,.24],jitter:.1},{geo:pe(.14),color:E.flowerYellow,pos:[-.22,.44,-.2],jitter:.1}],e=fe("bush",t);return e.scale.setScalar(i),e}function ar(i=1,t=1){const e=fn(t*977+13),n=[E.rock,E.rockLight,E.rockDark],s=[],r=3+Math.floor(e()*2);for(let a=0;a<r;a+=1){const l=e()*Math.PI*2,c=a===0?0:.28+e()*.42,h=a===0?.52+e()*.16:.22+e()*.26;s.push({geo:pe(1),color:n[Math.floor(e()*n.length)],pos:[Math.cos(l)*c,h*.62,Math.sin(l)*c],scale:[h,h*(.66+e()*.3),h*(.8+e()*.3)],rot:[e()*3,e()*3,e()*3],jitter:.14,shade:.24})}s.push({geo:pe(1),color:E.leafDark,pos:[-.1,.52,.12],scale:[.3,.16,.26],rot:[.3,1,.2],jitter:.18});const o=fe(`rock-${r}`,s);return o.scale.setScalar(i),o}function sp(i=1,t=1){const e=fn(t*331+5),n=[];for(let r=0;r<6;r+=1){const o=(e()-.5)*.5,a=(e()-.5)*.5,l=.7+e()*.6;n.push({geo:Wt(.016,.03,l,4),color:e()>.5?E.leafDark:E.leaf,pos:[o,l/2,a],rot:[(e()-.5)*.3,0,(e()-.5)*.3],jitter:.12}),e()>.55&&n.push({geo:Wt(.055,.055,.18,5),color:E.barkDark,pos:[o,l-.06,a],jitter:.1})}const s=fe("reeds",n);return s.scale.setScalar(i),s}function rp(i=1){const t=[{geo:new Ae(.42,.42,.03,7),color:E.leaf,pos:[0,.015,0],jitter:.12},{geo:pe(.1),color:E.flowerPink,pos:[.08,.07,-.05],jitter:.1},{geo:pe(.07),color:E.white,pos:[-.06,.06,.08],jitter:.1}],e=fe("lily",t);return e.scale.setScalar(i),e}function Ao(i=1){const t=[];for(let n=0;n<3;n+=1)t.push({geo:it(1.9,.07,.14),color:n%2===0?E.wood:E.woodLight,pos:[0,.46,-.16+n*.16],jitter:.08});for(let n=0;n<2;n+=1)t.push({geo:it(1.9,.14,.06),color:E.woodLight,pos:[0,.74+n*.19,-.28],rot:[-.14,0,0],jitter:.08});[-.8,.8].forEach(n=>{t.push({geo:it(.09,.46,.1),color:E.creamDark,pos:[n,.23,.16],jitter:.05}),t.push({geo:it(.09,.46,.1),color:E.creamDark,pos:[n,.23,-.2],jitter:.05}),t.push({geo:it(.09,.08,.14),color:E.creamDark,pos:[n,.44,.05],jitter:.05}),t.push({geo:it(.09,.06,.5),color:E.woodDark,pos:[n,.62,-.05],jitter:.05}),t.push({geo:it(.12,.16,.1),color:E.stoneDark,pos:[n,.66,.2],jitter:.05})});const e=fe("bench",t);return e.scale.setScalar(i),e}function op(i=1){const t=[{geo:Wt(.19,.26,.16,6),color:E.stoneDark,pos:[0,.08,0],jitter:.06},{geo:Wt(.06,.1,2.5,6),color:E.stoneDark,pos:[0,1.35,0],jitter:.05,shade:.2},{geo:Wt(.14,.14,.08,6),color:E.stoneLight,pos:[0,2.6,0],jitter:.05},{geo:it(.34,.44,.34),color:E.white,pos:[0,2.88,0],bucket:"glow",jitter:.02},{geo:new $e(.32,.26,4),color:E.stoneDark,pos:[0,3.22,0],rot:[0,Math.PI/4,0],jitter:.05},{geo:pe(.07),color:E.gold,pos:[0,3.4,0],jitter:.05}];[-.17,.17].forEach(n=>{[-.17,.17].forEach(s=>{t.push({geo:it(.05,.5,.05),color:E.stoneDark,pos:[n,2.88,s],jitter:.03})})});const e=fe("lamp",t);return e.scale.setScalar(i),e}function O1(i=E.coral,t=1){const e=i===E.gold?"yardage-gold":i===E.teal?"yardage-teal":"yardage",n=[{geo:it(.14,1.1,.14),color:E.woodDark,pos:[0,.55,0],jitter:.07,shade:.2},{geo:it(.44,.34,.07),color:E.cream,pos:[0,1.2,0],jitter:.04},{geo:it(.44,.1,.09),color:i,pos:[0,1.3,0],jitter:.03},{geo:it(.5,.06,.12),color:E.woodLight,pos:[0,1.42,0],jitter:.04}],s=fe(e,n);return s.scale.setScalar(t),s}function ap(i=1){const t=[{geo:it(1.44,.3,2.3),color:E.creamDark,pos:[0,.48,0],jitter:.05},{geo:it(1.36,.42,1.5),color:E.cream,pos:[0,.82,-.06],jitter:.05},{geo:it(1.3,.18,.12),color:E.coral,pos:[0,.72,.78],jitter:.04},{geo:it(1.5,.16,.16),color:E.creamDark,pos:[0,.42,1.14],jitter:.04},{geo:it(1.16,.16,.56),color:4873062,pos:[0,1.06,-.18],jitter:.06},{geo:it(1.16,.52,.16),color:4149081,pos:[0,1.3,-.52],rot:[-.2,0,0],jitter:.06},{geo:it(1.26,.62,.05),color:E.glass,pos:[0,1.42,.52],rot:[.16,0,0],jitter:.03},{geo:it(1.34,.06,.08),color:E.creamDark,pos:[0,1.72,.48],jitter:.03},{geo:it(1.34,.06,.08),color:E.creamDark,pos:[0,1.12,.56],jitter:.03},{geo:Wt(.05,.05,1,5),color:E.creamDark,pos:[.58,1.5,.5],rot:[.3,0,0],jitter:.04},{geo:Wt(.16,.16,.06,8),color:E.dark,pos:[.58,1.98,.36],rot:[1.1,0,0],jitter:.04},{geo:it(1.6,.12,2),color:E.cream,pos:[0,2.16,-.1],jitter:.05},{geo:it(1.66,.08,2.06),color:E.coral,pos:[0,2.24,-.1],jitter:.04},{geo:it(1.44,.34,.12),color:E.creamDark,pos:[0,.8,-1.08],jitter:.05},{geo:it(.9,.28,.14),color:E.creamDark,pos:[0,.78,1.12],jitter:.05}];[[.62,.5,.7],[-.62,.5,.7],[.62,.5,-.8],[-.62,.5,-.8]].forEach(([n,,s],r)=>{t.push({geo:Wt(.3,.3,.18,10),color:E.dark,pos:[n>0?.7:-.7,.3,s],rot:[0,0,Math.PI/2],jitter:.05}),t.push({geo:Wt(.12,.12,.2,6),color:E.metal,pos:[n>0?.72:-.72,.3,s],rot:[0,0,Math.PI/2],bucket:"metal",jitter:.03}),r<2&&(t.push({geo:Wt(.06,.06,1.1,5),color:E.metalDark,pos:[n>0?.68:-.68,1.6,.72],bucket:"metal",jitter:.03}),t.push({geo:Wt(.06,.06,1.1,5),color:E.metalDark,pos:[n>0?.68:-.68,1.6,-.92],bucket:"metal",jitter:.03}))}),[[.66,.7],[-.66,.7],[.66,-.9],[-.66,-.9]].forEach(([n,s])=>{t.push({geo:Wt(.04,.04,1.1,4),color:E.creamDark,pos:[n,1.62,s],jitter:.03})});const e=fe("cart",t);return e.scale.setScalar(i),e}function uc(i=1){const t=[{geo:it(.56,.1,.5),color:E.metalDark,pos:[0,.05,0],bucket:"metal",jitter:.04},{geo:Wt(.24,.26,.9,6),color:E.coralDark,pos:[0,.55,0],jitter:.06},{geo:Wt(.26,.26,.12,6),color:E.cream,pos:[0,1.02,0],jitter:.05},{geo:Wt(.05,.05,.6,4),color:E.metal,pos:[0,.9,.3],rot:[.9,0,0],bucket:"metal",jitter:.02}];for(let n=0;n<5;n+=1){const s=n/5*Math.PI*2;t.push({geo:Wt(.012,.012,.9,4),color:E.metal,pos:[Math.cos(s)*.14,1.4,Math.sin(s)*.14],rot:[Math.sin(s)*.16,0,-Math.cos(s)*.16],bucket:"metal",jitter:.02}),t.push({geo:it(.1,.04,.06),color:E.metalDark,pos:[Math.cos(s)*.2,1.82,Math.sin(s)*.2],rot:[0,s,.2],bucket:"metal",jitter:.02})}const e=fe("bagstand",t);return e.scale.setScalar(i),e}function z1(i=1){const t=[{geo:new Ae(2.3,2.45,.28,6),color:E.stone,pos:[0,.14,0],jitter:.06},{geo:new Ae(2.5,2.5,.1,6),color:E.stoneDark,pos:[0,.02,0],jitter:.05}],e=2.05;for(let s=0;s<6;s+=1){const r=s/6*Math.PI*2+Math.PI/6,o=Math.cos(r)*e,a=Math.sin(r)*e;t.push({geo:Wt(.1,.13,2.3,5),color:E.woodDark,pos:[o,1.42,a],jitter:.05}),t.push({geo:Wt(.16,.16,.14,5),color:E.stoneLight,pos:[o,.34,a],jitter:.04});const l=(s+1)/6*Math.PI*2+Math.PI/6,c=Math.cos(l)*e,h=Math.sin(l)*e,d=(o+c)/2,f=(a+h)/2,u=Math.hypot(c-o,h-a),p=Math.atan2(c-o,h-a);s!==1&&s!==4&&(t.push({geo:it(.08,.1,u-.3),color:E.woodLight,pos:[d,1,f],rot:[0,p,0],jitter:.05}),t.push({geo:it(.07,.08,u-.3),color:E.wood,pos:[d,.68,f],rot:[0,p,0],jitter:.05}))}t.push({geo:new Ae(2.3,2.6,.16,6),color:E.woodDark,pos:[0,2.62,0],jitter:.05}),t.push({geo:new $e(2.85,1.5,6),color:E.roof,pos:[0,3.42,0],jitter:.09,shade:.2}),t.push({geo:new $e(2.95,.22,6),color:E.roofDark,pos:[0,2.74,0],jitter:.05}),t.push({geo:Wt(.09,.09,.34,6),color:E.woodDark,pos:[0,4.2,0],jitter:.04}),t.push({geo:pe(.15),color:E.gold,pos:[0,4.45,0],bucket:"metal",jitter:.04});const n=fe("gazebo",t);return n.scale.setScalar(i),n}function k1(i=1){const t=[{geo:new Ae(2.2,2.5,.4,8),color:E.stoneDark,pos:[0,.2,0],jitter:.06},{geo:new Ae(1.35,2.05,4.6,8),color:E.cream,pos:[0,2.7,0],jitter:.06,shade:.24},{geo:new Ae(1.45,1.5,.18,8),color:E.stoneDark,pos:[0,1.9,0],jitter:.04},{geo:new Ae(1.38,1.42,.18,8),color:E.stoneDark,pos:[0,3.7,0],jitter:.04},{geo:new $e(1.7,1.15,8),color:E.roof,pos:[0,5.55,0],jitter:.08,shade:.2},{geo:it(.85,1.6,.16),color:E.woodDark,pos:[0,.85,2],jitter:.05},{geo:it(.95,.14,.2),color:E.creamDark,pos:[0,1.9,1.98],jitter:.04},{geo:it(.5,.62,.14),color:E.glass,pos:[0,4.1,1.32],jitter:.03},{geo:it(.58,.7,.1),color:E.woodDark,pos:[0,4.1,1.28],jitter:.03},{geo:Wt(.2,.2,1,6),color:E.woodDark,pos:[0,5.05,1.3],rot:[Math.PI/2,0,0],jitter:.04},{geo:Wt(.3,.3,.4,8),color:E.woodDark,pos:[0,5.05,1.35],rot:[Math.PI/2,0,0],jitter:.04}];for(let n=0;n<4;n+=1){const s=n/4*Math.PI*2,r=Math.cos(s)*1.85,o=Math.sin(s)*1.85;t.push({geo:it(.13,3.6,.09),color:E.woodLight,pos:[r,5.05+o,1.38],rot:[0,0,-s],jitter:.05});for(let a=0;a<3;a+=1){const l=.55+a*.85;t.push({geo:it(.62,.06,.07),color:E.cream,pos:[r+Math.cos(s+Math.PI/2)*.34*(a===1?-1:1),5.05+o+Math.sin(s+Math.PI/2)*.34*(a===1?-1:1),1.4-l*0],rot:[0,0,-s],jitter:.04})}t.push({geo:it(.9,2.9,.05),color:E.cream,pos:[r+Math.cos(s+Math.PI/2)*.5,5.05+o+Math.sin(s+Math.PI/2)*.5,1.42],rot:[0,0,-s],jitter:.05})}const e=fe("windmill",t);return e.scale.setScalar(i),e}function B1(i=6,t=1){const e=[];for(let o=0;o<6;o+=1){const a=(o+.5)/6,l=Math.sin(a*Math.PI)*.9,c=(a-.5)*i;e.push({geo:it(2.2,.16,i/6+.06),color:o%2===0?E.wood:E.woodLight,pos:[0,l,c],rot:[Math.cos(a*Math.PI)*.42,0,0],jitter:.07})}[-1.14,1.14].forEach(o=>{for(let a=0;a<3;a+=1){const l=(a+.5)/3,c=Math.sin(l*Math.PI)*.9,h=(l-.5)*i;e.push({geo:it(.12,.9,.12),color:E.woodDark,pos:[o,c+.5,h],jitter:.05})}for(let a=0;a<2;a+=1){const l=(a+.5)/2,c=Math.sin(l*Math.PI)*.9+.9,h=(l-.5)*i;e.push({geo:it(.1,.1,i*.62),color:E.woodLight,pos:[o,c,h],rot:[0,0,0],jitter:.05})}});const r=fe(`bridge-${i}-6`,e);return r.scale.setScalar(t),r}function lp(i=2.4,t=1){const e=[],n=Math.max(2,Math.round(i/1.6)+1);for(let r=0;r<n;r+=1){const o=-i/2+r/(n-1)*i;e.push({geo:it(.13,1,.13),color:E.woodDark,pos:[o,.5,0],jitter:.06,shade:.15}),e.push({geo:new $e(.11,.16,4),color:E.woodLight,pos:[o,1.08,0],rot:[0,Math.PI/4,0],jitter:.05})}e.push({geo:it(i,.11,.07),color:E.wood,pos:[0,.78,0],jitter:.06}),e.push({geo:it(i,.1,.07),color:E.woodLight,pos:[0,.44,0],jitter:.06});const s=fe(`fence-${i}-${n}`,e);return s.scale.setScalar(t),s}function G1(i=2.6,t=1){const e=[{geo:new Gn(i,.9,.85),color:E.leafDark,pos:[0,.45,0],jitter:.14,shade:.2},{geo:new Gn(i,.14,.92),color:E.leaf,pos:[0,.95,0],jitter:.16}],n=Math.max(2,Math.round(i/.9));for(let r=0;r<n;r+=1)e.push({geo:pe(1),color:r%2===0?E.leaf:E.leafLight,pos:[-i/2+(r+.5)/n*i,1,r%2===0?.12:-.12],scale:[.42,.24,.38],rot:[r*.5,r*1.1,0],jitter:.18});const s=fe(`hedge-${i}`,e);return s.scale.setScalar(t),s}function H1(){const i=[{geo:it(9.6,.4,6.6),color:E.stoneDark,pos:[0,.2,0],jitter:.06},{geo:it(9,.2,6),color:E.stone,pos:[0,.44,0],jitter:.05},{geo:it(8.4,2.5,5.4),color:E.cream,pos:[0,1.9,0],jitter:.05,shade:.12},{geo:it(8.7,.22,5.7),color:E.woodDark,pos:[0,3.18,0],jitter:.05},{geo:it(8.7,.18,5.7),color:E.woodDark,pos:[0,.62,0],jitter:.05}];[[-4.2,-2.7],[4.2,-2.7],[-4.2,2.7],[4.2,2.7]].forEach(([r,o])=>{i.push({geo:it(.26,2.6,.26),color:E.woodDark,pos:[r,1.9,o],jitter:.05})}),i.push({geo:it(8.44,.12,.1),color:E.woodDark,pos:[0,1.6,2.72],jitter:.04}),i.push({geo:it(8.44,.12,.1),color:E.woodDark,pos:[0,1.6,-2.72],jitter:.04});const t=.5;[1,-1].forEach(r=>{i.push({geo:it(5.4,.26,6.9),color:E.roof,pos:[r*2.35,4.58,0],rot:[0,0,r*t],jitter:.08,shade:.18}),i.push({geo:it(5.5,.12,7),color:E.roofDark,pos:[r*2.37,4.44,0],rot:[0,0,r*t],jitter:.05})}),i.push({geo:it(.36,.3,7.1),color:E.roofDark,pos:[0,5.94,0],jitter:.05});const e=new Vc;e.moveTo(-4.15,3.2),e.lineTo(4.15,3.2),e.lineTo(0,5.78),e.closePath();const n=new Ko(e,{depth:.2,bevelEnabled:!1});[1,-1].forEach(r=>{i.push({geo:n,color:E.cream,pos:[0,0,r*2.62],rot:[0,r>0?0:Math.PI,0],jitter:.04})}),i.push({geo:it(7.4,.22,2.2),color:E.wood,pos:[0,.5,3.55],jitter:.06}),i.push({geo:it(7.6,.2,2),color:E.roof,pos:[0,3.24,3.4],rot:[-.1,0,0],jitter:.07}),i.push({geo:it(7.7,.08,2.06),color:E.roofDark,pos:[0,3.12,3.4],rot:[-.1,0,0],jitter:.05}),i.push({geo:it(7.3,.1,1.9),color:E.cream,pos:[0,3.02,3.32],jitter:.04}),[-2.9,-1,1,2.9].forEach(r=>{i.push({geo:it(.18,2.5,.18),color:E.woodDark,pos:[r,1.75,4.35],jitter:.05}),i.push({geo:it(.28,.14,.28),color:E.stoneLight,pos:[r,.54,4.35],jitter:.04})}),[-2,2].forEach(r=>{i.push({geo:it(1.6,.12,.12),color:E.woodLight,pos:[r,1,4.35],jitter:.05}),i.push({geo:it(1.6,.1,.1),color:E.wood,pos:[r,.72,4.35],jitter:.05})}),i.push({geo:it(2.6,.14,.5),color:E.stone,pos:[0,.2,4.75],jitter:.05}),i.push({geo:it(3,.14,.5),color:E.stoneDark,pos:[0,.07,5.15],jitter:.05}),i.push({geo:it(1.5,2.15,.16),color:E.woodDark,pos:[0,1.5,2.72],jitter:.05}),i.push({geo:it(1.7,.16,.2),color:E.woodLight,pos:[0,2.62,2.72],jitter:.04}),i.push({geo:it(.1,2.15,.2),color:E.woodLight,pos:[-.8,1.5,2.72],jitter:.04}),i.push({geo:it(.1,2.15,.2),color:E.woodLight,pos:[.8,1.5,2.72],jitter:.04}),i.push({geo:it(.5,.6,.06),color:E.glass,pos:[0,1.95,2.82],jitter:.03}),i.push({geo:pe(.06),color:E.gold,pos:[.55,1.35,2.84],bucket:"metal",jitter:.03});const s=2.74;return[-2.9,2.9].forEach(r=>{i.push({geo:it(1.3,1.25,.12),color:E.woodLight,pos:[r,1.95,s-.02],jitter:.04}),i.push({geo:it(1.06,1,.14),color:E.glass,pos:[r,1.95,s+.04],jitter:.03}),i.push({geo:it(.08,1,.18),color:E.woodLight,pos:[r,1.95,s+.06],jitter:.03}),i.push({geo:it(1.06,.08,.18),color:E.woodLight,pos:[r,1.95,s+.06],jitter:.03}),i.push({geo:it(1.5,.14,.3),color:E.stone,pos:[r,1.26,s+.06],jitter:.04}),i.push({geo:it(1.1,.26,.34),color:E.woodDark,pos:[r,.82,s+.18],jitter:.04});for(let o=0;o<3;o+=1)i.push({geo:pe(.18),color:o%2===0?E.leaf:E.leafLight,pos:[r-.32+o*.32,1.02,s+.2],jitter:.16}),i.push({geo:pe(.1),color:o%2===0?E.flowerPink:E.flowerYellow,pos:[r-.32+o*.32,1.16,s+.26],jitter:.1})}),[-3,0,3].forEach(r=>{[-4.26,4.26].forEach(o=>{i.push({geo:it(.12,1.2,1.2),color:E.woodLight,pos:[o,1.95,r],jitter:.04}),i.push({geo:it(.14,.96,.96),color:E.glass,pos:[o+Math.sign(o)*.01,1.95,r],jitter:.03})})}),i.push({geo:it(.7,1.7,.7),color:E.stone,pos:[-2.6,5,-1.2],jitter:.06}),i.push({geo:it(.86,.18,.86),color:E.stoneDark,pos:[-2.6,5.9,-1.2],jitter:.05}),i.push({geo:it(3.4,.72,.14),color:E.woodDark,pos:[0,3.05,2.86],jitter:.04}),i.push({geo:it(3.2,.1,.16),color:E.gold,pos:[0,3.34,2.88],bucket:"metal",jitter:.03}),i.push({geo:it(3.2,.1,.16),color:E.gold,pos:[0,2.76,2.88],bucket:"metal",jitter:.03}),[-1.35,1.35].forEach(r=>{i.push({geo:it(.24,.34,.24),color:E.white,pos:[r,2.2,2.82],bucket:"glow",jitter:.02}),i.push({geo:new $e(.2,.16,4),color:E.woodDark,pos:[r,2.45,2.82],rot:[0,Math.PI/4,0],jitter:.03})}),fe("clubhouse",i)}function V1(i=1){const t=[{geo:Wt(.5,.5,.06,8),color:E.woodLight,pos:[0,.74,0],jitter:.05},{geo:Wt(.08,.1,.74,6),color:E.woodDark,pos:[0,.37,0],jitter:.05},{geo:Wt(.06,.06,2.3,5),color:E.creamDark,pos:[0,1.15,0],jitter:.04},{geo:new $e(1.35,.5,8),color:E.coral,pos:[0,2.2,0],jitter:.08},{geo:pe(.08),color:E.woodDark,pos:[0,2.48,0],jitter:.03}];[[.85,0],[-.85,0],[0,.85]].forEach(([n,s])=>{t.push({geo:it(.42,.06,.42),color:E.cream,pos:[n,.46,s],jitter:.04}),t.push({geo:it(.06,.46,.06),color:E.creamDark,pos:[n,.23,s],jitter:.04}),t.push({geo:it(.42,.4,.06),color:E.cream,pos:[n,.66,s+(s>0?.18:-.18)],jitter:.04})});const e=fe("patio",t);return e.scale.setScalar(i),e}function W1(i=1){const t=[{geo:Wt(.22,.3,.3,6),color:E.stoneDark,pos:[0,.15,0],jitter:.05},{geo:Wt(.05,.07,5.2,6),color:E.cream,pos:[0,2.9,0],bucket:"metal",jitter:.03},{geo:pe(.14),color:E.gold,pos:[0,5.56,0],bucket:"metal",jitter:.03},{geo:it(1.5,.9,.05),color:E.coral,pos:[.78,4.85,0],jitter:.07},{geo:it(.9,.5,.06),color:E.cream,pos:[.6,4.85,.01],jitter:.05}],e=fe("flagpole",t);return e.scale.setScalar(i),e}function X1(i=1){const t=v1();if(!t)return null;const e=new Xi({map:t,transparent:!0,opacity:.85,depthWrite:!1}),n=new Ds(e);return n.scale.set(22*i,9*i,1),n}function cp(i,t,e=!1){const n=new Te;n.userData.oneoneDynamic=!0;const s=x1(),r=new qe({color:i,map:s??null,roughness:.32,metalness:.02,transparent:e,opacity:e?.55:1}),o=new qt(new Ln(t,28,20),r);o.castShadow=!e,n.add(o);const a=new qe({color:16777215,roughness:.45,transparent:e,opacity:e?.75:1}),l=new qt(new Ln(t*.22,10,8),a);return l.position.set(0,t*.92,0),n.add(l),n}function hp(i=1){const t=fn(i*71+3),e=[];for(let n=0;n<5;n+=1){const s=t()*Math.PI*2,r=.16+t()*.18;e.push({geo:new $e(.045,r,3),color:t()>.5?E.grassDark:E.grass,pos:[Math.cos(s)*.1,r/2,Math.sin(s)*.1],rot:[Math.cos(s)*.35,s,Math.sin(s)*.35],jitter:.14})}return fe(`tuft-${i%4}`,e)}function Ka(i=2.6,t=1){const e=fn(Math.round(i*131)),n=[],s=3;for(let o=0;o<s;o+=1){const a=Math.max(2,Math.round(i/.85));for(let l=0;l<a;l+=1){const c=i/a*(.86+e()*.1);n.push({geo:it(c,.34,.5),color:[E.stone,E.stoneLight,E.stoneDark][Math.floor(e()*3)],pos:[-i/2+(l+.5)*(i/a)+(e()-.5)*.06,.18+o*.33,(e()-.5)*.06],rot:[0,(e()-.5)*.08,0],jitter:.1,shade:.18})}}n.push({geo:it(i+.1,.1,.62),color:E.stoneDark,pos:[0,1.12,0],jitter:.06});const r=fe(`wall-${i}`,n);return r.scale.setScalar(t),r}ea("pine",()=>{const i=fn(7771),t=[{y:2.5,r:1.28},{y:3.32,r:1.02},{y:4.06,r:.76},{y:4.68,r:.48}],e=[];return t.forEach((n,s)=>{const r=10-s*2;for(let o=0;o<r;o+=1){const a=o/r*Math.PI*2+i()*.5,l=n.r*(.55+i()*.5),c=.16+i()*.16;e.push({geo:pe(1),color:s%2===0?E.pineDark:E.pine,pos:[Math.cos(a)*l,n.y-n.r*.5+i()*.4,Math.sin(a)*l],scale:[c*1.2,c*.7,c*1.2],rot:[i()*3,i()*3,i()*3],jitter:.22,kind:"leaf",realDetail:1})}}),e});ea("tree",()=>{const i=fn(3319),t=[E.leaf,E.leafLight,E.leafDark],e=[];for(let n=0;n<26;n+=1){const s=i()*Math.PI*2,r=Math.acos(2*i()-1),o=.52+i()*.52,a=Math.sin(r)*Math.cos(s)*o,l=2.7+Math.cos(r)*o*.8,c=Math.sin(r)*Math.sin(s)*o,h=.15+i()*.16;e.push({geo:pe(1),color:t[n%t.length],pos:[a,l,c],scale:[h,h*.86,h],rot:[i()*3,i()*3,i()*3],jitter:.24,kind:"leaf",realDetail:1})}return e});ea("bush",()=>{const i=fn(5503),t=[E.leaf,E.leafLight,E.leafDark],e=[];for(let n=0;n<11;n+=1){const s=i()*Math.PI*2,r=i()*.5,o=.12+i()*.13;e.push({geo:pe(1),color:t[n%t.length],pos:[Math.cos(s)*r,.3+i()*.3,Math.sin(s)*r],scale:[o,o*.9,o],rot:[i()*3,i()*3,i()*3],jitter:.24,kind:"leaf",realDetail:1})}return e});ea("rock-",()=>{const i=fn(9137),t=[E.rock,E.rockLight,E.rockDark],e=[];for(let n=0;n<5;n+=1){const s=i()*Math.PI*2,r=.45+i()*.45,o=.07+i()*.1;e.push({geo:pe(1),color:t[Math.floor(i()*t.length)],pos:[Math.cos(s)*r,o*.5,Math.sin(s)*r],scale:[o,o*.7,o],rot:[i()*3,i()*3,i()*3],jitter:.16,kind:"rock",realDetail:1})}return e});const up="oneone:look:v2",dp="oneoneReal";function Y1(){try{const i=localStorage.getItem(up);return i==="real"||i==="toon"?"real":"synty"}catch{return"synty"}}function q1(i){try{localStorage.setItem(up,i)}catch{}}let nn=typeof localStorage>"u"?"synty":Y1();const dc=new Set,na=new Set;let bs=null,Qu=0;function Jc(){return nn}function $1(i){return dc.add(i),()=>dc.delete(i)}function fp(i){if(i===nn){Cs();return}nn=i,q1(i),i==="real"&&cc(bs),Cs(),jc(),mp(),gp(),dc.forEach(t=>t(i))}function Z1(){return fp(nn==="real"?"synty":"real"),nn}function pp(i){na.add(i),yp(i),Mp(i),Qc(i),jc()}function jc(){na.forEach(i=>{i.traverse(t=>{const e=t;if(!e.isLight)return;const n=e.userData;n.baseIntensity===void 0&&(n.baseIntensity=e.intensity);const s=n.baseIntensity;let r=1;nn==="real"&&(e.isHemisphereLight?r=.72:e.isDirectionalLight&&(r=e.castShadow?1:.9)),e.intensity=s*r})})}function Qc(i){nn==="real"?(i.environment=P1(),i.environmentIntensity=.95):(i.environment=null,i.environmentIntensity=1)}function mp(){na.forEach(i=>Qc(i))}function gp(){bs&&(bs.toneMappingExposure=1)}function K1(i){Qu+=i,R1(Qu)}const td=new WeakMap;function xp(i){return i.userData?.[dp]===!0}function J1(i){return typeof i.userData?.oneonePropBucket=="string"&&!xp(i)}function xs(i,t){return i.userData.oneoneGround=!0,t&&(i.userData.oneoneSurface=t),i}function _p(i){const t=i.userData?.oneoneSurface;if(t)return t;const e=i;return e.transparent&&(e.roughness??1)<=.22?"water":"generic"}function vp(i){return _p(i)==="water"}function j1(i){const t=td.get(i);if(t)return t;const e=_p(i),n=i,s=n.color??new Bt(16777215),r=(n.metalness??0)>=.45,o=i.userData?.oneonePlainReal===!0,a=vp(i)?A1({color:2781056,opacity:Math.max(.4,n.opacity??1)}):o?(()=>{const l=new qe({color:s,roughness:n.roughness??.95,metalness:0,flatShading:!1,vertexColors:n.vertexColors===!0,envMapIntensity:.35});return l.userData[dp]=!0,l.userData.oneoneSurface=e,l.name="real-hill",l})():lc(r?"metal":e,{color:s,vertexColors:n.vertexColors===!0,side:n.side,transparent:n.transparent===!0,opacity:n.opacity??1,depthWrite:n.depthWrite??!0,emissive:n.emissive?n.emissive.clone():0,emissiveIntensity:n.emissiveIntensity??1,keepMap:n.map??null,...r?{metalness:Math.max(.65,n.metalness??0),roughness:n.roughness??.3}:{}});return td.set(i,a),a}function Q1(i){const t=i.material;if(!t||Array.isArray(t)||t.isMeshBasicMaterial||xp(t)||t.transparent&&!vp(t))return;const e=j1(t);e!==t&&(Kf(i.geometry),i.userData.syntyMaterial===void 0&&(i.userData.syntyMaterial=t),i.material=e)}function ty(i){const t=i.userData.syntyMaterial;t&&(i.material=t,delete i.userData.syntyMaterial)}function ey(i){const t=i.userData?.propKey;if(!t)return;if(i.userData.realMerged===!0){for(const n of i.children){const s=n.userData?.oneoneVariantOf;n.visible=s?s===nn:nn!=="real"}return}let e=i.userData.realVariant;if(nn==="real"&&!e){const n=ep(t);n&&(i.add(n),i.userData.realVariant=n,e=n)}e&&(e.visible=nn==="real");for(const n of i.children){if(e&&n===e)continue;const s=n.userData?.oneoneVariantOf;if(s){n.visible=s===nn;continue}n.visible=nn!=="real"}}function Mp(i){const t=[];i.traverse(e=>{e.userData?.propKey&&t.push(e),e.userData?.oneoneRealMerged&&(e.visible=nn==="real")}),t.forEach(ey)}function yp(i){i.traverse(t=>{const e=t;if(!e.isMesh||e.isSprite)return;const n=e.material;if(!(Array.isArray(n)||!n))if(nn==="real"){if(J1(n)){e.visible&&(e.userData.lookHidden=!0,e.visible=!1);return}if(e.userData.realRound===!0&&!e.userData.syntyRoundGeometry){const s=qf(Zf(e.geometry,!1),$f);e.userData.syntyRoundGeometry=e.geometry,e.geometry=s}Q1(e)}else{e.userData.lookHidden&&(e.visible=!0,delete e.userData.lookHidden);const s=e.userData.syntyRoundGeometry;s&&(e.geometry.dispose(),e.geometry=s,delete e.userData.syntyRoundGeometry),ty(e)}})}function Cs(i){na.forEach(t=>{yp(t),Mp(t),Qc(t)})}function ny(i){i.traverse(t=>{const e=t;e.isMesh&&(e.userData.lookHidden&&(e.visible=!0,delete e.userData.lookHidden),delete e.userData.syntyMaterial)})}function iy(i){return bs=i,nn==="real"&&cc(bs),gp(),jc(),mp(),{render(t,e){i.render(t,e)},prewarm(){cc(bs),T1(["turf","fairway","green","sand","soil","rock","stone","wood","bark","leaf","water","metal","fabric","skin","generic"])}}}const sy=.46,ls=-.4;function ry(i){const t=new yf(i.map(([s,r])=>new C(s,0,r)),!1,"catmullrom",.4),e=t.getLength(),n=Math.max(16,Math.round(e/.6));return t.getSpacedPoints(n).map(s=>({x:s.x,z:s.z}))}function oy(i,t){const e=i.length,n=[],s=[];for(let T=0;T<e;T+=1){const A=i[Math.max(0,T-1)],v=i[Math.min(e-1,T+1)];let w=v.x-A.x,U=v.z-A.z;const P=Math.hypot(w,U)||1;w/=P,U/=P;const F=-U,k=w;n.push({x:i[T].x+F*t,z:i[T].z+k*t}),s.push({x:i[T].x-F*t,z:i[T].z-k*t})}const r=i[e-1],o=i[Math.max(0,e-2)],a={x:r.x-o.x,z:r.z-o.z},l=Math.hypot(a.x,a.z)||1,c={x:a.x/l,z:a.z/l},h=n[e-1],d={x:h.x-r.x,z:h.z-r.z},f=i[0],u=i[Math.min(e-1,1)],p={x:f.x-u.x,z:f.z-u.z},x=Math.hypot(p.x,p.z)||1,g={x:p.x/x,z:p.z/x},m=s[0],_={x:m.x-f.x,z:m.z-f.z},b=[...n],M=10;for(let T=1;T<=M;T+=1){const A=Math.PI*T/M;b.push({x:r.x+d.x*Math.cos(A)+c.x*Math.sin(A)*t,z:r.z+d.z*Math.cos(A)+c.z*Math.sin(A)*t})}for(let T=e-2;T>=0;T-=1)b.push(s[T]);for(let T=1;T<=M;T+=1){const A=Math.PI*T/M;b.push({x:f.x+_.x*Math.cos(A)-g.x*Math.sin(A)*t,z:f.z+_.z*Math.cos(A)-g.z*Math.sin(A)*t})}return b}function Ja(i,t,e=8,n){const s=i.length,r=[];for(let c=0;c<s;c+=1){const h=i[Math.max(0,c-1)],d=i[Math.min(s-1,c+1)];let f=d.x-h.x,u=d.z-h.z;const p=Math.hypot(f,u)||1;f/=p,u/=p,r.push({x:-u,z:f})}const o=[];for(let c=0;c<s;c+=1){const h=[];for(let d=0;d<=e;d+=1){const f=d/e*2-1;h.push({x:i[c].x+r[c].x*t*f,z:i[c].z+r[c].z*t*f})}o.push(h)}const a=[];for(let c=0;c<s-1;c+=1)for(let h=0;h<e;h+=1){const d=o[c][h],f=o[c][h+1],u=o[c+1][h],p=o[c+1][h+1];n&&!n((d.x+f.x+u.x+p.x)/4,(d.z+f.z+u.z+p.z)/4)||(a.push(d.x,0,d.z,p.x,0,p.z,u.x,0,u.z),a.push(d.x,0,d.z,f.x,0,f.z,p.x,0,p.z))}const l=new Fe;return l.setAttribute("position",new me(a,3)),l.computeVertexNormals(),l}function ed(i,t){return i.map((e,n)=>{const s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)];let o=r.x-s.x,a=r.z-s.z;const l=Math.hypot(o,a)||1;return o/=l,a/=l,{x:e.x-a*t,z:e.z+o*t}})}function nd(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s,s+=1){const o=i[s].x,a=i[s].z,l=i[r].x,c=i[r].z;a>e!=c>e&&t<(l-o)*(e-a)/(c-a+1e-12)+o&&(n=!n)}return n}function ja(i,t,e){let n=1/0;for(let s=0;s<i.length-1;s+=1){const r=i[s],o=i[s+1],a=o.x-r.x,l=o.z-r.z,c=a*a+l*l;let h=c>0?((t-r.x)*a+(e-r.z)*l)/c:0;h=Math.max(0,Math.min(1,h));const d=t-(r.x+a*h),f=e-(r.z+l*h),u=d*d+f*f;u<n&&(n=u)}return Math.sqrt(n)}function ay(i,t,e,n){let s=1/0,r=0;for(let o=0;o<i.length-1;o+=1){const a=i[o],l=i[o+1],c=l.x-a.x,h=l.z-a.z,d=c*c+h*h;let f=d>0?((e-a.x)*c+(n-a.z)*h)/d:0;f=Math.max(0,Math.min(1,f));const u=e-(a.x+c*f),p=n-(a.z+h*f),x=u*u+p*p;x<s&&(s=x,r=t[o]+Math.sqrt(d)*f)}return r}function Qa(i,t,e){const n=(t-i.x)/i.rx,s=(e-i.z)/i.rz;return n*n+s*s<=1}function ly(i,t=[]){const e=new Vc;i.forEach((n,s)=>{const r=n.x,o=-n.z;s===0?e.moveTo(r,o):e.lineTo(r,o)}),e.closePath();for(const n of t){const s=new nc;n.forEach((r,o)=>{const a=r.x,l=-r.z;o===0?s.moveTo(a,l):s.lineTo(a,l)}),s.closePath(),e.holes.push(s)}return e}function id(i,t=56){const e=[];for(let n=0;n<t;n+=1){const s=n/t*Math.PI*2;e.push({x:i.x+Math.cos(s)*i.rx,z:i.z+Math.sin(s)*i.rz})}return e}function sd(i,t,e){const n=ly(i,t),s=new Ko(n,{depth:e,bevelEnabled:!1,curveSegments:4,steps:1});return s.rotateX(-Math.PI/2),s.translate(0,-e,0),s.computeVertexNormals(),s}function $s(i,t,e=56){const n=new ri(1,e);return n.rotateX(-Math.PI/2),n.scale(i,1,t),n}function tl(i,t,e,n,s=56){const r=new Hn(i,t,s);return r.rotateX(-Math.PI/2),r.scale(e,1,n),r}function el(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function cs(i,t,e,n){const s=Math.sin(t*.21+Math.cos(e*.17)*1.6)*Math.cos(e*.19+Math.sin(t*.13)*1.2);return n.setHex(i),n.offsetHSL(0,0,s*.016),n}class rd{constructor(t,e){I(this,"scene");I(this,"hole");I(this,"group",new Te);I(this,"cup",new C);I(this,"tee",new C);I(this,"spec");I(this,"obstacles",[]);I(this,"islandPoly");I(this,"fairwayLine");I(this,"pathArc",[]);I(this,"geometries",[]);I(this,"materials",[]);I(this,"textures",[]);I(this,"waterSurfaces",[]);I(this,"ripples",[]);I(this,"flagCloth",null);I(this,"flagClothBase",null);I(this,"time",0);I(this,"surfaceAt",(t,e)=>{for(const r of this.spec.zones??[])if(r.kind==="water"&&Qa(r,t,e))return{kind:"water",height:-.14};for(const r of this.spec.zones??[])if(r.kind==="bunker"&&Qa(r,t,e))return{kind:"bunker",height:.005};const n=this.spec.green,s=Math.hypot(t-n.x,e-n.z);return s<=n.r?{kind:"green",height:.01}:s<=n.r+1.5?{kind:"fringe",height:.005}:Math.hypot(t-this.tee.x,e-this.tee.z)<=2.1?{kind:"tee",height:0}:ja(this.fairwayLine,t,e)<=this.spec.fairwayWidth?{kind:"fairway",height:0}:this.contains(t,e)?{kind:"rough",height:0}:{kind:"out",height:ls}});this.scene=t,this.hole=e,this.spec=e,this.cup.set(e.cup[0],0,e.cup[1]),this.tee.set(e.tee[0],0,e.tee[1]),this.fairwayLine=ry(e.path),this.islandPoly=oy(this.fairwayLine,e.roughWidth);let n=0;this.pathArc.push(0);for(let s=1;s<this.fairwayLine.length;s+=1)n+=Math.hypot(this.fairwayLine[s].x-this.fairwayLine[s-1].x,this.fairwayLine[s].z-this.fairwayLine[s-1].z),this.pathArc.push(n);this.build(),t.add(this.group)}get surfaceFn(){return this.surfaceAt}contains(t,e){return nd(this.islandPoly,t,e)}isInWater(t,e){return(this.spec.zones??[]).some(n=>n.kind==="water"&&Qa(n,t,e))}get length(){return Math.hypot(this.cup.x-this.tee.x,this.cup.z-this.tee.z)}track(t){return this.geometries.push(t),t}material(t,e){const n=new qe(t);return e&&(n.userData.oneoneSurface=e),this.materials.push(n),n.map&&this.textures.push(n.map),n}groundMaterial(t=.94,e=!0,n){return xs(this.material({vertexColors:!0,roughness:t,flatShading:e},n),n)}addGround(t,e,n,s=.055){const r=Mn(t,n,s);this.geometries.push(r);const o=new qt(r,e);return o.receiveShadow=!0,this.group.add(o),o}addProp(t,e,n,s,r=0){t.position.set(e,n,s),t.rotation.y=r,this.group.add(t)}build(){const t=this.spec,e=this.groundMaterial(.98,!0,"turf"),n=new Si(200,200,34,34);n.rotateX(-Math.PI/2),this.addGround(n,e,(tt,Pt,Tt,J,ot)=>cs(el(Math.floor(tt*.03),Math.floor(Tt*.03))>.45?E.meadow:E.meadowDark,tt,Tt,ot),.06).position.set(t.green.x,ls,t.green.z-6);const r=(t.zones??[]).filter(tt=>tt.kind==="water"),o=(tt,Pt)=>!r.some(Tt=>((tt-Tt.x)/(Tt.rx*1.04))**2+((Pt-Tt.z)/(Tt.rz*1.04))**2<=1),a=r.map(tt=>id(tt)).filter(tt=>tt.every(Pt=>nd(this.islandPoly,Pt.x,Pt.z))),l=this.groundMaterial(.95,!0,"turf"),c=sd(this.islandPoly,a,sy),h=this.addGround(c,l,(tt,Pt,Tt,J,ot)=>J>.6?cs(E.rough,tt,Tt,ot):Pt>-.14?cs(E.roughDark,tt,Tt,ot):Pt>-.3?(ot.setHex(E.soil),ot):(ot.setHex(E.soilDark),ot),.018);h.castShadow=!0;const d=this.groundMaterial(.93,!0,"fairway"),f=this.addGround(Ja(this.fairwayLine,t.fairwayWidth+.42,10,o),d,(tt,Pt,Tt,J,ot)=>(ot.setHex(el(Math.floor(tt*.06),Math.floor(Tt*.06))>.5?E.fairwayDark:E.grassDark),ot),.05);f.position.y=.008;const u=this.addGround(Ja(this.fairwayLine,t.fairwayWidth,10,o),d,(tt,Pt,Tt,J,ot)=>{const z=ay(this.fairwayLine,this.pathArc,tt,Tt),Y=Math.floor(z/7.5)%2===0;return ot.setHex(Y?E.fairway:E.fairwayDark),ot.offsetHSL(0,0,Math.sin(tt*.3+Tt*.21)*.012),ot},.035);u.position.y=.014;const p=this.groundMaterial(.88,!0,"green"),x=this.groundMaterial(.93,!0,"turf");this.addGround(tl(.86,1,t.green.r+3.1,t.green.r+3.1,64),x,(tt,Pt,Tt,J,ot)=>cs(E.grassDark,tt,Tt,ot),.05).position.set(t.green.x,.004,t.green.z),this.addGround($s(t.green.r+1.55,t.green.r+1.55,64),x,(tt,Pt,Tt,J,ot)=>cs(E.fringe,tt,Tt,ot),.05).position.set(t.green.x,.006,t.green.z);const _=this.addGround($s(t.green.r,t.green.r,64),p,(tt,Pt,Tt,J,ot)=>{const z=Math.hypot(tt-t.green.x,Tt-t.green.z)/t.green.r;return ot.setHex(z<.45?E.green:E.greenDark),ot.offsetHSL(0,0,(el(Math.floor(tt*.8),Math.floor(Tt*.8))-.5)*.035),ot},.045);_.position.set(t.green.x,.016,t.green.z),_.castShadow=!1;const b=this.material({color:16777215,transparent:!0,opacity:.26,roughness:.7,depthWrite:!1});[1.4,2.8,4.2].forEach(tt=>{if(tt>t.green.r-.4)return;const Pt=this.track(new Hn(tt-.035,tt,64));Pt.rotateX(-Math.PI/2);const Tt=new qt(Pt,b);Tt.position.set(t.green.x,.022,t.green.z),this.group.add(Tt)});const M=this.groundMaterial(1,!1,"sand");for(const tt of t.zones??[]){if(tt.kind!=="bunker")continue;const Pt=this.addGround(tl(.9,1.1,tt.rx,tt.rz,44),M,(J,ot,z,Y,V)=>(V.setHex(E.sandDark),V),.05);Pt.position.set(tt.x,.026,tt.z),Pt.castShadow=!0,this.addGround($s(tt.rx*.98,tt.rz*.98,44),M,(J,ot,z,Y,V)=>(V.setHex(Math.sin(J*.9+z*.6)>0?E.sand:E.sandLight),V),.05).position.set(tt.x,.021,tt.z)}const T=Yf(.14),A=this.material({color:T?16777215:M1.water,map:T,roughness:.1,metalness:.32,transparent:!0,opacity:.94},"water"),v=this.groundMaterial(1,!1,"soil"),w=this.material({color:15398911,roughness:.5,transparent:!0,opacity:.55},"fabric");for(const tt of r){const Pt=this.track(new Ae(tt.rx,tt.rx*.9,1,40,1,!0));Pt.scale(1,1,tt.rz/tt.rx);const Tt=Mn(Pt,(lt,It,Ht,Qt,N)=>(N.setHex(It>-.5?E.soilLight:E.soilDark),N),.07);this.geometries.push(Tt);const J=new qt(Tt,v);J.position.set(tt.x,-.5,tt.z),J.receiveShadow=!0,this.group.add(J);const ot=$s(tt.rx*.995,tt.rz*.995,52),z=new qt(this.track(ot),A);z.position.set(tt.x,-.14,tt.z),this.group.add(z),this.waterSurfaces.push(z);const Y=this.track(new bi(1,.022,6,56));Y.rotateX(-Math.PI/2),Y.scale(tt.rx,1,tt.rz);const V=new qt(Y,w);V.position.set(tt.x,-.02,tt.z),this.group.add(V);for(let lt=0;lt<3;lt+=1){const It=this.track(new Hn(.92,1,40));It.rotateX(-Math.PI/2),It.scale(tt.rx,1,tt.rz);const Ht=this.material({color:14284543,transparent:!0,opacity:.22,roughness:.3,depthWrite:!1}),Qt=new qt(It,Ht);Qt.position.set(tt.x,-.135,tt.z),Qt.scale.setScalar(.4+lt*.22),this.group.add(Qt),this.ripples.push({mesh:Qt,phase:lt*2.1,base:.4+lt*.22})}const ut=fn(Math.round(tt.x*17+tt.z*31)+91);for(let lt=0;lt<7;lt+=1){const It=lt/7*Math.PI*2+ut()*.4,Ht=tt.rx*(1.02+ut()*.08),Qt=tt.rz*(1.02+ut()*.08),N=tt.x+Math.cos(It)*Ht,Me=tt.z+Math.sin(It)*Qt;this.contains(N,Me)&&(lt%2===0?this.addProp(sp(.9+ut()*.4,lt+1),N,0,Me,ut()*3):this.addProp(ar(.5+ut()*.25,lt+3),N,-.02,Me,ut()*3))}for(let lt=0;lt<3;lt+=1){const It=ut()*Math.PI*2,Ht=ut()*.6;this.addProp(rp(.7+ut()*.5),tt.x+Math.cos(It)*tt.rx*Ht,-.14,tt.z+Math.sin(It)*tt.rz*Ht,ut()*3)}}const U=this.groundMaterial(.9,!1,"fairway"),P=sd(id({x:t.tee[0],z:t.tee[1],rx:2.3,rz:1.8},32),[],.09);this.addGround(P,U,(tt,Pt,Tt,J,ot)=>J>.6?cs(E.fairwayDark,tt,Tt,ot):(ot.setHex(Pt>-.05?E.grassDark:E.soil),ot),.05).position.set(0,.02,0);const k=this.groundMaterial(.95,!1,"stone");this.addGround(tl(.95,1,2.34,1.84,40),k,(tt,Pt,Tt,J,ot)=>(ot.setHex(E.stoneDark),ot),.04).position.set(t.tee[0],.021,t.tee[1]);const D=this.groundMaterial(.7,!1,"fabric");[-1,1].forEach(tt=>{const Pt=new Ae(.055,.07,.3,5),Tt=Mn(Pt,(V,ut,lt,It,Ht)=>(Ht.setHex(ut>.12?E.coral:E.cream),Ht),.04);this.geometries.push(Tt);const J=new qt(Tt,D);J.position.set(t.tee[0]+tt,.18,t.tee[1]-.9),J.castShadow=!0,this.group.add(J);const ot=new Ln(.075,8,6),z=Mn(ot,(V,ut,lt,It,Ht)=>(Ht.setHex(E.coral),Ht),.04);this.geometries.push(z);const Y=new qt(z,D);Y.position.set(t.tee[0]+tt,.37,t.tee[1]-.9),Y.castShadow=!0,this.group.add(Y)});const W=this.material({color:1714724,roughness:.95},"soil"),K=new qt(this.track($s(.19,.19,32)),W);K.position.set(this.cup.x,.022,this.cup.z),this.group.add(K);const X=this.material({color:16249830,roughness:.5},"fabric"),ht=this.track(new bi(.2,.016,8,32));ht.rotateX(-Math.PI/2);const $=new qt(ht,X);$.position.set(this.cup.x,.026,this.cup.z),this.group.add($);const j=new Te,rt=this.material({color:16316658,roughness:.35,metalness:.8},"metal"),Dt=this.material({color:15909198,roughness:.3,metalness:.9},"metal"),Nt=new qt(this.track(new Ae(.02,.022,1.72,8)),rt);Nt.position.y=.86,Nt.castShadow=!0,j.add(Nt);const Q=new qt(this.track(new Ae(.035,.035,.06,8)),Dt);Q.position.y=1.58,j.add(Q);const gt=new qt(this.track(new Ln(.045,8,6)),Dt);gt.position.y=1.74,j.add(gt);const Lt=g1(),Gt=this.material({color:Lt?16777215:16735352,map:Lt,roughness:.72,side:dn},"fabric"),xt=this.track(new Si(.64,.4,10,4));xt.translate(.32,0,0),xt.userData.noSmooth=!0;const Ut=new qt(xt,Gt);Ut.position.set(0,1.44,0),Ut.castShadow=!0,j.add(Ut),this.flagCloth=Ut,this.flagClothBase=xt.getAttribute("position").array.slice(),j.position.set(this.cup.x,0,this.cup.z),this.group.add(j);for(const tt of t.decor??[])this.buildDecor(tt);this.buildCourseDressing();const he=np(this.group);he&&(this.group.add(he),this.geometries.push(...he.userData.geometries)),this.geometries.push(...ip(this.group,new Set(he?[he]:[])))}buildDecor(t){const e=t.s??1,s=this.contains(t.x,t.z)?0:ls,r=t.kind==="pine"?Vo(e):t.kind==="rock"?ar(e,Math.round(t.x*13+t.z*7)):t.kind==="bush"?F1(e):Wo(e);r.position.set(t.x,s,t.z),r.rotation.y=(t.x*7.3+t.z*3.1)%Math.PI,t.kind==="rock"&&(r.position.y=s+.02),this.group.add(r);const o=t.r??.5*e;o>.02&&this.obstacles.push({x:t.x,z:t.z,r:o})}buildCourseDressing(){const t=this.spec,e=fn(1e3+t.index*137),n=t.fairwayWidth,s=(t.zones??[]).filter(u=>u.kind==="water"),r=(u,p)=>!s.some(x=>((u-x.x)/(x.rx*1.04))**2+((p-x.z)/(x.rz*1.04))**2<=1),o=t.index%2===0?1:-1,a=ed(this.fairwayLine,(n+2.3)*o).filter(u=>this.contains(u.x,u.z));if(a.length>6){const u=this.groundMaterial(.98,!1,"sand"),p=this.addGround(Ja(a,.85,3,r),u,(x,g,m,_,b)=>(b.setHex(Math.sin(x*1.1+m*.7)>0?E.sand:E.sandDark),b),.05);p.position.y=.02}const l=this.pathArc[this.pathArc.length-1];[.42,.76].forEach((u,p)=>{const x=l*u;let g=this.fairwayLine[0];for(let T=1;T<this.fairwayLine.length;T+=1)if(this.pathArc[T]>=x){g=this.fairwayLine[T];break}const m=ed(this.fairwayLine,(n+1.5)*o),_=m[Math.min(m.length-1,Math.round(u*m.length))],b=_?_.x:g.x,M=_?_.z:g.z;this.contains(b,M)&&this.group.add((()=>{const T=O1(p===0?E.gold:E.teal,1);return T.position.set(b,0,M),T.rotation.y=e()*.4-.2,T})())});for(let u=0;u<26;u+=1){const p=e()*Math.PI*2,x=n+1.2+e()*(t.roughWidth-n-2.2),g=.06+e()*.9,m=Math.min(this.fairwayLine.length-1,Math.max(0,Math.round(g*(this.fairwayLine.length-1)))),_=this.fairwayLine[m],b=_.x+Math.cos(p)*x*.55,M=_.z+Math.sin(p)*x*.55;if(!this.contains(b,M)||ja(this.fairwayLine,b,M)<n+.5)continue;const T=hp(u+t.index*7);T.position.set(b,.005,M),T.rotation.y=e()*Math.PI,T.scale.setScalar(.8+e()*.6),this.group.add(T)}for(let u=4;u<this.islandPoly.length-4;u+=7){const p=this.islandPoly[u],x={x:p.x*.97,z:p.z*.97},g=x.x,m=x.z;if(!this.contains(g,m)||ja(this.fairwayLine,g,m)<n+1.2)continue;const _=ar(.42+e()*.3,u);_.position.set(g,.02,m),_.rotation.y=e()*Math.PI,this.group.add(_)}const c=t.index%2===0?1:-1,h=op(1);if(h.position.set(t.tee[0]+7.6*c,0,t.tee[1]+3.4),h.rotation.y=c>0?-.4:.4,this.group.add(h),t.index!==0){const u=uc(1);u.position.set(t.tee[0]-6.6*c,0,t.tee[1]+3.2),u.rotation.y=c>0?.5:-.5,this.group.add(u)}if(t.index===0){const u=z1(1);this.group.add(u),u.position.set(-9.4,0,-36.4),u.rotation.y=.5;const p=Ao(1);p.position.set(6.6,0,-20.5),p.rotation.y=-1.1,this.group.add(p);const x=uc(1);x.position.set(-4.6,0,33.4),x.rotation.y=.3,this.group.add(x);const g=Ka(6.5,1);g.position.set(-10.2,0,-8.5),g.rotation.y=.22,this.group.add(g)}else if(t.index===1){const u=(t.zones??[]).find(g=>g.kind==="water");if(u){const g=B1(Math.max(6,u.rz*1.9));g.position.set(u.x,.02,u.z),g.rotation.y=0,this.group.add(g);const m=Ao(1);m.position.set(u.x+u.rx+2.4,0,u.z+1.2),m.rotation.y=-1.4,this.group.add(m)}const p=ap(1);p.position.set(9.6,0,16.5),p.rotation.y=.7,this.group.add(p);const x=Ka(7,1);x.position.set(9.4,0,-18.5),x.rotation.y=-.3,this.group.add(x)}else{const u=k1(1.25);u.position.set(19,ls,-46),u.rotation.y=-.35,this.group.add(u);const p=Ka(7,1);p.position.set(-9.8,0,-30.5),p.rotation.y=.12,this.group.add(p);const x=Ao(1);x.position.set(8.2,0,20.5),x.rotation.y=.8,this.group.add(x)}const d=(t.tee[0]+t.green.x)/2,f=(t.tee[1]+t.green.z)/2;for(let u=0;u<44;u+=1){const p=e()*Math.PI*2,x=62+e()*34,g=d+Math.cos(p)*x,m=f+Math.sin(p)*x;if(this.contains(g,m))continue;const _=u%3===0?Vo(1.7+e()*1.4):Wo(1.6+e()*1.3);_.position.set(g,ls,m),_.rotation.y=e()*Math.PI*2,this.group.add(_)}for(let u=0;u<4;u+=1){const p=lp(2.6,1),x=1.9+u*.5,g=t.roughWidth+5.5,m=Math.cos(x)*g+t.green.x,_=Math.sin(x)*g+(t.tee[1]+t.cup[1])/2;this.contains(m,_)||(p.position.set(m,ls,_),p.rotation.y=x+Math.PI/2,this.group.add(p))}}update(t){this.time+=t;const e=this.time;for(let n=0;n<this.waterSurfaces.length;n+=1){const s=this.waterSurfaces[n];s.position.y=-.14+Math.sin(e*1.5+n)*.008;const r=s.material;r.map&&(r.map.offset.x=e*.012%1,r.map.offset.y=e*.02%1)}for(const n of this.ripples){const s=(e*.32+n.phase)%1;n.mesh.scale.setScalar(n.base*(.9+s*.35));const r=n.mesh.material;r.opacity=.28*(1-s)}if(this.flagCloth&&this.flagClothBase){const n=this.flagCloth.geometry.getAttribute("position"),s=n.array;for(let r=0;r<s.length;r+=3){const o=this.flagClothBase[r],a=this.flagClothBase[r+1],l=Math.sin(o*7+e*4.2)*.05*(o/.64);s[r+2]=this.flagClothBase[r+2]+l,s[r+1]=a+Math.sin(o*5+e*3.1)*.012*(o/.64)}n.needsUpdate=!0,this.flagCloth.geometry.computeVertexNormals()}}dispose(){this.scene.remove(this.group),ny(this.group),this.geometries.forEach(t=>t.dispose()),this.geometries.length=0,this.materials.forEach(t=>t.dispose()),this.materials.length=0,this.textures.forEach(t=>t.dispose()),this.textures.length=0,this.waterSurfaces.length=0,this.ripples.length=0,this.flagCloth=null,this.flagClothBase=null,this.group.clear()}}class cy{constructor(t=.34,e=10){I(this,"yaw",0);I(this,"pitch",.34);I(this,"distance",10);I(this,"targetYaw",0);I(this,"targetPitch",.34);I(this,"targetDistance",10);I(this,"smoothDistance",10);I(this,"smoothPitch",.34);I(this,"smoothPos",new C);I(this,"smoothLook",new C);I(this,"initialized",!1);this.pitch=t,this.targetPitch=t,this.distance=e,this.targetDistance=e,this.smoothDistance=e,this.smoothPitch=t}setAim(t,e=!1){this.targetYaw=t,e&&(this.yaw=t)}setDistance(t){this.targetDistance=t}setPitch(t){this.targetPitch=sr.clamp(t,.08,1.4)}nudgePitch(t){this.setPitch(this.targetPitch+t)}orbitBy(t,e){this.yaw+=-t*.005,this.targetYaw=this.yaw,this.nudgePitch(e*.003)}snap(t,e){this.yaw=this.targetYaw,this.smoothPitch=this.targetPitch,this.smoothDistance=this.targetDistance,this.initialized=!1,this.update(.016,t,e??null,!0)}update(t,e,n,s=!1,r=0){let o=this.targetYaw-this.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this.yaw+=o*(s?1:1-Math.exp(-6*t));const a=s?1:1-Math.exp(-4*t);this.smoothDistance+=(this.targetDistance-this.smoothDistance)*a,this.smoothPitch+=(this.targetPitch-this.smoothPitch)*a;const l=this.smoothDistance,c=l*Math.cos(this.smoothPitch),h=l*Math.sin(this.smoothPitch),d=Math.sin(this.yaw),f=-Math.cos(this.yaw),u=e.x-d*c,p=e.y+h,x=e.z-f*c,g=e.x+d*r,m=e.y+.25+r*.06,_=e.z+f*r;if(!this.initialized||s)this.smoothPos.set(u,p,x),this.smoothLook.set(g,m,_),this.initialized=!0;else{const b=1-Math.exp(-7*t);this.smoothPos.x+=(u-this.smoothPos.x)*b,this.smoothPos.y+=(p-this.smoothPos.y)*b,this.smoothPos.z+=(x-this.smoothPos.z)*b;const M=1-Math.exp(-10*t);this.smoothLook.x+=(g-this.smoothLook.x)*M,this.smoothLook.y+=(m-this.smoothLook.y)*M,this.smoothLook.z+=(_-this.smoothLook.z)*M}n&&(n.position.copy(this.smoothPos),n.lookAt(this.smoothLook))}}class hy{constructor(t){I(this,"scene");I(this,"bursts",[]);I(this,"emojis",[]);I(this,"rings",[]);I(this,"emojiCache",new Map);I(this,"trail");I(this,"trailPositions");I(this,"trailColors");I(this,"trailCount");I(this,"trailFill",0);this.scene=t,this.trailCount=60,this.trailPositions=new Float32Array(this.trailCount*3),this.trailColors=new Float32Array(this.trailCount*3);const e=new Fe;e.setAttribute("position",new Je(this.trailPositions,3)),e.setAttribute("color",new Je(this.trailColors,3));const n=new gf({vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:oi});this.trail=new Am(e,n),this.trail.frustumCulled=!1,this.trail.visible=!1,this.scene.add(this.trail)}trailPush(t,e=new Bt(16773560)){const n=(this.trailCount-1)*3;this.trailPositions.copyWithin(0,3,n+3),this.trailColors.copyWithin(0,3,n+3),this.trailPositions[n]=t.x,this.trailPositions[n+1]=t.y,this.trailPositions[n+2]=t.z,this.trailColors[n]=e.r,this.trailColors[n+1]=e.g,this.trailColors[n+2]=e.b;for(let r=0;r<this.trailCount-1;r+=1){const o=1-r/(this.trailCount-1),a=Math.pow(o,1.7)*.85;this.trailColors[r*3]*=.86+.14*a,this.trailColors[r*3+1]*=.86+.14*a,this.trailColors[r*3+2]*=.86+.14*a}this.trailFill=Math.min(this.trailCount,this.trailFill+1),this.trail.visible=!0;const s=this.trail.geometry;s.getAttribute("position").needsUpdate=!0,s.getAttribute("color").needsUpdate=!0}trailFade(t){if(!this.trail.visible)return;let e=0;for(let s=0;s<this.trailCount;s+=1){const r=Math.max(0,1-t*1.15);this.trailColors[s*3]*=r,this.trailColors[s*3+1]*=r,this.trailColors[s*3+2]*=r,this.trailColors[s*3]>.01&&(e+=1)}const n=this.trail.geometry.getAttribute("color");n.needsUpdate=!0,e===0&&this.clearTrail()}clearTrail(){this.trail.visible=!1,this.trailFill=0,this.trailColors.fill(0),this.trailPositions.fill(0);const t=this.trail.geometry.getAttribute("color");t.needsUpdate=!0}spawnBurst(t,e,n,s,r,o,a,l,c=.12,h=!1){const d=new Float32Array(n*3),f=new Float32Array(n*3),u=new Float32Array(n*3),p=new Bt;for(let _=0;_<n;_+=1){const b=Math.random()*Math.PI*2,M=Math.random()*s;d[_*3]=t.x+(Math.random()-.5)*c,d[_*3+1]=t.y+Math.random()*c*.6,d[_*3+2]=t.z+(Math.random()-.5)*c,u[_*3]=Math.cos(b)*M,u[_*3+1]=r*(.4+Math.random()*.9),u[_*3+2]=Math.sin(b)*M,p.setHex(e[Math.floor(Math.random()*e.length)]),f[_*3]=p.r,f[_*3+1]=p.g,f[_*3+2]=p.b}const x=new Fe;x.setAttribute("position",new Je(d,3)),x.setAttribute("color",new Je(f,3));const g=new xf({size:o,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,sizeAttenuation:!0,blending:h?oi:Ms}),m=new Rm(x,g);m.frustumCulled=!1,this.scene.add(m),this.bursts.push({points:m,velocities:u,material:g,life:a,maxLife:a,gravity:l})}confetti(t,e=!1){const n=[16743001,16763981,5032432,10151534,12160255,16777215,16748465];this.spawnBurst(t,n,e?180:100,e?4.2:3,e?6.4:4.6,.13,2.6,7.2,.2),this.ring(t,.35,e?6.5:4.5,.7,e?16771496:16777215)}spark(t,e){e==="perfect"?(this.spawnBurst(t,[16774856,16769154,16777215,16765286],46,2.6,3.4,.09,.75,3.5,.1,!0),this.ring(t,.25,2.4,.5,16773304)):e==="good"?this.spawnBurst(t,[16777215,14480073],22,1.6,2.2,.07,.5,4,.08):this.spawnBurst(t,[13624496,10142842],16,1.2,1.4,.07,.5,5,.08)}divot(t,e){if(e==="bunker"){this.spawnBurst(t,[15983546,14929825,13482120],26,1.6,2.4,.11,.9,6.5,.12);return}if(e==="water"){this.splash(t);return}const n=e==="green"||e==="fringe"?[11989134,9361514,14678216]:[10147959,7780693,13822384];this.spawnBurst(t,n,22,1.3,1.9,.09,.7,6,.12)}splash(t){const e=[12578815,16777215,7327986];this.spawnBurst(t,e,70,2.2,3.8,.1,1.05,9,.16),this.ring(t,.2,2.2,.7,14219007)}tap(t){this.spawnBurst(t,[16777215,14480073],12,.8,1.1,.06,.5,4,.08)}ring(t,e,n,s,r=16777215){const o=new Hn(.9,1,40);o.rotateX(-Math.PI/2);const a=new bn({color:r,transparent:!0,opacity:.85,side:dn,depthWrite:!1,blending:oi}),l=new qt(o,a);l.position.set(t.x,Math.max(.03,t.y-.06),t.z),l.scale.setScalar(e),this.scene.add(l),this.rings.push({mesh:l,material:a,life:s,maxLife:s,from:e,to:n})}emojiTexture(t){const e=this.emojiCache.get(t);if(e)return e;const n=document.createElement("canvas");n.width=128,n.height=128;const s=n.getContext("2d");s&&(s.clearRect(0,0,128,128),s.font='96px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(t,64,72));const r=new Is(n);return r.colorSpace=ke,this.emojiCache.set(t,r),r}emoji(t,e){if(typeof document>"u")return;const n=new Xi({map:this.emojiTexture(e),transparent:!0,depthWrite:!1}),s=new Ds(n);s.scale.set(.62,.62,1),s.position.copy(t).add(new C(0,.55,0)),this.scene.add(s),this.emojis.push({sprite:s,life:1.9,maxLife:1.9,drift:(Math.random()-.5)*.35})}update(t){for(let e=this.bursts.length-1;e>=0;e-=1){const n=this.bursts[e];if(n.life-=t,n.life<=0){this.scene.remove(n.points),n.points.geometry.dispose(),n.material.dispose(),this.bursts.splice(e,1);continue}const s=n.points.geometry.getAttribute("position"),r=s.array,o=Math.max(0,1-t*1.1);for(let a=0;a<r.length;a+=3)n.velocities[a+1]-=n.gravity*t,n.velocities[a]*=o,n.velocities[a+2]*=o,r[a]+=n.velocities[a]*t,r[a+1]+=n.velocities[a+1]*t,r[a+2]+=n.velocities[a+2]*t;s.needsUpdate=!0,n.material.opacity=Math.min(1,n.life/(n.maxLife*.6))}for(let e=this.rings.length-1;e>=0;e-=1){const n=this.rings[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.material.dispose(),this.rings.splice(e,1);continue}const s=1-n.life/n.maxLife,r=n.from+(n.to-n.from)*s;n.mesh.scale.setScalar(r),n.material.opacity=.85*(1-s)}for(let e=this.emojis.length-1;e>=0;e-=1){const n=this.emojis[e];if(n.life-=t,n.life<=0){this.scene.remove(n.sprite),n.sprite.material.dispose(),this.emojis.splice(e,1);continue}const s=1-n.life/n.maxLife;n.sprite.position.y+=t*.7,n.sprite.position.x+=t*n.drift,n.sprite.material.opacity=Math.min(1,(1-s)*1.8);const r=.62+Math.sin(s*Math.PI)*.12;n.sprite.scale.set(r,r,1)}this.trailFade(t)}clear(){this.bursts.forEach(t=>{this.scene.remove(t.points),t.points.geometry.dispose(),t.material.dispose()}),this.bursts.length=0,this.rings.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.material.dispose()}),this.rings.length=0,this.emojis.forEach(t=>{this.scene.remove(t.sprite),t.sprite.material.dispose()}),this.emojis.length=0,this.clearTrail()}}const Ye=.115,uy=.16,od=.62,dy=.0042,ad={x:.35,z:-.22},Ps=.18,fy=5,py=1.25,my=1,gy=1.3,Sp=.15,bp=.13,xy=.95,_y=.68,Fi=[{name:"코랄",hex:"#ff7a59"},{name:"라임",hex:"#9ae66e"},{name:"스카이",hex:"#4cc9f0"},{name:"바이올렛",hex:"#b98cff"},{name:"망고",hex:"#ffcc4d"},{name:"로즈",hex:"#ff8fb1"}],ld=["버디헌터","원온이","핑크공","싱커","그린킬러","파이어볼","털보골퍼","이븐파","캐디","홀인원"],vy=["👏","🔥","⛳","😂"],My=["👋","⛳","🔥","👏","😂","🎉"];function th(){const i=ld[Math.floor(Math.random()*ld.length)],t=Math.floor(Math.random()*90)+10;return`${i}${t}`}const lr=16768952,nl=15318160,yy=2372152,il=12757885,cd=10521184,Zs={armR:-.46,armL:-.32,wrist:0,torso:0,lean:0,dip:0},Sy={armR:2.55,armL:2.1,wrist:-.15,torso:-.5,lean:.08,dip:-.04},by={armR:-.5,armL:-.4,wrist:.12,torso:.16,lean:-.03,dip:-.06},wy={armR:-1.9,armL:-1.6,wrist:.5,torso:.45,lean:-.05,dip:-.04},hd={armR:-.56,armL:-.44,wrist:0,torso:0,lean:0,dip:-.05},Ey={armR:.5,armL:.4,wrist:-.16,torso:-.07,lean:0,dip:-.06},Ty={armR:-.62,armL:-.5,wrist:.08,torso:.04,lean:0,dip:-.06},Ay={armR:-.98,armL:-.82,wrist:.18,torso:.06,lean:0,dip:-.05};function po(i,t,e){const n=Math.max(0,Math.min(1,e)),s=n*n*(3-2*n);return{armR:i.armR+(t.armR-i.armR)*s,armL:i.armL+(t.armL-i.armL)*s,wrist:i.wrist+(t.wrist-i.wrist)*s,torso:i.torso+(t.torso-i.torso)*s,lean:i.lean+(t.lean-i.lean)*s,dip:i.dip+(t.dip-i.dip)*s}}function wp(i,t,e,n,s,r){const o=Math.max(0,Math.min(r,n/2,s/2));i.beginPath(),i.moveTo(t+o,e),i.lineTo(t+n-o,e),i.quadraticCurveTo(t+n,e,t+n,e+o),i.lineTo(t+n,e+s-o),i.quadraticCurveTo(t+n,e+s,t+n-o,e+s),i.lineTo(t+o,e+s),i.quadraticCurveTo(t,e+s,t,e+s-o),i.lineTo(t,e+o),i.quadraticCurveTo(t,e,t+o,e),i.closePath()}function fc(i,t,e={}){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=e.canvasWidth??320,n.height=e.canvasHeight??96;const s=n.getContext("2d");if(!s)return null;const r=e.fontSize??40,o=i.length>10?`${i.slice(0,10)}…`:i;s.clearRect(0,0,n.width,n.height),s.font=`800 ${r}px "Pretendard", -apple-system, system-ui, sans-serif`;const a=s.measureText(o).width,l=!!t,c=Math.min(n.width-8,a+r*(l?1.75:.9)),h=r*1.5,d=(n.width-c)/2,f=(n.height-h)/2;s.fillStyle=e.bg??"rgba(20, 44, 52, 0.82)",wp(s,d,f,c,h,h/2),s.fill();let u=d+r*.5;l&&(s.fillStyle=t,s.beginPath(),s.arc(d+h*.46,n.height/2,h*.17,0,Math.PI*2),s.fill(),u=d+h*.78+r*.1),s.fillStyle="#ffffff",s.textAlign="left",s.textBaseline="middle",s.fillText(o,u,n.height/2+1);const p=new Is(n);p.colorSpace=ke;const x=new Xi({map:p,transparent:!0,depthWrite:!1}),g=new Ds(x),m=e.scale??[1.15,.345];return g.scale.set(m[0],m[1],1),g.renderOrder=3,g}const ud=new Map;function Ry(i){if(typeof document>"u")return null;let t=ud.get(i);if(!t){const s=document.createElement("canvas");s.width=192,s.height=192;const r=s.getContext("2d");if(!r)return null;r.clearRect(0,0,192,192),r.fillStyle="rgba(255, 255, 255, 0.97)",r.strokeStyle="rgba(22, 50, 59, 0.16)",r.lineWidth=4,wp(r,16,8,160,138,46),r.fill(),r.stroke(),r.beginPath(),r.moveTo(80,141),r.lineTo(96,178),r.lineTo(114,141),r.closePath(),r.fillStyle="rgba(255, 255, 255, 0.97)",r.fill(),r.font='92px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(i,96,80),t=new Is(s),t.colorSpace=ke,ud.set(i,t)}const e=new Xi({map:t,transparent:!0,depthWrite:!1}),n=new Ds(e);return n.scale.set(.72,.72,1),n.renderOrder=4,n}class Ro{constructor(t){I(this,"group",new Te);I(this,"root",new Te);I(this,"armL",new Te);I(this,"armR",new Te);I(this,"footL");I(this,"footR");I(this,"clubHeads");I(this,"clubPivot",null);I(this,"ring");I(this,"holdsClub");I(this,"label",null);I(this,"disposables",[]);I(this,"phase",Math.random()*Math.PI*2);I(this,"clock",Math.random()*10);I(this,"addressing",!1);I(this,"charge",0);I(this,"chargeSmooth",0);I(this,"swing",null);I(this,"poseOverride",null);const e=new Bt(t.color),n=e.getHex(),s=n;this.root.position.y=0,this.group.userData.oneoneDynamic=!0,this.group.add(this.root);const r=fe(`golfer-body-${n.toString(16)}`,Cy(s));r.position.y=0,this.root.add(r);const o=Py();if(this.footL=fe("golfer-shoe",o),this.footL.position.set(-.115,.075,.02),this.footR=fe("golfer-shoe",o),this.footR.position.set(.115,.075,.02),this.root.add(this.footL,this.footR),this.armL.position.set(-.245,1.45,0),this.armR.position.set(.245,1.45,0),this.armL.rotation.z=.2,this.armR.rotation.z=-.2,this.armL.add(fe(`golfer-arm-left-${n.toString(16)}`,dd(s,!0))),this.armR.add(fe(`golfer-arm-right-${n.toString(16)}`,dd(s,!1))),this.root.add(this.armL,this.armR),this.clubHeads={driver:fe("golfer-club-head-driver",sl("driver")),iron:fe("golfer-club-head-iron",sl("iron")),putter:fe("golfer-club-head-putter",sl("putter"))},t.club){this.holdsClub=!0;const a=new Te;a.add(fe("golfer-club",Ly())),Object.entries(this.clubHeads).forEach(([c,h])=>{h.visible=c===(t.clubType??"iron"),a.add(h)});const l=new Te;l.position.set(0,-.6,.01),a.position.set(0,.6,-.01),l.add(a),this.armR.add(l),this.clubPivot=l,this.armR.rotation.x=-.3}else this.holdsClub=!1;if(t.name&&this.setName(t.name,t.color),t.glow){const a=this.track(new qe({color:e,emissive:e,emissiveIntensity:1.1,transparent:!0,opacity:.9,roughness:.4})),l=this.track(new bi(.46,.03,8,34));this.ring=new qt(l,a),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.02,this.group.add(this.ring)}else this.ring=null}track(t){return this.disposables.push(t),t}setName(t,e){if(this.label){this.group.remove(this.label);const s=this.label.material;s.map?.dispose(),s.dispose(),this.label=null}const n=fc(t,e);n&&(n.position.set(0,2.12,0),this.group.add(n),this.label=n)}setVisible(t){this.group.visible=t}setClubLook(t){this.holdsClub&&Object.entries(this.clubHeads).forEach(([e,n])=>{n.visible=e===t})}setAddressing(t){this.addressing=t}setCharge(t){const e=Math.max(0,Math.min(1,Number.isFinite(t)?t:0));this.charge=e}playSwing(t="full"){const e=t==="putt";this.swing={t:0,duration:e?_y:xy,impact:e?bp:Sp,style:t,from:this.currentPose()},this.charge=0,this.chargeSmooth=0}get isSwinging(){return this.swing!==null}currentPose(){return this.swing?this.swingPose(this.swing):this.chargePose()}debugInfo(){return{charge:this.charge,smooth:this.chargeSmooth,addressing:this.addressing,holdsClub:this.holdsClub,swinging:this.swing!==null,armR:this.armR.rotation.x,wrist:this.clubPivot?.rotation.x??0,torso:this.root.rotation.y}}debugPose(t){this.poseOverride=t?{...Zs,...t}:null}chargePose(){const t=this.clubHeads.putter.visible?"putt":"full",e=t==="putt"?hd:Zs,n=t==="putt"?Ey:Sy,s=Math.sin(this.clock*1.6)*.02,r=po(e,n,this.chargeSmooth);return{...r,armR:r.armR+s,armL:r.armL+s}}swingPose(t){const e=t.style==="putt",n=e?hd:Zs,s=e?Ty:by,r=e?Ay:wy,o=t.impact+(t.duration-t.impact)*.45;if(t.t<=t.impact){const l=t.impact<=0?1:t.t/t.impact,c=l*l;return po(t.from,s,c)}if(t.t<=o){const l=(t.t-t.impact)/Math.max(.01,o-t.impact);return po(s,r,Math.min(1,l*1.15))}const a=(t.t-o)/Math.max(.01,t.duration-o);return po(r,n,a)}applyPose(t){this.armR.rotation.x=t.armR,this.armL.rotation.x=t.armL,this.clubPivot&&(this.clubPivot.rotation.x=t.wrist);const e=Math.min(1,Math.abs(t.torso)*2.2);this.armR.rotation.z=-.2+e*.12,this.armL.rotation.z=.2-e*.12,this.root.rotation.y=t.torso,this.root.rotation.z=t.lean,this.root.position.y=t.dip;const n=t.torso*.14;this.footL.position.z=.02+n,this.footR.position.z=.02-n,this.footL.position.y=.075,this.footR.position.y=.075}update(t,e){if(this.clock+=t,this.poseOverride){this.applyPose(this.poseOverride);return}if(this.swing)if(this.swing.t+=t,this.swing.t>=this.swing.duration)this.swing=null,this.applyPose(this.holdsClub?Zs:{...Zs,armR:0,armL:0}),this.root.rotation.y=0,this.root.rotation.z=0,this.root.position.y=0,this.footL.position.z=.02,this.footR.position.z=.02;else{this.applyPose(this.swingPose(this.swing));return}const n=this.addressing&&this.holdsClub?this.charge:0;if(this.chargeSmooth+=(n-this.chargeSmooth)*(1-Math.exp(-22*t)),this.addressing&&this.holdsClub)this.applyPose(this.chargePose());else{this.chargeSmooth=0,e&&(this.phase+=t*9.6);const s=e?Math.sin(this.phase):0;this.root.position.y=e?Math.abs(Math.sin(this.phase))*.05:Math.sin(this.clock*2.1)*.008,this.root.rotation.y=0,this.root.rotation.z=0,this.armL.rotation.x=s*.5,this.armR.rotation.z=-.2,this.armL.rotation.z=.2,this.holdsClub?this.armR.rotation.x=-.3:this.armR.rotation.x=-s*.4,this.footL.position.z=.02+s*.085,this.footR.position.z=.02-s*.085,this.footL.position.y=.075+Math.max(0,s)*.04,this.footR.position.y=.075+Math.max(0,-s)*.04}if(this.ring){const s=1+Math.sin(this.clock*2.6)*.07;this.ring.scale.set(s,s,1);const r=this.ring.material;r.emissiveIntensity=.9+Math.sin(this.clock*2.6)*.35}}dispose(){if(this.label){const t=this.label.material;t.map?.dispose(),t.dispose(),this.label=null}this.disposables.forEach(t=>t.dispose()),this.disposables.length=0,this.group.clear()}}function Cy(i){const t=[];return[-.125,.125].forEach(e=>{t.push({geo:Wt(.086,.098,.46,6),color:il,pos:[e,.71,0],jitter:.05,shade:.2}),t.push({geo:Wt(.074,.086,.4,6),color:il,pos:[e,.32,0],jitter:.05,shade:.2}),t.push({geo:Wt(.09,.09,.07,6),color:cd,pos:[e,.15,0],jitter:.04}),t.push({geo:Wt(.092,.092,.03,6),color:cd,pos:[e,.52,0],jitter:.03})}),t.push({geo:it(.32,.2,.22),color:il,pos:[0,.95,0],jitter:.05}),t.push({geo:it(.34,.065,.24),color:2826008,pos:[0,1.035,0],jitter:.04}),t.push({geo:it(.08,.07,.02),color:E.gold,pos:[0,1.035,.125],bucket:"metal",jitter:.03}),t.push({geo:Wt(.19,.168,.46,6),color:i,pos:[0,1.28,0],rot:[0,Math.PI/6,0],jitter:.06,shade:.2}),t.push({geo:Wt(.174,.176,.05,6),color:i,pos:[0,1.06,0],rot:[0,Math.PI/6,0],jitter:.03}),t.push({geo:it(.045,.3,.03),color:16777215,pos:[0,1.3,.175],jitter:.02}),[1.18,1.28,1.38].forEach(e=>{t.push({geo:pe(.018),color:E.cream,pos:[.025,e,.19],jitter:.02})}),t.push({geo:it(.1,.1,.02),color:i,pos:[-.1,1.32,.172],jitter:.03}),t.push({geo:Wt(.098,.104,.11,6),color:i,pos:[-.215,1.45,0],jitter:.05}),t.push({geo:Wt(.098,.104,.11,6),color:i,pos:[.215,1.45,0],jitter:.05}),t.push({geo:Wt(.092,.112,.07,6),color:16777215,pos:[0,1.53,0],rot:[0,Math.PI/6,0],jitter:.03}),t.push({geo:it(.11,.05,.1),color:16777215,pos:[0,1.52,.1],rot:[.32,0,0],jitter:.03}),t.push({geo:Wt(.062,.072,.1,6),color:nl,pos:[0,1.57,0],jitter:.03}),t.push({geo:it(.23,.25,.23),color:lr,pos:[0,1.72,0],jitter:.04,shade:.12}),t.push({geo:it(.2,.06,.2),color:nl,pos:[0,1.6,.005],jitter:.03}),t.push({geo:it(.055,.06,.05),color:lr,pos:[0,1.69,.125],jitter:.03}),[-.12,.12].forEach(e=>{t.push({geo:it(.03,.08,.06),color:nl,pos:[e,1.71,0],jitter:.03}),t.push({geo:it(.04,.05,.02),color:yy,pos:[e*.42,1.745,.118],jitter:.02}),t.push({geo:it(.06,.016,.025),color:3877408,pos:[e*.42,1.785,.118],jitter:.02})}),t.push({geo:it(.055,.012,.02),color:9068370,pos:[0,1.625,.118],jitter:.02}),t.push({geo:it(.235,.14,.07),color:4863271,pos:[0,1.72,-.095],jitter:.05}),t.push({geo:Wt(.126,.132,.1,6),color:16777215,pos:[0,1.88,-.01],rot:[0,Math.PI/6,0],jitter:.04}),t.push({geo:Wt(.136,.138,.035,6),color:i,pos:[0,1.828,-.01],rot:[0,Math.PI/6,0],jitter:.03}),t.push({geo:it(.27,.028,.16),color:16777215,pos:[0,1.822,.145],rot:[-.13,0,0],jitter:.03}),t.push({geo:pe(.026),color:i,pos:[0,1.94,-.01],jitter:.02}),t}function Py(){return[{geo:it(.15,.05,.34),color:E.creamDark,pos:[0,-.05,.02],jitter:.03},{geo:it(.14,.1,.27),color:16777215,pos:[0,0,-.01],jitter:.04},{geo:it(.13,.075,.11),color:16777215,pos:[0,-.02,.15],jitter:.04},{geo:it(.1,.02,.08),color:E.metalDark,pos:[0,.05,.07],jitter:.02},{geo:Wt(.07,.076,.06,6),color:E.cream,pos:[0,.075,-.02],jitter:.03}]}function dd(i,t){return[{geo:Wt(.072,.082,.22,6),color:i,pos:[0,-.11,0],jitter:.05,shade:.18},{geo:Wt(.084,.084,.04,6),color:16777215,pos:[0,-.235,0],jitter:.03},{geo:Wt(.05,.058,.18,6),color:lr,pos:[0,-.34,0],jitter:.04},{geo:Wt(.045,.051,.17,6),color:lr,pos:[0,-.51,0],jitter:.04},{geo:Wt(.055,.055,.03,6),color:16777215,pos:[0,-.595,0],jitter:.02},{geo:it(.075,.1,.085),color:t?E.cream:lr,pos:[0,-.66,.01],jitter:.03}]}function Ly(){return[{geo:Wt(.019,.019,.17,6),color:2830648,pos:[0,-.62,.02],rot:[.1,0,0],jitter:.03},{geo:Wt(.013,.016,.62,6),color:E.metal,pos:[0,-.99,.13],rot:[.24,0,0],bucket:"metal",jitter:.03},{geo:Wt(.017,.02,.06,6),color:E.metalDark,pos:[0,-1.25,.21],rot:[.24,0,0],bucket:"metal",jitter:.03}]}function sl(i){return i==="driver"?[{geo:it(.19,.11,.15),color:3819090,pos:[0,-1.29,.245],rot:[.2,.1,0],jitter:.05},{geo:it(.2,.03,.15),color:E.metal,pos:[0,-1.34,.245],rot:[.2,.1,0],bucket:"metal",jitter:.03},{geo:it(.06,.04,.09),color:E.coral,pos:[.09,-1.275,.21],jitter:.03}]:i==="putter"?[{geo:it(.2,.05,.1),color:3819090,pos:[0,-1.295,.225],rot:[.1,0,0],jitter:.04},{geo:it(.16,.015,.09),color:E.cream,pos:[0,-1.32,.225],jitter:.03},{geo:it(.03,.1,.03),color:E.metalDark,pos:[0,-1.26,.2],bucket:"metal",jitter:.02}]:[{geo:it(.13,.1,.03),color:E.metal,pos:[0,-1.295,.225],rot:[.28,0,0],bucket:"metal",jitter:.03},{geo:it(.11,.04,.05),color:E.metalDark,pos:[0,-1.35,.235],rot:[.28,0,0],bucket:"metal",jitter:.03},{geo:pe(.03),color:E.metalDark,pos:[0,-1.25,.21],bucket:"metal",jitter:.02}]}const Ui={tee:{height:0,friction:6.4,restitution:.3,keep:.56},fairway:{height:0,friction:6.6,restitution:.3,keep:.55},fringe:{height:.005,friction:2.7,restitution:.26,keep:.7},green:{height:.01,friction:1.55,restitution:.22,keep:.72},rough:{height:0,friction:11,restitution:.18,keep:.42},bunker:{height:.005,friction:18,restitution:.05,keep:.28},water:{height:-.14,friction:6,restitution:.05,keep:.3},out:{height:-.4,friction:6,restitution:.1,keep:.4}};class Ep{constructor(){I(this,"x",0);I(this,"y",Ye);I(this,"z",0);I(this,"vx",0);I(this,"vy",0);I(this,"vz",0);I(this,"airborne",!1);I(this,"rolling",!1);I(this,"stopped",!0);I(this,"surface","fairway");I(this,"elapsed",0);I(this,"curveAccel",0);I(this,"rightX",1);I(this,"rightZ",0);I(this,"restTimer",0);I(this,"hazard",!1)}launch(t,e="fairway"){const n=t.loft*Math.PI/180,s=Math.cos(n),r=Math.sin(n),o=Math.sin(t.yaw),a=-Math.cos(t.yaw);this.vx=o*t.speed*s,this.vz=a*t.speed*s,this.vy=t.speed*r,this.curveAccel=(t.curve??0)*6.2,this.rightX=Math.cos(t.yaw),this.rightZ=Math.sin(t.yaw),this.airborne=n>.001,this.rolling=!this.airborne,this.stopped=!1,this.elapsed=0,this.restTimer=0,this.hazard=!1,this.surface=e,this.airborne&&(this.y=Math.max(this.y,Ui[e].height+Ye+.002))}launchRoll(t,e,n="green"){this.vx=Math.sin(e)*t,this.vz=-Math.cos(e)*t,this.vy=0,this.curveAccel=0,this.airborne=!1,this.rolling=!0,this.stopped=!1,this.elapsed=0,this.restTimer=0,this.hazard=!1,this.surface=n,this.y=Ui[n].height+Ye}get speed(){return Math.hypot(this.vx,this.vy,this.vz)}get horizontalSpeed(){return Math.hypot(this.vx,this.vz)}step(t,e){const n=[];return this.stopped||t<=0||(this.elapsed+=t,this.airborne?this.stepAir(t,e,n):this.rolling&&this.stepRoll(t,e,n)),n}stepAir(t,e,n){const s=dy*this.speed,r=this.curveAccel*Math.exp(-this.elapsed/1.15);if(this.vx+=(-this.vx*s+ad.x+this.rightX*r)*t,this.vy+=(-9.81-this.vy*s)*t,this.vz+=(-this.vz*s+ad.z+this.rightZ*r)*t,this.x,this.y,this.z,this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t,e.obstacles&&this.y<2.4)for(const l of e.obstacles){const c=this.x-l.x,h=this.z-l.z,d=Math.hypot(c,h);if(d>1e-4&&d<l.r+Ye){const f=c/d,u=h/d;this.x=l.x+f*(l.r+Ye),this.z=l.z+u*(l.r+Ye);const p=this.vx*f+this.vz*u;this.vx=(this.vx-2*p*f)*.45,this.vz=(this.vz-2*p*u)*.45,this.vy*=.7,n.push({type:"obstacle",x:this.x,y:this.y,z:this.z,strength:Math.min(1,Math.hypot(this.vx,this.vz)/20)});break}}const o=e.surfaceAt(this.x,this.z),a=Ui[o.kind].height+Ye;if(o.kind==="water"){const l=Ui.water.height+Ye*.5;if(this.y<=l){this.x=this.x,this.y=l,this.vx=this.vx*.2,this.vz=this.vz*.2,this.vy=0,this.stopped=!0,this.airborne=!1,this.surface="water",this.hazard=!0,n.push({type:"water",x:this.x,y:this.y,z:this.z});return}}if(this.y<=a&&this.vy<=0){const l=Ui[o.kind];if(this.y=a,this.surface=o.kind,o.kind==="out"){this.stopped=!0,this.airborne=!1,n.push({type:"out",x:this.x,y:this.y,z:this.z});return}const c=Math.abs(this.vy),h=c/Math.max(1.2,this.horizontalSpeed),d=Math.min(.5,h*.55);this.vy=c*l.restitution,this.vx*=l.keep*(1-d),this.vz*=l.keep*(1-d);const f=this.vy>1.05;n.push(f?{type:"bounce",x:this.x,y:this.y,z:this.z,surface:o.kind,strength:Math.min(1,c/9)}:{type:"land",x:this.x,y:this.y,z:this.z,surface:o.kind,strength:Math.min(1,c/9)}),this.airborne=!1,this.rolling=!0,this.vy=0,this.horizontalSpeed<.12&&this.finish(n)}}stepRoll(t,e,n){const s=e.surfaceAt(this.x,this.z);this.surface=s.kind;const r=Ui[s.kind];if(s.kind==="water"){this.stopped=!0,this.rolling=!1,this.hazard=!0,this.y=Ui.water.height+Ye*.5,n.push({type:"water",x:this.x,y:this.y,z:this.z});return}if(s.kind==="out"){this.stopped=!0,this.rolling=!1,n.push({type:"out",x:this.x,y:this.y,z:this.z});return}if(this.y=r.height+Ye,e.cup){const a=e.cup.x-this.x,l=e.cup.z-this.z,c=Math.hypot(a,l),h=this.horizontalSpeed;if(c<od&&c>1e-4&&h<3.6){const d=7.2*(1-c/od);this.vx+=a/c*d*t,this.vz+=l/c*d*t}if(c<uy&&h<2.4){this.stopped=!0,this.rolling=!1,this.vx=0,this.vz=0,n.push({type:"cup",x:this.x,y:this.y,z:this.z});return}}if(e.obstacles)for(const a of e.obstacles){const l=this.x-a.x,c=this.z-a.z,h=Math.hypot(l,c);if(h>1e-4&&h<a.r+Ye){const d=l/h,f=c/h;this.x=a.x+d*(a.r+Ye),this.z=a.z+f*(a.r+Ye);const u=this.vx*d+this.vz*f;this.vx=(this.vx-2*u*d)*.42,this.vz=(this.vz-2*u*f)*.42,n.push({type:"obstacle",x:this.x,y:this.y,z:this.z,strength:Math.min(1,this.horizontalSpeed/18)});break}}const o=this.horizontalSpeed;if(o>1e-4){const a=r.friction*t,c=Math.max(0,o-a)/o;this.vx*=c,this.vz*=c}this.x+=this.vx*t,this.z+=this.vz*t,this.horizontalSpeed<.16?(this.restTimer+=t,this.restTimer>.18&&this.finish(n)):this.restTimer=0}finish(t){this.stopped=!0,this.rolling=!1,this.airborne=!1,this.vx=0,this.vz=0,this.vy=0,t.push({type:"stop",x:this.x,y:this.y,z:this.z,surface:this.surface})}get inHazard(){return this.hazard}}function _s(i,t,e,n={}){const s=n.maxSeconds??7,r=new Ep;r.x=e.x,r.y=e.y,r.z=e.z,r.surface=e.surface,n.rolling?r.launchRoll(n.speed??i.speed,i.yaw,e.surface):r.launch(i,e.surface);const o=[{x:r.x,y:r.y,z:r.z}];let a=null,l=!1,c=!1,h=!1;const d=1/60;let f=0,u=0;for(;f<s&&!r.stopped;){const p=r.step(d,t);f+=d,u+=d,u>=.05&&(u=0,o.push({x:r.x,y:r.y,z:r.z}));for(const x of p)x.type==="land"||x.type==="bounce"?a||(a={x:x.x,z:x.z}):x.type==="cup"?l=!0:x.type==="water"?c=!0:x.type==="out"&&(h=!0)}return o.push({x:r.x,y:r.y,z:r.z}),{points:o,landing:a,rest:r.stopped?{x:r.x,z:r.z}:null,restSurface:r.surface,holed:l,water:c,out:h}}const pc=[{id:"1W",code:"1W",name:"드라이버",short:"드라이버",loft:12,speed:35,carry:44.3,total:58.4,apex:2.6,note:"가장 멀리 · 낮은 탄도 · 긴 런",roll:!1},{id:"3W",code:"3W",name:"우드",short:"우드",loft:17,speed:28,carry:39.9,total:47.8,apex:3.3,note:"페어웨이 우드 · 중간 탄도",roll:!1},{id:"5I",code:"5I",name:"5번 아이언",short:"아이언",loft:25,speed:21.9,carry:34.1,total:37.7,apex:4.2,note:"긴 아이언 · 낮은 런",roll:!1},{id:"7I",code:"7I",name:"7번 아이언",short:"아이언",loft:33,speed:18,carry:28,total:29.7,apex:4.7,note:"기본 아이언 · 높은 탄도",roll:!1},{id:"9I",code:"9I",name:"9번 아이언",short:"아이언",loft:40,speed:15.2,carry:22,total:22.7,apex:4.7,note:"짧은 아이언 · 부드러운 착지",roll:!1},{id:"PW",code:"PW",name:"피칭웨지",short:"피칭",loft:48,speed:12.8,carry:16,total:16.4,apex:4.5,note:"어프로치 · 거의 안 굴러감",roll:!1},{id:"SW",code:"SW",name:"샌드웨지",short:"샌드",loft:58,speed:10.5,carry:10,total:10.2,apex:4,note:"높이 띄우기 · 벙커 탈출",roll:!1},{id:"PT",code:"PT",name:"퍼터",short:"퍼터",loft:0,speed:8,carry:0,total:20.6,apex:0,note:"그린에서 굴리기",roll:!0}];function Rn(i){return pc.find(t=>t.id===i)??pc[0]}function Dy(i){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):0}function eh(i){return Ps+(1-Ps)*Dy(i)}function Iy(i){return Number.isFinite(i)?(i-Ps)/(1-Ps):0}function ia(i){switch(i){case"rough":return .88;case"bunker":return .82;case"fringe":return .97;default:return 1}}const fd=12;function Ny(i,t){return i.roll?t==="green"||t==="fringe"||t==="bunker"?t:"green":"fairway"}const Uy={tee:0,fairway:0,rough:0,green:.01,fringe:.005,bunker:.005,water:-.14,out:-.4},pd=new Map;function Tp(i,t){const e=Ny(i,t),n=`${i.id}:${e}`,s=pd.get(n);if(s)return s;const r=[],o=[],a=Uy[e],l={surfaceAt:()=>({kind:e,height:a}),obstacles:[]};for(let h=0;h<fd;h+=1){const d=Ps+(1-Ps)*h/(fd-1),f=Math.max(.25,i.speed*d),u={x:0,y:a+.115,z:0,surface:e},x=(i.roll?_s({speed:f,loft:0,yaw:0,curve:0},l,u,{rolling:!0,speed:f,maxSeconds:24}):_s({speed:f,loft:i.loft,yaw:0,curve:0},l,u,{maxSeconds:12})).rest,g=x?Math.hypot(x.x,x.z):0;r.push(d),o.push(g)}for(let h=1;h<o.length;h+=1)o[h]<=o[h-1]&&(o[h]=o[h-1]+.01);const c={club:i.id,ground:e,ratios:r,distances:o,full:o[o.length-1]};return pd.set(n,c),c}function mc(i,t){const e=i.ratios,n=i.distances;if(!(t>0))return 0;if(t<=e[0])return n[0]*t/e[0];if(t>=e[e.length-1]){const s=e.length-1,r=(n[s]-n[s-1])/(e[s]-e[s-1]);return n[s]+(t-e[s])*r}for(let s=1;s<e.length;s+=1)if(t<=e[s]){const r=(t-e[s-1])/(e[s]-e[s-1]);return n[s-1]+(n[s]-n[s-1])*r}return n[n.length-1]}function Fy(i,t){const e=i.ratios,n=i.distances,s=Math.max(0,Number.isFinite(t)?t:0);if(s<=0)return 0;if(s<=n[0])return e[0]*s/Math.max(1e-4,n[0]);if(s>=n[n.length-1]){const r=e.length-1,o=(n[r]-n[r-1])/(e[r]-e[r-1]);return e[r]+(s-n[r])/Math.max(1e-4,o)}for(let r=1;r<n.length;r+=1)if(s<=n[r]){const o=(s-n[r-1])/Math.max(1e-4,n[r]-n[r-1]);return e[r-1]+(e[r]-e[r-1])*o}return e[e.length-1]}function Oy(i,t,e,n=1){const s=eh(e)*ia(t)*Math.max(0,n);return mc(Tp(i,t),s)}function rl(i,t,e,n=1){return i.speed*eh(e)*ia(t)*Math.max(0,Math.min(2,n))}const zy=.5,md=.64,ky=.13,By=.045;function ol(i,t,e){const n=Tp(i,t),s=ia(t),r=mc(n,s),o=Fy(n,e),a=Iy(o/s);if(!(e>.02)||a>=md)return{max:r,scale:1,needed:a,fine:!1,fullMax:r,distance:e};const l=Math.min(md,Math.max(zy,a+ky)),c=Math.max(By,Math.min(1,o/(s*eh(l))));return{max:mc(n,s*c),scale:c,needed:l,fine:c<.995,fullMax:r,distance:e}}const Gy=["SW","PW","9I","7I","5I","3W","1W"];function gd(i,t){if(t==="green")return i<=30?"PT":"PW";if(t==="fringe")return i<=18?"PT":"PW";if(t==="bunker")return"SW";const e=i/Math.pow(ia(t),1.75)*1.05;for(const n of Gy)if(Rn(n).total>=e)return n;return"1W"}const nh={tee:"티박스",fairway:"페어웨이",rough:"러프",green:"그린",fringe:"그린 주변",bunker:"벙커",water:"워터",out:"아웃"},Hy=.12,Vy=.14,Wy=.045,Xy=.105;function Yy(i,t){const e=Math.abs(t),n=e<=Wy?"perfect":e<=Xy?"good":"miss",s=n==="perfect"?1:n==="good"?.955:.87,r=-t,o=n==="perfect";return{grade:n,rawPower:i,power:Math.max(.08,Math.min(1,i*s)),error:t,yawOffset:o?0:r*.32,curve:o?0:r*5.2,powerMul:s}}class qy{constructor(){I(this,"phase","idle");I(this,"value",0);I(this,"power",0);I(this,"direction",1);I(this,"heldFor",0);I(this,"fine",!1);I(this,"lastPlan",null)}get powerSeconds(){return py*(this.fine?gy:1)}setFine(t){this.fine=t}get active(){return this.phase==="power"||this.phase==="impact"}get result(){return this.lastPlan}get livePower(){return Math.max(Hy,Math.min(1,this.value))}beginHold(){return this.phase==="power"||this.phase==="impact"?!1:(this.phase="power",this.value=0,this.power=0,this.direction=1,this.heldFor=0,this.lastPlan=null,!0)}release(){return this.phase!=="power"?null:this.heldFor<Vy?(this.reset(),"tooShort"):(this.power=this.livePower,this.value=this.power,this.phase="impact","power")}cancelHold(){return this.phase!=="power"?!1:(this.reset(),!0)}tap(){if(this.phase==="impact"){const t=Yy(this.power,this.value);return this.lastPlan=t,this.phase="done",t}return null}update(t){return this.phase==="power"?(this.heldFor+=t,this.value+=this.direction*t/this.powerSeconds,this.value>=1?(this.value=1,this.direction=-1):this.value<=0&&this.direction<0&&(this.value=0,this.direction=1),{changed:!0,timedOut:!1,plan:null}):this.phase==="impact"?(this.value-=t/my,this.value<=-.24?(this.value=0,this.phase="idle",this.power=0,{changed:!0,timedOut:!0,plan:null}):{changed:!0,timedOut:!1,plan:null}):{changed:!1,timedOut:!1,plan:null}}reset(){this.phase="idle",this.value=0,this.power=0,this.direction=1,this.heldFor=0,this.lastPlan=null}get hint(){return this.phase==="idle"?"스윙! 을 꾹 누르면 파워가 차요":this.phase==="power"?this.value>=.999?"최대 파워! 떼면 확정돼요":this.direction<0?"100% 지나 내려오는 중 · 떼면 확정":"꾹 누른 채 원하는 파워에서 떼세요":this.phase==="impact"?"임팩트 존에서 탭!":"샷!"}}function $y(i,t){if(typeof document>"u")return null;const e=document.createElement("canvas");e.width=256,e.height=96;const n=e.getContext("2d");if(!n)return null;n.clearRect(0,0,e.width,e.height);const s=i.length>10?`${i.slice(0,10)}…`:i;n.font='bold 40px "Pretendard", system-ui, sans-serif';const r=Math.min(e.width-16,n.measureText(s).width+44);n.fillStyle="rgba(22, 50, 59, 0.82)",n.beginPath();const o=(e.width-r)/2;typeof n.roundRect=="function"?n.roundRect(o,18,r,58,29):n.rect(o,18,r,58),n.fill(),n.fillStyle=t,n.beginPath(),n.arc(o+24,47,9,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.textAlign="left",n.textBaseline="middle",n.fillText(s,o+40,49);const a=new Is(e);a.colorSpace=ke;const l=new Xi({map:a,transparent:!0,depthWrite:!1}),c=new Ds(l);return c.scale.set(.95,.36,1),c}class Zy{constructor(t){I(this,"scene");I(this,"items",new Map);this.scene=t}upsert(t){let e=this.items.get(t.id);if(!e){const n=new Te,s=cp(new Bt(t.color).getHex(),Ye,!0);n.add(s);const r=$y(t.name,t.color);r&&(r.position.set(0,Ye+.42,0),n.add(r)),n.position.set(t.pos[0],t.pos[1],t.pos[2]),this.scene.add(n),e={group:n,label:r,snapshot:t,target:new C(t.pos[0],t.pos[1],t.pos[2])},this.items.set(t.id,e)}e.snapshot=t,e.target.set(t.pos[0],t.pos[1],t.pos[2]),e.label&&(e.label.visible=!0)}remove(t){const e=this.items.get(t);e&&(this.scene.remove(e.group),e.group.traverse(n=>{const s=n;s.isMesh&&s.geometry.dispose();const r=n.material;r&&(Array.isArray(r)?r:[r]).forEach(a=>{a.map?.dispose(),a.dispose()})}),this.items.delete(t))}clear(){[...this.items.keys()].forEach(t=>this.remove(t))}update(t,e){for(const n of this.items.values()){const s=n.snapshot.hole===e;n.group.visible=s,s&&n.group.position.lerp(n.target,1-Math.exp(-12*t))}}positionOf(t){const e=this.items.get(t);return e?e.group.position.clone():null}count(){return this.items.size}}const Ap={back:"백뷰",target:"타겟뷰",top:"탑뷰"},al=["back","target","top"],Ks=30,Ky=.08,xd=new bn({color:16757596,transparent:!0,opacity:.98,depthWrite:!1,toneMapped:!1}),_d=new bn({color:16773572,transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}),mo=new C,hs=new C,Jy=new C,vd=.42,Md=.12,jy=9;class Qy{constructor(t){I(this,"events");I(this,"scene");I(this,"camera");I(this,"audio");I(this,"realtime");I(this,"rig",new cy(.42,10.5));I(this,"effects");I(this,"remotes");I(this,"ball",new Ep);I(this,"ballVisual");I(this,"golfer",null);I(this,"aimDots",[]);I(this,"aimDashes",[]);I(this,"aimRing");I(this,"aimLandingRing");I(this,"aimGuide",new Te);I(this,"meter",new qy);I(this,"course",null);I(this,"identity",null);I(this,"state","idle");I(this,"holeIndex",0);I(this,"strokes",0);I(this,"records",Ue.map(t=>({par:t.par,strokes:null})));I(this,"clubId","1W");I(this,"recommended","1W");I(this,"clubManual",!1);I(this,"aimYaw",0);I(this,"viewMode","back");I(this,"golferPos",new C);I(this,"golferFacing",0);I(this,"pointers",new Map);I(this,"lastShotPos",new C);I(this,"sinkTimer",0);I(this,"betweenTimer",0);I(this,"swingTimer",0);I(this,"pendingShot",null);I(this,"netTimer",0);I(this,"peersDirty",!1);I(this,"peerEmitTimer",0);I(this,"previewTimer",0);I(this,"recommendTimer",0);I(this,"preview",null);I(this,"lastSurface","fairway");I(this,"peers",new Map);this.scene=t.scene,this.camera=t.camera,this.audio=t.audio,this.realtime=t.realtime,this.events=t.events??{},this.ballVisual=cp(16743001,Ye),this.ballVisual.visible=!1,this.scene.add(this.ballVisual),this.effects=new hy(this.scene),this.remotes=new Zy(this.scene);const e=new Ln(.115,10,8);e.rotateX(-Math.PI/2);for(let o=0;o<Ks;o+=1){const a=new qt(e,xd);a.visible=!1,a.renderOrder=3,this.aimGuide.add(a),this.aimDots.push(a)}const n=new Hn(.42,.56,36);n.rotateX(-Math.PI/2),this.aimRing=new qt(n,new bn({color:16769126,transparent:!0,opacity:.95,depthWrite:!1,blending:oi,toneMapped:!1})),this.aimRing.renderOrder=3,this.aimRing.visible=!1,this.aimGuide.add(this.aimRing);const s=new Hn(.6,.78,40);s.rotateX(-Math.PI/2),this.aimLandingRing=new qt(s,new bn({color:9431551,transparent:!0,opacity:.75,depthWrite:!1,blending:oi,toneMapped:!1})),this.aimLandingRing.renderOrder=3,this.aimLandingRing.visible=!1,this.aimGuide.add(this.aimLandingRing);const r=new Si(.16,1.1);r.rotateX(-Math.PI/2);for(let o=0;o<18;o+=1){const a=new qt(r,_d);a.visible=!1,a.renderOrder=4,this.aimGuide.add(a),this.aimDashes.push(a)}this.aimGuide.visible=!1,this.scene.add(this.aimGuide),this.realtime.onMessage(o=>this.handleMessage(o)),typeof window<"u"&&window.addEventListener("pagehide",()=>this.leave()),this.course=new rd(this.scene,Ue[0]),this.placeBall(Ue[0].tee[0],Ue[0].tee[1]),this.aimYaw=this.yawTo(Ue[0].tee[0],Ue[0].tee[1],Ue[0].cup[0],Ue[0].cup[1]),this.refreshRecommended(this.ball.x,this.ball.z,!0),this.rig.setAim(this.aimYaw,!0),this.rig.setDistance(18),this.rig.setPitch(.5),this.rig.update(.016,this.focusPoint(),this.camera,!0,2)}join(t){this.identity=t,this.applyBallColor(t.color),this.records=Ue.map(e=>({par:e.par,strokes:null})),this.holeIndex=0,this.viewMode="back",this.startHole(0,!0),this.sendHello(),this.realtime.resync?.()}applyBallColor(t){const n=this.ballVisual.children[0]?.material;n&&n.color.set(t),this.ballVisual.visible=!0}startHole(t,e=!1){this.holeIndex=sr.clamp(t,0,Ue.length-1);const n=Ue[this.holeIndex];this.course?.dispose(),this.course=new rd(this.scene,n),this.strokes=0,this.records[this.holeIndex].strokes=null,this.state="ready",this.meter.reset(),this.pointers.clear(),this.clubManual=!1,this.aimYaw=this.yawTo(n.tee[0],n.tee[1],n.cup[0],n.cup[1]),this.placeBall(n.tee[0],n.tee[1]),this.refreshRecommended(this.ball.x,this.ball.z,!0),this.effects.clear(),this.effects.clearTrail(),this.snapGolfer(),this.events.onView?.(this.viewMode),this.rig.setAim(this.aimYaw,!0),this.rig.setDistance(10.5),this.rig.setPitch(.42),this.rig.update(.016,this.focusPoint(),this.camera,!0,2),this.ensureGolfer(),this.events.onHole?.(n,this.holeIndex,this.strokes),this.events.onStroke?.(this.strokes),this.emitGauge(),this.emitClub(),this.refreshPreview(!0),e||this.audio.ui()}advanceHole(){if(this.holeIndex+1>=Ue.length){this.finish();return}this.startHole(this.holeIndex+1);const t=Ue[this.holeIndex];this.events.onBanner?.(`${this.holeIndex+1}홀`,`${t.name} · Par ${t.par}`,"plain")}finish(){this.state="finished",this.ballVisual.visible=!1,this.hideAimGuide(),this.golfer?.setVisible(!1);const t=this.buildResult();this.events.onFinish?.(t),this.audio.fanfare(),this.broadcastState(!0)}buildResult(){const t=this.records.map(o=>({par:o.par,strokes:o.strokes})),e=t.reduce((o,a)=>o+(a.strokes??0),0),n=t.reduce((o,a)=>o+a.par,0),s=e-n,r=s===0?"이븐파":s<0?`${Math.abs(s)}언더파`:`+${s}`;return{holes:t,total:e,par:n,diff:s,verdict:r,name:this.identity?.name??"플레이어",date:new Date().toISOString()}}restart(){this.identity&&(this.peersDirty=!0,this.records=Ue.map(t=>({par:t.par,strokes:null})),this.golfer?.setVisible(!0),this.startHole(0,!0),this.events.onBanner?.("다시 한 라운드","이번엔 언더파에 도전!","plain"),this.broadcast({type:"again",id:this.identity.id,name:this.identity.name}),this.broadcastState(!0))}exitToLobby(){this.identity&&this.broadcast({type:"bye",id:this.identity.id}),this.identity=null,this.state="idle",this.viewMode="back",this.events.onView?.(this.viewMode),this.ballVisual.visible=!1,this.meter.reset(),this.pointers.clear(),this.hideAimGuide(),this.effects.clear(),this.remotes.clear(),this.peers.clear(),this.peersDirty=!1,this.golfer?.dispose(),this.golfer&&(this.scene.remove(this.golfer.group),this.golfer=null)}ensureGolfer(){if(!this.identity)return;if(this.golfer){this.golfer.setVisible(!0);return}const t=new Ro({color:this.identity.color,club:!0,clubType:yd(this.clubId)});this.golfer=t,this.scene.add(t.group),this.snapGolfer()}addressSpot(t){const e=Math.sin(this.aimYaw),n=-Math.cos(this.aimYaw),s=Math.cos(this.aimYaw),r=Math.sin(this.aimYaw);return t.set(this.ball.x-e*Md+s*vd,0,this.ball.z-n*Md+r*vd)}snapGolfer(){this.addressSpot(this.golferPos),this.golferFacing=this.aimYaw,this.golfer&&(this.golfer.group.position.copy(this.golferPos),this.golfer.group.rotation.y=Math.atan2(Math.sin(this.aimYaw),-Math.cos(this.aimYaw)))}placeBall(t,e){const n=this.surfaceAt(t,e),s=n==="green"?.01:n==="bunker"?.005:0;this.ball.x=t,this.ball.y=s+Ye,this.ball.z=e,this.ball.vx=0,this.ball.vy=0,this.ball.vz=0,this.ball.stopped=!0,this.ball.airborne=!1,this.ball.rolling=!1,this.ball.surface=n,this.lastSurface=n,this.ballVisual.position.set(this.ball.x,this.ball.y,this.ball.z),this.ballVisual.scale.setScalar(1)}surfaceAt(t,e){return this.course?this.course.surfaceAt(t,e).kind:"fairway"}yawTo(t,e,n,s){return Math.atan2(n-t,-(s-e))}update(t){const e=Math.min(t,.05);if(this.state==="idle"){this.course?.update(e),this.effects.update(e),this.rig.orbitBy(e*.22,0),this.rig.update(e,this.focusPoint(),this.camera,!1,4);return}if(this.course?.update(e),this.state==="flight"?this.updateFlight(e):this.state==="swing"?this.updateSwingMotion(e):this.state==="sinking"?this.updateSinking(e):this.state==="between"&&(this.betweenTimer-=e,this.betweenTimer<=0&&this.advanceHole()),this.state==="gauge"){const n=this.meter.update(e);n.changed&&this.emitGauge(),n.timedOut&&(this.state="ready",this.meter.reset(),this.events.onToast?.("임팩트를 놓쳤어요! 다시 스윙하세요"),this.emitGauge(),this.refreshPreview(!0))}if(this.syncVisuals(e),this.remotes.update(e,this.holeIndex),this.effects.update(e),(this.state==="ready"||this.state==="gauge")&&(this.previewTimer+=e,this.previewTimer>=Ky&&(this.previewTimer=0,this.refreshPreview(!1))),this.state==="ready"&&(this.recommendTimer+=e,this.recommendTimer>=.3)){this.recommendTimer=0;const n=this.cupDistanceFrom(this.ball.x,this.ball.z),s=gd(n,this.surfaceAt(this.ball.x,this.ball.z));!this.clubManual&&(s!==this.recommended||this.clubId!==s)?(this.refreshRecommended(this.ball.x,this.ball.z),this.emitGauge()):s!==this.recommended&&(this.recommended=s,this.emitClub())}this.updateCamera(e),this.netTimer+=e,this.netTimer>=.12&&(this.netTimer=0,this.broadcastState(!1)),this.peersDirty&&(this.peerEmitTimer+=e,this.peerEmitTimer>=.4&&(this.peerEmitTimer=0,this.peersDirty=!1,this.emitPeers())),this.prunePeers()}focusPoint(){if(this.state==="idle"){const t=Ue[0];return mo.set((t.tee[0]+t.green.x)/2,.4,(t.tee[1]+t.green.z)/2)}return mo.set(this.ball.x,this.ball.y+.1,this.ball.z)}updateCamera(t){this.rig.setAim(this.aimYaw);const e=this.state==="flight"||this.state==="sinking";switch(this.viewMode){case"top":{const r=this.holeSpan();this.rig.setDistance(sr.clamp(r*1.2,32,74)),this.rig.setPitch(1.06),this.rig.update(t,this.topViewFocus(),this.camera,!1,0);return}case"target":{const r=this.targetViewFocus(),o=Math.hypot(r.x-this.ball.x,r.z-this.ball.z);this.rig.setDistance(sr.clamp(18+o*.75,22,46)),this.rig.setPitch(.68),this.rig.update(t,r,this.camera,!1,0);return}}if(e){this.rig.setDistance(this.ball.airborne?16:13),this.rig.setPitch(.36),this.rig.update(t,this.focusPoint(),this.camera,!1,3);return}const n=this.camera.aspect<.95,s=this.state==="finished"?13:10.5;this.rig.setDistance(n?s*.88:s),this.rig.setPitch(n?.4:.42),this.rig.update(t,this.focusPoint(),this.camera,!1,n?.55:1.5)}holeSpan(){const t=Ue[this.holeIndex].green;return Math.hypot(t.x-this.ball.x,t.z-this.ball.z)}targetViewFocus(){if(this.state==="flight"||this.state==="sinking")return hs.set(this.ball.x,this.ball.y,this.ball.z);const t=this.preview?.landing??null,e=this.preview?.rest??null;if(t&&e)return hs.set(t.x+(e.x-t.x)*.4,.15,t.z+(e.z-t.z)*.4);const n=e??t;if(n)return hs.set(n.x,.15,n.z);const s=this.course?.cup;return s?hs.set(s.x,.15,s.z):hs.set(this.ball.x,.15,this.ball.z)}topViewFocus(){const t=Ue[this.holeIndex].green;return hs.set(this.ball.x+(t.x-this.ball.x)*.42,.2,this.ball.z+(t.z-this.ball.z)*.42)}syncVisuals(t){if(this.state==="sinking")return;this.ballVisual.position.set(this.ball.x,this.ball.y,this.ball.z);const e=Math.hypot(this.ball.vx,this.ball.vz);if(e>.02){const n=mo.set(this.ball.vz,0,-this.ball.vx).normalize();this.ballVisual.rotateOnWorldAxis(n,e*t/Ye)}this.updateGolfer(t)}updateGolfer(t){const e=this.golfer;if(!e)return;const n=this.state==="flight"||this.state==="sinking"||this.state==="between"||this.state==="finished",s=h=>{this.golferFacing=h,e.group.rotation.y=Math.atan2(Math.sin(h),-Math.cos(h))};if(n){e.group.position.copy(this.golferPos),s(this.golferFacing),e.setAddressing(!1),e.setCharge(0),e.update(t,!1);return}const r=this.addressSpot(Jy),o=r.x-this.golferPos.x,a=r.z-this.golferPos.z,l=Math.hypot(o,a),c=l>.06;if(c){const h=Math.max(jy,l/.9),d=Math.min(l,h*t);this.golferPos.x+=o/l*d,this.golferPos.z+=a/l*d}else this.golferPos.copy(r);e.group.position.copy(this.golferPos),s(this.aimYaw),e.setAddressing(!c),e.setCharge(this.chargePose()),e.update(t,c)}chargePose(){if(this.state!=="gauge")return 0;const t=this.meter;return t.phase==="power"?Math.min(1,Math.max(0,t.value)):t.phase==="impact"?Math.min(1,Math.max(0,t.power)):0}updateFlight(t){const e=this.course?{surfaceAt:this.course.surfaceAt,obstacles:this.course.obstacles,cup:{x:this.course.cup.x,z:this.course.cup.z}}:null;if(!e)return;const n=2,s=t/n;for(let r=0;r<n;r+=1){const o=this.ball.step(s,e);for(const a of o)this.handleBallEvent(a);if(this.state!=="flight")return}if(!this.ball.stopped&&(this.ball.airborne||this.ball.horizontalSpeed>1.2)){const r=this.ball.airborne?new Bt(16774084):new Bt(12578815);this.effects.trailPush(mo.set(this.ball.x,this.ball.y,this.ball.z),r)}}handleBallEvent(t){switch(t.type){case"land":case"bounce":{const e=t.surface,n=new C(t.x,t.y,t.z);if(this.effects.divot(n,e),this.effects.ring(n,.25,1.6+t.strength*2,.45,16777215),t.type==="bounce"&&this.audio.bounce(.3+t.strength*.6),this.rig.setAim(this.aimYaw),t.type==="land"){const s=this.cupDistanceFrom(t.x,t.z);this.events.onLanding?.(s)}break}case"obstacle":this.audio.bounce(.4+t.strength*.5),this.effects.divot(new C(t.x,t.y,t.z),"rough");break;case"cup":this.holeOut();break;case"water":this.penalty("water");break;case"out":this.penalty("out");break;case"stop":this.settle();break}}cupDistanceFrom(t,e){const n=this.course?.cup;return n?Math.hypot(n.x-t,n.z-e):0}settle(){if(this.state="ready",this.meter.reset(),this.lastSurface=this.surfaceAt(this.ball.x,this.ball.z),this.effects.tap(new C(this.ball.x,this.ball.y,this.ball.z)),this.effects.clearTrail(),this.aimYaw=this.yawTo(this.ball.x,this.ball.z,this.course?.cup.x??0,this.course?.cup.z??0),this.refreshRecommended(this.ball.x,this.ball.z,!0),this.rig.setDistance(10.5),this.strokes>=this.strokeLimit()){this.pickUp();return}const t=this.cupDistanceFrom(this.ball.x,this.ball.z);this.events.onRest?.(t,this.lastSurface,this.strokes),this.events.onStroke?.(this.strokes),this.emitGauge(),this.emitClub(),this.refreshPreview(!0),this.broadcastState(!0)}strokeLimit(){return this.records[this.holeIndex].par+fy}pickUp(){this.records[this.holeIndex].strokes=this.strokes,this.state="between",this.betweenTimer=2,this.events.onBanner?.("최대 타수 도달",`${this.holeIndex+1}홀을 ${this.strokes}타로 기록하고 다음 홀로`,"plain"),this.broadcastState(!0)}holeOut(){const t=Ue[this.holeIndex];this.state="sinking",this.sinkTimer=2,this.records[this.holeIndex].strokes=Math.max(1,this.strokes),this.ball.vx=0,this.ball.vz=0;const e=ih(this.strokes,t.par);this.audio.cup(),this.strokes<=t.par&&this.audio.fanfare(),this.effects.confetti(new C(this.ball.x,this.ball.y+.1,this.ball.z),this.strokes<=t.par),this.effects.clearTrail(),this.events.onHoled?.(this.holeIndex,this.strokes,e),this.meter.reset(),this.emitGauge(),this.hideAimGuide(),this.identity&&this.broadcast({type:"holed",id:this.identity.id,hole:this.holeIndex,strokes:this.strokes,name:this.identity.name}),this.broadcastState(!0)}updateSinking(t){const e=this.course?.cup;if(e){const n=Math.min(1,t*8);this.ballVisual.position.x+=(e.x-this.ballVisual.position.x)*n,this.ballVisual.position.z+=(e.z-this.ballVisual.position.z)*n}this.ballVisual.position.y=Math.max(-.45,this.ballVisual.position.y-t*.5),this.ballVisual.scale.setScalar(Math.max(.42,this.ballVisual.scale.x-t*.45)),this.sinkTimer-=t,this.sinkTimer<=0&&(this.state="between",this.betweenTimer=.2)}penalty(t){this.strokes+=1,this.records[this.holeIndex].strokes=this.strokes,t==="water"?(this.audio.water(),this.effects.splash(new C(this.ball.x,-.05,this.ball.z))):this.audio.bounce(.7),this.placeBall(this.lastShotPos.x,this.lastShotPos.z),this.state="ready",this.meter.reset(),this.aimYaw=this.yawTo(this.ball.x,this.ball.z,this.course?.cup.x??0,this.course?.cup.z??0),this.refreshRecommended(this.ball.x,this.ball.z,!0),this.snapGolfer(),this.rig.setDistance(10.5),this.events.onStroke?.(this.strokes),this.events.onPenalty?.(t,this.strokes),this.emitGauge(),this.emitClub(),this.refreshPreview(!0),this.broadcastState(!0),this.strokes>=this.strokeLimit()&&this.pickUp()}pointerDown(t,e,n,s=0){if(this.state!=="finished"){if(this.state==="gauge"&&this.meter.phase==="impact"&&s!==2){this.pointers.delete(n),this.swingTap();return}if(s===2||this.pointers.size>0){this.pointers.set(n,{x:t,y:e,role:"orbit"});return}this.pointers.set(n,{x:t,y:e,role:"aim"})}}pointerMove(t,e,n){const s=this.pointers.get(n);if(!s)return;const r=t-s.x,o=e-s.y;s.x=t,s.y=e,s.role==="aim"&&(this.state==="ready"||this.state==="gauge")?(this.aimYaw+=r*.0042,this.rig.setPitch(this.rig.pitch-o*.0022),this.refreshPreview(!0)):this.rig.orbitBy(r,o)}pointerUp(t){this.pointers.delete(t)}pointerCancel(t){this.pointers.delete(t)}aimBy(t){this.state!=="ready"&&this.state!=="gauge"||(this.aimYaw+=t,this.refreshPreview(!0))}setAimYaw(t){this.aimYaw=t,this.refreshPreview(!0)}get aim(){return this.aimYaw}setClub(t){this.state!=="ready"&&this.state!=="gauge"||(this.clubId=t,this.clubManual=t!==this.recommended,this.audio.ui(),this.emitClub(),this.emitGauge(),this.refreshPreview(!0))}cycleView(){const t=al.indexOf(this.viewMode);return this.viewMode=al[(t+1)%al.length],this.audio.ui(),this.events.onView?.(this.viewMode),this.viewMode}setView(t){this.viewMode=t,this.events.onView?.(this.viewMode)}get view(){return this.viewMode}get currentClub(){return Rn(this.clubId)}get gaugeInfo(){return ol(Rn(this.clubId),this.surfaceAt(this.ball.x,this.ball.z),this.cupDistanceFrom(this.ball.x,this.ball.z))}get clubMax(){return this.gaugeInfo.max}get neededPower(){return this.gaugeInfo.needed}estimateFor(t){const e=this.gaugeInfo;return Oy(Rn(this.clubId),this.surfaceAt(this.ball.x,this.ball.z),t,e.scale)}get club(){return Rn(this.clubId)}swingPress(){if(this.state==="ready"){this.meter.setFine(this.gaugeInfo.fine),this.meter.beginHold()&&(this.state="gauge",this.audio.ui(),this.emitGauge(),this.refreshPreview(!0));return}if(this.state==="gauge"){if(this.meter.phase==="impact"){this.swingTap();return}this.meter.phase==="power"&&(this.meter.reset(),this.meter.beginHold(),this.emitGauge(),this.refreshPreview(!0))}}swingRelease(){if(this.state!=="gauge")return;const t=this.meter.release();if(t==="tooShort"){this.state="ready",this.events.onToast?.("너무 짧게 뗐어요 · 꾹 눌러 파워를 채워보세요"),this.emitGauge(),this.refreshPreview(!0);return}t==="power"&&(this.audio.ui(),this.emitGauge(),this.refreshPreview(!0))}swingCancel(){this.state==="gauge"&&this.meter.cancelHold()&&(this.state="ready",this.emitGauge(),this.refreshPreview(!0))}swingTap(){if(this.state!=="gauge")return;const t=this.meter.tap();if(!t){this.audio.ui(),this.emitGauge();return}this.fireShot(t)}fireShot(t){const e=Rn(this.clubId),n=this.surfaceAt(this.ball.x,this.ball.z),s=ol(e,n,this.cupDistanceFrom(this.ball.x,this.ball.z)).scale;this.lastSurface=n,this.pendingShot={plan:t,club:e,surface:n,scale:s,yaw:this.aimYaw+t.yawOffset},this.strokes+=1,this.state="swing",this.swingTimer=0,this.meter.reset(),this.hideAimGuide(),this.golfer?.playSwing(e.roll?"putt":"full"),this.rig.setDistance(e.roll?11:14),this.events.onStroke?.(this.strokes),this.events.onGauge?.(this.gaugeView()),this.broadcastState(!0)}updateSwingMotion(t){this.swingTimer+=t;const e=this.pendingShot;if(!e)return;const n=e.club.roll?bp:Sp;this.swingTimer>=n&&this.launchPendingShot()}launchPendingShot(){const t=this.pendingShot;if(!t)return;this.pendingShot=null;const{club:e,surface:n,scale:s,plan:r,yaw:o}=t,a=rl(e,n,r.power,s);this.lastShotPos.set(this.ball.x,0,this.ball.z),e.roll?this.ball.launchRoll(Math.max(.22,a),o,n):this.ball.launch({speed:a,loft:e.loft,yaw:o,curve:r.curve},n),this.state="flight";const l=new C(this.ball.x,this.ball.y,this.ball.z);this.effects.spark(l,r.grade),this.audio.shot(e.id,r.power),this.events.onShot?.(r,e),this.events.onGauge?.(this.gaugeView()),this.broadcastState(!0),this.identity&&this.broadcast({type:"shot",id:this.identity.id,power:r.power,club:e.id})}refreshRecommended(t,e,n=!1){const s=this.cupDistanceFrom(t,e),r=this.surfaceAt(t,e);this.lastSurface=r,this.recommended=gd(s,r),n&&(this.clubManual=!1),this.clubManual||(this.clubId=this.recommended),this.emitClub()}currentLaunch(){const t=Rn(this.clubId);let e=1;this.state==="gauge"&&(e=this.meter.phase==="power"?Math.max(.12,Math.min(1,this.meter.value)):Math.max(.12,Math.min(1,this.meter.power)));const n=ol(t,this.lastSurface,this.cupDistanceFrom(this.ball.x,this.ball.z)).scale;return{speed:rl(t,this.lastSurface,e,n),loft:t.loft,power:e,roll:t.roll}}refreshPreview(t){if(!this.course)return;if(this.state!=="ready"&&this.state!=="gauge"){t&&this.hideAimGuide();return}const e=this.currentLaunch(),n={surfaceAt:this.course.surfaceAt,obstacles:this.course.obstacles,cup:{x:this.course.cup.x,z:this.course.cup.z}},s={x:this.ball.x,y:this.ball.y,z:this.ball.z,surface:this.lastSurface},r=e.roll?_s({speed:Math.max(.22,e.speed),loft:0,yaw:this.aimYaw,curve:0},n,s,{rolling:!0,speed:Math.max(.22,e.speed),maxSeconds:12}):_s({speed:e.speed,loft:e.loft,yaw:this.aimYaw,curve:0},n,s);this.preview=r;const o=r.points;let a=0;for(let _=1;_<o.length;_+=1)a+=Math.hypot(o[_].x-o[_-1].x,o[_].z-o[_-1].z);const l=Math.max(.75,Math.min(2.6,a/Math.max(1,Ks-1))),c=Math.min(1,Math.max(.42,l/1.7));let h=0,d=0,f=0;for(let _=0;_<o.length&&h<Ks;_+=1){if(_>0&&(d+=Math.hypot(o[_].x-o[_-1].x,o[_].z-o[_-1].z)),d+1e-6<f)continue;const b=this.aimDots[h];b.visible=!0,b.position.set(o[_].x,Math.max(.035,o[_].y+.02),o[_].z),b.scale.setScalar(Math.max(.34,c*(1-h/(Ks*2.4)))),h+=1,f=d+l}for(let _=h;_<Ks;_+=1)this.aimDots[_].visible=!1;r.landing?(this.aimRing.visible=!0,this.aimRing.position.set(r.landing.x,.04,r.landing.z)):this.aimRing.visible=!1,r.rest?(this.aimLandingRing.visible=!0,this.aimLandingRing.position.set(r.rest.x,.045,r.rest.z)):this.aimLandingRing.visible=!1;const u=r.rest??r.landing,p=Math.sin(this.aimYaw),x=-Math.cos(this.aimYaw),g=u?Math.hypot(u.x-this.ball.x,u.z-this.ball.z):40,m=Math.min(this.aimDashes.length,Math.max(0,Math.floor((g-1.5)/2.1)));for(let _=0;_<this.aimDashes.length;_+=1){const b=this.aimDashes[_];if(_>=m){b.visible=!1;continue}const M=1.8+_*2.1;b.visible=!0,b.position.set(this.ball.x+p*M,.055,this.ball.z+x*M),b.rotation.y=this.aimYaw;const T=1-_/this.aimDashes.length*.45;b.scale.set(T,1,T)}this.aimGuide.visible=!0,xd.opacity=r.water?.5:.98,_d.color.setHex(r.water?16748431:16773572)}hideAimGuide(){this.aimGuide.visible=!1,this.aimRing.visible=!1,this.aimLandingRing.visible=!1,this.aimDots.forEach(t=>{t.visible=!1}),this.aimDashes.forEach(t=>{t.visible=!1})}gaugeView(){const t=this.cupDistanceFrom(this.ball.x,this.ball.z),e=this.gaugeInfo,n=this.state==="gauge"?this.meter.power:0,s=this.state==="gauge"&&this.meter.phase==="power"?this.meter.value:n;return{phase:this.meter.phase,value:this.meter.value,power:this.meter.power,hint:this.meter.hint,club:this.clubId,distance:t,clubMax:e.max,fullMax:e.fullMax,fine:e.fine,powerPercent:Math.round(Math.max(0,Math.min(1,s))*100),estimate:this.estimateFor(s),neededPower:e.needed}}emitGauge(){this.events.onGauge?.(this.gaugeView())}emitClub(){this.golfer?.setClubLook(yd(this.clubId)),this.events.onClub?.(this.clubId,this.recommended,this.cupDistanceFrom(this.ball.x,this.ball.z),this.lastSurface)}debugFire(t,e=0,n){this.state==="ready"&&(n&&(this.clubId=n),this.state="gauge",this.fireShot({grade:Math.abs(e)<=.045?"perfect":Math.abs(e)<=.105?"good":"miss",power:t,rawPower:t,error:e,yawOffset:-e*.32,curve:-e*5.2,powerMul:1}))}debugState(){const t=this.course?.cup??new C;return{state:this.state,hole:this.holeIndex,strokes:this.strokes,pos:[this.ball.x,this.ball.y,this.ball.z],cup:[t.x,t.z],surface:this.surfaceAt(this.ball.x,this.ball.z),club:this.clubId,aim:this.aimYaw,distance:this.cupDistanceFrom(this.ball.x,this.ball.z),view:this.viewMode}}debugPose(t){this.golfer?.debugPose(t)}debugGolferInfo(){return this.golfer?.debugInfo()??{}}debugClubSwing(){return this.golfer?.isSwinging??!1}debugMoveBall(t,e){this.state==="flight"||this.state==="swing"||this.state==="sinking"||(this.placeBall(t,e),this.state="ready",this.meter.reset(),this.aimYaw=this.yawTo(this.ball.x,this.ball.z,this.course?.cup.x??0,this.course?.cup.z??0),this.refreshRecommended(this.ball.x,this.ball.z,!0),this.snapGolfer(),this.emitGauge(),this.emitClub(),this.refreshPreview(!0))}debugGolfer(){return{x:this.golferPos.x,z:this.golferPos.z,ballX:this.ball.x,ballZ:this.ball.z,facing:this.golferFacing}}debugShotInfo(){return{club:this.clubId,clubMax:this.clubMax,neededPower:this.neededPower,distance:this.cupDistanceFrom(this.ball.x,this.ball.z),estimate50:this.estimateFor(.5)}}debugBall(){return{x:this.ball.x,y:this.ball.y,z:this.ball.z,stopped:this.ball.stopped,airborne:this.ball.airborne,surface:this.ball.surface}}debugAimAt(t,e){this.aimYaw=this.yawTo(this.ball.x,this.ball.z,t,e),this.refreshPreview(!0)}debugPreviewAt(t){if(!this.course)return null;const e=Rn(this.clubId),n=Math.max(.05,Math.min(1,t)),s=this.gaugeInfo,r=rl(e,this.lastSurface,n,s.scale),o={surfaceAt:this.course.surfaceAt,obstacles:this.course.obstacles,cup:{x:this.course.cup.x,z:this.course.cup.z}},a={x:this.ball.x,y:this.ball.y,z:this.ball.z,surface:this.lastSurface};if(e.roll){const l=Math.max(.22,r);return _s({speed:l,loft:0,yaw:this.aimYaw,curve:0},o,a,{rolling:!0,speed:l})}return _s({speed:r,loft:e.loft,yaw:this.aimYaw,curve:0},o,a)}debugPreview(){return this.refreshPreview(!0),this.preview}debugJump(t){this.identity&&(this.viewMode="back",this.startHole(t,!0))}debugGauge(){return this.meter}debugSurfaceAt(t,e){return this.surfaceAt(t,e)}sendEmoji(t){this.effects.emoji(new C(this.ball.x,this.ball.y,this.ball.z),t),this.audio.emoji(),this.identity&&this.broadcast({type:"emoji",id:this.identity.id,emoji:t})}sendHello(){const t=this.snapshot();t&&this.broadcast({type:"hello",player:t})}leave(){this.identity&&this.broadcast({type:"bye",id:this.identity.id}),this.realtime.close()}snapshot(){return this.identity?{id:this.identity.id,name:this.identity.name,color:this.identity.color,hole:this.holeIndex,pos:[ll(this.ball.x),ll(this.ball.y),ll(this.ball.z)],strokes:this.strokes,total:this.currentTotal(),done:this.state==="finished",moving:this.state==="flight"||this.state==="sinking",ts:Date.now()}:null}currentTotal(){let t=0;return this.records.forEach((e,n)=>{e.strokes!==null?t+=e.strokes:n===this.holeIndex&&(t+=this.strokes)}),t}broadcast(t){this.realtime.send(t)}broadcastState(t){const e=this.snapshot();e&&(t||this.realtime.online)&&this.broadcast({type:"state",player:e})}handleMessage(t){if(this.identity)switch(t.type){case"hello":{if(t.player.id===this.identity.id)return;this.applyPeer(t.player),this.broadcastState(!0);break}case"state":{if(t.player.id===this.identity.id)return;this.applyPeer(t.player);break}case"bye":{this.peers.delete(t.id)&&(this.remotes.remove(t.id),this.peersDirty=!0);break}case"emoji":{const e=this.remotes.positionOf(t.id)??new C(0,0,0);this.effects.emoji(e,t.emoji),this.audio.emoji();const n=this.peers.get(t.id)?.name??"플레이어";this.events.onRemoteEmoji?.(n,t.emoji);break}case"shot":{this.audio.bounce(.25+t.power*.4);break}case"holed":{this.events.onRemoteHoled?.(t.name,t.hole,t.strokes),this.audio.cup();break}case"again":{this.events.onToast?.(`${t.name}님이 새 라운드를 시작했어요`);break}}}applyPeer(t){const e=this.peers.get(t.id);this.peers.set(t.id,t),this.remotes.upsert(t),this.peersDirty=!0,!e&&!t.done&&this.events.onToast?.(`${t.name}님이 입장했어요`)}prunePeers(){const t=Date.now();let e=!1;for(const[n,s]of this.peers)t-s.ts>2e4&&(this.peers.delete(n),this.remotes.remove(n),e=!0);e&&(this.peersDirty=!0)}emitPeers(){this.events.onPeers?.(this.getPeers(),this.realtime.online)}getPeers(){return[...this.peers.values()].sort((t,e)=>t.total-e.total||t.name.localeCompare(e.name))}getLocalSnapshot(){return this.snapshot()}get hole(){return Ue[this.holeIndex]}get currentStrokes(){return this.strokes}get stateName(){return this.state}cupDistance(){return this.cupDistanceFrom(this.ball.x,this.ball.z)}get surface(){return this.lastSurface}get recommendedClub(){return this.recommended}resetBall(){this.state==="ready"&&(this.strokes+=1,this.records[this.holeIndex].strokes=this.strokes,this.placeBall(this.lastShotPos.x,this.lastShotPos.z),this.events.onStroke?.(this.strokes),this.events.onToast?.("공을 되돌렸어요 (+1벌타)"),this.broadcastState(!0),this.strokes>=this.strokeLimit()&&this.pickUp())}get lastShot(){return this.lastShotPos}}function ih(i,t){const e=i-t;return i===1?"홀인원":e<=-3?"알바트로스":e===-2?"이글":e===-1?"버디":e===0?"파":e===1?"보기":e===2?"더블보기":e===3?"트리플보기":`+${e}`}function ll(i){return Math.round(i*1e3)/1e3}function yd(i){return i==="1W"||i==="3W"?"driver":i==="PT"?"putter":"iron"}class tS{constructor(){I(this,"ctx",null);I(this,"master",null);I(this,"noiseBuffer",null);I(this,"_muted",!1);try{this._muted=localStorage.getItem("oneone:muted")==="1"}catch{this._muted=!1}}get muted(){return this._muted}setMuted(t){this._muted=t;try{localStorage.setItem("oneone:muted",t?"1":"0")}catch{}this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.02)}unlock(){if(typeof window>"u")return;const t=window.AudioContext??window.webkitAudioContext;if(t){if(!this.ctx)try{this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this._muted?0:.9,this.master.connect(this.ctx.destination)}catch{this.ctx=null;return}this.ctx.state==="suspended"&&this.ctx.resume()}}get out(){return!this.ctx||!this.master||this._muted?null:this.master}tone(t,e,n="sine",s=.25,r,o=0){const a=this.out;if(!a||!this.ctx)return;const l=this.ctx,c=l.currentTime+o,h=l.createOscillator(),d=l.createGain();h.type=n,h.frequency.setValueAtTime(t,c),r!==void 0&&h.frequency.exponentialRampToValueAtTime(Math.max(20,r),c+e),d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),c+Math.min(.02,e*.3)),d.gain.exponentialRampToValueAtTime(1e-4,c+e),h.connect(d).connect(a),h.start(c),h.stop(c+e+.02)}noise(t,e,n,s,r=0){const o=this.out;if(!o||!this.ctx)return;const a=this.ctx;if(!this.noiseBuffer){const f=Math.floor(a.sampleRate*.6),u=a.createBuffer(1,f,a.sampleRate),p=u.getChannelData(0);for(let x=0;x<f;x+=1)p[x]=Math.random()*2-1;this.noiseBuffer=u}const l=a.currentTime+r,c=a.createBufferSource();c.buffer=this.noiseBuffer;const h=a.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(n,l),h.frequency.exponentialRampToValueAtTime(Math.max(80,s),l+t);const d=a.createGain();d.gain.setValueAtTime(Math.max(2e-4,e),l),d.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h).connect(d).connect(o),c.start(l),c.stop(l+t+.02)}shot(t,e){const n=Math.min(1,Math.max(.2,e));if(t==="putter"){this.putt(e);return}if(t==="driver"||t==="wood"){this.noise(.16,.32*n,3e3,320),this.tone(120+40*n,.2,"triangle",.22*n,58),this.tone(220,.08,"sine",.07*n,120);return}if(t==="iron"){this.noise(.1,.26*n,3600,800),this.tone(300+80*n,.1,"square",.07*n,170);return}this.noise(.11,.2*n,2800,600),this.tone(240,.12,"sine",.1*n,110)}putt(t){const e=Math.min(1,Math.max(.15,t));this.noise(.06,.16*e,2400,700),this.tone(190+60*e,.12,"triangle",.16*e,70)}bounce(t){const e=Math.min(1,Math.max(.05,t));this.tone(880,.05,"triangle",.05*e,520)}cup(){const t=[523.25,659.25,783.99,1046.5];t.forEach((e,n)=>this.tone(e,.22,"sine",.2,void 0,n*.075)),t.forEach((e,n)=>this.tone(e*2,.16,"triangle",.05,void 0,n*.075))}fanfare(){const t=[[392,0],[523.25,.1],[659.25,.2],[783.99,.3],[1046.5,.42]];t.forEach(([e,n])=>this.tone(e,.32,"sine",.17,void 0,n)),t.forEach(([e,n])=>this.tone(e*1.5,.2,"triangle",.045,void 0,n+.02))}water(){this.noise(.55,.24,1600,180),this.tone(420,.45,"sine",.12,90)}emoji(){this.tone(880,.08,"square",.06,1180),this.tone(1320,.07,"sine",.05,void 0,.06)}ui(){this.tone(660,.06,"sine",.07,880)}portal(){this.tone(392,.5,"sine",.1,880),this.tone(587.33,.5,"triangle",.06,1174.66,.06),this.noise(.4,.05,5200,1400)}}const Rp="lobby",eS="play-1",nS="wss://oneone-minigolf-sync.a810-glenn.workers.dev",iS=Rp,sS="oneone-minigolf",rS=500,oS=2e4,aS=25e3,lS=7e4,Sd=64,bd=800;function cS(){try{const t=import.meta?.env?.VITE_WS_URL;return typeof t=="string"&&t.length>0?t:null}catch{return null}}function hS(){try{return import.meta?.env?.DEV===!0}catch{return!1}}function gc(i){if(!i)return null;let t=i.trim();if(t.length===0||t==="off"||t==="0"||t==="false"||t==="none"||(t.startsWith("http://")?t=`ws://${t.slice(7)}`:t.startsWith("https://")&&(t=`wss://${t.slice(8)}`),!/^wss?:\/\//i.test(t)))return null;try{return new URL(t).toString()}catch{return null}}function go(i,t){try{const e=new URL(i);return(e.pathname==="/"||e.pathname==="")&&(e.pathname="/ws"),e.searchParams.has("room")||e.searchParams.set("room",t),e.toString()}catch{return i}}function uS(){if(!(typeof window>"u"||!window.location))try{const i=new URLSearchParams(window.location.search);if(!i.has("ws"))return;const t=i.get("ws")??"";return t==="off"||t==="0"||t==="false"||t===""?null:gc(t)}catch{return}}function dS(i,t){if(t!==void 0){const s=gc(t);return s?go(s,i):null}const e=uS();if(e!==void 0)return e?go(e,i):null;const n=gc(cS());return n?go(n,i):hS()?null:go(nS,i)}function fS(i){return new WebSocket(i)}function pS(){try{if(typeof crypto<"u"&&"randomUUID"in crypto)return crypto.randomUUID().slice(0,8)}catch{}return Math.random().toString(36).slice(2,10)}class mS{constructor(t,e={}){I(this,"room");I(this,"serverUrl");I(this,"useLocal");I(this,"autoConnect");I(this,"socketFactory");I(this,"backoffScale");I(this,"clientId",pS());I(this,"handlers",new Set);I(this,"statusHandlers",new Set);I(this,"seen",new Map);I(this,"queue",[]);I(this,"local",null);I(this,"socket",null);I(this,"attempt",0);I(this,"seq",0);I(this,"serverPeers",0);I(this,"lastInbound",0);I(this,"closed",!1);I(this,"started",!1);I(this,"syncPending",!1);I(this,"reconnectTimer",null);I(this,"pingTimer",null);I(this,"detachWindow",null);if(this.room=t,this.autoConnect=e.autoConnect??!0,this.backoffScale=e.backoffScale??1,this.serverUrl=dS(t,e.url),(e.local??!0)&&typeof BroadcastChannel<"u")try{this.local=new BroadcastChannel(`${sS}:${t}`),this.local.onmessage=s=>this.receive(s.data)}catch{this.local=null}this.useLocal=this.local!==null,e.webSocket===null?this.socketFactory=null:e.webSocket?this.socketFactory=e.webSocket:this.socketFactory=this.serverUrl&&typeof WebSocket<"u"?fS:null,this.autoConnect&&this.connect(),this.attachWindow()}get mode(){return this.socket&&this.socket.readyState===1?"websocket":this.serverUrl&&this.socketFactory?this.attempt>=3?this.useLocal?"local":"offline":"connecting":this.useLocal?"local":"offline"}get online(){return this.mode==="websocket"||this.useLocal}get status(){return{room:this.room,mode:this.mode,peers:this.serverPeers,attempt:this.attempt}}onStatus(t){return this.statusHandlers.add(t),t(this.status),()=>this.statusHandlers.delete(t)}emitStatus(){if(this.statusHandlers.size===0)return;const t=this.status;this.statusHandlers.forEach(e=>{try{e(t)}catch{}})}connect(){if(this.closed)return;if(this.started=!0,!this.serverUrl||!this.socketFactory){this.emitStatus();return}if(this.socket&&(this.socket.readyState===0||this.socket.readyState===1))return;let t=null;try{t=this.socketFactory(this.serverUrl)}catch{t=null}if(!t){this.scheduleReconnect();return}this.socket=t,this.lastInbound=Date.now(),t.onopen=()=>{this.closed||(this.attempt=0,this.lastInbound=Date.now(),this.flushQueue(),this.syncPending&&(this.syncPending=!1,this.resync()),this.startPing(),this.emitStatus())},t.onmessage=e=>{this.lastInbound=Date.now(),this.receive(e.data)},t.onerror=()=>{},t.onclose=()=>{this.socket===t&&(this.socket=null),this.stopPing(),!this.closed&&this.scheduleReconnect()},this.emitStatus()}scheduleReconnect(){if(this.closed||this.reconnectTimer!==null)return;const t=Math.min(oS,rS*2**Math.min(this.attempt,6)),e=Math.max(200,Math.round(t*this.backoffScale*(.75+Math.random()*.5)));this.attempt+=1,this.emitStatus(),this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},e)}startPing(){this.stopPing(),this.pingTimer=setInterval(()=>{const t=this.socket;if(!(!t||t.readyState!==1)){if(Date.now()-this.lastInbound>lS){try{t.close()}catch{}return}try{t.send("ping")}catch{}}},aS)}stopPing(){this.pingTimer!==null&&(clearInterval(this.pingTimer),this.pingTimer=null)}attachWindow(){if(typeof window>"u"||typeof window.addEventListener!="function")return;const t=()=>{this.closed||!this.started||this.socket||(this.reconnectTimer!==null&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.connect())};window.addEventListener("online",t),window.addEventListener("focus",t),this.detachWindow=()=>{window.removeEventListener("online",t),window.removeEventListener("focus",t)}}send(t){if(this.closed)return;const e={mid:`${this.clientId}-${++this.seq}`,msg:t};if(this.local)try{this.local.postMessage(e)}catch{}const n=this.socket;if(n&&n.readyState===1&&this.serverUrl){this.sendOverSocket(e);return}this.serverUrl&&(this.useLocal||(this.enqueue(e),this.connect()))}resync(){if(this.closed)return;const t=this.socket;if(t&&t.readyState===1){try{t.send(JSON.stringify({t:"sync"}))}catch{}return}this.syncPending=!0,this.connect()}sendOverSocket(t){const e=this.socket;if(e)try{e.send(JSON.stringify({t:"msg",mid:t.mid,msg:t.msg}))}catch{}}enqueue(t){this.queue.push(t),this.queue.length>Sd&&this.queue.splice(0,this.queue.length-Sd)}flushQueue(){if(this.queue.length===0)return;this.queue.splice(0,this.queue.length).forEach(e=>this.sendOverSocket(e))}receive(t){if(t!=null){if(typeof t=="string"){const e=t.trim();if(e.length===0||e==="pong")return;let n;try{n=JSON.parse(e)}catch{return}this.receiveFrame(n);return}this.receiveFrame(t)}}receiveFrame(t){if(!t||typeof t!="object")return;const e=t;if(typeof e.t=="string")switch(e.t){case"msg":{const n=typeof e.mid=="string"?e.mid:"";this.deliver({mid:n,msg:e.msg});return}case"presence":{const n=typeof e.count=="number"?e.count:0;n!==this.serverPeers&&(this.serverPeers=n,this.emitStatus());return}case"left":{const n=typeof e.id=="string"?e.id:"";if(!n)return;this.deliver({mid:`left:${n}`,msg:{type:"bye",id:n}}),this.deliver({mid:`left-lobby:${n}`,msg:{type:"lobby-bye",id:n}});return}case"ready":{typeof e.count=="number"&&(this.serverPeers=e.count,this.emitStatus()),this.replayRoster(e.peers);return}default:return}if(e.mid!==void 0||e.msg!==void 0){const n=typeof e.mid=="string"?e.mid:"";this.deliver({mid:n,msg:e.msg})}}replayRoster(t){Array.isArray(t)&&t.forEach(e=>{if(!e||typeof e!="object")return;const n=e,r=`replay:${typeof n.mid=="string"?n.mid:""}:${++this.seq}`;this.deliver({mid:r,msg:n.msg})})}deliver(t){const e=t.msg;if(!(!e||typeof e!="object"||typeof e.type!="string")){if(t.mid){const n=Date.now();if(this.seen.get(t.mid)!==void 0)return;if(this.seen.set(t.mid,n),this.seen.size>bd){const r=this.seen.size-bd;let o=0;for(const a of this.seen.keys())if(this.seen.delete(a),o+=1,o>=r)break}}this.handlers.forEach(n=>{try{n(e)}catch(s){console.warn("[realtime] 메시지 처리 실패",s)}})}}onMessage(t){return this.handlers.add(t),()=>this.handlers.delete(t)}close(){if(this.closed)return;this.closed=!0,this.stopPing(),this.reconnectTimer!==null&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.detachWindow?.(),this.detachWindow=null;const t=this.socket;if(this.socket=null,t)try{t.close()}catch{}if(this.local){this.local.onmessage=null;try{this.local.close()}catch{}this.local=null}this.handlers.clear(),this.statusHandlers.clear()}}function Cp(i=iS,t={}){return new mS(i,t)}class gS{constructor(t,e,n={}){I(this,"element");I(this,"game");I(this,"hooks");I(this,"handleDown",t=>{this.hooks.isActive&&!this.hooks.isActive()||(this.element.setPointerCapture?.(t.pointerId),this.game.pointerDown(t.clientX,t.clientY,t.pointerId,t.button))});I(this,"handleMove",t=>{this.hooks.isActive&&!this.hooks.isActive()||this.game.pointerMove(t.clientX,t.clientY,t.pointerId)});I(this,"handleUp",t=>{this.hooks.isActive&&!this.hooks.isActive()||this.game.pointerUp(t.pointerId)});I(this,"handleCancel",t=>{this.hooks.isActive&&!this.hooks.isActive()||this.game.pointerCancel(t.pointerId)});I(this,"handleKey",t=>{if(this.hooks.isActive&&!this.hooks.isActive())return;const e=t.target;if(!(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA")))switch(t.key.toLowerCase()){case"a":case"arrowleft":t.preventDefault(),this.game.aimBy(-.04);break;case"d":case"arrowright":t.preventDefault(),this.game.aimBy(.04);break;case" ":case"enter":if(t.preventDefault(),t.repeat)break;this.game.swingPress();break;case"r":this.game.resetBall();break;case"m":this.hooks.onToggleMute?.();break;case"v":this.hooks.onToggleView?.();break;case"h":case"?":this.hooks.onToggleHelp?.();break}});I(this,"handleKeyUp",t=>{t.key!==" "&&t.key.toLowerCase()!=="enter"||this.hooks.isActive&&!this.hooks.isActive()||this.game.swingRelease()});I(this,"handleBlur",()=>{this.game.swingCancel()});this.element=t,this.game=e,this.hooks=n,t.addEventListener("pointerdown",this.handleDown),t.addEventListener("pointermove",this.handleMove),t.addEventListener("pointerup",this.handleUp),t.addEventListener("pointercancel",this.handleCancel),t.addEventListener("contextmenu",s=>s.preventDefault()),window.addEventListener("keydown",this.handleKey),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur)}dispose(){this.element.removeEventListener("pointerdown",this.handleDown),this.element.removeEventListener("pointermove",this.handleMove),this.element.removeEventListener("pointerup",this.handleUp),this.element.removeEventListener("pointercancel",this.handleCancel),window.removeEventListener("keydown",this.handleKey),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur)}}function Pp(i,t,e={}){i.addEventListener("pointerdown",n=>{const s=n;s.pointerType==="mouse"&&s.button!==0||(n.preventDefault(),e.onPress?.(),i.setPointerCapture?.(s.pointerId),t.swingPress())}),i.addEventListener("pointerup",n=>{n.preventDefault(),t.swingRelease()}),i.addEventListener("pointercancel",()=>t.swingCancel()),i.addEventListener("lostpointercapture",()=>t.swingCancel()),i.addEventListener("click",n=>n.preventDefault())}const xo=15.2,Co=new C(0,0,-9);function wd(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function cl(i,t,e,n){const s=Math.sin(t*.19+Math.cos(e*.15)*1.5)*Math.cos(e*.17+Math.sin(t*.11)*1.1);return n.setHex(i),n.offsetHSL(0,0,s*.016),n}function xS(i,t,e){const n=[];for(let r=0;r<t;r+=1){const o=i*r/t,a=i*(r+1)/t,l=r===0?4:e;for(let c=0;c<l;c+=1){const h=c/e*Math.PI*2,d=(c+1)/e*Math.PI*2,f=[Math.cos(h)*o,0,Math.sin(h)*o],u=[Math.cos(d)*o,0,Math.sin(d)*o],p=[Math.cos(h)*a,0,Math.sin(h)*a],x=[Math.cos(d)*a,0,Math.sin(d)*a];r===0?n.push(...f,...p,...x):n.push(...f,...p,...x,...f,...x,...u)}}const s=new Fe;return s.setAttribute("position",new me(n,3)),s.computeVertexNormals(),s}function _S(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d");if(!t)return null;const e=t.createRadialGradient(128,128,6,128,128,126);e.addColorStop(0,"rgba(236, 255, 255, 0.98)"),e.addColorStop(.35,"rgba(126, 238, 255, 0.9)"),e.addColorStop(.72,"rgba(62, 200, 255, 0.55)"),e.addColorStop(1,"rgba(62, 200, 255, 0.06)"),t.fillStyle=e,t.beginPath(),t.arc(128,128,126,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.55)",t.lineWidth=3;for(let s=0;s<3;s+=1){t.beginPath();const r=s/3*Math.PI*2;for(let o=0;o<Math.PI*1.5;o+=.08){const a=12+o*16,l=128+Math.cos(o+r)*a,c=128+Math.sin(o+r)*a;o===0?t.moveTo(l,c):t.lineTo(l,c)}t.stroke()}const n=new Is(i);return n.colorSpace=ke,n}function vS(i){const t=fn(i*53+17),e=[{geo:new Ae(1.05,1.1,.26,9),color:E.stoneDark,pos:[0,.13,0],jitter:.06},{geo:new Ae(.95,.95,.08,9),color:E.soil,pos:[0,.27,0],jitter:.05}],n=[E.flowerPink,E.flowerYellow,E.flowerPurple,E.white];for(let s=0;s<9;s+=1){const r=t()*Math.PI*2,o=t()*.7,a=Math.cos(r)*o,l=Math.sin(r)*o;e.push({geo:pe(.16),color:E.leaf,pos:[a,.36,l],scale:[1,.7,1],jitter:.16}),e.push({geo:pe(.075),color:n[Math.floor(t()*n.length)],pos:[a,.48,l],jitter:.1})}return fe(`flowerbed-${i%3}`,e)}function MS(i){const t=fn(20261119),e=[],n=new ri(70,56);n.rotateX(-Math.PI/2);const s=Mn(n,(z,Y,V,ut,lt)=>cl(wd(Math.floor(z*.03),Math.floor(V*.03))>.45?E.meadow:E.meadowDark,z,V,lt),.07),r=new qt(s,xs(new qe({vertexColors:!0,flatShading:!0,roughness:.98}),"turf"));r.position.y=-.46,r.receiveShadow=!0,i.add(r);const o=new Ae(xo,xo-.9,1.7,56,1),a=Mn(o,(z,Y,V,ut,lt)=>ut>.6?cl(E.grass,z,V,lt):Y>.2?cl(E.grassDark,z,V,lt):Y>-.5?(lt.setHex(E.soil),lt):(lt.setHex(E.soilDark),lt),.07),l=new qt(a,xs(new qe({vertexColors:!0,flatShading:!0,roughness:.97}),"turf"));l.position.y=-.85,l.receiveShadow=!0,l.castShadow=!0,i.add(l);const c=xs(new qe({vertexColors:!0,flatShading:!0,roughness:.9}),"stone"),h=Mn(xS(5.15,4,34),(z,Y,V,ut,lt)=>{const It=Math.floor(Math.hypot(z,V)/1.3),Ht=wd(It*3+Math.floor(z*.7),Math.floor(V*.7))>.5;return lt.setHex(Ht?E.stone:E.stoneLight),lt},.05),d=new qt(h,c);d.position.y=.014,d.receiveShadow=!0,i.add(d);const f=new Hn(5.15,5.6,40);f.rotateX(-Math.PI/2);const u=new qt(Mn(f,(z,Y,V,ut,lt)=>(lt.setHex(E.stoneDark),lt)),c);u.position.y=.02,u.receiveShadow=!0,i.add(u);for(let z=0;z<6;z+=1){const Y=new qt(Mn(it(2.5,.12,.95),(V,ut,lt,It,Ht)=>(Ht.setHex(z%2===0?E.stone:E.stoneLight),Ht),.05),c);Y.position.set((t()-.5)*.12,.03,-3.4-z*.95),Y.receiveShadow=!0,Y.castShadow=!0,i.add(Y)}const p=7.8,x=-3.6,g=2.8,m=Yf(1.4),_=new qe({color:m?16777215:E.water,map:m,roughness:.12,metalness:.3,transparent:!0,opacity:.93});_.userData.oneoneSurface="water";const b=new qt(new ri(g,40),_);b.rotation.x=-Math.PI/2,b.position.set(p,.018,x),i.add(b);const M=b;for(let z=0;z<12;z+=1){const Y=z/12*Math.PI*2,V=ar(.42+t()*.18,z+21);V.position.set(p+Math.cos(Y)*(g+.16),.02,x+Math.sin(Y)*(g+.16)),V.rotation.y=Y,i.add(V)}for(let z=0;z<5;z+=1){const Y=t()*Math.PI*2,V=sp(.9+t()*.4,z+4);V.position.set(p+Math.cos(Y)*(g-.15),.02,x+Math.sin(Y)*(g-.15)),i.add(V)}for(let z=0;z<4;z+=1){const Y=t()*Math.PI*2,V=t()*1.7,ut=rp(.7+t()*.5);ut.position.set(p+Math.cos(Y)*V,.03,x+Math.sin(Y)*V),ut.rotation.y=t()*3,i.add(ut)}const T=new Te;T.position.set(p-g-.3,.02,x+.6),T.rotation.y=.5;for(let z=0;z<4;z+=1)T.add(new qt(Mn(it(1.5,.1,.32),(Y,V,ut,lt,It)=>(It.setHex(z%2===0?E.wood:E.woodLight),It),.06),xs(new qe({vertexColors:!0,flatShading:!0,roughness:.88}),"wood")));T.children.forEach((z,Y)=>{z.position.set(0,.06,-.5+Y*.33)}),i.add(T),e.push({x:p,z:x,r:g+.35});const A=H1(),v=-9.7,w=2.4;A.position.set(v,0,w),A.rotation.y=.5,i.add(A),e.push({x:v,z:w,r:5.1});const U=fc("ONEOINE CLUBHOUSE","#ffd9a0",{scale:[3.6,.55],canvasWidth:640,canvasHeight:100,fontSize:44,bg:"rgba(255, 122, 89, 0.92)"});U&&(U.position.set(v+1.6,3.15,w+3.2),U.material.rotation=0,i.add(U));const P=ap(1);P.position.set(-12.4,0,-4.8),P.rotation.y=1.15,i.add(P),e.push({x:-12.4,z:-4.8,r:1.35});const F=uc(1);F.position.set(-5.6,0,5.4),F.rotation.y=.4,i.add(F),e.push({x:-5.6,z:5.4,r:.5});const k=V1(1);k.position.set(-9.4,0,10.4),k.rotation.y=-.3,i.add(k),e.push({x:-9.4,z:10.4,r:1.2}),[[-4.3,6.4,.35],[4.6,4.2,-.9],[-5.4,-3.4,1.15],[6.4,1,-1.3]].forEach(([z,Y,V])=>{const ut=Ao(1);ut.position.set(z,0,Y),ut.rotation.y=V,i.add(ut),e.push({x:z,z:Y,r:.95})}),[[-3.2,-6.2],[3.2,-6.2],[-6.6,.4],[6.6,-.6],[-2.2,6.6],[2.6,7.4]].forEach(([z,Y])=>{const V=op(1);V.position.set(z,0,Y),V.rotation.y=t()*.6,i.add(V),e.push({x:z,z:Y,r:.3})}),[[8.4,6.4,1],[-11.2,-3.6,2],[3.6,-9.6,3]].forEach(([z,Y,V])=>{const ut=vS(V);ut.position.set(z,0,Y),i.add(ut),e.push({x:z,z:Y,r:1.05})});const K=W1(1);K.position.set(5.6,0,-6.2),i.add(K),e.push({x:5.6,z:-6.2,r:.35}),[[-12.4,-2.2,1.25,!1],[-11.4,8.4,1.1,!0],[11.4,6.8,1.05,!1],[12.6,-1.2,1.15,!0],[-7.2,-10.4,1,!1],[8.2,-11.2,.95,!0],[-1.4,13.4,1.05,!1],[-2.8,-12.6,.9,!0],[12.8,-8.4,1.15,!1],[-13.2,3.4,.85,!0],[7.6,11.6,.95,!1],[-9.6,10.8,1,!0]].forEach(([z,Y,V,ut])=>{const lt=ut?Vo(V):Wo(V);lt.position.set(z,0,Y),lt.rotation.y=t()*Math.PI,i.add(lt),e.push({x:z,z:Y,r:.6*V})}),[[-7.4,7.4,.75],[9.8,2.2,.65],[4.9,-7.6,.6],[-9.8,-5.8,.55],[10.8,-5.2,.6]].forEach(([z,Y,V])=>{const ut=ar(V,Math.round(z*3+Y));ut.position.set(z,.02,Y),ut.rotation.y=t()*3,i.add(ut)});const $=22;for(let z=0;z<$;z+=1){const Y=z/$*Math.PI*2,V=Math.cos(Y)*(xo-.75),ut=Math.sin(Y)*(xo-.75);if(Math.abs(V)<3.2&&ut<-6)continue;const lt=Math.cos(Y*9)>.4?G1(2.1,1):lp(2.1,1);lt.position.set(V,.02,ut),lt.rotation.y=-Y+Math.PI/2,i.add(lt)}for(let z=0;z<26;z+=1){const Y=t()*Math.PI*2,V=5.9+t()*7.2,ut=Math.cos(Y)*V,lt=Math.sin(Y)*V;if(Math.hypot(ut-p,lt-x)<g+1||Math.hypot(ut-v,lt-w)<5.4||Math.abs(ut)<2.2&&lt<-4)continue;const It=hp(z+11);It.position.set(ut,.01,lt),It.rotation.y=t()*3,It.scale.setScalar(.9+t()*.5),i.add(It)}for(let z=0;z<16;z+=1){const Y=z/16*Math.PI*2+t()*.2,V=22+t()*14,ut=Math.cos(Y)*V,lt=Math.sin(Y)*V,It=z%3===0?Vo(1.7+t()*.8):Wo(1.6+t()*.9);It.position.set(ut,-.46,lt),It.rotation.y=t()*3,i.add(It)}const j=new Te;j.position.copy(Co),i.add(j);const rt=new qe({vertexColors:!0,flatShading:!0,roughness:.85});rt.userData.oneoneSurface="stone";const Dt=new qe({color:7333631,emissive:3524863,emissiveIntensity:1.4,roughness:.25,metalness:.15,flatShading:!0}),Nt=(z,Y,V)=>{const ut=V===void 0?z:Mn(z,(It,Ht,Qt,N,Me)=>(Me.setHex(V),Me),.05),lt=new qt(ut,Y);return lt.castShadow=!0,lt.receiveShadow=!0,j.add(lt),lt};Nt(new Ae(2.9,3.15,.26,14),rt,E.stoneDark).position.y=-.02,Nt(new Ae(2.6,2.75,.2,14),rt,E.stone).position.y=.16,Nt(new Ae(2.35,2.45,.12,14),rt,E.stoneLight).position.y=.3,[-1.78,1.78].forEach(z=>{Nt(it(.66,3.1,.66),rt,E.stone).position.set(z,1.85,0),Nt(new Ae(.4,.5,.36,8),rt,E.stoneDark).position.set(z,.52,0),Nt(it(.8,.16,.8),rt,E.stoneLight).position.set(z,3.46,0);const V=new qt(new Gn(.72,.2,.72),Dt);V.position.set(z,3.66,0),j.add(V),Nt(it(.72,.1,.72),rt,E.stoneDark).position.set(z,1,0),e.push({x:Co.x+z,z:Co.z,r:.5})}),Nt(it(4.6,.42,.72),rt,E.stone).position.set(0,3.9,0),Nt(it(4.9,.14,.86),rt,E.stoneDark).position.set(0,4.16,0),Nt(new $e(.5,.5,4),rt,E.stoneLight).position.set(0,4.48,0);const Q=new qe({color:7333631,emissive:3524863,emissiveIntensity:1.4,roughness:.25,metalness:.2}),gt=new qt(new bi(1.36,.11,14,48),Q);gt.position.y=1.72,j.add(gt);const Lt=new qt(new bi(1.1,.035,8,44),Q);Lt.position.y=1.72,j.add(Lt);const Gt=_S(),xt=new bn({color:16777215,map:Gt,transparent:!0,opacity:.9,side:dn,depthWrite:!1}),Ut=new qt(new ri(1.28,48),xt);Ut.position.set(0,1.72,.02),j.add(Ut);const he=new bn({color:10219263,transparent:!0,opacity:.3,side:dn,depthWrite:!1,blending:oi}),tt=new qt(new ri(1.9,48),he);tt.position.set(0,.34,0),tt.rotation.x=-Math.PI/2,j.add(tt);const Pt=new gg(10479871,6,12,2);Pt.position.set(0,1.9,.9),j.add(Pt);const Tt=fc("플레이룸 ⛳","#8ff3ff",{scale:[2.8,.8],canvasWidth:512,canvasHeight:146,fontSize:62,bg:"rgba(12, 38, 48, 0.9)"});Tt&&(Tt.position.set(0,4.95,0),j.add(Tt)),[-2.7,2.7].forEach(z=>{const Y=new qt(Mn(Wt(.12,.16,1.5,6),(ut,lt,It,Ht,Qt)=>(Qt.setHex(E.woodDark),Qt)),rt);Y.position.set(z,.75,.2),Y.castShadow=!0,j.add(Y);const V=new qt(new $e(.2,.42,5),new qe({color:16766073,emissive:16754237,emissiveIntensity:1.5,roughness:.5,flatShading:!0}));V.position.set(z,1.62,.2),j.add(V)});let J=0;const ot=z=>{J+=z;const Y=J,V=M.material;V.map&&(V.map.offset.x=(V.map.offset.x+z*.012)%1,V.map.offset.y=(V.map.offset.y+z*.02)%1),Q.emissiveIntensity=1.25+Math.sin(Y*2.2)*.45,gt.scale.setScalar(1+Math.sin(Y*2.2)*.012),xt.opacity=.78+Math.sin(Y*1.7)*.12,Ut.rotation.z+=z*.35;const ut=1+Math.sin(Y*2.6)*.03;Ut.scale.set(ut,ut,1),he.opacity=.24+Math.sin(Y*1.4)*.08,tt.rotation.z-=z*.18,Pt.intensity=5+Math.sin(Y*2.1)*1.4};for(let z=0;z<6;z+=1){const Y=t()*Math.PI*2,V=8+t()*18,ut=[{geo:pe(1),color:E.white,pos:[0,0,0],scale:[2,1,1.4],jitter:.04},{geo:pe(1),color:E.white,pos:[1.6,-.2,.2],scale:[1.2,.75,.9],jitter:.04},{geo:pe(1),color:E.white,pos:[-1.6,-.15,-.1],scale:[1.1,.7,.85],jitter:.04},{geo:pe(1),color:E.white,pos:[.4,.6,0],scale:[1,.7,.8],jitter:.04}],lt=fe("lobby-cloud",ut);lt.position.set(Math.cos(Y)*V,11+t()*5,Math.sin(Y)*V),lt.rotation.y=t()*3,i.add(lt)}return{obstacles:e,gate:j,gateRing:gt,gateInner:Ut,gateHalo:tt,gateGlow:Pt,update:ot}}const us=13.6,Qn=Co,yS=1.35,Ed=3.7,Td=9.4,Ad=.48,SS=.12,bS=[{name:"버디헌터",color:Fi[1].hex,spawn:[-4.2,2.4]},{name:"핑크공",color:Fi[5].hex,spawn:[3.6,1.2]},{name:"싱커",color:Fi[2].hex,spawn:[5.4,6.2]},{name:"캐디",color:Fi[4].hex,spawn:[-2.6,-2.6]}],_o=["👋","👏","⛳","😂","🎉","🔥"],wS=new C;class ES{constructor(t){I(this,"scene");I(this,"camera");I(this,"audio");I(this,"realtime");I(this,"events");I(this,"canvas");I(this,"root",new Te);I(this,"plaza",new Te);I(this,"gateGroup",new Te);I(this,"obstacles",[]);I(this,"disposables",[]);I(this,"plazaHandle",null);I(this,"mergedGeometries",[]);I(this,"identity",null);I(this,"localGolfer",null);I(this,"localPos",new C(0,0,5.6));I(this,"localHeading",Math.PI);I(this,"localMoving",!1);I(this,"keys",new Set);I(this,"stick",new ft);I(this,"target",null);I(this,"pointer",null);I(this,"joystickEl",null);I(this,"joystickKnob",null);I(this,"guests",[]);I(this,"remotes",new Map);I(this,"playroom",new Map);I(this,"bubbles",[]);I(this,"replies",[]);I(this,"mode","preview");I(this,"time",0);I(this,"netTimer",0);I(this,"previewAngle",.55);I(this,"enterCooldown",0);I(this,"nearGate",!1);I(this,"cameraSnap",!0);I(this,"camPos",new C);I(this,"camLook",new C);I(this,"handleKeyDown",t=>{if(this.mode!=="lobby")return;const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"))return;const n=t.key.toLowerCase();n.startsWith("arrow")&&t.preventDefault(),this.keys.add(n)});I(this,"handleKeyUp",t=>{this.keys.delete(t.key.toLowerCase())});I(this,"releaseKeys",()=>{this.keys.clear()});I(this,"handlePointerDown",t=>{this.mode==="lobby"&&(this.pointer={id:t.pointerId,startX:t.clientX,startY:t.clientY,dragging:!1},this.canvas?.setPointerCapture?.(t.pointerId))});I(this,"handlePointerMove",t=>{if(!this.pointer||this.pointer.id!==t.pointerId)return;const e=t.clientX-this.pointer.startX,n=t.clientY-this.pointer.startY,s=Math.hypot(e,n);if(!this.pointer.dragging&&s>14&&(this.pointer.dragging=!0,this.target=null,this.showJoystick(this.pointer.startX,this.pointer.startY)),this.pointer.dragging){const o=Math.min(1,s/62),a=s>.001?e/s*o:0,l=s>.001?n/s*o:0;this.stick.set(a,l),this.joystickKnob&&(this.joystickKnob.style.transform=`translate(calc(-50% + ${a*32}px), calc(-50% + ${l*32}px))`)}});I(this,"handlePointerUp",t=>{!this.pointer||this.pointer.id!==t.pointerId||(this.pointer.dragging||this.tapMove(this.pointer.startX,this.pointer.startY),this.pointer=null,this.stick.set(0,0),this.hideJoystick())});I(this,"handlePointerCancel",t=>{!this.pointer||this.pointer.id!==t.pointerId||(this.pointer=null,this.stick.set(0,0),this.hideJoystick())});this.scene=t.scene,this.camera=t.camera,this.audio=t.audio,this.realtime=t.realtime,this.events=t.events??{},this.canvas=t.canvas??null,this.root.add(this.plaza),this.scene.add(this.root),this.buildPlaza(),this.buildGuests(),this.realtime.onMessage(e=>this.handleMessage(e)),this.canvas&&(this.canvas.addEventListener("pointerdown",this.handlePointerDown),this.canvas.addEventListener("pointermove",this.handlePointerMove),this.canvas.addEventListener("pointerup",this.handlePointerUp),this.canvas.addEventListener("pointercancel",this.handlePointerCancel),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.releaseKeys),this.createJoystick()),this.placeCamera(!0)}get currentMode(){return this.mode}get isNearGate(){return this.nearGate}enter(t){this.identity=t,this.localGolfer?.dispose();const e=new Ro({color:t.color,name:t.name,glow:!0,club:!1});this.localGolfer=e,this.root.add(e.group),this.localPos.set(0,0,5.6),this.localHeading=Math.PI,this.target=null,this.enterCooldown=1.2,this.cameraSnap=!0,e.group.position.copy(this.localPos),e.group.rotation.y=this.localHeading,this.mode="lobby",this.broadcastState(),this.realtime.resync?.(),this.emitPlayers()}setMode(t){t!==this.mode&&(t==="idle"?(this.broadcastPlayroom(!0),this.localGolfer?.setVisible(!1),this.target=null,this.stick.set(0,0),this.keys.clear(),this.hideJoystick()):t==="lobby"&&(this.localGolfer?.setVisible(!0),this.localGolfer?.group.position.copy(this.localPos),this.cameraSnap=!0),this.mode=t)}returnFromPlayroom(){this.setMode("lobby"),this.localPos.set(0,0,Qn.z+2.6),this.localHeading=0,this.target=null,this.enterCooldown=1.5,this.cameraSnap=!0,this.nearGate=!1,this.events.onGateChange?.(!1),this.localGolfer&&(this.localGolfer.group.position.copy(this.localPos),this.localGolfer.group.rotation.y=this.localHeading,this.localGolfer.setVisible(!0)),this.broadcastState(),this.emitPlayers()}sendEmoji(t){!this.identity||this.mode!=="lobby"||(this.spawnBubble(this.localPos,t),this.audio.emoji(),this.realtime.send({type:"lobby-emoji",id:this.identity.id,emoji:t}),this.maybeGuestReaction(t))}requestPlayroom(){this.mode==="lobby"&&this.events.onEnterPlayroom?.()}buildPlaza(){this.plazaHandle=MS(this.plaza),this.gateGroup=this.plazaHandle.gate,this.obstacles.push(...this.plazaHandle.obstacles);const t=np(this.plaza);t&&(this.plaza.add(t),this.mergedGeometries.push(...t.userData.geometries));const e=new Set([this.gateGroup]);t&&e.add(t),this.mergedGeometries.push(...ip(this.plaza,e))}buildGuests(){bS.forEach((t,e)=>{const n=new Ro({color:t.color,name:t.name,club:e%2===0}),s=new C(t.spawn[0],0,t.spawn[1]);n.group.position.copy(s),this.root.add(n.group),this.guests.push({golfer:n,pos:s,target:this.pickGuestTarget(s),heading:Math.random()*Math.PI*2,wait:e*.7,emojiTimer:3+Math.random()*6,speed:1.35+Math.random()*.55})})}pickGuestTarget(t){for(let e=0;e<16;e+=1){const n=Math.random()*Math.PI*2,s=2+Math.random()*8.5,r=Math.cos(n)*s,o=Math.sin(n)*s;if(!(Math.hypot(r-7.8,o+3.4)<3.4)&&!(Math.hypot(r+9.7,o-2.4)<5.5)&&!(Math.abs(r)<2.4&&o<-5)&&!this.obstacles.some(a=>Math.hypot(r-a.x,o-a.z)<a.r+.85)&&!(t&&Math.hypot(r-t.x,o-t.z)<2.2))return new C(r,0,o)}return new C(0,0,-2.5)}createJoystick(){if(typeof document>"u")return;const t=document.createElement("div");t.className="joystick hidden";const e=document.createElement("span");t.appendChild(e),document.getElementById("app")?.appendChild(t),this.joystickEl=t,this.joystickKnob=e}showJoystick(t,e){this.joystickEl&&(this.joystickEl.style.left=`${t}px`,this.joystickEl.style.top=`${e}px`,this.joystickEl.classList.remove("hidden"))}hideJoystick(){this.joystickEl?.classList.add("hidden"),this.joystickKnob&&(this.joystickKnob.style.transform="translate(-50%, -50%)")}tapMove(t,e){if(!this.canvas)return;const n=this.canvas.getBoundingClientRect(),s=new ft((t-n.left)/Math.max(1,n.width)*2-1,-((e-n.top)/Math.max(1,n.height))*2+1),r=new vg;if(r.setFromCamera(s,this.camera),r.intersectObject(this.gateGroup,!0).length>0){this.target=new C(Qn.x,0,Qn.z+1);return}const o=new C,a=new ei(new C(0,1,0),0);if(!r.ray.intersectPlane(a,o))return;const l=Math.hypot(o.x,o.z);l>us&&(o.x*=us/l,o.z*=us/l),Math.hypot(o.x-Qn.x,o.z-Qn.z)<3.2&&o.set(Qn.x,0,Qn.z+1),this.target=o}update(t){const e=Math.min(t,.05);this.time+=e,this.mode==="lobby"&&this.updateLocal(e),this.updateGuests(e),this.updateBubbles(e),this.updateGate(e),this.updateRemotes(e),this.mode==="lobby"?(this.netTimer+=e,this.netTimer>=SS&&(this.netTimer=0,this.broadcastState()),this.placeCamera(!1,e)):this.mode==="preview"&&this.updatePreviewCamera(e)}updateLocal(t){const e=this.localGolfer;if(!e)return;const n=wS.set(0,0,0);(this.keys.has("w")||this.keys.has("arrowup"))&&(n.z-=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(n.z+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(n.x-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(n.x+=1),n.x+=this.stick.x,n.z+=this.stick.y;let s=!1;const r=Math.min(1,n.length());if(r>.05){this.target=null,n.normalize();const c=Ed*Math.max(.35,r);this.localPos.addScaledVector(n,c*t),this.localHeading=Math.atan2(n.x,n.z),s=!0}else if(this.target){const c=this.target.x-this.localPos.x,h=this.target.z-this.localPos.z,d=Math.hypot(c,h);d<.14?this.target=null:(n.set(c/d,0,h/d),this.localPos.addScaledVector(n,Math.min(Ed,d*3.4)*t),this.localHeading=Math.atan2(n.x,n.z),s=!0)}this.resolve(this.localPos),this.localMoving=s,e.group.position.set(this.localPos.x,0,this.localPos.z);const o=this.shortestAngle(e.group.rotation.y,this.localHeading);e.group.rotation.y+=o*Math.min(1,t*12),e.update(t,s),this.enterCooldown=Math.max(0,this.enterCooldown-t);const a=Math.hypot(this.localPos.x-Qn.x,this.localPos.z-Qn.z);a<yS&&this.enterCooldown<=0&&(this.enterCooldown=2,this.events.onEnterPlayroom?.());const l=a<4.2;l!==this.nearGate&&(this.nearGate=l,this.events.onGateChange?.(l))}shortestAngle(t,e){let n=e-t;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n}resolve(t){const e=Math.hypot(t.x,t.z);e>us&&(t.x*=us/e,t.z*=us/e);for(const n of this.obstacles){const s=t.x-n.x,r=t.z-n.z,o=Math.hypot(s,r),a=n.r+.34;o<a&&o>1e-4&&(t.x=n.x+s/o*a,t.z=n.z+r/o*a)}}updateGuests(t){const e=this.mode==="lobby"&&!!this.identity;for(const n of this.guests){if(n.wait>0)n.wait-=t,n.golfer.update(t,!1);else{const r=n.target.x-n.pos.x,o=n.target.z-n.pos.z,a=Math.hypot(r,o);if(a<.25)n.wait=1.1+Math.random()*2.8,n.target=this.pickGuestTarget(n.pos),n.golfer.update(t,!1);else{const l=r/a,c=o/a;n.pos.x+=l*n.speed*t,n.pos.z+=c*n.speed*t,this.resolve(n.pos),n.heading=Math.atan2(l,c),n.golfer.update(t,!0)}}const s=this.shortestAngle(n.golfer.group.rotation.y,n.heading);if(n.golfer.group.rotation.y+=s*Math.min(1,t*7),n.golfer.group.position.set(n.pos.x,0,n.pos.z),e&&(n.emojiTimer-=t,n.emojiTimer<=0&&(n.emojiTimer=7+Math.random()*9,Math.random()<.65))){const r=_o[Math.floor(Math.random()*_o.length)];this.spawnBubble(n.pos,r)}}for(let n=this.replies.length-1;n>=0;n-=1){const s=this.replies[n];s.delay-=t,s.delay<=0&&(this.spawnBubble(s.guest.pos,s.emoji),this.replies.splice(n,1),Math.random()<.35&&this.audio.emoji())}}updateGate(t){this.plazaHandle?.update(t)}spawnBubble(t,e){const n=Ry(e);n&&(n.position.set(t.x,1.45,t.z),this.scene.add(n),this.bubbles.push({sprite:n,life:2.6,maxLife:2.6,drift:(Math.random()-.5)*.3}))}updateBubbles(t){for(let e=this.bubbles.length-1;e>=0;e-=1){const n=this.bubbles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.sprite),n.sprite.material.dispose(),this.bubbles.splice(e,1);continue}const s=1-n.life/n.maxLife;n.sprite.position.y+=t*.55,n.sprite.position.x+=t*n.drift,n.sprite.material.opacity=Math.min(1,(1-s)*2.2);const r=.64+Math.sin(s*Math.PI)*.1;n.sprite.scale.set(r,r,1)}}maybeGuestReaction(t){const e=this.guests.map(r=>({guest:r,distance:r.pos.distanceTo(this.localPos)})).filter(r=>r.distance<8).sort((r,o)=>r.distance-o.distance);if(!e.length||Math.random()>.8)return;const n=e[0].guest,s=Math.random()<.55?t:_o[Math.floor(Math.random()*_o.length)];this.replies.push({guest:n,delay:.45+Math.random()*.7,emoji:s})}placeCamera(t,e=.016){const s=Td*Math.cos(Ad),r=this.localPos.x,o=this.localPos.z+s,a=.95+Td*Math.sin(Ad);if(t||this.cameraSnap)this.camPos.set(r,a,o),this.camLook.set(this.localPos.x,.95,this.localPos.z),this.cameraSnap=!1;else{const l=1-Math.exp(-5.5*e);this.camPos.x+=(r-this.camPos.x)*l,this.camPos.y+=(a-this.camPos.y)*l,this.camPos.z+=(o-this.camPos.z)*l,this.camLook.x+=(this.localPos.x-this.camLook.x)*(1-Math.exp(-8*e)),this.camLook.y+=(.95-this.camLook.y)*(1-Math.exp(-8*e)),this.camLook.z+=(this.localPos.z-this.camLook.z)*(1-Math.exp(-8*e))}this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook)}updatePreviewCamera(t){this.previewAngle+=t*.075;const e=19,n=Math.sin(this.previewAngle)*e,s=Math.cos(this.previewAngle)*e;this.camera.position.set(n,9.5,s+1.5),this.camera.lookAt(0,1.1,-1.5)}broadcastState(){if(!this.identity)return;const t={id:this.identity.id,name:this.identity.name,color:this.identity.color,pos:[ti(this.localPos.x),0,ti(this.localPos.z)],heading:ti(this.localHeading),moving:this.localMoving,ts:Date.now()};this.realtime.send({type:"lobby",player:t})}broadcastPlayroom(t){this.identity&&this.realtime.send({type:"playroom",id:this.identity.id,name:this.identity.name,joined:t})}handleMessage(t){if(this.identity)switch(t.type){case"lobby":{if(t.player.id===this.identity.id)return;this.applyPeer(t.player);break}case"lobby-bye":{const e=this.remotes.get(t.id);e&&(this.remotes.delete(t.id),e.golfer.dispose()),this.playroom.delete(t.id),this.emitPlayers();break}case"lobby-emoji":{const e=this.remotes.get(t.id);if(!e||this.mode!=="lobby")return;this.spawnBubble(e.target,t.emoji),this.audio.emoji();break}case"playroom":{if(t.id===this.identity.id)return;if(t.joined){this.playroom.set(t.id,{id:t.id,name:t.name,color:this.remotes.get(t.id)?.color??"#9ad0ff"});const e=this.remotes.get(t.id);e&&(this.remotes.delete(t.id),e.golfer.dispose()),this.events.onToast?.(`${t.name}님이 플레이룸으로 들어갔어요`)}else this.playroom.delete(t.id),this.events.onToast?.(`${t.name}님이 대기실로 돌아왔어요`);this.emitPlayers();break}}}applyPeer(t){const e=this.remotes.get(t.id);if(e){e.target.set(t.pos[0],t.pos[1],t.pos[2]),e.heading=t.heading,e.moving=t.moving,e.ts=t.ts,e.name!==t.name&&(e.name=t.name,e.golfer.setName(t.name,t.color));return}this.playroom.delete(t.id);const n=new Ro({color:t.color,name:t.name}),s=new C(t.pos[0],t.pos[1],t.pos[2]);n.group.position.copy(s),this.root.add(n.group),this.remotes.set(t.id,{golfer:n,target:s,heading:t.heading,moving:t.moving,name:t.name,color:t.color,id:t.id,ts:t.ts}),this.events.onToast?.(`${t.name}님이 대기실에 있어요`),this.emitPlayers()}updateRemotes(t){const e=Date.now();let n=!1;for(const s of[...this.remotes.values()]){if(e-s.ts>12e3){this.remotes.delete(s.id),s.golfer.dispose(),n=!0;continue}s.golfer.group.position.lerp(s.target,1-Math.exp(-9*t));const r=this.shortestAngle(s.golfer.group.rotation.y,s.heading);s.golfer.group.rotation.y+=r*Math.min(1,t*8),s.golfer.update(t,s.moving)}n&&this.emitPlayers()}emitPlayers(){const t=[...this.remotes.values()].map(n=>({id:n.id,name:n.name,color:n.color})),e=[...this.playroom.values()];this.events.onPlayers?.(t,e)}get emojiSet(){return My}debugInput(t,e){this.stick.set(t,e)}getPeers(){return[...this.remotes.values()].map(t=>({id:t.id,name:t.name,pos:[ti(t.target.x),0,ti(t.target.z)]}))}get localPosition(){return[ti(this.localPos.x),0,ti(this.localPos.z)]}get guestCount(){return this.guests.length}debugGuests(){return this.guests.map(t=>[ti(t.pos.x),ti(t.pos.z)])}dispose(){this.canvas&&(this.canvas.removeEventListener("pointerdown",this.handlePointerDown),this.canvas.removeEventListener("pointermove",this.handlePointerMove),this.canvas.removeEventListener("pointerup",this.handlePointerUp),this.canvas.removeEventListener("pointercancel",this.handlePointerCancel),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.releaseKeys)),this.joystickEl?.remove(),this.localGolfer?.dispose(),this.remotes.forEach(t=>t.golfer.dispose()),this.remotes.clear(),this.guests.forEach(t=>t.golfer.dispose()),this.guests.length=0,this.bubbles.forEach(t=>{this.scene.remove(t.sprite),t.sprite.material.dispose()}),this.bubbles.length=0,this.disposables.forEach(t=>t.dispose()),this.disposables.length=0,this.mergedGeometries.forEach(t=>t.dispose()),this.mergedGeometries.length=0,this.scene.remove(this.root)}}function ti(i){return Math.round(i*100)/100}function TS(i){i.shadowMap.enabled=!0,i.shadowMap.type=kd,i.outputColorSpace=ke,i.toneMapping=Tc,i.toneMappingExposure=1}function Lp(i,t={}){const e=t.radius??170,n=t.cloudCount??9,s=new Te,r=m1(),o=new Ln(e,32,20),a=new bn({map:r??null,color:r?16777215:10475253,side:sn,depthWrite:!1,fog:!1}),l=new qt(o,a);l.renderOrder=-10,s.add(l);const c=(t.sunDirection??new C(.42,.62,.5)).clone().normalize(),h=_1();if(h){const u=new Xi({map:h,color:16774095,transparent:!0,opacity:.85,depthWrite:!1,fog:!1,blending:oi}),p=new Ds(u);p.position.copy(c).multiplyScalar(e*.82),p.scale.setScalar(e*.52),s.add(p)}const d=[];for(let u=0;u<n;u+=1){const p=X1(.7+Math.random()*.9);if(!p)break;const x=u/n*Math.PI*2+Math.random()*.5,g=60+Math.random()*60,m=26+Math.random()*22;p.position.set(Math.cos(x)*g,m,Math.sin(x)*g),p.material.opacity=.55+Math.random()*.3,s.add(p),d.push({sprite:p,angle:x,radius:g,speed:.006+Math.random()*.008,y:m})}if(t.hills!==!1){const u=xs(new qe({color:5214034,roughness:1,flatShading:!0}),"turf");u.userData.oneonePlainReal=!0;for(let p=0;p<26;p+=1){const x=p/26*Math.PI*2+Math.random()*.25,g=112+Math.random()*38,m=18+Math.random()*18,_=new qt(new $e(m,m*.62,7),u);_.position.set(Math.cos(x)*g,-9+Math.random()*2.5,Math.sin(x)*g),_.rotation.y=Math.random()*Math.PI,_.receiveShadow=!1,_.userData.realRound=!0,s.add(_)}}i.add(s);let f=0;return{update(u){f+=u;for(const p of d)p.angle+=p.speed*u,p.sprite.position.x=Math.cos(p.angle)*p.radius,p.sprite.position.z=Math.sin(p.angle)*p.radius,p.sprite.position.y=p.y+Math.sin(f*.25+p.angle)*.6},dispose(){i.remove(s),o.dispose(),a.dispose(),s.traverse(u=>{const p=u;p.isSprite&&p.material.dispose();const x=u;x.isMesh&&x.geometry.dispose()})}}}function Xt(i){const t=document.getElementById(i);if(!t)throw new Error(`#${i} 요소를 찾을 수 없습니다`);return t}function Ie(i){return Xt(i)}const sh=Xt("scene");let Ar;try{Ar=new f1({canvas:sh,antialias:!0,powerPreference:"high-performance"})}catch{const i=document.createElement("div");throw i.style.cssText="position:fixed;inset:0;display:grid;place-items:center;padding:32px;text-align:center;font-weight:700;background:#eaf7ff;color:#16323b;z-index:99",i.textContent="이 브라우저에서는 3D 대기실을 실행할 수 없어요. 최신 Chrome·Safari·Edge에서 열어주세요.",document.body.appendChild(i),new Error("WebGL unavailable")}TS(Ar);Ar.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const xc=iy(Ar),zi=new yn(55,1,.1,320),Xn=new zc;Xn.background=new Bt(12575995);Xn.fog=new $o(13625851,105,265);Lp(Xn,{radius:170,cloudCount:10,sunDirection:new C(.42,.66,.46)});const AS=new Lf(14479359,10135685,.58);Xn.add(AS);const on=new jo(16774108,2.15);on.position.set(20,30,18);on.castShadow=!0;on.shadow.mapSize.set(2048,2048);on.shadow.camera.left=-28;on.shadow.camera.right=28;on.shadow.camera.top=28;on.shadow.camera.bottom=-28;on.shadow.camera.near=.5;on.shadow.camera.far=110;on.shadow.bias=-4e-4;on.shadow.normalBias=.035;Xn.add(on);Xn.add(on.target);const Dp=new jo(13625087,.3);Dp.position.set(-16,12,-20);Xn.add(Dp);const Yn=new zc;Yn.background=new Bt(12904443);Yn.fog=new $o(13823227,85,240);Lp(Yn,{radius:190,cloudCount:8,sunDirection:new C(.5,.6,.42)});const RS=new Lf(15004927,11053196,.6);Yn.add(RS);const xn=new jo(16774364,2.2);xn.position.set(17,24,13);xn.castShadow=!0;xn.shadow.mapSize.set(2048,2048);xn.shadow.camera.left=-26;xn.shadow.camera.right=26;xn.shadow.camera.top=26;xn.shadow.camera.bottom=-26;xn.shadow.camera.near=.5;xn.shadow.camera.far=80;xn.shadow.bias=-4e-4;xn.shadow.normalBias=.04;Yn.add(xn);Yn.add(xn.target);const Ip=new jo(14085375,.42);Ip.position.set(-15,10,-17);Yn.add(Ip);pp(Xn);pp(Yn);const se=new tS,Np=Cp(Rp),Up=Cp(eS,{autoConnect:!1}),ds=Xt("banner"),CS=Xt("banner-title"),PS=Xt("banner-sub"),hl=Xt("toast"),rh=Xt("hud"),oh=Xt("lobby-hud"),LS=Xt("entry"),ah=Xt("scorecard"),lh=Xt("help"),Rd=Xt("fade"),ch=Ie("btn-gate"),er=Xt("gauge"),DS=Xt("gauge-fill"),IS=Xt("gauge-marker"),_c=Xt("gauge-target"),Cd=Xt("gauge-power"),NS=document.querySelector(".gauge-max"),Js=Xt("live-goal"),US=Xt("range-max"),FS=Xt("range-club"),ms=Ie("btn-swing"),ul=Xt("swing-label"),dl=Xt("swing-sub"),Rr=Xt("clubs"),Cr=Ie("btn-club"),Fp=Xt("club-code"),Op=Xt("club-name"),Sr=Xt("club-tray"),sa=Ie("btn-emoji"),br=Xt("emoji-tray"),Pd=Ie("hole-pill"),OS=Xt("hole-tip"),hh=Xt("shot-dist"),uh=Xt("shot-lie"),vc=Ie("btn-view"),zS=Xt("view-label"),kS=Ie("btn-aim-left"),BS=Ie("btn-aim-right");let Ld=0,Dd=0;function cr(i,t="",e="coral"){CS.textContent=i,PS.textContent=t,ds.className=`banner ${e==="coral"?"":e}`.trim(),ds.classList.remove("hidden"),ds.style.animation="none",ds.offsetWidth,ds.style.animation="",window.clearTimeout(Ld),Ld=window.setTimeout(()=>ds.classList.add("hidden"),2500)}function Un(i){hl.textContent=i,hl.classList.remove("hidden"),window.clearTimeout(Dd),Dd=window.setTimeout(()=>hl.classList.add("hidden"),2300)}const GS=Array.from(document.querySelectorAll("[data-net]"));function HS(i,t){const e=t.peers>0?`${t.peers}명`:"";t.mode==="websocket"?(i.dataset.state="online",i.textContent=e?`🟢 ${e}`:"🟢 실시간",i.title=e?`실시간 연결 · 같은 방 ${e}`:"다른 기기·휴대폰과 실시간으로 연결됐어요"):t.mode==="connecting"?(i.dataset.state="waiting",i.textContent="🟡 연결 중",i.title="실시간 서버에 연결하는 중이에요"):t.mode==="local"?(i.dataset.state="local",i.textContent="⚪ 로컬",i.title="같은 브라우저 탭끼리만 동기화돼요 (실시간 서버에 연결되지 않음)"):(i.dataset.state="off",i.textContent="⚫ 오프라인",i.title="동기화가 꺼져 있어요. 혼자 플레이합니다")}function zp(i,t){const e=GS.filter(n=>n.dataset.net===t);e.length!==0&&i.onStatus(n=>e.forEach(s=>HS(s,n)))}zp(Np,"lobby");zp(Up,"play");let Pe="landing",Hi=null,Ls=!1;function kp(i){Ls=!0,Rd.classList.add("on"),window.setTimeout(()=>{i(),window.setTimeout(()=>Rd.classList.remove("on"),70),Ls=!1},200)}const Mc=i=>(i+.25)/1.25*100;let Po=!1;const VS=i=>`${(Math.round(i*10)/10).toFixed(1)}m`;function Bp(i,t,e){const n=Rn(i);US.textContent=t<10?`${t.toFixed(1)}m`:`${Math.round(t)}m`,FS.textContent=n.code,NS?.classList.toggle("fine",e)}function Gp(i){const t=i.neededPower>1.02,e=i.phase==="power"||i.phase==="impact";if(_c.style.left=`${Mc(t?1:Math.max(0,i.neededPower))}%`,_c.classList.toggle("short",t),Js.classList.toggle("short",t&&!e),Js.classList.toggle("live",e),e){Js.textContent=`${i.powerPercent}% · ${VS(i.estimate)}`;return}if(t){const n=Math.max(1,Math.round(i.distance-i.clubMax));Js.textContent=`🎯 ${n}m 부족`;return}Js.textContent=`🎯 ${Math.round(Math.min(1,Math.max(0,i.neededPower))*100)}%`}function Hp(i){const t=Math.max(-.25,Math.min(1,i.value));IS.style.left=`${Mc(t)}%`;const e=i.phase==="power"?t:i.power;DS.style.width=`${Math.max(0,e)*80}%`;const n=i.phase==="impact"||i.phase==="done";Cd.style.display=n?"block":"none",Cd.style.left=`${Mc(i.power)}%`,Po=i.phase==="power"||i.phase==="impact",er.classList.toggle("live",Po),er.classList.toggle("charging",i.phase==="power"),er.classList.toggle("hit",i.phase==="impact"&&Math.abs(i.value)<=.105),er.classList.toggle("fine",i.fine),Gp(i),_c.classList.toggle("live",Po),Bp(i.club,i.clubMax,i.fine);const s=Rn(i.club);Fp.textContent=s.code,Op.textContent=s.name,i.phase==="idle"||i.phase==="done"?(ul.textContent="스윙!",dl.textContent="꾹 눌러",ms.classList.remove("armed","impact")):i.phase==="power"?(ul.textContent="놓으면",dl.textContent=`${i.powerPercent}%`,ms.classList.add("armed"),ms.classList.remove("impact")):(ul.textContent="임팩트!",dl.textContent="존에서 탭",ms.classList.remove("armed"),ms.classList.add("impact"));const r=i.phase==="power"||i.phase==="impact";Rr.querySelectorAll(".club-chip").forEach(o=>{o.disabled=r}),r&&Pr()}function WS(i,t,e,n){Rr.querySelectorAll(".club-chip").forEach(r=>{const o=r.dataset.club;r.classList.toggle("active",o===i),r.classList.toggle("recommended",o===t),r.setAttribute("aria-pressed",String(o===i))});const s=Rn(i);Fp.textContent=s.code,Op.textContent=s.name,Cr.classList.toggle("recommended",i===t),uh.textContent=nh[n],hh.textContent=`${e<10?e.toFixed(1):Math.round(e)}m`,Xt("hole-dist").textContent=e<10?e.toFixed(1):String(Math.round(e))}pc.forEach(i=>{const t=document.createElement("button");t.type="button",t.className="club-chip",t.dataset.club=i.id,t.title=`${i.name} · ${i.note}`,t.setAttribute("aria-label",`${i.code} ${i.name}`);const e=document.createElement("b");e.textContent=i.code;const n=document.createElement("span");n.textContent=i.short;const s=document.createElement("i");s.className="rec-tag",s.textContent="추천",t.append(e,n,s),Rr.appendChild(t)});Rr.addEventListener("click",i=>{const e=i.target.closest(".club-chip");if(!e)return;const n=e.dataset.club;n&&(se.unlock(),we.setClub(n),Pr())});function XS(){ra(),Sr.classList.remove("hidden"),Cr.setAttribute("aria-expanded","true"),Rr.querySelector(".club-chip.active")?.scrollIntoView({block:"nearest",inline:"center"})}function Pr(){Sr.classList.contains("hidden")||(Sr.classList.add("hidden"),Cr.setAttribute("aria-expanded","false"))}function YS(){Pr(),br.classList.remove("hidden"),sa.setAttribute("aria-expanded","true")}function ra(){br.classList.contains("hidden")||(br.classList.add("hidden"),sa.setAttribute("aria-expanded","false"))}Cr.addEventListener("click",()=>{se.unlock(),se.ui(),Sr.classList.contains("hidden")?XS():Pr()});sa.addEventListener("click",()=>{se.unlock(),se.ui(),br.classList.contains("hidden")?YS():ra()});document.addEventListener("pointerdown",i=>{if(Pe!=="game")return;const t=i.target;t&&(Sr.contains(t)||Cr.contains(t)||br.contains(t)||sa.contains(t))||(Pr(),ra())},!0);function Vp(i,t){let e=0;const n=r=>{r.preventDefault?.(),se.unlock(),we.aimBy(t),window.clearInterval(e),e=window.setInterval(()=>we.aimBy(t),90)},s=()=>{window.clearInterval(e),e=0};i.addEventListener("pointerdown",n),i.addEventListener("pointerup",s),i.addEventListener("pointerleave",s),i.addEventListener("pointercancel",s)}Vp(kS,-.045);Vp(BS,.045);const we=new Qy({scene:Xn,camera:zi,audio:se,realtime:Up,events:{onHole:i=>{Xt("hole-no").textContent=`${i.index+1}홀`,Xt("hole-par").textContent=`Par ${i.par}`,Xt("hole-name").textContent=i.name,Xt("hole-hint").textContent=i.hint,Xt("stroke-count").textContent="0",Xt("hole-dist").textContent="0",t0(i),Cs(),Ud(we.getPeers())},onStroke:i=>{Xt("stroke-count").textContent=String(i)},onGauge:i=>{Pe==="game"&&Hp(i)},onClub:(i,t,e,n)=>{Pe==="game"&&WS(i,t,e,n)},onView:i=>{zS.textContent=Ap[i],vc.classList.toggle("target",i==="target"),vc.classList.toggle("top",i==="top")},onShot:(i,t)=>{Pe==="game"&&(i.grade==="perfect"?Un(`Perfect! ${t.name} 풀 임팩트`):i.grade==="good"?Un(`Good · 살짝 ${i.error>0?"훅":"슬라이스"}`):Un(`Miss · ${i.error>0?"훅":"슬라이스"}가 크게 났어요`))},onRest:(i,t,e)=>{Pe==="game"&&(hh.textContent=`${i<10?i.toFixed(1):Math.round(i)}m`,uh.textContent=nh[t],Xt("stroke-count").textContent=String(e))},onHoled:(i,t,e)=>{if(Pe!=="game")return;const n=Ue[i],s=t<=n.par;cr(`${e}!`,`${i+1}홀 · ${t}타 (Par ${n.par})`,s?"good":"coral")},onPenalty:(i,t)=>{Pe==="game"&&Un(i==="water"?`워터 해저드! +1벌타 (${t}타)`:`아웃! 공을 되돌렸어요 (${t}타)`)},onBanner:(i,t,e)=>{Pe==="game"&&cr(i,t,e)},onToast:i=>{Pe==="game"&&Un(i)},onPeers:i=>Ud(i),onRemoteHoled:(i,t,e)=>{Pe==="game"&&cr(`${i}님 홀인!`,`${t+1}홀 · ${e}타`,"plain")},onFinish:i=>{Pe==="game"&&tb(i)}}});Pp(ms,we,{onPress:()=>se.unlock()});Pp(er,we,{onPress:()=>se.unlock()});const Fs=new ES({scene:Yn,camera:zi,audio:se,realtime:Np,canvas:sh,events:{onEnterPlayroom:()=>ZS(),onGateChange:i=>ch.classList.toggle("hidden",!i),onPlayers:(i,t)=>Qp(i,t),onToast:i=>{Pe==="lobby"&&Un(i)}}});t0(Ue[0]);const qS=new gS(sh,we,{onToggleMute:()=>dh(),onToggleHelp:()=>ph(),onToggleView:()=>Kp(),isActive:()=>Pe==="game"}),oa=Xt("nickname");oa.value=th();let yc=Fi[0].hex;const Id=Xt("colors");Fi.forEach((i,t)=>{const e=document.createElement("button");e.type="button",e.className="swatch",e.style.background=i.hex,e.title=i.name,e.setAttribute("aria-label",i.name),e.setAttribute("aria-pressed",String(t===0)),e.addEventListener("click",()=>{yc=i.hex,Id.querySelectorAll(".swatch").forEach(n=>n.setAttribute("aria-pressed","false")),e.setAttribute("aria-pressed","true"),se.unlock(),se.ui()}),Id.appendChild(e)});Ie("btn-dice").addEventListener("click",()=>{oa.value=th(),se.unlock(),se.ui()});function $S(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`p-${Math.random().toString(36).slice(2,10)}`}function Wp(){if(Pe!=="landing"||Ls)return;const i=(oa.value.trim()||th()).slice(0,12);Hi={id:$S(),name:i,color:yc},se.unlock(),se.ui(),Pe="lobby",LS.classList.add("hidden"),rh.classList.add("hidden"),oh.classList.remove("hidden"),Xt("lobby-me-name").textContent=i,Xt("lobby-me-dot").style.background=yc,Fs.enter(Hi),Cs(),Qp([],[]),cr("클럽하우스 입장",`${i}님, 이모지로 인사하며 광장을 둘러보세요`,"plain")}Ie("btn-teeoff").addEventListener("click",Wp);oa.addEventListener("keydown",i=>{i.key==="Enter"&&Wp()});function ZS(){if(!Hi||Pe!=="lobby"||Ls)return;const i=Hi;se.unlock(),se.portal(),kp(()=>{rh.classList.remove("hidden"),oh.classList.add("hidden"),Pe="game",we.join(i),Cs(),Fs.setMode("idle"),Hp({phase:"idle",value:0,power:0,club:we.currentClub.id,distance:we.cupDistance(),clubMax:we.clubMax,fullMax:we.gaugeInfo.fullMax,fine:we.gaugeInfo.fine,powerPercent:0,estimate:0,neededPower:we.neededPower}),cr("플레이룸 입장","3홀 · 꾹 눌러 파워, 떼고 타이밍 탭!","plain"),JS()||ph()})}function Xp(){!Hi||Pe!=="game"||Ls||(se.unlock(),se.ui(),kp(()=>{ah.classList.add("hidden"),rh.classList.add("hidden"),oh.classList.remove("hidden"),we.exitToLobby(),Pe="lobby",Fs.returnFromPlayroom(),ch.classList.add("hidden"),Un("대기실로 돌아왔어요 🏛️")}))}ch.addEventListener("click",()=>{se.unlock(),se.ui(),Fs.requestPlayroom()});const Yp=Array.from(document.querySelectorAll(".look-switch button[data-look]"));function aa(){const i=Jc();Yp.forEach(t=>{t.setAttribute("aria-pressed",String(t.dataset.look===i))})}Yp.forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.look==="real"?"real":"synty";t!==Jc()&&(se.unlock(),se.ui(),fp(t),aa(),Un(t==="real"?"🌿 실사 PBR · 텍스처 + 환경 반사":"🧊 Synty 폴리 스타일"))})});aa();$1(aa);window.addEventListener("keydown",i=>{if(i.key!=="l"&&i.key!=="L")return;const t=i.target;t&&/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)||Pe==="landing"||Ls||(Z1(),aa(),Un(Jc()==="real"?"🌿 실사 PBR":"🧊 Synty 폴리 스타일"))});window.setTimeout(()=>xc.prewarm(),1600);const qp=Ie("btn-sound"),$p=Ie("btn-lobby-sound");function dh(){se.unlock(),se.setMuted(!se.muted),Zp()}function Zp(){const i=se.muted?"🔇":"🔊";[qp,$p].forEach(t=>{t.textContent=i,t.classList.toggle("off",se.muted)})}qp.addEventListener("click",dh);$p.addEventListener("click",dh);Zp();function Kp(){if(Pe!=="game")return;se.unlock();const i=we.cycleView();Un(`🔭 ${Ap[i]}${i==="back"?"":i==="target"?" · 착지 지점 보기":" · 코스 전체 보기"}`)}vc.addEventListener("click",Kp);Ie("btn-help").addEventListener("click",()=>{se.unlock(),ph()});Ie("btn-lobby-help").addEventListener("click",()=>{se.unlock(),lh.classList.remove("hidden")});Ie("btn-help-close").addEventListener("click",()=>lh.classList.add("hidden"));const Jp="oneone:onboarding:v3",fh=Xt("onboarding"),Sc=Array.from(fh.querySelectorAll(".onb-step")),KS=Array.from(Xt("onb-dots").querySelectorAll("i")),bc=Ie("btn-onb-back"),jp=Ie("btn-onb-next");let Fn=0;function JS(){try{return localStorage.getItem(Jp)==="1"}catch{return!1}}function jS(){try{localStorage.setItem(Jp,"1")}catch{}}function la(){Sc.forEach((i,t)=>i.classList.toggle("active",t===Fn)),KS.forEach((i,t)=>i.classList.toggle("on",t===Fn)),bc.disabled=Fn===0,bc.style.visibility=Fn===0?"hidden":"visible",jp.textContent=Fn===Sc.length-1?"스윙 시작!":"다음"}function ph(){Fn=0,la(),fh.classList.remove("hidden")}function mh(){fh.classList.add("hidden"),jS()}bc.addEventListener("click",()=>{Fn!==0&&(Fn-=1,se.ui(),la())});jp.addEventListener("click",()=>{if(se.unlock(),se.ui(),Fn>=Sc.length-1){mh();return}Fn+=1,la()});Ie("btn-onb-skip").addEventListener("click",mh);Ie("btn-onb-help").addEventListener("click",()=>{mh(),lh.classList.remove("hidden")});la();document.querySelectorAll("[data-emoji]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.emoji??vy[0];se.unlock(),we.sendEmoji(t),ra()})});Pd.addEventListener("click",()=>{const i=OS.classList.toggle("hidden");Pd.setAttribute("aria-expanded",String(!i)),se.unlock()});document.querySelectorAll("[data-lobby-emoji]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.lobbyEmoji??"👋";se.unlock(),Fs.sendEmoji(t)})});Ie("btn-lobby").addEventListener("click",Xp);Ie("btn-back-lobby").addEventListener("click",Xp);const fl=Xt("players");let Nd="";function Ud(i){const t=we.getLocalSnapshot(),e=JSON.stringify([t?.name,t?.total,t?.hole,i.map(n=>[n.id,n.name,n.color,n.total,n.hole,n.done])]);e!==Nd&&(Nd=e,fl.replaceChildren(),t&&fl.appendChild(Fd(t,!0)),i.forEach(n=>fl.appendChild(Fd(n,!1))))}function Fd(i,t){const e=document.createElement("div");e.className=`player-row${t?" me":""}`;const n=document.createElement("i");n.className="dot",n.style.background=i.color;const s=document.createElement("span");s.textContent=t?`${i.name} (나)`:i.name;const r=document.createElement("span");return r.className="score",r.textContent=i.done?"완료":`${i.total}타`,e.append(n,s,r),e}const vo=Xt("lobby-players");function Qp(i,t){const e=Hi?.name??"플레이어",n=Hi?.color??Fi[0].hex;Xt("lobby-count").textContent=`대기실 ${1+i.length}명 · 플레이룸 ${t.length}명`,vo.replaceChildren(),vo.appendChild(pl(e,n,!1)),i.forEach(s=>{vo.appendChild(pl(s.name,s.color,!1))}),t.forEach(s=>{vo.appendChild(pl(s.name,s.color,!0))})}function pl(i,t,e){const n=document.createElement("div");n.className=`player-row${e?" in-playroom":""}`;const s=document.createElement("i");s.className="dot",s.style.background=t;const r=document.createElement("span");return r.textContent=e?`⛳ ${i}`:i,n.append(s,r),n}const Xo=Xt("copy-hint");let wc=null;function QS(i){const t=[`⛳ 원온 미니골프 기록 — ${i.name}`];i.holes.forEach((n,s)=>{const r=Ue[s],o=n.strokes??0;t.push(`${s+1}홀 (Par ${n.par}, ${r.name}) · ${o}타 · ${ih(o,n.par)}`)});const e=i.diff===0?"이븐파":i.diff<0?`${Math.abs(i.diff)}언더파`:`+${i.diff}`;return t.push(`합계 ${i.total}타 / Par ${i.par} (${e})`),t.push("oneone minigolf"),t.join(`
`)}function tb(i){wc=i,Xo.textContent="",Xt("score-sub").textContent=`${i.name} · 총 ${i.total}타 (Par ${i.par})`;const t=Xt("score-body");t.replaceChildren(),i.holes.forEach((n,s)=>{const r=n.strokes??0,o=ih(r,n.par),a=document.createElement("tr"),l=document.createElement("td");l.textContent=`${s+1}홀`;const c=document.createElement("td");c.textContent=String(n.par);const h=document.createElement("td");h.textContent=String(r);const d=document.createElement("td");d.textContent=o,d.className=`verdict${r<n.par?" under":""}`,a.append(l,c,h,d),t.appendChild(a)}),Xt("score-total").textContent=String(i.total);const e=Xt("score-verdict");e.textContent=i.verdict,e.className=`verdict${i.diff<0?" under":""}`,ah.classList.remove("hidden")}async function eb(){if(!wc)return;const i=QS(wc);try{await navigator.clipboard.writeText(i),Xo.textContent="복사했어요! 붙여넣기 해보세요."}catch{const t=document.createElement("textarea");t.value=i,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const e=document.execCommand("copy");document.body.removeChild(t),Xo.textContent=e?"복사했어요! 붙여넣기 해보세요.":"복사가 막혔어요. 기록을 직접 선택해 주세요."}}Ie("btn-copy").addEventListener("click",()=>{eb()});Ie("btn-again").addEventListener("click",()=>{ah.classList.add("hidden"),Xo.textContent="",se.unlock(),se.ui(),we.restart()});function t0(i){const[t,e]=i.green?[i.green.x,i.green.z]:i.cup;on.position.set(t+20,30,e+18),on.target.position.set(t,0,e),on.target.updateMatrixWorld()}function gh(){const i=window.innerWidth,t=window.innerHeight;Ar.setSize(i,t,!1),zi.aspect=i/Math.max(1,t),zi.fov=i<560?66:55,zi.updateProjectionMatrix()}window.addEventListener("resize",gh);window.addEventListener("orientationchange",()=>window.setTimeout(gh,120));gh();let Od=performance.now(),zd=0;function e0(i){const t=Math.min(.05,(i-Od)/1e3);Od=i,zd+=1,zd%20===0&&Cs(),K1(t),Pe==="game"?(we.update(t),xc.render(Xn,zi)):(Fs.update(t),xc.render(Yn,zi)),requestAnimationFrame(e0)}requestAnimationFrame(e0);window.setInterval(()=>{if(Pe!=="game"||Po)return;const i=we.cupDistance();hh.textContent=`${i<10?i.toFixed(1):Math.round(i)}m`,Xt("hole-dist").textContent=i<10?i.toFixed(1):String(Math.round(i)),Xt("stroke-count").textContent=String(we.currentStrokes),uh.textContent=nh[we.surface];const t=we.gaugeInfo;Bp(we.currentClub.id,t.max,t.fine),Gp({phase:"idle",club:we.currentClub.id,distance:i,clubMax:t.max,fullMax:t.fullMax,fine:t.fine,powerPercent:0,estimate:0,neededPower:t.needed})},200);window.addEventListener("beforeunload",()=>qS.dispose());
