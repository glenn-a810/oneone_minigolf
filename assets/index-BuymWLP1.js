var wf=Object.defineProperty;var Ef=(i,t,e)=>t in i?wf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var O=(i,t,e)=>Ef(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ll="187",Tf=0,Lc=1,Af=2,Xr=1,Eu=2,Ls=3,Ei=0,rn=1,hn=2,rs=0,os=1,Wn=2,Dc=3,Ic=4,Rf=5,ns=100,Cf=101,Pf=102,Lf=103,Df=104,If=200,Nf=201,Uf=202,Ff=203,Tu=204,Au=205,Of=206,zf=207,kf=208,Bf=209,Gf=210,Hf=211,Vf=212,Wf=213,Xf=214,Aa=0,Ra=1,Ca=2,Hs=3,Pa=4,La=5,Da=6,Ia=7,Ru=0,Yf=1,qf=2,Xn=0,Cu=1,Pu=2,Lu=3,Dl=4,Du=5,Iu=6,Nu=7,Uu=300,ls=301,Vs=302,Do=303,Io=304,Ws=1e3,Vn=1001,Na=1002,Ye=1003,$f=1004,rr=1005,on=1006,No=1007,ci=1008,un=1009,Fu=1010,Ou=1011,Xs=1012,Il=1013,Pn=1014,An=1015,Ln=1016,Nl=1017,Ul=1018,cs=1020,zu=35902,ku=35899,Bu=1021,Gu=1022,Rn=1023,ui=1026,hi=1027,Hu=1028,Fl=1029,Ti=1030,Ol=1031,zl=1033,Yr=33776,qr=33777,$r=33778,Zr=33779,Ua=35840,Fa=35841,Oa=35842,za=35843,ka=36196,Ba=37492,Ga=37496,Ha=37488,Va=37489,so=37490,Wa=37491,Xa=37808,Ya=37809,qa=37810,$a=37811,Za=37812,Ka=37813,Ja=37814,ja=37815,Qa=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,ll=36283,cl=36284,ro=36285,hl=36286,Zf=3200,ul=0,Kf=1,ai="",Oe="srgb",oo="srgb-linear",ao="linear",ge="srgb",Uo=7680,Jf=519,jf=512,Qf=513,tp=514,Vu=515,ep=516,np=517,Wu=518,Xu=519,Yu=35044,Nc="300 es",yn=2e3,Ys=2001;function ip(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sp(){const i=lo("canvas");return i.style.display="block",i}const Uc={};function co(...i){const t="THREE."+i.shift();console.log(t,...i)}function qu(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=qu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=qu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Kr(...i){const t=i.join(" ");t in Uc||(Uc[t]=!0,$t(...i))}function rp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const op={[Aa]:Aa,[Ca]:Da,[Pa]:Pa,[Hs]:La,[Ra]:Ra,[Da]:Ca,[Ia]:Ia,[La]:Hs};class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fc=1234567;const Ns=Math.PI/180,qs=180/Math.PI;function Jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function kl(i,t){return(i%t+t)%t}function ap(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function lp(i,t,e){return i!==t?(e-i)/(t-i):0}function Us(i,t,e){return(1-e)*i+e*t}function cp(i,t,e,n){return Us(i,t,1-Math.exp(-e*n))}function hp(i,t=1){return t-Math.abs(kl(i,t*2)-t)}function up(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pp(i,t){return i+Math.random()*(t-i)}function mp(i){return i*(.5-Math.random())}function gp(i){i!==void 0&&(Fc=i);let t=Fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xp(i){return i*Ns}function _p(i){return i*qs}function vp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $u(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yp(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*u,a*h,a*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bl(i,t){if(t.constructor===Float32Array)return i;const e=vo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Gl(i,t){if(t.constructor===Float32Array)return i;const e=vo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Jr={DEG2RAD:Ns,RAD2DEG:qs,generateUUID:Jn,clamp:re,euclideanModulo:kl,mapLinear:ap,inverseLerp:lp,lerp:Us,damp:cp,pingpong:hp,smoothstep:up,smootherstep:dp,randInt:fp,randFloat:pp,randFloatSpread:mp,seededRandom:gp,degToRad:xp,radToDeg:_p,isPowerOfTwo:vp,ceilPowerOfTwo:Mp,floorPowerOfTwo:$u,setQuaternionFromProperEuler:yp,normalize:Gl,denormalize:Bl},gc=class gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gc.prototype.isVector2=!0;let pt=gc;class Ii{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],u=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*_;m<0&&(f=-f,u=-u,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const v=Math.acos(m),w=Math.sin(v);g=Math.sin(g*v)/w,a=Math.sin(a*v)/w,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xc=class xc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fo.copy(this).projectOnVector(t),this.sub(Fo)}reflect(t){return this.sub(Fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xc.prototype.isVector3=!0;let P=xc;const Fo=new P,Oc=new Ii,_c=class _c{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],_=s[0],m=s[3],g=s[6],v=s[1],w=s[4],y=s[7],E=s[2],T=s[5],x=s[8];return r[0]=o*_+a*v+l*E,r[3]=o*m+a*w+l*T,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*E,r[4]=c*m+h*w+d*T,r[7]=c*g+h*y+d*x,r[2]=f*_+u*v+p*E,r[5]=f*m+u*w+p*T,r[8]=f*g+u*y+p*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+n*f+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oo.makeScale(t,e)),this}rotate(t){return Kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oo.makeRotation(-t)),this}translate(t,e){return Kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_c.prototype.isMatrix3=!0;let jt=_c;const Oo=new jt,zc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sp(){const i={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oo]:{primaries:t,whitePoint:n,transfer:ao,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}const le=Sp();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class bp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=lo("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wp=0;class Hl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zo(s[o].image)):r.push(zo(s[o]))}else r=zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let Ep=0;const ko=new P;class Je extends Di{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=Vn,s=Vn,r=on,o=ci,a=Rn,l=un,c=Je.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Jn(),this.name="",this.source=new Hl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Uu;Je.DEFAULT_ANISOTROPY=1;const vc=class vc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(u+1)/2,E=(g+1)/2,T=(h+f)/4,x=(d+_)/4,b=(p+m)/4;return w>y&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=x/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=b/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vc.prototype.isVector4=!0;let Ee=vc;class Tp extends Di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Je({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Hl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Tp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zu extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const _o=class _o{constructor(t,e,n,s,r,o,a,l,c,h,d,f,u,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,u,p,_,m)}set(t,e,n,s,r,o,a,l,c,h,d,f,u,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _o().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,p=c*h,_=c*d;e[0]=f+_*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,p=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,u=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,u=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,u=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rp,t,Cp)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ni.crossVectors(n,an),ni.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ni.crossVectors(n,an)),ni.normalize(),or.crossVectors(an,ni),s[0]=ni.x,s[4]=or.x,s[8]=an.x,s[1]=ni.y,s[5]=or.y,s[9]=an.y,s[2]=ni.z,s[6]=or.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],w=n[7],y=n[11],E=n[15],T=s[0],x=s[4],b=s[8],I=s[12],C=s[1],N=s[5],k=s[9],K=s[13],D=s[2],X=s[6],J=s[10],Y=s[14],ht=s[3],Z=s[7],j=s[11],st=s[15];return r[0]=o*T+a*C+l*D+c*ht,r[4]=o*x+a*N+l*X+c*Z,r[8]=o*b+a*k+l*J+c*j,r[12]=o*I+a*K+l*Y+c*st,r[1]=h*T+d*C+f*D+u*ht,r[5]=h*x+d*N+f*X+u*Z,r[9]=h*b+d*k+f*J+u*j,r[13]=h*I+d*K+f*Y+u*st,r[2]=p*T+_*C+m*D+g*ht,r[6]=p*x+_*N+m*X+g*Z,r[10]=p*b+_*k+m*J+g*j,r[14]=p*I+_*K+m*Y+g*st,r[3]=v*T+w*C+y*D+E*ht,r[7]=v*x+w*N+y*X+E*Z,r[11]=v*b+w*k+y*J+E*j,r[15]=v*I+w*K+y*Y+E*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],_=t[7],m=t[11],g=t[15],v=l*u-c*f,w=a*u-c*d,y=a*f-l*d,E=o*u-c*h,T=o*f-l*h,x=o*d-a*h;return e*(_*v-m*w+g*y)-n*(p*v-m*E+g*T)+s*(p*w-_*E+g*x)-r*(p*y-_*T+m*x)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],_=t[13],m=t[14],g=t[15],v=e*a-n*o,w=e*l-s*o,y=e*c-r*o,E=n*l-s*a,T=n*c-r*a,x=s*c-r*l,b=h*_-d*p,I=h*m-f*p,C=h*g-u*p,N=d*m-f*_,k=d*g-u*_,K=f*g-u*m,D=v*K-w*k+y*N+E*C-T*I+x*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/D;return t[0]=(a*K-l*k+c*N)*X,t[1]=(s*k-n*K-r*N)*X,t[2]=(_*x-m*T+g*E)*X,t[3]=(f*T-d*x-u*E)*X,t[4]=(l*C-o*K-c*I)*X,t[5]=(e*K-s*C+r*I)*X,t[6]=(m*y-p*x-g*w)*X,t[7]=(h*x-f*y+u*w)*X,t[8]=(o*k-a*C+c*b)*X,t[9]=(n*C-e*k-r*b)*X,t[10]=(p*T-_*y+g*v)*X,t[11]=(d*y-h*T-u*v)*X,t[12]=(a*I-o*N-l*b)*X,t[13]=(e*N-n*I+s*b)*X,t[14]=(_*w-p*E-m*v)*X,t[15]=(h*E-d*w+f*v)*X,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,_=o*h,m=o*d,g=a*d,v=l*c,w=l*h,y=l*d,E=n.x,T=n.y,x=n.z;return s[0]=(1-(_+g))*E,s[1]=(u+y)*E,s[2]=(p-w)*E,s[3]=0,s[4]=(u-y)*T,s[5]=(1-(f+g))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(p+w)*x,s[9]=(m-v)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fi.set(s[0],s[1],s[2]).length();const a=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_n.copy(this);const c=1/o,h=1/a,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=yn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===yn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ys)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=yn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s);let p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===yn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ys)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};_o.prototype.isMatrix4=!0;let xe=_o;const Fi=new P,_n=new xe,Rp=new P(0,0,0),Cp=new P(1,1,1),ni=new P,or=new P,an=new P,Bc=new xe,Gc=new Ii;class qn{constructor(t=0,e=0,n=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pp=0;const Hc=new P,Oi=new Ii,Un=new xe,ar=new P,Ms=new P,Lp=new P,Dp=new Ii,Vc=new P(1,0,0),Wc=new P(0,1,0),Xc=new P(0,0,1),Yc={type:"added"},Ip={type:"removed"},zi={type:"childadded",child:null},Bo={type:"childremoved",child:null};class Ue extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new P,e=new qn,n=new Ii,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new jt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Vc,t)}rotateY(t){return this.rotateOnAxis(Wc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vc,t)}translateY(t){return this.translateOnAxis(Wc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ar.copy(t):ar.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ms,ar,this.up):Un.lookAt(ar,Ms,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Un),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),zi.child=t,this.dispatchEvent(zi),zi.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ip),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.DEFAULT_UP=new P(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class De extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Np={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=kl(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ho(o,r,t+1/3),this.g=Ho(o,r,t),this.b=Ho(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=Ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return le.workingToColorSpace(Ke.copy(this),t),Math.round(re(Ke.r*255,0,255))*65536+Math.round(re(Ke.g*255,0,255))*256+Math.round(re(Ke.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Oe){le.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(lr);const n=Us(ii.h,lr.h,e),s=Us(ii.s,lr.s,e),r=Us(ii.l,lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Zt;Zt.NAMES=Ku;class Mo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new Mo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ju extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const vn=new P,Fn=new P,Vo=new P,On=new P,ki=new P,Bi=new P,qc=new P,Wo=new P,Xo=new P,Yo=new P,qo=new Ee,$o=new Ee,Zo=new Ee;class gn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Fn.subVectors(n,e),Vo.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Fn),l=vn.dot(Vo),c=Fn.dot(Fn),h=Fn.dot(Vo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return qo.setScalar(0),$o.setScalar(0),Zo.setScalar(0),qo.fromBufferAttribute(t,e),$o.fromBufferAttribute(t,n),Zo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qo,r.x),o.addScaledVector($o,r.y),o.addScaledVector(Zo,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Fn.subVectors(t,e),vn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),vn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ki.subVectors(s,n),Bi.subVectors(r,n),Wo.subVectors(t,n);const l=ki.dot(Wo),c=Bi.dot(Wo);if(l<=0&&c<=0)return e.copy(n);Xo.subVectors(t,s);const h=ki.dot(Xo),d=Bi.dot(Xo);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(ki,o);Yo.subVectors(t,r);const u=ki.dot(Yo),p=Bi.dot(Yo);if(p>=0&&u<=p)return e.copy(r);const _=u*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Bi,a);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return qc.subVectors(r,s),a=(d-h)/(d-h+(u-p)),e.copy(s).addScaledVector(qc,a);const g=1/(m+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(ki,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class tr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),hr.subVectors(this.max,ys),Gi.subVectors(t.a,ys),Hi.subVectors(t.b,ys),Vi.subVectors(t.c,ys),si.subVectors(Hi,Gi),ri.subVectors(Vi,Hi),xi.subVectors(Gi,Vi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-xi.z,xi.y,si.z,0,-si.x,ri.z,0,-ri.x,xi.z,0,-xi.x,-si.y,si.x,0,-ri.y,ri.x,0,-xi.y,xi.x,0];return!Ko(e,Gi,Hi,Vi,hr)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,Gi,Hi,Vi,hr))?!1:(ur.crossVectors(si,ri),e=[ur.x,ur.y,ur.z],Ko(e,Gi,Hi,Vi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new P,new P,new P,new P,new P,new P,new P,new P],Mn=new P,cr=new tr,Gi=new P,Hi=new P,Vi=new P,si=new P,ri=new P,xi=new P,ys=new P,hr=new P,ur=new P,_i=new P;function Ko(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);const a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ne=new P,dr=new pt;let Up=0;class sn extends Di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Up++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yu,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=t!==void 0?vo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Bl(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Gl(t,this.array)}}class ju extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qu extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Fp=new tr,Ss=new P,Jo=new P;class er{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(Jo)),this.expandByPoint(Ss.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Op=0;const fn=new xe,jo=new Ue,Wi=new P,ln=new tr,bs=new tr,He=new P;class Pe extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ip(t)?Qu:ju)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(ln.min,bs.min),ln.expandByPoint(He),He.addVectors(ln.max,bs.max),ln.expandByPoint(He)):(ln.expandByPoint(bs.min),ln.expandByPoint(bs.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(t,c),He.add(Wi)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new P,l[I]=new P;const h=new P,d=new P,f=new P,u=new pt,p=new pt,_=new pt,m=new P,g=new P;function v(I,C,N){c[I]=c[C]=c[N]=1,h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,N),u.fromBufferAttribute(r,I),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,N),d.sub(h),f.sub(h),p.sub(u),_.sub(u);const k=1/(p.x*_.y-_.x*p.y);isFinite(k)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(k),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(k),a[I].add(m),a[C].add(m),a[N].add(m),l[I].add(g),l[C].add(g),l[N].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,C=w.length;I<C;++I){const N=w[I],k=N.start,K=N.count;for(let D=k,X=k+K;D<X;D+=3)v(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new P,E=new P,T=new P,x=new P;function b(I){T.fromBufferAttribute(s,I),x.copy(T);const C=a[I];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(x,C);const k=E.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,k)}for(let I=0,C=n.count;I<C;++I)c[I]&&b(I);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let f=0,u=t.count;f<u;f+=3){const p=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new sn(f,h,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yu,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=$c(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=$c(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function $c(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Jn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const en=new P;class ho{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?vo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ho(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Bl(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Gl(t,this.data.array)}}const Qo=new P,kp=new P,Bp=new jt;class Hn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Qo.subVectors(n,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bp.getNormalMatrix(t),s=this.coplanarPoint(Qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Gp=0;class fi extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=os,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=Au,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ni extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xi;const ws=new P,Yi=new P,qi=new P,$i=new pt,Es=new pt,td=new xe,fr=new P,Ts=new P,pr=new P,Zc=new pt,ta=new pt,Kc=new pt;class ps extends Ue{constructor(t=new Ni){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zp(e,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new ho(n,3,0,!1)),Xi.setAttribute("uv",new ho(n,2,3,!1))}this.geometry=Xi,this.material=t,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),td.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-qi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;mr(fr.set(-.5,-.5,0),qi,o,Yi,s,r),mr(Ts.set(.5,-.5,0),qi,o,Yi,s,r),mr(pr.set(.5,.5,0),qi,o,Yi,s,r),Zc.set(0,0),ta.set(1,0),Kc.set(1,1);let a=t.ray.intersectTriangle(fr,Ts,pr,!1,ws);if(a===null&&(mr(Ts.set(-.5,.5,0),qi,o,Yi,s,r),ta.set(0,1),a=t.ray.intersectTriangle(fr,pr,Ts,!1,ws),a===null))return;const l=t.ray.origin.distanceTo(ws);l<t.near||l>t.far||e.push({distance:l,point:ws.clone(),uv:gn.getInterpolation(ws,fr,Ts,pr,Zc,ta,Kc,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function mr(i,t,e,n,s,r){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Es.x=r*$i.x-s*$i.y,Es.y=s*$i.x+r*$i.y):Es.copy($i),i.copy(t),i.x+=Es.x,i.y+=Es.y,i.applyMatrix4(td)}const kn=new P,ea=new P,gr=new P,xr=new P;class yo{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(ea);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=xr.dot(this.direction),l=-xr.dot(gr),c=xr.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){const _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ea).addScaledVector(gr,f),u}intersectSphere(t,e){if(t.radius<0)return null;kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,v=n.y-o.y,w=n.z-o.z,y=Math.abs(l),E=Math.abs(c),T=Math.abs(h);let x,b,I,C,N,k,K,D,X,J,Y,ht;if(y>=E&&y>=T?(I=l,k=d,X=p,ht=g,l>=0?(x=c,b=h,C=f,N=u,K=_,D=m,J=v,Y=w):(x=h,b=c,C=u,N=f,K=m,D=_,J=w,Y=v)):E>=T?(I=c,k=f,X=_,ht=v,c>=0?(x=h,b=l,C=u,N=d,K=m,D=p,J=w,Y=g):(x=l,b=h,C=d,N=u,K=p,D=m,J=g,Y=w)):(I=h,k=u,X=m,ht=w,h>=0?(x=l,b=c,C=d,N=f,K=p,D=_,J=g,Y=v):(x=c,b=l,C=f,N=d,K=_,D=p,J=v,Y=g)),I===0)return null;const Z=x/I,j=b/I,st=1/I,Dt=C-Z*k,Nt=N-j*k,Q=K-Z*X,gt=D-j*X,Lt=J-Z*ht,Gt=Y-j*ht,Mt=Lt*gt-Gt*Q,Ut=Dt*Gt-Nt*Lt,lt=Q*Nt-gt*Dt;if(s){if(Mt<0||Ut<0||lt<0)return null}else if((Mt<0||Ut<0||lt<0)&&(Mt>0||Ut>0||lt>0))return null;const xt=Mt+Ut+lt;if(xt===0)return null;const At=st*(Mt*k+Ut*X+lt*ht);return(xt>0?At<0:At>0)?null:this.at(At/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $n extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jc=new xe,vi=new yo,_r=new er,jc=new P,vr=new P,Mr=new P,yr=new P,na=new P,Sr=new P,Qc=new P,br=new P;class Kt extends Ue{constructor(t=new Pe,e=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(na.fromBufferAttribute(d,t),o?Sr.addScaledVector(na,h):Sr.addScaledVector(na.sub(e),h))}e.add(Sr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(_r.containsPoint(vi.origin)===!1&&(vi.intersectSphere(_r,jc)===null||vi.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Jc.copy(r).invert(),vi.copy(t.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),w=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,E=w;y<E;y+=3){const T=a.getX(y),x=a.getX(y+1),b=a.getX(y+2);s=wr(this,g,t,n,c,h,d,T,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){const v=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=wr(this,o,t,n,c,h,d,v,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),w=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,E=w;y<E;y+=3){const T=y,x=y+1,b=y+2;s=wr(this,g,t,n,c,h,d,T,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){const v=m,w=m+1,y=m+2;s=wr(this,o,t,n,c,h,d,v,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Hp(i,t,e,n,s,r,o,a){let l;if(t.side===rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ei,a),l===null)return null;br.copy(a),br.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:i}}function wr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,vr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,yr);const h=Hp(i,t,e,n,vr,Mr,yr,Qc);if(h){const d=new P;gn.getBarycoord(Qc,vr,Mr,yr,d),s&&(h.uv=gn.getInterpolatedAttribute(s,a,l,c,d,new pt)),r&&(h.uv1=gn.getInterpolatedAttribute(r,a,l,c,d,new pt)),o&&(h.normal=gn.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};gn.getNormal(vr,Mr,yr,f.normal),h.face=f,h.barycoord=d}return h}class Vp extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ye,h=Ye,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mi=new er,Wp=new pt(.5,.5),Er=new P;class $s{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],w=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-o,u-h,g-p,E-v).normalize(),s[1].setComponents(c+o,u+h,g+p,E+v).normalize(),s[2].setComponents(c+a,u+d,g+_,E+w).normalize(),s[3].setComponents(c-a,u-d,g-_,E-w).normalize(),n)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,u-f,g-m,E-y).normalize();else if(s[4].setComponents(c-l,u-f,g-m,E-y).normalize(),e===yn)s[5].setComponents(c+l,u+f,g+m,E+y).normalize();else if(e===Ys)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);const e=Wp.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const th=new xe;class Wl{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];th.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new $s),n[s].setFromProjectionMatrix(th,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new $s),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Wl().copy(this)}}class ed extends fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uo=new P,fo=new P,eh=new xe,As=new yo,Tr=new er,ia=new P,nh=new P;class Xp extends Ue{constructor(t=new Pe,e=new ed){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)uo.fromBufferAttribute(e,s-1),fo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=uo.distanceTo(fo);t.setAttribute("lineDistance",new fe(n,1))}else $t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;eh.copy(s).invert(),As.copy(t.ray).applyMatrix4(eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=u,m=p-1;_<m;_+=c){const g=h.getX(_),v=h.getX(_+1),w=Ar(this,t,As,l,g,v,_);w&&e.push(w)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(u),g=Ar(this,t,As,l,_,m,p-1);g&&e.push(g)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=u,m=p-1;_<m;_+=c){const g=Ar(this,t,As,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){const _=Ar(this,t,As,l,p-1,u,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ar(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(uo.fromBufferAttribute(a,s),fo.fromBufferAttribute(a,r),e.distanceSqToSegment(uo,fo,ia,nh)>n)return;ia.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ia);if(!(c<t.near||c>t.far))return{distance:c,point:nh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class nd extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ih=new xe,dl=new yo,Rr=new er,Cr=new P;class Yp extends Ue{constructor(t=new Pe,e=new nd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;ih.copy(s).invert(),dl.copy(t.ray).applyMatrix4(ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,_=u;p<_;p++){const m=c.getX(p);Cr.fromBufferAttribute(d,m),sh(Cr,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,_=u;p<_;p++)Cr.fromBufferAttribute(d,p),sh(Cr,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sh(i,t,e,n,s,r,o){const a=dl.distanceSqToPoint(i);if(a<e){const l=new P;dl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class id extends Je{constructor(t=[],e=ls,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ms extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hs extends Je{constructor(t,e,n=Pn,s,r,o,a=Ye,l=Ye,c,h=ui,d=1){if(h!==ui&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class sd extends hs{constructor(t,e=Pn,n=ls,s,r,o=Ye,a=Ye,l,c=ui){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class rd extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zn extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2));function p(_,m,g,v,w,y,E,T,x,b,I){const C=y/x,N=E/b,k=y/2,K=E/2,D=T/2,X=x+1,J=b+1;let Y=0,ht=0;const Z=new P;for(let j=0;j<J;j++){const st=j*N-K;for(let Dt=0;Dt<X;Dt++){const Nt=Dt*C-k;Z[_]=Nt*v,Z[m]=st*w,Z[g]=D,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[g]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Dt/x),d.push(1-j/b),Y+=1}}for(let j=0;j<b;j++)for(let st=0;st<x;st++){const Dt=f+st+X*j,Nt=f+st+X*(j+1),Q=f+(st+1)+X*(j+1),gt=f+(st+1)+X*j;l.push(Dt,Nt,gt),l.push(Nt,Q,gt),ht+=6}a.addGroup(u,ht,I),u+=ht,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Si extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,h=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Te extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const _=[],m=n/2;let g=0;v(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(u,2));function v(){const y=new P,E=new P;let T=0;const x=(e-t)/n;for(let b=0;b<=r;b++){const I=[],C=b/r,N=C*(e-t)+t;for(let k=0;k<=s;k++){const K=k/s,D=K*l+a,X=Math.sin(D),J=Math.cos(D);E.x=N*X,E.y=-C*n+m,E.z=N*J,d.push(E.x,E.y,E.z),y.set(X,x,J).normalize(),f.push(y.x,y.y,y.z),u.push(K,1-C),I.push(p++)}_.push(I)}for(let b=0;b<s;b++)for(let I=0;I<r;I++){const C=_[I][b],N=_[I+1][b],k=_[I+1][b+1],K=_[I][b+1];(t>0||I!==0)&&(h.push(C,N,K),T+=3),(e>0||I!==r-1)&&(h.push(N,k,K),T+=3)}c.addGroup(g,T,0),g+=T}function w(y){const E=p,T=new pt,x=new P;let b=0;const I=y===!0?t:e,C=y===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*C,0),f.push(0,C,0),u.push(.5,.5),p++;const N=p;for(let k=0;k<=s;k++){const D=k/s*l+a,X=Math.cos(D),J=Math.sin(D);x.x=I*J,x.y=m*C,x.z=I*X,d.push(x.x,x.y,x.z),f.push(0,C,0),T.x=X*.5+.5,T.y=J*.5*C+.5,u.push(T.x,T.y),p++}for(let k=0;k<s;k++){const K=E+k,D=N+k;y===!0?h.push(D,D+1,K):h.push(D+1,D,K),b+=3}c.addGroup(g,b,y===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class je extends Te{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new je(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xl extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const w=new P,y=new P,E=new P;for(let T=0;T<e.length;T+=3)u(e[T+0],w),u(e[T+1],y),u(e[T+2],E),l(w,y,E,v)}function l(v,w,y,E){const T=E+1,x=[];for(let b=0;b<=T;b++){x[b]=[];const I=v.clone().lerp(y,b/T),C=w.clone().lerp(y,b/T),N=T-b;for(let k=0;k<=N;k++)k===0&&b===T?x[b][k]=I:x[b][k]=I.clone().lerp(C,k/N)}for(let b=0;b<T;b++)for(let I=0;I<2*(T-b)-1;I++){const C=Math.floor(I/2);I%2===0?(f(x[b][C+1]),f(x[b+1][C]),f(x[b][C])):(f(x[b][C+1]),f(x[b+1][C+1]),f(x[b+1][C]))}}function c(v){const w=new P;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(v),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){const v=new P;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];const y=m(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;o.push(y,1-E)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){const w=o[v+0],y=o[v+2],E=o[v+4],T=Math.max(w,y,E),x=Math.min(w,y,E);T>.9&&x<.1&&(w<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function u(v,w){const y=v*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function p(){const v=new P,w=new P,y=new P,E=new P,T=new pt,x=new pt,b=new pt;for(let I=0,C=0;I<r.length;I+=9,C+=6){v.set(r[I+0],r[I+1],r[I+2]),w.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),T.set(o[C+0],o[C+1]),x.set(o[C+2],o[C+3]),b.set(o[C+4],o[C+5]),E.copy(v).add(w).add(y).divideScalar(3);const N=m(E);_(T,C+0,v,N),_(x,C+2,w,N),_(b,C+4,y,N)}}function _(v,w,y,E){E<0&&v.x===1&&(o[w]=v.x-1),y.x===0&&y.z===0&&(o[w]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xl(t.vertices,t.indices,t.radius,t.detail)}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new pt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],o=[],a=new P,l=new xe;for(let u=0;u<=t;u++){const p=u/t;s[u]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(re(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(re(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Yl extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qp extends Yl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ql(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const rh=new P,oh=new P,sa=new ql,ra=new ql,oa=new ql;class od extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(oh.subVectors(s[0],s[1]).add(s[0]),c=oh);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(rh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rh),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),sa.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,_,m),ra.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,_,m),oa.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(sa.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ra.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),oa.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(sa.calc(l),ra.calc(l),oa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ah(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function $p(i,t){const e=1-i;return e*e*t}function Zp(i,t){return 2*(1-i)*i*t}function Kp(i,t){return i*i*t}function Fs(i,t,e,n){return $p(i,t)+Zp(i,e)+Kp(i,n)}function Jp(i,t){const e=1-i;return e*e*e*t}function jp(i,t){const e=1-i;return 3*e*e*i*t}function Qp(i,t){return 3*(1-i)*i*i*t}function t0(i,t){return i*i*i*t}function Os(i,t,e,n,s){return Jp(i,t)+jp(i,e)+Qp(i,n)+t0(i,s)}class ad extends In{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,s.x,r.x,o.x,a.x),Os(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class e0 extends In{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,s.x,r.x,o.x,a.x),Os(t,s.y,r.y,o.y,a.y),Os(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ld extends In{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class n0 extends In{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cd extends In{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,s.x,r.x,o.x),Fs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class i0 extends In{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,s.x,r.x,o.x),Fs(t,s.y,r.y,o.y),Fs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hd extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ah(a,l.x,c.x,h.x,d.x),ah(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var fl=Object.freeze({__proto__:null,ArcCurve:qp,CatmullRomCurve3:od,CubicBezierCurve:ad,CubicBezierCurve3:e0,EllipseCurve:Yl,LineCurve:ld,LineCurve3:n0,QuadraticBezierCurve:cd,QuadraticBezierCurve3:i0,SplineCurve:hd});class s0 extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new fl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class pl extends s0{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ld(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new cd(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new ad(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Yl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $l extends pl{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new pl().fromJSON(s))}return this}}function r0(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=ud(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=h0(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let f=e;f<s;f+=e){const u=i[f],p=i[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Zs(r,o,e,a,l,c,0),o}function ud(i,t,e,n,s){let r;if(s===y0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=lh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=lh(o/n|0,i[o],i[o+1],r);return r&&us(r,r.next)&&(Js(r),r=r.next),r}function Ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(us(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&m0(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?a0(i,n,s,r):o0(i)){t.push(l.i,i.i,c.i),Js(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=l0(Ai(i),t),Zs(i,t,e,n,s,r,2)):o===2&&c0(i,t,e,n,s,r):Zs(Ai(i),t,e,n,s,r,1);break}}}function o0(i){const t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Ds(s,a,r,l,o,c,p.x,p.y)&&Ae(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function a0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ae(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),_=Math.max(a,l,c),m=Math.max(h,d,f),g=ml(u,p,t,e,n),v=ml(_,m,t,e,n);let w=i.prevZ,y=i.nextZ;for(;w&&w.z>=g&&y&&y.z<=v;){if(w.x>=u&&w.x<=_&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&Ds(a,h,l,d,c,f,w.x,w.y)&&Ae(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=u&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Ds(a,h,l,d,c,f,y.x,y.y)&&Ae(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=g;){if(w.x>=u&&w.x<=_&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&Ds(a,h,l,d,c,f,w.x,w.y)&&Ae(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=v;){if(y.x>=u&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Ds(a,h,l,d,c,f,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function l0(i,t){let e=i;do{const n=e.prev,s=e.next.next;!us(n,s)&&fd(n,e,e.next,s)&&Ks(n,s)&&Ks(s,n)&&(t.push(n.i,e.i,s.i),Js(e),Js(e.next),e=i=s),e=e.next}while(e!==i);return Ai(e)}function c0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_0(o,a)){let l=pd(o,a);o=Ai(o,o.next),l=Ai(l,l.next),Zs(o,t,e,n,s,r,0),Zs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function h0(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=ud(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(x0(c))}s.sort(u0);for(let r=0;r<s.length;r++)e=d0(s[r],e);return e}function u0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function d0(i,t){const e=f0(i,t);if(!e)return t;const n=pd(e,i);return Ai(n,n.next),Ai(e,e.next)}function f0(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(us(i,e))return e;do{if(us(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&dd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Ks(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&p0(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function p0(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function m0(i,t,e,n){let s=i;do s.z===0&&(s.z=ml(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,g0(s)}function g0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ml(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function x0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function dd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ds(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&dd(i,t,e,n,s,r,o,a)}function _0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!v0(i,t)&&(Ks(i,t)&&Ks(t,i)&&M0(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||us(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function us(i,t){return i.x===t.x&&i.y===t.y}function fd(i,t,e,n){const s=Lr(Ae(i,t,e)),r=Lr(Ae(i,t,n)),o=Lr(Ae(e,n,i)),a=Lr(Ae(e,n,t));return!!(s!==r&&o!==a||s===0&&Pr(i,e,t)||r===0&&Pr(i,n,t)||o===0&&Pr(e,i,n)||a===0&&Pr(e,t,n))}function Pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lr(i){return i>0?1:i<0?-1:0}function v0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ks(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function M0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function pd(i,t){const e=gl(i.i,i.x,i.y),n=gl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lh(i,t,e,n){const s=gl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function y0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class S0{static triangulate(t,e,n=2){return r0(t,e,n)}}class ss{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ss.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ch(t),hh(n,t);let o=t.length;e.forEach(ch);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,hh(n,e[l]);const a=S0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ch(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class So extends Pe{constructor(t=new $l([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:b0;let w,y=!1,E,T,x,b;if(g){w=g.getSpacedPoints(h),y=!0,f=!1;const W=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,W),T=new P,x=new P,b=new P}f||(m=0,u=0,p=0,_=0);const I=a.extractPoints(c);let C=I.shape;const N=I.holes;if(!ss.isClockWise(C)){C=C.reverse();for(let W=0,ut=N.length;W<ut;W++){const z=N[W];ss.isClockWise(z)&&(N[W]=z.reverse())}}function K(W){const z=10000000000000001e-36;let q=W[0];for(let V=1;V<=W.length;V++){const ct=V%W.length,at=W[ct],It=at.x-q.x,qt=at.y-q.y,te=It*It+qt*qt,F=Math.max(Math.abs(at.x),Math.abs(at.y),Math.abs(q.x),Math.abs(q.y)),be=z*F*F;if(te<=be){W.splice(ct,1),V--;continue}q=at}}K(C),N.forEach(K);const D=N.length,X=C;for(let W=0;W<D;W++){const ut=N[W];C=C.concat(ut)}function J(W,ut,z){return ut||ce("ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(ut,z)}const Y=C.length;function ht(W,ut,z){let q,V,ct;const at=W.x-ut.x,It=W.y-ut.y,qt=z.x-W.x,te=z.y-W.y,F=at*at+It*It,be=at*te-It*qt;if(Math.abs(be)>Number.EPSILON){const se=Math.sqrt(F),ve=Math.sqrt(qt*qt+te*te),wt=ut.x-It/se,Re=ut.y+at/se,Yt=z.x-te/ve,Jt=z.y+qt/ve,A=((Yt-wt)*te-(Jt-Re)*qt)/(at*te-It*qt);q=wt+at*A-W.x,V=Re+It*A-W.y;const M=q*q+V*V;if(M<=2)return new pt(q,V);ct=Math.sqrt(M/2)}else{let se=!1;at>Number.EPSILON?qt>Number.EPSILON&&(se=!0):at<-Number.EPSILON?qt<-Number.EPSILON&&(se=!0):Math.sign(It)===Math.sign(te)&&(se=!0),se?(q=-It,V=at,ct=Math.sqrt(F)):(q=at,V=It,ct=Math.sqrt(F/2))}return new pt(q/ct,V/ct)}const Z=[];for(let W=0,ut=X.length,z=ut-1,q=W+1;W<ut;W++,z++,q++)z===ut&&(z=0),q===ut&&(q=0),Z[W]=ht(X[W],X[z],X[q]);const j=[];let st,Dt=Z.concat();for(let W=0,ut=D;W<ut;W++){const z=N[W];st=[];for(let q=0,V=z.length,ct=V-1,at=q+1;q<V;q++,ct++,at++)ct===V&&(ct=0),at===V&&(at=0),st[q]=ht(z[q],z[ct],z[at]);j.push(st),Dt=Dt.concat(st)}let Nt;if(m===0)Nt=ss.triangulateShape(X,N);else{const W=[],ut=[];for(let z=0;z<m;z++){const q=z/m,V=u*Math.cos(q*Math.PI/2),ct=p*Math.sin(q*Math.PI/2)+_;for(let at=0,It=X.length;at<It;at++){const qt=J(X[at],Z[at],ct);Ut(qt.x,qt.y,-V),q===0&&W.push(qt)}for(let at=0,It=D;at<It;at++){const qt=N[at];st=j[at];const te=[];for(let F=0,be=qt.length;F<be;F++){const se=J(qt[F],st[F],ct);Ut(se.x,se.y,-V),q===0&&te.push(se)}q===0&&ut.push(te)}}Nt=ss.triangulateShape(W,ut)}const Q=Nt.length,gt=p+_;for(let W=0;W<Y;W++){const ut=f?J(C[W],Dt[W],gt):C[W];y?(x.copy(E.normals[0]).multiplyScalar(ut.x),T.copy(E.binormals[0]).multiplyScalar(ut.y),b.copy(w[0]).add(x).add(T),Ut(b.x,b.y,b.z)):Ut(ut.x,ut.y,0)}for(let W=1;W<=h;W++)for(let ut=0;ut<Y;ut++){const z=f?J(C[ut],Dt[ut],gt):C[ut];y?(x.copy(E.normals[W]).multiplyScalar(z.x),T.copy(E.binormals[W]).multiplyScalar(z.y),b.copy(w[W]).add(x).add(T),Ut(b.x,b.y,b.z)):Ut(z.x,z.y,d/h*W)}for(let W=m-1;W>=0;W--){const ut=W/m,z=u*Math.cos(ut*Math.PI/2),q=p*Math.sin(ut*Math.PI/2)+_;for(let V=0,ct=X.length;V<ct;V++){const at=J(X[V],Z[V],q);Ut(at.x,at.y,d+z)}for(let V=0,ct=N.length;V<ct;V++){const at=N[V];st=j[V];for(let It=0,qt=at.length;It<qt;It++){const te=J(at[It],st[It],q);y?Ut(te.x,te.y+w[h-1].y,w[h-1].x+z):Ut(te.x,te.y,d+z)}}}Lt(),Gt();function Lt(){const W=s.length/3;if(f){let ut=0,z=Y*ut;for(let q=0;q<Q;q++){const V=Nt[q];lt(V[2]+z,V[1]+z,V[0]+z)}ut=h+m*2,z=Y*ut;for(let q=0;q<Q;q++){const V=Nt[q];lt(V[0]+z,V[1]+z,V[2]+z)}}else{for(let ut=0;ut<Q;ut++){const z=Nt[ut];lt(z[2],z[1],z[0])}for(let ut=0;ut<Q;ut++){const z=Nt[ut];lt(z[0]+Y*h,z[1]+Y*h,z[2]+Y*h)}}n.addGroup(W,s.length/3-W,0)}function Gt(){const W=s.length/3;let ut=0;Mt(X,ut),ut+=X.length;for(let z=0,q=N.length;z<q;z++){const V=N[z];Mt(V,ut),ut+=V.length}n.addGroup(W,s.length/3-W,1)}function Mt(W,ut){let z=W.length;for(;--z>=0;){const q=z;let V=z-1;V<0&&(V=W.length-1);for(let ct=0,at=h+m*2;ct<at;ct++){const It=Y*ct,qt=Y*(ct+1),te=ut+q+It,F=ut+V+It,be=ut+V+qt,se=ut+q+qt;xt(te,F,be,se)}}}function Ut(W,ut,z){l.push(W),l.push(ut),l.push(z)}function lt(W,ut,z){At(W),At(ut),At(z);const q=s.length/3,V=v.generateTopUV(n,s,q-3,q-2,q-1);Ot(V[0]),Ot(V[1]),Ot(V[2])}function xt(W,ut,z,q){At(W),At(ut),At(q),At(ut),At(z),At(q);const V=s.length/3,ct=v.generateSideWallUV(n,s,V-6,V-3,V-2,V-1);Ot(ct[0]),Ot(ct[1]),Ot(ct[3]),Ot(ct[1]),Ot(ct[2]),Ot(ct[3])}function At(W){s.push(l[W*3+0]),s.push(l[W*3+1]),s.push(l[W*3+2])}function Ot(W){r.push(W.x),r.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return w0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fl[s.type]().fromJSON(s)),new So(n,t.options)}}const b0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new pt(r,o),new pt(a,l),new pt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],u=t[s*3+1],p=t[s*3+2],_=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-d),new pt(f,1-p),new pt(_,1-g)]:[new pt(a,1-l),new pt(h,1-d),new pt(u,1-p),new pt(m,1-g)]}};function w0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zl extends Xl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zl(t.radius,t.detail)}}class Ri extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const v=g*f-o;for(let w=0;w<c;w++){const y=w*d-r;p.push(y,-v,0),_.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const w=v+c*g,y=v+c*(g+1),E=v+1+c*(g+1),T=v+1+c*g;u.push(w,y,T),u.push(y,E,T)}this.setIndex(u),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.width,t.height,t.widthSegments,t.heightSegments)}}class Kn extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const f=(e-t)/s,u=new P,p=new pt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const g=r+m/n*o;u.x=d*Math.cos(g),u.y=d*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}d+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let g=0;g<n;g++){const v=g+m,w=v,y=v+n+1,E=v+n+2,T=v+1;a.push(w,y,T),a.push(y,E,T)}}this.setIndex(a),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class di extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new P,f=new P,u=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const v=[],w=g/n,y=o+w*a,E=t*Math.cos(y),T=Math.sqrt(t*t-E*E);let x=0;g===0&&o===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const I=b/e,C=s+I*r;d.x=-T*Math.cos(C),d.y=E,d.z=T*Math.sin(C),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(I+x,1-w),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){const w=h[g][v+1],y=h[g][v],E=h[g+1][v],T=h[g+1][v+1];(g!==0||o>0)&&u.push(w,y,T),(g!==n-1||l<Math.PI)&&u.push(y,E,T)}this.setIndex(u),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ci extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],f=new P,u=new P,p=new P;for(let _=0;_<=n;_++){const m=o+_/n*a;for(let g=0;g<=s;g++){const v=g/s*r;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const g=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,w=(s+1)*(_-1)+m,y=(s+1)*_+m;l.push(g,v,y),l.push(v,w,y)}this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(uh(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(uh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function uh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function E0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function md(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const T0={clone:ds,merge:nn};var A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=E0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class C0 extends Pi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xe extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class P0 extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class L0 extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Kl extends Ue{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class gd extends Kl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const aa=new xe,dh=new P,fh=new P;class xd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(aa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ys||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Dr=new P,Ir=new Ii,Sn=new P;class _d extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dr,Ir,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Ir,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Dr,Ir,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Ir,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const oi=new P,ph=new pt,mh=new pt;class mn extends _d{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class D0 extends xd{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class I0 extends Kl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new D0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class vd extends _d{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class N0 extends xd{constructor(){super(new vd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bo extends Kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new N0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Zi=-90,Ki=1;class xl extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(Zi,Ki,t,e);s.layers=this.layers,this.add(s);const r=new mn(Zi,Ki,t,e);r.layers=this.layers,this.add(r);const o=new mn(Zi,Ki,t,e);o.layers=this.layers,this.add(o);const a=new mn(Zi,Ki,t,e);a.layers=this.layers,this.add(a);const l=new mn(Zi,Ki,t,e);l.layers=this.layers,this.add(l);const c=new mn(Zi,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class U0 extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const gh=new xe;class F0{constructor(t,e,n=0,s=1/0){this.ray=new yo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(t,e=!0,n=[]){return _l(t,this,n,e),n.sort(xh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_l(t[s],this,n,e);return n.sort(xh),n}}function xh(i,t){return i.distance-t.distance}function _l(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)_l(r[o],t,e,!0)}}function _h(i,t,e,n){const s=O0(n);switch(e){case Bu:return i*t;case Hu:return i*t/s.components*s.byteLength;case Fl:return i*t/s.components*s.byteLength;case Ti:return i*t*2/s.components*s.byteLength;case Ol:return i*t*2/s.components*s.byteLength;case Gu:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case zl:return i*t*4/s.components*s.byteLength;case Yr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $r:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:case za:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Oa:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Ba:case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case so:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rl:case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ro:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function O0(i){switch(i){case un:case Fu:return{byteLength:1,components:1};case Xs:case Ou:case Ln:return{byteLength:2,components:1};case Nl:case Ul:return{byteLength:2,components:4};case Pn:case Il:case An:return{byteLength:4,components:1};case zu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);function Md(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function z0(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],_=d[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const _=d[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var k0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B0=`#ifdef USE_ALPHAHASH
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
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
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
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
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
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j0=`#ifdef USE_IRIDESCENCE
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
#endif`,Q0=`#ifdef USE_BUMPMAP
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lm=`#define PI 3.141592653589793
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
} // validated`,cm=`vec3 transformedNormal = objectNormal;
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
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Um=`PhysicalMaterial material;
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
#endif`,Fm=`uniform sampler2D dfgLUT;
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
}`,Om=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$m=`#if defined( USE_POINTS_UV )
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
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
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
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
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
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bg=`float getShadowMask() {
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
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform float backgroundBlurriness;
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
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
}`,Xg=`#if DEPTH_PACKING == 3200
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
}`,Yg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,Qg=`uniform vec3 diffuse;
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
}`,tx=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,nx=`#define MATCAP
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
}`,ix=`#define MATCAP
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
}`,sx=`#define NORMAL
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
}`,rx=`#define NORMAL
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
}`,ox=`#define PHONG
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
}`,ax=`#define PHONG
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
}`,lx=`#define STANDARD
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
}`,cx=`#define STANDARD
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
}`,hx=`#define TOON
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
}`,ux=`#define TOON
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
}`,dx=`uniform float size;
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 color;
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
}`,gx=`uniform float rotation;
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
}`,xx=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:k0,alphahash_pars_fragment:B0,alphamap_fragment:G0,alphamap_pars_fragment:H0,alphatest_fragment:V0,alphatest_pars_fragment:W0,aomap_fragment:X0,aomap_pars_fragment:Y0,batching_pars_vertex:q0,batching_vertex:$0,begin_vertex:Z0,beginnormal_vertex:K0,bsdfs:J0,iridescence_fragment:j0,bumpmap_pars_fragment:Q0,clipping_planes_fragment:tm,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:sm,color_pars_fragment:rm,color_pars_vertex:om,color_vertex:am,common:lm,defaultnormal_vertex:cm,displacementmap_pars_vertex:hm,displacementmap_vertex:um,emissivemap_fragment:dm,emissivemap_pars_fragment:fm,colorspace_fragment:pm,colorspace_pars_fragment:mm,envmap_fragment:gm,envmap_common_pars_fragment:xm,envmap_pars_fragment:_m,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Pm,envmap_vertex:Mm,fog_vertex:ym,fog_pars_vertex:Sm,fog_fragment:bm,fog_pars_fragment:wm,gradientmap_pars_fragment:Em,lightmap_pars_fragment:Tm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:Rm,lights_pars_begin:Cm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Dm,lights_phong_fragment:Im,lights_phong_pars_fragment:Nm,lights_physical_fragment:Um,lights_physical_pars_fragment:Fm,lights_fragment_begin:Om,lights_fragment_maps:zm,lights_fragment_end:km,lightprobes_pars_fragment:Bm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Hm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:Ym,map_particle_fragment:qm,map_particle_pars_fragment:$m,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:Km,morphinstance_vertex:Jm,morphcolor_vertex:jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:tg,morphtarget_vertex:eg,normal_fragment_begin:ng,normal_fragment_maps:ig,normal_pars_fragment:sg,normal_pars_vertex:rg,normal_vertex:og,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:cg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:ug,opaque_fragment:dg,packing:fg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:gg,dithering_pars_fragment:xg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:vg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:yg,shadowmap_vertex:Sg,shadowmask_pars_fragment:bg,skinbase_vertex:wg,skinning_pars_vertex:Eg,skinning_vertex:Tg,skinnormal_vertex:Ag,specularmap_fragment:Rg,specularmap_pars_fragment:Cg,tonemapping_fragment:Pg,tonemapping_pars_fragment:Lg,transmission_fragment:Dg,transmission_pars_fragment:Ig,uv_pars_fragment:Ng,uv_pars_vertex:Ug,uv_vertex:Fg,worldpos_vertex:Og,background_vert:zg,background_frag:kg,backgroundCube_vert:Bg,backgroundCube_frag:Gg,cube_vert:Hg,cube_frag:Vg,depth_vert:Wg,depth_frag:Xg,distance_vert:Yg,distance_frag:qg,equirect_vert:$g,equirect_frag:Zg,linedashed_vert:Kg,linedashed_frag:Jg,meshbasic_vert:jg,meshbasic_frag:Qg,meshlambert_vert:tx,meshlambert_frag:ex,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:sx,meshnormal_frag:rx,meshphong_vert:ox,meshphong_frag:ax,meshphysical_vert:lx,meshphysical_frag:cx,meshtoon_vert:hx,meshtoon_frag:ux,points_vert:dx,points_frag:fx,shadow_vert:px,shadow_frag:mx,sprite_vert:gx,sprite_frag:xx},Ct={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},wn={basic:{uniforms:nn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:nn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:nn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:nn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:nn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:nn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:nn([Ct.points,Ct.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:nn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:nn([Ct.common,Ct.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:nn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:nn([Ct.sprite,Ct.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:nn([Ct.common,Ct.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:nn([Ct.lights,Ct.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};wn.physical={uniforms:nn([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const Nr={r:0,b:0,g:0},_x=new xe,yd=new jt;yd.set(-1,0,0,0,1,0,0,0,1);function vx(i,t,e,n,s,r){const o=new Zt(0);let a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(v){let w=!1;const y=u(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,w){const y=u(w);y&&y.isCubeTexture?(c===void 0&&(c=new Kt(new Zn(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:ds(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yd),c.material.toneMapped=le.getTransfer(y.colorSpace)!==ge,(h!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Kt(new Ri(2,2),new Pi({name:"BackgroundMaterial",uniforms:ds(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(Nr,md(i)),e.buffers.color.setClear(Nr.r,Nr.g,Nr.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function Mx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(N,k,K,D,X){let J=!1;const Y=d(N,D,K,k);r!==Y&&(r=Y,c(r.object)),J=u(N,D,K,X),J&&p(N,D,K,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,y(N,k,K,D),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,k,K,D){const X=D.wireframe===!0;let J=n[k.id];J===void 0&&(J={},n[k.id]=J);const Y=N.isInstancedMesh===!0?N.id:0;let ht=J[Y];ht===void 0&&(ht={},J[Y]=ht);let Z=ht[K.id];Z===void 0&&(Z={},ht[K.id]=Z);let j=Z[X];return j===void 0&&(j=f(l()),Z[X]=j),j}function f(N){const k=[],K=[],D=[];for(let X=0;X<e;X++)k[X]=0,K[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:D,object:N,attributes:{},index:null}}function u(N,k,K,D){const X=r.attributes,J=k.attributes;let Y=0;const ht=K.getAttributes();for(const Z in ht)if(ht[Z].location>=0){const st=X[Z];let Dt=J[Z];if(Dt===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(Dt=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(Dt=N.instanceColor)),st===void 0||st.attribute!==Dt||Dt&&st.data!==Dt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==D}function p(N,k,K,D){const X={},J=k.attributes;let Y=0;const ht=K.getAttributes();for(const Z in ht)if(ht[Z].location>=0){let st=J[Z];st===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(st=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(st=N.instanceColor));const Dt={};Dt.attribute=st,st&&st.data&&(Dt.data=st.data),X[Z]=Dt,Y++}r.attributes=X,r.attributesNum=Y,r.index=D}function _(){const N=r.newAttributes;for(let k=0,K=N.length;k<K;k++)N[k]=0}function m(N){g(N,0)}function g(N,k){const K=r.newAttributes,D=r.enabledAttributes,X=r.attributeDivisors;K[N]=1,D[N]===0&&(i.enableVertexAttribArray(N),D[N]=1),X[N]!==k&&(i.vertexAttribDivisor(N,k),X[N]=k)}function v(){const N=r.newAttributes,k=r.enabledAttributes;for(let K=0,D=k.length;K<D;K++)k[K]!==N[K]&&(i.disableVertexAttribArray(K),k[K]=0)}function w(N,k,K,D,X,J,Y){Y===!0?i.vertexAttribIPointer(N,k,K,X,J):i.vertexAttribPointer(N,k,K,D,X,J)}function y(N,k,K,D){_();const X=D.attributes,J=K.getAttributes(),Y=k.defaultAttributeValues;for(const ht in J){const Z=J[ht];if(Z.location>=0){let j=X[ht];if(j===void 0&&(ht==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),ht==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){const st=j.normalized,Dt=j.itemSize,Nt=t.get(j);if(Nt===void 0)continue;const Q=Nt.buffer,gt=Nt.type,Lt=Nt.bytesPerElement,Gt=gt===i.INT||gt===i.UNSIGNED_INT||j.gpuType===Il;if(j.isInterleavedBufferAttribute){const Mt=j.data,Ut=Mt.isInterleavedBuffer===!0?Mt.stride:Mt.itemSize,lt=j.offset;if(Mt.isInstancedInterleavedBuffer||Mt.isInstancedBufferAttribute){for(let xt=0;xt<Z.locationSize;xt++)g(Z.location+xt,Mt.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let xt=0;xt<Z.locationSize;xt++)m(Z.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let xt=0;xt<Z.locationSize;xt++)w(Z.location+xt,Dt/Z.locationSize,gt,st,Ut*Lt,(lt+Dt/Z.locationSize*xt)*Lt,Gt)}else{if(j.isInstancedBufferAttribute){for(let Mt=0;Mt<Z.locationSize;Mt++)g(Z.location+Mt,j.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Mt=0;Mt<Z.locationSize;Mt++)m(Z.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Mt=0;Mt<Z.locationSize;Mt++)w(Z.location+Mt,Dt/Z.locationSize,gt,st,Dt*Lt,Dt/Z.locationSize*Mt*Lt,Gt)}}else if(Y!==void 0){const st=Y[ht];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(Z.location,st);break;case 3:i.vertexAttrib3fv(Z.location,st);break;case 4:i.vertexAttrib4fv(Z.location,st);break;default:i.vertexAttrib1fv(Z.location,st)}}}}v()}function E(){I();for(const N in n){const k=n[N];for(const K in k){const D=k[K];for(const X in D){const J=D[X];for(const Y in J)h(J[Y].object),delete J[Y];delete D[X]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;const k=n[N.id];for(const K in k){const D=k[K];for(const X in D){const J=D[X];for(const Y in J)h(J[Y].object),delete J[Y];delete D[X]}}delete n[N.id]}function x(N){for(const k in n){const K=n[k];for(const D in K){const X=K[D];if(X[N.id]===void 0)continue;const J=X[N.id];for(const Y in J)h(J[Y].object),delete J[Y];delete X[N.id]}}}function b(N){for(const k in n){const K=n[k],D=N.isInstancedMesh===!0?N.id:0,X=K[D];if(X!==void 0){for(const J in X){const Y=X[J];for(const ht in Y)h(Y[ht].object),delete Y[ht];delete X[J]}delete K[D],Object.keys(K).length===0&&delete n[k]}}}function I(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function yx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Rn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const b=x===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==un&&x!==An&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&$t("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:E,samples:T}}function bx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Hn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,w=v*4;let y=g.clippingState||null;l.value=y,y=h(p,f,w,u);for(let E=0;E!==w;++E)y[E]=e[E];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,y=u;w!==_;++w,y+=4)o.copy(d[w]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}class Jl extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new id(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zn(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:rs});r.uniforms.tEquirect.value=e;const o=new Kt(s,r),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=on),new xl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const vh=256,wx=3,Ex=20,Sd=256,bd=16,Tx=3,Ax=new P,Rx=new Zt;class po{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xl(1,10,null),this._boxMesh=new Kt(new Zn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Ax}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Rx));const m=new xl(n,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(vh,$u(t))}_fromTexture(t,e){t.mapping===ls||t.mapping===Vs?this._setSize(t.image.length===0?vh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Mh(t,!1,!1),n=Math.log2(t)-wx;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Mh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ls||t.mapping===Vs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Cx(),this._integrationMaterial=Px());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/bd);for(let o=0;o<=n;o++){const a=po.lodToRoughness(o,n);if(o>n-Tx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Sd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Lx());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Mh(i,t,e){return new Jl(i,{minFilter:ci,generateMipmaps:t,type:Ln,colorSpace:oo,depthBuffer:e})}function nr(i,t,e){return new Pi({name:i,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:rn,blending:rs,depthTest:!1,depthWrite:!1})}function Cx(){return nr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sd}u

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
	`)}function Px(){return nr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bd}},`

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
	`)}function Lx(){return nr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ex}
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
	`)}function yh(){return nr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Sh(){return nr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Do||u===Io)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new Jl(p.height);return _.fromEquirectangularTexture(i,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===Do||u===Io,_=u===ls||u===Vs;if(p||_){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new po(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new po(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Do?f.mapping=ls:u===Io&&(f.mapping=Vs),f}function l(f){let u=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ix(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Kr("WebGLRenderer: "+n+" extension not supported."),s}}}function Nx(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);const _=r.get(p);_&&(t.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(p){const _=p.attributes;for(const m in _)t.update(_[m],i.ARRAY_BUFFER)}function d(p){const _=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const v=_!==null?_.array.length:m.array.length/3-1,w=m.count>=65535?Qu:ju,y=new w(Math.ceil(v/3)*6,1),E=y.array;if(_!==null){const x=_.array;g=_.version;for(let b=0,I=0;b<v;b+=3){const C=x[b+0],N=x[b+1],k=x[b+2];E[I++]=C,E[I++]=N,E[I++]=N,E[I++]=k,E[I++]=k,E[I++]=C}}else{g=m.version;for(let x=0,b=0;x<v;x+=3){const I=x+0,C=x+1,N=x+2;E[b++]=I,E[b++]=C,E[b++]=C,E[b++]=N,E[b++]=N,E[b++]=I}}y.version=g;const T=r.get(p);T&&t.remove(T),r.set(p,y)}function f(p){const _=r.get(p);if(_){const m=p.index;m!==null&&_.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(const p in s){const _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Ux(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let m=0;m<u;m++)_+=f[m];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Fx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ce("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ox(i,t,e){const n=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let I=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let w=0;u===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let y=a.attributes.position.count*w,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const T=new Float32Array(y*E*4*d),x=new Zu(T,y,E,d);x.type=An,x.needsUpdate=!0;const b=w*4;for(let C=0;C<d;C++){const N=m[C],k=g[C],K=v[C],D=y*E*4*C;for(let X=0;X<N.count;X++){const J=X*b;u===!0&&(s.fromBufferAttribute(N,X),T[D+J+0]=s.x,T[D+J+1]=s.y,T[D+J+2]=s.z,T[D+J+3]=0),p===!0&&(s.fromBufferAttribute(k,X),T[D+J+4]=s.x,T[D+J+5]=s.y,T[D+J+6]=s.z,T[D+J+7]=0),_===!0&&(s.fromBufferAttribute(K,X),T[D+J+8]=s.x,T[D+J+9]=s.y,T[D+J+10]=s.z,T[D+J+11]=K.itemSize===4?s.w:1)}}f={count:d,texture:x,size:new pt(y,E)},n.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];const p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zx(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const kx={[Cu]:"LINEAR_TONE_MAPPING",[Pu]:"REINHARD_TONE_MAPPING",[Lu]:"CINEON_TONE_MAPPING",[Dl]:"ACES_FILMIC_TONE_MAPPING",[Iu]:"AGX_TONE_MAPPING",[Nu]:"NEUTRAL_TONE_MAPPING",[Du]:"CUSTOM_TONE_MAPPING"};function Bx(i,t,e,n,s,r){const o=new Cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Pe;h.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fe([0,2,0,0,2,0],2));const d=new C0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Kt(h,d),u=new vd(-1,1,1,-1,0,1);let p=null,_=null,m=!1,g,v=null,w=[],y=!1;this.setSize=function(E,T){o.setSize(E,T),a!==null&&a.setSize(E,T),l!==null&&l.setSize(E,T);for(let x=0;x<w.length;x++){const b=w[x];b.setSize&&b.setSize(E,T)}},this.setEffects=function(E){w=E,y=w.length>0&&w[0].isRenderPass===!0;const T=o.width,x=o.height;w.length>0&&a===null&&(a=new Cn(T,x,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(T,x,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&w.some(I=>I.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new hs(T,x),r===!0&&(c.format=hi,c.type=cs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let I=0;I<w.length;I++){const C=w[I];C.setSize&&C.setSize(T,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,T){if(m||E.toneMapping===Xn&&w.length===0)return!1;if(v=T,T!==null){const x=T.width,b=T.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return y===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=Xn,!0},this.hasRenderPass=function(){return y},this.end=function(E,T){E.toneMapping=g,m=!0;let x=o,b=a;for(let I=0;I<w.length;I++){const C=w[I];C.enabled!==!1&&(C.render(E,b,x,T),C.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,d.defines={},le.getTransfer(p)===ge&&(d.defines.SRGB_TRANSFER="");const I=kx[_];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(f,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const wd=new Je,Ed=new hs(1,1),Td=new sd(1),Ad=new Zu,Rd=new Ap,Cd=new id,bh=[],wh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wo(i,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Vx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function Wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Xx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),ke(e,n)}}function Yx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),ke(e,n)}}function qx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),ke(e,n)}}function $x(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function Kx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Jx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function jx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function Eo(i){return i.version===0&&(i.compareFunction=Xu,i.needsUpdate=!0),i}function n_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Eo(Ed):r=wd,e.setTexture2D(t||r,s)}function i_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rd,s)}function s_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Eo(Td):r=Cd,e.setTextureCube(t||r,s)}function r_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ad,s)}function o_(i){switch(i){case 5126:return Gx;case 35664:return Hx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return Yx;case 35676:return qx;case 5124:case 35670:return $x;case 35667:case 35671:return Zx;case 35668:case 35672:return Kx;case 35669:case 35673:return Jx;case 5125:return jx;case 36294:return Qx;case 36295:return t_;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}function a_(i,t){i.uniform1fv(this.addr,t)}function l_(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function c_(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function h_(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function u_(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function d_(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function f_(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function p_(i,t){i.uniform1iv(this.addr,t)}function m_(i,t){i.uniform2iv(this.addr,t)}function g_(i,t){i.uniform3iv(this.addr,t)}function x_(i,t){i.uniform4iv(this.addr,t)}function __(i,t){i.uniform1uiv(this.addr,t)}function v_(i,t){i.uniform2uiv(this.addr,t)}function M_(i,t){i.uniform3uiv(this.addr,t)}function y_(i,t){i.uniform4uiv(this.addr,t)}function S_(i,t,e){const n=this.cache,s=t.length,r=wo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Eo(Ed):o=wd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function b_(i,t,e){const n=this.cache,s=t.length,r=wo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rd,r[o])}function w_(i,t,e){const n=this.cache,s=t.length,r=wo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Eo(Td):o=Cd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function E_(i,t,e){const n=this.cache,s=t.length,r=wo(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ad,r[o])}function T_(i){switch(i){case 5126:return a_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return x_;case 5125:return __;case 36294:return v_;case 36295:return M_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return E_}}class A_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=o_(e.type)}}class R_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T_(e.type)}}class C_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Rh(i,t){i.seq.push(t),i.map[t.id]=t}function P_(i,t,e){const n=i.name,s=n.length;for(la.lastIndex=0;;){const r=la.exec(n),o=la.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rh(e,c===void 0?new A_(a,i,t):new R_(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new C_(a),Rh(e,d)),e=d}}}class jr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);P_(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ch(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const L_=37297;let D_=0;function I_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ph=new jt;function N_(i){le._getMatrix(Ph,le.workingColorSpace,i);const t=`mat3( ${Ph.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case ao:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+I_(i.getShaderSource(t),a)}else return r}function U_(i,t){const e=N_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const F_={[Cu]:"Linear",[Pu]:"Reinhard",[Lu]:"Cineon",[Dl]:"ACESFilmic",[Iu]:"AgX",[Nu]:"Neutral",[Du]:"Custom"};function O_(i,t){const e=F_[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ur=new P;function z_(){le.getLuminanceCoefficients(Ur);const i=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function B_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Is(i){return i!==""}function Dh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(H_,V_)}function V_(i,t){const e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return vl(e)}const W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(i){return i.replace(W_,X_)}function X_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Y_={[Xr]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function q_(i){return Y_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $_={[Vs]:"ENVMAP_MODE_REFRACTION"};function Z_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const K_={[Ru]:"ENVMAP_BLENDING_MULTIPLY",[Yf]:"ENVMAP_BLENDING_MIX",[qf]:"ENVMAP_BLENDING_ADD"};function J_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":K_[i.combine]||"ENVMAP_BLENDING_NONE"}function j_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=q_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Z_(e),d=J_(e),f=k_(e),u=B_(r),p=s.createProgram();let _,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Is).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Is).join(`
`),m.length>0&&(m+=`
`)):(_=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),m=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Xn?O_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,U_("linearToOutputTexel",e.outputColorSpace),z_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),o=vl(o),o=Dh(o,e),o=Ih(o,e),a=vl(a),a=Dh(a,e),a=Ih(a,e),o=Nh(o),a=Nh(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=g+_+o,w=g+m+a,y=Ch(s,s.VERTEX_SHADER,v),E=Ch(s,s.FRAGMENT_SHADER,w);s.attachShader(p,y),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(p)||"",k=s.getShaderInfoLog(y)||"",K=s.getShaderInfoLog(E)||"",D=N.trim(),X=k.trim(),J=K.trim();let Y=!0,ht=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,E);else{const Z=Lh(s,y,"vertex"),j=Lh(s,E,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+Z+`
`+j)}else D!==""?$t("WebGLProgram: Program Info Log:",D):(X===""||J==="")&&(ht=!1);ht&&(C.diagnostics={runnable:Y,programLog:D,vertexShader:{log:X,prefix:_},fragmentShader:{log:J,prefix:m}})}s.deleteShader(y),s.deleteShader(E),x=new jr(s,p),b=G_(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(p,L_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=E,this}let Q_=0;class tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ev(t),e.set(t,n)),n}}class ev{constructor(t){this.id=Q_++,this.code=t,this.usedTimes=0}}function nv(i){return i===Ti||i===so||i===ro}function iv(i,t,e,n,s,r){const o=new Vl,a=new tv,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,I,C,N,k){const K=C.fog,D=N.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||X,J),ht=f[x.type];let Z=n.precision;x.precision!==null&&(Z=n.getMaxPrecision(x.precision),Z!==x.precision&&$t("WebGLProgram.getParameters:",x.precision,"not supported, using",Z,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,st=j!==void 0?j.length:0;let Dt=0;D.morphAttributes.position!==void 0&&(Dt=1),D.morphAttributes.normal!==void 0&&(Dt=2),D.morphAttributes.color!==void 0&&(Dt=3);let Nt,Q,gt,Lt;if(ht){const Rt=wn[ht];Nt=Rt.vertexShader,Q=Rt.fragmentShader}else{Nt=x.vertexShader,Q=x.fragmentShader;const Rt=a.getVertexShaderStage(x),me=a.getFragmentShaderStage(x);a.update(x,Rt,me),gt=Rt.id,Lt=me.id}const Gt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,lt=N.isBatchedMesh===!0,xt=!!x.map,At=!!x.matcap,Ot=!!Y,W=Ot&&Y.isPMREMTexture===!0,ut=!!x.aoMap,z=!!x.lightMap,q=!!x.bumpMap&&x.wireframe===!1,V=!!x.normalMap,ct=!!x.displacementMap,at=!!x.emissiveMap,It=!!x.metalnessMap,qt=!!x.roughnessMap,te=x.anisotropy>0,F=x.clearcoat>0,be=x.diffuseRoughness>0,se=x.dispersion>0,ve=x.retroreflectivity>0,wt=x.iridescence>0,Re=x.sheen>0,Yt=x.transmission>0,Jt=te&&!!x.anisotropyMap,A=F&&!!x.clearcoatMap,M=F&&!!x.clearcoatNormalMap,G=F&&!!x.clearcoatRoughnessMap,dt=be&&!!x.diffuseRoughnessMap,ot=wt&&!!x.iridescenceMap,_t=wt&&!!x.iridescenceThicknessMap,Et=Re&&!!x.sheenColorMap,et=Re&&!!x.sheenRoughnessMap,it=!!x.specularMap,yt=!!x.specularColorMap,L=!!x.specularIntensityMap,rt=Yt&&!!x.transmissionMap,tt=Yt&&!!x.thicknessMap,St=!!x.gradientMap,mt=!!x.alphaMap,vt=x.alphaTest>0,Ht=!!x.alphaHash,ne=!!x.extensions;let ft=Xn;x.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&(ft=i.toneMapping);const Xt=W?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,ee={shaderID:ht,shaderType:x.type,shaderName:x.name,vertexShader:Nt,fragmentShader:Q,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:Lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Z,batching:lt,batchingColor:lt&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,outputColorSpace:Gt===null?i.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xt,matcap:At,envMap:Ot,envMapMode:Ot&&Y.mapping,envMapPMREM:W,envMapMaxLod:W?Xt.length-1:null,envMapSize:W?Xt[0].width:null,aoMap:ut,lightMap:z,bumpMap:q,normalMap:V,displacementMap:ct,emissiveMap:at,normalMapObjectSpace:V&&x.normalMapType===Kf,normalMapTangentSpace:V&&x.normalMapType===ul,packedNormalMap:V&&x.normalMapType===ul&&nv(x.normalMap.format),metalnessMap:It,roughnessMap:qt,anisotropy:te,anisotropyMap:Jt,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:be,diffuseRoughnessMap:dt,dispersion:se,retroreflection:ve,iridescence:wt,iridescenceMap:ot,iridescenceThicknessMap:_t,sheen:Re,sheenColorMap:Et,sheenRoughnessMap:et,specularMap:it,specularColorMap:yt,specularIntensityMap:L,transmission:Yt,transmissionMap:rt,thicknessMap:tt,gradientMap:St,opaque:x.transparent===!1&&x.blending===os&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:vt,alphaHash:Ht,combine:x.combine,mapUv:xt&&u(x.map.channel),aoMapUv:ut&&u(x.aoMap.channel),lightMapUv:z&&u(x.lightMap.channel),bumpMapUv:q&&u(x.bumpMap.channel),normalMapUv:V&&u(x.normalMap.channel),displacementMapUv:ct&&u(x.displacementMap.channel),emissiveMapUv:at&&u(x.emissiveMap.channel),metalnessMapUv:It&&u(x.metalnessMap.channel),roughnessMapUv:qt&&u(x.roughnessMap.channel),anisotropyMapUv:Jt&&u(x.anisotropyMap.channel),clearcoatMapUv:A&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:et&&u(x.sheenRoughnessMap.channel),specularMapUv:it&&u(x.specularMap.channel),specularColorMapUv:yt&&u(x.specularColorMap.channel),specularIntensityMapUv:L&&u(x.specularIntensityMap.channel),transmissionMapUv:rt&&u(x.transmissionMap.channel),thicknessMapUv:tt&&u(x.thicknessMap.channel),alphaMapUv:mt&&u(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(V||te),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(xt||mt),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&V===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Dt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:xt&&x.map.isVideoTexture===!0&&le.getTransfer(x.map.colorSpace)===ge,decodeVideoTextureEmissive:at&&x.emissiveMap.isVideoTexture===!0&&le.getTransfer(x.emissiveMap.colorSpace)===ge,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function _(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)b.push(I),b.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){const b=f[x.type];let I;if(b){const C=wn[b];I=T0.clone(C.uniforms)}else I=x.uniforms;return I}function w(x,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new j_(i,b,x,s),c.push(I),h.set(b,I)),I}function y(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:T}}function sv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Fh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Oh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,_,m,g){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},i[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=p,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=g),t++,v}function l(f,u,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);const w=a(f,u,p,_,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(f,u,p,_,m,g){const v=a(f,u,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||rv),n.length>1&&n.sort(u||Fh),s.length>1&&s.sort(u||Fh)}function d(){for(let f=t,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ov(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Oh,i.set(n,[o])):s>=r.length?(o=new Oh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function av(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Zt};break;case"SpotLight":e={position:new P,direction:new P,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function lv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cv=0;function hv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function uv(i){const t=new av,e=lv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new xe,o=new xe;function a(c){let h=0,d=0,f=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let u=0,p=0,_=0,m=0,g=0,v=0,w=0,y=0,E=0,T=0,x=0,b=0,I=0,C=0;c.sort(hv);for(let k=0,K=c.length;k<K;k++){const D=c[k],X=D.color,J=D.intensity,Y=D.distance;let ht=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ti?ht=D.shadow.map.texture:ht=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=X.r*J,d+=X.g*J,f+=X.b*J;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],J);C++}else if(D.isSunLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,st=e.get(D);st.shadowIntensity=j.intensity,st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=st,n.sunShadowMap[p]=ht;const Dt=j.getViewportCount();for(let Nt=0;Nt<Dt;Nt++)n.sunShadowMatrix[_+Nt]=j.getMatrix(Nt),n.sunShadowCascade[_+Nt]=j._cascadeData[Nt];_+=Dt,p++}n.sun[u]=Z,u++}else if(D.isDirectionalLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,st=e.get(D);st.shadowIntensity=j.intensity,st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,n.directionalShadow[m]=st,n.directionalShadowMap[m]=ht,n.directionalShadowMatrix[m]=D.shadow.matrix,E++}n.directional[m]=Z,m++}else if(D.isSpotLight){const Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(X).multiplyScalar(J),Z.distance=Y,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[v]=Z;const j=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,j.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[v]=j.matrix,D.castShadow){const st=e.get(D);st.shadowIntensity=j.intensity,st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,n.spotShadow[v]=st,n.spotShadowMap[v]=ht,x++}v++}else if(D.isRectAreaLight){const Z=t.get(D);Z.color.copy(X).multiplyScalar(J),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=Z,w++}else if(D.isPointLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const j=D.shadow,st=e.get(D);st.shadowIntensity=j.intensity,st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,st.shadowCameraNear=j.camera.near,st.shadowCameraFar=j.camera.far,n.pointShadow[g]=st,n.pointShadowMap[g]=ht,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=Z,g++}else if(D.isHemisphereLight){const Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(J),Z.groundColor.copy(D.groundColor).multiplyScalar(J),n.hemi[y]=Z,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const N=n.hash;(N.sunLength!==u||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==x||N.numSpotMaps!==b||N.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=w,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,N.sunLength=u,N.directionalLength=m,N.pointLength=g,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=x,N.numSpotMaps=b,N.numLightProbes=C,n.version=cv++)}function l(c,h){let d=0,f=0,u=0,p=0,_=0,m=0;const g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){const y=c[v];if(y.isSunLight){const E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),d++}else if(y.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(y.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function zh(i){const t=new uv(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function dv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zh(i),t.set(s,[a])):r>=o.length?(a=new zh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`,mv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],gv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],kh=new xe,Rs=new P,ca=new P;function xv(i,t,e){let n=new $s;const s=new pt,r=new pt,o=new Ee,a=new P0,l=new L0,c={},h=e.maxTextureSize,d={[Ei]:rn,[rn]:Ei,[hn]:hn},f=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new Pe;p.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let g=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Eu&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xr);const I=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),k=i.state;k.setBlending(rs),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const K=g!==this.type;K&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(X=>X.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,X=T.length;D<X;D++){const J=T[D],Y=J.shadow;if(Y===void 0){$t("WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ht=Y.getFrameExtents();s.multiply(ht),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,Y.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=Z,Y.map===null||K===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ls){if(J.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Cn(s.x,s.y,{format:Ti,type:Ln,minFilter:on,magFilter:on,generateMipmaps:!1}),Y.map.texture.name=J.name+".shadowMap",Y.map.depthTexture=new hs(s.x,s.y,An),Y.map.depthTexture.name=J.name+".shadowMapDepth",Y.map.depthTexture.format=ui,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ye,Y.map.depthTexture.magFilter=Ye}else J.isPointLight?(Y.map=new Jl(s.x),Y.map.depthTexture=new sd(s.x,Pn)):(Y.map=new Cn(s.x,s.y),Y.map.depthTexture=new hs(s.x,s.y,Pn)),Y.map.depthTexture.name=J.name+".shadowMap",Y.map.depthTexture.format=ui,this.type===Xr?(Y.map.depthTexture.compareFunction=Z?Wu:Vu,Y.map.depthTexture.minFilter=on,Y.map.depthTexture.magFilter=on):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ye,Y.map.depthTexture.magFilter=Ye);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const j=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();J.isPointLight!==!0&&Y.updateMatrices(J,b);const st=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:b.layers;for(let Dt=0;Dt<j;Dt++){const Nt=Y.getCamera(Dt);if(J.isPointLight){const Q=Y.camera,gt=Y.matrix,Lt=J.distance||Q.far;Lt!==Q.far&&(Q.far=Lt,Q.updateProjectionMatrix()),Rs.setFromMatrixPosition(J.matrixWorld),Q.position.copy(Rs),ca.copy(Q.position),ca.add(mv[Dt]),Q.up.copy(gv[Dt]),Q.lookAt(ca),Q.updateMatrixWorld(),gt.makeTranslation(-Rs.x,-Rs.y,-Rs.z),kh.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(kh,Q.coordinateSystem,Q.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,Dt),i.clear();else{Dt===0&&(i.setRenderTarget(Y.map),i.clear());const Q=Y.getViewport(Dt);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),k.viewport(o)}n=Y.getFrustum(Dt),y(x,b,Nt,J,st,this.type)}Y.isPointLightShadow!==!0&&this.type===Ls&&v(Y,b),Y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(I,C,N)};function v(T,x){const b=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new Cn(s.x,s.y,{format:Ti,type:Ln}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,b,f,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,b,u,_,null)}function w(T,x,b,I){let C=null;const N=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)C=N;else if(C=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const k=C.uuid,K=x.uuid;let D=c[k];D===void 0&&(D={},c[k]=D);let X=D[K];X===void 0&&(X=C.clone(),D[K]=X,x.addEventListener("dispose",E)),C=X}if(C.visible=x.visible,C.wireframe=x.wireframe,I===Ls?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const k=i.properties.get(C);k.light=b}return C}function y(T,x,b,I,C,N){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Ls)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const D=t.update(T),X=T.material;if(Array.isArray(X)){const J=D.groups;for(let Y=0,ht=J.length;Y<ht;Y++){const Z=J[Y],j=X[Z.materialIndex];if(j&&j.visible){const st=w(T,j,I,N);T.onBeforeShadow(i,T,x,b,D,st,Z),i.renderBufferDirect(b,null,D,st,T,Z),T.onAfterShadow(i,T,x,b,D,st,Z)}}}else if(X.visible){const J=w(T,X,I,N);T.onBeforeShadow(i,T,x,b,D,J,null),i.renderBufferDirect(b,null,D,J,T,null),T.onAfterShadow(i,T,x,b,D,J,null)}}const K=T.children;for(let D=0,X=K.length;D<X;D++)y(K[D],x,b,I,C,N)}function E(T){T.target.removeEventListener("dispose",E);for(const b in c){const I=c[b],C=T.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function _v(i,t){function e(){let L=!1;const rt=new Ee;let tt=null;const St=new Ee(0,0,0,0);return{setMask:function(mt){tt!==mt&&!L&&(i.colorMask(mt,mt,mt,mt),tt=mt)},setLocked:function(mt){L=mt},setClear:function(mt,vt,Ht,ne,ft){ft===!0&&(mt*=ne,vt*=ne,Ht*=ne),rt.set(mt,vt,Ht,ne),St.equals(rt)===!1&&(i.clearColor(mt,vt,Ht,ne),St.copy(rt))},reset:function(){L=!1,tt=null,St.set(-1,0,0,0)}}}function n(){let L=!1,rt=!1,tt=null,St=null,mt=null;return{setReversed:function(vt){if(rt!==vt){const Ht=t.get("EXT_clip_control");vt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),rt=vt;const ne=mt;mt=null,this.setClear(ne)}},getReversed:function(){return rt},setTest:function(vt){vt?Mt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(vt){tt!==vt&&!L&&(i.depthMask(vt),tt=vt)},setFunc:function(vt){if(rt&&(vt=op[vt]),St!==vt){switch(vt){case Aa:i.depthFunc(i.NEVER);break;case Ra:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=vt}},setLocked:function(vt){L=vt},setClear:function(vt){mt!==vt&&(mt=vt,rt&&(vt=1-vt),i.clearDepth(vt))},reset:function(){L=!1,tt=null,St=null,mt=null,rt=!1}}}function s(){let L=!1,rt=null,tt=null,St=null,mt=null,vt=null,Ht=null,ne=null,ft=null;return{setTest:function(Xt){L||(Xt?Mt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Xt){rt!==Xt&&!L&&(i.stencilMask(Xt),rt=Xt)},setFunc:function(Xt,ee,Rt){(tt!==Xt||St!==ee||mt!==Rt)&&(i.stencilFunc(Xt,ee,Rt),tt=Xt,St=ee,mt=Rt)},setOp:function(Xt,ee,Rt){(vt!==Xt||Ht!==ee||ne!==Rt)&&(i.stencilOp(Xt,ee,Rt),vt=Xt,Ht=ee,ne=Rt)},setLocked:function(Xt){L=Xt},setClear:function(Xt){ft!==Xt&&(i.clearStencil(Xt),ft=Xt)},reset:function(){L=!1,rt=null,tt=null,St=null,mt=null,vt=null,Ht=null,ne=null,ft=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],_=null,m=!1,g=null,v=null,w=null,y=null,E=null,T=null,x=null,b=new Zt(0,0,0),I=0,C=!1,N=null,k=null,K=null,D=null,X=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ht=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=ht>=1):Z.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=ht>=2);let j=null,st={};const Dt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Q=new Ee().fromArray(Dt),gt=new Ee().fromArray(Nt);function Lt(L,rt,tt,St){const mt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(L,vt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<tt;Ht++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(rt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return vt}const Gt={};Gt[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Gt[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Gt[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Gt[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),o.setFunc(Hs),q(!1),V(Lc),Mt(i.CULL_FACE),ut(rs);function Mt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ut(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function lt(L,rt){return f[L]!==rt?(i.bindFramebuffer(L,rt),f[L]=rt,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=rt),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function xt(L,rt){let tt=p,St=!1;if(L){tt=u.get(rt),tt===void 0&&(tt=[],u.set(rt,tt));const mt=L.textures;if(tt.length!==mt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Ht=mt.length;vt<Ht;vt++)tt[vt]=i.COLOR_ATTACHMENT0+vt;tt.length=mt.length,St=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,St=!0);St&&i.drawBuffers(tt)}function At(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const Ot={[ns]:i.FUNC_ADD,[Cf]:i.FUNC_SUBTRACT,[Pf]:i.FUNC_REVERSE_SUBTRACT};Ot[Lf]=i.MIN,Ot[Df]=i.MAX;const W={[If]:i.ZERO,[Nf]:i.ONE,[Uf]:i.SRC_COLOR,[Tu]:i.SRC_ALPHA,[Gf]:i.SRC_ALPHA_SATURATE,[kf]:i.DST_COLOR,[Of]:i.DST_ALPHA,[Ff]:i.ONE_MINUS_SRC_COLOR,[Au]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Hf]:i.CONSTANT_COLOR,[Vf]:i.ONE_MINUS_CONSTANT_COLOR,[Wf]:i.CONSTANT_ALPHA,[Xf]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(L,rt,tt,St,mt,vt,Ht,ne,ft,Xt){if(L===rs){m===!0&&(Ut(i.BLEND),m=!1);return}if(m===!1&&(Mt(i.BLEND),m=!0),L!==Rf){if(L!==g||Xt!==C){if((v!==ns||E!==ns)&&(i.blendEquation(i.FUNC_ADD),v=ns,E=ns),Xt)switch(L){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",L);break}else switch(L){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dc:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",L);break}w=null,y=null,T=null,x=null,b.set(0,0,0),I=0,g=L,C=Xt}return}mt=mt||rt,vt=vt||tt,Ht=Ht||St,(rt!==v||mt!==E)&&(i.blendEquationSeparate(Ot[rt],Ot[mt]),v=rt,E=mt),(tt!==w||St!==y||vt!==T||Ht!==x)&&(i.blendFuncSeparate(W[tt],W[St],W[vt],W[Ht]),w=tt,y=St,T=vt,x=Ht),(ne.equals(b)===!1||ft!==I)&&(i.blendColor(ne.r,ne.g,ne.b,ft),b.copy(ne),I=ft),g=L,C=!1}function z(L,rt){L.side===hn?Ut(i.CULL_FACE):Mt(i.CULL_FACE);let tt=L.side===rn;rt&&(tt=!tt),q(tt),L.blending===os&&L.transparent===!1?ut(rs):ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const St=L.stencilWrite;a.setTest(St),St&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),at(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function V(L){L!==Tf?(Mt(i.CULL_FACE),L!==k&&(L===Lc?i.cullFace(i.BACK):L===Af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),k=L}function ct(L){L!==K&&(Y&&i.lineWidth(L),K=L)}function at(L,rt,tt){L?(Mt(i.POLYGON_OFFSET_FILL),(D!==rt||X!==tt)&&(D=rt,X=tt,o.getReversed()&&(rt=-rt,tt=-tt),i.polygonOffset(rt,tt))):Ut(i.POLYGON_OFFSET_FILL)}function It(L){L?Mt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function qt(L){L===void 0&&(L=i.TEXTURE0+J-1),j!==L&&(i.activeTexture(L),j=L)}function te(L,rt,tt){tt===void 0&&(j===null?tt=i.TEXTURE0+J-1:tt=j);let St=st[tt];St===void 0&&(St={type:void 0,texture:void 0},st[tt]=St),(St.type!==L||St.texture!==rt)&&(j!==tt&&(i.activeTexture(tt),j=tt),i.bindTexture(L,rt||Gt[L]),St.type=L,St.texture=rt)}function F(){const L=st[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function be(){try{i.compressedTexImage2D(...arguments)}catch(L){ce("WebGLState:",L)}}function se(){try{i.compressedTexImage3D(...arguments)}catch(L){ce("WebGLState:",L)}}function ve(){try{i.texSubImage2D(...arguments)}catch(L){ce("WebGLState:",L)}}function wt(){try{i.texSubImage3D(...arguments)}catch(L){ce("WebGLState:",L)}}function Re(){try{i.compressedTexSubImage2D(...arguments)}catch(L){ce("WebGLState:",L)}}function Yt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){ce("WebGLState:",L)}}function Jt(){try{i.texStorage2D(...arguments)}catch(L){ce("WebGLState:",L)}}function A(){try{i.texStorage3D(...arguments)}catch(L){ce("WebGLState:",L)}}function M(){try{i.texImage2D(...arguments)}catch(L){ce("WebGLState:",L)}}function G(){try{i.texImage3D(...arguments)}catch(L){ce("WebGLState:",L)}}function dt(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function ot(L,rt){d[L]!==rt&&(i.pixelStorei(L,rt),d[L]=rt)}function _t(L){Q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function Et(L){gt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),gt.copy(L))}function et(L,rt){let tt=c.get(rt);tt===void 0&&(tt=new WeakMap,c.set(rt,tt));let St=tt.get(L);St===void 0&&(St=i.getUniformBlockIndex(rt,L.name),i.uniformBlockBinding(rt,St,St),tt.set(L,St))}function it(L,rt,tt){const mt=c.get(rt).get(L);l[mt]!==tt&&(i.bindBufferBase(i.UNIFORM_BUFFER,mt,tt),l[mt]=tt)}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,st={},f={},l={},u=new WeakMap,p=[],_=null,m=!1,g=null,v=null,w=null,y=null,E=null,T=null,x=null,b=new Zt(0,0,0),I=0,C=!1,N=null,k=null,K=null,D=null,X=null,Q.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:Ut,bindFramebuffer:lt,drawBuffers:xt,useProgram:At,setBlending:ut,setMaterial:z,setFlipSided:q,setCullFace:V,setLineWidth:ct,setPolygonOffset:at,setScissorTest:It,activeTexture:qt,bindTexture:te,unbindTexture:F,compressedTexImage2D:be,compressedTexImage3D:se,texImage2D:M,texImage3D:G,pixelStorei:ot,getParameter:dt,updateUBOMapping:et,uniformBlockBinding:it,texStorage2D:Jt,texStorage3D:A,texSubImage2D:ve,texSubImage3D:wt,compressedTexSubImage2D:Re,compressedTexSubImage3D:Yt,scissor:_t,viewport:Et,reset:yt}}function vv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,_=new FinalizationRegistry(A=>p.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):lo("canvas")}function v(A,M,G){let dt=1;const ot=Jt(A);if((ot.width>G||ot.height>G)&&(dt=G/Math.max(ot.width,ot.height)),dt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const _t=Math.floor(dt*ot.width),Et=Math.floor(dt*ot.height);f===void 0&&(f=g(_t,Et));const et=M?g(_t,Et):f;return et.width=_t,et.height=Et,et.getContext("2d").drawImage(A,0,0,_t,Et),$t("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+_t+"x"+Et+")."),et}else return"data"in A&&$t("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),A;return A}function w(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,M,G,dt,ot,_t=!1){if(A!==null){if(i[A]!==void 0)return i[A];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Et;dt&&(Et=t.get("EXT_texture_norm16"),Et||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=M;if(M===i.RED&&(G===i.FLOAT&&(et=i.R32F),G===i.HALF_FLOAT&&(et=i.R16F),G===i.UNSIGNED_BYTE&&(et=i.R8),G===i.UNSIGNED_SHORT&&Et&&(et=Et.R16_EXT),G===i.SHORT&&Et&&(et=Et.R16_SNORM_EXT)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.R8UI),G===i.UNSIGNED_SHORT&&(et=i.R16UI),G===i.UNSIGNED_INT&&(et=i.R32UI),G===i.BYTE&&(et=i.R8I),G===i.SHORT&&(et=i.R16I),G===i.INT&&(et=i.R32I)),M===i.RG&&(G===i.FLOAT&&(et=i.RG32F),G===i.HALF_FLOAT&&(et=i.RG16F),G===i.UNSIGNED_BYTE&&(et=i.RG8),G===i.UNSIGNED_SHORT&&Et&&(et=Et.RG16_EXT),G===i.SHORT&&Et&&(et=Et.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RG8UI),G===i.UNSIGNED_SHORT&&(et=i.RG16UI),G===i.UNSIGNED_INT&&(et=i.RG32UI),G===i.BYTE&&(et=i.RG8I),G===i.SHORT&&(et=i.RG16I),G===i.INT&&(et=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RGB8UI),G===i.UNSIGNED_SHORT&&(et=i.RGB16UI),G===i.UNSIGNED_INT&&(et=i.RGB32UI),G===i.BYTE&&(et=i.RGB8I),G===i.SHORT&&(et=i.RGB16I),G===i.INT&&(et=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),G===i.UNSIGNED_INT&&(et=i.RGBA32UI),G===i.BYTE&&(et=i.RGBA8I),G===i.SHORT&&(et=i.RGBA16I),G===i.INT&&(et=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_SHORT&&Et&&(et=Et.RGB16_EXT),G===i.SHORT&&Et&&(et=Et.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),M===i.RGBA){const it=_t?ao:le.getTransfer(ot);G===i.FLOAT&&(et=i.RGBA32F),G===i.HALF_FLOAT&&(et=i.RGBA16F),G===i.UNSIGNED_BYTE&&(et=it===ge?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&Et&&(et=Et.RGBA16_EXT),G===i.SHORT&&Et&&(et=Et.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(A,M){let G;return A?M===null||M===Pn||M===cs?G=i.DEPTH24_STENCIL8:M===An?G=i.DEPTH32F_STENCIL8:M===Xs&&(G=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pn||M===cs?G=i.DEPTH_COMPONENT24:M===An?G=i.DEPTH_COMPONENT32F:M===Xs&&(G=i.DEPTH_COMPONENT16),G}function b(A,M){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ye&&A.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function I(A){const M=new WeakRef(A);n.get(A).__ref=M,p.add(M),_.register(A,M,M)}function C(A){const M=n.get(A).__ref;M!==void 0&&(p.delete(M),_.unregister(M))}function N(A){K(A.target)}function k(A){D(A.target)}function K(A){A.removeEventListener("dispose",N),C(A),J(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function D(A){A.removeEventListener("dispose",k),C(A),ht(A)}function X(){for(const A of p){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?D(M):K(M))}p.clear(),d.clear()}function J(A){const M=n.get(A);if(M.__webglInit===void 0)return;const G=A.source,dt=u.get(G);if(dt){const ot=dt[M.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&Y(A),Object.keys(dt).length===0&&u.delete(G)}n.remove(A)}function Y(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const G=A.source,dt=u.get(G);delete dt[M.__cacheKey],o.memory.textures--}function ht(A){const M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const G=A.depthTexture;if(G&&G.renderTarget===A&&K(G),A.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(M.__webglFramebuffer[ot]))for(let _t=0;_t<M.__webglFramebuffer[ot].length;_t++)i.deleteFramebuffer(M.__webglFramebuffer[ot][_t]);else i.deleteFramebuffer(M.__webglFramebuffer[ot]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ot])}else{if(Array.isArray(M.__webglFramebuffer))for(let ot=0;ot<M.__webglFramebuffer.length;ot++)i.deleteFramebuffer(M.__webglFramebuffer[ot]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ot=0;ot<M.__webglColorRenderbuffer.length;ot++)M.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ot]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const dt=A.textures;for(let ot=0,_t=dt.length;ot<_t;ot++){const Et=n.get(dt[ot]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(dt[ot])}n.remove(A)}let Z=0;function j(){Z=0}function st(){return Z}function Dt(A){Z=A}function Nt(){const A=Z;return A>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,A}function Q(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function gt(A,M){const G=n.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const dt=A.image;if(dt===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{z(G,A,M);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function Lt(A,M){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){z(G,A,M);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function Gt(A,M){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){z(G,A,M);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function Mt(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){q(G,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const Ut={[Ws]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},lt={[Ye]:i.NEAREST,[$f]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[No]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},xt={[jf]:i.NEVER,[Xu]:i.ALWAYS,[Qf]:i.LESS,[Vu]:i.LEQUAL,[tp]:i.EQUAL,[Wu]:i.GEQUAL,[ep]:i.GREATER,[np]:i.NOTEQUAL};function At(A,M){if(M.type===An&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===No||M.magFilter===rr||M.magFilter===ci||M.minFilter===on||M.minFilter===No||M.minFilter===rr||M.minFilter===ci)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ut[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ut[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ut[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,lt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ye||M.minFilter!==rr&&M.minFilter!==ci||M.type===An&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ot(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N),I(M));const dt=M.source;let ot=u.get(dt);ot===void 0&&(ot={},u.set(dt,ot));const _t=Q(M);if(_t!==A.__cacheKey){ot[_t]===void 0&&(ot[_t]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ot[_t].usedTimes++;const Et=ot[A.__cacheKey];Et!==void 0&&(ot[A.__cacheKey].usedTimes--,Et.usedTimes===0&&Y(M)),A.__cacheKey=_t,A.__webglTexture=ot[_t].texture}return G}function W(A,M,G){return Math.floor(Math.floor(A/G)/M)}function ut(A,M,G,dt){const _t=A.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,dt,M.data);else{_t.sort((L,rt)=>L.start-rt.start);let Et=0;for(let L=1;L<_t.length;L++){const rt=_t[Et],tt=_t[L],St=rt.start+rt.count,mt=W(tt.start,M.width,4),vt=W(rt.start,M.width,4);tt.start<=St+1&&mt===vt&&W(tt.start+tt.count-1,M.width,4)===mt?rt.count=Math.max(rt.count,tt.start+tt.count-rt.start):(++Et,_t[Et]=tt)}_t.length=Et+1;const et=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let L=0,rt=_t.length;L<rt;L++){const tt=_t[L],St=Math.floor(tt.start/4),mt=Math.ceil(tt.count/4),vt=St%M.width,Ht=Math.floor(St/M.width),ne=mt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ht),e.texSubImage2D(i.TEXTURE_2D,0,vt,Ht,ne,ft,G,dt,M.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function z(A,M,G){let dt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(dt=i.TEXTURE_3D);const ot=Ot(A,M),_t=M.source;e.bindTexture(dt,A.__webglTexture,i.TEXTURE0+G);const Et=n.get(_t);if(_t.version!==Et.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ft=le.getPrimaries(le.workingColorSpace),Xt=M.colorSpace===ai?null:le.getPrimaries(M.colorSpace),ee=M.colorSpace===ai||ft===Xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let it=v(M.image,!1,s.maxTextureSize);it=Yt(M,it);const yt=r.convert(M.format,M.colorSpace),L=r.convert(M.type);let rt=T(M.internalFormat,yt,L,M.normalized,M.colorSpace,M.isVideoTexture);At(dt,M);let tt;const St=M.mipmaps,mt=M.isVideoTexture!==!0,vt=Et.__version===void 0||ot===!0,Ht=_t.dataReady,ne=b(M,it);if(M.isDepthTexture)rt=x(M.format===hi,M.type),vt&&(mt?e.texStorage2D(i.TEXTURE_2D,1,rt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,rt,it.width,it.height,0,yt,L,null));else if(M.isDataTexture)if(St.length>0){mt&&vt&&e.texStorage2D(i.TEXTURE_2D,ne,rt,St[0].width,St[0].height);for(let ft=0,Xt=St.length;ft<Xt;ft++)tt=St[ft],mt?Ht&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,tt.width,tt.height,yt,L,tt.data):e.texImage2D(i.TEXTURE_2D,ft,rt,tt.width,tt.height,0,yt,L,tt.data);M.generateMipmaps=!1}else mt?(vt&&e.texStorage2D(i.TEXTURE_2D,ne,rt,it.width,it.height),Ht&&ut(M,it,yt,L)):e.texImage2D(i.TEXTURE_2D,0,rt,it.width,it.height,0,yt,L,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){mt&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,rt,St[0].width,St[0].height,it.depth);for(let ft=0,Xt=St.length;ft<Xt;ft++)if(tt=St[ft],M.format!==Rn)if(yt!==null)if(mt){if(Ht)if(M.layerUpdates.size>0){const ee=_h(tt.width,tt.height,M.format,M.type);for(const Rt of M.layerUpdates){const me=tt.data.subarray(Rt*ee/tt.data.BYTES_PER_ELEMENT,(Rt+1)*ee/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Rt,tt.width,tt.height,1,yt,me)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,tt.width,tt.height,it.depth,yt,tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,rt,tt.width,tt.height,it.depth,0,tt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Ht&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,tt.width,tt.height,it.depth,yt,L,tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,rt,tt.width,tt.height,it.depth,0,yt,L,tt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{mt&&vt&&e.texStorage2D(i.TEXTURE_2D,ne,rt,St[0].width,St[0].height);for(let ft=0,Xt=St.length;ft<Xt;ft++)tt=St[ft],M.format!==Rn?yt!==null?mt?Ht&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,tt.width,tt.height,yt,tt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,rt,tt.width,tt.height,0,tt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Ht&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,tt.width,tt.height,yt,L,tt.data):e.texImage2D(i.TEXTURE_2D,ft,rt,tt.width,tt.height,0,yt,L,tt.data)}else if(M.isDataArrayTexture)if(mt){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,rt,it.width,it.height,it.depth),Ht)if(M.layerUpdates.size>0){const ft=_h(it.width,it.height,M.format,M.type);for(const Xt of M.layerUpdates){const ee=it.data.subarray(Xt*ft/it.data.BYTES_PER_ELEMENT,(Xt+1)*ft/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xt,it.width,it.height,1,yt,L,ee)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,L,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,it.width,it.height,it.depth,0,yt,L,it.data);else if(M.isData3DTexture)mt?(vt&&e.texStorage3D(i.TEXTURE_3D,ne,rt,it.width,it.height,it.depth),Ht&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,L,it.data)):e.texImage3D(i.TEXTURE_3D,0,rt,it.width,it.height,it.depth,0,yt,L,it.data);else if(M.isFramebufferTexture){if(vt)if(mt)e.texStorage2D(i.TEXTURE_2D,ne,rt,it.width,it.height);else{let ft=it.width,Xt=it.height;for(let ee=0;ee<ne;ee++)e.texImage2D(i.TEXTURE_2D,ee,rt,ft,Xt,0,yt,L,null),ft>>=1,Xt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),it.parentNode!==ft){ft.appendChild(it),d.add(M),ft.onpaint=Xt=>{const ee=Xt.changedElements;for(const Rt of d)ee.includes(Rt.image)&&(Rt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{const ee=i.RGBA,Rt=i.RGBA,me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ee,Rt,me,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(St.length>0){if(mt&&vt){const ft=Jt(St[0]);e.texStorage2D(i.TEXTURE_2D,ne,rt,ft.width,ft.height)}for(let ft=0,Xt=St.length;ft<Xt;ft++)tt=St[ft],mt?Ht&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,yt,L,tt):e.texImage2D(i.TEXTURE_2D,ft,rt,yt,L,tt);M.generateMipmaps=!1}else if(mt){if(vt){const ft=Jt(it);e.texStorage2D(i.TEXTURE_2D,ne,rt,ft.width,ft.height)}Ht&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,L,it)}else e.texImage2D(i.TEXTURE_2D,0,rt,yt,L,it);w(M)&&M.mipmapsAutoUpdate===!0&&y(dt),Et.__version=_t.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function q(A,M,G){if(M.image.length!==6)return;const dt=Ot(A,M),ot=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const _t=n.get(ot);if(ot.version!==_t.__version||dt===!0){e.activeTexture(i.TEXTURE0+G);const Et=le.getPrimaries(le.workingColorSpace),et=M.colorSpace===ai?null:le.getPrimaries(M.colorSpace),it=M.colorSpace===ai||Et===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const yt=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,rt=[];for(let Rt=0;Rt<6;Rt++)!yt&&!L?rt[Rt]=v(M.image[Rt],!0,s.maxCubemapSize):rt[Rt]=L?M.image[Rt].image:M.image[Rt],rt[Rt]=Yt(M,rt[Rt]);const tt=rt[0],St=r.convert(M.format,M.colorSpace),mt=r.convert(M.type);let vt=T(M.internalFormat,St,mt,M.normalized,M.colorSpace);const Ht=M.isVideoTexture!==!0,ne=_t.__version===void 0||dt===!0,ft=ot.dataReady;let Xt=b(M,tt);At(i.TEXTURE_CUBE_MAP,M);let ee;if(M.isDepthTexture){if(vt=x(M.format===hi,M.type),ne)if(Ht)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,vt,tt.width,tt.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,tt.width,tt.height,0,St,mt,null)}else if(yt){Ht&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,vt,tt.width,tt.height);for(let Rt=0;Rt<6;Rt++){ee=rt[Rt].mipmaps;for(let me=0;me<ee.length;me++){const Be=ee[me];M.format!==Rn?St!==null?Ht?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me,0,0,Be.width,Be.height,St,Be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me,vt,Be.width,Be.height,0,Be.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me,0,0,Be.width,Be.height,St,mt,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me,vt,Be.width,Be.height,0,St,mt,Be.data)}}}else{if(ee=M.mipmaps,Ht&&ne){ee.length>0&&Xt++;const Rt=Jt(rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,vt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(L){Ht?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,rt[Rt].width,rt[Rt].height,St,mt,rt[Rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,rt[Rt].width,rt[Rt].height,0,St,mt,rt[Rt].data);for(let me=0;me<ee.length;me++){const ti=ee[me].image[Rt].image;Ht?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me+1,0,0,ti.width,ti.height,St,mt,ti.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me+1,vt,ti.width,ti.height,0,St,mt,ti.data)}}else{Ht?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,St,mt,rt[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,St,mt,rt[Rt]);for(let me=0;me<ee.length;me++){const Be=ee[me];Ht?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me+1,0,0,St,mt,Be.image[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me+1,vt,St,mt,Be.image[Rt])}}}w(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),_t.__version=ot.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function V(A,M,G,dt,ot,_t){const Et=r.convert(G.format,G.colorSpace),et=r.convert(G.type),it=T(G.internalFormat,Et,et,G.normalized,G.colorSpace),yt=n.get(M),L=n.get(G);if(L.__renderTarget=M,!yt.__hasExternalTextures){const rt=Math.max(1,M.width>>_t),tt=Math.max(1,M.height>>_t);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,_t,it,rt,tt,M.depth,0,Et,et,null):e.texImage2D(ot,_t,it,rt,tt,0,Et,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),wt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ot,L.__webglTexture,0,ve(M)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,ot,L.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(A,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const dt=M.depthTexture,ot=dt&&dt.isDepthTexture?dt.type:null,_t=x(M.stencilBuffer,ot),Et=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;wt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(M),_t,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(M),_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,A)}else{const dt=M.textures;for(let ot=0;ot<dt.length;ot++){const _t=dt[ot],Et=r.convert(_t.format,_t.colorSpace),et=r.convert(_t.type),it=T(_t.internalFormat,Et,et,_t.normalized,_t.colorSpace);wt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(M),it,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(M),it,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,it,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(A,M,G){const dt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=n.get(M.depthTexture);ot.__renderTarget=M;const _t=dt?M.depthTexture.image[0]:M.depthTexture.image;(!ot.__webglTexture||_t.width!==M.width||_t.height!==M.height)&&(_t.width=M.width,_t.height=M.height,M.depthTexture.needsUpdate=!0),dt?Mt(M.depthTexture,0):gt(M.depthTexture,0);const Et=ot.__webglTexture,et=ve(M),it=dt?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,yt=M.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ui)wt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,it,Et,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,yt,it,Et,0);else if(M.depthTexture.format===hi)wt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,it,Et,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,yt,it,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(A){const M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const dt=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),dt){const ot=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,dt.removeEventListener("dispose",ot)};dt.addEventListener("dispose",ot),M.__depthDisposeCallback=ot}M.__boundDepthTexture=dt}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let dt=0;dt<6;dt++)at(M.__webglFramebuffer[dt],A,dt);else A.texture.mipmaps.length>0?at(M.__webglFramebuffer[0],A,0):at(M.__webglFramebuffer,A,0);else if(G){M.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[dt]),M.__webglDepthbuffer[dt]===void 0)M.__webglDepthbuffer[dt]=i.createRenderbuffer(),ct(M.__webglDepthbuffer[dt],A,!1);else{const ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=M.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,_t)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ct(M.__webglDepthbuffer,A,!1);else{const ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,_t)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(A,M,G){const dt=n.get(A);M!==void 0&&V(dt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&It(A)}function te(A){const M=A.texture,G=n.get(A),dt=n.get(M);A.addEventListener("dispose",k),I(A);const ot=A.textures,_t=A.isWebGLCubeRenderTarget===!0,Et=ot.length>1;if(Et||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=M.version,o.memory.textures++),_t){G.__webglFramebuffer=[];for(let et=0;et<6;et++)if(M.mipmaps.length>0){G.__webglFramebuffer[et]=[];for(let it=0;it<M.mipmaps.length;it++)G.__webglFramebuffer[et][it]=i.createFramebuffer()}else G.__webglFramebuffer[et]=i.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let et=0;et<M.mipmaps.length;et++)G.__webglFramebuffer[et]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Et)for(let et=0,it=ot.length;et<it;et++){const yt=n.get(ot[et]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&wt(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let et=0;et<ot.length;et++){const it=ot[et];G.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[et]);const yt=r.convert(it.format,it.colorSpace),L=r.convert(it.type),rt=T(it.internalFormat,yt,L,it.normalized,it.colorSpace,A.isXRRenderTarget===!0),tt=ve(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,rt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,G.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),At(i.TEXTURE_CUBE_MAP,M);for(let et=0;et<6;et++)if(M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)V(G.__webglFramebuffer[et][it],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else V(G.__webglFramebuffer[et],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);w(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(Et){for(let et=0,it=ot.length;et<it;et++){const yt=ot[et],L=n.get(yt);let rt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,L.__webglTexture),At(rt,yt),V(G.__webglFramebuffer,A,yt,i.COLOR_ATTACHMENT0+et,rt,0),w(yt)&&y(rt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(et=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,dt.__webglTexture),At(et,M),M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)V(G.__webglFramebuffer[it],A,M,i.COLOR_ATTACHMENT0,et,it);else V(G.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,et,0);w(M)?y(et):M.mipmaps.length>0&&i.texParameteri(et,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&It(A)}function F(A){const M=A.textures;for(let G=0,dt=M.length;G<dt;G++){const ot=M[G];if(w(ot)&&ot.mipmapsAutoUpdate===!0){const _t=E(A),Et=n.get(ot).__webglTexture;e.bindTexture(_t,Et),y(_t),e.unbindTexture()}}}const be=[];function se(A){if(A.samples>0){if(wt(A)===!1){const M=A.textures,G=A.width,dt=A.height;let ot=i.COLOR_BUFFER_BIT;const _t=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(A),et=M.length>1;if(et)for(let yt=0;yt<M.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let yt=0;yt<M.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);const L=n.get(M[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,G,dt,0,0,G,dt,ot,i.NEAREST),l===!0&&(be.length=0,be.push(i.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&be.push(_t),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let yt=0;yt<M.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);const L=n.get(M[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,L,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ve(A){return Math.min(s.maxSamples,A.samples)}function wt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Yt(A,M){const G=A.colorSpace,dt=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==oo&&G!==ai&&(le.getTransfer(G)===ge?(dt!==Rn||ot!==un)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",G)),M}function Jt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Nt,this.resetTextureUnits=j,this.getTextureUnits=st,this.setTextureUnits=Dt,this.setTexture2D=gt,this.setTexture2DArray=Lt,this.setTexture3D=Gt,this.setTextureCube=Mt,this.rebindTextures=qt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=V,this.useMultisampledRTT=wt,this.dispose=X}function Mv(i,t){function e(n,s=ai){let r;const o=le.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fu)return i.BYTE;if(n===Ou)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Bu)return i.ALPHA;if(n===Gu)return i.RGB;if(n===Rn)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Hu)return i.RED;if(n===Fl)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===Ol)return i.RG_INTEGER;if(n===zl)return i.RGBA_INTEGER;if(n===Yr||n===qr||n===$r||n===Zr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ba||n===Ga||n===Ha||n===Va||n===so||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Ba)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ga)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ha)return r.COMPRESSED_R11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===so)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===Ya||n===qa||n===$a||n===Za||n===Ka||n===Ja||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===ol||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===ro||n===hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`;class bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new rd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pi({vertexShader:yv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wv extends Di{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null;const _=typeof XRWebGLBinding<"u",m=new bv,g={},v=e.getContextAttributes();let w=null,y=null;const E=[],T=[],x=new pt;let b=null,I=null;const C=new mn;C.viewport=new Ee;const N=new mn;N.viewport=new Ee;const k=[C,N],K=new U0;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let gt=E[Q];return gt===void 0&&(gt=new Go,E[Q]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(Q){let gt=E[Q];return gt===void 0&&(gt=new Go,E[Q]=gt),gt.getGripSpace()},this.getHand=function(Q){let gt=E[Q];return gt===void 0&&(gt=new Go,E[Q]=gt),gt.getHandSpace()};function J(Q){const gt=T.indexOf(Q.inputSource);if(gt===-1)return;const Lt=E[gt];Lt!==void 0&&(Lt.update(Q.inputSource,Q.frame,c||o),Lt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<E.length;Q++){const gt=T[Q];gt!==null&&(T[Q]=null,E[Q].disconnect(gt))}D=null,X=null,m.reset();for(const Q in g)delete g[Q];if(t.setRenderTarget(w),u=null,f=null,d=null,s=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),I!==null){const Q=I.camera;Q.fov=I.fov,Q.zoom=I.zoom,Q.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ht),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Gt=null,Mt=null;v.depth&&(Mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=v.stencil?hi:ui,Gt=v.stencil?cs:Pn);const Ut={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Cn(f.textureWidth,f.textureHeight,{format:Rn,type:un,depthTexture:new hs(f.textureWidth,f.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Cn(u.framebufferWidth,u.framebufferHeight,{format:Rn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ht(Q){for(let gt=0;gt<Q.removed.length;gt++){const Lt=Q.removed[gt],Gt=T.indexOf(Lt);Gt>=0&&(T[Gt]=null,E[Gt].disconnect(Lt))}for(let gt=0;gt<Q.added.length;gt++){const Lt=Q.added[gt];let Gt=T.indexOf(Lt);if(Gt===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=T.length){T.push(Lt),Gt=Ut;break}else if(T[Ut]===null){T[Ut]=Lt,Gt=Ut;break}if(Gt===-1)break}const Mt=E[Gt];Mt&&Mt.connect(Lt)}}function Z(Q,gt){gt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(gt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let gt=Q.near,Lt=Q.far;m.texture!==null&&(m.depthNear>0&&(gt=m.depthNear),m.depthFar>0&&(Lt=m.depthFar)),K.near=N.near=C.near=gt,K.far=N.far=C.far=Lt,(D!==K.near||X!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),D=K.near,X=K.far),K.layers.mask=Q.layers.mask|6,C.layers.mask=K.layers.mask&-5,N.layers.mask=K.layers.mask&-3;const Gt=Q.parent,Mt=K.cameras;Z(K,Gt);for(let Ut=0;Ut<Mt.length;Ut++)Z(Mt[Ut],Gt);K.projectionMatrix.copy(C.projectionMatrix),K.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&Q.isPerspectiveCamera&&(I={camera:Q,fov:Q.fov,zoom:Q.zoom}),j(Q,K,Gt)};function j(Q,gt,Lt){Lt===null?Q.matrix.copy(gt.matrixWorld):(Q.matrix.copy(Lt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(gt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(gt.projectionMatrix),Q.projectionMatrixInverse.copy(gt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(Q){return g[Q]};let st=null;function Dt(Q,gt){if(h=gt.getViewerPose(c||o),p=gt,h!==null){const Lt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Gt=!1;Lt.length!==K.cameras.length&&(K.cameras.length=0,Gt=!0);for(let xt=0;xt<Lt.length;xt++){const At=Lt[xt];let Ot=null;if(u!==null)Ot=u.getViewport(At);else{const ut=d.getViewSubImage(f,At);Ot=ut.viewport,xt===0&&(t.setRenderTargetTextures(y,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(y))}let W=k[xt];W===void 0&&(W=new mn,W.layers.enable(xt),W.viewport=new Ee,k[xt]=W),W.matrix.fromArray(At.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(At.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),xt===0&&(K.matrix.copy(W.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Gt===!0&&K.cameras.push(W)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const xt=d.getDepthInformation(Lt[0]);xt&&xt.isValid&&xt.texture&&m.init(xt,s.renderState)}if(Mt&&Mt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let xt=0;xt<Lt.length;xt++){const At=Lt[xt].camera;if(At){let Ot=g[At];Ot||(Ot=new rd,g[At]=Ot);const W=d.getCameraImage(At);Ot.sourceTexture=W}}}}for(let Lt=0;Lt<E.length;Lt++){const Gt=T[Lt],Mt=E[Lt];Gt!==null&&Mt!==void 0&&Mt.update(Gt,gt,c||o)}st&&st(Q,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),p=null}const Nt=new Md;Nt.setAnimationLoop(Dt),this.setAnimationLoop=function(Q){st=Q},this.dispose=function(){}}}const Ev=new xe,Pd=new jt;Pd.set(-1,0,0,0,1,0,0,0,1);function Tv(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,md(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,w,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=t.get(g),w=v.envMap,y=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Av(i,t,e,n){let s={},r={};function o(v,w){const y=w.program;n.uniformBlockBinding(v,y,s[v.id])}function a(v,w){let y=s[v.id];y===void 0&&(p(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",m));const E=w.program;n.updateUBOMapping(v,E);const T=t.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){const w=i.createBuffer(),y=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(v){const w=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,x=y.length;T<x;T++){const b=y[T];if(Array.isArray(b))for(let I=0,C=b.length;I<C;I++)h(b[I],T,I,E);else h(b,T,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,w,y,E){if(f(v,w,y,E)===!0){const T=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let I=0;I<x.length;I++){const C=x[I],N=_(C,!0);d(C,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function d(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function f(v,w,y,E){const T=v.value,x=w+"_"+y;if(Array.isArray(T)){E[x]===void 0&&(E[x]=[]);const b=E[x];let I=!1;for(let C=0;C<T.length;C++)u(T[C],b,C)===!0&&(I=!0);return I}return u(T,E,x)}function u(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{const E=w[y];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function p(v){const w=v.uniforms;let y=0;const E=16;for(let x=0,b=w.length;x<b;x++){const I=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,N=I.length;C<N;C++){const k=I[C],K=Array.isArray(k.value)?k.value:[k.value],D=Array.isArray(w[x])||Array.isArray(k.value);let X=y;for(let Y=0,ht=K.length;Y<ht;Y++){const Z=K[Y],j=_(Z,D),st=y%E,Dt=st%j.boundary,Nt=st+Dt;y+=Dt,Nt!==0&&E-Nt<j.storage&&(y+=E-Nt),Y===0&&(X=y),y+=j.storage}const J=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new J((y-X)/Float32Array.BYTES_PER_ELEMENT),k.__offset=X}}const T=y%E;return T>0&&(y+=E-T),v.__size=y,v.__cache={},this}function _(v,w){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){const w=v.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(const v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}const Rv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function Cv(){return bn===null&&(bn=new Vp(Rv,16,16,Ti,Ln),bn.name="DFG_LUT",bn.minFilter=on,bn.magFilter=on,bn.wrapS=Vn,bn.wrapT=Vn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class Pv{constructor(t={}){const{canvas:e=sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=un}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=u,m=new Set([zl,Ol,Fl]),g=new Set([un,Pn,Xs,cs,Nl,Ul]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let E=null,T=null;const x=[],b=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,k=null,K=null,D=null,X=null;this._outputColorSpace=Oe;let J=0,Y=0,ht=null,Z=-1,j=null;const st=new Ee,Dt=new Ee;let Nt=null;const Q=new Zt(0);let gt=0,Lt=e.width,Gt=e.height,Mt=1,Ut=null,lt=null;const xt=new Ee(0,0,Lt,Gt),At=new Ee(0,0,Lt,Gt);let Ot=!1;const W=new $s,ut=new Wl;let z=!1,q=!1;const V=new xe,ct=new P,at=new Ee,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function te(){return ht===null?Mt:1}let F=n;function be(S,U){return e.getContext(S,U)}let se,ve,wt,Re,Yt,Jt,A,M,G,dt,ot,_t,Et,et,it,yt,L,rt,tt,St,mt,vt,Ht;try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ll}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),F===null){const U="webgl2";if(F=be(U,S),F===null)throw be(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(S){throw e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),ce("WebGLRenderer: "+S.message),S}function ne(){se=new Ix(F),se.init(),mt=new Mv(F,se),ve=new Sx(F,se,t,mt),wt=new _v(F,se),ve.reversedDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),K=F.createFramebuffer(),D=F.createFramebuffer(),X=F.createFramebuffer(),Re=new Fx(F),Yt=new sv,Jt=new vv(F,se,wt,Yt,ve,mt,Re),A=new Dx(C),M=new z0(F),vt=new Mx(F,M),G=new Nx(F,M,Re,vt),dt=new zx(F,G,M,vt,Re),rt=new Ox(F,ve,Jt),it=new bx(Yt),ot=new iv(C,A,se,ve,vt,it),_t=new Tv(C,Yt),Et=new ov,et=new dv(se),L=new vx(C,A,wt,dt,p,l),yt=new xv(C,dt,ve),Ht=new Av(F,Re,ve,wt),tt=new yx(F,se,Re),St=new Ux(F,se,Re),Re.programs=ot.programs,C.capabilities=ve,C.extensions=se,C.properties=Yt,C.renderLists=Et,C.shadowMap=yt,C.state=wt,C.info=Re}_!==un&&(I=new Bx(_,e.width,e.height,a,s,r));const ft=new wv(C,F);this.xr=ft,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(S){S!==void 0&&(Mt=S,this.setSize(Lt,Gt,!1))},this.getSize=function(S){return S.set(Lt,Gt)},this.setSize=function(S,U,$=!0){if(ft.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=S,Gt=U,e.width=Math.floor(S*Mt),e.height=Math.floor(U*Mt),$===!0&&(e.style.width=S+"px",e.style.height=U+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Lt*Mt,Gt*Mt).floor()},this.setDrawingBufferSize=function(S,U,$){Lt=S,Gt=U,Mt=$,e.width=Math.floor(S*$),e.height=Math.floor(U*$),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(_===un){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(st)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,U,$,B){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,U,$,B),wt.viewport(st.copy(xt).multiplyScalar(te()).round())},this.getScissor=function(S){return S.copy(At)},this.setScissor=function(S,U,$,B){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,U,$,B),wt.scissor(Dt.copy(At).multiplyScalar(te()).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(S){wt.setScissorTest(Ot=S)},this.setOpaqueSort=function(S){Ut=S},this.setTransparentSort=function(S){lt=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,$=!0){let B=0;if(S){let H=!1;if(ht!==null){const Tt=ht.texture.format;H=m.has(Tt)}if(H){const Tt=ht.texture.type,Ft=g.has(Tt),bt=L.getClearColor(),Pt=L.getClearAlpha(),Bt=bt.r,Qt=bt.g,oe=bt.b;Ft?(v[0]=Bt,v[1]=Qt,v[2]=oe,v[3]=Pt,F.clearBufferuiv(F.COLOR,0,v)):(w[0]=Bt,w[1]=Qt,w[2]=oe,w[3]=Pt,F.clearBufferiv(F.COLOR,0,w))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),L.dispose(),Et.dispose(),et.dispose(),Jt.dispose(),Yt.dispose(),A.dispose(),dt.dispose(),G.dispose(),vt.dispose(),Ht.dispose(),ot.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",yc),ft.removeEventListener("sessionend",Sc),pi.stop()};function Xt(S){S.preventDefault(),co("WebGLRenderer: Context Lost."),N=!0}function ee(){co("WebGLRenderer: Context Restored."),N=!1;const S=Re.autoReset,U=yt.enabled,$=yt.autoUpdate,B=yt.needsUpdate,H=yt.type;ne(),Re.autoReset=S,yt.enabled=U,yt.autoUpdate=$,yt.needsUpdate=B,yt.type=H}function Rt(S){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function me(S){const U=S.target;U.removeEventListener("dispose",me),Be(U)}function Be(S){ti(S),Yt.remove(S)}function ti(S){const U=Yt.get(S).programs;U!==void 0&&(U.forEach(function($){ot.releaseProgram($)}),S.isShaderMaterial&&ot.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,$,B,H,Tt){U===null&&(U=It);const Ft=H.isMesh&&H.matrixWorld.determinantAffine()<0,bt=yf(S,U,$,B,H);wt.setMaterial(B,Ft);let Pt=$.index,Bt=1;if(B.wireframe===!0){if(Pt=G.getWireframeAttribute($),Pt===void 0)return;Bt=2}const Qt=$.drawRange,oe=$.attributes.position;let zt=Qt.start*Bt,ae=(Qt.start+Qt.count)*Bt;Tt!==null&&(zt=Math.max(zt,Tt.start*Bt),ae=Math.min(ae,(Tt.start+Tt.count)*Bt)),Pt!==null?(zt=Math.max(zt,0),ae=Math.min(ae,Pt.count)):oe!=null&&(zt=Math.max(zt,0),ae=Math.min(ae,oe.count));const Ie=ae-zt;if(Ie<0||Ie===1/0)return;vt.setup(H,B,bt,$,Pt);let ye,Me=tt;if(Pt!==null&&(ye=M.get(Pt),Me=St,Me.setIndex(ye)),H.isMesh)B.wireframe===!0?(wt.setLineWidth(B.wireframeLinewidth*te()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(H.isLine){let qe=B.linewidth;qe===void 0&&(qe=1),wt.setLineWidth(qe*te()),H.isLineSegments?Me.setMode(F.LINES):H.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else H.isPoints?Me.setMode(F.POINTS):H.isSprite&&Me.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Me.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const qe=H._multiDrawStarts,kt=H._multiDrawCounts,tn=H._multiDrawCount,pe=Pt?M.get(Pt).bytesPerElement:1,mi=Yt.get(B).currentProgram.getUniforms();for(let $e=0;$e<tn;$e++)mi.setValue(F,"_gl_DrawID",$e),Me.render(qe[$e]/pe,kt[$e])}else if(H.isInstancedMesh)Me.renderInstances(zt,Ie,H.count);else if($.isInstancedBufferGeometry){const qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,kt=Math.min($.instanceCount,qe);Me.renderInstances(zt,Ie,kt)}else Me.render(zt,Ie)};function Mc(S,U,$,B){k!==null&&S.isNodeMaterial&&k.setObject(B,S),z===!0&&it.setState(S,$,!1),S.transparent===!0&&S.side===hn&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,vs(S,U,B),S.side=Ei,S.needsUpdate=!0,vs(S,U,B),S.side=hn):vs(S,U,B)}this.compile=function(S,U,$=null){$===null&&($=S),k!==null&&k.renderStart(S,U,$),T=et.get($),T.init(U),b.push(T),$.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==$&&S.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),q=this.localClippingEnabled,z=it.init(this.clippingPlanes,q),z===!0&&it.setGlobalState(this.clippingPlanes,U),k!==null&&yt.render(T.state.shadowsArray,$,U);const B=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Tt=H.material;if(Tt)if(Array.isArray(Tt))for(let Ft=0;Ft<Tt.length;Ft++){const bt=Tt[Ft];Mc(bt,$,U,H),B.add(bt)}else Mc(Tt,$,U,H),B.add(Tt)}),T=b.pop(),k!==null&&k.renderEnd(),B},this.compileAsync=function(S,U,$=null){const B=this.compile(S,U,$);return new Promise(H=>{function Tt(){if(B.forEach(function(Ft){const Pt=Yt.get(Ft).currentProgram;(Pt===void 0||Pt.isReady())&&B.delete(Ft)}),B.size===0){H(S);return}setTimeout(Tt,10)}se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Po=null;function vf(S){Po&&Po(S)}function yc(){pi.stop()}function Sc(){pi.start()}const pi=new Md;pi.setAnimationLoop(vf),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(S){Po=S,ft.setAnimationLoop(S),S===null?pi.stop():pi.start()},ft.addEventListener("sessionstart",yc),ft.addEventListener("sessionend",Sc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(S,U);const $=ft.enabled===!0&&ft.isPresenting===!0,B=I!==null&&(ht===null||$)&&I.begin(C,ht);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(U),U=ft.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,U,ht),T=et.get(S,b.length),T.init(U),T.state.textureUnits=Jt.getTextureUnits(),b.push(T),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ut.setFromArrayCamera(U):W.setFromProjectionMatrix(V,yn,U.reversedDepth),q=this.localClippingEnabled,z=it.init(this.clippingPlanes,q),E=Et.get(S,x.length),E.init(),x.push(E),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){const Ft=C.xr.getDepthSensingMesh();Ft!==null&&Lo(Ft,U,-1/0,C.sortObjects)}Lo(S,U,0,C.sortObjects),E.finish(),k!==null&&k.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(Ut,lt),qt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,qt&&L.addToRenderList(E,S),this.info.autoReset===!0&&this.info.reset(),z===!0&&it.beginShadows();const H=T.state.shadowsArray;if(yt.render(H,S,U),z===!0&&it.endShadows(),(B&&I.hasRenderPass())===!1){const Ft=E.opaque,bt=E.transmissive;if(T.setupLights(),U.isArrayCamera){const Pt=U.cameras;if(bt.length>0)for(let Bt=0,Qt=Pt.length;Bt<Qt;Bt++){const oe=Pt[Bt];wc(Ft,bt,S,oe)}qt&&L.render(S);for(let Bt=0,Qt=Pt.length;Bt<Qt;Bt++){const oe=Pt[Bt];bc(E,S,oe,oe.viewport)}}else bt.length>0&&wc(Ft,bt,S,U),qt&&L.render(S),bc(E,S,U)}ht!==null&&Y===0&&(Jt.updateMultisampleRenderTarget(ht),Jt.updateRenderTargetMipmap(ht)),B&&I.end(C),S.isScene===!0&&S.onAfterRender(C,S,U),vt.resetDefaultState(),Z=-1,j=null,b.pop(),b.length>0?(T=b[b.length-1],Jt.setTextureUnits(T.state.textureUnits),z===!0&&it.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,k!==null&&k.renderEnd()};function Lo(S,U,$,B){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){const Ft=U.isArrayCamera?ut:W;if(!S.frustumCulled||S.intersectsFrustum(Ft)){B&&at.setFromMatrixPosition(S.matrixWorld).applyMatrix4(V);const bt=dt.update(S),Pt=S.material;Pt.visible&&E.push(S,bt,Pt,$,at.z,null,U)}}else if(S.isMesh||S.isLine||S.isPoints){const Ft=U.isArrayCamera?ut:W;if(!S.frustumCulled||S.intersectsFrustum(Ft)){const bt=dt.update(S),Pt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),at.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),at.copy(bt.boundingSphere.center)),at.applyMatrix4(S.matrixWorld).applyMatrix4(V)),Array.isArray(Pt)){const Bt=bt.groups;for(let Qt=0,oe=Bt.length;Qt<oe;Qt++){const zt=Bt[Qt],ae=Pt[zt.materialIndex];ae&&ae.visible&&E.push(S,bt,ae,$,at.z,zt,U)}}else Pt.visible&&E.push(S,bt,Pt,$,at.z,null,U)}}}const Tt=S.children;for(let Ft=0,bt=Tt.length;Ft<bt;Ft++)Lo(Tt[Ft],U,$,B)}function bc(S,U,$,B){const{opaque:H,transmissive:Tt,transparent:Ft}=S;T.setupLightsView($),z===!0&&it.setGlobalState(C.clippingPlanes,$),B&&wt.viewport(st.copy(B)),H.length>0&&ir(H,U,$),Tt.length>0&&ir(Tt,U,$),Ft.length>0&&ir(Ft,U,$),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function wc(S,U,$,B){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const zt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new Cn(1,1,{generateMipmaps:!0,type:zt?Ln:un,minFilter:ci,samples:Math.max(4,ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}const Tt=T.state.transmissionRenderTarget[B.id],Ft=B.viewport||st;Tt.setSize(Ft.z*C.transmissionResolutionScale,Ft.w*C.transmissionResolutionScale);const bt=C.getRenderTarget(),Pt=C.getActiveCubeFace(),Bt=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(Q),gt=C.getClearAlpha(),gt<1&&C.setClearColor(16777215,.5),C.clear(),qt&&L.render($);const Qt=C.toneMapping;C.toneMapping=Xn;const oe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),z===!0&&it.setGlobalState(C.clippingPlanes,B),ir(S,$,B),Jt.updateMultisampleRenderTarget(Tt),Jt.updateRenderTargetMipmap(Tt),se.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ae=0,Ie=U.length;ae<Ie;ae++){const ye=U[ae],{object:Me,geometry:qe,material:kt,group:tn}=ye;if(kt.side===hn&&Me.layers.test(B.layers)){const pe=kt.side;kt.side=rn,kt.needsUpdate=!0,Ec(Me,$,B,qe,kt,tn),kt.side=pe,kt.needsUpdate=!0,zt=!0}}zt===!0&&(Jt.updateMultisampleRenderTarget(Tt),Jt.updateRenderTargetMipmap(Tt))}C.setRenderTarget(bt,Pt,Bt),C.setClearColor(Q,gt),oe!==void 0&&(B.viewport=oe),C.toneMapping=Qt}function ir(S,U,$){const B=U.isScene===!0?U.overrideMaterial:null;for(let H=0,Tt=S.length;H<Tt;H++){const Ft=S[H],{object:bt,geometry:Pt,group:Bt}=Ft;let Qt=Ft.material;Qt.allowOverride===!0&&B!==null&&(Qt=B),bt.layers.test($.layers)&&Ec(bt,U,$,Pt,Qt,Bt)}}function Ec(S,U,$,B,H,Tt){k!==null&&H.isNodeMaterial&&k.setObject(S,H),S.onBeforeRender(C,U,$,B,H,Tt),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(C,U,$,B,S,Tt),H.transparent===!0&&H.side===hn&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,C.renderBufferDirect($,U,B,H,S,Tt),H.side=Ei,H.needsUpdate=!0,C.renderBufferDirect($,U,B,H,S,Tt),H.side=hn):C.renderBufferDirect($,U,B,H,S,Tt),S.onAfterRender(C,U,$,B,H,Tt)}function Tc(S){let U=0;for(const $ of S)$.texture!==null&&U++;return U}function vs(S,U,$){U.isScene!==!0&&(U=It);const B=Yt.get(S),H=T.state.lights,Tt=T.state.shadowsArray,Ft=H.state.version,bt=ot.getParameters(S,H.state,Tt,U,$,T.state.lightProbeGridArray),Pt=ot.getProgramCacheKey(bt);let Bt=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const Qt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=A.get(S.envMap||B.environment,Qt),B.envMapRotation=B.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",me),Bt=new Map,B.programs=Bt,B.programVariants=new Map);let oe=Bt.get(Pt);if(oe!==void 0){if(B.currentProgram===oe&&B.lightsStateVersion===Ft)return Rc(S,bt),oe}else bt.uniforms=ot.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,$,bt),S.onBeforeCompile(bt,C),oe=ot.acquireProgram(bt,Pt),Bt.set(Pt,oe),B.uniforms=bt.uniforms;const zt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(zt.clippingPlanes=it.uniform),Rc(S,bt),B.needsLights=bf(S),B.lightsStateVersion=Ft,B.needsLights&&(zt.ambientLightColor.value=H.state.ambient,zt.lightProbe.value=H.state.probe,zt.sunLights.value=H.state.sun,zt.sunLightShadows.value=H.state.sunShadow,zt.directionalLights.value=H.state.directional,zt.directionalLightShadows.value=H.state.directionalShadow,zt.spotLights.value=H.state.spot,zt.spotLightShadows.value=H.state.spotShadow,zt.rectAreaLights.value=H.state.rectArea,zt.ltc_1.value=H.state.rectAreaLTC1,zt.ltc_2.value=H.state.rectAreaLTC2,zt.pointLights.value=H.state.point,zt.pointLightShadows.value=H.state.pointShadow,zt.hemisphereLights.value=H.state.hemi,zt.sunShadowMatrix.value=H.state.sunShadowMatrix,zt.sunShadowCascade.value=H.state.sunShadowCascade,zt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,zt.spotLightMatrix.value=H.state.spotLightMatrix,zt.spotLightMap.value=H.state.spotLightMap,zt.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=Tc(T.state.lightProbeGridArray),B.currentProgram=oe,B.uniformsList=null,oe}function Mf(S,U,$,B,H){const Tt=Yt.get(S),Ft=Tt.currentProgram.id+","+B+","+H;let bt=Tt.programVariants.get(Ft);return bt===void 0?(bt=vs(S,U,$),Tt.programVariants.set(Ft,bt)):(Tt.currentProgram=bt,Tt.uniformsList=null,Tt.outputColorSpace=B,Tt.toneMapping=H),bt}function Ac(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=jr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Rc(S,U){const $=Yt.get(S);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function yf(S,U,$,B,H){U.isScene!==!0&&(U=It),Jt.resetTextureUnits();const Tt=U.fog,Ft=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,bt=ht===null?C.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:le.workingColorSpace,Pt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Bt=A.get(B.envMap||Ft,Pt),Qt=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,oe=!!$.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),zt=!!$.morphAttributes.position,ae=!!$.morphAttributes.normal,Ie=!!$.morphAttributes.color;let ye=Xn;B.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ye=C.toneMapping);const Me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,qe=Me!==void 0?Me.length:0,kt=Yt.get(B),tn=T.state.lights;if(z===!0&&(q===!0||S!==j)){const we=S===j&&B.id===Z;it.setState(B,S,we)}let pe=!1,mi=!1;B.version===kt.__version?kt.needsLights&&kt.lightsStateVersion!==tn.state.version||H.isBatchedMesh&&kt.batching===!1||!H.isBatchedMesh&&kt.batching===!0||H.isBatchedMesh&&kt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&kt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&kt.instancing===!1||!H.isInstancedMesh&&kt.instancing===!0||H.isSkinnedMesh&&kt.skinning===!1||!H.isSkinnedMesh&&kt.skinning===!0||H.isInstancedMesh&&kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&kt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&kt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&kt.instancingMorph===!1&&H.morphTexture!==null||kt.envMap!==Bt||B.fog===!0&&kt.fog!==Tt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==it.numPlanes||kt.numIntersection!==it.numIntersection)||kt.vertexAlphas!==Qt||kt.vertexTangents!==oe||kt.morphTargets!==zt||kt.morphNormals!==ae||kt.morphColors!==Ie||kt.morphTargetsCount!==qe||kt.numLightProbeGrids!==Tc(T.state.lightProbeGridArray)?pe=!0:(kt.outputColorSpace!==bt||kt.toneMapping!==ye)&&(mi=!0):(pe=!0,kt.__version=B.version);let $e=kt.currentProgram;(pe===!0||mi===!0)&&($e=mi===!0?Mf(B,U,H,bt,ye):vs(B,U,H),k&&B.isNodeMaterial&&k.onUpdateProgram(B,$e,kt));let sr=!1,ei=!1,gi=!1;const he=$e.getUniforms(),We=kt.uniforms;if(wt.useProgram($e.program)&&(sr=!0,ei=!0,gi=!0),B.id!==Z&&(Z=B.id,ei=!0),sr||j!==S){wt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),he.setValue(F,"projectionMatrix",S.projectionMatrix),he.setValue(F,"viewMatrix",S.matrixWorldInverse);const Ge=he.map.cameraPosition;Ge!==void 0&&Ge.setValue(F,ct.setFromMatrixPosition(S.matrixWorld)),ve.logarithmicDepthBuffer&&he.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&he.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,ei=!0,gi=!0)}if(kt.needsLights&&(tn.state.sunShadowMap.length>0&&he.setValue(F,"sunShadowMap",tn.state.sunShadowMap,Jt),tn.state.directionalShadowMap.length>0&&he.setValue(F,"directionalShadowMap",tn.state.directionalShadowMap,Jt),tn.state.spotShadowMap.length>0&&he.setValue(F,"spotShadowMap",tn.state.spotShadowMap,Jt),tn.state.pointShadowMap.length>0&&he.setValue(F,"pointShadowMap",tn.state.pointShadowMap,Jt)),H.isSkinnedMesh){he.setOptional(F,H,"bindMatrix"),he.setOptional(F,H,"bindMatrixInverse");const we=H.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),he.setValue(F,"boneTexture",we.boneTexture,Jt))}H.isBatchedMesh&&(he.setOptional(F,H,"batchingTexture"),he.setValue(F,"batchingTexture",H._matricesTexture,Jt),he.setOptional(F,H,"batchingIdTexture"),he.setValue(F,"batchingIdTexture",H._indirectTexture,Jt),he.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&he.setValue(F,"batchingColorTexture",H._colorsTexture,Jt));const xn=$.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&rt.update(H,$,$e),(ei||kt.receiveShadow!==H.receiveShadow)&&(kt.receiveShadow=H.receiveShadow,he.setValue(F,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(We.envMapIntensity.value=U.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=Cv()),ei){if(he.setValue(F,"toneMappingExposure",C.toneMappingExposure),kt.needsLights&&Sf(We,gi),Tt&&B.fog===!0&&_t.refreshFogUniforms(We,Tt),_t.refreshMaterialUniforms(We,B,Mt,Gt,T.state.transmissionRenderTarget[S.id]),kt.needsLights&&kt.numLightProbeGrids>0){const we=y;let Ge=0;for(const Nn of T.state.lightProbeGridArray)Nn.texture!==null&&(we.textures[Ge]=Nn.texture,we.min[Ge]=Nn.boundingBox.min,we.max[Ge]=Nn.boundingBox.max,we.resolution[Ge]=Nn.resolution,Ge++);for(const Nn in we)we[Nn].length=Ge;We.probesSH.value=we.textures,We.probesMin.value=we.min,We.probesMax.value=we.max,We.probesResolution.value=we.resolution}jr.upload(F,Ac(kt),We,Jt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(jr.upload(F,Ac(kt),We,Jt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&he.setValue(F,"center",H.center),he.setValue(F,"modelViewMatrix",H.modelViewMatrix),he.setValue(F,"normalMatrix",H.normalMatrix),he.setValue(F,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const we=B.uniformsGroups;for(let Ge=0,Nn=we.length;Ge<Nn;Ge++){const Pc=we[Ge];Ht.update(Pc,$e),Ht.bind(Pc,$e)}}return $e}function Sf(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function bf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(S,U,$){const B=Yt.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Yt.get(S.texture).__webglTexture=U,Yt.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:$,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const $=Yt.get(S);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,$=0){ht=S,J=U,Y=$;let B=null,H=!1,Tt=!1;if(S){const bt=Yt.get(S);if(bt.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(F.FRAMEBUFFER,bt.__webglFramebuffer),st.copy(S.viewport),Dt.copy(S.scissor),Nt=S.scissorTest,wt.viewport(st),wt.scissor(Dt),wt.setScissorTest(Nt),Z=-1;return}else if(bt.__webglFramebuffer===void 0)Jt.setupRenderTarget(S);else if(bt.__hasExternalTextures)Jt.rebindTextures(S,Yt.get(S.texture).__webglTexture,Yt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Qt=S.depthTexture;if(bt.__boundDepthTexture!==Qt){if(Qt!==null&&Yt.has(Qt)&&(S.width!==Qt.image.width||S.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Jt.setupDepthRenderbuffer(S)}}const Pt=S.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Tt=!0);const Bt=Yt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?B=Bt[U][$]:B=Bt[U],H=!0):S.samples>0&&Jt.useMultisampledRTT(S)===!1?B=Yt.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?B=Bt[$]:B=Bt,st.copy(S.viewport),Dt.copy(S.scissor),Nt=S.scissorTest}else st.copy(xt).multiplyScalar(Mt).floor(),Dt.copy(At).multiplyScalar(Mt).floor(),Nt=Ot;if($!==0&&(B=K),wt.bindFramebuffer(F.FRAMEBUFFER,B)&&wt.drawBuffers(S,B),wt.viewport(st),wt.scissor(Dt),wt.setScissorTest(Nt),H){const bt=Yt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,$)}else if(Tt){const bt=U;for(let Pt=0;Pt<S.textures.length;Pt++){const Bt=Yt.get(S.textures[Pt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pt,Bt.__webglTexture,$,bt)}}else if(S!==null&&$!==0){const bt=Yt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bt.__webglTexture,$)}Z=-1};function Cc(S){const U=Yt.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=ve.textureFormatReadable(S.format),U.__typeReadable=ve.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,$,B,H,Tt,Ft,bt=0){if(!(S&&S.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ft!==void 0&&(Pt=Pt[Ft],Array.isArray(Pt)&&(Pt=Pt[0])),Pt){wt.bindFramebuffer(F.FRAMEBUFFER,Pt);try{const Bt=S.textures[bt],Qt=Bt.format,oe=Bt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+bt);const zt=Cc(Bt);if(zt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-B&&$>=0&&$<=S.height-H&&F.readPixels(U,$,B,H,mt.convert(Qt),mt.convert(oe),Tt)}finally{const Bt=ht!==null?Yt.get(ht).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(S,U,$,B,H,Tt,Ft,bt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ft!==void 0&&(Pt=Pt[Ft],Array.isArray(Pt)&&(Pt=Pt[0])),Pt)if(U>=0&&U<=S.width-B&&$>=0&&$<=S.height-H){wt.bindFramebuffer(F.FRAMEBUFFER,Pt);const Bt=S.textures[bt],Qt=Bt.format,oe=Bt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+bt);const zt=Cc(Bt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ae),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(U,$,B,H,mt.convert(Qt),mt.convert(oe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Ie=ht!==null?Yt.get(ht).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,Ie);const ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await rp(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ae),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ae),F.deleteSync(ye),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,$=0){const B=Math.pow(2,-$),H=Math.floor(S.image.width*B),Tt=Math.floor(S.image.height*B),Ft=U!==null?U.x:0,bt=U!==null?U.y:0;Jt.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Ft,bt,H,Tt),wt.unbindTexture()},this.copyTextureToTexture=function(S,U,$=null,B=null,H=0,Tt=0){let Ft,bt,Pt,Bt,Qt,oe,zt,ae,Ie;const ye=S.isCompressedTexture?S.mipmaps[Tt]:S.image;if($!==null)Ft=$.max.x-$.min.x,bt=$.max.y-$.min.y,Pt=$.isBox3?$.max.z-$.min.z:1,Bt=$.min.x,Qt=$.min.y,oe=$.isBox3?$.min.z:0;else{const he=Math.pow(2,-H);Ft=Math.floor(ye.width*he),bt=Math.floor(ye.height*he),S.isDataArrayTexture?Pt=ye.depth:S.isData3DTexture?Pt=Math.floor(ye.depth*he):Pt=1,Bt=0,Qt=0,oe=0}B!==null?(zt=B.x,ae=B.y,Ie=B.z):(zt=0,ae=0,Ie=0);const Me=mt.convert(U.format),qe=mt.convert(U.type);let kt;U.isData3DTexture?(Jt.setTexture3D(U,0),kt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Jt.setTexture2DArray(U,0),kt=F.TEXTURE_2D_ARRAY):(Jt.setTexture2D(U,0),kt=F.TEXTURE_2D),wt.activeTexture(F.TEXTURE0),wt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),wt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),wt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const tn=wt.getParameter(F.UNPACK_ROW_LENGTH),pe=wt.getParameter(F.UNPACK_IMAGE_HEIGHT),mi=wt.getParameter(F.UNPACK_SKIP_PIXELS),$e=wt.getParameter(F.UNPACK_SKIP_ROWS),sr=wt.getParameter(F.UNPACK_SKIP_IMAGES);wt.pixelStorei(F.UNPACK_ROW_LENGTH,ye.width),wt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye.height),wt.pixelStorei(F.UNPACK_SKIP_PIXELS,Bt),wt.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),wt.pixelStorei(F.UNPACK_SKIP_IMAGES,oe);const ei=S.isDataArrayTexture||S.isData3DTexture,gi=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const he=Yt.get(S),We=Yt.get(U),xn=Yt.get(he.__renderTarget),we=Yt.get(We.__renderTarget);wt.bindFramebuffer(F.READ_FRAMEBUFFER,xn.__webglFramebuffer),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ge=0;Ge<Pt;Ge++)ei&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(S).__webglTexture,H,oe+Ge),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(U).__webglTexture,Tt,Ie+Ge)),F.blitFramebuffer(Bt,Qt,Bt+Ft,Qt+bt,zt,ae,zt+Ft,ae+bt,F.DEPTH_BUFFER_BIT,F.NEAREST);wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||Yt.has(S)){const he=Yt.get(S),We=Yt.get(U);wt.bindFramebuffer(F.READ_FRAMEBUFFER,D),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,X);for(let xn=0;xn<Pt;xn++)ei?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,he.__webglTexture,H,oe+xn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,he.__webglTexture,H),gi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,We.__webglTexture,Tt,Ie+xn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,Tt),H!==0?F.blitFramebuffer(Bt,Qt,Bt+Ft,Qt+bt,zt,ae,zt+Ft,ae+bt,F.COLOR_BUFFER_BIT,F.NEAREST):gi?F.copyTexSubImage3D(kt,Tt,zt,ae,Ie+xn,Bt,Qt,Ft,bt):F.copyTexSubImage2D(kt,Tt,zt,ae,Bt,Qt,Ft,bt);wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gi?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(kt,Tt,zt,ae,Ie,Ft,bt,Pt,Me,qe,ye.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(kt,Tt,zt,ae,Ie,Ft,bt,Pt,Me,ye.data):F.texSubImage3D(kt,Tt,zt,ae,Ie,Ft,bt,Pt,Me,qe,ye):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,zt,ae,Ft,bt,Me,qe,ye.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,zt,ae,ye.width,ye.height,Me,ye.data):F.texSubImage2D(F.TEXTURE_2D,Tt,zt,ae,Ft,bt,Me,qe,ye);wt.pixelStorei(F.UNPACK_ROW_LENGTH,tn),wt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe),wt.pixelStorei(F.UNPACK_SKIP_PIXELS,mi),wt.pixelStorei(F.UNPACK_SKIP_ROWS,$e),wt.pixelStorei(F.UNPACK_SKIP_IMAGES,sr),Tt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(kt),wt.unbindTexture()},this.initRenderTarget=function(S){Yt.get(S).__webglFramebuffer===void 0&&Jt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Jt.setTextureCube(S,0):S.isData3DTexture?Jt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Jt.setTexture2DArray(S,0):Jt.setTexture2D(S,0),wt.unbindTexture()},this.resetState=function(){J=0,Y=0,ht=null,wt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const Ce=[{index:0,par:4,name:"퍼스트 드라이브",hint:"드라이버로 멀리 보낸 뒤 그린 왼쪽을 노려보세요",tee:[0,32],cup:[1.5,-30],path:[[0,32],[0,24],[-1.5,12],[0,0],[1.5,-12],[1.5,-30]],fairwayWidth:6.4,roughWidth:14,green:{x:1.5,z:-30,r:7},zones:[{kind:"bunker",x:8.6,z:-26.5,rx:3.4,rz:2.9}],decor:[{kind:"pine",x:-13.4,z:26,s:1.35,r:.55},{kind:"tree",x:13.2,z:22,s:1.25,r:.6},{kind:"pine",x:-14.6,z:12,s:1.15,r:.5},{kind:"tree",x:15.4,z:8,s:1.1,r:.55},{kind:"pine",x:-13.8,z:-1,s:1.3,r:.5},{kind:"tree",x:14.2,z:-8,s:1.2,r:.55},{kind:"pine",x:13.6,z:-18,s:1.05,r:.45},{kind:"tree",x:-13.2,z:-20,s:1.15,r:.5},{kind:"rock",x:-10.6,z:4,s:1.1,r:.6},{kind:"rock",x:11.4,z:-2.4,s:.8,r:.5},{kind:"bush",x:9.4,z:14,s:1,r:.4},{kind:"bush",x:-9.8,z:-14,s:.9,r:.4},{kind:"pine",x:0,z:-40,s:1.4,r:.5},{kind:"tree",x:-8,z:-38,s:1.2,r:.5},{kind:"tree",x:10,z:-37,s:1.15,r:.5}]},{index:1,par:4,name:"도그레그 벙커",hint:"오른쪽으로 휘어지는 코스 · 그린 앞 벙커를 피하세요",tee:[0,34],cup:[0,-30],path:[[0,34],[0,22],[3,9],[7,-5],[4,-19],[0,-30]],fairwayWidth:6.2,roughWidth:14,green:{x:0,z:-30,r:7.2},zones:[{kind:"water",x:-12.5,z:-3,rx:6.4,rz:7.4},{kind:"bunker",x:-7.4,z:-26,rx:3.3,rz:2.7},{kind:"bunker",x:7.6,z:-25,rx:2.6,rz:2.2}],decor:[{kind:"tree",x:-14.4,z:28,s:1.3,r:.55},{kind:"pine",x:13.6,z:30,s:1.2,r:.5},{kind:"pine",x:-13.2,z:14,s:1.05,r:.45},{kind:"tree",x:15.8,z:16,s:1.15,r:.55},{kind:"tree",x:16.4,z:1,s:1.25,r:.6},{kind:"pine",x:-6.4,z:-14,s:1.1,r:.45},{kind:"tree",x:13.6,z:-13,s:1.1,r:.5},{kind:"pine",x:14.4,z:-30,s:1.2,r:.5},{kind:"tree",x:-13.6,z:-34,s:1.25,r:.55},{kind:"rock",x:-8.4,z:6.4,s:1,r:.6},{kind:"rock",x:12.4,z:-4.6,s:.85,r:.5},{kind:"bush",x:9.6,z:22,s:1.05,r:.4},{kind:"bush",x:-10.4,z:-20,s:.95,r:.4},{kind:"tree",x:-2,z:-40,s:1.3,r:.5}]},{index:2,par:3,name:"워터 아일랜드",hint:"그린 앞 연못을 넘겨야 합니다 · 카트 길까지 거리 재기",tee:[0,22],cup:[.5,-24],path:[[0,22],[0,13],[0,3],[0,-7],[.5,-16],[.5,-24]],fairwayWidth:6,roughWidth:15,green:{x:.5,z:-24,r:7.2},zones:[{kind:"water",x:0,z:-5.5,rx:12,rz:6.2},{kind:"bunker",x:-7.8,z:-28.5,rx:3.1,rz:2.4}],decor:[{kind:"pine",x:-15.6,z:18,s:1.3,r:.55},{kind:"tree",x:15.2,z:16,s:1.2,r:.6},{kind:"pine",x:-16.4,z:4,s:1.1,r:.5},{kind:"tree",x:16.6,z:2,s:1.15,r:.55},{kind:"pine",x:-15.2,z:-12,s:1.05,r:.45},{kind:"tree",x:15.8,z:-14,s:1.1,r:.5},{kind:"pine",x:-12.6,z:-30,s:1.2,r:.5},{kind:"tree",x:12.4,z:-31,s:1.25,r:.55},{kind:"rock",x:10.4,z:-3.4,s:1.1,r:.7},{kind:"rock",x:-10.8,z:-6.2,s:.9,r:.6},{kind:"bush",x:8.6,z:12,s:1,r:.4},{kind:"bush",x:-8.4,z:8,s:.95,r:.4},{kind:"pine",x:4.4,z:-40,s:1.35,r:.5},{kind:"tree",x:-6.4,z:-38,s:1.2,r:.5}]}],Bh=new Map;function Lv(i,t){if(typeof document>"u")return null;const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");return n?{canvas:e,ctx:n}:null}function jl(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function xs(i,t,e,n,s=1,r=1){if(typeof document>"u")return null;let o=Bh.get(i);if(!o){const l=Lv(t,e);if(!l)return null;n(l.ctx,t,e),o=l.canvas,Bh.set(i,o)}const a=new ms(o);return a.colorSpace=Oe,a.wrapS=Ws,a.wrapT=Ws,a.repeat.set(s,r),a.anisotropy=8,a.needsUpdate=!0,a}function Ld(i=.15){return xs("water",512,512,(t,e,n)=>{const s=jl(9923),r=t.createLinearGradient(0,0,e,n);r.addColorStop(0,"#2f9fd6"),r.addColorStop(.5,"#3cb2e6"),r.addColorStop(1,"#2b8fc4"),t.fillStyle=r,t.fillRect(0,0,e,n);for(let o=0;o<240;o+=1){const a=s()*e,l=s()*n,c=8+s()*46;t.strokeStyle=`rgba(255,255,255,${.04+s()*.16})`,t.lineWidth=1+s()*2,t.beginPath(),t.moveTo(a,l),t.quadraticCurveTo(a+c*.5,l-4-s()*6,a+c,l),t.stroke()}},i,i)}function Dv(){return xs("sky",64,512,(i,t,e)=>{const n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#2f7fcb"),n.addColorStop(.3,"#57a7df"),n.addColorStop(.55,"#8cc9ec"),n.addColorStop(.74,"#c9e8f8"),n.addColorStop(.9,"#e7f5e8"),n.addColorStop(1,"#cfe8cd"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function Iv(){return xs("flag",256,160,(i,t,e)=>{i.fillStyle="#ff5c78",i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,0.92)",i.beginPath(),i.arc(t*.28,e*.5,e*.24,0,Math.PI*2),i.fill(),i.fillStyle="#ff5c78",i.beginPath(),i.arc(t*.28,e*.5,e*.12,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.9)",i.font="700 46px system-ui, sans-serif",i.textAlign="left",i.textBaseline="middle",i.fillText("ONEOINE",t*.44,e*.54)})}function Nv(){return xs("ball",256,256,(i,t,e)=>{const n=jl(1211);i.fillStyle="#ffffff",i.fillRect(0,0,t,e);for(let s=8;s<e;s+=15)for(let r=8;r<t;r+=15){const o=r+(s%30===8?7:0)+(n()-.5)*2,a=s+(n()-.5)*2,l=i.createRadialGradient(o,a,0,o,a,5);l.addColorStop(0,"rgba(186,196,204,0.95)"),l.addColorStop(.7,"rgba(212,222,229,0.75)"),l.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=l,i.beginPath(),i.arc(o,a,5,0,Math.PI*2),i.fill()}})}function Uv(){return xs("softdot",128,128,(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function Fv(){return xs("cloud",256,128,(i,t,e)=>{const n=jl(6262);i.clearRect(0,0,t,e);for(let s=0;s<14;s+=1){const r=40+n()*(t-80),o=e*.55+(n()-.5)*e*.4,a=22+n()*34,l=i.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.95)"),l.addColorStop(.6,"rgba(255,255,255,0.6)"),l.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=l,i.beginPath(),i.arc(r,o,a,0,Math.PI*2),i.fill()}})}const Ov={water:3779035};function Dd(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Pe;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0,u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let f=0;f<i.length;++f){const u=i[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Gh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][f]);const p=Gh(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Gh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new sn(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<e;p++){const _=h.getComponent(f,p);a.setComponent(f+d,p,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const R={grass:7651914,grassDark:5347642,fairway:9163351,fairwayDark:8637008,green:11068793,greenDark:10148458,fringe:8965461,rough:6137924,roughDark:5543996,meadow:4883766,meadowDark:4356655,sand:15785130,sandLight:16246978,sandDark:14468236,soil:9398854,soilDark:7295287,soilLight:11109210,rock:11121336,rockLight:12634316,rockDark:8818582,stone:14406331,stoneLight:15656658,stoneDark:12168853,water:3913693,wood:12618322,woodLight:14066537,woodDark:9331256,bark:9067067,barkDark:6701355,leaf:5681738,leafLight:7260508,leafDark:4166720,pine:3112775,pineLight:3970130,pineDark:2385465,coral:16743001,coralDark:14835775,cream:16446176,creamDark:15260868,teal:3120794,roof:14242634,roofDark:11681592,metal:12174025,metalDark:9279390,gold:15909198,white:16777215,glass:10408934,flowerPink:16748456,flowerYellow:16765286,flowerPurple:13081599,dark:2898752},zv=new Xe({vertexColors:!0,flatShading:!0,roughness:.87,metalness:0}),kv=new Xe({vertexColors:!0,flatShading:!0,roughness:.32,metalness:.62}),Bv=new Xe({vertexColors:!0,flatShading:!0,roughness:.45,metalness:.1,emissive:new Zt(16770726),emissiveIntensity:.75});function Gv(i){return i==="metal"?kv:i==="glow"?Bv:zv}function Dn(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const Hv=Dn(20973),Hh=new xe,Vh=new qn,Wh=new Ii,Xh=new P,Fr=new P,Or=new Zt;function Vv(i){const t=i.geo,e=t.index?t.toNonIndexed():t.clone();e.deleteAttribute("uv"),e.deleteAttribute("uv1"),e.deleteAttribute("uv2"),i.scale!==void 0?typeof i.scale=="number"?Fr.setScalar(i.scale):Fr.set(i.scale[0],i.scale[1],i.scale[2]):Fr.set(1,1,1),Xh.set(i.pos?.[0]??0,i.pos?.[1]??0,i.pos?.[2]??0),Vh.set(i.rot?.[0]??0,i.rot?.[1]??0,i.rot?.[2]??0),Wh.setFromEuler(Vh),Hh.compose(Xh,Wh,Fr),e.applyMatrix4(Hh),e.computeVertexNormals();const n=e.getAttribute("position"),s=n.count,r=new Float32Array(s*3);Or.setHex(i.color);const o=i.jitter??.07,a=i.shade??.12;let l=1/0,c=-1/0;for(let d=0;d<s;d+=1){const f=n.getY(d);f<l&&(l=f),f>c&&(c=f)}const h=Math.max(1e-4,c-l);for(let d=0;d<s;d+=3){const f=1+(Hv()-.5)*o,p=((n.getY(d)+n.getY(d+1)+n.getY(d+2))/3-l)/h,_=f*(1-a*(1-p));for(let m=0;m<3;m+=1){const g=(d+m)*3;r[g]=Math.min(1,Or.r*_),r[g+1]=Math.min(1,Or.g*_),r[g+2]=Math.min(1,Or.b*_)}}return e.setAttribute("color",new sn(r,3)),e}const Yh=new Map;function de(i,t){let e=Yh.get(i);if(!e){const s={solid:[],metal:[],glow:[]};for(const r of t){const o=r.bucket??"solid";s[o].push(Vv(r))}e=[];for(const r of["solid","metal","glow"]){if(s[r].length===0)continue;const o=Dd(s[r],!1);s[r].forEach(a=>a.dispose()),o&&(o.computeBoundingSphere(),e.push({geometry:o,material:Gv(r),cast:r!=="glow"}))}Yh.set(i,e)}const n=new De;for(const s of e){const r=new Kt(s.geometry,s.material);r.castShadow=s.cast,r.receiveShadow=!0,n.add(r)}return n}const zr=new Zt;function Id(i,t){i.updateMatrixWorld(!0);const e=new Map,n=[];i.traverse(r=>{const o=r;if(!o.isMesh||Array.isArray(o.material))return;const a=o.material;if(a.map||a.transparent||!o.geometry.getAttribute("color"))return;let l=o;for(;l;){if(t?.has(l))return;l=l.parent}n.push(o)});for(const r of n){const o=r.material,a=`${o.uuid}|${r.castShadow?1:0}|${r.receiveShadow?1:0}`;let l=e.get(a);l||(l={material:o,cast:r.castShadow,geometries:[]},e.set(a,l));const c=r.geometry.clone();c.applyMatrix4(r.matrixWorld),l.geometries.push(c)}const s=[];for(const r of n)r.parent?.remove(r);for(const r of e.values()){const o=Dd(r.geometries,!1);if(r.geometries.forEach(l=>l.dispose()),!o)continue;o.computeBoundingSphere();const a=new Kt(o,r.material);a.castShadow=r.cast,a.receiveShadow=!0,i.add(a),s.push(o)}return s}const Wv=Dn(12081);function pn(i,t,e=.055){const n=i.index?i.toNonIndexed():i;n.deleteAttribute("uv");const s=n.getAttribute("position"),r=s.count,o=new Float32Array(r*3),a=new P,l=new P,c=new P;for(let h=0;h<r;h+=3){const d=s.getX(h),f=s.getY(h),u=s.getZ(h),p=s.getX(h+1),_=s.getY(h+1),m=s.getZ(h+1),g=s.getX(h+2),v=s.getY(h+2),w=s.getZ(h+2),y=(d+p+g)/3,E=(f+_+v)/3,T=(u+m+w)/3;a.set(p-d,_-f,m-u),l.set(g-d,v-f,w-u),c.crossVectors(a,l).normalize(),t(y,E,T,c.y,zr);const x=1+(Wv()-.5)*e;for(let b=0;b<3;b+=1){const I=(h+b)*3;o[I]=Math.min(1,zr.r*x),o[I+1]=Math.min(1,zr.g*x),o[I+2]=Math.min(1,zr.b*x)}}return n.setAttribute("color",new sn(o,3)),n}function Vt(i,t,e,n=6){return new Te(i,t,e,n,1)}function nt(i,t,e){return new Zn(i,t,e)}function _e(i=1){return new Zl(i,0)}function mo(i=1){const t=[{geo:Vt(.14,.24,.3,5),color:R.barkDark,pos:[0,.15,0],jitter:.06,shade:.2},{geo:Vt(.07,.14,2.1,5),color:R.bark,pos:[0,1.15,0],jitter:.05,shade:.28},{geo:Vt(.115,.13,.12,5),color:R.barkDark,pos:[0,1,0],jitter:.04},{geo:Vt(.09,.105,.1,5),color:R.barkDark,pos:[0,1.72,0],jitter:.04}];[{y:2.5,r:1.28,h:1.42,color:R.pineDark},{y:3.32,r:1.02,h:1.34,color:R.pine},{y:4.06,r:.76,h:1.18,color:R.pineLight},{y:4.68,r:.48,h:.92,color:R.pine}].forEach((s,r)=>{t.push({geo:new je(s.r,s.h,7,1),color:s.color,pos:[0,s.y,0],rot:[0,r*.62,0],jitter:.16,shade:.34});for(let o=0;o<3;o+=1){const a=r*.9+o/3*Math.PI*2,l=s.r*.78;t.push({geo:new je(s.r*.3,s.h*.52,5,1),color:r%2===0?R.pineDark:R.pine,pos:[Math.cos(a)*l,s.y-s.h*.4,Math.sin(a)*l],rot:[Math.cos(a)*.85,a,Math.sin(a)*.85],jitter:.14,shade:.3})}}),t.push({geo:new je(.13,.52,5),color:R.pineDark,pos:[0,5.2,0],jitter:.1});const n=de("pine",t);return n.scale.setScalar(i),n}function go(i=1){const t=[{geo:Vt(.16,.26,.34,5),color:R.barkDark,pos:[0,.17,0],jitter:.05,shade:.2},{geo:Vt(.12,.2,1.5,5),color:R.bark,pos:[0,1.02,0],jitter:.06,shade:.3},{geo:Vt(.06,.11,1,5),color:R.bark,pos:[-.3,1.85,.05],rot:[0,0,.72],jitter:.05},{geo:Vt(.06,.11,1,5),color:R.bark,pos:[.3,1.85,-.06],rot:[0,0,-.72],jitter:.05},{geo:Vt(.05,.09,.8,5),color:R.barkDark,pos:[0,1.95,.24],rot:[-.6,0,0],jitter:.05}];[[0,2.55,0,1.02,R.leaf],[.62,2.32,.2,.74,R.leafDark],[-.66,2.26,-.12,.7,R.leafLight],[.18,3.05,-.42,.66,R.leafLight],[-.24,2.98,.5,.62,R.leaf],[.5,2.9,.62,.5,R.leafDark],[-.62,2.86,.34,.48,R.leaf],[0,3.34,.06,.5,R.leafLight]].forEach(([s,r,o,a,l])=>{t.push({geo:_e(1),color:l,pos:[s,r,o],scale:[a,a*.88,a],rot:[s*.4,r*.3,o*.4],jitter:.2,shade:.34})});const n=de("tree",t);return n.scale.setScalar(i),n}function Xv(i=1){const t=[{geo:_e(1),color:R.leaf,pos:[0,.32,0],scale:[.52,.42,.48],jitter:.2,shade:.3},{geo:_e(1),color:R.leafDark,pos:[.36,.24,.12],scale:[.34,.28,.32],rot:[.4,.8,0],jitter:.2},{geo:_e(1),color:R.leafLight,pos:[-.32,.26,-.1],scale:[.32,.26,.3],rot:[.2,1.6,.3],jitter:.2},{geo:_e(1),color:R.leaf,pos:[.04,.46,-.28],scale:[.26,.22,.26],jitter:.2},{geo:_e(.16),color:R.flowerPink,pos:[.24,.46,.24],jitter:.1},{geo:_e(.14),color:R.flowerYellow,pos:[-.22,.44,-.2],jitter:.1}],e=de("bush",t);return e.scale.setScalar(i),e}function zs(i=1,t=1){const e=Dn(t*977+13),n=[R.rock,R.rockLight,R.rockDark],s=[],r=3+Math.floor(e()*2);for(let a=0;a<r;a+=1){const l=e()*Math.PI*2,c=a===0?0:.28+e()*.42,h=a===0?.52+e()*.16:.22+e()*.26;s.push({geo:_e(1),color:n[Math.floor(e()*n.length)],pos:[Math.cos(l)*c,h*.62,Math.sin(l)*c],scale:[h,h*(.66+e()*.3),h*(.8+e()*.3)],rot:[e()*3,e()*3,e()*3],jitter:.14,shade:.24})}s.push({geo:_e(1),color:R.leafDark,pos:[-.1,.52,.12],scale:[.3,.16,.26],rot:[.3,1,.2],jitter:.18});const o=de(`rock-${r}`,s);return o.scale.setScalar(i),o}function Nd(i=1,t=1){const e=Dn(t*331+5),n=[];for(let r=0;r<6;r+=1){const o=(e()-.5)*.5,a=(e()-.5)*.5,l=.7+e()*.6;n.push({geo:Vt(.016,.03,l,4),color:e()>.5?R.leafDark:R.leaf,pos:[o,l/2,a],rot:[(e()-.5)*.3,0,(e()-.5)*.3],jitter:.12}),e()>.55&&n.push({geo:Vt(.055,.055,.18,5),color:R.barkDark,pos:[o,l-.06,a],jitter:.1})}const s=de("reeds",n);return s.scale.setScalar(i),s}function Ud(i=1){const t=[{geo:new Te(.42,.42,.03,7),color:R.leaf,pos:[0,.015,0],jitter:.12},{geo:_e(.1),color:R.flowerPink,pos:[.08,.07,-.05],jitter:.1},{geo:_e(.07),color:R.white,pos:[-.06,.06,.08],jitter:.1}],e=de("lily",t);return e.scale.setScalar(i),e}function Qr(i=1){const t=[];for(let n=0;n<3;n+=1)t.push({geo:nt(1.9,.07,.14),color:n%2===0?R.wood:R.woodLight,pos:[0,.46,-.16+n*.16],jitter:.08});for(let n=0;n<2;n+=1)t.push({geo:nt(1.9,.14,.06),color:R.woodLight,pos:[0,.74+n*.19,-.28],rot:[-.14,0,0],jitter:.08});[-.8,.8].forEach(n=>{t.push({geo:nt(.09,.46,.1),color:R.creamDark,pos:[n,.23,.16],jitter:.05}),t.push({geo:nt(.09,.46,.1),color:R.creamDark,pos:[n,.23,-.2],jitter:.05}),t.push({geo:nt(.09,.08,.14),color:R.creamDark,pos:[n,.44,.05],jitter:.05}),t.push({geo:nt(.09,.06,.5),color:R.woodDark,pos:[n,.62,-.05],jitter:.05}),t.push({geo:nt(.12,.16,.1),color:R.stoneDark,pos:[n,.66,.2],jitter:.05})});const e=de("bench",t);return e.scale.setScalar(i),e}function Fd(i=1){const t=[{geo:Vt(.19,.26,.16,6),color:R.stoneDark,pos:[0,.08,0],jitter:.06},{geo:Vt(.06,.1,2.5,6),color:R.stoneDark,pos:[0,1.35,0],jitter:.05,shade:.2},{geo:Vt(.14,.14,.08,6),color:R.stoneLight,pos:[0,2.6,0],jitter:.05},{geo:nt(.34,.44,.34),color:R.white,pos:[0,2.88,0],bucket:"glow",jitter:.02},{geo:new je(.32,.26,4),color:R.stoneDark,pos:[0,3.22,0],rot:[0,Math.PI/4,0],jitter:.05},{geo:_e(.07),color:R.gold,pos:[0,3.4,0],jitter:.05}];[-.17,.17].forEach(n=>{[-.17,.17].forEach(s=>{t.push({geo:nt(.05,.5,.05),color:R.stoneDark,pos:[n,2.88,s],jitter:.03})})});const e=de("lamp",t);return e.scale.setScalar(i),e}function Yv(i=R.coral,t=1){const e=i===R.gold?"yardage-gold":i===R.teal?"yardage-teal":"yardage",n=[{geo:nt(.14,1.1,.14),color:R.woodDark,pos:[0,.55,0],jitter:.07,shade:.2},{geo:nt(.44,.34,.07),color:R.cream,pos:[0,1.2,0],jitter:.04},{geo:nt(.44,.1,.09),color:i,pos:[0,1.3,0],jitter:.03},{geo:nt(.5,.06,.12),color:R.woodLight,pos:[0,1.42,0],jitter:.04}],s=de(e,n);return s.scale.setScalar(t),s}function Od(i=1){const t=[{geo:nt(1.44,.3,2.3),color:R.creamDark,pos:[0,.48,0],jitter:.05},{geo:nt(1.36,.42,1.5),color:R.cream,pos:[0,.82,-.06],jitter:.05},{geo:nt(1.3,.18,.12),color:R.coral,pos:[0,.72,.78],jitter:.04},{geo:nt(1.5,.16,.16),color:R.creamDark,pos:[0,.42,1.14],jitter:.04},{geo:nt(1.16,.16,.56),color:4873062,pos:[0,1.06,-.18],jitter:.06},{geo:nt(1.16,.52,.16),color:4149081,pos:[0,1.3,-.52],rot:[-.2,0,0],jitter:.06},{geo:nt(1.26,.62,.05),color:R.glass,pos:[0,1.42,.52],rot:[.16,0,0],jitter:.03},{geo:nt(1.34,.06,.08),color:R.creamDark,pos:[0,1.72,.48],jitter:.03},{geo:nt(1.34,.06,.08),color:R.creamDark,pos:[0,1.12,.56],jitter:.03},{geo:Vt(.05,.05,1,5),color:R.creamDark,pos:[.58,1.5,.5],rot:[.3,0,0],jitter:.04},{geo:Vt(.16,.16,.06,8),color:R.dark,pos:[.58,1.98,.36],rot:[1.1,0,0],jitter:.04},{geo:nt(1.6,.12,2),color:R.cream,pos:[0,2.16,-.1],jitter:.05},{geo:nt(1.66,.08,2.06),color:R.coral,pos:[0,2.24,-.1],jitter:.04},{geo:nt(1.44,.34,.12),color:R.creamDark,pos:[0,.8,-1.08],jitter:.05},{geo:nt(.9,.28,.14),color:R.creamDark,pos:[0,.78,1.12],jitter:.05}];[[.62,.5,.7],[-.62,.5,.7],[.62,.5,-.8],[-.62,.5,-.8]].forEach(([n,,s],r)=>{t.push({geo:Vt(.3,.3,.18,10),color:R.dark,pos:[n>0?.7:-.7,.3,s],rot:[0,0,Math.PI/2],jitter:.05}),t.push({geo:Vt(.12,.12,.2,6),color:R.metal,pos:[n>0?.72:-.72,.3,s],rot:[0,0,Math.PI/2],bucket:"metal",jitter:.03}),r<2&&(t.push({geo:Vt(.06,.06,1.1,5),color:R.metalDark,pos:[n>0?.68:-.68,1.6,.72],bucket:"metal",jitter:.03}),t.push({geo:Vt(.06,.06,1.1,5),color:R.metalDark,pos:[n>0?.68:-.68,1.6,-.92],bucket:"metal",jitter:.03}))}),[[.66,.7],[-.66,.7],[.66,-.9],[-.66,-.9]].forEach(([n,s])=>{t.push({geo:Vt(.04,.04,1.1,4),color:R.creamDark,pos:[n,1.62,s],jitter:.03})});const e=de("cart",t);return e.scale.setScalar(i),e}function Ml(i=1){const t=[{geo:nt(.56,.1,.5),color:R.metalDark,pos:[0,.05,0],bucket:"metal",jitter:.04},{geo:Vt(.24,.26,.9,6),color:R.coralDark,pos:[0,.55,0],jitter:.06},{geo:Vt(.26,.26,.12,6),color:R.cream,pos:[0,1.02,0],jitter:.05},{geo:Vt(.05,.05,.6,4),color:R.metal,pos:[0,.9,.3],rot:[.9,0,0],bucket:"metal",jitter:.02}];for(let n=0;n<5;n+=1){const s=n/5*Math.PI*2;t.push({geo:Vt(.012,.012,.9,4),color:R.metal,pos:[Math.cos(s)*.14,1.4,Math.sin(s)*.14],rot:[Math.sin(s)*.16,0,-Math.cos(s)*.16],bucket:"metal",jitter:.02}),t.push({geo:nt(.1,.04,.06),color:R.metalDark,pos:[Math.cos(s)*.2,1.82,Math.sin(s)*.2],rot:[0,s,.2],bucket:"metal",jitter:.02})}const e=de("bagstand",t);return e.scale.setScalar(i),e}function qv(i=1){const t=[{geo:new Te(2.3,2.45,.28,6),color:R.stone,pos:[0,.14,0],jitter:.06},{geo:new Te(2.5,2.5,.1,6),color:R.stoneDark,pos:[0,.02,0],jitter:.05}],e=2.05;for(let s=0;s<6;s+=1){const r=s/6*Math.PI*2+Math.PI/6,o=Math.cos(r)*e,a=Math.sin(r)*e;t.push({geo:Vt(.1,.13,2.3,5),color:R.woodDark,pos:[o,1.42,a],jitter:.05}),t.push({geo:Vt(.16,.16,.14,5),color:R.stoneLight,pos:[o,.34,a],jitter:.04});const l=(s+1)/6*Math.PI*2+Math.PI/6,c=Math.cos(l)*e,h=Math.sin(l)*e,d=(o+c)/2,f=(a+h)/2,u=Math.hypot(c-o,h-a),p=Math.atan2(c-o,h-a);s!==1&&s!==4&&(t.push({geo:nt(.08,.1,u-.3),color:R.woodLight,pos:[d,1,f],rot:[0,p,0],jitter:.05}),t.push({geo:nt(.07,.08,u-.3),color:R.wood,pos:[d,.68,f],rot:[0,p,0],jitter:.05}))}t.push({geo:new Te(2.3,2.6,.16,6),color:R.woodDark,pos:[0,2.62,0],jitter:.05}),t.push({geo:new je(2.85,1.5,6),color:R.roof,pos:[0,3.42,0],jitter:.09,shade:.2}),t.push({geo:new je(2.95,.22,6),color:R.roofDark,pos:[0,2.74,0],jitter:.05}),t.push({geo:Vt(.09,.09,.34,6),color:R.woodDark,pos:[0,4.2,0],jitter:.04}),t.push({geo:_e(.15),color:R.gold,pos:[0,4.45,0],bucket:"metal",jitter:.04});const n=de("gazebo",t);return n.scale.setScalar(i),n}function $v(i=1){const t=[{geo:new Te(2.2,2.5,.4,8),color:R.stoneDark,pos:[0,.2,0],jitter:.06},{geo:new Te(1.35,2.05,4.6,8),color:R.cream,pos:[0,2.7,0],jitter:.06,shade:.24},{geo:new Te(1.45,1.5,.18,8),color:R.stoneDark,pos:[0,1.9,0],jitter:.04},{geo:new Te(1.38,1.42,.18,8),color:R.stoneDark,pos:[0,3.7,0],jitter:.04},{geo:new je(1.7,1.15,8),color:R.roof,pos:[0,5.55,0],jitter:.08,shade:.2},{geo:nt(.85,1.6,.16),color:R.woodDark,pos:[0,.85,2],jitter:.05},{geo:nt(.95,.14,.2),color:R.creamDark,pos:[0,1.9,1.98],jitter:.04},{geo:nt(.5,.62,.14),color:R.glass,pos:[0,4.1,1.32],jitter:.03},{geo:nt(.58,.7,.1),color:R.woodDark,pos:[0,4.1,1.28],jitter:.03},{geo:Vt(.2,.2,1,6),color:R.woodDark,pos:[0,5.05,1.3],rot:[Math.PI/2,0,0],jitter:.04},{geo:Vt(.3,.3,.4,8),color:R.woodDark,pos:[0,5.05,1.35],rot:[Math.PI/2,0,0],jitter:.04}];for(let n=0;n<4;n+=1){const s=n/4*Math.PI*2,r=Math.cos(s)*1.85,o=Math.sin(s)*1.85;t.push({geo:nt(.13,3.6,.09),color:R.woodLight,pos:[r,5.05+o,1.38],rot:[0,0,-s],jitter:.05});for(let a=0;a<3;a+=1){const l=.55+a*.85;t.push({geo:nt(.62,.06,.07),color:R.cream,pos:[r+Math.cos(s+Math.PI/2)*.34*(a===1?-1:1),5.05+o+Math.sin(s+Math.PI/2)*.34*(a===1?-1:1),1.4-l*0],rot:[0,0,-s],jitter:.04})}t.push({geo:nt(.9,2.9,.05),color:R.cream,pos:[r+Math.cos(s+Math.PI/2)*.5,5.05+o+Math.sin(s+Math.PI/2)*.5,1.42],rot:[0,0,-s],jitter:.05})}const e=de("windmill",t);return e.scale.setScalar(i),e}function Zv(i=6,t=1){const e=[];for(let o=0;o<6;o+=1){const a=(o+.5)/6,l=Math.sin(a*Math.PI)*.9,c=(a-.5)*i;e.push({geo:nt(2.2,.16,i/6+.06),color:o%2===0?R.wood:R.woodLight,pos:[0,l,c],rot:[Math.cos(a*Math.PI)*.42,0,0],jitter:.07})}[-1.14,1.14].forEach(o=>{for(let a=0;a<3;a+=1){const l=(a+.5)/3,c=Math.sin(l*Math.PI)*.9,h=(l-.5)*i;e.push({geo:nt(.12,.9,.12),color:R.woodDark,pos:[o,c+.5,h],jitter:.05})}for(let a=0;a<2;a+=1){const l=(a+.5)/2,c=Math.sin(l*Math.PI)*.9+.9,h=(l-.5)*i;e.push({geo:nt(.1,.1,i*.62),color:R.woodLight,pos:[o,c,h],rot:[0,0,0],jitter:.05})}});const r=de(`bridge-${i}-6`,e);return r.scale.setScalar(t),r}function zd(i=2.4,t=1){const e=[],n=Math.max(2,Math.round(i/1.6)+1);for(let r=0;r<n;r+=1){const o=-i/2+r/(n-1)*i;e.push({geo:nt(.13,1,.13),color:R.woodDark,pos:[o,.5,0],jitter:.06,shade:.15}),e.push({geo:new je(.11,.16,4),color:R.woodLight,pos:[o,1.08,0],rot:[0,Math.PI/4,0],jitter:.05})}e.push({geo:nt(i,.11,.07),color:R.wood,pos:[0,.78,0],jitter:.06}),e.push({geo:nt(i,.1,.07),color:R.woodLight,pos:[0,.44,0],jitter:.06});const s=de(`fence-${i}-${n}`,e);return s.scale.setScalar(t),s}function Kv(i=2.6,t=1){const e=[{geo:new Zn(i,.9,.85),color:R.leafDark,pos:[0,.45,0],jitter:.14,shade:.2},{geo:new Zn(i,.14,.92),color:R.leaf,pos:[0,.95,0],jitter:.16}],n=Math.max(2,Math.round(i/.9));for(let r=0;r<n;r+=1)e.push({geo:_e(1),color:r%2===0?R.leaf:R.leafLight,pos:[-i/2+(r+.5)/n*i,1,r%2===0?.12:-.12],scale:[.42,.24,.38],rot:[r*.5,r*1.1,0],jitter:.18});const s=de(`hedge-${i}`,e);return s.scale.setScalar(t),s}function Jv(){const i=[{geo:nt(9.6,.4,6.6),color:R.stoneDark,pos:[0,.2,0],jitter:.06},{geo:nt(9,.2,6),color:R.stone,pos:[0,.44,0],jitter:.05},{geo:nt(8.4,2.5,5.4),color:R.cream,pos:[0,1.9,0],jitter:.05,shade:.12},{geo:nt(8.7,.22,5.7),color:R.woodDark,pos:[0,3.18,0],jitter:.05},{geo:nt(8.7,.18,5.7),color:R.woodDark,pos:[0,.62,0],jitter:.05}];[[-4.2,-2.7],[4.2,-2.7],[-4.2,2.7],[4.2,2.7]].forEach(([r,o])=>{i.push({geo:nt(.26,2.6,.26),color:R.woodDark,pos:[r,1.9,o],jitter:.05})}),i.push({geo:nt(8.44,.12,.1),color:R.woodDark,pos:[0,1.6,2.72],jitter:.04}),i.push({geo:nt(8.44,.12,.1),color:R.woodDark,pos:[0,1.6,-2.72],jitter:.04});const t=.5;[1,-1].forEach(r=>{i.push({geo:nt(5.4,.26,6.9),color:R.roof,pos:[r*2.35,4.58,0],rot:[0,0,r*t],jitter:.08,shade:.18}),i.push({geo:nt(5.5,.12,7),color:R.roofDark,pos:[r*2.37,4.44,0],rot:[0,0,r*t],jitter:.05})}),i.push({geo:nt(.36,.3,7.1),color:R.roofDark,pos:[0,5.94,0],jitter:.05});const e=new $l;e.moveTo(-4.15,3.2),e.lineTo(4.15,3.2),e.lineTo(0,5.78),e.closePath();const n=new So(e,{depth:.2,bevelEnabled:!1});[1,-1].forEach(r=>{i.push({geo:n,color:R.cream,pos:[0,0,r*2.62],rot:[0,r>0?0:Math.PI,0],jitter:.04})}),i.push({geo:nt(7.4,.22,2.2),color:R.wood,pos:[0,.5,3.55],jitter:.06}),i.push({geo:nt(7.6,.2,2),color:R.roof,pos:[0,3.24,3.4],rot:[-.1,0,0],jitter:.07}),i.push({geo:nt(7.7,.08,2.06),color:R.roofDark,pos:[0,3.12,3.4],rot:[-.1,0,0],jitter:.05}),i.push({geo:nt(7.3,.1,1.9),color:R.cream,pos:[0,3.02,3.32],jitter:.04}),[-2.9,-1,1,2.9].forEach(r=>{i.push({geo:nt(.18,2.5,.18),color:R.woodDark,pos:[r,1.75,4.35],jitter:.05}),i.push({geo:nt(.28,.14,.28),color:R.stoneLight,pos:[r,.54,4.35],jitter:.04})}),[-2,2].forEach(r=>{i.push({geo:nt(1.6,.12,.12),color:R.woodLight,pos:[r,1,4.35],jitter:.05}),i.push({geo:nt(1.6,.1,.1),color:R.wood,pos:[r,.72,4.35],jitter:.05})}),i.push({geo:nt(2.6,.14,.5),color:R.stone,pos:[0,.2,4.75],jitter:.05}),i.push({geo:nt(3,.14,.5),color:R.stoneDark,pos:[0,.07,5.15],jitter:.05}),i.push({geo:nt(1.5,2.15,.16),color:R.woodDark,pos:[0,1.5,2.72],jitter:.05}),i.push({geo:nt(1.7,.16,.2),color:R.woodLight,pos:[0,2.62,2.72],jitter:.04}),i.push({geo:nt(.1,2.15,.2),color:R.woodLight,pos:[-.8,1.5,2.72],jitter:.04}),i.push({geo:nt(.1,2.15,.2),color:R.woodLight,pos:[.8,1.5,2.72],jitter:.04}),i.push({geo:nt(.5,.6,.06),color:R.glass,pos:[0,1.95,2.82],jitter:.03}),i.push({geo:_e(.06),color:R.gold,pos:[.55,1.35,2.84],bucket:"metal",jitter:.03});const s=2.74;return[-2.9,2.9].forEach(r=>{i.push({geo:nt(1.3,1.25,.12),color:R.woodLight,pos:[r,1.95,s-.02],jitter:.04}),i.push({geo:nt(1.06,1,.14),color:R.glass,pos:[r,1.95,s+.04],jitter:.03}),i.push({geo:nt(.08,1,.18),color:R.woodLight,pos:[r,1.95,s+.06],jitter:.03}),i.push({geo:nt(1.06,.08,.18),color:R.woodLight,pos:[r,1.95,s+.06],jitter:.03}),i.push({geo:nt(1.5,.14,.3),color:R.stone,pos:[r,1.26,s+.06],jitter:.04}),i.push({geo:nt(1.1,.26,.34),color:R.woodDark,pos:[r,.82,s+.18],jitter:.04});for(let o=0;o<3;o+=1)i.push({geo:_e(.18),color:o%2===0?R.leaf:R.leafLight,pos:[r-.32+o*.32,1.02,s+.2],jitter:.16}),i.push({geo:_e(.1),color:o%2===0?R.flowerPink:R.flowerYellow,pos:[r-.32+o*.32,1.16,s+.26],jitter:.1})}),[-3,0,3].forEach(r=>{[-4.26,4.26].forEach(o=>{i.push({geo:nt(.12,1.2,1.2),color:R.woodLight,pos:[o,1.95,r],jitter:.04}),i.push({geo:nt(.14,.96,.96),color:R.glass,pos:[o+Math.sign(o)*.01,1.95,r],jitter:.03})})}),i.push({geo:nt(.7,1.7,.7),color:R.stone,pos:[-2.6,5,-1.2],jitter:.06}),i.push({geo:nt(.86,.18,.86),color:R.stoneDark,pos:[-2.6,5.9,-1.2],jitter:.05}),i.push({geo:nt(3.4,.72,.14),color:R.woodDark,pos:[0,3.05,2.86],jitter:.04}),i.push({geo:nt(3.2,.1,.16),color:R.gold,pos:[0,3.34,2.88],bucket:"metal",jitter:.03}),i.push({geo:nt(3.2,.1,.16),color:R.gold,pos:[0,2.76,2.88],bucket:"metal",jitter:.03}),[-1.35,1.35].forEach(r=>{i.push({geo:nt(.24,.34,.24),color:R.white,pos:[r,2.2,2.82],bucket:"glow",jitter:.02}),i.push({geo:new je(.2,.16,4),color:R.woodDark,pos:[r,2.45,2.82],rot:[0,Math.PI/4,0],jitter:.03})}),de("clubhouse",i)}function jv(i=1){const t=[{geo:Vt(.5,.5,.06,8),color:R.woodLight,pos:[0,.74,0],jitter:.05},{geo:Vt(.08,.1,.74,6),color:R.woodDark,pos:[0,.37,0],jitter:.05},{geo:Vt(.06,.06,2.3,5),color:R.creamDark,pos:[0,1.15,0],jitter:.04},{geo:new je(1.35,.5,8),color:R.coral,pos:[0,2.2,0],jitter:.08},{geo:_e(.08),color:R.woodDark,pos:[0,2.48,0],jitter:.03}];[[.85,0],[-.85,0],[0,.85]].forEach(([n,s])=>{t.push({geo:nt(.42,.06,.42),color:R.cream,pos:[n,.46,s],jitter:.04}),t.push({geo:nt(.06,.46,.06),color:R.creamDark,pos:[n,.23,s],jitter:.04}),t.push({geo:nt(.42,.4,.06),color:R.cream,pos:[n,.66,s+(s>0?.18:-.18)],jitter:.04})});const e=de("patio",t);return e.scale.setScalar(i),e}function Qv(i=1){const t=[{geo:Vt(.22,.3,.3,6),color:R.stoneDark,pos:[0,.15,0],jitter:.05},{geo:Vt(.05,.07,5.2,6),color:R.cream,pos:[0,2.9,0],bucket:"metal",jitter:.03},{geo:_e(.14),color:R.gold,pos:[0,5.56,0],bucket:"metal",jitter:.03},{geo:nt(1.5,.9,.05),color:R.coral,pos:[.78,4.85,0],jitter:.07},{geo:nt(.9,.5,.06),color:R.cream,pos:[.6,4.85,.01],jitter:.05}],e=de("flagpole",t);return e.scale.setScalar(i),e}function tM(i=1){const t=Fv();if(!t)return null;const e=new Ni({map:t,transparent:!0,opacity:.85,depthWrite:!1}),n=new ps(e);return n.scale.set(22*i,9*i,1),n}function kd(i,t,e=!1){const n=new De,s=Nv(),r=new Xe({color:i,map:s??null,roughness:.32,metalness:.02,transparent:e,opacity:e?.55:1}),o=new Kt(new di(t,28,20),r);o.castShadow=!e,n.add(o);const a=new Xe({color:16777215,roughness:.45,transparent:e,opacity:e?.75:1}),l=new Kt(new di(t*.22,10,8),a);return l.position.set(0,t*.92,0),n.add(l),n}function Bd(i=1){const t=Dn(i*71+3),e=[];for(let n=0;n<5;n+=1){const s=t()*Math.PI*2,r=.16+t()*.18;e.push({geo:new je(.045,r,3),color:t()>.5?R.grassDark:R.grass,pos:[Math.cos(s)*.1,r/2,Math.sin(s)*.1],rot:[Math.cos(s)*.35,s,Math.sin(s)*.35],jitter:.14})}return de(`tuft-${i%4}`,e)}function ha(i=2.6,t=1){const e=Dn(Math.round(i*131)),n=[],s=3;for(let o=0;o<s;o+=1){const a=Math.max(2,Math.round(i/.85));for(let l=0;l<a;l+=1){const c=i/a*(.86+e()*.1);n.push({geo:nt(c,.34,.5),color:[R.stone,R.stoneLight,R.stoneDark][Math.floor(e()*3)],pos:[-i/2+(l+.5)*(i/a)+(e()-.5)*.06,.18+o*.33,(e()-.5)*.06],rot:[0,(e()-.5)*.08,0],jitter:.1,shade:.18})}}n.push({geo:nt(i+.1,.1,.62),color:R.stoneDark,pos:[0,1.12,0],jitter:.06});const r=de(`wall-${i}`,n);return r.scale.setScalar(t),r}const eM=.46,Ji=-.4;function nM(i){const t=new od(i.map(([s,r])=>new P(s,0,r)),!1,"catmullrom",.4),e=t.getLength(),n=Math.max(16,Math.round(e/.6));return t.getSpacedPoints(n).map(s=>({x:s.x,z:s.z}))}function iM(i,t){const e=i.length,n=[],s=[];for(let E=0;E<e;E+=1){const T=i[Math.max(0,E-1)],x=i[Math.min(e-1,E+1)];let b=x.x-T.x,I=x.z-T.z;const C=Math.hypot(b,I)||1;b/=C,I/=C;const N=-I,k=b;n.push({x:i[E].x+N*t,z:i[E].z+k*t}),s.push({x:i[E].x-N*t,z:i[E].z-k*t})}const r=i[e-1],o=i[Math.max(0,e-2)],a={x:r.x-o.x,z:r.z-o.z},l=Math.hypot(a.x,a.z)||1,c={x:a.x/l,z:a.z/l},h=n[e-1],d={x:h.x-r.x,z:h.z-r.z},f=i[0],u=i[Math.min(e-1,1)],p={x:f.x-u.x,z:f.z-u.z},_=Math.hypot(p.x,p.z)||1,m={x:p.x/_,z:p.z/_},g=s[0],v={x:g.x-f.x,z:g.z-f.z},w=[...n],y=10;for(let E=1;E<=y;E+=1){const T=Math.PI*E/y;w.push({x:r.x+d.x*Math.cos(T)+c.x*Math.sin(T)*t,z:r.z+d.z*Math.cos(T)+c.z*Math.sin(T)*t})}for(let E=e-2;E>=0;E-=1)w.push(s[E]);for(let E=1;E<=y;E+=1){const T=Math.PI*E/y;w.push({x:f.x+v.x*Math.cos(T)-m.x*Math.sin(T)*t,z:f.z+v.z*Math.cos(T)-m.z*Math.sin(T)*t})}return w}function ua(i,t,e=8,n){const s=i.length,r=[];for(let c=0;c<s;c+=1){const h=i[Math.max(0,c-1)],d=i[Math.min(s-1,c+1)];let f=d.x-h.x,u=d.z-h.z;const p=Math.hypot(f,u)||1;f/=p,u/=p,r.push({x:-u,z:f})}const o=[];for(let c=0;c<s;c+=1){const h=[];for(let d=0;d<=e;d+=1){const f=d/e*2-1;h.push({x:i[c].x+r[c].x*t*f,z:i[c].z+r[c].z*t*f})}o.push(h)}const a=[];for(let c=0;c<s-1;c+=1)for(let h=0;h<e;h+=1){const d=o[c][h],f=o[c][h+1],u=o[c+1][h],p=o[c+1][h+1];n&&!n((d.x+f.x+u.x+p.x)/4,(d.z+f.z+u.z+p.z)/4)||(a.push(d.x,0,d.z,p.x,0,p.z,u.x,0,u.z),a.push(d.x,0,d.z,f.x,0,f.z,p.x,0,p.z))}const l=new Pe;return l.setAttribute("position",new fe(a,3)),l.computeVertexNormals(),l}function qh(i,t){return i.map((e,n)=>{const s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)];let o=r.x-s.x,a=r.z-s.z;const l=Math.hypot(o,a)||1;return o/=l,a/=l,{x:e.x-a*t,z:e.z+o*t}})}function $h(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s,s+=1){const o=i[s].x,a=i[s].z,l=i[r].x,c=i[r].z;a>e!=c>e&&t<(l-o)*(e-a)/(c-a+1e-12)+o&&(n=!n)}return n}function da(i,t,e){let n=1/0;for(let s=0;s<i.length-1;s+=1){const r=i[s],o=i[s+1],a=o.x-r.x,l=o.z-r.z,c=a*a+l*l;let h=c>0?((t-r.x)*a+(e-r.z)*l)/c:0;h=Math.max(0,Math.min(1,h));const d=t-(r.x+a*h),f=e-(r.z+l*h),u=d*d+f*f;u<n&&(n=u)}return Math.sqrt(n)}function sM(i,t,e,n){let s=1/0,r=0;for(let o=0;o<i.length-1;o+=1){const a=i[o],l=i[o+1],c=l.x-a.x,h=l.z-a.z,d=c*c+h*h;let f=d>0?((e-a.x)*c+(n-a.z)*h)/d:0;f=Math.max(0,Math.min(1,f));const u=e-(a.x+c*f),p=n-(a.z+h*f),_=u*u+p*p;_<s&&(s=_,r=t[o]+Math.sqrt(d)*f)}return r}function fa(i,t,e){const n=(t-i.x)/i.rx,s=(e-i.z)/i.rz;return n*n+s*s<=1}function rM(i,t=[]){const e=new $l;i.forEach((n,s)=>{const r=n.x,o=-n.z;s===0?e.moveTo(r,o):e.lineTo(r,o)}),e.closePath();for(const n of t){const s=new pl;n.forEach((r,o)=>{const a=r.x,l=-r.z;o===0?s.moveTo(a,l):s.lineTo(a,l)}),s.closePath(),e.holes.push(s)}return e}function Zh(i,t=56){const e=[];for(let n=0;n<t;n+=1){const s=n/t*Math.PI*2;e.push({x:i.x+Math.cos(s)*i.rx,z:i.z+Math.sin(s)*i.rz})}return e}function Kh(i,t,e){const n=rM(i,t),s=new So(n,{depth:e,bevelEnabled:!1,curveSegments:4,steps:1});return s.rotateX(-Math.PI/2),s.translate(0,-e,0),s.computeVertexNormals(),s}function Cs(i,t,e=56){const n=new Si(1,e);return n.rotateX(-Math.PI/2),n.scale(i,1,t),n}function pa(i,t,e,n,s=56){const r=new Kn(i,t,s);return r.rotateX(-Math.PI/2),r.scale(e,1,n),r}function ma(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function ji(i,t,e,n){const s=Math.sin(t*.21+Math.cos(e*.17)*1.6)*Math.cos(e*.19+Math.sin(t*.13)*1.2);return n.setHex(i),n.offsetHSL(0,0,s*.016),n}class Jh{constructor(t,e){O(this,"scene");O(this,"hole");O(this,"group",new De);O(this,"cup",new P);O(this,"tee",new P);O(this,"spec");O(this,"obstacles",[]);O(this,"islandPoly");O(this,"fairwayLine");O(this,"pathArc",[]);O(this,"geometries",[]);O(this,"materials",[]);O(this,"textures",[]);O(this,"waterSurfaces",[]);O(this,"ripples",[]);O(this,"flagCloth",null);O(this,"flagClothBase",null);O(this,"time",0);O(this,"surfaceAt",(t,e)=>{for(const r of this.spec.zones??[])if(r.kind==="water"&&fa(r,t,e))return{kind:"water",height:-.14};for(const r of this.spec.zones??[])if(r.kind==="bunker"&&fa(r,t,e))return{kind:"bunker",height:.005};const n=this.spec.green,s=Math.hypot(t-n.x,e-n.z);return s<=n.r?{kind:"green",height:.01}:s<=n.r+1.5?{kind:"fringe",height:.005}:Math.hypot(t-this.tee.x,e-this.tee.z)<=2.1?{kind:"tee",height:0}:da(this.fairwayLine,t,e)<=this.spec.fairwayWidth?{kind:"fairway",height:0}:this.contains(t,e)?{kind:"rough",height:0}:{kind:"out",height:Ji}});this.scene=t,this.hole=e,this.spec=e,this.cup.set(e.cup[0],0,e.cup[1]),this.tee.set(e.tee[0],0,e.tee[1]),this.fairwayLine=nM(e.path),this.islandPoly=iM(this.fairwayLine,e.roughWidth);let n=0;this.pathArc.push(0);for(let s=1;s<this.fairwayLine.length;s+=1)n+=Math.hypot(this.fairwayLine[s].x-this.fairwayLine[s-1].x,this.fairwayLine[s].z-this.fairwayLine[s-1].z),this.pathArc.push(n);this.build(),t.add(this.group)}get surfaceFn(){return this.surfaceAt}contains(t,e){return $h(this.islandPoly,t,e)}isInWater(t,e){return(this.spec.zones??[]).some(n=>n.kind==="water"&&fa(n,t,e))}get length(){return Math.hypot(this.cup.x-this.tee.x,this.cup.z-this.tee.z)}track(t){return this.geometries.push(t),t}material(t){const e=new Xe(t);return this.materials.push(e),e.map&&this.textures.push(e.map),e}groundMaterial(t=.94,e=!0){return this.material({vertexColors:!0,roughness:t,flatShading:e})}addGround(t,e,n,s=.055){const r=pn(t,n,s);this.geometries.push(r);const o=new Kt(r,e);return o.receiveShadow=!0,this.group.add(o),o}addProp(t,e,n,s,r=0){t.position.set(e,n,s),t.rotation.y=r,this.group.add(t)}build(){const t=this.spec,e=this.groundMaterial(.98),n=new Ri(200,200,34,34);n.rotateX(-Math.PI/2),this.addGround(n,e,(lt,xt,At,Ot,W)=>ji(ma(Math.floor(lt*.03),Math.floor(At*.03))>.45?R.meadow:R.meadowDark,lt,At,W),.06).position.set(t.green.x,Ji,t.green.z-6);const r=(t.zones??[]).filter(lt=>lt.kind==="water"),o=(lt,xt)=>!r.some(At=>((lt-At.x)/(At.rx*1.04))**2+((xt-At.z)/(At.rz*1.04))**2<=1),a=r.map(lt=>Zh(lt)).filter(lt=>lt.every(xt=>$h(this.islandPoly,xt.x,xt.z))),l=this.groundMaterial(.95),c=Kh(this.islandPoly,a,eM),h=this.addGround(c,l,(lt,xt,At,Ot,W)=>Ot>.6?ji(R.rough,lt,At,W):xt>-.14?ji(R.roughDark,lt,At,W):xt>-.3?(W.setHex(R.soil),W):(W.setHex(R.soilDark),W),.018);h.castShadow=!0;const d=this.groundMaterial(.93),f=this.addGround(ua(this.fairwayLine,t.fairwayWidth+.42,10,o),d,(lt,xt,At,Ot,W)=>(W.setHex(ma(Math.floor(lt*.06),Math.floor(At*.06))>.5?R.fairwayDark:R.grassDark),W),.05);f.position.y=.008;const u=this.addGround(ua(this.fairwayLine,t.fairwayWidth,10,o),d,(lt,xt,At,Ot,W)=>{const ut=sM(this.fairwayLine,this.pathArc,lt,At),z=Math.floor(ut/7.5)%2===0;return W.setHex(z?R.fairway:R.fairwayDark),W.offsetHSL(0,0,Math.sin(lt*.3+At*.21)*.012),W},.035);u.position.y=.014;const p=this.groundMaterial(.88),_=this.groundMaterial(.93);this.addGround(pa(.86,1,t.green.r+3.1,t.green.r+3.1,64),_,(lt,xt,At,Ot,W)=>ji(R.grassDark,lt,At,W),.05).position.set(t.green.x,.004,t.green.z),this.addGround(Cs(t.green.r+1.55,t.green.r+1.55,64),_,(lt,xt,At,Ot,W)=>ji(R.fringe,lt,At,W),.05).position.set(t.green.x,.006,t.green.z);const v=this.addGround(Cs(t.green.r,t.green.r,64),p,(lt,xt,At,Ot,W)=>{const ut=Math.hypot(lt-t.green.x,At-t.green.z)/t.green.r;return W.setHex(ut<.45?R.green:R.greenDark),W.offsetHSL(0,0,(ma(Math.floor(lt*.8),Math.floor(At*.8))-.5)*.035),W},.045);v.position.set(t.green.x,.016,t.green.z),v.castShadow=!1;const w=this.material({color:16777215,transparent:!0,opacity:.26,roughness:.7,depthWrite:!1});[1.4,2.8,4.2].forEach(lt=>{if(lt>t.green.r-.4)return;const xt=this.track(new Kn(lt-.035,lt,64));xt.rotateX(-Math.PI/2);const At=new Kt(xt,w);At.position.set(t.green.x,.022,t.green.z),this.group.add(At)});const y=this.groundMaterial(1,!1);for(const lt of t.zones??[]){if(lt.kind!=="bunker")continue;const xt=this.addGround(pa(.9,1.1,lt.rx,lt.rz,44),y,(Ot,W,ut,z,q)=>(q.setHex(R.sandDark),q),.05);xt.position.set(lt.x,.026,lt.z),xt.castShadow=!0,this.addGround(Cs(lt.rx*.98,lt.rz*.98,44),y,(Ot,W,ut,z,q)=>(q.setHex(Math.sin(Ot*.9+ut*.6)>0?R.sand:R.sandLight),q),.05).position.set(lt.x,.021,lt.z)}const E=Ld(.14),T=this.material({color:E?16777215:Ov.water,map:E,roughness:.1,metalness:.32,transparent:!0,opacity:.94}),x=this.groundMaterial(1,!1),b=this.material({color:15398911,roughness:.5,transparent:!0,opacity:.55});for(const lt of r){const xt=this.track(new Te(lt.rx,lt.rx*.9,1,40,1,!0));xt.scale(1,1,lt.rz/lt.rx);const At=pn(xt,(ct,at,It,qt,te)=>(te.setHex(at>-.5?R.soilLight:R.soilDark),te),.07);this.geometries.push(At);const Ot=new Kt(At,x);Ot.position.set(lt.x,-.5,lt.z),Ot.receiveShadow=!0,this.group.add(Ot);const W=Cs(lt.rx*.995,lt.rz*.995,52),ut=new Kt(this.track(W),T);ut.position.set(lt.x,-.14,lt.z),this.group.add(ut),this.waterSurfaces.push(ut);const z=this.track(new Ci(1,.022,6,56));z.rotateX(-Math.PI/2),z.scale(lt.rx,1,lt.rz);const q=new Kt(z,b);q.position.set(lt.x,-.02,lt.z),this.group.add(q);for(let ct=0;ct<3;ct+=1){const at=this.track(new Kn(.92,1,40));at.rotateX(-Math.PI/2),at.scale(lt.rx,1,lt.rz);const It=this.material({color:14284543,transparent:!0,opacity:.22,roughness:.3,depthWrite:!1}),qt=new Kt(at,It);qt.position.set(lt.x,-.135,lt.z),qt.scale.setScalar(.4+ct*.22),this.group.add(qt),this.ripples.push({mesh:qt,phase:ct*2.1,base:.4+ct*.22})}const V=Dn(Math.round(lt.x*17+lt.z*31)+91);for(let ct=0;ct<7;ct+=1){const at=ct/7*Math.PI*2+V()*.4,It=lt.rx*(1.02+V()*.08),qt=lt.rz*(1.02+V()*.08),te=lt.x+Math.cos(at)*It,F=lt.z+Math.sin(at)*qt;this.contains(te,F)&&(ct%2===0?this.addProp(Nd(.9+V()*.4,ct+1),te,0,F,V()*3):this.addProp(zs(.5+V()*.25,ct+3),te,-.02,F,V()*3))}for(let ct=0;ct<3;ct+=1){const at=V()*Math.PI*2,It=V()*.6;this.addProp(Ud(.7+V()*.5),lt.x+Math.cos(at)*lt.rx*It,-.14,lt.z+Math.sin(at)*lt.rz*It,V()*3)}}const I=this.groundMaterial(.9,!1),C=Kh(Zh({x:t.tee[0],z:t.tee[1],rx:2.3,rz:1.8},32),[],.09);this.addGround(C,I,(lt,xt,At,Ot,W)=>Ot>.6?ji(R.fairwayDark,lt,At,W):(W.setHex(xt>-.05?R.grassDark:R.soil),W),.05).position.set(0,.02,0);const k=this.groundMaterial(.95,!1);this.addGround(pa(.95,1,2.34,1.84,40),k,(lt,xt,At,Ot,W)=>(W.setHex(R.stoneDark),W),.04).position.set(t.tee[0],.021,t.tee[1]);const D=this.groundMaterial(.7,!1);[-1,1].forEach(lt=>{const xt=new Te(.055,.07,.3,5),At=pn(xt,(q,V,ct,at,It)=>(It.setHex(V>.12?R.coral:R.cream),It),.04);this.geometries.push(At);const Ot=new Kt(At,D);Ot.position.set(t.tee[0]+lt,.18,t.tee[1]-.9),Ot.castShadow=!0,this.group.add(Ot);const W=new di(.075,8,6),ut=pn(W,(q,V,ct,at,It)=>(It.setHex(R.coral),It),.04);this.geometries.push(ut);const z=new Kt(ut,D);z.position.set(t.tee[0]+lt,.37,t.tee[1]-.9),z.castShadow=!0,this.group.add(z)});const X=this.material({color:1714724,roughness:.95}),J=new Kt(this.track(Cs(.19,.19,32)),X);J.position.set(this.cup.x,.022,this.cup.z),this.group.add(J);const Y=this.material({color:16249830,roughness:.5}),ht=this.track(new Ci(.2,.016,8,32));ht.rotateX(-Math.PI/2);const Z=new Kt(ht,Y);Z.position.set(this.cup.x,.026,this.cup.z),this.group.add(Z);const j=new De,st=this.material({color:16316658,roughness:.35,metalness:.4}),Dt=this.material({color:15909198,roughness:.3,metalness:.7}),Nt=new Kt(this.track(new Te(.02,.022,1.72,8)),st);Nt.position.y=.86,Nt.castShadow=!0,j.add(Nt);const Q=new Kt(this.track(new Te(.035,.035,.06,8)),Dt);Q.position.y=1.58,j.add(Q);const gt=new Kt(this.track(new di(.045,8,6)),Dt);gt.position.y=1.74,j.add(gt);const Lt=Iv(),Gt=this.material({color:Lt?16777215:16735352,map:Lt,roughness:.72,side:hn}),Mt=this.track(new Ri(.64,.4,10,4));Mt.translate(.32,0,0);const Ut=new Kt(Mt,Gt);Ut.position.set(0,1.44,0),Ut.castShadow=!0,j.add(Ut),this.flagCloth=Ut,this.flagClothBase=Mt.getAttribute("position").array.slice(),j.position.set(this.cup.x,0,this.cup.z),this.group.add(j);for(const lt of t.decor??[])this.buildDecor(lt);this.buildCourseDressing(),this.geometries.push(...Id(this.group))}buildDecor(t){const e=t.s??1,s=this.contains(t.x,t.z)?0:Ji,r=t.kind==="pine"?mo(e):t.kind==="rock"?zs(e,Math.round(t.x*13+t.z*7)):t.kind==="bush"?Xv(e):go(e);r.position.set(t.x,s,t.z),r.rotation.y=(t.x*7.3+t.z*3.1)%Math.PI,t.kind==="rock"&&(r.position.y=s+.02),this.group.add(r);const o=t.r??.5*e;o>.02&&this.obstacles.push({x:t.x,z:t.z,r:o})}buildCourseDressing(){const t=this.spec,e=Dn(1e3+t.index*137),n=t.fairwayWidth,s=(t.zones??[]).filter(u=>u.kind==="water"),r=(u,p)=>!s.some(_=>((u-_.x)/(_.rx*1.04))**2+((p-_.z)/(_.rz*1.04))**2<=1),o=t.index%2===0?1:-1,a=qh(this.fairwayLine,(n+2.3)*o).filter(u=>this.contains(u.x,u.z));if(a.length>6){const u=this.groundMaterial(.98,!1),p=this.addGround(ua(a,.85,3,r),u,(_,m,g,v,w)=>(w.setHex(Math.sin(_*1.1+g*.7)>0?R.sand:R.sandDark),w),.05);p.position.y=.02}const l=this.pathArc[this.pathArc.length-1];[.42,.76].forEach((u,p)=>{const _=l*u;let m=this.fairwayLine[0];for(let E=1;E<this.fairwayLine.length;E+=1)if(this.pathArc[E]>=_){m=this.fairwayLine[E];break}const g=qh(this.fairwayLine,(n+1.5)*o),v=g[Math.min(g.length-1,Math.round(u*g.length))],w=v?v.x:m.x,y=v?v.z:m.z;this.contains(w,y)&&this.group.add((()=>{const E=Yv(p===0?R.gold:R.teal,1);return E.position.set(w,0,y),E.rotation.y=e()*.4-.2,E})())});for(let u=0;u<26;u+=1){const p=e()*Math.PI*2,_=n+1.2+e()*(t.roughWidth-n-2.2),m=.06+e()*.9,g=Math.min(this.fairwayLine.length-1,Math.max(0,Math.round(m*(this.fairwayLine.length-1)))),v=this.fairwayLine[g],w=v.x+Math.cos(p)*_*.55,y=v.z+Math.sin(p)*_*.55;if(!this.contains(w,y)||da(this.fairwayLine,w,y)<n+.5)continue;const E=Bd(u+t.index*7);E.position.set(w,.005,y),E.rotation.y=e()*Math.PI,E.scale.setScalar(.8+e()*.6),this.group.add(E)}for(let u=4;u<this.islandPoly.length-4;u+=7){const p=this.islandPoly[u],_={x:p.x*.97,z:p.z*.97},m=_.x,g=_.z;if(!this.contains(m,g)||da(this.fairwayLine,m,g)<n+1.2)continue;const v=zs(.42+e()*.3,u);v.position.set(m,.02,g),v.rotation.y=e()*Math.PI,this.group.add(v)}const c=t.index%2===0?1:-1,h=Fd(1);if(h.position.set(t.tee[0]+7.6*c,0,t.tee[1]+3.4),h.rotation.y=c>0?-.4:.4,this.group.add(h),t.index!==0){const u=Ml(1);u.position.set(t.tee[0]-6.6*c,0,t.tee[1]+3.2),u.rotation.y=c>0?.5:-.5,this.group.add(u)}if(t.index===0){const u=qv(1);this.group.add(u),u.position.set(-9.4,0,-36.4),u.rotation.y=.5;const p=Qr(1);p.position.set(6.6,0,-20.5),p.rotation.y=-1.1,this.group.add(p);const _=Ml(1);_.position.set(-4.6,0,33.4),_.rotation.y=.3,this.group.add(_);const m=ha(6.5,1);m.position.set(-10.2,0,-8.5),m.rotation.y=.22,this.group.add(m)}else if(t.index===1){const u=(t.zones??[]).find(m=>m.kind==="water");if(u){const m=Zv(Math.max(6,u.rz*1.9));m.position.set(u.x,.02,u.z),m.rotation.y=0,this.group.add(m);const g=Qr(1);g.position.set(u.x+u.rx+2.4,0,u.z+1.2),g.rotation.y=-1.4,this.group.add(g)}const p=Od(1);p.position.set(9.6,0,16.5),p.rotation.y=.7,this.group.add(p);const _=ha(7,1);_.position.set(9.4,0,-18.5),_.rotation.y=-.3,this.group.add(_)}else{const u=$v(1.25);u.position.set(19,Ji,-46),u.rotation.y=-.35,this.group.add(u);const p=ha(7,1);p.position.set(-9.8,0,-30.5),p.rotation.y=.12,this.group.add(p);const _=Qr(1);_.position.set(8.2,0,20.5),_.rotation.y=.8,this.group.add(_)}const d=(t.tee[0]+t.green.x)/2,f=(t.tee[1]+t.green.z)/2;for(let u=0;u<44;u+=1){const p=e()*Math.PI*2,_=62+e()*34,m=d+Math.cos(p)*_,g=f+Math.sin(p)*_;if(this.contains(m,g))continue;const v=u%3===0?mo(1.7+e()*1.4):go(1.6+e()*1.3);v.position.set(m,Ji,g),v.rotation.y=e()*Math.PI*2,this.group.add(v)}for(let u=0;u<4;u+=1){const p=zd(2.6,1),_=1.9+u*.5,m=t.roughWidth+5.5,g=Math.cos(_)*m+t.green.x,v=Math.sin(_)*m+(t.tee[1]+t.cup[1])/2;this.contains(g,v)||(p.position.set(g,Ji,v),p.rotation.y=_+Math.PI/2,this.group.add(p))}}update(t){this.time+=t;const e=this.time;for(let n=0;n<this.waterSurfaces.length;n+=1){const s=this.waterSurfaces[n];s.position.y=-.14+Math.sin(e*1.5+n)*.008;const r=s.material;r.map&&(r.map.offset.x=e*.012%1,r.map.offset.y=e*.02%1)}for(const n of this.ripples){const s=(e*.32+n.phase)%1;n.mesh.scale.setScalar(n.base*(.9+s*.35));const r=n.mesh.material;r.opacity=.28*(1-s)}if(this.flagCloth&&this.flagClothBase){const n=this.flagCloth.geometry.getAttribute("position"),s=n.array;for(let r=0;r<s.length;r+=3){const o=this.flagClothBase[r],a=this.flagClothBase[r+1],l=Math.sin(o*7+e*4.2)*.05*(o/.64);s[r+2]=this.flagClothBase[r+2]+l,s[r+1]=a+Math.sin(o*5+e*3.1)*.012*(o/.64)}n.needsUpdate=!0,this.flagCloth.geometry.computeVertexNormals()}}dispose(){this.scene.remove(this.group),this.geometries.forEach(t=>t.dispose()),this.geometries.length=0,this.materials.forEach(t=>t.dispose()),this.materials.length=0,this.textures.forEach(t=>t.dispose()),this.textures.length=0,this.waterSurfaces.length=0,this.ripples.length=0,this.flagCloth=null,this.flagClothBase=null,this.group.clear()}}class oM{constructor(t=.34,e=10){O(this,"yaw",0);O(this,"pitch",.34);O(this,"distance",10);O(this,"targetYaw",0);O(this,"targetPitch",.34);O(this,"targetDistance",10);O(this,"smoothDistance",10);O(this,"smoothPitch",.34);O(this,"smoothPos",new P);O(this,"smoothLook",new P);O(this,"initialized",!1);this.pitch=t,this.targetPitch=t,this.distance=e,this.targetDistance=e,this.smoothDistance=e,this.smoothPitch=t}setAim(t,e=!1){this.targetYaw=t,e&&(this.yaw=t)}setDistance(t){this.targetDistance=t}setPitch(t){this.targetPitch=Jr.clamp(t,.08,1.4)}nudgePitch(t){this.setPitch(this.targetPitch+t)}orbitBy(t,e){this.yaw+=-t*.005,this.targetYaw=this.yaw,this.nudgePitch(e*.003)}snap(t,e){this.yaw=this.targetYaw,this.smoothPitch=this.targetPitch,this.smoothDistance=this.targetDistance,this.initialized=!1,this.update(.016,t,e??null,!0)}update(t,e,n,s=!1,r=0){let o=this.targetYaw-this.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this.yaw+=o*(s?1:1-Math.exp(-6*t));const a=s?1:1-Math.exp(-4*t);this.smoothDistance+=(this.targetDistance-this.smoothDistance)*a,this.smoothPitch+=(this.targetPitch-this.smoothPitch)*a;const l=this.smoothDistance,c=l*Math.cos(this.smoothPitch),h=l*Math.sin(this.smoothPitch),d=Math.sin(this.yaw),f=-Math.cos(this.yaw),u=e.x-d*c,p=e.y+h,_=e.z-f*c,m=e.x+d*r,g=e.y+.25+r*.06,v=e.z+f*r;if(!this.initialized||s)this.smoothPos.set(u,p,_),this.smoothLook.set(m,g,v),this.initialized=!0;else{const w=1-Math.exp(-7*t);this.smoothPos.x+=(u-this.smoothPos.x)*w,this.smoothPos.y+=(p-this.smoothPos.y)*w,this.smoothPos.z+=(_-this.smoothPos.z)*w;const y=1-Math.exp(-10*t);this.smoothLook.x+=(m-this.smoothLook.x)*y,this.smoothLook.y+=(g-this.smoothLook.y)*y,this.smoothLook.z+=(v-this.smoothLook.z)*y}n&&(n.position.copy(this.smoothPos),n.lookAt(this.smoothLook))}}class aM{constructor(t){O(this,"scene");O(this,"bursts",[]);O(this,"emojis",[]);O(this,"rings",[]);O(this,"emojiCache",new Map);O(this,"trail");O(this,"trailPositions");O(this,"trailColors");O(this,"trailCount");O(this,"trailFill",0);this.scene=t,this.trailCount=60,this.trailPositions=new Float32Array(this.trailCount*3),this.trailColors=new Float32Array(this.trailCount*3);const e=new Pe;e.setAttribute("position",new sn(this.trailPositions,3)),e.setAttribute("color",new sn(this.trailColors,3));const n=new ed({vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Wn});this.trail=new Xp(e,n),this.trail.frustumCulled=!1,this.trail.visible=!1,this.scene.add(this.trail)}trailPush(t,e=new Zt(16773560)){const n=(this.trailCount-1)*3;this.trailPositions.copyWithin(0,3,n+3),this.trailColors.copyWithin(0,3,n+3),this.trailPositions[n]=t.x,this.trailPositions[n+1]=t.y,this.trailPositions[n+2]=t.z,this.trailColors[n]=e.r,this.trailColors[n+1]=e.g,this.trailColors[n+2]=e.b;for(let r=0;r<this.trailCount-1;r+=1){const o=1-r/(this.trailCount-1),a=Math.pow(o,1.7)*.85;this.trailColors[r*3]*=.86+.14*a,this.trailColors[r*3+1]*=.86+.14*a,this.trailColors[r*3+2]*=.86+.14*a}this.trailFill=Math.min(this.trailCount,this.trailFill+1),this.trail.visible=!0;const s=this.trail.geometry;s.getAttribute("position").needsUpdate=!0,s.getAttribute("color").needsUpdate=!0}trailFade(t){if(!this.trail.visible)return;let e=0;for(let s=0;s<this.trailCount;s+=1){const r=Math.max(0,1-t*1.15);this.trailColors[s*3]*=r,this.trailColors[s*3+1]*=r,this.trailColors[s*3+2]*=r,this.trailColors[s*3]>.01&&(e+=1)}const n=this.trail.geometry.getAttribute("color");n.needsUpdate=!0,e===0&&this.clearTrail()}clearTrail(){this.trail.visible=!1,this.trailFill=0,this.trailColors.fill(0),this.trailPositions.fill(0);const t=this.trail.geometry.getAttribute("color");t.needsUpdate=!0}spawnBurst(t,e,n,s,r,o,a,l,c=.12,h=!1){const d=new Float32Array(n*3),f=new Float32Array(n*3),u=new Float32Array(n*3),p=new Zt;for(let v=0;v<n;v+=1){const w=Math.random()*Math.PI*2,y=Math.random()*s;d[v*3]=t.x+(Math.random()-.5)*c,d[v*3+1]=t.y+Math.random()*c*.6,d[v*3+2]=t.z+(Math.random()-.5)*c,u[v*3]=Math.cos(w)*y,u[v*3+1]=r*(.4+Math.random()*.9),u[v*3+2]=Math.sin(w)*y,p.setHex(e[Math.floor(Math.random()*e.length)]),f[v*3]=p.r,f[v*3+1]=p.g,f[v*3+2]=p.b}const _=new Pe;_.setAttribute("position",new sn(d,3)),_.setAttribute("color",new sn(f,3));const m=new nd({size:o,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,sizeAttenuation:!0,blending:h?Wn:os}),g=new Yp(_,m);g.frustumCulled=!1,this.scene.add(g),this.bursts.push({points:g,velocities:u,material:m,life:a,maxLife:a,gravity:l})}confetti(t,e=!1){const n=[16743001,16763981,5032432,10151534,12160255,16777215,16748465];this.spawnBurst(t,n,e?180:100,e?4.2:3,e?6.4:4.6,.13,2.6,7.2,.2),this.ring(t,.35,e?6.5:4.5,.7,e?16771496:16777215)}spark(t,e){e==="perfect"?(this.spawnBurst(t,[16774856,16769154,16777215,16765286],46,2.6,3.4,.09,.75,3.5,.1,!0),this.ring(t,.25,2.4,.5,16773304)):e==="good"?this.spawnBurst(t,[16777215,14480073],22,1.6,2.2,.07,.5,4,.08):this.spawnBurst(t,[13624496,10142842],16,1.2,1.4,.07,.5,5,.08)}divot(t,e){if(e==="bunker"){this.spawnBurst(t,[15983546,14929825,13482120],26,1.6,2.4,.11,.9,6.5,.12);return}if(e==="water"){this.splash(t);return}const n=e==="green"||e==="fringe"?[11989134,9361514,14678216]:[10147959,7780693,13822384];this.spawnBurst(t,n,22,1.3,1.9,.09,.7,6,.12)}splash(t){const e=[12578815,16777215,7327986];this.spawnBurst(t,e,70,2.2,3.8,.1,1.05,9,.16),this.ring(t,.2,2.2,.7,14219007)}tap(t){this.spawnBurst(t,[16777215,14480073],12,.8,1.1,.06,.5,4,.08)}ring(t,e,n,s,r=16777215){const o=new Kn(.9,1,40);o.rotateX(-Math.PI/2);const a=new $n({color:r,transparent:!0,opacity:.85,side:hn,depthWrite:!1,blending:Wn}),l=new Kt(o,a);l.position.set(t.x,Math.max(.03,t.y-.06),t.z),l.scale.setScalar(e),this.scene.add(l),this.rings.push({mesh:l,material:a,life:s,maxLife:s,from:e,to:n})}emojiTexture(t){const e=this.emojiCache.get(t);if(e)return e;const n=document.createElement("canvas");n.width=128,n.height=128;const s=n.getContext("2d");s&&(s.clearRect(0,0,128,128),s.font='96px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(t,64,72));const r=new ms(n);return r.colorSpace=Oe,this.emojiCache.set(t,r),r}emoji(t,e){if(typeof document>"u")return;const n=new Ni({map:this.emojiTexture(e),transparent:!0,depthWrite:!1}),s=new ps(n);s.scale.set(.62,.62,1),s.position.copy(t).add(new P(0,.55,0)),this.scene.add(s),this.emojis.push({sprite:s,life:1.9,maxLife:1.9,drift:(Math.random()-.5)*.35})}update(t){for(let e=this.bursts.length-1;e>=0;e-=1){const n=this.bursts[e];if(n.life-=t,n.life<=0){this.scene.remove(n.points),n.points.geometry.dispose(),n.material.dispose(),this.bursts.splice(e,1);continue}const s=n.points.geometry.getAttribute("position"),r=s.array,o=Math.max(0,1-t*1.1);for(let a=0;a<r.length;a+=3)n.velocities[a+1]-=n.gravity*t,n.velocities[a]*=o,n.velocities[a+2]*=o,r[a]+=n.velocities[a]*t,r[a+1]+=n.velocities[a+1]*t,r[a+2]+=n.velocities[a+2]*t;s.needsUpdate=!0,n.material.opacity=Math.min(1,n.life/(n.maxLife*.6))}for(let e=this.rings.length-1;e>=0;e-=1){const n=this.rings[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.material.dispose(),this.rings.splice(e,1);continue}const s=1-n.life/n.maxLife,r=n.from+(n.to-n.from)*s;n.mesh.scale.setScalar(r),n.material.opacity=.85*(1-s)}for(let e=this.emojis.length-1;e>=0;e-=1){const n=this.emojis[e];if(n.life-=t,n.life<=0){this.scene.remove(n.sprite),n.sprite.material.dispose(),this.emojis.splice(e,1);continue}const s=1-n.life/n.maxLife;n.sprite.position.y+=t*.7,n.sprite.position.x+=t*n.drift,n.sprite.material.opacity=Math.min(1,(1-s)*1.8);const r=.62+Math.sin(s*Math.PI)*.12;n.sprite.scale.set(r,r,1)}this.trailFade(t)}clear(){this.bursts.forEach(t=>{this.scene.remove(t.points),t.points.geometry.dispose(),t.material.dispose()}),this.bursts.length=0,this.rings.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.material.dispose()}),this.rings.length=0,this.emojis.forEach(t=>{this.scene.remove(t.sprite),t.sprite.material.dispose()}),this.emojis.length=0,this.clearTrail()}}const ks=16768952,ga=15318160,lM=2372152,xa=12757885,jh=10521184;function Gd(i,t,e,n,s,r){const o=Math.max(0,Math.min(r,n/2,s/2));i.beginPath(),i.moveTo(t+o,e),i.lineTo(t+n-o,e),i.quadraticCurveTo(t+n,e,t+n,e+o),i.lineTo(t+n,e+s-o),i.quadraticCurveTo(t+n,e+s,t+n-o,e+s),i.lineTo(t+o,e+s),i.quadraticCurveTo(t,e+s,t,e+s-o),i.lineTo(t,e+o),i.quadraticCurveTo(t,e,t+o,e),i.closePath()}function yl(i,t,e={}){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=e.canvasWidth??320,n.height=e.canvasHeight??96;const s=n.getContext("2d");if(!s)return null;const r=e.fontSize??40,o=i.length>10?`${i.slice(0,10)}…`:i;s.clearRect(0,0,n.width,n.height),s.font=`800 ${r}px "Pretendard", -apple-system, system-ui, sans-serif`;const a=s.measureText(o).width,l=!!t,c=Math.min(n.width-8,a+r*(l?1.75:.9)),h=r*1.5,d=(n.width-c)/2,f=(n.height-h)/2;s.fillStyle=e.bg??"rgba(20, 44, 52, 0.82)",Gd(s,d,f,c,h,h/2),s.fill();let u=d+r*.5;l&&(s.fillStyle=t,s.beginPath(),s.arc(d+h*.46,n.height/2,h*.17,0,Math.PI*2),s.fill(),u=d+h*.78+r*.1),s.fillStyle="#ffffff",s.textAlign="left",s.textBaseline="middle",s.fillText(o,u,n.height/2+1);const p=new ms(n);p.colorSpace=Oe;const _=new Ni({map:p,transparent:!0,depthWrite:!1}),m=new ps(_),g=e.scale??[1.15,.345];return m.scale.set(g[0],g[1],1),m.renderOrder=3,m}const Qh=new Map;function cM(i){if(typeof document>"u")return null;let t=Qh.get(i);if(!t){const s=document.createElement("canvas");s.width=192,s.height=192;const r=s.getContext("2d");if(!r)return null;r.clearRect(0,0,192,192),r.fillStyle="rgba(255, 255, 255, 0.97)",r.strokeStyle="rgba(22, 50, 59, 0.16)",r.lineWidth=4,Gd(r,16,8,160,138,46),r.fill(),r.stroke(),r.beginPath(),r.moveTo(80,141),r.lineTo(96,178),r.lineTo(114,141),r.closePath(),r.fillStyle="rgba(255, 255, 255, 0.97)",r.fill(),r.font='92px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(i,96,80),t=new ms(s),t.colorSpace=Oe,Qh.set(i,t)}const e=new Ni({map:t,transparent:!0,depthWrite:!1}),n=new ps(e);return n.scale.set(.72,.72,1),n.renderOrder=4,n}class to{constructor(t){O(this,"group",new De);O(this,"root",new De);O(this,"armL",new De);O(this,"armR",new De);O(this,"footL");O(this,"footR");O(this,"clubHeads");O(this,"ring");O(this,"holdsClub");O(this,"label",null);O(this,"disposables",[]);O(this,"phase",Math.random()*Math.PI*2);O(this,"clock",Math.random()*10);O(this,"addressing",!1);O(this,"swingTime",-1);O(this,"swingDuration",.92);const e=new Zt(t.color),n=e.getHex(),s=n;this.root.position.y=0,this.group.add(this.root);const r=de(`golfer-body-${n.toString(16)}`,hM(s));r.position.y=0,this.root.add(r);const o=uM();if(this.footL=de("golfer-shoe",o),this.footL.position.set(-.115,.075,.02),this.footR=de("golfer-shoe",o),this.footR.position.set(.115,.075,.02),this.root.add(this.footL,this.footR),this.armL.position.set(-.245,1.45,0),this.armR.position.set(.245,1.45,0),this.armL.rotation.z=.2,this.armR.rotation.z=-.2,this.armL.add(de(`golfer-arm-left-${n.toString(16)}`,tu(s,!0))),this.armR.add(de(`golfer-arm-right-${n.toString(16)}`,tu(s,!1))),this.root.add(this.armL,this.armR),this.clubHeads={driver:de("golfer-club-head-driver",_a("driver")),iron:de("golfer-club-head-iron",_a("iron")),putter:de("golfer-club-head-putter",_a("putter"))},t.club){this.holdsClub=!0;const a=new De;a.add(de("golfer-club",dM())),Object.entries(this.clubHeads).forEach(([l,c])=>{c.visible=l===(t.clubType??"iron"),a.add(c)}),this.armR.add(a),this.armR.rotation.x=-.3}else this.holdsClub=!1;if(t.name&&this.setName(t.name,t.color),t.glow){const a=this.track(new Xe({color:e,emissive:e,emissiveIntensity:1.1,transparent:!0,opacity:.9,roughness:.4})),l=this.track(new Ci(.46,.03,8,34));this.ring=new Kt(l,a),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.02,this.group.add(this.ring)}else this.ring=null}track(t){return this.disposables.push(t),t}setName(t,e){if(this.label){this.group.remove(this.label);const s=this.label.material;s.map?.dispose(),s.dispose(),this.label=null}const n=yl(t,e);n&&(n.position.set(0,2.12,0),this.group.add(n),this.label=n)}setVisible(t){this.group.visible=t}setClubLook(t){this.holdsClub&&Object.entries(this.clubHeads).forEach(([e,n])=>{n.visible=e===t})}setAddressing(t){this.addressing=t}playSwing(t=.92){this.swingDuration=Math.max(.35,t),this.swingTime=0}get isSwinging(){return this.swingTime>=0}swingPose(t){const e=[{t:0,arm:-.3,torso:0,lean:0},{t:.42,arm:-1.85,torso:-.36,lean:-.06},{t:.62,arm:.5,torso:.18,lean:.04},{t:.78,arm:1.35,torso:.34,lean:.08},{t:1,arm:-.3,torso:0,lean:0}];for(let n=0;n<e.length-1;n+=1){const s=e[n],r=e[n+1];if(t<=r.t){const o=r.t===s.t?0:(t-s.t)/(r.t-s.t),a=o*o*(3-2*o);return{arm:s.arm+(r.arm-s.arm)*a,torso:s.torso+(r.torso-s.torso)*a,lean:s.lean+(r.lean-s.lean)*a}}}return{arm:-.3,torso:0,lean:0}}update(t,e){if(this.clock+=t,this.swingTime>=0){this.swingTime+=t;const n=Math.min(1,this.swingTime/this.swingDuration),s=this.swingPose(n);this.armR.rotation.x=s.arm,this.armL.rotation.x=s.arm*.82,this.root.rotation.y=s.torso,this.root.rotation.z=s.lean,this.root.position.y=-s.lean*.12,this.footL.position.z=.02+s.lean*.2,this.footR.position.z=.02-s.lean*.2,this.footL.position.y=.075,this.footR.position.y=.075,n>=1&&(this.swingTime=-1,this.root.rotation.y=0,this.root.rotation.z=0,this.root.position.y=0,this.armR.rotation.x=this.holdsClub?-.3:0)}else if(this.addressing&&this.holdsClub){const n=Math.sin(this.clock*1.6)*.02;this.armR.rotation.x=-.46+n,this.armL.rotation.x=-.32+n,this.root.rotation.y=0}else{e&&(this.phase+=t*9.6);const n=e?Math.sin(this.phase):0;this.root.position.y=e?Math.abs(Math.sin(this.phase))*.05:Math.sin(this.clock*2.1)*.008,this.armL.rotation.x=n*.5,this.holdsClub?this.armR.rotation.x=-.3:this.armR.rotation.x=-n*.4,this.footL.position.z=.02+n*.085,this.footR.position.z=.02-n*.085,this.footL.position.y=.075+Math.max(0,n)*.04,this.footR.position.y=.075+Math.max(0,-n)*.04}if(this.ring){const n=1+Math.sin(this.clock*2.6)*.07;this.ring.scale.set(n,n,1);const s=this.ring.material;s.emissiveIntensity=.9+Math.sin(this.clock*2.6)*.35}}dispose(){if(this.label){const t=this.label.material;t.map?.dispose(),t.dispose(),this.label=null}this.disposables.forEach(t=>t.dispose()),this.disposables.length=0,this.group.clear()}}function hM(i){const t=[];return[-.125,.125].forEach(e=>{t.push({geo:Vt(.086,.098,.46,6),color:xa,pos:[e,.71,0],jitter:.05,shade:.2}),t.push({geo:Vt(.074,.086,.4,6),color:xa,pos:[e,.32,0],jitter:.05,shade:.2}),t.push({geo:Vt(.09,.09,.07,6),color:jh,pos:[e,.15,0],jitter:.04}),t.push({geo:Vt(.092,.092,.03,6),color:jh,pos:[e,.52,0],jitter:.03})}),t.push({geo:nt(.32,.2,.22),color:xa,pos:[0,.95,0],jitter:.05}),t.push({geo:nt(.34,.065,.24),color:2826008,pos:[0,1.035,0],jitter:.04}),t.push({geo:nt(.08,.07,.02),color:R.gold,pos:[0,1.035,.125],bucket:"metal",jitter:.03}),t.push({geo:Vt(.19,.168,.46,6),color:i,pos:[0,1.28,0],rot:[0,Math.PI/6,0],jitter:.06,shade:.2}),t.push({geo:Vt(.174,.176,.05,6),color:i,pos:[0,1.06,0],rot:[0,Math.PI/6,0],jitter:.03}),t.push({geo:nt(.045,.3,.03),color:16777215,pos:[0,1.3,.175],jitter:.02}),[1.18,1.28,1.38].forEach(e=>{t.push({geo:_e(.018),color:R.cream,pos:[.025,e,.19],jitter:.02})}),t.push({geo:nt(.1,.1,.02),color:i,pos:[-.1,1.32,.172],jitter:.03}),t.push({geo:Vt(.098,.104,.11,6),color:i,pos:[-.215,1.45,0],jitter:.05}),t.push({geo:Vt(.098,.104,.11,6),color:i,pos:[.215,1.45,0],jitter:.05}),t.push({geo:Vt(.092,.112,.07,6),color:16777215,pos:[0,1.53,0],rot:[0,Math.PI/6,0],jitter:.03}),t.push({geo:nt(.11,.05,.1),color:16777215,pos:[0,1.52,.1],rot:[.32,0,0],jitter:.03}),t.push({geo:Vt(.062,.072,.1,6),color:ga,pos:[0,1.57,0],jitter:.03}),t.push({geo:nt(.23,.25,.23),color:ks,pos:[0,1.72,0],jitter:.04,shade:.12}),t.push({geo:nt(.2,.06,.2),color:ga,pos:[0,1.6,.005],jitter:.03}),t.push({geo:nt(.055,.06,.05),color:ks,pos:[0,1.69,.125],jitter:.03}),[-.12,.12].forEach(e=>{t.push({geo:nt(.03,.08,.06),color:ga,pos:[e,1.71,0],jitter:.03}),t.push({geo:nt(.04,.05,.02),color:lM,pos:[e*.42,1.745,.118],jitter:.02}),t.push({geo:nt(.06,.016,.025),color:3877408,pos:[e*.42,1.785,.118],jitter:.02})}),t.push({geo:nt(.055,.012,.02),color:9068370,pos:[0,1.625,.118],jitter:.02}),t.push({geo:nt(.235,.14,.07),color:4863271,pos:[0,1.72,-.095],jitter:.05}),t.push({geo:Vt(.126,.132,.1,6),color:16777215,pos:[0,1.88,-.01],rot:[0,Math.PI/6,0],jitter:.04}),t.push({geo:Vt(.136,.138,.035,6),color:i,pos:[0,1.828,-.01],rot:[0,Math.PI/6,0],jitter:.03}),t.push({geo:nt(.27,.028,.16),color:16777215,pos:[0,1.822,.145],rot:[-.13,0,0],jitter:.03}),t.push({geo:_e(.026),color:i,pos:[0,1.94,-.01],jitter:.02}),t}function uM(){return[{geo:nt(.15,.05,.34),color:R.creamDark,pos:[0,-.05,.02],jitter:.03},{geo:nt(.14,.1,.27),color:16777215,pos:[0,0,-.01],jitter:.04},{geo:nt(.13,.075,.11),color:16777215,pos:[0,-.02,.15],jitter:.04},{geo:nt(.1,.02,.08),color:R.metalDark,pos:[0,.05,.07],jitter:.02},{geo:Vt(.07,.076,.06,6),color:R.cream,pos:[0,.075,-.02],jitter:.03}]}function tu(i,t){return[{geo:Vt(.072,.082,.22,6),color:i,pos:[0,-.11,0],jitter:.05,shade:.18},{geo:Vt(.084,.084,.04,6),color:16777215,pos:[0,-.235,0],jitter:.03},{geo:Vt(.05,.058,.18,6),color:ks,pos:[0,-.34,0],jitter:.04},{geo:Vt(.045,.051,.17,6),color:ks,pos:[0,-.51,0],jitter:.04},{geo:Vt(.055,.055,.03,6),color:16777215,pos:[0,-.595,0],jitter:.02},{geo:nt(.075,.1,.085),color:t?R.cream:ks,pos:[0,-.66,.01],jitter:.03}]}function dM(){return[{geo:Vt(.019,.019,.17,6),color:2830648,pos:[0,-.62,.02],rot:[.1,0,0],jitter:.03},{geo:Vt(.013,.016,.62,6),color:R.metal,pos:[0,-.99,.13],rot:[.24,0,0],bucket:"metal",jitter:.03},{geo:Vt(.017,.02,.06,6),color:R.metalDark,pos:[0,-1.25,.21],rot:[.24,0,0],bucket:"metal",jitter:.03}]}function _a(i){return i==="driver"?[{geo:nt(.19,.11,.15),color:3819090,pos:[0,-1.29,.245],rot:[.2,.1,0],jitter:.05},{geo:nt(.2,.03,.15),color:R.metal,pos:[0,-1.34,.245],rot:[.2,.1,0],bucket:"metal",jitter:.03},{geo:nt(.06,.04,.09),color:R.coral,pos:[.09,-1.275,.21],jitter:.03}]:i==="putter"?[{geo:nt(.2,.05,.1),color:3819090,pos:[0,-1.295,.225],rot:[.1,0,0],jitter:.04},{geo:nt(.16,.015,.09),color:R.cream,pos:[0,-1.32,.225],jitter:.03},{geo:nt(.03,.1,.03),color:R.metalDark,pos:[0,-1.26,.2],bucket:"metal",jitter:.02}]:[{geo:nt(.13,.1,.03),color:R.metal,pos:[0,-1.295,.225],rot:[.28,0,0],bucket:"metal",jitter:.03},{geo:nt(.11,.04,.05),color:R.metalDark,pos:[0,-1.35,.235],rot:[.28,0,0],bucket:"metal",jitter:.03},{geo:_e(.03),color:R.metalDark,pos:[0,-1.25,.21],bucket:"metal",jitter:.02}]}const Ve=.115,fM=.16,eu=.62,pM=.0042,nu={x:.35,z:-.22},En=.18,mM=5,gM=1.25,xM=1,bi=[{name:"코랄",hex:"#ff7a59"},{name:"라임",hex:"#9ae66e"},{name:"스카이",hex:"#4cc9f0"},{name:"바이올렛",hex:"#b98cff"},{name:"망고",hex:"#ffcc4d"},{name:"로즈",hex:"#ff8fb1"}],iu=["버디헌터","원온이","핑크공","싱커","그린킬러","파이어볼","털보골퍼","이븐파","캐디","홀인원"],_M=["👏","🔥","⛳","😂"],vM=["👋","⛳","🔥","👏","😂","🎉"];function Ql(){const i=iu[Math.floor(Math.random()*iu.length)],t=Math.floor(Math.random()*90)+10;return`${i}${t}`}const yi={tee:{height:0,friction:6.4,restitution:.3,keep:.56},fairway:{height:0,friction:6.6,restitution:.3,keep:.55},fringe:{height:.005,friction:2.7,restitution:.26,keep:.7},green:{height:.01,friction:1.55,restitution:.22,keep:.72},rough:{height:0,friction:11,restitution:.18,keep:.42},bunker:{height:.005,friction:18,restitution:.05,keep:.28},water:{height:-.14,friction:6,restitution:.05,keep:.3},out:{height:-.4,friction:6,restitution:.1,keep:.4}};class Hd{constructor(){O(this,"x",0);O(this,"y",Ve);O(this,"z",0);O(this,"vx",0);O(this,"vy",0);O(this,"vz",0);O(this,"airborne",!1);O(this,"rolling",!1);O(this,"stopped",!0);O(this,"surface","fairway");O(this,"elapsed",0);O(this,"curveAccel",0);O(this,"rightX",1);O(this,"rightZ",0);O(this,"restTimer",0);O(this,"hazard",!1)}launch(t,e="fairway"){const n=t.loft*Math.PI/180,s=Math.cos(n),r=Math.sin(n),o=Math.sin(t.yaw),a=-Math.cos(t.yaw);this.vx=o*t.speed*s,this.vz=a*t.speed*s,this.vy=t.speed*r,this.curveAccel=(t.curve??0)*6.2,this.rightX=Math.cos(t.yaw),this.rightZ=Math.sin(t.yaw),this.airborne=n>.001,this.rolling=!this.airborne,this.stopped=!1,this.elapsed=0,this.restTimer=0,this.hazard=!1,this.surface=e,this.airborne&&(this.y=Math.max(this.y,yi[e].height+Ve+.002))}launchRoll(t,e,n="green"){this.vx=Math.sin(e)*t,this.vz=-Math.cos(e)*t,this.vy=0,this.curveAccel=0,this.airborne=!1,this.rolling=!0,this.stopped=!1,this.elapsed=0,this.restTimer=0,this.hazard=!1,this.surface=n,this.y=yi[n].height+Ve}get speed(){return Math.hypot(this.vx,this.vy,this.vz)}get horizontalSpeed(){return Math.hypot(this.vx,this.vz)}step(t,e){const n=[];return this.stopped||t<=0||(this.elapsed+=t,this.airborne?this.stepAir(t,e,n):this.rolling&&this.stepRoll(t,e,n)),n}stepAir(t,e,n){const s=pM*this.speed,r=this.curveAccel*Math.exp(-this.elapsed/1.15);if(this.vx+=(-this.vx*s+nu.x+this.rightX*r)*t,this.vy+=(-9.81-this.vy*s)*t,this.vz+=(-this.vz*s+nu.z+this.rightZ*r)*t,this.x,this.y,this.z,this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t,e.obstacles&&this.y<2.4)for(const l of e.obstacles){const c=this.x-l.x,h=this.z-l.z,d=Math.hypot(c,h);if(d>1e-4&&d<l.r+Ve){const f=c/d,u=h/d;this.x=l.x+f*(l.r+Ve),this.z=l.z+u*(l.r+Ve);const p=this.vx*f+this.vz*u;this.vx=(this.vx-2*p*f)*.45,this.vz=(this.vz-2*p*u)*.45,this.vy*=.7,n.push({type:"obstacle",x:this.x,y:this.y,z:this.z,strength:Math.min(1,Math.hypot(this.vx,this.vz)/20)});break}}const o=e.surfaceAt(this.x,this.z),a=yi[o.kind].height+Ve;if(o.kind==="water"){const l=yi.water.height+Ve*.5;if(this.y<=l){this.x=this.x,this.y=l,this.vx=this.vx*.2,this.vz=this.vz*.2,this.vy=0,this.stopped=!0,this.airborne=!1,this.surface="water",this.hazard=!0,n.push({type:"water",x:this.x,y:this.y,z:this.z});return}}if(this.y<=a&&this.vy<=0){const l=yi[o.kind];if(this.y=a,this.surface=o.kind,o.kind==="out"){this.stopped=!0,this.airborne=!1,n.push({type:"out",x:this.x,y:this.y,z:this.z});return}const c=Math.abs(this.vy),h=c/Math.max(1.2,this.horizontalSpeed),d=Math.min(.5,h*.55);this.vy=c*l.restitution,this.vx*=l.keep*(1-d),this.vz*=l.keep*(1-d);const f=this.vy>1.05;n.push(f?{type:"bounce",x:this.x,y:this.y,z:this.z,surface:o.kind,strength:Math.min(1,c/9)}:{type:"land",x:this.x,y:this.y,z:this.z,surface:o.kind,strength:Math.min(1,c/9)}),this.airborne=!1,this.rolling=!0,this.vy=0,this.horizontalSpeed<.12&&this.finish(n)}}stepRoll(t,e,n){const s=e.surfaceAt(this.x,this.z);this.surface=s.kind;const r=yi[s.kind];if(s.kind==="water"){this.stopped=!0,this.rolling=!1,this.hazard=!0,this.y=yi.water.height+Ve*.5,n.push({type:"water",x:this.x,y:this.y,z:this.z});return}if(s.kind==="out"){this.stopped=!0,this.rolling=!1,n.push({type:"out",x:this.x,y:this.y,z:this.z});return}if(this.y=r.height+Ve,e.cup){const a=e.cup.x-this.x,l=e.cup.z-this.z,c=Math.hypot(a,l),h=this.horizontalSpeed;if(c<eu&&c>1e-4&&h<3.6){const d=7.2*(1-c/eu);this.vx+=a/c*d*t,this.vz+=l/c*d*t}if(c<fM&&h<2.4){this.stopped=!0,this.rolling=!1,this.vx=0,this.vz=0,n.push({type:"cup",x:this.x,y:this.y,z:this.z});return}}if(e.obstacles)for(const a of e.obstacles){const l=this.x-a.x,c=this.z-a.z,h=Math.hypot(l,c);if(h>1e-4&&h<a.r+Ve){const d=l/h,f=c/h;this.x=a.x+d*(a.r+Ve),this.z=a.z+f*(a.r+Ve);const u=this.vx*d+this.vz*f;this.vx=(this.vx-2*u*d)*.42,this.vz=(this.vz-2*u*f)*.42,n.push({type:"obstacle",x:this.x,y:this.y,z:this.z,strength:Math.min(1,this.horizontalSpeed/18)});break}}const o=this.horizontalSpeed;if(o>1e-4){const a=r.friction*t,c=Math.max(0,o-a)/o;this.vx*=c,this.vz*=c}this.x+=this.vx*t,this.z+=this.vz*t,this.horizontalSpeed<.16?(this.restTimer+=t,this.restTimer>.18&&this.finish(n)):this.restTimer=0}finish(t){this.stopped=!0,this.rolling=!1,this.airborne=!1,this.vx=0,this.vz=0,this.vy=0,t.push({type:"stop",x:this.x,y:this.y,z:this.z,surface:this.surface})}get inHazard(){return this.hazard}}function kr(i,t,e,n={}){const s=n.maxSeconds??7,r=new Hd;r.x=e.x,r.y=e.y,r.z=e.z,r.surface=e.surface,n.rolling?r.launchRoll(n.speed??i.speed,i.yaw,e.surface):r.launch(i,e.surface);const o=[{x:r.x,y:r.y,z:r.z}];let a=null,l=!1,c=!1,h=!1;const d=1/60;let f=0,u=0;for(;f<s&&!r.stopped;){const p=r.step(d,t);f+=d,u+=d,u>=.05&&(u=0,o.push({x:r.x,y:r.y,z:r.z}));for(const _ of p)_.type==="land"||_.type==="bounce"?a||(a={x:_.x,z:_.z}):_.type==="cup"?l=!0:_.type==="water"?c=!0:_.type==="out"&&(h=!0)}return o.push({x:r.x,y:r.y,z:r.z}),{points:o,landing:a,rest:r.stopped?{x:r.x,z:r.z}:null,restSurface:r.surface,holed:l,water:c,out:h}}const Sl=[{id:"1W",code:"1W",name:"드라이버",short:"드라이버",loft:12,speed:35,carry:44.3,total:58.4,apex:2.6,note:"가장 멀리 · 낮은 탄도 · 긴 런",roll:!1},{id:"3W",code:"3W",name:"우드",short:"우드",loft:17,speed:28,carry:39.9,total:47.8,apex:3.3,note:"페어웨이 우드 · 중간 탄도",roll:!1},{id:"5I",code:"5I",name:"5번 아이언",short:"아이언",loft:25,speed:21.9,carry:34.1,total:37.7,apex:4.2,note:"긴 아이언 · 낮은 런",roll:!1},{id:"7I",code:"7I",name:"7번 아이언",short:"아이언",loft:33,speed:18,carry:28,total:29.7,apex:4.7,note:"기본 아이언 · 높은 탄도",roll:!1},{id:"9I",code:"9I",name:"9번 아이언",short:"아이언",loft:40,speed:15.2,carry:22,total:22.7,apex:4.7,note:"짧은 아이언 · 부드러운 착지",roll:!1},{id:"PW",code:"PW",name:"피칭웨지",short:"피칭",loft:48,speed:12.8,carry:16,total:16.4,apex:4.5,note:"어프로치 · 거의 안 굴러감",roll:!1},{id:"SW",code:"SW",name:"샌드웨지",short:"샌드",loft:58,speed:10.5,carry:10,total:10.2,apex:4,note:"높이 띄우기 · 벙커 탈출",roll:!1},{id:"PT",code:"PT",name:"퍼터",short:"퍼터",loft:0,speed:8,carry:0,total:20.6,apex:0,note:"그린에서 굴리기",roll:!0}];function cn(i){return Sl.find(t=>t.id===i)??Sl[0]}const To=1.75;function MM(i){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):0}function yM(i){return En+(1-En)*MM(i)}function Bs(i){switch(i){case"rough":return .88;case"bunker":return .82;case"fringe":return .97;default:return 1}}function tc(i,t){return i.total*Math.pow(Bs(t),To)}function SM(i,t,e){return tc(i,t)*Math.pow(yM(e),To)}function bM(i,t,e){const n=tc(i,t);return n<=.05?1:(Math.pow(Math.max(0,e)/n,1/To)-En)/(1-En)}const wM=["SW","PW","9I","7I","5I","3W","1W"];function EM(i,t){if(t==="green")return i<=30?"PT":"PW";if(t==="fringe")return i<=18?"PT":"PW";if(t==="bunker")return"SW";const e=i/Math.pow(Bs(t),To)*1.05;for(const n of wM)if(cn(n).total>=e)return n;return"1W"}const ec={tee:"티박스",fairway:"페어웨이",rough:"러프",green:"그린",fringe:"그린 주변",bunker:"벙커",water:"워터",out:"아웃"},TM=.12,AM=.14,RM=.045,CM=.105;function PM(i,t){const e=Math.abs(t),n=e<=RM?"perfect":e<=CM?"good":"miss",s=n==="perfect"?1:n==="good"?.955:.87,r=-t,o=n==="perfect";return{grade:n,rawPower:i,power:Math.max(.08,Math.min(1,i*s)),error:t,yawOffset:o?0:r*.32,curve:o?0:r*5.2,powerMul:s}}class LM{constructor(){O(this,"phase","idle");O(this,"value",0);O(this,"power",0);O(this,"direction",1);O(this,"heldFor",0);O(this,"lastPlan",null)}get active(){return this.phase==="power"||this.phase==="impact"}get result(){return this.lastPlan}get livePower(){return Math.max(TM,Math.min(1,this.value))}beginHold(){return this.phase==="power"||this.phase==="impact"?!1:(this.phase="power",this.value=0,this.power=0,this.direction=1,this.heldFor=0,this.lastPlan=null,!0)}release(){return this.phase!=="power"?null:this.heldFor<AM?(this.reset(),"tooShort"):(this.power=this.livePower,this.value=this.power,this.phase="impact","power")}cancelHold(){return this.phase!=="power"?!1:(this.reset(),!0)}tap(){if(this.phase==="impact"){const t=PM(this.power,this.value);return this.lastPlan=t,this.phase="done",t}return null}update(t){return this.phase==="power"?(this.heldFor+=t,this.value+=this.direction*t/gM,this.value>=1?(this.value=1,this.direction=-1):this.value<=0&&this.direction<0&&(this.value=0,this.direction=1),{changed:!0,timedOut:!1,plan:null}):this.phase==="impact"?(this.value-=t/xM,this.value<=-.24?(this.value=0,this.phase="idle",this.power=0,{changed:!0,timedOut:!0,plan:null}):{changed:!0,timedOut:!1,plan:null}):{changed:!1,timedOut:!1,plan:null}}reset(){this.phase="idle",this.value=0,this.power=0,this.direction=1,this.heldFor=0,this.lastPlan=null}get hint(){return this.phase==="idle"?"스윙! 을 꾹 누르면 파워가 차요":this.phase==="power"?this.value>=.999?"최대 파워! 떼면 확정돼요":this.direction<0?"100% 지나 내려오는 중 · 떼면 확정":"꾹 누른 채 원하는 파워에서 떼세요":this.phase==="impact"?"임팩트 존에서 탭!":"샷!"}}function DM(i,t){if(typeof document>"u")return null;const e=document.createElement("canvas");e.width=256,e.height=96;const n=e.getContext("2d");if(!n)return null;n.clearRect(0,0,e.width,e.height);const s=i.length>10?`${i.slice(0,10)}…`:i;n.font='bold 40px "Pretendard", system-ui, sans-serif';const r=Math.min(e.width-16,n.measureText(s).width+44);n.fillStyle="rgba(22, 50, 59, 0.82)",n.beginPath();const o=(e.width-r)/2;typeof n.roundRect=="function"?n.roundRect(o,18,r,58,29):n.rect(o,18,r,58),n.fill(),n.fillStyle=t,n.beginPath(),n.arc(o+24,47,9,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.textAlign="left",n.textBaseline="middle",n.fillText(s,o+40,49);const a=new ms(e);a.colorSpace=Oe;const l=new Ni({map:a,transparent:!0,depthWrite:!1}),c=new ps(l);return c.scale.set(.95,.36,1),c}class IM{constructor(t){O(this,"scene");O(this,"items",new Map);this.scene=t}upsert(t){let e=this.items.get(t.id);if(!e){const n=new De,s=kd(new Zt(t.color).getHex(),Ve,!0);n.add(s);const r=DM(t.name,t.color);r&&(r.position.set(0,Ve+.42,0),n.add(r)),n.position.set(t.pos[0],t.pos[1],t.pos[2]),this.scene.add(n),e={group:n,label:r,snapshot:t,target:new P(t.pos[0],t.pos[1],t.pos[2])},this.items.set(t.id,e)}e.snapshot=t,e.target.set(t.pos[0],t.pos[1],t.pos[2]),e.label&&(e.label.visible=!0)}remove(t){const e=this.items.get(t);e&&(this.scene.remove(e.group),e.group.traverse(n=>{const s=n;s.isMesh&&s.geometry.dispose();const r=n.material;r&&(Array.isArray(r)?r:[r]).forEach(a=>{a.map?.dispose(),a.dispose()})}),this.items.delete(t))}clear(){[...this.items.keys()].forEach(t=>this.remove(t))}update(t,e){for(const n of this.items.values()){const s=n.snapshot.hole===e;n.group.visible=s,s&&n.group.position.lerp(n.target,1-Math.exp(-12*t))}}positionOf(t){const e=this.items.get(t);return e?e.group.position.clone():null}count(){return this.items.size}}const Vd={back:"백뷰",target:"타겟뷰",top:"탑뷰"},va=["back","target","top"],Ps=30,NM=.08,su=new $n({color:16757596,transparent:!0,opacity:.98,depthWrite:!1,toneMapped:!1}),ru=new $n({color:16773572,transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}),Br=new P,Qi=new P,UM=new P,ou=.42,au=.12,FM=9;class OM{constructor(t){O(this,"events");O(this,"scene");O(this,"camera");O(this,"audio");O(this,"realtime");O(this,"rig",new oM(.42,10.5));O(this,"effects");O(this,"remotes");O(this,"ball",new Hd);O(this,"ballVisual");O(this,"golfer",null);O(this,"aimDots",[]);O(this,"aimDashes",[]);O(this,"aimRing");O(this,"aimLandingRing");O(this,"aimGuide",new De);O(this,"meter",new LM);O(this,"course",null);O(this,"identity",null);O(this,"state","idle");O(this,"holeIndex",0);O(this,"strokes",0);O(this,"records",Ce.map(t=>({par:t.par,strokes:null})));O(this,"clubId","1W");O(this,"recommended","1W");O(this,"clubManual",!1);O(this,"aimYaw",0);O(this,"viewMode","back");O(this,"golferPos",new P);O(this,"golferFacing",0);O(this,"pointers",new Map);O(this,"lastShotPos",new P);O(this,"sinkTimer",0);O(this,"betweenTimer",0);O(this,"netTimer",0);O(this,"peersDirty",!1);O(this,"peerEmitTimer",0);O(this,"previewTimer",0);O(this,"preview",null);O(this,"lastSurface","fairway");O(this,"peers",new Map);this.scene=t.scene,this.camera=t.camera,this.audio=t.audio,this.realtime=t.realtime,this.events=t.events??{},this.ballVisual=kd(16743001,Ve),this.ballVisual.visible=!1,this.scene.add(this.ballVisual),this.effects=new aM(this.scene),this.remotes=new IM(this.scene);const e=new di(.115,10,8);e.rotateX(-Math.PI/2);for(let o=0;o<Ps;o+=1){const a=new Kt(e,su);a.visible=!1,a.renderOrder=3,this.aimGuide.add(a),this.aimDots.push(a)}const n=new Kn(.42,.56,36);n.rotateX(-Math.PI/2),this.aimRing=new Kt(n,new $n({color:16769126,transparent:!0,opacity:.95,depthWrite:!1,blending:Wn,toneMapped:!1})),this.aimRing.renderOrder=3,this.aimRing.visible=!1,this.aimGuide.add(this.aimRing);const s=new Kn(.6,.78,40);s.rotateX(-Math.PI/2),this.aimLandingRing=new Kt(s,new $n({color:9431551,transparent:!0,opacity:.75,depthWrite:!1,blending:Wn,toneMapped:!1})),this.aimLandingRing.renderOrder=3,this.aimLandingRing.visible=!1,this.aimGuide.add(this.aimLandingRing);const r=new Ri(.16,1.1);r.rotateX(-Math.PI/2);for(let o=0;o<18;o+=1){const a=new Kt(r,ru);a.visible=!1,a.renderOrder=4,this.aimGuide.add(a),this.aimDashes.push(a)}this.aimGuide.visible=!1,this.scene.add(this.aimGuide),this.realtime.onMessage(o=>this.handleMessage(o)),typeof window<"u"&&window.addEventListener("pagehide",()=>this.leave()),this.course=new Jh(this.scene,Ce[0]),this.placeBall(Ce[0].tee[0],Ce[0].tee[1]),this.aimYaw=this.yawTo(Ce[0].tee[0],Ce[0].tee[1],Ce[0].cup[0],Ce[0].cup[1]),this.refreshRecommended(this.ball.x,this.ball.z,!0),this.rig.setAim(this.aimYaw,!0),this.rig.setDistance(18),this.rig.setPitch(.5),this.rig.update(.016,this.focusPoint(),this.camera,!0,2)}join(t){this.identity=t,this.applyBallColor(t.color),this.records=Ce.map(e=>({par:e.par,strokes:null})),this.holeIndex=0,this.viewMode="back",this.startHole(0,!0),this.sendHello(),this.realtime.resync?.()}applyBallColor(t){const n=this.ballVisual.children[0]?.material;n&&n.color.set(t),this.ballVisual.visible=!0}startHole(t,e=!1){this.holeIndex=Jr.clamp(t,0,Ce.length-1);const n=Ce[this.holeIndex];this.course?.dispose(),this.course=new Jh(this.scene,n),this.strokes=0,this.records[this.holeIndex].strokes=null,this.state="ready",this.meter.reset(),this.pointers.clear(),this.clubManual=!1,this.aimYaw=this.yawTo(n.tee[0],n.tee[1],n.cup[0],n.cup[1]),this.placeBall(n.tee[0],n.tee[1]),this.refreshRecommended(this.ball.x,this.ball.z,!0),this.effects.clear(),this.effects.clearTrail(),this.snapGolfer(),this.events.onView?.(this.viewMode),this.rig.setAim(this.aimYaw,!0),this.rig.setDistance(10.5),this.rig.setPitch(.42),this.rig.update(.016,this.focusPoint(),this.camera,!0,2),this.ensureGolfer(),this.events.onHole?.(n,this.holeIndex,this.strokes),this.events.onStroke?.(this.strokes),this.emitGauge(),this.emitClub(),this.refreshPreview(!0),e||this.audio.ui()}advanceHole(){if(this.holeIndex+1>=Ce.length){this.finish();return}this.startHole(this.holeIndex+1);const t=Ce[this.holeIndex];this.events.onBanner?.(`${this.holeIndex+1}홀`,`${t.name} · Par ${t.par}`,"plain")}finish(){this.state="finished",this.ballVisual.visible=!1,this.hideAimGuide(),this.golfer?.setVisible(!1);const t=this.buildResult();this.events.onFinish?.(t),this.audio.fanfare(),this.broadcastState(!0)}buildResult(){const t=this.records.map(o=>({par:o.par,strokes:o.strokes})),e=t.reduce((o,a)=>o+(a.strokes??0),0),n=t.reduce((o,a)=>o+a.par,0),s=e-n,r=s===0?"이븐파":s<0?`${Math.abs(s)}언더파`:`+${s}`;return{holes:t,total:e,par:n,diff:s,verdict:r,name:this.identity?.name??"플레이어",date:new Date().toISOString()}}restart(){this.identity&&(this.peersDirty=!0,this.records=Ce.map(t=>({par:t.par,strokes:null})),this.golfer?.setVisible(!0),this.startHole(0,!0),this.events.onBanner?.("다시 한 라운드","이번엔 언더파에 도전!","plain"),this.broadcast({type:"again",id:this.identity.id,name:this.identity.name}),this.broadcastState(!0))}exitToLobby(){this.identity&&this.broadcast({type:"bye",id:this.identity.id}),this.identity=null,this.state="idle",this.viewMode="back",this.events.onView?.(this.viewMode),this.ballVisual.visible=!1,this.meter.reset(),this.pointers.clear(),this.hideAimGuide(),this.effects.clear(),this.remotes.clear(),this.peers.clear(),this.peersDirty=!1,this.golfer?.dispose(),this.golfer&&(this.scene.remove(this.golfer.group),this.golfer=null)}ensureGolfer(){if(!this.identity)return;if(this.golfer){this.golfer.setVisible(!0);return}const t=new to({color:this.identity.color,club:!0,clubType:lu(this.clubId)});this.golfer=t,this.scene.add(t.group),this.snapGolfer()}addressSpot(t){const e=Math.sin(this.aimYaw),n=-Math.cos(this.aimYaw),s=Math.cos(this.aimYaw),r=Math.sin(this.aimYaw);return t.set(this.ball.x-e*au+s*ou,0,this.ball.z-n*au+r*ou)}snapGolfer(){this.addressSpot(this.golferPos),this.golferFacing=this.aimYaw,this.golfer&&(this.golfer.group.position.copy(this.golferPos),this.golfer.group.rotation.y=Math.atan2(Math.sin(this.aimYaw),-Math.cos(this.aimYaw)))}placeBall(t,e){const n=this.surfaceAt(t,e),s=n==="green"?.01:n==="bunker"?.005:0;this.ball.x=t,this.ball.y=s+Ve,this.ball.z=e,this.ball.vx=0,this.ball.vy=0,this.ball.vz=0,this.ball.stopped=!0,this.ball.airborne=!1,this.ball.rolling=!1,this.ball.surface=n,this.lastSurface=n,this.ballVisual.position.set(this.ball.x,this.ball.y,this.ball.z),this.ballVisual.scale.setScalar(1)}surfaceAt(t,e){return this.course?this.course.surfaceAt(t,e).kind:"fairway"}yawTo(t,e,n,s){return Math.atan2(n-t,-(s-e))}update(t){const e=Math.min(t,.05);if(this.state==="idle"){this.course?.update(e),this.effects.update(e),this.rig.orbitBy(e*.22,0),this.rig.update(e,this.focusPoint(),this.camera,!1,4);return}if(this.course?.update(e),this.state==="flight"?this.updateFlight(e):this.state==="sinking"?this.updateSinking(e):this.state==="between"&&(this.betweenTimer-=e,this.betweenTimer<=0&&this.advanceHole()),this.state==="gauge"){const n=this.meter.update(e);n.changed&&this.emitGauge(),n.timedOut&&(this.state="ready",this.meter.reset(),this.events.onToast?.("임팩트를 놓쳤어요! 다시 스윙하세요"),this.emitGauge(),this.refreshPreview(!0))}this.syncVisuals(e),this.remotes.update(e,this.holeIndex),this.effects.update(e),(this.state==="ready"||this.state==="gauge")&&(this.previewTimer+=e,this.previewTimer>=NM&&(this.previewTimer=0,this.refreshPreview(!1))),this.updateCamera(e),this.netTimer+=e,this.netTimer>=.12&&(this.netTimer=0,this.broadcastState(!1)),this.peersDirty&&(this.peerEmitTimer+=e,this.peerEmitTimer>=.4&&(this.peerEmitTimer=0,this.peersDirty=!1,this.emitPeers())),this.prunePeers()}focusPoint(){if(this.state==="idle"){const t=Ce[0];return Br.set((t.tee[0]+t.green.x)/2,.4,(t.tee[1]+t.green.z)/2)}return Br.set(this.ball.x,this.ball.y+.1,this.ball.z)}updateCamera(t){this.rig.setAim(this.aimYaw);const e=this.state==="flight"||this.state==="sinking";switch(this.viewMode){case"top":{const n=this.holeSpan();this.rig.setDistance(Jr.clamp(n*1.2,32,74)),this.rig.setPitch(1.06),this.rig.update(t,this.topViewFocus(),this.camera,!1,0);return}case"target":{const n=this.targetViewFocus(),s=Math.hypot(n.x-this.ball.x,n.z-this.ball.z);this.rig.setDistance(Jr.clamp(18+s*.75,22,46)),this.rig.setPitch(.68),this.rig.update(t,n,this.camera,!1,0);return}}if(e){this.rig.setDistance(this.ball.airborne?16:13),this.rig.setPitch(.36),this.rig.update(t,this.focusPoint(),this.camera,!1,3);return}this.rig.setDistance(this.state==="finished"?13:10.5),this.rig.setPitch(.42),this.rig.update(t,this.focusPoint(),this.camera,!1,1.5)}holeSpan(){const t=Ce[this.holeIndex].green;return Math.hypot(t.x-this.ball.x,t.z-this.ball.z)}targetViewFocus(){if(this.state==="flight"||this.state==="sinking")return Qi.set(this.ball.x,this.ball.y,this.ball.z);const t=this.preview?.landing??null,e=this.preview?.rest??null;if(t&&e)return Qi.set(t.x+(e.x-t.x)*.4,.15,t.z+(e.z-t.z)*.4);const n=e??t;if(n)return Qi.set(n.x,.15,n.z);const s=this.course?.cup;return s?Qi.set(s.x,.15,s.z):Qi.set(this.ball.x,.15,this.ball.z)}topViewFocus(){const t=Ce[this.holeIndex].green;return Qi.set(this.ball.x+(t.x-this.ball.x)*.42,.2,this.ball.z+(t.z-this.ball.z)*.42)}syncVisuals(t){if(this.state==="sinking")return;this.ballVisual.position.set(this.ball.x,this.ball.y,this.ball.z);const e=Math.hypot(this.ball.vx,this.ball.vz);if(e>.02){const n=Br.set(this.ball.vz,0,-this.ball.vx).normalize();this.ballVisual.rotateOnWorldAxis(n,e*t/Ve)}this.updateGolfer(t)}updateGolfer(t){const e=this.golfer;if(!e)return;const n=this.state==="flight"||this.state==="sinking"||this.state==="between"||this.state==="finished",s=h=>{this.golferFacing=h,e.group.rotation.y=Math.atan2(Math.sin(h),-Math.cos(h))};if(n){e.group.position.copy(this.golferPos),s(this.golferFacing),e.setAddressing(!1),e.update(t,!1);return}const r=this.addressSpot(UM),o=r.x-this.golferPos.x,a=r.z-this.golferPos.z,l=Math.hypot(o,a),c=l>.06;if(c){const h=Math.max(FM,l/.9),d=Math.min(l,h*t);this.golferPos.x+=o/l*d,this.golferPos.z+=a/l*d}else this.golferPos.copy(r);e.group.position.copy(this.golferPos),s(this.aimYaw),e.setAddressing(!c),e.update(t,c)}updateFlight(t){const e=this.course?{surfaceAt:this.course.surfaceAt,obstacles:this.course.obstacles,cup:{x:this.course.cup.x,z:this.course.cup.z}}:null;if(!e)return;const n=2,s=t/n;for(let r=0;r<n;r+=1){const o=this.ball.step(s,e);for(const a of o)this.handleBallEvent(a);if(this.state!=="flight")return}if(!this.ball.stopped&&(this.ball.airborne||this.ball.horizontalSpeed>1.2)){const r=this.ball.airborne?new Zt(16774084):new Zt(12578815);this.effects.trailPush(Br.set(this.ball.x,this.ball.y,this.ball.z),r)}}handleBallEvent(t){switch(t.type){case"land":case"bounce":{const e=t.surface,n=new P(t.x,t.y,t.z);if(this.effects.divot(n,e),this.effects.ring(n,.25,1.6+t.strength*2,.45,16777215),t.type==="bounce"&&this.audio.bounce(.3+t.strength*.6),this.rig.setAim(this.aimYaw),t.type==="land"){const s=this.cupDistanceFrom(t.x,t.z);this.events.onLanding?.(s)}break}case"obstacle":this.audio.bounce(.4+t.strength*.5),this.effects.divot(new P(t.x,t.y,t.z),"rough");break;case"cup":this.holeOut();break;case"water":this.penalty("water");break;case"out":this.penalty("out");break;case"stop":this.settle();break}}cupDistanceFrom(t,e){const n=this.course?.cup;return n?Math.hypot(n.x-t,n.z-e):0}settle(){if(this.state="ready",this.meter.reset(),this.lastSurface=this.surfaceAt(this.ball.x,this.ball.z),this.effects.tap(new P(this.ball.x,this.ball.y,this.ball.z)),this.effects.clearTrail(),this.aimYaw=this.yawTo(this.ball.x,this.ball.z,this.course?.cup.x??0,this.course?.cup.z??0),this.refreshRecommended(this.ball.x,this.ball.z,!0),this.rig.setDistance(10.5),this.strokes>=this.strokeLimit()){this.pickUp();return}const t=this.cupDistanceFrom(this.ball.x,this.ball.z);this.events.onRest?.(t,this.lastSurface,this.strokes),this.events.onStroke?.(this.strokes),this.emitGauge(),this.emitClub(),this.refreshPreview(!0),this.broadcastState(!0)}strokeLimit(){return this.records[this.holeIndex].par+mM}pickUp(){this.records[this.holeIndex].strokes=this.strokes,this.state="between",this.betweenTimer=2,this.events.onBanner?.("최대 타수 도달",`${this.holeIndex+1}홀을 ${this.strokes}타로 기록하고 다음 홀로`,"plain"),this.broadcastState(!0)}holeOut(){const t=Ce[this.holeIndex];this.state="sinking",this.sinkTimer=2,this.records[this.holeIndex].strokes=Math.max(1,this.strokes),this.ball.vx=0,this.ball.vz=0;const e=nc(this.strokes,t.par);this.audio.cup(),this.strokes<=t.par&&this.audio.fanfare(),this.effects.confetti(new P(this.ball.x,this.ball.y+.1,this.ball.z),this.strokes<=t.par),this.effects.clearTrail(),this.events.onHoled?.(this.holeIndex,this.strokes,e),this.meter.reset(),this.emitGauge(),this.hideAimGuide(),this.identity&&this.broadcast({type:"holed",id:this.identity.id,hole:this.holeIndex,strokes:this.strokes,name:this.identity.name}),this.broadcastState(!0)}updateSinking(t){const e=this.course?.cup;if(e){const n=Math.min(1,t*8);this.ballVisual.position.x+=(e.x-this.ballVisual.position.x)*n,this.ballVisual.position.z+=(e.z-this.ballVisual.position.z)*n}this.ballVisual.position.y=Math.max(-.45,this.ballVisual.position.y-t*.5),this.ballVisual.scale.setScalar(Math.max(.42,this.ballVisual.scale.x-t*.45)),this.sinkTimer-=t,this.sinkTimer<=0&&(this.state="between",this.betweenTimer=.2)}penalty(t){this.strokes+=1,this.records[this.holeIndex].strokes=this.strokes,t==="water"?(this.audio.water(),this.effects.splash(new P(this.ball.x,-.05,this.ball.z))):this.audio.bounce(.7),this.placeBall(this.lastShotPos.x,this.lastShotPos.z),this.state="ready",this.meter.reset(),this.aimYaw=this.yawTo(this.ball.x,this.ball.z,this.course?.cup.x??0,this.course?.cup.z??0),this.refreshRecommended(this.ball.x,this.ball.z,!0),this.snapGolfer(),this.rig.setDistance(10.5),this.events.onStroke?.(this.strokes),this.events.onPenalty?.(t,this.strokes),this.emitGauge(),this.emitClub(),this.refreshPreview(!0),this.broadcastState(!0),this.strokes>=this.strokeLimit()&&this.pickUp()}pointerDown(t,e,n,s=0){if(this.state!=="finished"){if(this.state==="gauge"&&this.meter.phase==="impact"&&s!==2){this.pointers.delete(n),this.swingTap();return}if(s===2||this.pointers.size>0){this.pointers.set(n,{x:t,y:e,role:"orbit"});return}this.pointers.set(n,{x:t,y:e,role:"aim"})}}pointerMove(t,e,n){const s=this.pointers.get(n);if(!s)return;const r=t-s.x,o=e-s.y;s.x=t,s.y=e,s.role==="aim"&&(this.state==="ready"||this.state==="gauge")?(this.aimYaw+=r*.0042,this.rig.setPitch(this.rig.pitch-o*.0022),this.refreshPreview(!0)):this.rig.orbitBy(r,o)}pointerUp(t){this.pointers.delete(t)}pointerCancel(t){this.pointers.delete(t)}aimBy(t){this.state!=="ready"&&this.state!=="gauge"||(this.aimYaw+=t,this.refreshPreview(!0))}setAimYaw(t){this.aimYaw=t,this.refreshPreview(!0)}get aim(){return this.aimYaw}setClub(t){this.state!=="ready"&&this.state!=="gauge"||(this.clubId=t,this.clubManual=t!==this.recommended,this.audio.ui(),this.emitClub(),this.emitGauge(),this.refreshPreview(!0))}cycleView(){const t=va.indexOf(this.viewMode);return this.viewMode=va[(t+1)%va.length],this.audio.ui(),this.events.onView?.(this.viewMode),this.viewMode}setView(t){this.viewMode=t,this.events.onView?.(this.viewMode)}get view(){return this.viewMode}get currentClub(){return cn(this.clubId)}get clubMax(){return tc(cn(this.clubId),this.surfaceAt(this.ball.x,this.ball.z))}get neededPower(){return bM(cn(this.clubId),this.surfaceAt(this.ball.x,this.ball.z),this.cupDistanceFrom(this.ball.x,this.ball.z))}estimateFor(t){return SM(cn(this.clubId),this.surfaceAt(this.ball.x,this.ball.z),t)}get club(){return cn(this.clubId)}swingPress(){if(this.state==="ready"){this.meter.beginHold()&&(this.state="gauge",this.audio.ui(),this.emitGauge(),this.refreshPreview(!0));return}if(this.state==="gauge"){if(this.meter.phase==="impact"){this.swingTap();return}this.meter.phase==="power"&&(this.meter.reset(),this.meter.beginHold(),this.emitGauge(),this.refreshPreview(!0))}}swingRelease(){if(this.state!=="gauge")return;const t=this.meter.release();if(t==="tooShort"){this.state="ready",this.events.onToast?.("너무 짧게 뗐어요 · 꾹 눌러 파워를 채워보세요"),this.emitGauge(),this.refreshPreview(!0);return}t==="power"&&(this.audio.ui(),this.emitGauge(),this.refreshPreview(!0))}swingCancel(){this.state==="gauge"&&this.meter.cancelHold()&&(this.state="ready",this.emitGauge(),this.refreshPreview(!0))}swingTap(){if(this.state!=="gauge")return;const t=this.meter.tap();if(!t){this.audio.ui(),this.emitGauge();return}this.fireShot(t)}fireShot(t){const e=cn(this.clubId),n=this.surfaceAt(this.ball.x,this.ball.z);this.lastSurface=n;const s=e.speed*(En+(1-En)*t.power)*Bs(n),r=this.aimYaw+t.yawOffset;this.lastShotPos.set(this.ball.x,0,this.ball.z),e.roll?this.ball.launchRoll(Math.max(.8,s),r,n):this.ball.launch({speed:s,loft:e.loft,yaw:r,curve:t.curve},n),this.strokes+=1,this.state="flight",this.meter.reset(),this.hideAimGuide();const o=new P(this.ball.x,this.ball.y,this.ball.z);this.effects.spark(o,t.grade),this.audio.shot(e.id,t.power),this.golfer?.playSwing(e.roll?.6:.92),this.rig.setDistance(14),this.events.onShot?.(t,e),this.events.onStroke?.(this.strokes),this.events.onGauge?.(this.gaugeView()),this.broadcastState(!0),this.identity&&this.broadcast({type:"shot",id:this.identity.id,power:t.power,club:e.id})}refreshRecommended(t,e,n=!1){const s=this.cupDistanceFrom(t,e),r=this.surfaceAt(t,e);this.lastSurface=r,this.recommended=EM(s,r),n&&(this.clubManual=!1),this.clubManual||(this.clubId=this.recommended),this.emitClub()}currentLaunch(){const t=cn(this.clubId);let e=1;return this.state==="gauge"&&(e=this.meter.phase==="power"?Math.max(.12,Math.min(1,this.meter.value)):Math.max(.12,Math.min(1,this.meter.power))),{speed:t.speed*(En+(1-En)*e)*Bs(this.lastSurface),loft:t.loft,power:e,roll:t.roll}}refreshPreview(t){if(!this.course)return;if(this.state!=="ready"&&this.state!=="gauge"){t&&this.hideAimGuide();return}const e=this.currentLaunch(),n={surfaceAt:this.course.surfaceAt,obstacles:this.course.obstacles,cup:{x:this.course.cup.x,z:this.course.cup.z}},s={x:this.ball.x,y:this.ball.y,z:this.ball.z,surface:this.lastSurface},r=e.roll?kr({speed:Math.max(1,e.speed),loft:0,yaw:this.aimYaw,curve:0},n,s,{rolling:!0,speed:Math.max(1,e.speed),maxSeconds:6}):kr({speed:e.speed,loft:e.loft,yaw:this.aimYaw,curve:0},n,s);this.preview=r;const o=r.points;let a=0;for(let v=1;v<o.length;v+=1)a+=Math.hypot(o[v].x-o[v-1].x,o[v].z-o[v-1].z);const l=Math.max(.75,Math.min(2.6,a/Math.max(1,Ps-1))),c=Math.min(1,Math.max(.42,l/1.7));let h=0,d=0,f=0;for(let v=0;v<o.length&&h<Ps;v+=1){if(v>0&&(d+=Math.hypot(o[v].x-o[v-1].x,o[v].z-o[v-1].z)),d+1e-6<f)continue;const w=this.aimDots[h];w.visible=!0,w.position.set(o[v].x,Math.max(.035,o[v].y+.02),o[v].z),w.scale.setScalar(Math.max(.34,c*(1-h/(Ps*2.4)))),h+=1,f=d+l}for(let v=h;v<Ps;v+=1)this.aimDots[v].visible=!1;r.landing?(this.aimRing.visible=!0,this.aimRing.position.set(r.landing.x,.04,r.landing.z)):this.aimRing.visible=!1,r.rest?(this.aimLandingRing.visible=!0,this.aimLandingRing.position.set(r.rest.x,.045,r.rest.z)):this.aimLandingRing.visible=!1;const u=r.rest??r.landing,p=Math.sin(this.aimYaw),_=-Math.cos(this.aimYaw),m=u?Math.hypot(u.x-this.ball.x,u.z-this.ball.z):40,g=Math.min(this.aimDashes.length,Math.max(0,Math.floor((m-1.5)/2.1)));for(let v=0;v<this.aimDashes.length;v+=1){const w=this.aimDashes[v];if(v>=g){w.visible=!1;continue}const y=1.8+v*2.1;w.visible=!0,w.position.set(this.ball.x+p*y,.055,this.ball.z+_*y),w.rotation.y=this.aimYaw;const E=1-v/this.aimDashes.length*.45;w.scale.set(E,1,E)}this.aimGuide.visible=!0,su.opacity=r.water?.5:.98,ru.color.setHex(r.water?16748431:16773572)}hideAimGuide(){this.aimGuide.visible=!1,this.aimRing.visible=!1,this.aimLandingRing.visible=!1,this.aimDots.forEach(t=>{t.visible=!1}),this.aimDashes.forEach(t=>{t.visible=!1})}gaugeView(){const t=this.cupDistanceFrom(this.ball.x,this.ball.z),e=this.state==="gauge"?this.meter.power:0,n=this.state==="gauge"&&this.meter.phase==="power"?this.meter.value:e;return{phase:this.meter.phase,value:this.meter.value,power:this.meter.power,hint:this.meter.hint,club:this.clubId,distance:t,clubMax:this.clubMax,powerPercent:Math.round(Math.max(0,Math.min(1,n))*100),estimate:this.estimateFor(n),neededPower:this.neededPower}}emitGauge(){this.events.onGauge?.(this.gaugeView())}emitClub(){this.golfer?.setClubLook(lu(this.clubId)),this.events.onClub?.(this.clubId,this.recommended,this.cupDistanceFrom(this.ball.x,this.ball.z),this.lastSurface)}debugFire(t,e=0,n){this.state==="ready"&&(n&&(this.clubId=n),this.state="gauge",this.fireShot({grade:Math.abs(e)<=.045?"perfect":Math.abs(e)<=.105?"good":"miss",power:t,rawPower:t,error:e,yawOffset:-e*.32,curve:-e*5.2,powerMul:1}))}debugState(){const t=this.course?.cup??new P;return{state:this.state,hole:this.holeIndex,strokes:this.strokes,pos:[this.ball.x,this.ball.y,this.ball.z],cup:[t.x,t.z],surface:this.surfaceAt(this.ball.x,this.ball.z),club:this.clubId,aim:this.aimYaw,distance:this.cupDistanceFrom(this.ball.x,this.ball.z),view:this.viewMode}}debugGolfer(){return{x:this.golferPos.x,z:this.golferPos.z,ballX:this.ball.x,ballZ:this.ball.z,facing:this.golferFacing}}debugShotInfo(){return{club:this.clubId,clubMax:this.clubMax,neededPower:this.neededPower,distance:this.cupDistanceFrom(this.ball.x,this.ball.z),estimate50:this.estimateFor(.5)}}debugBall(){return{x:this.ball.x,y:this.ball.y,z:this.ball.z,stopped:this.ball.stopped,airborne:this.ball.airborne,surface:this.ball.surface}}debugAimAt(t,e){this.aimYaw=this.yawTo(this.ball.x,this.ball.z,t,e),this.refreshPreview(!0)}debugPreviewAt(t){if(!this.course)return null;const e=cn(this.clubId),n=Math.max(.05,Math.min(1,t)),s=e.speed*(En+(1-En)*n)*Bs(this.lastSurface),r={surfaceAt:this.course.surfaceAt,obstacles:this.course.obstacles,cup:{x:this.course.cup.x,z:this.course.cup.z}},o={x:this.ball.x,y:this.ball.y,z:this.ball.z,surface:this.lastSurface};if(e.roll){const a=Math.max(.8,s);return kr({speed:a,loft:0,yaw:this.aimYaw,curve:0},r,o,{rolling:!0,speed:a})}return kr({speed:s,loft:e.loft,yaw:this.aimYaw,curve:0},r,o)}debugPreview(){return this.refreshPreview(!0),this.preview}debugJump(t){this.identity&&(this.viewMode="back",this.startHole(t,!0))}debugGauge(){return this.meter}debugSurfaceAt(t,e){return this.surfaceAt(t,e)}sendEmoji(t){this.effects.emoji(new P(this.ball.x,this.ball.y,this.ball.z),t),this.audio.emoji(),this.identity&&this.broadcast({type:"emoji",id:this.identity.id,emoji:t})}sendHello(){const t=this.snapshot();t&&this.broadcast({type:"hello",player:t})}leave(){this.identity&&this.broadcast({type:"bye",id:this.identity.id}),this.realtime.close()}snapshot(){return this.identity?{id:this.identity.id,name:this.identity.name,color:this.identity.color,hole:this.holeIndex,pos:[Ma(this.ball.x),Ma(this.ball.y),Ma(this.ball.z)],strokes:this.strokes,total:this.currentTotal(),done:this.state==="finished",moving:this.state==="flight"||this.state==="sinking",ts:Date.now()}:null}currentTotal(){let t=0;return this.records.forEach((e,n)=>{e.strokes!==null?t+=e.strokes:n===this.holeIndex&&(t+=this.strokes)}),t}broadcast(t){this.realtime.send(t)}broadcastState(t){const e=this.snapshot();e&&(t||this.realtime.online)&&this.broadcast({type:"state",player:e})}handleMessage(t){if(this.identity)switch(t.type){case"hello":{if(t.player.id===this.identity.id)return;this.applyPeer(t.player),this.broadcastState(!0);break}case"state":{if(t.player.id===this.identity.id)return;this.applyPeer(t.player);break}case"bye":{this.peers.delete(t.id)&&(this.remotes.remove(t.id),this.peersDirty=!0);break}case"emoji":{const e=this.remotes.positionOf(t.id)??new P(0,0,0);this.effects.emoji(e,t.emoji),this.audio.emoji();const n=this.peers.get(t.id)?.name??"플레이어";this.events.onRemoteEmoji?.(n,t.emoji);break}case"shot":{this.audio.bounce(.25+t.power*.4);break}case"holed":{this.events.onRemoteHoled?.(t.name,t.hole,t.strokes),this.audio.cup();break}case"again":{this.events.onToast?.(`${t.name}님이 새 라운드를 시작했어요`);break}}}applyPeer(t){const e=this.peers.get(t.id);this.peers.set(t.id,t),this.remotes.upsert(t),this.peersDirty=!0,!e&&!t.done&&this.events.onToast?.(`${t.name}님이 입장했어요`)}prunePeers(){const t=Date.now();let e=!1;for(const[n,s]of this.peers)t-s.ts>2e4&&(this.peers.delete(n),this.remotes.remove(n),e=!0);e&&(this.peersDirty=!0)}emitPeers(){this.events.onPeers?.(this.getPeers(),this.realtime.online)}getPeers(){return[...this.peers.values()].sort((t,e)=>t.total-e.total||t.name.localeCompare(e.name))}getLocalSnapshot(){return this.snapshot()}get hole(){return Ce[this.holeIndex]}get currentStrokes(){return this.strokes}get stateName(){return this.state}cupDistance(){return this.cupDistanceFrom(this.ball.x,this.ball.z)}get surface(){return this.lastSurface}get recommendedClub(){return this.recommended}resetBall(){this.state==="ready"&&(this.strokes+=1,this.records[this.holeIndex].strokes=this.strokes,this.placeBall(this.lastShotPos.x,this.lastShotPos.z),this.events.onStroke?.(this.strokes),this.events.onToast?.("공을 되돌렸어요 (+1벌타)"),this.broadcastState(!0),this.strokes>=this.strokeLimit()&&this.pickUp())}get lastShot(){return this.lastShotPos}}function nc(i,t){const e=i-t;return i===1?"홀인원":e<=-3?"알바트로스":e===-2?"이글":e===-1?"버디":e===0?"파":e===1?"보기":e===2?"더블보기":e===3?"트리플보기":`+${e}`}function Ma(i){return Math.round(i*1e3)/1e3}function lu(i){return i==="1W"||i==="3W"?"driver":i==="PT"?"putter":"iron"}class zM{constructor(){O(this,"ctx",null);O(this,"master",null);O(this,"noiseBuffer",null);O(this,"_muted",!1);try{this._muted=localStorage.getItem("oneone:muted")==="1"}catch{this._muted=!1}}get muted(){return this._muted}setMuted(t){this._muted=t;try{localStorage.setItem("oneone:muted",t?"1":"0")}catch{}this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.02)}unlock(){if(typeof window>"u")return;const t=window.AudioContext??window.webkitAudioContext;if(t){if(!this.ctx)try{this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this._muted?0:.9,this.master.connect(this.ctx.destination)}catch{this.ctx=null;return}this.ctx.state==="suspended"&&this.ctx.resume()}}get out(){return!this.ctx||!this.master||this._muted?null:this.master}tone(t,e,n="sine",s=.25,r,o=0){const a=this.out;if(!a||!this.ctx)return;const l=this.ctx,c=l.currentTime+o,h=l.createOscillator(),d=l.createGain();h.type=n,h.frequency.setValueAtTime(t,c),r!==void 0&&h.frequency.exponentialRampToValueAtTime(Math.max(20,r),c+e),d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),c+Math.min(.02,e*.3)),d.gain.exponentialRampToValueAtTime(1e-4,c+e),h.connect(d).connect(a),h.start(c),h.stop(c+e+.02)}noise(t,e,n,s,r=0){const o=this.out;if(!o||!this.ctx)return;const a=this.ctx;if(!this.noiseBuffer){const f=Math.floor(a.sampleRate*.6),u=a.createBuffer(1,f,a.sampleRate),p=u.getChannelData(0);for(let _=0;_<f;_+=1)p[_]=Math.random()*2-1;this.noiseBuffer=u}const l=a.currentTime+r,c=a.createBufferSource();c.buffer=this.noiseBuffer;const h=a.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(n,l),h.frequency.exponentialRampToValueAtTime(Math.max(80,s),l+t);const d=a.createGain();d.gain.setValueAtTime(Math.max(2e-4,e),l),d.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h).connect(d).connect(o),c.start(l),c.stop(l+t+.02)}shot(t,e){const n=Math.min(1,Math.max(.2,e));if(t==="putter"){this.putt(e);return}if(t==="driver"||t==="wood"){this.noise(.16,.32*n,3e3,320),this.tone(120+40*n,.2,"triangle",.22*n,58),this.tone(220,.08,"sine",.07*n,120);return}if(t==="iron"){this.noise(.1,.26*n,3600,800),this.tone(300+80*n,.1,"square",.07*n,170);return}this.noise(.11,.2*n,2800,600),this.tone(240,.12,"sine",.1*n,110)}putt(t){const e=Math.min(1,Math.max(.15,t));this.noise(.06,.16*e,2400,700),this.tone(190+60*e,.12,"triangle",.16*e,70)}bounce(t){const e=Math.min(1,Math.max(.05,t));this.tone(880,.05,"triangle",.05*e,520)}cup(){const t=[523.25,659.25,783.99,1046.5];t.forEach((e,n)=>this.tone(e,.22,"sine",.2,void 0,n*.075)),t.forEach((e,n)=>this.tone(e*2,.16,"triangle",.05,void 0,n*.075))}fanfare(){const t=[[392,0],[523.25,.1],[659.25,.2],[783.99,.3],[1046.5,.42]];t.forEach(([e,n])=>this.tone(e,.32,"sine",.17,void 0,n)),t.forEach(([e,n])=>this.tone(e*1.5,.2,"triangle",.045,void 0,n+.02))}water(){this.noise(.55,.24,1600,180),this.tone(420,.45,"sine",.12,90)}emoji(){this.tone(880,.08,"square",.06,1180),this.tone(1320,.07,"sine",.05,void 0,.06)}ui(){this.tone(660,.06,"sine",.07,880)}portal(){this.tone(392,.5,"sine",.1,880),this.tone(587.33,.5,"triangle",.06,1174.66,.06),this.noise(.4,.05,5200,1400)}}const Wd="lobby",kM="play-1",BM="wss://oneone-minigolf-sync.a810-glenn.workers.dev",GM=Wd,HM="oneone-minigolf",VM=500,WM=2e4,XM=25e3,YM=7e4,cu=64,hu=800;function qM(){try{const t=import.meta?.env?.VITE_WS_URL;return typeof t=="string"&&t.length>0?t:null}catch{return null}}function $M(){try{return import.meta?.env?.DEV===!0}catch{return!1}}function bl(i){if(!i)return null;let t=i.trim();if(t.length===0||t==="off"||t==="0"||t==="false"||t==="none"||(t.startsWith("http://")?t=`ws://${t.slice(7)}`:t.startsWith("https://")&&(t=`wss://${t.slice(8)}`),!/^wss?:\/\//i.test(t)))return null;try{return new URL(t).toString()}catch{return null}}function Gr(i,t){try{const e=new URL(i);return(e.pathname==="/"||e.pathname==="")&&(e.pathname="/ws"),e.searchParams.has("room")||e.searchParams.set("room",t),e.toString()}catch{return i}}function ZM(){if(!(typeof window>"u"||!window.location))try{const i=new URLSearchParams(window.location.search);if(!i.has("ws"))return;const t=i.get("ws")??"";return t==="off"||t==="0"||t==="false"||t===""?null:bl(t)}catch{return}}function KM(i,t){if(t!==void 0){const s=bl(t);return s?Gr(s,i):null}const e=ZM();if(e!==void 0)return e?Gr(e,i):null;const n=bl(qM());return n?Gr(n,i):$M()?null:Gr(BM,i)}function JM(i){return new WebSocket(i)}function jM(){try{if(typeof crypto<"u"&&"randomUUID"in crypto)return crypto.randomUUID().slice(0,8)}catch{}return Math.random().toString(36).slice(2,10)}class QM{constructor(t,e={}){O(this,"room");O(this,"serverUrl");O(this,"useLocal");O(this,"autoConnect");O(this,"socketFactory");O(this,"backoffScale");O(this,"clientId",jM());O(this,"handlers",new Set);O(this,"statusHandlers",new Set);O(this,"seen",new Map);O(this,"queue",[]);O(this,"local",null);O(this,"socket",null);O(this,"attempt",0);O(this,"seq",0);O(this,"serverPeers",0);O(this,"lastInbound",0);O(this,"closed",!1);O(this,"started",!1);O(this,"syncPending",!1);O(this,"reconnectTimer",null);O(this,"pingTimer",null);O(this,"detachWindow",null);if(this.room=t,this.autoConnect=e.autoConnect??!0,this.backoffScale=e.backoffScale??1,this.serverUrl=KM(t,e.url),(e.local??!0)&&typeof BroadcastChannel<"u")try{this.local=new BroadcastChannel(`${HM}:${t}`),this.local.onmessage=s=>this.receive(s.data)}catch{this.local=null}this.useLocal=this.local!==null,e.webSocket===null?this.socketFactory=null:e.webSocket?this.socketFactory=e.webSocket:this.socketFactory=this.serverUrl&&typeof WebSocket<"u"?JM:null,this.autoConnect&&this.connect(),this.attachWindow()}get mode(){return this.socket&&this.socket.readyState===1?"websocket":this.serverUrl&&this.socketFactory?this.attempt>=3?this.useLocal?"local":"offline":"connecting":this.useLocal?"local":"offline"}get online(){return this.mode==="websocket"||this.useLocal}get status(){return{room:this.room,mode:this.mode,peers:this.serverPeers,attempt:this.attempt}}onStatus(t){return this.statusHandlers.add(t),t(this.status),()=>this.statusHandlers.delete(t)}emitStatus(){if(this.statusHandlers.size===0)return;const t=this.status;this.statusHandlers.forEach(e=>{try{e(t)}catch{}})}connect(){if(this.closed)return;if(this.started=!0,!this.serverUrl||!this.socketFactory){this.emitStatus();return}if(this.socket&&(this.socket.readyState===0||this.socket.readyState===1))return;let t=null;try{t=this.socketFactory(this.serverUrl)}catch{t=null}if(!t){this.scheduleReconnect();return}this.socket=t,this.lastInbound=Date.now(),t.onopen=()=>{this.closed||(this.attempt=0,this.lastInbound=Date.now(),this.flushQueue(),this.syncPending&&(this.syncPending=!1,this.resync()),this.startPing(),this.emitStatus())},t.onmessage=e=>{this.lastInbound=Date.now(),this.receive(e.data)},t.onerror=()=>{},t.onclose=()=>{this.socket===t&&(this.socket=null),this.stopPing(),!this.closed&&this.scheduleReconnect()},this.emitStatus()}scheduleReconnect(){if(this.closed||this.reconnectTimer!==null)return;const t=Math.min(WM,VM*2**Math.min(this.attempt,6)),e=Math.max(200,Math.round(t*this.backoffScale*(.75+Math.random()*.5)));this.attempt+=1,this.emitStatus(),this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},e)}startPing(){this.stopPing(),this.pingTimer=setInterval(()=>{const t=this.socket;if(!(!t||t.readyState!==1)){if(Date.now()-this.lastInbound>YM){try{t.close()}catch{}return}try{t.send("ping")}catch{}}},XM)}stopPing(){this.pingTimer!==null&&(clearInterval(this.pingTimer),this.pingTimer=null)}attachWindow(){if(typeof window>"u"||typeof window.addEventListener!="function")return;const t=()=>{this.closed||!this.started||this.socket||(this.reconnectTimer!==null&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.connect())};window.addEventListener("online",t),window.addEventListener("focus",t),this.detachWindow=()=>{window.removeEventListener("online",t),window.removeEventListener("focus",t)}}send(t){if(this.closed)return;const e={mid:`${this.clientId}-${++this.seq}`,msg:t};if(this.local)try{this.local.postMessage(e)}catch{}const n=this.socket;if(n&&n.readyState===1&&this.serverUrl){this.sendOverSocket(e);return}this.serverUrl&&(this.useLocal||(this.enqueue(e),this.connect()))}resync(){if(this.closed)return;const t=this.socket;if(t&&t.readyState===1){try{t.send(JSON.stringify({t:"sync"}))}catch{}return}this.syncPending=!0,this.connect()}sendOverSocket(t){const e=this.socket;if(e)try{e.send(JSON.stringify({t:"msg",mid:t.mid,msg:t.msg}))}catch{}}enqueue(t){this.queue.push(t),this.queue.length>cu&&this.queue.splice(0,this.queue.length-cu)}flushQueue(){if(this.queue.length===0)return;this.queue.splice(0,this.queue.length).forEach(e=>this.sendOverSocket(e))}receive(t){if(t!=null){if(typeof t=="string"){const e=t.trim();if(e.length===0||e==="pong")return;let n;try{n=JSON.parse(e)}catch{return}this.receiveFrame(n);return}this.receiveFrame(t)}}receiveFrame(t){if(!t||typeof t!="object")return;const e=t;if(typeof e.t=="string")switch(e.t){case"msg":{const n=typeof e.mid=="string"?e.mid:"";this.deliver({mid:n,msg:e.msg});return}case"presence":{const n=typeof e.count=="number"?e.count:0;n!==this.serverPeers&&(this.serverPeers=n,this.emitStatus());return}case"left":{const n=typeof e.id=="string"?e.id:"";if(!n)return;this.deliver({mid:`left:${n}`,msg:{type:"bye",id:n}}),this.deliver({mid:`left-lobby:${n}`,msg:{type:"lobby-bye",id:n}});return}case"ready":{typeof e.count=="number"&&(this.serverPeers=e.count,this.emitStatus()),this.replayRoster(e.peers);return}default:return}if(e.mid!==void 0||e.msg!==void 0){const n=typeof e.mid=="string"?e.mid:"";this.deliver({mid:n,msg:e.msg})}}replayRoster(t){Array.isArray(t)&&t.forEach(e=>{if(!e||typeof e!="object")return;const n=e,r=`replay:${typeof n.mid=="string"?n.mid:""}:${++this.seq}`;this.deliver({mid:r,msg:n.msg})})}deliver(t){const e=t.msg;if(!(!e||typeof e!="object"||typeof e.type!="string")){if(t.mid){const n=Date.now();if(this.seen.get(t.mid)!==void 0)return;if(this.seen.set(t.mid,n),this.seen.size>hu){const r=this.seen.size-hu;let o=0;for(const a of this.seen.keys())if(this.seen.delete(a),o+=1,o>=r)break}}this.handlers.forEach(n=>{try{n(e)}catch(s){console.warn("[realtime] 메시지 처리 실패",s)}})}}onMessage(t){return this.handlers.add(t),()=>this.handlers.delete(t)}close(){if(this.closed)return;this.closed=!0,this.stopPing(),this.reconnectTimer!==null&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.detachWindow?.(),this.detachWindow=null;const t=this.socket;if(this.socket=null,t)try{t.close()}catch{}if(this.local){this.local.onmessage=null;try{this.local.close()}catch{}this.local=null}this.handlers.clear(),this.statusHandlers.clear()}}function Xd(i=GM,t={}){return new QM(i,t)}class ty{constructor(t,e,n={}){O(this,"element");O(this,"game");O(this,"hooks");O(this,"handleDown",t=>{this.hooks.isActive&&!this.hooks.isActive()||(this.element.setPointerCapture?.(t.pointerId),this.game.pointerDown(t.clientX,t.clientY,t.pointerId,t.button))});O(this,"handleMove",t=>{this.hooks.isActive&&!this.hooks.isActive()||this.game.pointerMove(t.clientX,t.clientY,t.pointerId)});O(this,"handleUp",t=>{this.hooks.isActive&&!this.hooks.isActive()||this.game.pointerUp(t.pointerId)});O(this,"handleCancel",t=>{this.hooks.isActive&&!this.hooks.isActive()||this.game.pointerCancel(t.pointerId)});O(this,"handleKey",t=>{if(this.hooks.isActive&&!this.hooks.isActive())return;const e=t.target;if(!(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA")))switch(t.key.toLowerCase()){case"a":case"arrowleft":t.preventDefault(),this.game.aimBy(-.04);break;case"d":case"arrowright":t.preventDefault(),this.game.aimBy(.04);break;case" ":case"enter":if(t.preventDefault(),t.repeat)break;this.game.swingPress();break;case"r":this.game.resetBall();break;case"m":this.hooks.onToggleMute?.();break;case"v":this.hooks.onToggleView?.();break;case"h":case"?":this.hooks.onToggleHelp?.();break}});O(this,"handleKeyUp",t=>{t.key!==" "&&t.key.toLowerCase()!=="enter"||this.hooks.isActive&&!this.hooks.isActive()||this.game.swingRelease()});O(this,"handleBlur",()=>{this.game.swingCancel()});this.element=t,this.game=e,this.hooks=n,t.addEventListener("pointerdown",this.handleDown),t.addEventListener("pointermove",this.handleMove),t.addEventListener("pointerup",this.handleUp),t.addEventListener("pointercancel",this.handleCancel),t.addEventListener("contextmenu",s=>s.preventDefault()),window.addEventListener("keydown",this.handleKey),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur)}dispose(){this.element.removeEventListener("pointerdown",this.handleDown),this.element.removeEventListener("pointermove",this.handleMove),this.element.removeEventListener("pointerup",this.handleUp),this.element.removeEventListener("pointercancel",this.handleCancel),window.removeEventListener("keydown",this.handleKey),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur)}}function Yd(i,t,e={}){i.addEventListener("pointerdown",n=>{const s=n;s.pointerType==="mouse"&&s.button!==0||(n.preventDefault(),e.onPress?.(),i.setPointerCapture?.(s.pointerId),t.swingPress())}),i.addEventListener("pointerup",n=>{n.preventDefault(),t.swingRelease()}),i.addEventListener("pointercancel",()=>t.swingCancel()),i.addEventListener("lostpointercapture",()=>t.swingCancel()),i.addEventListener("click",n=>n.preventDefault())}const Hr=15.2,eo=new P(0,0,-9);function uu(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function ya(i,t,e,n){const s=Math.sin(t*.19+Math.cos(e*.15)*1.5)*Math.cos(e*.17+Math.sin(t*.11)*1.1);return n.setHex(i),n.offsetHSL(0,0,s*.016),n}function ey(i,t,e){const n=[];for(let r=0;r<t;r+=1){const o=i*r/t,a=i*(r+1)/t,l=r===0?4:e;for(let c=0;c<l;c+=1){const h=c/e*Math.PI*2,d=(c+1)/e*Math.PI*2,f=[Math.cos(h)*o,0,Math.sin(h)*o],u=[Math.cos(d)*o,0,Math.sin(d)*o],p=[Math.cos(h)*a,0,Math.sin(h)*a],_=[Math.cos(d)*a,0,Math.sin(d)*a];r===0?n.push(...f,...p,..._):n.push(...f,...p,..._,...f,..._,...u)}}const s=new Pe;return s.setAttribute("position",new fe(n,3)),s.computeVertexNormals(),s}function ny(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d");if(!t)return null;const e=t.createRadialGradient(128,128,6,128,128,126);e.addColorStop(0,"rgba(236, 255, 255, 0.98)"),e.addColorStop(.35,"rgba(126, 238, 255, 0.9)"),e.addColorStop(.72,"rgba(62, 200, 255, 0.55)"),e.addColorStop(1,"rgba(62, 200, 255, 0.06)"),t.fillStyle=e,t.beginPath(),t.arc(128,128,126,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.55)",t.lineWidth=3;for(let s=0;s<3;s+=1){t.beginPath();const r=s/3*Math.PI*2;for(let o=0;o<Math.PI*1.5;o+=.08){const a=12+o*16,l=128+Math.cos(o+r)*a,c=128+Math.sin(o+r)*a;o===0?t.moveTo(l,c):t.lineTo(l,c)}t.stroke()}const n=new ms(i);return n.colorSpace=Oe,n}function iy(i){const t=Dn(i*53+17),e=[{geo:new Te(1.05,1.1,.26,9),color:R.stoneDark,pos:[0,.13,0],jitter:.06},{geo:new Te(.95,.95,.08,9),color:R.soil,pos:[0,.27,0],jitter:.05}],n=[R.flowerPink,R.flowerYellow,R.flowerPurple,R.white];for(let s=0;s<9;s+=1){const r=t()*Math.PI*2,o=t()*.7,a=Math.cos(r)*o,l=Math.sin(r)*o;e.push({geo:_e(.16),color:R.leaf,pos:[a,.36,l],scale:[1,.7,1],jitter:.16}),e.push({geo:_e(.075),color:n[Math.floor(t()*n.length)],pos:[a,.48,l],jitter:.1})}return de(`flowerbed-${i%3}`,e)}function sy(i){const t=Dn(20261119),e=[],n=new Si(70,56);n.rotateX(-Math.PI/2);const s=pn(n,(z,q,V,ct,at)=>ya(uu(Math.floor(z*.03),Math.floor(V*.03))>.45?R.meadow:R.meadowDark,z,V,at),.07),r=new Kt(s,new Xe({vertexColors:!0,flatShading:!0,roughness:.98}));r.position.y=-.46,r.receiveShadow=!0,i.add(r);const o=new Te(Hr,Hr-.9,1.7,56,1),a=pn(o,(z,q,V,ct,at)=>ct>.6?ya(R.grass,z,V,at):q>.2?ya(R.grassDark,z,V,at):q>-.5?(at.setHex(R.soil),at):(at.setHex(R.soilDark),at),.07),l=new Kt(a,new Xe({vertexColors:!0,flatShading:!0,roughness:.97}));l.position.y=-.85,l.receiveShadow=!0,l.castShadow=!0,i.add(l);const c=new Xe({vertexColors:!0,flatShading:!0,roughness:.9}),h=pn(ey(5.15,4,34),(z,q,V,ct,at)=>{const It=Math.floor(Math.hypot(z,V)/1.3),qt=uu(It*3+Math.floor(z*.7),Math.floor(V*.7))>.5;return at.setHex(qt?R.stone:R.stoneLight),at},.05),d=new Kt(h,c);d.position.y=.014,d.receiveShadow=!0,i.add(d);const f=new Kn(5.15,5.6,40);f.rotateX(-Math.PI/2);const u=new Kt(pn(f,(z,q,V,ct,at)=>(at.setHex(R.stoneDark),at)),c);u.position.y=.02,u.receiveShadow=!0,i.add(u);for(let z=0;z<6;z+=1){const q=new Kt(pn(nt(2.5,.12,.95),(V,ct,at,It,qt)=>(qt.setHex(z%2===0?R.stone:R.stoneLight),qt),.05),c);q.position.set((t()-.5)*.12,.03,-3.4-z*.95),q.receiveShadow=!0,q.castShadow=!0,i.add(q)}const p=7.8,_=-3.6,m=2.8,g=Ld(1.4),v=new Xe({color:g?16777215:R.water,map:g,roughness:.12,metalness:.3,transparent:!0,opacity:.93}),w=new Kt(new Si(m,40),v);w.rotation.x=-Math.PI/2,w.position.set(p,.018,_),i.add(w);const y=w;for(let z=0;z<12;z+=1){const q=z/12*Math.PI*2,V=zs(.42+t()*.18,z+21);V.position.set(p+Math.cos(q)*(m+.16),.02,_+Math.sin(q)*(m+.16)),V.rotation.y=q,i.add(V)}for(let z=0;z<5;z+=1){const q=t()*Math.PI*2,V=Nd(.9+t()*.4,z+4);V.position.set(p+Math.cos(q)*(m-.15),.02,_+Math.sin(q)*(m-.15)),i.add(V)}for(let z=0;z<4;z+=1){const q=t()*Math.PI*2,V=t()*1.7,ct=Ud(.7+t()*.5);ct.position.set(p+Math.cos(q)*V,.03,_+Math.sin(q)*V),ct.rotation.y=t()*3,i.add(ct)}const E=new De;E.position.set(p-m-.3,.02,_+.6),E.rotation.y=.5;for(let z=0;z<4;z+=1)E.add(new Kt(pn(nt(1.5,.1,.32),(q,V,ct,at,It)=>(It.setHex(z%2===0?R.wood:R.woodLight),It),.06),new Xe({vertexColors:!0,flatShading:!0,roughness:.88})));E.children.forEach((z,q)=>{z.position.set(0,.06,-.5+q*.33)}),i.add(E),e.push({x:p,z:_,r:m+.35});const T=Jv(),x=-9.7,b=2.4;T.position.set(x,0,b),T.rotation.y=.5,i.add(T),e.push({x,z:b,r:5.1});const I=yl("ONEOINE CLUBHOUSE","#ffd9a0",{scale:[3.6,.55],canvasWidth:640,canvasHeight:100,fontSize:44,bg:"rgba(255, 122, 89, 0.92)"});I&&(I.position.set(x+1.6,3.15,b+3.2),I.material.rotation=0,i.add(I));const C=Od(1);C.position.set(-12.4,0,-4.8),C.rotation.y=1.15,i.add(C),e.push({x:-12.4,z:-4.8,r:1.35});const N=Ml(1);N.position.set(-5.6,0,5.4),N.rotation.y=.4,i.add(N),e.push({x:-5.6,z:5.4,r:.5});const k=jv(1);k.position.set(-9.4,0,10.4),k.rotation.y=-.3,i.add(k),e.push({x:-9.4,z:10.4,r:1.2}),[[-4.3,6.4,.35],[4.6,4.2,-.9],[-5.4,-3.4,1.15],[6.4,1,-1.3]].forEach(([z,q,V])=>{const ct=Qr(1);ct.position.set(z,0,q),ct.rotation.y=V,i.add(ct),e.push({x:z,z:q,r:.95})}),[[-3.2,-6.2],[3.2,-6.2],[-6.6,.4],[6.6,-.6],[-2.2,6.6],[2.6,7.4]].forEach(([z,q])=>{const V=Fd(1);V.position.set(z,0,q),V.rotation.y=t()*.6,i.add(V),e.push({x:z,z:q,r:.3})}),[[8.4,6.4,1],[-11.2,-3.6,2],[3.6,-9.6,3]].forEach(([z,q,V])=>{const ct=iy(V);ct.position.set(z,0,q),i.add(ct),e.push({x:z,z:q,r:1.05})});const J=Qv(1);J.position.set(5.6,0,-6.2),i.add(J),e.push({x:5.6,z:-6.2,r:.35}),[[-12.4,-2.2,1.25,!1],[-11.4,8.4,1.1,!0],[11.4,6.8,1.05,!1],[12.6,-1.2,1.15,!0],[-7.2,-10.4,1,!1],[8.2,-11.2,.95,!0],[-1.4,13.4,1.05,!1],[-2.8,-12.6,.9,!0],[12.8,-8.4,1.15,!1],[-13.2,3.4,.85,!0],[7.6,11.6,.95,!1],[-9.6,10.8,1,!0]].forEach(([z,q,V,ct])=>{const at=ct?mo(V):go(V);at.position.set(z,0,q),at.rotation.y=t()*Math.PI,i.add(at),e.push({x:z,z:q,r:.6*V})}),[[-7.4,7.4,.75],[9.8,2.2,.65],[4.9,-7.6,.6],[-9.8,-5.8,.55],[10.8,-5.2,.6]].forEach(([z,q,V])=>{const ct=zs(V,Math.round(z*3+q));ct.position.set(z,.02,q),ct.rotation.y=t()*3,i.add(ct)});const Z=22;for(let z=0;z<Z;z+=1){const q=z/Z*Math.PI*2,V=Math.cos(q)*(Hr-.75),ct=Math.sin(q)*(Hr-.75);if(Math.abs(V)<3.2&&ct<-6)continue;const at=Math.cos(q*9)>.4?Kv(2.1,1):zd(2.1,1);at.position.set(V,.02,ct),at.rotation.y=-q+Math.PI/2,i.add(at)}for(let z=0;z<26;z+=1){const q=t()*Math.PI*2,V=5.9+t()*7.2,ct=Math.cos(q)*V,at=Math.sin(q)*V;if(Math.hypot(ct-p,at-_)<m+1||Math.hypot(ct-x,at-b)<5.4||Math.abs(ct)<2.2&&at<-4)continue;const It=Bd(z+11);It.position.set(ct,.01,at),It.rotation.y=t()*3,It.scale.setScalar(.9+t()*.5),i.add(It)}for(let z=0;z<16;z+=1){const q=z/16*Math.PI*2+t()*.2,V=22+t()*14,ct=Math.cos(q)*V,at=Math.sin(q)*V,It=z%3===0?mo(1.7+t()*.8):go(1.6+t()*.9);It.position.set(ct,-.46,at),It.rotation.y=t()*3,i.add(It)}const j=new De;j.position.copy(eo),i.add(j);const st=new Xe({vertexColors:!0,flatShading:!0,roughness:.85}),Dt=new Xe({color:7333631,emissive:3524863,emissiveIntensity:1.4,roughness:.25,metalness:.15,flatShading:!0}),Nt=(z,q,V)=>{const ct=V===void 0?z:pn(z,(It,qt,te,F,be)=>(be.setHex(V),be),.05),at=new Kt(ct,q);return at.castShadow=!0,at.receiveShadow=!0,j.add(at),at};Nt(new Te(2.9,3.15,.26,14),st,R.stoneDark).position.y=-.02,Nt(new Te(2.6,2.75,.2,14),st,R.stone).position.y=.16,Nt(new Te(2.35,2.45,.12,14),st,R.stoneLight).position.y=.3,[-1.78,1.78].forEach(z=>{Nt(nt(.66,3.1,.66),st,R.stone).position.set(z,1.85,0),Nt(new Te(.4,.5,.36,8),st,R.stoneDark).position.set(z,.52,0),Nt(nt(.8,.16,.8),st,R.stoneLight).position.set(z,3.46,0);const V=new Kt(new Zn(.72,.2,.72),Dt);V.position.set(z,3.66,0),j.add(V),Nt(nt(.72,.1,.72),st,R.stoneDark).position.set(z,1,0),e.push({x:eo.x+z,z:eo.z,r:.5})}),Nt(nt(4.6,.42,.72),st,R.stone).position.set(0,3.9,0),Nt(nt(4.9,.14,.86),st,R.stoneDark).position.set(0,4.16,0),Nt(new je(.5,.5,4),st,R.stoneLight).position.set(0,4.48,0);const Q=new Xe({color:7333631,emissive:3524863,emissiveIntensity:1.4,roughness:.25,metalness:.2}),gt=new Kt(new Ci(1.36,.11,14,48),Q);gt.position.y=1.72,j.add(gt);const Lt=new Kt(new Ci(1.1,.035,8,44),Q);Lt.position.y=1.72,j.add(Lt);const Gt=ny(),Mt=new $n({color:16777215,map:Gt,transparent:!0,opacity:.9,side:hn,depthWrite:!1}),Ut=new Kt(new Si(1.28,48),Mt);Ut.position.set(0,1.72,.02),j.add(Ut);const lt=new $n({color:10219263,transparent:!0,opacity:.3,side:hn,depthWrite:!1,blending:Wn}),xt=new Kt(new Si(1.9,48),lt);xt.position.set(0,.34,0),xt.rotation.x=-Math.PI/2,j.add(xt);const At=new I0(10479871,6,12,2);At.position.set(0,1.9,.9),j.add(At);const Ot=yl("플레이룸 ⛳","#8ff3ff",{scale:[2.8,.8],canvasWidth:512,canvasHeight:146,fontSize:62,bg:"rgba(12, 38, 48, 0.9)"});Ot&&(Ot.position.set(0,4.95,0),j.add(Ot)),[-2.7,2.7].forEach(z=>{const q=new Kt(pn(Vt(.12,.16,1.5,6),(ct,at,It,qt,te)=>(te.setHex(R.woodDark),te)),st);q.position.set(z,.75,.2),q.castShadow=!0,j.add(q);const V=new Kt(new je(.2,.42,5),new Xe({color:16766073,emissive:16754237,emissiveIntensity:1.5,roughness:.5,flatShading:!0}));V.position.set(z,1.62,.2),j.add(V)});let W=0;const ut=z=>{W+=z;const q=W,V=y.material;V.map&&(V.map.offset.x=(V.map.offset.x+z*.012)%1,V.map.offset.y=(V.map.offset.y+z*.02)%1),Q.emissiveIntensity=1.25+Math.sin(q*2.2)*.45,gt.scale.setScalar(1+Math.sin(q*2.2)*.012),Mt.opacity=.78+Math.sin(q*1.7)*.12,Ut.rotation.z+=z*.35;const ct=1+Math.sin(q*2.6)*.03;Ut.scale.set(ct,ct,1),lt.opacity=.24+Math.sin(q*1.4)*.08,xt.rotation.z-=z*.18,At.intensity=5+Math.sin(q*2.1)*1.4};for(let z=0;z<6;z+=1){const q=t()*Math.PI*2,V=8+t()*18,ct=[{geo:_e(1),color:R.white,pos:[0,0,0],scale:[2,1,1.4],jitter:.04},{geo:_e(1),color:R.white,pos:[1.6,-.2,.2],scale:[1.2,.75,.9],jitter:.04},{geo:_e(1),color:R.white,pos:[-1.6,-.15,-.1],scale:[1.1,.7,.85],jitter:.04},{geo:_e(1),color:R.white,pos:[.4,.6,0],scale:[1,.7,.8],jitter:.04}],at=de("lobby-cloud",ct);at.position.set(Math.cos(q)*V,11+t()*5,Math.sin(q)*V),at.rotation.y=t()*3,i.add(at)}return{obstacles:e,gate:j,gateRing:gt,gateInner:Ut,gateHalo:xt,gateGlow:At,update:ut}}const ts=13.6,Bn=eo,ry=1.35,du=3.7,fu=9.4,pu=.48,oy=.12,ay=[{name:"버디헌터",color:bi[1].hex,spawn:[-4.2,2.4]},{name:"핑크공",color:bi[5].hex,spawn:[3.6,1.2]},{name:"싱커",color:bi[2].hex,spawn:[5.4,6.2]},{name:"캐디",color:bi[4].hex,spawn:[-2.6,-2.6]}],Vr=["👋","👏","⛳","😂","🎉","🔥"],ly=new P;class cy{constructor(t){O(this,"scene");O(this,"camera");O(this,"audio");O(this,"realtime");O(this,"events");O(this,"canvas");O(this,"root",new De);O(this,"plaza",new De);O(this,"gateGroup",new De);O(this,"obstacles",[]);O(this,"disposables",[]);O(this,"plazaHandle",null);O(this,"mergedGeometries",[]);O(this,"identity",null);O(this,"localGolfer",null);O(this,"localPos",new P(0,0,5.6));O(this,"localHeading",Math.PI);O(this,"localMoving",!1);O(this,"keys",new Set);O(this,"stick",new pt);O(this,"target",null);O(this,"pointer",null);O(this,"joystickEl",null);O(this,"joystickKnob",null);O(this,"guests",[]);O(this,"remotes",new Map);O(this,"playroom",new Map);O(this,"bubbles",[]);O(this,"replies",[]);O(this,"mode","preview");O(this,"time",0);O(this,"netTimer",0);O(this,"previewAngle",.55);O(this,"enterCooldown",0);O(this,"nearGate",!1);O(this,"cameraSnap",!0);O(this,"camPos",new P);O(this,"camLook",new P);O(this,"handleKeyDown",t=>{if(this.mode!=="lobby")return;const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"))return;const n=t.key.toLowerCase();n.startsWith("arrow")&&t.preventDefault(),this.keys.add(n)});O(this,"handleKeyUp",t=>{this.keys.delete(t.key.toLowerCase())});O(this,"releaseKeys",()=>{this.keys.clear()});O(this,"handlePointerDown",t=>{this.mode==="lobby"&&(this.pointer={id:t.pointerId,startX:t.clientX,startY:t.clientY,dragging:!1},this.canvas?.setPointerCapture?.(t.pointerId))});O(this,"handlePointerMove",t=>{if(!this.pointer||this.pointer.id!==t.pointerId)return;const e=t.clientX-this.pointer.startX,n=t.clientY-this.pointer.startY,s=Math.hypot(e,n);if(!this.pointer.dragging&&s>14&&(this.pointer.dragging=!0,this.target=null,this.showJoystick(this.pointer.startX,this.pointer.startY)),this.pointer.dragging){const o=Math.min(1,s/62),a=s>.001?e/s*o:0,l=s>.001?n/s*o:0;this.stick.set(a,l),this.joystickKnob&&(this.joystickKnob.style.transform=`translate(calc(-50% + ${a*32}px), calc(-50% + ${l*32}px))`)}});O(this,"handlePointerUp",t=>{!this.pointer||this.pointer.id!==t.pointerId||(this.pointer.dragging||this.tapMove(this.pointer.startX,this.pointer.startY),this.pointer=null,this.stick.set(0,0),this.hideJoystick())});O(this,"handlePointerCancel",t=>{!this.pointer||this.pointer.id!==t.pointerId||(this.pointer=null,this.stick.set(0,0),this.hideJoystick())});this.scene=t.scene,this.camera=t.camera,this.audio=t.audio,this.realtime=t.realtime,this.events=t.events??{},this.canvas=t.canvas??null,this.root.add(this.plaza),this.scene.add(this.root),this.buildPlaza(),this.buildGuests(),this.realtime.onMessage(e=>this.handleMessage(e)),this.canvas&&(this.canvas.addEventListener("pointerdown",this.handlePointerDown),this.canvas.addEventListener("pointermove",this.handlePointerMove),this.canvas.addEventListener("pointerup",this.handlePointerUp),this.canvas.addEventListener("pointercancel",this.handlePointerCancel),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.releaseKeys),this.createJoystick()),this.placeCamera(!0)}get currentMode(){return this.mode}get isNearGate(){return this.nearGate}enter(t){this.identity=t,this.localGolfer?.dispose();const e=new to({color:t.color,name:t.name,glow:!0,club:!1});this.localGolfer=e,this.root.add(e.group),this.localPos.set(0,0,5.6),this.localHeading=Math.PI,this.target=null,this.enterCooldown=1.2,this.cameraSnap=!0,e.group.position.copy(this.localPos),e.group.rotation.y=this.localHeading,this.mode="lobby",this.broadcastState(),this.realtime.resync?.(),this.emitPlayers()}setMode(t){t!==this.mode&&(t==="idle"?(this.broadcastPlayroom(!0),this.localGolfer?.setVisible(!1),this.target=null,this.stick.set(0,0),this.keys.clear(),this.hideJoystick()):t==="lobby"&&(this.localGolfer?.setVisible(!0),this.localGolfer?.group.position.copy(this.localPos),this.cameraSnap=!0),this.mode=t)}returnFromPlayroom(){this.setMode("lobby"),this.localPos.set(0,0,Bn.z+2.6),this.localHeading=0,this.target=null,this.enterCooldown=1.5,this.cameraSnap=!0,this.nearGate=!1,this.events.onGateChange?.(!1),this.localGolfer&&(this.localGolfer.group.position.copy(this.localPos),this.localGolfer.group.rotation.y=this.localHeading,this.localGolfer.setVisible(!0)),this.broadcastState(),this.emitPlayers()}sendEmoji(t){!this.identity||this.mode!=="lobby"||(this.spawnBubble(this.localPos,t),this.audio.emoji(),this.realtime.send({type:"lobby-emoji",id:this.identity.id,emoji:t}),this.maybeGuestReaction(t))}requestPlayroom(){this.mode==="lobby"&&this.events.onEnterPlayroom?.()}buildPlaza(){this.plazaHandle=sy(this.plaza),this.gateGroup=this.plazaHandle.gate,this.obstacles.push(...this.plazaHandle.obstacles),this.mergedGeometries.push(...Id(this.plaza,new Set([this.gateGroup])))}buildGuests(){ay.forEach((t,e)=>{const n=new to({color:t.color,name:t.name,club:e%2===0}),s=new P(t.spawn[0],0,t.spawn[1]);n.group.position.copy(s),this.root.add(n.group),this.guests.push({golfer:n,pos:s,target:this.pickGuestTarget(s),heading:Math.random()*Math.PI*2,wait:e*.7,emojiTimer:3+Math.random()*6,speed:1.35+Math.random()*.55})})}pickGuestTarget(t){for(let e=0;e<16;e+=1){const n=Math.random()*Math.PI*2,s=2+Math.random()*8.5,r=Math.cos(n)*s,o=Math.sin(n)*s;if(!(Math.hypot(r-7.8,o+3.4)<3.4)&&!(Math.hypot(r+9.7,o-2.4)<5.5)&&!(Math.abs(r)<2.4&&o<-5)&&!this.obstacles.some(a=>Math.hypot(r-a.x,o-a.z)<a.r+.85)&&!(t&&Math.hypot(r-t.x,o-t.z)<2.2))return new P(r,0,o)}return new P(0,0,-2.5)}createJoystick(){if(typeof document>"u")return;const t=document.createElement("div");t.className="joystick hidden";const e=document.createElement("span");t.appendChild(e),document.getElementById("app")?.appendChild(t),this.joystickEl=t,this.joystickKnob=e}showJoystick(t,e){this.joystickEl&&(this.joystickEl.style.left=`${t}px`,this.joystickEl.style.top=`${e}px`,this.joystickEl.classList.remove("hidden"))}hideJoystick(){this.joystickEl?.classList.add("hidden"),this.joystickKnob&&(this.joystickKnob.style.transform="translate(-50%, -50%)")}tapMove(t,e){if(!this.canvas)return;const n=this.canvas.getBoundingClientRect(),s=new pt((t-n.left)/Math.max(1,n.width)*2-1,-((e-n.top)/Math.max(1,n.height))*2+1),r=new F0;if(r.setFromCamera(s,this.camera),r.intersectObject(this.gateGroup,!0).length>0){this.target=new P(Bn.x,0,Bn.z+1);return}const o=new P,a=new Hn(new P(0,1,0),0);if(!r.ray.intersectPlane(a,o))return;const l=Math.hypot(o.x,o.z);l>ts&&(o.x*=ts/l,o.z*=ts/l),Math.hypot(o.x-Bn.x,o.z-Bn.z)<3.2&&o.set(Bn.x,0,Bn.z+1),this.target=o}update(t){const e=Math.min(t,.05);this.time+=e,this.mode==="lobby"&&this.updateLocal(e),this.updateGuests(e),this.updateBubbles(e),this.updateGate(e),this.updateRemotes(e),this.mode==="lobby"?(this.netTimer+=e,this.netTimer>=oy&&(this.netTimer=0,this.broadcastState()),this.placeCamera(!1,e)):this.mode==="preview"&&this.updatePreviewCamera(e)}updateLocal(t){const e=this.localGolfer;if(!e)return;const n=ly.set(0,0,0);(this.keys.has("w")||this.keys.has("arrowup"))&&(n.z-=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(n.z+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(n.x-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(n.x+=1),n.x+=this.stick.x,n.z+=this.stick.y;let s=!1;const r=Math.min(1,n.length());if(r>.05){this.target=null,n.normalize();const c=du*Math.max(.35,r);this.localPos.addScaledVector(n,c*t),this.localHeading=Math.atan2(n.x,n.z),s=!0}else if(this.target){const c=this.target.x-this.localPos.x,h=this.target.z-this.localPos.z,d=Math.hypot(c,h);d<.14?this.target=null:(n.set(c/d,0,h/d),this.localPos.addScaledVector(n,Math.min(du,d*3.4)*t),this.localHeading=Math.atan2(n.x,n.z),s=!0)}this.resolve(this.localPos),this.localMoving=s,e.group.position.set(this.localPos.x,0,this.localPos.z);const o=this.shortestAngle(e.group.rotation.y,this.localHeading);e.group.rotation.y+=o*Math.min(1,t*12),e.update(t,s),this.enterCooldown=Math.max(0,this.enterCooldown-t);const a=Math.hypot(this.localPos.x-Bn.x,this.localPos.z-Bn.z);a<ry&&this.enterCooldown<=0&&(this.enterCooldown=2,this.events.onEnterPlayroom?.());const l=a<4.2;l!==this.nearGate&&(this.nearGate=l,this.events.onGateChange?.(l))}shortestAngle(t,e){let n=e-t;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n}resolve(t){const e=Math.hypot(t.x,t.z);e>ts&&(t.x*=ts/e,t.z*=ts/e);for(const n of this.obstacles){const s=t.x-n.x,r=t.z-n.z,o=Math.hypot(s,r),a=n.r+.34;o<a&&o>1e-4&&(t.x=n.x+s/o*a,t.z=n.z+r/o*a)}}updateGuests(t){const e=this.mode==="lobby"&&!!this.identity;for(const n of this.guests){if(n.wait>0)n.wait-=t,n.golfer.update(t,!1);else{const r=n.target.x-n.pos.x,o=n.target.z-n.pos.z,a=Math.hypot(r,o);if(a<.25)n.wait=1.1+Math.random()*2.8,n.target=this.pickGuestTarget(n.pos),n.golfer.update(t,!1);else{const l=r/a,c=o/a;n.pos.x+=l*n.speed*t,n.pos.z+=c*n.speed*t,this.resolve(n.pos),n.heading=Math.atan2(l,c),n.golfer.update(t,!0)}}const s=this.shortestAngle(n.golfer.group.rotation.y,n.heading);if(n.golfer.group.rotation.y+=s*Math.min(1,t*7),n.golfer.group.position.set(n.pos.x,0,n.pos.z),e&&(n.emojiTimer-=t,n.emojiTimer<=0&&(n.emojiTimer=7+Math.random()*9,Math.random()<.65))){const r=Vr[Math.floor(Math.random()*Vr.length)];this.spawnBubble(n.pos,r)}}for(let n=this.replies.length-1;n>=0;n-=1){const s=this.replies[n];s.delay-=t,s.delay<=0&&(this.spawnBubble(s.guest.pos,s.emoji),this.replies.splice(n,1),Math.random()<.35&&this.audio.emoji())}}updateGate(t){this.plazaHandle?.update(t)}spawnBubble(t,e){const n=cM(e);n&&(n.position.set(t.x,1.45,t.z),this.scene.add(n),this.bubbles.push({sprite:n,life:2.6,maxLife:2.6,drift:(Math.random()-.5)*.3}))}updateBubbles(t){for(let e=this.bubbles.length-1;e>=0;e-=1){const n=this.bubbles[e];if(n.life-=t,n.life<=0){this.scene.remove(n.sprite),n.sprite.material.dispose(),this.bubbles.splice(e,1);continue}const s=1-n.life/n.maxLife;n.sprite.position.y+=t*.55,n.sprite.position.x+=t*n.drift,n.sprite.material.opacity=Math.min(1,(1-s)*2.2);const r=.64+Math.sin(s*Math.PI)*.1;n.sprite.scale.set(r,r,1)}}maybeGuestReaction(t){const e=this.guests.map(r=>({guest:r,distance:r.pos.distanceTo(this.localPos)})).filter(r=>r.distance<8).sort((r,o)=>r.distance-o.distance);if(!e.length||Math.random()>.8)return;const n=e[0].guest,s=Math.random()<.55?t:Vr[Math.floor(Math.random()*Vr.length)];this.replies.push({guest:n,delay:.45+Math.random()*.7,emoji:s})}placeCamera(t,e=.016){const s=fu*Math.cos(pu),r=this.localPos.x,o=this.localPos.z+s,a=.95+fu*Math.sin(pu);if(t||this.cameraSnap)this.camPos.set(r,a,o),this.camLook.set(this.localPos.x,.95,this.localPos.z),this.cameraSnap=!1;else{const l=1-Math.exp(-5.5*e);this.camPos.x+=(r-this.camPos.x)*l,this.camPos.y+=(a-this.camPos.y)*l,this.camPos.z+=(o-this.camPos.z)*l,this.camLook.x+=(this.localPos.x-this.camLook.x)*(1-Math.exp(-8*e)),this.camLook.y+=(.95-this.camLook.y)*(1-Math.exp(-8*e)),this.camLook.z+=(this.localPos.z-this.camLook.z)*(1-Math.exp(-8*e))}this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook)}updatePreviewCamera(t){this.previewAngle+=t*.075;const e=19,n=Math.sin(this.previewAngle)*e,s=Math.cos(this.previewAngle)*e;this.camera.position.set(n,9.5,s+1.5),this.camera.lookAt(0,1.1,-1.5)}broadcastState(){if(!this.identity)return;const t={id:this.identity.id,name:this.identity.name,color:this.identity.color,pos:[Gn(this.localPos.x),0,Gn(this.localPos.z)],heading:Gn(this.localHeading),moving:this.localMoving,ts:Date.now()};this.realtime.send({type:"lobby",player:t})}broadcastPlayroom(t){this.identity&&this.realtime.send({type:"playroom",id:this.identity.id,name:this.identity.name,joined:t})}handleMessage(t){if(this.identity)switch(t.type){case"lobby":{if(t.player.id===this.identity.id)return;this.applyPeer(t.player);break}case"lobby-bye":{const e=this.remotes.get(t.id);e&&(this.remotes.delete(t.id),e.golfer.dispose()),this.playroom.delete(t.id),this.emitPlayers();break}case"lobby-emoji":{const e=this.remotes.get(t.id);if(!e||this.mode!=="lobby")return;this.spawnBubble(e.target,t.emoji),this.audio.emoji();break}case"playroom":{if(t.id===this.identity.id)return;if(t.joined){this.playroom.set(t.id,{id:t.id,name:t.name,color:this.remotes.get(t.id)?.color??"#9ad0ff"});const e=this.remotes.get(t.id);e&&(this.remotes.delete(t.id),e.golfer.dispose()),this.events.onToast?.(`${t.name}님이 플레이룸으로 들어갔어요`)}else this.playroom.delete(t.id),this.events.onToast?.(`${t.name}님이 대기실로 돌아왔어요`);this.emitPlayers();break}}}applyPeer(t){const e=this.remotes.get(t.id);if(e){e.target.set(t.pos[0],t.pos[1],t.pos[2]),e.heading=t.heading,e.moving=t.moving,e.ts=t.ts,e.name!==t.name&&(e.name=t.name,e.golfer.setName(t.name,t.color));return}this.playroom.delete(t.id);const n=new to({color:t.color,name:t.name}),s=new P(t.pos[0],t.pos[1],t.pos[2]);n.group.position.copy(s),this.root.add(n.group),this.remotes.set(t.id,{golfer:n,target:s,heading:t.heading,moving:t.moving,name:t.name,color:t.color,id:t.id,ts:t.ts}),this.events.onToast?.(`${t.name}님이 대기실에 있어요`),this.emitPlayers()}updateRemotes(t){const e=Date.now();let n=!1;for(const s of[...this.remotes.values()]){if(e-s.ts>12e3){this.remotes.delete(s.id),s.golfer.dispose(),n=!0;continue}s.golfer.group.position.lerp(s.target,1-Math.exp(-9*t));const r=this.shortestAngle(s.golfer.group.rotation.y,s.heading);s.golfer.group.rotation.y+=r*Math.min(1,t*8),s.golfer.update(t,s.moving)}n&&this.emitPlayers()}emitPlayers(){const t=[...this.remotes.values()].map(n=>({id:n.id,name:n.name,color:n.color})),e=[...this.playroom.values()];this.events.onPlayers?.(t,e)}get emojiSet(){return vM}debugInput(t,e){this.stick.set(t,e)}getPeers(){return[...this.remotes.values()].map(t=>({id:t.id,name:t.name,pos:[Gn(t.target.x),0,Gn(t.target.z)]}))}get localPosition(){return[Gn(this.localPos.x),0,Gn(this.localPos.z)]}get guestCount(){return this.guests.length}debugGuests(){return this.guests.map(t=>[Gn(t.pos.x),Gn(t.pos.z)])}dispose(){this.canvas&&(this.canvas.removeEventListener("pointerdown",this.handlePointerDown),this.canvas.removeEventListener("pointermove",this.handlePointerMove),this.canvas.removeEventListener("pointerup",this.handlePointerUp),this.canvas.removeEventListener("pointercancel",this.handlePointerCancel),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.releaseKeys)),this.joystickEl?.remove(),this.localGolfer?.dispose(),this.remotes.forEach(t=>t.golfer.dispose()),this.remotes.clear(),this.guests.forEach(t=>t.golfer.dispose()),this.guests.length=0,this.bubbles.forEach(t=>{this.scene.remove(t.sprite),t.sprite.material.dispose()}),this.bubbles.length=0,this.disposables.forEach(t=>t.dispose()),this.disposables.length=0,this.mergedGeometries.forEach(t=>t.dispose()),this.mergedGeometries.length=0,this.scene.remove(this.root)}}function Gn(i){return Math.round(i*100)/100}function hy(i){i.shadowMap.enabled=!0,i.shadowMap.type=Eu,i.outputColorSpace=Oe,i.toneMapping=Dl,i.toneMappingExposure=1}function qd(i,t={}){const e=t.radius??170,n=t.cloudCount??9,s=new De,r=Dv(),o=new di(e,32,20),a=new $n({map:r??null,color:r?16777215:10475253,side:rn,depthWrite:!1,fog:!1}),l=new Kt(o,a);l.renderOrder=-10,s.add(l);const c=(t.sunDirection??new P(.42,.62,.5)).clone().normalize(),h=Uv();if(h){const u=new Ni({map:h,color:16774095,transparent:!0,opacity:.85,depthWrite:!1,fog:!1,blending:Wn}),p=new ps(u);p.position.copy(c).multiplyScalar(e*.82),p.scale.setScalar(e*.52),s.add(p)}const d=[];for(let u=0;u<n;u+=1){const p=tM(.7+Math.random()*.9);if(!p)break;const _=u/n*Math.PI*2+Math.random()*.5,m=60+Math.random()*60,g=26+Math.random()*22;p.position.set(Math.cos(_)*m,g,Math.sin(_)*m),p.material.opacity=.55+Math.random()*.3,s.add(p),d.push({sprite:p,angle:_,radius:m,speed:.006+Math.random()*.008,y:g})}if(t.hills!==!1){const u=new Xe({color:5214034,roughness:1,flatShading:!0});for(let p=0;p<26;p+=1){const _=p/26*Math.PI*2+Math.random()*.25,m=88+Math.random()*34,g=16+Math.random()*18,v=new Kt(new je(g,g*.62,7),u);v.position.set(Math.cos(_)*m,-3+Math.random()*2.5,Math.sin(_)*m),v.rotation.y=Math.random()*Math.PI,v.receiveShadow=!1,s.add(v)}}i.add(s);let f=0;return{update(u){f+=u;for(const p of d)p.angle+=p.speed*u,p.sprite.position.x=Math.cos(p.angle)*p.radius,p.sprite.position.z=Math.sin(p.angle)*p.radius,p.sprite.position.y=p.y+Math.sin(f*.25+p.angle)*.6},dispose(){i.remove(s),o.dispose(),a.dispose(),s.traverse(u=>{const p=u;p.isSprite&&p.material.dispose();const _=u;_.isMesh&&_.geometry.dispose()})}}}function Wt(i){const t=document.getElementById(i);if(!t)throw new Error(`#${i} 요소를 찾을 수 없습니다`);return t}function Fe(i){return Wt(i)}const ic=Wt("scene");let fs;try{fs=new Pv({canvas:ic,antialias:!0,powerPreference:"high-performance"})}catch{const i=document.createElement("div");throw i.style.cssText="position:fixed;inset:0;display:grid;place-items:center;padding:32px;text-align:center;font-weight:700;background:#eaf7ff;color:#16323b;z-index:99",i.textContent="이 브라우저에서는 3D 대기실을 실행할 수 없어요. 최신 Chrome·Safari·Edge에서 열어주세요.",document.body.appendChild(i),new Error("WebGL unavailable")}hy(fs);fs.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const wi=new mn(55,1,.1,320),jn=new Ju;jn.background=new Zt(12575995);jn.fog=new Mo(13625851,105,265);qd(jn,{radius:170,cloudCount:10,sunDirection:new P(.42,.66,.46)});const uy=new gd(14479359,10135685,.58);jn.add(uy);const Qe=new bo(16774108,2.15);Qe.position.set(20,30,18);Qe.castShadow=!0;Qe.shadow.mapSize.set(2048,2048);Qe.shadow.camera.left=-28;Qe.shadow.camera.right=28;Qe.shadow.camera.top=28;Qe.shadow.camera.bottom=-28;Qe.shadow.camera.near=.5;Qe.shadow.camera.far=110;Qe.shadow.bias=-4e-4;Qe.shadow.normalBias=.035;jn.add(Qe);jn.add(Qe.target);const $d=new bo(13625087,.3);$d.position.set(-16,12,-20);jn.add($d);const Qn=new Ju;Qn.background=new Zt(12904443);Qn.fog=new Mo(13823227,85,240);qd(Qn,{radius:190,cloudCount:8,sunDirection:new P(.5,.6,.42)});const dy=new gd(15004927,11053196,.6);Qn.add(dy);const dn=new bo(16774364,2.2);dn.position.set(17,24,13);dn.castShadow=!0;dn.shadow.mapSize.set(2048,2048);dn.shadow.camera.left=-26;dn.shadow.camera.right=26;dn.shadow.camera.top=26;dn.shadow.camera.bottom=-26;dn.shadow.camera.near=.5;dn.shadow.camera.far=80;dn.shadow.bias=-4e-4;dn.shadow.normalBias=.04;Qn.add(dn);Qn.add(dn.target);const Zd=new bo(14085375,.42);Zd.position.set(-15,10,-17);Qn.add(Zd);const ue=new zM,Kd=Xd(Wd),Jd=Xd(kM,{autoConnect:!1}),es=Wt("banner"),fy=Wt("banner-title"),py=Wt("banner-sub"),Sa=Wt("toast"),sc=Wt("hud"),rc=Wt("lobby-hud"),my=Wt("entry"),oc=Wt("scorecard"),ac=Wt("help"),mu=Wt("fade"),lc=Fe("btn-gate"),no=Wt("gauge"),gy=Wt("gauge-fill"),xy=Wt("gauge-marker"),wl=Wt("gauge-target"),gu=Wt("gauge-power"),_y=Wt("gauge-hint"),jd=Wt("live-power"),Qd=Wt("live-dist"),xu=Wt("live-goal"),vy=Wt("range-target"),My=Wt("range-max"),yy=Wt("range-club"),is=Fe("btn-swing"),ba=Wt("swing-label"),wa=Wt("swing-sub"),Ao=Wt("clubs"),cc=Wt("shot-dist"),hc=Wt("shot-lie"),tf=Wt("shot-club"),El=Fe("btn-view"),Sy=Wt("view-label"),by=Fe("btn-aim-left"),wy=Fe("btn-aim-right");let _u=0,vu=0;function Gs(i,t="",e="coral"){fy.textContent=i,py.textContent=t,es.className=`banner ${e==="coral"?"":e}`.trim(),es.classList.remove("hidden"),es.style.animation="none",es.offsetWidth,es.style.animation="",window.clearTimeout(_u),_u=window.setTimeout(()=>es.classList.add("hidden"),2500)}function li(i){Sa.textContent=i,Sa.classList.remove("hidden"),window.clearTimeout(vu),vu=window.setTimeout(()=>Sa.classList.add("hidden"),2300)}const Ey=Array.from(document.querySelectorAll("[data-net]"));function Ty(i,t){const e=t.peers>0?`${t.peers}명`:"";t.mode==="websocket"?(i.dataset.state="online",i.textContent=e?`🟢 ${e}`:"🟢 실시간",i.title=e?`실시간 연결 · 같은 방 ${e}`:"다른 기기·휴대폰과 실시간으로 연결됐어요"):t.mode==="connecting"?(i.dataset.state="waiting",i.textContent="🟡 연결 중",i.title="실시간 서버에 연결하는 중이에요"):t.mode==="local"?(i.dataset.state="local",i.textContent="⚪ 로컬",i.title="같은 브라우저 탭끼리만 동기화돼요 (실시간 서버에 연결되지 않음)"):(i.dataset.state="off",i.textContent="⚫ 오프라인",i.title="동기화가 꺼져 있어요. 혼자 플레이합니다")}function ef(i,t){const e=Ey.filter(n=>n.dataset.net===t);e.length!==0&&i.onStatus(n=>e.forEach(s=>Ty(s,n)))}ef(Kd,"lobby");ef(Jd,"play");let Le="landing",Li=null,js=!1;function nf(i){js=!0,mu.classList.add("on"),window.setTimeout(()=>{i(),window.setTimeout(()=>mu.classList.remove("on"),70),js=!1},200)}const Tl=i=>(i+.25)/1.25*100;let io=!1;const Qs=i=>`${(Math.round(i*10)/10).toFixed(1)}m`;function sf(i,t,e){const n=cn(i);vy.textContent=Qs(t),My.textContent=Qs(e),yy.textContent=n.code}function rf(i,t,e){const n=i>1.02,s=Math.max(1,Math.round(t-e));wl.style.left=`${Tl(n?1:Math.max(0,i))}%`,wl.classList.toggle("short",n),xu.classList.toggle("short",n),xu.textContent=n?`🎯 ${Qs(t)} · ${s}m 부족`:`🎯 목표 ${Math.round(Math.min(1,Math.max(0,i))*100)}%`}function of(i){const t=Math.max(-.25,Math.min(1,i.value));xy.style.left=`${Tl(t)}%`;const e=i.phase==="power"?t:i.power;gy.style.width=`${Math.max(0,e)*80}%`;const n=i.phase==="impact"||i.phase==="done";gu.style.display=n?"block":"none",gu.style.left=`${Tl(i.power)}%`,io=i.phase==="power"||i.phase==="impact",no.classList.toggle("live",io),no.classList.toggle("charging",i.phase==="power"),no.classList.toggle("hit",i.phase==="impact"&&Math.abs(i.value)<=.105),_y.textContent=i.hint,rf(i.neededPower,i.distance,i.clubMax),wl.classList.toggle("live",io),jd.textContent=`${i.powerPercent}%`,Qd.textContent=Qs(i.estimate),sf(i.club,i.distance,i.clubMax),tf.textContent=`${cn(i.club).code} ${cn(i.club).name}`,i.phase==="idle"||i.phase==="done"?(ba.textContent="스윙!",wa.textContent="꾹 눌러 파워",is.classList.remove("armed","impact")):i.phase==="power"?(ba.textContent="놓으면 확정",wa.textContent=`${i.powerPercent}%`,is.classList.add("armed"),is.classList.remove("impact")):(ba.textContent="임팩트!",wa.textContent="존에서 탭",is.classList.remove("armed"),is.classList.add("impact"));const s=i.phase==="power"||i.phase==="impact";Ao.querySelectorAll(".club-chip").forEach(r=>{r.disabled=s})}function Ay(i,t,e,n){Ao.querySelectorAll(".club-chip").forEach(r=>{const o=r.dataset.club;r.classList.toggle("active",o===i),r.classList.toggle("recommended",o===t),r.setAttribute("aria-pressed",String(o===i))});const s=cn(i);tf.textContent=`${s.code} ${s.name}`,hc.textContent=ec[n],cc.textContent=`${e<10?e.toFixed(1):Math.round(e)}m`}Sl.forEach(i=>{const t=document.createElement("button");t.type="button",t.className="club-chip",t.dataset.club=i.id,t.title=`${i.name} · ${i.note}`,t.setAttribute("aria-label",`${i.code} ${i.name}`);const e=document.createElement("b");e.textContent=i.code;const n=document.createElement("span");n.textContent=i.short;const s=document.createElement("i");s.className="rec-tag",s.textContent="추천",t.append(e,n,s),Ao.appendChild(t)});Ao.addEventListener("click",i=>{const e=i.target.closest(".club-chip");if(!e)return;const n=e.dataset.club;n&&(ue.unlock(),Se.setClub(n))});function af(i,t){let e=0;const n=r=>{r.preventDefault?.(),ue.unlock(),Se.aimBy(t),window.clearInterval(e),e=window.setInterval(()=>Se.aimBy(t),90)},s=()=>{window.clearInterval(e),e=0};i.addEventListener("pointerdown",n),i.addEventListener("pointerup",s),i.addEventListener("pointerleave",s),i.addEventListener("pointercancel",s)}af(by,-.045);af(wy,.045);const Se=new OM({scene:jn,camera:wi,audio:ue,realtime:Jd,events:{onHole:i=>{Wt("hole-no").textContent=`${i.index+1}홀`,Wt("hole-par").textContent=`Par ${i.par}`,Wt("hole-name").textContent=i.name,Wt("hole-hint").textContent=i.hint,Wt("stroke-count").textContent="0",Wt("hole-dist").textContent="0",xf(i),Su(Se.getPeers())},onStroke:i=>{Wt("stroke-count").textContent=String(i)},onGauge:i=>{Le==="game"&&of(i)},onClub:(i,t,e,n)=>{Le==="game"&&Ay(i,t,e,n)},onView:i=>{Sy.textContent=Vd[i],El.classList.toggle("target",i==="target"),El.classList.toggle("top",i==="top")},onShot:(i,t)=>{Le==="game"&&(i.grade==="perfect"?li(`Perfect! ${t.name} 풀 임팩트`):i.grade==="good"?li(`Good · 살짝 ${i.error>0?"훅":"슬라이스"}`):li(`Miss · ${i.error>0?"훅":"슬라이스"}가 크게 났어요`))},onRest:(i,t,e)=>{Le==="game"&&(cc.textContent=`${i<10?i.toFixed(1):Math.round(i)}m`,hc.textContent=ec[t],Wt("stroke-count").textContent=String(e))},onHoled:(i,t,e)=>{if(Le!=="game")return;const n=Ce[i],s=t<=n.par;Gs(`${e}!`,`${i+1}홀 · ${t}타 (Par ${n.par})`,s?"good":"coral")},onPenalty:(i,t)=>{Le==="game"&&li(i==="water"?`워터 해저드! +1벌타 (${t}타)`:`아웃! 공을 되돌렸어요 (${t}타)`)},onBanner:(i,t,e)=>{Le==="game"&&Gs(i,t,e)},onToast:i=>{Le==="game"&&li(i)},onPeers:i=>Su(i),onRemoteHoled:(i,t,e)=>{Le==="game"&&Gs(`${i}님 홀인!`,`${t+1}홀 · ${e}타`,"plain")},onFinish:i=>{Le==="game"&&Uy(i)}}});Yd(is,Se,{onPress:()=>ue.unlock()});Yd(no,Se,{onPress:()=>ue.unlock()});const _s=new cy({scene:Qn,camera:wi,audio:ue,realtime:Kd,canvas:ic,events:{onEnterPlayroom:()=>Py(),onGateChange:i=>lc.classList.toggle("hidden",!i),onPlayers:(i,t)=>gf(i,t),onToast:i=>{Le==="lobby"&&li(i)}}});xf(Ce[0]);const Ry=new ty(ic,Se,{onToggleMute:()=>uc(),onToggleHelp:()=>fc(),onToggleView:()=>ff(),isActive:()=>Le==="game"}),Ro=Wt("nickname");Ro.value=Ql();let Al=bi[0].hex;const Mu=Wt("colors");bi.forEach((i,t)=>{const e=document.createElement("button");e.type="button",e.className="swatch",e.style.background=i.hex,e.title=i.name,e.setAttribute("aria-label",i.name),e.setAttribute("aria-pressed",String(t===0)),e.addEventListener("click",()=>{Al=i.hex,Mu.querySelectorAll(".swatch").forEach(n=>n.setAttribute("aria-pressed","false")),e.setAttribute("aria-pressed","true"),ue.unlock(),ue.ui()}),Mu.appendChild(e)});Fe("btn-dice").addEventListener("click",()=>{Ro.value=Ql(),ue.unlock(),ue.ui()});function Cy(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`p-${Math.random().toString(36).slice(2,10)}`}function lf(){if(Le!=="landing"||js)return;const i=(Ro.value.trim()||Ql()).slice(0,12);Li={id:Cy(),name:i,color:Al},ue.unlock(),ue.ui(),Le="lobby",my.classList.add("hidden"),sc.classList.add("hidden"),rc.classList.remove("hidden"),Wt("lobby-me-name").textContent=i,Wt("lobby-me-dot").style.background=Al,_s.enter(Li),gf([],[]),Gs("클럽하우스 입장",`${i}님, 이모지로 인사하며 광장을 둘러보세요`,"plain")}Fe("btn-teeoff").addEventListener("click",lf);Ro.addEventListener("keydown",i=>{i.key==="Enter"&&lf()});function Py(){if(!Li||Le!=="lobby"||js)return;const i=Li;ue.unlock(),ue.portal(),nf(()=>{sc.classList.remove("hidden"),rc.classList.add("hidden"),Wt("me-name").textContent=i.name,Wt("me-dot").style.background=i.color,Le="game",Se.join(i),_s.setMode("idle"),of({phase:"idle",value:0,power:0,hint:"스윙! 을 꾹 누르면 파워가 차요",club:Se.currentClub.id,distance:Se.cupDistance(),clubMax:Se.clubMax,powerPercent:0,estimate:0,neededPower:Se.neededPower}),Gs("플레이룸 입장","3홀 · 꾹 눌러 파워, 떼고 타이밍 탭!","plain"),Dy()||fc()})}function cf(){!Li||Le!=="game"||js||(ue.unlock(),ue.ui(),nf(()=>{oc.classList.add("hidden"),sc.classList.add("hidden"),rc.classList.remove("hidden"),Se.exitToLobby(),Le="lobby",_s.returnFromPlayroom(),lc.classList.add("hidden"),li("대기실로 돌아왔어요 🏛️")}))}lc.addEventListener("click",()=>{ue.unlock(),ue.ui(),_s.requestPlayroom()});const hf=Fe("btn-sound"),uf=Fe("btn-lobby-sound");function uc(){ue.unlock(),ue.setMuted(!ue.muted),df()}function df(){const i=ue.muted?"🔇":"🔊";[hf,uf].forEach(t=>{t.textContent=i,t.classList.toggle("off",ue.muted)})}hf.addEventListener("click",uc);uf.addEventListener("click",uc);df();function ff(){if(Le!=="game")return;ue.unlock();const i=Se.cycleView();li(`🔭 ${Vd[i]}${i==="back"?"":i==="target"?" · 착지 지점 보기":" · 코스 전체 보기"}`)}El.addEventListener("click",ff);Fe("btn-help").addEventListener("click",()=>{ue.unlock(),fc()});Fe("btn-lobby-help").addEventListener("click",()=>{ue.unlock(),ac.classList.remove("hidden")});Fe("btn-help-close").addEventListener("click",()=>ac.classList.add("hidden"));const pf="oneone:onboarding:v3",dc=Wt("onboarding"),Rl=Array.from(dc.querySelectorAll(".onb-step")),Ly=Array.from(Wt("onb-dots").querySelectorAll("i")),Cl=Fe("btn-onb-back"),mf=Fe("btn-onb-next");let Tn=0;function Dy(){try{return localStorage.getItem(pf)==="1"}catch{return!1}}function Iy(){try{localStorage.setItem(pf,"1")}catch{}}function Co(){Rl.forEach((i,t)=>i.classList.toggle("active",t===Tn)),Ly.forEach((i,t)=>i.classList.toggle("on",t===Tn)),Cl.disabled=Tn===0,Cl.style.visibility=Tn===0?"hidden":"visible",mf.textContent=Tn===Rl.length-1?"스윙 시작!":"다음"}function fc(){Tn=0,Co(),dc.classList.remove("hidden")}function pc(){dc.classList.add("hidden"),Iy()}Cl.addEventListener("click",()=>{Tn!==0&&(Tn-=1,ue.ui(),Co())});mf.addEventListener("click",()=>{if(ue.unlock(),ue.ui(),Tn>=Rl.length-1){pc();return}Tn+=1,Co()});Fe("btn-onb-skip").addEventListener("click",pc);Fe("btn-onb-help").addEventListener("click",()=>{pc(),ac.classList.remove("hidden")});Co();document.querySelectorAll("[data-emoji]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.emoji??_M[0];ue.unlock(),Se.sendEmoji(t)})});document.querySelectorAll("[data-lobby-emoji]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.lobbyEmoji??"👋";ue.unlock(),_s.sendEmoji(t)})});Fe("btn-lobby").addEventListener("click",cf);Fe("btn-back-lobby").addEventListener("click",cf);const Ea=Wt("players");let yu="";function Su(i){const t=Se.getLocalSnapshot(),e=JSON.stringify([t?.name,t?.total,t?.hole,i.map(n=>[n.id,n.name,n.color,n.total,n.hole,n.done])]);e!==yu&&(yu=e,Ea.replaceChildren(),t&&Ea.appendChild(bu(t,!0)),i.forEach(n=>Ea.appendChild(bu(n,!1))))}function bu(i,t){const e=document.createElement("div");e.className=`player-row${t?" me":""}`;const n=document.createElement("i");n.className="dot",n.style.background=i.color;const s=document.createElement("span");s.textContent=t?`${i.name} (나)`:i.name;const r=document.createElement("span");return r.className="score",r.textContent=i.done?"완료":`${i.total}타`,e.append(n,s,r),e}const Wr=Wt("lobby-players");function gf(i,t){const e=Li?.name??"플레이어",n=Li?.color??bi[0].hex;Wt("lobby-count").textContent=`대기실 ${1+i.length}명 · 플레이룸 ${t.length}명`,Wr.replaceChildren(),Wr.appendChild(Ta(e,n,!1)),i.forEach(s=>{Wr.appendChild(Ta(s.name,s.color,!1))}),t.forEach(s=>{Wr.appendChild(Ta(s.name,s.color,!0))})}function Ta(i,t,e){const n=document.createElement("div");n.className=`player-row${e?" in-playroom":""}`;const s=document.createElement("i");s.className="dot",s.style.background=t;const r=document.createElement("span");return r.textContent=e?`⛳ ${i}`:i,n.append(s,r),n}const xo=Wt("copy-hint");let Pl=null;function Ny(i){const t=[`⛳ 원온 미니골프 기록 — ${i.name}`];i.holes.forEach((n,s)=>{const r=Ce[s],o=n.strokes??0;t.push(`${s+1}홀 (Par ${n.par}, ${r.name}) · ${o}타 · ${nc(o,n.par)}`)});const e=i.diff===0?"이븐파":i.diff<0?`${Math.abs(i.diff)}언더파`:`+${i.diff}`;return t.push(`합계 ${i.total}타 / Par ${i.par} (${e})`),t.push("oneone minigolf"),t.join(`
`)}function Uy(i){Pl=i,xo.textContent="",Wt("score-sub").textContent=`${i.name} · 총 ${i.total}타 (Par ${i.par})`;const t=Wt("score-body");t.replaceChildren(),i.holes.forEach((n,s)=>{const r=n.strokes??0,o=nc(r,n.par),a=document.createElement("tr"),l=document.createElement("td");l.textContent=`${s+1}홀`;const c=document.createElement("td");c.textContent=String(n.par);const h=document.createElement("td");h.textContent=String(r);const d=document.createElement("td");d.textContent=o,d.className=`verdict${r<n.par?" under":""}`,a.append(l,c,h,d),t.appendChild(a)}),Wt("score-total").textContent=String(i.total);const e=Wt("score-verdict");e.textContent=i.verdict,e.className=`verdict${i.diff<0?" under":""}`,oc.classList.remove("hidden")}async function Fy(){if(!Pl)return;const i=Ny(Pl);try{await navigator.clipboard.writeText(i),xo.textContent="복사했어요! 붙여넣기 해보세요."}catch{const t=document.createElement("textarea");t.value=i,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const e=document.execCommand("copy");document.body.removeChild(t),xo.textContent=e?"복사했어요! 붙여넣기 해보세요.":"복사가 막혔어요. 기록을 직접 선택해 주세요."}}Fe("btn-copy").addEventListener("click",()=>{Fy()});Fe("btn-again").addEventListener("click",()=>{oc.classList.add("hidden"),xo.textContent="",ue.unlock(),ue.ui(),Se.restart()});function xf(i){const[t,e]=i.green?[i.green.x,i.green.z]:i.cup;Qe.position.set(t+20,30,e+18),Qe.target.position.set(t,0,e),Qe.target.updateMatrixWorld()}function mc(){const i=window.innerWidth,t=window.innerHeight;fs.setSize(i,t,!1),wi.aspect=i/Math.max(1,t),wi.fov=i<560?66:55,wi.updateProjectionMatrix()}window.addEventListener("resize",mc);window.addEventListener("orientationchange",()=>window.setTimeout(mc,120));mc();let wu=performance.now();function _f(i){const t=Math.min(.05,(i-wu)/1e3);wu=i,Le==="game"?(Se.update(t),fs.render(jn,wi)):(_s.update(t),fs.render(Qn,wi)),requestAnimationFrame(_f)}requestAnimationFrame(_f);window.setInterval(()=>{if(Le!=="game"||io)return;const i=Se.cupDistance();cc.textContent=`${i<10?i.toFixed(1):Math.round(i)}m`,Wt("hole-dist").textContent=i<10?i.toFixed(1):String(Math.round(i)),Wt("stroke-count").textContent=String(Se.currentStrokes),hc.textContent=ec[Se.surface],sf(Se.currentClub.id,i,Se.clubMax),jd.textContent="0%",Qd.textContent=Qs(0),rf(Se.neededPower,i,Se.clubMax)},200);window.addEventListener("beforeunload",()=>Ry.dispose());
