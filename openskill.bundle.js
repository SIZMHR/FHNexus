/*!
 * openskill v5.0.1 - https://github.com/philihp/openskill.js  (MIT License)
 * Weng-Lin Bayesian approximation method for online skill-ranking.
 *
 * npm の openskill は ESM 専用で UMD ビルドが無く、jsDelivr の +esm は ramda 等
 * 4 モジュールを実行時に追加取得するため、自己完結の IIFE に事前バンドルして同梱している。
 * window.OpenSkill に { rating, rate, ordinal, predictWin, predictDraw } を生やす。
 *
 * 再生成手順:
 *   npm install openskill@5.0.1 esbuild
 *   echo "export { rating, rate, ordinal, predictWin, predictDraw } from 'openskill';" > entry.mjs
 *   npx esbuild entry.mjs --bundle --format=iife --global-name=OpenSkill --minify --outfile=openskill.bundle.js
 */
var OpenSkill=(()=>{var kn=Object.create;var K=Object.defineProperty;var Dn=Object.getOwnPropertyDescriptor;var Vn=Object.getOwnPropertyNames;var zn=Object.getPrototypeOf,Qn=Object.prototype.hasOwnProperty;var u=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},Kn=(r,e)=>{for(var t in e)K(r,t,{get:e[t],enumerable:!0})},ce=(r,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Vn(e))!Qn.call(r,o)&&o!==t&&K(r,o,{get:()=>e[o],enumerable:!(a=Dn(e,o))||a.enumerable});return r};var me=(r,e,t)=>(t=r!=null?kn(zn(r)):{},ce(e||!r||!r.__esModule?K(t,"default",{value:r,enumerable:!0}):t,r)),Zn=r=>ce(K({},"__esModule",{value:!0}),r);var Ee=u((sv,we)=>{"use strict";function qs(r){return r!==r}we.exports=qs});var w=u((fv,Ie)=>{"use strict";var xs=Ee();Ie.exports=xs});var Ne=u((pv,be)=>{"use strict";var As=Math.floor;be.exports=As});var Pe=u((lv,Oe)=>{"use strict";var Ss=Ne();Oe.exports=Ss});var Re=u((cv,Te)=>{"use strict";var ws=Math.ceil;Te.exports=ws});var Me=u((mv,Le)=>{"use strict";var Es=Re();Le.exports=Es});var We=u((dv,Fe)=>{"use strict";var Is=Pe(),bs=Me();function Ns(r){return r<0?bs(r):Is(r)}Fe.exports=Ns});var Be=u((vv,Ue)=>{"use strict";var Os=We();Ue.exports=Os});var He=u((yv,Ge)=>{"use strict";Ge.exports=Number});var Xe=u((gv,je)=>{"use strict";var Ps=He();je.exports=Ps});var O=u((hv,Ce)=>{"use strict";var Ts=Xe(),Rs=Ts.NEGATIVE_INFINITY;Ce.exports=Rs});var M=u((_v,ke)=>{"use strict";var Ls=Number.POSITIVE_INFINITY;ke.exports=Ls});var rr=u((qv,De)=>{"use strict";var Ms=1023;De.exports=Ms});var ze=u((xv,Ve)=>{"use strict";var Fs=1023;Ve.exports=Fs});var Ke=u((Av,Qe)=>{"use strict";var Ws=-1023;Qe.exports=Ws});var Ye=u((Sv,Ze)=>{"use strict";var Us=-1074;Ze.exports=Us});var Je=u((wv,$e)=>{"use strict";var Bs=M(),Gs=O();function Hs(r){return r===Bs||r===Gs}$e.exports=Hs});var Or=u((Ev,rt)=>{"use strict";var js=Je();rt.exports=js});var tt=u((Iv,et)=>{"use strict";var Xs=2147483648;et.exports=Xs});var ot=u((bv,at)=>{"use strict";var Cs=2147483647;at.exports=Cs});var ut=u((Nv,it)=>{"use strict";var ks=typeof Object.defineProperty=="function"?Object.defineProperty:null;it.exports=ks});var st=u((Ov,nt)=>{"use strict";var Ds=ut();function Vs(){try{return Ds({},"x",{}),!0}catch{return!1}}nt.exports=Vs});var pt=u((Pv,ft)=>{"use strict";var zs=Object.defineProperty;ft.exports=zs});var Pr=u((Tv,lt)=>{"use strict";function Qs(r){return typeof r=="number"}lt.exports=Qs});var Tr=u((Rv,mt)=>{"use strict";function Ks(r){return r[0]==="-"}function ct(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Zs(r,e,t){var a=!1,o=e-r.length;return o<0||(Ks(r)&&(a=!0,r=r.substr(1)),r=t?r+ct(o):ct(o)+r,a&&(r="-"+r)),r}mt.exports=Zs});var gt=u((Lv,yt)=>{"use strict";var Ys=Pr(),dt=Tr(),$s=String.prototype.toLowerCase,vt=String.prototype.toUpperCase;function Js(r){var e,t,a;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10;break}if(t=r.arg,a=parseInt(t,10),!isFinite(a)){if(!Ys(t))throw new Error("invalid integer. Value: "+t);a=0}return a<0&&(r.specifier==="u"||e!==10)&&(a=4294967295+a+1),a<0?(t=(-a).toString(e),r.precision&&(t=dt(t,r.precision,r.padRight)),t="-"+t):(t=a.toString(e),!a&&!r.precision?t="":r.precision&&(t=dt(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===vt.call(r.specifier)?vt.call(t):$s.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}yt.exports=Js});var _t=u((Mv,ht)=>{"use strict";function rf(r){return typeof r=="string"}ht.exports=rf});var At=u((Fv,xt)=>{"use strict";var ef=Math.abs,tf=String.prototype.toLowerCase,qt=String.prototype.toUpperCase,P=String.prototype.replace,af=/e\+(\d)$/,of=/e-(\d)$/,uf=/^(\d+)$/,nf=/^(\d+)e/,sf=/\.0$/,ff=/\.0*e/,pf=/(\..*[^0])0*e/;function lf(r,e){var t,a;switch(e.specifier){case"e":case"E":a=r.toExponential(e.precision);break;case"f":case"F":a=r.toFixed(e.precision);break;case"g":case"G":ef(r)<1e-4?(t=e.precision,t>0&&(t-=1),a=r.toExponential(t)):a=r.toPrecision(e.precision),e.alternate||(a=P.call(a,pf,"$1e"),a=P.call(a,ff,"e"),a=P.call(a,sf,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=P.call(a,af,"e+0$1"),a=P.call(a,of,"e-0$1"),e.alternate&&(a=P.call(a,uf,"$1."),a=P.call(a,nf,"$1.e")),r>=0&&e.sign&&(a=e.sign+a),a=e.specifier===qt.call(e.specifier)?qt.call(a):tf.call(a),a}xt.exports=lf});var Et=u((Wv,wt)=>{"use strict";function St(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function cf(r,e,t){var a=e-r.length;return a<0||(r=t?r+St(a):St(a)+r),r}wt.exports=cf});var bt=u((Uv,It)=>{"use strict";var mf=gt(),df=_t(),vf=Pr(),yf=At(),gf=Et(),hf=Tr(),_f=String.fromCharCode,qf=Array.isArray;function er(r){return r!==r}function xf(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Af(r){var e,t,a,o,i,n,s,f,p,l;if(!qf(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(n="",s=1,p=0;p<r.length;p++)if(a=r[p],df(a))n+=a;else{if(e=a.precision!==void 0,a=xf(a),!a.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+a+"`.");for(a.mapping&&(s=a.mapping),t=a.flags,l=0;l<t.length;l++)switch(o=t.charAt(l),o){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=t.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if(a.width==="*"){if(a.width=parseInt(arguments[s],10),s+=1,er(a.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(e&&a.precision==="*"){if(a.precision=parseInt(arguments[s],10),s+=1,er(a.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,e=!1)}switch(a.arg=arguments[s],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(a.padZeros=!1),a.arg=mf(a);break;case"s":a.maxWidth=e?a.precision:-1,a.arg=String(a.arg);break;case"c":if(!er(a.arg)){if(i=parseInt(a.arg,10),i<0||i>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=er(i)?String(a.arg):_f(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(e||(a.precision=6),f=parseFloat(a.arg),!isFinite(f)){if(!vf(a.arg))throw new Error("invalid floating-point number. Value: "+n);f=a.arg,a.padZeros=!1}a.arg=yf(f,a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=hf(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=gf(a.arg,a.width,a.padRight)),n+=a.arg||"",s+=1}return n}It.exports=Af});var Ot=u((Bv,Nt)=>{"use strict";var Sf=bt();Nt.exports=Sf});var Tt=u((Gv,Pt)=>{"use strict";var tr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function wf(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function Ef(r){var e,t,a,o;for(t=[],o=0,a=tr.exec(r);a;)e=r.slice(o,tr.lastIndex-a[0].length),e.length&&t.push(e),a[6]==="%"?t.push("%"):t.push(wf(a)),o=tr.lastIndex,a=tr.exec(r);return e=r.slice(o),e.length&&t.push(e),t}Pt.exports=Ef});var Lt=u((Hv,Rt)=>{"use strict";var If=Tt();Rt.exports=If});var Ft=u((jv,Mt)=>{"use strict";function bf(r){return typeof r=="string"}Mt.exports=bf});var Bt=u((Xv,Ut)=>{"use strict";var Nf=Ot(),Of=Lt(),Pf=Ft();function Wt(r){var e,t;if(!Pf(r))throw new TypeError(Wt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Of(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Nf.apply(null,e)}Ut.exports=Wt});var Ht=u((Cv,Gt)=>{"use strict";var Tf=Bt();Gt.exports=Tf});var Vt=u((kv,Dt)=>{"use strict";var jt=Ht(),F=Object.prototype,Xt=F.toString,Ct=F.__defineGetter__,kt=F.__defineSetter__,Rf=F.__lookupGetter__,Lf=F.__lookupSetter__;function Mf(r,e,t){var a,o,i,n;if(typeof r!="object"||r===null||Xt.call(r)==="[object Array]")throw new TypeError(jt("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Xt.call(t)==="[object Array]")throw new TypeError(jt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(o="value"in t,o&&(Rf.call(r,e)||Lf.call(r,e)?(a=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=a):r[e]=t.value),i="get"in t,n="set"in t,o&&(i||n))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ct&&Ct.call(r,e,t.get),n&&kt&&kt.call(r,e,t.set),r}Dt.exports=Mf});var Qt=u((Dv,zt)=>{"use strict";var Ff=st(),Wf=pt(),Uf=Vt(),Rr;Ff()?Rr=Wf:Rr=Uf;zt.exports=Rr});var Zt=u((Vv,Kt)=>{"use strict";var Bf=Qt();function Gf(r,e,t){Bf(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Kt.exports=Gf});var X=u((zv,Yt)=>{"use strict";var Hf=Zt();Yt.exports=Hf});var Jt=u((Qv,$t)=>{"use strict";function jf(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}$t.exports=jf});var ea=u((Kv,ra)=>{"use strict";var Xf=Jt();ra.exports=Xf});var aa=u((Zv,ta)=>{"use strict";var Cf=ea(),kf=Cf();function Df(){return kf&&typeof Symbol.toStringTag=="symbol"}ta.exports=Df});var ia=u((Yv,oa)=>{"use strict";var Vf=aa();oa.exports=Vf});var Lr=u(($v,ua)=>{"use strict";var zf=Object.prototype.toString;ua.exports=zf});var sa=u((Jv,na)=>{"use strict";var Qf=Lr();function Kf(r){return Qf.call(r)}na.exports=Kf});var pa=u((r2,fa)=>{"use strict";var Zf=Object.prototype.hasOwnProperty;function Yf(r,e){return r==null?!1:Zf.call(r,e)}fa.exports=Yf});var ca=u((e2,la)=>{"use strict";var $f=pa();la.exports=$f});var da=u((t2,ma)=>{"use strict";var Jf=typeof Symbol=="function"?Symbol:void 0;ma.exports=Jf});var ya=u((a2,va)=>{"use strict";var r0=da();va.exports=r0});var _a=u((o2,ha)=>{"use strict";var ga=ya(),e0=typeof ga=="function"?ga.toStringTag:"";ha.exports=e0});var xa=u((i2,qa)=>{"use strict";var t0=ca(),C=_a(),Mr=Lr();function a0(r){var e,t,a;if(r==null)return Mr.call(r);t=r[C],e=t0(r,C);try{r[C]=void 0}catch{return Mr.call(r)}return a=Mr.call(r),e?r[C]=t:delete r[C],a}qa.exports=a0});var k=u((u2,Aa)=>{"use strict";var o0=ia(),i0=sa(),u0=xa(),Fr;o0()?Fr=u0:Fr=i0;Aa.exports=Fr});var wa=u((n2,Sa)=>{"use strict";var n0=k(),s0=typeof Uint32Array=="function";function f0(r){return s0&&r instanceof Uint32Array||n0(r)==="[object Uint32Array]"}Sa.exports=f0});var Ia=u((s2,Ea)=>{"use strict";var p0=wa();Ea.exports=p0});var Na=u((f2,ba)=>{"use strict";var l0=4294967295;ba.exports=l0});var Pa=u((p2,Oa)=>{"use strict";var c0=typeof Uint32Array=="function"?Uint32Array:null;Oa.exports=c0});var La=u((l2,Ra)=>{"use strict";var m0=Ia(),Wr=Na(),Ta=Pa();function d0(){var r,e;if(typeof Ta!="function")return!1;try{e=[1,3.14,-3.14,Wr+1,Wr+2],e=new Ta(e),r=m0(e)&&e[0]===1&&e[1]===3&&e[2]===Wr-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Ra.exports=d0});var Fa=u((c2,Ma)=>{"use strict";var v0=La();Ma.exports=v0});var Ua=u((m2,Wa)=>{"use strict";var y0=typeof Uint32Array=="function"?Uint32Array:void 0;Wa.exports=y0});var Ga=u((d2,Ba)=>{"use strict";function g0(){throw new Error("not implemented")}Ba.exports=g0});var W=u((v2,Ha)=>{"use strict";var h0=Fa(),_0=Ua(),q0=Ga(),Ur;h0()?Ur=_0:Ur=q0;Ha.exports=Ur});var Xa=u((y2,ja)=>{"use strict";var x0=k(),A0=typeof Float64Array=="function";function S0(r){return A0&&r instanceof Float64Array||x0(r)==="[object Float64Array]"}ja.exports=S0});var ka=u((g2,Ca)=>{"use strict";var w0=Xa();Ca.exports=w0});var Va=u((h2,Da)=>{"use strict";var E0=typeof Float64Array=="function"?Float64Array:null;Da.exports=E0});var Ka=u((_2,Qa)=>{"use strict";var I0=ka(),za=Va();function b0(){var r,e;if(typeof za!="function")return!1;try{e=new za([1,3.14,-3.14,NaN]),r=I0(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}Qa.exports=b0});var Ya=u((q2,Za)=>{"use strict";var N0=Ka();Za.exports=N0});var Ja=u((x2,$a)=>{"use strict";var O0=typeof Float64Array=="function"?Float64Array:void 0;$a.exports=O0});var eo=u((A2,ro)=>{"use strict";function P0(){throw new Error("not implemented")}ro.exports=P0});var U=u((S2,to)=>{"use strict";var T0=Ya(),R0=Ja(),L0=eo(),Br;T0()?Br=R0:Br=L0;to.exports=Br});var oo=u((w2,ao)=>{"use strict";var M0=k(),F0=typeof Uint8Array=="function";function W0(r){return F0&&r instanceof Uint8Array||M0(r)==="[object Uint8Array]"}ao.exports=W0});var uo=u((E2,io)=>{"use strict";var U0=oo();io.exports=U0});var so=u((I2,no)=>{"use strict";var B0=255;no.exports=B0});var po=u((b2,fo)=>{"use strict";var G0=typeof Uint8Array=="function"?Uint8Array:null;fo.exports=G0});var mo=u((N2,co)=>{"use strict";var H0=uo(),Gr=so(),lo=po();function j0(){var r,e;if(typeof lo!="function")return!1;try{e=[1,3.14,-3.14,Gr+1,Gr+2],e=new lo(e),r=H0(e)&&e[0]===1&&e[1]===3&&e[2]===Gr-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}co.exports=j0});var yo=u((O2,vo)=>{"use strict";var X0=mo();vo.exports=X0});var ho=u((P2,go)=>{"use strict";var C0=typeof Uint8Array=="function"?Uint8Array:void 0;go.exports=C0});var qo=u((T2,_o)=>{"use strict";function k0(){throw new Error("not implemented")}_o.exports=k0});var Ao=u((R2,xo)=>{"use strict";var D0=yo(),V0=ho(),z0=qo(),Hr;D0()?Hr=V0:Hr=z0;xo.exports=Hr});var wo=u((L2,So)=>{"use strict";var Q0=k(),K0=typeof Uint16Array=="function";function Z0(r){return K0&&r instanceof Uint16Array||Q0(r)==="[object Uint16Array]"}So.exports=Z0});var Io=u((M2,Eo)=>{"use strict";var Y0=wo();Eo.exports=Y0});var No=u((F2,bo)=>{"use strict";var $0=65535;bo.exports=$0});var Po=u((W2,Oo)=>{"use strict";var J0=typeof Uint16Array=="function"?Uint16Array:null;Oo.exports=J0});var Lo=u((U2,Ro)=>{"use strict";var rp=Io(),jr=No(),To=Po();function ep(){var r,e;if(typeof To!="function")return!1;try{e=[1,3.14,-3.14,jr+1,jr+2],e=new To(e),r=rp(e)&&e[0]===1&&e[1]===3&&e[2]===jr-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Ro.exports=ep});var Fo=u((B2,Mo)=>{"use strict";var tp=Lo();Mo.exports=tp});var Uo=u((G2,Wo)=>{"use strict";var ap=typeof Uint16Array=="function"?Uint16Array:void 0;Wo.exports=ap});var Go=u((H2,Bo)=>{"use strict";function op(){throw new Error("not implemented")}Bo.exports=op});var jo=u((j2,Ho)=>{"use strict";var ip=Fo(),up=Uo(),np=Go(),Xr;ip()?Xr=up:Xr=np;Ho.exports=Xr});var Co=u((X2,Xo)=>{"use strict";var sp=Ao(),fp=jo(),pp={uint16:fp,uint8:sp};Xo.exports=pp});var zo=u((C2,Vo)=>{"use strict";var ko=Co(),Do;function lp(){var r,e;return r=new ko.uint16(1),r[0]=4660,e=new ko.uint8(r.buffer),e[0]===52}Do=lp();Vo.exports=Do});var B=u((k2,Qo)=>{"use strict";var cp=zo();Qo.exports=cp});var Yo=u((D2,Zo)=>{"use strict";var mp=B(),Ko,Cr,kr;mp===!0?(Cr=1,kr=0):(Cr=0,kr=1);Ko={HIGH:Cr,LOW:kr};Zo.exports=Ko});var Dr=u((V2,ei)=>{"use strict";var dp=W(),vp=U(),Jo=Yo(),ri=new vp(1),$o=new dp(ri.buffer),yp=Jo.HIGH,gp=Jo.LOW;function hp(r,e,t,a){return ri[0]=r,e[a]=$o[yp],e[a+t]=$o[gp],e}ei.exports=hp});var ai=u((z2,ti)=>{"use strict";var _p=Dr();function qp(r){return _p(r,[0,0],1,0)}ti.exports=qp});var Vr=u((Q2,ii)=>{"use strict";var xp=X(),oi=ai(),Ap=Dr();xp(oi,"assign",Ap);ii.exports=oi});var ni=u((K2,ui)=>{"use strict";var Sp=B(),zr;Sp===!0?zr=1:zr=0;ui.exports=zr});var pi=u((Z2,fi)=>{"use strict";var wp=W(),Ep=U(),Ip=ni(),si=new Ep(1),bp=new wp(si.buffer);function Np(r){return si[0]=r,bp[Ip]}fi.exports=Np});var ar=u((Y2,li)=>{"use strict";var Op=pi();li.exports=Op});var di=u(($2,mi)=>{"use strict";var Pp=B(),ci,Qr,Kr;Pp===!0?(Qr=1,Kr=0):(Qr=0,Kr=1);ci={HIGH:Qr,LOW:Kr};mi.exports=ci});var _i=u((J2,hi)=>{"use strict";var Tp=W(),Rp=U(),yi=di(),gi=new Rp(1),vi=new Tp(gi.buffer),Lp=yi.HIGH,Mp=yi.LOW;function Fp(r,e){return vi[Lp]=r,vi[Mp]=e,gi[0]}hi.exports=Fp});var Zr=u((r3,qi)=>{"use strict";var Wp=_i();qi.exports=Wp});var Ai=u((e3,xi)=>{"use strict";var Up=tt(),Bp=ot(),Gp=Vr(),Hp=ar(),jp=Zr(),Yr=[0,0];function Xp(r,e){var t,a;return Gp.assign(r,Yr,1,0),t=Yr[0],t&=Bp,a=Hp(e),a&=Up,t|=a,jp(t,Yr[1])}xi.exports=Xp});var wi=u((t3,Si)=>{"use strict";var Cp=Ai();Si.exports=Cp});var Ii=u((a3,Ei)=>{"use strict";var kp=22250738585072014e-324;Ei.exports=kp});var Ni=u((o3,bi)=>{"use strict";function Dp(r){return Math.abs(r)}bi.exports=Dp});var Pi=u((i3,Oi)=>{"use strict";var Vp=Ni();Oi.exports=Vp});var $r=u((u3,Ti)=>{"use strict";var zp=Ii(),Qp=Or(),Kp=w(),Zp=Pi(),Yp=4503599627370496;function $p(r,e,t,a){return Kp(r)||Qp(r)?(e[a]=r,e[a+t]=0,e):r!==0&&Zp(r)<zp?(e[a]=r*Yp,e[a+t]=-52,e):(e[a]=r,e[a+t]=0,e)}Ti.exports=$p});var Li=u((n3,Ri)=>{"use strict";var Jp=$r();function rl(r){return Jp(r,[0,0],1,0)}Ri.exports=rl});var Wi=u((s3,Fi)=>{"use strict";var el=X(),Mi=Li(),tl=$r();el(Mi,"assign",tl);Fi.exports=Mi});var Bi=u((f3,Ui)=>{"use strict";var al=2146435072;Ui.exports=al});var Hi=u((p3,Gi)=>{"use strict";var ol=ar(),il=Bi(),ul=rr();function nl(r){var e=ol(r);return e=(e&il)>>>20,e-ul|0}Gi.exports=nl});var Xi=u((l3,ji)=>{"use strict";var sl=Hi();ji.exports=sl});var ki=u((c3,Ci)=>{"use strict";var fl=M(),pl=O(),ll=rr(),cl=ze(),ml=Ke(),dl=Ye(),vl=w(),yl=Or(),gl=wi(),hl=Wi().assign,_l=Xi(),ql=Vr(),xl=Zr(),Al=2220446049250313e-31,Sl=2148532223,Jr=[0,0],re=[0,0];function wl(r,e){var t,a;return e===0||r===0||vl(r)||yl(r)?r:(hl(r,Jr,1,0),r=Jr[0],e+=Jr[1],e+=_l(r),e<dl?gl(0,r):e>cl?r<0?pl:fl:(e<=ml?(e+=52,a=Al):a=1,ql.assign(r,re,1,0),t=re[0],t&=Sl,t|=e+ll<<20,a*xl(t,re[1])))}Ci.exports=wl});var Vi=u((m3,Di)=>{"use strict";var El=ki();Di.exports=El});var Qi=u((d3,zi)=>{"use strict";function Il(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}zi.exports=Il});var Zi=u((v3,Ki)=>{"use strict";var bl=Vi(),Nl=Qi();function Ol(r,e,t){var a,o,i,n;return a=r-e,o=a*a,i=a-o*Nl(o),n=1-(e-a*i/(2-i)-r),bl(n,t)}Ki.exports=Ol});var tu=u((y3,eu)=>{"use strict";var Pl=w(),Yi=Be(),Tl=O(),$i=M(),Rl=Zi(),Ll=.6931471803691238,Ml=19082149292705877e-26,Ji=1.4426950408889634,Fl=709.782712893384,Wl=-745.1332191019411,ru=1/(1<<28),Ul=-ru;function Bl(r){var e,t,a;return Pl(r)||r===$i?r:r===Tl?0:r>Fl?$i:r<Wl?0:r>Ul&&r<ru?1+r:(r<0?a=Yi(Ji*r-.5):a=Yi(Ji*r+.5),e=r-a*Ll,t=a*Ml,Rl(e,t,a))}eu.exports=Bl});var ou=u((g3,au)=>{"use strict";var Gl=tu();au.exports=Gl});var uu=u((h3,iu)=>{"use strict";var Hl=B(),ee;Hl===!0?ee=0:ee=1;iu.exports=ee});var su=u((_3,nu)=>{"use strict";var jl=W(),Xl=U(),Cl=uu(),te=new Xl(1),kl=new jl(te.buffer);function Dl(r,e){return te[0]=r,kl[Cl]=e>>>0,te[0]}nu.exports=Dl});var pu=u((q3,fu)=>{"use strict";var Vl=su();fu.exports=Vl});var cu=u((x3,lu)=>{"use strict";function zl(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}lu.exports=zl});var du=u((A3,mu)=>{"use strict";function Ql(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}mu.exports=Ql});var yu=u((S3,vu)=>{"use strict";function Kl(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}vu.exports=Kl});var hu=u((w3,gu)=>{"use strict";function Zl(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}gu.exports=Zl});var qu=u((E3,_u)=>{"use strict";function Yl(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}_u.exports=Yl});var Au=u((I3,xu)=>{"use strict";function $l(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}xu.exports=$l});var wu=u((b3,Su)=>{"use strict";function Jl(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Su.exports=Jl});var Iu=u((N3,Eu)=>{"use strict";function rc(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Eu.exports=rc});var Tu=u((O3,Pu)=>{"use strict";var ec=w(),bu=ou(),tc=pu(),ac=M(),oc=O(),ic=cu(),uc=du(),nc=yu(),sc=hu(),fc=qu(),pc=Au(),lc=wu(),cc=Iu(),Nu=1e-300,mc=2848094538889218e-321,dc=3725290298461914e-24,Ou=.8450629115104675,vc=.1283791670955126,yc=1.0270333367641007,gc=.12837916709551256,hc=1,_c=-.0023621185607526594,qc=1,xc=-.009864944034847148,Ac=1,Sc=-.0098649429247001,wc=1;function Ec(r){var e,t,a,o,i,n,s,f;return ec(r)?NaN:r===ac?1:r===oc?-1:r===0?r:(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375?t<dc?t<mc?.125*(8*r+yc*r):r+vc*r:(a=r*r,o=gc+a*ic(a),i=hc+a*uc(a),n=o/i,r+r*n):t<1.25?(i=t-1,s=_c+i*nc(i),f=qc+i*sc(i),e?-Ou-s/f:Ou+s/f):t>=6?e?Nu-1:1-Nu:(i=1/(t*t),t<2.857142857142857?(o=xc+i*fc(i),i=Ac+i*pc(i)):(o=Sc+i*lc(i),i=wc+i*cc(i)),a=tc(t,0),o=bu(-(a*a)-.5625)*bu((a-t)*(a+t)+o/i),e?o/t-1:1-o/t))}Pu.exports=Ec});var Lu=u((P3,Ru)=>{"use strict";var Ic=Tu();Ru.exports=Ic});var Fu=u((T3,Mu)=>{"use strict";var bc=Math.sqrt;Mu.exports=bc});var or=u((R3,Wu)=>{"use strict";var Nc=Fu();Wu.exports=Nc});var Bu=u((L3,Uu)=>{"use strict";var Oc=B(),ae;Oc===!0?ae=1:ae=0;Uu.exports=ae});var Hu=u((M3,Gu)=>{"use strict";var Pc=W(),Tc=U(),Rc=Bu(),oe=new Tc(1),Lc=new Pc(oe.buffer);function Mc(r,e){return oe[0]=r,Lc[Rc]=e>>>0,oe[0]}Gu.exports=Mc});var Xu=u((F3,ju)=>{"use strict";var Fc=Hu();ju.exports=Fc});var ku=u((W3,Cu)=>{"use strict";function Wc(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}Cu.exports=Wc});var Vu=u((U3,Du)=>{"use strict";function Uc(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}Du.exports=Uc});var Zu=u((B3,Ku)=>{"use strict";var zu=ar(),Bc=Xu(),Gc=w(),Hc=rr(),jc=O(),Xc=ku(),Cc=Vu(),ir=.6931471803691238,ur=19082149292705877e-26,kc=0x40000000000000,Dc=.3333333333333333,Qu=1048575,Vc=2146435072,zc=1048576,Qc=1072693248;function Kc(r){var e,t,a,o,i,n,s,f,p,l,g,_;return r===0?jc:Gc(r)||r<0?NaN:(t=zu(r),i=0,t<zc&&(i-=54,r*=kc,t=zu(r)),t>=Vc?r+r:(i+=(t>>20)-Hc|0,t&=Qu,f=t+614244&1048576|0,r=Bc(r,t|f^Qc),i+=f>>20|0,s=r-1,(Qu&2+t)<3?s===0?i===0?0:i*ir+i*ur:(n=s*s*(.5-Dc*s),i===0?s-n:i*ir-(n-i*ur-s)):(l=s/(2+s),_=l*l,f=t-398458|0,g=_*_,p=440401-t|0,o=g*Xc(g),a=_*Cc(g),f|=p,n=a+o,f>0?(e=.5*s*s,i===0?s-(e-l*(e+n)):i*ir-(e-(l*(e+n)+i*ur)-s)):i===0?s-l*(s-n):i*ir-(l*(s-n)-i*ur-s))))}Ku.exports=Kc});var $u=u((G3,Yu)=>{"use strict";var Zc=Zu();Yu.exports=Zc});var rn=u((H3,Ju)=>{"use strict";function Yc(r){var e,t,a;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),a=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),a=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/a)}Ju.exports=Yc});var tn=u((j3,en)=>{"use strict";function $c(r){var e,t,a;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),a=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),a=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/a)}en.exports=$c});var on=u((X3,an)=>{"use strict";function Jc(r){var e,t,a;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),a=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),a=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/a)}an.exports=Jc});var nn=u((C3,un)=>{"use strict";function rm(r){var e,t,a;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),a=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),a=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/a)}un.exports=rm});var fn=u((k3,sn)=>{"use strict";function em(r){var e,t,a;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),a=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),a=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/a)}sn.exports=em});var mn=u((D3,cn)=>{"use strict";var tm=w(),pn=or(),ln=$u(),am=M(),om=O(),im=rn(),um=tn(),nm=on(),sm=nn(),fm=fn(),pm=.08913147449493408,lm=2.249481201171875,cm=.807220458984375,mm=.9399557113647461,dm=.9836282730102539;function vm(r){var e,t,a,o,i,n;return tm(r)?NaN:r===1?am:r===-1?om:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),o=1-t,t<=.5?(i=t*(t+10),n=im(t),e*(i*pm+i*n)):o>=.25?(i=pn(-2*ln(o)),o-=.25,n=um(o),e*(i/(lm+n))):(o=pn(-ln(o)),o<3?(a=o-1.125,n=nm(a),e*(cm*o+n*o)):o<6?(a=o-3,n=sm(a),e*(mm*o+n*o)):(a=o-6,n=fm(a),e*(dm*o+n*o))))}cn.exports=vm});var ie=u((V3,dn)=>{"use strict";var ym=mn();dn.exports=ym});var yn=u((z3,vn)=>{"use strict";var gm=ie(),ue=w(),hm=or();function _m(r,e,t){var a,o;return ue(e)||ue(t)||ue(r)||t<0||r<0||r>1?NaN:t===0?e:(a=e,o=t*hm(2),a+o*gm(2*r-1))}vn.exports=_m});var hn=u((Q3,gn)=>{"use strict";function qm(r){return e;function e(){return r}}gn.exports=qm});var ne=u((K3,_n)=>{"use strict";var xm=hn();_n.exports=xm});var xn=u((Z3,qn)=>{"use strict";var Am=w();function Sm(r,e){return Am(r)||r<0||r>1?NaN:e}qn.exports=Sm});var wn=u((Y3,Sn)=>{"use strict";var wm=ne(),An=w();function Em(r){if(An(r))return wm(NaN);return e;function e(t){return An(t)||t<0||t>1?NaN:r}}Sn.exports=Em});var bn=u(($3,In)=>{"use strict";var Im=X(),En=xn(),bm=wn();Im(En,"factory",bm);In.exports=En});var On=u((J3,Nn)=>{"use strict";var Nm=ne(),Om=bn().factory,Pm=ie(),se=w(),Tm=or();function Rm(r,e){var t,a;if(se(r)||se(e)||e<0)return Nm(NaN);return e===0&&Om(r),t=r,a=e*Tm(2),o;function o(i){return se(i)||i<0||i>1?NaN:t+a*Pm(2*i-1)}}Nn.exports=Rm});var Rn=u((r6,Tn)=>{"use strict";var Lm=X(),Pn=yn(),Mm=On();Lm(Pn,"factory",Mm);Tn.exports=Pn});var u1={};Kn(u1,{ordinal:()=>Hn,predictDraw:()=>Xn,predictWin:()=>jn,rate:()=>Gn,rating:()=>Fn});function c(r){return r!=null&&typeof r=="object"&&r["@@functional/placeholder"]===!0}function v(r){return function e(t){return arguments.length===0||c(t)?e:r.apply(this,arguments)}}function d(r){return function e(t,a){switch(arguments.length){case 0:return e;case 1:return c(t)?e:v(function(o){return r(t,o)});default:return c(t)&&c(a)?e:c(t)?v(function(o){return r(o,a)}):c(a)?v(function(o){return r(t,o)}):r(t,a)}}}function N(r,e){switch(r){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,a){return e.apply(this,arguments)};case 3:return function(t,a,o){return e.apply(this,arguments)};case 4:return function(t,a,o,i){return e.apply(this,arguments)};case 5:return function(t,a,o,i,n){return e.apply(this,arguments)};case 6:return function(t,a,o,i,n,s){return e.apply(this,arguments)};case 7:return function(t,a,o,i,n,s,f){return e.apply(this,arguments)};case 8:return function(t,a,o,i,n,s,f,p){return e.apply(this,arguments)};case 9:return function(t,a,o,i,n,s,f,p,l){return e.apply(this,arguments)};case 10:return function(t,a,o,i,n,s,f,p,l,g){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function Z(r,e,t){return function(){for(var a=[],o=0,i=r,n=0,s=!1;n<e.length||o<arguments.length;){var f;n<e.length&&(!c(e[n])||o>=arguments.length)?f=e[n]:(f=arguments[o],o+=1),a[n]=f,c(f)?s=!0:i-=1,n+=1}return!s&&i<=0?t.apply(this,a):N(Math.max(0,i),Z(r,a,t))}}var Yn=d(function(e,t){return e===1?v(t):N(e,Z(e,[],t))}),de=Yn;function sr(r){return function e(t,a,o){switch(arguments.length){case 0:return e;case 1:return c(t)?e:d(function(i,n){return r(t,i,n)});case 2:return c(t)&&c(a)?e:c(t)?d(function(i,n){return r(i,a,n)}):c(a)?d(function(i,n){return r(t,i,n)}):v(function(i){return r(t,a,i)});default:return c(t)&&c(a)&&c(o)?e:c(t)&&c(a)?d(function(i,n){return r(i,n,o)}):c(t)&&c(o)?d(function(i,n){return r(i,a,n)}):c(a)&&c(o)?d(function(i,n){return r(t,i,n)}):c(t)?v(function(i){return r(i,a,o)}):c(a)?v(function(i){return r(t,i,o)}):c(o)?v(function(i){return r(t,a,i)}):r(t,a,o)}}}var Y=Array.isArray||function(e){return e!=null&&e.length>=0&&Object.prototype.toString.call(e)==="[object Array]"};function fr(r){return r!=null&&typeof r["@@transducer/step"]=="function"}function G(r,e,t){return function(){if(arguments.length===0)return t();var a=arguments[arguments.length-1];if(!Y(a)){for(var o=0;o<r.length;){if(typeof a[r[o]]=="function")return a[r[o]].apply(a,Array.prototype.slice.call(arguments,0,-1));o+=1}if(fr(a)){var i=e.apply(null,Array.prototype.slice.call(arguments,0,-1));return i(a)}}return t.apply(this,arguments)}}var T={init:function(){return this.xf["@@transducer/init"]()},result:function(r){return this.xf["@@transducer/result"](r)}};function R(r,e){return Object.prototype.hasOwnProperty.call(e,r)}var ve=Object.prototype.toString,$n=(function(){return ve.call(arguments)==="[object Arguments]"?function(e){return ve.call(e)==="[object Arguments]"}:function(e){return R("callee",e)}})(),ye=$n;var Jn=!{toString:null}.propertyIsEnumerable("toString"),ge=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],he=(function(){"use strict";return arguments.propertyIsEnumerable("length")})(),rs=function(e,t){for(var a=0;a<e.length;){if(e[a]===t)return!0;a+=1}return!1},es=typeof Object.keys=="function"&&!he?v(function(e){return Object(e)!==e?[]:Object.keys(e)}):v(function(e){if(Object(e)!==e)return[];var t,a,o=[],i=he&&ye(e);for(t in e)R(t,e)&&(!i||t!=="length")&&(o[o.length]=t);if(Jn)for(a=ge.length-1;a>=0;)t=ge[a],R(t,e)&&!rs(o,t)&&(o[o.length]=t),a-=1;return o}),$=es;function pr(r,e){for(var t=0,a=e.length,o=Array(a);t<a;)o[t]=r(e[t]),t+=1;return o}function H(r,e,t){for(var a=0,o=t.length;a<o;)e=r(e,t[a]),a+=1;return e}function lr(r,e){for(var t=0,a=e.length,o=[];t<a;)r(e[t])&&(o[o.length]=e[t]),t+=1;return o}function cr(r,e){for(var t=new Map,a=e.entries(),o=a.next();!o.done;)r(o.value[1])&&t.set(o.value[0],o.value[1]),o=a.next();return t}function mr(r){return Object.prototype.toString.call(r)==="[object Map]"}function dr(r){return Object.prototype.toString.call(r)==="[object Object]"}var ts=(function(){function r(e,t){this.xf=t,this.f=e}return r.prototype["@@transducer/init"]=T.init,r.prototype["@@transducer/result"]=T.result,r.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.xf["@@transducer/step"](e,t):e},r})();function vr(r){return function(e){return new ts(r,e)}}var as=d(G(["fantasy-land/filter","filter"],vr,function(r,e){return dr(e)?H(function(t,a){return r(e[a])&&(t[a]=e[a]),t},{},$(e)):mr(e)?cr(r,e):lr(r,e)})),yr=as;var os=(function(){function r(e,t){this.xf=t,this.f=e}return r.prototype["@@transducer/init"]=T.init,r.prototype["@@transducer/result"]=T.result,r.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},r})(),is=function(e){return function(t){return new os(e,t)}},_e=is;var us=d(G(["fantasy-land/map","map"],_e,function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return de(t.length,function(){return e.call(this,t.apply(this,arguments))});case"[object Object]":return H(function(a,o){return a[o]=e(t[o]),a},{},$(t));default:return pr(e,t)}})),gr=us;function hr(r,e){var t=r<0?e.length+r:r;return e[t]}function _r(r){return Object.prototype.toString.call(r)==="[object String]"}var ns=v(function(e){return Y(e)?!0:!e||typeof e!="object"||_r(e)?!1:e.length===0?!0:e.length>0?e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1):!1}),qe=ns;var xe=typeof Symbol<"u"?Symbol.iterator:"@@iterator";function qr(r,e,t){return function(o,i,n){if(qe(n))return r(o,i,n);if(n==null)return i;if(typeof n["fantasy-land/reduce"]=="function")return e(o,i,n,"fantasy-land/reduce");if(n[xe]!=null)return t(o,i,n[xe]());if(typeof n.next=="function")return t(o,i,n);if(typeof n.reduce=="function")return e(o,i,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}}function xr(r,e,t){for(var a=0,o=t.length;a<o;){if(e=r["@@transducer/step"](e,t[a]),e&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}a+=1}return r["@@transducer/result"](e)}var ss=d(function(e,t){return N(e.length,function(){return e.apply(t,arguments)})}),Ae=ss;function fs(r,e,t){for(var a=t.next();!a.done;){if(e=r["@@transducer/step"](e,a.value),e&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}a=t.next()}return r["@@transducer/result"](e)}function ps(r,e,t,a){return r["@@transducer/result"](t[a](Ae(r["@@transducer/step"],r),e))}var ls=qr(xr,ps,fs),Se=ls;var cs=(function(){function r(e){this.f=e}return r.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},r.prototype["@@transducer/result"]=function(e){return e},r.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},r})();function Ar(r){return new cs(r)}var ms=sr(function(r,e,t){return Se(typeof r=="function"?Ar(r):r,e,t)}),L=ms;var ds=v(function(r){return hr(0,r)}),Sr=ds;function wr(r){return r}var vs=v(wr),Er=vs;function J(r){return Object.prototype.toString.call(r)==="[object Number]"}var ys=d(function(e,t){if(!(J(e)&&J(t)))throw new TypeError("Both arguments to range must be numbers");for(var a=e<t?Math.ceil(t-e):0,o=Array(a),i=0;i<a;)o[i]=i+e,i+=1;return o}),j=ys;var gs=d(function(e,t){return Array.prototype.slice.call(t,0).sort(function(a,o){var i=e(a),n=e(o);return i<n?-1:i>n?1:0})}),Ir=gs;var hs=d(function(e,t){for(var a=0,o=e.length,i,n=t.length,s=Array(o*n);a<o;){for(i=0;i<n;)s[a*n+i]=[e[a],t[i]],i+=1;a+=1}return s}),br=hs;var _s=r=>e=>{if(e.length===0)return[[],[]];let t=[];e.forEach((i,n)=>{t.push([r[n],n,e[n]])}),t.sort(([i],[n])=>i-n);let a=[],o=[];return t.forEach(([i,n,s])=>{o.push(n),a.push(s)}),[a,o]},Nr=(r,e)=>_s(r)(e);var Un=me(Lu(),1),Bn=me(Rn(),1);var Fm=Object.defineProperty,Wm=Object.defineProperties,Um=Object.getOwnPropertyDescriptors,Ln=Object.getOwnPropertySymbols,Bm=Object.prototype.hasOwnProperty,Gm=Object.prototype.propertyIsEnumerable,Mn=(r,e,t)=>e in r?Fm(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,D=(r,e)=>{for(var t in e||(e={}))Bm.call(e,t)&&Mn(r,t,e[t]);if(Ln)for(var t of Ln(e))Gm.call(e,t)&&Mn(r,t,e[t]);return r},fe=(r,e)=>Wm(r,Um(e)),Hm=r=>{let{z:e=3,mu:t=25,epsilon:a=.1,alpha:o=1,target:i=0}=r,{tau:n=25/300,sigma:s=25/3,beta:f=25/6,limitSigma:p=!1}=r,{balance:l=!1,kappa:g=1e-4}=r,_=f**2;return{SIGMA:s,MU:t,EPSILON:a,TWOBETASQ:2*_,BETA:f,BETASQ:_,Z:e,ALPHA:o,TARGET:i,TAU:n,LIMIT_SIGMA:p,BALANCE:l,KAPPA:g}},b=Hm,jm=(r,e={})=>{let{MU:t,SIGMA:a}=b(D(D({},e),r));return{mu:t,sigma:a}},Fn=jm,Xm=(r,e)=>Math.log1p(Math.max(0,r-e)),Cm=(r,e,t)=>{let a=r.length;if(a<=1)return 1;let o=r[e];return 1+r.reduce((n,s,f)=>f===e?n:n+Xm(Math.abs(o-s),t),0)/(a-1)},Wn=(r,e)=>r+e,km=(r,e=[])=>{let t=r.map((i,n)=>{var s;return(s=e[n])!=null?s:n}),a=new Array(r.length),o=0;for(let i=0;i<t.length;i+=1)i>0&&t[i-1]<t[i]&&(o=i),a[i]=o;return a},Dm=r=>e=>{let{Z:t,ALPHA:a,TARGET:o,BALANCE:i,KAPPA:n}=b(r),s=km(e,r.rank);return e.map((f,p)=>{if(!i){let{mu:m,sigSq:h}=f.reduce((x,{mu:A,sigma:S})=>(x.mu+=A,x.sigSq+=S*S,x),{mu:0,sigSq:0});return[m,h,f,s[p]]}let l=f.map(({mu:m,sigma:h})=>o+a*(m-t*h)),g=Math.max(...l),_=g+n,{mu:y,sigSq:q}=f.reduce((m,{mu:h,sigma:x},A)=>{let S=1+(g-l[A])/_;m.mu+=h*S;let E=x*S;return m.sigSq+=E*E,m},{mu:0,sigSq:0});return[y,q,f,s[p]]})},Vm=r=>{let{BETASQ:e}=b(r);return t=>Math.sqrt(t.map(([a,o,i,n])=>o+e).reduce(Wn,0))},zm=(r,e)=>r.map(([t,a,o,i])=>r.filter(([n,s,f,p])=>p>=i).map(([n,s,f,p])=>Math.exp(n/e)).reduce(Wn,0)),Qm=r=>r.map(([e,t,a,o])=>r.filter(([i,n,s,f])=>o===f).length),Km=(r,e,t,a,o,i)=>Math.sqrt(a)/r,Zm=r=>{var e;return(e=r.gamma)!=null?e:Km},le=r=>({utilC:Vm(r),teamRating:Dm(r),gamma:Zm(r)}),Ym=(r,e={})=>{let{KAPPA:t}=b(e),{utilC:a,teamRating:o,gamma:i}=le(e),n=o(r),s=a(n),f=zm(n,s),p=Qm(n);return n.map((l,g)=>{let[_,y,q,m]=l,h=Math.exp(_/s),{omega:x,delta:A}=n.reduce((I,[V,n1,s1,Cn],z)=>{if(Cn>m)return I;let Q=h/f[z];return I.omega+=(g===z?1-Q:-Q)/p[z],I.delta+=Q*(1-Q)/p[z],I},{omega:0,delta:0}),S=i(s,n.length,...l),E=x*(y/s),nr=A*(y/s**2)*S;return q.map(({mu:I,sigma:V})=>({mu:I+V**2/y*E,sigma:V*Math.sqrt(Math.max(1-V**2/y*nr,t))}))})},$m=Ym,Jm=Math.sqrt(2),a6=Math.sqrt(2*Math.PI),pe=r=>.5*(1+(0,Un.default)(r/Jm)),r1=r=>(0,Bn.default)(r,0,1),e1=(r,e={})=>{var t,a,o;let{LIMIT_SIGMA:i,TAU:n}=b(e),{model:s=$m}=e,f=n*n,p=r.map(m=>m.map(h=>fe(D({},h),{sigma:Math.sqrt(h.sigma*h.sigma+f)}))),l=(o=(a=e.rank)!=null?a:(t=e.score)==null?void 0:t.map(m=>-m))!=null?o:j(1,r.length+1),[g,_]=Nr(l,p),y=s(g,fe(D({},e),{rank:Ir(Er,l)})),[q]=Nr(_,y);if(e.score&&e.margin){let m=e.score,h=e.margin;q=q.map((x,A)=>{let S=Cm(m,A,h);return x.map((E,nr)=>{let I=p[A][nr].mu;return{mu:I+S*(E.mu-I),sigma:E.sigma}})})}return n&&i&&(q=q.map((m,h)=>m.map((x,A)=>fe(D({},x),{sigma:Math.min(x.sigma,r[h][A].sigma)})))),q},Gn=e1,t1=(r,e={})=>{let{sigma:t,mu:a}=r,{Z:o,ALPHA:i,TARGET:n}=b(e);return n+i*(a-o*t)},Hn=t1;function*a1(r){for(let e=0;e<r;e+=1)for(let t=e+1;t<r;t+=1)yield[e,t]}var o1=(r,e={})=>{let{teamRating:t}=le(e),{BETASQ:a}=b(e),o=t(r),i=r.length,n=i*(i-1)/2;return L((f,[p,l])=>{let[g,_]=o[p],[y,q]=o[l],m=pe((g-y)/Math.sqrt(i*a+_+q));return f[p]+=m,f[l]+=1-m,f},new Array(i).fill(0),a1(i)).map(f=>f/n)},jn=o1,i1=(r,e={})=>{let{teamRating:t}=le(e),{BETASQ:a,BETA:o}=b(e),i=L((y,q)=>y+q.length,0,r),n=1/i,s=Math.sqrt(i)*o*r1((1+n)/2),f=gr(y=>Sr(t([y])),r),p=j(0,f.length),l=yr(([y,q])=>y<q,br(p,p)),{total:g,count:_}=L((y,[q,m])=>{let[h,x]=f[q],[A,S]=f[m],E=Math.sqrt(i*a+x+S);return y.total+=pe((s-h+A)/E)-pe((A-h-s)/E),y.count+=1,y},{total:0,count:0},l);return g/_},Xn=i1;return Zn(u1);})();
/*! Bundled license information:

@stdlib/math-base-assert-is-nan/lib/main.js:
@stdlib/math-base-assert-is-nan/lib/index.js:
@stdlib/math-base-special-floor/lib/main.js:
@stdlib/math-base-special-floor/lib/index.js:
@stdlib/math-base-special-ceil/lib/main.js:
@stdlib/math-base-special-ceil/lib/index.js:
@stdlib/math-base-special-trunc/lib/main.js:
@stdlib/math-base-special-trunc/lib/index.js:
@stdlib/number-ctor/lib/main.js:
@stdlib/number-ctor/lib/index.js:
@stdlib/constants-float64-ninf/lib/index.js:
@stdlib/constants-float64-pinf/lib/index.js:
@stdlib/constants-float64-exponent-bias/lib/index.js:
@stdlib/constants-float64-max-base2-exponent/lib/index.js:
@stdlib/constants-float64-max-base2-exponent-subnormal/lib/index.js:
@stdlib/constants-float64-min-base2-exponent-subnormal/lib/index.js:
@stdlib/math-base-assert-is-infinite/lib/main.js:
@stdlib/math-base-assert-is-infinite/lib/index.js:
@stdlib/utils-define-property/lib/builtin.js:
@stdlib/utils-define-property/lib/polyfill.js:
@stdlib/utils-define-property/lib/index.js:
@stdlib/utils-define-nonenumerable-read-only-property/lib/main.js:
@stdlib/utils-define-nonenumerable-read-only-property/lib/index.js:
@stdlib/assert-has-symbol-support/lib/main.js:
@stdlib/assert-has-symbol-support/lib/index.js:
@stdlib/assert-has-tostringtag-support/lib/main.js:
@stdlib/assert-has-tostringtag-support/lib/index.js:
@stdlib/utils-native-class/lib/tostring.js:
@stdlib/utils-native-class/lib/main.js:
@stdlib/assert-has-own-property/lib/main.js:
@stdlib/assert-has-own-property/lib/index.js:
@stdlib/symbol-ctor/lib/main.js:
@stdlib/symbol-ctor/lib/index.js:
@stdlib/utils-native-class/lib/tostringtag.js:
@stdlib/utils-native-class/lib/polyfill.js:
@stdlib/utils-native-class/lib/index.js:
@stdlib/assert-is-uint32array/lib/main.js:
@stdlib/assert-is-uint32array/lib/index.js:
@stdlib/constants-uint32-max/lib/index.js:
@stdlib/assert-has-uint32array-support/lib/uint32array.js:
@stdlib/assert-has-uint32array-support/lib/main.js:
@stdlib/assert-has-uint32array-support/lib/index.js:
@stdlib/array-uint32/lib/main.js:
@stdlib/array-uint32/lib/polyfill.js:
@stdlib/array-uint32/lib/index.js:
@stdlib/assert-is-float64array/lib/main.js:
@stdlib/assert-is-float64array/lib/index.js:
@stdlib/assert-has-float64array-support/lib/float64array.js:
@stdlib/assert-has-float64array-support/lib/main.js:
@stdlib/assert-has-float64array-support/lib/index.js:
@stdlib/array-float64/lib/main.js:
@stdlib/array-float64/lib/polyfill.js:
@stdlib/array-float64/lib/index.js:
@stdlib/assert-is-uint8array/lib/main.js:
@stdlib/assert-is-uint8array/lib/index.js:
@stdlib/constants-uint8-max/lib/index.js:
@stdlib/assert-has-uint8array-support/lib/uint8array.js:
@stdlib/assert-has-uint8array-support/lib/main.js:
@stdlib/assert-has-uint8array-support/lib/index.js:
@stdlib/array-uint8/lib/main.js:
@stdlib/array-uint8/lib/polyfill.js:
@stdlib/array-uint8/lib/index.js:
@stdlib/assert-is-uint16array/lib/main.js:
@stdlib/assert-is-uint16array/lib/index.js:
@stdlib/constants-uint16-max/lib/index.js:
@stdlib/assert-has-uint16array-support/lib/uint16array.js:
@stdlib/assert-has-uint16array-support/lib/main.js:
@stdlib/assert-has-uint16array-support/lib/index.js:
@stdlib/array-uint16/lib/main.js:
@stdlib/array-uint16/lib/polyfill.js:
@stdlib/array-uint16/lib/index.js:
@stdlib/assert-is-little-endian/lib/ctors.js:
@stdlib/assert-is-little-endian/lib/main.js:
@stdlib/assert-is-little-endian/lib/index.js:
@stdlib/number-float64-base-to-words/lib/indices.js:
@stdlib/number-float64-base-to-words/lib/assign.js:
@stdlib/number-float64-base-to-words/lib/main.js:
@stdlib/number-float64-base-to-words/lib/index.js:
@stdlib/number-float64-base-get-high-word/lib/high.js:
@stdlib/number-float64-base-get-high-word/lib/main.js:
@stdlib/number-float64-base-get-high-word/lib/index.js:
@stdlib/number-float64-base-from-words/lib/indices.js:
@stdlib/number-float64-base-from-words/lib/main.js:
@stdlib/number-float64-base-from-words/lib/index.js:
@stdlib/math-base-special-copysign/lib/main.js:
@stdlib/math-base-special-copysign/lib/index.js:
@stdlib/constants-float64-smallest-normal/lib/index.js:
@stdlib/math-base-special-abs/lib/index.js:
@stdlib/number-float64-base-normalize/lib/assign.js:
@stdlib/number-float64-base-normalize/lib/main.js:
@stdlib/number-float64-base-normalize/lib/index.js:
@stdlib/constants-float64-high-word-exponent-mask/lib/index.js:
@stdlib/number-float64-base-exponent/lib/main.js:
@stdlib/number-float64-base-exponent/lib/index.js:
@stdlib/math-base-special-ldexp/lib/main.js:
@stdlib/math-base-special-ldexp/lib/index.js:
@stdlib/math-base-special-exp/lib/index.js:
@stdlib/number-float64-base-set-low-word/lib/low.js:
@stdlib/number-float64-base-set-low-word/lib/main.js:
@stdlib/number-float64-base-set-low-word/lib/index.js:
@stdlib/math-base-special-erf/lib/index.js:
@stdlib/math-base-special-sqrt/lib/main.js:
@stdlib/math-base-special-sqrt/lib/index.js:
@stdlib/number-float64-base-set-high-word/lib/high.js:
@stdlib/number-float64-base-set-high-word/lib/main.js:
@stdlib/number-float64-base-set-high-word/lib/index.js:
@stdlib/math-base-special-ln/lib/index.js:
@stdlib/math-base-special-erfinv/lib/index.js:
@stdlib/stats-base-dists-normal-quantile/lib/main.js:
@stdlib/utils-constant-function/lib/main.js:
@stdlib/utils-constant-function/lib/index.js:
@stdlib/stats-base-dists-degenerate-quantile/lib/main.js:
@stdlib/stats-base-dists-degenerate-quantile/lib/factory.js:
@stdlib/stats-base-dists-degenerate-quantile/lib/index.js:
@stdlib/stats-base-dists-normal-quantile/lib/factory.js:
@stdlib/stats-base-dists-normal-quantile/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-float64-high-word-sign-mask/lib/index.js:
@stdlib/constants-float64-high-word-abs-mask/lib/index.js:
@stdlib/string-base-format-interpolate/lib/is_number.js:
@stdlib/string-base-format-interpolate/lib/zero_pad.js:
@stdlib/string-base-format-interpolate/lib/format_integer.js:
@stdlib/string-base-format-interpolate/lib/is_string.js:
@stdlib/string-base-format-interpolate/lib/format_double.js:
@stdlib/string-base-format-interpolate/lib/space_pad.js:
@stdlib/string-base-format-interpolate/lib/main.js:
@stdlib/string-base-format-interpolate/lib/index.js:
@stdlib/string-base-format-tokenize/lib/main.js:
@stdlib/string-base-format-tokenize/lib/index.js:
@stdlib/string-format/lib/is_string.js:
@stdlib/string-format/lib/main.js:
@stdlib/string-format/lib/index.js:
@stdlib/math-base-special-exp/lib/polyval_p.js:
@stdlib/math-base-special-erf/lib/polyval_pp.js:
@stdlib/math-base-special-erf/lib/polyval_qq.js:
@stdlib/math-base-special-erf/lib/polyval_pa.js:
@stdlib/math-base-special-erf/lib/polyval_qa.js:
@stdlib/math-base-special-erf/lib/polyval_ra.js:
@stdlib/math-base-special-erf/lib/polyval_sa.js:
@stdlib/math-base-special-erf/lib/polyval_rb.js:
@stdlib/math-base-special-erf/lib/polyval_sb.js:
@stdlib/math-base-special-ln/lib/polyval_p.js:
@stdlib/math-base-special-ln/lib/polyval_q.js:
@stdlib/math-base-special-erfinv/lib/rational_p1q1.js:
@stdlib/math-base-special-erfinv/lib/rational_p2q2.js:
@stdlib/math-base-special-erfinv/lib/rational_p3q3.js:
@stdlib/math-base-special-erfinv/lib/rational_p4q4.js:
@stdlib/math-base-special-erfinv/lib/rational_p5q5.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/define_property.js:
@stdlib/utils-define-property/lib/has_define_property_support.js:
@stdlib/math-base-special-abs/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-special-exp/lib/expmulti.js:
@stdlib/math-base-special-exp/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (c) 2009 The Go Authors. All rights reserved.
  *
  * Redistribution and use in source and binary forms, with or without
  * modification, are permitted provided that the following conditions are
  * met:
  *
  *    * Redistributions of source code must retain the above copyright
  * notice, this list of conditions and the following disclaimer.
  *    * Redistributions in binary form must reproduce the above
  * copyright notice, this list of conditions and the following disclaimer
  * in the documentation and/or other materials provided with the
  * distribution.
  *    * Neither the name of Google Inc. nor the names of its
  * contributors may be used to endorse or promote products derived from
  * this software without specific prior written permission.
  *
  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
  * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
  * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
  * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
  * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
  * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
  * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  * ```
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math-base-special-erf/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math-base-special-ln/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math-base-special-erfinv/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  *
  * ## Notice
  *
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_48_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)
*/
