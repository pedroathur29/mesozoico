(()=>{var uE=0,kg=1,hE=2;var cv=1,kp=2,ar=3,is=0,Xt=1,bt=2,gi=0,zo=1,qn=2,Hg=3,Qg=4,Ih=5,Ba=100,fE=101,dE=102,pE=103,AE=104,mE=200,Il=201,gE=202,vE=203,Ld=204,Fa=205,_E=206,xE=207,bE=208,EE=209,yE=210,ME=211,CE=212,SE=213,wE=214,Ud=0,Od=1,Nd=2,Yo=3,kd=4,Hd=5,Qd=6,zd=7,Hp=0,TE=1,IE=2,Vr=0,Qp=1,zp=2,Gp=3,Rl=4,RE=5,Vp=6,Wp=7,zg="attached",BE="detached",lv=300,Pa=301,jo=302,Gd=303,Vd=304,Rh=306,kn=1e3,ti=1001,pl=1002,In=1003,qp=1004;var Ho=1005;var Kt=1006,ul=1007;var fn=1008;var jt=1009,uv=1010,hv=1011,Al=1012,Kp=1013,La=1014,wn=1015,Ot=1016,Xp=1017,Yp=1018,Jo=1020,fv=35902,dv=1021,pv=1022,dn=1023,Av=1024,mv=1025,Go=1026,Zo=1027,Ts=1028,jp=1029,rs=1030,Jp=1031;var Zp=1033,Yu=33776,Vo=33777,ju=33778,Wo=33779,ml=35840,Wd=35841,gl=35842,qd=35843,vl=36196,_l=37492,xl=37496,$o=37808,Kd=37809,Xd=37810,Yd=37811,ec=37812,jd=37813,Jd=37814,Zd=37815,$d=37816,ep=37817,tp=37818,np=37819,ip=37820,sp=37821,qo=36492,rp=36494,bl=36495,gv=36283,ap=36284,op=36285,cp=36286;var tc=2300,nc=2301,$f=2302,Gg=2400,Vg=2401,Wg=2402,DE=2500;var vv=0,Bh=1,Bl=2,FE=3200,$p=3201;var eA=0,PE=1,Sn="",Lt="srgb",Gn="srgb-linear",Dh="linear",Ct="srgb";var bo=7680;var qg=519,LE=512,UE=513,OE=514,_v=515,NE=516,kE=517,HE=518,QE=519,lp=35044;var Ju="300 es",or=2e3,Zu=2001,Wr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},$n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kg=1234567,hl=Math.PI/180,ic=180/Math.PI;function Ms(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($n[s&255]+$n[s>>8&255]+$n[s>>16&255]+$n[s>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[t&63|128]+$n[t>>8&255]+"-"+$n[t>>16&255]+$n[t>>24&255]+$n[n&255]+$n[n>>8&255]+$n[n>>16&255]+$n[n>>24&255]).toLowerCase()}function Nn(s,e,t){return Math.max(e,Math.min(t,s))}function tA(s,e){return(s%e+e)%e}function zE(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function GE(s,e,t){return s!==e?(t-s)/(e-s):0}function fl(s,e,t){return(1-t)*s+t*e}function VE(s,e,t,n){return fl(s,e,1-Math.exp(-t*n))}function WE(s,e=1){return e-Math.abs(tA(s,e*2)-e)}function qE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function KE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function XE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function YE(s,e){return s+Math.random()*(e-s)}function jE(s){return s*(.5-Math.random())}function JE(s){s!==void 0&&(Kg=s);let e=Kg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZE(s){return s*hl}function $E(s){return s*ic}function e1(s){return(s&s-1)===0&&s!==0}function t1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function n1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function i1(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*f,o*l);break;case"YZY":s.set(c*f,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*f,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ys(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function It(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ot={DEG2RAD:hl,RAD2DEG:ic,generateUUID:Ms,clamp:Nn,euclideanModulo:tA,mapLinear:zE,inverseLerp:GE,lerp:fl,damp:VE,pingpong:WE,smoothstep:qE,smootherstep:KE,randInt:XE,randFloat:YE,randFloatSpread:jE,seededRandom:JE,degToRad:ZE,radToDeg:$E,isPowerOfTwo:e1,ceilPowerOfTwo:t1,floorPowerOfTwo:n1,setQuaternionFromProperEuler:i1,normalize:It,denormalize:ys},Me=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},at=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],A=i[0],m=i[3],p=i[6],_=i[1],x=i[4],v=i[7],M=i[2],b=i[5],C=i[8];return r[0]=a*A+o*_+c*M,r[3]=a*m+o*x+c*b,r[6]=a*p+o*v+c*C,r[1]=l*A+u*_+h*M,r[4]=l*m+u*x+h*b,r[7]=l*p+u*v+h*C,r[2]=f*A+d*_+g*M,r[5]=f*m+d*x+g*b,r[8]=f*p+d*v+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/g;return e[0]=h*A,e[1]=(i*l-u*n)*A,e[2]=(o*n-i*a)*A,e[3]=f*A,e[4]=(u*t-i*c)*A,e[5]=(i*r-o*t)*A,e[6]=d*A,e[7]=(n*c-l*t)*A,e[8]=(a*t-n*r)*A,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ed.makeScale(e,t)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,t){return this.premultiply(ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ed=new at;function xv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function El(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function s1(){let s=El("canvas");return s.style.display="block",s}var Xg={};function cl(s){s in Xg||(Xg[s]=!0,console.warn(s))}function r1(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function a1(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function o1(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var lt={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(s.r=Ko(s.r),s.g=Ko(s.g),s.b=Ko(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sn?Dh:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ko(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Yg=[.64,.33,.3,.6,.15,.06],jg=[.2126,.7152,.0722],Jg=[.3127,.329],Zg=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$g=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt.define({[Gn]:{primaries:Yg,whitePoint:Jg,transfer:Dh,toXYZ:Zg,fromXYZ:$g,luminanceCoefficients:jg,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:Yg,whitePoint:Jg,transfer:Ct,toXYZ:Zg,fromXYZ:$g,luminanceCoefficients:jg,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}});var Eo,up=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Eo===void 0&&(Eo=El("canvas")),Eo.width=e.width,Eo.height=e.height;let n=Eo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Eo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=El("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=cr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},c1=0,$u=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(td(i[a].image)):r.push(td(i[a]))}else r=td(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function td(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?up.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var l1=0,tn=class s extends Wr{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ti,i=ti,r=Kt,a=fn,o=dn,c=jt,l=s.DEFAULT_ANISOTROPY,u=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=Ms(),this.name="",this.source=new $u(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=lv;tn.DEFAULT_ANISOTROPY=1;var ut=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],A=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-A)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+A)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,v=(d+1)/2,M=(p+1)/2,b=(u+f)/4,C=(h+A)/4,S=(g+m)/4;return x>v&&x>M?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=C/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=S/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=C/r,i=S/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-A)*(h-A)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-A)/_,this.z=(f-u)/_,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hp=class extends Wr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $u(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},eh=class extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=r[a+0],d=r[a+1],g=r[a+2],A=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=A;return}if(h!==A||c!==f||l!==d||u!==g){let m=1-o,p=c*f+l*d+u*g+h*A,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let M=Math.sqrt(x),b=Math.atan2(M,p*_);m=Math.sin(m*b)/M,o=Math.sin(o*b)/M}let v=o*_;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+A*v,m===1-o){let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(e0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(e0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nd=new I,e0=new Rn,Kn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_s.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_s.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_s.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_s):_s.fromBufferAttribute(r,a),_s.applyMatrix4(e.matrixWorld),this.expandByPoint(_s);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vu.copy(n.boundingBox)),vu.applyMatrix4(e.matrixWorld),this.union(vu)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_s),_s.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jc),_u.subVectors(this.max,Jc),yo.subVectors(e.a,Jc),Mo.subVectors(e.b,Jc),Co.subVectors(e.c,Jc),Ur.subVectors(Mo,yo),Or.subVectors(Co,Mo),Ma.subVectors(yo,Co);let t=[0,-Ur.z,Ur.y,0,-Or.z,Or.y,0,-Ma.z,Ma.y,Ur.z,0,-Ur.x,Or.z,0,-Or.x,Ma.z,0,-Ma.x,-Ur.y,Ur.x,0,-Or.y,Or.x,0,-Ma.y,Ma.x,0];return!id(t,yo,Mo,Co,_u)||(t=[1,0,0,0,1,0,0,0,1],!id(t,yo,Mo,Co,_u))?!1:(xu.crossVectors(Ur,Or),t=[xu.x,xu.y,xu.z],id(t,yo,Mo,Co,_u))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_s).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_s).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},er=[new I,new I,new I,new I,new I,new I,new I,new I],_s=new I,vu=new Kn,yo=new I,Mo=new I,Co=new I,Ur=new I,Or=new I,Ma=new I,Jc=new I,_u=new I,xu=new I,Ca=new I;function id(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ca.fromArray(s,r);let o=i.x*Math.abs(Ca.x)+i.y*Math.abs(Ca.y)+i.z*Math.abs(Ca.z),c=e.dot(Ca),l=t.dot(Ca),u=n.dot(Ca);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var u1=new Kn,Zc=new I,sd=new I,Wi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):u1.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zc.subVectors(e,this.center);let t=Zc.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zc,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zc.copy(e.center).add(sd)),this.expandByPoint(Zc.copy(e.center).sub(sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},tr=new I,rd=new I,bu=new I,Nr=new I,ad=new I,Eu=new I,od=new I,Oa=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rd.copy(e).add(t).multiplyScalar(.5),bu.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(rd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(bu),o=Nr.dot(this.direction),c=-Nr.dot(bu),l=Nr.lengthSq(),u=Math.abs(1-a*a),h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let A=1/u;h*=A,f*=A,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(rd).addScaledVector(bu,f),d}intersectSphere(e,t){tr.subVectors(e.center,this.origin);let n=tr.dot(this.direction),i=tr.dot(tr)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,n,i,r){ad.subVectors(t,e),Eu.subVectors(n,e),od.crossVectors(ad,Eu);let a=this.direction.dot(od),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nr.subVectors(this.origin,e);let c=o*this.direction.dot(Eu.crossVectors(Nr,Eu));if(c<0)return null;let l=o*this.direction.dot(ad.cross(Nr));if(l<0||c+l>a)return null;let u=-o*Nr.dot(od);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class s{constructor(e,t,n,i,r,a,o,c,l,u,h,f,d,g,A,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,f,d,g,A,m)}set(e,t,n,i,r,a,o,c,l,u,h,f,d,g,A,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=A,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/So.setFromMatrixColumn(e,0).length(),r=1/So.setFromMatrixColumn(e,1).length(),a=1/So.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,d=a*h,g=o*u,A=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-A*l,t[9]=-o*c,t[2]=A-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,g=l*u,A=l*h;t[0]=f+A*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=A+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,g=l*u,A=l*h;t[0]=f-A*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=A-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,d=a*h,g=o*u,A=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+A,t[1]=c*h,t[5]=A*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,g=o*c,A=o*l;t[0]=c*u,t[4]=A-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-A*h}else if(e.order==="XZY"){let f=a*c,d=a*l,g=o*c,A=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+A,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=A*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h1,e,f1)}lookAt(e,t,n){let i=this.elements;return Gi.subVectors(e,t),Gi.lengthSq()===0&&(Gi.z=1),Gi.normalize(),kr.crossVectors(n,Gi),kr.lengthSq()===0&&(Math.abs(n.z)===1?Gi.x+=1e-4:Gi.z+=1e-4,Gi.normalize(),kr.crossVectors(n,Gi)),kr.normalize(),yu.crossVectors(Gi,kr),i[0]=kr.x,i[4]=yu.x,i[8]=Gi.x,i[1]=kr.y,i[5]=yu.y,i[9]=Gi.y,i[2]=kr.z,i[6]=yu.z,i[10]=Gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],A=n[6],m=n[10],p=n[14],_=n[3],x=n[7],v=n[11],M=n[15],b=i[0],C=i[4],S=i[8],E=i[12],y=i[1],B=i[5],U=i[9],P=i[13],F=i[2],Y=i[6],z=i[10],j=i[14],q=i[3],ie=i[7],pe=i[11],Ee=i[15];return r[0]=a*b+o*y+c*F+l*q,r[4]=a*C+o*B+c*Y+l*ie,r[8]=a*S+o*U+c*z+l*pe,r[12]=a*E+o*P+c*j+l*Ee,r[1]=u*b+h*y+f*F+d*q,r[5]=u*C+h*B+f*Y+d*ie,r[9]=u*S+h*U+f*z+d*pe,r[13]=u*E+h*P+f*j+d*Ee,r[2]=g*b+A*y+m*F+p*q,r[6]=g*C+A*B+m*Y+p*ie,r[10]=g*S+A*U+m*z+p*pe,r[14]=g*E+A*P+m*j+p*Ee,r[3]=_*b+x*y+v*F+M*q,r[7]=_*C+x*B+v*Y+M*ie,r[11]=_*S+x*U+v*z+M*pe,r[15]=_*E+x*P+v*j+M*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],A=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*o*f+n*l*f+i*o*d-n*c*d)+A*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*u-r*c*u)+m*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+p*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],A=e[13],m=e[14],p=e[15],_=h*m*l-A*f*l+A*c*d-o*m*d-h*c*p+o*f*p,x=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,v=u*A*l-g*h*l+g*o*d-a*A*d-u*o*p+a*h*p,M=g*h*c-u*A*c-g*o*f+a*A*f+u*o*m-a*h*m,b=t*_+n*x+i*v+r*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/b;return e[0]=_*C,e[1]=(A*f*r-h*m*r-A*i*d+n*m*d+h*i*p-n*f*p)*C,e[2]=(o*m*r-A*c*r+A*i*l-n*m*l-o*i*p+n*c*p)*C,e[3]=(h*c*r-o*f*r-h*i*l+n*f*l+o*i*d-n*c*d)*C,e[4]=x*C,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*C,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*C,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*d+t*c*d)*C,e[8]=v*C,e[9]=(g*h*r-u*A*r-g*n*d+t*A*d+u*n*p-t*h*p)*C,e[10]=(a*A*r-g*o*r+g*n*l-t*A*l-a*n*p+t*o*p)*C,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*d-t*o*d)*C,e[12]=M*C,e[13]=(u*A*i-g*h*i+g*n*f-t*A*f-u*n*m+t*h*m)*C,e[14]=(g*o*i-a*A*i-g*n*c+t*A*c+a*n*m-t*o*m)*C,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,g=r*h,A=a*u,m=a*h,p=o*h,_=c*l,x=c*u,v=c*h,M=n.x,b=n.y,C=n.z;return i[0]=(1-(A+p))*M,i[1]=(d+v)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(d-v)*b,i[5]=(1-(f+p))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(g+x)*C,i[9]=(m-_)*C,i[10]=(1-(f+A))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=So.set(i[0],i[1],i[2]).length(),a=So.set(i[4],i[5],i[6]).length(),o=So.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],xs.copy(this);let l=1/r,u=1/a,h=1/o;return xs.elements[0]*=l,xs.elements[1]*=l,xs.elements[2]*=l,xs.elements[4]*=u,xs.elements[5]*=u,xs.elements[6]*=u,xs.elements[8]*=h,xs.elements[9]*=h,xs.elements[10]*=h,t.setFromRotationMatrix(xs),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=or){let c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(o===or)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Zu)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=or){let c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*l,d=(n+i)*u,g,A;if(o===or)g=(a+r)*h,A=-2*h;else if(o===Zu)g=r*h,A=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=A,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},So=new I,xs=new Ye,h1=new I(0,0,0),f1=new I(1,1,1),kr=new I,yu=new I,Gi=new I,t0=new Ye,n0=new Rn,Hn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return t0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return n0.setFromEuler(this),this.setFromQuaternion(n0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var yl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},d1=0,i0=new I,wo=new Rn,nr=new Ye,Mu=new I,$c=new I,p1=new I,A1=new Rn,s0=new I(1,0,0),r0=new I(0,1,0),a0=new I(0,0,1),o0={type:"added"},m1={type:"removed"},To={type:"childadded",child:null},cd={type:"childremoved",child:null},Gt=class s extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new Hn,n=new Rn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new at}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(s0,e)}rotateY(e){return this.rotateOnAxis(r0,e)}rotateZ(e){return this.rotateOnAxis(a0,e)}translateOnAxis(e,t){return i0.copy(e).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(s0,e)}translateY(e){return this.translateOnAxis(r0,e)}translateZ(e){return this.translateOnAxis(a0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mu.copy(e):Mu.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),$c.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt($c,Mu,this.up):nr.lookAt(Mu,$c,this.up),this.quaternion.setFromRotationMatrix(nr),i&&(nr.extractRotation(i.matrixWorld),wo.setFromRotationMatrix(nr),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(o0),To.child=e,this.dispatchEvent(To),To.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m1),cd.child=e,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(o0),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($c,e,p1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($c,A1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Gt.DEFAULT_UP=new I(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bs=new I,ir=new I,ld=new I,sr=new I,Io=new I,Ro=new I,c0=new I,ud=new I,hd=new I,fd=new I,dd=new ut,pd=new ut,Ad=new ut,zr=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bs.subVectors(e,t),i.cross(bs);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bs.subVectors(i,t),ir.subVectors(n,t),ld.subVectors(e,t);let a=bs.dot(bs),o=bs.dot(ir),c=bs.dot(ld),l=ir.dot(ir),u=ir.dot(ld),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,sr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,sr.x),c.addScaledVector(a,sr.y),c.addScaledVector(o,sr.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return dd.setScalar(0),pd.setScalar(0),Ad.setScalar(0),dd.fromBufferAttribute(e,t),pd.fromBufferAttribute(e,n),Ad.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(dd,r.x),a.addScaledVector(pd,r.y),a.addScaledVector(Ad,r.z),a}static isFrontFacing(e,t,n,i){return bs.subVectors(n,t),ir.subVectors(e,t),bs.cross(ir).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bs.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),bs.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Io.subVectors(i,n),Ro.subVectors(r,n),ud.subVectors(e,n);let c=Io.dot(ud),l=Ro.dot(ud);if(c<=0&&l<=0)return t.copy(n);hd.subVectors(e,i);let u=Io.dot(hd),h=Ro.dot(hd);if(u>=0&&h<=u)return t.copy(i);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Io,a);fd.subVectors(e,r);let d=Io.dot(fd),g=Ro.dot(fd);if(g>=0&&d<=g)return t.copy(r);let A=d*l-c*g;if(A<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ro,o);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return c0.subVectors(r,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(c0,o);let p=1/(m+A+f);return a=A*p,o=f*p,t.copy(n).addScaledVector(Io,a).addScaledVector(Ro,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Cu={h:0,s:0,l:0};function md(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=tA(e,1),t=Nn(t,0,1),n=Nn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=md(a,r,e+1/3),this.g=md(a,r,e),this.b=md(a,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=bv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return lt.fromWorkingColorSpace(ei.copy(this),e),Math.round(Nn(ei.r*255,0,255))*65536+Math.round(Nn(ei.g*255,0,255))*256+Math.round(Nn(ei.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(ei.copy(this),t);let n=ei.r,i=ei.g,r=ei.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=Lt){lt.fromWorkingColorSpace(ei.copy(this),e);let t=ei.r,n=ei.g,i=ei.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Cu);let n=fl(Hr.h,Cu.h,t),i=fl(Hr.s,Cu.s,t),r=fl(Hr.l,Cu.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new ye;ye.NAMES=bv;var g1=0,vi=class extends Wr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=Ms(),this.name="",this.blending=zo,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Fa,this.blendEquation=Ba,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(n.blending=this.blending),this.side!==is&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ld&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==Ba&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qn=class extends vi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var _n=new I,Su=new Me,St=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lp,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Su.fromBufferAttribute(this,t),Su.applyMatrix3(e),this.setXY(t,Su.x,Su.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ys(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lp&&(e.usage=this.usage),e}};var th=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var nh=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},v1=0,ns=new Ye,gd=new Gt,Bo=new I,Vi=new Kn,el=new Kn,On=new I,ht=class s extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xv(e)?nh:th)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ns.makeRotationFromQuaternion(e),this.applyMatrix4(ns),this}rotateX(e){return ns.makeRotationX(e),this.applyMatrix4(ns),this}rotateY(e){return ns.makeRotationY(e),this.applyMatrix4(ns),this}rotateZ(e){return ns.makeRotationZ(e),this.applyMatrix4(ns),this}translate(e,t,n){return ns.makeTranslation(e,t,n),this.applyMatrix4(ns),this}scale(e,t,n){return ns.makeScale(e,t,n),this.applyMatrix4(ns),this}lookAt(e){return gd.lookAt(e),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Vi.setFromBufferAttribute(r),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Vi.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Vi.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Vi.min),this.boundingBox.expandByPoint(Vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Vi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];el.setFromBufferAttribute(o),this.morphTargetsRelative?(On.addVectors(Vi.min,el.min),Vi.expandByPoint(On),On.addVectors(Vi.max,el.max),Vi.expandByPoint(On)):(Vi.expandByPoint(el.min),Vi.expandByPoint(el.max))}Vi.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)On.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(On));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)On.fromBufferAttribute(o,l),c&&(Bo.fromBufferAttribute(e,l),On.add(Bo)),i=Math.max(i,n.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let S=0;S<n.count;S++)o[S]=new I,c[S]=new I;let l=new I,u=new I,h=new I,f=new Me,d=new Me,g=new Me,A=new I,m=new I;function p(S,E,y){l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),d.sub(f),g.sub(f);let B=1/(d.x*g.y-g.x*d.y);isFinite(B)&&(A.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(B),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(B),o[S].add(A),o[E].add(A),o[y].add(A),c[S].add(m),c[E].add(m),c[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let S=0,E=_.length;S<E;++S){let y=_[S],B=y.start,U=y.count;for(let P=B,F=B+U;P<F;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let x=new I,v=new I,M=new I,b=new I;function C(S){M.fromBufferAttribute(i,S),b.copy(M);let E=o[S];x.copy(E),x.sub(M.multiplyScalar(M.dot(E))).normalize(),v.crossVectors(b,E);let B=v.dot(c[S])<0?-1:1;a.setXYZW(S,x.x,x.y,x.z,B)}for(let S=0,E=_.length;S<E;++S){let y=_[S],B=y.start,U=y.count;for(let P=B,F=B+U;P<F;P+=3)C(e.getX(P+0)),C(e.getX(P+1)),C(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),A=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,A),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)On.fromBufferAttribute(e,t),On.normalize(),e.setXYZ(t,On.x,On.y,On.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let A=0,m=c.length;A<m;A++){o.isInterleavedBufferAttribute?d=c[A]*o.data.stride+o.offset:d=c[A]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new St(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},l0=new Ye,Sa=new Oa,wu=new Wi,u0=new I,Tu=new I,Iu=new I,Ru=new I,vd=new I,Bu=new I,h0=new I,Du=new I,we=class extends Gt{constructor(e=new ht,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Bu.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(vd.fromBufferAttribute(h,e),a?Bu.addScaledVector(vd,u):Bu.addScaledVector(vd.sub(t),u))}t.add(Bu)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wu.copy(n.boundingSphere),wu.applyMatrix4(r),Sa.copy(e.ray).recast(e.near),!(wu.containsPoint(Sa.origin)===!1&&(Sa.intersectSphere(wu,u0)===null||Sa.origin.distanceToSquared(u0)>(e.far-e.near)**2))&&(l0.copy(r).invert(),Sa.copy(e.ray).applyMatrix4(l0),!(n.boundingBox!==null&&Sa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Sa)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,A=f.length;g<A;g++){let m=f[g],p=a[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,M=x;v<M;v+=3){let b=o.getX(v),C=o.getX(v+1),S=o.getX(v+2);i=Fu(this,p,e,n,l,u,h,b,C,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),A=Math.min(o.count,d.start+d.count);for(let m=g,p=A;m<p;m+=3){let _=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);i=Fu(this,a,e,n,l,u,h,_,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,A=f.length;g<A;g++){let m=f[g],p=a[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,M=x;v<M;v+=3){let b=v,C=v+1,S=v+2;i=Fu(this,p,e,n,l,u,h,b,C,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),A=Math.min(c.count,d.start+d.count);for(let m=g,p=A;m<p;m+=3){let _=m,x=m+1,v=m+2;i=Fu(this,a,e,n,l,u,h,_,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function _1(s,e,t,n,i,r,a,o){let c;if(e.side===Xt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===is,o),c===null)return null;Du.copy(o),Du.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Du);return l<t.near||l>t.far?null:{distance:l,point:Du.clone(),object:s}}function Fu(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Tu),s.getVertexPosition(c,Iu),s.getVertexPosition(l,Ru);let u=_1(s,e,t,n,Tu,Iu,Ru,h0);if(u){let h=new I;zr.getBarycoord(h0,Tu,Iu,Ru,h),i&&(u.uv=zr.getInterpolatedAttribute(i,o,c,l,h,new Me)),r&&(u.uv1=zr.getInterpolatedAttribute(r,o,c,l,h,new Me)),a&&(u.normal=zr.getInterpolatedAttribute(a,o,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new I,materialIndex:0};zr.getNormal(Tu,Iu,Ru,f.normal),u.face=f,u.barycoord=h}return u}var ni=class s extends ht{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function g(A,m,p,_,x,v,M,b,C,S,E){let y=v/C,B=M/S,U=v/2,P=M/2,F=b/2,Y=C+1,z=S+1,j=0,q=0,ie=new I;for(let pe=0;pe<z;pe++){let Ee=pe*B-P;for(let Q=0;Q<Y;Q++){let le=Q*y-U;ie[A]=le*_,ie[m]=Ee*x,ie[p]=F,l.push(ie.x,ie.y,ie.z),ie[A]=0,ie[m]=0,ie[p]=b>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Q/C),h.push(1-pe/S),j+=1}}for(let pe=0;pe<S;pe++)for(let Ee=0;Ee<C;Ee++){let Q=f+Ee+Y*pe,le=f+Ee+Y*(pe+1),X=f+(Ee+1)+Y*(pe+1),se=f+(Ee+1)+Y*pe;c.push(Q,le,se),c.push(le,X,se),q+=6}o.addGroup(d,q,E),d+=q,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function sc(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mi(s){let e={};for(let t=0;t<s.length;t++){let n=sc(s[t]);for(let i in n)e[i]=n[i]}return e}function x1(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ev(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Ki={clone:sc,merge:mi},b1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends vi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b1,this.fragmentShader=E1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sc(e.uniforms),this.uniformsGroups=x1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},rc=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qr=new I,f0=new Me,d0=new Me,xn=class extends rc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ic*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ic*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,f0,d0),t.subVectors(d0,f0)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Do=-90,Fo=1,fp=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new xn(Do,Fo,e,t);i.layers=this.layers,this.add(i);let r=new xn(Do,Fo,e,t);r.layers=this.layers,this.add(r);let a=new xn(Do,Fo,e,t);a.layers=this.layers,this.add(a);let o=new xn(Do,Fo,e,t);o.layers=this.layers,this.add(o);let c=new xn(Do,Fo,e,t);c.layers=this.layers,this.add(c);let l=new xn(Do,Fo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===or)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zu)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ih=class extends tn{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Pa,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dp=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ih(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ni(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:sc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:gi});r.uniforms.tEquirect.value=t;let a=new we(i,r),o=t.minFilter;return t.minFilter===fn&&(t.minFilter=Kt),new fp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},_d=new I,y1=new I,M1=new at,Es=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=_d.subVectors(n,t).cross(y1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_d),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||M1.getNormalMatrix(e),i=this.coplanarPoint(_d).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},wa=new Wi,Pu=new I,Ml=class{constructor(e=new Es,t=new Es,n=new Es,i=new Es,r=new Es,a=new Es){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=or){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],A=i[10],m=i[11],p=i[12],_=i[13],x=i[14],v=i[15];if(n[0].setComponents(c-r,f-l,m-d,v-p).normalize(),n[1].setComponents(c+r,f+l,m+d,v+p).normalize(),n[2].setComponents(c+a,f+u,m+g,v+_).normalize(),n[3].setComponents(c-a,f-u,m-g,v-_).normalize(),n[4].setComponents(c-o,f-h,m-A,v-x).normalize(),t===or)n[5].setComponents(c+o,f+h,m+A,v+x).normalize();else if(t===Zu)n[5].setComponents(o,h,A,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wa)}intersectsSprite(e){return wa.center.set(0,0,0),wa.radius=.7071067811865476,wa.applyMatrix4(e.matrixWorld),this.intersectsSphere(wa)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Pu.x=i.normal.x>0?e.max.x:e.min.x,Pu.y=i.normal.y>0?e.max.y:e.min.y,Pu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Pu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yv(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function C1(s){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],A=h[d];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++f,h[f]=A)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let A=h[d];s.bufferSubData(l,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Bn=class s extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],A=[],m=[];for(let p=0;p<u;p++){let _=p*f-a;for(let x=0;x<l;x++){let v=x*h-r;g.push(v,-_,0),A.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let x=_+l*p,v=_+l*(p+1),M=_+1+l*(p+1),b=_+1+l*p;d.push(x,v,b),d.push(v,M,b)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(A,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},S1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w1=`#ifdef USE_ALPHAHASH
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
#endif`,T1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D1=`#ifdef USE_AOMAP
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
#endif`,F1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P1=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,L1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k1=`#ifdef USE_IRIDESCENCE
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
#endif`,H1=`#ifdef USE_BUMPMAP
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
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y1=`#define PI 3.141592653589793
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
} // validated`,j1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J1=`vec3 transformedNormal = objectNormal;
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
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",iy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ay=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dy=`#ifdef USE_GRADIENTMAP
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
}`,py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gy=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,vy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,_y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,by=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,My=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Cy=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ly=`#if defined( USE_POINTS_UV )
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
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`#ifdef USE_MORPHTARGETS
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
#endif`,zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
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
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,lM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fM=`#ifdef USE_SKINNING
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
#endif`,dM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pM=`#ifdef USE_SKINNING
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
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xM=`#ifdef USE_TRANSMISSION
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SM=`uniform sampler2D t2D;
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
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`#include <common>
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
}`,DM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FM=`#define DISTANCE
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
}`,PM=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`uniform float scale;
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
}`,NM=`uniform vec3 diffuse;
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
}`,kM=`#include <common>
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
}`,HM=`uniform vec3 diffuse;
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
}`,QM=`#define LAMBERT
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
}`,zM=`#define LAMBERT
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
}`,GM=`#define MATCAP
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
}`,VM=`#define MATCAP
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
}`,WM=`#define NORMAL
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
}`,qM=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KM=`#define PHONG
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
}`,XM=`#define PHONG
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
}`,YM=`#define STANDARD
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
}`,jM=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,JM=`#define TOON
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
}`,ZM=`#define TOON
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
}`,$M=`uniform float size;
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
}`,eC=`uniform vec3 diffuse;
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
}`,tC=`#include <common>
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
}`,nC=`uniform vec3 color;
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
}`,iC=`uniform float rotation;
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
}`,sC=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:S1,alphahash_pars_fragment:w1,alphamap_fragment:T1,alphamap_pars_fragment:I1,alphatest_fragment:R1,alphatest_pars_fragment:B1,aomap_fragment:D1,aomap_pars_fragment:F1,batching_pars_vertex:P1,batching_vertex:L1,begin_vertex:U1,beginnormal_vertex:O1,bsdfs:N1,iridescence_fragment:k1,bumpmap_pars_fragment:H1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:G1,clipping_planes_vertex:V1,color_fragment:W1,color_pars_fragment:q1,color_pars_vertex:K1,color_vertex:X1,common:Y1,cube_uv_reflection_fragment:j1,defaultnormal_vertex:J1,displacementmap_pars_vertex:Z1,displacementmap_vertex:$1,emissivemap_fragment:ey,emissivemap_pars_fragment:ty,colorspace_fragment:ny,colorspace_pars_fragment:iy,envmap_fragment:sy,envmap_common_pars_fragment:ry,envmap_pars_fragment:ay,envmap_pars_vertex:oy,envmap_physical_pars_fragment:vy,envmap_vertex:cy,fog_vertex:ly,fog_pars_vertex:uy,fog_fragment:hy,fog_pars_fragment:fy,gradientmap_pars_fragment:dy,lightmap_pars_fragment:py,lights_lambert_fragment:Ay,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:_y,lights_toon_pars_fragment:xy,lights_phong_fragment:by,lights_phong_pars_fragment:Ey,lights_physical_fragment:yy,lights_physical_pars_fragment:My,lights_fragment_begin:Cy,lights_fragment_maps:Sy,lights_fragment_end:wy,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:Ry,logdepthbuf_vertex:By,map_fragment:Dy,map_pars_fragment:Fy,map_particle_fragment:Py,map_particle_pars_fragment:Ly,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:Oy,morphinstance_vertex:Ny,morphcolor_vertex:ky,morphnormal_vertex:Hy,morphtarget_pars_vertex:Qy,morphtarget_vertex:zy,normal_fragment_begin:Gy,normal_fragment_maps:Vy,normal_pars_fragment:Wy,normal_pars_vertex:qy,normal_vertex:Ky,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:jy,clearcoat_pars_fragment:Jy,iridescence_pars_fragment:Zy,opaque_fragment:$y,packing:eM,premultiplied_alpha_fragment:tM,project_vertex:nM,dithering_fragment:iM,dithering_pars_fragment:sM,roughnessmap_fragment:rM,roughnessmap_pars_fragment:aM,shadowmap_pars_fragment:oM,shadowmap_pars_vertex:cM,shadowmap_vertex:lM,shadowmask_pars_fragment:uM,skinbase_vertex:hM,skinning_pars_vertex:fM,skinning_vertex:dM,skinnormal_vertex:pM,specularmap_fragment:AM,specularmap_pars_fragment:mM,tonemapping_fragment:gM,tonemapping_pars_fragment:vM,transmission_fragment:_M,transmission_pars_fragment:xM,uv_pars_fragment:bM,uv_pars_vertex:EM,uv_vertex:yM,worldpos_vertex:MM,background_vert:CM,background_frag:SM,backgroundCube_vert:wM,backgroundCube_frag:TM,cube_vert:IM,cube_frag:RM,depth_vert:BM,depth_frag:DM,distanceRGBA_vert:FM,distanceRGBA_frag:PM,equirect_vert:LM,equirect_frag:UM,linedashed_vert:OM,linedashed_frag:NM,meshbasic_vert:kM,meshbasic_frag:HM,meshlambert_vert:QM,meshlambert_frag:zM,meshmatcap_vert:GM,meshmatcap_frag:VM,meshnormal_vert:WM,meshnormal_frag:qM,meshphong_vert:KM,meshphong_frag:XM,meshphysical_vert:YM,meshphysical_frag:jM,meshtoon_vert:JM,meshtoon_frag:ZM,points_vert:$M,points_frag:eC,shadow_vert:tC,shadow_frag:nC,sprite_vert:iC,sprite_frag:sC},Se={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ls={basic:{uniforms:mi([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:mi([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ye(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:mi([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:mi([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:mi([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ye(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:mi([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:mi([Se.points,Se.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:mi([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:mi([Se.common,Se.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:mi([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:mi([Se.sprite,Se.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:mi([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:mi([Se.lights,Se.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ls.physical={uniforms:mi([Ls.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Lu={r:0,b:0,g:0},Ta=new Hn,rC=new Ye;function aC(s,e,t,n,i,r,a){let o=new ye(0),c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function A(_){let x=!1,v=g(_);v===null?p(o,c):v&&v.isColor&&(p(v,1),x=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,x){let v=g(x);v&&(v.isCubeTexture||v.mapping===Rh)?(u===void 0&&(u=new we(new ni(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:sc(Ls.backgroundCube.uniforms),vertexShader:Ls.backgroundCube.vertexShader,fragmentShader:Ls.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ta.copy(x.backgroundRotation),Ta.x*=-1,Ta.y*=-1,Ta.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ta.y*=-1,Ta.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rC.makeRotationFromEuler(Ta)),u.material.toneMapped=lt.getTransfer(v.colorSpace)!==Ct,(h!==v||f!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new we(new Bn(2,2),new ze({name:"BackgroundMaterial",uniforms:sc(Ls.background.uniforms),vertexShader:Ls.background.vertexShader,fragmentShader:Ls.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=lt.getTransfer(v.colorSpace)!==Ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,x){_.getRGB(Lu,Ev(s)),n.buffers.color.setClear(Lu.r,Lu.g,Lu.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:A,addToRenderList:m}}function oC(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,B,U,P,F){let Y=!1,z=h(P,U,B);r!==z&&(r=z,l(r.object)),Y=d(y,P,U,F),Y&&g(y,P,U,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(y,B,U,P),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,B,U){let P=U.wireframe===!0,F=n[y.id];F===void 0&&(F={},n[y.id]=F);let Y=F[B.id];Y===void 0&&(Y={},F[B.id]=Y);let z=Y[P];return z===void 0&&(z=f(c()),Y[P]=z),z}function f(y){let B=[],U=[],P=[];for(let F=0;F<t;F++)B[F]=0,U[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:U,attributeDivisors:P,object:y,attributes:{},index:null}}function d(y,B,U,P){let F=r.attributes,Y=B.attributes,z=0,j=U.getAttributes();for(let q in j)if(j[q].location>=0){let pe=F[q],Ee=Y[q];if(Ee===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor)),pe===void 0||pe.attribute!==Ee||Ee&&pe.data!==Ee.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function g(y,B,U,P){let F={},Y=B.attributes,z=0,j=U.getAttributes();for(let q in j)if(j[q].location>=0){let pe=Y[q];pe===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor));let Ee={};Ee.attribute=pe,pe&&pe.data&&(Ee.data=pe.data),F[q]=Ee,z++}r.attributes=F,r.attributesNum=z,r.index=P}function A(){let y=r.newAttributes;for(let B=0,U=y.length;B<U;B++)y[B]=0}function m(y){p(y,0)}function p(y,B){let U=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;U[y]=1,P[y]===0&&(s.enableVertexAttribArray(y),P[y]=1),F[y]!==B&&(s.vertexAttribDivisor(y,B),F[y]=B)}function _(){let y=r.newAttributes,B=r.enabledAttributes;for(let U=0,P=B.length;U<P;U++)B[U]!==y[U]&&(s.disableVertexAttribArray(U),B[U]=0)}function x(y,B,U,P,F,Y,z){z===!0?s.vertexAttribIPointer(y,B,U,F,Y):s.vertexAttribPointer(y,B,U,P,F,Y)}function v(y,B,U,P){A();let F=P.attributes,Y=U.getAttributes(),z=B.defaultAttributeValues;for(let j in Y){let q=Y[j];if(q.location>=0){let ie=F[j];if(ie===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){let pe=ie.normalized,Ee=ie.itemSize,Q=e.get(ie);if(Q===void 0)continue;let le=Q.buffer,X=Q.type,se=Q.bytesPerElement,me=X===s.INT||X===s.UNSIGNED_INT||ie.gpuType===Kp;if(ie.isInterleavedBufferAttribute){let _e=ie.data,Oe=_e.stride,Ke=ie.offset;if(_e.isInstancedInterleavedBuffer){for(let Xe=0;Xe<q.locationSize;Xe++)p(q.location+Xe,_e.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Xe=0;Xe<q.locationSize;Xe++)m(q.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,le);for(let Xe=0;Xe<q.locationSize;Xe++)x(q.location+Xe,Ee/q.locationSize,X,pe,Oe*se,(Ke+Ee/q.locationSize*Xe)*se,me)}else{if(ie.isInstancedBufferAttribute){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,ie.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);s.bindBuffer(s.ARRAY_BUFFER,le);for(let _e=0;_e<q.locationSize;_e++)x(q.location+_e,Ee/q.locationSize,X,pe,Ee*se,Ee/q.locationSize*_e*se,me)}}else if(z!==void 0){let pe=z[j];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(q.location,pe);break;case 3:s.vertexAttrib3fv(q.location,pe);break;case 4:s.vertexAttrib4fv(q.location,pe);break;default:s.vertexAttrib1fv(q.location,pe)}}}}_()}function M(){S();for(let y in n){let B=n[y];for(let U in B){let P=B[U];for(let F in P)u(P[F].object),delete P[F];delete B[U]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let B=n[y.id];for(let U in B){let P=B[U];for(let F in P)u(P[F].object),delete P[F];delete B[U]}delete n[y.id]}function C(y){for(let B in n){let U=n[B];if(U[y.id]===void 0)continue;let P=U[y.id];for(let F in P)u(P[F].object),delete P[F];delete U[y.id]}}function S(){E(),a=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:A,enableAttribute:m,disableUnusedAttributes:_}}function cC(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let A=0;A<h;A++)g+=u[A]*f[A];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function lC(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==dn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let S=C===Ot&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jt&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==wn&&!S)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:M,maxSamples:b}}function uC(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Es,o=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,A=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{let _=r?0:n,x=_*4,v=p.clippingState||null;c.value=v,v=u(g,f,x,d);for(let M=0;M!==x;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let A=h!==null?h.length:0,m=null;if(A!==0){if(m=c.value,g!==!0||m===null){let p=d+A*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==A;++x,v+=4)a.copy(h[x]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,m}}function hC(s){let e=new WeakMap;function t(a,o){return o===Gd?a.mapping=Pa:o===Vd&&(a.mapping=jo),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Gd||o===Vd)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new dp(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var qr=class extends rc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qo=4,p0=[.125,.215,.35,.446,.526,.582],Da=20,xd=new qr,A0=new ye,bd=null,Ed=0,yd=0,Md=!1,Ra=(1+Math.sqrt(5))/2,Po=1/Ra,m0=[new I(-Ra,Po,0),new I(Ra,Po,0),new I(-Po,0,Ra),new I(Po,0,Ra),new I(0,Ra,-Po),new I(0,Ra,Po),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ac=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Ed,yd),this._renderer.xr.enabled=Md,e.scissorTest=!1,Uu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pa||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ot,format:dn,colorSpace:Gn,depthBuffer:!1},i=g0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fC(r)),this._blurMaterial=dC(r,e,t)}return i}_compileMaterial(e){let t=new we(this._lodPlanes[0],e);this._renderer.compile(t,xd)}_sceneToCubeUV(e,t,n,i){let o=new xn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(A0),u.toneMapping=Vr,u.autoClear=!1;let d=new Qn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new we(new ni,d),A=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,A=!0):(d.color.copy(A0),A=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let x=this._cubeSize;Uu(i,_*x,p>2?x:0,x,x),u.setRenderTarget(i),A&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Pa||e.mapping===jo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v0());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new we(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Uu(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,xd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=m0[(i-r-1)%m0.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new we(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Da-1),A=r/g,m=isFinite(r)?1+Math.floor(u*A):Da;m>Da&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Da}`);let p=[],_=0;for(let C=0;C<Da;++C){let S=C/A,E=Math.exp(-S*S/2);p.push(E),C===0?_+=E:C<m&&(_+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let v=this._sizeLods[i],M=3*v*(i>x-Qo?i-x+Qo:0),b=4*(this._cubeSize-v);Uu(t,M,b,3*v,2*v),c.setRenderTarget(t),c.render(h,xd)}};function fC(s){let e=[],t=[],n=[],i=s,r=s-Qo+1+p0.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Qo?c=p0[a-s+Qo-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,A=3,m=2,p=1,_=new Float32Array(A*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let b=0;b<d;b++){let C=b%3*2/3-1,S=b>2?0:-1,E=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];_.set(E,A*g*b),x.set(f,m*g*b);let y=[b,b,b,b,b,b];v.set(y,p*g*b)}let M=new ht;M.setAttribute("position",new St(_,A)),M.setAttribute("uv",new St(x,m)),M.setAttribute("faceIndex",new St(v,p)),e.push(M),i>Qo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function g0(s,e,t){let n=new Ut(s,e,t);return n.texture.mapping=Rh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uu(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function dC(s,e,t){let n=new Float32Array(Da),i=new I(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:Da,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nA(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function v0(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nA(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function _0(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nA(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function nA(){return`

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
	`}function pC(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Gd||c===Vd,u=c===Pa||c===jo;if(l||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ac(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let d=o.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new ac(s)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function AC(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&cl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mC(s,e,t,n){let i={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let A=f.morphAttributes[g];for(let m=0,p=A.length;m<p;m++)e.remove(A[m])}f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let A=d[g];for(let m=0,p=A.length;m<p;m++)e.update(A[m],s.ARRAY_BUFFER)}}function l(h){let f=[],d=h.index,g=h.attributes.position,A=0;if(d!==null){let _=d.array;A=d.version;for(let x=0,v=_.length;x<v;x+=3){let M=_[x+0],b=_[x+1],C=_[x+2];f.push(M,b,b,C,C,M)}}else if(g!==void 0){let _=g.array;A=g.version;for(let x=0,v=_.length/3-1;x<v;x+=3){let M=x+0,b=x+1,C=x+2;f.push(M,b,b,C,C,M)}}else return;let m=new(xv(f)?nh:th)(f,1);m.version=A;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function gC(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,A){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],A[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,A,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*A[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vC(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _C(s,e,t){let n=new WeakMap,i=new ut;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),A===!0&&(x=3);let v=o.attributes.position.count*x,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*M*4*h),C=new eh(b,v,M,h);C.type=wn,C.needsUpdate=!0;let S=x*4;for(let y=0;y<h;y++){let B=m[y],U=p[y],P=_[y],F=v*M*4*y;for(let Y=0;Y<B.count;Y++){let z=Y*S;d===!0&&(i.fromBufferAttribute(B,Y),b[F+z+0]=i.x,b[F+z+1]=i.y,b[F+z+2]=i.z,b[F+z+3]=0),g===!0&&(i.fromBufferAttribute(U,Y),b[F+z+4]=i.x,b[F+z+5]=i.y,b[F+z+6]=i.z,b[F+z+7]=0),A===!0&&(i.fromBufferAttribute(P,Y),b[F+z+8]=i.x,b[F+z+9]=i.y,b[F+z+10]=i.z,b[F+z+11]=P.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new Me(v,M)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let A=0;A<l.length;A++)d+=l[A];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function xC(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var sh=class extends tn{constructor(e,t,n,i,r,a,o,c,l,u=Go){if(u!==Go&&u!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Go&&(n=La),n===void 0&&u===Zo&&(n=Jo),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:In,this.minFilter=c!==void 0?c:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mv=new tn,x0=new sh(1,1),Cv=new eh,Sv=new Ua,wv=new ih,b0=[],E0=[],y0=new Float32Array(16),M0=new Float32Array(9),C0=new Float32Array(4);function fc(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=b0[i];if(r===void 0&&(r=new Float32Array(i),b0[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Fn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fh(s,e){let t=E0[e];t===void 0&&(t=new Int32Array(e),E0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function bC(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function EC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;s.uniform2fv(this.addr,e),Fn(t,e)}}function yC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dn(t,e))return;s.uniform3fv(this.addr,e),Fn(t,e)}}function MC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;s.uniform4fv(this.addr,e),Fn(t,e)}}function CC(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Fn(t,e)}else{if(Dn(t,n))return;C0.set(n),s.uniformMatrix2fv(this.addr,!1,C0),Fn(t,n)}}function SC(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Fn(t,e)}else{if(Dn(t,n))return;M0.set(n),s.uniformMatrix3fv(this.addr,!1,M0),Fn(t,n)}}function wC(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Fn(t,e)}else{if(Dn(t,n))return;y0.set(n),s.uniformMatrix4fv(this.addr,!1,y0),Fn(t,n)}}function TC(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function IC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;s.uniform2iv(this.addr,e),Fn(t,e)}}function RC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;s.uniform3iv(this.addr,e),Fn(t,e)}}function BC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;s.uniform4iv(this.addr,e),Fn(t,e)}}function DC(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function FC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;s.uniform2uiv(this.addr,e),Fn(t,e)}}function PC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;s.uniform3uiv(this.addr,e),Fn(t,e)}}function LC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;s.uniform4uiv(this.addr,e),Fn(t,e)}}function UC(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(x0.compareFunction=_v,r=x0):r=Mv,t.setTexture2D(e||r,i)}function OC(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sv,i)}function NC(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wv,i)}function kC(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cv,i)}function HC(s){switch(s){case 5126:return bC;case 35664:return EC;case 35665:return yC;case 35666:return MC;case 35674:return CC;case 35675:return SC;case 35676:return wC;case 5124:case 35670:return TC;case 35667:case 35671:return IC;case 35668:case 35672:return RC;case 35669:case 35673:return BC;case 5125:return DC;case 36294:return FC;case 36295:return PC;case 36296:return LC;case 35678:case 36198:case 36298:case 36306:case 35682:return UC;case 35679:case 36299:case 36307:return OC;case 35680:case 36300:case 36308:case 36293:return NC;case 36289:case 36303:case 36311:case 36292:return kC}}function QC(s,e){s.uniform1fv(this.addr,e)}function zC(s,e){let t=fc(e,this.size,2);s.uniform2fv(this.addr,t)}function GC(s,e){let t=fc(e,this.size,3);s.uniform3fv(this.addr,t)}function VC(s,e){let t=fc(e,this.size,4);s.uniform4fv(this.addr,t)}function WC(s,e){let t=fc(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qC(s,e){let t=fc(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function KC(s,e){let t=fc(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function XC(s,e){s.uniform1iv(this.addr,e)}function YC(s,e){s.uniform2iv(this.addr,e)}function jC(s,e){s.uniform3iv(this.addr,e)}function JC(s,e){s.uniform4iv(this.addr,e)}function ZC(s,e){s.uniform1uiv(this.addr,e)}function $C(s,e){s.uniform2uiv(this.addr,e)}function eS(s,e){s.uniform3uiv(this.addr,e)}function tS(s,e){s.uniform4uiv(this.addr,e)}function nS(s,e,t){let n=this.cache,i=e.length,r=Fh(t,i);Dn(n,r)||(s.uniform1iv(this.addr,r),Fn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mv,r[a])}function iS(s,e,t){let n=this.cache,i=e.length,r=Fh(t,i);Dn(n,r)||(s.uniform1iv(this.addr,r),Fn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sv,r[a])}function sS(s,e,t){let n=this.cache,i=e.length,r=Fh(t,i);Dn(n,r)||(s.uniform1iv(this.addr,r),Fn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wv,r[a])}function rS(s,e,t){let n=this.cache,i=e.length,r=Fh(t,i);Dn(n,r)||(s.uniform1iv(this.addr,r),Fn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cv,r[a])}function aS(s){switch(s){case 5126:return QC;case 35664:return zC;case 35665:return GC;case 35666:return VC;case 35674:return WC;case 35675:return qC;case 35676:return KC;case 5124:case 35670:return XC;case 35667:case 35671:return YC;case 35668:case 35672:return jC;case 35669:case 35673:return JC;case 5125:return ZC;case 36294:return $C;case 36295:return eS;case 36296:return tS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return sS;case 36289:case 36303:case 36311:case 36292:return rS}}var pp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=HC(t.type)}},Ap=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aS(t.type)}},mp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Cd=/(\w+)(\])?(\[|\.)?/g;function S0(s,e){s.seq.push(e),s.map[e.id]=e}function oS(s,e,t){let n=s.name,i=n.length;for(Cd.lastIndex=0;;){let r=Cd.exec(n),a=Cd.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){S0(t,l===void 0?new pp(o,s,e):new Ap(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new mp(o),S0(t,h)),t=h}}}var Xo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);oS(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function w0(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var cS=37297,lS=0;function uS(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var T0=new at;function hS(s){lt._getMatrix(T0,lt.workingColorSpace,s);let e=`mat3( ${T0.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(s)){case Dh:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function I0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+uS(s.getShaderSource(e),a)}else return i}function fS(s,e){let t=hS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dS(s,e){let t;switch(e){case Qp:t="Linear";break;case zp:t="Reinhard";break;case Gp:t="Cineon";break;case Rl:t="ACESFilmic";break;case Vp:t="AgX";break;case Wp:t="Neutral";break;case RE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ou=new I;function pS(){lt.getLuminanceCoefficients(Ou);let s=Ou.x.toFixed(4),e=Ou.y.toFixed(4),t=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function mS(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gS(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ll(s){return s!==""}function R0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(s){return s.replace(vS,xS)}var _S=new Map;function xS(s,e){let t=it[e];if(t===void 0){let n=_S.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gp(t)}var bS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(s){return s.replace(bS,ES)}function ES(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function F0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ar&&(e="SHADOWMAP_TYPE_VSM"),e}function MS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pa:case jo:e="ENVMAP_TYPE_CUBE";break;case Rh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function SS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hp:e="ENVMAP_BLENDING_MULTIPLY";break;case TE:e="ENVMAP_BLENDING_MIX";break;case IE:e="ENVMAP_BLENDING_ADD";break}return e}function wS(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function TS(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=yS(t),l=MS(t),u=CS(t),h=SS(t),f=wS(t),d=AS(t),g=mS(r),A=i.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ll).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ll).join(`
`),p.length>0&&(p+=`
`)):(m=[F0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),p=[F0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vr?"#define TONE_MAPPING":"",t.toneMapping!==Vr?it.tonemapping_pars_fragment:"",t.toneMapping!==Vr?dS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,fS("linearToOutputTexel",t.outputColorSpace),pS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ll).join(`
`)),a=gp(a),a=R0(a,t),a=B0(a,t),o=gp(o),o=R0(o,t),o=B0(o,t),a=D0(a),o=D0(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=_+m+a,v=_+p+o,M=w0(i,i.VERTEX_SHADER,x),b=w0(i,i.FRAGMENT_SHADER,v);i.attachShader(A,M),i.attachShader(A,b),t.index0AttributeName!==void 0?i.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function C(B){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(A).trim(),P=i.getShaderInfoLog(M).trim(),F=i.getShaderInfoLog(b).trim(),Y=!0,z=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,M,b);else{let j=I0(i,M,"vertex"),q=I0(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+U+`
`+j+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(P===""||F==="")&&(z=!1);z&&(B.diagnostics={runnable:Y,programLog:U,vertexShader:{log:P,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(M),i.deleteShader(b),S=new Xo(i,A),E=gS(i,A)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(A,cS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lS++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=M,this.fragmentShader=b,this}var IS=0,vp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _p(e),t.set(e,n)),n}},_p=class{constructor(e){this.id=IS++,this.code=e,this.usedTimes=0}};function RS(s,e,t,n,i,r,a){let o=new yl,c=new vp,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,y,B,U,P){let F=U.fog,Y=P.geometry,z=E.isMeshStandardMaterial?U.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),q=j&&j.mapping===Rh?j.image.height:null,ie=g[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ee=pe!==void 0?pe.length:0,Q=0;Y.morphAttributes.position!==void 0&&(Q=1),Y.morphAttributes.normal!==void 0&&(Q=2),Y.morphAttributes.color!==void 0&&(Q=3);let le,X,se,me;if(ie){let ve=Ls[ie];le=ve.vertexShader,X=ve.fragmentShader}else le=E.vertexShader,X=E.fragmentShader,c.update(E),se=c.getVertexShaderID(E),me=c.getFragmentShaderID(E);let _e=s.getRenderTarget(),Oe=s.state.buffers.depth.getReversed(),Ke=P.isInstancedMesh===!0,Xe=P.isBatchedMesh===!0,Et=!!E.map,st=!!E.matcap,Bt=!!j,V=!!E.aoMap,gn=!!E.lightMap,nt=!!E.bumpMap,Ze=!!E.normalMap,Ne=!!E.displacementMap,xt=!!E.emissiveMap,Ve=!!E.metalnessMap,D=!!E.roughnessMap,w=E.anisotropy>0,K=E.clearcoat>0,ce=E.dispersion>0,de=E.iridescence>0,ae=E.sheen>0,Ue=E.transmission>0,Ce=w&&!!E.anisotropyMap,Fe=K&&!!E.clearcoatMap,O=K&&!!E.clearcoatNormalMap,te=K&&!!E.clearcoatRoughnessMap,re=de&&!!E.iridescenceMap,ue=de&&!!E.iridescenceThicknessMap,he=ae&&!!E.sheenColorMap,ge=ae&&!!E.sheenRoughnessMap,je=!!E.specularMap,Te=!!E.specularColorMap,Re=!!E.specularIntensityMap,R=Ue&&!!E.transmissionMap,k=Ue&&!!E.thicknessMap,L=!!E.gradientMap,H=!!E.alphaMap,J=E.alphaTest>0,$=!!E.alphaHash,ne=!!E.extensions,oe=Vr;E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(oe=s.toneMapping);let fe={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:le,fragmentShader:X,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Xe,batchingColor:Xe&&P._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&P.instanceColor!==null,instancingMorph:Ke&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Gn,alphaToCoverage:!!E.alphaToCoverage,map:Et,matcap:st,envMap:Bt,envMapMode:Bt&&j.mapping,envMapCubeUVHeight:q,aoMap:V,lightMap:gn,bumpMap:nt,normalMap:Ze,displacementMap:f&&Ne,emissiveMap:xt,normalMapObjectSpace:Ze&&E.normalMapType===PE,normalMapTangentSpace:Ze&&E.normalMapType===eA,metalnessMap:Ve,roughnessMap:D,anisotropy:w,anisotropyMap:Ce,clearcoat:K,clearcoatMap:Fe,clearcoatNormalMap:O,clearcoatRoughnessMap:te,dispersion:ce,iridescence:de,iridescenceMap:re,iridescenceThicknessMap:ue,sheen:ae,sheenColorMap:he,sheenRoughnessMap:ge,specularMap:je,specularColorMap:Te,specularIntensityMap:Re,transmission:Ue,transmissionMap:R,thicknessMap:k,gradientMap:L,opaque:E.transparent===!1&&E.blending===zo&&E.alphaToCoverage===!1,alphaMap:H,alphaTest:J,alphaHash:$,combine:E.combine,mapUv:Et&&A(E.map.channel),aoMapUv:V&&A(E.aoMap.channel),lightMapUv:gn&&A(E.lightMap.channel),bumpMapUv:nt&&A(E.bumpMap.channel),normalMapUv:Ze&&A(E.normalMap.channel),displacementMapUv:Ne&&A(E.displacementMap.channel),emissiveMapUv:xt&&A(E.emissiveMap.channel),metalnessMapUv:Ve&&A(E.metalnessMap.channel),roughnessMapUv:D&&A(E.roughnessMap.channel),anisotropyMapUv:Ce&&A(E.anisotropyMap.channel),clearcoatMapUv:Fe&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:O&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:he&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:ge&&A(E.sheenRoughnessMap.channel),specularMapUv:je&&A(E.specularMap.channel),specularColorMapUv:Te&&A(E.specularColorMap.channel),specularIntensityMapUv:Re&&A(E.specularIntensityMap.channel),transmissionMapUv:R&&A(E.transmissionMap.channel),thicknessMapUv:k&&A(E.thicknessMap.channel),alphaMapUv:H&&A(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ze||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!Y.attributes.uv&&(Et||H),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Oe,skinning:P.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:Et&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===Ct,decodeVideoTextureEmissive:xt&&E.emissiveMap.isVideoTexture===!0&&lt.getTransfer(E.emissiveMap.colorSpace)===Ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bt,flipSided:E.side===Xt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ne&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&E.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function p(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let B in E.defines)y.push(B),y.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(_(y,E),x(y,E),y.push(s.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function _(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let y=g[E.type],B;if(y){let U=Ls[y];B=Ki.clone(U.uniforms)}else B=E.uniforms;return B}function M(E,y){let B;for(let U=0,P=u.length;U<P;U++){let F=u[U];if(F.cacheKey===y){B=F,++B.usedTimes;break}}return B===void 0&&(B=new TS(s,y,E,r),u.push(B)),B}function b(E){if(--E.usedTimes===0){let y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function S(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:S}}function BS(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function DS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function P0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function L0(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,A,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:A,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=A,p.group=m),e++,p}function o(h,f,d,g,A,m){let p=a(h,f,d,g,A,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,g,A,m){let p=a(h,f,d,g,A,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||DS),n.length>1&&n.sort(f||P0),i.length>1&&i.sort(f||P0)}function u(){for(let h=e,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function FS(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new L0,s.set(n,[a])):i>=r.length?(a=new L0,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function PS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ye};break;case"SpotLight":t={position:new I,direction:new I,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function LS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var US=0;function OS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function NS(s){let e=new PS,t=LS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new Ye,a=new Ye;function o(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,A=0,m=0,p=0,_=0,x=0,v=0,M=0,b=0,C=0;l.sort(OS);for(let E=0,y=l.length;E<y;E++){let B=l[E],U=B.color,P=B.intensity,F=B.distance,Y=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=U.r*P,h+=U.g*P,f+=U.b*P;else if(B.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(B.sh.coefficients[z],P);C++}else if(B.isDirectionalLight){let z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let j=B.shadow,q=t.get(B);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=B.shadow.matrix,_++}n.directional[d]=z,d++}else if(B.isSpotLight){let z=e.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(U).multiplyScalar(P),z.distance=F,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,n.spot[A]=z;let j=B.shadow;if(B.map&&(n.spotLightMap[M]=B.map,M++,j.updateMatrices(B),B.castShadow&&b++),n.spotLightMatrix[A]=j.matrix,B.castShadow){let q=t.get(B);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.spotShadow[A]=q,n.spotShadowMap[A]=Y,v++}A++}else if(B.isRectAreaLight){let z=e.get(B);z.color.copy(U).multiplyScalar(P),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),n.rectArea[m]=z,m++}else if(B.isPointLight){let z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){let j=B.shadow,q=t.get(B);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=B.shadow.matrix,x++}n.point[g]=z,g++}else if(B.isHemisphereLight){let z=e.get(B);z.skyColor.copy(B.color).multiplyScalar(P),z.groundColor.copy(B.groundColor).multiplyScalar(P),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let S=n.hash;(S.directionalLength!==d||S.pointLength!==g||S.spotLength!==A||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==_||S.numPointShadows!==x||S.numSpotShadows!==v||S.numSpotMaps!==M||S.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=A,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+M-b,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,S.directionalLength=d,S.pointLength=g,S.spotLength=A,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=_,S.numPointShadows=x,S.numSpotShadows=v,S.numSpotMaps=M,S.numLightProbes=C,n.version=US++)}function c(l,u){let h=0,f=0,d=0,g=0,A=0,m=u.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let x=l[p];if(x.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(x.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let v=n.hemi[A];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),A++}}}return{setup:o,setupView:c,state:n}}function U0(s){let e=new NS(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function kS(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new U0(s),e.set(i,[o])):r>=a.length?(o=new U0(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Cl=class extends vi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xp=class extends vi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},HS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QS=`uniform sampler2D shadow_pass;
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
}`;function zS(s,e,t){let n=new Ml,i=new Me,r=new Me,a=new ut,o=new Cl({depthPacking:$p}),c=new xp,l={},u=t.maxTextureSize,h={[is]:Xt,[Xt]:is,[bt]:bt},f=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:HS,fragmentShader:QS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ht;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new we(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cv;let p=this.type;this.render=function(b,C,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let E=s.getRenderTarget(),y=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),U=s.state;U.setBlending(gi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let P=p!==ar&&this.type===ar,F=p===ar&&this.type!==ar;for(let Y=0,z=b.length;Y<z;Y++){let j=b[Y],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let ie=q.getFrameExtents();if(i.multiply(ie),r.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ie.x),i.x=r.x*ie.x,q.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ie.y),i.y=r.y*ie.y,q.mapSize.y=r.y)),q.map===null||P===!0||F===!0){let Ee=this.type!==ar?{minFilter:In,magFilter:In}:{};q.map!==null&&q.map.dispose(),q.map=new Ut(i.x,i.y,Ee),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let pe=q.getViewportCount();for(let Ee=0;Ee<pe;Ee++){let Q=q.getViewport(Ee);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),U.viewport(a),q.updateMatrices(j,Ee),n=q.getFrustum(),v(C,S,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===ar&&_(q,S),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,y,B)};function _(b,C){let S=e.update(A);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ut(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,S,f,A,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,S,d,A,null)}function x(b,C,S,E){let y=null,B=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(B!==void 0)y=B;else if(y=S.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let U=y.uuid,P=C.uuid,F=l[U];F===void 0&&(F={},l[U]=F);let Y=F[P];Y===void 0&&(Y=y.clone(),F[P]=Y,C.addEventListener("dispose",M)),y=Y}if(y.visible=C.visible,y.wireframe=C.wireframe,E===ar?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,S.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=s.properties.get(y);U.light=S}return y}function v(b,C,S,E,y){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===ar)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let P=e.update(b),F=b.material;if(Array.isArray(F)){let Y=P.groups;for(let z=0,j=Y.length;z<j;z++){let q=Y[z],ie=F[q.materialIndex];if(ie&&ie.visible){let pe=x(b,ie,E,y);b.onBeforeShadow(s,b,C,S,P,pe,q),s.renderBufferDirect(S,null,P,pe,b,q),b.onAfterShadow(s,b,C,S,P,pe,q)}}}else if(F.visible){let Y=x(b,F,E,y);b.onBeforeShadow(s,b,C,S,P,Y,null),s.renderBufferDirect(S,null,P,Y,b,null),b.onAfterShadow(s,b,C,S,P,Y,null)}}let U=b.children;for(let P=0,F=U.length;P<F;P++)v(U[P],C,S,E,y)}function M(b){b.target.removeEventListener("dispose",M);for(let S in l){let E=l[S],y=b.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}var GS={[Ud]:Od,[Nd]:Qd,[kd]:zd,[Yo]:Hd,[Od]:Ud,[Qd]:Nd,[zd]:kd,[Hd]:Yo};function VS(s,e){function t(){let R=!1,k=new ut,L=null,H=new ut(0,0,0,0);return{setMask:function(J){L!==J&&!R&&(s.colorMask(J,J,J,J),L=J)},setLocked:function(J){R=J},setClear:function(J,$,ne,oe,fe){fe===!0&&(J*=oe,$*=oe,ne*=oe),k.set(J,$,ne,oe),H.equals(k)===!1&&(s.clearColor(J,$,ne,oe),H.copy(k))},reset:function(){R=!1,L=null,H.set(-1,0,0,0)}}}function n(){let R=!1,k=!1,L=null,H=null,J=null;return{setReversed:function($){if(k!==$){let ne=e.get("EXT_clip_control");k?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);let oe=J;J=null,this.setClear(oe)}k=$},getReversed:function(){return k},setTest:function($){$?_e(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},setMask:function($){L!==$&&!R&&(s.depthMask($),L=$)},setFunc:function($){if(k&&($=GS[$]),H!==$){switch($){case Ud:s.depthFunc(s.NEVER);break;case Od:s.depthFunc(s.ALWAYS);break;case Nd:s.depthFunc(s.LESS);break;case Yo:s.depthFunc(s.LEQUAL);break;case kd:s.depthFunc(s.EQUAL);break;case Hd:s.depthFunc(s.GEQUAL);break;case Qd:s.depthFunc(s.GREATER);break;case zd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}H=$}},setLocked:function($){R=$},setClear:function($){J!==$&&(k&&($=1-$),s.clearDepth($),J=$)},reset:function(){R=!1,L=null,H=null,J=null,k=!1}}}function i(){let R=!1,k=null,L=null,H=null,J=null,$=null,ne=null,oe=null,fe=null;return{setTest:function(ve){R||(ve?_e(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},setMask:function(ve){k!==ve&&!R&&(s.stencilMask(ve),k=ve)},setFunc:function(ve,Pe,Le){(L!==ve||H!==Pe||J!==Le)&&(s.stencilFunc(ve,Pe,Le),L=ve,H=Pe,J=Le)},setOp:function(ve,Pe,Le){($!==ve||ne!==Pe||oe!==Le)&&(s.stencilOp(ve,Pe,Le),$=ve,ne=Pe,oe=Le)},setLocked:function(ve){R=ve},setClear:function(ve){fe!==ve&&(s.clearStencil(ve),fe=ve)},reset:function(){R=!1,k=null,L=null,H=null,J=null,$=null,ne=null,oe=null,fe=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,A=!1,m=null,p=null,_=null,x=null,v=null,M=null,b=null,C=new ye(0,0,0),S=0,E=!1,y=null,B=null,U=null,P=null,F=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,j=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=j>=2);let ie=null,pe={},Ee=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),le=new ut().fromArray(Ee),X=new ut().fromArray(Q);function se(R,k,L,H){let J=new Uint8Array(4),$=s.createTexture();s.bindTexture(R,$),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<L;ne++)R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY?s.texImage3D(k,0,s.RGBA,1,1,H,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(k+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return $}let me={};me[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(s.DEPTH_TEST),a.setFunc(Yo),nt(!1),Ze(kg),_e(s.CULL_FACE),V(gi);function _e(R){u[R]!==!0&&(s.enable(R),u[R]=!0)}function Oe(R){u[R]!==!1&&(s.disable(R),u[R]=!1)}function Ke(R,k){return h[R]!==k?(s.bindFramebuffer(R,k),h[R]=k,R===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=k),R===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=k),!0):!1}function Xe(R,k){let L=d,H=!1;if(R){L=f.get(k),L===void 0&&(L=[],f.set(k,L));let J=R.textures;if(L.length!==J.length||L[0]!==s.COLOR_ATTACHMENT0){for(let $=0,ne=J.length;$<ne;$++)L[$]=s.COLOR_ATTACHMENT0+$;L.length=J.length,H=!0}}else L[0]!==s.BACK&&(L[0]=s.BACK,H=!0);H&&s.drawBuffers(L)}function Et(R){return g!==R?(s.useProgram(R),g=R,!0):!1}let st={[Ba]:s.FUNC_ADD,[fE]:s.FUNC_SUBTRACT,[dE]:s.FUNC_REVERSE_SUBTRACT};st[pE]=s.MIN,st[AE]=s.MAX;let Bt={[mE]:s.ZERO,[Il]:s.ONE,[gE]:s.SRC_COLOR,[Ld]:s.SRC_ALPHA,[yE]:s.SRC_ALPHA_SATURATE,[bE]:s.DST_COLOR,[_E]:s.DST_ALPHA,[vE]:s.ONE_MINUS_SRC_COLOR,[Fa]:s.ONE_MINUS_SRC_ALPHA,[EE]:s.ONE_MINUS_DST_COLOR,[xE]:s.ONE_MINUS_DST_ALPHA,[ME]:s.CONSTANT_COLOR,[CE]:s.ONE_MINUS_CONSTANT_COLOR,[SE]:s.CONSTANT_ALPHA,[wE]:s.ONE_MINUS_CONSTANT_ALPHA};function V(R,k,L,H,J,$,ne,oe,fe,ve){if(R===gi){A===!0&&(Oe(s.BLEND),A=!1);return}if(A===!1&&(_e(s.BLEND),A=!0),R!==Ih){if(R!==m||ve!==E){if((p!==Ba||v!==Ba)&&(s.blendEquation(s.FUNC_ADD),p=Ba,v=Ba),ve)switch(R){case zo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qn:s.blendFunc(s.ONE,s.ONE);break;case Hg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case zo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Hg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}_=null,x=null,M=null,b=null,C.set(0,0,0),S=0,m=R,E=ve}return}J=J||k,$=$||L,ne=ne||H,(k!==p||J!==v)&&(s.blendEquationSeparate(st[k],st[J]),p=k,v=J),(L!==_||H!==x||$!==M||ne!==b)&&(s.blendFuncSeparate(Bt[L],Bt[H],Bt[$],Bt[ne]),_=L,x=H,M=$,b=ne),(oe.equals(C)===!1||fe!==S)&&(s.blendColor(oe.r,oe.g,oe.b,fe),C.copy(oe),S=fe),m=R,E=!1}function gn(R,k){R.side===bt?Oe(s.CULL_FACE):_e(s.CULL_FACE);let L=R.side===Xt;k&&(L=!L),nt(L),R.blending===zo&&R.transparent===!1?V(gi):V(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let H=R.stencilWrite;o.setTest(H),H&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),xt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(R){y!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),y=R)}function Ze(R){R!==uE?(_e(s.CULL_FACE),R!==B&&(R===kg?s.cullFace(s.BACK):R===hE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),B=R}function Ne(R){R!==U&&(z&&s.lineWidth(R),U=R)}function xt(R,k,L){R?(_e(s.POLYGON_OFFSET_FILL),(P!==k||F!==L)&&(s.polygonOffset(k,L),P=k,F=L)):Oe(s.POLYGON_OFFSET_FILL)}function Ve(R){R?_e(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}function D(R){R===void 0&&(R=s.TEXTURE0+Y-1),ie!==R&&(s.activeTexture(R),ie=R)}function w(R,k,L){L===void 0&&(ie===null?L=s.TEXTURE0+Y-1:L=ie);let H=pe[L];H===void 0&&(H={type:void 0,texture:void 0},pe[L]=H),(H.type!==R||H.texture!==k)&&(ie!==L&&(s.activeTexture(L),ie=L),s.bindTexture(R,k||me[R]),H.type=R,H.texture=k)}function K(){let R=pe[ie];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function O(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(R){le.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function ge(R){X.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function je(R,k){let L=l.get(k);L===void 0&&(L=new WeakMap,l.set(k,L));let H=L.get(R);H===void 0&&(H=s.getUniformBlockIndex(k,R.name),L.set(R,H))}function Te(R,k){let H=l.get(k).get(R);c.get(k)!==H&&(s.uniformBlockBinding(k,H,R.__bindingPointIndex),c.set(k,H))}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ie=null,pe={},h={},f=new WeakMap,d=[],g=null,A=!1,m=null,p=null,_=null,x=null,v=null,M=null,b=null,C=new ye(0,0,0),S=0,E=!1,y=null,B=null,U=null,P=null,F=null,le.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:Oe,bindFramebuffer:Ke,drawBuffers:Xe,useProgram:Et,setBlending:V,setMaterial:gn,setFlipSided:nt,setCullFace:Ze,setLineWidth:Ne,setPolygonOffset:xt,setScissorTest:Ve,activeTexture:D,bindTexture:w,unbindTexture:K,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:re,texImage3D:ue,updateUBOMapping:je,uniformBlockBinding:Te,texStorage2D:O,texStorage3D:te,texSubImage2D:ae,texSubImage3D:Ue,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:he,viewport:ge,reset:Re}}function O0(s,e,t,n){let i=WS(n);switch(t){case dv:return s*e;case Av:return s*e;case mv:return s*e*2;case Ts:return s*e/i.components*i.byteLength;case jp:return s*e/i.components*i.byteLength;case rs:return s*e*2/i.components*i.byteLength;case Jp:return s*e*2/i.components*i.byteLength;case pv:return s*e*3/i.components*i.byteLength;case dn:return s*e*4/i.components*i.byteLength;case Zp:return s*e*4/i.components*i.byteLength;case Yu:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ju:case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:case qd:return Math.max(s,16)*Math.max(e,8)/4;case ml:case gl:return Math.max(s,8)*Math.max(e,8)/2;case vl:case _l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ep:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case tp:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case np:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ip:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case sp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qo:case rp:case bl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case gv:case ap:return Math.ceil(s/4)*Math.ceil(e/4)*8;case op:case cp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function WS(s){switch(s){case jt:case uv:return{byteLength:1,components:1};case Al:case hv:case Ot:return{byteLength:2,components:1};case Xp:case Yp:return{byteLength:2,components:4};case La:case Kp:case wn:return{byteLength:4,components:1};case fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function qS(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return d?new OffscreenCanvas(D,w):El("canvas")}function A(D,w,K){let ce=1,de=Ve(D);if((de.width>K||de.height>K)&&(ce=K/Math.max(de.width,de.height)),ce<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ae=Math.floor(ce*de.width),Ue=Math.floor(ce*de.height);h===void 0&&(h=g(ae,Ue));let Ce=w?g(ae,Ue):h;return Ce.width=ae,Ce.height=Ue,Ce.getContext("2d").drawImage(D,0,0,ae,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ae+"x"+Ue+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){s.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(D,w,K,ce,de=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ae=w;if(w===s.RED&&(K===s.FLOAT&&(ae=s.R32F),K===s.HALF_FLOAT&&(ae=s.R16F),K===s.UNSIGNED_BYTE&&(ae=s.R8)),w===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.R8UI),K===s.UNSIGNED_SHORT&&(ae=s.R16UI),K===s.UNSIGNED_INT&&(ae=s.R32UI),K===s.BYTE&&(ae=s.R8I),K===s.SHORT&&(ae=s.R16I),K===s.INT&&(ae=s.R32I)),w===s.RG&&(K===s.FLOAT&&(ae=s.RG32F),K===s.HALF_FLOAT&&(ae=s.RG16F),K===s.UNSIGNED_BYTE&&(ae=s.RG8)),w===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.RG8UI),K===s.UNSIGNED_SHORT&&(ae=s.RG16UI),K===s.UNSIGNED_INT&&(ae=s.RG32UI),K===s.BYTE&&(ae=s.RG8I),K===s.SHORT&&(ae=s.RG16I),K===s.INT&&(ae=s.RG32I)),w===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),K===s.UNSIGNED_INT&&(ae=s.RGB32UI),K===s.BYTE&&(ae=s.RGB8I),K===s.SHORT&&(ae=s.RGB16I),K===s.INT&&(ae=s.RGB32I)),w===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),K===s.UNSIGNED_INT&&(ae=s.RGBA32UI),K===s.BYTE&&(ae=s.RGBA8I),K===s.SHORT&&(ae=s.RGBA16I),K===s.INT&&(ae=s.RGBA32I)),w===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),w===s.RGBA){let Ue=de?Dh:lt.getTransfer(ce);K===s.FLOAT&&(ae=s.RGBA32F),K===s.HALF_FLOAT&&(ae=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ae=Ue===Ct?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(D,w){let K;return D?w===null||w===La||w===Jo?K=s.DEPTH24_STENCIL8:w===wn?K=s.DEPTH32F_STENCIL8:w===Al&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===La||w===Jo?K=s.DEPTH_COMPONENT24:w===wn?K=s.DEPTH_COMPONENT32F:w===Al&&(K=s.DEPTH_COMPONENT16),K}function M(D,w){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==In&&D.minFilter!==Kt?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function b(D){let w=D.target;w.removeEventListener("dispose",b),S(w),w.isVideoTexture&&u.delete(w)}function C(D){let w=D.target;w.removeEventListener("dispose",C),y(w)}function S(D){let w=n.get(D);if(w.__webglInit===void 0)return;let K=D.source,ce=f.get(K);if(ce){let de=ce[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&E(D),Object.keys(ce).length===0&&f.delete(K)}n.remove(D)}function E(D){let w=n.get(D);s.deleteTexture(w.__webglTexture);let K=D.source,ce=f.get(K);delete ce[w.__cacheKey],a.memory.textures--}function y(D){let w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(w.__webglFramebuffer[ce]))for(let de=0;de<w.__webglFramebuffer[ce].length;de++)s.deleteFramebuffer(w.__webglFramebuffer[ce][de]);else s.deleteFramebuffer(w.__webglFramebuffer[ce]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ce])}else{if(Array.isArray(w.__webglFramebuffer))for(let ce=0;ce<w.__webglFramebuffer.length;ce++)s.deleteFramebuffer(w.__webglFramebuffer[ce]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ce=0;ce<w.__webglColorRenderbuffer.length;ce++)w.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ce]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let K=D.textures;for(let ce=0,de=K.length;ce<de;ce++){let ae=n.get(K[ce]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(K[ce])}n.remove(D)}let B=0;function U(){B=0}function P(){let D=B;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),B+=1,D}function F(D){let w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function Y(D,w){let K=n.get(D);if(D.isVideoTexture&&Ne(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){let ce=D.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(K,D,w);return}}t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+w)}function z(D,w){let K=n.get(D);if(D.version>0&&K.__version!==D.version){X(K,D,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+w)}function j(D,w){let K=n.get(D);if(D.version>0&&K.__version!==D.version){X(K,D,w);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+w)}function q(D,w){let K=n.get(D);if(D.version>0&&K.__version!==D.version){se(K,D,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+w)}let ie={[kn]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[pl]:s.MIRRORED_REPEAT},pe={[In]:s.NEAREST,[qp]:s.NEAREST_MIPMAP_NEAREST,[Ho]:s.NEAREST_MIPMAP_LINEAR,[Kt]:s.LINEAR,[ul]:s.LINEAR_MIPMAP_NEAREST,[fn]:s.LINEAR_MIPMAP_LINEAR},Ee={[LE]:s.NEVER,[QE]:s.ALWAYS,[UE]:s.LESS,[_v]:s.LEQUAL,[OE]:s.EQUAL,[HE]:s.GEQUAL,[NE]:s.GREATER,[kE]:s.NOTEQUAL};function Q(D,w){if(w.type===wn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Kt||w.magFilter===ul||w.magFilter===Ho||w.magFilter===fn||w.minFilter===Kt||w.minFilter===ul||w.minFilter===Ho||w.minFilter===fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ie[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ie[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ie[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,pe[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,pe[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===In||w.minFilter!==Ho&&w.minFilter!==fn||w.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function le(D,w){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",b));let ce=w.source,de=f.get(ce);de===void 0&&(de={},f.set(ce,de));let ae=F(w);if(ae!==D.__cacheKey){de[ae]===void 0&&(de[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,K=!0),de[ae].usedTimes++;let Ue=de[D.__cacheKey];Ue!==void 0&&(de[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&E(w)),D.__cacheKey=ae,D.__webglTexture=de[ae].texture}return K}function X(D,w,K){let ce=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ce=s.TEXTURE_3D);let de=le(D,w),ae=w.source;t.bindTexture(ce,D.__webglTexture,s.TEXTURE0+K);let Ue=n.get(ae);if(ae.version!==Ue.__version||de===!0){t.activeTexture(s.TEXTURE0+K);let Ce=lt.getPrimaries(lt.workingColorSpace),Fe=w.colorSpace===Sn?null:lt.getPrimaries(w.colorSpace),O=w.colorSpace===Sn||Ce===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);let te=A(w.image,!1,i.maxTextureSize);te=xt(w,te);let re=r.convert(w.format,w.colorSpace),ue=r.convert(w.type),he=x(w.internalFormat,re,ue,w.colorSpace,w.isVideoTexture);Q(ce,w);let ge,je=w.mipmaps,Te=w.isVideoTexture!==!0,Re=Ue.__version===void 0||de===!0,R=ae.dataReady,k=M(w,te);if(w.isDepthTexture)he=v(w.format===Zo,w.type),Re&&(Te?t.texStorage2D(s.TEXTURE_2D,1,he,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,he,te.width,te.height,0,re,ue,null));else if(w.isDataTexture)if(je.length>0){Te&&Re&&t.texStorage2D(s.TEXTURE_2D,k,he,je[0].width,je[0].height);for(let L=0,H=je.length;L<H;L++)ge=je[L],Te?R&&t.texSubImage2D(s.TEXTURE_2D,L,0,0,ge.width,ge.height,re,ue,ge.data):t.texImage2D(s.TEXTURE_2D,L,he,ge.width,ge.height,0,re,ue,ge.data);w.generateMipmaps=!1}else Te?(Re&&t.texStorage2D(s.TEXTURE_2D,k,he,te.width,te.height),R&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,re,ue,te.data)):t.texImage2D(s.TEXTURE_2D,0,he,te.width,te.height,0,re,ue,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Te&&Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,k,he,je[0].width,je[0].height,te.depth);for(let L=0,H=je.length;L<H;L++)if(ge=je[L],w.format!==dn)if(re!==null)if(Te){if(R)if(w.layerUpdates.size>0){let J=O0(ge.width,ge.height,w.format,w.type);for(let $ of w.layerUpdates){let ne=ge.data.subarray($*J/ge.data.BYTES_PER_ELEMENT,($+1)*J/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,L,0,0,$,ge.width,ge.height,1,re,ne)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,L,0,0,0,ge.width,ge.height,te.depth,re,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,L,he,ge.width,ge.height,te.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?R&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,L,0,0,0,ge.width,ge.height,te.depth,re,ue,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,L,he,ge.width,ge.height,te.depth,0,re,ue,ge.data)}else{Te&&Re&&t.texStorage2D(s.TEXTURE_2D,k,he,je[0].width,je[0].height);for(let L=0,H=je.length;L<H;L++)ge=je[L],w.format!==dn?re!==null?Te?R&&t.compressedTexSubImage2D(s.TEXTURE_2D,L,0,0,ge.width,ge.height,re,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,L,he,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?R&&t.texSubImage2D(s.TEXTURE_2D,L,0,0,ge.width,ge.height,re,ue,ge.data):t.texImage2D(s.TEXTURE_2D,L,he,ge.width,ge.height,0,re,ue,ge.data)}else if(w.isDataArrayTexture)if(Te){if(Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,k,he,te.width,te.height,te.depth),R)if(w.layerUpdates.size>0){let L=O0(te.width,te.height,w.format,w.type);for(let H of w.layerUpdates){let J=te.data.subarray(H*L/te.data.BYTES_PER_ELEMENT,(H+1)*L/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,H,te.width,te.height,1,re,ue,J)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,re,ue,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,he,te.width,te.height,te.depth,0,re,ue,te.data);else if(w.isData3DTexture)Te?(Re&&t.texStorage3D(s.TEXTURE_3D,k,he,te.width,te.height,te.depth),R&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,re,ue,te.data)):t.texImage3D(s.TEXTURE_3D,0,he,te.width,te.height,te.depth,0,re,ue,te.data);else if(w.isFramebufferTexture){if(Re)if(Te)t.texStorage2D(s.TEXTURE_2D,k,he,te.width,te.height);else{let L=te.width,H=te.height;for(let J=0;J<k;J++)t.texImage2D(s.TEXTURE_2D,J,he,L,H,0,re,ue,null),L>>=1,H>>=1}}else if(je.length>0){if(Te&&Re){let L=Ve(je[0]);t.texStorage2D(s.TEXTURE_2D,k,he,L.width,L.height)}for(let L=0,H=je.length;L<H;L++)ge=je[L],Te?R&&t.texSubImage2D(s.TEXTURE_2D,L,0,0,re,ue,ge):t.texImage2D(s.TEXTURE_2D,L,he,re,ue,ge);w.generateMipmaps=!1}else if(Te){if(Re){let L=Ve(te);t.texStorage2D(s.TEXTURE_2D,k,he,L.width,L.height)}R&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re,ue,te)}else t.texImage2D(s.TEXTURE_2D,0,he,re,ue,te);m(w)&&p(ce),Ue.__version=ae.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function se(D,w,K){if(w.image.length!==6)return;let ce=le(D,w),de=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+K);let ae=n.get(de);if(de.version!==ae.__version||ce===!0){t.activeTexture(s.TEXTURE0+K);let Ue=lt.getPrimaries(lt.workingColorSpace),Ce=w.colorSpace===Sn?null:lt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Sn||Ue===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let O=w.isCompressedTexture||w.image[0].isCompressedTexture,te=w.image[0]&&w.image[0].isDataTexture,re=[];for(let H=0;H<6;H++)!O&&!te?re[H]=A(w.image[H],!0,i.maxCubemapSize):re[H]=te?w.image[H].image:w.image[H],re[H]=xt(w,re[H]);let ue=re[0],he=r.convert(w.format,w.colorSpace),ge=r.convert(w.type),je=x(w.internalFormat,he,ge,w.colorSpace),Te=w.isVideoTexture!==!0,Re=ae.__version===void 0||ce===!0,R=de.dataReady,k=M(w,ue);Q(s.TEXTURE_CUBE_MAP,w);let L;if(O){Te&&Re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,k,je,ue.width,ue.height);for(let H=0;H<6;H++){L=re[H].mipmaps;for(let J=0;J<L.length;J++){let $=L[J];w.format!==dn?he!==null?Te?R&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,J,0,0,$.width,$.height,he,$.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,J,je,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?R&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,J,0,0,$.width,$.height,he,ge,$.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,J,je,$.width,$.height,0,he,ge,$.data)}}}else{if(L=w.mipmaps,Te&&Re){L.length>0&&k++;let H=Ve(re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,k,je,H.width,H.height)}for(let H=0;H<6;H++)if(te){Te?R&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,re[H].width,re[H].height,he,ge,re[H].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,je,re[H].width,re[H].height,0,he,ge,re[H].data);for(let J=0;J<L.length;J++){let ne=L[J].image[H].image;Te?R&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,J+1,0,0,ne.width,ne.height,he,ge,ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,J+1,je,ne.width,ne.height,0,he,ge,ne.data)}}else{Te?R&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,he,ge,re[H]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,je,he,ge,re[H]);for(let J=0;J<L.length;J++){let $=L[J];Te?R&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,J+1,0,0,he,ge,$.image[H]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,J+1,je,he,ge,$.image[H])}}}m(w)&&p(s.TEXTURE_CUBE_MAP),ae.__version=de.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function me(D,w,K,ce,de,ae){let Ue=r.convert(K.format,K.colorSpace),Ce=r.convert(K.type),Fe=x(K.internalFormat,Ue,Ce,K.colorSpace),O=n.get(w),te=n.get(K);if(te.__renderTarget=w,!O.__hasExternalTextures){let re=Math.max(1,w.width>>ae),ue=Math.max(1,w.height>>ae);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,ae,Fe,re,ue,w.depth,0,Ue,Ce,null):t.texImage2D(de,ae,Fe,re,ue,0,Ue,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Ze(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,de,te.__webglTexture,0,nt(w)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,de,te.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(D,w,K){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){let ce=w.depthTexture,de=ce&&ce.isDepthTexture?ce.type:null,ae=v(w.stencilBuffer,de),Ue=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=nt(w);Ze(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,ae,w.width,w.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,ae,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ae,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,D)}else{let ce=w.textures;for(let de=0;de<ce.length;de++){let ae=ce[de],Ue=r.convert(ae.format,ae.colorSpace),Ce=r.convert(ae.type),Fe=x(ae.internalFormat,Ue,Ce,ae.colorSpace),O=nt(w);K&&Ze(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,O,Fe,w.width,w.height):Ze(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,O,Fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ce=n.get(w.depthTexture);ce.__renderTarget=w,(!ce.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);let de=ce.__webglTexture,ae=nt(w);if(w.depthTexture.format===Go)Ze(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(w.depthTexture.format===Zo)Ze(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Ke(D){let w=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){let ce=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ce){let de=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ce.removeEventListener("dispose",de)};ce.addEventListener("dispose",de),w.__depthDisposeCallback=de}w.__boundDepthTexture=ce}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Oe(w.__webglFramebuffer,D)}else if(K){w.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ce]),w.__webglDepthbuffer[ce]===void 0)w.__webglDepthbuffer[ce]=s.createRenderbuffer(),_e(w.__webglDepthbuffer[ce],D,!1);else{let de=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),_e(w.__webglDepthbuffer,D,!1);else{let ce=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,de)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(D,w,K){let ce=n.get(D);w!==void 0&&me(ce.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Ke(D)}function Et(D){let w=D.texture,K=n.get(D),ce=n.get(w);D.addEventListener("dispose",C);let de=D.textures,ae=D.isWebGLCubeRenderTarget===!0,Ue=de.length>1;if(Ue||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=w.version,a.memory.textures++),ae){K.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)K.__webglFramebuffer[Ce][Fe]=s.createFramebuffer()}else K.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)K.__webglFramebuffer[Ce]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let Ce=0,Fe=de.length;Ce<Fe;Ce++){let O=n.get(de[Ce]);O.__webglTexture===void 0&&(O.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&Ze(D)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ce=0;Ce<de.length;Ce++){let Fe=de[Ce];K.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ce]);let O=r.convert(Fe.format,Fe.colorSpace),te=r.convert(Fe.type),re=x(Fe.internalFormat,O,te,Fe.colorSpace,D.isXRRenderTarget===!0),ue=nt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,re,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),Q(s.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)me(K.__webglFramebuffer[Ce][Fe],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else me(K.__webglFramebuffer[Ce],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);m(w)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let Ce=0,Fe=de.length;Ce<Fe;Ce++){let O=de[Ce],te=n.get(O);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),Q(s.TEXTURE_2D,O),me(K.__webglFramebuffer,D,O,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),m(O)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ce.__webglTexture),Q(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)me(K.__webglFramebuffer[Fe],D,w,s.COLOR_ATTACHMENT0,Ce,Fe);else me(K.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,Ce,0);m(w)&&p(Ce),t.unbindTexture()}D.depthBuffer&&Ke(D)}function st(D){let w=D.textures;for(let K=0,ce=w.length;K<ce;K++){let de=w[K];if(m(de)){let ae=_(D),Ue=n.get(de).__webglTexture;t.bindTexture(ae,Ue),p(ae),t.unbindTexture()}}}let Bt=[],V=[];function gn(D){if(D.samples>0){if(Ze(D)===!1){let w=D.textures,K=D.width,ce=D.height,de=s.COLOR_BUFFER_BIT,ae=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=n.get(D),Ce=w.length>1;if(Ce)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Fe]);let O=n.get(w[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,O,0)}s.blitFramebuffer(0,0,K,ce,0,0,K,ce,de,s.NEAREST),c===!0&&(Bt.length=0,V.length=0,Bt.push(s.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Bt.push(ae),V.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Fe]);let O=n.get(w[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,O,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function nt(D){return Math.min(i.maxSamples,D.samples)}function Ze(D){let w=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ne(D){let w=a.render.frame;u.get(D)!==w&&(u.set(D,w),D.update())}function xt(D,w){let K=D.colorSpace,ce=D.format,de=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Gn&&K!==Sn&&(lt.getTransfer(K)===Ct?(ce!==dn||de!==jt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function Ve(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Xe,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ze}function KS(s,e){function t(n,i=Sn){let r,a=lt.getTransfer(i);if(n===jt)return s.UNSIGNED_BYTE;if(n===Xp)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Yp)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fv)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===uv)return s.BYTE;if(n===hv)return s.SHORT;if(n===Al)return s.UNSIGNED_SHORT;if(n===Kp)return s.INT;if(n===La)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===Ot)return s.HALF_FLOAT;if(n===dv)return s.ALPHA;if(n===pv)return s.RGB;if(n===dn)return s.RGBA;if(n===Av)return s.LUMINANCE;if(n===mv)return s.LUMINANCE_ALPHA;if(n===Go)return s.DEPTH_COMPONENT;if(n===Zo)return s.DEPTH_STENCIL;if(n===Ts)return s.RED;if(n===jp)return s.RED_INTEGER;if(n===rs)return s.RG;if(n===Jp)return s.RG_INTEGER;if(n===Zp)return s.RGBA_INTEGER;if(n===Yu||n===Vo||n===ju||n===Wo)if(a===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ju)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ju)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===Wd||n===gl||n===qd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===_l||n===xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===_l)return a===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$o||n===Kd||n===Xd||n===Yd||n===ec||n===jd||n===Jd||n===Zd||n===$d||n===ep||n===tp||n===np||n===ip||n===sp)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$o)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kd)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xd)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yd)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jd)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jd)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zd)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$d)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ep)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tp)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===np)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ip)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sp)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===rp||n===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qo)return a===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gv||n===ap||n===op||n===cp)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ap)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===op)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var bp=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Tn=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},XS={type:"move"},dl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let A of e.hand.values()){let m=t.getJointPose(A,n),p=this._getHandJoint(l,A);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(XS)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},YS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jS=`
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

}`,Ep=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new tn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ze({vertexShader:YS,fragmentShader:jS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yp=class extends Wr{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,A=new Ep,m=t.getContextAttributes(),p=null,_=null,x=[],v=[],M=new Me,b=null,C=new xn;C.viewport=new ut;let S=new xn;S.viewport=new ut;let E=[C,S],y=new bp,B=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let se=x[X];return se===void 0&&(se=new dl,x[X]=se),se.getTargetRaySpace()},this.getControllerGrip=function(X){let se=x[X];return se===void 0&&(se=new dl,x[X]=se),se.getGripSpace()},this.getHand=function(X){let se=x[X];return se===void 0&&(se=new dl,x[X]=se),se.getHandSpace()};function P(X){let se=v.indexOf(X.inputSource);if(se===-1)return;let me=x[se];me!==void 0&&(me.update(X.inputSource,X.frame,l||a),me.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",Y);for(let X=0;X<x.length;X++){let se=v[X];se!==null&&(v[X]=null,x[X].disconnect(se))}B=null,U=null,A.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,_=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",F),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0){let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ut(d.framebufferWidth,d.framebufferHeight,{format:dn,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,me=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Zo:Go,me=m.stencil?Jo:La);let Oe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ut(f.textureWidth,f.textureHeight,{format:dn,type:jt,depthTexture:new sh(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function Y(X){for(let se=0;se<X.removed.length;se++){let me=X.removed[se],_e=v.indexOf(me);_e>=0&&(v[_e]=null,x[_e].disconnect(me))}for(let se=0;se<X.added.length;se++){let me=X.added[se],_e=v.indexOf(me);if(_e===-1){for(let Ke=0;Ke<x.length;Ke++)if(Ke>=v.length){v.push(me),_e=Ke;break}else if(v[Ke]===null){v[Ke]=me,_e=Ke;break}if(_e===-1)break}let Oe=x[_e];Oe&&Oe.connect(me)}}let z=new I,j=new I;function q(X,se,me){z.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(me.matrixWorld);let _e=z.distanceTo(j),Oe=se.projectionMatrix.elements,Ke=me.projectionMatrix.elements,Xe=Oe[14]/(Oe[10]-1),Et=Oe[14]/(Oe[10]+1),st=(Oe[9]+1)/Oe[5],Bt=(Oe[9]-1)/Oe[5],V=(Oe[8]-1)/Oe[0],gn=(Ke[8]+1)/Ke[0],nt=Xe*V,Ze=Xe*gn,Ne=_e/(-V+gn),xt=Ne*-V;if(se.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(xt),X.translateZ(Ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Oe[10]===-1)X.projectionMatrix.copy(se.projectionMatrix),X.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Ve=Xe+Ne,D=Et+Ne,w=nt-xt,K=Ze+(_e-xt),ce=st*Et/D*Ve,de=Bt*Et/D*Ve;X.projectionMatrix.makePerspective(w,K,ce,de,Ve,D),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ie(X,se){se===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(se.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let se=X.near,me=X.far;A.texture!==null&&(A.depthNear>0&&(se=A.depthNear),A.depthFar>0&&(me=A.depthFar)),y.near=S.near=C.near=se,y.far=S.far=C.far=me,(B!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),B=y.near,U=y.far),C.layers.mask=X.layers.mask|2,S.layers.mask=X.layers.mask|4,y.layers.mask=C.layers.mask|S.layers.mask;let _e=X.parent,Oe=y.cameras;ie(y,_e);for(let Ke=0;Ke<Oe.length;Ke++)ie(Oe[Ke],_e);Oe.length===2?q(y,C,S):y.projectionMatrix.copy(C.projectionMatrix),pe(X,y,_e)};function pe(X,se,me){me===null?X.matrix.copy(se.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(se.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(se.projectionMatrix),X.projectionMatrixInverse.copy(se.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ic*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(y)};let Ee=null;function Q(X,se){if(u=se.getViewerPose(l||a),g=se,u!==null){let me=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let _e=!1;me.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let Ke=0;Ke<me.length;Ke++){let Xe=me[Ke],Et=null;if(d!==null)Et=d.getViewport(Xe);else{let Bt=h.getViewSubImage(f,Xe);Et=Bt.viewport,Ke===0&&(e.setRenderTargetTextures(_,Bt.colorTexture,f.ignoreDepthValues?void 0:Bt.depthStencilTexture),e.setRenderTarget(_))}let st=E[Ke];st===void 0&&(st=new xn,st.layers.enable(Ke),st.viewport=new ut,E[Ke]=st),st.matrix.fromArray(Xe.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Xe.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Et.x,Et.y,Et.width,Et.height),Ke===0&&(y.matrix.copy(st.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(st)}let Oe=i.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){let Ke=h.getDepthInformation(me[0]);Ke&&Ke.isValid&&Ke.texture&&A.init(e,Ke,i.renderState)}}for(let me=0;me<x.length;me++){let _e=v[me],Oe=x[me];_e!==null&&Oe!==void 0&&Oe.update(_e,se,l||a)}Ee&&Ee(X,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let le=new yv;le.setAnimationLoop(Q),this.setAnimationLoop=function(X){Ee=X},this.dispose=function(){}}},Ia=new Hn,JS=new Ye;function ZS(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ev(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),A(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),x=_.envMap,v=_.envMapRotation;x&&(m.envMap.value=x,Ia.copy(v),Ia.x*=-1,Ia.y*=-1,Ia.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ia.y*=-1,Ia.z*=-1),m.envMapRotation.value.setFromMatrix4(JS.makeRotationFromEuler(Ia)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function A(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $S(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){let v=x.program;n.uniformBlockBinding(_,v)}function l(_,x){let v=i[_.id];v===void 0&&(g(_),v=u(_),i[_.id]=v,_.addEventListener("dispose",m));let M=x.program;n.updateUBOMapping(_,M);let b=e.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function u(_){let x=h();_.__bindingPointIndex=x;let v=s.createBuffer(),M=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let x=i[_.id],v=_.uniforms,M=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,C=v.length;b<C;b++){let S=Array.isArray(v[b])?v[b]:[v[b]];for(let E=0,y=S.length;E<y;E++){let B=S[E];if(d(B,b,E,M)===!0){let U=B.__offset,P=Array.isArray(B.value)?B.value:[B.value],F=0;for(let Y=0;Y<P.length;Y++){let z=P[Y],j=A(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,U+F,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,F),F+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,x,v,M){let b=_.value,C=x+"_"+v;if(M[C]===void 0)return typeof b=="number"||typeof b=="boolean"?M[C]=b:M[C]=b.clone(),!0;{let S=M[C];if(typeof b=="number"||typeof b=="boolean"){if(S!==b)return M[C]=b,!0}else if(S.equals(b)===!1)return S.copy(b),!0}return!1}function g(_){let x=_.uniforms,v=0,M=16;for(let C=0,S=x.length;C<S;C++){let E=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,B=E.length;y<B;y++){let U=E[y],P=Array.isArray(U.value)?U.value:[U.value];for(let F=0,Y=P.length;F<Y;F++){let z=P[F],j=A(z),q=v%M,ie=q%j.boundary,pe=q+ie;v+=ie,pe!==0&&M-pe<j.storage&&(v+=M-pe),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=j.storage}}}let b=v%M;return b>0&&(v+=M-b),_.__size=v,_.__cache={},this}function A(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var rh=class{constructor(e={}){let{canvas:t=s1(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),A=new Int32Array(4),m=null,p=null,_=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=Vr,this.toneMappingExposure=1;let v=this,M=!1,b=0,C=0,S=null,E=-1,y=null,B=new ut,U=new ut,P=null,F=new ye(0),Y=0,z=t.width,j=t.height,q=1,ie=null,pe=null,Ee=new ut(0,0,z,j),Q=new ut(0,0,z,j),le=!1,X=new Ml,se=!1,me=!1,_e=new Ye,Oe=new Ye,Ke=new I,Xe=new ut,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function Bt(){return S===null?q:1}let V=n;function gn(T,G){return t.getContext(T,G)}try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",$,!1),V===null){let G="webgl2";if(V=gn(G,T),V===null)throw gn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let nt,Ze,Ne,xt,Ve,D,w,K,ce,de,ae,Ue,Ce,Fe,O,te,re,ue,he,ge,je,Te,Re,R;function k(){nt=new AC(V),nt.init(),Te=new KS(V,nt),Ze=new lC(V,nt,e,Te),Ne=new VS(V,nt),Ze.reverseDepthBuffer&&f&&Ne.buffers.depth.setReversed(!0),xt=new vC(V),Ve=new BS,D=new qS(V,nt,Ne,Ve,Ze,Te,xt),w=new hC(v),K=new pC(v),ce=new C1(V),Re=new oC(V,ce),de=new mC(V,ce,xt,Re),ae=new xC(V,de,ce,xt),he=new _C(V,Ze,D),te=new uC(Ve),Ue=new RS(v,w,K,nt,Ze,Re,te),Ce=new ZS(v,Ve),Fe=new FS,O=new kS(nt),ue=new aC(v,w,K,Ne,ae,d,c),re=new zS(v,ae,Ze),R=new $S(V,xt,Ze,Ne),ge=new cC(V,nt,xt),je=new gC(V,nt,xt),xt.programs=Ue.programs,v.capabilities=Ze,v.extensions=nt,v.properties=Ve,v.renderLists=Fe,v.shadowMap=re,v.state=Ne,v.info=xt}k();let L=new yp(v,V);this.xr=L,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(z,j,!1))},this.getSize=function(T){return T.set(z,j)},this.setSize=function(T,G,Z=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,j=G,t.width=Math.floor(T*q),t.height=Math.floor(G*q),Z===!0&&(t.style.width=T+"px",t.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(z*q,j*q).floor()},this.setDrawingBufferSize=function(T,G,Z){z=T,j=G,q=Z,t.width=Math.floor(T*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(B)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,G,Z,ee){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,G,Z,ee),Ne.viewport(B.copy(Ee).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,G,Z,ee){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,G,Z,ee),Ne.scissor(U.copy(Q).multiplyScalar(q).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){Ne.setScissorTest(le=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(T=!0,G=!0,Z=!0){let ee=0;if(T){let W=!1;if(S!==null){let xe=S.texture.format;W=xe===Zp||xe===Jp||xe===jp}if(W){let xe=S.texture.type,Be=xe===jt||xe===La||xe===Al||xe===Jo||xe===Xp||xe===Yp,ke=ue.getClearColor(),He=ue.getClearAlpha(),et=ke.r,rt=ke.g,Qe=ke.b;Be?(g[0]=et,g[1]=rt,g[2]=Qe,g[3]=He,V.clearBufferuiv(V.COLOR,0,g)):(A[0]=et,A[1]=rt,A[2]=Qe,A[3]=He,V.clearBufferiv(V.COLOR,0,A))}else ee|=V.COLOR_BUFFER_BIT}G&&(ee|=V.DEPTH_BUFFER_BIT),Z&&(ee|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Fe.dispose(),O.dispose(),Ve.dispose(),w.dispose(),K.dispose(),ae.dispose(),Re.dispose(),R.dispose(),Ue.dispose(),L.dispose(),L.removeEventListener("sessionstart",We),L.removeEventListener("sessionend",$e),Dt.stop()};function H(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=xt.autoReset,G=re.enabled,Z=re.autoUpdate,ee=re.needsUpdate,W=re.type;k(),xt.autoReset=T,re.enabled=G,re.autoUpdate=Z,re.needsUpdate=ee,re.type=W}function $(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ne(T){let G=T.target;G.removeEventListener("dispose",ne),oe(G)}function oe(T){fe(T),Ve.remove(T)}function fe(T){let G=Ve.get(T).programs;G!==void 0&&(G.forEach(function(Z){Ue.releaseProgram(Z)}),T.isShaderMaterial&&Ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,Z,ee,W,xe){G===null&&(G=Et);let Be=W.isMesh&&W.matrixWorld.determinant()<0,ke=Zs(T,G,Z,ee,W);Ne.setMaterial(ee,Be);let He=Z.index,et=1;if(ee.wireframe===!0){if(He=de.getWireframeAttribute(Z),He===void 0)return;et=2}let rt=Z.drawRange,Qe=Z.attributes.position,_t=rt.start*et,Qt=(rt.start+rt.count)*et;xe!==null&&(_t=Math.max(_t,xe.start*et),Qt=Math.min(Qt,(xe.start+xe.count)*et)),He!==null?(_t=Math.max(_t,0),Qt=Math.min(Qt,He.count)):Qe!=null&&(_t=Math.max(_t,0),Qt=Math.min(Qt,Qe.count));let Wt=Qt-_t;if(Wt<0||Wt===1/0)return;Re.setup(W,ee,ke,Z,He);let yi,yt=ge;if(He!==null&&(yi=ce.get(He),yt=je,yt.setIndex(yi)),W.isMesh)ee.wireframe===!0?(Ne.setLineWidth(ee.wireframeLinewidth*Bt()),yt.setMode(V.LINES)):yt.setMode(V.TRIANGLES);else if(W.isLine){let Ge=ee.linewidth;Ge===void 0&&(Ge=1),Ne.setLineWidth(Ge*Bt()),W.isLineSegments?yt.setMode(V.LINES):W.isLineLoop?yt.setMode(V.LINE_LOOP):yt.setMode(V.LINE_STRIP)}else W.isPoints?yt.setMode(V.POINTS):W.isSprite&&yt.setMode(V.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)yt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))yt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ge=W._multiDrawStarts,$s=W._multiDrawCounts,Mt=W._multiDrawCount,vs=He?ce.get(He).bytesPerElement:1,xo=Ve.get(ee).currentProgram.getUniforms();for(let zi=0;zi<Mt;zi++)xo.setValue(V,"_gl_DrawID",zi),yt.render(Ge[zi]/vs,$s[zi])}else if(W.isInstancedMesh)yt.renderInstances(_t,Wt,W.count);else if(Z.isInstancedBufferGeometry){let Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,$s=Math.min(Z.instanceCount,Ge);yt.renderInstances(_t,Wt,$s)}else yt.render(_t,Wt)};function ve(T,G,Z){T.transparent===!0&&T.side===bt&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,Wn(T,G,Z),T.side=is,T.needsUpdate=!0,Wn(T,G,Z),T.side=bt):Wn(T,G,Z)}this.compile=function(T,G,Z=null){Z===null&&(Z=T),p=O.get(Z),p.init(G),x.push(p),Z.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),T!==Z&&T.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let ee=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let xe=W.material;if(xe)if(Array.isArray(xe))for(let Be=0;Be<xe.length;Be++){let ke=xe[Be];ve(ke,Z,W),ee.add(ke)}else ve(xe,Z,W),ee.add(xe)}),x.pop(),p=null,ee},this.compileAsync=function(T,G,Z=null){let ee=this.compile(T,G,Z);return new Promise(W=>{function xe(){if(ee.forEach(function(Be){Ve.get(Be).currentProgram.isReady()&&ee.delete(Be)}),ee.size===0){W(T);return}setTimeout(xe,10)}nt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Pe=null;function Le(T){Pe&&Pe(T)}function We(){Dt.stop()}function $e(){Dt.start()}let Dt=new yv;Dt.setAnimationLoop(Le),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(T){Pe=T,L.setAnimationLoop(T),T===null?Dt.stop():Dt.start()},L.addEventListener("sessionstart",We),L.addEventListener("sessionend",$e),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(G),G=L.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,G,S),p=O.get(T,x.length),p.init(G),x.push(p),Oe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),X.setFromProjectionMatrix(Oe),me=this.localClippingEnabled,se=te.init(this.clippingPlanes,me),m=Fe.get(T,_.length),m.init(),_.push(m),L.enabled===!0&&L.isPresenting===!0){let xe=v.xr.getDepthSensingMesh();xe!==null&&wt(xe,G,-1/0,v.sortObjects)}wt(T,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ie,pe),st=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,st&&ue.addToRenderList(m,T),this.info.render.frame++,se===!0&&te.beginShadows();let Z=p.state.shadowsArray;re.render(Z,T,G),se===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=m.opaque,W=m.transmissive;if(p.setupLights(),G.isArrayCamera){let xe=G.cameras;if(W.length>0)for(let Be=0,ke=xe.length;Be<ke;Be++){let He=xe[Be];Tt(ee,W,T,He)}st&&ue.render(T);for(let Be=0,ke=xe.length;Be<ke;Be++){let He=xe[Be];vn(m,T,He,He.viewport)}}else W.length>0&&Tt(ee,W,T,G),st&&ue.render(T),vn(m,T,G);S!==null&&(D.updateMultisampleRenderTarget(S),D.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(v,T,G),Re.resetDefaultState(),E=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],se===!0&&te.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function wt(T,G,Z,ee){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){ee&&Xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Oe);let Be=ae.update(T),ke=T.material;ke.visible&&m.push(T,Be,ke,Z,Xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){let Be=ae.update(T),ke=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xe.copy(T.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Xe.copy(Be.boundingSphere.center)),Xe.applyMatrix4(T.matrixWorld).applyMatrix4(Oe)),Array.isArray(ke)){let He=Be.groups;for(let et=0,rt=He.length;et<rt;et++){let Qe=He[et],_t=ke[Qe.materialIndex];_t&&_t.visible&&m.push(T,Be,_t,Z,Xe.z,Qe)}}else ke.visible&&m.push(T,Be,ke,Z,Xe.z,null)}}let xe=T.children;for(let Be=0,ke=xe.length;Be<ke;Be++)wt(xe[Be],G,Z,ee)}function vn(T,G,Z,ee){let W=T.opaque,xe=T.transmissive,Be=T.transparent;p.setupLightsView(Z),se===!0&&te.setGlobalState(v.clippingPlanes,Z),ee&&Ne.viewport(B.copy(ee)),W.length>0&&gt(W,G,Z),xe.length>0&&gt(xe,G,Z),Be.length>0&&gt(Be,G,Z),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Tt(T,G,Z,ee){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new Ut(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Ot:jt,minFilter:fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let xe=p.state.transmissionRenderTarget[ee.id],Be=ee.viewport||B;xe.setSize(Be.z,Be.w);let ke=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(F),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),st&&ue.render(Z);let He=v.toneMapping;v.toneMapping=Vr;let et=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),se===!0&&te.setGlobalState(v.clippingPlanes,ee),gt(T,Z,ee),D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Qe=0,_t=G.length;Qe<_t;Qe++){let Qt=G[Qe],Wt=Qt.object,yi=Qt.geometry,yt=Qt.material,Ge=Qt.group;if(yt.side===bt&&Wt.layers.test(ee.layers)){let $s=yt.side;yt.side=Xt,yt.needsUpdate=!0,Pt(Wt,Z,ee,yi,yt,Ge),yt.side=$s,yt.needsUpdate=!0,rt=!0}}rt===!0&&(D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe))}v.setRenderTarget(ke),v.setClearColor(F,Y),et!==void 0&&(ee.viewport=et),v.toneMapping=He}function gt(T,G,Z){let ee=G.isScene===!0?G.overrideMaterial:null;for(let W=0,xe=T.length;W<xe;W++){let Be=T[W],ke=Be.object,He=Be.geometry,et=ee===null?Be.material:ee,rt=Be.group;ke.layers.test(Z.layers)&&Pt(ke,G,Z,He,et,rt)}}function Pt(T,G,Z,ee,W,xe){T.onBeforeRender(v,G,Z,ee,W,xe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(v,G,Z,ee,T,xe),W.transparent===!0&&W.side===bt&&W.forceSinglePass===!1?(W.side=Xt,W.needsUpdate=!0,v.renderBufferDirect(Z,G,ee,W,T,xe),W.side=is,W.needsUpdate=!0,v.renderBufferDirect(Z,G,ee,W,T,xe),W.side=bt):v.renderBufferDirect(Z,G,ee,W,T,xe),T.onAfterRender(v,G,Z,ee,W,xe)}function Wn(T,G,Z){G.isScene!==!0&&(G=Et);let ee=Ve.get(T),W=p.state.lights,xe=p.state.shadowsArray,Be=W.state.version,ke=Ue.getParameters(T,W.state,xe,G,Z),He=Ue.getProgramCacheKey(ke),et=ee.programs;ee.environment=T.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(T.isMeshStandardMaterial?K:w).get(T.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",ne),et=new Map,ee.programs=et);let rt=et.get(He);if(rt!==void 0){if(ee.currentProgram===rt&&ee.lightsStateVersion===Be)return ki(T,ke),rt}else ke.uniforms=Ue.getUniforms(T),T.onBeforeCompile(ke,v),rt=Ue.acquireProgram(ke,He),et.set(He,rt),ee.uniforms=ke.uniforms;let Qe=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Qe.clippingPlanes=te.uniform),ki(T,ke),ee.needsLights=Qi(T),ee.lightsStateVersion=Be,ee.needsLights&&(Qe.ambientLightColor.value=W.state.ambient,Qe.lightProbe.value=W.state.probe,Qe.directionalLights.value=W.state.directional,Qe.directionalLightShadows.value=W.state.directionalShadow,Qe.spotLights.value=W.state.spot,Qe.spotLightShadows.value=W.state.spotShadow,Qe.rectAreaLights.value=W.state.rectArea,Qe.ltc_1.value=W.state.rectAreaLTC1,Qe.ltc_2.value=W.state.rectAreaLTC2,Qe.pointLights.value=W.state.point,Qe.pointLightShadows.value=W.state.pointShadow,Qe.hemisphereLights.value=W.state.hemi,Qe.directionalShadowMap.value=W.state.directionalShadowMap,Qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Qe.spotShadowMap.value=W.state.spotShadowMap,Qe.spotLightMatrix.value=W.state.spotLightMatrix,Qe.spotLightMap.value=W.state.spotLightMap,Qe.pointShadowMap.value=W.state.pointShadowMap,Qe.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=rt,ee.uniformsList=null,rt}function Un(T){if(T.uniformsList===null){let G=T.currentProgram.getUniforms();T.uniformsList=Xo.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function ki(T,G){let Z=Ve.get(T);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Zs(T,G,Z,ee,W){G.isScene!==!0&&(G=Et),D.resetTextureUnits();let xe=G.fog,Be=ee.isMeshStandardMaterial?G.environment:null,ke=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Gn,He=(ee.isMeshStandardMaterial?K:w).get(ee.envMap||Be),et=ee.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,rt=!!Z.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Qe=!!Z.morphAttributes.position,_t=!!Z.morphAttributes.normal,Qt=!!Z.morphAttributes.color,Wt=Vr;ee.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Wt=v.toneMapping);let yi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=yi!==void 0?yi.length:0,Ge=Ve.get(ee),$s=p.state.lights;if(se===!0&&(me===!0||T!==y)){let ts=T===y&&ee.id===E;te.setState(ee,T,ts)}let Mt=!1;ee.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==$s.state.version||Ge.outputColorSpace!==ke||W.isBatchedMesh&&Ge.batching===!1||!W.isBatchedMesh&&Ge.batching===!0||W.isBatchedMesh&&Ge.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ge.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ge.instancing===!1||!W.isInstancedMesh&&Ge.instancing===!0||W.isSkinnedMesh&&Ge.skinning===!1||!W.isSkinnedMesh&&Ge.skinning===!0||W.isInstancedMesh&&Ge.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ge.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ge.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ge.instancingMorph===!1&&W.morphTexture!==null||Ge.envMap!==He||ee.fog===!0&&Ge.fog!==xe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==te.numPlanes||Ge.numIntersection!==te.numIntersection)||Ge.vertexAlphas!==et||Ge.vertexTangents!==rt||Ge.morphTargets!==Qe||Ge.morphNormals!==_t||Ge.morphColors!==Qt||Ge.toneMapping!==Wt||Ge.morphTargetsCount!==yt)&&(Mt=!0):(Mt=!0,Ge.__version=ee.version);let vs=Ge.currentProgram;Mt===!0&&(vs=Wn(ee,G,W));let xo=!1,zi=!1,Yc=!1,qt=vs.getUniforms(),Ps=Ge.uniforms;if(Ne.useProgram(vs.program)&&(xo=!0,zi=!0,Yc=!0),ee.id!==E&&(E=ee.id,zi=!0),xo||y!==T){Ne.buffers.depth.getReversed()?(_e.copy(T.projectionMatrix),a1(_e),o1(_e),qt.setValue(V,"projectionMatrix",_e)):qt.setValue(V,"projectionMatrix",T.projectionMatrix),qt.setValue(V,"viewMatrix",T.matrixWorldInverse);let Pr=qt.map.cameraPosition;Pr!==void 0&&Pr.setValue(V,Ke.setFromMatrixPosition(T.matrixWorld)),Ze.logarithmicDepthBuffer&&qt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&qt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,zi=!0,Yc=!0)}if(W.isSkinnedMesh){qt.setOptional(V,W,"bindMatrix"),qt.setOptional(V,W,"bindMatrixInverse");let ts=W.skeleton;ts&&(ts.boneTexture===null&&ts.computeBoneTexture(),qt.setValue(V,"boneTexture",ts.boneTexture,D))}W.isBatchedMesh&&(qt.setOptional(V,W,"batchingTexture"),qt.setValue(V,"batchingTexture",W._matricesTexture,D),qt.setOptional(V,W,"batchingIdTexture"),qt.setValue(V,"batchingIdTexture",W._indirectTexture,D),qt.setOptional(V,W,"batchingColorTexture"),W._colorsTexture!==null&&qt.setValue(V,"batchingColorTexture",W._colorsTexture,D));let jc=Z.morphAttributes;if((jc.position!==void 0||jc.normal!==void 0||jc.color!==void 0)&&he.update(W,Z,vs),(zi||Ge.receiveShadow!==W.receiveShadow)&&(Ge.receiveShadow=W.receiveShadow,qt.setValue(V,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ps.envMap.value=He,Ps.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(Ps.envMapIntensity.value=G.environmentIntensity),zi&&(qt.setValue(V,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&Hi(Ps,Yc),xe&&ee.fog===!0&&Ce.refreshFogUniforms(Ps,xe),Ce.refreshMaterialUniforms(Ps,ee,q,j,p.state.transmissionRenderTarget[T.id]),Xo.upload(V,Un(Ge),Ps,D)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Xo.upload(V,Un(Ge),Ps,D),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&qt.setValue(V,"center",W.center),qt.setValue(V,"modelViewMatrix",W.modelViewMatrix),qt.setValue(V,"normalMatrix",W.normalMatrix),qt.setValue(V,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let ts=ee.uniformsGroups;for(let Pr=0,Lr=ts.length;Pr<Lr;Pr++){let Ng=ts[Pr];R.update(Ng,vs),R.bind(Ng,vs)}}return vs}function Hi(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Qi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,G,Z){Ve.get(T.texture).__webglTexture=G,Ve.get(T.depthTexture).__webglTexture=Z;let ee=Ve.get(T);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Z===void 0,ee.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){let Z=Ve.get(T);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,Z=0){S=T,b=G,C=Z;let ee=!0,W=null,xe=!1,Be=!1;if(T){let He=Ve.get(T);if(He.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(V.FRAMEBUFFER,null),ee=!1;else if(He.__webglFramebuffer===void 0)D.setupRenderTarget(T);else if(He.__hasExternalTextures)D.rebindTextures(T,Ve.get(T.texture).__webglTexture,Ve.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Qe=T.depthTexture;if(He.__boundDepthTexture!==Qe){if(Qe!==null&&Ve.has(Qe)&&(T.width!==Qe.image.width||T.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(T)}}let et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Be=!0);let rt=Ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(rt[G])?W=rt[G][Z]:W=rt[G],xe=!0):T.samples>0&&D.useMultisampledRTT(T)===!1?W=Ve.get(T).__webglMultisampledFramebuffer:Array.isArray(rt)?W=rt[Z]:W=rt,B.copy(T.viewport),U.copy(T.scissor),P=T.scissorTest}else B.copy(Ee).multiplyScalar(q).floor(),U.copy(Q).multiplyScalar(q).floor(),P=le;if(Ne.bindFramebuffer(V.FRAMEBUFFER,W)&&ee&&Ne.drawBuffers(T,W),Ne.viewport(B),Ne.scissor(U),Ne.setScissorTest(P),xe){let He=Ve.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,He.__webglTexture,Z)}else if(Be){let He=Ve.get(T.texture),et=G||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,He.__webglTexture,Z||0,et)}E=-1},this.readRenderTargetPixels=function(T,G,Z,ee,W,xe,Be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke){Ne.bindFramebuffer(V.FRAMEBUFFER,ke);try{let He=T.texture,et=He.format,rt=He.type;if(!Ze.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-ee&&Z>=0&&Z<=T.height-W&&V.readPixels(G,Z,ee,W,Te.convert(et),Te.convert(rt),xe)}finally{let He=S!==null?Ve.get(S).__webglFramebuffer:null;Ne.bindFramebuffer(V.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,G,Z,ee,W,xe,Be){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke){let He=T.texture,et=He.format,rt=He.type;if(!Ze.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=T.width-ee&&Z>=0&&Z<=T.height-W){Ne.bindFramebuffer(V.FRAMEBUFFER,ke);let Qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.bufferData(V.PIXEL_PACK_BUFFER,xe.byteLength,V.STREAM_READ),V.readPixels(G,Z,ee,W,Te.convert(et),Te.convert(rt),0);let _t=S!==null?Ve.get(S).__webglFramebuffer:null;Ne.bindFramebuffer(V.FRAMEBUFFER,_t);let Qt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await r1(V,Qt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,xe),V.deleteBuffer(Qe),V.deleteSync(Qt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,Z=0){T.isTexture!==!0&&(cl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1]);let ee=Math.pow(2,-Z),W=Math.floor(T.image.width*ee),xe=Math.floor(T.image.height*ee),Be=G!==null?G.x:0,ke=G!==null?G.y:0;D.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,Be,ke,W,xe),Ne.unbindTexture()},this.copyTextureToTexture=function(T,G,Z=null,ee=null,W=0){T.isTexture!==!0&&(cl("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,T=arguments[1],G=arguments[2],W=arguments[3]||0,Z=null);let xe,Be,ke,He,et,rt,Qe,_t,Qt,Wt=T.isCompressedTexture?T.mipmaps[W]:T.image;Z!==null?(xe=Z.max.x-Z.min.x,Be=Z.max.y-Z.min.y,ke=Z.isBox3?Z.max.z-Z.min.z:1,He=Z.min.x,et=Z.min.y,rt=Z.isBox3?Z.min.z:0):(xe=Wt.width,Be=Wt.height,ke=Wt.depth||1,He=0,et=0,rt=0),ee!==null?(Qe=ee.x,_t=ee.y,Qt=ee.z):(Qe=0,_t=0,Qt=0);let yi=Te.convert(G.format),yt=Te.convert(G.type),Ge;G.isData3DTexture?(D.setTexture3D(G,0),Ge=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(D.setTexture2DArray(G,0),Ge=V.TEXTURE_2D_ARRAY):(D.setTexture2D(G,0),Ge=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);let $s=V.getParameter(V.UNPACK_ROW_LENGTH),Mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),vs=V.getParameter(V.UNPACK_SKIP_PIXELS),xo=V.getParameter(V.UNPACK_SKIP_ROWS),zi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Wt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,He),V.pixelStorei(V.UNPACK_SKIP_ROWS,et),V.pixelStorei(V.UNPACK_SKIP_IMAGES,rt);let Yc=T.isDataArrayTexture||T.isData3DTexture,qt=G.isDataArrayTexture||G.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Ps=Ve.get(T),jc=Ve.get(G),ts=Ve.get(Ps.__renderTarget),Pr=Ve.get(jc.__renderTarget);Ne.bindFramebuffer(V.READ_FRAMEBUFFER,ts.__webglFramebuffer),Ne.bindFramebuffer(V.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let Lr=0;Lr<ke;Lr++)Yc&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(T).__webglTexture,W,rt+Lr),T.isDepthTexture?(qt&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(G).__webglTexture,W,Qt+Lr),V.blitFramebuffer(He,et,xe,Be,Qe,_t,xe,Be,V.DEPTH_BUFFER_BIT,V.NEAREST)):qt?V.copyTexSubImage3D(Ge,W,Qe,_t,Qt+Lr,He,et,xe,Be):V.copyTexSubImage2D(Ge,W,Qe,_t,Qt+Lr,He,et,xe,Be);Ne.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else qt?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Ge,W,Qe,_t,Qt,xe,Be,ke,yi,yt,Wt.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(Ge,W,Qe,_t,Qt,xe,Be,ke,yi,Wt.data):V.texSubImage3D(Ge,W,Qe,_t,Qt,xe,Be,ke,yi,yt,Wt):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,W,Qe,_t,xe,Be,yi,yt,Wt.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,W,Qe,_t,Wt.width,Wt.height,yi,Wt.data):V.texSubImage2D(V.TEXTURE_2D,W,Qe,_t,xe,Be,yi,yt,Wt);V.pixelStorei(V.UNPACK_ROW_LENGTH,$s),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,vs),V.pixelStorei(V.UNPACK_SKIP_ROWS,xo),V.pixelStorei(V.UNPACK_SKIP_IMAGES,zi),W===0&&G.generateMipmaps&&V.generateMipmap(Ge),Ne.unbindTexture()},this.copyTextureToTexture3D=function(T,G,Z=null,ee=null,W=0){return T.isTexture!==!0&&(cl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,ee=arguments[1]||null,T=arguments[2],G=arguments[3],W=arguments[4]||0),cl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,G,Z,ee,W)},this.initRenderTarget=function(T){Ve.get(T).__webglFramebuffer===void 0&&D.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?D.setTextureCube(T,0):T.isData3DTexture?D.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?D.setTexture2DArray(T,0):D.setTexture2D(T,0),Ne.unbindTexture()},this.resetState=function(){b=0,C=0,S=null,Ne.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}},ah=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Mi=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},oc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lp,this.updateRanges=[],this.version=0,this.uuid=Ms()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ai=new I,Na=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ai.fromBufferAttribute(this,t),Ai.applyMatrix4(e),this.setXYZ(t,Ai.x,Ai.y,Ai.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ai.fromBufferAttribute(this,t),Ai.applyNormalMatrix(e),this.setXYZ(t,Ai.x,Ai.y,Ai.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ai.fromBufferAttribute(this,t),Ai.transformDirection(e),this.setXYZ(t,Ai.x,Ai.y,Ai.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ys(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ys(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ys(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ys(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ys(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kr=class extends vi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lo,tl=new I,Uo=new I,Oo=new I,No=new Me,nl=new Me,Tv=new Ye,Nu=new I,il=new I,ku=new I,N0=new Me,Sd=new Me,k0=new Me,ka=class extends Gt{constructor(e=new Kr){if(super(),this.isSprite=!0,this.type="Sprite",Lo===void 0){Lo=new ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oc(t,5);Lo.setIndex([0,1,2,0,2,3]),Lo.setAttribute("position",new Na(n,3,0,!1)),Lo.setAttribute("uv",new Na(n,2,3,!1))}this.geometry=Lo,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Uo.setFromMatrixScale(this.matrixWorld),Tv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Uo.multiplyScalar(-Oo.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Hu(Nu.set(-.5,-.5,0),Oo,a,Uo,i,r),Hu(il.set(.5,-.5,0),Oo,a,Uo,i,r),Hu(ku.set(.5,.5,0),Oo,a,Uo,i,r),N0.set(0,0),Sd.set(1,0),k0.set(1,1);let o=e.ray.intersectTriangle(Nu,il,ku,!1,tl);if(o===null&&(Hu(il.set(-.5,.5,0),Oo,a,Uo,i,r),Sd.set(0,1),o=e.ray.intersectTriangle(Nu,ku,il,!1,tl),o===null))return;let c=e.ray.origin.distanceTo(tl);c<e.near||c>e.far||t.push({distance:c,point:tl.clone(),uv:zr.getInterpolation(tl,Nu,il,ku,N0,Sd,k0,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Hu(s,e,t,n,i,r){No.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(nl.x=r*No.x-i*No.y,nl.y=i*No.x+r*No.y):nl.copy(No),s.copy(e),s.x+=nl.x,s.y+=nl.y,s.applyMatrix4(Tv)}var H0=new I,Q0=new ut,z0=new ut,ew=new I,G0=new Ye,Qu=new I,wd=new Wi,V0=new Ye,Td=new Oa,oh=class extends we{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zg,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qu),this.boundingBox.expandByPoint(Qu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qu),this.boundingSphere.expandByPoint(Qu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wd.copy(this.boundingSphere),wd.applyMatrix4(i),e.ray.intersectsSphere(wd)!==!1&&(V0.copy(i).invert(),Td.copy(e.ray).applyMatrix4(V0),!(this.boundingBox!==null&&Td.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Td)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===BE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Q0.fromBufferAttribute(i.attributes.skinIndex,e),z0.fromBufferAttribute(i.attributes.skinWeight,e),H0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=z0.getComponent(r);if(a!==0){let o=Q0.getComponent(r);G0.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ew.copy(H0).applyMatrix4(G0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Sl=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Us=class extends tn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=In,u=In,h,f){super(null,a,o,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},W0=new Ye,tw=new Ye,ch=class s{constructor(e=[],t=[]){this.uuid=Ms(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:tw;W0.multiplyMatrices(o,t[r]),W0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Us(t,e,e,dn,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Sl),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Pn=class extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ko=new Ye,q0=new Ye,zu=[],K0=new Kn,nw=new Ye,sl=new we,rl=new Wi,Xr=class extends we{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,nw)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ko),K0.copy(e.boundingBox).applyMatrix4(ko),this.boundingBox.union(K0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ko),rl.copy(e.boundingSphere).applyMatrix4(ko),this.boundingSphere.union(rl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(sl.geometry=this.geometry,sl.material=this.material,sl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(n),e.ray.intersectsSphere(rl)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ko),q0.multiplyMatrices(n,ko),sl.matrixWorld=q0,sl.raycast(e,zu);for(let a=0,o=zu.length;a<o;a++){let c=zu[a];c.instanceId=r,c.object=this,t.push(c)}zu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Us(new Float32Array(i*this.count),i,this.count,Ts,wn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Yr=class extends vi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lh=new I,uh=new I,X0=new Ye,al=new Oa,Gu=new Wi,Id=new I,Y0=new I,Os=class extends Gt{constructor(e=new ht,t=new Yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)lh.fromBufferAttribute(t,i-1),uh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=lh.distanceTo(uh);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gu.copy(n.boundingSphere),Gu.applyMatrix4(i),Gu.radius+=r,e.ray.intersectsSphere(Gu)===!1)return;X0.copy(i).invert(),al.copy(e.ray).applyMatrix4(X0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let A=d,m=g-1;A<m;A+=l){let p=u.getX(A),_=u.getX(A+1),x=Vu(this,e,al,c,p,_);x&&t.push(x)}if(this.isLineLoop){let A=u.getX(g-1),m=u.getX(d),p=Vu(this,e,al,c,A,m);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let A=d,m=g-1;A<m;A+=l){let p=Vu(this,e,al,c,A,A+1);p&&t.push(p)}if(this.isLineLoop){let A=Vu(this,e,al,c,g-1,d);A&&t.push(A)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vu(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(lh.fromBufferAttribute(a,i),uh.fromBufferAttribute(a,r),t.distanceSqToSegment(lh,uh,Id,Y0)>n)return;Id.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Id);if(!(c<e.near||c>e.far))return{distance:c,point:Y0.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var j0=new I,J0=new I,hh=class extends Os{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)j0.fromBufferAttribute(t,i),J0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+j0.distanceTo(J0);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fh=class extends Os{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},wl=class extends vi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Z0=new Ye,Mp=new Oa,Wu=new Wi,qu=new I,dh=class extends Gt{constructor(e=new ht,t=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wu.copy(n.boundingSphere),Wu.applyMatrix4(i),Wu.radius+=r,e.ray.intersectsSphere(Wu)===!1)return;Z0.copy(i).invert(),Mp.copy(e.ray).applyMatrix4(Z0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,A=d;g<A;g++){let m=l.getX(g);qu.fromBufferAttribute(h,m),$0(qu,m,c,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,A=d;g<A;g++)qu.fromBufferAttribute(h,g),$0(qu,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $0(s,e,t,n,i,r,a){let o=Mp.distanceSqToPoint(s);if(o<t){let c=new I;Mp.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ha=class extends tn{constructor(e,t,n,i,r,a,o,c,l,u,h,f){super(null,a,o,c,l,u,i,r,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},ph=class extends Ha{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=ti,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ah=class extends Ha{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Pa),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},mh=class extends tn{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cp=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new Me:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,i=[],r=[],a=[],o=new I,c=new Ye;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Nn(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Nn(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function iA(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Ku=new I,Rd=new iA,Bd=new iA,Dd=new iA,gh=class extends Cp{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(Ku.subVectors(i[0],i[1]).add(i[0]),l=Ku);let h=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Ku.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Ku),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),A=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);A<1e-4&&(A=1),g<1e-4&&(g=A),m<1e-4&&(m=A),Rd.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,A,m),Bd.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,A,m),Dd.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,A,m)}else this.curveType==="catmullrom"&&(Rd.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Bd.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Dd.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Rd.calc(c),Bd.calc(c),Dd.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var vh=class s extends ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new I,u=new Me;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Cs=class s extends ht{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,A=[],m=n/2,p=0;_(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(d,2));function _(){let v=new I,M=new I,b=0,C=(t-e)/n;for(let S=0;S<=r;S++){let E=[],y=S/r,B=y*(t-e)+e;for(let U=0;U<=i;U++){let P=U/i,F=P*c+o,Y=Math.sin(F),z=Math.cos(F);M.x=B*Y,M.y=-y*n+m,M.z=B*z,h.push(M.x,M.y,M.z),v.set(Y,C,z).normalize(),f.push(v.x,v.y,v.z),d.push(P,1-y),E.push(g++)}A.push(E)}for(let S=0;S<i;S++)for(let E=0;E<r;E++){let y=A[E][S],B=A[E+1][S],U=A[E+1][S+1],P=A[E][S+1];(e>0||E!==0)&&(u.push(y,B,P),b+=3),(t>0||E!==r-1)&&(u.push(B,U,P),b+=3)}l.addGroup(p,b,0),p+=b}function x(v){let M=g,b=new Me,C=new I,S=0,E=v===!0?e:t,y=v===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;let B=g;for(let U=0;U<=i;U++){let F=U/i*c+o,Y=Math.cos(F),z=Math.sin(F);C.x=E*z,C.y=m*y,C.z=E*Y,h.push(C.x,C.y,C.z),f.push(0,y,0),b.x=Y*.5+.5,b.y=z*.5*y+.5,d.push(b.x,b.y),g++}for(let U=0;U<i;U++){let P=M+U,F=B+U;v===!0?u.push(F,F+1,P):u.push(F+1,F,P),S+=3}l.addGroup(p,S,v===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_h=class s extends Cs{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sp=class s extends ht{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let x=new I,v=new I,M=new I;for(let b=0;b<t.length;b+=3)d(t[b+0],x),d(t[b+1],v),d(t[b+2],M),c(x,v,M,_)}function c(_,x,v,M){let b=M+1,C=[];for(let S=0;S<=b;S++){C[S]=[];let E=_.clone().lerp(v,S/b),y=x.clone().lerp(v,S/b),B=b-S;for(let U=0;U<=B;U++)U===0&&S===b?C[S][U]=E:C[S][U]=E.clone().lerp(y,U/B)}for(let S=0;S<b;S++)for(let E=0;E<2*(b-S)-1;E++){let y=Math.floor(E/2);E%2===0?(f(C[S][y+1]),f(C[S+1][y]),f(C[S][y])):(f(C[S][y+1]),f(C[S+1][y+1]),f(C[S+1][y]))}}function l(_){let x=new I;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(_),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){let _=new I;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let v=m(_)/2/Math.PI+.5,M=p(_)/Math.PI+.5;a.push(v,1-M)}g(),h()}function h(){for(let _=0;_<a.length;_+=6){let x=a[_+0],v=a[_+2],M=a[_+4],b=Math.max(x,v,M),C=Math.min(x,v,M);b>.9&&C<.1&&(x<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),M<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,x){let v=_*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){let _=new I,x=new I,v=new I,M=new I,b=new Me,C=new Me,S=new Me;for(let E=0,y=0;E<r.length;E+=9,y+=6){_.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),b.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),S.set(a[y+4],a[y+5]),M.copy(_).add(x).add(v).divideScalar(3);let B=m(M);A(b,y+0,_,B),A(C,y+2,x,B),A(S,y+4,v,B)}}function A(_,x,v,M){M<0&&_.x===1&&(a[x]=_.x-1),v.x===0&&v.z===0&&(a[x]=M/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var xh=class s extends Sp{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var bh=class s extends ht{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],u=[],h=e,f=(t-e)/i,d=new I,g=new Me;for(let A=0;A<=i;A++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let A=0;A<i;A++){let m=A*(n+1);for(let p=0;p<n;p++){let _=p+m,x=_,v=_+n+1,M=_+n+2,b=_+1;o.push(x,v,b),o.push(v,M,b)}}this.setIndex(o),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ci=class s extends ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new I,f=new I,d=[],g=[],A=[],m=[];for(let p=0;p<=n;p++){let _=[],x=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){let b=M/t;h.x=-e*Math.cos(i+b*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(i+b*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),A.push(f.x,f.y,f.z),m.push(b+v,1-x),_.push(l++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let x=u[p][_+1],v=u[p][_],M=u[p+1][_],b=u[p+1][_+1];(p!==0||a>0)&&d.push(x,v,b),(p!==n-1||c<Math.PI)&&d.push(v,M,b)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(A,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var cc=class extends ze{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},zn=class extends vi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eA,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qi=class extends zn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lr=class extends vi{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eA,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Eh=class extends Yr{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Xu(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function iw(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function sw(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ev(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Iv(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var jr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wp=class extends jr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gg,endingEnd:Gg}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vg:r=e,o=2*t-n;break;case Wg:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vg:a=e,c=2*n-t;break;case Wg:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),A=g*g,m=A*g,p=-f*m+2*f*A-f*g,_=(1+f)*m+(-1.5-2*f)*A+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*A+.5*g,v=d*m-d*A;for(let M=0;M!==o;++M)r[M]=p*a[u+M]+_*a[l+M]+x*a[c+M]+v*a[h+M];return r}},Tp=class extends jr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}},Ip=class extends jr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ss=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xu(t,this.TimeBufferType),this.values=Xu(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xu(e.times,Array),values:Xu(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ip(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tc:t=this.InterpolantFactoryMethodDiscrete;break;case nc:t=this.InterpolantFactoryMethodLinear;break;case $f:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tc;case this.InterpolantFactoryMethodLinear:return nc;case this.InterpolantFactoryMethodSmooth:return $f}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&iw(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$f,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let A=t[h+g];if(A!==t[f+g]||A!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ss.prototype.TimeBufferType=Float32Array;ss.prototype.ValueBufferType=Float32Array;ss.prototype.DefaultInterpolation=nc;var Jr=class extends ss{constructor(e,t,n){super(e,t,n)}};Jr.prototype.ValueTypeName="bool";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=tc;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var yh=class extends ss{};yh.prototype.ValueTypeName="color";var ur=class extends ss{};ur.prototype.ValueTypeName="number";var Rp=class extends jr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)Rn.slerpFlat(r,0,a,l-o,a,l,c);return r}},hr=class extends ss{InterpolantFactoryMethodLinear(e){return new Rp(this.times,this.values,this.getValueSize(),e)}};hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends ss{constructor(e,t,n){super(e,t,n)}};Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=tc;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var fr=class extends ss{};fr.prototype.ValueTypeName="vector";var Mh=class{constructor(e="",t=-1,n=[],i=DE){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ms(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(aw(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ss.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=sw(c);c=ev(c,1,u),l=ev(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ur(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,A){if(d.length!==0){let m=[],p=[];Iv(d,m,p,g),m.length!==0&&A.push(new h(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let A=0;A<f[g].morphTargets.length;A++)d[f[g].morphTargets[A]]=-1;for(let A in d){let m=[],p=[];for(let _=0;_!==f[g].morphTargets.length;++_){let x=f[g];m.push(x.time),p.push(x.morphTarget===A?1:0)}i.push(new ur(".morphTargetInfluence["+A+"]",m,p))}c=d.length*a}else{let d=".bones["+t[h].name+"]";n(fr,d+".position",f,"pos",i),n(hr,d+".quaternion",f,"rot",i),n(fr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function rw(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ur;case"vector":case"vector2":case"vector3":case"vector4":return fr;case"color":return yh;case"quaternion":return hr;case"bool":case"boolean":return Jr;case"string":return Zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function aw(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=rw(s.type);if(s.times===void 0){let t=[],n=[];Iv(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Gr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Bp=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},sA=new Bp,Ss=class{constructor(e){this.manager=e!==void 0?e:sA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr={},Dp=class extends Error{constructor(e,t){super(e),this.response=t}},dr=class extends Ss{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Gr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(rr[e]!==void 0){rr[e].push({onLoad:t,onProgress:n,onError:i});return}rr[e]=[],rr[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=rr[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,A=0,m=new ReadableStream({start(p){_();function _(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{A+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:A,total:d});for(let b=0,C=u.length;b<C;b++){let S=u[b];S.onProgress&&S.onProgress(M)}p.enqueue(v),_()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Dp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Gr.add(e,l);let u=rr[e];delete rr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=rr[e];if(u===void 0)throw this.manager.itemError(e),l;delete rr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Fp=class extends Ss{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Gr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=El("img");function c(){u(),Gr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Qa=class extends Ss{constructor(e){super(e)}load(e,t,n,i){let r=new tn,a=new Fp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},za=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},lc=class extends za{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fd=new Ye,tv=new I,nv=new I,Tl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;tv.setFromMatrixPosition(e.matrixWorld),t.position.copy(tv),nv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nv),t.updateMatrixWorld(),Fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pp=class extends Tl{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ic*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},$r=class extends za{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},iv=new Ye,ol=new I,Pd=new I,Lp=class extends Tl{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ol.setFromMatrixPosition(e.matrixWorld),n.position.copy(ol),Pd.copy(n.position),Pd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pd),n.updateMatrixWorld(),i.makeTranslation(-ol.x,-ol.y,-ol.z),iv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iv)}},uc=class extends za{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Up=class extends Tl{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ns=class extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Up}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ch=class extends za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ea=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ws=class extends ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Sh=class extends Ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Gr.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Gr.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Gr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Gr.add(e,c),r.manager.itemStart(e)}};var hc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=sv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function sv(){return performance.now()}var rA="\\[\\]\\.:\\/",ow=new RegExp("["+rA+"]","g"),aA="[^"+rA+"]",cw="[^"+rA.replace("\\.","")+"]",lw=/((?:WC+[\/:])*)/.source.replace("WC",aA),uw=/(WCOD+)?/.source.replace("WCOD",cw),hw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",aA),fw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",aA),dw=new RegExp("^"+lw+uw+hw+fw+"$"),pw=["material","materials","bones","map"],Op=class{constructor(e,t,n){let i=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ow,"")}static parseTrackName(e){let t=dw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);pw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=Op;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CR=new Float32Array(1);var rv=new Ye,wh=class{constructor(e,t,n=0,i=1/0){this.ray=new Oa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rv),this}intersectObject(e,t=!0,n=[]){return Np(e,this,n,t),n.sort(av),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Np(e[i],this,n,t);return n.sort(av),n}};function av(s,e){return s.distance-e.distance}function Np(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Np(r[a],e,t,!0)}}var ov=new Me,Th=class{constructor(e=new Me(1/0,1/0),t=new Me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ov.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ov).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function oA(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new ht,l=0;for(let u=0;u<s.length;++u){let h=s[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=s[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Rv(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let A=0;A<a[u].length;++A)d.push(a[u][A][f]);let g=Rv(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Rv(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new St(a,t,n),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let A=u.getComponent(f,g);o.setComponent(f+h,g,A)}}else a.set(u.array,c);c+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function Bv(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,a=0,o=Object.keys(s.attributes),c={},l={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let _=0,x=o.length;_<x;_++){let v=o[_],M=s.attributes[v];c[v]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let b=s.morphAttributes[v];b&&(l[v]||(l[v]=[]),b.forEach((C,S)=>{let E=new C.array.constructor(C.count*C.itemSize);l[v][S]=new C.constructor(E,C.itemSize,C.normalized)}))}let d=e*.5,g=Math.log10(1/e),A=Math.pow(10,g),m=d*A;for(let _=0;_<r;_++){let x=n?n.getX(_):_,v="";for(let M=0,b=o.length;M<b;M++){let C=o[M],S=s.getAttribute(C),E=S.itemSize;for(let y=0;y<E;y++)v+=`${~~(S[h[y]](x)*A+m)},`}if(v in t)u.push(t[v]);else{for(let M=0,b=o.length;M<b;M++){let C=o[M],S=s.getAttribute(C),E=s.morphAttributes[C],y=S.itemSize,B=c[C],U=l[C];for(let P=0;P<y;P++){let F=h[P],Y=f[P];if(B[Y](a,S[F](x)),E)for(let z=0,j=E.length;z<j;z++)U[z][Y](a,E[z][F](x))}}t[v]=a,u.push(a),a++}}let p=s.clone();for(let _ in s.attributes){let x=c[_];if(p.setAttribute(_,new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),_ in l)for(let v=0;v<l[_].length;v++){let M=l[_][v];p.morphAttributes[_][v]=new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(u),p}function cA(s,e){if(e===vv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Bl||e===Bh){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Bl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ph=class extends Ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AA(t)}),this.register(function(t){return new mA(t)}),this.register(function(t){return new CA(t)}),this.register(function(t){return new SA(t)}),this.register(function(t){return new wA(t)}),this.register(function(t){return new vA(t)}),this.register(function(t){return new _A(t)}),this.register(function(t){return new xA(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new pA(t)}),this.register(function(t){return new EA(t)}),this.register(function(t){return new gA(t)}),this.register(function(t){return new MA(t)}),this.register(function(t){return new yA(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new TA(t)}),this.register(function(t){return new IA(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ea.extractUrlBase(e);a=ea.resolveURL(l,this.path)}else a=ea.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new dr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Uv){try{a[ft.KHR_BINARY_GLTF]=new RA(e)}catch(h){i&&i(h);return}r=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new OA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new dA;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new BA(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new DA;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new FA;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Aw(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fA=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new ye(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Gn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ns(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new uc(u),l.distance=h;break;case"spot":l=new $r(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,pr(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},dA=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Qn}extendParams(e,t,n){let i=[];e.color=new ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Gn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(i)}},pA=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},AA=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(o,o)}return Promise.all(r)}},mA=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},gA=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},vA=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Gn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Lt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},_A=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},xA=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(o[0],o[1],o[2],Gn),Promise.all(r)}},bA=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},EA=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(o[0],o[1],o[2],Gn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Lt)),Promise.all(r)}},yA=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},MA=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},CA=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},SA=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},wA=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},TA=class{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},IA=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==as.TRIANGLES&&l.mode!==as.TRIANGLE_STRIP&&l.mode!==as.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let g of h){let A=new Ye,m=new I,p=new Rn,_=new I(1,1,1),x=new Xr(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,A.compose(m,p,_));for(let v in c)if(v==="_COLOR_0"){let M=c[v];x.instanceColor=new Pn(M.array,M.itemSize,M.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Gt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Uv="glTF",Dl=12,Dv={JSON:1313821514,BIN:5130562},RA=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Dl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Uv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Dl,r=new DataView(e,Dl),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Dv.JSON){let l=new Uint8Array(e,Dl+a,o);this.content=n.decode(l)}else if(c===Dv.BIN){let l=Dl+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},BA=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=LA[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=LA[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],d=dc[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let g in d.attributes){let A=d.attributes[g],m=c[g];m!==void 0&&(A.normalized=m)}h(d)},o,l,Gn,f)})})}},DA=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},FA=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},Lh=class extends jr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,A=g-l,m=-2*d+3*f,p=d-f,_=1-m,x=p-f+h;for(let v=0;v!==o;v++){let M=a[A+v+o],b=a[A+v+c]*u,C=a[g+v+o],S=a[g+v]*u;r[v]=_*M+x*b+m*C+p*S}return r}},mw=new Rn,PA=class extends Lh{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return mw.fromArray(r).normalize().toArray(r),r}},as={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},dc={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fv={9728:In,9729:Kt,9984:qp,9985:ul,9986:Ho,9987:fn},Pv={33071:ti,33648:pl,10497:kn},lA={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},LA={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ta={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gw={CUBICSPLINE:void 0,LINEAR:nc,STEP:tc},uA={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new zn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:is})),s.DefaultMaterial}function Ga(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _w(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function xw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bw(s){let e,t=s.extensions&&s.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hA(t.attributes):e=s.indices+":"+hA(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+hA(s.targets[n]);return e}function hA(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function UA(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ew(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var yw=new Ye,OA=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Aw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Qa(this.options.manager):this.textureLoader=new Sh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ga(r,o,i),pr(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(ea.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=lA[i.type],o=dc[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new St(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=lA[i.type],l=dc[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,A,m;if(d&&d!==h){let p=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(_);x||(A=new l(o,p*d,i.count*d/u),x=new oc(A,d/u),t.cache.add(_,x)),m=new Na(x,c,f%d/u,g)}else o===null?A=new l(i.count*c):A=new l(o,f,i.count*c),m=new St(A,c,g);if(i.sparse!==void 0){let p=lA.SCALAR,_=dc[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,M=new _(a[1],x,i.sparse.count*p),b=new l(a[2],v,i.sparse.count*c);o!==null&&(m=new St(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,S=M.length;C<S;C++){let E=M[C];if(m.setX(E,b[C*c]),c>=2&&m.setY(E,b[C*c+1]),c>=3&&m.setZ(E,b[C*c+2]),c>=4&&m.setW(E,b[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Fv[f.magFilter]||Kt,u.minFilter=Fv[f.minFilter]||fn,u.wrapS=Pv[f.wrapS]||kn,u.wrapT=Pv[f.wrapT]||kn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==In&&u.minFilter!==Kt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(A){let m=new tn(A);m.needsUpdate=!0,f(m)}),t.load(ea.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),pr(h,a),h.userData.mimeType=a.mimeType||Ew(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new wl,vi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Yr,vi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return zn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let h=i[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new ye(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Gn),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Lt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=bt);let u=r.alphaMode||uA.OPAQUE;if(u===uA.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===uA.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Qn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qn){let h=r.emissiveFactor;o.emissive=new ye().setRGB(h[0],h[1],h[2],Gn)}return r.emissiveTexture!==void 0&&a!==Qn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),pr(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ga(i,h,r),h})}createUniqueName(e){let t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Lv(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=bw(l),h=i[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Lv(new ht,l,t),i[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?vw(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let A=u[d],m=a[d],p,_=l[d];if(m.mode===as.TRIANGLES||m.mode===as.TRIANGLE_STRIP||m.mode===as.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new oh(A,_):new we(A,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===as.TRIANGLE_STRIP?p.geometry=cA(p.geometry,Bh):m.mode===as.TRIANGLE_FAN&&(p.geometry=cA(p.geometry,Bl));else if(m.mode===as.LINES)p=new hh(A,_);else if(m.mode===as.LINE_STRIP)p=new Os(A,_);else if(m.mode===as.LINE_LOOP)p=new fh(A,_);else if(m.mode===as.POINTS)p=new dh(A,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&xw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),pr(p,r),m.extensions&&Ga(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ga(i,h[0],r),h[0];let f=new Tn;r.extensions&&Ga(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(ot.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pr(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let f=new Ye;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ch(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],g=i.samplers[d.sampler],A=d.target,m=A.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;A.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),u.push(A))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],A=h[3],m=h[4],p=[];for(let _=0,x=f.length;_<x;_++){let v=f[_],M=d[_],b=g[_],C=A[_],S=m[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let E=n._createAnimationTracks(v,M,b,C,S);if(E)for(let y=0;y<E.length;y++)p.push(E[y])}return new Mh(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,yw)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Sl:l.length>1?u=new Tn:l.length===1?u=l[0]:u=new Gt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),pr(u,r),r.extensions&&Ga(n,u,r),r.matrix!==void 0){let h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Tn;n.name&&(r.name=i.createUniqueName(n.name)),pr(r,n),n.extensions&&Ga(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof vi||f instanceof tn)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];ta[r.path]===ta.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(ta[r.path]){case ta.weights:l=ur;break;case ta.rotation:l=hr;break;case ta.position:case ta.scale:l=fr;break;default:switch(n.itemSize){case 1:l=ur;break;case 2:case 3:default:l=fr;break}break}let u=i.interpolation!==void 0?gw[i.interpolation]:nc,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+ta[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=UA(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof hr?PA:Lh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Mw(s,e,t){let n=e.attributes,i=new Kn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){let u=UA(dc[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,c=new I;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let A=UA(dc[f.componentType]);c.multiplyScalar(A)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Wi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Lv(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=LA[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return lt.workingColorSpace!==Gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),pr(s,e),Mw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_w(s,e.targets,t):s})}var Ov=(function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),x=0;x<p.length;++x){var v=p.charCodeAt(x);_[x]=v>96?v-97:v>64?v-39:v+4}for(var M=0,x=0;x<p.length;++x)_[M++]=_[x]<60?n[_[x]]:(_[x]-60)*64+_[++x];return _.buffer.slice(0,M)}function c(p,_,x,v,M,b){var C=r.exports.sbrk,S=x+3&-4,E=C(S*v),y=C(M.length),B=new Uint8Array(r.exports.memory.buffer);B.set(M,y);var U=p(E,x,v,y,M.length);if(U==0&&b&&b(E,S,v),_.set(B.subarray(E,E+x*v)),C(E-C(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function d(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(x){var v=x.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function g(p){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),x=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(x),M=0;M<p;++M)h[M]=d(v);URL.revokeObjectURL(v)}function A(p,_,x,v,M){for(var b=h[0],C=1;C<h.length;++C)h[C].pending<b.pending&&(b=h[C]);return new Promise(function(S,E){var y=new Uint8Array(x),B=f++;b.pending+=p,b.requests[B]={resolve:S,reject:E},b.object.postMessage({id:B,count:p,size:_,source:y,mode:v,filter:M},[y.buffer])})}function m(p){a.then(function(){var _=p.data;try{var x=new Uint8Array(_.count*_.size);c(r.exports[_.mode],x,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:x},[x.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,x,v,M){c(r.exports.meshopt_decodeVertexBuffer,p,_,x,v,r.exports[l[M]])},decodeIndexBuffer:function(p,_,x,v){c(r.exports.meshopt_decodeIndexBuffer,p,_,x,v)},decodeIndexSequence:function(p,_,x,v){c(r.exports.meshopt_decodeIndexSequence,p,_,x,v)},decodeGltfBuffer:function(p,_,x,v,M,b){c(r.exports[u[M]],p,_,x,v,r.exports[l[b]])},decodeGltfBufferAsync:function(p,_,x,v,M){return h.length>0?A(p,_,x,u[v],l[M]):a.then(function(){var b=new Uint8Array(p*_);return c(r.exports[u[v]],b,p,_,x,r.exports[l[M]]),b})}}})();function Va(){return new Ph().setMeshoptDecoder(Ov)}var pc=new Map;sA.setURLModifier(s=>pc.get(s)||s);var Fl=s=>pc.get(s)||s;function Nv(s){return Promise.all(s.map(async e=>{if(!pc.has(e))try{let t=await fetch(e,{priority:"low"});t.ok&&pc.set(e,URL.createObjectURL(await t.blob()))}catch(t){console.warn("pr\xE9-busca",e,t)}}))}function NA(s){for(let e of s){let t=pc.get(e);t&&(URL.revokeObjectURL(t),pc.delete(e))}}var na={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cw=new qr(-1,1,1,-1,0,1),kA=class extends ht{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},Sw=new kA,os=class{constructor(e){this._mesh=new we(Sw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Wa=class extends Xn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ze?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ki.clone(e.uniforms),this.material=new ze({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new os(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Pl=class extends Xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Uh=class extends Xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Oh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ot}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wa(na),this.copyPass.material.blending=gi,this.clock=new hc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Pl!==void 0&&(a instanceof Pl?n=!0:a instanceof Uh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Nh=class extends Xn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var kv={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ac=class s extends Xn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,a,{type:Ot}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ut(r,a,{type:Ot});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ut(r,a,{type:Ot});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=kv;this.highPassUniforms=Ki.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Me(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=na;this.copyUniforms=Ki.clone(u.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:qn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new Qn,this.fsQuad=new os(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ze({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ze({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ac.BlurDirectionX=new Me(1,0);Ac.BlurDirectionY=new Me(0,1);var Hv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var kh=class extends Xn{constructor(){super();let e=Hv;this.uniforms=Ki.clone(e.uniforms),this.material=new cc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new os(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wp&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qv={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var Hh=class extends Xn{constructor(e,t,n){super(),this.scene=e,this.camera=t;let i=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new Ut(1,1,{minFilter:In,magFilter:In,type:Ot}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Cl,this.materialDepth.depthPacking=$p,this.materialDepth.blending=gi;let o=Qv,c=Ki.clone(o.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=i,c.aspect.value=t.aspect,c.aperture.value=r,c.maxblur.value=a,c.nearClip.value=t.near,c.farClip.value=t.far,this.materialBokeh=new ze({defines:Object.assign({},o.defines),uniforms:c,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=c,this.fsQuad=new os(this.materialBokeh),this._oldClearColor=new ye}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);let i=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(i),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};function Ar(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Yv(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gc={duration:.5,overwrite:!1,delay:0},sm,si,Yt,ls=1e8,Vt=1/ls,KA=Math.PI*2,ww=KA/4,Tw=0,jv=Math.sqrt,Iw=Math.cos,Rw=Math.sin,Ln=function(e){return typeof e=="string"},nn=function(e){return typeof e=="function"},gr=function(e){return typeof e=="number"},jh=function(e){return typeof e>"u"},Qs=function(e){return typeof e=="object"},Ti=function(e){return e!==!1},rm=function(){return typeof window<"u"},Qh=function(e){return nn(e)||Ln(e)},Jv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ri=Array.isArray,XA=/(?:-?\.?\d|\.)+/gi,am=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ja=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,HA=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,om=/[+-]=-?[.\d]+/,Zv=/[^,'"\[\]\s]+/gi,Bw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,ks,YA,cm,Yi={},Wh={},$v,e_=function(e){return(Wh=Ya(e,Yi))&&ai},Jh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Hl=function(e,t){return!t&&console.warn(e)},t_=function(e,t){return e&&(Yi[e]=t)&&Wh&&(Wh[e]=t)||Yi},Ql=function(){return 0},Dw={suppressEvents:!0,isStart:!0,kill:!1},zh={suppressEvents:!0,kill:!1},Fw={suppressEvents:!0},lm={},sa=[],jA={},n_,Si={},QA={},zv=30,Gh=[],um="",hm=function(e){var t=e[0],n,i;if(Qs(t)||nn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Gh.length;i--&&!Gh[i].targetTest(t););n=Gh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new pm(e[i],n)))||e.splice(i,1);return e},ra=function(e){return e._gsap||hm(us(e))[0]._gsap},fm=function(e,t,n){return(n=e[t])&&nn(n)?e[t]():jh(n)&&e.getAttribute&&e.getAttribute(t)||n},_i=function(e,t){return(e=e.split(",")).forEach(t)||e},sn=function(e){return Math.round(e*1e5)/1e5||0},Vn=function(e){return Math.round(e*1e7)/1e7||0},Ja=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Pw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},qh=function(){var e=sa.length,t=sa.slice(0),n,i;for(jA={},sa.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},i_=function(e,t,n,i){sa.length&&!si&&qh(),e.render(t,n,i||si&&t<0&&(e._initted||e._startAt)),sa.length&&!si&&qh()},s_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zv).length<2?t:Ln(e)?e.trim():e},r_=function(e){return e},hs=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Lw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ya=function(e,t){for(var n in t)e[n]=t[n];return e},Gv=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Qs(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Kh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ol=function(e){var t=e.parent||Jt,n=e.keyframes?Lw(ri(e.keyframes)):hs;if(Ti(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Uw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},a_=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Zh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},aa=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qa=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ow=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},JA=function(e,t,n,i){return e._startAt&&(si?e._startAt.revert(zh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Nw=function s(e){return!e||e._ts&&s(e.parent)},Vv=function(e){return e._repeat?vc(e._tTime,e=e.duration()+e._rDelay)*e:0},vc=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Xh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$h=function(e){return e._end=Vn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vt)||0))},ef=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Vn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$h(e),n._dirty||qa(n,e)),e},o_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Xh(e.rawTime(),t),(!t._dur||Vl(0,t.totalDuration(),n)-t._tTime>Vt)&&t.render(n,!0)),qa(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Vt}},Hs=function(e,t,n,i){return t.parent&&aa(t),t._start=Vn((gr(n)?n:n||e!==Jt?cs(e,n,t):e._time)+t._delay),t._end=Vn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),a_(e,t,"_first","_last",e._sort?"_start":0),ZA(t)||(e._recent=t),i||o_(e,t),e._ts<0&&ef(e,e._tTime),e},c_=function(e,t){return(Yi.ScrollTrigger||Jh("scrollTrigger",t))&&Yi.ScrollTrigger.create(t,e)},l_=function(e,t,n,i,r){if(gm(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!si&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&n_!==wi.frame)return sa.push(e),e._lazy=[r,i],1},kw=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},ZA=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Hw=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&kw(e)&&!(!e._initted&&ZA(e))||(e._ts<0||e._dp._ts<0)&&!ZA(e))?0:1,o=e._rDelay,c=0,l,u,h;if(o&&e._repeat&&(c=Vl(0,e._tDur,t),u=vc(c,o),e._yoyo&&u&1&&(a=1-a),u!==vc(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||si||i||e._zTime===Vt||!t&&e._zTime){if(!e._initted&&l_(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?Vt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&JA(e,t,n,!0),e._onUpdate&&!n&&Xi(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&aa(e,1),!n&&!si&&(Xi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Qw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},_c=function(e,t,n,i){var r=e._repeat,a=Vn(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Vn(a*(r+1)+e._rDelay*r):a,o>0&&!i&&ef(e,e._tTime=e._tDur*o),e.parent&&$h(e),n||qa(e.parent,e),e},Wv=function(e){return e instanceof Yn?qa(e):_c(e,e._dur)},zw={_start:0,endTime:Ql,totalDuration:Ql},cs=function s(e,t,n){var i=e.labels,r=e._recent||zw,a=e.duration()>=ls?r.endTime(!1):e._dur,o,c,l;return Ln(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(ri(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Nl=function(e,t,n){var i=gr(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Ti(c.vars.inherit)&&c.parent;a.immediateRender=Ti(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new pn(t[0],a,t[r+1])},oa=function(e,t){return e||e===0?t(e):t},Vl=function(e,t,n){return n<e?e:n>t?t:n},jn=function(e,t){return!Ln(e)||!(t=Bw.exec(e))?"":t[1]},Gw=function(e,t,n){return oa(n,function(i){return Vl(e,t,i)})},$A=[].slice,u_=function(e,t){return e&&Qs(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qs(e[0]))&&!e.nodeType&&e!==ks},Vw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Ln(i)&&!t||u_(i,1)?(r=n).push.apply(r,us(i)):n.push(i)})||n},us=function(e,t,n){return Yt&&!t&&Yt.selector?Yt.selector(e):Ln(e)&&!n&&(YA||!xc())?$A.call((t||cm).querySelectorAll(e),0):ri(e)?Vw(e,n):u_(e)?$A.call(e,0):e?[e]:[]},em=function(e){return e=us(e)[0]||Hl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return us(t,n.querySelectorAll?n:n===e?Hl("Invalid scope")||cm.createElement("div"):e)}},h_=function(e){return e.sort(function(){return .5-Math.random()})},f_=function(e){if(nn(e))return e;var t=Qs(e)?e:{each:e},n=Ka(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,h=i;return Ln(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(f,d,g){var A=(g||t).length,m=a[A],p,_,x,v,M,b,C,S,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,ls])[1],!E){for(C=-ls;C<(C=g[E++].getBoundingClientRect().left)&&E<A;);E<A&&E--}for(m=a[A]=[],p=c?Math.min(E,A)*u-.5:i%E,_=E===ls?0:c?A*h/E-.5:i/E|0,C=0,S=ls,b=0;b<A;b++)x=b%E-p,v=_-(b/E|0),m[b]=M=l?Math.abs(l==="y"?v:x):jv(x*x+v*v),M>C&&(C=M),M<S&&(S=M);i==="random"&&h_(m),m.max=C-S,m.min=S,m.v=A=(parseFloat(t.amount)||parseFloat(t.each)*(E>A?A-1:l?l==="y"?A/E:E:Math.max(E,A/E))||0)*(i==="edges"?-1:1),m.b=A<0?r-A:r,m.u=jn(t.amount||t.each)||0,n=n&&A<0?b_(n):n}return A=(m[f]-m.min)/m.max||0,Vn(m.b+(n?n(A):A)*m.v)+m.u}},tm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Vn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(gr(n)?0:jn(n))}},d_=function(e,t){var n=ri(e),i,r;return!n&&Qs(e)&&(i=n=e.radius||ls,e.values?(e=us(e.values),(r=!gr(e[0]))&&(i*=i)):e=tm(e.increment)),oa(t,n?nn(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=ls,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-o),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:a,r||u===a||gr(a)?u:u+jn(a)}:tm(e))},p_=function(e,t,n,i){return oa(ri(e)?!t:n===!0?!!(n=0):!i,function(){return ri(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ww=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},qw=function(e,t){return function(n){return e(parseFloat(n))+(t||jn(n))}},Kw=function(e,t,n){return m_(e,t,0,1,n)},A_=function(e,t,n){return oa(n,function(i){return e[~~t(i)]})},Xw=function s(e,t,n){var i=t-e;return ri(e)?A_(e,s(0,e.length),t):oa(n,function(r){return(i+(r-e)%i)%i+e})},Yw=function s(e,t,n){var i=t-e,r=i*2;return ri(e)?A_(e,s(0,e.length-1),t):oa(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},bc=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Zv:XA),n+=e.substr(t,i-t)+p_(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},m_=function(e,t,n,i,r){var a=t-e,o=i-n;return oa(r,function(c){return n+((c-e)/a*o||0)})},jw=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Ln(e),o={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(ri(e)&&!ri(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(s(e[l-1],e[l]));h--,r=function(g){g*=h;var A=Math.min(f,~~g);return u[A](g-A)},n=t}else i||(e=Ya(ri(e)?[]:{},e));if(!u){for(c in t)Am.call(o,e,c,"get",t[c]);r=function(g){return xm(g,o)||(a?e.p:e)}}}return oa(n,r)},qv=function(e,t,n){var i=e.labels,r=ls,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},Xi=function(e,t,n){var i=e.vars,r=i[t],a=Yt,o=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&sa.length&&qh(),o&&(Yt=o),u=c?r.apply(l,c):r.call(l),Yt=a,u},Ll=function(e){return aa(e),e.scrollTrigger&&e.scrollTrigger.kill(!!si),e.progress()<1&&Xi(e,"onInterrupt"),e},mc,g_=[],v_=function(e){if(e)if(e=!e.name&&e.default||e,rm()||e.headless){var t=e.name,n=nn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ql,render:xm,add:Am,kill:fT,modifier:hT,rawVars:0},a={targetTest:0,get:0,getSetter:tf,aliases:{},register:0};if(xc(),e!==i){if(Si[t])return;hs(i,hs(Kh(e,r),a)),Ya(i.prototype,Ya(r,Kh(e,a))),Si[i.prop=t]=i,e.targetTest&&(Gh.push(i),lm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}t_(t,i),e.register&&e.register(ai,i,xi)}else g_.push(e)},Nt=255,Ul={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},zA=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Nt+.5|0},__=function(e,t,n){var i=e?gr(e)?[e>>16,e>>8&Nt,e&Nt]:0:Ul.black,r,a,o,c,l,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ul[e])i=Ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Nt,i&Nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Nt,e&Nt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(XA),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=zA(c+1/3,r,a),i[1]=zA(c,r,a),i[2]=zA(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(am),n&&i.length<4&&(i[3]=1),i}else i=e.match(XA)||Ul.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Nt,a=i[1]/Nt,o=i[2]/Nt,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},x_=function(e){var t=[],n=[],i=-1;return e.split(mr).forEach(function(r){var a=r.match(ja)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Kv=function(e,t,n){var i="",r=(e+i).match(mr),a=t?"hsla(":"rgba(",o=0,c,l,u,h;if(!r)return e;if(r=r.map(function(f){return(f=__(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=x_(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(mr,"1").split(ja),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(mr),h=l.length-1;o<h;o++)i+=l[o]+r[o];return i+l[h]},mr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ul)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),Jw=/hsl[a]?\(/,dm=function(e){var t=e.join(" "),n;if(mr.lastIndex=0,mr.test(t))return n=Jw.test(t),e[1]=Kv(e[1],n),e[0]=Kv(e[0],n,x_(e[1])),!0},zl,wi=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,u,h,f,d,g=function A(m){var p=s()-i,_=m===!0,x,v,M,b;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,x=M-a,(x>0||_)&&(b=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,a+=x+(x>=r?4:r-x),v=1),_||(c=l(A)),v)for(d=0;d<o.length;d++)o[d](M,f,b,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){$v&&(!YA&&rm()&&(ks=YA=window,cm=ks.document||{},Yi.gsap=ai,(ks.gsapVersions||(ks.gsapVersions=[])).push(ai.version),e_(Wh||ks.GreenSockGlobals||!ks.gsap&&ks||{}),g_.forEach(v_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},zl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),zl=0,l=Ql},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,p,_){var x=p?function(v,M,b,C){m(v,M,b,C),h.remove(x)}:m;return h.remove(m),o[_?"unshift":"push"](x),xc(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h})(),xc=function(){return!zl&&wi.wake()},dt={},Zw=/^[\d.\-M][\d.\-,\s]/,$w=/["']/g,eT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace($w,"").trim():+l,i=c.substr(o+1).trim();return t},tT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},nT=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[eT(t[1])]:tT(e).split(",").map(s_)):dt._CE&&Zw.test(e)?dt._CE("",e):n},b_=function(e){return function(t){return 1-e(1-t)}},E_=function s(e,t){for(var n=e._first,i;n;)n instanceof Yn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ka=function(e,t){return e&&(nn(e)?e:dt[e]||nT(e))||t},Za=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return _i(e,function(o){dt[o]=Yi[o]=r,dt[a=o.toLowerCase()]=n;for(var c in r)dt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=dt[o+"."+c]=r[c]}),r},y_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},GA=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/KA*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Rw((u-a)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:y_(o);return r=KA/r,c.config=function(l,u){return s(e,l,u)},c},VA=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:y_(n);return i.config=function(r){return s(e,r)},i};_i("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Za(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;Za("Elastic",GA("in"),GA("out"),GA());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Za("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Za("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Za("Circ",function(s){return-(jv(1-s*s)-1)});Za("Sine",function(s){return s===1?1:-Iw(s*ww)+1});Za("Back",VA("in"),VA("out"),VA());dt.SteppedEase=dt.steps=Yi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Vt;return function(o){return((i*Vl(0,a,o)|0)+r)*n}}};gc.ease=dt["quad.out"];_i("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return um+=s+","+s+"Params,"});var pm=function(e,t){this.id=Tw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fm,this.set=t?t.getSetter:tf},Gl=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_c(this,+t.duration,1,1),this.data=t.data,Yt&&(this._ctx=Yt,Yt.data.push(this)),zl||wi.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_c(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(xc(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ef(this,n),!r._dp||r.parent||o_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hs(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),i_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Vv(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Vv(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?vc(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Vt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Xh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Vt?0:this._rts,this.totalTime(Vl(-Math.abs(this._delay),this._tDur,r),i!==!1),$h(this),Ow(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xc(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hs(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ti(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xh(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Fw);var i=si;return si=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),si=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wv(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(cs(this,n),Ti(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ti(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Vt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=nn(n)?n:r_,o=function(){var l=i.then;i.then=null,nn(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ll(this)},s})();hs(Gl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Vt,_prom:0,_ps:!1,_rts:1});var Yn=(function(s){Yv(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ti(n.sortChildren),Jt&&Hs(n.parent||Jt,Ar(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&c_(Ar(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Nl(0,arguments,this),this},t.from=function(i,r,a){return Nl(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Nl(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Ol(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new pn(i,r,cs(this,a),1),this},t.call=function(i,r,a){return Hs(this,pn.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,c,l,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new pn(i,a,cs(this,c)),this},t.staggerFrom=function(i,r,a,o,c,l,u){return a.runBackwards=1,Ol(a).immediateRender=Ti(a.immediateRender),this.staggerTo(i,r,a,o,c,l,u)},t.staggerFromTo=function(i,r,a,o,c,l,u,h){return o.startAt=a,Ol(o).immediateRender=Ti(o.immediateRender),this.staggerTo(i,r,o,c,l,u,h)},t.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Vn(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,d,g,A,m,p,_,x,v,M,b,C;if(this!==Jt&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),f=u,v=this._start,x=this._ts,p=!x,h&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=Vn(u%m),u===c?(A=this._repeat,f=l):(A=~~(u/m),A&&A===u/m&&(f=l,A--),f>l&&(f=l)),M=vc(this._tTime,m),!o&&this._tTime&&M!==A&&this._tTime-M*m-this._dur<=0&&(M=A),b&&A&1&&(f=l-f,C=1),A!==M&&!this._lock){var S=b&&M&1,E=S===(b&&A&1);if(A<M&&(S=!S),o=S?0:u%l?l:u,this._lock=1,this.render(o||(C?0:Vn(A*m)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&Xi(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,E&&(this._lock=2,o=S?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;E_(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=Qw(this,Vn(o),Vn(f)),_&&(u-=f-(f=_._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!A&&(Xi(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&_!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){_=0,g&&(u+=this._zTime=-Vt);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&_!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,a||si&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){_=0,g&&(u+=this._zTime=y?-Vt:Vt);break}}d=g}}if(_&&!r&&(this.pause(),_.render(f>=o?0:-Vt)._zTime=f>=o?1:-1,this._ts))return this._start=v,$h(this),this.render(i,r,a);this._onUpdate&&!r&&Xi(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&aa(this,1),!r&&!(i<0&&!o)&&(u||o||!c)&&(Xi(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(gr(r)||(r=cs(this,r,i)),!(i instanceof Gl)){if(ri(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ln(i))return this.addLabel(i,r);if(nn(i))i=pn.delayedCall(0,i);else return this}return this!==i?Hs(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-ls);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof pn?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Ln(i)?this.removeLabel(i):nn(i)?this.killTweensOf(i):(Zh(this,i),i===this._recent&&(this._recent=this._last),qa(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vn(wi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=cs(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=pn.delayedCall(0,r||Ql,a);return o.data="isPause",this._hasPause=1,Hs(this,o,cs(this,i))},t.removePause=function(i){var r=this._first;for(i=cs(this,i);r;)r._start===i&&r.data==="isPause"&&aa(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)ia!==o[c]&&o[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=us(i),c=this._first,l=gr(r),u;c;)c instanceof pn?Pw(c._targets,o)&&(l?(!ia||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(o,r)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=cs(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,g=pn.to(a,hs({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Vt,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&_c(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,hs({startAt:{time:cs(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),qv(this,cs(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),qv(this,cs(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Vt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return qa(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qa(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,c=ls,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Hs(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;_c(a,a===Jt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Jt._ts&&(i_(Jt,Xh(i,Jt)),n_=wi.frame),wi.frame>=zv){zv+=Ii.autoSleep||120;var r=Jt._first;if((!r||!r._ts)&&Ii.autoSleep&&wi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||wi.sleep()}}},e})(Gl);hs(Yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var iT=function(e,t,n,i,r,a,o){var c=new xi(this._pt,e,t,0,1,_m,null,r),l=0,u=0,h,f,d,g,A,m,p,_;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=bc(i)),a&&(_=[n,i],a(_,e,t),n=_[0],i=_[1]),f=n.match(HA)||[];h=HA.exec(i);)g=h[0],A=i.substring(l,h.index),d?d=(d+1)%5:A.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:A||u===1?A:",",s:m,c:g.charAt(1)==="="?Ja(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},l=HA.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(om.test(i)||p)&&(c.e=0),this._pt=c,c},Am=function(e,t,n,i,r,a,o,c,l,u){nn(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:nn(h)?l?e[t.indexOf("set")||!nn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=nn(h)?l?cT:S_:vm,g;if(Ln(i)&&(~i.indexOf("random(")&&(i=bc(i)),i.charAt(1)==="="&&(g=Ja(f,i)+(jn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||nm)return!isNaN(f*i)&&i!==""?(g=new xi(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?uT:w_,0,d),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Jh(t,i),iT.call(this,e,t,f,i,d,c||Ii.stringFilter,l))},sT=function(e,t,n,i,r){if(nn(e)&&(e=kl(e,r,t,n,i)),!Qs(e)||e.style&&e.nodeType||ri(e)||Jv(e))return Ln(e)?kl(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=kl(e[o],r,t,n,i);return a},mm=function(e,t,n,i,r,a){var o,c,l,u;if(Si[e]&&(o=new Si[e]).init(r,o.rawVars?t[e]:sT(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new xi(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==mc))for(l=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)l[o._props[u]]=c;return o},ia,nm,gm=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,A=e._startAt,m=e._targets,p=e.parent,_=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!sm,v=e.timeline,M,b,C,S,E,y,B,U,P,F,Y,z,j;if(v&&(!f||!r)&&(r="none"),e._ease=Ka(r,gc.ease),e._yEase=h?b_(Ka(h===!0?r:h,gc.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(U=m[0]?ra(m[0]).harness:0,z=U&&i[U.prop],M=Kh(i,lm),A&&(A._zTime<0&&A.progress(1),t<0&&u&&o&&!d?A.render(-1,!0):A.revert(u&&g?zh:Dw),A._lazy=0),a){if(aa(e._startAt=pn.set(m,hs({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!A&&Ti(c),startAt:null,delay:0,onUpdate:l&&function(){return Xi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(si||!o&&!d)&&e._startAt.revert(zh),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!A){if(t&&(o=!1),C=hs({overwrite:!1,data:"isFromStart",lazy:o&&!A&&Ti(c),immediateRender:o,stagger:0,parent:p},M),z&&(C[U.prop]=z),aa(e._startAt=pn.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(si?e._startAt.revert(zh):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Vt,Vt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&Ti(c)||c&&!g,b=0;b<m.length;b++){if(E=m[b],B=E._gsap||hm(m)[b]._gsap,e._ptLookup[b]=F={},jA[B.id]&&sa.length&&qh(),Y=_===m?b:_.indexOf(E),U&&(P=new U).init(E,z||M,e,Y,_)!==!1&&(e._pt=S=new xi(e._pt,E,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(q){F[q]=S}),P.priority&&(y=1)),!U||z)for(C in M)Si[C]&&(P=mm(C,M,e,Y,E,_))?P.priority&&(y=1):F[C]=S=Am.call(e,E,C,"get",M[C],Y,_,0,i.stringFilter);e._op&&e._op[b]&&e.kill(E,e._op[b]),x&&e._pt&&(ia=e,Jt.killTweensOf(E,F,e.globalTime(t)),j=!e.parent,ia=0),e._pt&&c&&(jA[B.id]=1)}y&&bm(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&v.render(ls,!0,!0)},rT=function(e,t,n,i,r,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return nm=1,e.vars[t]="+=0",gm(e,o),nm=0,c?Hl(t+" not eligible for reset"):1;l.push(u)}for(d=l.length;d--;)h=l[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=sn(n)+jn(h.e)),h.b&&(h.b=u.s+jn(h.b))},aT=function(e,t){var n=e[0]?ra(e[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return t;r=Ya({},t);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},oT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(ri(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},kl=function(e,t,n,i,r){return nn(e)?e.call(t,n,i,r):Ln(e)&&~e.indexOf("random(")?bc(e):e},M_=um+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",C_={};_i(M_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return C_[s]=1});var pn=(function(s){Yv(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Ol(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,g=c.keyframes,A=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,_=i.parent||Jt,x=(ri(n)||Jv(n)?gr(n[0]):"length"in i)?[n]:us(n),v,M,b,C,S,E,y,B;if(o._targets=x.length?hm(x):Hl("GSAP target "+n+" not found. https://gsap.com",!Ii.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Qh(l)||Qh(u)){if(i=o.vars,v=o.timeline=new Yn({data:"nested",defaults:A||{},targets:_&&_.data==="nested"?_.vars.targets:x}),v.kill(),v.parent=v._dp=Ar(o),v._start=0,f||Qh(l)||Qh(u)){if(C=x.length,y=f&&f_(f),Qs(f))for(S in f)~M_.indexOf(S)&&(B||(B={}),B[S]=f[S]);for(M=0;M<C;M++)b=Kh(i,C_),b.stagger=0,p&&(b.yoyoEase=p),B&&Ya(b,B),E=x[M],b.duration=+kl(l,Ar(o),M,E,x),b.delay=(+kl(u,Ar(o),M,E,x)||0)-o._delay,!f&&C===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),v.to(E,b,y?y(M,E,x):0),v._ease=dt.none;v.duration()?l=u=0:o.timeline=0}else if(g){Ol(hs(v.vars.defaults,{ease:"none"})),v._ease=Ka(g.ease||i.ease||"none");var U=0,P,F,Y;if(ri(g))g.forEach(function(z){return v.to(x,z,">")}),v.duration();else{b={};for(S in g)S==="ease"||S==="easeEach"||oT(S,g[S],b,g.easeEach);for(S in b)for(P=b[S].sort(function(z,j){return z.t-j.t}),U=0,M=0;M<P.length;M++)F=P[M],Y={ease:F.e,duration:(F.t-(M?P[M-1].t:0))/100*l},Y[S]=F.v,v.to(x,Y,U),U+=Y.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||o.duration(l=v.duration())}else o.timeline=0;return d===!0&&!sm&&(ia=Ar(o),Jt.killTweensOf(x),ia=0),Hs(_,Ar(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!g&&o._start===Vn(_._time)&&Ti(h)&&Nw(Ar(o))&&_.data!=="nested")&&(o._tTime=-Vt,o.render(Math.max(0,-u)||0)),m&&c_(Ar(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Vt&&!u?c:i<Vt?0:i,f,d,g,A,m,p,_,x,v;if(!l)Hw(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(A=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(A*100+i,r,a);if(f=Vn(h%A),h===c?(g=this._repeat,f=l):(g=~~(h/A),g&&g===Vn(h/A)&&(f=l,g--),f>l&&(f=l)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=l-f),m=vc(this._tTime,A),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&E_(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==A&&this._initted&&(this._lock=a=1,this.render(Vn(A*g),!0).invalidate()._lock=0))}if(!this._initted){if(l_(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(v||this._ease)(f/l),this._from&&(this.ratio=_=1-_),f&&!o&&!r&&!g&&(Xi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(_,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&JA(this,i,r,a),Xi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Xi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&JA(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&aa(this,1),!r&&!(u&&!o)&&(h||o||p)&&(Xi(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,c){zl||wi.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||gm(this,l),u=this._ease(l/this._dur),rT(this,i,r,a,o,u,l,c)?this.resetTo(i,r,a,o,1):(ef(this,0),this.parent||a_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ll(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ia&&ia.vars.overwrite!==!0)._first||Ll(this),this.parent&&a!==this.timeline.totalDuration()&&_c(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?us(i):o,l=this._ptLookup,u=this._pt,h,f,d,g,A,m,p;if((!r||r==="all")&&Uw(o,c))return r==="all"&&(this._pt=0),Ll(this);for(h=this._op=this._op||[],r!=="all"&&(Ln(r)&&(A={},_i(r,function(_){return A[_]=1}),r=A),r=aT(o,r)),p=o.length;p--;)if(~c.indexOf(o[p])){f=l[p],r==="all"?(h[p]=r,g=f,d={}):(d=h[p]=h[p]||{},g=r);for(A in g)m=f&&f[A],m&&((!("kill"in m.d)||m.d.kill(A)===!0)&&Zh(this,m,"_pt"),delete f[A]),d!=="all"&&(d[A]=1)}return this._initted&&!this._pt&&u&&Ll(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Nl(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Nl(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Jt.killTweensOf(i,r,a)},e})(Gl);hs(pn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_i("staggerTo,staggerFrom,staggerFromTo",function(s){pn[s]=function(){var e=new Yn,t=$A.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var vm=function(e,t,n){return e[t]=n},S_=function(e,t,n){return e[t](n)},cT=function(e,t,n,i){return e[t](i.fp,n)},lT=function(e,t,n){return e.setAttribute(t,n)},tf=function(e,t){return nn(e[t])?S_:jh(e[t])&&e.setAttribute?lT:vm},w_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},uT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_m=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},xm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},hT=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},fT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Zh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},dT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},bm=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},xi=(function(){function s(t,n,i,r,a,o,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||w_,this.d=c||this,this.set=l||vm,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=dT,this.m=n,this.mt=r,this.tween=i},s})();_i(um+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return lm[s]=1});Yi.TweenMax=Yi.TweenLite=pn;Yi.TimelineLite=Yi.TimelineMax=Yn;Jt=new Yn({sortChildren:!1,defaults:gc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ii.stringFilter=dm;var Xa=[],Vh={},pT=[],Xv=0,AT=0,WA=function(e){return(Vh[e]||pT).map(function(t){return t()})},im=function(){var e=Date.now(),t=[];e-Xv>2&&(WA("matchMediaInit"),Xa.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=ks.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),WA("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Xv=e,WA("matchMedia"))},T_=(function(){function s(t,n){this.selector=n&&em(n),this.data=[],this._r=[],this.isReverted=!1,this.id=AT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){nn(n)&&(r=i,i=n,n=nn);var a=this,o=function(){var l=Yt,u=a.selector,h;return l&&l!==a&&l.data.push(a),r&&(a.selector=em(r)),Yt=a,h=i.apply(a,arguments),nn(h)&&a._r.push(h),Yt=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===nn?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=Yt;Yt=null,n(this),Yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof pn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Yn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof pn)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Xa.length;a--;)Xa[a].id===this.id&&Xa.splice(a,1)},e.revert=function(n){this.kill(n||{})},s})(),mT=(function(){function s(t){this.contexts=[],this.scope=t,Yt&&Yt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Qs(n)||(n={matches:n});var a=new T_(0,r||this.scope),o=a.conditions={},c,l,u;Yt&&!a.selector&&(a.selector=Yt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=ks.matchMedia(n[l]),c&&(Xa.indexOf(a)<0&&Xa.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(im):c.addEventListener("change",im)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Yh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return v_(i)})},timeline:function(e){return new Yn(e)},getTweensOf:function(e,t){return Jt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ln(e)&&(e=us(e)[0]);var r=ra(e||{}).get,a=n?r_:s_;return n==="native"&&(n=""),e&&(t?a((Si[t]&&Si[t].get||r)(e,t,n,i)):function(o,c,l){return a((Si[o]&&Si[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=us(e),e.length>1){var i=e.map(function(u){return ai.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Si[t],o=ra(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;mc._pt=0,h.init(e,n?u+n:u,mc,0,[e]),h.render(1,h),mc._pt&&xm(1,mc)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=ai.to(e,Ya((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(c,l,u){return r.resetTo(t,c,l,u)};return a.tween=r,a},isTweening:function(e){return Jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ka(e.ease,gc.ease)),Gv(gc,e||{})},config:function(e){return Gv(Ii,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Si[o]&&!Yi[o]&&Hl(t+" effect requires "+o+" plugin.")}),QA[t]=function(o,c,l){return n(us(o),hs(c||{},r),l)},a&&(Yn.prototype[t]=function(o,c,l){return this.add(QA[t](o,Qs(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){dt[e]=Ka(t)},parseEase:function(e,t){return arguments.length?Ka(e,t):dt},getById:function(e){return Jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yn(e),i,r;for(n.smoothChildTiming=Ti(e.smoothChildTiming),Jt.remove(n),n._dp=0,n._time=n._tTime=Jt._time,i=Jt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof pn&&i.vars.onComplete===i._targets[0]))&&Hs(n,i,i._start-i._delay),i=r;return Hs(Jt,n,0),n},context:function(e,t){return e?new T_(e,t):Yt},matchMedia:function(e){return new mT(e)},matchMediaRefresh:function(){return Xa.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||im()},addEventListener:function(e,t){var n=Vh[e]||(Vh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Vh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Xw,wrapYoyo:Yw,distribute:f_,random:p_,snap:d_,normalize:Kw,getUnit:jn,clamp:Gw,splitColor:__,toArray:us,selector:em,mapRange:m_,pipe:Ww,unitize:qw,interpolate:jw,shuffle:h_},install:e_,effects:QA,ticker:wi,updateRoot:Yn.updateRoot,plugins:Si,globalTimeline:Jt,core:{PropTween:xi,globals:t_,Tween:pn,Timeline:Yn,Animation:Gl,getCache:ra,_removeLinkedListItem:Zh,reverting:function(){return si},context:function(e){return e&&Yt&&(Yt.data.push(e),e._ctx=Yt),Yt},suppressOverwrites:function(e){return sm=e}}};_i("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Yh[s]=pn[s]});wi.add(Yn.updateRoot);mc=Yh.to({},{duration:0});var gT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},vT=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=gT(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},qA=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(Ln(r)&&(c={},_i(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}vT(o,r)}}}},ai=Yh.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)si?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},qA("roundProps",tm),qA("modifiers"),qA("snap",d_))||Yh;pn.version=Yn.version=ai.version="3.12.5";$v=1;rm()&&xc();var _T=dt.Power0,xT=dt.Power1,bT=dt.Power2,ET=dt.Power3,yT=dt.Power4,MT=dt.Linear,CT=dt.Quad,ST=dt.Cubic,wT=dt.Quart,TT=dt.Quint,IT=dt.Strong,RT=dt.Elastic,BT=dt.Back,DT=dt.SteppedEase,FT=dt.Bounce,PT=dt.Sine,LT=dt.Expo,UT=dt.Circ;var I_,ca,yc,Tm,no,OT,R_,Im,NT=function(){return typeof window<"u"},_r={},to=180/Math.PI,Mc=Math.PI/180,Ec=Math.atan2,B_=1e8,Rm=/([A-Z])/g,kT=/(left|right|width|margin|padding|x)/i,HT=/[\s,\(]\S/,zs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},GT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},N_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},k_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},VT=function(e,t,n){return e.style[t]=n},WT=function(e,t,n){return e.style.setProperty(t,n)},qT=function(e,t,n){return e._gsap[t]=n},KT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},XT=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},YT=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Zt="transform",Ri=Zt+"Origin",jT=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in _r&&r){if(this.tfm=this.tfm||{},e!=="transform")e=zs[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=vr(i,o)}):this.tfm[e]=a.x?a[e]:vr(i,e),e===Ri&&(this.tfm.zOrigin=a.zOrigin);else return zs.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(Zt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ri,t,"")),e=Zt}(r||t)&&this.props.push(e,t,r[e])},H_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},JT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Rm,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Im(),(!r||!r.isStart)&&!n[Zt]&&(H_(n),i.zOrigin&&n[Ri]&&(n[Ri]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Q_=function(e,t){var n={target:e,props:[],revert:JT,save:jT};return e._gsap||ai.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},z_,Cm=function(e,t){var n=ca.createElementNS?ca.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ca.createElement(e);return n&&n.style?n:ca.createElement(e)},Gs=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Rm,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Cc(t)||t,1)||""},D_="O,Moz,ms,Ms,Webkit".split(","),Cc=function(e,t,n){var i=t||no,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(D_[a]+e in r););return a<0?null:(a===3?"ms":a>=0?D_[a]:"")+e},Sm=function(){NT()&&window.document&&(I_=window,ca=I_.document,yc=ca.documentElement,no=Cm("div")||{style:{}},OT=Cm("div"),Zt=Cc(Zt),Ri=Zt+"Origin",no.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",z_=!!Cc("perspective"),Im=ai.core.reverting,Tm=1)},Em=function s(e){var t=Cm("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(yc.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),yc.removeChild(t),this.style.cssText=r,a},F_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},G_=function(e){var t;try{t=e.getBBox()}catch{t=Em.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Em||(t=Em.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+F_(e,["x","cx","x1"])||0,y:+F_(e,["y","cy","y1"])||0,width:0,height:0}:t},V_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&G_(e))},io=function(e,t){if(t){var n=e.style,i;t in _r&&t!==Ri&&(t=Zt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Rm,"-$1").toLowerCase())):n.removeAttribute(t)}},la=function(e,t,n,i,r,a){var o=new xi(e._pt,t,n,0,1,a?k_:N_);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},P_={deg:1,rad:1,turn:1},ZT={grid:1,flex:1},ua=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=no.style,c=kT.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,A,m,p;if(i===a||!r||P_[i]||P_[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&V_(e),(d||a==="%")&&(_r[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[u],sn(d?r/g*h:r/100*g);if(o[c?"width":"height"]=h+(f?a:i),A=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(A=(e.ownerSVGElement||{}).parentNode),(!A||A===ca||!A.appendChild)&&(A=ca.body),m=A._gsap,m&&d&&m.width&&c&&m.time===wi.time&&!m.uncache)return sn(r/m.width*h);if(d&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=h+i,g=e[u],_?e.style[t]=_:io(e,t)}else(d||a==="%")&&!ZT[Gs(A,"display")]&&(o.position=Gs(e,"position")),A===e&&(o.position="static"),A.appendChild(no),g=no[u],A.removeChild(no),o.position="absolute";return c&&d&&(m=ra(A),m.time=wi.time,m.width=A[u]),sn(f?g*r/h:g&&r?h/g*r:0)},vr=function(e,t,n,i){var r;return Tm||Sm(),t in zs&&t!=="transform"&&(t=zs[t],~t.indexOf(",")&&(t=t.split(",")[0])),_r[t]&&t!=="transform"?(r=Kl(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:sf(Gs(e,Ri))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=nf[t]&&nf[t](e,t,n)||Gs(e,t)||fm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ua(e,t,r,n)+n:r},$T=function(e,t,n,i){if(!n||n==="none"){var r=Cc(t,e,1),a=r&&Gs(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Gs(e,"borderTopColor"))}var o=new xi(this._pt,e.style,t,0,1,_m),c=0,l=0,u,h,f,d,g,A,m,p,_,x,v,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(A=e.style[t],e.style[t]=i,i=Gs(e,t)||i,A?e.style[t]=A:io(e,t)),u=[n,i],dm(u),n=u[0],i=u[1],f=n.match(ja)||[],M=i.match(ja)||[],M.length){for(;h=ja.exec(i);)m=h[0],_=i.substring(c,h.index),g?g=(g+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(g=1),m!==(A=f[l++]||"")&&(d=parseFloat(A)||0,v=A.substr((d+"").length),m.charAt(1)==="="&&(m=Ja(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),c=ja.lastIndex-x.length,x||(x=x||Ii.units[t]||v,c===i.length&&(i+=x,o.e+=x)),v!==x&&(d=ua(e,t,A,x)||0),o._pt={_next:o._pt,p:_||l===1?_:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?k_:N_;return om.test(i)&&(o.e=0),this._pt=o,o},L_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eI=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=L_[n]||n,t[1]=L_[i]||i,t.join(" ")},tI=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],_r[o]&&(c=1,o=o==="transformOrigin"?Ri:Zt),io(n,o);c&&(io(n,Zt),a&&(a.svg&&n.removeAttribute("transform"),Kl(n,1),a.uncache=1,H_(i)))}},nf={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new xi(e._pt,t,n,0,0,tI);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},ql=[1,0,0,1,0,0],W_={},q_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},U_=function(e){var t=Gs(e,Zt);return q_(t)?ql:t.substr(7).match(am).map(sn)},Bm=function(e,t){var n=e._gsap||ra(e),i=e.style,r=U_(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?ql:r):(r===ql&&!e.offsetParent&&e!==yc&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,o=e.nextElementSibling,yc.appendChild(e)),r=U_(e),c?i.display=c:io(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):yc.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},wm=function(e,t,n,i,r,a){var o=e._gsap,c=r||Bm(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=c[0],g=c[1],A=c[2],m=c[3],p=c[4],_=c[5],x=t.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,b,C,S,E;n?c!==ql&&(C=d*m-g*A)&&(S=v*(m/C)+M*(-A/C)+(A*_-m*p)/C,E=v*(-g/C)+M*(d/C)-(d*_-g*p)/C,v=S,M=E):(b=G_(e),v=b.x+(~x[0].indexOf("%")?v/100*b.width:v),M=b.y+(~(x[1]||x[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&o.smooth?(p=v-l,_=M-u,o.xOffset=h+(p*d+_*A)-p,o.yOffset=f+(p*g+_*m)-_):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Ri]="0px 0px",a&&(la(a,o,"xOrigin",l,v),la(a,o,"yOrigin",u,M),la(a,o,"xOffset",h,o.xOffset),la(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},Kl=function(e,t){var n=e._gsap||new pm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=Gs(e,Ri)||"0",u,h,f,d,g,A,m,p,_,x,v,M,b,C,S,E,y,B,U,P,F,Y,z,j,q,ie,pe,Ee,Q,le,X,se;return u=h=f=A=m=p=_=x=v=0,d=g=1,n.svg=!!(e.getCTM&&V_(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Zt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Zt]!=="none"?c[Zt]:"")),i.scale=i.rotate=i.translate="none"),C=Bm(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),l=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),wm(e,j||l,!!j||n.originIsAbsolute,n.smooth!==!1,C)),M=n.xOrigin||0,b=n.yOrigin||0,C!==ql&&(B=C[0],U=C[1],P=C[2],F=C[3],u=Y=C[4],h=z=C[5],C.length===6?(d=Math.sqrt(B*B+U*U),g=Math.sqrt(F*F+P*P),A=B||U?Ec(U,B)*to:0,_=P||F?Ec(P,F)*to+A:0,_&&(g*=Math.abs(Math.cos(_*Mc))),n.svg&&(u-=M-(M*B+b*P),h-=b-(M*U+b*F))):(se=C[6],le=C[7],pe=C[8],Ee=C[9],Q=C[10],X=C[11],u=C[12],h=C[13],f=C[14],S=Ec(se,Q),m=S*to,S&&(E=Math.cos(-S),y=Math.sin(-S),j=Y*E+pe*y,q=z*E+Ee*y,ie=se*E+Q*y,pe=Y*-y+pe*E,Ee=z*-y+Ee*E,Q=se*-y+Q*E,X=le*-y+X*E,Y=j,z=q,se=ie),S=Ec(-P,Q),p=S*to,S&&(E=Math.cos(-S),y=Math.sin(-S),j=B*E-pe*y,q=U*E-Ee*y,ie=P*E-Q*y,X=F*y+X*E,B=j,U=q,P=ie),S=Ec(U,B),A=S*to,S&&(E=Math.cos(S),y=Math.sin(S),j=B*E+U*y,q=Y*E+z*y,U=U*E-B*y,z=z*E-Y*y,B=j,Y=q),m&&Math.abs(m)+Math.abs(A)>359.9&&(m=A=0,p=180-p),d=sn(Math.sqrt(B*B+U*U+P*P)),g=sn(Math.sqrt(z*z+se*se)),S=Ec(Y,z),_=Math.abs(S)>2e-4?S*to:0,v=X?1/(X<0?-X:X):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!q_(Gs(e,Zt)),j&&e.setAttribute("transform",j))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(d*=-1,_+=A<=0?180:-180,A+=A<=0?180:-180):(g*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=sn(d),n.scaleY=sn(g),n.rotation=sn(A)+o,n.rotationX=sn(m)+o,n.rotationY=sn(p)+o,n.skewX=_+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Ri]=sf(l)),n.xOffset=n.yOffset=0,n.force3D=Ii.force3D,n.renderTransform=n.svg?iI:z_?K_:nI,n.uncache=0,n},sf=function(e){return(e=e.split(" "))[0]+" "+e[1]},ym=function(e,t,n){var i=jn(t);return sn(parseFloat(t)+parseFloat(ua(e,"x",n+"px",i)))+i},nI=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,K_(e,t)},$a="0deg",Wl="0px",eo=") ",K_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,A=n.scaleY,m=n.transformPerspective,p=n.force3D,_=n.target,x=n.zOrigin,v="",M=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==$a||u!==$a)){var b=parseFloat(u)*Mc,C=Math.sin(b),S=Math.cos(b),E;b=parseFloat(h)*Mc,E=Math.cos(b),a=ym(_,a,C*E*-x),o=ym(_,o,-Math.sin(b)*-x),c=ym(_,c,S*E*-x+x)}m!==Wl&&(v+="perspective("+m+eo),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(M||a!==Wl||o!==Wl||c!==Wl)&&(v+=c!==Wl||M?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+eo),l!==$a&&(v+="rotate("+l+eo),u!==$a&&(v+="rotateY("+u+eo),h!==$a&&(v+="rotateX("+h+eo),(f!==$a||d!==$a)&&(v+="skew("+f+", "+d+eo),(g!==1||A!==1)&&(v+="scale("+g+", "+A+eo),_.style[Zt]=v||"translate(0, 0)"},iI=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,A=n.yOrigin,m=n.xOffset,p=n.yOffset,_=n.forceCSS,x=parseFloat(a),v=parseFloat(o),M,b,C,S,E;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Mc,l*=Mc,M=Math.cos(c)*h,b=Math.sin(c)*h,C=Math.sin(c-l)*-f,S=Math.cos(c-l)*f,l&&(u*=Mc,E=Math.tan(l-u),E=Math.sqrt(1+E*E),C*=E,S*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),M*=E,b*=E)),M=sn(M),b=sn(b),C=sn(C),S=sn(S)):(M=h,S=f,b=C=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=ua(d,"x",a,"px"),v=ua(d,"y",o,"px")),(g||A||m||p)&&(x=sn(x+g-(g*M+A*C)+m),v=sn(v+A-(g*b+A*S)+p)),(i||r)&&(E=d.getBBox(),x=sn(x+i/100*E.width),v=sn(v+r/100*E.height)),E="matrix("+M+","+b+","+C+","+S+","+x+","+v+")",d.setAttribute("transform",E),_&&(d.style[Zt]=E)},sI=function(e,t,n,i,r){var a=360,o=Ln(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?to:1),l=c-i,u=i+l+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*B_)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*B_)%a-~~(l/a)*a)),e._pt=f=new xi(e._pt,t,n,i,l,QT),f.e=u,f.u="deg",e._props.push(n),f},O_=function(e,t){for(var n in t)e[n]=t[n];return e},rI=function(e,t,n){var i=O_({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,f,d,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Zt]=t,o=Kl(n,1),io(n,Zt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Zt],a[Zt]=t,o=Kl(n,1),a[Zt]=l);for(c in _r)l=i[c],u=o[c],l!==u&&r.indexOf(c)<0&&(d=jn(l),g=jn(u),h=d!==g?ua(n,c,l,g):parseFloat(l),f=parseFloat(u),e._pt=new xi(e._pt,o,c,h,f-h,Mm),e._pt.u=g||0,e._props.push(c));O_(o,i)};_i("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});nf[e>1?"border"+s:s]=function(o,c,l,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return vr(o,g,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,A){return d[g]=f[A]=f[A]||f[(A-1)/2|0]}),o.init(c,d,h)}});var Dm={name:"css",register:Sm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,c=n.vars.startAt,l,u,h,f,d,g,A,m,p,_,x,v,M,b,C,S;Tm||Sm(),this.styles=this.styles||Q_(e),S=this.styles.props,this.tween=n;for(A in t)if(A!=="autoRound"&&(u=t[A],!(Si[A]&&mm(A,t,n,i,e,r)))){if(d=typeof u,g=nf[A],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=bc(u)),g)g(this,e,A,u,n)&&(C=1);else if(A.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(A)+"").trim(),u+="",mr.lastIndex=0,mr.test(l)||(m=jn(l),p=jn(u)),p?m!==p&&(l=ua(e,A,l,p)+p):m&&(u+=m),this.add(o,"setProperty",l,u,i,r,0,0,A),a.push(A),S.push(A,0,o[A]);else if(d!=="undefined"){if(c&&A in c?(l=typeof c[A]=="function"?c[A].call(n,i,e,r):c[A],Ln(l)&&~l.indexOf("random(")&&(l=bc(l)),jn(l+"")||l==="auto"||(l+=Ii.units[A]||jn(vr(e,A))||""),(l+"").charAt(1)==="="&&(l=vr(e,A))):l=vr(e,A),f=parseFloat(l),_=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),_&&(u=u.substr(2)),h=parseFloat(u),A in zs&&(A==="autoAlpha"&&(f===1&&vr(e,"visibility")==="hidden"&&h&&(f=0),S.push("visibility",0,o.visibility),la(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),A!=="scale"&&A!=="transform"&&(A=zs[A],~A.indexOf(",")&&(A=A.split(",")[0]))),x=A in _r,x){if(this.styles.save(A),v||(M=e._gsap,M.renderTransform&&!t.parseTransform||Kl(e,t.parseTransform),b=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new xi(this._pt,o,Zt,0,1,M.renderTransform,M,0,-1),v.dep=1),A==="scale")this._pt=new xi(this._pt,M,"scaleY",M.scaleY,(_?Ja(M.scaleY,_+h):h)-M.scaleY||0,Mm),this._pt.u=0,a.push("scaleY",A),A+="X";else if(A==="transformOrigin"){S.push(Ri,0,o[Ri]),u=eI(u),M.svg?wm(e,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&la(this,M,"zOrigin",M.zOrigin,p),la(this,o,A,sf(l),sf(u)));continue}else if(A==="svgOrigin"){wm(e,u,1,b,0,this);continue}else if(A in W_){sI(this,M,A,f,_?Ja(f,_+u):u);continue}else if(A==="smoothOrigin"){la(this,M,"smooth",M.smooth,u);continue}else if(A==="force3D"){M[A]=u;continue}else if(A==="transform"){rI(this,u,e);continue}}else A in o||(A=Cc(A)||A);if(x||(h||h===0)&&(f||f===0)&&!HT.test(u)&&A in o)m=(l+"").substr((f+"").length),h||(h=0),p=jn(u)||(A in Ii.units?Ii.units[A]:m),m!==p&&(f=ua(e,A,l,p)),this._pt=new xi(this._pt,x?M:o,A,f,(_?Ja(f,_+h):h)-f,!x&&(p==="px"||A==="zIndex")&&t.autoRound!==!1?GT:Mm),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=zT);else if(A in o)$T.call(this,e,A,l,_?_+u:u);else if(A in e)this.add(e,A,l||e[A],_?_+u:u,i,r);else if(A!=="parseTransform"){Jh(A,u);continue}x||(A in o?S.push(A,0,o[A]):S.push(A,1,l||e[A])),a.push(A)}}C&&bm(this)},render:function(e,t){if(t.tween._time||!Im())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vr,aliases:zs,getSetter:function(e,t,n){var i=zs[t];return i&&i.indexOf(",")<0&&(t=i),t in _r&&t!==Ri&&(e._gsap.x||vr(e,"x"))?n&&R_===n?t==="scale"?KT:qT:(R_=n||{})&&(t==="scale"?XT:YT):e.style&&!jh(e.style[t])?VT:~t.indexOf("-")?WT:tf(e,t)},core:{_removeProperty:io,_getMatrix:Bm}};ai.utils.checkPrefix=Cc;ai.core.getStyleSaver=Q_;(function(s,e,t,n){var i=_i(s+","+e+","+t,function(r){_r[r]=1});_i(e,function(r){Ii.units[r]="deg",W_[r]=1}),zs[i[13]]=s+","+e,_i(n,function(r){var a=r.split(":");zs[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_i("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ii.units[s]="px"});ai.registerPlugin(Dm);var fs=ai.registerPlugin(Dm)||ai,E2=fs.core.Tween;var vt=`
float sst(float a,float b,float x){float span=b-a;float t=clamp((x-a)/(abs(span)<1e-7?1e-7:span),0.,1.);return t*t*(3.-2.*t);}
vec3 fin(vec3 c){return clamp(c,vec3(0.),vec3(48.));}
`,rn=`
float hash3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float vnoise(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
 return mix(mix(mix(hash3(i),hash3(i+vec3(1,0,0)),f.x),mix(hash3(i+vec3(0,1,0)),hash3(i+vec3(1,1,0)),f.x),f.y),
            mix(mix(hash3(i+vec3(0,0,1)),hash3(i+vec3(1,0,1)),f.x),mix(hash3(i+vec3(0,1,1)),hash3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float a=0.,w=.5;for(int i=0;i<6;i++){a+=w*vnoise(p);p=p*2.03+vec3(1.7,9.2,3.1);w*=.5;}return a;}
float fbm3(vec3 p){float a=0.,w=.5;for(int i=0;i<3;i++){a+=w*vnoise(p);p=p*2.03+vec3(1.7,9.2,3.1);w*=.5;}return a;}
`,Fm=`
vec2 eqUV(vec3 n){return vec2(atan(-n.z,n.x)/6.2831853+.5,asin(clamp(n.y,-1.,1.))/3.1415927+.5);}
struct EQS{vec2 uv;vec2 gx;vec2 gy;};
EQS eqs(vec3 n){vec2 a=eqUV(n);vec2 b=vec2(fract(a.x+.5),a.y);vec2 ax=dFdx(a),ay=dFdy(a),bx=dFdx(b),by=dFdy(b);
  bool useB=abs(ax.x)+abs(ay.x)>abs(bx.x)+abs(by.x)+1e-6;EQS s;s.uv=a;s.gx=useB?bx:ax;s.gy=useB?by:ay;return s;}
vec4 eqT(sampler2D t,EQS s){return textureGrad(t,s.uv,s.gx,s.gy);}
vec4 eqAt(sampler2D t,vec3 n,EQS s){return textureGrad(t,eqUV(n),s.gx,s.gy);}
vec4 eqL(sampler2D t,vec3 n){return textureLod(t,eqUV(n),0.);}
`,Pm=`
const float AR=1.025, HR=.00125, HM=.0002, hD=.0052, wD=.0016;
const vec3 BR=vec3(36.9,86.,210.9);
const float BMs=46.;
float chap(float X,float h,float mu){float c=sqrt(max(X+h,0.));
  if(mu>=0.)return c/(c*mu+1.)*exp(-h);
  float x0=sqrt(max(0.,1.-mu*mu))*(X+h);float c0=sqrt(max(x0,0.));return 2.*c0*exp(min(X-x0,60.))-c/max(1.-c*mu,1e-3)*exp(-h);}
// Aerosol field independent from water clouds: broad isotropic lobes, no latitude stripes.
float dustCov(vec3 n){
  if(uHaze<=0.)return 0.; // 01/11: sem camada de poeira, nada a calcular (mesmo resultado)
  float d=acos(clamp(dot(n,uSite),-1.,1.));
  float broad=fbm3(n*3.2+vec3(8.,2.,4.));
  float front=1.-sst(uSpread*3.6-.30,uSpread*3.6+.12,d+.13*(broad-.5));
  // Cobertura larga e descont\xEDnua; nenhum anel de latitude ou faixa pintada.
  return uHaze*front*(.44+.74*sst(.25,.72,broad));
}
float dustCol(float r,float mu,vec3 n){float h=r-1.;float above=1.-sst(hD-1.8*wD,hD+1.8*wD,h);
  float rl=1.+hD;float s=r/rl;float ml=r>rl?mu:sqrt(max(0.,1.-s*s*(1.-mu*mu)));
  return uDustK*dustCov(n)*wD*1.77*above/max(ml,.035);}
vec3 tauUp(float r,float mu,vec3 n,float kd){float h=max(r-1.,0.);float muH=-sqrt(max(0.,1.-1./(r*r)));mu=max(mu,muH);
  return BR*HR*chap(1./HR,h/HR,mu)+vec3(BMs*1.11*HM*chap(1./HM,h/HM,mu))+vec3(dustCol(r,mu,n)*kd);}
vec3 Tsun(float r,float mu,vec3 n){float muH=-sqrt(max(0.,1.-1./(r*r)));
  float vis=sst(muH-.012,muH+.006,mu);
  return exp(-min(tauUp(r,max(mu,muH),n,.45),vec3(60.)))*vis;}
vec3 Tview(float r,vec3 n,vec3 V){vec3 t=tauUp(r,max(dot(n,V),0.),n,.2);float rc=length(uCam);
  if(rc<AR){vec3 nc=uCam/rc;t-=tauUp(rc,dot(nc,V),nc,.2);}
  return exp(-clamp(t,vec3(0.),vec3(60.)));}
`;async function X_(s,e,t,n=1,i=null){let r=Is(t),a=[],o=(d,g)=>{let A=d*Math.PI/180,m=g*Math.PI/180;return new I(Math.cos(A)*Math.cos(m),Math.sin(A),-Math.cos(A)*Math.sin(m))};for(let d=0;d<10;d++){let g=r()<.5?1:-1,A=g*(36+r()*26),m=o(A,r()*360);a.push(new ut(m.x,m.y,m.z,g*(.55+r()*.6)))}for(let d=0;d<4;d++){let g=r()<.5?1:-1,A=o(g*(11+r()*9),r()*360);a.push(new ut(A.x,A.y,A.z,g*(2.2+r()*1)))}let c=new Ut(e,e/2,{depthBuffer:!1,generateMipmaps:!0,minFilter:fn,magFilter:Kt,wrapS:kn,wrapT:ti});c.texture.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy());let l=new ze({uniforms:{uC:{value:a},uR:{value:[.016,.016,.016,.016,.016,.016,.016,.016,.016,.016,.006,.006,.006,.006]}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform vec4 uC[14];uniform float uR[14];${vt}${rn}
      float fbm8(vec3 p){float a=0.,w=.5;for(int i=0;i<8;i++){a+=w*vnoise(p);p=p*2.03+vec3(1.7,9.2,3.1);w*=.5;}return a;}
      vec3 rot(vec3 p,vec3 a,float g){return p*cos(g)+cross(a,p)*sin(g)+a*dot(a,p)*(1.-cos(g));}
      void main(){
        float lon=(vUv.x-.5)*6.2831853,lat=(vUv.y-.5)*3.1415927;
        vec3 n=vec3(cos(lat)*cos(lon),sin(lat),-cos(lat)*sin(lon));
        vec3 p=n;float storm=0.;
        for(int i=0;i<14;i++){vec3 c=uC[i].xyz;float dd=1.-dot(n,c);float k=exp(-dd/uR[i]);p=rot(p,c,uC[i].w*k);storm=max(storm,k);}
        float al=abs(lat)*57.29578;
        float bias=.15*exp(-pow(al/6.5,2.))-.17*exp(-pow((al-22.)/8.,2.))+.10*exp(-pow((al-56.)/13.,2.))+.07*storm;
        vec3 q=p*vec3(1.,1.7,1.);
        vec3 w=vec3(fbm(q*1.4),fbm(q*1.4+5.2),fbm(q*1.4+9.1));
        vec3 w2=vec3(fbm(q*4.+w*2.),fbm(q*4.+w*2.+3.7),0.);
        float c=fbm8(q*3.+w*1.8+vec3(w2.xy,0.)*.35);
        // v\xE1rios tamanhos: sistemas grandes, campos de c\xFAmulos rasgados (al\xEDsios), v\xE9us finos de cirros
        float t=.55-bias;
        float big=sst(t-.1,t+.18,c);
        float er=fbm(q*18.+w*4.);
        big=clamp(big-(1.-big)*.4*sst(.35,.7,er)-.05*(er-.5),0.,1.);
        float fld=fbm(n*16.+w*2.5)*.7+.3*fbm(n*48.+w*5.);
        float tr=sst(6.,14.,al)*(1.-sst(32.,44.,al));
        float cum=sst(.44,.66,fld)*(.45+.55*sst(.38,.58,c))*mix(.45,.9,tr);
        float ci=sst(.52,.8,fbm(vec3(p.x*4.,p.y*9.,p.z*4.)+w*1.6))*sst(15.,35.,al)*(1.-sst(70.,85.,al));
        float veil=sst(.4,.7,fbm(q*4.+w*2.2))*.5;
        float cov=max(big,max(cum*.62,max(ci*.35,veil*sst(.3,.55,c))));
        float thick=clamp(big*.85+.25*fbm(q*7.+w*2.3)-.08,0.,1.);
        float ov=fbm(n*2.4+3.3);
        float st=fbm(vec3(n.x*2.6,n.y*11.,n.z*2.6)+w*.5);
        gl_FragColor=vec4(cov,thick,ov,st);
      }`,depthTest:!1,depthWrite:!1}),u=new Mi;u.add(new we(new Bn(2,2),l));let h=new rc,f=e/2;for(let d=0;d<n;d++){d&&i&&await i();let g=Math.round(f*d/n),A=Math.round(f*(d+1)/n);c.scissor.set(0,g,e,A-g),c.scissorTest=n>1;let m=s.getRenderTarget();s.setRenderTarget(c),s.render(u,h),s.setRenderTarget(m)}return c.scissorTest=!1,c.scissor.set(0,0,e,f),l.dispose(),c.texture}function Is(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Y_="varying vec3 vN;varying vec3 vW;void main(){vN=normalize(position);vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",j_=`#define PI 3.14159265
uniform vec3 uSun,uSite,uSiteNow,uCam;uniform float uDim,uSunI,uSunRad,uHaze,uSpread,uDustK,uFlash,uRing,uScar,uTime,uEpoch,uCrater,uCloudAmt,uCloudPres,uGlow;
uniform sampler2D uRegional,uRegionContext; uniform float uRegionalAmt,uRegionalBridge,uRegionalClose;
uniform float uImpactReview,uEarthLook; uniform sampler2D uGlobeLook,uCloudLook;
uniform sampler2D uCloud,uDay,uAux,uDayHi,uAuxHi,uLand,uLandHi,uPaleo,uSup66,uDrift0,uDrift1,uDrift2;uniform vec4 uHiBox;
uniform float uCut;uniform vec3 uCutAxis,uCutFront;
uniform float uCavR,uShockR,uShockA,uClearR,uBlanketR,uBlanketA,uFireL,uFireH,uCurtB,uCurtH,uCurtO,uHeadI;uniform vec3 uHeadP;
varying vec3 vN;varying vec3 vW;`,J_=`
vec4 cloudField(vec3 n,EQS s){
  vec4 b=eqAt(uCloud,n,s),f=eqAt(uCloudLook,n,s);
  float wet=sst(.24,.68,b.r);
  f.r=max(max(0.,f.r-.055*(1.-wet))*(.50+.63*wet),b.r*.46);
  f.g=max(f.g*(.68+.32*wet),b.g*.34);
  return f;
}`,Z_=`
// Revis\xE3o 8: luz de fontes pontuais, caindo com o quadrado da dist\xE2ncia (como uma fonte real), em vez de um disco
// suave de largura fixa. Duas fontes: a bola de fogo sobre o ponto de contato (altura uFireH) e o pr\xF3prio asteroide
// incandescente durante a entrada (uHeadP). Perto da fonte a luz \xE9 intensa; o halo cai depressa e n\xE3o forma um c\xEDrculo.
float ptIrr(vec3 n,vec3 P,float I,float r,out vec3 Ld,out float att){vec3 L=P-n*r;float dl=max(length(L),1e-7);Ld=L/dl;
  att=I*1.5e-5/(dl*dl+2.5e-6);return att*max(dot(n,Ld),0.);}
float fireIrr(vec3 n,float r){vec3 Ld;float at;
  return ptIrr(n,uSite*(1.+uFireH),uFireL,r,Ld,at)+ptIrr(n,uHeadP,uHeadI,r,Ld,at);}
// brilho da fonte refletido pelo mar (reflexo especular com ondas): uma trilha de reflexos, n\xE3o uma mancha redonda
float fireSpec(vec3 n,vec3 V,vec3 P,float I,float rough){vec3 Ld;float at;ptIrr(n,P,I,1.,Ld,at);if(at<1e-4)return 0.;
  vec3 H=normalize(Ld+V);float NoH=max(dot(n,H),0.);float a=rough*rough;float dd=NoH*NoH*(a-1.)+1.;
  float F=.02+.98*pow(1.-max(dot(V,H),0.),5.);return min(at*a/(PI*dd*dd)*F*max(dot(n,Ld),0.)/max(dot(n,V),.15),60.);}
`,aI=`
float driftLand(EQS s){
  vec4 a=eqT(uDrift0,s),b=eqT(uDrift1,s),c=eqT(uDrift2,s);
  float m[12];m[0]=a.r;m[1]=a.g;m[2]=a.b;m[3]=a.a;m[4]=b.r;m[5]=b.g;m[6]=b.b;m[7]=b.a;m[8]=c.r;m[9]=c.g;m[10]=c.b;m[11]=c.a;
  float f=clamp(uEpoch,0.,1.)*11.;int i=int(min(floor(f),10.));float w=f-float(i);
  return sst(.38,.62,mix(m[i],m[i+1],w));}
`;function $_(s){return new ze({uniforms:s,vertexShader:Y_,fragmentShader:`${j_}${vt}${rn}${Fm}${J_}${Pm}${aI}${Z_}
    vec3 lin(vec3 c){return pow(max(c,vec3(0.)),vec3(2.2));}
    // Superf\xEDcie das terras de 66 Ma (interpreta\xE7\xE3o visual, revis\xE3o 6): a FORMA das terras vem do modelo de placas; a
    // TEXTURA (cor e sombreamento, uSup66 e canal B de uPaleo) foi montada com recortes de imagens de sat\xE9lite atuais
    // tirados da mesma faixa de latitude (ferramentas/paleo/textura66.py). N\xE3o mostra biomas nem relevo de 66 Ma.
    void main(){
      vec3 n=normalize(vN);vec3 V=normalize(uCam-vW);
      EQS s=eqs(n);
      float lat=asin(clamp(n.y,-1.,1.)),lon=atan(-n.z,n.x);
      // tudo amostrado aqui, fora de qualquer if
      vec4 ct=cloudField(n,s);
      // 01/11 (otimiza\xE7\xE3o): cada grupo de texturas s\xF3 \xE9 lido quando o seu peso pode ser diferente de zero. Os desvios
      // dependem s\xF3 de uniformes (iguais em todos os pixels), ent\xE3o o resultado \xE9 o mesmo e as derivadas s\xE3o v\xE1lidas.
      float e=clamp(uEpoch,0.,1.);
      vec4 globeLook=vec4(0.);if(uEarthLook>0.)globeLook=eqT(uGlobeLook,s);
      vec4 pal=vec4(0.);if(uEarthLook<1.&&e<.95)pal=eqT(uPaleo,s);
      float dl=0.;if(e>0.&&e<1.&&uEarthLook<1.)dl=driftLand(s);
      // Same cloud-free NASA mosaic at both resolutions.
      vec3 day=vec3(0.);vec2 aux=vec2(0.);float landNow=0.;
      vec2 hu=vec2((lon-uHiBox.x)/(uHiBox.y-uHiBox.x),(lat-uHiBox.z)/(uHiBox.w-uHiBox.z));
      vec2 hgx=dFdx(hu),hgy=dFdy(hu);
      if(e>.22){
        day=lin(eqT(uDay,s).rgb);aux=eqT(uAux,s).rg;landNow=eqT(uLand,s).r;
        float inHi=step(0.,hu.x)*step(hu.x,1.)*step(0.,hu.y)*step(hu.y,1.)*sst(0.,.04,min(min(hu.x,1.-hu.x),min(hu.y,1.-hu.y)));
        if(inHi>0.){vec3 dayHi=lin(textureGrad(uDayHi,clamp(hu,0.,1.),hgx,hgy).rgb);vec2 auxHi=textureGrad(uAuxHi,clamp(hu,0.,1.),hgx,hgy).rg;float landHi=textureGrad(uLandHi,clamp(hu,0.,1.),hgx,hgy).r;
          day=mix(day,dayHi,inHi);aux=mix(aux,auxHi,inHi);landNow=mix(landNow,landHi,inHi);}
      }
      vec3 sp=normalize(n+(uSun-n*dot(n,uSun))*(.0015/max(dot(n,uSun),.18)));
      float cshadow=sst(.12,.78,cloudField(sp,s).r);

      float wNow=sst(.9,1.,e), wPal=1.-sst(0.,.09,e);
      float land=mix(mix(dl,pal.r,wPal),landNow,wNow);
      float shelf=mix(max(pal.g-pal.r,0.)*wPal,aux.r*(1.-landNow),wNow);
      // oceano: azul profundo com varia\xE7\xE3o larga; plataformas rasas mais contidas e irregulares (n\xE3o um halo)
      float ov=0.,ob=0.;if((uEarthLook<1.&&e<1.)||uBlanketA>0.){ov=fbm3(n*5.+3.1);ob=fbm3(n*38.);}
      vec3 deep=mix(vec3(.0040,.0115,.030),vec3(.0055,.016,.036),ov)*(.88+.24*ct.b);
      vec3 shal=mix(vec3(.010,.040,.052),vec3(.016,.050,.056),ob);
      float shk=shelf*(.45+.4*sst(.3,.75,ob))*(1.-.5*wNow)+shelf*.8*wNow;
      vec3 sea=mix(deep,shal,clamp(shk,0.,1.));
      // a plataforma rasa do Yucat\xE1n de 66 Ma est\xE1 no pr\xF3prio mapa (canal G), tratada como as demais plataformas
      vec3 tp=lin(eqT(uSup66,s).rgb);float relP=pal.b;
      vec3 gp=tp*1.05*(1.+(relP-.5)*.55);
      vec3 gn=day*1.15;
      vec3 gnd=mix(gp,gn,sst(.22,.95,e)); // as cores mudam aos poucos durante a deriva, sem troca brusca
      vec3 alb=mix(sea,gnd,land);
      // Um \xFAnico mapa paleogeogr\xE1fico, usado do globo ao plano pr\xF3ximo.
      // O detalhe fino \xE9 apenas microvaria\xE7\xE3o editorial de reflet\xE2ncia, nunca costa nova.
      float pixelArc=max(length(dFdx(n)),length(dFdy(n)));
      float detailWeight=1.-sst(.00012,.0012,pixelArc);
      float surfaceDetail=fbm3(n*3200.+vec3(3.,1.,7.));
      vec3 lookAlbedo=lin(globeLook.rgb); // no invented high-frequency geography
      alb=mix(alb,lookAlbedo,uEarthLook);
      land=mix(land,clamp((globeLook.a*255.-128.)/127.,0.,1.),uEarthLook);
      // BMNG global and regional are the SAME cloud-free mosaic. A single ocean
      // material normalizes the near-black deep-water fill; observed coastal colour remains.
      float deepFill=(1.-landNow)*(1.-sst(.002,.016,max(day.r,max(day.g,day.b))));
      vec3 modern=mix(day*1.15,vec3(.004,.010,.026),deepFill);
      alb=mix(alb,modern,wNow);
      float water=1.-land,rough=.26+.04*ct.b;
      // No artificial crater relief in the present-day view. The dashed outline is a separate annotation.
      float mus=dot(n,uSun);
      // impacto (66 Ma): manto de material ejetado em volta da cratera e sombra da cortina de eje\xE7\xE3o
      float d=acos(clamp(dot(n,uSite),-1.,1.));
      float bl=uBlanketA*(1.-sst(.5*uBlanketR,uBlanketR,d))*(1.-wNow);
      vec3 blanket=vec3(.034,.027,.021)*(.85+.3*ob);
      if(uBlanketA>0.){ // sem manto (antes do impacto e depois de a Terra mudar), a cobertura \xE9 zero
      float grit=fbm3(n*720.+3.);
      vec3 ejecta=vec3(.052,.039,.026)*(.4+1.8*grit);
      float broken=sst(.15,.8,grit+.35*fbm3(n*170.));
      float textured=uBlanketA*(1.-sst(0.,max(uBlanketR,1e-6),d*(.8+.4*grit)))*(1.-wNow);
      float coverage=mix(bl,textured*(.25+.75*broken),uImpactReview);
      alb=mix(alb,mix(blanket,ejecta,uImpactReview),coverage*.9);water*=1.-coverage;}
      vec3 tS=uSite-n*dot(n,uSite);float tsl=length(tS);tS=tsl>1e-7?tS/tsl:vec3(0.);
      vec3 sT=uSun-n*mus;float stl=length(sT);sT=stl>1e-5?sT/stl:vec3(0.);
      float el=max(mus,.03);float reach=uCurtH*sqrt(max(1.-el*el,0.))/el;
      float csh=uCurtO*sst(.15,.6,dot(tS,sT))*step(uCurtB,d)*(1.-sst(reach*.5,reach+1e-5,d-uCurtB));
      vec3 Ts=Tsun(1.,mus,n);
      float cloudAmt=mix(uCloudAmt,uCloudPres,wNow);
      float shadow=(1.-.6*cshadow*cloudAmt)*(1.-.7*csh);
      float dcv=clamp(dustCov(n),0.,1.);float dim=1.-uDim*dcv; // luz que atravessa a camada (representa\xE7\xE3o)
      vec3 sun=uSunRad*uSunI*Ts*dim;
      vec3 col=alb*sun*max(mus,0.)*shadow;
      col+=alb*uSunRad*uSunI*dim*vec3(.035,.055,.08)*sst(-.12,.5,mus)*(.25+.75*Ts.g);
      vec3 H=normalize(uSun+V);float NoH=max(dot(n,H),0.),NoV=max(dot(n,V),.02);
      float a=rough*rough;float dd=NoH*NoH*(a-1.)+1.;float D=a/(PI*max(dd*dd,1e-6));
      float F=.02+.98*pow(1.-max(dot(V,H),0.),5.);
      col+=water*sun*shadow*min(D*F*.075,40.)*max(mus,0.)/max(NoV,.15);
      float Fv=.02+.98*pow(1.-NoV,5.);
      col+=water*Fv*uSunRad*uSunI*vec3(.05,.09,.16)*sst(-.1,.45,mus)*(.3+.7*Ts.g);
      // luz da bola de fogo e da cavidade no mar, no manto e nas margens (cai com a dist\xE2ncia)
      float fi=fireIrr(n,1.)*(1.-wNow);
      col+=(alb*2.4+water*.25)*vec3(1.,.55,.25)*fi;
      // reflexo da bola de fogo e do asteroide no mar raso: ondas perturbam a normal, o brilho vira uma trilha
      if(uFireL+uHeadI>1e-3){vec3 wn=normalize(n+.02*(vec3(fbm3(n*1100.),fbm3(n*1100.+5.),fbm3(n*1100.+9.))-.5));
        float gl=fireSpec(wn,V,uSite*(1.+uFireH),uFireL,.09)+fireSpec(wn,V,uHeadP,uHeadI,.09);
        col+=water*vec3(1.,.62,.32)*gl*.035*(1.-wNow);}  // revis\xE3o 9: reflexo mais estreito e discreto; revis\xE3o 10: ondula\xE7\xE3o mais larga (sem pontos soltos)
      // onda de choque: anel de \xE1gua e vapor agitados que se afasta do ponto de contato
      float sw=.0025+.07*uShockR;
      col+=vec3(.8,.82,.84)*uShockA*exp(-pow((d-uShockR)/sw,2.))*.05*uSunRad*max(mus,0.)*(1.-wNow);
      col*=Tview(1.,n,V);
      // A weak neutral veil above an attenuated but still recognizable surface.
      float veil=dcv*sst(0.,.2,uDim);
      col=mix(col,vec3(.055,.049,.040)*uSunRad*uSunI*max(mus,0.),veil*.10);
      if(uFlash>0.){float contactGrain=.48+.52*fbm3(n*1100.+vec3(3.,7.,1.));
      col+=vec3(1.,.70,.40)*uFlash*exp(-d*d*1.2e6)*2.5*contactGrain;} // ponto de contato: s\xF3 onde o corpo toca (a luz em volta vem da fonte pontual)
      if(uCavR>0.&&d<uCavR)discard;
      float cx=dot(n,uCutAxis),cy=dot(n,uCutFront);
      if(uCut>0.&&dot(n,uSiteNow)>.99&&length(vec2(cx,cy))<110./6371.*uCut&&cy>0.)discard;                                // a cavidade (malha pr\xF3pria) aparece pelo recorte
      // No documentary satellite swath is composited here. The sphere retains
      // the same illumination, mipmapped BMNG albedo and cloud coordinates at every scale.
      gl_FragColor=vec4(fin(col),1.);
    }`})}function ex(s){return new ze({uniforms:s,transparent:!0,depthWrite:!1,vertexShader:Y_,fragmentShader:`${j_}${vt}${rn}${Fm}${J_}${Pm}${Z_}
    void main(){
      vec3 n=normalize(vN);vec3 V=normalize(uCam-vW);
      EQS s=eqs(n);
      vec4 ct=cloudField(n,s);
      float mus=dot(n,uSun);
      vec3 ts=normalize(uSun-n*mus+vec3(1e-5));
      vec3 sh=normalize(n+ts*.0012);
      float cov2=cloudField(sh,s).r;
      float det=fbm3(n*240.+ct.g*3.)+.35*(fbm3(n*900.)-.5);
      float bm=fbm3(n*55.+ct.g*2.),bmS=fbm3((n+ts*.006)*55.+ct.g*2.);
      float bump=clamp(1.+(bm-bmS)*3.2,.6,1.35)*(.82+.32*bm);
      float wNow=sst(.9,1.,clamp(uEpoch,0.,1.));
      float amt=mix(uCloudAmt,uCloudPres,wNow);
      float dn=acos(clamp(dot(n,uSiteNow),-1.,1.));
      amt*=mix(1.,sst(.05,.2,dn),wNow);  // c\xE9u limpo sobre o Yucat\xE1n de hoje
      float cov=ct.r*amt;
      float dens=clamp(cov*(.62+.75*det)-.07,0.,1.);
      float tau=dens*(.45+3.0*ct.g);
      // Campos quebrados e v\xE9us com opacidade distinta. Sem a enorme tampa polar opaca.
      tau=max(0.,ct.r*(.40+5.8*ct.g)-.045)*amt;
      float self=clamp(1.-(cov2-ct.r)*2.6,.5,1.2);
      float dcv=clamp(dustCov(n),0.,1.);vec3 Ts=Tsun(1.0015,mus,n)*(1.-uDim*dcv)*mix(vec3(1.),vec3(.94,.92,.88),dcv*sst(0.,.2,uDim));
      float lit=pow(max(mus+.02,0.),.75);
      vec3 col=uSunRad*uSunI*Ts*lit*self*bump*(.42+.5*(1.-exp(-tau)))*vec3(.86,.86,.85);
      col+=uSunRad*uSunI*vec3(.05,.08,.13)*sst(-.1,.4,mus)*(.3+.7*Ts.g);
      col+=uSunRad*uSunI*Ts*pow(max(dot(-V,uSun),0.),8.)*.4*exp(-tau);
      float modelShade=clamp(1.-(cov2-ct.r)*5.,.48,1.10);
      vec3 cloudLit=uSunRad*uSunI*Ts*max(mus,0.)*modelShade*(.58+.32*ct.b)*(.50+.35*(1.-exp(-tau)))*vec3(.88,.90,.91);
      cloudLit+=uSunRad*uSunI*vec3(.025,.04,.065)*sst(-.08,.25,mus);
      col=cloudLit;
      col*=Tview(1.0015,n,V);
      float d=acos(clamp(dot(n,uSite),-1.,1.));
      col+=vec3(1.,.55,.25)*fireIrr(n,1.004)*1.4*(1.-wNow);
      float ring=exp(-pow((d-uShockR)/(.0025+.06*uShockR),2.))*uShockA*(1.-wNow);
      col+=vec3(.9,.88,.85)*ring*.16*lit*uSunRad;
      float a=(1.-exp(-tau*1.35))*sst(0.,.16,dot(n,V))*sst(0.,.05,dens);
      a*=uClearR>0.?sst(uClearR*.7,uClearR,d):1.;                  // nuvens varridas pela onda de choque

      gl_FragColor=vec4(fin(col),clamp(a,0.,1.));
    }`})}function tx(s){return new ze({uniforms:s,transparent:!0,depthWrite:!1,depthTest:!1,side:Xt,blending:qn,vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`#define PI 3.14159265
    uniform vec3 uSun,uSite,uCam;uniform float uDim,uSunI,uSunRad,uHaze,uSpread,uDustK,uRegionalAmt,uRegionalBridge,uRegionalClose,uRegionalHaze,uEarthLook;uniform sampler2D uCloud;varying vec3 vW;
    ${vt}${rn}${Fm}${Pm}
    void main(){
      vec3 ro=uCam,rd=normalize(vW-uCam);
      float b=dot(ro,rd),c=dot(ro,ro)-AR*AR,disc=b*b-c;
      vec3 L=vec3(0.);
      if(disc>0.){
        float sq=sqrt(disc);float t0=max(0.,-b-sq),t1=-b+sq;
        float cp=dot(ro,ro)-1.,dp=b*b-cp;if(dp>0.){float tp=-b-sqrt(dp);if(tp>0.)t1=min(t1,tp);}
        if(t1>t0){
          const int N=16;float ds=(t1-t0)/float(N);
          vec3 tv=vec3(0.),sR=vec3(0.),sM=vec3(0.),sD=vec3(0.);
          for(int i=0;i<N;i++){
            vec3 p=ro+rd*(t0+(float(i)+.5)*ds);float r=max(length(p),1e-4);vec3 n=p/r;float h=r-1.;
            float dR=exp(-max(h,0.)/HR),dM=exp(-max(h,0.)/HM);float dD=uHaze>0.?uDustK*dustCov(n)*exp(-pow((h-hD)/wD,2.)):0.;
            vec3 ext=BR*dR+vec3(BMs*1.11*dM+dD*.35);
            tv+=ext*ds*.5;
            vec3 Ts=Tsun(r,dot(n,uSun),n);vec3 w=exp(-min(tv,vec3(60.)))*Ts*ds;
            sR+=w*dR;sM+=w*dM;sD+=w*dD;
            tv+=ext*ds*.5;
          }
          float mu=dot(rd,uSun);
          float pR=.0597*(1.+mu*mu);
          float g=.76;float pM=.1194*((1.-g*g)*(1.+mu*mu))/((2.+g*g)*pow(max(1.+g*g-2.*g*mu,1e-4),1.5));
          float gd=.5;float pD=.0796*(.55+.45*(1.-gd*gd)/pow(max(1.+gd*gd-2.*gd*mu,1e-4),1.5))*1.6;
          // Material alto iluminado enquanto a superf\xEDcie recebe menos luz.
          // Cor neutra aquecida, distinta das nuvens de \xE1gua; escolha editorial.
          L=uSunRad*uSunI*(sR*BR*pR+sM*BMs*pM+sD*vec3(.40,.37,.32)*.92*pD);
        }
      }
      gl_FragColor=vec4(fin(L*.78),1.);
    }`})}var xr=(s,e=0,t=1)=>Math.max(e,Math.min(t,s)),ji=(s,e,t)=>{let n=xr((t-s)/(e-s));return n*n*(3-2*n)},Vs=(s,e,t)=>s+(e-s)*t;function oI(s){let e=s|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var af=.48,cI=9.81,lI=[["flap",62,63.62],["glide",63.62,64.18],["flap",64.18,65.55],["bound",65.55,65.95],["flap",65.95,67.7],["glide",67.7,68.55],["flap",68.55,70.35],["glide",70.35,70.85],["flap",70.85,72.95],["glide",72.95,75.2]],Xl=.56,nx=s=>s*s*(3-2*s);function sx(s,e,t=1){let n=(s%1+1)%1,i=n<Xl,r=i?n/Xl:(n-Xl)/(1-Xl),a=Math.sin(Math.PI*r),o=.98,c=-.72,l=.14,u=i?Vs(o,c,nx(r)*.85+r*.15):Vs(c,o,nx(Math.min(1,r*1.05)));return u=l+(u-l)*e,{elev:u,sweep:i?.1+.2*a*e:.02-.3*a*e,twist:i?.16*a*e:-.36*Math.pow(a,1.2)*e,elbow:i?.17+.1*(1-r)*(1-r)*e:.17+1.05*Math.pow(a,1.15)*e*t,wrist:i?.12+.08*(1-r)*(1-r)*e:.12+1.32*Math.pow(Math.sin(Math.PI*Math.min(1,r*1.08)),1.1)*e*t,handTwist:i?.05*a:-.22*a*e,fan:i?1-.05*(1-a):1-.62*a*e,slot:i?0:.42*a*e,bend:i?.1*a*e:-.06*a*e,secTwist:i?0:-.12*a*e}}var Lm={elev:.09,sweep:.06,twist:.03,elbow:.21,wrist:.15,handTwist:0,fan:.94,slot:0,bend:.05,secTwist:0},uI={elev:-.08,sweep:-.42,twist:-.05,elbow:1.3,wrist:1.7,handTwist:-.1,fan:.18,slot:0,bend:0,secTwist:0},hI=Object.keys(Lm);function ix(s,e,t){let n={};for(let i of hI)n[i]=Vs(s[i],e[i],t);return n}var rf=(()=>{let s=0,e=1e9;for(let t=0;t<2e3;t++){let n=t/2e3*Xl,i=sx(n,1).elev,r=Math.abs(i-Lm.elev);r<e&&(e=r,s=n)}return s})();function rx(s,e=62,t=75.2,n={}){let i=n.freq||4.85,r=n.camK||1,a=1.5,o=e-a,c=t+a,l=oI(20261024),u=1/240,h=Math.round((c-o)/u)+1,f=O=>o+O*u,d=(n.plan||lI).map(([O,te,re])=>({m:O,a:te,b:re}));d[0].a=o-1,d[d.length-1].b=c+1;let g={flap:new Float32Array(h),glide:new Float32Array(h),bound:new Float32Array(h)};for(let O=0;O<h;O++){let te=f(O);for(let ue of d){let he=ue.m==="bound"?.1:n.ease||.08,ge=ji(ue.a-he,ue.a+he,te)*(1-ji(ue.b-he,ue.b+he,te));g[ue.m][O]=Math.max(g[ue.m][O],ge)}let re=g.flap[O]+g.glide[O]+g.bound[O]||1;g.flap[O]/=re,g.glide[O]/=re,g.bound[O]/=re}let A=new Float32Array(h),m=new Float32Array(h),p=n.phGlide??rf,_=[],x=!0;for(let O of d){if(O.m!=="flap")continue;if(n.even){let Te=1/i,Re=Math.max(1,Math.floor((O.b-O.a)/Te+1e-6)),R=x?O.b-Re*Te:O.a;for(let k=0;k<Re;k++)_.push({a:R,b:R+Te,amp:1,ph0:p+k}),R+=Te;p+=Re,x=!1;continue}let te=n.freq?i*(1+(l()-.5)*.062):4.85+(l()-.5)*.3,re=Math.max(n.freq?2:3,Math.round((O.b-O.a)*te)),ue=Array.from({length:re},(Te,Re)=>1+(l()-.5)*.12+(Re===0?.06:0)+(Re===re-1?.05:0)),he=ue.reduce((Te,Re)=>Te+Re,0),ge=(O.b-O.a)/he,je=O.a;ue.forEach((Te,Re)=>{_.push({a:je,b:je+Te*ge,amp:Re===0?1.07:Re===re-1?.9:.92+l()*.14,ph0:p+Re}),je+=Te*ge}),p+=re,x=!1}let v=null;if(n.even&&n.tempo){let O=1/i,te=n.tempo.w;v=d.filter(he=>he.m==="flap").map((he,ge)=>{let je=ge>0,Te=he.b<c,Re=((je?1:0)+(Te?1:0))*te/2,R=Math.max(1,Math.round((he.b-he.a-Re)/O)),k=Math.max(0,Math.floor((he.a-o)/u)),L=Math.min(h-1,Math.ceil((he.b-o)/u)),H=new Float64Array(L-k+1),J=0;for(let $=k;$<=L;$++){let ne=f($),oe=(je?ji(he.a,he.a+te,ne):1)*(Te?ji(he.b,he.b-te,ne):1)*(1+.035*Math.sin(2*Math.PI*ne/(1.7*O)+ge*2.1));H[$-k]=J,J+=oe*u}return{a:he.a,b:he.b,i0:k,i1:L,C:H,tot:J,n:R}});let ue=n.phGlide??rf;for(let he of v)he.ph0=ue,ue+=he.n}for(let O=0;O<h;O++){let te=f(O),re=null,ue=0;if(v){for(let he of v)if(O>=he.i0&&O<=he.i1){re=he.ph0+he.n*he.C[O-he.i0]/he.tot,ue=1;break}if(re===null){let he=n.phGlide??rf;for(let ge of v)O>ge.i1&&(he=ge.ph0+ge.n);re=he}A[O]=re,m[O]=1;continue}for(let he of _)if(te>=he.a&&te<he.b){re=he.ph0+(te-he.a)/(he.b-he.a),ue=he.amp;break}if(re===null){let he=n.phGlide??rf;for(let ge of _)ge.b<=te&&(he=ge.ph0+1);re=he}A[O]=re,m[O]=ue}let M=Rs(m,10),b=new Float32Array(h),C=5.7;for(let O=0;O<h;O++){let te=g.flap[O]*1.05*M[O]-(g.glide[O]*.35+g.bound[O]*.1)-.16*(C-5.2)*Math.abs(C-5.2)-.2*(C-5.2);C+=te*u,b[O]=C}let S=new Float32Array(h),E=0;for(let O=0;O<h;O++){let te=g.flap[O]*.42-g.glide[O]*.4-g.bound[O]*.95;E+=te*u,S[O]=E}let y=Math.round((e-o)/u),B=Math.round((t-o)/u),U=S[y],P=S[B];for(let O=0;O<h;O++)S[O]-=Vs(U,P,(O-y)/(B-y));let F=Rs(S,24),Y=1200,z=[],j=[0];for(let O=0;O<=Y;O++)z.push(s(e+(t-e)*O/Y));for(let O=1;O<=Y;O++)j.push(j[O-1]+z[O].distanceTo(z[O-1]));let q=j[Y],ie=new Float32Array(h),pe=0;for(let O=0;O<h;O++)ie[O]=pe,pe+=b[O]*u;let Ee=ie[y],Q=ie[B],le=z[1].clone().sub(z[0]).normalize(),X=z[Y].clone().sub(z[Y-1]).normalize(),se=(O,te)=>{if(O<=0)return te.copy(z[0]).addScaledVector(le,O);if(O>=q)return te.copy(z[Y]).addScaledVector(X,O-q);let re=0,ue=Y;for(;ue-re>1;){let ge=re+ue>>1;j[ge]<O?re=ge:ue=ge}let he=(O-j[re])/Math.max(1e-6,j[ue]-j[re]);return te.copy(z[re]).lerp(z[ue],xr(he))},me=[],_e=new I;for(let O=0;O<h;O++){let te=f(O),re=(ie[O]-Ee)/(Q-Ee)*q,ue=se(re,new I);ue.y+=F[O],ue.x+=.05*Math.sin(te*1.3+1)+.03*Math.sin(te*2.7),me.push(ue)}let Oe=new Float32Array(h),Ke=new Float32Array(h),Xe=new Float32Array(h),Et=new Float32Array(h);for(let O=0;O<h;O++){let te=me[Math.max(0,O-6)],re=me[Math.min(h-1,O+6)],ue=_e.copy(re).sub(te);Oe[O]=Math.atan2(ue.x,ue.z),Ke[O]=-Math.atan2(ue.y,Math.hypot(ue.x,ue.z))}dI(Oe);let st=Rs(Oe,30);for(let O=0;O<h;O++){let te=Math.max(0,O-24),re=Math.min(h-1,O+24),ue=(st[re]-st[te])/((re-te)*u);Et[O]=ue;let he=b[O]/af,ge=ue/af;Xe[O]=-Math.atan(he*ge/cI)}for(let O=0;O<h;O++)Xe[O]=n.maxBank?n.maxBank*Math.tanh(Xe[O]/n.maxBank):Xe[O];let Bt=Rs(Xe,n.rollR||40),V=Rs(Ke,30),gn=Rs(Et,30),nt=new Float32Array(h);for(let O=1;O<h;O++)nt[O]=(b[O]-b[O-1])/u;let Ze=Rs(nt,30),Ne=Rs(g.glide,40),xt=fI(me,n.camR||70),Ve=[],D=n.camR?40:8;for(let O=0;O<h;O++){let te=xt[Math.max(0,O-D)],re=xt[Math.min(h-1,O+D)];Ve.push(re.clone().sub(te).normalize())}let w=O=>{let te=xr((O-o)/u,0,h-1),re=Math.min(h-2,Math.floor(te));return[re,te-re]},K=(O,te)=>{let[re,ue]=w(te);return Vs(O[re],O[re+1],ue)},ce=(O,te,re)=>{let[ue,he]=w(te);return re.copy(O[ue]).lerp(O[ue+1],he)},de=new Rn,ae=new Hn;function Ue(O){O=xr(O,e,t);let te=K(g.flap,O),re=K(g.glide,O),ue=K(g.bound,O),he=K(M,O),ge=K(A,O),je=ce(me,O,new I),Te=K(Bt,O),Re=K(V,O),R=K(st,O),k=K(gn,O),L=K(Ze,O),H=sx(ge,Math.max(1e-4,he)),J=[0,1].map(wt=>{let vn=wt===0?1:-1,Tt=Math.sign(Te)===vn?1:-1,gt=ix(Lm,H,te);gt=ix(gt,uI,ue);let Pt=re*(1-ue);return gt.elev+=Pt*(.035*Math.sin(O*2.1+wt*1.7)+.02*Math.sin(O*5.3+wt))+Tt*.05*Math.abs(Te),gt.twist+=Pt*.03*Math.sin(O*3.1+wt*2.3)-Tt*.04*Math.abs(Te),gt.sweep+=Pt*(.02*Math.sin(O*1.7+wt))+.1*xr(-L*.5,0,1)*Pt,gt.droop=0,gt}),$=(ge%1+1)%1,ne=Math.sin(2*Math.PI*$+.9)*te*he,oe=-.035*ne+.05*re+.04*ue,fe=.0025*Math.sin(2*Math.PI*$-.4)*te*he,ve=.1*ji(68.6,69,O)*(1-ji(69.8,70.3,O))+.05*Math.sin(O*.7)*re,Pe={pitch:-oe*.9+.04*ji(68.6,69,O)*(1-ji(69.8,70.3,O)),yaw:ve+k*.08,roll:-Te*.75},Le=xr(.1+.18*K(Ne,O)+.9*Math.abs(Te)+.3*xr(-L/1.2)+.2*ue+.14*ji(74.2,75.2,O)),We={pitch:-.03+.05*ne+.05*re-.06*ue-.15*Re,yaw:-k*.1,roll:Te*.55,spread:Le},$e=null,Dt=Te;if(n.micro){let wt=n.micro,vn=re*(1-.45*ji(t-1.6,t,O)),Tt=vn*wt.roll*(Math.sin(2*Math.PI*.29*O+1.3)+.5*Math.sin(2*Math.PI*.61*O+.4)),gt=vn*wt.wing*(Math.sin(2*Math.PI*.37*O+.6)+.45*Math.sin(2*Math.PI*.83*O+2.1));$e={L:gt-wt.k*Tt,R:gt+wt.k*Tt,rm:Tt},Dt=Te+Tt}return ae.set(Re*.8-.03-.03*re,R,Dt,"YXZ"),de.setFromEuler(ae),{pos:je,quat:de.clone(),pose:{wings:J,body:{pitch:oe,roll:0,dy:fe},head:Pe,tail:We},flap:te,glide:re,bound:ue,phase:ge,amp:he,roll:Dt,turn:k,micro:$e,speed:K(b,O)}}function Ce(O,te,re){O=xr(O,e,t);let ue=ce(xt,O,new I),he=ce(Ve,O,new I).normalize(),ge=ce(me,O,new I),je=new I(he.z,0,-he.x).normalize(),Te=ji(63,73.8,O),Re=n.cam||{r:[2.2,.64],rp:[1.9,.78],side:.72,f:[-.3,.78],h:[.3,.38],aim:.06,mixP:.35},R=r*(te&&n.portraitK||1)*Vs(te?Re.rp[0]:Re.r[0],te?Re.rp[1]:Re.r[1],Re.hT?ji(Re.hT[0],Re.hT[1],O):Te),k=Re.hT?ji(Re.hT[0],Re.hT[1],O):Te,L=Array.isArray(Re.side)?Vs(Re.side[0],Re.side[1],k):Re.side;return re.position.copy(ue).addScaledVector(je,R*L).addScaledVector(he,R*Vs(Re.f[0],Re.f[1],Re.hT?k:Te)),re.position.y+=R*Vs(Re.h[0],Re.h[1],k),re.target.copy(ge).lerp(ue,Re.mixP),re.target.y+=(Array.isArray(Re.aim)?Vs(Re.aim[0],Re.aim[1],k):Re.aim)*r,re}return{state:Ue,camera:Ce,at:O=>ce(me,xr(O,e,t),new I),T0:e,T1:t,stats:{beats:_.length,length:q}}}function Rs(s,e){let t=s.length,n=new Float32Array(t),i=[],r=0;for(let a=-e;a<=e;a++){let o=Math.exp(-(a*a)/(2*(e/2.2)**2));i.push(o),r+=o}for(let a=0;a<t;a++){let o=0;for(let c=-e;c<=e;c++)o+=s[Math.max(0,Math.min(t-1,a+c))]*i[c+e];n[a]=o/r}return n}function fI(s,e){let t=Rs(Float32Array.from(s,r=>r.x),e),n=Rs(Float32Array.from(s,r=>r.y),e),i=Rs(Float32Array.from(s,r=>r.z),e);return s.map((r,a)=>new I(t[a],n[a],i[a]))}function dI(s){for(let e=1;e<s.length;e++){for(;s[e]-s[e-1]>Math.PI;)s[e]-=2*Math.PI;for(;s[e]-s[e-1]<-Math.PI;)s[e]+=2*Math.PI}}var Um={value:new I(0,1,0)};function ax(s){s.uniforms.uSunW=Um,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uSunW;`).replace("#include <shadowmap_vertex>",it.shadowmap_vertex.replace("vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );","vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix ); shadowWorldNormal *= sign(dot(shadowWorldNormal, uSunW) + 1e-4);"))}var pI={value:7},AI=`
uniform float uSoftR;
const vec2 PD16[16] = vec2[16](vec2(-.94,-.40),vec2(.95,-.77),vec2(-.09,-.93),vec2(.34,.29),vec2(-.92,.46),vec2(-.82,.15),vec2(-.44,-.98),vec2(.54,-.47),
  vec2(.97,.12),vec2(.79,.65),vec2(-.27,.48),vec2(-.18,.98),vec2(.21,.70),vec2(.06,-.30),vec2(-.53,-.16),vec2(.42,.94));
float getShadowSoft( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
  shadowCoord.xyz /= shadowCoord.w; shadowCoord.z += shadowBias;
  if ( shadowCoord.x < 0. || shadowCoord.x > 1. || shadowCoord.y < 0. || shadowCoord.y > 1. || shadowCoord.z > 1. ) return 1.0;
  vec2 ts = uSoftR / shadowMapSize;
  float an = 6.2831853 * fract( sin( dot( gl_FragCoord.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );
  mat2 rt = mat2( cos( an ), -sin( an ), sin( an ), cos( an ) );
  float sh = 0.;
  for ( int i = 0; i < 16; i ++ ) sh += step(shadowCoord.z, unpackRGBAToDepth(textureLod(shadowMap, shadowCoord.xy + rt * PD16[i] * ts, 0.)));
  return mix( 1.0 - shadowIntensity * .86, 1.0, sh / 16. ); // a plumagem espalha um pouco de luz dentro da sombra
}`;function ox(s){s.uniforms.uSoftR=pI,s.fragmentShader=s.fragmentShader.replace("#include <shadowmap_pars_fragment>",`#include <shadowmap_pars_fragment>
#ifdef USE_SHADOWMAP
`+AI+`
#endif`).replace("#include <lights_fragment_begin>",it.lights_fragment_begin.replaceAll("getShadow( directionalShadowMap","getShadowSoft( directionalShadowMap"))}var Sc=typeof document<"u"&&document.documentElement.dataset.ave==="off",Ws=.55,cx=.42,lx=-.34,ux=s=>s*s*(3-2*s),Om=(s,e,t)=>s+(e-s)*t,Hm=s=>(s%1+1)%1;function of(s){return s=Hm(s),s<Ws?Om(cx,lx,ux(s/Ws)):Om(lx,cx,ux((s-Ws)/(1-Ws)))}function mI(s){if(s=Hm(s),s<Ws)return 0;let e=Math.sin(Math.PI*(s-Ws)/(1-Ws));return e*e}function gI(s){if(s=Hm(s),s>=Ws)return 0;let e=Math.sin(Math.PI*s/Ws);return e*e}var Nm={sZ:.07,eZ:-.02,wZ:.06,sX:0,wX:-.02,eY:-.03,wY:.05},km=(()=>{let s=0,e=1e9;for(let t=0;t<2e3;t++){let n=t/2e3*Ws,i=Math.abs(of(n)-Nm.sZ);i<e&&(e=i,s=n)}return s})();function vI(s){let e=of(s),t=of(s-.045)*1.04,n=of(s-.09)*1.08,i=mI(s-.02),r=gI(s);return{sZ:e,eZ:t-e,wZ:n-t,sX:.04*r,wX:.09*r-.14*i,eY:-.26*i,wY:.05+.62*i}}var so={aguia:{url:"modelos/ave-free-eagle.glb",span:2,flight:{freq:af/.7,camK:1.9/.31,phGlide:km,ease:.4,even:!0,portraitK:1.12,tempo:{w:.75},plan:[["flap",62,64.9],["glide",64.9,66.9],["flap",66.9,72.025],["glide",72.025,75.2]],micro:{roll:.012,wing:.003,k:.15},maxBank:.22,rollR:110,camR:260,cam:{r:[.64,.82],rp:[.88,1.04],side:[.86,.8],f:[.36,.4],h:[.09,.2],hT:[67.5,74.8],aim:[.03,.04],mixP:.2}},bob:.012,legTuck:.45,roughness:.82,label:"\xC1guia \xB7 modelo 3D art\xEDstico<small>\u201CFree Eagle\u201D, Filip \xB7 CC BY 4.0</small>"}};function hx(s){let e=so[s],t=new Tn;t.name="ave-"+s;let n=new Tn;t.add(n);let i=[],r={uTrans:{value:.6}},a=null,o=1,c=null,l=null,u={root:t,mats:i,ready:null,candidate:!0,key:s,perched:!1,flightOpts:e.flight,pose(d,g){l=g,c&&g&&f(g)},tick(){},setEnv(d,g=1){a=d,o=g;for(let A of i)A.envMap=d,A.envMapIntensity=g,A.needsUpdate=!0},setTranslucency(d){r.uTrans.value=d},setSunDir(d){Um.value.copy(d).normalize()},stats:{}},h=(d,g,A,m)=>d.rotation.set(g,A,m,"XYZ");function f(d){let g=Math.min(1,Math.max(0,d.glide||0)),A=d.phase||0,m=vI(A),p=d.micro||{L:0,R:0},_=d.roll||0;for(let[M,b,C]of[["L",1,p.L],["R",-1,p.R]]){let S={};for(let E in Nm)S[E]=Om(m[E],Nm[E],g);S.sZ+=C*9+(Math.sign(_)===b?.04*Math.abs(_):0),h(c["ombro_"+M],S.sX,b*0,b*S.sZ),h(c["cotovelo_"+M],0,b*S.eY,b*S.eZ),h(c["punho_"+M],S.wX,b*S.wY,b*S.wZ)}let x=(d.pose?.body?.pitch||0)*.6;h(c.corpo,x,0,0),h(c.cabeca,-x*.9+(d.pose?.head?.pitch||0)*.3,(d.pose?.head?.yaw||0)*.5,-_*.5);let v=d.pose?.tail||{pitch:0,yaw:0,roll:0};h(c.cauda,v.pitch*.5,v.yaw*.8,v.roll*.6),h(c.pernas,e.legTuck,0,0),n.position.y=(1-g)*e.bob*Math.cos(2*Math.PI*(A-.36))}return Sc?(u.ready=Promise.resolve(),u):(u.ready=Va().loadAsync(e.url).then(d=>{let g=d.scene;n.add(g),c={},g.traverse(p=>{p.isBone&&(c[p.name]=p)});let A=new Map,m=0;return g.traverse(p=>{if(!p.isMesh)return;p.frustumCulled=!1,p.castShadow=!0,p.receiveShadow=!0;let _=p.geometry,x=!_.attributes.normal;x&&_.computeVertexNormals(),m+=_.index.count/3;let v=p.material,M=v.map;M&&(M.anisotropy=8);let b=v.name;if(A.has(b)){p.material=A.get(b),v.dispose();return}let C=new zn({map:M,color:v.color.clone(),normalMap:v.normalMap,normalScale:v.normalScale.clone(),roughness:e.roughness,metalness:0,side:bt,flatShading:x});C.name="ave-"+b,C.customProgramCacheKey=()=>"ave-fe",C.onBeforeCompile=S=>{ax(S),ox(S),S.uniforms.uTrans=r.uTrans,S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTrans;`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
            reflectedLight.directSpecular*=.35; reflectedLight.indirectSpecular*=.45; // pena \xE9 fosca
            #if NUM_DIR_LIGHTS > 0
            { float tr=max(0.,dot(-normal,directionalLights[0].direction));
              reflectedLight.directDiffuse+=diffuseColor.rgb*vec3(.97,.94,.88)*directionalLights[0].color*RECIPROCAL_PI*tr*uTrans*.35; }
            #endif`)},A.set(b,C),p.material=C,i.push(C),v.dispose()}),a&&u.setEnv(a,o),u.bones=c,u.stats={bones:Object.keys(c).length,triangles:m,materials:i.length,span:e.span,phGlide:+km.toFixed(4)},f(l||{glide:1,phase:km,roll:0}),u}),u)}var lf=(s,e=0,t=1)=>s<e?e:s>t?t:s,Qm=(s,e,t)=>{let n=lf((t-s)/(e-s));return n*n*(3-2*n)};function cf(s,e){let t=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function zm(s){let e=s|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Gm(s,e,t,n=kn){let i=new Us(s,e,t,dn,jt);return i.colorSpace=Sn,i.wrapS=i.wrapT=n,i.generateMipmaps=!0,i.minFilter=fn,i.magFilter=Kt,i.anisotropy=8,i.needsUpdate=!0,i}function fx(s,e,t,n){let i=new Float32Array(e*t*2);for(let r=0;r<t;r++)for(let a=0;a<e;a++){let o=s[r*e+(a+1)%e]-s[r*e+(a-1+e)%e],c=s[(r+1)%t*e+a]-s[(r-1+t)%t*e+a],l=-o*n,u=-c*n,h=Math.hypot(l,u,1);i[(r*e+a)*2]=l/h,i[(r*e+a)*2+1]=u/h}return i}function dx(s=512){let e=s,t=new Float32Array(e*e),n=new Float32Array(e*e),i=zm(911),r=e/8;for(let A=0;A<e;A++)for(let m=0;m<e;m++){let p=0,_=.5,x=4,v=0;for(let M=0;M<3;M++)p+=_*_I(m/e*x,A/e*x,x),v+=_,_*=.5,x*=2;t[A*e+m]=p/v*.9*r,n[A*e+m]=.55+.2*(p/v)}let a=(A,m,p,_,x,v)=>{let M=Math.ceil(p);for(let b=-M;b<=M;b++)for(let C=-M;C<=M;C++){let S=(C*C+b*b)/(p*p);if(S>=1)continue;let E=((Math.round(A)+C)%e+e)%e,y=((Math.round(m)+b)%e+e)%e,B=y*e+E,U=_+v*p*Math.sqrt(1-S);U>t[B]&&(t[B]=U,n[B]=x*(1-.15*S))}},o=(A,m)=>t[(Math.round(m)%e+e)%e*e+(Math.round(A)%e+e)%e];for(let A=0;A<Math.round(e*e/(r*r)*1.1);A++){let m=i()*e,p=i()*e,_=(.32+i()*.45)*r;a(m,p,_,o(m,p)-_*.3,.8+i()*.3,.55)}for(let A=0;A<Math.round(e*e/(r*r)*7);A++){let m=i()*e,p=i()*e,_=(.13+i()*.14)*r;a(m,p,_,o(m,p)-_*.35,.7+i()*.5,.7)}for(let A=0;A<Math.round(e*e/(r*r)*45);A++){let m=i()*e,p=i()*e,_=(.045+i()*.06)*r;a(m,p,_,o(m,p)-_*.4,.7+i()*.55,.8)}let c=1e9,l=-1e9;for(let A=0;A<t.length;A++)c=Math.min(c,t[A]),l=Math.max(l,t[A]);let u=fx(t,e,e,1),h=new Uint8Array(e*e*4),f=new Float32Array(e*e),d=Math.round(r*.35);for(let A=0;A<e;A++){let m=0;for(let p=-d;p<=d;p++)m+=t[A*e+(p+e)%e];for(let p=0;p<e;p++)f[A*e+p]=m/(2*d+1),m+=t[A*e+(p+d+1)%e]-t[A*e+(p-d+e)%e]}let g=new Float32Array(e*e);for(let A=0;A<e;A++){let m=0;for(let p=-d;p<=d;p++)m+=f[(p+e)%e*e+A];for(let p=0;p<e;p++)g[p*e+A]=m/(2*d+1),m+=f[(p+d+1)%e*e+A]-f[(p-d+e)%e*e+A]}for(let A=0;A<e*e;A++){let m=lf(.58+(t[A]-g[A])/(r*.16));h[A*4]=(u[A*2]*.5+.5)*255,h[A*4+1]=(u[A*2+1]*.5+.5)*255,h[A*4+2]=lf(n[A]*.8)*255,h[A*4+3]=m*255}return Gm(h,e,e)}function _I(s,e,t){let n=Math.floor(s),i=Math.floor(e),r=s-n,a=e-i,o=r*r*(3-2*r),c=a*a*(3-2*a),l=g=>(g%t+t)%t,u=cf(l(n),l(i)),h=cf(l(n+1),l(i)),f=cf(l(n),l(i+1)),d=cf(l(n+1),l(i+1));return u+(h-u)*o+(f-u)*c+(u-h-f+d)*o*c}function px(s=512){let e=s,t=zm(4242),n=[],i=8,r=i*i;for(let h=0;h<i;h++)for(let f=0;f<i;f++)for(let d=0;d<2;d++)n.push([(f+t())/i,(h+t())/i,.6+t()*.7,t()]);let a=new Float32Array(e*e),o=new Float32Array(e*e),c=new Float32Array(e*e);for(let h=0;h<e;h++)for(let f=0;f<e;f++){let d=f/e,g=h/e,A=9,m=9,p=null,_=Math.floor(d*i),x=Math.floor(g*i);for(let M=-2;M<=2;M++)for(let b=-2;b<=2;b++){let C=(_+b+i)%i,S=(x+M+i)%i;for(let E=0;E<2;E++){let y=n[(S*i+C)*2+E],B=y[0]-d,U=y[1]-g;B-=Math.round(B),U-=Math.round(U);let P=Math.hypot(B,U)/(y[2]*.11);P<A?(m=A,A=P,p=y):P<m&&(m=P)}}let v=m-A;a[h*e+f]=Math.sqrt(Math.max(0,1-A*A*.55))*.9+.1*Qm(0,.25,v),c[h*e+f]=Qm(0,.22,v)*(.75+.25*Math.sqrt(Math.max(0,1-A*.7))),o[h*e+f]=p[3]}let l=fx(a,e,e,9),u=new Uint8Array(e*e*4);for(let h=0;h<e*e;h++)u[h*4]=(l[h*2]*.5+.5)*255,u[h*4+1]=(l[h*2+1]*.5+.5)*255,u[h*4+2]=c[h]*255,u[h*4+3]=o[h]*255;return Gm(u,e,e)}function Ax(s=512,e=128){let t=new Uint8Array(s*e*4),n=zm(77),i=new Float32Array(s*e),r=new Float32Array(s*e).fill(1);for(let a=0;a<e;a++)for(let o=0;o<s;o++){let c=o/s,l=(a/e-.5)*2;Math.abs(l)<.03*(1-c*.7)&&(i[a*s+o]=1,r[a*s+o]=.8)}for(let a=0;a<110;a++){let o=.04+a/110*.94,c=a%2?1:-1,l=.55+n()*.25,u=(.42+.5*Math.sin(Math.PI*Math.min(1,o*1.1)))*(.85+n()*.3),h=.006+n()*.003,f=.85+n()*.3;for(let d=0;d<e;d++){let g=(d/e-.5)*2;if(g>0!=c>0)continue;let A=Math.abs(g)/Math.max(.05,u);if(A>1)continue;let m=o+A*l*.12*u,p=h*(1-.6*A),_=Math.max(0,Math.floor((m-p)*s)),x=Math.min(s-1,Math.ceil((m+p)*s));for(let v=_;v<=x;v++){let M=Math.abs(v/s-m)/p;if(M<1){let b=d*s+v,C=Qm(1,.6,M);C>i[b]&&(i[b]=C,r[b]=f*(1-.15*A))}}}}for(let a=0;a<s*e;a++){let o=lf(r[a]*.8)*255;t[a*4]=t[a*4+1]=t[a*4+2]=o,t[a*4+3]=i[a]*255}return Gm(t,s,e,ti)}var uf=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){let t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){let n=this.workersResolve[e];if(n&&n(t),this.queue.length){let{resolve:i,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{let i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}};var Vm=class{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}},ro=class{constructor(e,t,n,i){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=i,this._offset=0}_nextUint8(){let e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){let e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){let e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){let e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){let e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){let t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t){t===void 0&&(t=0);let n=this._offset,i=0;for(;this._dataView.getUint8(this._offset)!==t&&i<e;)i++,this._offset++;return i<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}},F2=new Uint8Array([0]),bi=[171,75,84,88,32,50,48,187,13,10,26,10];function mx(s){return new TextDecoder().decode(s)}function gx(s){let e=new Uint8Array(s.buffer,s.byteOffset,bi.length);if(e[0]!==bi[0]||e[1]!==bi[1]||e[2]!==bi[2]||e[3]!==bi[3]||e[4]!==bi[4]||e[5]!==bi[5]||e[6]!==bi[6]||e[7]!==bi[7]||e[8]!==bi[8]||e[9]!==bi[9]||e[10]!==bi[10]||e[11]!==bi[11])throw new Error("Missing KTX 2.0 identifier.");let t=new Vm,n=17*Uint32Array.BYTES_PER_ELEMENT,i=new ro(s,bi.length,n,!0);t.vkFormat=i._nextUint32(),t.typeSize=i._nextUint32(),t.pixelWidth=i._nextUint32(),t.pixelHeight=i._nextUint32(),t.pixelDepth=i._nextUint32(),t.layerCount=i._nextUint32(),t.faceCount=i._nextUint32();let r=i._nextUint32();t.supercompressionScheme=i._nextUint32();let a=i._nextUint32(),o=i._nextUint32(),c=i._nextUint32(),l=i._nextUint32(),u=i._nextUint64(),h=i._nextUint64(),f=new ro(s,bi.length+n,3*r*8,!0);for(let j=0;j<r;j++)t.levels.push({levelData:new Uint8Array(s.buffer,s.byteOffset+f._nextUint64(),f._nextUint64()),uncompressedByteLength:f._nextUint64()});let d=new ro(s,a,o,!0),g={vendorId:d._skip(4)._nextUint16(),descriptorType:d._nextUint16(),versionNumber:d._nextUint16(),descriptorBlockSize:d._nextUint16(),colorModel:d._nextUint8(),colorPrimaries:d._nextUint8(),transferFunction:d._nextUint8(),flags:d._nextUint8(),texelBlockDimension:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],bytesPlane:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],samples:[]},A=(g.descriptorBlockSize/4-6)/4;for(let j=0;j<A;j++){let q={bitOffset:d._nextUint16(),bitLength:d._nextUint8(),channelType:d._nextUint8(),samplePosition:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&q.channelType?(q.sampleLower=d._nextInt32(),q.sampleUpper=d._nextInt32()):(q.sampleLower=d._nextUint32(),q.sampleUpper=d._nextUint32()),g.samples[j]=q}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(g);let m=new ro(s,c,l,!0);for(;m._offset<l;){let j=m._nextUint32(),q=m._scan(j),ie=mx(q);if(t.keyValue[ie]=m._nextUint8Array(j-q.byteLength-1),ie.match(/^ktx/i)){let pe=mx(t.keyValue[ie]);t.keyValue[ie]=pe.substring(0,pe.lastIndexOf("\0"))}m._skip(j%4?4-j%4:0)}if(h<=0)return t;let p=new ro(s,u,h,!0),_=p._nextUint16(),x=p._nextUint16(),v=p._nextUint32(),M=p._nextUint32(),b=p._nextUint32(),C=p._nextUint32(),S=[];for(let j=0;j<r;j++)S.push({imageFlags:p._nextUint32(),rgbSliceByteOffset:p._nextUint32(),rgbSliceByteLength:p._nextUint32(),alphaSliceByteOffset:p._nextUint32(),alphaSliceByteLength:p._nextUint32()});let E=u+p._offset,y=E+v,B=y+M,U=B+b,P=new Uint8Array(s.buffer,s.byteOffset+E,v),F=new Uint8Array(s.buffer,s.byteOffset+y,M),Y=new Uint8Array(s.buffer,s.byteOffset+B,b),z=new Uint8Array(s.buffer,s.byteOffset+U,C);return t.globalData={endpointCount:_,selectorCount:x,imageDescs:S,endpointsData:P,selectorsData:F,tablesData:Y,extendedData:z},t}var Wm,br,Km,qm={env:{emscripten_notify_memory_growth:function(s){Km=new Uint8Array(br.exports.memory.buffer)}}},hf=class{init(){return Wm||(Wm=typeof fetch<"u"?fetch("data:application/wasm;base64,"+vx).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,qm)).then(this._init):WebAssembly.instantiate(Buffer.from(vx,"base64"),qm).then(this._init),Wm)}_init(e){br=e.instance,qm.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!br)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=e.byteLength,i=br.exports.malloc(n);Km.set(e,i),t=t||Number(br.exports.ZSTD_findDecompressedSize(i,n));let r=br.exports.malloc(t),a=br.exports.ZSTD_decompress(r,t,i,n),o=Km.slice(r,r+a);return br.exports.free(i),br.exports.free(r),o}},vx="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ";var _x="display-p3",xx="display-p3-linear";var Xm=new WeakMap,Ym=0,jm,Er=class s extends Ss{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new uf,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){let e=new dr(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);let t=e.loadAsync("basis_transcoder.js"),n=new dr(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);let i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([r,a])=>{let o=s.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(s.EngineFormat),"let _EngineType = "+JSON.stringify(s.EngineType),"let _TranscoderFormat = "+JSON.stringify(s.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(s.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{let l=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),l})}),Ym>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Ym++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");let r=new dr(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Xm.has(e))return Xm.get(e).promise.then(t).catch(n);this._createTexture(e).then(i=>t?t(i):null).catch(n)}_createTextureFrom(e,t){let{type:n,error:i,data:{faces:r,width:a,height:o,format:c,type:l,dfdFlags:u}}=e;if(n==="error")return Promise.reject(i);let h;if(t.faceCount===6)h=new Ah(r,c,l);else{let f=r[0].mipmaps;h=t.layerCount>1?new ph(f,a,o,t.layerCount,c,l):new Ha(f,a,o,c,l)}return h.minFilter=r[0].mipmaps.length===1?Kt:fn,h.magFilter=Kt,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=Ox(t),h.premultiplyAlpha=!!(u&1),h}async _createTexture(e,t={}){let n=gx(new Uint8Array(e)),i=n.vkFormat===1000066e3&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===0||i&&!this.workerConfig.astcHDRSupported))return wI(n);let a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(c=>this._createTextureFrom(c.data,n));return Xm.set(e,{promise:o}),o}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Ym--,this}};Er.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Er.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Er.EngineFormat={RGBAFormat:dn,RGBA_ASTC_4x4_Format:$o,RGB_BPTC_UNSIGNED_Format:bl,RGBA_BPTC_Format:qo,RGBA_ETC2_EAC_Format:xl,RGBA_PVRTC_4BPPV1_Format:gl,RGBA_S3TC_DXT5_Format:Wo,RGB_ETC1_Format:vl,RGB_ETC2_Format:_l,RGB_PVRTC_4BPPV1_Format:ml,RGBA_S3TC_DXT1_Format:Vo};Er.EngineType={UnsignedByteType:jt,HalfFloatType:Ot,FloatType:wn};Er.BasisWorker=function(){let s,e,t,n=_EngineFormat,i=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(g){let A=g.data;switch(A.type){case"init":s=A.config,o(A.transcoderBinary);break;case"transcode":e.then(()=>{try{let{faces:m,buffers:p,width:_,height:x,hasAlpha:v,format:M,type:b,dfdFlags:C}=c(A.buffer);self.postMessage({type:"transcode",id:A.id,data:{faces:m,width:_,height:x,hasAlpha:v,format:M,type:b,dfdFlags:C}},p)}catch(m){console.error(m),self.postMessage({type:"error",id:A.id,error:m.message})}});break}});function o(g){e=new Promise(A=>{t={wasmBinary:g,onRuntimeInitialized:A},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(g){let A=new t.KTX2File(new Uint8Array(g));function m(){A.close(),A.delete()}if(!A.isValid())throw m(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let p;if(A.isUASTC())p=a.UASTC;else if(A.isETC1S())p=a.ETC1S;else if(A.isHDR())p=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");let _=A.getWidth(),x=A.getHeight(),v=A.getLayers()||1,M=A.getLevels(),b=A.getFaces(),C=A.getHasAlpha(),S=A.getDFDFlags(),{transcoderFormat:E,engineFormat:y,engineType:B}=h(p,_,x,C);if(!_||!x||!M)throw m(),new Error("THREE.KTX2Loader:	Invalid texture");if(!A.startTranscoding())throw m(),new Error("THREE.KTX2Loader: .startTranscoding failed");let U=[],P=[];for(let F=0;F<b;F++){let Y=[];for(let z=0;z<M;z++){let j=[],q,ie;for(let Ee=0;Ee<v;Ee++){let Q=A.getImageLevelInfo(z,Ee,F);F===0&&z===0&&Ee===0&&(Q.origWidth%4!==0||Q.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),M>1?(q=Q.origWidth,ie=Q.origHeight):(q=Q.width,ie=Q.height);let le=new Uint8Array(A.getImageTranscodedSizeInBytes(z,Ee,0,E)),X=A.transcodeImage(le,z,Ee,F,E,0,-1,-1);if(B===i.HalfFloatType&&(le=new Uint16Array(le.buffer,le.byteOffset,le.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!X)throw m(),new Error("THREE.KTX2Loader: .transcodeImage failed.");j.push(le)}let pe=d(j);Y.push({data:pe,width:q,height:ie}),P.push(pe.buffer)}U.push({mipmaps:Y,width:_,height:x,format:y,type:B})}return m(),{faces:U,buffers:P,width:_,height:x,hasAlpha:C,dfdFlags:S,format:y,type:B}}let l=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[i.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[i.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[i.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[i.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[i.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[i.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[i.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[i.UnsignedByteType,i.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[i.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],u={[a.ETC1S]:l.filter(g=>g.basisFormat.includes(a.ETC1S)).sort((g,A)=>g.priorityUASTC-A.priorityUASTC),[a.UASTC]:l.filter(g=>g.basisFormat.includes(a.UASTC)).sort((g,A)=>g.priorityUASTC-A.priorityUASTC),[a.UASTC_HDR]:l.filter(g=>g.basisFormat.includes(a.UASTC_HDR)).sort((g,A)=>g.priorityHDR-A.priorityHDR)};function h(g,A,m,p){let _=u[g];for(let x=0;x<_.length;x++){let v=_[x];if(v.if&&!s[v.if]||!v.basisFormat.includes(g)||p&&v.transcoderFormat.length<2||v.needsPowerOfTwo&&!(f(A)&&f(m)))continue;let M=v.transcoderFormat[p?1:0],b=v.engineFormat[p?1:0],C=v.engineType[0];return{transcoderFormat:M,engineFormat:b,engineType:C}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function f(g){return g<=2?!0:(g&g-1)===0&&g!==0}function d(g){if(g.length===1)return g[0];let A=0;for(let _=0;_<g.length;_++){let x=g[_];A+=x.byteLength}let m=new Uint8Array(A),p=0;for(let _=0;_<g.length;_++){let x=g[_];m.set(x,p),p+=x.byteLength}return m}};var SI=new Set([dn,rs,Ts]),Jm={109:dn,97:dn,37:dn,43:dn,103:rs,83:rs,16:rs,22:rs,100:Ts,76:Ts,15:Ts,9:Ts,1000066e3:$o,166:ec,165:ec},Zm={109:wn,97:Ot,37:jt,43:jt,103:wn,83:Ot,16:jt,22:jt,100:wn,76:Ot,15:jt,9:jt,1000066e3:Ot,166:jt,165:jt};async function wI(s){let{vkFormat:e}=s;if(Jm[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;s.supercompressionScheme===2&&(jm||(jm=new Promise(async r=>{let a=new hf;await a.init(),r(a)})),t=await jm);let n=[];for(let r=0;r<s.levels.length;r++){let a=Math.max(1,s.pixelWidth>>r),o=Math.max(1,s.pixelHeight>>r),c=s.pixelDepth?Math.max(1,s.pixelDepth>>r):0,l=s.levels[r],u;if(s.supercompressionScheme===0)u=l.levelData;else if(s.supercompressionScheme===2)u=t.decode(l.levelData,l.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let h;Zm[e]===wn?h=new Float32Array(u.buffer,u.byteOffset,u.byteLength/Float32Array.BYTES_PER_ELEMENT):Zm[e]===Ot?h=new Uint16Array(u.buffer,u.byteOffset,u.byteLength/Uint16Array.BYTES_PER_ELEMENT):h=u,n.push({data:h,width:a,height:o,depth:c})}let i;if(SI.has(Jm[e]))i=s.pixelDepth===0?new Us(n[0].data,s.pixelWidth,s.pixelHeight):new Ua(n[0].data,s.pixelWidth,s.pixelHeight,s.pixelDepth);else{if(s.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");i=new Ha(n,s.pixelWidth,s.pixelHeight)}return i.mipmaps=n,i.type=Zm[e],i.format=Jm[e],i.colorSpace=Ox(s),i.needsUpdate=!0,Promise.resolve(i)}function Ox(s){let e=s.dataFormatDescriptor[0];return e.colorPrimaries===1?e.transferFunction===2?Lt:Gn:e.colorPrimaries===10?e.transferFunction===2?_x:xx:e.colorPrimaries===0?Sn:(console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),Sn)}var TI=`
attribute vec4 iPos;     // xyz = centro da esfera da \xE1rvore (mundo), w = giro (rad)
attribute vec4 iScale;   // x = escala horizontal, y = vertical, z = canal do Sol (0, 1, 2), w = luz do Sol no lugar (0..1)
attribute vec3 iTint;
uniform float uR;        // raio do atlas (modelo)
varying vec3 vW;
varying vec3 vTint;
varying vec4 vInfo;      // xyz: escala h, escala v, canal; w = sunv
varying vec3 vC;
varying float vRot;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){
  vec3 C=iPos.xyz;
  vec3 toCam=normalize(cameraPosition-C);
  vec3 right=normalize(cross(vec3(0.,1.,0.),toCam));
  vec3 up=cross(toCam,right);
  float s=uR*max(iScale.x,iScale.y)*1.04;
  vec3 p=C+(right*position.x+up*position.y)*s;
  vW=p; vC=C; vTint=iTint; vInfo=iScale; vRot=iPos.w;
  gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);
  #include <logdepthbuf_vertex>
}`,II=`
uniform sampler2D uCor, uLuz, uProf;
uniform mat4 projectionMatrix;
uniform float uR, uRz;
uniform vec3 uSunCol, uSkyCol, uGroundCol;
uniform float uEl[4];
varying vec3 vW;
varying vec3 vTint;
varying vec4 vInfo;
varying vec3 vC;
varying float vRot;
#include <common>
#include <logdepthbuf_pars_fragment>
__AERIAL__
vec3 rotY(vec3 v,float a){float c=cos(a),s=sin(a);return vec3(c*v.x+s*v.z,v.y,-s*v.x+c*v.z);}
vec3 viewDir(float az,float el){return vec3(cos(el)*sin(az),sin(el),cos(el)*cos(az));}
// amostra a vista (i,j) no ponto local q; devolve cor+\u03B1 e luz
void sampleView(int i,int j,vec3 q,vec3 qdx,vec3 qdy,out vec4 cor,out vec4 luz,out float prof){
  float az=float(i)*(PI2/8.), el=radians(uEl[j]);
  vec3 d=viewDir(az,el), f=-d;
  vec3 r=normalize(cross(f,vec3(0.,1.,0.))); vec3 u=cross(r,f);
  vec2 uv=vec2(dot(q,r),dot(q,u))/(2.*uR)+.5;
  if(uv.x<.004||uv.y<.004||uv.x>.996||uv.y>.996){cor=vec4(0.);luz=vec4(0.);prof=1.;return;}
  vec2 a=vec2((float(i)+uv.x)/8.,(float(j)+1.-uv.y)/4.);
  vec2 ax=vec2(dot(qdx,r)/8.,-dot(qdx,u)/4.)/(2.*uR);
  vec2 ay=vec2(dot(qdy,r)/8.,-dot(qdy,u)/4.)/(2.*uR);
  cor=textureGrad(uCor,a,ax,ay); luz=textureGrad(uLuz,a,ax,ay); prof=textureGrad(uProf,a,ax,ay).r;
}
void main(){
  #include <logdepthbuf_fragment>
  vec3 toCamW=normalize(cameraPosition-vC);
  // espa\xE7o do modelo: desfaz o giro e a escala da inst\xE2ncia
  vec3 dl=rotY(toCamW,-vRot); dl=normalize(dl/vec3(vInfo.x,vInfo.y,vInfo.x));
  vec3 q=rotY(vW-vC,-vRot)/vec3(vInfo.x,vInfo.y,vInfo.x);
  vec3 qdx=dFdx(q),qdy=dFdy(q);
  float az=atan(dl.x,dl.z); if(az<0.)az+=PI2;
  float el=degrees(asin(clamp(dl.y,-1.,1.)));
  float fa=az/(PI2/8.);
  int i0=int(floor(fa)); float ta=fa-float(i0); int i1=i0+1; if(i1>7)i1=0; if(i0>7)i0=0;
  int j0=0; float te=0.;
  if(el<=uEl[0]){j0=0;te=0.;}
  else if(el<uEl[1]){j0=0;te=(el-uEl[0])/(uEl[1]-uEl[0]);}
  else if(el<uEl[2]){j0=1;te=(el-uEl[1])/(uEl[2]-uEl[1]);}
  else if(el<uEl[3]){j0=2;te=(el-uEl[2])/(uEl[3]-uEl[2]);}
  else {j0=3;te=0.;}
  int j1=min(j0+1,3);
  vec4 c00,c10,c01,c11,l00,l10,l01,l11; float p00,p10,p01,p11;
  vec4 cor, luz; float prof;
  #ifdef DETAIL
    sampleView(i0,j0,q,qdx,qdy,c00,l00,p00); sampleView(i1,j0,q,qdx,qdy,c10,l10,p10);
    sampleView(i0,j1,q,qdx,qdy,c01,l01,p01); sampleView(i1,j1,q,qdx,qdy,c11,l11,p11);
    float w00=(1.-ta)*(1.-te)*c00.a, w10=ta*(1.-te)*c10.a, w01=(1.-ta)*te*c01.a, w11=ta*te*c11.a;
    float ws=w00+w10+w01+w11;
    float A=(1.-ta)*(1.-te)*c00.a+ta*(1.-te)*c10.a+(1.-ta)*te*c01.a+ta*te*c11.a;
    ws=max(ws,1e-4);
    cor=vec4((c00.rgb*w00+c10.rgb*w10+c01.rgb*w01+c11.rgb*w11)/ws,A);
    luz=(l00*w00+l10*w10+l01*w01+l11*w11)/ws;
    prof=(p00*w00+p10*w10+p01*w01+p11*w11)/ws;
  #else
    int ii=ta<.5?i0:i1; int jj=te<.5?j0:j1;
    sampleView(ii,jj,q,qdx,qdy,cor,luz,prof);
  #endif
  // borda n\xEDtida com cobertura alfa (MSAA)
  float aa=cor.a;
  aa=smoothstep(.42,.42+max(fwidth(aa),1e-3),aa);
  if(aa<=0.) discard;
  vec3 alb=pow(cor.rgb,vec3(2.2))*vTint;
  luz=luz*luz; // gravada com raiz quadrada
  int k=int(vInfo.z+.5);
  float sunDirect=k==0?luz.r:(k==1?luz.g:luz.b);
  float sky=luz.a;
  // c\xE9u: claro em cima, mata escura embaixo; a oclus\xE3o j\xE1 est\xE1 no atlas
  vec3 amb=mix(uGroundCol,uSkyCol,.78)*sky;
  vec3 col=alb*RECIPROCAL_PI*(uSunCol*sunDirect*vInfo.w+amb);
  // folhas contra o Sol: luz atravessando (mais forte nas bordas da copa)
  vec3 Vd=normalize(vW-cameraPosition);
  float bl=pow(max(dot(Vd,uSun),0.),3.)*vInfo.w;
  col+=alb*vec3(.9,1.,.45)*bl*.35*(1.-.6*sky)*RECIPROCAL_PI*length(uSunCol);
  gl_FragColor=vec4(aerial(col,vW),aa);
  // profundidade corrigida: o pixel fica onde a folha est\xE1, n\xE3o no plano do ret\xE2ngulo
  #ifdef DETAIL
    vec3 pw=vW+Vd*((prof-.5)*2.*uRz*max(vInfo.x,vInfo.y));
    vec4 cp=projectionMatrix*viewMatrix*vec4(pw,1.);
    gl_FragDepth=clamp(cp.z/cp.w*.5+.5,0.,1.);
  #endif
}`;function Nx(s,e,t="",n=null){let i=new Er().setTranscoderPath("js/basis/");n&&i.detectSupport(n);let r=a=>new Promise((o,c)=>i.load(a,l=>{l.colorSpace=Sn,l.anisotropy=4,l.minFilter=fn,l.magFilter=Kt,o(l)},void 0,c));return Promise.all(e.map(async a=>{let o=await(await fetch(Fl(`${s}${a}.json`))).json(),[c,l,u]=await Promise.all([r(`${s}${a}_cor${t}.ktx2`),r(`${s}${a}_luz${t}.ktx2`),r(`${s}${a}_prof.ktx2`)]);return{id:a,meta:o,cor:c,luz:l,prof:u}}))}function kx(s,e,{aerialGLSL:t,shared:n,sun:i,sky:r,ground:a,detail:o=1}){let c=e.length,l=new ws;l.setAttribute("position",new Je([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),l.setIndex([0,1,2,0,2,3]);let u=new Float32Array(c*4),h=new Float32Array(c*4),f=new Float32Array(c*3),d=s.meta,g=d.centro;e.forEach((p,_)=>{let x=p.rot*2*Math.PI/3+(p.jit||0),v=Math.cos(x),M=Math.sin(x),b=g[0]*p.sh,C=(g[1]-d.base_y)*p.sv,S=g[2]*p.sh;u[_*4]=p.x+v*b+M*S,u[_*4+1]=p.y+C,u[_*4+2]=p.z-M*b+v*S,u[_*4+3]=x,h[_*4]=p.sh,h[_*4+1]=p.sv,h[_*4+2]=p.rot,h[_*4+3]=p.sunv,f.set(p.tint,_*3)}),l.setAttribute("iPos",new Pn(u,4)),l.setAttribute("iScale",new Pn(h,4)),l.setAttribute("iTint",new Pn(f,3)),l.instanceCount=c;let A=new ze({uniforms:{...n,uCor:{value:s.cor},uLuz:{value:s.luz},uProf:{value:s.prof},uR:{value:d.raio},uRz:{value:d.raio_prof||d.raio},uEl:{value:d.elevacoes},uSunCol:{value:i},uSkyCol:{value:r},uGroundCol:{value:a}},vertexShader:TI,fragmentShader:II.replace("__AERIAL__",t),alphaToCoverage:!0,transparent:!1,side:bt});o&&(A.defines={DETAIL:""});let m=new we(l,A);return m.frustumCulled=!1,m.name="arvores-"+s.id,m}var RI=ot,oi=(s=0,e=0,t=0)=>new I(s,e,t),qs=(s,e=0,t=1)=>s<e?e:s>t?t:s,ci=(s,e,t)=>{let n=qs((t-s)/(e-s));return n*n*(3-2*n)},Di=(s,e,t)=>s+(e-s)*t;function ff(s,e){let t=Math.imul(s|0,374761393)+Math.imul(e|0,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function ao(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r);return Di(Di(ff(t,n),ff(t+1,n),a),Di(ff(t,n+1),ff(t+1,n+1),a),o)}function tg(s,e,t=4){let n=0,i=.5,r=1,a=0;for(let o=0;o<t;o++)n+=i*ao(s*r+o*17.3,e*r-o*9.1),a+=i,i*=.5,r*=2.03;return n/a}function eg(s,e,t=3){let n=0,i=.5,r=1,a=0;for(let o=0;o<t;o++){let c=1-Math.abs(2*ao(s*r+o*31.7,e*r+o*11.3)-1);n+=i*c*c,a+=i,i*=.5,r*=2.1}return n/a}function df(s){let e=s|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Qx(s){return 10*Math.sin(s*.018)+4*Math.sin(s*.043+.5)}function BI(s){return 760*ci(500,3800,s)*Math.sin(ci(500,3800,s)*1.7)-820*ci(-700,-4200,s)*Math.sin(ci(-700,-4200,s)*1.5)}function ds(s){return Qx(s)+BI(s)}function ha(s,e){let t=s-ds(e),n=Math.abs(t),i=t>=0?1:-1,a=(n<4.6?-1.5*(1-(n/4.6)**2):0)+1.3*ci(4.2,9,n)+7*ci(9,90,n)+3*(tg(s*.012,e*.012,2)-.5)*ci(12,50,n)+.5*(ao(s*.25,e*.25)-.5)*ci(5,12,n),o=(i>0?78:105)+26*(ao(e*.006+i*3,4.2)-.5),c=Math.max(0,n-o),l=e+70*(ao(s*.004+7,e*.004)-.5),u=eg(l/165+i*5.3+c/900,c/340+i*2.1,3),h=(i>0?250*(1-Math.exp(-c/300)):62*(1-Math.exp(-c/380)))*(.68+.58*u);return h+=10*(tg(s*.018,e*.018,3)-.5)*ci(20,90,c),a+=h,a+=(i>0?360:260)*ci(i>0?500:1700,i>0?2800:3600,n)*(.4+.85*eg(s/1350+3,e/1650,4)),a+=620*ci(2400,7500,n)*(.45+.75*eg(s/3100-1,e/3300+2,3)),a}function wc(s){let e=RI.clamp((s-62)/13.2,0,1),t=-42+72*e,n=Qx(t)+1.6+1.2*Math.sin(e*Math.PI*1.6);return oi(n,53+6*Math.sin(e*Math.PI*.5),t)}var Bi=new I(.72,.62,.22).normalize(),pf=`
uniform vec3 uSun;
vec3 skyBase(vec3 d){
  float h=clamp(d.y,0.,1.);
  vec3 zen=vec3(.085,.175,.40), hor=vec3(.43,.54,.66);
  vec3 c=mix(hor,zen,pow(h,.55));
  float s=max(dot(d,uSun),0.);
  c+=vec3(.30,.24,.15)*pow(s,6.)*.55+vec3(.9,.8,.6)*pow(s,48.)*.55;
  if(d.y<0.){ c=mix(hor,hor*vec3(.78,.84,.86),clamp(-d.y*6.,0.,1.)); }
  return c;
}
uniform float uFogK;
uniform float uTime;
vec3 aerial(vec3 c, vec3 wp){
  vec3 v=wp-cameraPosition; float dist=length(v); vec3 dir=v/max(dist,1e-3);
  float Hs=720.; float h0=max(cameraPosition.y,0.), h1=max(wp.y,0.);
  float e0=exp(-h0/Hs), e1=exp(-h1/Hs);
  float avg=abs(h1-h0)<1.?e0:(e0-e1)*Hs/(h1-h0);
  float od=uFogK*dist*avg;
  vec3 ext=exp(-od*vec3(.82,.95,1.12));
  vec3 hz=skyBase(normalize(vec3(dir.x,max(dir.y,.02)*.35,dir.z)));
  return c*ext+hz*(1.-ext);
}`,Yl={uSun:{value:Bi},uFogK:{value:165e-6},uTime:{value:0}};function fa(s,e,t={}){let n=s.onBeforeCompile;return s.customProgramCacheKey=()=>"vale-"+e,s.onBeforeCompile=i=>{if(Object.assign(i.uniforms,Yl),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vW;`+(t.vDecl||"")).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 wq=vec4(transformed,1.);
        #ifdef USE_INSTANCING
        wq=instanceMatrix*wq;
        #endif
        vW=(modelMatrix*wq).xyz;`+(t.vMain||"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vW;`+pf+(t.fDecl||"")).replace("#include <fog_fragment>","gl_FragColor.rgb=aerial(gl_FragColor.rgb,vW);"),t.frag)for(let[r,a]of t.frag)i.fragmentShader=i.fragmentShader.replace(r,a);n&&n(i)},s}var Hx={larga:{ry:.62,n:[14,8],cr:[.34,.5],flat:.7},redonda:{ry:.86,n:[11,7],cr:[.36,.54],flat:.9},pequena:{ry:.95,n:[8,5],cr:[.4,.58],flat:1},emergente:{ry:.72,n:[17,9],cr:[.32,.48],flat:.6}},zx=["jacaranda_tree","island_tree_01","island_tree_02","tree_small_02"],Gx=()=>Math.min(innerWidth,innerHeight)<600;function Vx(s=Gx()){let e=s?"_m":"";return[...Sc?[]:["modelos/ave-free-eagle.glb"],"modelos/pedras-musgo.glb","modelos/texturas/cascalho-rio.jpg","modelos/arvores/dossel_topo.jpg","js/basis/basis_transcoder.js","js/basis/basis_transcoder.wasm",...zx.flatMap(t=>[`modelos/arvores/${t}.json`,`modelos/arvores/${t}_cor${e}.ktx2`,`modelos/arvores/${t}_luz${e}.ktx2`,`modelos/arvores/${t}_prof.ktx2`])]}function Wx({renderer:s=null}={}){let e=[],t=Gx(),n=new Mi;n.background=new ye(9415103);let i=df(48319);e.push(["inicio",performance.now()]);let r=dx(t?256:512),a=px(256),o=Ax();e.push(["texturas",performance.now()]);let c=new ze({side:Xt,depthWrite:!1,uniforms:{...Yl},vertexShader:"varying vec3 vP;void main(){vP=position;vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}",fragmentShader:`varying vec3 vP;${pf}
      float hs(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hs(i),hs(i+vec2(1,0)),f.x),mix(hs(i+vec2(0,1)),hs(i+vec2(1,1)),f.x),f.y);}
      float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*vn(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}
      void main(){vec3 d=normalize(vP);vec3 c=skyBase(d);
        float s=max(dot(d,uSun),0.);c+=vec3(1.,.93,.8)*smoothstep(.99985,.99993,s)*40.;
        if(d.y>0.){vec2 p=d.xz/(d.y+.06)*1.6;float n=fb(p+vec2(3.,1.))-.5*fb(p*3.1);
          float band=smoothstep(.01,.06,d.y)*(1.-smoothstep(.12,.30,d.y));
          float cl=smoothstep(.42,.62,n)*band;
          vec3 cc=mix(vec3(.55,.58,.64),vec3(1.05,1.,.93),clamp(.5+.8*(fb(p*2.+uSun.xz*.4)-.5)+.25*s,0.,1.));
          c=mix(c,mix(cc,c,.35*(1.-band)),cl*.9);}
        gl_FragColor=vec4(c,1.);}`}),l=new we(new Ci(9e3,48,24),c);l.frustumCulled=!1,l.renderOrder=-10,n.add(l),e.push(["ceu",performance.now()]);let u=-620,h=620,f=-2460,d=1460,g=4,A=Math.round((h-u)/g)+1,m=Math.round((d-f)/g)+1,p=new Float32Array(A*m),_=new Float32Array(A*m);for(let R=0;R<m;R++)for(let k=0;k<A;k++){let L=ha(u+k*g,f+R*g);p[R*A+k]=L,_[R*A+k]=L}let x=(R,k,L)=>{let H=(k-u)/g,J=(L-f)/g;if(H<0||J<0||H>=A-1||J>=m-1)return null;let $=Math.floor(H),ne=Math.floor(J),oe=H-$,fe=J-ne,ve=ne*A+$;return Di(Di(R[ve],R[ve+1],oe),Di(R[ve+A],R[ve+A+1],oe),fe)},v=(R,k)=>{let L=x(p,R,k);return L===null?ha(R,k):L},M=-4e3,b=-4400,C=40,S=201,E=211,y=new Float32Array(S*E);for(let R=0;R<E;R++)for(let k=0;k<S;k++)y[R*S+k]=ha(M+k*C,b+R*C);let B=(R,k)=>{let L=qs((R-M)/C,0,S-1.001),H=qs((k-b)/C,0,E-1.001),J=Math.floor(L),$=Math.floor(H),ne=L-J,oe=H-$,fe=$*S+J;return Di(Di(y[fe],y[fe+1],ne),Di(y[fe+S],y[fe+S+1],ne),oe)};e.push(["grade",performance.now()]);let U=[],P=[],F=[],Y=[];for(let R=0;R<=6;R++){let k=wc(62+13.2*R/6);Y.push([k.x,k.z])}let z=(R,k)=>{if(k<-330||k>230)return 1e9;let L=1e9;for(let H=0;H<Y.length-1;H++){let[J,$]=Y[H],[ne,oe]=Y[H+1],fe=ne-J,ve=oe-$,Pe=qs(((R-J)*fe+(k-$)*ve)/(fe*fe+ve*ve));L=Math.min(L,Math.hypot(R-J-fe*Pe,k-$-ve*Pe))}return L},j=t?140:160,q=(R,k)=>Math.max(Math.abs(R-ds(k))/560,Math.max(0,k-1430)/30,Math.max(0,-2430-k)/30),ie=[["larga",.3],["redonda",.36],["pequena",.3],["emergente",.04]],pe=9;for(let R=f+6;R<d-6;R+=pe)for(let k=u+6;k<h-6;k+=pe){let L=k+(i()-.5)*pe*.8,H=R+(i()-.5)*pe*.8,J=Math.abs(L-ds(H));if(J<13||q(L,H)>1)continue;let $=i(),ne="pequena";for(let[We,$e]of ie){if($<$e){ne=We;break}$-=$e}let oe=v(L,H),fe=ci(32,13,J),ve=z(L,H);(fe>.3&&i()<.12||i()<.016+.03*fe||i()<.01)&&(i(),i());let Pe=(ne==="larga"?7.2+i()*3.6:ne==="redonda"?5.4+i()*2.6:ne==="emergente"?12+i()*4:4.2+i()*1.8)*(1-.35*fe),Le=ne==="emergente"?30+i()*5:17+i()*10-7*fe;ne==="pequena"&&(Le-=4),!(Math.hypot((L-(ds(-10)-30))/1.25,H+10)<22)&&U.push({x:L,z:H,y:oe,kind:ne,rad:Pe,H:Le,hi:ve<j,seed:i(),lean:(i()-.5)*.08+fe*.1*Math.sign(ds(H)-L)})}for(let R of U){let k=Hx[R.kind],L=R.y+R.H-k.ry*R.rad*.95,H=R.rad*1.1,J=Math.max(0,Math.floor((R.x-H-u)/g)),$=Math.min(A-1,Math.ceil((R.x+H-u)/g)),ne=Math.max(0,Math.floor((R.z-H-f)/g)),oe=Math.min(m-1,Math.ceil((R.z+H-f)/g));for(let fe=ne;fe<=oe;fe++)for(let ve=J;ve<=$;ve++){let Pe=u+ve*g-R.x,Le=f+fe*g-R.z,We=(Pe*Pe+Le*Le)/(H*H);if(We<1){let $e=L+k.ry*R.rad*Math.sqrt(1-We);$e>_[fe*A+ve]&&(_[fe*A+ve]=$e)}}R.cy=L}let Ee=Math.hypot(Bi.x,Bi.z),Q=Bi.x/Ee,le=Bi.z/Ee,X=Bi.y/Ee,se=-1e9;for(let R=0;R<_.length;R++)_[R]>se&&(se=_[R]);let me=(R,k,L,H=450)=>{for(let J=2.5;J<H;J+=2+J*.08){let $=R+Q*J,ne=L+le*J,oe=k+X*J;if(oe>se+5&&oe>520)return 1;let fe=x(_,$,ne);if(fe===null){if(B($,ne)>oe)return 0;continue}if(fe>oe)return fe-oe<1.5?.5:0}return 1};e.push(["copas",performance.now()]);let _e=[0];{let R=0,k=1.4;for(;R<1750;)R+=k,_e.push(R),k=R<10?1.4:Math.min(42,k*1.075)}let Oe=[..._e.slice(1).reverse().map(R=>-R),..._e],Ke=[];{let R=-48,k=$=>3.2+.032*Math.max(0,Math.abs($+6)-80),L=-6,H=[],J=[];for(;L<2200;)H.push(L),L+=k(L);for(L=-6-k(-6);L>-3e3;)J.push(L),L-=k(L);Ke.push(...J.reverse(),...H)}let Xe=new lr({vertexColors:!0}),Et=(R,k)=>21*qs((q(R,k)-.93)/.12),st=(R,k)=>{let H=ha(R+12,k)-ha(R-12,k),J=ha(R,k+12)-ha(R,k-12);return oi(-H,24,-J).normalize().dot(Bi)};function Bt(R,k,L,H,J,$=!1){let ne=R.length,oe=new Float32Array(ne*3),fe=new Float32Array(ne*3),ve=new Float32Array(ne*3);for(let Le=0;Le<ne;Le++){let We=R[Le],$e=k[Le],Dt=Math.abs(We-ds($e)),wt=Dt>60?x(p,We,$e):null,vn=wt===null?ha(We,$e):wt,Tt=Et(We,$e)*ci(14,40,Dt),gt=vn+Tt;oe[Le*3]=We,oe[Le*3+1]=gt,oe[Le*3+2]=$e;let Pt=ci(8.5,4.6,Dt),Wn=ci(5.2,3.8,Dt),Un=[.045,.052,.03];Un=Un.map((Qi,T)=>Di(Qi,[.2,.185,.15][T],Pt)),Un=Un.map((Qi,T)=>Di(Qi,[.075,.072,.062][T],Wn));let ki=ao(We*.3,$e*.3);Un=Un.map(Qi=>Qi*(.85+.3*ki)),fe.set(Un,Le*3);let Zs=Dt>40&&q(We,$e)<.98&&z(We,$e)>j+15,Hi=$||Zs?1:me(We,gt+.6,$e);ve[Le*3]=Hi,ve[Le*3+1]=qs(Tt/21),ve[Le*3+2]=Pt}let Pe=new ht;if(Pe.setAttribute("position",new St(oe,3)),Pe.setAttribute("color",new St(fe,3)),Pe.setAttribute("bake",new St(ve,3)),Pe.setIndex(J),Pe.computeVertexNormals(),$){let Le=Pe.attributes.normal;for(let We=0;We<ne;We++)ve[We*3]=1-.7*ci(-.05,-.25,Le.getX(We)*Bi.x+Le.getY(We)*Bi.y+Le.getZ(We)*Bi.z)}return Pe}{let R=[],k=[],L=[],H=Oe.length,J=Ke.length;for(let $=0;$<J;$++)for(let ne=0;ne<H;ne++){let oe=Ke[$];R.push(ds(oe)+Oe[ne]),k.push(oe)}for(let $=0;$<J-1;$++)for(let ne=0;ne<H-1;ne++){let oe=$*H+ne,fe=oe+H;L.push(oe,fe,oe+1,oe+1,fe,fe+1)}var V=Bt(R,k,H,J,L)}{let R=[],k=[],L=[],H=t?200:300,J=t?46:64,$=-300;for(let oe=0;oe<=J;oe++){let fe=1300*Math.pow(10.76923076923077,oe/J);for(let ve=0;ve<=H;ve++){let Pe=ve/H*Math.PI*2;R.push(Math.cos(Pe)*fe),k.push($+Math.sin(Pe)*fe)}}for(let oe=0;oe<J;oe++)for(let fe=0;fe<H;fe++){let ve=oe*(H+1)+fe,Pe=ve+H+1;L.push(ve,ve+1,Pe,Pe,ve+1,Pe+1)}var gn=Bt(R,k,H+1,J+1,L,!0);let ne=gn.attributes.position;for(let oe=0;oe<ne.count;oe++){let fe=ne.getX(oe),ve=ne.getZ(oe);Math.abs(fe-ds(ve))<1700&&ve>-2950&&ve<2150&&ne.setY(oe,ne.getY(oe)-60)}gn.computeVertexNormals()}let nt={vDecl:"attribute vec3 bake;varying vec3 vBake;",vMain:"vBake=bake;",fDecl:"varying vec3 vBake;uniform sampler2D uCanopy,uFoliage,uDossel,uGravel;",frag:[["#include <color_fragment>",`#include <color_fragment>
        // dossel distante: ladrilho montado com as vistas de cima das mesmas \xE1rvores (impostores), em duas escalas
        float dC=length(vW-cameraPosition), far=smoothstep(350.,1800.,dC);
        vec3 t1=texture2D(uDossel,vW.xz/96.).rgb, t2=texture2D(uDossel,mat2(.8,-.6,.6,.8)*vW.xz/157.+.31).rgb;
        // longe, uma escala maior mant\xE9m vis\xEDveis as manchas de copas (o mipmap da escala real vira uma cor lisa)
        vec3 t3=texture2D(uDossel,mat2(.6,.8,-.8,.6)*vW.xz/430.+.17).rgb;
        vec4 cn2=texture2D(uCanopy,vW.xz/231.+.37);
        vec3 can=mix(mix(t1,t2,.35),mix(t2,t3,.65),far)*(.78+.45*cn2.a);
        // talh\xF5es de outros verdes (mata mais nova, encostas secas e \xFAmidas), em manchas largas
        float pt=texture2D(uCanopy,vW.xz/1100.+.71).a, pt2=texture2D(uCanopy,vW.xz/2700.+.23).a;
        can*=mix(vec3(1.),vec3(1.10,1.05,.84),smoothstep(.58,.86,pt)*.45)*mix(vec3(1.),vec3(.78,.86,.92),smoothstep(.55,.85,pt2)*.5);
        can*=mix(1.,.70,far); // o relevo distante n\xE3o vira uma faixa preta
        // margens: cascalho de rio (textura escaneada, Poly Haven), escala real de ~3 m
        vec3 grv=texture2D(uGravel,vW.xz/3.2).rgb*.8;
        diffuseColor.rgb=mix(diffuseColor.rgb,grv*(.75+.25*vBake.z),vBake.z*.9);
        float isC=vBake.y;
        diffuseColor.rgb=mix(diffuseColor.rgb,can,isC);`],["#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        // relevo das copas no dossel distante: copa clara = alta; a luz rasante desenha os volumes
        { float dC2=length(vW-cameraPosition); float sc=mix(96.,430.,smoothstep(350.,1800.,dC2));
          // Coordenadas cont\xEDnuas: a antiga troca brusca em 1000 m mudava o relevo.
          float cf=smoothstep(350.,1800.,dC2);
          vec2 q=mix(vW.xz/sc,mat2(.6,.8,-.8,.6)*vW.xz/sc+.17,cf); float e=mix(2.,7.,cf)/1024.;
          vec3 L3=vec3(.3,.6,.1);
          float hx=dot(texture2D(uDossel,q+vec2(e,0.)).rgb-texture2D(uDossel,q-vec2(e,0.)).rgb,L3);
          float hz=dot(texture2D(uDossel,q+vec2(0.,e)).rgb-texture2D(uDossel,q-vec2(0.,e)).rgb,L3);
          vec3 nt=vec3(-hx,0.,-hz)*mix(20.,13.,cf)*vBake.y;
          normal=normalize(normal+(viewMatrix*vec4(nt,0.)).xyz); }`],["#include <lights_fragment_end>",`#include <lights_fragment_end>
        reflectedLight.directDiffuse*=vBake.x*mix(1.,.46,vBake.y); // dossel distante: a sombra pr\xF3pria das copas
        reflectedLight.indirectDiffuse*=mix(.7,.64,vBake.y)*mix(1.,.8,1.-vBake.x); // e a oclus\xE3o entre elas`]]},Ze=new Qa().load("modelos/texturas/cascalho-rio.jpg");Ze.colorSpace=Lt,Ze.wrapS=Ze.wrapT=kn,Ze.anisotropy=8;let Ne=new Qa().load("modelos/arvores/dossel_topo.jpg",R=>{R.needsUpdate=!0});Ne.colorSpace=Lt,Ne.wrapS=Ne.wrapT=kn,Ne.anisotropy=8,Xe.onBeforeCompile=R=>{R.uniforms.uCanopy={value:a},R.uniforms.uFoliage={value:r},R.uniforms.uDossel={value:Ne},R.uniforms.uGravel={value:Ze}},fa(Xe,"terreno",nt);let xt=new we(V,Xe),Ve=new we(gn,Xe);n.add(xt,Ve),e.push(["terreno",performance.now()]);{let R=[],k=[];for(let oe=0;oe<=1400;oe++){let fe=-2900+oe/1400*5e3,ve=ds(fe),Pe=4.3+.7*Math.sin(fe*.031)+.4*ao(fe*.05,1);for(let Le=0;Le<=6;Le++)if(R.push(ve+(Le/6-.5)*Pe*2,.02,fe),oe<1400&&Le<6){let We=oe*7+Le;k.push(We,We+6+1,We+1,We+1,We+6+1,We+6+2)}}let J=new ht;J.setAttribute("position",new Je(R,3)),J.setIndex(k),J.computeVertexNormals();let $=new lr({color:726032});fa($,"agua",{frag:[["#include <lights_fragment_end>",`#include <lights_fragment_end>
      { vec3 Vd=normalize(vW-cameraPosition);
        vec2 q=vW.xz*vec2(1.8,.6)+vec2(0.,uTime*1.4); float r1=sin(q.x*1.7+sin(q.y*.9))*.5+sin(q.y*2.3+q.x*.4)*.5;
        vec3 N=normalize(vec3(.05*r1,1.,.04*cos(q.y*1.3+q.x)));
        vec3 Rr=reflect(Vd,N); float fr=.03+.97*pow(1.-max(dot(-Vd,N),0.),5.);
        float el=Rr.y; vec3 refl=el>.25?skyBase(Rr):mix(vec3(.018,.030,.016),skyBase(normalize(vec3(Rr.x,.25,Rr.z))),smoothstep(.12,.25,el));
        reflectedLight.indirectDiffuse+=refl*fr*1.1; } `]]});let ne=new we(J,$);ne.renderOrder=1,n.add(ne)}let D=new Gt,w=new ye,K=[[.04,.076,.034],[.06,.108,.038],[.094,.145,.042],[.052,.1,.068],[.135,.16,.046],[.1,.114,.058],[.072,.124,.08]],ce=(R,k)=>{let L=tg(R.x*.006,R.z*.006,2),H=qs(L*1.25-.1+(R.seed*13%1-.5)*.5)*(K.length-1),J=K[Math.floor(H)],$=K[Math.min(K.length-1,Math.floor(H)+1)],ne=H%1;return k.setRGB(Di(J[0],$[0],ne),Di(J[1],$[1],ne),Di(J[2],$[2],ne)).multiplyScalar(.85+.3*(R.seed*31%1)),R.kind==="emergente"&&k.multiplyScalar(1.1),k};e.push(["agua+mat",performance.now()]);let de=0,ae={jacaranda_tree:[.92,1,.95],island_tree_01:[.8,.98,.86],island_tree_02:[.8,.97,.84],tree_small_02:[.86,.96,.92]},Ue=R=>{let k=R.seed*7.31%1;return R.kind==="emergente"?"jacaranda_tree":R.kind==="larga"?k<.7?"jacaranda_tree":"island_tree_01":R.kind==="redonda"?k<.5?"island_tree_01":k<.8?"island_tree_02":"jacaranda_tree":k<.6?"tree_small_02":"island_tree_02"},Ce=K.reduce((R,k)=>[R[0]+k[0]/K.length,R[1]+k[1]/K.length,R[2]+k[2]/K.length],[0,0,0]),Fe=Nx("modelos/arvores/",zx,t?"_m":"",s).then(R=>{let k=Object.fromEntries(R.map(ne=>[ne.id,ne])),L=new Map,H=new ye(16772306).multiplyScalar(6),J=new ye(10796504).multiplyScalar(1.9),$=new ye(2898462).multiplyScalar(1.9);for(let ne of U){let oe=Ue(ne),fe=k[oe].meta,ve=Hx[ne.kind],Pe=2*ne.rad/fe.largura*(.95+.2*(ne.seed*3.7%1)),Le=ne.H/fe.altura;Le=qs(Le,Pe*.85,Pe*1.35),ce(ne,w);let We=ae[oe],$e=.85+.3*(ne.seed*5.3%1),Dt=[w.r/Ce[0]*We[0]*$e,w.g/Ce[1]*We[1]*$e,w.b/Ce[2]*We[2]*$e].map(Pt=>qs(Pt,.45,1.7)),wt=1,vn=z(ne.x,ne.z)<420;if(vn||ne.hi){let Pt=ne.rad,Wn=ne.y+ne.H,Un=(ki,Zs)=>{let Hi=ne.x+ki,Qi=ne.z+Zs,T=x(_,Hi,Qi);return me(Hi,(T===null?Wn:T)+.4,Qi)};wt=qs((Un(Q*Pt*.55,le*Pt*.55)+Un(0,0)*2+Un(-Q*Pt*.55,-le*Pt*.55))/4+.05)}else wt=me(ne.x,ne.y+ne.H+.4,ne.z,300);let Tt={x:ne.x,y:ne.y-.3,z:ne.z,sh:Pe,sv:Le,rot:Math.floor(ne.seed*300)%3,jit:(ne.seed*11.7%1-.5)*.25,tint:Dt,sunv:wt},gt=oe+(vn?":perto":":longe");L.has(gt)||L.set(gt,[]),L.get(gt).push(Tt)}for(let[ne,oe]of L){let[fe,ve]=ne.split(":"),Pe=kx(k[fe],oe,{aerialGLSL:pf,shared:Yl,sun:H,sky:J,ground:$,detail:ve==="perto"?1:0});n.add(Pe),de+=oe.length*2}});e.push(["dossel",performance.now()]),e.push(["troncos",performance.now()]);{let R=(()=>{let oe=[0,0,0],fe=[],ve=9;for(let Le=0;Le<=ve*4;Le++){let We=Le/(ve*4)*Math.PI*2,$e=.55+.45*Math.pow(Math.abs(Math.cos(We*ve/2)),.6);oe.push(Math.cos(We)*$e,-.18*$e*$e,Math.sin(We)*$e),Le>0&&fe.push(0,Le+1,Le)}let Pe=new ht;return Pe.setAttribute("position",new Je(oe,3)),Pe.setIndex(fe),Pe.computeVertexNormals(),Pe})(),k=[],L=[],H=new Ye,J=new Rn,$=oi(0,1,0),ne=(oe,fe,ve)=>{let Pe=oe.distanceTo(fe);J.setFromUnitVectors($,fe.clone().sub(oe).normalize()),L.push(new Ye().compose(oe.clone().add(fe).multiplyScalar(.5),J.clone(),oi(ve,Pe,ve)))};for(let oe of F){let fe=df(Math.floor(oe.seed*1e6)),ve=4+Math.floor(fe()*3),Pe=oe.h*(.62+fe()*.1),Le=oi(oe.x,oe.y,oe.z),We=oi(oe.x,oe.y+Pe,oe.z);ne(Le,We,.2);for(let $e=0;$e<ve;$e++){let Dt=$e/ve*Math.PI*2+fe(),wt=1.6+fe()*1.8,vn=oe.h-Pe+fe()*1.5,Tt=oi(oe.x+Math.cos(Dt)*wt,oe.y+Pe+vn,oe.z+Math.sin(Dt)*wt);ne(We,Tt,.09);let gt=6+Math.floor(fe()*4);for(let Pt=0;Pt<gt;Pt++){let Wn=Pt/gt*Math.PI*2+fe()*.4,Un=.25+fe()*.45,ki=.55+fe()*.4,Zs=new Ye().makeTranslation(Tt.x,Tt.y+.1-fe()*.2,Tt.z).multiply(H.makeRotationY(Wn)).multiply(new Ye().makeTranslation(.75*ki,0,0)).multiply(new Ye().makeRotationZ(Un)).multiply(new Ye().makeScale(ki,ki,ki));k.push(Zs)}}}if(k.length){let oe=fa(new lr({color:new ye(.06,.078,.058),side:bt}),"embauba",{frag:[["#include <color_fragment>",`#include <color_fragment>
if(!gl_FrontFacing) diffuseColor.rgb=vec3(.15,.17,.145);`]]}),fe=new Xr(R,oe,k.length);k.forEach((We,$e)=>fe.setMatrixAt($e,We)),fe.frustumCulled=!1,n.add(fe);let ve=new Cs(.6,1,1,6,1,!0),Pe=fa(new lr({color:new ye(.13,.13,.115)}),"embauba-tronco"),Le=new Xr(ve,Pe,L.length);L.forEach((We,$e)=>Le.setMatrixAt($e,We)),Le.frustumCulled=!1,n.add(Le)}}e.push(["embaubas",performance.now()]);{let R=[],k=[];for(let L of P){let H=df(Math.floor(L.seed*1e6)),J=oi((H()-.5)*.12,1,(H()-.5)*.12).normalize(),$=oi(L.x,L.y,L.z).addScaledVector(J,L.h),ne=new Cs(.14,.2,L.h,6,1,!0);ne.translate(0,L.h/2,0),ne.applyQuaternion(new Rn().setFromUnitVectors(oi(0,1,0),J)),ne.translate(L.x,L.y,L.z),k.push(ne);let oe=13+Math.floor(H()*4);for(let fe=0;fe<oe;fe++){let ve=fe/oe*Math.PI*2+H()*.3,Pe=3.2+H()*1.4,Le=.9+H()*.5,We=1.6+H()*1.2,$e=.9,Dt=[],wt=[],vn=[],Tt=10;for(let Pt=0;Pt<=Tt;Pt++){let Wn=Pt/Tt,Un=Wn*Pe,ki=Le*Wn*Pe*.45-We*Wn*Wn*Pe*.35,Zs=.25;for(let Hi=0;Hi<=2;Hi++){let Qi=Hi-1,T=$e*(.2+.8*Math.sin(Math.PI*Math.min(1,Wn*1.15+.05)));if(Dt.push(Un,ki+Math.abs(Qi)*Zs*T,Qi*T),wt.push(Wn,Hi/2),Pt<Tt&&Hi<2){let G=Pt*3+Hi;vn.push(G,G+3,G+1,G+1,G+3,G+4)}}}let gt=new ht;gt.setAttribute("position",new Je(Dt,3)),gt.setAttribute("uv",new Je(wt,2)),gt.setIndex(vn),gt.computeVertexNormals(),gt.rotateY(ve),gt.translate($.x,$.y,$.z),R.push(gt)}}if(R.length){let L=fa(new lr({color:new ye(.055,.085,.028),map:o,alphaTest:.45,alphaToCoverage:!0,side:bt}),"palmeira");L.map.colorSpace=Sn;let H=new we(oA(R),L);H.frustumCulled=!1,n.add(H);let J=fa(new lr({color:new ye(.11,.105,.09)}),"estipe");n.add(new we(oA(k),J)),R.forEach($=>$.dispose()),k.forEach($=>$.dispose())}}e.push(["palmeiras",performance.now()]);let O=Va().loadAsync("modelos/pedras-musgo.glb").then(R=>{let k=[];R.scene.traverse($=>{$.isMesh&&k.push($)});let L=t?180:300,H=df(9127),J=Math.ceil(L/k.length);k.forEach(($,ne)=>{$.geometry.computeBoundingBox();let oe=$.geometry.boundingBox,fe=oe.getSize(oi()),ve=Math.max(fe.x,fe.y,fe.z),Pe=$.material.clone();Pe.side=is,fa(Pe,"pedra-"+ne,{frag:[["#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(.55,1.,smoothstep(-.3,.9,vW.y));`]]});let Le=new Xr($.geometry,Pe,J);for(let We=0;We<J;We++){let $e=-700+H()*1e3,Dt=H()<.45,wt=H()<.5?-1:1,vn=ds($e)+wt*(Dt?H()*3.8:3.6+H()*4.2),Tt=(Dt?.5+H()*1.4:.6+H()*2.2)*1.6/ve;D.position.set(vn,v(vn,$e)-fe.y*Tt*.25,$e),D.rotation.set((H()-.5)*.3,H()*6.28,(H()-.5)*.3),D.scale.set(Tt,Tt*(.7+H()*.3),Tt),D.updateMatrix(),Le.setMatrixAt(We,D.matrix)}Le.frustumCulled=!1,n.add(Le)})}).catch(R=>console.warn("pedras",R)),te=[],re=Va().loadAsync("modelos/rock-face-01.glb").then(R=>{let k=R.scene;k.name="Rock Face 01 \xB7 Poly Haven \xB7 CC0";let L=new Kn().setFromObject(k),H=L.getCenter(oi()),J=6;k.scale.setScalar(J);let $=oi(ds(-10)-30,v(ds(-10)-30,-10),-10);k.position.copy($).add(oi(-H.x*J,-L.min.y*J-2,-H.z*J)),k.traverse(fe=>{fe.isMesh&&(fa(fe.material,"rockface"),fe.material.roughness=.94)}),n.add(k);let ne=new Kn().setFromObject(k),oe=ne.getCenter(oi());te.push({id:"rock",name:"Rock Face 01 \xB7 Poly Haven \xB7 CC0",note:"Rocha gen\xE9rica do vale atual; n\xE3o \xE9 amostra K\u2013Pg.",target:oe,position:oe.clone().add(oi(34,17,44)),object:k})});e.push(["pedras",performance.now()]);let ue=new Ns(16772306,6);ue.castShadow=!0,ue.shadow.mapSize.set(t?1024:2048,t?1024:2048),Object.assign(ue.shadow.camera,{left:-.32,right:.32,top:.32,bottom:-.32,near:1,far:60}),ue.shadow.bias=-2e-4,ue.shadow.normalBias=.0015,n.add(ue,ue.target);let he=new lc(10796504,2898462,1.9);n.add(he);let ge=new I;function je(R,k,L){let H=k||wc(R);ue.position.copy(H).addScaledVector(Bi,30),ue.target.position.copy(H),ue.target.updateMatrixWorld(),Yl.uTime.value=R}je(75.2);let Te=null;function Re(R,k){if(Te){k.setEnv(Te.texture,.85),k.setSunDir(Bi);return}let L=new Mi,H=new we(new Ci(50,48,24),new ze({side:Xt,uniforms:{...Yl},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;${pf}void main(){vec3 d=normalize(vP);vec3 c=skyBase(d);
        if(d.y<.02){float k=smoothstep(.02,-.25,d.y);c=mix(c,vec3(.035,.05,.025),k);}
        gl_FragColor=vec4(c,1.);}`}));L.add(H);let J=new ac(R);Te=J.fromScene(L,0,.1,100),k.setEnv(Te.texture,.85),k.setSunDir(Bi),J.dispose(),H.geometry.dispose(),H.material.dispose()}return e.push(["luzes",performance.now()]),{scene:n,ready:Promise.all([Fe,O,re]),addedModels:te,update:je,attach:Re,perchA:wc(75.2),LIM:0,groundOffsets:[0,0],sun:ue,hemi:he,skyM:c,sunDir:Bi,perf:e.map(([R,k],L)=>[R,L?Math.round(k-e[L-1][1]):0]),stats:{trees:U.length,palms:P.length,cecropias:F.length,crownTris:de,externalTextures:0,externalModels:0}}}function qx(s){let e=Is(4242),t=new Bn(1,1),n=new ws;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let i=new Float32Array(s*4),r=new Float32Array(s*4);for(let c=0;c<s;c++){let l=e(),u=l<.55?0:l<.82?1:2,h=e()*Math.PI*2,f,d;u===0?(f=(35+e()*25)*Math.PI/180,d=.25+Math.pow(e(),1.6)*.9):u===1?(f=(62+e()*27)*Math.PI/180,d=.35+e()*.75):(f=(12+e()*20)*Math.PI/180,d=.7+e()*.6),i.set([h,f,d,u],c*4),r.set([.4+Math.pow(e(),2.5)*1.6,e(),e()*.25,e()],c*4)}n.setAttribute("aA",new Pn(i,4)),n.setAttribute("aB",new Pn(r,4)),n.instanceCount=s;let a=new ze({uniforms:{uTau:{value:0},uO:{value:0},uSite:{value:new I(0,1,0)},uE:{value:new I(1,0,0)},uN:{value:new I(0,0,1)},uSun:{value:new I(1,0,0)},uSize:{value:.0016},uFam:{value:new I(1,1,1)},uReach:{value:0}},transparent:!0,depthWrite:!1,vertexShader:`attribute vec4 aA,aB;uniform float uTau,uSize,uReach;uniform vec3 uSite,uE,uN,uFam;
      varying vec2 vUv;varying float vHeat;varying float vA;varying vec3 vW;varying float vSeed;varying float vFam;
      ${vt}
      void main(){
        float az=aA.x,el=aA.y,sp=aA.z,fam=aA.w;float t=max(uTau-aB.z*.35,0.);
        vec3 hz=uE*cos(az)+uN*sin(az);
        float gS=1.;float h,s;float life=1.;
        if(fam<.5){ // cortina: bal\xEDstica curta (o alcance real \xE9 de centenas a milhares de km)
          float v=sp*.06;h=v*sin(el)*t-.5*.042*t*t;s=v*cos(el)*t;if(h<0.){h=0.;life=0.;}
        } else if(fam<1.5){ // pluma: sobe desacelerando e se abre no alto
          float H=.012+.05*sp*sp*(.6+.8*aB.w);h=H*(1.-exp(-t*.85*sp));
          s=(.002+.01*sp*cos(el))*(1.-exp(-t*.6))+.0055*max(t-1.2,0.)*(.4+aB.w)*(h/H);
        } else { // longo alcance: sobe ao topo da atmosfera e corre pelo alto
          float H=.016+.012*aB.w;h=H*(1.-exp(-t*2.2));s=min(sp*.11*t,uReach*(.6+.5*aB.w));
        }
        float ang=s;vec3 up=uSite;vec3 p=(up*cos(ang)+hz*sin(ang))*(1.+h);
        vec4 mv=viewMatrix*vec4(p,1.);
        float size=uSize*aB.x*(fam<.5?.8:fam<1.5?(.9+t*.45):(.8+t*.25));
        mv.xy+=position.xy*size;
        vUv=uv;vHeat=exp(-t*(fam<.5?1.4:fam<1.5?.9:1.2))*(1.-aB.w*.4);vSeed=aB.y;vFam=fam;vW=p;
        float on=fam<.5?uFam.x:fam<1.5?uFam.y:uFam.z;
        vA=life*on*sst(0.,.04,t)*(fam<.5?(1.-sst(1.6,3.2,t)):fam<1.5?(1.-.75*sst(4.,9.,t)):(1.-sst(4.5,8.,t)));
        vA*=sst(.03,.11,distance(p,cameraPosition));
        gl_Position=projectionMatrix*mv;
      }`,fragmentShader:`uniform float uO;uniform vec3 uSun;varying vec2 vUv;varying float vHeat;varying float vA;varying vec3 vW;varying float vSeed;varying float vFam;
      ${vt}
      void main(){vec2 q=vUv-.5;float d=length(q)*2.;
        float soft=pow(max(1.-d,0.),vFam<.5?2.4:1.6);
        float lit=sst(-.2,.5,dot(normalize(vW),uSun));
        vec3 dust=mix(vec3(.16,.14,.12),vec3(.46,.41,.35),lit)*(.75+.5*vSeed);
        vec3 hot=vec3(1.,.55,.22)*1.3+vec3(1.,.9,.75)*vHeat*vHeat*.9;
        vec3 c=mix(dust,hot,clamp(vHeat*1.3,0.,1.));
        float a=soft*vA*uO*(vFam<.5?.05:vFam<1.5?.045:.07);
        gl_FragColor=vec4(fin(c),clamp(a,0.,1.));}`}),o=new we(n,a);return o.frustumCulled=!1,o.renderOrder=4,o.visible=!1,o}function Kx(s){let e=s([[0,"rgba(255,250,240,1)"],[.12,"rgba(255,232,200,.95)"],[.35,"rgba(255,170,100,.35)"],[1,"rgba(255,120,60,0)"]]),t=new ka(new Kr({map:e,blending:qn,depthWrite:!1,depthTest:!1,transparent:!0}));return t.renderOrder=6,t.visible=!1,t}function Xx(s=64){let e=new ht,t=new Float32Array(s*2*3),n=new Float32Array(s*2),i=new Float32Array(s*2);for(let o=0;o<s;o++)n[o*2]=n[o*2+1]=o/(s-1),i[o*2]=-1,i[o*2+1]=1;let r=[];for(let o=0;o<s-1;o++){let c=o*2;r.push(c,c+1,c+2,c+1,c+3,c+2)}e.setIndex(r),e.setAttribute("position",new St(t,3)),e.setAttribute("aT",new St(n,1)),e.setAttribute("aS",new St(i,1));let a=new we(e,new ze({uniforms:{uO:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,blending:qn,side:bt,vertexShader:"attribute float aT,aS;varying float vT;varying float vS;void main(){vT=aT;vS=aS;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`${vt}varying float vT;varying float vS;uniform float uO;void main(){float core=exp(-vS*vS*3.);
      vec3 c=mix(vec3(1.,.45,.2),vec3(1.,.92,.8),pow(vT,4.))*(.3+1.7*pow(vT,3.));
      gl_FragColor=vec4(fin(c*core),pow(vT,1.6)*uO*core);}`}));return a.frustumCulled=!1,a.renderOrder=5,a.userData.n=s,a}function Yx(){let s=new we(new Cs(1,1,1,64,120,!0),new ze({uniforms:{uP:{value:new I},uB:{value:new I},uX:{value:new I},uY:{value:new I},uR:{value:.003},uL:{value:0},uT:{value:0},uO:{value:0},uAge:{value:0},uSun:{value:new I(1,0,0)}},transparent:!0,depthWrite:!1,side:bt,vertexShader:`${vt}${rn}uniform vec3 uP,uB,uX,uY;uniform float uR,uL,uT,uAge;varying float vV;varying float vA;varying vec3 vW;varying vec3 vRn;
      void main(){float v=position.y+.5;float a=atan(position.z,position.x);vV=v;vA=a;
        float len=v*uL;float rad=uR*(.7+1.5*pow(sst(0.,.05,len),.6))*(1.+.35*uAge);  // revis\xE3o 8: depois do contato o rastro fica e se alarga
        rad*=1.+.46*(fbm3(vec3(cos(a)*1.5,sin(a)*1.5,len*260.-uT*1.5))-.5);
        vec3 rn=uX*cos(a)+uY*sin(a);vRn=rn;
        float env=sst(0.,.035,len);
        vec3 drift=(uX*sin(len*82.-uT*.8)+uY*sin(len*57.+uT*.5))*uR*env*.65;
        vec3 p=uP+uB*len+drift+rn*rad;vW=p;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,fragmentShader:`${vt}${rn}uniform float uO,uT,uL,uAge;uniform vec3 uSun;varying float vV;varying float vA;varying vec3 vW;varying vec3 vRn;
      void main(){vec3 V=normalize(cameraPosition-vW);float fr=abs(dot(vRn,V));
        float len=vV*uL;
        float tb=fbm(vec3(cos(vA)*2.,sin(vA)*2.,len*420.-uT*2.));
        float hot=exp(-len*400.)*exp(-uAge*4.);
        float dens=sst(.25,.75,tb)*pow(fr,1.6)*(1.-sst(.6,1.,vV))*sst(0.,.03,vV);
        float lit=.35+.65*clamp(dot(vRn,uSun)*.5+.5,0.,1.);
        vec3 smoke=vec3(.30,.30,.31)*lit;
        vec3 glow=mix(vec3(1.,.35,.08),vec3(1.,.86,.62),hot)*(.6+2.5*hot);
        vec3 c=mix(smoke,glow,clamp(hot*1.6,0.,1.));
        float a=dens*uO*mix(.16,.85,hot);
        gl_FragColor=vec4(fin(c),clamp(a,0.,1.));}`}));return s.renderOrder=5,s.frustumCulled=!1,s.visible=!1,s}function jx(s){let e=Is(2026),t=new ws;t.setAttribute("position",new Je([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0],3)),t.setIndex([0,1,2,0,2,3]);let n=new Float32Array(s*4);for(let r=0;r<s;r++){let a=e()*Math.PI*2;for(;e()<.22*(1+Math.cos(a-Math.PI/4))/2;)a=e()*Math.PI*2;n[r*4]=Math.pow(e(),1.7)*70,n[r*4+1]=a,n[r*4+2]=.75+e()*.5,n[r*4+3]=e()}t.setAttribute("aP",new Pn(n,4)),t.instanceCount=s;let i=new we(t,new ze({uniforms:{uUp:{value:new I},uE:{value:new I},uN:{value:new I},uT:{value:0},uO:{value:0},uW:{value:.7},uSun:{value:new I(1,0,0)},uAzDown:{value:Math.PI*5/4}},transparent:!0,depthWrite:!1,premultipliedAlpha:!0,vertexShader:`${vt}uniform vec3 uUp,uE,uN;uniform float uT,uW,uAzDown;attribute vec4 aP;varying float vA;varying float vHot;varying vec2 vUv;varying float vLit;uniform vec3 uSun;
      void main(){float t0=aP.x,az=aP.y,k=aP.z,sd=aP.w,dt=uT-t0;vUv=position.xy+vec2(.5,0.);
        float bias=1.+.18*cos(az-uAzDown);
        float v=(.45+5.5*exp(-t0/3.5))*k*bias;                     // km/s
        float el=radians(42.+8.*(sd-.5));float vh=v*cos(el),vz0=v*sin(el),gr=.0098;
        float r0=50.*(1.-exp(-t0/16.))*.92;                        // raio da cavidade no lan\xE7amento (km)
        float tl=2.*vz0/gr;                                        // tempo de voo at\xE9 cair
        vA=0.;vHot=0.;vLit=1.;
        if(dt<=0.||dt>tl){gl_Position=vec4(2.,2.,2.,1.);return;}
        float r=r0+vh*dt,z=vz0*dt-.5*gr*dt*dt;vec3 hz=uE*cos(az)+uN*sin(az);
        vec3 P=uUp*(1.+z/6371.)+hz*(r/6371.);
        vec3 vel=normalize(hz*vh+uUp*(vz0-gr*dt));float sp=length(vec2(vh,vz0-gr*dt));
        vec3 Vw=normalize(cameraPosition-P);vec3 side=normalize(cross(vel,Vw));
        float len=sp*(.25+.05*min(uT,60.))/6371.;                  // risco: dist\xE2ncia percorrida em \u22480,3 s (mais no tempo acelerado)
        float w=uW*(.6+.8*sd)/6371.;
        vec3 p=P-vel*len*(1.-position.y)+side*w*position.x;
        vHot=exp(-dt/1.2)*exp(-t0/3.);
        vA=sst(0.,.15,dt)*(1.-sst(tl*.88,tl,dt))*(.55+.45*sd);
        vLit=.45+.55*sst(-.2,.4,dot(normalize(P),uSun));
        gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,fragmentShader:`${vt}uniform float uO;varying float vA;varying float vHot;varying vec2 vUv;varying float vLit;
      void main(){float e=1.-abs(vUv.x*2.-1.);float a=vA*uO*e*e*pow(vUv.y,.6);
        vec3 dust=vec3(.17,.14,.11)*vLit;vec3 hot=mix(vec3(1.,.26,.04),vec3(1.,.6,.25),vHot);
        vec3 c=mix(dust,hot*1.3,clamp(vHot*1.2,0.,1.));
        gl_FragColor=vec4(fin(c)*a,a);}`}));return i.renderOrder=4,i.frustumCulled=!1,i.visible=!1,i}function DI(s){let e=Is(s),t=new Uint8Array(512),n=new Float32Array(768),i=Array.from({length:256},(c,l)=>l);for(let c=255;c>0;c--){let l=Math.floor(e()*(c+1));[i[c],i[l]]=[i[l],i[c]]}for(let c=0;c<512;c++)t[c]=i[c&255];for(let c=0;c<256;c++){let l,u,h,f;do l=e()*2-1,u=e()*2-1,h=e()*2-1,f=l*l+u*u+h*h;while(f>1||f<.01);f=Math.sqrt(f),n[c*3]=l/f,n[c*3+1]=u/f,n[c*3+2]=h/f}let r=c=>c*c*c*(c*(c*6-15)+10),a=(c,l,u)=>c+(l-c)*u,o=(c,l,u,h)=>{let f=c*3;return n[f]*l+n[f+1]*u+n[f+2]*h};return(c,l,u)=>{let h=Math.floor(c),f=Math.floor(l),d=Math.floor(u);c-=h,l-=f,u-=d;let g=h&255,A=f&255,m=d&255,p=r(c),_=r(l),x=r(u),v=t[g]+A,M=t[v]+m,b=t[v+1]+m,C=t[g+1]+A,S=t[C]+m,E=t[C+1]+m;return a(a(a(o(t[M],c,l,u),o(t[S],c-1,l,u),p),a(o(t[b],c,l-1,u),o(t[E],c-1,l-1,u),p),_),a(a(o(t[M+1],c,l,u-1),o(t[S+1],c-1,l,u-1),p),a(o(t[b+1],c,l-1,u-1),o(t[E+1],c-1,l-1,u-1),p),_),x)}}function Jx(s=1066,e=72){let t=DI(s),n=Is(s+7),i=(x,v,M,b,C=1)=>{let S=0,E=.5,y=C;for(let B=0;B<b;B++)S+=E*t(x*y+B*17.1,v*y+B*3.3,M*y-B*7.7),y*=2.03,E*=.5;return S},r=(x,v,M,b,C)=>{let S=0,E=.5,y=C;for(let B=0;B<b;B++)S+=E*(1-Math.abs(t(x*y-B*5.1,v*y+B*9.7,M*y+B*1.3))),y*=2.1,E*=.5;return S},a=()=>{let x=n()*2-1,v=n()*Math.PI*2,M=Math.sqrt(1-x*x);return[M*Math.cos(v),M*Math.sin(v),x]},o=[];for(let x=0;x<4;x++)o.push([a(),.45+n()*.35,.1+n()*.06,.25]);for(let x=0;x<26;x++)o.push([a(),.07+Math.pow(n(),1.5)*.17,.32,.3]);for(let x=0;x<60;x++)o.push([a(),.025+Math.pow(n(),2)*.04,.22,.2]);let c=new xh(1,e);c.deleteAttribute("normal"),c.deleteAttribute("uv");let l=Bv(c),u=l.attributes.position,h=new Float32Array(u.count),f=1,d=.8,g=.66,A=[];for(let x=0;x<7;x++){let v=a(),M=1/Math.sqrt((v[0]/f)**2+(v[1]/d)**2+(v[2]/g)**2);A.push([v,M*(.78+n()*.12)])}let m=(x,v,M)=>{let b=Math.max(0,Math.min(1,.5+.5*(v-x)/M));return v+(x-v)*b-M*b*(1-b)};for(let x=0;x<u.count;x++){let v=u.getX(x),M=u.getY(x),b=u.getZ(x),C=Math.hypot(v,M,b);v/=C,M/=C,b/=C;let S=i(v*1.1+3,M*1.1,b*1.1,3),E=i(v*1.1,M*1.1+7,b*1.1,3),y=i(v*1.1,M*1.1,b*1.1+11,3),U=1/Math.sqrt((v/f)**2+(M/d)**2+(b/g)**2)*(1+.26*i(v*.9+S*.8,M*.9+E*.8,b*.9+y*.8,4)+.07*i(v*2.6,M*2.6,b*2.6,3));for(let[F,Y]of A){let z=v*F[0]+M*F[1]+b*F[2];z>.05&&(U=m(U,Y/z,.05))}let P=0;for(let[F,Y,z,j]of o){let q=v*F[0]+M*F[1]+b*F[2];if(q<Math.cos(Y*1.6))continue;let ie=Math.acos(Math.min(1,q))/Y,pe=(ie<1?ie*ie-1:0)+j*Math.exp(-(((ie-1)/.28)**2));P+=pe*z*Y}U*=1+P,U*=1+.01*(r(v,M,b,3,4)-.6)+.004*i(v*12,M*12,b*12,2),u.setXYZ(x,v*U,M*U,b*U),h[x]=P}l.setAttribute("aCav",new St(h,1)),l.computeVertexNormals();let p=0;for(let x=0;x<u.count;x++)p+=Math.hypot(u.getX(x),u.getY(x),u.getZ(x));let _=u.count/p;return l.scale(_,_,_),l.computeBoundingSphere(),l}function Zx(){let s=new zn({color:16777215,roughness:.96,metalness:0}),e={uFront:{value:new I(0,0,-1)},uHeat:{value:0},uT:{value:0}};return s.userData.U=e,s.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aCav;varying float vCav;varying vec3 vOP;varying vec3 vWN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOP=position;vCav=aCav;vWN=normalize(mat3(modelMatrix)*objectNormal);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vCav;varying vec3 vOP;varying vec3 vWN;uniform vec3 uFront;uniform float uHeat,uT;${vt}${rn}
vec3 perturbN(vec3 sp,vec3 sn,vec2 dH){vec3 sx=dFdx(sp),sy=dFdy(sp);vec3 r1=cross(sy,sn),r2=cross(sn,sx);float det=dot(sx,r1)*(gl_FrontFacing?1.:-1.);
  vec3 g=abs(det)*sn-sign(det)*(dH.x*r1+dH.y*r2);float l=length(g);return l>1e-12?g/l:sn;}`).replace("#include <color_fragment>",`#include <color_fragment>
 float lf=fbm3(vOP*1.6),mf=fbm3(vOP*7.+4.);
 float gr=fbm3(vOP*26.);
 vec3 base=mix(vec3(.068,.063,.058),vec3(.098,.087,.075),lf);      // cinza-escuro a marrom-acinzentado
 base*=(.84+.32*mf)*(.9+.2*gr);                                     // gr\xE3o fino s\xF3 na cor
 base*=1.-.35*clamp(-vCav*6.,0.,1.);                                // fundos de cratera um pouco mais escuros
 base=mix(base,base*vec3(1.12,1.05,.95),clamp(vCav*10.,0.,1.));      // bordas expostas, mais claras
 diffuseColor.rgb=base;
 float hgt=.0028*fbm3(vOP*5.)+.0008*fbm3(vOP*13.);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 {float f=dot(normalize(vWN),uFront);
  float st=fbm3(vec3(vOP.xy*3.,vOP.z*3.)+uFront*uT*1.5);
  float face=sst(-.15,.95,f);
  float streak=sst(-.55,.1,f)*(1.-face)*sst(.5,.75,st);
  float T=uHeat*(face*(.75+.35*vnoise(vOP*8.))+streak*.45);
  vec3 bb=mix(vec3(.55,.06,.01),vec3(1.,.38,.08),sst(.15,.55,T));
  bb=mix(bb,vec3(1.,.82,.58),sst(.55,1.,T));
  totalEmissiveRadiance=bb*T*T*2.4;}`)},s}function $x(){let s=new we(new Ci(1,64,40),new ze({uniforms:{uO:{value:0},uT:{value:0}},transparent:!0,depthWrite:!1,blending:qn,vertexShader:"varying vec3 vO;varying vec3 vWN;varying vec3 vW;void main(){vO=position;vWN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`${vt}${rn}uniform float uO,uT;varying vec3 vO;varying vec3 vWN;varying vec3 vW;
      void main(){vec3 V=normalize(cameraPosition-vW);float f=vO.z;  // z = sentido do movimento
        // revis\xE3o 10: envelope de ar incandescente (plasma) \xE0 frente e em volta do corpo, sem contorno de casca:
        // mais claro no centro e no nariz, se desfaz para tr\xE1s
        float mu=abs(dot(normalize(vWN),V));
        float core=pow(mu,1.6);
        float nose=sst(-.5,1.,f);
        float turb=.7+.6*fbm3(vec3(vO.xy*4.,vO.z*3.-uT*9.));
        float g=core*nose*nose*nose*turb;
        vec3 c=mix(vec3(1.,.42,.12),vec3(1.,.9,.78),sst(.3,.9,core*nose));
        gl_FragColor=vec4(fin(c*g*uO*1.5),1.);}`}));return s.renderOrder=6,s.frustumCulled=!1,s.visible=!1,s}var FI=6371,an=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)};function eb(s){let e=Math.max(s,0),t=s>=0?1:0,n=1-Math.exp(-e/16),i=3.5*(1-Math.exp(-e/.22))*Math.exp(-e/8),r=50*n+i,a=r+40*an(50,240,e),o=(30*n+i*.4)*(1-.8*an(50,200,e)),c=20*an(40,110,e)*(1-an(110,210,e)),l=3.5*an(120,220,e),u=(1.5+5*an(3,60,e))*(1-.4*an(120,300,e)),h=t*(.3+.7*Math.exp(-e/50)),f=e<60?r:a+(e-60)*.3,d=140*(1-Math.exp(-e/40))*(1-.8*an(140,420,e)),g=t*an(.2,1.5,e)*(1-an(280,520,e)),A=8+44*(1-Math.exp(-e/12))+140*an(200,1800,e),m=40*(1-Math.exp(-e/3))+150*(1-Math.exp(-e/40))+340*Math.pow(an(30,300,e),.8)+700*an(300,1800,e),p=A*1.3+600*an(15,400,e)+600*an(400,1800,e),_=t*(4*Math.exp(-e/.3)+1.4*Math.exp(-e/30)+.3*Math.exp(-e/240)),x=15+9*Math.pow(e,.75);return{on:t,t:e,Rt:r,Rc:a,D:o,U:c,ring:l,rim:u,melt:h,cB:f,cH:d,cO:g,pR:A,pH:m,pCap:p,pHot:Math.exp(-e/35),pO:t*an(0,.3,e)*(.4+.6*an(4,30,e)),fireL:_,fireH:Math.min(6+.3*m,80),flash:t*Math.exp(-e/.12),jet:t*Math.exp(-e/.2)*an(0,.03,e),jetL:10+45*Math.sqrt(e),shockR:x,shockA:t*an(.3,2,e)*(1-an(150,400,e)),clearR:.65*x,blanketR:a*(1+2.2*an(30,300,e)),blanketA:t*an(20,260,e)}}var At=1/FI,Af=`uniform vec3 uUp,uE,uN;
  vec3 tang(float az){return uE*cos(az)+uN*sin(az);}
  vec3 onSphere(float ang,float az,float h){return (uUp*cos(ang)+tang(az)*sin(ang))*(1.+h);}`,mf=()=>({uUp:{value:new I},uE:{value:new I},uN:{value:new I}});function tb(s,e,t,n){let i=new ht,r=[],a=[];for(let o=0;o<=s;o++)for(let c=0;c<=e;c++)r.push(t+(n-t)*Math.pow(o/s,1.15),c/e*Math.PI*2,0);for(let o=0;o<s;o++)for(let c=0;c<e;c++){let l=o*(e+1)+c,u=l+e+1;a.push(l,u,l+1,u,u+1,l+1)}return i.setAttribute("position",new Je(r,3)),i.setIndex(a),i}function nb(){let s=new we(tb(56,160,0,1.45),new ze({uniforms:{...mf(),uRc:{value:1},uD:{value:0},uU:{value:0},uRing:{value:0},uRim:{value:0},uMelt:{value:0},uAzUp:{value:0},uSun:{value:new I(1,0,0)},uFireL:{value:0},uFireH:{value:0},uT:{value:0},uGlow:{value:1},uFade:{value:1},uReview:{value:0},uDim:{value:0},uFar:{value:0}},side:bt,vertexShader:`${vt}${rn}${Af}uniform float uRc,uD,uU,uRing,uRim,uAzUp,uReview,uT;varying vec3 vW;varying vec3 vNw;varying float vRho;varying float vDep;varying vec2 vP;
      float H(float r,float az){float cu=cos(az-uAzUp);
        float bowl=r<1.?-uD*(1.-r*r)*(1.+.14*r*cu):0.;                       // mais fundo a montante
        float up=uU*exp(-(r*r+.0036-.12*r*cu)/.05);                          // soerguimento central, nasce a montante
        float pk=uRing*exp(-pow((r-.52)/.07,2.))*(.8+.4*vnoise(vec3(cos(az)*6.,sin(az)*6.,1.)));
        float rim=uRim*(1.-.3*cu)*exp(-pow((r-1.)/.17,2.));                  // borda mais alta a jusante
        float out_=r>1.?uRim*.25*exp(-(r-1.)/.35):0.;
        float n=(fbm3(vec3(cos(az)*r*7.,sin(az)*r*7.,2.))-.5)*(.15*uD+.6);
        return bowl+up+pk+rim+out_+n*(1.-.6*sst(1.,1.4,r))*mix(1.,sst(0.,3.,uT),uReview);}
      vec3 P(float r,float az){return onSphere(r*uRc*${At.toFixed(9)},az,(H(r,az)+.05)*${At.toFixed(9)});}
      void main(){float r=position.x,az=position.y;vRho=r;vP=vec2(r,az);
        vec3 p=P(r,az);float e=.01;
        vec3 dr=P(r+e,az)-P(max(r-e,0.),az),da=P(r,az+e)-P(r,az-e);
        vec3 cr=cross(dr,da);vec3 nn=normalize(cr);if(uReview>0.&&dot(cr,cr)<1e-20)nn=uUp;if(dot(nn,uUp)<0.)nn=-nn;vNw=nn;
        vDep=H(r,az);vW=p;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,fragmentShader:`${vt}${rn}uniform vec3 uUp,uSun;uniform float uD,uMelt,uFireL,uFireH,uT,uGlow,uRc,uFade,uReview,uDim,uFar;varying vec3 vW;varying vec3 vNw;varying float vRho;varying float vDep;varying vec2 vP;
      void main(){vec3 N=normalize(vNw);
        float n1=fbm3(vec3(cos(vP.y)*vP.x*9.,sin(vP.y)*vP.x*9.,0.)),n2=fbm3(vec3(cos(vP.y)*vP.x*40.,sin(vP.y)*vP.x*40.,3.));
        vec3 rock=mix(vec3(.050,.044,.038),vec3(.11,.095,.075),n1)*(.8+.4*n2);  // carbonatos e embasamento triturados (escuros na sombra)
        rock=mix(rock,vec3(.06,.05,.042),sst(1.,1.3,vRho));
        float sun=max(dot(N,uSun),0.)*sst(-.05,.15,dot(normalize(vW),uSun));
        vec3 lp=uUp*(1.+uFireH*${At.toFixed(9)});vec3 L=lp-vW;float dl=length(L);
        float fire=uFireL*max(dot(N,L/dl),0.)*(3.9e-5/(dl*dl+3.9e-5));
        // 01/11: a cavidade recebe a mesma perda de luz da camada de poeira que a Terra (uDim) e, vista de longe (uFar),
        // passa a ter o albedo do manto de eje\xE7\xE3o em volta: antes ela ficava com sol pleno e virava um disco claro no mar
        rock=mix(rock,vec3(.034,.027,.021)*(.85+.3*n1),uFar);
        vec3 col=rock*(3.*sun*(1.-uDim)*vec3(1.,.95,.88)+.18*(1.-.6*uDim)*vec3(.5,.6,.75)+fire*vec3(1.,.42,.16)*.55);
        // rocha fundida no fundo: brilha conforme a profundidade e esfria com o tempo
        float deep=clamp(-vDep/max(uD,1.),0.,1.);
        float T=uMelt*uGlow*(sst(.72,1.,deep)*(.5+.6*n1)+.12*sst(.65,.8,n2)*sst(.45,.8,deep));
        vec3 bb=mix(vec3(.5,.06,.01),vec3(1.,.4,.1),sst(.2,.6,T));bb=mix(bb,vec3(1.,.82,.6),sst(.7,1.2,T));
        col+=bb*T*T*1.6*(1.-.8*uFar);
        float edge=1.-sst(1.08,1.42,vRho+.08*(n1-.5));                     // manto externo se funde ao ch\xE3o
        edge*=mix(1.,1.-sst(.99,1.16,vRho),uReview);
        gl_FragColor=vec4(fin(col),edge*uFade);}`}));return s.material.transparent=!0,s.renderOrder=1,s.frustumCulled=!1,s.visible=!1,s}function ib(){let s=new we(tb(30,40,0,1),new ze({uniforms:{...mf(),uL:{value:0},uO:{value:0},uAzDown:{value:0},uT:{value:0}},transparent:!0,depthWrite:!1,blending:qn,side:bt,vertexShader:`${vt}${Af}uniform float uL,uAzDown;varying vec2 vQ;
      void main(){float u=position.x;float w=position.y/6.2831853*2.-1.;vQ=vec2(u,w);
        float az=uAzDown+w*.42;float L=uL*${At.toFixed(9)};
        vec3 p=onSphere(u*L*.98,az,u*L*.16+.4*${At.toFixed(9)});gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,fragmentShader:`${vt}${rn}uniform float uO,uT;varying vec2 vQ;
      void main(){float u=vQ.x,w=vQ.y;float st=.6+.6*fbm3(vec3(w*14.,u*3.-uT*4.,1.));
        float a=pow(1.-u,1.4)*(1.-w*w)*st*sst(0.,.08,u+.02);
        vec3 c=mix(vec3(1.,.66,.36),vec3(1.,.3,.07),sst(.05,.6,u));
        gl_FragColor=vec4(fin(c*a*uO*2.),1.);}`}));return s.renderOrder=6,s.frustumCulled=!1,s.visible=!1,s}function sb(){let s=new we(new Cs(1,1,1,200,48,!0),new ze({uniforms:{...mf(),uB:{value:0},uH:{value:0},uO:{value:0},uT:{value:0},uAzUp:{value:0},uSun:{value:new I(1,0,0)},uFireL:{value:0},uReview:{value:0},uRim:{value:0}},transparent:!0,depthWrite:!1,side:bt,vertexShader:`${vt}${rn}${Af}uniform float uB,uH,uT,uAzUp,uReview,uRim;varying float vV;varying float vAz;varying vec3 vW;varying vec3 vRn;varying vec3 vTz;
      void main(){float v=position.y+.5;float az=atan(position.z,position.x);vV=v;vAz=az;vTz=tang(az);
        float hf=(1.-.16*cos(az-uAzUp))*(.8+.4*fbm3(vec3(cos(az)*2.2,sin(az)*2.2,7.)));
        float wob=1.+.12*(fbm3(vec3(cos(az)*4.,sin(az)*4.,v*2.+uT*.01))-.5);
        float H=uH*hf;float r=(uB+v*H*.95)*wob;float h=v*H*(1.-.18*v);
        if(uReview>0.){
          float falling=sst(35.,160.,uT);
          float rr=(uB+v*H*(1.05+.65*falling))*(1.+(wob-1.)*v);
          float hh=mix(v*H*(1.-.18*v),1.15*H*v*(1.-v),falling);
          hh+=uRim*(1.-.3*cos(az-uAzUp))*(1.-v)*(1.-sst(40.,80.,uT));
          r=mix(r,rr,uReview);h=mix(h,hh,uReview);
        }
        vec3 p=onSphere(r*${At.toFixed(9)},az,h*${At.toFixed(9)});vW=p;vRn=normalize(tang(az)*.7+uUp*.7);
        gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,fragmentShader:`${vt}${rn}uniform float uO,uT,uFireL,uReview;uniform vec3 uSun,uUp;varying float vV;varying float vAz;varying vec3 vW;varying vec3 vRn;varying vec3 vTz;
      void main(){
        #ifdef SIDE
        vec3 ch=cameraPosition-uUp*dot(cameraPosition,uUp);if(dot(vTz,ch)*SIDE<0.)discard;
        #endif
        vec3 rq=vec3(cos(vAz)*7.,sin(vAz)*7.,vV*1.6-uT*.004);
        float ray=fbm(rq)*.55+.30*fbm(vec3(cos(vAz)*30.,sin(vAz)*30.,vV*3.))+.15*fbm3(vec3(cos(vAz)*16.,sin(vAz)*16.,vV*9.));
        float clump=fbm3(vec3(cos(vAz)*12.,sin(vAz)*12.,vV*7.-uT*.01));   // blocos e grumos ao longo da l\xE2mina
        float top=1.-sst(.45+.4*ray,1.,vV);                          // borda de cima rasgada
        float dens=sst(.28,.62,ray*.75+clump*.35)*top*pow(1.-vV,.6);
        float lit=.22+.78*clamp(dot(vRn,uSun)*.6+.45,0.,1.);
        vec3 dust=mix(vec3(.11,.10,.085),vec3(.38,.34,.28),sst(.3,.75,ray))*lit*(.8+.4*clump);
        float steam=exp(-uT/12.)*pow(1.-vV,2.)*.35;                      // vapor d'\xE1gua do mar raso, s\xF3 no come\xE7o
        dust=mix(dust,vec3(.72,.74,.76)*lit,steam);
        float hot=exp(-uT/4.)*exp(-vV*5.);
        vec3 c=dust+vec3(1.,.42,.12)*(hot*1.2+uFireL*.05*(1.-vV));
        float a=uO*clamp(dens*1.2,0.,1.)*sst(0.,.04,vV+.01);
        c=mix(c,c*.38,uReview);
        a*=mix(1.,.78,uReview);
        gl_FragColor=vec4(fin(c),clamp(a,0.,.92));}`}));return s.renderOrder=4,s.frustumCulled=!1,s.visible=!1,s}function rb(){let s={...mf(),uR:{value:0},uH:{value:0},uCap:{value:0},uD:{value:0},uHot:{value:0},uO:{value:0},uT:{value:0},uSun:{value:new I(1,0,0)}},e=new Cs(1,1,1,144,120,!0),t=(i,r,a)=>new ze({uniforms:s,transparent:!0,depthWrite:!1,side:bt,vertexShader:`${vt}${rn}${Af}uniform float uR,uH,uCap,uD,uT;varying float vV;varying vec3 vW;varying vec3 vNw;varying vec3 vL;
      const float K=${i.toFixed(3)};const vec3 SEED=vec3(${r}.,${r*3}.,${r*7}.);
      // perfil (raio, altura) em km para v\u2208[0,1]: coluna que sobe do fundo da cavidade e se abre para cima (o vapor se
      // expande ao subir e, acima da atmosfera, se espalha), coroada por uma calota arredondada e achatada
      vec2 prof(float v){float h0=-uD*.6;float Ht=max(uH,uR*1.2);
        float vc=min(v,.78)/.78;
        float rc=uR*(.5+.5*sqrt(vc))+max(uCap-uR,0.)*pow(vc,1.8);   // nasce estreita no fundo da cavidade
        float hc=h0+vc*(Ht*.86-h0);
        float th=max(v-.78,0.)/.22*1.5707963;
        return vec2(rc*cos(th),hc+rc*.30*sin(th)+Ht*.04*(1.-cos(th)));}
      void main(){float v=clamp(position.y+.5,0.,1.);float az=atan(position.z,position.x);vV=v;
        vec2 rh=prof(v);float sc=max(rh.x,40.);
        vec3 L0=vec3(cos(az)*rh.x,sin(az)*rh.x,rh.y);
        vec3 q=L0/(sc*.55+uR*.4)+SEED+vec3(0.,0.,-uT*.004);
        float n=fbm(q)-.5,n2=fbm3(q*2.7+5.)-.5;
        float r=rh.x*K*(1.+.75*n+.25*n2);
        float h=rh.y+rh.x*(.22*n+.08*n2)*sst(.5,1.,v);
        vL=vec3(cos(az)*r,sin(az)*r,h);
        vec3 p=onSphere(r*${At.toFixed(9)},az,h*${At.toFixed(9)});vW=p;
        vec2 a=prof(min(v+.02,1.)),b=prof(max(v-.02,0.));vec2 d=a-b;
        vNw=normalize(tang(az)*d.y-uUp*d.x+uUp*1e-4);
        gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,fragmentShader:`${vt}${rn}uniform float uHot,uO,uT,uR,uCap;uniform vec3 uSun,uUp,uE,uN;varying float vV;varying vec3 vW;varying vec3 vNw;varying vec3 vL;
      const float K=${i.toFixed(3)};const float AM=${a.toFixed(3)};const vec3 SEED=vec3(${r}.,${r*3}.,${r*7}.);
      void main(){vec3 V=normalize(cameraPosition-vW);vec3 N=normalize(vNw);
        float sc=max(uCap*.35+uR*.6,30.);
        vec3 q=vL/sc*1.6+SEED*1.3+vec3(0.,0.,-uT*.006);
        float b=fbm(q);
        vec3 sL=vec3(dot(uSun,uE),dot(uSun,uN),dot(uSun,uUp));
        float bs=fbm(q+sL*.14);                                        // amostra deslocada para o Sol: autossombra dos tufos
        float e=fbm3(q*3.1+11.);                                     // eros\xE3o fina da borda
        float macro=clamp(dot(N,uSun)*.55+.45,0.,1.)*sst(-.05,.2,dot(normalize(vW),uSun));
        float lit=.07+.93*macro*clamp(.55+(b-bs)*5.,0.,1.2);
        vec3 dust=mix(vec3(.13,.115,.10),vec3(.47,.43,.37),sst(.25,.8,b))*lit;
        // brilho nas frestas: a casca de fuligem escurece por fora e o vapor incandescente aparece entre os tufos e na base
        float gap=pow(1.-b,2.)*1.6+exp(-vV*3.)*.45;
        float hot=uHot*exp(-vV*1.8)*gap*(1.15-K*.5);
        vec3 bb=mix(vec3(.55,.10,.02),vec3(1.,.50,.15),sst(.3,1.,hot));bb=mix(bb,vec3(1.,.84,.6),sst(1.,1.8,hot));
        vec3 c=dust*(1.-.45*uHot)+bb*hot*1.05;
        float fr=abs(dot(N,V));
        float body=sst(.30-.16*uHot,.62-.10*uHot,b+.35*(e-.5));                          // tufos: o ru\xEDdo recorta a casca
        float sil=sst(0.,.45,fr+.5*(b-.5));                            // perfil suave, sem contorno de casca
        float thin=1.-.65*sst(30.,300.,uT)*pow(vV,1.3);                // o alto fica ralo \xE0 medida que se espalha
        float a=uO*AM*body*sil*thin*(1.-sst(.86,1.,vV)*.6);
        gl_FragColor=vec4(fin(c),clamp(a,0.,.9));}`}),n=new we(e,t(1,1,.62));for(let[i,r,a]of[[.72,4,.75],[1.2,9,.38]]){let o=new we(e,t(i,r,a));o.renderOrder=3,o.frustumCulled=!1,n.add(o)}return n.renderOrder=3,n.frustumCulled=!1,n.visible=!1,n}var gf=1/6371,PI=12,jl=110;function ab(s,e,t){let n=e.clone().addScaledVector(s,-e.dot(s)).normalize(),i=new I().crossVectors(n,s).normalize(),r=new I(0,-1,0).addScaledVector(s,s.y).normalize();i.dot(r)<0&&i.negate();let a=new Tn;a.name="Chicxulub-corte-interpretativo";let o={uCut:{value:0},uSun:{value:t}},c=(C,S,E)=>s.clone().addScaledVector(n,C*gf).addScaledVector(i,S*gf).normalize().multiplyScalar(1-E*PI*gf),l=C=>.72+1.6*Math.exp(-Math.pow(C/33,2))-.18*Math.exp(-Math.pow((Math.abs(C)-48)/11,2)),u=[C=>0,l,C=>l(C)+.18+.48*Math.exp(-Math.pow(C/38,2)),C=>4],h=[12760986,8808268,5327685],f=C=>new ze({uniforms:{...o,color:{value:new ye(C)}},side:bt,vertexShader:"varying vec3 vP;varying vec3 vN;varying vec2 vUv;void main(){vP=position;vN=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uCut;uniform vec3 color,uSun;varying vec3 vP,vN;varying vec2 vUv;void main(){if(abs(vUv.x)>uCut)discard;float fine=.96+.04*sin(vUv.x*510.+sin(vUv.y*150.));float light=.5+.55*abs(dot(normalize(vN),uSun));gl_FragColor=vec4(color*fine*light,1.);}"});for(let C=0;C<3;C++){let S=[],E=[],y=[];for(let U=0;U<=160;U++){let P=-jl+2*jl*U/160;for(let F of[u[C](P),u[C+1](P)]){let Y=c(P,0,F);S.push(Y.x,Y.y,Y.z),E.push(P/jl,F/4)}if(U<160){let F=U*2;y.push(F,F+1,F+2,F+1,F+3,F+2)}}let B=new ht;B.setAttribute("position",new Je(S,3)),B.setAttribute("uv",new Je(E,2)),B.setIndex(y),B.computeVertexNormals(),a.add(new we(B,f(h[C])))}let d=[],g=[],A=[];for(let C=0;C<=80;C++){let S=Math.PI*C/80;for(let E of[0,jl]){let y=E*Math.cos(S),B=E*Math.sin(S),U=c(y,B,4);d.push(U.x,U.y,U.z),g.push(E/jl,1)}if(C<80){let E=C*2;A.push(E,E+1,E+3,E,E+3,E+2)}}let m=new ht;m.setAttribute("position",new Je(d,3)),m.setAttribute("uv",new Je(g,2)),m.setIndex(A),m.computeVertexNormals(),a.add(new we(m,f(2633005)));let p=Math.atan2(e.dot(n),e.dot(s))/gf,_=c(p,0,0),x=c(p,0,1.33469),v=new Os(new ht().setFromPoints([_,x]),new Yr({color:8315092,transparent:!0,depthTest:!1}));v.renderOrder=8,a.add(v);let M=new we(new Ci(16e-5,12,8),new Qn({color:8315092,depthTest:!1}));M.position.copy(x),M.renderOrder=8,a.add(M);let b=c(p,0,.65);return{root:a,axis:n,front:i,anchor:b,U:o,update(C){a.visible=C>.001,o.uCut.value=C,v.material.opacity=ot.smoothstep(C,.65,1),M.visible=C>.9},camera(C){return{position:s.clone().multiplyScalar(1.039).addScaledVector(i,C?.082:.07).addScaledVector(n,-.009),target:s.clone().multiplyScalar(.9985)}}}}var LI=2.293577981651376,ub=.85,UI=240/(Math.exp(ub*(22.8-17))-1);function vf(s){if(s<10.4&&(s=10.4),s<14.6)return-5.8-LI*(Math.exp(1.09*(14.6-s))-1);if(s<16.6)return-5.8+2.5*(s-14.6);if(s<17){let e=s-16.6;return-.8+2.5*e-1.25*e*e}return s<22.8?UI*(Math.exp(ub*(s-17))-1):240}var ob={land:[[11,[0,250,-1400],12500,16,40,30],[12.5,[0,220,330],2700,15,21,30],[14,[0,70,95],900,12,11,30],[15.6,[0,28,60],310,10,4,32],[17,[0,12,26],238,8,2.5,33],[18,[0,8,40],265,8,3.5,34],[19.5,[0,0,95],620,10,8,34],[21,[0,-20,175],1300,12,17,34],[22.8,[0,-40,215],2e3,14,25,34]],port:[[11,[0,250,-1400],12500,16,40,30],[12.5,[0,220,330],2900,15,21,30],[14,[0,70,80],1e3,12,11,30],[15.6,[0,28,46],360,10,4,32],[17,[0,12,12],280,8,2.5,33],[18,[0,8,26],310,8,3.5,34],[19.5,[0,0,80],700,10,8,34],[21,[0,-20,150],1450,12,17,34],[22.8,[0,-40,190],2200,14,25,34]]};function Jl(s,e){let t=s.length,n=[],i=new Array(t).fill(0);for(let r=0;r<t-1;r++)n.push((e[r+1]-e[r])/(s[r+1]-s[r]));for(let r=1;r<t-1;r++)i[r]=n[r-1]*n[r]<=0?0:3*(s[r+1]-s[r-1])/((2*s[r+1]-s[r]-s[r-1])/n[r-1]+(s[r+1]+s[r]-2*s[r-1])/n[r]);return r=>{if(r<=s[0])return e[0];if(r>=s[t-1])return e[t-1];let a=0;for(;r>s[a+1];)a++;let o=s[a+1]-s[a],c=(r-s[a])/o,l=c*c,u=l*c;return(2*u-3*l+1)*e[a]+(u-2*l+c)*o*i[a]+(-2*u+3*l)*e[a+1]+(u-l)*o*i[a+1]}}function cb(s){let e=s.map(o=>o[0]),t=[0,1,2].map(o=>Jl(e,s.map(c=>c[1][o]))),n=Jl(e,s.map(o=>Math.log(o[2]))),i=Jl(e,s.map(o=>o[3])),r=Jl(e,s.map(o=>o[4])),a=Jl(e,s.map(o=>o[5]));return o=>({tgt:[t[0](o),t[1](o),t[2](o)],d:Math.exp(n(o)),az:i(o),el:r(o),fov:a(o)})}var OI={land:cb(ob.land),port:cb(ob.port)},lb=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},NI={land:[.06,-.09],port:[.08,-.03]};function ng(s,e){let t=OI[e?"port":"land"](s),n=Math.PI/180,i=lb(12.5,12.9,s)*(1-lb(16.95,17.35,s));if(i>0){let o=NI[e?"port":"land"],c=o[0]+(o[1]-o[0])*(s-12.5)/4.5,l=4.25-17.32*vf(s);t.tgt[2]+=i*(l-c*t.d-t.tgt[2])}let r=t.az*n,a=t.el*n;return{pos:[t.tgt[0]+t.d*Math.cos(a)*Math.cos(r),t.tgt[1]+t.d*Math.cos(a)*Math.sin(r),t.tgt[2]+t.d*Math.sin(a)],tgt:t.tgt,fov:t.fov}}var hb=11,_f=22.8;function fb(s=64){let e=new Uint8Array(s*s*s*2),t=7,n=()=>(t=t*16807%2147483647,t/2147483647),i=h=>{let f=new Float32Array(h*h*h);for(let d=0;d<f.length;d++)f[d]=n();return f},r=[8,16,32].map(h=>({c:h,g:i(h)})),a=(h,f,d,g)=>{let A=h.c,m=f*A,p=d*A,_=g*A,x=Math.floor(m),v=Math.floor(p),M=Math.floor(_),b=m-x,C=p-v,S=_-M;b=b*b*(3-2*b),C=C*C*(3-2*C),S=S*S*(3-2*S);let E=(B,U,P)=>h.g[(B%A+A)%A+A*((U%A+A)%A+A*((P%A+A)%A))],y=(B,U,P)=>B+(U-B)*P;return y(y(y(E(x,v,M),E(x+1,v,M),b),y(E(x,v+1,M),E(x+1,v+1,M),b),C),y(y(E(x,v,M+1),E(x+1,v,M+1),b),y(E(x,v+1,M+1),E(x+1,v+1,M+1),b),C),S)},o=[5,10].map(h=>{let f=new Float32Array(h*h*h*3);for(let d=0;d<f.length;d++)f[d]=n();return{c:h,p:f}}),c=(h,f,d,g)=>{let A=h.c,m=f*A,p=d*A,_=g*A,x=Math.floor(m),v=Math.floor(p),M=Math.floor(_),b=9;for(let C=-1;C<=1;C++)for(let S=-1;S<=1;S++)for(let E=-1;E<=1;E++){let y=x+C,B=v+S,U=M+E,P=3*((y%A+A)%A+A*((B%A+A)%A+A*((U%A+A)%A))),F=y+h.p[P]-m,Y=B+h.p[P+1]-p,z=U+h.p[P+2]-_,j=F*F+Y*Y+z*z;j<b&&(b=j)}return Math.sqrt(b)},l=0;for(let h=0;h<s;h++)for(let f=0;f<s;f++)for(let d=0;d<s;d++){let g=d/s,A=f/s,m=h/s,p=.55*a(r[0],g,A,m)+.3*a(r[1],g,A,m)+.15*a(r[2],g,A,m),_=.68*(1-Math.min(1,c(o[0],g,A,m)/.95))+.32*(1-Math.min(1,c(o[1],g,A,m)/.95));e[l++]=Math.round(Math.min(1,Math.max(0,(p-.2)/.6))*255),e[l++]=Math.round(Math.min(1,Math.max(0,_*1.25))*255)}let u=new Ua(e,s,s,s);return u.format=rs,u.type=jt,u.minFilter=u.magFilter=Kt,u.wrapS=u.wrapT=u.wrapR=kn,u.unpackAlignment=1,u.needsUpdate=!0,u}var kI="float sst(float a,float b,float x){float t=clamp((x-a)/(b-a),0.,1.);return t*t*(3.-2.*t);}";function db(s=!1){let e=fb(),t=f=>({value:f}),n={uUp:t(new I),uE:t(new I),uN:t(new I),uSun:t(new I(1,0,0)),uNoise:t(e),uDR:t(new Me(-Math.SQRT1_2,-Math.SQRT1_2)),uBox:t(new I(10,-5,20)),uFoc:t(new ut(0,0,0,10)),uT:t(0),uO:t(1),uGlow:t(1),uLit:t(0),uFb:t(0),uRh:t(5),uRv:t(3),uZc:t(0),uFbHot:t(1),uCoolA:t(1),uCoolB:t(1.4),uDen:t(6),uSg:t(0),uSr:t(10),uSw:t(3),uSh:t(4),uSgHot:t(0),uCu:t(0),uCb:t(5),uCh:t(10),uCw:t(3),uCuHot:t(0),uCden:t(3),uPa:t(0),uPr:t(100),uPh:t(20),uPz:t(0),uPhole:t(0),uPden:t(2),uVe:t(0),uVr:t(100),uVh:t(150),uVt:t(20)},i=new ze({uniforms:n,side:Xt,depthTest:!1,depthWrite:!1,transparent:!1,blending:gi,vertexShader:`uniform vec3 uUp,uE,uN,uBox;varying vec3 vW;
      void main(){vec3 p=vec3(position.xy*uBox.x*2.,mix(uBox.y,uBox.z,position.z+.5));
        vW=uUp+(uE*p.x+uN*p.y+uUp*p.z)/6371.;gl_Position=projectionMatrix*viewMatrix*vec4(vW,1.);}`,fragmentShader:`precision highp sampler3D;
      ${kI}
      uniform vec3 uUp,uE,uN,uSun,uBox;uniform vec2 uDR;uniform vec4 uFoc;uniform sampler3D uNoise;
      uniform float uT,uO,uGlow,uLit,uFb,uRh,uRv,uZc,uFbHot,uCoolA,uCoolB,uDen,uSg,uSr,uSw,uSh,uSgHot,
        uCu,uCb,uCh,uCw,uCuHot,uCden,uPa,uPr,uPh,uPz,uPhole,uPden,uVe,uVr,uVh,uVt;
      varying vec3 vW;
      // Fixed-resolution density lattice: ray steps diverge per pixel, so implicit
      // screen derivatives are undefined here. Explicit LOD also matches the no-mipmap noise.
      vec2 nz(vec3 q){return textureLod(uNoise,q,0.).rg;}
      // extin\xE7\xE3o por km (x) e temperatura relativa (y); p em km (leste, norte, cima), origem no ponto de contato
      vec3 field(vec3 p,bool detail){
        float ground=-dot(p.xy,p.xy)/12742.;
        float h=p.z-ground;vec3 g=vec3(p.xy,h);
        float ext=0.,hot=0.,vapor=0.;
        // bola de fogo: vapor de rocha e de \xE1gua; nasce no contato, mais larga a jusante (sudoeste), em tufos
        // (01/11: a base fica no contato; s\xF3 o alto se inclina a jusante)
        if(uFb>.001){
          vec3 d=g-vec3(uDR*.22*uRh*sst(0.,uZc+uRv*1.6,h),uZc);float al=dot(d.xy,uDR);vec2 sd=d.xy-uDR*al;
          float e=length(vec3(length(sd)/uRh,al/(uRh*(al>0.?1.25:.9)),d.z/uRv));
          if(e<1.4){
            vec3 q=g/(uRh*2.4)+vec3(.13,.71,.37)+vec3(0.,0.,-uT*.004);
            vec2 n=nz(q);float b=n.y*.65+n.x*.35;
            float b2=nz(q*2.3+vec3(.41,.17,.66)).y;
            if(detail)b=b*.72+b2*.28;
            float f=(1.-sst(.66,.95,e+.68*(b-.5)))*sst(-.012,.012,h/uRv);
            ext+=uFb*f*(.5+1.5*b)*uDen/uRh;
            // o calor fica onde o tufo \xE9 fundo: primeiro a bola inteira, depois s\xF3 as frestas e o miolo
            float core=1.-sst(uCoolA,uCoolB,e+.5*(b-.5)-.25*(b2-.5));
            hot=max(hot,uFbHot*core*(.4+.7*b2)*f);
          }
        }
        // frente rasante (01/11): centrada no contato, presa ao mar. Corre mais longe a jusante (sudoeste) sem deslocar
        // o centro; a cabe\xE7a da frente \xE9 \xFAmida e clara, em l\xEDnguas de densidade desigual; atr\xE1s dela, um len\xE7ol de p\xF3
        // mais escuro e ralo liga a frente \xE0 borda da cavidade. A densidade cai a partir do ch\xE3o (n\xE3o \xE9 um anel no ar).
        if(uSg>.001){
          float r=length(g.xy);vec2 dir=g.xy/max(r,1e-3);
          float Sr=uSr*(1.+.14*dot(dir,uDR));float u=(r-Sr)/uSw;
          if(u>-6.&&u<1.6&&h<uSh*2.6){
            vec3 q=vec3(g.xy/(uSw*2.2),h/(uSh*1.4))*.3+vec3(.3,.8,.1)+vec3(0.,0.,-uT*.003);
            vec2 n=nz(q);float b=n.y*.6+n.x*.4;
            if(detail)b=b*.75+nz(q*2.7+vec3(.6,.2,.9)).y*.25;
            float az=atan(dir.y,dir.x);
            float rag=nz(vec3(cos(az)*1.9,sin(az)*1.9,.61)).x;
            float lobe=sst(.22,.8,nz(vec3(cos(az)*4.6,sin(az)*4.6,.23+r/max(uSr,1.)*.9)).y*.7+nz(vec3(g.xy/(uSw*1.7),.57)).x*.3); // l\xEDnguas e tufos, n\xE3o raios regulares
            float front=1.-sst(-.15,.9,u+.6*(b-.5)+.7*(rag-.5));
            float head=exp(-pow((u+.3)/(.8+.7*lobe),2.))*(.35+.9*lobe);
            float trail=.30*sst(uCb*.85,uCb*1.35,r)*sst(-6.,-1.5,u)*(.4+.9*b);
            float top=uSh*(.55+.95*b)*(.45+.55*sst(-2.,0.,u));
            float vertical=exp(-max(h,0.)/(top*.5))*sst(-.6,.3,h);
            float f=front*max(head,trail)*vertical*(1.-sst(.8,1.3,h/top));
            float ev=uSg*f*(.3+1.25*b)*1.3/uSh;
            ext+=ev;vapor+=ev*clamp(head/max(head+trail,1e-3),0.,1.)*.65;
            hot=max(hot,uSgHot*f*sst(-1.4,.1,u)*(.35+.65*b));
          }
        }
        // cortina: l\xE2mina em cone invertido (\u224845\xB0) presa \xE0 borda da cavidade, em feixes; mais baixa a montante
        if(uCu>.001){
          float r=length(g.xy);vec2 dir=g.xy/max(r,1e-3);
          float H=uCh*(1.-.2*dot(dir,-uDR));
          float w=uCw*(1.+h/70.);float u=(r-uCb-h*.95)/w;
          if(abs(u)<2.6&&h<H*1.25&&h>-1.){
            // feixes: o material sai em jatos estreitos ao longo do azimute, cada um com sua altura (topo recortado)
            float strm=nz(vec3(dir*1.7,h/(H*3.5))+vec3(.52,.21,.73)).x*.45+nz(vec3(dir*6.3,h/(H*5.))+vec3(.1,.6,.3)).x*.35
              +nz(vec3(dir*14.,h/(H*8.))+vec3(.8,.2,.5)).x*.2;
            float jet=sst(.5,.78,strm);
            vec2 n=nz(g/(w*5.)+vec3(.71,.33,.92)+vec3(0.,0.,-uT*.002));
            float top=(1.-sst(.2+.55*strm,1.1,h/H))*exp(-h/(H*.5)); // densa no p\xE9, rala e esfiapada no alto
            float f=exp(-u*u*1.2)*top*sst(-.5,2.,h)*(.06+jet)*sst(.15,.6,n.y+.2*jet);
            ext+=uCu*f*(.35+1.4*n.y)*uCden/w;
            hot=max(hot,uCuHot*f*exp(-h/14.)*(.4+.6*n.y));
          }
        }
        // nuvem baixa de poeira: espalha-se sobre a regi\xE3o e deixa ver a Terra em volta (borda rala)
        if(uPa>.001){
          vec2 dx=g.xy-uDR*uPr*.15*sst(0.,uPh*1.5,h-uPz);float r=length(dx),r0=length(g.xy); // 01/11: base e furo no contato
          if(r<uPr*1.25&&h<uPz+uPh*2.2){
            vec3 q=vec3(dx/(uPr*.55),(h-uPz)/(uPh*3.))*.5+vec3(.9,.5,.2)+vec3(0.,0.,-uT*.0008);
            vec2 n=nz(q);float b=n.y*.55+n.x*.45;
            if(detail)b=b*.75+nz(q*2.6+vec3(.3,.1,.5)).y*.25;
            float edge=1.-sst(.5,1.,r/uPr+.38*(b-.5));
            float hole=uPhole>0.?sst(uPhole*.7,uPhole*1.15,r0+uPhole*.3*(b-.5)):1.;
            float top=uPh*(.45+1.1*b)*(1.-.45*sst(.3,1.,r/uPr));
            float f=edge*hole*(1.-sst(.25,1.,(h-uPz)/top))*sst(-1.,1.5,h-uPz);
            ext+=uPa*f*(.25+1.5*b)*uPden/uPh;
          }
        }
        // v\xE9u acima da atmosfera: vapor e gotas de rocha fundida em expans\xE3o bal\xEDstica; muito ralo, em raias
        if(uVe>.001){
          vec2 dx=g.xy-uDR*uVr*.15;float r=length(dx);float rn=r/uVr;
          float hc=uVh*(1.-.3*rn*rn);float u=(h-hc)/uVt;
          if(abs(u)<2.2&&rn<1.25){
            vec2 dir=dx/max(r,1e-3);
            float ray=nz(vec3(dir*2.2,.37)).x;
            vec2 n=nz(vec3(dx/(uVr*.7),h/(uVt*6.))+vec3(.2,.6,.4));
            float f=exp(-u*u*1.4)*(1.-sst(.55,1.1,rn+.35*(ray-.5)))*sst(.25,.75,n.y*.6+ray*.5)*sst(.0,.25,rn+.1);
            ext+=uVe*f*.8/uVt;
          }
        }
        return vec3(ext,clamp(hot,0.,1.),vapor/max(ext,1e-5))*sst(-3.,1.5,h);
      }
      vec3 bb(float k){ // brilho aproximado de corpo aquecido (vermelho escuro \u2192 laranja \u2192 amarelo \u2192 branco)
        vec3 c=mix(vec3(.5,.045,.004),vec3(1.,.19,.022),sst(.05,.3,k));
        c=mix(c,vec3(1.,.44,.09),sst(.35,.7,k));return mix(c,vec3(1.,.92,.75),sst(.75,1.,k));}
      void main(){
        vec3 delta=(cameraPosition-uUp)*6371.;
        vec3 ro=vec3(dot(delta,uE),dot(delta,uN),dot(delta,uUp));
        vec3 wd=normalize(vW-cameraPosition);vec3 rd=vec3(dot(wd,uE),dot(wd,uN),dot(wd,uUp));
        vec3 hb=vec3(uBox.x,uBox.x,(uBox.z-uBox.y)*.5),ce=vec3(0.,0.,(uBox.z+uBox.y)*.5);
        vec3 inv=1./(rd+vec3(equal(rd,vec3(0.)))*1e-6);
        vec3 a=(ce-hb-ro)*inv,b=(ce+hb-ro)*inv;vec3 lo=min(a,b),hi=max(a,b);
        float t0=max(0.,max(lo.x,max(lo.y,lo.z))),t1=min(hi.x,min(hi.y,hi.z));
        vec3 ec=ro+vec3(0.,0.,6371.);float eb=dot(ec,rd),ed=eb*eb-dot(ec,ec)+6371.*6371.;
        if(ed>0.){float hit=-eb-sqrt(ed);if(hit>0.)t1=min(t1,hit);}
        if(t1<=t0){gl_FragColor=vec4(0.);return;}
        vec3 sun=vec3(dot(uSun,uE),dot(uSun,uN),dot(uSun,uUp));
        float sunUp=sst(-.1,.2,sun.z);
        // passos finos dentro da esfera de foco (o corpo principal da fase), largos no resto
        float fa=0.,fb=0.;
        {vec3 oc=ro-uFoc.xyz;float bq=dot(oc,rd),cq=dot(oc,oc)-uFoc.w*uFoc.w,dq=bq*bq-cq;
          if(dq>0.){float sq=sqrt(dq);fa=max(t0,-bq-sq);fb=min(t1,-bq+sq);if(fb<fa){fa=0.;fb=0.;}}}
        const int NF=${s?28:40},NC=${s?14:18};
        float dsF=(fb-fa)/float(NF),dsC=(t1-t0)/float(NC);
        float jit=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))));
        float tr=1.;vec3 col=vec3(0.);
        float sc=uFoc.w*.3;
        float t=t0;
        for(int i=0;i<NF+NC+4;i++){
          if(t>=t1)break;
          bool inF=t>=fa&&t<fb;
          float ds=inF?dsF:dsC;
          if(!inF&&t<fa&&t+ds>fa)ds=fa-t+1e-3;
          if(inF&&t+ds>fb)ds=fb-t+1e-3;
          float tm=t+ds*jit;t+=ds;
          vec3 p=ro+rd*tm;
          vec3 f=field(p,inF);
          if(f.x>1e-4){
            vec3 fs=field(p+sun*sc*.4,false);
            vec3 fs2=field(p+sun*sc*1.25,false);
            float sh=exp(-(fs.x*.4+fs2.x*.6)*sc*1.65);
            float hk=f.y;
            vec3 albedo=mix(vec3(.14,.125,.105),vec3(.32,.33,.32),f.z);
            vec3 dust=albedo*(.10+.90*sh*sunUp)+vec3(.006,.010,.016);
            // Light penetrates the porous edges; the denser interior occludes it.
            float forward=pow(max(dot(rd,sun),0.),5.);
            dust+=albedo*.16*forward*sh;
            // o fogo ilumina o p\xF3 em volta, de baixo, enquanto h\xE1 calor
            dust+=vec3(1.,.34,.08)*uLit*.14*(1.-hk)*exp(-length(p.xy)/max(uRh,1.))*sst(24.,0.,p.z);
            vec3 em=bb(hk)*hk*(.7+5.*hk*hk*hk)*uGlow; // s\xF3 o miolo mais quente satura; a borda fica laranja e vermelha
            float hz=1.-exp(-tm*exp(-max(p.z,0.)/7.)*.0025);
            vec3 c=mix(dust*(1.-sst(.04,.3,hk)),vec3(.16,.27,.44)*(.25+.75*sunUp),hz*.25)+em*(1.-.2*hz);
            float op=1.-exp(-f.x*ds*uO);
            col+=tr*op*c;tr*=1.-op;
            if(tr<.012)break;
          }
        }
        gl_FragColor=vec4(col,1.-tr);
      }`}),r=new we(new ni(1,1,1),i);r.frustumCulled=!1;let a=new Mi;a.add(r);let o=new Ut(4,4,{type:Ot,depthBuffer:!1}),c=new we(new Bn(2,2),new ze({uniforms:{uTex:{value:o.texture},uRes:{value:new Me(1,1)},uTexel:{value:new Me(1,1)}},vertexShader:"void main(){gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`uniform sampler2D uTex;uniform vec2 uRes,uTexel;
      void main(){vec2 uv=gl_FragCoord.xy/uRes;vec4 c=texture2D(uTex,uv)*.5;
      c+=(texture2D(uTex,uv+vec2(uTexel.x,0.))+texture2D(uTex,uv-vec2(uTexel.x,0.))+
          texture2D(uTex,uv+vec2(0.,uTexel.y))+texture2D(uTex,uv-vec2(0.,uTexel.y)))*.125;
      gl_FragColor=vec4(clamp(c.rgb,0.,24.),clamp(c.a,0.,1.));}`,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ih,blendSrc:Il,blendDst:Fa,blendSrcAlpha:Il,blendDstAlpha:Fa}));c.frustumCulled=!1,c.renderOrder=3,c.visible=!1;let l=new ye(0,0,0),u=new Me;function h(f,d){f.getDrawingBufferSize(u);let g=u.x,A=u.y,m=Math.min(.5,960/Math.max(g,A)),p=Math.max(2,Math.round(g*m)),_=Math.max(2,Math.round(A*m));(o.width!==p||o.height!==_)&&o.setSize(p,_),c.material.uniforms.uRes.value.set(g,A),c.material.uniforms.uTexel.value.set(1/p,1/_);let x=f.getRenderTarget(),v=f.getClearColor(new ye),M=f.getClearAlpha(),b=f.autoClear;f.setRenderTarget(o),f.setClearColor(l,0),f.clear(!0,!1,!1),f.autoClear=!1,f.render(a,d),f.autoClear=b,f.setRenderTarget(x),f.setClearColor(v,M)}return{box:r,scene:a,quad:c,rt:o,uniforms:n,render:h}}var bn=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)};function ig(s,e,t){let n={Fb:0,Rh:5,Rv:3,Zc:0,FbHot:0,CoolA:1,CoolB:1.4,Den:6,Sg:0,Sr:10,Sw:3,Sh:4,SgHot:0,Cu:0,Cb:5,Ch:10,Cw:3,CuHot:0,Cden:3,Pa:0,Pr:100,Ph:20,Pz:0,Phole:0,Pden:2,Ve:0,Vr:100,Vh:150,Vt:20,Lit:0},i=bn(.8,22,s);if(e==="b"){n.Rh=3+12*Math.pow(s,.55),n.Rv=n.Rh*(.84+.2*bn(1,8,s)),n.Zc=14*bn(2,10,s),n.Fb=bn(0,.03,s)*(1-bn(6,18,s)),n.FbHot=(.7+.55*Math.exp(-s/.4))*Math.exp(-s/7),n.CoolA=1.15-1*bn(.6,12,s),n.CoolB=n.CoolA+.45,n.Den=4.2+3*bn(1,8,s),n.Sr=5+21*Math.pow(s,.6),n.Sw=.22*n.Sr+2,n.Sh=3+2.3*Math.sqrt(s),n.Sg=bn(.3,1.2,s)*(1-bn(25,80,s)),n.SgHot=.8*Math.exp(-s/2.5),n.Cb=Math.max(t.cB,2),n.Ch=Math.max(t.cH,3),n.Cw=2.5+.1*n.Ch,n.Cu=bn(.4,2.5,s)*(1-.55*bn(30,150,s))*(1-bn(160,320,s)),n.CuHot=Math.exp(-s/8),n.Cden=3.4,n.Pa=bn(35,170,s),n.Pr=t.Rc+60+1.5*Math.max(0,s-35),n.Ph=16,n.Phole=t.Rc*1.05,n.Pden=.75,n.Ve=bn(10,70,s)*.6,n.Vr=60+2.3*s,n.Vh=110+1*s,n.Vt=18+.12*s,n.Lit=1.3*n.Fb*n.FbHot+.4*n.Sg*n.SgHot,n.fireL=6*Math.exp(-s/.25)+1.2*n.SgHot*n.Sg+1.8*n.FbHot*n.Fb*Math.min(1,n.Rh/30),n.flashK=1.6;let o=Math.max(n.Cb+n.Ch,n.Sr+2*n.Sw,n.Fb>.02?n.Rh*1.6+n.Zc:0);n.foc=[0,0,Math.min(Math.max(n.Ch*.45,n.Fb>.02?n.Zc+n.Rv*.4:0),o*.5),o*.85]}else{let o=3+14*Math.pow(s,.62);n.Rh=Math.min(o,150),n.Rv=Math.min(n.Rh*(.55+.25*bn(3,30,s)),95),n.Zc=28*bn(4,45,s),n.Fb=bn(0,.03,s)*(1-bn(45,130,s)),n.FbHot=(.6+.6*Math.exp(-s/.5))*Math.exp(-s/9),n.CoolA=1.1-1*i,n.CoolB=n.CoolA+.4+.3*i,n.Den=5+6*i,n.Pa=bn(25,110,s),n.Pr=120+1.2*Math.max(0,s-25),n.Ph=30-8*bn(60,240,s),n.Pz=0,n.Pden=2.4,n.Lit=1.3*n.Fb*n.FbHot,n.fireL=4*Math.exp(-s/.25)+2*n.FbHot*n.Fb*Math.min(1,n.Rh/40),n.flashK=1;let c=n.Pa>.02?Math.max(n.Rh*1.3,n.Pr*1.1):Math.max(n.Rh*1.35,n.Rv*1.2)+n.Zc*.3;n.foc=[-.15*n.Rh*Math.SQRT1_2,-.15*n.Rh*Math.SQRT1_2,n.Pa>.02?10:n.Zc+n.Rv*.3,c]}let r=Math.max(n.Fb>0?n.Rh*1.8:0,n.Sg>0?n.Sr+3*n.Sw:0,n.Cu>0?n.Cb+n.Ch*1.3+10:0,n.Pa>0?n.Pr*1.45:0,n.Ve>0?n.Vr*1.45:0)+8,a=Math.max(n.Fb>0?n.Zc+n.Rv*1.5:0,n.Sg>0?n.Sh*2.8:0,n.Cu>0?n.Ch*1.3:0,n.Pa>0?n.Pz+n.Ph*2.3:0,n.Ve>0?n.Vh+2.5*n.Vt:0)+6;return n.box=[r,-6,a],n}function pb(s=!1){let e={uUp:{value:new I},uE:{value:new I},uN:{value:new I},uSun:{value:new I},uR:{value:1},uH:{value:1},uCap:{value:1},uD:{value:0},uT:{value:0},uHot:{value:0},uO:{value:0},uBlend:{value:0},uDR:{value:new Me(-Math.SQRT1_2,-Math.SQRT1_2)},uRf:{value:1},uFb:{value:0},uFbHot:{value:0},uChR:{value:1},uChL:{value:0},uCh:{value:0},uDome:{value:0},uFan:{value:0},uBox:{value:new I(10,-5,20)}},t=new ze({uniforms:e,side:Xt,transparent:!0,depthWrite:!1,depthTest:!1,premultipliedAlpha:!0,vertexShader:`uniform vec3 uUp,uE,uN,uBox;varying vec3 vW;
 void main(){vec3 p=vec3(position.xy*uBox.x*2.,mix(uBox.y,uBox.z,position.z+.5));
 vW=uUp+(uE*p.x+uN*p.y+uUp*p.z)/6371.;gl_Position=projectionMatrix*viewMatrix*vec4(vW,1.);}`,fragmentShader:`${vt}${rn}
 uniform vec3 uUp,uE,uN,uSun,uBox;uniform vec2 uDR;uniform float uR,uH,uCap,uD,uT,uHot,uO,uBlend,uRf,uFb,uFbHot,uChR,uChL,uCh,uDome,uFan;varying vec3 vW;
 const int STEPS=${s?18:24};
 float SC;
 // devolve a densidade e, em hot, quanto do ponto ainda \xE9 vapor incandescente
 float density(vec3 p,out float hot){
  float ground=-dot(p.xy,p.xy)/(2.*6371.);
  float h=p.z-ground;vec3 g=vec3(p.xy,h);
  vec3 q=p/SC+vec3(2.1,5.6,-uT*.004);
  float n=fbm3(q*1.7),fine=vnoise(q*6.);
  float along=dot(p.xy,uDR);vec2 side=p.xy-uDR*along;
  // bola de fogo: mais larga a jusante, achatada embaixo
  vec3 cf=vec3(uDR*uRf*.34,uRf*.24);vec3 df=g-cf;float af=dot(df.xy,uDR);
  float ef=length(vec3(length(df.xy-uDR*af),af/(af>0.?1.3:.8),df.z/mix(.72,.55,sst(3.,20.,uT))))/max(uRf,1.);
  float fb=uFb*(1.-sst(.55,1.05,ef+.62*(n-.5)+.1*(fine-.5)));
  // t\xFAnel da entrada: eixo vindo de nordeste a 60\xB0 (o contr\xE1rio de uDR na horizontal)
  vec3 ax=vec3(-uDR*.5,.8660254);float s=dot(g,ax);vec3 pr=g-ax*s;
  float ch=uCh*(1.-sst(.55,1.,length(pr)/max(uChR*(1.+.25*s/max(uChL,1.)),1.)+.5*(n-.5)))*sst(-2.,4.,s)*(1.-sst(uChL*.7,uChL,s));
  // leque: base na borda da cratera, abre com a altura e se inclina a jusante
  float hz=h/max(uH,8.);
  vec2 fc=p.xy-uDR*h*.18;float rz=uR*.85+h*.48;
  float fan=uFan*(1.-sst(.7,1.04,length(fc)/max(rz,2.)+.45*(n-.5)))*(1.-sst(.55,1.,hz))*(1.-.55*sst(0.,.6,hz))*sst(-uD*.12-1.,1.,h);
  // c\xFApula acima da atmosfera: casca rala que se expande, mais densa na frente de expans\xE3o
  vec2 dc=p.xy-uDR*uH*.2;float ad=dot(dc,uDR);float nl=fbm3(q*.9+3.);
  // revis\xE3o 9: c\xFApula irregular, mais longa a jusante, com l\xF3bulos e raias (sem simetria de c\xFApula perfeita)
  float az=atan(dc.y,dc.x);float lobe=.16*sin(3.*az+nl*5.)+.1*sin(7.*az+2.+nl*3.);
  float dd=length(vec2(length(vec2(length(dc-uDR*ad),ad/(ad>0.?1.55:.85)))/(uH*1.1*(1.+lobe)),h/max(uH*(1.+.5*lobe),8.)));
  float dome=uDome*(1.-sst(.84,1.02,dd+.24*(n-.5)+.5*(nl-.5)))*(.04+.96*sst(.62,.96,dd))*sst(30.,110.,h+40.*(n-.5));
  float billow=.25+1.75*sst(.28,.78,n+.12*(fine-.5));
  float d=(max(fb,ch)*1.4+fan*1.3+dome*.22)*billow;
  hot=clamp((fb*uFbHot+ch*uFbHot*.8+fan*uHot*exp(-hz*3.3))/max(max(fb,ch)+fan+.001,.001),0.,1.);
  return d*sst(-uD*.14-1.,-uD*.08+1.,h);
 }
 void main(){
  vec3 delta=(cameraPosition-uUp)*6371.;
  vec3 ro=vec3(dot(delta,uE),dot(delta,uN),dot(delta,uUp));
  vec3 wd=normalize(vW-cameraPosition);vec3 rd=vec3(dot(wd,uE),dot(wd,uN),dot(wd,uUp));
  vec3 halfB=vec3(uBox.x,uBox.x,(uBox.z-uBox.y)*.5);
  vec3 center=vec3(0.,0.,(uBox.z+uBox.y)*.5);
  vec3 inv=vec3(abs(rd.x)>.000001?1./rd.x:1000000.,abs(rd.y)>.000001?1./rd.y:1000000.,abs(rd.z)>.000001?1./rd.z:1000000.);
  vec3 a=(center-halfB-ro)*inv,b=(center+halfB-ro)*inv;vec3 lo=min(a,b),hi=max(a,b);
  float enter=max(0.,max(lo.x,max(lo.y,lo.z))),exit=min(hi.x,min(hi.y,hi.z));
  // oclus\xE3o anal\xEDtica pela Terra: o volume n\xE3o aparece atrav\xE9s do planeta
  vec3 ec=ro+vec3(0.,0.,6371.);float eb=dot(ec,rd),ed=eb*eb-dot(ec,ec)+6371.*6371.;
  if(ed>0.){float hit=-eb-sqrt(ed);if(hit>0.)exit=min(exit,hit);}
  if(exit<=enter)discard;
  SC=max(uR*.6+uH*.1,8.);
  float ds=(exit-enter)/float(STEPS),trans=1.;vec3 color=vec3(0.);
  vec3 sun=vec3(dot(uSun,uE),dot(uSun,uN),dot(uSun,uUp));
  float jit=.5+.35*(fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5);
  for(int i=0;i<STEPS;i++){
   vec3 p=ro+rd*(enter+(float(i)+jit)*ds);float hot;float den=density(p,hot);
   if(den>.002){
    float hh;float shade=density(p+sun*SC*.8,hh);
    float light=.15+.85*exp(-shade*1.5);
    float n=fbm3((p/SC+vec3(2.1,5.6,-uT*.004))*7.);
    vec3 dust=mix(vec3(.13,.095,.065),vec3(.46,.39,.29),sst(.25,.78,n))*light;
    float heat=hot*(.6+.8*n);
    vec3 c=dust*(1.-.7*sst(.3,.9,heat))+mix(vec3(.75,.17,.035),vec3(1.,.72,.38),sst(.25,1.,heat))*heat*heat*3.;
    float opacity=1.-exp(-den*ds/max(uR*.30+8.,12.)*uO);
    color+=trans*opacity*c;trans*=1.-opacity;if(trans<.02)break;
   }
  }
  gl_FragColor=vec4(fin(color),1.-trans);
 }`}),n=new we(new ni(1,1,1),t);return n.renderOrder=3,n.frustumCulled=!1,n.visible=!1,n.userData={representation:"editorial bounded volume, sphere-clipped at the shared impact site",samples:s?18:24},n}function Ab(s,e,t,n){let i=(u,h,f)=>{let d=Math.min(1,Math.max(0,(f-u)/(h-u)));return d*d*(3-2*d)},r=4+16*Math.pow(s,.68),a=Math.min(170,6+30*s),o=3.5+2.6*Math.sqrt(s),c={Rf:r,Fb:i(0,.04,s)*(1-i(12,60,s))/(1+s/15),FbHot:Math.exp(-s/7),chL:a,chR:o,Ch:i(.03,.5,s)*(1-i(25,140,s)),Fan:i(.6,6,s),Dome:i(4,45,s)},l=e*.85+t*.48+t*.18;return c.box=[Math.max(t*1.15*1.08,r*1.6,a*.5+o*2,l)+10,-n-4,Math.max(t*1.04,r*1.5,a*.87+o*2)+10],c}var be=s=>document.getElementById(s),mt=document.body,Oi=new URLSearchParams(location.search),Tb=matchMedia("(prefers-reduced-motion: reduce)"),Zn=Tb.matches||Oi.get("movimento")==="reduzido",eu=Oi.get("composicao")==="a";mt.dataset.craterComposition=eu?"a":"b";var HI=Oi.has("captura"),Li=Oi.has("manual"),ms=Oi.has("nan"),da=(Oi.get("ocultar")||"").split(",");Li&&mt.classList.add("manual");var uu=Oi.has("embed")&&window.parent!==window;uu&&mt.classList.add("embed");var Ib=!1,mb=()=>new Promise(s=>{let e=()=>Ib?setTimeout(e,120):s();e()}),Mn=Math.PI/180;function En(s,e,t=1,n=new I){let i=s*Mn,r=e*Mn;return n.set(t*Math.cos(i)*Math.cos(r),t*Math.sin(i),-t*Math.cos(i)*Math.sin(r))}var Fc=En(21.3,-89.5),en=En(21.92,-74.55),Aa=En(50.78,-83.45),Hf=En(21+27.009/60,-(89+56.962/60),1.00008),ui=En(10,-40).normalize(),N={set:0,clat:14,clon:184,cdist:4.5,tx:0,ty:0,tz:0,gx:.4,gy:8.5,gz:2.2,gtx:0,gty:1.8,gtz:0,sx:.17,sy:.14,px:0,fov:32,upm:0,shake:0,epoch:0,crater:0,haze:0,spread:0,dustK:1500,sunI:1,stars:1,glow:1,ts:-300,Lcav:0,imp:0,impOn:0,fireO:0,curtO:0,plumeO:0,flash:0,ring:0,scar:0,tau:0,partO:0,fam0:1,fam1:1,fam2:1,reach:0,dust:0,fall:0,gdust:1,veil:0,bloom:.22,mark:0,craterDraw:0,Lcrater:0,Lwell:0,Lburied:0,Lschem:0,Ldrift:0,Lcoast:0,Lbody:0,Lplume:0,Lpaleo:0,Lmark:0,Llayer:0,eras:0,spot:1,Llayers:0,Lclay:0,depo:1,fallO:0,Lfall:0,Lcover:0,Lnomet:0,gpm:1,gpx:0,gpy:0,photo:0,Lscale:0,Lrock:0,endL:0,bird:0,birdO:0,Lbird:0,bu:0,flap:1,fold:0,legs:0,flare:0,pitch:0,glide:0,look:0,perch:0,Lband:0,Lafter:0,birdPh:0,bz:1,trk:0,fol:0,ob:.05,os:.01,ou:.006,lead:.06,slow:0,dof:0,dofF:2,lc:0,sunLat:10,sunLon:-40,lux:1},Qf=be("gl"),tt;try{tt=new rh({canvas:Qf,antialias:!1,powerPreference:"high-performance"})}catch(s){throw be("btn-iniciar-txt").textContent="Este navegador n\xE3o abriu o WebGL",s}var pi=()=>Math.min(innerWidth,innerHeight)<600;tt.setPixelRatio(Math.min(devicePixelRatio,pi()?1.6:2));tt.toneMapping=Rl;tt.toneMappingExposure=1;tt.shadowMap.enabled=!0;tt.shadowMap.type=kp;tt.localClippingEnabled=!0;var Ie=new xn(32,innerWidth/innerHeight,5e-4,400),hn=new Mi,Ht=new Mi;hn.background=new ye(329480);Ht.background=new ye(724495);Ht.fog=new ah(724495,.05);var di=new Oh(tt),Ys=new Nh(hn,Ie);di.addPass(Ys);var cg=class extends Xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.needsSwap=!1,this.rt=new Ut(1,1,{type:Ot,samples:4}),this.quad=new os(new ze({uniforms:Ki.clone(na.uniforms),vertexShader:na.vertexShader,fragmentShader:na.fragmentShader,depthTest:!1,depthWrite:!1}))}setSize(e,t){this.rt.setSize(e,t)}render(e,t,n){e.setRenderTarget(this.rt),e.clear(),e.render(this.scene,this.camera),this.quad.material.uniforms.tDiffuse.value=this.rt.texture,e.setRenderTarget(this.renderToScreen?null:n),this.quad.render(e)}},wr=new cg(hn,Ie);wr.enabled=!1;di.addPass(wr);var Rb="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",Bb=new Wa({uniforms:{tDiffuse:{value:null},uDbg:{value:ms?1:0}},vertexShader:Rb,fragmentShader:`uniform sampler2D tDiffuse;uniform float uDbg;varying vec2 vUv;
    bool bad(float x){uint b=floatBitsToUint(x);return (b&0x7f800000u)==0x7f800000u;}
    void main(){vec4 c=texture2D(tDiffuse,vUv);bool n=bad(c.r)||bad(c.g)||bad(c.b)||bad(c.a);
      if(uDbg>.5){gl_FragColor=n?vec4(1.,0.,1.,1.):vec4(0.,0.,0.,1.);return;}
      gl_FragColor=n?vec4(0.,0.,0.,1.):vec4(clamp(c.rgb,0.,24.),1.);}`});di.addPass(Bb);var hi=new Hh(Ht,Ie,{focus:2,aperture:.002,maxblur:.008});hi.enabled=!1;ms||di.addPass(hi);var zf=new Ut(1,1,{type:Ot,depthBuffer:!0}),fi=new xn(32,1,5e-4,400),_g=!1,xg=new Ut(1,1,{type:Ot,depthBuffer:!0}),bg=!1,Fi=new Wa({uniforms:{tDiffuse:{value:null},uOld:{value:null},uProgress:{value:1}},vertexShader:Rb,fragmentShader:"uniform sampler2D tDiffuse,uOld;uniform float uProgress;varying vec2 vUv;void main(){vec3 a=texture2D(uOld,vUv).rgb,b=texture2D(tDiffuse,vUv).rgb;gl_FragColor=vec4(mix(a,b,uProgress),1.);}"});Fi.uniforms.uOld.value=zf.texture;Fi.enabled=!1;ms||di.addPass(Fi);var Pc=new Ac(new Me(innerWidth,innerHeight),.22,.55,1.2),lg=class extends kh{constructor(){super(),this.uniforms=Ki.merge([this.uniforms,{uTime:{value:0},uGrain:{value:.012},uVig:{value:.5}}]);let e=this.material.fragmentShader.replace("uniform sampler2D tDiffuse;",`uniform sampler2D tDiffuse;uniform float uTime,uGrain,uVig;
        bool bad(float x){uint b=floatBitsToUint(x);return (b&0x7f800000u)==0x7f800000u;}
        float h(vec2 p){uvec2 q=uvec2(ivec2(p))*uvec2(1597334673u,3812015801u);uint n=(q.x^q.y)*1597334673u;return float(n)*(1./4294967295.);}`).replace("gl_FragColor = texture2D( tDiffuse, vUv );",`vec4 c0=texture2D( tDiffuse, vUv );
        gl_FragColor=(bad(c0.r)||bad(c0.g)||bad(c0.b)||bad(c0.a))?vec4(0.,0.,0.,1.):vec4(clamp(c0.rgb,0.,24.),1.);`).replace(/}\s*$/,`  vec4 c=gl_FragColor;
        c.rgb+=(h(gl_FragCoord.xy+vec2(floor(fract(uTime)*61.)*17.,0.))-.5)*uGrain;
        float d=distance(vUv,vec2(.5));float v=clamp((d-.3)/.65,0.,1.);c.rgb*=mix(1.,1.-v*v*(3.-2.*v),uVig);
        gl_FragColor=vec4(clamp(c.rgb,0.,1.),1.);
      }`),t=this.material.vertexShader.replace(/\battribute\b/g,"in").replace(/\bvarying\b/g,"out"),n=e.replace(/\bvarying\b/g,"in").replace(/texture2D\s*\(/g,"texture(").replace(/gl_FragColor/g,"pc_fragColor").replace("precision highp float;",`precision highp float;
out highp vec4 pc_fragColor;`);this.material.dispose(),this.material=new cc({name:"FinalPass",uniforms:this.uniforms,vertexShader:t,fragmentShader:n,glslVersion:Ju}),this.fsQuad.material=this.material}},Db=new lg,QI=Db;ms||(di.addPass(Pc),di.addPass(Db));var xf={lon0:-101,lon1:-77,lat0:11,lat1:33},qe={uCut:{value:0},uCutAxis:{value:new I},uCutFront:{value:new I},uEarthLook:{value:1},uGlobeLook:{value:null},uCloudLook:{value:null},uRegional:{value:null},uRegionContext:{value:null},uRegionalAmt:{value:0},uRegionalBridge:{value:0},uRegionalClose:{value:0},uRegionalHaze:{value:0},uSun:{value:ui},uSunI:{value:1},uSunRad:{value:2.4},uLand:{value:null},uLandHi:{value:null},uHiBox:{value:new ut(xf.lon0*Mn,xf.lon1*Mn,xf.lat0*Mn,xf.lat1*Mn)},uCloud:{value:null},uDay:{value:null},uAux:{value:null},uDayHi:{value:null},uAuxHi:{value:null},uPaleo:{value:null},uSup66:{value:null},uDrift0:{value:null},uDrift1:{value:null},uDrift2:{value:null},uHaze:{value:0},uSpread:{value:0},uDustK:{value:1500},uSite:{value:en},uSiteNow:{value:Fc},uFlash:{value:0},uRing:{value:0},uScar:{value:0},uTime:{value:0},uCam:{value:new I},uGlow:{value:1},uDim:{value:0},uEpoch:{value:0},uCrater:{value:0},uCloudAmt:{value:.64},uCloudPres:{value:.55},uCavR:{value:0},uShockR:{value:0},uShockA:{value:0},uClearR:{value:0},uBlanketR:{value:0},uBlanketA:{value:0},uFireL:{value:0},uFireH:{value:0},uCurtB:{value:0},uCurtH:{value:0},uCurtO:{value:0},uImpactReview:{value:0},uHeadI:{value:0},uHeadP:{value:new I}},Fb=["uLand","uLandHi","uDay","uAux","uDayHi","uAuxHi","uPaleo","uDrift0","uDrift1","uDrift2","uSup66"],Eg=new Us(new Uint8Array(4),1,1);Eg.needsUpdate=!0;qe.uRegional.value=qe.uRegionContext.value=Eg;var Pb=()=>new Promise(s=>requestAnimationFrame(()=>s())),yg=new we(new Ci(1,256,160),$_(qe)),Rc=new we(new Ci(1.004,200,128),ex(qe)),Bf=new we(new Ci(1.025,96,64),tx(qe));yg.renderOrder=0;Rc.renderOrder=1;Bf.renderOrder=2;hn.add(yg,Rc,Bf);var cu=ab(Fc,Hf,ui);hn.add(cu.root);qe.uCutAxis.value.copy(cu.axis);qe.uCutFront.value.copy(cu.front);var va={v:0,on:!1},Lb=s=>ot.smoothstep(s,45.6,46.2)*(1-ot.smoothstep(s,48,48.15)),yf=s=>va.v*Lb(s);function Ub(s){va.on=s,fs.killTweensOf(va),Zn||Li?(va.v=s?1:0,Cn()):fs.to(va,{v:s?1:0,duration:1.2,ease:"power2.inOut",onUpdate:Cn});let e=document.getElementById("btn-corte");e&&(e.setAttribute("aria-pressed",String(s)),e.textContent=s?"Voltar ao mapa":"Ver corte esquem\xE1tico")}var Mg=(()=>{let e=Is(7),t=new Bn(1,1),n=new ws;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let i=new Float32Array(1800*4);for(let o=0;o<1800;o++){let c=e()*2-1,l=e()*Math.PI*2,u=Math.sqrt(1-c*c);i.set([90*u*Math.cos(l),90*c,90*u*Math.sin(l),Math.pow(e(),5)],o*4)}n.setAttribute("aP",new Pn(i,4)),n.instanceCount=1800;let r=new ze({uniforms:{uO:{value:1},uPx:{value:.002}},transparent:!0,depthWrite:!1,vertexShader:"attribute vec4 aP;uniform float uPx;varying vec2 vUv;varying float vM;void main(){vUv=uv;vM=aP.w;vec4 mv=viewMatrix*vec4(aP.xyz,1.);gl_Position=projectionMatrix*mv;gl_Position.xy+=position.xy*uPx*(1.+aP.w*1.6)*gl_Position.w;}",fragmentShader:`${vt}varying vec2 vUv;varying float vM;uniform float uO;void main(){float d=length(vUv-.5)*2.;float a=1.-sst(0.,1.,d);gl_FragColor=vec4(vec3(.85,.88,.95)*(.25+vM*1.4),a*uO);}`}),a=new we(n,r);return a.frustumCulled=!1,a.renderOrder=-1,a})();hn.add(Mg);var Gf=new ka(new Kr({map:Wf([[0,"rgba(255,246,230,1)"],[.08,"rgba(255,236,205,.9)"],[.25,"rgba(255,200,150,.18)"],[1,"rgba(255,190,140,0)"]]),blending:qn,depthWrite:!1,transparent:!0}));Gf.position.copy(ui).multiplyScalar(60);Gf.scale.setScalar(14);hn.add(Gf);var Ob=Wf([[0,"rgba(255,248,235,1)"],[.1,"rgba(255,215,160,.75)"],[.4,"rgba(255,160,90,.12)"],[1,"rgba(255,150,80,0)"]]),zI=Wf([[0,"rgba(255,255,250,1)"],[.05,"rgba(255,246,225,.95)"],[.14,"rgba(255,205,140,.4)"],[.35,"rgba(255,150,70,.08)"],[1,"rgba(255,120,40,0)"]]),li=new ka(new Kr({map:Ob,blending:qn,depthWrite:!1,depthTest:!1,transparent:!0}));li.position.copy(en).multiplyScalar(1.004);li.renderOrder=7;hn.add(li);var Nb=new Eh({color:13939835,transparent:!0,opacity:0,dashSize:8e-4,gapSize:6e-4,depthWrite:!1}),Mf,kb=0;{let s=[],e=.014126510751844295,t=new I(0,1,0).cross(Fc).normalize().negate(),n=Fc.clone().cross(t).normalize().negate();for(let r=0;r<=256;r++){let a=r/256*Math.PI*2,o=Fc.clone().multiplyScalar(Math.cos(e)).addScaledVector(t,Math.sin(e)*Math.cos(a)).addScaledVector(n,Math.sin(e)*Math.sin(a)).multiplyScalar(1.00008);s.push(o.x,o.y,o.z)}let i=new ht;i.setAttribute("position",new Je(s,3)),Mf=new Os(i,Nb),Mf.computeLineDistances(),kb=257,hn.add(Mf)}var Vf=new we(new vh(6e-4,24),new Qn({color:10132631,transparent:!0,opacity:0,depthWrite:!1}));Vf.position.copy(Hf);Vf.lookAt(Hf.clone().multiplyScalar(2));hn.add(Vf);var Hb=new Qn({color:15921126,transparent:!0,opacity:0,depthWrite:!1,side:bt}),hu=new we(new bh(.026,.029,96),Hb);hu.position.copy(Aa).multiplyScalar(1.006);hu.lookAt(Aa.clone().multiplyScalar(2));hu.renderOrder=8;hn.add(hu);var Cg=new Ns(16774116,3.2);Cg.position.copy(ui).multiplyScalar(10);hn.add(Cg);hn.add(new Ch(10133670,.02));var Df=new Ns(12896719,.5);Df.position.set(-1,.3,1);hn.add(Df);var Zi=null,Cf=null,kt=(()=>{let s=en.clone(),e=new I(0,1,0).cross(s).normalize(),t=s.clone().cross(e).normalize(),n=t.clone().add(e).normalize(),i=e.clone().sub(t).normalize(),r=60*Mn,a=.5,o=s.clone().multiplyScalar(Math.sin(r)).addScaledVector(n,Math.cos(r)),c=o.clone().cross(i).normalize();return c.dot(s)<0&&c.negate(),{up:s,east:e,north:t,hNE:n,hSE:i,dir:o,nrm:c,L:a,uEntry:1-.016/Math.sin(r)/a}})();function gb(s,e,t,n=new I){return n.copy(en).addScaledVector(kt.hSE,s*At).addScaledVector(kt.hNE,e*At).normalize().multiplyScalar(1+t*At)}function Ff(s,e=new I){return e.copy(en).addScaledVector(kt.hSE,s[0]*At).addScaledVector(kt.hNE,s[1]*At).addScaledVector(kt.up,s[2]*At)}var yr=Oi.get("camloc")?Oi.get("camloc").split(",").map(Number):null;var Ds=5*At,Sg=20,Qb=-(100/Math.sin(60*Mn))/Sg,wg=en.clone().multiplyScalar(1+Ds*.85);function Sf(s,e=new I){return e.copy(wg).addScaledVector(kt.dir,-s*Sg*At)}function vb(s,e){let t=oo.material.uniforms,n=Math.max(0,N.ts);t.uP.value.copy(n>0?Sf(0,Lg):s),t.uR.value=Ds*.95,t.uL.value=Math.max(0,Math.min(N.ts,0)-Qb)*Sg*At,t.uAge.value=n,t.uO.value=Math.min(1,e*2.5)*(1-ot.smoothstep(n,.05,1.1)),t.uT.value=Ae,t.uSun.value.copy(ui)}var zb=new I(.35,1,.2).normalize(),Gb=new Rn().setFromEuler(new Hn(.4,.6,.3)),GI=Math.PI/4,VI=Math.PI*5/4,WI=Kx(Wf),qI=Xx(),js=qx(pi()?3200:6500);js.material.uniforms.uSite.value.copy(en);js.material.uniforms.uE.value.copy(kt.east);js.material.uniforms.uN.value.copy(kt.north);js.material.uniforms.uSun.value.copy(ui);var Mr=$x(),oo=Yx(),co=nb(),Lc=ib(),$i=sb(),Uc=rb(),vo=new we($i.geometry,$i.material.clone());vo.material.uniforms=$i.material.uniforms;vo.material.defines={SIDE:"-1."};$i.material.defines={SIDE:"1."};vo.renderOrder=2;vo.frustumCulled=!1;vo.visible=!1;var Oc=pb(pi()),sg=/[?&]explosao=a/.test(location.search)?"a":"b",Tr=db(pi());{let s=Tr.uniforms;s.uUp.value.copy(en),s.uE.value.copy(kt.east),s.uN.value.copy(kt.north)}var _a=jx(pi()?1500:3200);_a.material.uniforms.uW.value=pi()?1.1:.75;_a.renderOrder=2.5;for(let s of[co,Lc,$i,Uc,Oc,_a]){let e=s.material.uniforms;e.uUp.value.copy(en),e.uE.value.copy(kt.east),e.uN.value.copy(kt.north),e.uAzUp&&(e.uAzUp.value=GI),e.uAzDown&&(e.uAzDown.value=VI)}{let s=oo.material.uniforms;s.uB.value.copy(kt.dir),s.uX.value.copy(kt.hSE),s.uY.value.copy(kt.nrm)}var Vb=.004;hn.add(js,Mr,oo,co,Lc,$i,vo,Uc,Oc,_a,Tr.quad);var KI=en.clone().multiplyScalar(1.03);hn.add(Ie);var tu=Xb(pi()?220:380,s=>[(s()*2-1)*.9,(s()*2-1)*.6,-.06-s()*1.4],.02);Ie.add(tu);var Rr={w:4,h:1,d:2.1},ps=null,ct={bottom:1,top:3.4,clay:2.5,center:2.2,w:2.9,d:1.25,front:.62,perch:new I(0,3.4,0)},Tg=new we(new Bn(80,80),new zn({color:1316890,roughness:.9}));Tg.rotation.x=-Math.PI/2;Tg.receiveShadow=!0;Ht.add(Tg);var XI=new ze({uniforms:{uK:{value:1}},fog:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`${vt}varying vec2 vUv;uniform float uK;void main(){vec2 q=vUv-vec2(.5,.16);
    float g=exp(-dot(q*vec2(1.6,3.2),q*vec2(1.6,3.2))*5.);vec3 c=mix(vec3(.010,.012,.013),vec3(.055,.058,.058),g*uK);gl_FragColor=vec4(c,1.);}`}),Wb=new we(new Bn(60,24),XI);Wb.position.set(0,12,-8);Ht.add(Wb);var Pf=new we(new ni(Rr.w,Rr.h,Rr.d),new zn({color:2304041,roughness:.8}));Pf.position.y=Rr.h/2;Pf.castShadow=Pf.receiveShadow=!0;Ht.add(Pf);var Ni=new $r(16773340,240,0,.34,.65,2);Ni.position.set(-5.4,5.6,3.4);Ni.castShadow=!0;Ni.shadow.mapSize.set(pi()?1024:2048,pi()?1024:2048);Ni.shadow.bias=-2e-4;Ni.shadow.normalBias=.03;Ni.shadow.camera.near=3;Ni.shadow.camera.far=20;Ht.add(Ni);Ht.add(Ni.target);var Ig=new Ns(12896978,.7);Ig.position.set(4.5,4.2,-5);Ht.add(Ig);var Rg=new uc(14206893,5,9,2);Rg.position.set(3.4,1.4,3.4);Ht.add(Rg);Ht.add(new lc(9081760,658445,.2));var zc=new $r(16773856,0,0,.3,.7,2);zc.position.set(-3.2,8.5,5.2);zc.castShadow=!0;zc.shadow.mapSize.set(1024,1024);zc.shadow.bias=-2e-4;Ht.add(zc,zc.target);var YI=Oi.get("final")==="b"?"b":"a",Bg=!0;Bg&&mt.classList.add("ave3d");var Gc="aguia";mt.dataset.ave=Gc;var qb={};for(let s in so)qb[s]=so[s].label;var mn={scene:new Mi},An={root:new Tn},Sr=rx(wc,62,75.2,so[Gc]?.flight);mn.attach&&mn.attach(tt,An);Bg||mn.support.forEach(s=>{s.visible=!1});var jI=null;var Bc=2.4/90,nu=new Tn,wf=new ze({uniforms:{uO:{value:0},uTop:{value:new I},uLen:{value:1}},transparent:!0,depthWrite:!1,blending:qn,side:bt,vertexShader:"varying vec3 vW;varying vec3 vN;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;vN=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform float uO,uLen;uniform vec3 uTop;varying vec3 vW;varying vec3 vN;
    void main(){float t=clamp(distance(vW,uTop)/uLen,0.,1.);vec3 V=normalize(cameraPosition-vW);
      float edge=pow(abs(dot(normalize(vN),V)),1.6);
      gl_FragColor=vec4(clamp(vec3(1.,.93,.82)*edge*(1.-t)*(1.-t)*.045*uO,0.,1.),1.);}`}),Tf=new we(new _h(1,1,48,1,!0),wf);Ht.add(Tf);var uo=Xb(pi()?420:800,s=>[(s()*2-1)*2.6,s()*7,(s()*2-1)*2],.016,!0);Ht.add(uo);var iu=new Es(new I(0,-1,0),99),su=new zn({color:4866104,roughness:.95}),As=new we(new Bn(1,1),su);As.rotation.x=-Math.PI/2;As.receiveShadow=!0;As.visible=!1;Ht.add(As);var ho=(()=>{let s=pi()?500:900,e=Is(321),t=new Float32Array(s*4);for(let o=0;o<s;o++)t.set([e()*2-1,e()*2-1,e(),e()],o*4);let n=new Bn(1,1),i=new ws;i.index=n.index,i.setAttribute("position",n.attributes.position),i.setAttribute("uv",n.attributes.uv),i.setAttribute("aP",new Pn(t,4)),i.instanceCount=s;let r=new ze({uniforms:{uT:{value:0},uO:{value:0},uY:{value:0},uW:{value:1},uD:{value:1}},transparent:!0,depthWrite:!1,vertexShader:`attribute vec4 aP;uniform float uT,uY,uW,uD;varying vec2 vUv;varying float vS;varying float vF;
      void main(){vUv=uv;vS=aP.w;float f=fract(uT*(.35+.3*aP.z)+aP.z*7.31);vF=f;
        vec3 p=vec3(aP.x*uW*.5,uY+.02+(1.-f)*2.6,aP.y*uD*.5);
        vec4 mv=viewMatrix*vec4(p,1.);mv.xy+=position.xy*(aP.w>.9?.015:.008)*(1.+aP.z);gl_Position=projectionMatrix*mv;}`,fragmentShader:`${vt}uniform float uO;varying vec2 vUv;varying float vS;varying float vF;
      void main(){float d=length(vUv-.5)*2.;float a=pow(max(1.-d,0.),vS>.9?.6:1.4);
        vec3 c=vS>.9?vec3(.82,.72,.55):vec3(.38,.33,.28);
        gl_FragColor=vec4(c,a*uO*sst(0.,.15,vF)*(1.-sst(.92,1.,vF))*(vS>.9?.9:.6));}`}),a=new we(i,r);return a.frustumCulled=!1,a.visible=!1,a})();Ht.add(ho);var fo=null,po=null,Ft=null,Pi={x:4.6,y:2.75,z:-1.6,ry:-.42},xa=new $r(15986662,40,0,.42,.85,2);xa.position.set(Pi.x+1.6,6.2,Pi.z+3.4);Ht.add(xa,xa.target);var rg=new we(new ni(4.6,4.4,.12),new zn({color:2896178,roughness:.92,transparent:!0}));function JI(s,e){let n=2.05*e,i=new Tn;return rg.position.set(0,-.15,-.09),rg.receiveShadow=!0,po=new we(new ni(n+.03,2.05+.03,.025),new zn({color:14275784,roughness:.6,transparent:!0})),fo=new we(new Bn(n,2.05),new Qn({map:s,transparent:!0,fog:!1,toneMapped:!1})),po.position.z=-.03,fo.position.z=.02,i.add(po,fo),i.position.set(Pi.x,Pi.y,Pi.z),i.rotation.y=Pi.ry,i.userData={w:n,h:2.05,panel:rg},Ht.add(i),xa.target.position.set(Pi.x,Pi.y,Pi.z),i}function ZI(s){let e=s.attributes.position;if(!e||s.userData.refined)return;s.userData.refined=!0;let t=e.array.slice(),n=(i,r,a)=>Math.sin(i*6.7+r*8.1+a*3.9)*Math.sin(i*3.2-r*5.3+a*7.4);for(let i=0;i<e.count;i++){let r=t[i*3],a=t[i*3+1],o=t[i*3+2],c=.017*n(r,a,o)+.004*n(r*3.7,a*3.7,o*3.7);e.setXYZ(i,r+c*Math.sign(r),a,o+c*.65)}e.needsUpdate=!0,s.computeVertexNormals(),s.computeBoundingSphere()}function $I(s){s.roughness=.92,s.metalness=0,s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 _rc;varying vec3 vRc;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRc=_rc;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRc;${vt}${rn}
float yB(vec2 q){return 1.42+.030*sin(1.3*q.x+.5)+.015*sin(3.1*q.x+1.7*q.y+2.);}
float hC(float x){return .2267*(1.+.17*sin(1.7*x+.3)+.09*sin(4.3*x+1.1));}
vec3 perturbN(vec3 sp,vec3 sn,vec2 dH){vec3 sx=dFdx(sp),sy=dFdy(sp);vec3 r1=cross(sy,sn),r2=cross(sn,sx);float det=dot(sx,r1)*(gl_FrontFacing?1.:-1.);
  vec3 g=abs(det)*sn-sign(det)*(dH.x*r1+dH.y*r2);float l=length(g);return l>1e-12?g/l:sn;}`).replace("#include <color_fragment>",`#include <color_fragment>
  float kb=yB(vRc.xz),kd=vRc.y-kb,kh=hC(vRc.x);
  float inClay=sst(-.004,.004,kd)*(1.-sst(kh-.01,kh+.01,kd));
  float pres=sst(-.25,.2,sin(2.3*vRc.x+.7)+.6*sin(5.9*vRc.x+2.)+.5*(vnoise(vRc*9.)-.5));
  float rl=.0105*(.45+.9*vnoise(vec3(vRc.x*7.,0.,vRc.z*7.)))*pres;
  float aa=fwidth(kd)*.8+1e-5;
  float redm=sst(-aa,aa,kd)*(1.-sst(rl-aa,rl+aa,kd))*step(.0005,rl);
  float bz=sst(-.03,-.002,kd)*(1.-step(0.,kd));
  diffuseColor.rgb=mix(diffuseColor.rgb,max(diffuseColor.rgb,vec3(.30,.31,.27)),bz);
  float cz=step(0.,kd)*(1.-sst(.0,.03,kd));
  diffuseColor.rgb=mix(diffuseColor.rgb,min(diffuseColor.rgb,vec3(.05,.037,.028)),cz);
  diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.21,.075,.032)*(.8+.4*vnoise(vRc*60.)),redm*(.55+.35*vnoise(vRc*25.)));
  float gr=(vnoise(vRc*170.)-.5)+.6*(vnoise(vRc*430.)-.5);
  float lamN=vnoise(vec3(vRc.x*2.5,kd*260.,vRc.z*2.5));
  float spk=sst(.82,.95,vnoise(vRc*520.))*(1.-inClay);
  diffuseColor.rgb*=1.+.035*gr+inClay*.035*(lamN-.5)+.035*spk;
  float weather=fbm3(vRc*vec3(3.,1.2,3.)+vec3(2.,7.,1.));
  diffuseColor.rgb*=mix(vec3(.89,.90,.89),vec3(1.08,1.04,.97),weather)*(1.-.055*sst(.59,.72,vnoise(vRc*vec3(19.,3.,19.))));
  // Fraturas irregulares de apresenta\xE7\xE3o; n\xE3o f\xF3sseis ou sinais microsc\xF3picos.
  float fracture=abs(sin(vRc.x*23.+vRc.z*19.+2.8*fbm3(vRc*5.)));
  float fissure=(1.-sst(.015,.075,fracture))*sst(.42,.65,vnoise(vRc*vec3(12.,5.,12.)))*(1.-inClay);
  diffuseColor.rgb*=1.-.15*fissure;
  float footprint=max(length(dFdx(vRc)),length(dFdy(vRc)));
  float fine=1.-sst(.001,.008,footprint);
  float hgt=.0014*fbm3(vRc*vec3(5.,26.,5.))+.00045*vnoise(vRc*vec3(40.,140.,40.))*fine+inClay*.00018*lamN*fine-.0007*fissure;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor=clamp(roughnessFactor*(.93+.1*gr)-inClay*.06,.6,1.);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  normal=perturbN(-vViewPosition,normal,vec2(dFdx(hgt),dFdy(hgt)));`)},s.needsUpdate=!0}var Kb=be("labels"),Dc=[];function $t(s,e,t,n,i="",r=""){let a=document.createElement("div");return a.className="l3d "+i,a.innerHTML="<span>"+n+"</span>",Kb.appendChild(a),Dc.push({key:s,set:e,anchor:t,el:a,cls:i,only:r}),a}var Dr=document.createElement("button");Dr.className="photo-hit";Dr.setAttribute("aria-label","Ver a fotografia inteira do afloramento de Trinidad Lake");Dr.hidden=!0;Kb.appendChild(Dr);function Wf(s){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(128,128,0,128,128,128);s.forEach(([r,a])=>n.addColorStop(r,a)),t.fillStyle=n,t.fillRect(0,0,256,256);let i=new mh(e);return i.colorSpace=Lt,i}function Xb(s,e,t,n=!1){let i=Is(11+s),r=new Float32Array(s*4);for(let u=0;u<s;u++){let h=e(i);r.set([h[0],h[1],h[2],i()],u*4)}let a=new Bn(1,1),o=new ws;o.index=a.index,o.setAttribute("position",a.attributes.position),o.setAttribute("uv",a.attributes.uv),o.setAttribute("aP",new Pn(r,4)),o.instanceCount=s;let c=new ze({uniforms:{uT:{value:0},uO:{value:0},uLight:{value:1},uSize:{value:t},uSpot:{value:new I(-5.4,5.6,3.4)},uAxis:{value:new I(0,-1,0)}},transparent:!0,depthWrite:!1,vertexShader:`attribute vec4 aP;uniform float uT,uSize;uniform vec3 uSpot,uAxis;varying float vS;varying float vL;varying vec2 vUv;${vt}
      void main(){vec3 p=aP.xyz;float seed=aP.w;vUv=uv;
        ${n?"p.y=mod(p.y-uT*(.05+.07*seed),7.);p.x+=.05*sin(uT*.3+seed*20.);p.z+=.05*cos(uT*.25+seed*13.);":"p.x+=.02*sin(uT*.21+seed*31.);p.y+=.015*cos(uT*.17+seed*17.)-uT*(.05+.06*seed);p.y=mod(p.y+.6,1.2)-.6;"}
        vec4 mv=modelViewMatrix*vec4(p,1.);vS=seed;
        ${n?"vec3 w=(modelMatrix*vec4(p,1.)).xyz;vec3 d=w-uSpot;float along=dot(d,uAxis);float perp=length(d-uAxis*along);vL=1.-sst(.2*along,.42*along+.3,perp);":"vL=1.;"}
        mv.xy+=position.xy*uSize*(.35+seed*.9);gl_Position=projectionMatrix*mv;}`,fragmentShader:`${vt}uniform float uO,uLight;varying float vS;varying float vL;varying vec2 vUv;
      void main(){float d=length(vUv-.5)*2.;float a=pow(max(1.-d,0.),1.6);
        vec3 c=mix(vec3(.30,.24,.19),vec3(1.,.9,.76),uLight*vL);
        gl_FragColor=vec4(c,a*uO*(.25+.75*vS)*(${n?".15+.85*vL":"1."}));}`}),l=new we(o,c);return l.frustumCulled=!1,l}function Ji(s,{srgb:e=!1,repeat:t=!0,aniso:n=8,fmt:i=""}={}){return new Promise((r,a)=>{let o=new Image;o.decoding="async",o.onload=()=>{let c=new tn(o);c.colorSpace=e?Lt:Sn,i==="r"?(c.format=Ts,c.internalFormat="R8",c.unpackAlignment=1):i==="rg"&&(c.format=rs,c.internalFormat="RG8",c.unpackAlignment=1),c.anisotropy=Math.min(n,tt.capabilities.getMaxAnisotropy()),c.generateMipmaps=!0,c.minFilter=fn,c.needsUpdate=!0,c.wrapS=t?kn:ti,r(c)},o.onerror=a,o.src=Fl(s)})}async function eR(){let s=be("loadbar"),e=o=>{s.style.width=(o*100).toFixed(0)+"%"};e(.1),qe.uCloud.value=await X_(tt,pi()?2048:4096,66,8,Pb),e(.3);for(let o of Fb)qe[o].value=Eg;[qe.uGlobeLook.value,qe.uCloudLook.value]=await Promise.all([Ji(pi()?"img/terra66-paleomap-2048.webp?v=terra-final":"img/terra66-paleomap.webp?v=terra-final"),Ji(pi()?"img/terra66-nuvens-2048.webp?v=terra-final":"img/terra66-nuvens.webp?v=terra-final")]),e(.4),Object.assign(N,jb),Kc(!0);try{Ir(!0)}catch(o){console.warn(o)}es.firstEarth=performance.now(),oR(),Rt.seek(0),mt.dataset.state="ready",un("ready"),be("btn-iniciar").disabled=!1,be("btn-assistir").disabled=!1,be("btn-iniciar-txt").textContent="Come\xE7ar",es.ready=performance.now(),Cn(),await new Promise(o=>setTimeout(o,80)),Cf=Zx(),Cf.transparent=!0,Zi=new we(Jx(),Cf),Zi.scale.setScalar(Ds);let t=new Rn().setFromAxisAngle(zb,1.1).premultiply(Gb),n=Zi.geometry.attributes.position,i=new I,r=new I,a=1/0;for(let o=0;o<n.count;o++){i.fromBufferAttribute(n,o).multiplyScalar(Ds).applyQuaternion(t);let c=i.dot(en);c<a&&(a=c,r.copy(i))}wg.copy(en).sub(r),Zi.renderOrder=3,Zi.visible=!1,hn.add(Zi),Vb=Ds,e(1),Dg(0)}async function tR(){let s=window.KPG_RASTER,e=window.KPG_PALEO,t=await Promise.all([Ji(pi()?"img/terras-hoje-2048.png":"img/terras-hoje-4096.png",{aniso:1,fmt:"r"}),Ji("img/terras-hoje-golfo-2048.png",{repeat:!1,aniso:1,fmt:"r"}),Ji("img/terra-hoje-bmng-global.jpg"),Ji(s.aux,{fmt:"rg"}),Ji("img/terra-hoje-bmng-golfo.jpg",{repeat:!1}),Ji(s.golfoAux,{repeat:!1,fmt:"rg"}),Ji(e.terra66),Ji(e.deriva[0]),Ji(e.deriva[1]),Ji(e.deriva[2]),Ji(e.sup66)]);for(let n of t)await Pb(),tt.initTexture(n);Fb.forEach((n,i)=>{qe[n].value=t[i]}),qe.uRegional.value=qe.uDayHi.value,qe.uRegionContext.value=qe.uDay.value}async function nR(){ps=(await Va().loadAsync("modelos/bloco-camadas-kpg.glb")).scene;let e=ps.userData.alturaTotal?ps.userData:ps.children[0]?.userData||{},t=e.alturaTotal||2.4;e.escalaCmPorUnidade&&(Bc=1/e.escalaCmPorUnidade),ps.traverse(n=>{n.isMesh&&(n.castShadow=n.receiveShadow=!0,ZI(n.geometry),n.material.flatShading=!1,$I(n.material),n.material.clippingPlanes=[iu],n.material.clipShadows=!0)}),ps.position.y=Rr.h+t/2,Ht.add(ps),ct={bottom:Rr.h,top:Rr.h+t,center:Rr.h+t/2,clay:ps.position.y+(e.limiteY??0),clayH:e.argilaEspessura||.2,w:e.largura||2.9,d:e.profundidade||1.25},Ni.target.position.set(0,ct.center,0);{ps.updateMatrixWorld(!0);let n=new wh,i=[];for(let a of[-.3,-.1,.1,.3,.5]){n.set(new I(a,ct.clay,6),new I(0,0,-1));let o=n.intersectObject(ps,!0)[0];o&&i.push(o.point.z)}ct.front=i.length?Math.max(...i):ct.d/2,n.set(new I(-.15,9,.1),new I(0,-1,0));let r=n.intersectObject(ps,!0)[0];ct.perch=r?r.point:new I(-.15,ct.top,.1)}rR();{let n=window.KPG_FOTO,i=new Image;i.src=Fl(n.src),await i.decode();let r=new tn(i);r.colorSpace=Lt,r.anisotropy=8,r.generateMipmaps=!0,r.minFilter=fn,r.needsUpdate=!0,Ft=JI(r,i.naturalWidth/i.naturalHeight),be("lb-img").dataset.src=n.full||n.src,be("lb-img").alt=n.alt,be("lb-cap").innerHTML=n.legenda,be("foto-credito-painel").innerHTML="<b>Fotografia do limite</b> \xB7 "+n.legenda,be("foto-credito").innerHTML=`${n.credito} \xB7 <a href="${n.url}" target="_blank" rel="noopener">p\xE1gina do arquivo</a>`}Dg(1)}async function iR(){mn=Wx({renderer:tt}),An=sR(Gc),An.root.visible=!1,mn.scene.add(An.root),mn.attach?.(tt,An),await mn.ready,await An.ready.catch(s=>console.error("Free Eagle: modelo n\xE3o carregou",s)),aR(),Dg(2)}var sR=()=>hx("aguia");function rR(){[[0,15328472],[1,1053460]].forEach(([e,t])=>{let n=new we(new ni(5*Bc,.012,.05),new zn({color:t,roughness:.6}));n.position.set((e+.5)*5*Bc,.006,0),n.castShadow=n.receiveShadow=!0,nu.add(n)});let s=new we(new ni(10*Bc+.012,.008,.062),new zn({color:1053460,roughness:.6}));s.position.set(5*Bc,.004,0),nu.add(s),nu.position.set(-1.25,Rr.h,ct.front+.25),Ht.add(nu)}function aR(){jI=new gh(Array.from({length:41},(s,e)=>wc(62+13.2*e/40)))}function Dg(s){if(s===0&&($t("Lpaleo",0,En(43.7,-77.1,1.002),"Terra no fim do Cret\xE1ceo<small>paleogeografia \xB7 Scotese e Wright, 2018</small>",""),$t("Lbody",0,new I,"Asteroide de Chicxulub \xB7 apar\xEAncia hipot\xE9tica<small>\u224810 km de di\xE2metro (estimativa) \xB7 em escala com a Terra \xB7 forma desconhecida</small>","left"),$t("Lcav",0,new I,"Cavidade em forma\xE7\xE3o<small>\u2248100 km no primeiro minuto \xB7 simula\xE7\xF5es</small>","fato"),$t("Lplume",0,KI,"Pluma de vapor e poeira<small>passa do topo da atmosfera \xB7 apar\xEAncia interpretada</small>",""),$t("Lcoast",0,En(20.2,-88.6,1.00008),"Yucat\xE1n<small>M\xE9xico \xB7 hoje</small>","below fixed zoom-coast"),$t("Lcrater",0,En(21.3-90/6371/Mn,-89.5,1.00008),"1<small>Esquema</small>","hip below fixed zoom-crater"),$t("Lwell",0,Hf,"2<small>Local medido</small>","fato left fixed zoom-well"),$t("Ldrift",0,En(46,-98,1.002),"Continentes",""),$t("Lmark",0,En(50.78-1.9,-83.45,1.006),"Mesma regi\xE3o<small>onde hoje fica Hell Creek, Montana</small>","below"),$t("Llayer",0,En(30,-70,1.02),"Part\xEDculas no alto da atmosfera<small>representa\xE7\xE3o</small>","")),s===1){let e=ct.w/2+.12,t=ct.front-.02;if($t("Llayers",1,new I(e,ct.clay+.5,t),"Pale\xF3geno<small>depois do limite</small>","flat"),$t("Lclay",1,new I(e+.06,ct.clay,t+.04),'Camada do limite K\u2013Pg<small>argila \xB7 7\u201310 cm <i class="q">em Caravaca</i> \xB7 sem peda\xE7o do meteoro</small>',"flat accent fixed"),$t("Llayers",1,new I(e,ct.clay-.6,t),"Cret\xE1ceo<small>antes do limite</small>","flat"),$t("Lfall",1,new I(.3,ct.top+.18,0),"Poeira, fuligem e esf\xE9rulas assentam<small>dias a anos depois do impacto \xB7 esquema</small>","fixed","p"),$t("Lfall",1,new I(-ct.w/2-.08,ct.clay+.12,ct.front),"Poeira, fuligem e esf\xE9rulas assentam<small>dias a anos depois do impacto \xB7 esquema</small>","left fixed","l"),$t("Lcover",1,new I(.3,ct.top+.18,0),"Camadas mais novas cobrem a argila<small>ao longo de milhares a milh\xF5es de anos</small>","fixed","p"),$t("Lcover",1,new I(-ct.w/2-.08,ct.clay+.12,ct.front),"Camadas mais novas cobrem a argila<small>ao longo de milhares a milh\xF5es de anos</small>","left fixed","l"),$t("Lrock",1,new I(-ct.w/2+.1,ct.top-.05,0),"Bloco esquem\xE1tico<small>baseado em Caravaca, Espanha \xB7 n\xE3o \xE9 uma pe\xE7a real</small>","left"),$t("Lscale",1,nu.localToWorld(new I(5*Bc,.02,.03)),"10 cm","below"),Ft){let{w:n,h:i}=Ft.userData;Ft.updateMatrixWorld(),$t("photo",1,Ft.localToWorld(new I(-n/2,-i/2-.02,.03)),window.KPG_FOTO.rotulo,"below fixed")}}s===2&&($t("Lband",2,new I(-.55,mn.LIM,.055),"Limite K\u2013Pg<small>faixa esquem\xE1tica</small>","flat accent fixed"),$t("Lafter",2,new I(-.55,.02,.055),"Rocha e faixa<small>modelos esquem\xE1ticos</small>","flat fixed"),Sc||$t("Lbird",2,new I,qb[Gc],"fixed ceu"))}var on=[0,10.5,24,37,49,62],Ui=[9.2,22.8,35.8,47.8,60.8,75.2],Yb=76,ma=17,ru=[38.7,41.7],pt=49,au=62,Rt;function Tc(s,e,t={}){let n=s.length(),i=Math.asin(s.y/n)/Mn,r=Math.atan2(-s.z,s.x)/Mn;return r<0&&(r+=360),{clat:i,clon:r,cdist:n,tx:e.x,ty:e.y,tz:e.z,upm:1,sx:0,sy:0,px:0,fov:32,...t}}var Ks=s=>s.clone(),jb={clat:14,clon:312,cdist:6.2,tx:0,ty:0,tz:0,sx:.15,sy:.04,px:0,upm:0,fov:30,sunLat:12,sunLon:-6},lu={};function oR(){Rt=fs.timeline({paused:!0,defaults:{immediateRender:!1},onComplete:()=>Uf("ended")});let s=(q,ie,pe,Ee,Q="power2.inOut")=>Rt.fromTo(N,q,{...ie,duration:pe,ease:Q},Ee),e=kt,t=jb,n={clat:20,clon:292,cdist:4.5,tx:0,ty:0,tz:0,sx:.14,sy:.03,px:0,upm:0,fov:30},i=(q,ie,pe)=>Ks(en).addScaledVector(e.hSE,q).addScaledVector(e.hNE,ie).normalize().multiplyScalar(1+pe),r=Tc(i(-.074,-.024,.047),Ks(en).addScaledVector(e.up,.0065).addScaledVector(e.hNE,.006),{fov:34,sx:.03,sy:.02}),a=Tc(i(-.066,-.02,.043),Ks(en).addScaledVector(e.up,.007).addScaledVector(e.hNE,.003),{fov:34,sx:.03,sy:.02}),o=ng(_f,!1),c=Tc(Ff(o.pos),Ff(o.tgt),{fov:o.fov,sx:.04,sy:.02}),l=52*Mn,u=Tc(Ks(en).multiplyScalar(Math.cos(l)).addScaledVector(e.hSE,Math.sin(l)).multiplyScalar(1.42),Ks(en).multiplyScalar(1.03).addScaledVector(e.hNE,.05),{upm:1,fov:34,sx:.08,sy:.02}),h={clat:33,clon:284,cdist:4.4,tx:0,ty:0,tz:0,sx:.05,sy:.03,px:0,upm:0,fov:30},f=new I(0,1,0).cross(Aa).normalize(),d=Ks(Aa).cross(f).normalize(),g=Tc(Ks(Aa).multiplyScalar(2.35).addScaledVector(d,-.95).addScaledVector(f,-.25),Ks(Aa).multiplyScalar(.55).addScaledVector(d,-.1),{upm:1,fov:34,sx:.07,sy:.03}),A=Tc(Ks(Aa).multiplyScalar(2.15).addScaledVector(d,-.85).addScaledVector(f,-.12),Ks(Aa).multiplyScalar(.55).addScaledVector(d,-.08),{upm:1,fov:34,sx:.07,sy:.03}),m={clat:20,clon:292,cdist:4.5,tx:0,ty:0,tz:0,sx:.14,sy:.03,px:0,upm:0,fov:30},p={clat:20,clon:288,cdist:4.4,tx:0,ty:0,tz:0,sx:.12,sy:.03,px:0,upm:0,fov:30},_=En(21.9,-89.7,1),x=En(20.8,-89.5),v={clat:18.4,clon:270.5,cdist:1.13,tx:x.x,ty:x.y,tz:x.z,sx:.12,sy:.12,px:0,upm:1,fov:34};Object.assign(lu,{OPEN:t,C1:n,CE:r,CI2:a,CI3:c,C4u:u,C4a:h,C4c:g,C4d:A,CW:m,C3b:v}),s(t,n,8.6,0,"power2.inOut"),s({Lpaleo:0},{Lpaleo:1},.6,4.2,"none"),s({Lpaleo:1},{Lpaleo:0},.5,10.5,"none"),Rt.set(N,{impOn:1},10.4);{let ie=_f-10.4,pe=vf(10.4);s({ts:pe},{ts:240},ie,10.4,Ee=>(vf(10.4+Ee*ie)-pe)/(240-pe))}s({lc:0,sx:.14,sy:.03},{lc:1,sx:.04,sy:.02},2.1,10.5,"sine.inOut"),s({Lbody:0},{Lbody:1},.5,12.7,"none"),s({Lbody:1},{Lbody:0},.4,14.3,"none"),Rt.set(N,{curtO:1,plumeO:1},ma),s({scar:0},{scar:.85},.4,ma,"none"),Rt.set(N,{fam0:0,fam1:0},ma),s({partO:0},{partO:1},1,23.8,"none"),s({tau:0},{tau:.42},1.2,ma,"none"),s({tau:.42},{tau:3.6},4,ma+1.2,"power1.inOut"),s({reach:0},{reach:.12},5.2,ma,"power1.out"),s({Lcav:0},{Lcav:1},.5,19.4,"none"),s({Lcav:1},{Lcav:0},.4,21.3,"none"),s({Lplume:0},{Lplume:1},.6,21.6,"none"),s({Lplume:1},{Lplume:0},.4,24.2,"none"),s(c,u,2.4,24,"power2.inOut"),s({lc:1},{lc:0},2.4,24,"power2.inOut"),s({ts:240},{ts:1800},4.4,24,"power1.in"),s({glow:1},{glow:.4},2,24,"none"),s({sunLat:12,sunLon:-6},{sunLat:20,sunLon:-50},4.4,24.2,"sine.inOut"),s({plumeO:1},{plumeO:0},2.8,25.6,"power1.in"),s({lux:1},{lux:.93},2.6,24,"none"),s({lux:.93},{lux:.42},2.8,26.6,"sine.inOut"),s({lux:.42},{lux:.12},3,29.4,"sine.inOut"),s({lux:.12},{lux:.09},3.4,32.4,"none"),s({tau:3.6},{tau:9},5,24,"none"),s({reach:.12},{reach:.5},5,24,"power1.in"),s({haze:0,spread:0,dustK:500},{haze:1,spread:.1,dustK:600},2.8,24.6,"power1.inOut"),s({Llayer:0},{Llayer:1},.6,25.4,"none"),s({Llayer:1},{Llayer:0},.4,27.6,"none"),s(u,h,2.6,26.6,"power2.inOut"),s({fam0:0,fam1:0},{fam0:0,fam1:0},2.4,26.6,"none"),s({spread:.1,dustK:600},{spread:.45,dustK:650},3,27.4,"sine.inOut"),s({partO:1},{partO:0},1.6,28.2,"none"),s({scar:.85},{scar:.15},3,27,"none"),s({mark:0,Lmark:0},{mark:1,Lmark:1},.6,28.4,"none"),s(h,g,2.6,29.4,"power2.inOut"),s({spread:.45,dustK:650},{spread:.85,dustK:800},2.6,30.4,"sine.inOut"),s({spread:.85,dustK:800},{spread:1,dustK:1150},3,33,"sine.inOut"),s(g,A,5.2,32,"sine.inOut"),s({mark:1},{mark:.5},1.2,33.4,"none"),s({mark:.5},{mark:0},.5,36.6,"none"),s({Lmark:1},{Lmark:0},.5,36.4,"none"),s(A,m,2.8,37,"power2.inOut"),s({Ldrift:0},{Ldrift:1},.5,38.4,"none"),s({Ldrift:1},{Ldrift:0},.5,42.2,"none"),s({eras:0},{eras:1},.5,38.2,"none"),s({eras:1},{eras:0},.6,43,"none"),s({haze:1,spread:1,dustK:1150},{haze:0,spread:1,dustK:500},1.8,37.2,"power1.inOut"),s({epoch:0},{epoch:1},ru[1]-ru[0],ru[0],"sine.inOut"),s({sunLat:20,sunLon:-50},{sunLat:24,sunLon:-66},4.2,39.8,"sine.inOut"),s({lux:.09},{lux:1},1.8,37.2,"none"),s({stars:1},{stars:.5},2,37.6,"none"),s({scar:.15},{scar:0},1,37.2,"none"),s(m,p,2.6,39.8,"sine.inOut"),s(p,v,3.6,42,"power2.inOut"),s({Lcoast:0},{Lcoast:1},.6,44.2,"none"),s({crater:0},{crater:1},1.4,44.6,"power1.inOut"),s({craterDraw:0},{craterDraw:1},1.2,44.8,"power2.inOut"),s({Lcrater:0},{Lcrater:1},.6,45.4,"none"),s({Lburied:0},{Lburied:1},.6,45.8,"none"),s({Lschem:0},{Lschem:1},.6,46.2,"none"),s({Lwell:0},{Lwell:1},.6,46.6,"none"),s({Lcoast:1},{Lcoast:0},.5,45.8,"none"),s({Lcrater:1,Lburied:1,Lschem:1,Lwell:1},{Lcrater:0,Lburied:0,Lschem:0,Lwell:0},.45,48.15,"none"),s({dust:0,fall:0},{dust:1,fall:1},1,47.9,"power1.in"),s({veil:0},{veil:.28},.45,48.15,"sine.in"),s({veil:.28},{veil:0},.9,48.6,"sine.out"),Rt.set(N,{set:1,sx:.2,sy:.1,px:0},pt);let M=ct.clay,b=ct.front,C={gx:-1.1,gy:M+.3,gz:b+2.1,gtx:-.3,gty:M+.02,gtz:b,fov:30,gpm:.9,gpx:0,gpy:0},S={gx:-.2,gy:M+.2,gz:b+1.85,gtx:.3,gty:M+.01,gtz:b,fov:30,gpm:.9,gpx:0,gpy:0},E={gx:-1.8,gy:3.3,gz:8.4,gtx:.15,gty:2.05,gtz:0,fov:32,gpm:1,gpx:0,gpy:-.1},y=new I(Math.sin(Pi.ry),0,Math.cos(Pi.ry)),B=new I(Pi.x,Pi.y,Pi.z),U=B.clone().addScaledVector(y,4.6),P=B.clone().addScaledVector(y,5.6),F={gx:P.x,gy:P.y+.1,gz:P.z,gtx:B.x,gty:B.y+.05,gtz:B.z,fov:32,gpm:.9,gpx:0,gpy:-.42,sx:.17,sy:.02,px:0},Y={gx:1,gy:3,gz:8.6,gtx:2.2,gty:2.3,gtz:-.6,fov:32,gpm:.8,gpx:.9,gpy:0,sx:.2,sy:.1,px:0};s({dust:1},{dust:0},.1,pt,"none"),s({gdust:1.6},{gdust:.5},7,pt,"power1.inOut");let z={gx:-2.6,gy:4.6,gz:7.6,gtx:.1,gty:2,gtz:0,fov:32,gpm:1,gpx:0,gpy:-.1},j={gx:-2,gy:3.9,gz:6.9,gtx:.1,gty:2.1,gtz:0,fov:32,gpm:1,gpx:0,gpy:-.1};Object.assign(lu,{GD0:z,GD1:j,E1:S,G1:E,G2:Y,G3:F}),s({...z,sx:.2,sy:.1},{...j,sx:.2,sy:.1},5.4,pt,"sine.inOut"),Rt.set(N,{depo:0},pt-.001),s({fallO:0},{fallO:1},.6,pt+.3,"none"),s({Lfall:0},{Lfall:1},.5,pt+.6,"none"),s({depo:0},{depo:.5},2,pt+.8,"sine.inOut"),s({fallO:1},{fallO:0},.8,pt+2.6,"none"),s({Lfall:1},{Lfall:0},.4,pt+3.1,"none"),s({Lcover:0},{Lcover:1},.5,pt+3.6,"none"),s({depo:.5},{depo:1},2.4,pt+3.5,"sine.inOut"),s({Lcover:1},{Lcover:0},.4,pt+5.8,"none"),s({...j,sx:.2,sy:.1},{...S,sx:.2,sy:.1},2,pt+5.4,"power2.inOut"),s({Lclay:0},{Lclay:1},.6,pt+6.6,"none"),s({...S,sx:.2,sy:.1},{...E,sx:.2,sy:.1},1.8,pt+7.6,"power2.inOut"),s({Lrock:0,Lscale:0,Llayers:0},{Lrock:1,Lscale:1,Llayers:1},.6,pt+8.6,"none"),s({Llayers:1,Lscale:1,Lclay:1},{Llayers:0,Lscale:0,Lclay:0},.5,pt+9.6,"none"),s({photo:0},{photo:1},1.2,pt+9.4,"power2.out"),s({...E,sx:.2,sy:.1,px:0},F,2.4,pt+9.4,"sine.inOut"),s({Lrock:1},{Lrock:0},.5,pt+10,"none"),Rt.set(N,{set:2,px:0,photo:0,bloom:.025,veil:0,dof:0,birdO:1,Lbird:0,Lband:0,Lafter:0,fold:0,legs:0,perch:0},au),Rt.set(N,{bloom:.22},au-.001),Rt.to({},{duration:.5},Yb-.5)}var Fr=[{t:"A Terra no fim do Cret\xE1ceo",p:"H\xE1 66 milh\xF5es de anos, os continentes estavam em outras posi\xE7\xF5es. O Atl\xE2ntico era mais estreito, e a \xCDndia ainda seguia rumo \xE0 \xC1sia.",k:[["est","Terras e mares: reconstru\xE7\xE3o paleogeogr\xE1fica"],["inc","Cores e nuvens: interpreta\xE7\xE3o"]]},{t:"O impacto",p:"Um asteroide de cerca de 10 km, vindo de nordeste, caiu num mar raso sobre rochas sedimentares, onde hoje fica o Yucat\xE1n. Rocha vaporizada e fragmentos subiram al\xE9m da atmosfera.",k:[["inc","Apar\xEAncia do asteroide e da explos\xE3o: hipot\xE9tica"],["est","\u224810 km \xB7 \u224860\xB0 \xB7 processos de simula\xE7\xF5es"]]},{t:"O c\xE9u escureceu",p:"Nas primeiras horas, o material lan\xE7ado se espalhou pelo alto da atmosfera em volta do globo. Depois, fuligem, poeira fina e enxofre barraram parte da luz do Sol: modelos indicam meses a anos de penumbra.",k:[["est","Tempos: modelos clim\xE1ticos"],["inc","Camada e escurecimento: representa\xE7\xE3o"]]},{t:"A cratera continua l\xE1",p:"Hoje, sob a costa de Yucat\xE1n. Rochas mais jovens cobrem Chicxulub; gravimetria, s\xEDsmica e perfura\xE7\xF5es revelam o que a imagem n\xE3o mostra.",k:[]},{t:"O que caiu ficou na rocha",p:"Uma camada fina guarda sinais do impacto. O esquema acompanha sua forma\xE7\xE3o; a fotografia mostra o registro em outro afloramento.",k:[["hip","Bloco: esquema \xB7 Caravaca"],["fato","Foto: Trinidad Lake, Colorado"]]},{t:"Quem atravessou a linha",p:"Os dinossauros n\xE3o avianos desapareceram. Linhagens de aves atravessaram o limite. Esta ave de rapina representa seus descendentes vivos.",k:[["inc","Ave atual \xB7 modelo em avalia\xE7\xE3o"]]}];Fr[5].p="Os dinossauros n\xE3o avianos desapareceram. Linhagens de aves atravessaram o limite. Esta ave de rapina, um modelo 3D em avalia\xE7\xE3o, representa seus descendentes vivos.";Fr[5].k=[["inc","\xC1guia atual \xB7 modelo art\xEDstico \xB7 cena 3D do presente"]];Sc&&(Fr[5].p="Os dinossauros n\xE3o avianos desapareceram. Linhagens de aves atravessaram o limite, e as aves de hoje descendem delas.",Fr[5].k=[["inc","Vale imaginado \xB7 cena 3D do presente"]]);var Ao=-2,_b=0;function ug(s){let e=0;for(let t=0;t<on.length;t++)s>=on[t]-.001&&(e=t);return e}var Jb=[0,0,0,2,0,1.7];function hg(s){let e=0;for(let t=0;t<on.length;t++)s>=on[t]+Jb[t]-.001&&(e=t);return e}function Lf(s){if(s===Ao)return;Ao=s;let e=be("caption");if(mt.dataset.chapter=String(s+1),s<0){e.classList.remove("on"),fg();return}e.classList.remove("on"),clearTimeout(_b);let t=()=>{be("cap-step").textContent=`${s+1} / 6`,be("cap-title").textContent=Fr[s].t,be("cap-text").textContent=Fr[s].p,be("cap-marks").innerHTML=Fr[s].k.map(([n,i])=>`<li><span class="m ${n}">${i}</span></li>`).join(""),e.classList.add("on")};Zn||Li?t():_b=setTimeout(t,280),fg()}var Zb=be("rail");Fr.forEach((s,e)=>{let t=document.createElement("li");t.innerHTML=`<button aria-label="Ir para o momento ${e+1}: ${s.t}"><span class="bar"><i></i></span><span class="t">${s.t}</span></button>`,t.querySelector("button").addEventListener("click",()=>go(e)),Zb.appendChild(t)});function fg(){let s=Rt?Rt.time():0,e=mt.dataset.state!=="ready"&&mt.dataset.state!=="loading";[...Zb.children].forEach((t,n)=>{let i=on[n],r=n<5?on[n+1]:Yb,o=`scaleX(${(e?Zn?n<=Ao?1:0:Math.min(1,Math.max(0,(s-i)/(r-i))):0).toFixed(3)})`,c=e&&n===Ao,l=o+c;t._k!==l&&(t._k=l,t.querySelector("i").style.transform=o,t.classList.toggle("on",c),t.querySelector("button").setAttribute("aria-current",c?"step":"false"))})}function Uf(s){if(mt.dataset.state===s)return;mt.dataset.state=s;let e=s==="playing"||s==="transit",t=be("btn-play");t.querySelector(".ico").className="ico "+(e?"pause":s==="ended"?"replay":"play"),t.setAttribute("aria-label",e?"Pausar":s==="ended"?"Assistir de novo":"Assistir sequ\xEAncia")}var Ic=Ui[5],Ae=0,fu=!1,De="ready",yn=0,ln=-1,dg="playing",pg=0,Jn=0,mo="playing",cR=[3.2,3.2,3,4.6,3.6],$b=.6,lR=$b*Math.sqrt(Math.PI);function xb(s){let e=1;for(let t=0;t<5;t++){let n=(s-Ui[t])/$b;n>-3&&n<3&&(e+=cR[t]/lR*Math.exp(-n*n))}return 1/e}var gs={exitBack:null,exitForward:null,onState:null};function un(s){Ug(),s==="transit"&&(pg=Ae),Cn(),De=s,fu=s==="playing",Uf(s==="hold"?"paused":s),Fg(),gs.onState?.(s)}function Fg(){let s=be("btn-next"),e=be("btn-next-t");s.setAttribute("aria-disabled","false"),e.textContent=De==="ended"?uu?"Voltar ao in\xEDcio da viagem":"Voltar ao in\xEDcio":ln<0&&De==="ready"?"Come\xE7ar":"Pr\xF3ximo momento",s.setAttribute("aria-label",De==="ended"?"Voltar ao in\xEDcio":"Ir ao pr\xF3ximo momento")}function uR(s){let e=(t,n)=>ot.smoothstep(s,t-.3,t+.3)*(1-ot.smoothstep(s,n-.3,n+.3));return 1+.6*e(22.85,24)+.3*e(24,29)+.35*e(29,32)+1*e(32,35.2)+.1*e(35.2,35.75)}var bb=s=>(1+.36*ot.smoothstep(s,.2,1.4)*(1-ot.smoothstep(s,7.8,9.2)))*uR(s);function Of(s){if(Ug(),!Rt)return;if(De==="playing"||De==="transit"){let a=De==="transit"?yn:Math.min(Ic,Ae+1.5),o=Zf(Ae,a);if(o&&!Fs[o])return Jn=0,Og(cn(o),Cn),lE}let e=0,t=.24;if(De==="playing")e=bb(Ae)*xb(Ae);else if(De==="transit"){let a=yn-Ae,o=Math.sign(a)||1,c=Math.abs(a);e=o*Math.min(14,Math.max(.35,c*2.4)),o>0&&mo==="playing"&&(e=Math.max(e,bb(Ae)*xb(Ae)))}else t=.12;Jn+=(e-Jn)*(1-Math.exp(-s/t)),Math.abs(Jn)<1e-4&&e===0&&(Jn=0);let n=Ae;if(Ae=Math.max(0,Math.min(Ic,Ae+Jn*s)),De==="transit"?((yn-n)*(yn-Ae)<=0||Math.abs(yn-Ae)<.002)&&(Ae=yn,Jn<0&&(Jn=0),ln=ug(Ae),un(Ae>=Ic-1e-4?"ended":mo),Ei()):De==="playing"&&(ln=ug(Ae)),De==="playing"&&Ae>=Ic-1e-4&&(Ae=Ic,Jn=0,ln=5,un("ended"),Ei(),gs.exitForward?.("fim")),Rt.seek(Ae,!1),De==="transit"){let a=yn-pg;be("btn-next").style.setProperty("--p",Math.max(0,Math.min(1,Math.abs(a)>.001?(Ae-pg)/a:1)).toFixed(3))}else be("btn-next").style.setProperty("--p","0");let i=be("opening"),r=De==="ready"?1:Math.max(0,1-Ae/.5);i.style.opacity=r.toFixed(3),i.style.visibility=r>.01?"visible":"hidden",i.style.transform=`translateY(${((1-r)*-24).toFixed(1)}px)`,i.style.pointerEvents=r>.5?"auto":"none"}var eE=s=>{for(let e=0;e<6;e++)if(Ui[e]>s+.05)return e;return-1},hR=s=>{for(let e=5;e>=0;e--)if(Ui[e]<s-.3)return e;return-1};function qf(s,e){if(ln=s,yn=Ui[s],Zn){Jn=0,Ae=yn,un(ln===5?"ended":"hold"),Rt.seek(Ae,!1),Cn();return}mo=e,un("transit")}var Kf=()=>De==="paused"||De==="hold"||De==="transit"&&mo==="hold";function fR(){let s=eE(Ae-.1);qf(s<0?5:s,Kf()?"hold":"playing")}function _o(){if(Xf(),ya="",mt.classList.remove("inspeciona-recurso"),mt.dataset.state==="loading")return;if(De==="ready"){pu();return}if(De==="ended"){gs.exitForward?gs.exitForward("seta"):go(-1);return}let s=De==="transit"&&yn>Ae?yn:Ae,e=eE(s);if(e<0){gs.exitForward&&gs.exitForward("seta");return}{let t=Zf(Ui[e]);if(t&&!Fs[t]){Og(cn(t),()=>_o());return}}qf(e,Kf()?"hold":"playing"),Vc()}function du(){if(Xf(),ya="",mt.classList.remove("inspeciona-recurso"),mt.dataset.state==="loading")return;if(De==="ready"){gs.exitBack?.();return}let s=De==="transit"&&yn<Ae?yn:Ae,e=hR(s);if(e<0){if(gs.exitBack){gs.exitBack();return}if(ln=-1,yn=0,Zn){Ae=0,un("ready"),Rt.seek(0,!1);return}mo="ready",un("transit"),Ei();return}qf(e,Kf()?"hold":"playing"),Ei()}function go(s,e=!Kf()){Xf(),ya="",mt.classList.remove("inspeciona-recurso");{let t=Zf(s<0?0:Ui[Math.min(5,s)]);if(t&&!Fs[t]){Og(cn(t),()=>go(s,e));return}}mt.dataset.state!=="loading"&&(s=Math.max(-1,Math.min(5,s)),dR(()=>{ln=s,Ae=s<0?0:Ui[s],yn=Ae,Jn=0,un(s<0?"ready":s===5?"ended":e&&!Zn?"playing":"hold"),Rt.seek(Ae,!1)}))}function pu(){if(De==="ready"){if(ln=0,Jn=0,Zn){qf(0,"hold");return}un("playing"),Vc()}}function Au(){if(ya="",mt.classList.remove("inspeciona-recurso"),mt.dataset.state!=="loading"){if(Zn){_o();return}if(De==="playing"||De==="transit"){dg=De==="transit"&&mo!=="playing"?"playing":De,De==="transit"&&(mo="playing"),un("paused"),Ei();return}if(De==="paused"||De==="hold"){un(De==="paused"&&dg==="transit"?"transit":"playing"),Vc();return}if(De==="ended"&&(Ae=0,Jn=0,ln=0,Rt.seek(0,!1)),De==="ready"){pu();return}un("playing"),Vc()}}var Ag=0;function Ei(){mt.classList.remove("ui-off"),clearTimeout(Ag),fu&&Vc()}function Vc(){clearTimeout(Ag),Ag=setTimeout(()=>{fu&&ba.hidden&&mt.classList.add("ui-off")},2200)}addEventListener("pointermove",s=>{s.pointerType==="mouse"&&Ei()},{passive:!0});var Nc={v:0};function dR(s){if(Li||Zn){s();return}fs.killTweensOf(Nc),fs.to(Nc,{v:.25,onUpdate:Cn,duration:Zn?.18:.28,ease:"power1.in",onComplete:()=>{s(),fs.to(Nc,{v:0,onUpdate:Cn,duration:Zn?.25:.5,ease:"power1.out"})}})}be("btn-iniciar").addEventListener("click",pu);be("btn-assistir").addEventListener("click",()=>{De==="ready"&&Au()});be("btn-play").addEventListener("click",Au);be("btn-next").addEventListener("click",()=>{if(Ei(),uu&&De==="ended"&&gs.exitForward){gs.exitForward("cta");return}_o()});be("btn-prev").addEventListener("click",()=>{Ei(),du()});var lo=null;function Xf(){va.on&&Ub(!1),lo&&(De=lo,fu=De==="playing",lo=null)}be("btn-corte").addEventListener("click",()=>{Ei();let s=!va.on;if(s&&(De==="playing"||De==="transit")&&(lo=De,un("paused")),Ub(s),!s&&lo){let e=lo;lo=null,un(e)}});var tE=s=>s&&s.closest&&s.closest(".panel,.lightbox,.caption,.final-credit,.regional-credit,.resource-inspector"),Zl=0,Eb=0,Wc=!1,Pg=0;function nE(s){Ei(),Wc=!0,Pg=performance.now(),s>0?_o():du()}addEventListener("wheel",s=>{if(tE(s.target))return;mu(),s.preventDefault();let e=performance.now(),t=s.deltaY*(s.deltaMode===1?16:s.deltaMode===2?innerHeight:1);if(Wc){Pg=e;return}if(e-Eb>260&&(Zl=0),Eb=e,Zl+=t,Math.abs(Zl)>60){let n=Math.sign(Zl);Zl=0,nE(n)}},{passive:!1});function mu(){Wc&&performance.now()-Pg>420&&(Wc=!1)}var kc=null;addEventListener("touchstart",s=>{if(tE(s.target)||s.target.closest&&s.target.closest(".controls,.top,.opening-actions")){kc=null,Ei();return}kc=s.touches[0].clientY},{passive:!0});addEventListener("touchmove",s=>{kc!==null&&s.preventDefault()},{passive:!1});addEventListener("touchend",s=>{if(kc===null)return;let e=kc-s.changedTouches[0].clientY;if(kc=null,Math.abs(e)<48){Ei();return}mu(),!Wc&&nE(Math.sign(e))},{passive:!0});var ba=be("painel-fontes"),iE=null,Ea=!1;function sE(){iE=document.activeElement,ba.hidden=!1,be("btn-fontes").setAttribute("aria-expanded","true"),Ea=De==="playing"||De==="transit"?De:!1,Ea&&un("paused"),Ei(),be("t-fontes").focus()}function gu(){ba.hidden=!0,be("btn-fontes").setAttribute("aria-expanded","false"),Ea&&(un(Ea),Vc()),iE?.focus()}be("btn-fontes").addEventListener("click",()=>ba.hidden?sE():gu());be("btn-fechar").addEventListener("click",gu);ba.addEventListener("click",s=>{s.target===ba&&gu()});document.querySelector(".skip").addEventListener("click",s=>{s.preventDefault(),sE()});be("btn-movimento").addEventListener("click",()=>Yf(!Zn));function Yf(s){Zn=s,mt.classList.toggle("reduced",s),be("btn-movimento").setAttribute("aria-pressed",String(s)),be("btn-movimento").textContent=s?"Ver com movimento":"Ver com movimento reduzido",s&&(De==="playing"||De==="transit"||De==="paused")&&fR(),be("btn-assistir").hidden=s}Tb.addEventListener?.("change",s=>Yf(s.matches));var qc=be("lightbox");Dr.addEventListener("click",()=>{Ea=De==="playing"||De==="transit"?De:!1,Ea&&un("paused");let s=be("lb-img");s.dataset.src&&!s.getAttribute("src")&&(s.src=s.dataset.src),qc.hidden=!1,be("lb-close").focus()});function jf(){qc.hidden=!0,Ea&&un(Ea),Dr.focus()}be("lb-close").addEventListener("click",jf);qc.addEventListener("click",s=>{s.target===qc&&jf()});addEventListener("keydown",s=>{if(s.altKey||s.ctrlKey||s.metaKey||s.repeat)return;if(!qc.hidden){s.key==="Escape"&&jf();return}if(!ba.hidden){s.key==="Escape"&&gu();return}if(mt.dataset.state==="loading")return;Ei();let e=document.activeElement?.tagName;if(!/^(INPUT|TEXTAREA|SELECT)$/.test(e))if(s.key===" "||s.key==="k"||s.key==="K"){if(e==="BUTTON"&&s.key===" ")return;s.preventDefault(),Au()}else/^(ArrowRight|ArrowDown|PageDown)$/.test(s.key)?(s.preventDefault(),_o()):/^(ArrowLeft|ArrowUp|PageUp)$/.test(s.key)?(s.preventDefault(),du()):s.key==="Home"?go(-1):/^[1-6]$/.test(s.key)&&go(+s.key-1)});var ya="",mg=be("resource-inspector");be("btn-modelos").onclick=()=>{mg.hidden=!mg.hidden};be("ver-rock").onclick=()=>{N.set===2&&(dg=De,un("paused"),ya="rock",mt.classList.add("inspeciona-recurso"),Cn())};be("voltar-camera").onclick=()=>{ya="",mt.classList.remove("inspeciona-recurso"),mg.hidden=!0,Cn()};var PB=new Kn,ag={position:new I,target:new I},Cr=new I,If=new I,Lg=new I,ou=new I(0,1,0),yb=new I,bf=new I,pR=new I,LB=new hc,ga=0,Br=0,Js=0,Jf=0;document.fonts?.addEventListener?.("loadingdone",()=>{Jf++});function Kc(s=!1){Jf++;let e=be("stage"),t=e.clientWidth||innerWidth,n=e.clientHeight||innerHeight;if(!s&&t===Br&&Math.abs(n-Js)<Js*.2)return!1;Br=t,Js=n,tt.setSize(t,n,!1),di.setSize(t,n);let i=Math.min(1,1440/t,900/n);return zf.setSize(Math.round(t*i),Math.round(n*i)),_g=!1,xg.setSize(Math.round(t*i),Math.round(n*i)),bg=!1,Pc.resolution.set(t,n),Ie.aspect=t/n,Mg.material.uniforms.uPx.value=1.6*tt.getPixelRatio()/n,!0}addEventListener("resize",()=>{Kc()&&Rt&&Ir(!0)});Qf.addEventListener("webglcontextlost",s=>{s.preventDefault(),mt.classList.add("glperdido")});Qf.addEventListener("webglcontextrestored",()=>location.reload());var Hc=0,Xs=0,Bs=0,Xc=!0,rE=0,gg=60,es={firstEarth:0,ready:0,backgroundReady:0,cpuMs:0,calls:0,triangles:0,intervalMs:[]};function Cn(){!Li&&!document.hidden&&Xc&&!Hc&&(Hc=requestAnimationFrame(AR))}function AR(s){if(Hc=0,document.hidden||!Xc){Xs=0;return}let e=De==="playing"||De==="transit"||Math.abs(Jn)>.001||fs.isTweening(Nc);if(e&&Bs&&s+.05<Bs){Cn();return}if(e){let n=1e3/gg;Bs=Bs?Bs+n:s+n,Bs<s-n&&(Bs=s+n)}else Bs=0;let t=Xs?Math.min((s-Xs)/1e3,.1):0;if(e&&Xs&&(es.intervalMs.push(s-Xs),es.intervalMs.length>180&&es.intervalMs.shift()),Xs=s,e){if(Of(t)===lE){Xs=0,Bs=0;return}ga+=t,mu()}else Of(0);Ir(!0),De==="playing"||De==="transit"||Math.abs(Jn)>.001||fs.isTweening(Nc)?Cn():Xs=0}function Qc(s){Xc=!!s,Hc&&cancelAnimationFrame(Hc),Hc=0,Xs=0,Bs=0,s&&Cn()}document.addEventListener("visibilitychange",()=>Qc(Xc));var aE=new IntersectionObserver(s=>Qc(s[0].isIntersecting));aE.observe(document.querySelector("[data-kpg-viewport]")||Qf);for(let s of["click","keydown","wheel","touchstart","touchend","pointerup"])document.addEventListener(s,Cn,{passive:!0});var Ef=0,Nf=0;uu&&(aE.disconnect(),Qc(!1),be("hint").textContent="A sequ\xEAncia segue sozinha. Setas, rolagem e toque avan\xE7am ou voltam; espa\xE7o pausa.",window.__kpgEmbed={embed:gs,get mode(){return De},get T(){return Ae},get cur(){return ln},get built(){return{...Fs}},get loaded(){return!!Rt&&mt.dataset.state!=="loading"},preload(s){Nf=Math.max(Nf,s),Rt&&(cn("E"),s>=2&&cn("H"),s>=3&&cn("G"),s>=4&&cn("V"))},enter({autoplay:s=!0,moment:e=-1,delay:t=2600}={}){clearTimeout(Ef),Qc(!0),Kc(!0);let n=()=>{if(!Rt||mt.dataset.state==="loading"){Ef=setTimeout(n,150);return}if(Xf(),ba.hidden||gu(),qc.hidden||jf(),e>=0){go(e,s&&!Zn);return}De!=="ready"&&(ln=-1,Ae=0,yn=0,Jn=0,Rt.seek(0,!1),un("ready")),Ei(),Cn(),s&&!Zn&&(Ef=setTimeout(()=>{De==="ready"&&Xc&&pu()},t))};n()},leave(){clearTimeout(Ef),(De==="playing"||De==="transit")&&(Jn=0,un("paused")),Qc(!1)},advance:_o,back:du,togglePlay:Au,setReduced:Yf,set hold(s){Ib=!!s}});var vg=!1,pa="";function Ir(s=!1){let e=performance.now();tt.info.autoReset=!1,tt.info.reset(),rE++;let t=0;!Zn&&!document.hidden&&!Li&&!s&&(ga+=t),!Li&&!s&&(Of(t),mu());let i=Br,r=Js,a=i/r,o=a<1,c=o&&N.set!==2?Math.max(1,.78/a):1,l=N.set===0&&N.lc>5e-4?ng(Math.min(Math.max(Ae,hb),_f),o):null;Ie.fov=2*Math.atan(Math.tan((l?N.fov+(l.fov-N.fov)*N.lc:N.fov)*Mn/2)*c)/Mn;let u=o?Math.min(1.7,.66/a):1;if(Ie.near=N.set===2?.05:5e-4,N.set===0){En(N.sunLat,N.sunLon,1,ui),Gf.position.copy(ui).multiplyScalar(60),Cg.position.copy(ui).multiplyScalar(10),js.material.uniforms.uSun.value.copy(ui);let Q=u+(1-u)*N.upm;En(N.clat,N.clon,1+(N.cdist-1)*Q,Ie.position);let le=pR.set(N.tx,N.ty,N.tz);if(Ie.up.copy(ou).lerp(Cr.copy(Ie.position).normalize(),N.upm).normalize(),N.trk>5e-4){let se=Sf(Math.min(N.ts,0),yb),me=o?1.35:1;bf.copy(se).addScaledVector(kt.dir,N.ob*me).addScaledVector(kt.hSE,N.os*me).addScaledVector(kt.nrm,N.ou*me),Ie.position.lerp(bf,N.trk),le.lerp(bf.copy(se).addScaledVector(kt.dir,-N.lead),N.fol),Ie.up.lerp(Cr.copy(Ie.position).normalize(),N.trk).normalize()}if(l&&(Ie.position.lerp(Ff(l.pos,bf),N.lc),le.lerp(Ff(l.tgt,yb),N.lc),Ie.up.lerp(Cr.copy(Ie.position).normalize(),N.lc).normalize()),yr&&(gb(yr[0],yr[1],yr[2],Ie.position),gb(yr[3],yr[4],yr[5],le),Ie.up.copy(Ie.position).normalize(),yr[6]&&(Ie.fov=yr[6])),Ae>=42&&Ae<pt){let se=(nt,Ze,Ne)=>ot.smoothstep(Ne,nt,Ze),me=se(42,45.6,Ae),_e=fs.parseEase("sine.inOut")((42-39.8)/2.6),Oe=En(20,292-4*_e,4.5-.1*_e),Ke=new I,Xe=eu?En(17.5,-90,1.22):En(15,-91,1.085),Et=eu?En(20.5,-89.4):En(21,-89.6),st=1-Math.pow(1-me,2),Bt=Oe.clone().normalize().lerp(Xe.clone().normalize(),st).normalize(),V=1+Math.exp(ot.lerp(Math.log(Oe.length()-1),Math.log(Xe.length()-1),me));Ie.position.copy(Bt).multiplyScalar(V),le.copy(Ke).lerp(Et,st),Ie.up.copy(ou).lerp(Ie.position.clone().normalize(),me).normalize();let gn=ot.lerp(30,eu?38:37,me);if(Ie.fov=2*Math.atan(Math.tan(gn*Mn/2)*c)/Mn,o){let nt=se(43.5,45.6,Ae);Ie.fov=ot.lerp(Ie.fov,eu?60:54,nt)}}let X=yf(Ae);if(Ae>=45.6&&Ae<pt){let se=cu.camera(o);Ie.position.lerp(se.position,X),le.lerp(se.target,X),Ie.up.lerp(Fc,X).normalize(),Ie.fov=ot.lerp(Ie.fov,o?54:37,X)}Ie.lookAt(le),N.shake>.001}else{let Q=o?(.75+.55*u)*N.gpm:1,le=Cr.set(N.gtx+(o?N.gpx:0),N.gty+(o?N.gpy:0),N.gtz);Ie.position.set(N.gx-N.gtx,N.gy-N.gty,N.gz-N.gtz).multiplyScalar(Q).add(le),Ie.up.copy(ou),Ie.lookAt(le)}if(N.set===0&&Oi.get("terra")!=="original"){let Q=ot.clamp((Ie.position.length()-1)*.02,5e-4,.02);Ie.near=Q}N.set===2?(Sr.camera(so[Gc]?.perched?Sr.T1:Ae,o,ag),Ie.position.copy(ag.position),Ie.up.set(0,1,0),Ie.lookAt(ag.target),Ie.fov=o?43:35,Ie.near=.02,Ie.far=6e3):Ie.far=400;let h=o?-N.px*i:-N.sx*i,f=o?N.sy*r:N.set===1?.05*r:0;if(N.set===0&&Ae>=42&&Ae<pt){let Q=ot.smoothstep(Ae,42,45.6),le=.14-.02*fs.parseEase("sine.inOut")((42-39.8)/2.6);h=o?0:ot.lerp(-le*i,-.16*i,Q),f=o?ot.lerp(.03*r,-.02*r,Q):0}if(N.set===2&&(h=o?0:-.12*i,f=o?.1*r:.06*r),Li&&N.set===2&&pa){let Q=Sr.state(An.perched?Sr.T1:Ae),le=(so[Gc]?.flight?.camK||1)*(An.perched?.6:1);An.perched&&Q.quat.setFromEuler(new Hn(0,new Hn().setFromQuaternion(Q.quat,"YXZ").y,0));let X=(pa==="cima"?new I(.02,.6,.01):pa==="baixo"?new I(.02,-.6,.03):pa==="frente"?new I(.12,.06,.6):pa==="tres"?new I(.42,.16,.42):new I(.6,.02,.02)).multiplyScalar(le*(+Oi.get("inspk")||1));Ie.position.copy(Q.pos).add(X.applyQuaternion(Q.quat)),Ie.up.copy(new I(0,0,-1).applyQuaternion(Q.quat)),pa!=="cima"&&pa!=="baixo"&&Ie.up.set(0,1,0),Ie.lookAt(Q.pos),h=0,f=0}if(ya&&N.set===2){let Q=mn.addedModels?.find(le=>le.id===ya);Q&&(Ie.position.copy(Q.position),Ie.lookAt(Q.target),Ie.up.set(0,1,0),Ie.fov=o?64:42,h=0,f=0)}Ie.setViewOffset(i,r,h,f,i,r),Ie.updateProjectionMatrix(),Ie.updateMatrixWorld(),Ys.scene=N.set===0?hn:N.set===1?Ht:mn.scene,Ys.enabled=N.set!==2,wr.enabled=N.set===2,wr.scene=mn.scene,hi.enabled=!1,hi.enabled&&(hi.scene=mn.scene,hi.uniforms.focus.value=N.dofF>0?N.dofF*(o?(.75+.55*u)*N.gpm:1):2,hi.uniforms.aperture.value=N.dof,hi.uniforms.maxblur.value=.01);let d=N.set===0,g=d?yf(Ae):0;qe.uCut.value=g,cu.update(g),mt.classList.toggle("subsolo",g>.01);let A=be("subsolo-note");A.hidden=g<.01,g>.01&&(A.style.opacity=Math.min(1,g*3));let m=Q=>(Q=Math.max(0,Math.min(1,Q)),Q*Q*(3-2*Q)),p=N.set===0?m((N.epoch-.98)/.02)*m((Ae-41.7)/2.6):0,_=m((Ae-44.3)/1.3);qe.uRegionalAmt.value=0,qe.uRegionalClose.value=_,qe.uRegionalHaze.value=m((Ae-42.6)/2.6)*.85,qe.uRegionalBridge.value=0;let x=N.set===0?m((N.epoch-.999)/.001)*m((Ae-43.8)/1.2)*(1-ot.smoothstep(Ae,48.15,49)):0,v=N.set===0?N.Lcrater*(1-yf(Ae)):0;be("crater-key").style.opacity=v;{let Q=be("btn-corte"),le=N.set===0&&Lb(Ae)>.5&&(Math.abs(Ae-Ui[3])<1.4||De==="hold"||De==="paused"||va.on);Q.hidden=!le}be("crater-key").style.visibility=v>.001?"visible":"hidden",be("crater-key").lastElementChild.style.opacity=N.Lwell,be("regional-credit").style.opacity=x,be("regional-credit").style.pointerEvents=x>.5?"auto":"none",be("regional-credit").hidden=x<.001,qe.uCam.value.copy(Ie.position),qe.uSunI.value=N.sunI,qe.uEpoch.value=N.epoch,qe.uCrater.value=N.crater,qe.uEarthLook.value=Oi.get("terra")==="original"?0:1-ot.smoothstep(N.epoch,0,.25),Rc.scale.setScalar(1.0015/1.004),Rc.visible=!0,Bf.visible=!0,da.includes("terra")&&(yg.visible=Rc.visible=Bf.visible=!1),Rc.material.uniforms.uCloudPres.value=.55,qe.uHaze.value=N.haze,qe.uSpread.value=N.spread,qe.uDustK.value=N.dustK*.28,qe.uGlow.value=N.glow,qe.uDim.value=Math.max(0,Math.min(.74,(1-N.lux)*.82));let M=d&&N.ts>=0&&Ae<24?1-ot.smoothstep(Ae,22.8,24):0,b=eb(N.ts),C=d&&b.on>0&&N.epoch<.01&&N.ts<2400,S=0,E=null;if(M>0&&(E=ig(b.t,sg,b),S=b.on*(1-Math.exp(-b.t/.015))*Math.exp(-b.t/.22),b.flash=ot.lerp(b.flash,S,M),b.fireL=ot.lerp(b.fireL,b.on*(1-Math.exp(-b.t/.015))*E.fireL,M),b.rim*=ot.lerp(1,1-Math.exp(-b.t/2),M)),qe.uImpactReview.value=M,qe.uFlash.value=C?b.flash*.85:0,qe.uRing.value=0,qe.uScar.value=N.scar,qe.uTime.value=ga,qe.uCavR.value=C?b.Rc*At*.97*(1-ot.smoothstep(N.epoch,0,.03)):0,qe.uShockR.value=M*b.shockR*At,qe.uShockA.value=C?M*b.shockA:0,qe.uClearR.value=C?b.clearR*At:0,qe.uBlanketR.value=b.blanketR*At,qe.uBlanketA.value=C?b.blanketA*N.scar/.85:0,qe.uFireL.value=C?b.fireL:0,qe.uFireH.value=b.fireH*At,qe.uCurtB.value=b.cB*At,qe.uCurtH.value=b.cH*At,qe.uCurtO.value=C?b.cO*N.curtO:0,Mg.material.uniforms.uO.value=N.stars*.025,li.visible=C&&b.flash>.002&&M<.001,li.material.opacity=Math.min(1,b.flash*1.2),li.scale.setScalar(.0012+.0032*b.flash),li.position.copy(en).multiplyScalar(1.004),li.material.depthTest=!1,li.material.map=Ob,M>0&&S>.004&&(li.visible=!0,li.material.map=zI,li.material.opacity=Math.min(1,S*1.3),li.position.copy(en).multiplyScalar(1+3*At),li.material.depthTest=!0,li.scale.setScalar((40+160*S)*(E?E.flashK:1)*At)),Nb.opacity=N.craterDraw>0?.62*(1-g)*(1-ot.smoothstep(Ae,48.15,48.6)):0,Mf.geometry.setDrawRange(0,Math.floor(kb*N.craterDraw)),Vf.material.opacity=N.Lwell*(1-g),Hb.opacity=N.mark*.85,hu.visible=d&&N.mark>.01,Pc.strength=N.bloom+(C?(M>0?.45:.08)*b.flash:0),Zi){if(Zi.visible=d&&N.impOn>.5&&N.ts<.26,WI.visible=!1,qI.visible=!1,Zi.visible){let Q=Sf(N.ts,Zi.position);Zi.quaternion.setFromAxisAngle(zb,1.1+N.ts*.008).premultiply(Gb);let le=(Q.length()-1)*6371,X=Math.pow(Math.max(0,Math.min(1,(100-le)/88)),1.4),se=Cf.userData.U;se.uFront.value.copy(kt.dir).negate(),se.uHeat.value=X,se.uT.value=Ae,Df.position.copy(Q).normalize().negate(),Df.intensity=.5,qe.uHeadP.value.copy(Q),qe.uHeadI.value=2.2*X*X,Mr.visible=X>.002,Mr.visible&&(Mr.position.copy(Q).addScaledVector(kt.dir,-Ds*.16),Mr.quaternion.setFromUnitVectors(Cr.set(0,0,1),If.copy(kt.dir).negate()),Mr.scale.set(Ds*1.24,Ds*1.24,Ds*1.03),Mr.material.uniforms.uO.value=Math.min(.72,X*.94),Mr.material.uniforms.uT.value=Ae),oo.visible=N.ts>Qb,oo.visible&&vb(Q,X);let me=Dc.find(_e=>_e.key==="Lbody");if(me){let _e=If.setFromMatrixColumn(Ie.matrixWorld,0),Oe=Lg.setFromMatrixColumn(Ie.matrixWorld,1);me.anchor.copy(Q).addScaledVector(_e,-Ds*1.25).addScaledVector(Oe,Ds*.6)}}else Mr.visible=!1,oo.visible=d&&N.impOn>.5&&N.ts>0&&N.ts<1.1&&!da.includes("wake"),oo.visible&&vb(Sf(0,Cr),1);Zi.visible||(qe.uHeadI.value=0)}let y=1-ot.smoothstep(Ae,20.8,22.6),B=1-ot.smoothstep(N.epoch,0,.03);if(co.visible=C&&B>.003&&!da.includes("cav"),co.material.uniforms.uReview.value=M,co.visible){let Q=co.material.uniforms;Q.uRc.value=Math.max(b.Rc,.4),Q.uD.value=b.D,Q.uU.value=b.U,Q.uRing.value=b.ring,Q.uRim.value=b.rim,Q.uMelt.value=b.melt,Q.uSun.value.copy(ui),Q.uFireL.value=b.fireL,Q.uFireH.value=b.fireH,Q.uT.value=b.t,Q.uGlow.value=N.glow,Q.uFade.value=B,Q.uDim.value=qe.uDim.value,Q.uFar.value=ot.smoothstep(Ie.position.length()-1,.08,.3)}if(Lc.visible=y>.001&&C&&b.jet>.003&&!da.includes("jet"),Lc.visible){let Q=Lc.material.uniforms;Q.uL.value=b.jetL,Q.uO.value=b.jet,Q.uT.value=Ae}if($i.visible=y>.001&&C&&b.cO*N.curtO>.003&&!da.includes("curt")&&!(M>0&&sg==="b"),$i.material.uniforms.uReview.value=M,$i.material.uniforms.uRim.value=b.rim,vo.visible=$i.visible,$i.visible){let Q=$i.material.uniforms;Q.uB.value=b.cB,Q.uH.value=b.cH,Q.uO.value=b.cO*N.curtO*(E?1-.85*E.Fb:1),Q.uT.value=b.t,Q.uSun.value.copy(ui),Q.uFireL.value=b.fireL}if(Uc.visible=!1,Uc.visible){let Q=Uc.material.uniforms;Q.uR.value=b.pR,Q.uH.value=b.pH,Q.uCap.value=b.pCap,Q.uD.value=b.D,Q.uHot.value=b.pHot,Q.uT.value=b.t,Q.uSun.value.copy(ui);let le=Ie.position,X=le.dot(en),se=(X-1)/At,me=Math.sqrt(Math.max(le.lengthSq()-X*X,0))/At,_e=(1-ot.smoothstep(me,b.pCap*.8,b.pCap*1.5))*ot.smoothstep(se,b.pH*.5,b.pH*1.1);Q.uO.value=b.pO*N.plumeO*(1-.75*_e)*Math.pow(1-M,3)}if(_a.visible=C&&b.t>0&&b.t<400&&Ae<22.6&&!da.includes("ejecta"),_a.visible){let Q=_a.material.uniforms;Q.uT.value=b.t,Q.uO.value=1-ot.smoothstep(Ae,20.8,22.6),Q.uSun.value.copy(ui)}if(Oc.visible=!1,Tr.quad.visible=C&&y>.001&&Ae<29.4&&b.t>0&&N.plumeO>.003&&!da.includes("vol"),Tr.quad.visible){let Q=Tr.uniforms,le=E||ig(b.t,sg,b);Q.uT.value=b.t,Q.uO.value=N.plumeO*y,Q.uSun.value.copy(ui),Q.uGlow.value=N.glow,Q.uLit.value=le.Lit;for(let X of["Fb","Rh","Rv","Zc","FbHot","CoolA","CoolB","Den","Sg","Sr","Sw","Sh","SgHot","Cu","Cb","Ch","Cw","CuHot","Cden","Pa","Pr","Ph","Pz","Phole","Pden","Ve","Vr","Vh","Vt"])Q["u"+X].value=le[X];Q.uFoc.value.set(le.foc[0],le.foc[1],le.foc[2],le.foc[3]),Q.uBox.value.set(le.box[0],le.box[1],le.box[2])}if(Oc.visible){let Q=Oc.material.uniforms;Q.uR.value=b.pR,Q.uH.value=b.pH,Q.uCap.value=b.pCap,Q.uD.value=b.D,Q.uT.value=b.t,Q.uHot.value=b.pHot,Q.uO.value=b.pO*N.plumeO,Q.uBlend.value=ot.smoothstep(Ae,22.8,28.4),Q.uSun.value.copy(ui);let le=Ab(b.t,b.pR,b.pH,b.D);Q.uRf.value=le.Rf,Q.uFb.value=le.Fb,Q.uFbHot.value=le.FbHot,Q.uChR.value=le.chR,Q.uChL.value=le.chL,Q.uCh.value=le.Ch,Q.uFan.value=le.Fan,Q.uDome.value=le.Dome,Q.uBox.value.set(le.box[0],le.box[1],le.box[2])}{let Q=Dc.find(X=>X.key==="Lcav");Q&&Q.anchor.copy(en).addScaledVector(kt.hSE,b.Rc*At*.2).addScaledVector(kt.hNE,-b.Rc*At*1.05);let le=Dc.find(X=>X.key==="Lplume");le&&le.anchor.copy(en).multiplyScalar(1+b.pH*At*.8).addScaledVector(kt.hSE,b.pCap*At*.5)}if(js.visible=Ae<22.6&&d&&N.partO>.002&&!da.includes("parts"),js.visible){let Q=js.material.uniforms;Q.uTau.value=N.tau,Q.uO.value=N.partO*y*(1-.65*M),Q.uFam.value.set(N.fam0,N.fam1,N.fam2),Q.uReach.value=N.reach,Q.uSize.value=o?.0022:.0017}tu.visible=Ae<22.6&&d&&N.dust>0,tu.material.uniforms.uO.value=Math.min(1,N.dust)*.5*y,tu.material.uniforms.uT.value=ga*.3+Ae*1.2*N.fall,tu.material.uniforms.uLight.value=.35;{let Q=ct.clay-.004,le=ct.clay+(ct.clayH||.2)+.01,X=ct.top+.02,se=N.depo<.5?Q+(le-Q)*(N.depo/.5):le+(X-le)*((N.depo-.5)/.5);if(iu.constant=N.depo>=.999?99:se,As.visible=N.set===1&&N.depo<.999,As.position.set(0,se,(ct.front-ct.d/2)*.5),As.scale.set(ct.w*.985,ct.d*.96,1),su.color.setHex(N.depo<.03?9406070:N.depo<.52?2761760:9076590),ho.visible=N.set===1&&N.fallO>.01,ho.visible){let me=ho.material.uniforms;me.uT.value=Ae*.9,me.uO.value=N.fallO,me.uY.value=se,me.uW.value=ct.w*.95,me.uD.value=ct.d*.9}}uo.material.uniforms.uO.value=N.gdust*.8*(N.set===1?1:0),uo.material.uniforms.uT.value=ga+Ae*.4;{let Q=Ni.position,le=Cr.set(0,0,.2).sub(Q),X=le.length();Tf.position.copy(Q).addScaledVector(le,.5),Tf.scale.set(Math.tan(Ni.angle)*X,X,Math.tan(Ni.angle)*X),Tf.quaternion.setFromUnitVectors(If.set(0,-1,0),le.normalize()),wf.uniforms.uO.value=1,wf.uniforms.uTop.value.copy(Q),wf.uniforms.uLen.value=X,uo.material.uniforms.uAxis.value.copy(le)}if(An.root.visible=N.set===2,An.root.visible){let Q=Sr.state(Ae);if(An.perched){let le=Sr.state(Sr.T1);An.root.position.copy(le.pos),An.root.rotation.set(0,new Hn().setFromQuaternion(le.quat,"YXZ").y,0),An.tick(Ae)}else An.root.position.copy(Q.pos),An.root.quaternion.copy(Q.quat);An.pose?.(Q.pose,Q),mn.update?.(Ae,Q.pos,Ie)}Ft&&(Ft.visible=N.photo>.001,fo.material.opacity=N.photo,po.material.opacity=N.photo,Ft.userData.panel.material.opacity=Math.min(1,N.photo*1.5),be("foto-credito").classList.toggle("on",N.set===1&&N.photo>.8||N.set===2&&Ae<63.6),xa.intensity=40*N.photo,Ft.updateMatrixWorld()),be("veil").style.opacity=Math.max(N.veil,Nc.v).toFixed(3),QI.uniforms.uTime.value=HI?0:ga,hi.enabled&&N.dofF<=0&&(hi.uniforms.focus.value=Ie.position.distanceTo(Cr.copy(An.root.position).setY(An.root.position.y+.05)));let U=!ms&&N.set===0&&Ae>48.15&&Ae<pt;Fi.enabled=U||!ms&&N.set===2&&Ae<65.2,U?(bg||oE(i,r),Fi.uniforms.uOld.value=xg.texture,Fi.uniforms.uProgress.value=1-ot.smoothstep(Ae,48.15,49)):Fi.enabled&&(Fi.uniforms.uOld.value=zf.texture,_g||cE(i,r),Fi.uniforms.uProgress.value=ot.smoothstep(Ae,62,65.2)),Tr.quad.visible&&Tr.render(tt,Ie),Pc.enabled=!ms&&N.set===0&&Ae>=10&&Ae<22.6,Bb.enabled=ms||Pc.enabled||Fi.enabled,di.render(),gR(i,r);let P=mt.dataset.state;if(Lf(P==="playing"||P==="paused"||P==="ended"||P==="transit"?hg(Rt.time()):-1),Ao===3){let Q=N.epoch<.999?"De 66 milh\xF5es de anos atr\xE1s at\xE9 hoje: os continentes se deslocam, e rochas mais jovens cobrem a cratera.":Fr[3].p;be("cap-text").textContent!==Q&&(be("cap-text").textContent=Q)}P!=="ready"&&fg();let F=Rt?Rt.time():0;if(N.Ldrift>.01){let Q=Dc.find(se=>se.key==="Ldrift"),le=Math.round(66*(1-N.epoch)),X=N.epoch>=.999?"Continentes de hoje<small>NASA Blue Marble \xB7 mosaico de sat\xE9lite</small>":`Continentes em ${le} Ma<small>posi\xE7\xF5es do modelo de placas \xB7 cores art\xEDsticas</small>`;Q&&Q.el.dataset.h!==X&&(Q.el.dataset.h=X,Q.el.firstElementChild.innerHTML=X)}let Y=be("ttag"),z=P!=="ready"&&F>1.2,j="66 milh\xF5es de anos atr\xE1s",q=!1;if(F>=on[1]&&F<on[2]){let Q=Math.abs(N.ts),le=X=>X.toFixed(1).replace(".",",");F<12.4?j="66 milh\xF5es de anos atr\xE1s":F<14.6?j=`66 Ma \xB7 ${Math.round(Q)} s antes do contato \xB7 tempo acelerado`:F<16.6?j=`66 Ma \xB7 ${le(Q)} s antes do contato \xB7 2,5\xD7 mais r\xE1pido`:N.ts<0?j=`66 Ma \xB7 ${le(Q)} s antes do contato \xB7 quase em tempo real`:N.ts<.6?j=`66 Ma \xB7 ${le(Q)} s depois do contato \xB7 quase em tempo real`:N.ts<60?j=`66 Ma \xB7 ${Math.round(N.ts)} s depois do contato \xB7 tempo acelerado`:j=`66 Ma \xB7 ${Math.round(N.ts/60)} min depois do contato`}else F>=on[2]&&F<on[3]&&(j=F<26.6?"66 Ma \xB7 horas depois":F<29.4?"66 Ma \xB7 dias a semanas depois":F<32.4?"66 Ma \xB7 meses depois":"66 Ma \xB7 meses a anos de penumbra");F>=on[3]&&F<ru[0]&&N.set===0&&(j="66 Ma \xB7 anos depois"),N.epoch>.001&&N.epoch<.999&&N.set===0?j=`${Math.max(1,Math.round(66*(1-N.epoch)))} milh\xF5es de anos atr\xE1s`:N.epoch>=.999&&N.set===0&&(j="Terra atual \xB7 Yucat\xE1n",q=!0),F>=pt&&F<pt+3.4?j="66 Ma \xB7 dias a anos depois":F>=pt+3.4&&F<pt+6.4?j="De 66 Ma at\xE9 hoje":F>=pt+6.4&&F<au?(j="Hoje \xB7 rocha do limite",q=!0):F>=au&&(j=F<63.6?"Hoje \xB7 rocha do limite":F<65.3?"Hoje \xB7 outro lugar":"Hoje \xB7 66 milh\xF5es de anos depois",q=!0);let ie="";F>=13.2&&F<14.6?ie="A cerca de 20 km/s: do topo da atmosfera ao mar, \u22486 segundos.":F>=14.6&&F<16.6?ie="Entrada na atmosfera: o ar comprimido \xE0 frente do asteroide aquece e brilha.":F>=16.6&&F<ma?ie="O \xFAltimo meio segundo antes do contato, quase em tempo real.":F>=ma&&N.ts<.6?ie="Contato com o mar raso: o asteroide se desfaz em menos de um segundo, num clar\xE3o.":N.ts>=.6&&N.ts<8&&F<on[2]?ie="A bola de fogo sobe; uma frente de vapor e poeira corre rente ao mar e a escava\xE7\xE3o come\xE7a.":N.ts>=8&&N.ts<60&&F<on[2]?ie="Abre-se uma cavidade de \u2248100 km; da borda sobe a cortina de material ejetado.":N.ts>=60&&F<on[2]?ie="O brilho se apaga. Material lan\xE7ado pelo impacto chega \xE0 atmosfera; a forma da pluma n\xE3o \xE9 mostrada neste quadro.":F>=on[2]&&F<26.6?ie="Material fino se espalha na atmosfera. A cobertura mostrada no planeta \xE9 uma representa\xE7\xE3o interpretativa.":F>=26.6&&F<29.4?ie="Ventos e a pr\xF3pria eje\xE7\xE3o levam a poeira fina e a fuligem em volta do globo, de forma desigual.":F>=29.4&&F<32.4?ie="A camada barra a luz do Sol. Na mesma regi\xE3o, chega ao ch\xE3o bem menos luz.":F>=32.4&&F<on[3]?ie="Penumbra e frio por anos: pouca luz para as plantas e o pl\xE2ncton.":F>=on[3]&&F<ru[0]?ie="Anos depois, a poeira assenta e a luz volta.":N.set===0&&N.epoch>.001&&N.epoch<.999?ie="Os continentes se deslocam at\xE9 a posi\xE7\xE3o de hoje (modelo de placas).":N.set===0&&F>=on[3]&&N.epoch>=.999&&F<45.4?ie="Daqui em diante, Terra atual: mosaico de sat\xE9lite; nuvens interpretativas.":F>=pt&&F<pt+3.4?ie="O que foi lan\xE7ado volta ao ch\xE3o e forma uma camada fina de argila.":F>=pt+3.4&&F<pt+6.4?ie="Sedimentos mais novos se acumulam por cima e guardam a camada.":F>=pt+6.4&&F<au&&(ie="Hoje, an\xE1lises qu\xEDmicas e microsc\xF3picas revelam sinais do impacto nesta camada.");let pe=be("ttag-s");pe.dataset.t!==ie&&(pe.dataset.t=ie,ie&&(pe.textContent=ie),Y.classList.add("chg"),clearTimeout(Sb),Sb=setTimeout(()=>Y.classList.remove("chg"),Li?0:1400)),pe.classList.toggle("on",!!ie&&z);let Ee=P!=="ready"&&F>=on[2]+.3&&F<on[3]+.4&&N.set===0;if(be("lux").classList.toggle("on",Ee),be("lux-b").style.setProperty("--lux",N.lux.toFixed(3)),be("eras").classList.toggle("on",N.eras>.5&&N.set===0&&P!=="ready"),be("eras").style.opacity=N.set===0?N.eras.toFixed(3):"0",be("eras-b").parentElement.style.setProperty("--e",N.epoch.toFixed(4)),Y.dataset.t!==j&&(Y.dataset.t=j,be("ttag-t").textContent=j),Y.classList.toggle("on",z),Y.classList.toggle("hoje",q),Li){let Q=be("caption"),le=hg(F),X=Math.max(0,Math.min(1,(F-on[le]-Jb[le]-.25)/.6));if(Q.style.transition="none",Q.style.opacity=P==="ready"?0:X,Q.style.transform=`translateY(${(1-X)*10}px)`,!vg){let se=be("opening"),me=P==="ready"?1:Math.max(0,1-F/.5);se.style.transition="none",se.style.opacity=me,se.style.visibility=me>0?"visible":"hidden",se.style.transform=`translateY(${(1-me)*16}px)`}}es.cpuMs=performance.now()-e,es.calls=tt.info.render.calls,es.triangles=tt.info.render.triangles,!Li&&!s&&Cn()}function oE(s,e){let t=lu.GD0,n=s/e<1,i=n?Math.min(1.7,.66/(s/e)):1,r=n?(.75+.55*i)*t.gpm:1,a=new I(t.gtx+(n?t.gpx:0),t.gty+(n?t.gpy:0),t.gtz);fi.position.set(t.gx-t.gtx,t.gy-t.gty,t.gz-t.gtz).multiplyScalar(r).add(a),fi.aspect=s/e,fi.fov=2*Math.atan(Math.tan(t.fov*Mn/2)*(n?Math.max(1,.78/(s/e)):1))/Mn,fi.up.copy(ou),fi.lookAt(a),fi.setViewOffset(s,e,n?0:-.2*s,n?.1*e:.05*e,s,e),fi.updateProjectionMatrix();let o=ct.clay-.004,c=tt.getRenderTarget(),l=[iu.constant,As.visible,su.color.getHex(),ho.visible,uo.material.uniforms.uO.value,Ft?Ft.visible:!1];iu.constant=o,As.visible=!0,As.position.set(0,o,(ct.front-ct.d/2)*.5),As.scale.set(ct.w*.985,ct.d*.96,1),su.color.setHex(9406070),ho.visible=!1,uo.material.uniforms.uO.value=1.6*.8,Ft&&(Ft.visible=!1),tt.setRenderTarget(xg),tt.clear(),tt.render(Ht,fi),tt.setRenderTarget(c),iu.constant=l[0],As.visible=l[1],su.color.setHex(l[2]),ho.visible=l[3],uo.material.uniforms.uO.value=l[4],Ft&&(Ft.visible=l[5]),bg=!0}function cE(s,e){let t=lu.G3,n=s/e<1,i=n?Math.min(1.7,.66/(s/e)):1,r=n?(.75+.55*i)*t.gpm:1,a=new I(t.gtx+(n?t.gpx:0),t.gty+(n?t.gpy:0),t.gtz);fi.position.set(t.gx-t.gtx,t.gy-t.gty,t.gz-t.gtz).multiplyScalar(r).add(a),fi.aspect=s/e,fi.fov=2*Math.atan(Math.tan(t.fov*Mn/2)*(n?Math.max(1,.78/(s/e)):1))/Mn,fi.up.copy(ou),fi.lookAt(a),fi.setViewOffset(s,e,n?-t.px*s:-t.sx*s,n?t.sy*e:.05*e,s,e),fi.updateProjectionMatrix();let o=tt.getRenderTarget(),c=Ft.visible,l=fo.material.opacity,u=po.material.opacity,h=Ft.userData.panel.material.opacity,f=xa.intensity;Ft.visible=!0,fo.material.opacity=1,po.material.opacity=1,Ft.userData.panel.material.opacity=1,xa.intensity=40,Ft.updateMatrixWorld(!0),tt.setRenderTarget(zf),tt.clear(),tt.render(Ht,fi),tt.setRenderTarget(o),Ft.visible=c,fo.material.opacity=l,po.material.opacity=u,Ft.userData.panel.material.opacity=h,xa.intensity=f,_g=!0}var Mb=0,Cb=-1,Sb=0;function mR(){let s=Ao+"|"+Jf;if(Cb!==s){Cb=s;let e=be("cap-step")||be("caption");Mb=e?e.getBoundingClientRect().top:1e9}return Mb}function gR(s,e){let t=Cr.copy(Ie.position),n=s/e<1;for(let i of Dc){let r=i.key==="photo"?N.photo:N[i.key]||0;if(i.key==="Lplume"&&(r=0),["Lcoast"].includes(i.key)&&(r=0),(i.key==="Lwell"||i.key==="Lcrater")&&Ae>45.9&&(r*=1-yf(Ae)),i.key==="Ldrift"&&N.epoch>=.999&&(r=0),i.key==="Lbird"&&!Bg&&n&&(r=0),i.set!==N.set&&(r=0),(i.only==="p"&&!n||i.only==="l"&&n)&&(r=0),n&&(i.key==="Lclay"||i.key==="Lrock")&&(r*=Math.max(0,1-N.photo*1.6)),i.key==="photo"&&Ft){let{w:a,h:o}=Ft.userData;Ft.localToWorld(i.anchor.set(-a/2,-o/2-.02,.03))}if(r>.01){let a=If.copy(i.anchor).project(Ie);(a.z>1||a.z<-1)&&(r=0),i.set===0&&i.anchor.length()<1.03&&Lg.copy(i.anchor).normalize().dot(t.clone().sub(i.anchor).normalize())<.05&&(r=0);let o=(a.x*.5+.5)*s,c=(-a.y*.5+.5)*e;i.el.style.transform=`translate(${o.toFixed(1)}px,${c.toFixed(1)}px)`,/fixed/.test(i.cls)||(o>s*.62?i.el.classList.add("left"):o<s*.38?i.el.classList.remove("left"):i.el.classList.toggle("left",/left/.test(i.cls)));let l=i.el.firstElementChild,u=i.el.className+"|"+l.textContent+"|"+Jf;if(i._lk!==u){l.style.translate="";let g=l.getBoundingClientRect();i._rel=[g.left-o,g.top-c,g.right-o,g.bottom-c],i._lk=u}let h={left:i._rel[0]+o,top:i._rel[1]+c,right:i._rel[2]+o,bottom:i._rel[3]+c};if(N.set===2){let g=mR();h.bottom>g-8&&(r*=Math.max(0,1-(h.bottom-g+8)/24))}let f=h.right>s-10?s-10-h.right:h.left<10?10-h.left:0,d=f?`${f.toFixed(1)}px 0`:"";i._tr!==d&&(l.style.translate=d,i._tr=d)}i.el.style.opacity=r.toFixed(3)}if(Ft&&N.photo>.6&&N.set===1&&window.KPG_FOTO){let{w:i,h:r}=Ft.userData,a=new Th(new Me(1/0,1/0),new Me(-1/0,-1/0));for(let[o,c]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let l=new I(o*i/2,c*r/2,0).applyMatrix4(Ft.matrixWorld).project(Ie);a.expandByPoint(new Me((l.x*.5+.5)*s,(-l.y*.5+.5)*e))}Dr.hidden=!1,Object.assign(Dr.style,{left:a.min.x+"px",top:a.min.y+"px",width:a.max.x-a.min.x+"px",height:a.max.y-a.min.y+"px"})}else Dr.hidden=!0}async function vR(s){let e=s==="E"?hn:s==="G"?Ht:mn.scene,t=[],n=[],i=di.renderToScreen;di.renderToScreen=!1,e.traverse(a=>{a.visible||(t.push(a),a.visible=!0),a.frustumCulled&&(n.push(a),a.frustumCulled=!1)});let r={rs:Ys.scene,re:Ys.enabled,oe:wr.enabled,os:wr.scene,be:hi.enabled,bs:hi.scene,he:Fi.enabled};try{tt.compileAsync?await tt.compileAsync(e,Ie):tt.compile(e,Ie),s==="E"&&(tt.compile(Tr.scene,Ie),Tr.render(tt,Ie),Ys.scene=hn,di.render()),s==="G"&&(Fi.enabled=!ms,Ys.scene=Ht,di.render()),s==="V"&&(Fi.enabled=!ms,Ys.scene=mn.scene,wr.scene=mn.scene,Ys.enabled=!1,wr.enabled=!0,hi.scene=mn.scene,hi.enabled=!ms,di.render())}catch(a){console.warn(a)}Object.assign(Ys,{scene:r.rs,enabled:r.re}),Object.assign(wr,{enabled:r.oe,scene:r.os}),Object.assign(hi,{enabled:r.be,scene:r.bs}),Fi.enabled=r.he,di.renderToScreen=i;for(let a of t)a.visible=!1;for(let a of n)a.frustumCulled=!0;if(s==="G"&&!ms)try{oE(Br,Js),cE(Br,Js)}catch(a){console.warn(a)}Ir(!0)}var lE=Symbol("aguardando cena"),_R={E:9.3,H:38.6,G:48,V:61.9},xR={E:0,H:0,G:42,V:56},bR={E:()=>[],H:()=>ER(),G:()=>["modelos/bloco-camadas-kpg.glb",window.KPG_FOTO.src],V:()=>["modelos/rock-face-01.glb",...Vx()]};function ER(){let s=window.KPG_RASTER,e=window.KPG_PALEO;return[pi()?"img/terras-hoje-2048.png":"img/terras-hoje-4096.png","img/terras-hoje-golfo-2048.png","img/terra-hoje-bmng-global.jpg",s.aux,"img/terra-hoje-bmng-golfo.jpg",s.golfoAux,e.terra66,...e.deriva,e.sup66]}var $l={},Fs={E:!1,H:!1,G:!1,V:!1},kf=null;function Zf(s,e=s){let t=Math.max(s,e);for(let n of["E","H","G","V"])if(t>=_R[n]&&!Fs[n])return n;return null}var yR=()=>De!=="playing"&&De!=="transit";function wb(s){return new Promise(e=>{let t=()=>yR()||Rf||Ae>=xR[s]||Li?e():setTimeout(t,120);t()})}function cn(s){return $l[s]||($l[s]=(async()=>{await kf,s==="V"&&await cn("G"),s==="G"&&await cn("H");let e=bR[s](),t=es["etapa"+s]={},n=performance.now();if(await Nv(e),t.download=Math.round(performance.now()-n),await wb(s),await mb(),n=performance.now(),s==="H"){await tR(),t.montagem=Math.round(performance.now()-n),NA(e),Fs.H=!0,es.cenaH=performance.now(),Cn();return}s==="G"?await nR():s==="V"&&await iR(),t.montagem=Math.round(performance.now()-n),Kc(!0),await wb(s),await mb(),n=performance.now(),await vR(s),t.gpu=Math.round(performance.now()-n),s==="V"&&(t.vale=mn.perf),NA(e),Fs[s]=!0,Fs.E&&Fs.G&&Fs.V&&(es.backgroundReady=performance.now()),es["cena"+s]=performance.now(),Cn()})(),$l[s].catch(e=>{console.error(e),be("btn-next-t").textContent="N\xE3o foi poss\xEDvel carregar a pr\xF3xima cena"})),$l[s]}function Ug(){kf&&(cn("E"),(ln>=0||De!=="ready")&&(cn("H"),cn("G")),ln>=2&&cn("V"))}var MR,Rf=null,og=0;function Og(s,e){let t=++og;Rf=e,mt.dataset.wait="",be("btn-next-t").textContent="Preparando a cena\u2026",s.then(()=>{t===og&&(delete mt.dataset.wait,Rf=null,Fg(),e?.(),Cn())}).catch(n=>{t===og&&(delete mt.dataset.wait,Rf=null,be("btn-next-t").textContent="Tentar novamente",console.error(n))})}MR=(async function(){Yf(Zn),Lf(-1),Kc(!0);try{kf=eR(),await kf}catch(n){console.error(n),be("btn-iniciar-txt").textContent="N\xE3o foi poss\xEDvel carregar os modelos";return}Kc(!0);let e=be("fps-limit");e.onchange=()=>{gg=Number(e.value),Xs=0,Bs=0,Cn()};let t=parseInt(Oi.get("momento")||"",10);if(Li)await Promise.all([cn("E"),cn("G"),cn("V")]);else{Ug(),uu&&Nf&&window.__kpgEmbed.preload(Nf);let n=t>=1&&t<=6?Zf(Ui[t-1]):null;n&&(n==="V"&&cn("V"),await cn(n))}t>=1&&t<=6&&De==="ready"&&(ln=t-1,Ae=Ui[ln],yn=Ae,un(ln===5?"ended":"hold")),Ir(!0),window.__kpg={get optimization(){return{...es,drawCount:rE,fpsLimit:gg,sectionActive:Xc,hidden:document.hidden}},setSectionActive:Qc,inspectBird(n=""){Li&&(pa=n,Ir(!0))},flightRaw(n){return Sr.state(n)},flightState(n){let i=Sr.state(n);return{roll:+i.roll.toFixed(3),glide:+i.glide.toFixed(2),phase:+i.phase.toFixed(3)}},renderAt(n,i="playing"){if(i&&(mt.dataset.state="",Uf(i)),Ae=n,Rt.seek(n,!1),i==="playing"){ln=ug(n),yn=Ui[ln],De=n>=yn-.001?"hold":"transit",Fg();let r=ln>0?Ui[ln-1]:0;be("btn-next").style.setProperty("--p",De==="transit"?((n-r)/Math.max(.01,yn-r)).toFixed(3):"0")}ga=n,Ao=-2,Lf(hg(n)),Ir(!0)},draw(){Ir(!0)},inspectRawFrame(){let n=new Ut(Br,Js,{type:wn}),i=tt.getRenderTarget(),r=N.set===2?mn.scene:N.set===1?Ht:hn;tt.setRenderTarget(n),tt.clear(),tt.render(r,Ie);let a=new Float32Array(Br*Js*4);tt.readRenderTargetPixels(n,0,0,Br,Js,a);let o=0,c=0;for(let l=0;l<a.length;l+=4)Number.isFinite(a[l]+a[l+1]+a[l+2]+a[l+3])?c=Math.max(c,a[l],a[l+1],a[l+2]):o++;return tt.setRenderTarget(i),n.dispose(),{time:Ae,pixels:Br*Js,invalidBeforeSafetyPass:o,peakLinear:c,programs:tt.info.programs.map(l=>({name:l.name,diagnostics:l.diagnostics||null}))}},stages:{ensure:cn,built:Fs,all:()=>Promise.all([cn("E"),cn("G"),cn("V")])},U:qe,bloom:Pc,renderer:tt,spot:Ni,rim:Ig,bounce:Rg,SITE:en,IMP:kt,get IMP_R(){return Vb},get block(){return ps},tick(n,i=!0){vg=!0,Of(n),mu(),ga+=n,i&&Ir(!0),vg=!1},get T(){return Ae},get playing(){return fu},get mode(){return De},get cur(){return ln},get locked(){return Wc},tl:Rt,S:N,SH:lu,START:on,HOLD:Ui,END_T:Ic,go,advance:_o,back:du,togglePlay:Au,setState:Uf,start:pu,camera:Ie,get impactor(){return Zi},C0:wg,get scenes(){return{space:hn,gallery:Ht,outcrop:mn.scene}},parts:js,composer:di,FINAL:YI,get OC(){return mn},get bird(){return An},bokeh:hi,impactParts:{cavity:co,jet:Lc,curtain:$i,plume:Uc,impactVolume:Oc,flashSprite:li,ejecta:_a}}})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
