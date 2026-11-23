var Ix=Object.defineProperty;var Dx=(Zn,vn,Pi)=>vn in Zn?Ix(Zn,vn,{enumerable:!0,configurable:!0,writable:!0,value:Pi}):Zn[vn]=Pi;var te=(Zn,vn,Pi)=>Dx(Zn,typeof vn!="symbol"?vn+"":vn,Pi);(function(){"use strict";var Zn=document.createElement("style");Zn.textContent=`:root{--encre: #2b2420;--papier: #fbf4e4;--carton: #e7d3ae;--nom: #f2f2ff;--texte: #ffcf33;--guill: #ffa51f;--nombre: #3f9dff;--symbole: #ff6f5c;--erreur: #ff2020}*{box-sizing:border-box}html,body{margin:0;height:100%;overflow:hidden;background:#1b1714;color:var(--encre);font-family:Trebuchet MS,Segoe UI,sans-serif}button{font:inherit;cursor:pointer;border:2px solid var(--encre);border-radius:10px;background:var(--papier);padding:6px 12px;box-shadow:0 3px 0 var(--encre)}button:active{transform:translateY(2px);box-shadow:0 1px 0 var(--encre)}button:disabled{opacity:.5;cursor:default}.cache{display:none!important}#jeu{display:grid;grid-template-rows:48px 1fr 34vh;height:100vh}#barre{display:flex;align-items:center;gap:16px;padding:0 12px;background:var(--encre);color:var(--papier)}#barre button{background:transparent;color:var(--papier);border-color:var(--papier);box-shadow:none;padding:3px 10px}#titre{font-weight:700;font-size:18px;color:#f0b36b;white-space:nowrap}#mission{flex:1;font-size:15px}#gags,#degats{white-space:nowrap;font-size:14px}#degats span{letter-spacing:2px;color:#ff8a5c}#vue{position:relative;overflow:hidden}#scene{width:100%;height:100%;display:block;touch-action:none}#calque{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.bulle-3d{position:absolute;transform:translate(-50%,-100%);background:#fff;border:3px solid var(--encre);border-radius:16px;padding:8px 12px;max-width:300px;font-size:16px;line-height:1.25;box-shadow:0 4px #00000059;animation:pop .25s ease}.bulle-3d:after{content:"";position:absolute;left:50%;bottom:-14px;border:8px solid transparent;border-top:8px solid var(--encre);transform:translate(-50%)}@keyframes pop{0%{transform:translate(-50%,-100%) scale(.3)}}#phase{position:absolute;left:50%;top:10px;transform:translate(-50%);background:#2b2420d9;color:var(--papier);padding:4px 14px;border-radius:20px;font-size:14px}#phase:empty{display:none}#suite{position:absolute;right:18px;bottom:18px;font-size:18px;background:#f0b36b}#chargement{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;color:var(--papier);font-size:22px;background:#1b1714}#chargement:empty{display:none}#carte{position:absolute;right:16px;top:16px;width:min(480px,46vw);max-height:calc(100% - 32px);overflow-y:auto;background:var(--papier);border:4px solid var(--encre);border-radius:6px;padding:14px 18px;box-shadow:8px 8px #00000073;animation:entre .3s ease;transform:rotate(-.6deg)}@keyframes entre{0%{transform:translate(120%) rotate(4deg)}}#carte h2{margin:0;font-family:Impact,sans-serif;letter-spacing:.5px;font-size:26px}.gag-tete{display:flex;align-items:center;gap:10px}.gag-tete .num{background:#c8202a;color:#fff;font-weight:700;padding:2px 8px;border-radius:4px;transform:rotate(-4deg)}.gag-scene{font-size:17px;font-style:italic}.pyerr{background:#1d1a18;color:#ffb3a7;padding:8px 10px;border-radius:6px;white-space:pre-wrap;font-size:14px}.compare{display:grid;grid-template-columns:76px 1fr;gap:6px;align-items:center;font-size:14px}.mini-colis{display:inline-block;background:#c8925a;border:2px solid #7a5230;border-radius:4px;padding:0 6px;font-weight:700}.mini-feuille{display:inline-block;background:#fff;border:1px solid #999;padding:0 6px;font-family:Georgia,serif}.nouveau{background:#2f7d4a;color:#fff;display:inline-block;padding:3px 10px;border-radius:6px}.imprevu{background:#8a6d1f;color:#fff;padding:3px 10px;border-radius:6px}.degat{background:#fde1d6;border-left:5px solid #c8202a;padding:4px 10px}.etoiles{list-style:none;padding:0;font-size:17px}.constat{background:#fff;border:2px dashed #888;padding:8px;font-family:Courier New,monospace;font-size:13px}.aide-ok{background:#fff4d6;border-left:5px solid #d19a12;padding:4px 10px}.aide-non{color:#999}.boutons{display:flex;gap:8px;justify-content:flex-end;margin-top:10px}#atelier{display:grid;grid-template-columns:230px 1fr 270px;gap:10px;padding:10px;background:var(--carton);border-top:4px solid var(--encre);background-image:repeating-linear-gradient(90deg,rgba(0,0,0,.03) 0 2px,transparent 2px 9px);min-height:0}#atelier section{display:flex;flex-direction:column;min-height:0}#atelier h3{margin:0 0 6px;font-family:Impact,sans-serif;letter-spacing:1px;font-size:18px;display:flex;align-items:center;gap:8px}#compte{font-family:Trebuchet MS,sans-serif;letter-spacing:0;font-weight:400;font-size:13px;color:#6b5a44}.petit{font-size:12px;padding:1px 8px;box-shadow:none;margin-left:auto}.astuce{font-size:12px;color:#6b5a44;margin-top:auto}#palette{display:flex;flex-direction:column;gap:10px;align-items:flex-start}#programme{flex:1;overflow-y:auto;overflow-x:hidden;background:#fffdf6;border:3px solid var(--encre);border-radius:8px;padding:8px 8px 8px 34px;background-image:repeating-linear-gradient(#fffdf6 0,#fffdf6 37px,#dfe9f3 37px,#dfe9f3 39px)}#programme .vide{color:#a99a86;font-style:italic}#python{flex:1;margin:6px 0 0;background:#1d1a18;color:#f5efe2;border-radius:8px;padding:8px;font-size:15px;overflow:auto}.ligne{position:relative;display:flex;align-items:center;min-height:39px}.ligne .num{position:absolute;left:-28px;width:22px;text-align:right;color:#a99a86;font-size:12px}.ligne.courante{background:#f0b36b59;border-radius:6px}.ligne.erreur{background:#ff3c284d;border-radius:6px;animation:vibre .3s 3}@keyframes vibre{50%{transform:translate(4px)}}.bloc{display:inline-flex;align-items:center;gap:1px;padding:4px 8px;border:3px solid var(--encre);border-radius:9px;cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;font-family:Courier New,monospace;font-weight:700;font-size:18px;box-shadow:0 3px 0 var(--encre)}.b-envoyer{background:#f2a93b}.b-recevoir{background:#c97b4a;color:#fff}.b-print{background:#6c8fd6;color:#fff}.tampon{transform:rotate(-1deg)}.tampon:hover{transform:rotate(1deg) scale(1.04)}.fente{display:inline-flex;align-items:center;gap:2px;min-width:46px;min-height:34px;padding:2px 4px;margin:0 2px;background:#ffffff59;border:2px dashed rgba(0,0,0,.45);border-radius:6px}.fente.libre:before{content:"?";color:#00000059;padding:0 8px}.fente.survol{background:#78dc8c99;border-style:solid}.fente .bloc{font-size:16px;box-shadow:0 2px 0 var(--encre)}.car{display:inline-block;border-radius:3px;transition:background .08s,box-shadow .08s}.tuile{min-width:24px;height:30px;padding:0 3px;display:inline-flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;border:1px solid rgba(0,0,0,.25);box-shadow:1px 2px #00000059;cursor:grab;touch-action:none}.tuile.guill{background:#c8202a;color:#fff;font-family:Georgia,serif;font-size:28px;padding-top:10px}.insertion{width:4px;height:28px;background:#2f7d4a;border-radius:2px}.insertion-ligne{height:4px;background:#2f7d4a;border-radius:2px;margin:2px 0}.fantome{position:fixed;z-index:1000;pointer-events:none;opacity:.92;transform:rotate(-4deg) scale(1.1);box-shadow:0 10px 22px #0006}.car.lu[data-classe=nom]{box-shadow:inset 0 -4px #b8b8e0}.car.lu[data-classe=texte]{box-shadow:inset 0 -4px 0 var(--texte)}.car.lu[data-classe=guillemet]{box-shadow:inset 0 -4px 0 var(--guill)}.car.lu[data-classe=nombre]{box-shadow:inset 0 -4px 0 var(--nombre)}.car.lu[data-classe=symbole]{box-shadow:inset 0 -4px 0 var(--symbole)}.car.lampe{outline:3px solid #fff;outline-offset:1px;box-shadow:0 0 14px 6px #ffe678e6!important;position:relative;z-index:2}.car.lampe[data-classe=nombre]{box-shadow:0 0 14px 6px #3f9dffe6!important}.car.lampe[data-classe=nom]{box-shadow:0 0 14px 6px #e6e6fff2!important}.car.lampe[data-classe=symbole]{box-shadow:0 0 14px 6px #ff6f5ce6!important}.fugue{display:inline-block;width:18px;height:18px;margin-left:6px;border-radius:50%;background:var(--texte);box-shadow:0 0 16px 8px #ffcf33e6;animation:fugue 1.2s ease-in forwards}@keyframes fugue{to{transform:translate(60vw);opacity:.2}}.ligne.emballe .bloc{animation:coule 1.4s ease-in forwards}@keyframes coule{to{filter:drop-shadow(0 14px 0 #1a2340)}}.ligne-btn{display:flex;gap:6px}.gros{font-size:20px;background:#3c9a5a;color:#fff;flex:1}#vitesses{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0}.vit{font-size:13px;padding:2px 8px;box-shadow:none}.vit.on{background:var(--encre);color:var(--papier)}#aide{background:#f6dfb6}#aide-info{font-size:12px;color:#6b5a44;margin:4px 0}.legende{font-size:12px;margin-top:auto}.legende span{padding:0 4px;border-radius:3px}.l-nom{background:#dcdcf5}.l-texte{background:var(--texte)}.l-nombre{background:var(--nombre);color:#fff}.l-symbole{background:var(--symbole);color:#fff}body.execution #atelier{filter:saturate(.85)}#menu{position:fixed;top:0;right:0;bottom:0;left:0;background:#14100db8;display:flex;align-items:center;justify-content:center;z-index:50}.menu-boite{background:var(--papier);border:4px solid var(--encre);border-radius:10px;padding:20px 28px;box-shadow:10px 10px #00000080}.menu-boite h1{margin:0;font-family:Impact,sans-serif;font-size:44px;letter-spacing:1px}#cartes{display:flex;gap:12px;margin:14px 0}.carte{width:180px;min-height:120px;display:flex;flex-direction:column;align-items:flex-start;gap:3px;text-align:left}.carte b{color:#c8502e}.carte .t{font-weight:700}.carte .e{color:#d19a12;letter-spacing:2px}.carte .g{font-size:13px;color:#555}.carte.fait{background:#eaf6ea}.carte.ferme{border-style:dashed}.tampon-bet{background:#c8202a;color:#fff;font-size:11px;padding:1px 6px;border-radius:3px;transform:rotate(-3deg)}.credit{font-size:12px;color:#777}:root{--titre: "Luckiest Guy", Impact, sans-serif;--main: "Patrick Hand", "Trebuchet MS", sans-serif;--machine: "Special Elite", "Courier New", monospace}html,body{font-family:var(--main);font-size:17px}#titre,#atelier h3,#carte h2,.menu-boite h1,.carte b,#suite,.gros{font-family:var(--titre);letter-spacing:1px;font-weight:400}#titre{font-size:21px;color:#f6c26b;text-shadow:2px 2px 0 #000}.menu-boite h1{font-size:54px;color:#c8502e;text-shadow:3px 3px 0 var(--encre)}#carte h2{font-size:30px;color:#c8502e;text-shadow:2px 2px 0 rgba(0,0,0,.15)}.bloc,.car.kw,#python,.pyerr,.constat{font-family:var(--machine)}.bloc{font-size:19px}.bulle-3d{font-family:var(--main);font-size:19px}.gag-scene{font-size:19px}button,.bloc,#carte,.menu-boite,.bulle-3d,.carte{border-color:transparent!important}button,.bloc:not(.fantome),.menu-boite,.carte{position:relative}button:after,.bloc:after,#carte:after,.menu-boite:after,.carte:after,.bulle-3d:before{content:"";position:absolute;top:-3px;right:-3px;bottom:-3px;left:-3px;border:3px solid var(--encre);border-radius:inherit;filter:url(#crayon);pointer-events:none}#carte:after,.menu-boite:after{border-width:4px;filter:url(#crayon-fort)}#barre button:after{border-color:var(--papier)}#atelier{background-color:#e2cba0;background-image:radial-gradient(circle at 12% 30%,rgba(120,80,30,.1) 0 2px,transparent 3px),radial-gradient(circle at 70% 80%,rgba(120,80,30,.08) 0 2px,transparent 3px),repeating-linear-gradient(90deg,rgba(0,0,0,.035) 0 2px,transparent 2px 9px);background-size:37px 41px,53px 47px,auto}#carte{background:#fbf2dc;background-image:radial-gradient(ellipse at top left,rgba(255,255,255,.7),transparent 60%),radial-gradient(ellipse at bottom right,rgba(160,110,40,.12),transparent 60%)}.menu-boite{transform:rotate(-.8deg);background:#fbf2dc}.carte:nth-child(odd){transform:rotate(-1.2deg)}.carte:nth-child(2n){transform:rotate(1deg)}.tampon:nth-child(2){transform:rotate(1.5deg)}.tampon:nth-child(3){transform:rotate(-2deg)}#atelier h3{color:#6b2e1a;font-size:21px}.gag-tete .num{font-family:var(--titre);letter-spacing:1px;font-weight:400}.vit,.petit{font-family:var(--main);font-size:15px}#badge{font-size:18px;margin:6px 0}#badge input,.prof-codes input{font-family:var(--main);font-size:18px;padding:2px 6px;border:2px solid var(--encre);border-radius:4px;background:#fffdf4}.prof-codes{font-size:14px;margin-top:6px}#cartes{flex-wrap:wrap;justify-content:center}.carte.rouge{background:#f7d9cf}.carte.rouge b{color:#9b1c1c}.serie{font-weight:700;color:#2f5d50}.ctl-prog{font-family:var(--machine);background:#fffdf4;border:2px dashed #8a7355;padding:8px 8px 8px 36px;font-size:17px}.ctl-rep{min-height:44px;border:3px solid var(--encre);border-radius:6px;padding:6px;margin:8px 0;background:#fff8e4;display:flex;flex-wrap:wrap;gap:6px;align-items:center}.ctl-rep .vide{color:#8a7355;font-size:15px}.ctl-jetons{display:flex;flex-wrap:wrap;gap:6px}.jeton{padding:3px 6px;font-size:16px;background:#efe3c6}.jeton:disabled{opacity:.35}.jeton.pris{background:#fff}.jeton-gag{font-style:italic}.ctl-explique li{margin:3px 0}.visa{font-family:var(--machine);font-size:34px;letter-spacing:3px;text-align:center;border:4px double #9b1c1c;color:#9b1c1c;padding:8px;margin:10px auto;width:fit-content;transform:rotate(-3deg)}.petit{font-size:14px;color:#555}#tete{position:absolute;left:50%;bottom:12px;transform:translate(-50%);width:min(820px,calc(100% - 24px));background:#1b1714ed;color:var(--papier);border:3px solid #f6c26b;border-radius:10px;padding:10px 12px;box-shadow:0 6px #00000080;z-index:5;font-family:var(--main)}#tete.erreur{border-color:var(--erreur);animation:vibre .3s 3}.tete-haut{display:flex;gap:12px;align-items:stretch}.tete-oeil{flex:0 0 76px;height:76px;display:flex;align-items:center;justify-content:center;font-family:var(--machine);font-size:52px;background:#000;border:3px solid #555;border-radius:8px;color:#fff}.tete-oeil[data-classe=nom]{color:var(--nom);border-color:#b8b8e0}.tete-oeil[data-classe=texte]{color:var(--texte);border-color:var(--texte)}.tete-oeil[data-classe=guillemet]{color:var(--guill);border-color:var(--guill)}.tete-oeil[data-classe=nombre]{color:var(--nombre);border-color:var(--nombre)}.tete-oeil[data-classe=symbole]{color:var(--symbole);border-color:var(--symbole)}.tete-oeil.tape{animation:tape .18s ease-out}@keyframes tape{0%{transform:scale(1.25)}to{transform:scale(1)}}.tete-milieu{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}.tete-etat{font-family:var(--machine);font-size:15px;color:#d8cbb0}.tete-etat b{font-size:18px;letter-spacing:1px}.m-nom{color:var(--nom)}.m-texte{color:var(--texte)}.m-nombre{color:var(--nombre)}.tete-pensee{font-size:18px;line-height:1.2;min-height:44px}.tete-pensee.p-ok{color:#8fe08a}.tete-pensee.p-colle{color:#ffb35c}.tete-pensee.p-erreur{color:#ff8a7a;font-weight:700}.tete-parens{flex:0 0 110px;text-align:center;background:#000;border:3px solid #555;border-radius:8px;padding:4px}.tete-parens small{display:block;font-size:12px;color:#a99a86}.tete-parens div{font-family:var(--machine);font-size:34px;color:#777}.tete-parens.ouvertes{border-color:var(--symbole)}.tete-parens.ouvertes div{color:var(--symbole)}.tete-bas{display:flex;gap:8px;align-items:center;margin-top:8px}.tete-ruban{flex:1;min-width:0;display:flex;gap:4px;overflow-x:auto;min-height:44px;padding:4px;background:#000;border-radius:6px;scrollbar-width:thin}.jeton-lu{flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1px 7px;border-radius:5px;font-family:var(--machine);font-size:16px;color:var(--encre);animation:pop .2s ease;white-space:pre}.jeton-lu small{font-size:9px;font-family:var(--main)}.j-nom{background:var(--nom)}.j-texte{background:var(--texte)}.j-nombre{background:var(--nombre);color:#fff}.j-symbole{background:var(--symbole);color:#fff;font-size:20px}.tete-suite,.tete-finir{display:none}#tete.pas .tete-suite,#tete.pas .tete-finir{display:inline-block}.tete-suite{font-family:var(--titre);background:#f6c26b}.ligne.collee{background:#ffb35c73;box-shadow:-10px 0 #ff8c1a}.ligne.colle-debut:after{content:"Python colle ces lignes";position:absolute;right:6px;top:2px;font-size:12px;background:#ff8c1a;color:#fff;padding:0 6px;border-radius:8px}.ligne.colle-debut{border-top-left-radius:8px}.ligne.colle-fin{border-bottom-left-radius:8px}.jeton-lu.pas-ferme{outline:3px dashed var(--erreur);outline-offset:1px}.b-ranger{background:#7fb069}.tuile.paren{background:#2b2b2b;color:#ffd23f;font-family:var(--machine);font-size:26px}.bloc.ouvert{border-right-style:dashed!important}.bloc.ouvert:before{content:""}.fente.f-nom{min-width:34px;background:#fff9;border-color:#3c6e2f}.fente.f-nom.libre:before{content:"nom";font-size:13px}.boite-lettres{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:8px 10px;margin-top:6px;background:#e9dcc0;border:2px dashed #8a6d3b;border-radius:8px}.boite-lettres small{flex-basis:100%;font-size:13px;color:#5a4320}.boite-lettres .tuile{cursor:grab}#col-palette{overflow-y:auto;min-height:0}.boite-lettres .tuile{min-width:30px}.code-niveau{font-size:15px;margin-top:6px}.code-niveau input{font-family:var(--machine)!important;text-transform:uppercase;width:11em}#code-msg{font-weight:700}.bloc.evalue{outline:4px solid #ffd23f;outline-offset:2px;box-shadow:0 0 18px 6px #ffd23fd9!important}.bloc.remplace,.tuile.remplace{display:none!important}.valeur-rendue{display:inline-flex;align-items:center;min-width:30px;height:30px;padding:0 8px;margin:0 2px;background:#c9955b;color:#2b1a0c;border:2px solid #7a5230;border-radius:4px;font:700 20px Georgia,serif;animation:rendu .35s ease-out}@keyframes rendu{0%{transform:scale(2.2) rotate(-12deg);opacity:0}to{transform:none;opacity:1}}.bloc.consomme{opacity:.45;filter:grayscale(.7);transition:opacity .3s,filter .3s}.choc{position:absolute;transform:translate(-50%,-50%);width:118px;height:92px;display:flex;align-items:center;justify-content:center;animation:choc .9s ease-out forwards;z-index:4;clip-path:polygon(50% 0%,61% 27%,92% 10%,76% 40%,100% 52%,72% 62%,86% 94%,56% 74%,40% 100%,34% 70%,4% 86%,22% 58%,0% 38%,28% 34%,14% 6%,42% 24%);background:#ffd23f}.choc-1{background:#ff8c1a}.choc-2{background:#fff06a}.choc span{font-family:var(--titre);font-size:19px;color:#c8202a;-webkit-text-stroke:1px #2b1a0c;transform:rotate(-8deg)}@keyframes choc{0%{transform:translate(-50%,-50%) scale(.2) rotate(-20deg);opacity:0}15%{transform:translate(-50%,-50%) scale(1.15) rotate(6deg);opacity:1}70%{opacity:1}to{transform:translate(-50%,-50%) scale(1) rotate(0);opacity:0}}.voix-dessous{position:absolute;transform:translate(-50%);background:#2b1a0c;color:#fff;font-family:var(--main);font-size:17px;padding:6px 12px;border-radius:12px;white-space:nowrap;animation:pop .25s ease,voix 1.8s ease-in forwards;z-index:4}@keyframes voix{0%,80%{opacity:1}to{opacity:0}}#carte{display:flex;flex-direction:column;overflow:hidden!important}#carte:after{top:3px;right:3px;bottom:3px;left:3px}#carte .carte-defile{overflow-y:auto;overflow-x:hidden;min-height:0;flex:1 1 auto;padding-right:4px}#carte>.boutons{flex:0 0 auto;padding-top:8px}#programme{position:relative}.ligne.courante:before{content:"▶";position:absolute;left:-30px;top:50%;transform:translateY(-50%);color:#c8202a;font-size:22px;animation:curseur .8s ease-in-out infinite alternate}@keyframes curseur{0%{transform:translate(-3px,-50%)}to{transform:translate(3px,-50%)}}.ligne.courante .num{visibility:hidden}.exec-bulle{position:absolute;z-index:5;max-width:340px;background:#2b2420;color:#fff6e0;font-family:var(--main);font-size:16px;line-height:1.3;padding:7px 11px;border-radius:10px;box-shadow:0 3px #00000059;pointer-events:none;animation:pop .2s ease}.exec-bulle:after{content:"";position:absolute;left:22px;bottom:-8px;border:8px solid transparent;border-bottom:0;border-top-color:#2b2420}.exec-bulle.dessous:after{bottom:auto;top:-8px;border:8px solid transparent;border-top:0;border-bottom-color:#2b2420}.exec-bulle code{background:#fff6e0;color:#2b1a0c;padding:0 4px;border-radius:3px;font-family:var(--machine)}.exec-bulle b{color:#ffd23f}.jeton-py{display:block;margin-top:3px;font-style:normal;font-family:var(--machine);font-size:13px;color:#c8202a;background:#fff3e8;border-radius:3px;padding:1px 5px}
/*$vite$:1*/`,document.head.appendChild(Zn);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vn="169",Pi=0,Zl=1,hd=2,Ql=1,ec=2,On=3,Bn=0,jt=1,Ht=2,Qn=0,Ii=1,wo=2,tc=3,nc=4,dd=5,pi=100,fd=101,pd=102,md=103,gd=104,vd=200,_d=201,xd=202,yd=203,Ro=204,Co=205,bd=206,Md=207,Sd=208,Ed=209,Td=210,Ad=211,wd=212,Rd=213,Cd=214,Lo=0,Po=1,Io=2,Di=3,Do=4,No=5,Uo=6,Fo=7,Oo=0,Ld=1,Pd=2,ei=0,Id=1,Dd=2,Nd=3,Ud=4,Fd=5,Od=6,Bd=7,ic="attached",kd="detached",sc=300,Ni=301,Ui=302,Bo=303,ko=304,cr=306,Ln=1e3,ti=1001,ur=1002,vt=1003,rc=1004,Rs=1005,Qt=1006,hr=1007,kn=1008,zn=1009,oc=1010,ac=1011,Cs=1012,zo=1013,mi=1014,_n=1015,Ls=1016,Go=1017,Ho=1018,Fi=1020,lc=35902,cc=1021,uc=1022,an=1023,hc=1024,dc=1025,Oi=1026,Bi=1027,Vo=1028,Wo=1029,fc=1030,qo=1031,Xo=1033,dr=33776,fr=33777,pr=33778,mr=33779,jo=35840,$o=35841,Yo=35842,Ko=35843,Jo=36196,Zo=37492,Qo=37496,ea=37808,ta=37809,na=37810,ia=37811,sa=37812,ra=37813,oa=37814,aa=37815,la=37816,ca=37817,ua=37818,ha=37819,da=37820,fa=37821,gr=36492,pa=36494,ma=36495,pc=36283,ga=36284,va=36285,_a=36286,mc=2200,gc=2201,zd=2202,Ps=2300,Is=2301,xa=2302,ki=2400,zi=2401,vr=2402,ya=2500,Gd=2501,Hd=0,vc=1,ba=2,Vd=3200,Wd=3201,Ma=0,qd=1,ni="",St="srgb",Nt="srgb-linear",Sa="display-p3",_r="display-p3-linear",xr="linear",ht="srgb",yr="rec709",br="p3",Gi=7680,_c=519,Xd=512,jd=513,$d=514,xc=515,Yd=516,Kd=517,Jd=518,Zd=519,Ea=35044,yc="300 es",Gn=2e3,Mr=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const Ds=Math.PI/180,Hi=180/Math.PI;function xn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function Ta(s,e){return(s%e+e)%e}function Qd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ef(s,e,t){return s!==e?(t-s)/(e-s):0}function Ns(s,e,t){return(1-t)*s+t*e}function tf(s,e,t,n){return Ns(s,e,1-Math.exp(-t*n))}function nf(s,e=1){return e-Math.abs(Ta(s,e*2)-e)}function sf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function rf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function of(s,e){return s+Math.floor(Math.random()*(e-s+1))}function af(s,e){return s+Math.random()*(e-s)}function lf(s){return s*(.5-Math.random())}function cf(s){s!==void 0&&(bc=s);let e=bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uf(s){return s*Ds}function hf(s){return s*Hi}function df(s){return(s&s-1)===0&&s!==0}function ff(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*v,l*p,a*c);break;case"YXY":s.set(l*p,a*u,l*v,a*c);break;case"ZYZ":s.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const gf={DEG2RAD:Ds,RAD2DEG:Hi,generateUUID:xn,clamp:Lt,euclideanModulo:Ta,mapLinear:Qd,inverseLerp:ef,lerp:Ns,damp:tf,pingpong:nf,smoothstep:sf,smootherstep:rf,randInt:of,randFloat:af,randFloatSpread:lf,seededRandom:cf,degToRad:uf,radToDeg:hf,isPowerOfTwo:df,ceilPowerOfTwo:ff,floorPowerOfTwo:pf,setQuaternionFromProperEuler:mf,normalize:st,denormalize:yn};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,r,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],v=n[8],g=i[0],f=i[3],m=i[6],b=i[1],x=i[4],T=i[7],P=i[2],R=i[5],E=i[8];return r[0]=o*g+a*b+l*P,r[3]=o*f+a*x+l*R,r[6]=o*m+a*T+l*E,r[1]=c*g+u*b+h*P,r[4]=c*f+u*x+h*R,r[7]=c*m+u*T+h*E,r[2]=d*g+p*b+v*P,r[5]=d*f+p*x+v*R,r[8]=d*m+p*T+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,v=t*h+n*d+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new ke;function Mc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vf(){const s=Us("canvas");return s.style.display="block",s}const Sc={};function Sr(s){s in Sc||(Sc[s]=!0,console.warn(s))}function _f(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function xf(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ec=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tc=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fs={[Nt]:{transfer:xr,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[St]:{transfer:ht,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_r]:{transfer:xr,primaries:br,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Tc),fromReference:s=>s.applyMatrix3(Ec)},[Sa]:{transfer:ht,primaries:br,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Tc),fromReference:s=>s.applyMatrix3(Ec).convertLinearToSRGB()}},bf=new Set([Nt,_r]),je={enabled:!0,_workingColorSpace:Nt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!bf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Fs[e].toReference,i=Fs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Fs[s].primaries},getTransfer:function(s){return s===ni?xr:Fs[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Fs[e].luminanceCoefficients)}};function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wi;class Mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=Us("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sf=0;class Ac{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ra(i[o].image)):r.push(Ra(i[o]))}else r=Ra(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ra(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ef=0;class At extends gi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=ti,i=ti,r=Qt,o=kn,a=an,l=zn,c=At.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=xn(),this.name="",this.source=new Ac(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null,At.DEFAULT_MAPPING=sc,At.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],g=l[2],f=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(v-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(v+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(p+1)/2,P=(m+1)/2,R=(u+d)/4,E=(h+g)/4,C=(v+f)/4;return x>T&&x>P?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=E/n):T>P?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=R/i,r=C/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=E/r,i=C/r),this.set(n,i,r,t),this}let b=Math.sqrt((f-v)*(f-v)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(f-v)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tf extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ac(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Tf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wc extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Af extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==d||c!==p||u!==v){let f=1-a;const m=l*d+c*p+u*v+h*g,b=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,m*b);f=Math.sin(f*R)/P,a=Math.sin(a*R)/P}const T=a*b;if(l=l*f+d*T,c=c*f+p*T,u=u*f+v*T,h=h*f+g*T,f===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+u*h+l*p-c*d,e[t+1]=l*v+u*d+c*h-a*p,e[t+2]=c*v+u*p+a*d-l*h,e[t+3]=u*v-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),p=l(i/2),v=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new w,Rc=new bn;class Vt{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Tr.subVectors(this.max,Os),qi.subVectors(e.a,Os),Xi.subVectors(e.b,Os),ji.subVectors(e.c,Os),ii.subVectors(Xi,qi),si.subVectors(ji,Xi),_i.subVectors(qi,ji);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-_i.z,_i.y,ii.z,0,-ii.x,si.z,0,-si.x,_i.z,0,-_i.x,-ii.y,ii.x,0,-si.y,si.x,0,-_i.y,_i.x,0];return!La(t,qi,Xi,ji,Tr)||(t=[1,0,0,0,1,0,0,0,1],!La(t,qi,Xi,ji,Tr))?!1:(Ar.crossVectors(ii,si),t=[Ar.x,Ar.y,Ar.z],La(t,qi,Xi,ji,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new w,new w,new w,new w,new w,new w,new w,new w],Mn=new w,Er=new Vt,qi=new w,Xi=new w,ji=new w,ii=new w,si=new w,_i=new w,Os=new w,Tr=new w,Ar=new w,xi=new w;function La(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){xi.fromArray(s,r);const a=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wf=new Vt,Bs=new w,Pa=new w;class Pn{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Pa)),this.expandByPoint(Bs.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new w,Ia=new w,wr=new w,ri=new w,Da=new w,Rr=new w,Na=new w;class ks{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ia.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Ia);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wr),a=ri.dot(this.direction),l=-ri.dot(wr),c=ri.lengthSq(),u=Math.abs(1-o*o);let h,d,p,v;if(u>0)if(h=o*l-a,d=o*a-l,v=r*u,h>=0)if(d>=-v)if(d<=v){const g=1/u;h*=g,d*=g,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ia).addScaledVector(wr,d),p}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,r){Da.subVectors(t,e),Rr.subVectors(n,e),Na.crossVectors(Da,Rr);let o=this.direction.dot(Na),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Rr.crossVectors(ri,Rr));if(l<0)return null;const c=a*this.direction.dot(Da.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(Na);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,r,o,a,l,c,u,h,d,p,v,g,f){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,p,v,g,f)}set(e,t,n,i,r,o,a,l,c,u,h,d,p,v,g,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=v,m[11]=g,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,v=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,v=c*u,g=c*h;t[0]=d+g*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,v=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,v=a*u,g=a*h;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=v*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+v,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rf,e,Cf)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),oi.crossVectors(n,en),oi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),oi.crossVectors(n,en)),oi.normalize(),Cr.crossVectors(en,oi),i[0]=oi.x,i[4]=Cr.x,i[8]=en.x,i[1]=oi.y,i[5]=Cr.y,i[9]=en.y,i[2]=oi.z,i[6]=Cr.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],v=n[2],g=n[6],f=n[10],m=n[14],b=n[3],x=n[7],T=n[11],P=n[15],R=i[0],E=i[4],C=i[8],H=i[12],_=i[1],M=i[5],O=i[9],k=i[13],W=i[2],K=i[6],V=i[10],z=i[14],U=i[3],se=i[7],ie=i[11],oe=i[15];return r[0]=o*R+a*_+l*W+c*U,r[4]=o*E+a*M+l*K+c*se,r[8]=o*C+a*O+l*V+c*ie,r[12]=o*H+a*k+l*z+c*oe,r[1]=u*R+h*_+d*W+p*U,r[5]=u*E+h*M+d*K+p*se,r[9]=u*C+h*O+d*V+p*ie,r[13]=u*H+h*k+d*z+p*oe,r[2]=v*R+g*_+f*W+m*U,r[6]=v*E+g*M+f*K+m*se,r[10]=v*C+g*O+f*V+m*ie,r[14]=v*H+g*k+f*z+m*oe,r[3]=b*R+x*_+T*W+P*U,r[7]=b*E+x*M+T*K+P*se,r[11]=b*C+x*O+T*V+P*ie,r[15]=b*H+x*k+T*z+P*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],v=e[3],g=e[7],f=e[11],m=e[15];return v*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*p-n*l*p)+g*(+t*l*p-t*c*d+r*o*d-i*o*p+i*c*u-r*l*u)+f*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],v=e[12],g=e[13],f=e[14],m=e[15],b=h*f*c-g*d*c+g*l*p-a*f*p-h*l*m+a*d*m,x=v*d*c-u*f*c-v*l*p+o*f*p+u*l*m-o*d*m,T=u*g*c-v*h*c+v*a*p-o*g*p-u*a*m+o*h*m,P=v*h*l-u*g*l-v*a*d+o*g*d+u*a*f-o*h*f,R=t*b+n*x+i*T+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=b*E,e[1]=(g*d*r-h*f*r-g*i*p+n*f*p+h*i*m-n*d*m)*E,e[2]=(a*f*r-g*l*r+g*i*c-n*f*c-a*i*m+n*l*m)*E,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*p-n*l*p)*E,e[4]=x*E,e[5]=(u*f*r-v*d*r+v*i*p-t*f*p-u*i*m+t*d*m)*E,e[6]=(v*l*r-o*f*r-v*i*c+t*f*c+o*i*m-t*l*m)*E,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*p+t*l*p)*E,e[8]=T*E,e[9]=(v*h*r-u*g*r-v*n*p+t*g*p+u*n*m-t*h*m)*E,e[10]=(o*g*r-v*a*r+v*n*c-t*g*c-o*n*m+t*a*m)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*E,e[12]=P*E,e[13]=(u*g*i-v*h*i+v*n*d-t*g*d-u*n*f+t*h*f)*E,e[14]=(v*a*i-o*g*i-v*n*l+t*g*l+o*n*f-t*a*f)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,v=r*h,g=o*u,f=o*h,m=a*h,b=l*c,x=l*u,T=l*h,P=n.x,R=n.y,E=n.z;return i[0]=(1-(g+m))*P,i[1]=(p+T)*P,i[2]=(v-x)*P,i[3]=0,i[4]=(p-T)*R,i[5]=(1-(d+m))*R,i[6]=(f+b)*R,i[7]=0,i[8]=(v+x)*E,i[9]=(f-b)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=$i.set(i[0],i[1],i[2]).length();const o=$i.set(i[4],i[5],i[6]).length(),a=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const c=1/r,u=1/o,h=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Gn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,v;if(a===Gn)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Mr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Gn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,p=(n+i)*u;let v,g;if(a===Gn)v=(o+r)*h,g=-2*h;else if(a===Mr)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new w,Sn=new De,Rf=new w(0,0,0),Cf=new w(1,1,1),oi=new w,Cr=new w,en=new w,Cc=new De,Lc=new bn;class En{constructor(e=0,t=0,n=0,i=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Ua{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lf=0;const Pc=new w,Yi=new bn,Wn=new De,Lr=new w,zs=new w,Pf=new w,If=new bn,Ic=new w(1,0,0),Dc=new w(0,1,0),Nc=new w(0,0,1),Uc={type:"added"},Df={type:"removed"},Ki={type:"childadded",child:null},Fa={type:"childremoved",child:null};class dt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new w,t=new En,n=new bn,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new ke}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Nc,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(zs,Lr,this.up):Wn.lookAt(Lr,zs,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uc),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Df),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uc),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,If,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new w(0,1,0),dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new w,qn=new w,Oa=new w,Xn=new w,Ji=new w,Zi=new w,Fc=new w,Ba=new w,ka=new w,za=new w,Ga=new Ze,Ha=new Ze,Va=new Ze;class ln{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),qn.subVectors(n,t),Oa.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(qn),l=Tn.dot(Oa),c=qn.dot(qn),u=qn.dot(Oa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ga.setScalar(0),Ha.setScalar(0),Va.setScalar(0),Ga.fromBufferAttribute(e,t),Ha.fromBufferAttribute(e,n),Va.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ga,r.x),o.addScaledVector(Ha,r.y),o.addScaledVector(Va,r.z),o}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),qn.subVectors(e,t),Tn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ji.subVectors(i,n),Zi.subVectors(r,n),Ba.subVectors(e,n);const l=Ji.dot(Ba),c=Zi.dot(Ba);if(l<=0&&c<=0)return t.copy(n);ka.subVectors(e,i);const u=Ji.dot(ka),h=Zi.dot(ka);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ji,o);za.subVectors(e,r);const p=Ji.dot(za),v=Zi.dot(za);if(v>=0&&p<=v)return t.copy(r);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Zi,a);const f=u*v-p*h;if(f<=0&&h-u>=0&&p-v>=0)return Fc.subVectors(r,i),a=(h-u)/(h-u+(p-v)),t.copy(i).addScaledVector(Fc,a);const m=1/(f+g+d);return o=g*m,a=d*m,t.copy(n).addScaledVector(Ji,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Wa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Ta(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Wa(o,r,e+1/3),this.g=Wa(o,r,e),this.b=Wa(o,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=Oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return je.fromWorkingColorSpace(zt.copy(this),e),Math.round(Lt(zt.r*255,0,255))*65536+Math.round(Lt(zt.g*255,0,255))*256+Math.round(Lt(zt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,r=zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=St){je.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Pr);const n=Ns(ai.h,Pr.h,t),i=Ns(ai.s,Pr.s,t),r=Ns(ai.l,Pr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Se;Se.NAMES=Oc;let Nf=0;class cn extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=Ii,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class An extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new w,Ir=new he;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ea,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ea&&(e.usage=this.usage),e}}class Bc extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kc extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uf=0;const un=new De,qa=new dt,Qi=new w,tn=new Vt,Gs=new Vt,Pt=new w;class It extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mc(e)?kc:Bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(tn.min,Gs.min),tn.expandByPoint(Pt),Pt.addVectors(tn.max,Gs.max),tn.expandByPoint(Pt)):(tn.expandByPoint(Gs.min),tn.expandByPoint(Gs.max))}tn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),Pt.add(Qi)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new w,l[C]=new w;const c=new w,u=new w,h=new w,d=new he,p=new he,v=new he,g=new w,f=new w;function m(C,H,_){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,H),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,H),v.fromBufferAttribute(r,_),u.sub(c),h.sub(c),p.sub(d),v.sub(d);const M=1/(p.x*v.y-v.x*p.y);isFinite(M)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(M),f.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(M),a[C].add(g),a[H].add(g),a[_].add(g),l[C].add(f),l[H].add(f),l[_].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,H=b.length;C<H;++C){const _=b[C],M=_.start,O=_.count;for(let k=M,W=M+O;k<W;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new w,T=new w,P=new w,R=new w;function E(C){P.fromBufferAttribute(i,C),R.copy(P);const H=a[C];x.copy(H),x.sub(P.multiplyScalar(P.dot(H))).normalize(),T.crossVectors(R,H);const M=T.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,M)}for(let C=0,H=b.length;C<H;++C){const _=b[C],M=_.start,O=_.count;for(let k=M,W=M+O;k<W;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new w,r=new w,o=new w,a=new w,l=new w,c=new w,u=new w,h=new w;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),g=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let m=0;m<u;m++)d[v++]=c[p++]}return new Wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new De,yi=new ks,Dr=new Pn,Gc=new w,Nr=new w,Ur=new w,Fr=new w,Xa=new w,Or=new w,Hc=new w,Br=new w;class Ee extends dt{constructor(e=new It,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Xa.fromBufferAttribute(h,e),o?Or.addScaledVector(Xa,u):Or.addScaledVector(Xa.sub(t),u))}t.add(Or)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(Dr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Dr,Gc)===null||yi.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(zc.copy(r).invert(),yi.copy(e.ray).applyMatrix4(zc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const f=d[v],m=o[f.materialIndex],b=Math.max(f.start,p.start),x=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let T=b,P=x;T<P;T+=3){const R=a.getX(T),E=a.getX(T+1),C=a.getX(T+2);i=kr(this,m,e,n,c,u,h,R,E,C),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let f=v,m=g;f<m;f+=3){const b=a.getX(f),x=a.getX(f+1),T=a.getX(f+2);i=kr(this,o,e,n,c,u,h,b,x,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const f=d[v],m=o[f.materialIndex],b=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let T=b,P=x;T<P;T+=3){const R=T,E=T+1,C=T+2;i=kr(this,m,e,n,c,u,h,R,E,C),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let f=v,m=g;f<m;f+=3){const b=f,x=f+1,T=f+2;i=kr(this,o,e,n,c,u,h,b,x,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Ff(s,e,t,n,i,r,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Bn,a),l===null)return null;Br.copy(a),Br.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:s}}function kr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Nr),s.getVertexPosition(l,Ur),s.getVertexPosition(c,Fr);const u=Ff(s,e,t,n,Nr,Ur,Fr,Hc);if(u){const h=new w;ln.getBarycoord(Hc,Nr,Ur,Fr,h),i&&(u.uv=ln.getInterpolatedAttribute(i,a,l,c,h,new he)),r&&(u.uv1=ln.getInterpolatedAttribute(r,a,l,c,h,new he)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new w,materialIndex:0};ln.getNormal(Nr,Ur,Fr,d.normal),u.face=d,u.barycoord=h}return u}class In extends It{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function v(g,f,m,b,x,T,P,R,E,C,H){const _=T/E,M=P/C,O=T/2,k=P/2,W=R/2,K=E+1,V=C+1;let z=0,U=0;const se=new w;for(let ie=0;ie<V;ie++){const oe=ie*M-k;for(let Ne=0;Ne<K;Ne++){const Ye=Ne*_-O;se[g]=Ye*b,se[f]=oe*x,se[m]=W,c.push(se.x,se.y,se.z),se[g]=0,se[f]=0,se[m]=R>0?1:-1,u.push(se.x,se.y,se.z),h.push(Ne/E),h.push(1-ie/C),z+=1}}for(let ie=0;ie<C;ie++)for(let oe=0;oe<E;oe++){const Ne=d+oe+K*ie,Ye=d+oe+K*(ie+1),X=d+(oe+1)+K*(ie+1),Z=d+(oe+1)+K*ie;l.push(Ne,Ye,Z),l.push(Ye,X,Z),U+=6}a.addGroup(p,U,H),p+=U,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){const e={};for(let t=0;t<s.length;t++){const n=es(s[t]);for(const i in n)e[i]=n[i]}return e}function Of(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Bf={clone:es,merge:qt};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=Of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wc extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new w,qc=new he,Xc=new he;class $t extends Wc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Xc),t.subVectors(Xc,qc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class Gf extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(ts,ns,e,t);i.layers=this.layers,this.add(i);const r=new $t(ts,ns,e,t);r.layers=this.layers,this.add(r);const o=new $t(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new $t(ts,ns,e,t);a.layers=this.layers,this.add(a);const l=new $t(ts,ns,e,t);l.layers=this.layers,this.add(l);const c=new $t(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class jc extends At{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hf extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new In(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Qn});r.uniforms.tEquirect.value=t;const o=new Ee(i,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Qt),new Gf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ja=new w,Vf=new w,Wf=new ke;class ui{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ja.subVectors(n,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wf.getNormalMatrix(e),i=this.coplanarPoint(ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Pn,zr=new w;class $a{constructor(e=new ui,t=new ui,n=new ui,i=new ui,r=new ui,o=new ui){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],p=i[8],v=i[9],g=i[10],f=i[11],m=i[12],b=i[13],x=i[14],T=i[15];if(n[0].setComponents(l-r,d-c,f-p,T-m).normalize(),n[1].setComponents(l+r,d+c,f+p,T+m).normalize(),n[2].setComponents(l+o,d+u,f+v,T+b).normalize(),n[3].setComponents(l-o,d-u,f-v,T-b).normalize(),n[4].setComponents(l-a,d-h,f-g,T-x).normalize(),t===Gn)n[5].setComponents(l+a,d+h,f+g,T+x).normalize();else if(t===Mr)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zr.x=i.normal.x>0?e.max.x:e.min.x,zr.y=i.normal.y>0?e.max.y:e.min.y,zr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $c(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qf(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<h.length;p++){const v=h[d],g=h[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,v=h.length;p<v;p++){const g=h[p];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class bt extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,p=[],v=[],g=[],f=[];for(let m=0;m<u;m++){const b=m*d-o;for(let x=0;x<c;x++){const T=x*h-r;v.push(T,-b,0),g.push(0,0,1),f.push(x/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const x=b+c*m,T=b+c*(m+1),P=b+1+c*(m+1),R=b+1+c*m;p.push(x,T,R),p.push(T,P,R)}this.setIndex(p),this.setAttribute("position",new ot(v,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
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
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,op=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`
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
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
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
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Wp=`struct PhysicalMaterial {
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
}`,qp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
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
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lm=`float getShadowMask() {
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
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ze={alphahash_fragment:Xf,alphahash_pars_fragment:jf,alphamap_fragment:$f,alphamap_pars_fragment:Yf,alphatest_fragment:Kf,alphatest_pars_fragment:Jf,aomap_fragment:Zf,aomap_pars_fragment:Qf,batching_pars_vertex:ep,batching_vertex:tp,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:op,clipping_planes_fragment:ap,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:up,color_fragment:hp,color_pars_fragment:dp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:vp,displacementmap_pars_vertex:_p,displacementmap_vertex:xp,emissivemap_fragment:yp,emissivemap_pars_fragment:bp,colorspace_fragment:Mp,colorspace_pars_fragment:Sp,envmap_fragment:Ep,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ap,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Bp,envmap_vertex:Rp,fog_vertex:Cp,fog_pars_vertex:Lp,fog_fragment:Pp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Np,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Fp,lights_pars_begin:Op,lights_toon_fragment:kp,lights_toon_pars_fragment:zp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Wp,lights_fragment_begin:qp,lights_fragment_maps:Xp,lights_fragment_end:jp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:Jp,map_fragment:Zp,map_pars_fragment:Qp,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:rm,morphnormal_vertex:om,morphtarget_pars_vertex:am,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:um,normal_pars_fragment:hm,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:_m,opaque_fragment:xm,packing:ym,premultiplied_alpha_fragment:bm,project_vertex:Mm,dithering_fragment:Sm,dithering_pars_fragment:Em,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Rm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Lm,skinbase_vertex:Pm,skinning_pars_vertex:Im,skinning_vertex:Dm,skinnormal_vertex:Nm,specularmap_fragment:Um,specularmap_pars_fragment:Fm,tonemapping_fragment:Om,tonemapping_pars_fragment:Bm,transmission_fragment:km,transmission_pars_fragment:zm,uv_pars_fragment:Gm,uv_pars_vertex:Hm,uv_vertex:Vm,worldpos_vertex:Wm,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ne={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Dn={basic:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Se(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:qt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:qt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Se(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:qt([ne.points,ne.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:qt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:qt([ne.common,ne.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:qt([ne.sprite,ne.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:qt([ne.common,ne.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:qt([ne.lights,ne.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Dn.physical={uniforms:qt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Gr={r:0,b:0,g:0},Mi=new En,qm=new De;function Xm(s,e,t,n,i,r,o){const a=new Se(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function v(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function g(b){let x=!1;const T=v(b);T===null?m(a,l):T&&T.isColor&&(m(T,1),x=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(b,x){const T=v(x);T&&(T.isCubeTexture||T.mapping===cr)?(u===void 0&&(u=new Ee(new In(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:es(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Mi.copy(x.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qm.makeRotationFromEuler(Mi)),u.material.toneMapped=je.getTransfer(T.colorSpace)!==ht,(h!==T||d!==T.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ee(new bt(2,2),new li({name:"BackgroundMaterial",uniforms:es(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=je.getTransfer(T.colorSpace)!==ht,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,x){b.getRGB(Gr,Vc(s)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:g,addToRenderList:f}}function jm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(_,M,O,k,W){let K=!1;const V=h(k,O,M);r!==V&&(r=V,c(r.object)),K=p(_,k,O,W),K&&v(_,k,O,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,T(_,M,O,k),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function u(_){return s.deleteVertexArray(_)}function h(_,M,O){const k=O.wireframe===!0;let W=n[_.id];W===void 0&&(W={},n[_.id]=W);let K=W[M.id];K===void 0&&(K={},W[M.id]=K);let V=K[k];return V===void 0&&(V=d(l()),K[k]=V),V}function d(_){const M=[],O=[],k=[];for(let W=0;W<t;W++)M[W]=0,O[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:O,attributeDivisors:k,object:_,attributes:{},index:null}}function p(_,M,O,k){const W=r.attributes,K=M.attributes;let V=0;const z=O.getAttributes();for(const U in z)if(z[U].location>=0){const ie=W[U];let oe=K[U];if(oe===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function v(_,M,O,k){const W={},K=M.attributes;let V=0;const z=O.getAttributes();for(const U in z)if(z[U].location>=0){let ie=K[U];ie===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),W[U]=oe,V++}r.attributes=W,r.attributesNum=V,r.index=k}function g(){const _=r.newAttributes;for(let M=0,O=_.length;M<O;M++)_[M]=0}function f(_){m(_,0)}function m(_,M){const O=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;O[_]=1,k[_]===0&&(s.enableVertexAttribArray(_),k[_]=1),W[_]!==M&&(s.vertexAttribDivisor(_,M),W[_]=M)}function b(){const _=r.newAttributes,M=r.enabledAttributes;for(let O=0,k=M.length;O<k;O++)M[O]!==_[O]&&(s.disableVertexAttribArray(O),M[O]=0)}function x(_,M,O,k,W,K,V){V===!0?s.vertexAttribIPointer(_,M,O,W,K):s.vertexAttribPointer(_,M,O,k,W,K)}function T(_,M,O,k){g();const W=k.attributes,K=O.getAttributes(),V=M.defaultAttributeValues;for(const z in K){const U=K[z];if(U.location>=0){let se=W[z];if(se===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(se=_.instanceColor)),se!==void 0){const ie=se.normalized,oe=se.itemSize,Ne=e.get(se);if(Ne===void 0)continue;const Ye=Ne.buffer,X=Ne.type,Z=Ne.bytesPerElement,de=X===s.INT||X===s.UNSIGNED_INT||se.gpuType===zo;if(se.isInterleavedBufferAttribute){const fe=se.data,Fe=fe.stride,we=se.offset;if(fe.isInstancedInterleavedBuffer){for(let We=0;We<U.locationSize;We++)m(U.location+We,fe.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let We=0;We<U.locationSize;We++)f(U.location+We);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let We=0;We<U.locationSize;We++)x(U.location+We,oe/U.locationSize,X,ie,Fe*Z,(we+oe/U.locationSize*We)*Z,de)}else{if(se.isInstancedBufferAttribute){for(let fe=0;fe<U.locationSize;fe++)m(U.location+fe,se.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<U.locationSize;fe++)f(U.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let fe=0;fe<U.locationSize;fe++)x(U.location+fe,oe/U.locationSize,X,ie,oe*Z,oe/U.locationSize*fe*Z,de)}}else if(V!==void 0){const ie=V[z];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(U.location,ie);break;case 3:s.vertexAttrib3fv(U.location,ie);break;case 4:s.vertexAttrib4fv(U.location,ie);break;default:s.vertexAttrib1fv(U.location,ie)}}}}b()}function P(){C();for(const _ in n){const M=n[_];for(const O in M){const k=M[O];for(const W in k)u(k[W].object),delete k[W];delete M[O]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const M=n[_.id];for(const O in M){const k=M[O];for(const W in k)u(k[W].object),delete k[W];delete M[O]}delete n[_.id]}function E(_){for(const M in n){const O=n[M];if(O[_.id]===void 0)continue;const k=O[_.id];for(const W in k)u(k[W].object),delete k[W];delete O[_.id]}}function C(){H(),o=!0,r!==i&&(r=i,c(r.object))}function H(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:H,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:f,disableUnusedAttributes:b}}function $m(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let v=0;for(let g=0;g<h;g++)v+=u[g];for(let g=0;g<d.length;g++)t.update(v,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ym(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==an&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==zn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==_n&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:P,maxSamples:R}}function Km(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ui,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,g=h.clipIntersection,f=h.clipShadows,m=s.get(h);if(!i||v===null||v.length===0||r&&!f)r?u(null):c();else{const b=r?0:n,x=b*4;let T=m.clippingState||null;l.value=T,T=u(v,d,x,p);for(let P=0;P!==x;++P)T[P]=t[P];m.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,v){const g=h!==null?h.length:0;let f=null;if(g!==0){if(f=l.value,v!==!0||f===null){const m=p+g*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(f===null||f.length<m)&&(f=new Float32Array(m));for(let x=0,T=p;x!==g;++x,T+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function Jm(s){let e=new WeakMap;function t(o,a){return a===Bo?o.mapping=Ni:a===ko&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bo||a===ko)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Hr extends Wc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,Yc=[.125,.215,.35,.446,.526,.582],Si=20,Ya=new Hr,Kc=new Se;let Ka=null,Ja=0,Za=0,Qa=!1;const Ei=(1+Math.sqrt(5))/2,ss=1/Ei,Jc=[new w(-Ei,ss,0),new w(Ei,ss,0),new w(-ss,0,Ei),new w(ss,0,Ei),new w(0,Ei,-ss),new w(0,Ei,ss),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Ja,Za),this._renderer.xr.enabled=Qa,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ls,format:an,colorSpace:Nt,depthBuffer:!1},i=Qc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zm(r)),this._blurMaterial=Qm(r,e,t)}return i}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,n,i){const a=new $t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Kc),u.toneMapping=ei,u.autoClear=!1;const p=new An({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),v=new Ee(new In,p);let g=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,g=!0):(p.color.copy(Kc),g=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Vr(i,b*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ni||e.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Vr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jc[(i-r-1)%Jc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ee(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),g=r/v,f=isFinite(r)?1+Math.floor(u*g):Si;f>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Si}`);const m=[];let b=0;for(let E=0;E<Si;++E){const C=E/g,H=Math.exp(-C*C/2);m.push(H),E===0?b+=H:E<f&&(b+=2*H)}for(let E=0;E<m.length;E++)m[E]=m[E]/b;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const T=this._sizeLods[i],P=3*T*(i>x-is?i-x+is:0),R=4*(this._cubeSize-T);Vr(t,P,R,3*T,2*T),l.setRenderTarget(t),l.render(h,Ya)}}function Zm(s){const e=[],t=[],n=[];let i=s;const r=s-is+1+Yc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-is?l=Yc[o-s+is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,g=3,f=2,m=1,b=new Float32Array(g*v*p),x=new Float32Array(f*v*p),T=new Float32Array(m*v*p);for(let R=0;R<p;R++){const E=R%3*2/3-1,C=R>2?0:-1,H=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];b.set(H,g*v*R),x.set(d,f*v*R);const _=[R,R,R,R,R,R];T.set(_,m*v*R)}const P=new It;P.setAttribute("position",new Wt(b,g)),P.setAttribute("uv",new Wt(x,f)),P.setAttribute("faceIndex",new Wt(T,m)),e.push(P),i>is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qc(s,e,t){const n=new vi(s,e,t);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Qm(s,e,t){const n=new Float32Array(Si),i=new w(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:el(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function eu(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function tu(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function eg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bo||l===ko,u=l===Ni||l===Ui;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Zc(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Zc(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ng(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let f=0,m=g.length;f<m;f++)e.remove(g[f])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const g=p[v];for(let f=0,m=g.length;f<m;f++)e.update(g[f],s.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let x=0,T=b.length;x<T;x+=3){const P=b[x+0],R=b[x+1],E=b[x+2];d.push(P,R,R,E,E,P)}}else if(v!==void 0){const b=v.array;g=v.version;for(let x=0,T=b.length/3-1;x<T;x+=3){const P=x+0,R=x+1,E=x+2;d.push(P,R,R,E,E,P)}}else return;const f=new(Mc(d)?kc:Bc)(d,1);f.version=g;const m=r.get(h);m&&e.remove(m),r.set(h,f)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ig(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,v){v!==0&&(s.drawElementsInstanced(n,p,r,d*o,v),t.update(p,n,v))}function u(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,v);let f=0;for(let m=0;m<v;m++)f+=p[m];t.update(f,n,1)}function h(d,p,v,g){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],g[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,v);let m=0;for(let b=0;b<v;b++)m+=p[b];for(let b=0;b<g.length;b++)t.update(m,n,g[b])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function sg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rg(s,e,t){const n=new WeakMap,i=new Ze;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let H=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",H)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let T=a.attributes.position.count*x,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*P*4*h),E=new wc(R,T,P,h);E.type=_n,E.needsUpdate=!0;const C=x*4;for(let _=0;_<h;_++){const M=f[_],O=m[_],k=b[_],W=T*P*4*_;for(let K=0;K<M.count;K++){const V=K*C;p===!0&&(i.fromBufferAttribute(M,K),R[W+V+0]=i.x,R[W+V+1]=i.y,R[W+V+2]=i.z,R[W+V+3]=0),v===!0&&(i.fromBufferAttribute(O,K),R[W+V+4]=i.x,R[W+V+5]=i.y,R[W+V+6]=i.z,R[W+V+7]=0),g===!0&&(i.fromBufferAttribute(k,K),R[W+V+8]=i.x,R[W+V+9]=i.y,R[W+V+10]=i.z,R[W+V+11]=k.itemSize===4?i.w:1)}}d={count:h,texture:E,size:new he(T,P)},n.set(a,d),a.addEventListener("dispose",H)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function og(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class nu extends At{constructor(e,t,n,i,r,o,a,l,c,u=Oi){if(u!==Oi&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Oi&&(n=mi),n===void 0&&u===Bi&&(n=Fi),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const iu=new At,su=new nu(1,1),ru=new wc,ou=new Af,au=new jc,lu=[],cu=[],uu=new Float32Array(16),hu=new Float32Array(9),du=new Float32Array(4);function rs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=lu[i];if(r===void 0&&(r=new Float32Array(i),lu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Wr(s,e){let t=cu[e];t===void 0&&(t=new Int32Array(e),cu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ag(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function hg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;du.set(n),s.uniformMatrix2fv(this.addr,!1,du),Rt(t,n)}}function dg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;hu.set(n),s.uniformMatrix3fv(this.addr,!1,hu),Rt(t,n)}}function fg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;uu.set(n),s.uniformMatrix4fv(this.addr,!1,uu),Rt(t,n)}}function pg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function _g(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function Mg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(su.compareFunction=xc,r=su):r=iu,t.setTexture2D(e||r,i)}function Sg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ou,i)}function Eg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||au,i)}function Tg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ru,i)}function Ag(s){switch(s){case 5126:return ag;case 35664:return lg;case 35665:return cg;case 35666:return ug;case 35674:return hg;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return vg;case 5125:return _g;case 36294:return xg;case 36295:return yg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}function wg(s,e){s.uniform1fv(this.addr,e)}function Rg(s,e){const t=rs(e,this.size,2);s.uniform2fv(this.addr,t)}function Cg(s,e){const t=rs(e,this.size,3);s.uniform3fv(this.addr,t)}function Lg(s,e){const t=rs(e,this.size,4);s.uniform4fv(this.addr,t)}function Pg(s,e){const t=rs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ig(s,e){const t=rs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Dg(s,e){const t=rs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ng(s,e){s.uniform1iv(this.addr,e)}function Ug(s,e){s.uniform2iv(this.addr,e)}function Fg(s,e){s.uniform3iv(this.addr,e)}function Og(s,e){s.uniform4iv(this.addr,e)}function Bg(s,e){s.uniform1uiv(this.addr,e)}function kg(s,e){s.uniform2uiv(this.addr,e)}function zg(s,e){s.uniform3uiv(this.addr,e)}function Gg(s,e){s.uniform4uiv(this.addr,e)}function Hg(s,e,t){const n=this.cache,i=e.length,r=Wr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||iu,r[o])}function Vg(s,e,t){const n=this.cache,i=e.length,r=Wr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ou,r[o])}function Wg(s,e,t){const n=this.cache,i=e.length,r=Wr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||au,r[o])}function qg(s,e,t){const n=this.cache,i=e.length,r=Wr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ru,r[o])}function Xg(s){switch(s){case 5126:return wg;case 35664:return Rg;case 35665:return Cg;case 35666:return Lg;case 35674:return Pg;case 35675:return Ig;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return kg;case 36295:return zg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return qg}}class jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ag(t.type)}}class $g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}}class Yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function fu(s,e){s.seq.push(e),s.map[e.id]=e}function Kg(s,e,t){const n=s.name,i=n.length;for(tl.lastIndex=0;;){const r=tl.exec(n),o=tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){fu(t,c===void 0?new jg(a,s,e):new $g(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Yg(a),fu(t,h)),t=h}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Kg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function pu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Jg=37297;let Zg=0;function Qg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function e0(s){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(s);let n;switch(e===t?n="":e===br&&t===yr?n="LinearDisplayP3ToLinearSRGB":e===yr&&t===br&&(n="LinearSRGBToLinearDisplayP3"),s){case Nt:case _r:return[n,"LinearTransferOETF"];case St:case Sa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function mu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Qg(s.getShaderSource(e),o)}else return i}function t0(s,e){const t=e0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function n0(s,e){let t;switch(e){case Id:t="Linear";break;case Dd:t="Reinhard";break;case Nd:t="Cineon";break;case Ud:t="ACESFilmic";break;case Od:t="AgX";break;case Bd:t="Neutral";break;case Fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new w;function i0(){je.getLuminanceCoefficients(Xr);const s=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function r0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Hs(s){return s!==""}function gu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(s){return s.replace(a0,c0)}const l0=new Map;function c0(s,e){let t=ze[e];if(t===void 0){const n=l0.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(s){return s.replace(u0,h0)}function h0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function d0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function f0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ni:case Ui:e="ENVMAP_TYPE_CUBE";break;case cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function m0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Oo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ld:e="ENVMAP_BLENDING_MIX";break;case Pd:e="ENVMAP_BLENDING_ADD";break}return e}function g0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function v0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=d0(t),c=f0(t),u=p0(t),h=m0(t),d=g0(t),p=s0(t),v=r0(r),g=i.createProgram();let f,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hs).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hs).join(`
`),m.length>0&&(m+=`
`)):(f=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),m=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?ze.tonemapping_pars_fragment:"",t.toneMapping!==ei?n0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,t0("linearToOutputTexel",t.outputColorSpace),i0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=nl(o),o=gu(o,t),o=vu(o,t),a=nl(a),a=gu(a,t),a=vu(a,t),o=_u(o),a=_u(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=b+f+o,T=b+m+a,P=pu(i,i.VERTEX_SHADER,x),R=pu(i,i.FRAGMENT_SHADER,T);i.attachShader(g,P),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(M){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(P).trim(),W=i.getShaderInfoLog(R).trim();let K=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,P,R);else{const z=mu(i,P,"vertex"),U=mu(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+O+`
`+z+`
`+U)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||W==="")&&(V=!1);V&&(M.diagnostics={runnable:K,programLog:O,vertexShader:{log:k,prefix:f},fragmentShader:{log:W,prefix:m}})}i.deleteShader(P),i.deleteShader(R),C=new qr(i,g),H=o0(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let H;this.getAttributes=function(){return H===void 0&&E(this),H};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(g,Jg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=R,this}let _0=0;class x0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new y0(e),t.set(e,n)),n}}class y0{constructor(e){this.id=_0++,this.code=e,this.usedTimes=0}}function b0(s,e,t,n,i,r,o){const a=new Ua,l=new x0,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,p=i.vertexTextures;let v=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,M,O,k,W){const K=k.fog,V=W.geometry,z=_.isMeshStandardMaterial?k.environment:null,U=(_.isMeshStandardMaterial?t:e).get(_.envMap||z),se=U&&U.mapping===cr?U.image.height:null,ie=g[_.type];_.precision!==null&&(v=i.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ne=oe!==void 0?oe.length:0;let Ye=0;V.morphAttributes.position!==void 0&&(Ye=1),V.morphAttributes.normal!==void 0&&(Ye=2),V.morphAttributes.color!==void 0&&(Ye=3);let X,Z,de,fe;if(ie){const Zt=Dn[ie];X=Zt.vertexShader,Z=Zt.fragmentShader}else X=_.vertexShader,Z=_.fragmentShader,l.update(_),de=l.getVertexShaderID(_),fe=l.getFragmentShaderID(_);const Fe=s.getRenderTarget(),we=W.isInstancedMesh===!0,We=W.isBatchedMesh===!0,at=!!_.map,qe=!!_.matcap,L=!!U,sn=!!_.aoMap,He=!!_.lightMap,Ke=!!_.bumpMap,Le=!!_.normalMap,pt=!!_.displacementMap,Ue=!!_.emissiveMap,A=!!_.metalnessMap,y=!!_.roughnessMap,F=_.anisotropy>0,$=_.clearcoat>0,J=_.dispersion>0,j=_.iridescence>0,ye=_.sheen>0,re=_.transmission>0,pe=F&&!!_.anisotropyMap,Je=$&&!!_.clearcoatMap,Q=$&&!!_.clearcoatNormalMap,me=$&&!!_.clearcoatRoughnessMap,Pe=j&&!!_.iridescenceMap,Ie=j&&!!_.iridescenceThicknessMap,ge=ye&&!!_.sheenColorMap,Ve=ye&&!!_.sheenRoughnessMap,Oe=!!_.specularMap,ut=!!_.specularColorMap,I=!!_.specularIntensityMap,ce=re&&!!_.transmissionMap,q=re&&!!_.thicknessMap,Y=!!_.gradientMap,ae=!!_.alphaMap,ue=_.alphaTest>0,Xe=!!_.alphaHash,Tt=!!_.extensions;let Jt=ei;_.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Jt=s.toneMapping);const Qe={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:Z,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:We,batchingColor:We&&W._colorsTexture!==null,instancing:we,instancingColor:we&&W.instanceColor!==null,instancingMorph:we&&W.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Fe===null?s.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Nt,alphaToCoverage:!!_.alphaToCoverage,map:at,matcap:qe,envMap:L,envMapMode:L&&U.mapping,envMapCubeUVHeight:se,aoMap:sn,lightMap:He,bumpMap:Ke,normalMap:Le,displacementMap:p&&pt,emissiveMap:Ue,normalMapObjectSpace:Le&&_.normalMapType===qd,normalMapTangentSpace:Le&&_.normalMapType===Ma,metalnessMap:A,roughnessMap:y,anisotropy:F,anisotropyMap:pe,clearcoat:$,clearcoatMap:Je,clearcoatNormalMap:Q,clearcoatRoughnessMap:me,dispersion:J,iridescence:j,iridescenceMap:Pe,iridescenceThicknessMap:Ie,sheen:ye,sheenColorMap:ge,sheenRoughnessMap:Ve,specularMap:Oe,specularColorMap:ut,specularIntensityMap:I,transmission:re,transmissionMap:ce,thicknessMap:q,gradientMap:Y,opaque:_.transparent===!1&&_.blending===Ii&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:ue,alphaHash:Xe,combine:_.combine,mapUv:at&&f(_.map.channel),aoMapUv:sn&&f(_.aoMap.channel),lightMapUv:He&&f(_.lightMap.channel),bumpMapUv:Ke&&f(_.bumpMap.channel),normalMapUv:Le&&f(_.normalMap.channel),displacementMapUv:pt&&f(_.displacementMap.channel),emissiveMapUv:Ue&&f(_.emissiveMap.channel),metalnessMapUv:A&&f(_.metalnessMap.channel),roughnessMapUv:y&&f(_.roughnessMap.channel),anisotropyMapUv:pe&&f(_.anisotropyMap.channel),clearcoatMapUv:Je&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:Q&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&f(_.sheenRoughnessMap.channel),specularMapUv:Oe&&f(_.specularMap.channel),specularColorMapUv:ut&&f(_.specularColorMap.channel),specularIntensityMapUv:I&&f(_.specularIntensityMap.channel),transmissionMapUv:ce&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:ae&&f(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Le||F),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(at||ae),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Jt,decodeVideoTexture:at&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ht,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Tt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&_.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function b(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const O in _.defines)M.push(O),M.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(x(M,_),T(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function x(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function T(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){const M=g[_.type];let O;if(M){const k=Dn[M];O=Bf.clone(k.uniforms)}else O=_.uniforms;return O}function R(_,M){let O;for(let k=0,W=u.length;k<W;k++){const K=u[k];if(K.cacheKey===M){O=K,++O.usedTimes;break}}return O===void 0&&(O=new v0(s,M,_,r),u.push(O)),O}function E(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function C(_){l.remove(_)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:P,acquireProgram:R,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:H}}function M0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function S0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,p,v,g,f){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:g,group:f},s[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=v,m.renderOrder=h.renderOrder,m.z=g,m.group=f),e++,m}function a(h,d,p,v,g,f){const m=o(h,d,p,v,g,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(h,d,p,v,g,f){const m=o(h,d,p,v,g,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||S0),n.length>1&&n.sort(d||yu),i.length>1&&i.sort(d||yu)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function E0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new bu,s.set(n,[o])):i>=r.length?(o=new bu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function T0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Se};break;case"SpotLight":t={position:new w,direction:new w,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function A0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let w0=0;function R0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function C0(s){const e=new T0,t=A0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const i=new w,r=new De,o=new De;function a(c){let u=0,h=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let p=0,v=0,g=0,f=0,m=0,b=0,x=0,T=0,P=0,R=0,E=0;c.sort(R0);for(let H=0,_=c.length;H<_;H++){const M=c[H],O=M.color,k=M.intensity,W=M.distance,K=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=O.r*k,h+=O.g*k,d+=O.b*k;else if(M.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(M.sh.coefficients[V],k);E++}else if(M.isDirectionalLight){const V=e.get(M);if(V.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const z=M.shadow,U=t.get(M);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,n.directionalShadow[p]=U,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=M.shadow.matrix,b++}n.directional[p]=V,p++}else if(M.isSpotLight){const V=e.get(M);V.position.setFromMatrixPosition(M.matrixWorld),V.color.copy(O).multiplyScalar(k),V.distance=W,V.coneCos=Math.cos(M.angle),V.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),V.decay=M.decay,n.spot[g]=V;const z=M.shadow;if(M.map&&(n.spotLightMap[P]=M.map,P++,z.updateMatrices(M),M.castShadow&&R++),n.spotLightMatrix[g]=z.matrix,M.castShadow){const U=t.get(M);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,n.spotShadow[g]=U,n.spotShadowMap[g]=K,T++}g++}else if(M.isRectAreaLight){const V=e.get(M);V.color.copy(O).multiplyScalar(k),V.halfWidth.set(M.width*.5,0,0),V.halfHeight.set(0,M.height*.5,0),n.rectArea[f]=V,f++}else if(M.isPointLight){const V=e.get(M);if(V.color.copy(M.color).multiplyScalar(M.intensity),V.distance=M.distance,V.decay=M.decay,M.castShadow){const z=M.shadow,U=t.get(M);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,U.shadowCameraNear=z.camera.near,U.shadowCameraFar=z.camera.far,n.pointShadow[v]=U,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=M.shadow.matrix,x++}n.point[v]=V,v++}else if(M.isHemisphereLight){const V=e.get(M);V.skyColor.copy(M.color).multiplyScalar(k),V.groundColor.copy(M.groundColor).multiplyScalar(k),n.hemi[m]=V,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==v||C.spotLength!==g||C.rectAreaLength!==f||C.hemiLength!==m||C.numDirectionalShadows!==b||C.numPointShadows!==x||C.numSpotShadows!==T||C.numSpotMaps!==P||C.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=f,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=T+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,C.directionalLength=p,C.pointLength=v,C.spotLength=g,C.rectAreaLength=f,C.hemiLength=m,C.numDirectionalShadows=b,C.numPointShadows=x,C.numSpotShadows=T,C.numSpotMaps=P,C.numLightProbes=E,n.version=w0++)}function l(c,u){let h=0,d=0,p=0,v=0,g=0;const f=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const x=c[m];if(x.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(f),h++}else if(x.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(f),p++}else if(x.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),o.identity(),r.copy(x.matrixWorld),r.premultiply(f),o.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(f),g++}}}return{setup:a,setupView:l,state:n}}function Mu(s){const e=new C0(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function L0(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Mu(s),e.set(i,[a])):r>=o.length?(a=new Mu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class P0 extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I0 extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
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
}`;function U0(s,e,t){let n=new $a;const i=new he,r=new he,o=new Ze,a=new P0({depthPacking:Wd}),l=new I0,c={},u=t.maxTextureSize,h={[Bn]:jt,[jt]:Bn,[Ht]:Ht},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:D0,fragmentShader:N0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new It;v.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ee(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let m=this.type;this.render=function(R,E,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const H=s.getRenderTarget(),_=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Qn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=m!==On&&this.type===On,W=m===On&&this.type!==On;for(let K=0,V=R.length;K<V;K++){const z=R[K],U=z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const se=U.getFrameExtents();if(i.multiply(se),r.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/se.x),i.x=r.x*se.x,U.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/se.y),i.y=r.y*se.y,U.mapSize.y=r.y)),U.map===null||k===!0||W===!0){const oe=this.type!==On?{minFilter:vt,magFilter:vt}:{};U.map!==null&&U.map.dispose(),U.map=new vi(i.x,i.y,oe),U.map.texture.name=z.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const ie=U.getViewportCount();for(let oe=0;oe<ie;oe++){const Ne=U.getViewport(oe);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),O.viewport(o),U.updateMatrices(z,oe),n=U.getFrustum(),T(E,C,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===On&&b(U,C),U.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(H,_,M)};function b(R,E){const C=e.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vi(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(E,null,C,d,g,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(E,null,C,p,g,null)}function x(R,E,C,H){let _=null;const M=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)_=M;else if(_=C.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=_.uuid,k=E.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let K=W[k];K===void 0&&(K=_.clone(),W[k]=K,E.addEventListener("dispose",P)),_=K}if(_.visible=E.visible,_.wireframe=E.wireframe,H===On?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:h[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=s.properties.get(_);O.light=C}return _}function T(R,E,C,H,_){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===On)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const k=e.update(R),W=R.material;if(Array.isArray(W)){const K=k.groups;for(let V=0,z=K.length;V<z;V++){const U=K[V],se=W[U.materialIndex];if(se&&se.visible){const ie=x(R,se,H,_);R.onBeforeShadow(s,R,E,C,k,ie,U),s.renderBufferDirect(C,null,k,ie,R,U),R.onAfterShadow(s,R,E,C,k,ie,U)}}}else if(W.visible){const K=x(R,W,H,_);R.onBeforeShadow(s,R,E,C,k,K,null),s.renderBufferDirect(C,null,k,K,R,null),R.onAfterShadow(s,R,E,C,k,K,null)}}const O=R.children;for(let k=0,W=O.length;k<W;k++)T(O[k],E,C,H,_)}function P(R){R.target.removeEventListener("dispose",P);for(const C in c){const H=c[C],_=R.target.uuid;_ in H&&(H[_].dispose(),delete H[_])}}}const F0={[Lo]:Po,[Io]:Uo,[Do]:Fo,[Di]:No,[Po]:Lo,[Uo]:Io,[Fo]:Do,[No]:Di};function O0(s){function e(){let I=!1;const ce=new Ze;let q=null;const Y=new Ze(0,0,0,0);return{setMask:function(ae){q!==ae&&!I&&(s.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){I=ae},setClear:function(ae,ue,Xe,Tt,Jt){Jt===!0&&(ae*=Tt,ue*=Tt,Xe*=Tt),ce.set(ae,ue,Xe,Tt),Y.equals(ce)===!1&&(s.clearColor(ae,ue,Xe,Tt),Y.copy(ce))},reset:function(){I=!1,q=null,Y.set(-1,0,0,0)}}}function t(){let I=!1,ce=!1,q=null,Y=null,ae=null;return{setReversed:function(ue){ce=ue},setTest:function(ue){ue?de(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(ue){q!==ue&&!I&&(s.depthMask(ue),q=ue)},setFunc:function(ue){if(ce&&(ue=F0[ue]),Y!==ue){switch(ue){case Lo:s.depthFunc(s.NEVER);break;case Po:s.depthFunc(s.ALWAYS);break;case Io:s.depthFunc(s.LESS);break;case Di:s.depthFunc(s.LEQUAL);break;case Do:s.depthFunc(s.EQUAL);break;case No:s.depthFunc(s.GEQUAL);break;case Uo:s.depthFunc(s.GREATER);break;case Fo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=ue}},setLocked:function(ue){I=ue},setClear:function(ue){ae!==ue&&(s.clearDepth(ue),ae=ue)},reset:function(){I=!1,q=null,Y=null,ae=null}}}function n(){let I=!1,ce=null,q=null,Y=null,ae=null,ue=null,Xe=null,Tt=null,Jt=null;return{setTest:function(Qe){I||(Qe?de(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!I&&(s.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,Zt,Jn){(q!==Qe||Y!==Zt||ae!==Jn)&&(s.stencilFunc(Qe,Zt,Jn),q=Qe,Y=Zt,ae=Jn)},setOp:function(Qe,Zt,Jn){(ue!==Qe||Xe!==Zt||Tt!==Jn)&&(s.stencilOp(Qe,Zt,Jn),ue=Qe,Xe=Zt,Tt=Jn)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Jt!==Qe&&(s.clearStencil(Qe),Jt=Qe)},reset:function(){I=!1,ce=null,q=null,Y=null,ae=null,ue=null,Xe=null,Tt=null,Jt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,v=!1,g=null,f=null,m=null,b=null,x=null,T=null,P=null,R=new Se(0,0,0),E=0,C=!1,H=null,_=null,M=null,O=null,k=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=V>=2);let U=null,se={};const ie=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),Ne=new Ze().fromArray(ie),Ye=new Ze().fromArray(oe);function X(I,ce,q,Y){const ae=new Uint8Array(4),ue=s.createTexture();s.bindTexture(I,ue),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<q;Xe++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(ce+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return ue}const Z={};Z[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),de(s.DEPTH_TEST),r.setFunc(Di),He(!1),Ke(Zl),de(s.CULL_FACE),L(Qn);function de(I){c[I]!==!0&&(s.enable(I),c[I]=!0)}function fe(I){c[I]!==!1&&(s.disable(I),c[I]=!1)}function Fe(I,ce){return u[I]!==ce?(s.bindFramebuffer(I,ce),u[I]=ce,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ce),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function we(I,ce){let q=d,Y=!1;if(I){q=h.get(ce),q===void 0&&(q=[],h.set(ce,q));const ae=I.textures;if(q.length!==ae.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Xe=ae.length;ue<Xe;ue++)q[ue]=s.COLOR_ATTACHMENT0+ue;q.length=ae.length,Y=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,Y=!0);Y&&s.drawBuffers(q)}function We(I){return p!==I?(s.useProgram(I),p=I,!0):!1}const at={[pi]:s.FUNC_ADD,[fd]:s.FUNC_SUBTRACT,[pd]:s.FUNC_REVERSE_SUBTRACT};at[md]=s.MIN,at[gd]=s.MAX;const qe={[vd]:s.ZERO,[_d]:s.ONE,[xd]:s.SRC_COLOR,[Ro]:s.SRC_ALPHA,[Td]:s.SRC_ALPHA_SATURATE,[Sd]:s.DST_COLOR,[bd]:s.DST_ALPHA,[yd]:s.ONE_MINUS_SRC_COLOR,[Co]:s.ONE_MINUS_SRC_ALPHA,[Ed]:s.ONE_MINUS_DST_COLOR,[Md]:s.ONE_MINUS_DST_ALPHA,[Ad]:s.CONSTANT_COLOR,[wd]:s.ONE_MINUS_CONSTANT_COLOR,[Rd]:s.CONSTANT_ALPHA,[Cd]:s.ONE_MINUS_CONSTANT_ALPHA};function L(I,ce,q,Y,ae,ue,Xe,Tt,Jt,Qe){if(I===Qn){v===!0&&(fe(s.BLEND),v=!1);return}if(v===!1&&(de(s.BLEND),v=!0),I!==dd){if(I!==g||Qe!==C){if((f!==pi||x!==pi)&&(s.blendEquation(s.FUNC_ADD),f=pi,x=pi),Qe)switch(I){case Ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wo:s.blendFunc(s.ONE,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,b=null,T=null,P=null,R.set(0,0,0),E=0,g=I,C=Qe}return}ae=ae||ce,ue=ue||q,Xe=Xe||Y,(ce!==f||ae!==x)&&(s.blendEquationSeparate(at[ce],at[ae]),f=ce,x=ae),(q!==m||Y!==b||ue!==T||Xe!==P)&&(s.blendFuncSeparate(qe[q],qe[Y],qe[ue],qe[Xe]),m=q,b=Y,T=ue,P=Xe),(Tt.equals(R)===!1||Jt!==E)&&(s.blendColor(Tt.r,Tt.g,Tt.b,Jt),R.copy(Tt),E=Jt),g=I,C=!1}function sn(I,ce){I.side===Ht?fe(s.CULL_FACE):de(s.CULL_FACE);let q=I.side===jt;ce&&(q=!q),He(q),I.blending===Ii&&I.transparent===!1?L(Qn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),i.setMask(I.colorWrite);const Y=I.stencilWrite;o.setTest(Y),Y&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){H!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),H=I)}function Ke(I){I!==Pi?(de(s.CULL_FACE),I!==_&&(I===Zl?s.cullFace(s.BACK):I===hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),_=I}function Le(I){I!==M&&(K&&s.lineWidth(I),M=I)}function pt(I,ce,q){I?(de(s.POLYGON_OFFSET_FILL),(O!==ce||k!==q)&&(s.polygonOffset(ce,q),O=ce,k=q)):fe(s.POLYGON_OFFSET_FILL)}function Ue(I){I?de(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function A(I){I===void 0&&(I=s.TEXTURE0+W-1),U!==I&&(s.activeTexture(I),U=I)}function y(I,ce,q){q===void 0&&(U===null?q=s.TEXTURE0+W-1:q=U);let Y=se[q];Y===void 0&&(Y={type:void 0,texture:void 0},se[q]=Y),(Y.type!==I||Y.texture!==ce)&&(U!==q&&(s.activeTexture(q),U=q),s.bindTexture(I,ce||Z[I]),Y.type=I,Y.texture=ce)}function F(){const I=se[U];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){Ne.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ne.copy(I))}function ge(I){Ye.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Ye.copy(I))}function Ve(I,ce){let q=l.get(ce);q===void 0&&(q=new WeakMap,l.set(ce,q));let Y=q.get(I);Y===void 0&&(Y=s.getUniformBlockIndex(ce,I.name),q.set(I,Y))}function Oe(I,ce){const Y=l.get(ce).get(I);a.get(ce)!==Y&&(s.uniformBlockBinding(ce,Y,I.__bindingPointIndex),a.set(ce,Y))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},U=null,se={},u={},h=new WeakMap,d=[],p=null,v=!1,g=null,f=null,m=null,b=null,x=null,T=null,P=null,R=new Se(0,0,0),E=0,C=!1,H=null,_=null,M=null,O=null,k=null,Ne.set(0,0,s.canvas.width,s.canvas.height),Ye.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:de,disable:fe,bindFramebuffer:Fe,drawBuffers:we,useProgram:We,setBlending:L,setMaterial:sn,setFlipSided:He,setCullFace:Ke,setLineWidth:Le,setPolygonOffset:pt,setScissorTest:Ue,activeTexture:A,bindTexture:y,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:me,texImage3D:Pe,updateUBOMapping:Ve,uniformBlockBinding:Oe,texStorage2D:Je,texStorage3D:Q,texSubImage2D:j,texSubImage3D:ye,compressedTexSubImage2D:re,compressedTexSubImage3D:pe,scissor:Ie,viewport:ge,reset:ut}}function Su(s,e,t,n){const i=B0(n);switch(t){case cc:return s*e;case hc:return s*e;case dc:return s*e*2;case Vo:return s*e/i.components*i.byteLength;case Wo:return s*e/i.components*i.byteLength;case fc:return s*e*2/i.components*i.byteLength;case qo:return s*e*2/i.components*i.byteLength;case uc:return s*e*3/i.components*i.byteLength;case an:return s*e*4/i.components*i.byteLength;case Xo:return s*e*4/i.components*i.byteLength;case dr:case fr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pr:case mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $o:case Ko:return Math.max(s,16)*Math.max(e,8)/4;case jo:case Yo:return Math.max(s,8)*Math.max(e,8)/2;case Jo:case Zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case na:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ia:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ra:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case oa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case aa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case la:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ca:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ua:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ha:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case da:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fa:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case gr:case pa:case ma:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pc:case ga:return Math.ceil(s/4)*Math.ceil(e/4)*8;case va:case _a:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B0(s){switch(s){case zn:case oc:return{byteLength:1,components:1};case Cs:case ac:case Ls:return{byteLength:2,components:1};case Go:case Ho:return{byteLength:2,components:4};case mi:case zo:case _n:return{byteLength:4,components:1};case lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function k0(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,y){return p?new OffscreenCanvas(A,y):Us("canvas")}function g(A,y,F){let $=1;const J=Ue(A);if((J.width>F||J.height>F)&&($=F/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor($*J.width),ye=Math.floor($*J.height);h===void 0&&(h=v(j,ye));const re=y?v(j,ye):h;return re.width=j,re.height=ye,re.getContext("2d").drawImage(A,0,0,j,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+ye+")."),re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function f(A){return A.generateMipmaps&&A.minFilter!==vt&&A.minFilter!==Qt}function m(A){s.generateMipmap(A)}function b(A,y,F,$,J=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=y;if(y===s.RED&&(F===s.FLOAT&&(j=s.R32F),F===s.HALF_FLOAT&&(j=s.R16F),F===s.UNSIGNED_BYTE&&(j=s.R8)),y===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.R8UI),F===s.UNSIGNED_SHORT&&(j=s.R16UI),F===s.UNSIGNED_INT&&(j=s.R32UI),F===s.BYTE&&(j=s.R8I),F===s.SHORT&&(j=s.R16I),F===s.INT&&(j=s.R32I)),y===s.RG&&(F===s.FLOAT&&(j=s.RG32F),F===s.HALF_FLOAT&&(j=s.RG16F),F===s.UNSIGNED_BYTE&&(j=s.RG8)),y===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RG8UI),F===s.UNSIGNED_SHORT&&(j=s.RG16UI),F===s.UNSIGNED_INT&&(j=s.RG32UI),F===s.BYTE&&(j=s.RG8I),F===s.SHORT&&(j=s.RG16I),F===s.INT&&(j=s.RG32I)),y===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RGB8UI),F===s.UNSIGNED_SHORT&&(j=s.RGB16UI),F===s.UNSIGNED_INT&&(j=s.RGB32UI),F===s.BYTE&&(j=s.RGB8I),F===s.SHORT&&(j=s.RGB16I),F===s.INT&&(j=s.RGB32I)),y===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),F===s.UNSIGNED_INT&&(j=s.RGBA32UI),F===s.BYTE&&(j=s.RGBA8I),F===s.SHORT&&(j=s.RGBA16I),F===s.INT&&(j=s.RGBA32I)),y===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),y===s.RGBA){const ye=J?xr:je.getTransfer($);F===s.FLOAT&&(j=s.RGBA32F),F===s.HALF_FLOAT&&(j=s.RGBA16F),F===s.UNSIGNED_BYTE&&(j=ye===ht?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(A,y){let F;return A?y===null||y===mi||y===Fi?F=s.DEPTH24_STENCIL8:y===_n?F=s.DEPTH32F_STENCIL8:y===Cs&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mi||y===Fi?F=s.DEPTH_COMPONENT24:y===_n?F=s.DEPTH_COMPONENT32F:y===Cs&&(F=s.DEPTH_COMPONENT16),F}function T(A,y){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==vt&&A.minFilter!==Qt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function P(A){const y=A.target;y.removeEventListener("dispose",P),E(y),y.isVideoTexture&&u.delete(y)}function R(A){const y=A.target;y.removeEventListener("dispose",R),H(y)}function E(A){const y=n.get(A);if(y.__webglInit===void 0)return;const F=A.source,$=d.get(F);if($){const J=$[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(A),Object.keys($).length===0&&d.delete(F)}n.remove(A)}function C(A){const y=n.get(A);s.deleteTexture(y.__webglTexture);const F=A.source,$=d.get(F);delete $[y.__cacheKey],o.memory.textures--}function H(A){const y=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let J=0;J<y.__webglFramebuffer[$].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[$][J]);else s.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)s.deleteFramebuffer(y.__webglFramebuffer[$]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=A.textures;for(let $=0,J=F.length;$<J;$++){const j=n.get(F[$]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(F[$])}n.remove(A)}let _=0;function M(){_=0}function O(){const A=_;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),_+=1,A}function k(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function W(A,y){const F=n.get(A);if(A.isVideoTexture&&Le(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(F,A,y);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+y)}function K(A,y){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Ye(F,A,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+y)}function V(A,y){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Ye(F,A,y);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+y)}function z(A,y){const F=n.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+y)}const U={[Ln]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[ur]:s.MIRRORED_REPEAT},se={[vt]:s.NEAREST,[rc]:s.NEAREST_MIPMAP_NEAREST,[Rs]:s.NEAREST_MIPMAP_LINEAR,[Qt]:s.LINEAR,[hr]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},ie={[Xd]:s.NEVER,[Zd]:s.ALWAYS,[jd]:s.LESS,[xc]:s.LEQUAL,[$d]:s.EQUAL,[Jd]:s.GEQUAL,[Yd]:s.GREATER,[Kd]:s.NOTEQUAL};function oe(A,y){if(y.type===_n&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Qt||y.magFilter===hr||y.magFilter===Rs||y.magFilter===kn||y.minFilter===Qt||y.minFilter===hr||y.minFilter===Rs||y.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,U[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,U[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,U[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,se[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,se[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===vt||y.minFilter!==Rs&&y.minFilter!==kn||y.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ne(A,y){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",P));const $=y.source;let J=d.get($);J===void 0&&(J={},d.set($,J));const j=k(y);if(j!==A.__cacheKey){J[j]===void 0&&(J[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[j].usedTimes++;const ye=J[A.__cacheKey];ye!==void 0&&(J[A.__cacheKey].usedTimes--,ye.usedTimes===0&&C(y)),A.__cacheKey=j,A.__webglTexture=J[j].texture}return F}function Ye(A,y,F){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);const J=Ne(A,y),j=y.source;t.bindTexture($,A.__webglTexture,s.TEXTURE0+F);const ye=n.get(j);if(j.version!==ye.__version||J===!0){t.activeTexture(s.TEXTURE0+F);const re=je.getPrimaries(je.workingColorSpace),pe=y.colorSpace===ni?null:je.getPrimaries(y.colorSpace),Je=y.colorSpace===ni||re===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Q=g(y.image,!1,i.maxTextureSize);Q=pt(y,Q);const me=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type);let Ie=b(y.internalFormat,me,Pe,y.colorSpace,y.isVideoTexture);oe($,y);let ge;const Ve=y.mipmaps,Oe=y.isVideoTexture!==!0,ut=ye.__version===void 0||J===!0,I=j.dataReady,ce=T(y,Q);if(y.isDepthTexture)Ie=x(y.format===Bi,y.type),ut&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Ie,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,Ie,Q.width,Q.height,0,me,Pe,null));else if(y.isDataTexture)if(Ve.length>0){Oe&&ut&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,Ve[0].width,Ve[0].height);for(let q=0,Y=Ve.length;q<Y;q++)ge=Ve[q],Oe?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,ge.width,ge.height,me,Pe,ge.data):t.texImage2D(s.TEXTURE_2D,q,Ie,ge.width,ge.height,0,me,Pe,ge.data);y.generateMipmaps=!1}else Oe?(ut&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,Q.width,Q.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,me,Pe,Q.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,Q.width,Q.height,0,me,Pe,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ie,Ve[0].width,Ve[0].height,Q.depth);for(let q=0,Y=Ve.length;q<Y;q++)if(ge=Ve[q],y.format!==an)if(me!==null)if(Oe){if(I)if(y.layerUpdates.size>0){const ae=Su(ge.width,ge.height,y.format,y.type);for(const ue of y.layerUpdates){const Xe=ge.data.subarray(ue*ae/ge.data.BYTES_PER_ELEMENT,(ue+1)*ae/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,ue,ge.width,ge.height,1,me,Xe,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,ge.width,ge.height,Q.depth,me,ge.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ie,ge.width,ge.height,Q.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,ge.width,ge.height,Q.depth,me,Pe,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,Ie,ge.width,ge.height,Q.depth,0,me,Pe,ge.data)}else{Oe&&ut&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,Ve[0].width,Ve[0].height);for(let q=0,Y=Ve.length;q<Y;q++)ge=Ve[q],y.format!==an?me!==null?Oe?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,q,Ie,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,ge.width,ge.height,me,Pe,ge.data):t.texImage2D(s.TEXTURE_2D,q,Ie,ge.width,ge.height,0,me,Pe,ge.data)}else if(y.isDataArrayTexture)if(Oe){if(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ie,Q.width,Q.height,Q.depth),I)if(y.layerUpdates.size>0){const q=Su(Q.width,Q.height,y.format,y.type);for(const Y of y.layerUpdates){const ae=Q.data.subarray(Y*q/Q.data.BYTES_PER_ELEMENT,(Y+1)*q/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,me,Pe,ae)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,Pe,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,Q.width,Q.height,Q.depth,0,me,Pe,Q.data);else if(y.isData3DTexture)Oe?(ut&&t.texStorage3D(s.TEXTURE_3D,ce,Ie,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,Pe,Q.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,Q.width,Q.height,Q.depth,0,me,Pe,Q.data);else if(y.isFramebufferTexture){if(ut)if(Oe)t.texStorage2D(s.TEXTURE_2D,ce,Ie,Q.width,Q.height);else{let q=Q.width,Y=Q.height;for(let ae=0;ae<ce;ae++)t.texImage2D(s.TEXTURE_2D,ae,Ie,q,Y,0,me,Pe,null),q>>=1,Y>>=1}}else if(Ve.length>0){if(Oe&&ut){const q=Ue(Ve[0]);t.texStorage2D(s.TEXTURE_2D,ce,Ie,q.width,q.height)}for(let q=0,Y=Ve.length;q<Y;q++)ge=Ve[q],Oe?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,me,Pe,ge):t.texImage2D(s.TEXTURE_2D,q,Ie,me,Pe,ge);y.generateMipmaps=!1}else if(Oe){if(ut){const q=Ue(Q);t.texStorage2D(s.TEXTURE_2D,ce,Ie,q.width,q.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Pe,Q)}else t.texImage2D(s.TEXTURE_2D,0,Ie,me,Pe,Q);f(y)&&m($),ye.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function X(A,y,F){if(y.image.length!==6)return;const $=Ne(A,y),J=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);const j=n.get(J);if(J.version!==j.__version||$===!0){t.activeTexture(s.TEXTURE0+F);const ye=je.getPrimaries(je.workingColorSpace),re=y.colorSpace===ni?null:je.getPrimaries(y.colorSpace),pe=y.colorSpace===ni||ye===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Je=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,me=[];for(let Y=0;Y<6;Y++)!Je&&!Q?me[Y]=g(y.image[Y],!0,i.maxCubemapSize):me[Y]=Q?y.image[Y].image:y.image[Y],me[Y]=pt(y,me[Y]);const Pe=me[0],Ie=r.convert(y.format,y.colorSpace),ge=r.convert(y.type),Ve=b(y.internalFormat,Ie,ge,y.colorSpace),Oe=y.isVideoTexture!==!0,ut=j.__version===void 0||$===!0,I=J.dataReady;let ce=T(y,Pe);oe(s.TEXTURE_CUBE_MAP,y);let q;if(Je){Oe&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,Ve,Pe.width,Pe.height);for(let Y=0;Y<6;Y++){q=me[Y].mipmaps;for(let ae=0;ae<q.length;ae++){const ue=q[ae];y.format!==an?Ie!==null?Oe?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,ue.width,ue.height,Ie,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,Ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,ue.width,ue.height,Ie,ge,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,Ve,ue.width,ue.height,0,Ie,ge,ue.data)}}}else{if(q=y.mipmaps,Oe&&ut){q.length>0&&ce++;const Y=Ue(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,Ve,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,me[Y].width,me[Y].height,Ie,ge,me[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ve,me[Y].width,me[Y].height,0,Ie,ge,me[Y].data);for(let ae=0;ae<q.length;ae++){const Xe=q[ae].image[Y].image;Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,Xe.width,Xe.height,Ie,ge,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,Ve,Xe.width,Xe.height,0,Ie,ge,Xe.data)}}else{Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ie,ge,me[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ve,Ie,ge,me[Y]);for(let ae=0;ae<q.length;ae++){const ue=q[ae];Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,Ie,ge,ue.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,Ve,Ie,ge,ue.image[Y])}}}f(y)&&m(s.TEXTURE_CUBE_MAP),j.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Z(A,y,F,$,J,j){const ye=r.convert(F.format,F.colorSpace),re=r.convert(F.type),pe=b(F.internalFormat,ye,re,F.colorSpace);if(!n.get(y).__hasExternalTextures){const Q=Math.max(1,y.width>>j),me=Math.max(1,y.height>>j);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,j,pe,Q,me,y.depth,0,ye,re,null):t.texImage2D(J,j,pe,Q,me,0,ye,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Ke(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,n.get(F).__webglTexture,0,He(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,J,n.get(F).__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(A,y,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){const $=y.depthTexture,J=$&&$.isDepthTexture?$.type:null,j=x(y.stencilBuffer,J),ye=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=He(y);Ke(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,j,y.width,y.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,j,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,j,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,A)}else{const $=y.textures;for(let J=0;J<$.length;J++){const j=$[J],ye=r.convert(j.format,j.colorSpace),re=r.convert(j.type),pe=b(j.internalFormat,ye,re,j.colorSpace),Je=He(y);F&&Ke(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,pe,y.width,y.height):Ke(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,pe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,pe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const $=n.get(y.depthTexture).__webglTexture,J=He(y);if(y.depthTexture.format===Oi)Ke(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(y.depthTexture.format===Bi)Ke(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Fe(A){const y=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=$}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");fe(y.__webglFramebuffer,A)}else if(F){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=s.createRenderbuffer(),de(y.__webglDepthbuffer[$],A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),de(y.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(A,y,F){const $=n.get(A);y!==void 0&&Z($.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Fe(A)}function We(A){const y=A.texture,F=n.get(A),$=n.get(y);A.addEventListener("dispose",R);const J=A.textures,j=A.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let pe=0;pe<y.mipmaps.length;pe++)F.__webglFramebuffer[re][pe]=s.createFramebuffer()}else F.__webglFramebuffer[re]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)F.__webglFramebuffer[re]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ye)for(let re=0,pe=J.length;re<pe;re++){const Je=n.get(J[re]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Ke(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const pe=J[re];F.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const Je=r.convert(pe.format,pe.colorSpace),Q=r.convert(pe.type),me=b(pe.internalFormat,Je,Q,pe.colorSpace,A.isXRRenderTarget===!0),Pe=He(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,F.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),de(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),oe(s.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Z(F.__webglFramebuffer[re][pe],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe);else Z(F.__webglFramebuffer[re],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);f(y)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let re=0,pe=J.length;re<pe;re++){const Je=J[re],Q=n.get(Je);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),oe(s.TEXTURE_2D,Je),Z(F.__webglFramebuffer,A,Je,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,0),f(Je)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),oe(re,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Z(F.__webglFramebuffer[pe],A,y,s.COLOR_ATTACHMENT0,re,pe);else Z(F.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,re,0);f(y)&&m(re),t.unbindTexture()}A.depthBuffer&&Fe(A)}function at(A){const y=A.textures;for(let F=0,$=y.length;F<$;F++){const J=y[F];if(f(J)){const j=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ye=n.get(J).__webglTexture;t.bindTexture(j,ye),m(j),t.unbindTexture()}}}const qe=[],L=[];function sn(A){if(A.samples>0){if(Ke(A)===!1){const y=A.textures,F=A.width,$=A.height;let J=s.COLOR_BUFFER_BIT;const j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(A),re=y.length>1;if(re)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Je=n.get(y[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,F,$,0,0,F,$,J,s.NEAREST),l===!0&&(qe.length=0,L.length=0,qe.push(s.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(qe.push(j),L.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Je=n.get(y[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function He(A){return Math.min(i.maxSamples,A.samples)}function Ke(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Le(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function pt(A,y){const F=A.colorSpace,$=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Nt&&F!==ni&&(je.getTransfer(F)===ht?($!==an||J!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=M,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=we,this.setupRenderTarget=We,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Ke}function z0(s,e){function t(n,i=ni){let r;const o=je.getTransfer(i);if(n===zn)return s.UNSIGNED_BYTE;if(n===Go)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return s.BYTE;if(n===ac)return s.SHORT;if(n===Cs)return s.UNSIGNED_SHORT;if(n===zo)return s.INT;if(n===mi)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===Ls)return s.HALF_FLOAT;if(n===cc)return s.ALPHA;if(n===uc)return s.RGB;if(n===an)return s.RGBA;if(n===hc)return s.LUMINANCE;if(n===dc)return s.LUMINANCE_ALPHA;if(n===Oi)return s.DEPTH_COMPONENT;if(n===Bi)return s.DEPTH_STENCIL;if(n===Vo)return s.RED;if(n===Wo)return s.RED_INTEGER;if(n===fc)return s.RG;if(n===qo)return s.RG_INTEGER;if(n===Xo)return s.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===$o||n===Yo||n===Ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Zo||n===Qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===Zo)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ua||n===ha||n===da||n===fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ta)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ha)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===pa||n===ma)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gr)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===ga||n===va||n===_a)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class G0 extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ft extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H0={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const f=t.getJointPose(g,n),m=this._getHandJoint(c,g);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const V0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
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

}`;class q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new At,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new li({vertexShader:V0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X0 extends gi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,v=null;const g=new q0,f=t.getContextAttributes();let m=null,b=null;const x=[],T=[],P=new he;let R=null;const E=new $t;E.layers.enable(1),E.viewport=new Ze;const C=new $t;C.layers.enable(2),C.viewport=new Ze;const H=[E,C],_=new G0;_.layers.enable(1),_.layers.enable(2);let M=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=x[X];return Z===void 0&&(Z=new il,x[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=x[X];return Z===void 0&&(Z=new il,x[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=x[X];return Z===void 0&&(Z=new il,x[X]=Z),Z.getHandSpace()};function k(X){const Z=T.indexOf(X.inputSource);if(Z===-1)return;const de=x[Z];de!==void 0&&(de.update(X.inputSource,X.frame,c||o),de.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let X=0;X<x.length;X++){const Z=T[X];Z!==null&&(T[X]=null,x[X].disconnect(Z))}M=null,O=null,g.reset(),e.setRenderTarget(m),p=null,d=null,h=null,i=null,b=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const Z={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new vi(p.framebufferWidth,p.framebufferHeight,{format:an,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let Z=null,de=null,fe=null;f.depth&&(fe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=f.stencil?Bi:Oi,de=f.stencil?Fi:mi);const Fe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new vi(d.textureWidth,d.textureHeight,{format:an,type:zn,depthTexture:new nu(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(X){for(let Z=0;Z<X.removed.length;Z++){const de=X.removed[Z],fe=T.indexOf(de);fe>=0&&(T[fe]=null,x[fe].disconnect(de))}for(let Z=0;Z<X.added.length;Z++){const de=X.added[Z];let fe=T.indexOf(de);if(fe===-1){for(let we=0;we<x.length;we++)if(we>=T.length){T.push(de),fe=we;break}else if(T[we]===null){T[we]=de,fe=we;break}if(fe===-1)break}const Fe=x[fe];Fe&&Fe.connect(de)}}const V=new w,z=new w;function U(X,Z,de){V.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(de.matrixWorld);const fe=V.distanceTo(z),Fe=Z.projectionMatrix.elements,we=de.projectionMatrix.elements,We=Fe[14]/(Fe[10]-1),at=Fe[14]/(Fe[10]+1),qe=(Fe[9]+1)/Fe[5],L=(Fe[9]-1)/Fe[5],sn=(Fe[8]-1)/Fe[0],He=(we[8]+1)/we[0],Ke=We*sn,Le=We*He,pt=fe/(-sn+He),Ue=pt*-sn;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ue),X.translateZ(pt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Fe[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const A=We+pt,y=at+pt,F=Ke-Ue,$=Le+(fe-Ue),J=qe*at/y*A,j=L*at/y*A;X.projectionMatrix.makePerspective(F,$,J,j,A,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function se(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let Z=X.near,de=X.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(de=g.depthFar)),_.near=C.near=E.near=Z,_.far=C.far=E.far=de,(M!==_.near||O!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,O=_.far);const fe=X.parent,Fe=_.cameras;se(_,fe);for(let we=0;we<Fe.length;we++)se(Fe[we],fe);Fe.length===2?U(_,E,C):_.projectionMatrix.copy(E.projectionMatrix),ie(X,_,fe)};function ie(X,Z,de){de===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Hi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(_)};let oe=null;function Ne(X,Z){if(u=Z.getViewerPose(c||o),v=Z,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let fe=!1;de.length!==_.cameras.length&&(_.cameras.length=0,fe=!0);for(let we=0;we<de.length;we++){const We=de[we];let at=null;if(p!==null)at=p.getViewport(We);else{const L=h.getViewSubImage(d,We);at=L.viewport,we===0&&(e.setRenderTargetTextures(b,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(b))}let qe=H[we];qe===void 0&&(qe=new $t,qe.layers.enable(we),qe.viewport=new Ze,H[we]=qe),qe.matrix.fromArray(We.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(We.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(at.x,at.y,at.width,at.height),we===0&&(_.matrix.copy(qe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),fe===!0&&_.cameras.push(qe)}const Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const we=h.getDepthInformation(de[0]);we&&we.isValid&&we.texture&&g.init(e,we,i.renderState)}}for(let de=0;de<x.length;de++){const fe=T[de],Fe=x[de];fe!==null&&Fe!==void 0&&Fe.update(fe,Z,c||o)}oe&&oe(X,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),v=null}const Ye=new $c;Ye.setAnimationLoop(Ne),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const Ti=new En,j0=new De;function $0(s,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Vc(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,b,x,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),h(f,m)):m.isMeshPhongMaterial?(r(f,m),u(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,T)):m.isMeshMatcapMaterial?(r(f,m),v(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),g(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,b,x):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===jt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===jt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const b=e.get(m),x=b.envMap,T=b.envMapRotation;x&&(f.envMap.value=x,Ti.copy(T),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),f.envMapRotation.value.setFromMatrix4(j0.makeRotationFromEuler(Ti)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,b,x){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*b,f.scale.value=x*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,b){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){const b=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Y0(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const T=x.program;n.uniformBlockBinding(b,T)}function c(b,x){let T=i[b.id];T===void 0&&(v(b),T=u(b),i[b.id]=T,b.addEventListener("dispose",f));const P=x.program;n.updateUBOMapping(b,P);const R=e.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function u(b){const x=h();b.__bindingPointIndex=x;const T=s.createBuffer(),P=b.__size,R=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,T),T}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],T=b.uniforms,P=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,E=T.length;R<E;R++){const C=Array.isArray(T[R])?T[R]:[T[R]];for(let H=0,_=C.length;H<_;H++){const M=C[H];if(p(M,R,H,P)===!0){const O=M.__offset,k=Array.isArray(M.value)?M.value:[M.value];let W=0;for(let K=0;K<k.length;K++){const V=k[K],z=g(V);typeof V=="number"||typeof V=="boolean"?(M.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,O+W,M.__data)):V.isMatrix3?(M.__data[0]=V.elements[0],M.__data[1]=V.elements[1],M.__data[2]=V.elements[2],M.__data[3]=0,M.__data[4]=V.elements[3],M.__data[5]=V.elements[4],M.__data[6]=V.elements[5],M.__data[7]=0,M.__data[8]=V.elements[6],M.__data[9]=V.elements[7],M.__data[10]=V.elements[8],M.__data[11]=0):(V.toArray(M.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,M.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,x,T,P){const R=b.value,E=x+"_"+T;if(P[E]===void 0)return typeof R=="number"||typeof R=="boolean"?P[E]=R:P[E]=R.clone(),!0;{const C=P[E];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return P[E]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function v(b){const x=b.uniforms;let T=0;const P=16;for(let E=0,C=x.length;E<C;E++){const H=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,M=H.length;_<M;_++){const O=H[_],k=Array.isArray(O.value)?O.value:[O.value];for(let W=0,K=k.length;W<K;W++){const V=k[W],z=g(V),U=T%P,se=U%z.boundary,ie=U+se;T+=se,ie!==0&&P-ie<z.storage&&(T+=P-ie),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=z.storage}}}const R=T%P;return R>0&&(T+=P-R),b.__size=T,b.__cache={},this}function g(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function f(b){const x=b.target;x.removeEventListener("dispose",f);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class K0{constructor(e={}){const{canvas:t=vf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,f=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=ei,this.toneMappingExposure=1;const x=this;let T=!1,P=0,R=0,E=null,C=-1,H=null;const _=new Ze,M=new Ze;let O=null;const k=new Se(0);let W=0,K=t.width,V=t.height,z=1,U=null,se=null;const ie=new Ze(0,0,K,V),oe=new Ze(0,0,K,V);let Ne=!1;const Ye=new $a;let X=!1,Z=!1;const de=new De,fe=new De,Fe=new w,we=new Ze,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function qe(){return E===null?z:1}let L=n;function sn(S,D){return t.getContext(S,D)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vn}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ue,!1),L===null){const D="webgl2";if(L=sn(D,S),L===null)throw sn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let He,Ke,Le,pt,Ue,A,y,F,$,J,j,ye,re,pe,Je,Q,me,Pe,Ie,ge,Ve,Oe,ut,I;function ce(){He=new tg(L),He.init(),Oe=new z0(L,He),Ke=new Ym(L,He,e,Oe),Le=new O0(L),Ke.reverseDepthBuffer&&Le.buffers.depth.setReversed(!0),pt=new sg(L),Ue=new M0,A=new k0(L,He,Le,Ue,Ke,Oe,pt),y=new Jm(x),F=new eg(x),$=new qf(L),ut=new jm(L,$),J=new ng(L,$,pt,ut),j=new og(L,J,$,pt),Ie=new rg(L,Ke,A),Q=new Km(Ue),ye=new b0(x,y,F,He,Ke,ut,Q),re=new $0(x,Ue),pe=new E0,Je=new L0(He),Pe=new Xm(x,y,F,Le,j,d,l),me=new U0(x,j,Ke),I=new Y0(L,pt,Ke,Le),ge=new $m(L,He,pt),Ve=new ig(L,He,pt),pt.programs=ye.programs,x.capabilities=Ke,x.extensions=He,x.properties=Ue,x.renderLists=pe,x.shadowMap=me,x.state=Le,x.info=pt}ce();const q=new X0(x,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=He.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=He.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(K,V,!1))},this.getSize=function(S){return S.set(K,V)},this.setSize=function(S,D,B=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,V=D,t.width=Math.floor(S*z),t.height=Math.floor(D*z),B===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(K*z,V*z).floor()},this.setDrawingBufferSize=function(S,D,B){K=S,V=D,z=B,t.width=Math.floor(S*B),t.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(ie)},this.setViewport=function(S,D,B,G){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,D,B,G),Le.viewport(_.copy(ie).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(oe)},this.setScissor=function(S,D,B,G){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,D,B,G),Le.scissor(M.copy(oe).multiplyScalar(z).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(S){Le.setScissorTest(Ne=S)},this.setOpaqueSort=function(S){U=S},this.setTransparentSort=function(S){se=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(S=!0,D=!0,B=!0){let G=0;if(S){let N=!1;if(E!==null){const ee=E.texture.format;N=ee===Xo||ee===qo||ee===Wo}if(N){const ee=E.texture.type,le=ee===zn||ee===mi||ee===Cs||ee===Fi||ee===Go||ee===Ho,ve=Pe.getClearColor(),_e=Pe.getClearAlpha(),Ae=ve.r,Re=ve.g,be=ve.b;le?(p[0]=Ae,p[1]=Re,p[2]=be,p[3]=_e,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=Ae,v[1]=Re,v[2]=be,v[3]=_e,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}D&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),pe.dispose(),Je.dispose(),Ue.dispose(),y.dispose(),F.dispose(),j.dispose(),ut.dispose(),I.dispose(),ye.dispose(),q.dispose(),q.removeEventListener("sessionstart",id),q.removeEventListener("sessionend",sd),Li.stop()};function Y(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=pt.autoReset,D=me.enabled,B=me.autoUpdate,G=me.needsUpdate,N=me.type;ce(),pt.autoReset=S,me.enabled=D,me.autoUpdate=B,me.needsUpdate=G,me.type=N}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xe(S){const D=S.target;D.removeEventListener("dispose",Xe),Tt(D)}function Tt(S){Jt(S),Ue.remove(S)}function Jt(S){const D=Ue.get(S).programs;D!==void 0&&(D.forEach(function(B){ye.releaseProgram(B)}),S.isShaderMaterial&&ye.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,G,N,ee){D===null&&(D=We);const le=N.isMesh&&N.matrixWorld.determinant()<0,ve=Rx(S,D,B,G,N);Le.setMaterial(G,le);let _e=B.index,Ae=1;if(G.wireframe===!0){if(_e=J.getWireframeAttribute(B),_e===void 0)return;Ae=2}const Re=B.drawRange,be=B.attributes.position;let rt=Re.start*Ae,mt=(Re.start+Re.count)*Ae;ee!==null&&(rt=Math.max(rt,ee.start*Ae),mt=Math.min(mt,(ee.start+ee.count)*Ae)),_e!==null?(rt=Math.max(rt,0),mt=Math.min(mt,_e.count)):be!=null&&(rt=Math.max(rt,0),mt=Math.min(mt,be.count));const yt=mt-rt;if(yt<0||yt===1/0)return;ut.setup(N,G,ve,B,_e);let rn,nt=ge;if(_e!==null&&(rn=$.get(_e),nt=Ve,nt.setIndex(rn)),N.isMesh)G.wireframe===!0?(Le.setLineWidth(G.wireframeLinewidth*qe()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(N.isLine){let Me=G.linewidth;Me===void 0&&(Me=1),Le.setLineWidth(Me*qe()),N.isLineSegments?nt.setMode(L.LINES):N.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else N.isPoints?nt.setMode(L.POINTS):N.isSprite&&nt.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)nt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))nt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Me=N._multiDrawStarts,Bt=N._multiDrawCounts,it=N._multiDrawCount,Cn=_e?$.get(_e).bytesPerElement:1,ws=Ue.get(G).currentProgram.getUniforms();for(let on=0;on<it;on++)ws.setValue(L,"_gl_DrawID",on),nt.render(Me[on]/Cn,Bt[on])}else if(N.isInstancedMesh)nt.renderInstances(rt,yt,N.count);else if(B.isInstancedBufferGeometry){const Me=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Bt=Math.min(B.instanceCount,Me);nt.renderInstances(rt,yt,Bt)}else nt.render(rt,yt)};function Qe(S,D,B){S.transparent===!0&&S.side===Ht&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,Ao(S,D,B),S.side=Bn,S.needsUpdate=!0,Ao(S,D,B),S.side=Ht):Ao(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),f=Je.get(B),f.init(D),b.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const G=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const ve=ee[le];Qe(ve,B,N),G.add(ve)}else Qe(ee,B,N),G.add(ee)}),b.pop(),f=null,G},this.compileAsync=function(S,D,B=null){const G=this.compile(S,D,B);return new Promise(N=>{function ee(){if(G.forEach(function(le){Ue.get(le).currentProgram.isReady()&&G.delete(le)}),G.size===0){N(S);return}setTimeout(ee,10)}He.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Zt=null;function Jn(S){Zt&&Zt(S)}function id(){Li.stop()}function sd(){Li.start()}const Li=new $c;Li.setAnimationLoop(Jn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(S){Zt=S,q.setAnimationLoop(S),S===null?Li.stop():Li.start()},q.addEventListener("sessionstart",id),q.addEventListener("sessionend",sd),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,E),f=Je.get(S,b.length),f.init(D),b.push(f),fe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ye.setFromProjectionMatrix(fe),Z=this.localClippingEnabled,X=Q.init(this.clippingPlanes,Z),g=pe.get(S,m.length),g.init(),m.push(g),q.enabled===!0&&q.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&$l(ee,D,-1/0,x.sortObjects)}$l(S,D,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(U,se),at=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,at&&Pe.addToRenderList(g,S),this.info.render.frame++,X===!0&&Q.beginShadows();const B=f.state.shadowsArray;me.render(B,S,D),X===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,N=g.transmissive;if(f.setupLights(),D.isArrayCamera){const ee=D.cameras;if(N.length>0)for(let le=0,ve=ee.length;le<ve;le++){const _e=ee[le];od(G,N,S,_e)}at&&Pe.render(S);for(let le=0,ve=ee.length;le<ve;le++){const _e=ee[le];rd(g,S,_e,_e.viewport)}}else N.length>0&&od(G,N,S,D),at&&Pe.render(S),rd(g,S,D);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(x,S,D),ut.resetDefaultState(),C=-1,H=null,b.pop(),b.length>0?(f=b[b.length-1],X===!0&&Q.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function $l(S,D,B,G){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ye.intersectsSprite(S)){G&&we.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const le=j.update(S),ve=S.material;ve.visible&&g.push(S,le,ve,B,we.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ye.intersectsObject(S))){const le=j.update(S),ve=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),we.copy(S.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),we.copy(le.boundingSphere.center)),we.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(ve)){const _e=le.groups;for(let Ae=0,Re=_e.length;Ae<Re;Ae++){const be=_e[Ae],rt=ve[be.materialIndex];rt&&rt.visible&&g.push(S,le,rt,B,we.z,be)}}else ve.visible&&g.push(S,le,ve,B,we.z,null)}}const ee=S.children;for(let le=0,ve=ee.length;le<ve;le++)$l(ee[le],D,B,G)}function rd(S,D,B,G){const N=S.opaque,ee=S.transmissive,le=S.transparent;f.setupLightsView(B),X===!0&&Q.setGlobalState(x.clippingPlanes,B),G&&Le.viewport(_.copy(G)),N.length>0&&To(N,D,B),ee.length>0&&To(ee,D,B),le.length>0&&To(le,D,B),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function od(S,D,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new vi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Ls:zn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ee=f.state.transmissionRenderTarget[G.id],le=G.viewport||_;ee.setSize(le.z,le.w);const ve=x.getRenderTarget();x.setRenderTarget(ee),x.getClearColor(k),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),at&&Pe.render(B);const _e=x.toneMapping;x.toneMapping=ei;const Ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),X===!0&&Q.setGlobalState(x.clippingPlanes,G),To(S,B,G),A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let be=0,rt=D.length;be<rt;be++){const mt=D[be],yt=mt.object,rn=mt.geometry,nt=mt.material,Me=mt.group;if(nt.side===Ht&&yt.layers.test(G.layers)){const Bt=nt.side;nt.side=jt,nt.needsUpdate=!0,ad(yt,B,G,rn,nt,Me),nt.side=Bt,nt.needsUpdate=!0,Re=!0}}Re===!0&&(A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee))}x.setRenderTarget(ve),x.setClearColor(k,W),Ae!==void 0&&(G.viewport=Ae),x.toneMapping=_e}function To(S,D,B){const G=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ee=S.length;N<ee;N++){const le=S[N],ve=le.object,_e=le.geometry,Ae=G===null?le.material:G,Re=le.group;ve.layers.test(B.layers)&&ad(ve,D,B,_e,Ae,Re)}}function ad(S,D,B,G,N,ee){S.onBeforeRender(x,D,B,G,N,ee),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,D,B,G,S,ee),N.transparent===!0&&N.side===Ht&&N.forceSinglePass===!1?(N.side=jt,N.needsUpdate=!0,x.renderBufferDirect(B,D,G,N,S,ee),N.side=Bn,N.needsUpdate=!0,x.renderBufferDirect(B,D,G,N,S,ee),N.side=Ht):x.renderBufferDirect(B,D,G,N,S,ee),S.onAfterRender(x,D,B,G,N,ee)}function Ao(S,D,B){D.isScene!==!0&&(D=We);const G=Ue.get(S),N=f.state.lights,ee=f.state.shadowsArray,le=N.state.version,ve=ye.getParameters(S,N.state,ee,D,B),_e=ye.getProgramCacheKey(ve);let Ae=G.programs;G.environment=S.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(S.isMeshStandardMaterial?F:y).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",Xe),Ae=new Map,G.programs=Ae);let Re=Ae.get(_e);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===le)return cd(S,ve),Re}else ve.uniforms=ye.getUniforms(S),S.onBeforeCompile(ve,x),Re=ye.acquireProgram(ve,_e),Ae.set(_e,Re),G.uniforms=ve.uniforms;const be=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=Q.uniform),cd(S,ve),G.needsLights=Lx(S),G.lightsStateVersion=le,G.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Re,G.uniformsList=null,Re}function ld(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=qr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function cd(S,D){const B=Ue.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Rx(S,D,B,G,N){D.isScene!==!0&&(D=We),A.resetTextureUnits();const ee=D.fog,le=G.isMeshStandardMaterial?D.environment:null,ve=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Nt,_e=(G.isMeshStandardMaterial?F:y).get(G.envMap||le),Ae=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!B.morphAttributes.position,rt=!!B.morphAttributes.normal,mt=!!B.morphAttributes.color;let yt=ei;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(yt=x.toneMapping);const rn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,nt=rn!==void 0?rn.length:0,Me=Ue.get(G),Bt=f.state.lights;if(X===!0&&(Z===!0||S!==H)){const gn=S===H&&G.id===C;Q.setState(G,S,gn)}let it=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Bt.state.version||Me.outputColorSpace!==ve||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==_e||G.fog===!0&&Me.fog!==ee||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Q.numPlanes||Me.numIntersection!==Q.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==Re||Me.morphTargets!==be||Me.morphNormals!==rt||Me.morphColors!==mt||Me.toneMapping!==yt||Me.morphTargetsCount!==nt)&&(it=!0):(it=!0,Me.__version=G.version);let Cn=Me.currentProgram;it===!0&&(Cn=Ao(G,D,N));let ws=!1,on=!1,Yl=!1;const Mt=Cn.getUniforms(),fi=Me.uniforms;if(Le.useProgram(Cn.program)&&(ws=!0,on=!0,Yl=!0),G.id!==C&&(C=G.id,on=!0),ws||H!==S){Ke.reverseDepthBuffer?(de.copy(S.projectionMatrix),xf(de),yf(de),Mt.setValue(L,"projectionMatrix",de)):Mt.setValue(L,"projectionMatrix",S.projectionMatrix),Mt.setValue(L,"viewMatrix",S.matrixWorldInverse);const gn=Mt.map.cameraPosition;gn!==void 0&&gn.setValue(L,Fe.setFromMatrixPosition(S.matrixWorld)),Ke.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),H!==S&&(H=S,on=!0,Yl=!0)}if(N.isSkinnedMesh){Mt.setOptional(L,N,"bindMatrix"),Mt.setOptional(L,N,"bindMatrixInverse");const gn=N.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Mt.setValue(L,"boneTexture",gn.boneTexture,A))}N.isBatchedMesh&&(Mt.setOptional(L,N,"batchingTexture"),Mt.setValue(L,"batchingTexture",N._matricesTexture,A),Mt.setOptional(L,N,"batchingIdTexture"),Mt.setValue(L,"batchingIdTexture",N._indirectTexture,A),Mt.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Mt.setValue(L,"batchingColorTexture",N._colorsTexture,A));const Kl=B.morphAttributes;if((Kl.position!==void 0||Kl.normal!==void 0||Kl.color!==void 0)&&Ie.update(N,B,Cn),(on||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,Mt.setValue(L,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(fi.envMap.value=_e,fi.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(fi.envMapIntensity.value=D.environmentIntensity),on&&(Mt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&Cx(fi,Yl),ee&&G.fog===!0&&re.refreshFogUniforms(fi,ee),re.refreshMaterialUniforms(fi,G,z,V,f.state.transmissionRenderTarget[S.id]),qr.upload(L,ld(Me),fi,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qr.upload(L,ld(Me),fi,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Mt.setValue(L,"center",N.center),Mt.setValue(L,"modelViewMatrix",N.modelViewMatrix),Mt.setValue(L,"normalMatrix",N.normalMatrix),Mt.setValue(L,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const gn=G.uniformsGroups;for(let Jl=0,Px=gn.length;Jl<Px;Jl++){const ud=gn[Jl];I.update(ud,Cn),I.bind(ud,Cn)}}return Cn}function Cx(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Lx(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,D,B){Ue.get(S.texture).__webglTexture=D,Ue.get(S.depthTexture).__webglTexture=B;const G=Ue.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const B=Ue.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){E=S,P=D,R=B;let G=!0,N=null,ee=!1,le=!1;if(S){const _e=Ue.get(S);if(_e.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(_e.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(_e.__hasExternalTextures)A.rebindTextures(S,Ue.get(S.texture).__webglTexture,Ue.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const be=S.depthTexture;if(_e.__boundDepthTexture!==be){if(be!==null&&Ue.has(be)&&(S.width!==be.image.width||S.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(le=!0);const Re=Ue.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?N=Re[D][B]:N=Re[D],ee=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?N=Ue.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[B]:N=Re,_.copy(S.viewport),M.copy(S.scissor),O=S.scissorTest}else _.copy(ie).multiplyScalar(z).floor(),M.copy(oe).multiplyScalar(z).floor(),O=Ne;if(Le.bindFramebuffer(L.FRAMEBUFFER,N)&&G&&Le.drawBuffers(S,N),Le.viewport(_),Le.scissor(M),Le.setScissorTest(O),ee){const _e=Ue.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,B)}else if(le){const _e=Ue.get(S.texture),Ae=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.__webglTexture,B||0,Ae)}C=-1},this.readRenderTargetPixels=function(S,D,B,G,N,ee,le){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(ve=ve[le]),ve){Le.bindFramebuffer(L.FRAMEBUFFER,ve);try{const _e=S.texture,Ae=_e.format,Re=_e.type;if(!Ke.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-G&&B>=0&&B<=S.height-N&&L.readPixels(D,B,G,N,Oe.convert(Ae),Oe.convert(Re),ee)}finally{const _e=E!==null?Ue.get(E).__webglFramebuffer:null;Le.bindFramebuffer(L.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,G,N,ee,le){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(ve=ve[le]),ve){const _e=S.texture,Ae=_e.format,Re=_e.type;if(!Ke.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-G&&B>=0&&B<=S.height-N){Le.bindFramebuffer(L.FRAMEBUFFER,ve);const be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),L.readPixels(D,B,G,N,Oe.convert(Ae),Oe.convert(Re),0);const rt=E!==null?Ue.get(E).__webglFramebuffer:null;Le.bindFramebuffer(L.FRAMEBUFFER,rt);const mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await _f(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(be),L.deleteSync(mt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,B=0){S.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-B),N=Math.floor(S.image.width*G),ee=Math.floor(S.image.height*G),le=D!==null?D.x:0,ve=D!==null?D.y:0;A.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,le,ve,N,ee),Le.unbindTexture()},this.copyTextureToTexture=function(S,D,B=null,G=null,N=0){S.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let ee,le,ve,_e,Ae,Re;B!==null?(ee=B.max.x-B.min.x,le=B.max.y-B.min.y,ve=B.min.x,_e=B.min.y):(ee=S.image.width,le=S.image.height,ve=0,_e=0),G!==null?(Ae=G.x,Re=G.y):(Ae=0,Re=0);const be=Oe.convert(D.format),rt=Oe.convert(D.type);A.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const mt=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),nt=L.getParameter(L.UNPACK_SKIP_ROWS),Me=L.getParameter(L.UNPACK_SKIP_IMAGES),Bt=S.isCompressedTexture?S.mipmaps[N]:S.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,_e),S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Ae,Re,ee,le,be,rt,Bt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Ae,Re,Bt.width,Bt.height,be,Bt.data):L.texSubImage2D(L.TEXTURE_2D,N,Ae,Re,ee,le,be,rt,Bt),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me),N===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,G=null,N=0){S.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,S=arguments[2],D=arguments[3],N=arguments[4]||0);let ee,le,ve,_e,Ae,Re,be,rt,mt;const yt=S.isCompressedTexture?S.mipmaps[N]:S.image;B!==null?(ee=B.max.x-B.min.x,le=B.max.y-B.min.y,ve=B.max.z-B.min.z,_e=B.min.x,Ae=B.min.y,Re=B.min.z):(ee=yt.width,le=yt.height,ve=yt.depth,_e=0,Ae=0,Re=0),G!==null?(be=G.x,rt=G.y,mt=G.z):(be=0,rt=0,mt=0);const rn=Oe.convert(D.format),nt=Oe.convert(D.type);let Me;if(D.isData3DTexture)A.setTexture3D(D,0),Me=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)A.setTexture2DArray(D,0),Me=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Bt=L.getParameter(L.UNPACK_ROW_LENGTH),it=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),ws=L.getParameter(L.UNPACK_SKIP_ROWS),on=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re),S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Me,N,be,rt,mt,ee,le,ve,rn,nt,yt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,N,be,rt,mt,ee,le,ve,rn,yt.data):L.texSubImage3D(Me,N,be,rt,mt,ee,le,ve,rn,nt,yt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ws),L.pixelStorei(L.UNPACK_SKIP_IMAGES,on),N===0&&D.generateMipmaps&&L.generateMipmap(Me),Le.unbindTexture()},this.initRenderTarget=function(S){Ue.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Le.unbindTexture()},this.resetState=function(){P=0,R=0,E=null,Le.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sa?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===_r?"display-p3":"srgb"}}class J0 extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Eu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ea,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new w;class Vs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sl extends cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let os;const Ws=new w,as=new w,ls=new w,cs=new he,qs=new he,Tu=new De,jr=new w,Xs=new w,$r=new w,Au=new he,rl=new he,wu=new he;class Ru extends dt{constructor(e=new sl){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new It;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eu(t,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new Vs(n,3,0,!1)),os.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=os,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Yr(jr.set(-.5,-.5,0),ls,o,as,i,r),Yr(Xs.set(.5,-.5,0),ls,o,as,i,r),Yr($r.set(.5,.5,0),ls,o,as,i,r),Au.set(0,0),rl.set(1,0),wu.set(1,1);let a=e.ray.intersectTriangle(jr,Xs,$r,!1,Ws);if(a===null&&(Yr(Xs.set(-.5,.5,0),ls,o,as,i,r),rl.set(0,1),a=e.ray.intersectTriangle(jr,$r,Xs,!1,Ws),a===null))return;const l=e.ray.origin.distanceTo(Ws);l<e.near||l>e.far||t.push({distance:l,point:Ws.clone(),uv:ln.getInterpolation(Ws,jr,Xs,$r,Au,rl,wu,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Yr(s,e,t,n,i,r){cs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(qs.x=r*cs.x-i*cs.y,qs.y=i*cs.x+r*cs.y):qs.copy(cs),s.copy(e),s.x+=qs.x,s.y+=qs.y,s.applyMatrix4(Tu)}const Cu=new w,Lu=new Ze,Pu=new Ze,Z0=new w,Iu=new De,Kr=new w,ol=new Pn,Du=new De,al=new ks;class Q0 extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ic,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingBox.expandByPoint(Kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingSphere.expandByPoint(Kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(i),e.ray.intersectsSphere(ol)!==!1&&(Du.copy(i).invert(),al.copy(e.ray).applyMatrix4(Du),!(this.boundingBox!==null&&al.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,al)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ic?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Lu.fromBufferAttribute(i.attributes.skinIndex,e),Pu.fromBufferAttribute(i.attributes.skinWeight,e),Cu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Pu.getComponent(r);if(o!==0){const a=Lu.getComponent(r);Iu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Z0.copy(Cu).applyMatrix4(Iu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nu extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uu extends At{constructor(e=null,t=1,n=1,i,r,o,a,l,c=vt,u=vt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fu=new De,ev=new De;class ll{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ev;Fu.multiplyMatrices(a,t[r]),Fu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ll(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Uu(t,e,e,an,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Nu),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class cl extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new De,Ou=new De,Jr=[],Bu=new Vt,tv=new De,js=new Ee,$s=new Pn;class nv extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Bu.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(Bu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),$s.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,us),Ou.multiplyMatrices(n,us),js.matrixWorld=Ou,js.raycast(e,Jr);for(let o=0,a=Jr.length;o<a;o++){const l=Jr[o];l.instanceId=r,l.object=this,t.push(l)}Jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uu(new Float32Array(i*this.count),i,this.count,Vo,_n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ul extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zr=new w,Qr=new w,ku=new De,Ys=new ks,eo=new Pn,hl=new w,zu=new w;class dl extends dt{constructor(e=new It,t=new ul){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Zr.fromBufferAttribute(t,i-1),Qr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zr.distanceTo(Qr);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;ku.copy(i).invert(),Ys.copy(e.ray).applyMatrix4(ku);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let g=p,f=v-1;g<f;g+=c){const m=u.getX(g),b=u.getX(g+1),x=to(this,e,Ys,l,m,b);x&&t.push(x)}if(this.isLineLoop){const g=u.getX(v-1),f=u.getX(p),m=to(this,e,Ys,l,g,f);m&&t.push(m)}}else{const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let g=p,f=v-1;g<f;g+=c){const m=to(this,e,Ys,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=to(this,e,Ys,l,v-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function to(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Zr.fromBufferAttribute(o,i),Qr.fromBufferAttribute(o,r),t.distanceSqToSegment(Zr,Qr,hl,zu)>n)return;hl.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(hl);if(!(l<e.near||l>e.far))return{distance:l,point:zu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Gu=new w,Hu=new w;class Vu extends dl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Gu.fromBufferAttribute(t,i),Hu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gu.distanceTo(Hu);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iv extends dl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wu extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qu=new De,fl=new ks,no=new Pn,io=new w;class sv extends dt{constructor(e=new It,t=new Wu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;qu.copy(i).invert(),fl.copy(e.ray).applyMatrix4(qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,g=p;v<g;v++){const f=c.getX(v);io.fromBufferAttribute(h,f),Xu(io,f,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,g=p;v<g;v++)io.fromBufferAttribute(h,v),Xu(io,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xu(s,e,t,n,i,r,o){const a=fl.distanceSqToPoint(s);if(a<t){const l=new w;fl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ks extends At{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,p=(o-u)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new he:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],r=[],o=[],a=new w,l=new De;for(let p=0;p<=e;p++){const v=p/e;i[p]=this.getTangentAt(v,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Lt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Lt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(i[v],p*v)),o[v].crossVectors(i[v],r[v])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ju extends jn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rv extends ju{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const so=new w,ml=new pl,gl=new pl,vl=new pl;class $u extends jn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(so.subVectors(i[0],i[1]).add(i[0]),c=so);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(so.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=so),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(u),p);g<1e-4&&(g=1),v<1e-4&&(v=g),f<1e-4&&(f=g),ml.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,g,f),gl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,g,f),vl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,g,f)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),gl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),vl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ml.calc(l),gl.calc(l),vl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yu(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function ov(s,e){const t=1-s;return t*t*e}function av(s,e){return 2*(1-s)*s*e}function lv(s,e){return s*s*e}function Js(s,e,t,n){return ov(s,e)+av(s,t)+lv(s,n)}function cv(s,e){const t=1-s;return t*t*t*e}function uv(s,e){const t=1-s;return 3*t*t*s*e}function hv(s,e){return 3*(1-s)*s*s*e}function dv(s,e){return s*s*s*e}function Zs(s,e,t,n,i){return cv(s,e)+uv(s,t)+hv(s,n)+dv(s,i)}class fv extends jn{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,i.x,r.x,o.x,a.x),Zs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pv extends jn{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,i.x,r.x,o.x,a.x),Zs(e,i.y,r.y,o.y,a.y),Zs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mv extends jn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gv extends jn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vv extends jn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Js(e,i.x,r.x,o.x),Js(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ku extends jn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Js(e,i.x,r.x,o.x),Js(e,i.y,r.y,o.y),Js(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _v extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Yu(a,l.x,c.x,u.x,h.x),Yu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var xv=Object.freeze({__proto__:null,ArcCurve:rv,CatmullRomCurve3:$u,CubicBezierCurve:fv,CubicBezierCurve3:pv,EllipseCurve:ju,LineCurve:mv,LineCurve3:gv,QuadraticBezierCurve:vv,QuadraticBezierCurve3:Ku,SplineCurve:_v});class ro extends It{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new w,u=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class hs extends It{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],p=[];let v=0;const g=[],f=n/2;let m=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(p,2));function b(){const T=new w,P=new w;let R=0;const E=(t-e)/n;for(let C=0;C<=r;C++){const H=[],_=C/r,M=_*(t-e)+e;for(let O=0;O<=i;O++){const k=O/i,W=k*l+a,K=Math.sin(W),V=Math.cos(W);P.x=M*K,P.y=-_*n+f,P.z=M*V,h.push(P.x,P.y,P.z),T.set(K,E,V).normalize(),d.push(T.x,T.y,T.z),p.push(k,1-_),H.push(v++)}g.push(H)}for(let C=0;C<i;C++)for(let H=0;H<r;H++){const _=g[H][C],M=g[H+1][C],O=g[H+1][C+1],k=g[H][C+1];e>0&&(u.push(_,M,k),R+=3),t>0&&(u.push(M,O,k),R+=3)}c.addGroup(m,R,0),m+=R}function x(T){const P=v,R=new he,E=new w;let C=0;const H=T===!0?e:t,_=T===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,f*_,0),d.push(0,_,0),p.push(.5,.5),v++;const M=v;for(let O=0;O<=i;O++){const W=O/i*l+a,K=Math.cos(W),V=Math.sin(W);E.x=H*V,E.y=f*_,E.z=H*K,h.push(E.x,E.y,E.z),d.push(0,_,0),R.x=K*.5+.5,R.y=V*.5*_+.5,p.push(R.x,R.y),v++}for(let O=0;O<i;O++){const k=P+O,W=M+O;T===!0?u.push(W,W+1,k):u.push(W+1,W,k),C+=3}c.addGroup(m,C,T===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qs extends hs{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Qs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ds extends It{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new w,d=new w,p=[],v=[],g=[],f=[];for(let m=0;m<=n;m++){const b=[],x=m/n;let T=0;m===0&&o===0?T=.5/t:m===n&&l===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){const R=P/t;h.x=-e*Math.cos(i+R*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+R*r)*Math.sin(o+x*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),f.push(R+T,1-x),b.push(c++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){const x=u[m][b+1],T=u[m][b],P=u[m+1][b],R=u[m+1][b+1];(m!==0||o>0)&&p.push(x,T,R),(m!==n-1||l<Math.PI)&&p.push(T,P,R)}this.setIndex(p),this.setAttribute("position",new ot(v,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _l extends It{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new w,h=new w,d=new w;for(let p=0;p<=n;p++)for(let v=0;v<=i;v++){const g=v/i*r,f=p/n*Math.PI*2;h.x=(e+t*Math.cos(f))*Math.cos(g),h.y=(e+t*Math.cos(f))*Math.sin(g),h.z=t*Math.sin(f),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(v/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=i;v++){const g=(i+1)*p+v-1,f=(i+1)*(p-1)+v-1,m=(i+1)*(p-1)+v,b=(i+1)*p+v;o.push(g,f,b),o.push(f,m,b)}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xl extends It{constructor(e=new Ku(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,l=new w,c=new he;let u=new w;const h=[],d=[],p=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(p,2));function g(){for(let x=0;x<t;x++)f(x);f(r===!1?t:0),b(),m()}function f(x){u=e.getPointAt(x/t,u);const T=o.normals[x],P=o.binormals[x];for(let R=0;R<=i;R++){const E=R/i*Math.PI*2,C=Math.sin(E),H=-Math.cos(E);l.x=H*T.x+C*P.x,l.y=H*T.y+C*P.y,l.z=H*T.z+C*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=t;x++)for(let T=1;T<=i;T++){const P=(i+1)*(x-1)+(T-1),R=(i+1)*x+(T-1),E=(i+1)*x+T,C=(i+1)*(x-1)+T;v.push(P,R,C),v.push(R,E,C)}}function b(){for(let x=0;x<=t;x++)for(let T=0;T<=i;T++)c.x=x/t,c.y=T/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new xl(new xv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class et extends cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yl extends cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function oo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function yv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function bv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ju(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Zu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class er{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Mv extends er{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ki,endingEnd:ki}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zi:r=e,a=2*t-n;break;case vr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zi:o=e,l=2*n-t;break;case vr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,v=(n-t)/(i-t),g=v*v,f=g*v,m=-d*f+2*d*g-d*v,b=(1+d)*f+(-1.5-2*d)*g+(-.5+d)*v+1,x=(-1-p)*f+(1.5+p)*g+.5*v,T=p*f-p*g;for(let P=0;P!==a;++P)r[P]=m*o[u+P]+b*o[c+P]+x*o[l+P]+T*o[h+P];return r}}class Qu extends er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class Sv extends er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Un{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oo(t,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oo(e.times,Array),values:oo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&yv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,p=h+n;for(let v=0;v!==n;++v){const g=t[h+v];if(g!==t[d+v]||g!==t[p+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Un.prototype.TimeBufferType=Float32Array,Un.prototype.ValueBufferType=Float32Array,Un.prototype.DefaultInterpolation=Is;class fs extends Un{constructor(e,t,n){super(e,t,n)}}fs.prototype.ValueTypeName="bool",fs.prototype.ValueBufferType=Array,fs.prototype.DefaultInterpolation=Ps,fs.prototype.InterpolantFactoryMethodLinear=void 0,fs.prototype.InterpolantFactoryMethodSmooth=void 0;class eh extends Un{}eh.prototype.ValueTypeName="color";class ps extends Un{}ps.prototype.ValueTypeName="number";class Ev extends er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ms extends Un{InterpolantFactoryMethodLinear(e){return new Ev(this.times,this.values,this.getValueSize(),e)}}ms.prototype.ValueTypeName="quaternion",ms.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends Un{constructor(e,t,n){super(e,t,n)}}gs.prototype.ValueTypeName="string",gs.prototype.ValueBufferType=Array,gs.prototype.DefaultInterpolation=Ps,gs.prototype.InterpolantFactoryMethodLinear=void 0,gs.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends Un{}vs.prototype.ValueTypeName="vector";class bl{constructor(e="",t=-1,n=[],i=ya){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Av(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=bv(l);l=Ju(l,1,u),c=Ju(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ps(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,v,g){if(p.length!==0){const f=[],m=[];Zu(p,f,m,v),f.length!==0&&g.push(new h(d,f,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)p[d[v].morphTargets[g]]=-1;for(const g in p){const f=[],m=[];for(let b=0;b!==d[v].morphTargets.length;++b){const x=d[v];f.push(x.time),m.push(x.morphTarget===g?1:0)}i.push(new ps(".morphTargetInfluence["+g+"]",f,m))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(vs,p+".position",d,"pos",i),n(ms,p+".quaternion",d,"rot",i),n(vs,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Tv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return eh;case"quaternion":return ms;case"bool":case"boolean":return fs;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Av(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tv(s.type);if(s.times===void 0){const t=[],n=[];Zu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class th{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const wv=new th;class _s{constructor(e){this.manager=e!==void 0?e:wv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class Rv extends Error{constructor(e,t){super(e),this.response=t}}class nh extends _s{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=$n[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,v=p!==0;let g=0;const f=new ReadableStream({start(m){b();function b(){h.read().then(({done:x,value:T})=>{if(x)m.close();else{g+=T.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:p});for(let R=0,E=u.length;R<E;R++){const C=u[R];C.onProgress&&C.onProgress(P)}m.enqueue(T),b()}},x=>{m.error(x)})}}});return new Response(f)}else throw new Rv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{hi.add(e,c);const u=$n[e];delete $n[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=$n[e];if(u===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cv extends _s{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Us("img");function l(){u(),hi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Lv extends _s{constructor(e){super(e)}load(e,t,n,i){const r=new At,o=new Cv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ao extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ih extends ao{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ml=new De,sh=new w,rh=new w;class Sl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(sh),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),Ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pv extends Sl{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Iv extends ao{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Pv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const oh=new De,tr=new w,El=new w;class Dv extends Sl{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(tr),El.copy(n.position),El.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(El),n.updateMatrixWorld(),i.makeTranslation(-tr.x,-tr.y,-tr.z),oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh)}}class nr extends ao{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nv extends Sl{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tl extends ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Nv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ir{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Uv extends _s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return hi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),hi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(e,l),r.manager.itemStart(e)}}class Fv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ah();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ah(){return performance.now()}class Ov{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){bn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;bn.multiplyQuaternionsFlat(e,o,e,t,e,n),bn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Al="\\[\\]\\.:\\/",Bv=new RegExp("["+Al+"]","g"),wl="[^"+Al+"]",kv="[^"+Al.replace("\\.","")+"]",zv=/((?:WC+[\/:])*)/.source.replace("WC",wl),Gv=/(WCOD+)?/.source.replace("WCOD",kv),Hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),Vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),Wv=new RegExp("^"+zv+Gv+Hv+Vv+"$"),qv=["material","materials","bones","map"];class Xv{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bv,"")}static parseTrackName(e){const t=Wv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);qv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=Xv,tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray],tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ki,endingEnd:ki};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case ya:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===zd;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===mc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=zi,i.endingEnd=zi):(e?i.endingStart=this.zeroSlopeAtStart?zi:ki:i.endingStart=vr,t?i.endingEnd=this.zeroSlopeAtEnd?zi:ki:i.endingEnd=vr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const $v=new Float32Array(1);class Yv extends gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=i[h],p=d.name;let v=u[p];if(v!==void 0)++v.referenceCount,o[h]=v;else{if(v=o[h],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,l,p));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;v=new Ov(tt.create(n,p,g),d.ValueTypeName,d.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,l,p),o[h]=v}a[h].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Qu(new Float32Array(2),new Float32Array(2),1,$v),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?bl.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ya),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new jv(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?bl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const lh=new De;class Kv{constructor(e,t,n=0,i=1/0){this.ray=new ks(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lh),this}intersectObject(e,t=!0,n=[]){return Rl(e,this,n,t),n.sort(ch),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Rl(e[i],this,n,t);return n.sort(ch),n}}function ch(s,e){return s.distance-e.distance}function Rl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Rl(r[o],e,t,!0)}}class Jv extends Vu{constructor(e=10,t=10,n=4473924,i=8947848){n=new Se(n),i=new Se(i);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,p=0,v=-a;d<=t;d++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const g=d===r?n:i;g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3}const u=new It;u.setAttribute("position",new ot(l,3)),u.setAttribute("color",new ot(c,3));const h=new ul({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vn}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vn);function uh(s,e){if(e===Hd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ba||e===vc){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ba)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Zv extends _s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new i_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new v_(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ir.extractUrlBase(e);o=ir.resolveURL(c,this.path)}else o=ir.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new nh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hh){try{o[Ge.KHR_BINARY_GLTF]=new __(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new P_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ge.KHR_MATERIALS_UNLIT:o[h]=new t_;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[h]=new x_(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[h]=new y_;break;case Ge.KHR_MESH_QUANTIZATION:o[h]=new b_;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Qv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class e_{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Nt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Tl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nr(u),c.distance=h;break;case"spot":c=new Iv(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class t_{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return An}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}}class n_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class i_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(a,a)}return Promise.all(r)}}class s_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class r_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class o_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class a_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class l_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(a[0],a[1],a[2],Nt),Promise.all(r)}}class c_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class u_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(a[0],a[1],a[2],Nt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(r)}}class h_{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class d_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class f_{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class p_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class m_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class g_{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class v_{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==hn.TRIANGLES&&c.mode!==hn.TRIANGLE_STRIP&&c.mode!==hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const v of h){const g=new De,f=new w,m=new bn,b=new w(1,1,1),x=new nv(v.geometry,v.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&b.fromBufferAttribute(l.SCALE,T),x.setMatrixAt(T,g.compose(f,m,b));for(const T in l)if(T==="_COLOR_0"){const P=l[T];x.instanceColor=new cl(P.array,P.itemSize,P.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&v.geometry.setAttribute(T,l[T]);dt.prototype.copy.call(x,v),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const hh="glTF",sr=12,dh={JSON:1313821514,BIN:5130562};class __{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,sr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-sr,r=new DataView(e,sr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===dh.JSON){const c=new Uint8Array(e,sr+o,a);this.content=n.decode(c)}else if(l===dh.BIN){const c=sr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class x_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Ll[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Ll[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=xs[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(p){for(const v in p.attributes){const g=p.attributes[v],f=l[v];f!==void 0&&(g.normalized=f)}h(p)},a,c,Nt,d)})})}}class y_{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class b_{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class fh extends er{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,v=e*c,g=v-c,f=-2*p+3*d,m=p-d,b=1-f,x=m-d+h;for(let T=0;T!==a;T++){const P=o[g+T+a],R=o[g+T+l]*u,E=o[v+T+a],C=o[v+T]*u;r[T]=b*P+x*R+f*E+m*C}return r}}const M_=new bn;class S_ extends fh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return M_.fromArray(r).normalize().toArray(r),r}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ph={9728:vt,9729:Qt,9984:rc,9985:hr,9986:Rs,9987:kn},mh={33071:ti,33648:ur,10497:Ln},Cl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},E_={CUBICSPLINE:void 0,LINEAR:Is,STEP:Ps},Pl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function T_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new et({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),s.DefaultMaterial}function Ai(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function A_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function w_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R_(s){let e;const t=s.extensions&&s.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Il(t.attributes):e=s.indices+":"+Il(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Il(s.targets[n]);return e}function Il(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Dl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const L_=new De;class P_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Lv(this.options.manager):this.textureLoader=new Uv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new nh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ai(r,a,i),Yn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ir.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Cl[i.type],a=xs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Wt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Cl[i.type],c=xs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,f;if(p&&p!==h){const m=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=t.cache.get(b);x||(g=new c(a,m*p,i.count*p/u),x=new Eu(g,p/u),t.cache.add(b,x)),f=new Vs(x,l,d%p/u,v)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),f=new Wt(g,l,v);if(i.sparse!==void 0){const m=Cl.SCALAR,b=xs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,P=new b(o[1],x,i.sparse.count*m),R=new c(o[2],T,i.sparse.count*l);a!==null&&(f=new Wt(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let E=0,C=P.length;E<C;E++){const H=P[E];if(f.setX(H,R[E*l]),l>=2&&f.setY(H,R[E*l+1]),l>=3&&f.setZ(H,R[E*l+2]),l>=4&&f.setW(H,R[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=v}return f})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=ph[d.magFilter]||Qt,u.minFilter=ph[d.minFilter]||kn,u.wrapS=mh[d.wrapS]||Ln,u.wrapT=mh[d.wrapT]||Ln,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let v=d;t.isImageBitmapLoader===!0&&(v=function(g){const f=new At(g);f.needsUpdate=!0,d(f)}),t.load(ir.resolveURL(h,r.path),v,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Yn(h,o),h.userData.mimeType=o.mimeType||C_(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wu,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ul,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return et}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const h=i[Ge.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Nt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,St)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ht);const u=r.alphaMode||Pl.OPAQUE;if(u===Pl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Pl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==An&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==An&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==An){const h=r.emissiveFactor;a.emissive=new Se().setRGB(h[0],h[1],h[2],Nt)}return r.emissiveTexture!==void 0&&o!==An&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Yn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ai(i,h,r),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=R_(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=gh(new It,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?T_(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,v=u.length;p<v;p++){const g=u[p],f=o[p];let m;const b=c[p];if(f.mode===hn.TRIANGLES||f.mode===hn.TRIANGLE_STRIP||f.mode===hn.TRIANGLE_FAN||f.mode===void 0)m=r.isSkinnedMesh===!0?new Q0(g,b):new Ee(g,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),f.mode===hn.TRIANGLE_STRIP?m.geometry=uh(m.geometry,vc):f.mode===hn.TRIANGLE_FAN&&(m.geometry=uh(m.geometry,ba));else if(f.mode===hn.LINES)m=new Vu(g,b);else if(f.mode===hn.LINE_STRIP)m=new dl(g,b);else if(f.mode===hn.LINE_LOOP)m=new iv(g,b);else if(f.mode===hn.POINTS)m=new sv(g,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&w_(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Yn(m,r),f.extensions&&Ai(i,m,f),t.assignFinalMaterial(m),h.push(m)}for(let p=0,v=h.length;p<v;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Ai(i,h[0],r),h[0];const d=new ft;r.extensions&&Ai(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,v=h.length;p<v;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(gf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Hr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ll(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const p=i.channels[h],v=i.samplers[p.sampler],g=p.target,f=g.node,m=i.parameters!==void 0?i.parameters[v.input]:v.input,b=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(o.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(v),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],v=h[2],g=h[3],f=h[4],m=[];for(let b=0,x=d.length;b<x;b++){const T=d[b],P=p[b],R=v[b],E=g[b],C=f[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const H=n._createAnimationTracks(T,P,R,E,C);if(H)for(let _=0;_<H.length;_++)m.push(H[_])}return new bl(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,L_)});for(let p=0,v=h.length;p<v;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Nu:c.length>1?u=new ft:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Yn(u,r),r.extensions&&Ai(n,u,r),r.matrix!==void 0){const h=new De;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ft;n.name&&(r.name=i.createUniqueName(n.name)),Yn(r,n),n.extensions&&Ai(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof cn||d instanceof At)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];di[r.path]===di.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(di[r.path]){case di.weights:c=ps;break;case di.rotation:c=ms;break;case di.position:case di.scale:c=vs;break;default:switch(n.itemSize){case 1:c=ps;break;case 2:case 3:default:c=vs;break}break}const u=i.interpolation!==void 0?E_[i.interpolation]:Is,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const v=new c(l[d]+"."+di[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Dl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ms?S_:fh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function I_(s,e,t){const n=e.attributes,i=new Vt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){const u=Dl(xs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new w,l=new w;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,v=d.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),d.normalized){const g=Dl(xs[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Pn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function gh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Ll[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return je.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Yn(s,e),I_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?A_(s,e.targets,t):s})}function D_(s){const e=new Map,t=new Map,n=s.clone();return vh(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function vh(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)vh(s.children[n],e.children[n],t)}const lo=globalThis.__FICHIERS__,_h=s=>{if(!lo)return s;const e=s.replace(/^\.\//,""),t=Object.keys(lo).find(n=>e===n||e.endsWith("/"+n));return t?lo[t]:s};class N_{constructor(e){te(this,"templates",new Map);te(this,"clips",new Map);te(this,"placeholders",new Map);te(this,"loader",new Zv(lo?(()=>{const e=new th;return e.setURLModifier(_h),e})():void 0));this.baseUrl=e}setPlaceholder(e,t){this.placeholders.set(e,t)}async load(){const e=[];let t;try{const n=await fetch(_h(`${this.baseUrl}manifest.json`));if(!n.ok)return e;t=await n.json()}catch{return e}return await Promise.all(Object.entries(t.models??{}).map(async([n,i])=>{try{const r=await this.loader.loadAsync(`${this.baseUrl}${i.file}`),o=r.scene;o.scale.setScalar(i.scale??1),o.rotation.y=i.rotY??0,o.traverse(l=>{const c=l;if(!c.isMesh)return;const u=Array.isArray(c.material)?c.material:[c.material];for(const h of u){const d=h.map;d&&(d.magFilter=vt,d.minFilter=vt,d.needsUpdate=!0)}});const a=new ft;a.add(o),this.templates.set(n,a),this.clips.set(n,r.animations??[]),e.push(n)}catch(r){console.warn(`Modèle « ${n} » introuvable ou illisible, forme simple conservée.`,r)}})),e}animations(e){return this.clips.get(e)??[]}has(e){return this.templates.has(e)}create(e){const t=this.templates.get(e);if(t)return D_(t);const n=this.placeholders.get(e);if(n)return n();const i=new Ee(new In(.8,.8,.8),new et({color:16711935}));return i.position.y=.4,i}}const xh={stagiaire:{peau:"#f1c7a5",cheveux:"#5a3a22",coiffure:"epi",haut:"#d6453d",bas:"#34405a",motif:"cravate"},lambda:{peau:"#e8b48f",cheveux:"#2b2b33",coiffure:"chignon",haut:"#7d4bb3",bas:"#3d2a5c",motif:"collier",lunettes:"#c8202a",levres:"#b3264a"},kevin:{peau:"#c98d66",cheveux:"#e3c04a",coiffure:"casquette",accessoire:"#2f8f6b",haut:"#2f8f6b",bas:"#4a6fb3",motif:"manette"},client:{peau:"#f0d2b6",cheveux:"#3a3a3a",coiffure:"chapeau",accessoire:"#3a3a3a",haut:"#b39a6a",bas:"#5a4a35",motif:"impermeable",lunettes:"#111111",noires:!0,moustache:!0}};function co(s){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");s((i,r,o,a=1,l=1)=>{t.fillStyle=o,t.fillRect(i,r,a,l)});const n=new Ks(e);return n.magFilter=vt,n.minFilter=vt,n.colorSpace=St,n}const dn=(s,e)=>{const t=new Se(s);return t.offsetHSL(0,0,e),`#${t.getHexString()}`};function U_(s,e,t){const n=(a,l,c,u=1,h=1)=>{s.fillStyle=c,s.fillRect(a,l,u,h)};n(0,0,e.peau,16,16),(e.coiffure==="epi"||e.coiffure==="court"||e.coiffure==="chignon")&&(n(0,0,e.cheveux,16,3),n(0,3,e.cheveux,2,2),n(14,3,e.cheveux,2,2)),e.coiffure==="epi"&&n(5,3,e.cheveux,3,1),(e.coiffure==="casquette"||e.coiffure==="chapeau")&&(n(0,0,e.accessoire??e.cheveux,16,2),n(0,2,dn(e.accessoire??e.cheveux,-.08),16,1));const i=e.cheveux;t==="fache"?(n(2,4,i,2,1),n(4,5,i,2,1),n(10,5,i,2,1),n(12,4,i,2,1)):t==="surpris"?(n(2,3,i,4,1),n(10,3,i,4,1)):(n(2,4,i,4,1),n(10,4,i,4,1));const r=a=>{if(t==="cligne"||t==="dodo"){n(a,8,"#2a1a14",4,1);return}if(t==="content"){n(a,7,"#2a1a14",4,1),n(a,8,"#2a1a14",1,1),n(a+3,8,"#2a1a14",1,1);return}const l=t==="surpris"?5:4;n(a,5+(t==="surpris"?0:1),"#ffffff",4,l),n(a+1,7,"#1a1a2a",2,2),n(a+1,7,"#ffffff",1,1)};if(r(2),r(10),e.lunettes){const a=e.lunettes;n(1,5,a,6,1),n(9,5,a,6,1),n(1,10,a,6,1),n(9,10,a,6,1),n(1,5,a,1,6),n(6,5,a,1,6),n(9,5,a,1,6),n(14,5,a,1,6),n(7,7,a,2,1),e.noires&&(n(2,6,"#111",4,4),n(10,6,"#111",4,4),n(3,6,"#666",1,1),n(11,6,"#666",1,1))}n(1,11,dn(e.peau,-.07),2,1),n(13,11,dn(e.peau,-.07),2,1),n(7,10,dn(e.peau,-.12),2,2),e.moustache&&n(4,12,e.cheveux,8,1);const o=e.levres??"#7a2a24";t==="content"?(n(5,13,o,6,1),n(4,12,o,1,1),n(11,12,o,1,1)):t==="surpris"?n(7,12,o,2,3):t==="fache"?(n(5,14,o,6,1),n(4,15,o,1,1),n(11,15,o,1,1)):t==="dodo"?n(7,13,o,2,2):n(6,13,o,4,1)}const nn=(s,e,t,n)=>{const i=new Ee(new In(s,e,t),n);return i.castShadow=!0,i},_t=s=>typeof s=="string"?new yl({color:s}):new yl({map:s});function F_(s){const e=new ft,t=new ft;t.name="corps",e.add(t);for(const[g,f]of[["jambe-g",-.1],["jambe-d",.1]]){const m=new ft;m.name=g,m.position.set(f,.34,0);const b=nn(.15,.28,.15,_t(s.bas));b.position.y=-.14;const x=nn(.18,.08,.26,_t("#2b211c"));x.position.set(0,-.3,.04),m.add(b,x),t.add(m)}const n=co(g=>{if(g(0,0,s.haut,16,16),g(0,15,dn(s.haut,-.1),16,1),s.motif==="cravate"&&(g(6,0,"#ffffff",4,3),g(7,2,"#f2c230",2,7),g(6,9,"#f2c230",4,1)),s.motif==="collier"){g(4,0,s.peau,8,3);for(let f=4;f<12;f+=2)g(f,3,"#f5f0e0",1,1);g(3,6,dn(s.haut,.1),1,9),g(12,6,dn(s.haut,.1),1,9)}s.motif==="manette"&&(g(4,6,"#222",8,4),g(5,7,"#e33",1,1),g(10,7,"#3c3",1,1),g(6,8,"#ddd",1,1),g(9,8,"#ddd",1,1)),s.motif==="impermeable"&&(g(7,0,dn(s.haut,-.15),2,16),g(5,5,"#5a4630",1,1),g(5,9,"#5a4630",1,1),g(0,10,dn(s.haut,-.08),16,1))}),i=nn(.46,.42,.3,[_t(s.haut),_t(s.haut),_t(s.haut),_t(s.haut),_t(n),_t(s.haut)]);i.position.y=.55,t.add(i);for(const[g,f]of[["bras-g",-.3],["bras-d",.3]]){const m=new ft;m.name=g,m.position.set(f,.72,0);const b=nn(.13,.32,.13,_t(s.haut));b.position.y=-.15;const x=nn(.14,.11,.14,_t(s.peau));x.position.y=-.35,m.add(b,x),t.add(m)}const r=new ft;r.name="tete",r.position.y=.76,t.add(r);const o=document.createElement("canvas");o.width=16,o.height=16;const a=o.getContext("2d"),l=new Ks(o);l.magFilter=vt,l.minFilter=vt,l.colorSpace=St;const c={expression:"normal",changer(g){this.expression=g,U_(a,s,g),l.needsUpdate=!0}};c.changer("normal");const u=co(g=>{g(0,0,s.peau,16,16),g(0,0,s.cheveux,16,4),g(10,4,s.cheveux,6,5),g(5,8,dn(s.peau,-.08),3,4)}),h=co(g=>{g(0,0,s.cheveux,16,12),g(0,12,s.peau,16,4)}),d=co(g=>{g(0,0,s.cheveux,16,16),g(3,3,dn(s.cheveux,.08),3,2)}),p=.66,v=nn(p,p,p,[_t(u),_t(u),_t(d),_t(s.peau),_t(l),_t(h)]);if(v.position.y=p/2,r.add(v),r.userData.visage=c,s.coiffure==="epi"){const g=nn(.08,.18,.08,_t(s.cheveux));g.position.set(.05,p+.07,-.05),g.rotation.z=-.4,r.add(g)}if(s.coiffure==="chignon"){const g=nn(.28,.24,.28,_t(s.cheveux));g.position.set(0,p+.1,-.12),r.add(g)}if(s.coiffure==="casquette"){const g=nn(p+.04,.14,p+.04,_t(s.accessoire));g.position.y=p+.02,r.add(g);const f=nn(.4,.04,.26,_t(dn(s.accessoire,-.1)));f.position.set(0,p-.02,-p/2-.12),r.add(f)}if(s.coiffure==="chapeau"){const g=nn(p+.3,.05,p+.3,_t(s.accessoire));g.position.y=p+.01,r.add(g);const f=nn(p-.06,.24,p-.06,_t(s.accessoire));f.position.y=p+.14,r.add(f);const m=nn(p-.04,.05,p-.04,_t("#8a2a2a"));m.position.y=p+.06,r.add(m)}return e.userData.visage=c,e}class yh{constructor(e){te(this,"parts",{});te(this,"phase",0);te(this,"ponctuel",null);te(this,"prochainCligne",2+Math.random()*3);te(this,"etat","repos");te(this,"frenesie",!1);this.racine=e;for(const t of["corps","tete","bras-g","bras-d","jambe-g","jambe-d"])this.parts[t]=e.getObjectByName(t)??void 0}get visage(){return this.racine.userData.visage}jouer(e){e==="ramasse"||e==="oui"||e==="non"?this.ponctuel={g:e,t:0,duree:e==="ramasse"?.45:.9}:this.etat=e}maj(e){const{corps:t,tete:n}=this.parts,i=this.parts["bras-g"],r=this.parts["bras-d"],o=this.parts["jambe-g"],a=this.parts["jambe-d"],l=this.frenesie?2.4:1;this.phase+=e*(this.etat==="marche"?11*l:2.2);const c=Math.sin(this.phase);let u=0,h=0,d=0,p=0,v=0,g=0,f=0,m=0,b=0,x=0,T=0;switch(this.etat){case"repos":f=Math.abs(c)*.012,d=c*.05,p=-c*.05,T=c*.03;break;case"marche":{const E=this.frenesie?1:.6;u=c*E,h=-c*E,d=-c*E*.9,p=c*E*.9,f=Math.abs(c)*(this.frenesie?.16:.05),T=this.frenesie?Math.sin(this.phase*.5)*.18:c*.04,this.frenesie&&(v=-.6-Math.abs(c)*.5,g=.6+Math.abs(c)*.5,m=.18);break}case"porte":{u=c*(this.frenesie?.9:.5),h=-u,d=-1.3,p=-1.3,f=Math.abs(c)*(this.frenesie?.12:.04),this.phase+=e*9*l;break}case"assis":u=-1.5,h=-1.5,f=-.24,d=-.4,p=-.4,b=.35;break;case"tombe":m=-1.45,f=.1,d=-2.6,p=-2.6;break}if(this.ponctuel){const E=this.ponctuel;E.t+=e*(this.frenesie?2:1);const C=Math.min(1,E.t/E.duree),H=Math.sin(C*Math.PI);E.g==="ramasse"&&(m+=H*.55,d-=H*1.2,p-=H*1.2),E.g==="oui"&&(b+=Math.sin(C*Math.PI*4)*.35),E.g==="non"&&(x+=Math.sin(C*Math.PI*4)*.5),C>=1&&(this.ponctuel=null)}const P=(E,C,H)=>{E&&(E.rotation[C]+=(H-E.rotation[C])*Math.min(1,e*18))};P(o,"x",u),P(a,"x",h),P(i,"x",d),P(r,"x",p),P(i,"z",v),P(r,"z",g),P(n,"x",b),P(n,"y",x),P(n,"z",T),P(t,"x",m),t&&(t.position.y+=(f-t.position.y)*Math.min(1,e*18));const R=this.visage;R&&(R.expression==="normal"||R.expression==="cligne")&&(this.prochainCligne-=e,this.prochainCligne<0&&R.expression==="normal"?(R.changer("cligne"),this.prochainCligne=.12):this.prochainCligne<0&&(R.changer("normal"),this.prochainCligne=2+Math.random()*3.5))}}function O_(s,e,t,n={}){const i=new K0({canvas:s,antialias:!1,powerPreference:"low-power"});i.setPixelRatio(Math.min(window.devicePixelRatio,1.5));const r=new J0;r.background=new Se(n.background??1909552);const o=new Hr(-1,1,1,-1,.1,200),a=(e-1)/2,l=(t-1)/2;if(o.position.set(a+20,22,l+20),o.lookAt(a,0,l),n.lights!==!1){r.add(new ih(16777215,3359829,1.1));const h=new Tl(16777215,1.2);h.position.set(6,12,4),r.add(h)}if(n.floor!==!1){const h=new Ee(new bt(e+4,t+4),new et({color:2765122}));h.rotation.x=-Math.PI/2,h.position.set(a,-.01,l),r.add(h);const d=new Jv(Math.max(e,t)+4,Math.max(e,t)+4,4477034,3489106);d.position.set(a+(Math.max(e,t)%2===0?.5:0),0,l+(Math.max(e,t)%2===0?.5:0)),r.add(d)}const c=Math.max(e,t)*.75+2;function u(){const h=s.clientWidth||800,d=s.clientHeight||600;i.setSize(h,d,!1);const p=h/d;o.left=-c*p,o.right=c*p,o.top=c,o.bottom=-c,o.updateProjectionMatrix()}return u(),{scene:r,camera:o,renderer:i,render:()=>i.render(r,o),resize:u}}class Ct extends Error{constructor(e,t,n,i,r=0){super(`${e}: ${t}`),this.type=e,this.msg=t,this.gag=n,this.nom=i,this.ligne=r}}function Kn(s="invalid syntax",e){return new Ct("SyntaxError",s,e)}function B_(s){const e=[];let t=0;for(;t<s.length;){const n=s[t];if(n===" "||n==="	"){t++;continue}if(n==="#")break;if(/[0-9]/.test(n)){let i=t;for(;i<s.length&&/[0-9]/.test(s[i]);)i++;e.push({t:"int",v:parseInt(s.slice(t,i),10)}),t=i;continue}if(/[A-Za-z_À-ÿ]/.test(n)){let i=t;for(;i<s.length&&/[A-Za-z_0-9À-ÿ]/.test(s[i]);)i++;e.push({t:"name",v:s.slice(t,i)}),t=i;continue}if(n==='"'||n==="'"){let i=t+1,r="";for(;i<s.length&&s[i]!==n;)r+=s[i],i++;if(i>=s.length)throw Kn("unterminated string literal","G03");e.push({t:"str",v:r}),t=i+1;continue}if("+-*(),=".includes(n)){e.push({t:"op",v:n}),t++;continue}throw Kn(`invalid character '${n}'`)}return e}function uo(s,e){const t=B_(s);try{return k_(t,e)}catch(n){const i=t.filter(o=>o.t==="op"&&o.v==="(").length,r=t.filter(o=>o.t==="op"&&o.v===")").length;throw n instanceof Ct&&!n.gag&&i>r?Kn("'(' was never closed","G02"):n}}function k_(s,e){var h,d,p;let t=0;const n=v=>{var g;return((g=s[t])==null?void 0:g.t)==="op"&&s[t].v===v},i=v=>{if(!n(v))throw t>=s.length?Kn("'(' was never closed","G02"):Kn();t++};function r(){let v=o();for(;n("+")||n("-");)v={k:"bin",op:s[t++].v,l:v,r:o()};return v}function o(){let v=a();for(;n("*");)t++,v={k:"bin",op:"*",l:v,r:a()};return v}function a(){var g;const v=s[t++];if(!v)throw Kn();if(v.t==="int")return{k:"num",v:v.v};if(v.t==="str"){let f=v.v;for(;((g=s[t])==null?void 0:g.t)==="str";)f+=s[t++].v;return{k:"str",v:f}}if(v.t==="op"&&v.v==="-")return{k:"neg",e:a()};if(v.t==="op"&&v.v==="("){const f=r();return i(")"),f}if(v.t==="name"){if(n("(")){t++;const f=[];if(!n(")"))for(f.push(r());n(",");)t++,f.push(r());return i(")"),{k:"call",name:v.v,args:f}}return{k:"name",v:v.v}}throw Kn()}if(!s.length)return null;if(s.length===1&&s[0].t==="name"&&s[0].v==="pass")return{k:"pass",line:e};let l=0;const c=[];for(;((h=s[l])==null?void 0:h.t)==="name";){if(c.push(s[l].v),l++,((d=s[l])==null?void 0:d.t)==="op"&&s[l].v===","){l++;continue}break}if(c.length&&((p=s[l])==null?void 0:p.t)==="op"&&s[l].v==="="){t=l+1;const v=[r()];for(;n(",");)t++,v.push(r());if(t<s.length)throw Kn();return{k:"assign",targets:c,vals:v,line:e}}t=0;const u=r();if(t<s.length)throw Kn();return{k:"expr",e:u,line:e}}function bh(s){const e=[];return s.forEach((t,n)=>{try{const i=uo(t,n);i&&e.push(i)}catch(i){throw i instanceof Ct&&(i.ligne=n),i}}),e}const ys=s=>s===null?"NoneType":typeof s=="number"?"int":"str",Ut=s=>s===null?"None":String(s),rr=s=>typeof s=="string"?`'${s}'`:Ut(s);function z_(s,e){const t=[];for(let n=0;n<=s.length;n++)t.push([n]);for(let n=1;n<=e.length;n++)t[0][n]=n;for(let n=1;n<=s.length;n++)for(let i=1;i<=e.length;i++)t[n][i]=Math.min(t[n-1][i]+1,t[n][i-1]+1,t[n-1][i-1]+(s[n-1]===e[i-1]?0:1));return t[s.length][e.length]}const Mh=500;function Sh(s,e){const t={},n=e.slice(),i=[],r=[];let o=0;const a=new Set;s.forEach(f=>{f.k==="assign"&&f.targets.forEach(m=>a.add(m))});const l=f=>r.push({...f,env:{...t},belt:n.slice(),out:i.slice()});function c(f,m){let b;if(a.has(f))b="G10";else{const x=[...Object.keys(t),...a];f.length>=3&&x.some(T=>T!==f&&z_(T,f)<=2)?b="G11":m&&f.length>=3?b="G12":b="G10"}return new Ct("NameError",`name '${f}' is not defined`,b,f)}const u=(f,m,b)=>new Ct("TypeError",f==="+"&&typeof m=="string"?`can only concatenate str (not "${ys(b)}") to str`:`unsupported operand type(s) for ${f}: '${ys(m)}' and '${ys(b)}'`,"G16");function h(f,m,b){if(f==="+"){if(typeof m=="number"&&typeof b=="number"||typeof m=="string"&&typeof b=="string")return m+b;throw u(f,m,b)}if(f==="-"){if(typeof m=="number"&&typeof b=="number")return m-b;throw u(f,m,b)}if(typeof m=="number"&&typeof b=="number")return m*b;if(typeof m=="string"&&typeof b=="number")return m.repeat(Math.max(0,b));if(typeof m=="number"&&typeof b=="string")return b.repeat(Math.max(0,m));throw new Ct("TypeError",`can't multiply sequence by non-int of type '${ys(b)}'`,"G16")}function d(f,m,b=!1){switch(f.k){case"num":case"str":return f.v;case"neg":{const x=d(f.e,m);if(typeof x!="number")throw new Ct("TypeError",`bad operand type for unary -: '${ys(x)}'`,"G16");return-x}case"name":if(!(f.v in t))throw c(f.v,b);return t[f.v];case"bin":return h(f.op,d(f.l,m),d(f.r,m));case"call":return p(f,m)}}function p(f,m){if(f.name==="recevoir"){if(f.args.length)throw new Ct("TypeError",`recevoir() takes 0 positional arguments but ${f.args.length} were given`,"G19");if(!n.length)throw new Ct("TapisVide","recevoir() : le tapis d'arrivée est vide","G47");const b=n.shift();return l({act:"recevoir",value:b,line:m}),b}if(f.name==="envoyer"){if(f.args.length!==1)throw new Ct("TypeError",f.args.length?`envoyer() takes 1 positional argument but ${f.args.length} were given`:"envoyer() missing 1 required positional argument: 'colis'","G19");const b=d(f.args[0],m,!0);return i.push({kind:"colis",v:b}),l({act:"envoyer",value:b,line:m}),null}if(f.name==="print"){const b=f.args.map(x=>Ut(d(x,m,!0))).join(" ");return i.push({kind:"feuille",v:b}),l({act:"print",value:b,line:m}),null}throw f.name==="Print"?new Ct("NameError","name 'Print' is not defined","G13","Print"):c(f.name,!1)}let v=null,g;try{for(g of s){if(o++,o>Mh)throw new Ct("Boucle","trop de pas","G36");if(l({act:"debut",line:g.line}),g.k==="pass"){l({act:"rien",line:g.line});continue}if(g.k==="expr"){d(g.e,g.line),g.e.k!=="call"&&l({act:"rien",line:g.line});continue}const f=g.vals.map(m=>d(m,g.line));if(g.targets.length!==f.length)throw f.length===1?new Ct("TypeError",`cannot unpack non-iterable ${ys(f[0])} object`):new Ct("ValueError",g.targets.length<f.length?`too many values to unpack (expected ${g.targets.length})`:`not enough values to unpack (expected ${g.targets.length}, got ${f.length})`);g.targets.forEach((m,b)=>t[m]=f[b]),l({act:"assign",names:g.targets.slice(),line:g.line})}}catch(f){if(!(f instanceof Ct))throw f;f.ligne=g?g.line:0,v=f,l({act:"erreur",error:f,line:f.ligne})}return l({act:"fin",line:-1}),{trace:r,out:i,error:v,steps:Math.min(o,Mh)}}const fn=s=>s.map(e=>e.v),bs=(s,e)=>s.length===e.length&&s.every((t,n)=>t===e[n]),G_=(s,e)=>s.length===e.length&&s.every((t,n)=>t.kind===e[n].kind&&t.v===e[n].v),Ms=s=>s.out.every(e=>{var t;return e.kind===(((t=s.expected[0])==null?void 0:t.kind)??"colis")}),Nl={G54:s=>{const e=fn(s.out),t=fn(s.expected),n=t.slice().reverse();return Ms(s)&&t.length>=2&&bs(e,n)&&!bs(t,n)},G55:s=>{const e=fn(s.out),t=fn(s.expected);return Ms(s)&&t.length>0&&e.length===2*t.length&&t.every((n,i)=>e[2*i]===n&&e[2*i+1]===n)},G72:s=>{const e=fn(s.out),t=fn(s.expected);return Ms(s)&&e.length>0&&s.inputs.length>0&&e.every(n=>s.inputs.includes(n)&&!t.includes(n))},G20:s=>Ms(s)&&s.out.some(e=>typeof e.v=="string")&&s.expected.every(e=>typeof e.v=="number"),G57:s=>Ms(s)&&s.inputs.length>0&&bs(fn(s.out),s.inputs)&&!bs(fn(s.expected),s.inputs),G58:s=>{const e=fn(s.out),t=fn(s.expected);return Ms(s)&&e.length===t.length&&e.length>=2&&e.every(n=>n===e[0])&&!t.every(n=>n===t[0])}};function H_(s,e){var n,i;for(const r of s.logic)if((n=Nl[r])!=null&&n.call(Nl,e))return r;return(((i=e.expected[0])==null?void 0:i.kind)??"colis")==="colis"&&e.out.length&&e.out.every(r=>r.kind==="feuille")&&bs(fn(e.out),fn(e.expected).map(Ut))?"G51":e.out.length>e.expected.length?"G49":e.out.length<e.expected.length?"G50":"G48"}function Eh(s){let e=s>>>0;const t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296},n={int:(i,r)=>i+Math.floor(t()*(r-i+1)),distinct:(i,r,o)=>{const a=[];for(;a.length<i;){const l=n.int(r,o);a.includes(l)||a.push(l)}return a}};return n}function V_(s,e){const t=Eh(e),n=[s.example.slice()];if(!s.gen)return n;for(let i=0;n.length<4&&i<200;i++){const r=s.gen(t);n.some(o=>bs(o,r))||n.push(r)}return n}function W_(s,e,t,n){const i={results:[],shown:null,blocks:n,steps:0};let r;try{r=bh(e)}catch(u){if(!(u instanceof Ct))throw u;return{...i,status:"gag",gag:u.gag??"G46",error:u}}if(n===0)return{...i,status:"gag",gag:"G52"};const o=V_(s,t).map(u=>{const h=Sh(r,u),d=s.expected(u).map(p=>({kind:s.expectKind,v:p}));return{...h,inputs:u,expected:d,pass:!h.error&&G_(h.out,d)}}),a={...i,results:o,steps:o[0].steps},l=o.findIndex(u=>u.error);if(l>=0)return{...a,status:"gag",gag:o[l].error.gag??"G46",error:o[l].error,shown:l};const c=o.filter(u=>u.pass).length;return c===o.length?{...a,status:"ok",shown:0}:c>0?{...a,status:"gag",gag:"G53",shown:o.findIndex(u=>!u.pass)}:{...a,status:"gag",gag:H_(s,o[0]),shown:0}}const Th=["Georgia, serif","Impact, sans-serif","'Courier New', monospace","'Arial Black', sans-serif","'Times New Roman', serif","Verdana, sans-serif"],Ah=["#fdf6e3","#ffe9a8","#d7ecff","#ffd1dc","#e3f6d3","#f1f1f1","#222222"],q_=["#1d1d1d","#b3261e","#1d3f8a","#1d1d1d","#6a1b9a","#1d1d1d","#fff4d6"];function ho(s){const e=Math.abs(Math.imul(s+7,2654435761))>>>0,t=e%Ah.length;return{police:Th[(e>>>3)%Th.length],fond:Ah[t],encre:q_[t],angle:(e>>>7)%13-6}}function X_(s,e,t,n,i,r=0){let o=t;return[...e].forEach((a,l)=>{if(a===" "){o+=i*.4;return}const c=ho(r*31+l);s.save(),s.font=`bold ${Math.round(i*.78)}px ${c.police}`;const u=Math.max(s.measureText(a).width+i*.22,i*.5);s.translate(o+u/2,n+i/2),s.rotate(c.angle*Math.PI/180),s.fillStyle=c.fond,s.fillRect(-u/2,-i/2,u,i),s.fillStyle=c.encre,s.textAlign="center",s.textBaseline="middle",s.fillText(a,0,i*.04),s.restore(),o+=u+i*.06}),o-t}function or(s,e){const n=new Vt().setFromObject(s).getSize(new w);let i=1;e.h?i=e.h/n.y:e.l&&(i=e.l/Math.max(n.x,n.z)),s.scale.multiplyScalar(i);const r=new Vt().setFromObject(s),o=r.getCenter(new w),a=new ft;return s.position.sub(new w(o.x,r.min.y,o.z)),a.add(s),a}const lt=(s,e={})=>new et({color:s,roughness:.85,...e});function $e(s,e,t,n){const i=new Ee(new In(s,e,t),n);return i.position.y=e/2,i.castShadow=!0,i.receiveShadow=!0,i}function pn(s,e,t){const n=document.createElement("canvas");n.width=s,n.height=e,t(n.getContext("2d"));const i=new Ks(n);return i.colorSpace=St,i.anisotropy=4,i}function Ft(s,e){return new Promise(t=>{if(s<=0){e(1),t();return}const n=performance.now(),i=()=>{const r=Math.min(1,(performance.now()-n)/s);e(r),r<1?requestAnimationFrame(i):t()};requestAnimationFrame(i)})}const fo=s=>s*s*(3-2*s);function j_(){const s=pn(128,64,e=>{e.fillStyle="#26272b",e.fillRect(0,0,128,64),e.fillStyle="#1b1c1f",e.fillRect(0,0,128,5),e.fillRect(0,59,128,5),e.fillStyle="#6a6f77",e.beginPath(),e.moveTo(40,12),e.lineTo(78,32),e.lineTo(40,52),e.lineTo(56,52),e.lineTo(94,32),e.lineTo(56,12),e.fill()});return s.wrapS=Ln,s}function $_(s){let e=s*9301+49297;return()=>(e=(e*9301+49297)%233280,e/233280)}function Y_(){const s=pn(512,512,e=>{e.fillStyle="#c9b8a2",e.fillRect(0,0,512,512);const t=64,n=24,i=4;for(let r=0;r*n<512;r++){const o=r%2?t/2:0;for(let a=-1;a*t<512;a++){const l=(r*31+a*17)%7,c=["#8e3b2a","#9c4430","#a54d35","#86392a","#b0583c","#7e3426","#9a4a36"];e.fillStyle=c[(l+7)%7];const u=a*t+o+i/2,h=r*n+i/2;e.fillRect(u,h,t-i,n-i),e.fillStyle="rgba(255,255,255,.08)",e.fillRect(u,h,t-i,3),e.fillStyle="rgba(0,0,0,.12)",e.fillRect(u,h+n-i-3,t-i,3)}}});return s.wrapS=s.wrapT=Ln,s}const Ul='"Oswald", "Arial Narrow", "Roboto Condensed", Impact, sans-serif';function po(s,e=3.6,t=!0){const i=Math.round(160*e);return pn(i,160,r=>{r.fillStyle="#3a3e44",r.fillRect(0,0,i,160),r.fillStyle="#2c2f34",r.fillRect(0,138,i,22),r.fillStyle="#ff8c1a",r.fillRect(0,146,i,8);let o=26;if(t){r.fillStyle="#ff8c1a",r.fillRect(0,0,118,146),r.fillStyle="#3a3e44";for(const c of[26,58])r.beginPath(),r.moveTo(c,34),r.lineTo(c+26,146/2),r.lineTo(c,112),r.lineTo(c+12,112),r.lineTo(c+38,146/2),r.lineTo(c+12,34),r.fill();o=140}r.fillStyle="#eef0f2",r.textAlign="left",r.textBaseline="middle";let a=104;const l=()=>`600 ${a}px ${Ul}`;for(r.font=l();r.measureText(s).width>i-o-26&&a>28;)a-=4,r.font=l();"letterSpacing"in r&&(r.letterSpacing="4px"),r.fillText(s,o,146/2+4),r.fillStyle="#8d939b";for(const[c,u]of[[i-14,12],[i-14,124]])r.beginPath(),r.arc(c,u,5,0,Math.PI*2),r.fill()})}function K_(s){return pn(256,128,e=>{e.fillStyle="#ff8c1a",e.fillRect(0,0,256,128),e.fillStyle="#3a3e44",e.fillRect(8,8,240,112),e.fillStyle="#ff8c1a",e.textAlign="center",e.textBaseline="middle";let t=96;for(e.font=`600 ${t}px ${Ul}`;e.measureText(s).width>220&&t>30;)t-=6,e.font=`600 ${t}px ${Ul}`;e.fillText(s,128,70)})}const gt=s=>new Promise(e=>setTimeout(e,s));function J_(s,e){s.clearRect(0,0,16,8);const t=(r,o,a,l=1,c=1)=>{s.fillStyle=a,s.fillRect(r,o,l,c)},n="#2a1a14";e==="fache"&&(t(1,0,n,3,1),t(4,1,n,2,1),t(10,1,n,2,1),t(12,0,n,3,1));const i=r=>{if(e==="cligne"||e==="dodo"){t(r,5,"#2a1a14",6,1);return}if(e==="content"){t(r+1,3,"#2a1a14",4,1),t(r,4,"#2a1a14",1,1),t(r+5,4,"#2a1a14",1,1);return}const o=e==="surpris"?0:1;t(r+1,o,"#2a1a14",4,1),t(r+1,o+1,"#ffffff",4,1),t(r,o+2,"#ffffff",6,5-o),t(r+1,7,"#ffffff",4,1),e==="surpris"?t(r+2,3,"#1a1a2a",2,2):(t(r+2,3,"#1a1a2a",3,4),t(r+2,3,"#ffffff",1,1))};i(1),i(9)}function Z_(s){const e=s.getObjectByName("head");for(const c of["leg-left","leg-right"]){const u=s.getObjectByName(c);u!=null&&u.isMesh&&(u.geometry=u.geometry.clone(),u.geometry.scale(1,.7,1))}if(!(e!=null&&e.isMesh))return null;e.geometry=e.geometry.clone(),e.geometry.scale(1.55,1.55,1.55);const t=new Vt().setFromBufferAttribute(e.geometry.getAttribute("position")),n=document.createElement("canvas");n.width=16,n.height=8;const i=n.getContext("2d"),r=new Ks(n);r.magFilter=vt,r.minFilter=vt,r.colorSpace=St;const o=(t.max.x-t.min.x)*.86,a=new Ee(new bt(o,o/2),new yl({map:r,transparent:!0,alphaTest:.5}));a.position.set(0,t.min.y+(t.max.y-t.min.y)*.5,t.max.z+.02),e.add(a);const l=c=>{J_(i,c),r.needsUpdate=!0};return l("normal"),l}const Q_={idle:"repos",walk:"marche","holding-right":"porte","pick-up":"ramasse","emote-yes":"oui","emote-no":"non",sit:"assis",die:"tombe"};class ex{constructor(e,t,n){te(this,"racine",new ft);te(this,"interieur");te(this,"mixer",null);te(this,"clips",new Map);te(this,"courante",null);te(this,"gestes",null);te(this,"yeux",null);te(this,"expr","normal");te(this,"cligne",2+Math.random()*3);te(this,"enMarche",!1);te(this,"t",0);te(this,"porte",null);te(this,"frenesie",!1);let i;if(e.has(t)){i=e.create(t),this.yeux=Z_(i);for(const r of e.animations(t))this.clips.set(r.name,r);this.clips.size||(this.gestes=new yh(i))}else i=F_(xh[t]??xh.stagiaire),this.gestes=new yh(i);this.interieur=or(i,{h:n}),this.interieur.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),this.racine.add(this.interieur),this.clips.size&&(this.mixer=new Yv(i)),this.jouer("idle")}jouer(e,t=!1){if(this.enMarche=e==="walk"||e==="holding-right",this.gestes){this.gestes.jouer(Q_[e]??"repos");return}const n=this.clips.get(e);if(!n||!this.mixer)return;const i=this.mixer.clipAction(n);this.courante===i&&!t||(i.reset(),i.setLoop(t?mc:gc,1/0),i.clampWhenFinished=t,this.courante&&i.crossFadeFrom(this.courante,.15,!1),i.play(),this.courante=i)}expression(e){var t,n;this.expr=e,this.gestes?(t=this.gestes.visage)==null||t.changer(e):(n=this.yeux)==null||n.call(this,e)}maj(e){this.t+=e,this.mixer&&(this.mixer.timeScale=this.frenesie?2.6:1,this.mixer.update(e)),this.gestes&&(this.gestes.frenesie=this.frenesie,this.gestes.maj(e));const t=this.frenesie&&this.enMarche?Math.abs(Math.sin(this.t*22))*.16:0;this.interieur.position.y+=(t-this.interieur.position.y)*Math.min(1,e*25),this.interieur.rotation.x+=((this.frenesie&&this.enMarche?.18:0)-this.interieur.rotation.x)*Math.min(1,e*10),this.yeux&&this.expr==="normal"&&(this.cligne-=e,this.cligne<0&&(this.yeux("cligne"),this.cligne<-.12&&(this.yeux("normal"),this.cligne=2+Math.random()*3.5)))}regarder(e,t){const n=e-this.racine.position.x,i=t-this.racine.position.z;Math.abs(n)+Math.abs(i)>.01&&(this.racine.rotation.y=Math.atan2(n,i))}async aller(e,t,n){const i=this.racine.position.clone(),r=Math.hypot(e-i.x,t-i.z);r<.05||(this.regarder(e,t),this.jouer(this.porte?"holding-right":"walk"),await Ft(r/3.2*1e3*n,o=>{this.racine.position.x=i.x+(e-i.x)*o,this.racine.position.z=i.z+(t-i.z)*o}),this.jouer(this.porte?"holding-right":"idle"))}prendre(e){this.porte=e,this.racine.add(e),e.position.set(0,.85,.42),e.rotation.set(0,0,0),this.jouer("holding-right")}lacher(){const e=this.porte;if(this.porte=null,e){const t=new w;e.getWorldPosition(t),this.racine.remove(e),e.position.copy(t)}return this.jouer("idle"),e}}const Fl={nom:15921919,texte:16764723,guillemet:16753951,nombre:4169215,symbole:16740188,espace:12169893,repos:16773590,erreur:16719904},Ot=3,Yt=3.9,mo=1.2,Fn=9.6,go=3,ct=new w(7.4,0,1.3);class tx{constructor(e,t){te(this,"stage");te(this,"cat",new N_("./assets/models/"));te(this,"acteurs",new Map);te(this,"horloge",new Fv);te(this,"lampeMat");te(this,"lampeLum");te(this,"visage");te(this,"dynamique",new ft);te(this,"places",4);te(this,"tapis",[]);te(this,"attente",[]);te(this,"tuiles",new Map);te(this,"surTable",new Map);te(this,"placesTable",[]);te(this,"tableZone",new Vt);te(this,"depart",[]);te(this,"feuilles",[]);te(this,"sol",[]);te(this,"fx",new ft);te(this,"degatsObj",{});te(this,"tremblement",0);te(this,"camBase",new w);te(this,"bulles",[]);te(this,"raycaster",new Kv);te(this,"vitesse",1);te(this,"impr");te(this,"surImpression",null);te(this,"surChoc",null);te(this,"tuyau");te(this,"coudes",[]);te(this,"placesOublies",[]);te(this,"nbOublies",0);te(this,"casiers",new Map);te(this,"placesCasiers",[]);te(this,"bandes",{entree:{tex:null,jusqua:0,vitesse:0},sortie:{tex:null,jusqua:0,vitesse:0}});this.canvas=e,this.calque=t,this.stage=O_(e,14,9,{floor:!1,lights:!1,background:2827296});const n=this.stage.renderer;n.shadowMap.enabled=!0,n.shadowMap.type=ec,new ResizeObserver(()=>this.cadrer()).observe(e),this.camBase.copy(this.stage.camera.position)}cadrer(){this.stage.resize();const e=this.stage.camera,t=e.right-e.left,n=e.top-e.bottom;e.zoom=Math.min(t/19,n/12.5),e.updateProjectionMatrix()}async charger(){await this.cat.load();try{await Promise.race([document.fonts.load('600 80px "Oswald"'),gt(2500)])}catch{}this.construireDecor(),this.stage.scene.add(this.dynamique,this.fx);const e=()=>{const t=Math.min(.05,this.horloge.getDelta());for(const n of this.acteurs.values())n.maj(t);this.animerFx(t),this.majBulles(),this.stage.render(),requestAnimationFrame(e)};e()}modele(e,t,n,i,r=0){const o=or(this.cat.create(e),t);return o.position.set(n,0,i),o.rotation.y=r,o.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.stage.scene.add(o),o}construireDecor(){const e=this.stage.scene;e.add(new ih(16774368,3813160,.9));const t=new Tl(16773336,1.4);t.position.set(10,16,12),t.castShadow=!0,t.shadow.mapSize.set(1024,1024);const n=t.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,t.target.position.set(7,0,4.5),e.add(t,t.target);const i=pn(256,256,z=>{for(let U=0;U<8;U++)z.fillStyle=U%2?"#a77b52":"#b98a5e",z.fillRect(0,U*32,256,32),z.fillStyle="#8a6240",z.fillRect(U*97%200+20,U*32,2,32),z.fillRect(0,U*32+31,256,1)});i.wrapS=i.wrapT=Ln,i.repeat.set(4,3);const r=new Ee(new bt(14,9),new et({map:i,roughness:.9}));r.rotation.x=-Math.PI/2,r.position.set(7,0,4.5),r.receiveShadow=!0,e.add(r);const o=5.4,a=z=>{const U=Y_();return U.repeat.set(z/4.8,o/4.2),new et({map:U,roughness:.95})},l=$e(14,o,.2,a(14));l.position.set(7,o/2,-.1),e.add(l);const c=$e(.2,o,9,a(9));c.position.set(-.1,o/2,4.5),e.add(c);const u=lt(9080726),h=$e(14.2,.22,.32,u);h.position.set(7,o-.11,.02),e.add(h);const d=$e(.32,.22,9.2,u);d.position.set(.02,o-.11,4.5),e.add(d);const p=pn(512,32,z=>{z.fillStyle="#5a5e64",z.fillRect(0,0,512,32),z.fillStyle="#ff8c1a";for(let U=-32;U<512;U+=32)z.beginPath(),z.moveTo(U,32),z.lineTo(U+16,32),z.lineTo(U+32,0),z.lineTo(U+16,0),z.fill()});p.wrapS=Ln;const v=new Ee(new bt(14,.16),new et({map:p.clone()}));v.material.map.repeat.set(14,1),v.position.set(7,1.25,.005),e.add(v);const g=new Ee(new bt(9,.16),new et({map:p.clone()}));g.material.map.repeat.set(9,1),g.rotation.y=Math.PI/2,g.position.set(.005,1.25,4.5),e.add(g);const f=lt(7162933),m=$e(14,.25,.25,f);m.position.set(7,.125,.05),e.add(m);const b=$e(.25,.25,9,f);b.position.set(.05,.125,4.5),e.add(b),[1.8,4.4,7,9.6,12.2].forEach((z,U)=>this.fenetre(e,1.8,1.3,z,3.8,!1,1+U)),[1.8,4.4,7].forEach((z,U)=>this.fenetre(e,1.8,1.3,z,3.8,!0,6+U));const x=new Ee(new bt(4.6,1.5),lt(12882781));x.position.set(4.4,2.55,.02),e.add(x);const T=new Ee(new bt(4,.6),new An({map:pn(512,76,z=>{z.fillStyle="#2b2420",z.fillRect(0,0,512,76),z.fillStyle="#f0b36b",z.font="bold 44px Georgia",z.textAlign="center",z.textBaseline="middle",z.fillText("PYPERASSE & Cie",256,40)})}));T.position.set(.02,2.75,6),T.rotation.y=Math.PI/2,e.add(T),((z,U,se,ie,oe,Ne=!1)=>{const Ye=U/3.6,X=.05,Z=$e(Ne?X:U+.1,Ye+.1,Ne?U+.1:X,lt(2895668,{metalness:.4,roughness:.5}));Z.position.set(Ne?X/2:se,ie,Ne?oe:X/2),e.add(Z);const de=new Ee(new bt(U,Ye),new et({map:po(z,3.6),roughness:.6}));de.position.set(Ne?X+.003:se,ie,Ne?oe:X+.003),Ne&&(de.rotation.y=Math.PI/2),e.add(de)})("PRINT",3.2,ct.x,3.15,.03);const R=(z,U,se,ie)=>{const oe=new Ee(new bt(ie,ie/3.6),new et({map:po(z,3.6),roughness:.95}));oe.rotation.x=-Math.PI/2,oe.position.set(U,.012,se),oe.receiveShadow=!0,e.add(oe)};R("INPUT",2.7,Yt+1.05,2.2),R("OUTPUT",Fn+1,Ot+1.05,2.2),this.construireRangements(e);for(const z of[3,10.9]){const U=new Ee(new hs(.02,.02,.6),lt(2236962));U.position.set(z,3.95,2.6);const se=new Ee(new Qs(.5,.4,16,1,!0),lt(16747546,{side:Ht,roughness:.5}));se.position.set(z,3.6,2.6);const ie=new Ee(new ds(.16,12,10),new et({color:16777215,emissive:16767392,emissiveIntensity:1.6}));ie.position.set(z,3.42,2.6);const oe=new nr(16767392,7,9,1.5);oe.position.set(z,3.3,2.6),e.add(U,se,ie,oe)}this.modele("tapis-sol",{l:3.4},7,4.6),this.modele("bibliotheque",{h:2.2},.45,6.6,Math.PI/2),this.modele("plante",{h:1.2},13.4,.6),this.modele("poubelle",{h:.6},9,.6),this.modele("bureau",{l:2.2},12.2,7.6,Math.PI),this.modele("chaise",{h:1.35},12.2,6.8,Math.PI);const E=this.modele("cafe",{h:.7},12.9,7.4,Math.PI);E.position.y=.78,E.name="monique",this.modele("cone",{h:.5},13.3,4.3),this.modele("tremie",{h:1.6},.55,Yt);for(let z=0;z<go;z++)this.modele("tapis",{l:1},Fn+z,Ot,Math.PI/2);e.add(this.bandeTapis("sortie",go,Fn+(go-1)/2)),this.construireTuyau(e),this.construireImprimante(e),this.humeur("normal");const C=new Ee(new hs(.02,.02,2),lt(2236962));C.position.set(7,5.2,4.6),this.lampeMat=new et({color:16777215,emissive:Fl.repos,emissiveIntensity:1.4});const H=new Ee(new ds(.28,20,16),this.lampeMat);H.position.set(7,4.05,4.6);const _=new Ee(new Qs(.55,.45,16,1,!0),lt(3104080,{side:Ht}));_.position.set(7,4.35,4.6),this.lampeLum=new nr(Fl.repos,10,14,1.4),this.lampeLum.position.set(7,3.8,4.6),e.add(C,H,_,this.lampeLum);const M=(z,U,se,ie,oe)=>{const Ne=new ex(this.cat,U,1.55);Ne.racine.position.set(se,0,ie),Ne.racine.rotation.y=oe,e.add(Ne.racine),this.acteurs.set(z,Ne)};M("stagiaire","stagiaire",6.4,5,0),M("lambda","lambda",11.2,6.5,-2.4),M("kevin","kevin",1.5,7.9,2.4),M("client","client",13,5.6,-1.6),this.acteurs.get("client").racine.visible=!1;const O=new ft;for(let z=0;z<10;z++){const U=new Ee(new ds(.35+z%3*.12,10,8),new et({color:7829367,transparent:!0,opacity:.45}));U.position.set(8.6+z%3*.3,.5+z*.35,.7),O.add(U)}const k=new ft;for(let z=0;z<5;z++){const U=new Ee(new Qs(.18,.7,8),new et({color:16742938,emissive:16734720,emissiveIntensity:1.6}));U.position.set(8.8+(z-2)*.16,.6,.7+z%2*.12),k.add(U)}const W=new nr(16742938,6,5);W.position.set(9,1.2,1.2),k.add(W);const K=new Ee(new bt(14,9),new et({color:3837912,transparent:!0,opacity:.45,roughness:.1}));K.rotation.x=-Math.PI/2,K.position.set(7,.12,4.5);const V=new nr(16719904,0,20);V.position.set(12,3,2),this.degatsObj={fumee:O,feu:k,eau:K,gyro:V};for(const z of Object.values(this.degatsObj))z.visible=!1,e.add(z)}humeur(e){const t=this.visage.ctx;t.fillStyle="#16302b",t.fillRect(0,0,128,96),t.fillStyle="#7dffb2",t.strokeStyle="#7dffb2",t.lineWidth=6,t.lineCap="round";const n=i=>{if(e==="dodo"){t.beginPath(),t.moveTo(i-10,38),t.lineTo(i+10,38),t.stroke();return}e==="faché"&&(t.beginPath(),t.moveTo(i-12,28+(i<64?0:8)),t.lineTo(i+12,28+(i<64?8:0)),t.stroke()),t.beginPath(),t.arc(i,42,e==="peur"?11:8,0,Math.PI*2),t.fill()};n(42),n(86),t.beginPath(),e==="content"?t.arc(64,58,18,.15*Math.PI,.85*Math.PI):e==="faché"?(t.moveTo(46,76),t.lineTo(82,76)):e==="peur"?t.arc(64,74,9,0,Math.PI*2):(t.moveTo(50,72),t.lineTo(78,72)),t.stroke(),this.visage.tex.needsUpdate=!0}lampe(e){const t=Fl[e];this.lampeMat.emissive.setHex(t),this.lampeLum.color.setHex(t),this.lampeLum.intensity=e==="repos"?10:18}preparer(e){var r;this.dynamique.clear(),this.tuiles.clear(),this.surTable.clear(),this.depart=[],this.feuilles=[],this.sol=[],this.nbOublies=0,this.casiers.clear(),this.places=e.places;const t=new ft;for(let o=0;o<this.places;o++){const a=or(this.cat.create("tapis"),{l:1});a.position.set(mo+o,0,Yt),a.rotation.y=Math.PI/2,a.traverse(l=>{l.isMesh&&(l.receiveShadow=!0)}),t.add(a)}if(t.add(this.bandeTapis("entree",this.places,mo+(this.places-1)/2)),this.dynamique.add(t),this.placesTable=[],e.placesTable>0){const o=Math.min(4.2,1.2+e.placesTable*.18),a=or(this.cat.create("table"),{l:o});a.position.set(3.2,0,5.9),a.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),this.dynamique.add(a);const l=new Vt().setFromObject(a);this.tableZone=l.clone().expandByScalar(.3);const c=Math.ceil(e.placesTable/2),u=l.getSize(new w);for(let h=0;h<e.placesTable;h++){const d=l.min.x+(h%c+.5)*(u.x/c),p=l.min.z+(Math.floor(h/c)+.5)*(u.z/2);this.placesTable.push(new w(d,l.max.y+.16,p))}}this.tapis=new Array(this.places).fill(null),this.attente=[];const n=[];if(e.colis)for(const o of e.colis)n.push(this.colis(o));e.morceaux&&e.morceaux.forEach((o,a)=>n.push(this.tuile(a,o)));for(const o of n)this.dynamique.add(o),this.attente.push(o),o.position.set(.55,1.7,Yt);this.remplirTapis(!0);const i=this.acteurs.get("stagiaire");(r=i.lacher())==null||r.removeFromParent(),i.racine.position.set(6.4,0,5),i.racine.rotation.y=0,i.jouer("idle"),this.humeur("normal"),this.lampe("repos")}fenetre(e,t,n,i,r,o,a){const l=new ft,c=$_(a),u=pn(256,256,E=>{const C=E.createLinearGradient(0,0,0,256);C.addColorStop(0,"#9fd0f2"),C.addColorStop(1,"#e8f3fb"),E.fillStyle=C,E.fillRect(0,0,256,256),E.fillStyle="rgba(255,255,255,.75)";for(let H=0;H<3;H++)E.beginPath(),E.ellipse(c()*256,18+c()*50,22+c()*18,7+c()*4,0,0,Math.PI*2),E.fill();for(let H=-10;H<256;H+=18+c()*22){const _=16+c()*24,M=60+c()*70;E.fillStyle="#a9b8c6",E.fillRect(H,M,_,256-M),c()<.15&&(E.fillRect(H+_/2-4,M-30,8,30),E.fillRect(H+_/2-1,M-50,2,20))}for(let H=-5;H<256;H+=30+c()*26){const _=34+c()*30,M=120+c()*60;E.fillStyle=["#7a4a3a","#8a5a44","#6e5a52","#7d6a5c"][Math.floor(c()*4)],E.fillRect(H,M,_,256-M);for(let O=M+10;O<250;O+=18)for(let k=H+5;k<H+_-8;k+=11)E.fillStyle=c()<.3?"#f4e3a6":"#3d4a57",E.fillRect(k,O,6,9);if(c()<.5){const O=H+_/2-8;E.fillStyle="#8b6a44",E.fillRect(O,M-18,16,14),E.beginPath(),E.moveTo(O-2,M-18),E.lineTo(O+8,M-26),E.lineTo(O+18,M-18),E.fill(),E.fillStyle="#3b3b3b",E.fillRect(O+2,M-4,2,4),E.fillRect(O+12,M-4,2,4)}}}),h=new Ee(new bt(t,n),new et({map:u,emissive:16777215,emissiveMap:u,emissiveIntensity:.55,roughness:.2}));h.position.set(0,n/2,.02),l.add(h);const d=lt(1908514,{metalness:.5,roughness:.45}),p=.07;for(const[E,C,H,_]of[[t+p,p,0,0],[t+p,p,0,n],[p,n+p,-t/2,n/2],[p,n+p,t/2,n/2]]){const M=$e(E,C,.1,d);M.position.set(H,_,.05),l.add(M)}for(let E=1;E<4;E++){const C=$e(.035,n,.06,d);C.position.set(-t/2+E*t/4,n/2,.05),l.add(C)}for(let E=1;E<5;E++){const C=$e(t,.035,.06,d);C.position.set(0,E*n/5,.05),l.add(C)}const v=$e(t+.3,.1,.28,lt(12169635));v.position.set(0,-.06,.12),l.add(v),l.traverse(E=>{E.isMesh&&(E.castShadow=!1)}),o?(l.rotation.y=Math.PI/2,l.position.set(0,r,i)):l.position.set(i,r,0),e.add(l);const g=new w(.55,-1,.7),f=(E,C)=>o?new w(.04,r+C,i+E):new w(i+E,r+C,.04),m=E=>E.clone().addScaledVector(g,E.y/-g.y).setY(.02),x=[f(-t/2,0),f(t/2,0),f(t/2,n),f(-t/2,n)].map(m),T=pn(128,128,E=>{E.fillStyle="#000",E.fillRect(0,0,128,128),E.fillStyle="#fff0c8";for(let C=0;C<4;C++)for(let H=0;H<5;H++)E.fillRect(C*32+3,H*25.6+3,26,20)});if(x.some(E=>E.x<.2||E.x>13.8||E.z<.2||E.z>8.8))return;const P=new Ee(new It,new An({map:T,transparent:!0,opacity:.16,blending:wo,depthWrite:!1})),R=[x[0],x[1],x[2],x[0],x[2],x[3]].flatMap(E=>[E.x,E.y,E.z]);P.geometry.setAttribute("position",new ot(R,3)),P.geometry.setAttribute("uv",new ot([0,1,1,1,1,0,0,1,1,0,0,0],2)),e.add(P)}construireRangements(e){const t=lt(7041143,{metalness:.3,roughness:.6}),n=lt(16747546,{roughness:.5}),i=4,r=1.45,o=2.35+i/2,a=.25+r/2,l=.78,c=$e(i,.08,r,t);c.position.set(o,l-.04,a),e.add(c);for(const g of[-i/2+.08,0,i/2-.08])for(const f of[-r/2+.08,r/2-.08]){const m=$e(.08,l-.08,.08,t);m.position.set(o+g,(l-.08)/2,a+f),e.add(m)}const u=new Ee(new bt(2.6,.36),new et({map:po("LES OUBLIÉS",2.6/.36,!1)}));u.position.set(o,l-.25,a+r/2+.005),e.add(u);for(let g=0;g<2;g++)for(let f=0;f<5;f++)this.placesOublies.push(new w(o-1.5+f*.75,l,a-.36+g*.72));const h=1.5,d=.45,p=$e(1.5,1.6,.06,t);p.position.set(h,1.1,d-.3),e.add(p);for(const g of[.3,1.08,1.86]){const f=$e(1.5,.05,.62,n);f.position.set(h,g,d),e.add(f)}for(const g of[-.73,0,.73]){const f=$e(.05,1.6,.62,t);f.position.set(h+g,1.1,d),e.add(f)}for(const g of[.35,1.13])for(const f of[-.36,.36])this.placesCasiers.push(new w(h+f,g,d+.05));const v=new Ee(new bt(1.5,.4),new et({map:po("CASIERS",1.5/.4,!1)}));v.position.set(h,2.25,.012),e.add(v)}async marcher(e,t){const n=this.acteur("stagiaire"),i=this.vitesse,r=n.racine.position,o=mo+this.places-.5+.6,a=l=>l>Yt;if(a(r.z)!==a(t)&&Math.min(r.x,e)<o){const l=Math.max(o,Math.min(r.x,e)<o?o:r.x);await n.aller(l,r.z,i),await n.aller(l,t,i)}await n.aller(e,t,i)}async oublier(){const e=this.acteur("stagiaire"),t=this.vitesse;if(!e.porte)return;const n=this.nbOublies++,i=this.placesOublies[n%this.placesOublies.length].clone(),r=new Vt().setFromObject(e.porte.children[0]??e.porte).getSize(new w).y;i.y+=Math.floor(n/this.placesOublies.length)*(r+.01),await this.marcher(i.x,i.z+1.05),e.regarder(i.x,i.z);const o=e.lacher();this.dynamique.add(o);const a=o.position.clone();await Ft(300*t,l=>{o.position.lerpVectors(a,i,l),o.position.y+=Math.sin(l*Math.PI)*.3}),o.rotation.set(0,0,0),this.sol.push(o)}async ranger(e){const t=this.acteur("stagiaire"),n=this.vitesse;if(!t.porte)return;let i=this.casiers.get(e);if(!i){const a=this.placesCasiers[this.casiers.size%this.placesCasiers.length],l=new Ee(new bt(.6,.3),new et({map:K_(e),roughness:.6}));l.position.set(a.x,a.y-.2,a.z+.28),this.dynamique.add(l),i={place:a,colis:null,etiquette:l},this.casiers.set(e,i)}if(await this.marcher(i.place.x+.2,i.place.z+1.2),t.regarder(i.place.x,i.place.z),i.colis){const a=i.colis,l=a.position.clone(),c=new w(i.place.x+.6,0,i.place.z+.9);Ft(400*n,u=>{a.position.lerpVectors(l,c,u),a.position.y=l.y*(1-u)+Math.sin(u*Math.PI)*.3,a.scale.setScalar(1-u)}).then(()=>a.removeFromParent())}const r=t.lacher();this.dynamique.add(r);const o=r.position.clone();await Ft(300*n,a=>{r.position.lerpVectors(o,i.place,a)}),i.colis=r}casierDe(e){for(const t of this.casiers.values())if(t.colis&&t.colis.userData.valeur===e)return t;return null}construireImprimante(e){const t=new ft;t.name="gerard",t.position.set(ct.x,0,ct.z);const n=lt(14473423,{roughness:.55}),i=lt(13223096,{roughness:.5}),r=lt(4869458),o=lt(1579291),a=(g,f,m,b)=>(g.position.set(f,g.position.y+m,b),t.add(g),g);a($e(1.5,.7,1.1,r),0,0,0);for(const g of[.2,.46])a($e(1.36,.22,.02,lt(5988197)),0,g-.11,.56),a($e(.34,.04,.04,lt(12172482,{metalness:.5})),0,g+.02,.58);a($e(1.5,.55,1.1,n),0,.7,0),a($e(1.52,.09,1.12,i),0,1.25,0),a($e(1.05,.07,.03,o),-.1,1.08,.555);const l=a($e(1,.03,.6,lt(12433581)),-.1,.99,.84);l.rotation.x=.07;for(let g=0;g<4;g++){const f=a($e(.72,.012,.6,lt(g?16447730:16777215)),-.32,1.42+g*.012,-.32-g*.006);f.rotation.x=-1.05}a($e(.82,.3,.05,i),-.32,1.3,-.5).rotation.x=-.5;const c=a($e(.7,.52,.07,r),.37,1.32,.18);c.rotation.x=-.55;const u=document.createElement("canvas");u.width=128,u.height=96;const h=new Ks(u);h.colorSpace=St,this.visage={ctx:u.getContext("2d"),tex:h};const d=new Ee(new bt(.6,.45),new An({map:h}));d.position.set(.37,1.58,.25),d.rotation.x=-.55,t.add(d);const p=new et({color:2059061,emissive:0}),v=new Ee(new ds(.045,12,8),p);v.position.set(.62,1.36,.5),t.add(v),t.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),t.scale.setScalar(1.3),e.add(t),this.impr={corps:t,led:p}}construireTuyau(e){const t=Fn+go+.35,n=[[t,.55,Ot],[t,-.35,Ot],[14.5,-.9,Ot+.5],[15.4,-1.5,Ot+1.3],[14.6,-2.1,Ot+2.1],[15.3,-2.7,Ot+2.9]];this.tuyau=new $u(n.map(c=>new w(...c)),!1,"catmullrom",.15),this.coudes=[1,2,3,4].map(c=>c/(n.length-1));const i=new et({color:10475775,transparent:!0,opacity:.35,depthWrite:!1,side:Ht,roughness:.1}),r=new Ee(new xl(this.tuyau,120,.4,14,!1),i);r.renderOrder=2,e.add(r);const o=new et({color:13214282,metalness:.6,roughness:.35});for(const c of this.coudes){const u=new Ee(new _l(.43,.07,8,20),o);u.position.copy(this.tuyau.getPoint(c)),u.lookAt(u.position.clone().add(this.tuyau.getTangent(c))),u.renderOrder=3,e.add(u)}const a=new Ee(new hs(.62,.4,.45,20,1,!0),new et({color:13214282,metalness:.6,roughness:.35,side:Ht}));a.position.set(t,.32,Ot),a.castShadow=!0,e.add(a);const l=new Ee(new ro(.5,24),lt(1313800));l.rotation.x=-Math.PI/2,l.position.set(t,.012,Ot),e.add(l)}async tomber(e){const t=this.vitesse,n=this.tuyau.getPoint(0),i=e.position.clone();this.rouler("sortie",700*t*.85,(n.x-i.x)/Math.max(.05,.7*t)),await Ft(700*t,l=>{e.position.lerpVectors(i,n,l),e.position.y=i.y+(n.y-i.y)*l+Math.sin(l*Math.PI)*.25}),e.traverse(l=>{l.isSprite&&(l.visible=!1)});const r=t>=.2,o=[...this.coudes];let a=0;await Ft(2e3*t,l=>{const c=.55*l+.45*l*l;for(e.position.copy(this.tuyau.getPoint(c)),e.rotation.set(c*11,0,c*7);o.length&&c>=o[0];){const u=o.shift();r&&this.choc(this.tuyau.getPoint(u),a),a++}}),e.visible=!1,r&&this.grogner(this.tuyau.getPoint(1))}choc(e,t){var a;const n=["BING !","BANG !","BOUM !","CRAC !","PAF !"],i=document.createElement("div");i.className=`choc choc-${t%3}`,i.innerHTML=`<span>${n[t%n.length]}</span>`;const r=this.calque.getBoundingClientRect(),o=this.versEcran(e);i.style.left=`${o.x-r.left+(t%2?46:-46)}px`,i.style.top=`${o.y-r.top}px`,this.calque.appendChild(i),setTimeout(()=>i.remove(),900),this.trembler(.1),(a=this.surChoc)==null||a.call(this,t)}grogner(e){const t=["Encore du travail ! #@§%&!","Et c'est reparti ! %@#!","Mais qui m'envoie tout ça ?! &§#@!","Encore un ! #%@&!"],n=document.createElement("div");n.className="voix-dessous",n.textContent=t[Math.floor(Math.random()*t.length)];const i=this.calque.getBoundingClientRect(),r=this.versEcran(e);n.style.left=`${r.x-i.left}px`,n.style.top=`${r.y-i.top-70}px`,this.calque.appendChild(n),setTimeout(()=>n.remove(),1800)}colis(e){const t=new ft;t.add(or(this.cat.create("colis"),{l:.5}));const n=pn(128,96,r=>{r.fillStyle="#fffaf0",r.fillRect(8,8,112,80),r.strokeStyle="#7a5230",r.lineWidth=4,r.strokeRect(8,8,112,80),r.fillStyle="#2b1a0c",r.font="bold 56px Georgia",r.textAlign="center",r.textBaseline="middle",r.fillText(rr(e),64,52)}),i=new Ru(new sl({map:n,depthTest:!1}));return i.scale.set(.55,.41,1),i.position.y=.85,i.renderOrder=5,t.add(i),t.userData.valeur=e,t}tuile(e,t){const n=ho(e),i=pn(96,96,a=>{a.fillStyle=t==='"'?"#c8202a":n.fond,a.fillRect(0,0,96,96),a.fillStyle=t==='"'?"#ffffff":n.encre,a.font=`bold 72px ${t==='"'?"Georgia, serif":n.police}`,a.textAlign="center",a.textBaseline="middle",a.fillText(t,48,t==='"'?62:52)}),r=new Ee(new In(.42,.42,.42),[lt(14537403),lt(14537403),new et({map:i}),lt(14537403),new et({map:i}),lt(14537403)]);r.castShadow=!0,r.userData.tuile=e,r.scale.setScalar(1.35);const o=new Ru(new sl({map:i,depthTest:!1}));return o.scale.set(.42,.42,1),o.position.y=.62,o.renderOrder=6,o.userData.tuile=e,r.add(o),this.tuiles.set(e,{id:e,ch:t,obj:r}),r}posTapis(e){return new w(mo+this.places-1-e,.45,Yt)}remplirTapis(e=!1){const t=this.tapis.filter(n=>!!n);this.tapis=new Array(this.places).fill(null),t.forEach((n,i)=>this.tapis[i]=n);for(let n=0;n<this.places;n++)!this.tapis[n]&&this.attente.length&&(this.tapis[n]=this.attente.shift());this.tapis.forEach((n,i)=>{if(!n)return;const r=this.posTapis(i),o=n.position.clone();if(e){n.position.copy(r);return}this.rouler("entree",450*this.vitesse,1/Math.max(.05,.45*this.vitesse)),Ft(450*this.vitesse,a=>{n.position.lerpVectors(o,r,fo(a)),o.y>1&&(n.position.y=o.y+(r.y-o.y)*a*a)})})}tuileSous(e,t){const n=this.canvas.getBoundingClientRect(),i=new he((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(i,this.stage.camera);const r=[...this.tuiles.values()].filter(a=>a.obj.parent&&a.obj.visible).map(a=>a.obj),o=this.raycaster.intersectObjects(r,!0)[0];return o?o.object.userData.tuile:null}surLaTable(e,t){if(!this.placesTable.length)return!1;const n=this.canvas.getBoundingClientRect(),i=new he((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(i,this.stage.camera);const r=new ui(new w(0,1,0),-this.placesTable[0].y),o=new w;return this.raycaster.ray.intersectPlane(r,o)?o.x>this.tableZone.min.x&&o.x<this.tableZone.max.x&&o.z>this.tableZone.min.z&&o.z<this.tableZone.max.z:!1}retirerTuile(e){const t=this.tuiles.get(e);if(!t)return;const n=this.tapis.indexOf(t.obj);n>=0&&(this.tapis[n]=null,this.remplirTapis());for(const[i,r]of this.surTable)r===e&&this.surTable.delete(i);t.obj.visible=!1}poserSurTable(e){const t=this.tuiles.get(e);if(!t)return!1;const n=this.placesTable.findIndex((a,l)=>!this.surTable.has(l));if(n<0)return!1;const i=this.tapis.indexOf(t.obj);i>=0&&(this.tapis[i]=null,this.remplirTapis());for(const[a,l]of this.surTable)l===e&&this.surTable.delete(a);this.surTable.set(n,e),t.obj.visible=!0;const r=this.placesTable[n],o=t.obj.position.clone();return Ft(300,a=>{t.obj.position.lerpVectors(o,r,fo(a)),t.obj.position.y+=Math.sin(a*Math.PI)*.5}),t.obj.rotation.y=ho(e).angle*Math.PI/60,!0}assurerTuile(e,t){if(this.tuiles.has(e))return;const n=this.tuile(e,t);n.visible=!1,n.position.set(3.2,1.2,5.9),this.dynamique.add(n)}remettre(e){if(this.poserSurTable(e))return;const t=this.tuiles.get(e);t&&(t.obj.visible=!0,t.obj.position.set(.55,1.7,Yt),this.attente.unshift(t.obj),this.remplirTapis())}tablePleine(){return this.placesTable.every((e,t)=>this.surTable.has(t))}ecranDe(e){const t=this.tuiles.get(e);return t?this.versEcran(t.obj.getWorldPosition(new w)):null}tapisPlein(){return this.tapis.every(e=>e)&&this.attente.length>0}acteur(e){return this.acteurs.get(e)}async jouer(e){var i;const t=this.acteur("stagiaire"),n=this.vitesse;if(e.act==="recevoir"){const r=this.posTapis(0);await this.marcher(r.x+.75,Yt+.2),t.regarder(r.x,Yt),t.porte&&(await this.oublier(),await this.marcher(r.x+.75,Yt+.2),t.regarder(r.x,Yt)),t.jouer("pick-up",!0),await gt(250*n);const o=this.tapis[0];o?(this.tapis[0]=null,t.prendre(o),this.remplirTapis()):t.prendre(this.colis(e.value??null)),await gt(200*n)}else if(e.act==="envoyer"){if(!t.porte||t.porte.userData.valeur!==e.value){t.porte&&await this.oublier();const l=this.casierDe(e.value??null);l&&(await this.marcher(l.place.x+.2,l.place.z+1.2),t.regarder(l.place.x,l.place.z),await gt(200*n)),t.prendre(this.colis(e.value??null))}await this.marcher(Fn-.8,Ot+.2),t.regarder(Fn,Ot);const r=t.lacher();this.dynamique.add(r);const o=r.position.clone(),a=new w(Fn,.42,Ot);await Ft(250*n,l=>r.position.lerpVectors(o,a,l)),this.depart.push(r),this.tomber(r)}else if(e.act==="print"){const r=t.porte&&Ut(t.porte.userData.valeur??null)===Ut(e.value??"")?t.porte:null;if(r||(i=t.lacher())==null||i.removeFromParent(),await this.marcher(ct.x+1.6,ct.z+1.5),t.regarder(ct.x,ct.z),this.humeur("content"),r){const o=t.lacher();this.dynamique.add(o);const a=o.position.clone(),l=new w(ct.x-.3,1.78,ct.z-.05);await Ft(350*n,d=>{o.position.lerpVectors(a,l,d),o.position.y+=Math.sin(d*Math.PI)*.3});const c=new Ee(new In(.05,.03,.7),new An({color:12582864}));c.position.set(ct.x-.75,1.72,ct.z-.05),this.dynamique.add(c),await Ft(500*n,d=>{c.position.x=ct.x-.75+d*.9}),c.removeFromParent(),await this.imprimer(Ut(e.value??""),!0);const u=o.position.clone(),h=new w(ct.x-1.3-Math.random()*.5,0,ct.z+1.2+Math.random()*.6);await Ft(400*n,d=>{o.position.lerpVectors(u,h,d),o.position.y=u.y*(1-d)+Math.sin(d*Math.PI)*.3,o.rotation.z=d*.4}),this.sol.push(o)}else await this.imprimer(Ut(e.value??""));this.humeur("normal")}else e.act==="debut"&&await gt(80*n)}async imprimer(e,t=!1){var v;const n=this.feuilles.length,i=pn(512,360,g=>{if(g.fillStyle="#fffdf6",g.fillRect(0,0,512,360),t){g.fillStyle="#2b4f8a",g.fillRect(0,0,512,64),g.fillStyle="#fff",g.font="bold 34px Georgia",g.textAlign="center",g.textBaseline="middle",g.fillText("BORDEREAU DE LIVRAISON",256,34),g.strokeStyle="#2b4f8a",g.lineWidth=3,g.strokeRect(150,100,212,170),g.fillStyle="#2b1a0c",g.font="bold 130px Georgia",g.fillText(e,256,192),g.font="26px Georgia",g.fillStyle="#555",g.fillText("Colis n°",256,86),g.fillText("Pyperasse & Cie",256,318);return}g.fillStyle="#ece4d0";for(let b=40;b<360;b+=36)g.fillRect(20,b,472,2);const f=Math.min(470,30+e.length*52),m=Math.min(96,470/Math.max(1,e.length)*1.2);X_(g,e||" ",256-f/2+10,130,Math.max(40,m),n+3)}),r=new Ee(new bt(.95,.67),new et({map:i,side:Ht}));this.dynamique.add(r),this.feuilles.push(r);const o=this.vitesse,a=1500*o,l=ct.x-.13;r.scale.set(.82,.82,1),r.rotation.set(-Math.PI/2+.25,0,0),(v=this.surImpression)==null||v.call(this,a);const c=this.impr.corps;await Ft(a,g=>{const f=Math.floor(g*9)/9+(g*9-Math.floor(g*9))*.35/9;r.position.set(l,1.44-f*.1,ct.z+.4+Math.min(1,f)*.8),c.position.x=ct.x+(g<1?Math.sin(g*160)*.012:0),this.impr.led.emissive.setHex(g<1&&Math.sin(g*40)>0?3407718:0)}),c.position.x=ct.x,this.impr.led.emissive.setHex(0),await gt(250*o);const u=n%4,h=Math.floor(n/4)%2,d=new w(2.6+u*1.15,2.95-h*.75,.05),p=r.position.clone();await Ft(700*this.vitesse,g=>{r.position.lerpVectors(p,d,fo(g)),r.position.y+=Math.sin(g*Math.PI)*.8,r.rotation.x=(-Math.PI/2+.25)*(1-fo(g)),r.rotation.z=(n%3-1)*.06*g,r.scale.set(.82+.18*g,.82+.18*g,1)}),n>=8&&(r.position.z+=.01*n)}async retour(){await this.marcher(6.4,5)}async gag(e){const t=this.acteur("stagiaire"),n=this.acteur("lambda");switch(e){case"tapis-emporte":{const i=this.posTapis(0);await t.aller(i.x+.75,Yt+.2,1),t.jouer("die",!0);const r=t.racine.position.clone();await Ft(1600,o=>{t.racine.position.set(r.x-o*(this.places+.5),.4*Math.sin(o*3),Yt)}),t.racine.visible=!1,await gt(500),t.racine.position.set(6.4,0,5),t.racine.visible=!0,t.jouer("idle");break}case"montre":n.regarder(t.racine.position.x,t.racine.position.z),n.jouer("emote-no",!0),n.expression("fache"),this.bulle("lambda","Tic. Tac. Tic. Tac.",2200),await gt(1800),n.jouer("idle");break;case"soupir":n.jouer("emote-no",!0),n.expression("fache"),this.bulle("lambda","Pfffffffff.",2e3),await gt(1700),n.jouer("idle");break;case"pile":{const i=new ft;this.fx.add(i);for(let r=0;r<9;r++){const o=this.colis("?");o.position.set(Fn+1,.3+r*.5,Ot+.9),o.rotation.y=r%3*.3,i.add(o),await gt(120)}this.trembler(.5),await gt(900),i.removeFromParent();break}case"dodo":t.jouer("sit",!0),t.expression("dodo"),this.bulle("stagiaire","Zzzz... zzzz...",2400),this.humeur("dodo"),await gt(2200),t.jouer("idle"),this.humeur("normal");break;case"chat":{this.humeur("peur"),t.expression("surpris"),this.trembler(.5),await gt(500);const i=this.chat();i.position.set(ct.x,0,ct.z+.8),this.fx.add(i),this.bulle("gerard","Miaou ?! Qui a rangé un chat dans mes tiroirs ?",2400),await Ft(1800,r=>{i.position.x=ct.x-r*6,i.position.z=ct.z+.8+r*4,i.position.y=Math.abs(Math.sin(r*18))*.25,i.rotation.y=-Math.PI*.75}),i.removeFromParent(),this.humeur("normal");break}case"encre":{this.lampe("texte");const i=new Ee(new ro(1,32),new et({color:1712960,roughness:.15,transparent:!0,opacity:.9}));i.rotation.x=-Math.PI/2,i.position.set(ct.x,.02,ct.z+1),this.fx.add(i),this.humeur("peur"),await Ft(1800,r=>{i.scale.setScalar(.1+r*3.2)}),await gt(600),i.removeFromParent(),this.humeur("normal");break}case"mains-vides":await t.aller(Fn-.8,Ot+.2,1),t.regarder(Fn,Ot),t.jouer("holding-right"),this.bulle("stagiaire","Voilà ! ... Ah. Il n'y a rien dans mes mains.",2400),await gt(2200),t.jouer("emote-no",!0),await gt(600);break;case"tapis-envers":this.trembler(1.2),this.bulle("lambda","Dans l'autre sens !",1800),await gt(1400);break;case"kevin":{const i=this.acteur("kevin");i.jouer("emote-no",!0),this.bulle("kevin","Même moi, j'ai jamais réussi ça.",2400),await gt(2e3),i.jouer("idle");break}default:await gt(300)}for(const i of this.acteurs.values())i.expression("normal");await this.retour()}set frenesie(e){for(const t of this.acteurs.values())t.frenesie=e}chat(){const e=new ft,t=lt(14715452),n=lt(16774112),i=$e(.5,.25,.25,t);i.position.y=.18,e.add(i);const r=$e(.24,.22,.24,t);r.position.set(.3,.33,0),e.add(r);const o=$e(.06,.08,.06,t);o.position.set(.3,.55,-.07),e.add(o);const a=o.clone();a.position.z=.07,e.add(a);const l=$e(.05,.08,.12,n);l.position.set(.43,.33,0),e.add(l);const c=$e(.06,.32,.06,t);c.position.set(-.27,.28,0),c.rotation.z=.5,e.add(c);for(const[u,h]of[[.18,.08],[.18,-.08],[-.18,.08],[-.18,-.08]]){const d=$e(.07,.12,.07,n);d.position.set(u,0,h),e.add(d)}return e}degats(e){const t=this.degatsObj;t.fumee.visible=e>=1,t.feu.visible=e>=2,t.eau.visible=e>=3,t.gyro.visible=e>=4,t.gyro.intensity=e>=4?8:0}async reussite(){const e=this.acteur("stagiaire"),t=this.acteur("lambda");e.jouer("emote-yes",!0),t.jouer("emote-yes",!0),e.expression("content"),t.expression("content"),this.humeur("content"),this.lampe("repos"),this.bulle("lambda","Pas mal, pour un stagiaire.",2200),await gt(1600),e.jouer("idle"),t.jouer("idle"),e.expression("normal"),t.expression("normal")}trembler(e){this.tremblement=Math.max(this.tremblement,e)}bandeTapis(e,t,n){const i=e==="entree"?Yt:Ot,r=j_();r.repeat.set(t*2,1);const o=new Ee(new bt(t,.66),new et({map:r,roughness:.9}));return o.rotation.x=-Math.PI/2,o.position.set(n,.405,i),o.receiveShadow=!0,this.bandes[e].tex=r,o}rouler(e,t,n){const i=this.bandes[e];i.jusqua=Math.max(i.jusqua,performance.now()+t),i.vitesse=n}animerFx(e){const t=performance.now();for(const l of Object.values(this.bandes))l.tex&&t<l.jusqua&&(l.tex.offset.x-=2*l.vitesse*e);const n=this.stage.camera;this.tremblement>0?(this.tremblement=Math.max(0,this.tremblement-e),n.position.set(this.camBase.x+(Math.random()-.5)*.25,this.camBase.y+(Math.random()-.5)*.25,this.camBase.z)):n.position.copy(this.camBase);const i=performance.now()/1e3,r=this.degatsObj.feu;r!=null&&r.visible&&r.children.forEach((l,c)=>{l.scale.y=1+Math.sin(i*14+c)*.25});const o=this.degatsObj.fumee;o!=null&&o.visible&&o.children.forEach((l,c)=>{l.position.y=.5+(i*.5+c*.35)%3.5});const a=this.degatsObj.gyro;a!=null&&a.visible&&(a.intensity=Math.sin(i*10)>0?10:0)}versEcran(e){const t=e.clone().project(this.stage.camera),n=this.canvas.getBoundingClientRect();return{x:n.left+(t.x+1)/2*n.width,y:n.top+(1-t.y)/2*n.height}}tete(e){if(e==="gerard")return()=>new w(ct.x,2.4,ct.z);if(e==="monique")return()=>new w(12.9,1.8,7.4);const t=this.acteurs.get(e);return()=>t.racine.position.clone().add(new w(0,1.9,0))}bulle(e,t,n=0){const i=document.createElement("div");return i.className="bulle-3d",i.textContent=t,this.calque.appendChild(i),this.bulles.push({el:i,cible:this.tete(e),fin:n?performance.now()+n:1/0}),this.majBulles(),i}effacerBulles(){for(const e of this.bulles)e.el.remove();this.bulles=[]}montrerClient(e){this.acteurs.get("client").racine.visible=e}majBulles(){const e=performance.now(),t=this.calque.getBoundingClientRect();this.bulles=this.bulles.filter(n=>{if(e>n.fin)return n.el.remove(),!1;const i=this.versEcran(n.cible());return n.el.style.left=`${i.x-t.left}px`,n.el.style.top=`${i.y-t.top}px`,!0})}}const wh={print:"imprimer une feuille (Gérard)",envoyer:"envoyer un colis au client",recevoir:"prendre un colis sur le tapis"},Rh=s=>s===" "?"espace":`« ${s} »`;function nx(s){const e=[];let t="attente",n="",i="",r=0,o=-1,a="";const l=u=>{if(t==="nom"){if(e.push({k:"mot",mot:{genre:"nom",texte:n,ferme:!0}}),a=n,t="attente",u==="=")return`« ${n} » puis « = » : ${n} est le nom d'un casier. Je vais y ranger ce qui est à droite du « = ».`;if(u!=="("&&u!==",")return`« ${n} » sans guillemets : pour moi, c'est le nom d'un casier, pas un texte.`}else t==="nombre"&&(e.push({k:"mot",mot:{genre:"nombre",texte:n,ferme:!0}}),t="attente")},c=(u,h,d=!1,p=null)=>(e.push({k:"erreur",ligne:u,pensee:h,emballee:d,colle:p}),{pas:e,erreur:u});for(let u=0;u<s.length;u++){const h=s[u],d=[...h];for(let v=0;v<d.length;v++){const g=d[v];let f,m;if(t==="texte")g===i?(f="guillemet",e.push({k:"mot",mot:{genre:"texte",texte:n,ferme:!0}}),m=`Guillemet : le texte est fini. J'ai lu « ${n} ».`,t="attente"):(f="texte",n+=g,`()"'`.includes(g)&&(m=`${Rh(g)} ? Je suis dans un texte : c'est juste une lettre de plus. Je l'avale.`));else if(t==="nom"&&/[A-Za-z_0-9À-ÿ]/.test(g))f="nom",n+=g;else if(t==="nombre"&&/[0-9]/.test(g))f="nombre",n+=g;else if(m=l(d.slice(v).find(b=>b!==" ")??"fin"),g==='"'||g==="'")f="guillemet",t="texte",i=g,n="",m="Guillemet : un texte commence. Maintenant j'avale tout, sans réfléchir, jusqu'au prochain guillemet.";else if(/[0-9]/.test(g))f="nombre",t="nombre",n=g,m??(m="Un chiffre : je lis un nombre.");else if(/[A-Za-z_À-ÿ]/.test(g))f="nom",t="nom",n=g,m??(m="Une lettre sans guillemet avant : je lis un nom.");else if(g===" ")f="espace";else if(f="symbole",e.push({k:"mot",mot:{genre:"symbole",texte:g,ferme:!0}}),g==="(")r++,m??(m=wh[a]&&d[v-1]!=="("&&/\w/.test(d[v-1]??"")?`« ${a}( » : je connais cet ordre, ${wh[a]}. Parenthèses ouvertes : ${r}.`:`Parenthèse ouverte. Parenthèses ouvertes : ${r}.`);else if(g===")"){if(r--,r<0)return e.push({k:"car",ligne:u,col:v,ch:g,classe:f,etat:t,parens:0,mot:""}),c(o>=0?o:u,"Une parenthèse se ferme, mais aucune n'est ouverte ! Je ne comprends plus rien.");m??(m=`Parenthèse fermée. Parenthèses encore ouvertes : ${r}.`)}else g==="="?m??(m=`« = » : je range ce qui est à droite dans le casier « ${a} ».`):m??(m=`${Rh(g)} : un symbole.`);e.push({k:"car",ligne:u,col:v,ch:g,classe:f,etat:t,parens:r,mot:t==="attente"?"":n,pensee:m})}if(t==="texte")return e.push({k:"mot",mot:{genre:"texte",texte:n,ferme:!1}}),c(o>=0?o:u,"Fin de la ligne, et le texte n'est jamais refermé ! Tout ce qui suit le guillemet est devenu du texte, même la parenthèse.",o<0,o>=0?[o,u]:null);const p=l(`
`);if(p&&e.push({k:"note",pensee:p}),r===0&&o<0){try{uo(h,u)}catch(v){if(!(v instanceof Ct))throw v;return c(u,"Fin de la ligne. J'ai bien lu chaque lettre, mais mises ensemble elles ne veulent rien dire.")}e.push({k:"ligne",ligne:u,pensee:`Ligne ${u+1} : instruction complète. Je la garde et je lis la suivante.`,colle:!1});continue}if(r===0)return c(o,`Pour moi, les lignes ${o+1} à ${u+1} forment une seule instruction. Collées comme ça, elles ne veulent rien dire.`,!1,[o,u]);if(o<0){try{uo(h,u)}catch(v){if(!(v instanceof Ct))throw v;if(v.gag!=="G02")return c(u,"Fin de la ligne. J'ai bien lu chaque lettre, mais mises ensemble elles ne veulent rien dire.")}o=u}e.push({k:"ligne",ligne:u,colle:!0,pensee:`Fin de la ligne, mais ${r>1?`${r} parenthèses sont`:"une parenthèse est"} encore ouverte${r>1?"s":""}. Pour moi, l'instruction continue : je colle la ligne suivante !`})}return o>=0?c(o,`Fin du programme, et la parenthèse ouverte ligne ${o+1} n'est jamais refermée. J'ai tout collé pour rien.`,!1,[o,s.length-1]):{pas:e,erreur:-1}}const ix={attente:"j'attends la lettre suivante",nom:"je lis un NOM",nombre:"je lis un NOMBRE",texte:"j'avale un TEXTE"};class sx{constructor(e){te(this,"oeil");te(this,"etat");te(this,"parens");te(this,"pensee");te(this,"ruban");te(this,"bouton");te(this,"finir");te(this,"reveil",null);te(this,"auBout",!1);this.el=e,e.innerHTML=`
      <div class="tete-haut">
        <div class="tete-oeil"></div>
        <div class="tete-milieu">
          <div class="tete-etat"></div>
          <div class="tete-pensee"></div>
        </div>
        <div class="tete-parens"></div>
      </div>
      <div class="tete-bas">
        <div class="tete-ruban"></div>
        <button class="tete-suite">Lettre suivante ▸</button>
        <button class="tete-finir petit">Lire jusqu'au bout</button>
      </div>`;const t=n=>e.querySelector(n);this.oeil=t(".tete-oeil"),this.etat=t(".tete-etat"),this.parens=t(".tete-parens"),this.pensee=t(".tete-pensee"),this.ruban=t(".tete-ruban"),this.bouton=t(".tete-suite"),this.finir=t(".tete-finir"),this.bouton.onclick=()=>this.liberer(),this.finir.onclick=()=>{this.auBout=!0,this.liberer()},document.addEventListener("keydown",n=>{this.reveil&&(n.key===" "||n.key==="ArrowRight"||n.key==="Enter")&&(n.preventDefault(),this.liberer())})}ouvrir(e){this.auBout=!1,this.el.classList.remove("cache","erreur"),this.el.classList.toggle("pas",e),this.oeil.textContent="",this.oeil.dataset.classe="",this.etat.textContent="Je commence à lire. Je ne devine rien : je lis une lettre, puis la suivante.",this.penser(""),this.majParens(0),this.viderRuban()}fermer(){this.el.classList.add("cache"),this.liberer()}car(e){this.oeil.textContent=e.ch===" "?"␣":e.ch,this.oeil.dataset.classe=e.classe,this.oeil.classList.remove("tape"),this.oeil.offsetWidth,this.oeil.classList.add("tape"),this.etat.innerHTML=`Je lis la lettre ${e.ch===" "?"« espace »":`« ${e.ch} »`}, donc ${ix[e.etat]}${e.mot?` : <b class="m-${e.etat}">${Ch(e.mot)}</b>`:""}`,e.pensee&&this.penser(e.pensee),this.majParens(e.parens)}mot(e){const t=document.createElement("span");t.className=`jeton-lu j-${e.genre}${e.ferme?"":" pas-ferme"}`,t.innerHTML=`<small>${e.genre==="symbole"?"":e.ferme?e.genre.toUpperCase():"TEXTE JAMAIS FERMÉ"}</small>${Ch(e.genre==="texte"?`« ${e.texte} »`:e.texte)}`,this.ruban.appendChild(t),this.ruban.scrollLeft=this.ruban.scrollWidth}viderRuban(){this.ruban.innerHTML=""}penser(e,t){this.pensee.textContent=e,this.pensee.className=`tete-pensee${t?` p-${t}`:""}`,this.el.classList.toggle("erreur",t==="erreur")}attendreClic(e="Lettre suivante ▸"){return this.auBout&&e==="Lettre suivante ▸"?new Promise(t=>setTimeout(t,60)):(this.bouton.textContent=e,new Promise(t=>{this.reveil=t}))}liberer(){const e=this.reveil;this.reveil=null,e==null||e()}majParens(e){this.parens.innerHTML=`<small>parenthèses ouvertes</small><div>${"(".repeat(e)||"0"}</div>`,this.parens.classList.toggle("ouvertes",e>0)}}const Ch=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");let rx=1e3;const Lh=()=>rx++,Ol=s=>(s.bloc?Ph(s.bloc):"")+s.tuiles.map(e=>e.ch).join("");function Ph(s){return s.type==="recevoir"?"recevoir()":s.type==="ranger"?`${Ol(s.nom)} = ${Ol(s.fente)}`:`${s.type}(${Ol(s.fente)}${s.ferme?")":""}`}function Ih(s){return s.reduce((e,t)=>{var n;return e+1+((n=t.fente)!=null&&n.bloc?1:0)},0)}function Ss(s,e=!0){const t={id:Lh(),type:s,fente:s==="recevoir"?null:{bloc:null,tuiles:[]},ferme:e||s==="recevoir"};return s==="ranger"&&(t.nom={bloc:null,tuiles:[],nom:!0}),t}function ox(s,e){const t=/^(\w+)\((.*)\)$/.exec(s);if(!t)throw new Error(`ligne de départ illisible : ${s}`);const n=Ss(t[1]);return n.fente&&(t[2]==="recevoir()"?n.fente.bloc=Ss("recevoir"):n.fente.tuiles=[...t[2]].map((i,r)=>({id:e+r,ch:i}))),n}const ax={ranger:"Ranger dans un casier : pose son nom à gauche, ce qu'on range à droite"};class lx{constructor(e,t,n){te(this,"blocs",[]);te(this,"palette",[]);te(this,"boite",[]);te(this,"parenLibre",!1);te(this,"actif",!0);te(this,"spans",[]);te(this,"lignesEl",[]);te(this,"drag",null);te(this,"bulleExec",null);this.prog=e,this.pal=t,this.hotes=n,document.addEventListener("pointermove",i=>this.bouger(i)),document.addEventListener("pointerup",i=>this.lacher(i))}lignes(){return this.blocs.map(Ph)}afficherPalette(){this.pal.innerHTML="";for(const e of this.palette){const t=this.elBloc(Ss(e,!this.parenLibre),!0);t.classList.add("tampon"),t.title=ax[e]??"Glisse ce bloc dans le programme",t.addEventListener("pointerdown",n=>this.commencer(n,{de:"palette",type:e})),this.pal.appendChild(t)}if(this.boite.length){const e=document.createElement("div");e.className="boite-lettres",e.innerHTML="<small>Boîte à lettres : autant que tu veux</small>";for(const t of this.boite){const n=this.elTuile({id:900+t.charCodeAt(0),ch:t,boite:!0},void 0,!1);n.title=`Glisse un « ${t} » dans une fente`,n.addEventListener("pointerdown",i=>{i.stopPropagation(),this.commencer(i,{de:"tuile",tuile:{id:Lh(),ch:t,boite:!0},depuis3D:!0})}),e.appendChild(n)}this.pal.appendChild(e)}}afficher(){if(this.prog.innerHTML="",this.spans=[],this.lignesEl=[],this.blocs.forEach((e,t)=>{const n=document.createElement("div");n.className="ligne",n.dataset.ligne=String(t);const i=document.createElement("span");i.className="num",i.textContent=String(t+1);const r=[],o=this.elBloc(e,!1,r);n.append(i,o),this.prog.appendChild(n),this.spans.push(r),this.lignesEl.push(n)}),!this.blocs.length){const e=document.createElement("div");e.className="vide",e.textContent="Glisse des blocs ici. Ils s'exécutent de haut en bas.",this.prog.appendChild(e)}}lettres(e,t,n,i="kw"){for(const r of t){const o=document.createElement("span");o.className=`car ${i}`,o.textContent=r,e.appendChild(o),n==null||n.push(o)}}elBloc(e,t,n){const i=document.createElement("div");return i.className=`bloc b-${e.type}`,t||i.addEventListener("pointerdown",r=>this.commencer(r,{de:"bloc",bloc:e})),e.type==="recevoir"?(this.lettres(i,"recevoir()",n),i):e.type==="ranger"?(i.appendChild(this.elFente(e.nom,t,n)),this.lettres(i," = ",n),i.appendChild(this.elFente(e.fente,t,n)),i):(this.lettres(i,`${e.type}(`,n),i.appendChild(this.elFente(e.fente,t,n)),e.ferme?this.lettres(i,")",n):i.classList.add("ouvert"),i)}elFente(e,t,n){const i=document.createElement("div");i.className=`fente${e.nom?" f-nom":""}`,t||(i._fente=e),e.bloc?i.appendChild(this.elBloc(e.bloc,t,n)):e.tuiles.length||i.classList.add("libre");for(const r of e.tuiles)i.appendChild(this.elTuile(r,n));return i}elTuile(e,t,n=!0){const i=document.createElement("span"),r=ho(e.id);return i.className=`car tuile${e.ch==='"'?" guill":"()".includes(e.ch)?" paren":""}`,i.textContent=e.ch,e.ch!=='"'&&!"()".includes(e.ch)&&(i.style.fontFamily=r.police,i.style.background=r.fond,i.style.color=r.encre),i.style.transform=`rotate(${r.angle}deg)`,n&&i.addEventListener("pointerdown",o=>{o.stopPropagation(),this.commencer(o,{de:"tuile",tuile:e,depuis3D:!1})}),t==null||t.push(i),i}effacerLecture(){this.prog.querySelectorAll(".lu, .courante, .erreur, .emballe, .collee").forEach(e=>e.classList.remove("lu","courante","erreur","emballe","collee","colle-debut","colle-fin")),this.prog.querySelectorAll(".car").forEach(e=>{e.dataset.classe=""}),this.prog.querySelectorAll(".fugue, .valeur-rendue").forEach(e=>e.remove()),this.prog.querySelectorAll(".evalue, .remplace, .consomme").forEach(e=>e.classList.remove("evalue","remplace","consomme")),this.cacherExplication()}haut(e){var t;return((t=this.lignesEl[e])==null?void 0:t.querySelector(":scope > .bloc"))??null}dedans(e){var t;return((t=this.haut(e))==null?void 0:t.querySelector(".fente > .bloc:not(.remplace)"))??null}allumer(e){this.prog.querySelectorAll(".evalue").forEach(t=>t.classList.remove("evalue")),e==null||e.classList.add("evalue")}avantAppel(e,t){t==="recevoir"?this.allumer(this.dedans(e)??this.haut(e)):this.allumer(this.haut(e))}rendu(e,t){const n=this.dedans(e);if(!n){this.consommer(e);return}n.classList.remove("evalue"),n.classList.add("remplace"),n.after(this.valeur(t))}lireNom(e,t){var a;const n=(a=this.haut(e))==null?void 0:a.querySelector(":scope > .fente:not(.f-nom)");if(!n||n.querySelector(".bloc"))return null;const r=[...n.querySelectorAll(":scope > .tuile")].filter(l=>l.textContent!==")"),o=r.map(l=>l.textContent).join("");return!r.length||!/^[A-Za-z_À-ÿ][\wÀ-ÿ]*$/.test(o)?null:(r.forEach(l=>l.classList.add("remplace")),r.at(-1).after(this.valeur(t)),o)}aDedans(e){return!!this.dedans(e)}codeVisible(e){const t=this.haut(e);if(!t)return"";const n=t.cloneNode(!0);return n.querySelectorAll(".remplace").forEach(i=>i.remove()),(n.textContent??"").replace(/\s+/g," ").replace(/\( /g,"(").replace(/ \)/g,")").trim()}expliquer(e,t){const n=this.lignesEl[e];if(!n)return;const i=this.bulleExec??(this.bulleExec=document.createElement("div"));i.className="exec-bulle",i.parentElement!==this.prog&&this.prog.appendChild(i),i.innerHTML=t;const r=n.offsetTop-i.offsetHeight-8;i.classList.toggle("dessous",r<this.prog.scrollTop),i.style.top=`${r<this.prog.scrollTop?n.offsetTop+n.offsetHeight+8:r}px`,i.style.left=`${n.offsetLeft+34}px`}cacherExplication(){var e;(e=this.bulleExec)==null||e.remove()}consommer(e){const t=this.haut(e);t==null||t.classList.remove("evalue"),t==null||t.classList.add("consomme")}valeur(e){const t=document.createElement("span");return t.className="valeur-rendue",t.textContent=e,t}lire(e,t,n){var r,o;const i=(r=this.spans[e])==null?void 0:r[t];i&&(this.prog.querySelectorAll(".car.lampe").forEach(a=>a.classList.remove("lampe")),i.classList.add("lu","lampe"),i.dataset.classe=n,t===0&&((o=this.lignesEl[e])==null||o.scrollIntoView({block:"nearest"})))}emballer(e){const t=this.lignesEl[e];if(!t)return;t.classList.add("emballe");const n=document.createElement("span");n.className="fugue",t.appendChild(n)}coller(e,t){for(let n=e;n<=t;n++){const i=this.lignesEl[n];i&&(i.classList.add("collee"),i.classList.toggle("colle-debut",n===e),i.classList.toggle("colle-fin",n===t))}}courante(e,t=!1){this.prog.querySelectorAll(".car.lampe").forEach(n=>n.classList.remove("lampe")),this.lignesEl.forEach((n,i)=>{n.classList.toggle("courante",i===e&&!t),n.classList.toggle("erreur",i===e&&t)})}commencerDepuis3D(e,t){this.commencer(e,{de:"tuile",tuile:t,depuis3D:!0}),this.drag.bouge=!0,this.creerFantome(e)}commencer(e,t){!this.actif||e.button!==0||(e.preventDefault(),e.stopPropagation(),this.drag={src:t,x0:e.clientX,y0:e.clientY,bouge:!1,fantome:null,marque:null})}creerFantome(e){const t=this.drag;let n;t.src.de==="tuile"?n=this.elTuile(t.src.tuile):n=this.elBloc(t.src.de==="palette"?Ss(t.src.type,!this.parenLibre):t.src.bloc,!0),n.classList.add("fantome"),document.body.appendChild(n),t.fantome=n,this.placerFantome(e),t.src.de==="bloc"&&this.retirer(t.src.bloc,!1),t.src.de==="tuile"&&!t.src.depuis3D&&this.retirerTuile(t.src.tuile),t.src.de!=="palette"&&this.afficher()}placerFantome(e){var n;const t=(n=this.drag)==null?void 0:n.fantome;t&&(t.style.left=`${e.clientX-14}px`,t.style.top=`${e.clientY-18}px`)}bouger(e){const t=this.drag;if(t){if(!t.bouge){if(Math.abs(e.clientX-t.x0)+Math.abs(e.clientY-t.y0)<6)return;t.bouge=!0,this.creerFantome(e)}this.placerFantome(e),this.marquer(e)}}cible(e,t){t.fantome&&(t.fantome.style.display="none");const n=document.elementFromPoint(e.clientX,e.clientY);t.fantome&&(t.fantome.style.display="");const i=n==null?void 0:n.closest(".fente"),r=t.src.de==="tuile"||(t.src.de==="palette"?t.src.type==="recevoir":t.src.bloc.type==="recevoir");if(i!=null&&i._fente&&r){const l=i._fente;if(t.src.de==="tuile"){const c=[...i.querySelectorAll(":scope > .tuile")];let u=c.length;for(let h=0;h<c.length;h++){const d=c[h].getBoundingClientRect();if(e.clientX<d.left+d.width/2){u=h;break}}return{fente:l,fenteEl:i,index:u,prog:!1}}if(!l.nom&&!l.bloc)return{fente:l,fenteEl:i,index:0,prog:!1}}if(t.src.de==="tuile")return null;const o=this.prog.getBoundingClientRect();if(e.clientX<o.left||e.clientX>o.right||e.clientY<o.top||e.clientY>o.bottom)return null;let a=this.lignesEl.length;for(let l=0;l<this.lignesEl.length;l++){const c=this.lignesEl[l].getBoundingClientRect();if(e.clientY<c.top+c.height/2){a=l;break}}return{index:a,prog:!0}}marquer(e){var r;const t=this.drag;(r=t.marque)==null||r.remove(),t.marque=null,this.prog.querySelectorAll(".fente.survol").forEach(o=>o.classList.remove("survol"));const n=this.cible(e,t);if(!n)return;if(n.fenteEl){if(n.fenteEl.classList.add("survol"),t.src.de==="tuile"){const o=document.createElement("span");o.className="insertion";const a=[...n.fenteEl.querySelectorAll(":scope > .tuile")];n.fenteEl.insertBefore(o,a[n.index]??null),t.marque=o}return}const i=document.createElement("div");i.className="insertion-ligne",this.prog.insertBefore(i,this.lignesEl[n.index]??null),t.marque=i}lacher(e){var o,a;const t=this.drag;if(!t)return;if(this.drag=null,(o=t.marque)==null||o.remove(),this.prog.querySelectorAll(".fente.survol").forEach(l=>l.classList.remove("survol")),(a=t.fantome)==null||a.remove(),!t.bouge){t.src.de==="palette"&&(this.blocs.push(Ss(t.src.type,!this.parenLibre)),this.fini());return}const n=this.cible(e,t),i=t.src;if(i.de==="tuile"){n!=null&&n.fente?n.fente.tuiles.splice(n.index,0,i.tuile):i.tuile.boite||this.hotes.versScene(i.tuile,e.clientX,e.clientY)||(i.depuis3D?this.hotes.annuler3D(i.tuile):this.hotes.versScene(i.tuile,-1,-1)||this.hotes.annuler3D(i.tuile)),this.fini();return}const r=i.de==="palette"?Ss(i.type,!this.parenLibre):i.bloc;n!=null&&n.fente?n.fente.bloc=r:n!=null&&n.prog?this.blocs.splice(n.index,0,r):this.jeter(r),this.fini()}jeter(e){const t=[],n=i=>{i.nom&&t.push(...i.nom.tuiles),i.fente&&(t.push(...i.fente.tuiles),i.fente.bloc&&n(i.fente.bloc))};n(e);for(const i of t.filter(r=>!r.boite))this.hotes.versScene(i,-1,-1)||this.hotes.annuler3D(i)}retirer(e,t){const n=this.blocs.indexOf(e);n>=0&&this.blocs.splice(n,1);const i=r=>{var o,a;((o=r.fente)==null?void 0:o.bloc)===e?r.fente.bloc=null:(a=r.fente)!=null&&a.bloc&&i(r.fente.bloc)};this.blocs.forEach(i),t&&this.jeter(e)}retirerTuile(e){const t=n=>{for(const i of[n.nom,n.fente]){if(!i)continue;const r=i.tuiles.indexOf(e);r>=0&&i.tuiles.splice(r,1),i.bloc&&t(i.bloc)}};this.blocs.forEach(t)}fini(){this.afficher(),this.hotes.changement()}static lisible(e){try{return uo(e,0),!0}catch{return!1}}}const cx={lambda:"Mme Lambda",stagiaire:"Le stagiaire",kevin:"Kevin",client:"Le client mystère",gerard:"Gérard",monique:"Monique"},Bl={G02:{nom:"Le bus",jeu:"kevin",qui:"kevin",scene:"Python attend la parenthèse qui ferme. Il fait monter la ligne suivante dans l'instruction, puis la suivante, comme des passagers dans un bus. Au terminus, toujours pas de parenthèse. Kevin descend du bus, perdu.",explique:"Chaque parenthèse ouverte doit être refermée. Tant qu'il en reste une ouverte, Python colle la ligne suivante à la ligne en cours. Compte les « ( » et les « ) » de chaque ligne : il en faut autant."},G03:{nom:"L'inondation d'encre",jeu:"encre",scene:"La lampe ne trouve jamais le guillemet qui ferme. Elle continue, sort de la ligne, et le texte coule hors de la feuille comme de l'encre.",explique:"Un texte commence par un guillemet et doit finir par un guillemet. Sans le deuxième, Python lit tout le reste de la ligne comme du texte, jusqu'au bout."},G10:{nom:"La chauve-souris",jeu:"aucune",scene:"Le stagiaire ouvre le casier « {nom} ». Il est vide, une chauve-souris s'envole.",explique:"Le casier « {nom} » est lu avant d'avoir reçu une valeur."},G12:{nom:"Le chat",jeu:"chat",qui:"gerard",scene:"Sans guillemets, la lampe a lu {nom} comme un nom de casier. Gérard ouvre tous les tiroirs pour le trouver. Un chat sort du dernier.",explique:'Sans guillemets, {nom} est un nom, pas du texte. Pour du texte, il faut des guillemets autour : "{nom}".'},G19:{nom:"Les mains vides",jeu:"mains-vides",scene:"Le stagiaire va au tapis de départ les mains vides et tend un colis invisible. Le tapis attend. Il attend encore.",explique:"envoyer( ) a besoin de savoir quoi envoyer. Il faut mettre quelque chose dans les parenthèses, par exemple recevoir()."},G20:{nom:"Le carton à lettre",jeu:"soupir",qui:"lambda",scene:"Le client ouvre le carton. Dedans, rien. Juste une feuille avec une lettre écrite en gros. Il la montre à Mme Lambda, qui lit la lettre à voix haute, très lentement.",explique:`Avec des guillemets, "a" est un texte : la lettre a. Sans guillemets, a est le nom du casier, et c'est son contenu qui part.`},G57:{nom:"Le tapis recopié",jeu:"soupir",qui:"lambda",scene:"Le client reçoit tous ses colis exactement dans l'ordre du tapis. Il les remet en ordre lui-même, un par un, en regardant Mme Lambda.",explique:"Les colis sont partis dans l'ordre où ils sont arrivés. Le client voulait un autre ordre : certains colis doivent attendre dans un casier."},G58:{nom:"La photocopieuse bloquée",jeu:"soupir",qui:"gerard",scene:"La photocopieuse s'est bloquée sur le premier colis : elle en recrache, encore et encore, des exemplaires identiques.",explique:"Le casier garde toujours le même colis tant qu'on n'y range rien d'autre. Pour passer au colis suivant, il faut le ranger : a = recevoir()."},G46:{nom:"Kevin perplexe",jeu:"kevin",qui:"kevin",scene:"Kevin regarde la ligne, la tourne dans tous les sens : « Même moi, j'ai jamais réussi ça. »",explique:"Python n'arrive pas à lire cette ligne. Souvent, des lettres sont collées à un texte sans être entre ses guillemets."},G47:{nom:"Le tapis qui emporte",jeu:"tapis-emporte",scene:"Le stagiaire tire sur le tapis d'arrivée vide. Le tapis part en marche arrière et l'emporte.",explique:"recevoir() a été appelé alors qu'il n'y avait plus rien sur le tapis. C'est le cousin de l'erreur EOFError de input()."},G48:{nom:"Le soupir",jeu:"soupir",qui:"lambda",scene:"Mme Lambda regarde le résultat et soupire très, très fort.",explique:"Le programme a tourné jusqu'au bout, mais le résultat n'est pas celui demandé. Compare l'attendu et l'obtenu."},G49:{nom:"La pile au plafond",jeu:"pile",scene:"Les résultats s'empilent, s'empilent, jusqu'au plafond.",explique:"Le programme produit plus de résultats que demandé."},G50:{nom:"La montre",jeu:"montre",qui:"lambda",scene:"Le programme est fini, mais il manque des résultats. Mme Lambda tapote sa montre.",explique:"Il manque des résultats. Attention : recevoir() tout seul prend un colis, mais ne l'envoie pas."},G51:{nom:"Le papier froissé",jeu:"soupir",qui:"lambda",scene:"Au lieu de colis, le client reçoit des bordereaux de livraison, sans les colis qui vont avec. Il les froisse en boule et les lance sur Mme Lambda.",explique:"print( ) fait imprimer par Gérard le bordereau du colis : le colis reste au bureau. envoyer( ) met le colis lui-même sur le tapis de départ. Ici, il fallait envoyer des colis."},G52:{nom:"Le ronflement",jeu:"dodo",scene:"Le stagiaire bâille, s'assoit et s'endort. Il ronfle.",explique:"Le programme est vide. Glisse des blocs dans la zone du programme."},G54:{nom:"Le tapis à l'envers",jeu:"tapis-envers",scene:"Tout sort dans l'ordre inverse. Le bureau entier tremble, comme si le tapis tournait à l'envers.",explique:"Les résultats sont bons, mais dans l'ordre inverse. Les blocs s'exécutent de haut en bas."},G72:{nom:"La poubelle gourmande",jeu:"soupir",qui:"lambda",scene:"Les bons colis partent à la poubelle, et le client reçoit ceux qu'il fallait jeter. Le camion poubelle repart. Mme Lambda court derrière dans la rue, en talons.",explique:"Tu as envoyé les colis qu'il fallait jeter. Compte les colis un par un : le 1er, le 2e, le 3e..."}},Dh=[{nom:"",texte:""},{nom:"La fumée",texte:"La corbeille fume. Le détecteur bipe."},{nom:"Le feu",texte:"Un petit feu s'allume dans un coin. Kevin arrive avec l'extincteur et rate."},{nom:"Les sprinklers",texte:"Les sprinklers se déclenchent : l'étage est inondé."},{nom:"Les pompiers",texte:"La capitaine Lance évacue Mme Lambda par la fenêtre."}],xt=(s,e)=>Array.from({length:e},()=>s).flat(),Kt=[{id:"1.1",titre:"Le premier colis",notion:"Instruction, appel de fonction",histoire:[["lambda","Bienvenue chez Pyperasse & Cie. Tu prends un colis sur le tapis, tu l'envoies de l'autre côté. Même Kevin y arrivait."],["kevin","Presque."],["lambda","recevoir() prend un colis. envoyer( ) l'envoie. À toi de les emboîter."]],mission:"Envoie les 3 colis sur le tapis de départ.",expectKind:"colis",palette:["envoyer","recevoir"],places:4,example:[4,7,2],gen:s=>s.distinct(3,1,9),expected:s=>s.slice(),logic:[],etoiles:{taille:6,vitesse:3},visa:"COLIS",gags:["G19","G47","G50","G52"],solution:xt(["envoyer(recevoir())"],3),declencheurs:{G19:["envoyer()"],G47:xt(["envoyer(recevoir())"],4),G50:xt(["recevoir()"],3),G52:[]},aides:["Chaque colis qui arrive à gauche doit repartir à droite.","Que se passe-t-il quand le stagiaire prend un colis mais ne l'envoie pas ?","Un bloc peut aller dans les parenthèses d'un autre : glisse recevoir() dans envoyer( ).","Il faut une ligne par colis.","Toujours bloqué ? Appelle le prof."]},{id:"1.2",titre:"Bonjour Gérard",notion:"print, texte entre guillemets",histoire:[["gerard","Encore une feuille ? Bon. Mais je n'imprime que du vrai texte, entre guillemets."],["lambda","Les lettres arrivent par le tapis. Il est petit : range-les sur la table s'il déborde."],["kevin","Regarde bien la lampe. Elle lit tout, lettre par lettre. Elle ne s'arrête jamais avant la fin d'un texte."]],mission:"Fais imprimer « Bonjour » par Gérard.",expectKind:"feuille",palette:["print"],places:4,morceaux:["o","j",'"',"B","u","n","o","r",'"'],example:[],expected:()=>["Bonjour"],logic:[],etoiles:{taille:1,vitesse:1},visa:"ENCRE",gags:["G03","G12","G48","G49","G52"],solution:['print("Bonjour")'],declencheurs:{G03:['print("Bonjour)'],G12:["print(Bonjour)"],G48:['print("Bnojour")'],G49:['print("Bonjour")',"print()"],G52:[]},aides:["Gérard doit imprimer exactement le mot Bonjour.","Comment la lampe sait-elle où commence et où finit un texte ?","Un texte s'écrit entre deux guillemets : un avant, un après.","Dans print( ) : un guillemet, les lettres de Bonjour dans l'ordre, un guillemet.","Toujours bloqué ? Appelle le prof."]},{id:"1.3",titre:"L'ordre compte",notion:"Séquence",histoire:[["lambda","Gérard a mélangé le message pour le client. Remets les lignes dans l'ordre : Votre, colis, arrive."],["gerard","Je n'ai rien mélangé. Les lignes ont bougé toutes seules."]],mission:"Fais imprimer trois feuilles dans l'ordre : « Votre », « colis », « arrive ».",expectKind:"feuille",palette:["print"],places:4,depart:['print("colis")','print("arrive")','print("Votre")'],example:[],expected:()=>["Votre","colis","arrive"],logic:["G54"],etoiles:{taille:3,vitesse:3},visa:"ORDRE",gags:["G03","G12","G48","G49","G50","G52","G54"],solution:['print("Votre")','print("colis")','print("arrive")'],declencheurs:{G03:['print("Votre)','print("colis")','print("arrive")'],G12:['print("Votre")',"print(colis)",'print("arrive")'],G48:['print("colis")','print("arrive")','print("Votre")'],G49:['print("Votre")','print("colis")','print("arrive")',"print()"],G50:['print("Votre")','print("colis")'],G52:[],G54:['print("arrive")','print("colis")','print("Votre")']},aides:["Les lignes s'exécutent de haut en bas, comme on lit.","Quelle feuille doit sortir en premier de Gérard ?","Attrape une ligne par sa poignée pour la déplacer.","La première ligne est celle qui commence la phrase.","Toujours bloqué ? Appelle le prof."]},{id:"1.4",titre:"Bilan : le tri du matin",notion:"Séquence",bilan:!0,histoire:[["lambda","Le fournisseur s'est trompé. Six colis, mais le client n'en a commandé que trois : le 1er, le 3e et le 5e."],["lambda","Les autres, tu les prends et tu ne les envoies pas. Rosa passera les jeter."],["kevin","Moi, je les envoyais tous. Le client était ravi. Enfin, au début."],["gerard","Et si tu me donnes un colis avec print( ), je copie son étiquette et j'imprime son bordereau de livraison. Mais un bordereau, ce n'est pas un colis : le client n'en veut pas."]],mission:"Envoie le 1er, le 3e et le 5e colis. Ne laisse partir aucun autre.",expectKind:"colis",palette:["envoyer","recevoir","print"],places:6,example:[3,8,1,6,4,9],gen:s=>s.distinct(6,1,9),expected:s=>[s[0],s[2],s[4]],logic:["G72"],etoiles:{taille:8,vitesse:5},visa:"TRIAGE",gags:["G19","G47","G48","G49","G50","G51","G52","G72"],solution:["envoyer(recevoir())","recevoir()","envoyer(recevoir())","recevoir()","envoyer(recevoir())"],declencheurs:{G19:["envoyer()"],G47:xt(["envoyer(recevoir())"],7),G48:xt(["envoyer(recevoir())"],3),G49:xt(["envoyer(recevoir())"],4),G50:["envoyer(recevoir())","recevoir()","envoyer(recevoir())"],G51:["print(recevoir())","recevoir()","print(recevoir())","recevoir()","print(recevoir())"],G52:[],G72:xt(["recevoir()","envoyer(recevoir())"],3)},aides:["Le client veut le 1er, le 3e et le 5e colis, et aucun autre.","Comment prendre un colis sur le tapis sans l'envoyer ?","recevoir() tout seul prend un colis. Il ne part pas chez le client.","Une ligne par colis, dans l'ordre où ils arrivent. Pour l'étoile : as-tu vraiment besoin de prendre le dernier ?","Toujours bloqué ? Appelle le prof."]},{id:"1.R",titre:"Dossier rouge : la lettre piégée",notion:"Lire un programme sans aide",rouge:!0,sansLampe:!0,lancementsMax:3,histoire:[["lambda","Dossier rouge. Kevin a préparé une lettre pour le client mystère. Elle est pleine de pièges."],["gerard","Et la lampe est en panne ce matin. Tu devras lire le programme toi-même."],["lambda","La feuille doit dire, ligne par ligne : Le, colis, est, parti. Tu as droit à 3 essais ratés. Au 4e, je reprends le dossier et tu recommences tout."],["kevin","Les guillemets sont comptés. Il n'y en a pas un de trop. Bon courage."]],mission:"Fais imprimer quatre feuilles : « Le », « colis », « est », « parti ». 3 essais ratés au plus.",expectKind:"feuille",palette:["print"],places:4,depart:['print("parti")',"print(est)",'print("co" "lis")','print("Le)','print("parti")'],example:[],expected:()=>["Le","colis","est","parti"],logic:["G54"],etoiles:{taille:4,vitesse:4},visa:"PIEGE",gags:["G03","G12","G48","G49","G50","G52","G54"],solution:['print("Le")','print("colis")','print("est")','print("parti")'],declencheurs:{G03:['print("Le)','print("colis")','print("est")','print("parti")'],G12:['print("Le")','print("colis")',"print(est)",'print("parti")'],G48:['print("Le")','print("est")','print("colis")','print("parti")'],G49:['print("Le")','print("colis")','print("est")','print("parti")',"print()"],G50:['print("Le")','print("colis")','print("est")'],G52:[],G54:['print("parti")','print("est")','print("colis")','print("Le")']},aides:["Quatre feuilles, dans l'ordre : Le, colis, est, parti. Et rien d'autre.","Lis chaque ligne comme la lampe : où commence le texte, où finit-il ?","Une ligne en double ? Jette-la dans la corbeille : ses lettres et ses guillemets reviennent sur la table.",'Compte les guillemets : il en faut 8. Il en manque ? "co" "lis" en utilise 4. Il pourrait en utiliser 2.',"Toujours bloqué ? Appelle le prof."]},{id:"1.5",titre:"Le colis à l'envers",notion:"Casier (variable), parenthèses à fermer soi-même",parenLibre:!0,boite:[")"],histoire:[["lambda","Le client mystère veut ses deux colis à l'envers : le 2e d'abord, puis le 1er. Il dit que ça porte bonheur."],["kevin","Facile. Enfin, moi, je n'ai jamais réussi."],["lambda","Autre chose : Rosa a cassé les parenthèses fermantes des tampons. Les « ) » sont dans la boîte à lettres. Python ne devine rien : si tu en oublies une, il colle les lignes."]],impossible:{apres:2,palette:["ranger"],boite:["a"],histoire:[["monique","Tu tournes en rond. C'est normal : avec ces blocs-là, c'est impossible. Le 1er colis arrive en premier et il doit partir en dernier. Il faut le poser quelque part."],["monique","Voici un casier. a = recevoir() range le colis dans le casier nommé a. Plus tard, envoyer(a) envoie ce qu'il y a dedans."],["monique","Un casier, c'est une étiquette sur une boîte. Son nom s'écrit sans guillemets : a est un nom, pas un texte. La lettre a est dans la boîte à lettres."]]},mission:"Envoie les 2 colis dans l'ordre inverse : le 2e d'abord, puis le 1er.",expectKind:"colis",palette:["envoyer","recevoir"],places:4,example:[5,8],gen:s=>s.distinct(2,1,9),expected:s=>[s[1],s[0]],logic:["G54"],etoiles:{taille:5,vitesse:3},visa:"CASIER",gags:["G02","G10","G19","G47","G48","G49","G50","G52","G54"],solution:["a = recevoir()","envoyer(recevoir())","envoyer(a)"],declencheurs:{G02:["envoyer(recevoir()"],G10:["envoyer(a)","a = recevoir()","envoyer(recevoir())"],G19:["envoyer()"],G47:xt(["envoyer(recevoir())"],3),G48:["a = recevoir()","envoyer(a)","envoyer(a)"],G49:["a = recevoir()","envoyer(recevoir())","envoyer(a)","envoyer(a)"],G50:["a = recevoir()","envoyer(recevoir())"],G52:[],G54:xt(["envoyer(recevoir())"],2)},aides:["Le 1er colis arrive en premier, mais il doit partir en dernier.","Avec seulement recevoir() et envoyer( ), est-ce possible ? Essaie deux fois : quelqu'un viendra peut-être t'aider.","Il faut garder le 1er colis de côté pendant que le 2e part. C'est le rôle du casier de Monique.","Range le 1er dans le casier a. Envoie directement le 2e. Puis envoie ce qu'il y a dans a. Compte tes « ( » et tes « ) » sur chaque ligne.","Toujours bloqué ? Appelle le prof."]},{id:"2.1",titre:"Le colis en double",notion:"Un casier garde sa valeur",parenLibre:!0,boite:[")","a",'"'],histoire:[["monique","Bienvenue à la compta. Ici, on range. Un casier, c'est une étiquette sur une boîte : la boîte garde ce qu'on y met."],["lambda","Le client veut ses 3 colis, dans l'ordre. Puis, à la fin, encore une fois le premier. Il dit qu'il l'aime bien."],["kevin","Facile, je mets des guillemets partout. Les guillemets, ça rassure."]],mission:"Envoie les 3 colis dans l'ordre, puis encore une fois le 1er.",expectKind:"colis",palette:["envoyer","recevoir","ranger"],places:4,example:[6,2,9],gen:s=>s.distinct(3,1,9),expected:s=>[s[0],s[1],s[2],s[0]],logic:["G20"],etoiles:{taille:8,vitesse:5},visa:"DOUBLE",gags:["G02","G10","G20","G47","G48","G49","G50","G52"],solution:["a = recevoir()","envoyer(a)","envoyer(recevoir())","envoyer(recevoir())","envoyer(a)"],declencheurs:{G02:["envoyer(recevoir()"],G10:["envoyer(a)","a = recevoir()","envoyer(recevoir())","envoyer(recevoir())","envoyer(a)"],G20:["a = recevoir()",'envoyer("a")',"envoyer(recevoir())","envoyer(recevoir())",'envoyer("a")'],G47:xt(["envoyer(recevoir())"],4),G48:["a = recevoir()","envoyer(a)","envoyer(a)","envoyer(recevoir())","envoyer(recevoir())"],G49:["a = recevoir()","envoyer(a)","envoyer(recevoir())","envoyer(recevoir())","envoyer(a)","envoyer(a)"],G50:["a = recevoir()","envoyer(a)","envoyer(recevoir())","envoyer(recevoir())"],G52:[]},aides:["Le 1er colis part deux fois : au début et à la fin.","Quand le 3e colis part, le 1er est parti depuis longtemps. Où le retrouver ?","Range le 1er colis dans le casier a. Envoyer ce qu'il y a dans a ne vide pas le casier.",'a = recevoir(), envoyer(a), puis les deux autres colis, puis encore envoyer(a). Et sans guillemets : "a" est la lettre a, pas le casier.',"Toujours bloqué ? Appelle le prof."]},{id:"2.2",titre:"La navette",notion:"Réutiliser un même casier",parenLibre:!0,boite:[")","a","b"],histoire:[["lambda","Six colis, par paires. Pour chaque paire, le client veut le 2e d'abord, puis le 1er."],["monique","Et pas de gaspillage : un seul casier suffit. Je l'ai vérifié, avec mon café."]],mission:"Pour chaque paire de colis, envoie le 2e puis le 1er.",expectKind:"colis",palette:["envoyer","recevoir","ranger"],places:6,example:[3,8,1,6,4,9],gen:s=>s.distinct(6,1,9),expected:s=>[s[1],s[0],s[3],s[2],s[5],s[4]],logic:["G57"],etoiles:{taille:15,vitesse:9},visa:"NAVETTE",gags:["G02","G10","G47","G48","G49","G50","G52","G57"],solution:xt(["a = recevoir()","envoyer(recevoir())","envoyer(a)"],3),declencheurs:{G02:["envoyer(recevoir()"],G10:["envoyer(a)","a = recevoir()"],G47:xt(["envoyer(recevoir())"],7),G48:["a = recevoir()","envoyer(recevoir())","envoyer(a)",...xt(["envoyer(recevoir())"],4)],G49:[...xt(["a = recevoir()","envoyer(recevoir())","envoyer(a)"],3),"envoyer(a)"],G50:xt(["a = recevoir()","envoyer(recevoir())","envoyer(a)"],2),G52:[],G57:xt(["envoyer(recevoir())"],6)},aides:["Le client veut : 2e, 1er, 4e, 3e, 6e, 5e.","Pour chaque paire, le 1er colis doit attendre que le 2e soit parti.","Le 1er de chaque paire va dans le casier a. Le 2e part tout de suite.","Trois fois les mêmes trois lignes : a = recevoir(), envoyer(recevoir()), envoyer(a). Le casier a sert trois fois.","Toujours bloqué ? Appelle le prof."]},{id:"2.3",titre:"La photocopieuse",notion:"Lire un casier ne le vide pas, le remplir le remplace",parenLibre:!0,boite:[")","a","b"],histoire:[["gerard","La photocopieuse est en panne. Alors le client veut chaque colis en trois exemplaires. Débrouille-toi."],["monique","Un casier qu'on lit garde son contenu. On peut le lire autant de fois qu'on veut."],["kevin","Moi, j'ai rangé le premier colis et j'ai envoyé le casier six fois. Le client a appelé la police."]],mission:"Envoie chaque colis trois fois : le 1er trois fois, puis le 2e trois fois.",expectKind:"colis",palette:["envoyer","recevoir","ranger"],places:4,example:[7,3],gen:s=>s.distinct(2,1,9),expected:s=>[s[0],s[0],s[0],s[1],s[1],s[1]],logic:["G58"],etoiles:{taille:10,vitesse:8},visa:"COPIE",gags:["G02","G10","G47","G48","G49","G50","G52","G58"],solution:["a = recevoir()","envoyer(a)","envoyer(a)","envoyer(a)","a = recevoir()","envoyer(a)","envoyer(a)","envoyer(a)"],declencheurs:{G02:["envoyer(recevoir()"],G10:["envoyer(a)","a = recevoir()"],G47:["a = recevoir()","a = recevoir()","a = recevoir()"],G48:["a = recevoir()","envoyer(a)","envoyer(a)","a = recevoir()","envoyer(a)","envoyer(a)","envoyer(a)","envoyer(a)"],G49:["a = recevoir()","envoyer(a)","envoyer(a)","envoyer(a)","a = recevoir()","envoyer(a)","envoyer(a)","envoyer(a)","envoyer(a)"],G50:["a = recevoir()","envoyer(a)","envoyer(a)","envoyer(a)","a = recevoir()","envoyer(a)"],G52:[],G58:["a = recevoir()",...xt(["envoyer(a)"],6)]},aides:["Six colis partent, mais seulement deux arrivent.","Envoyer le contenu d'un casier ne le vide pas.","Pour passer au 2e colis, il faut le ranger : a = recevoir() une deuxième fois. L'étiquette a reste, le contenu change.","a = recevoir(), trois fois envoyer(a), puis encore a = recevoir() et trois fois envoyer(a).","Toujours bloqué ? Appelle le prof."]},{id:"2.4",titre:"Le grand écart",notion:"Plusieurs casiers, plusieurs noms",parenLibre:!0,boite:[")","a","b","c"],histoire:[["lambda","Quatre colis. Le client veut le 4e, puis le 1er, puis le 3e, puis le 2e. Ne me demande pas pourquoi."],["monique","Trois colis doivent attendre en même temps. Il te faudra trois casiers, avec trois noms différents."]],mission:"Envoie le 4e colis, puis le 1er, puis le 3e, puis le 2e.",expectKind:"colis",palette:["envoyer","recevoir","ranger"],places:4,example:[5,2,8,6],gen:s=>s.distinct(4,1,9),expected:s=>[s[3],s[0],s[2],s[1]],logic:["G57"],etoiles:{taille:11,vitesse:7},visa:"ECART",gags:["G02","G10","G47","G48","G49","G50","G52","G57"],solution:["a = recevoir()","b = recevoir()","c = recevoir()","envoyer(recevoir())","envoyer(a)","envoyer(c)","envoyer(b)"],declencheurs:{G02:["envoyer(recevoir()"],G10:["a = recevoir()","envoyer(b)","b = recevoir()"],G47:xt(["envoyer(recevoir())"],5),G48:["a = recevoir()","b = recevoir()","c = recevoir()","envoyer(recevoir())","envoyer(a)","envoyer(b)","envoyer(c)"],G49:["a = recevoir()","b = recevoir()","c = recevoir()","envoyer(recevoir())","envoyer(a)","envoyer(c)","envoyer(b)","envoyer(a)"],G50:["a = recevoir()","b = recevoir()","c = recevoir()","envoyer(recevoir())","envoyer(a)"],G52:[],G57:xt(["envoyer(recevoir())"],4)},aides:["Le 4e colis part en premier : les trois autres doivent attendre.","Un casier ne garde qu'un colis. Combien de colis attendent en même temps ?","Range le 1er dans a, le 2e dans b, le 3e dans c. Le 4e part tout de suite.","Ensuite, dans l'ordre du client : envoyer(a), envoyer(c), envoyer(b).","Toujours bloqué ? Appelle le prof."]},{id:"2.5",titre:"Bilan : la chaîne de casiers",notion:"Synthèse : le moins de casiers possible",bilan:!0,parenLibre:!0,boite:[")","a","b","c"],histoire:[["lambda","Trois colis. Le client veut le 2e, puis le 3e, puis le 1er : chacun avance d'une place, et le premier passe à la fin."],["monique","Les casiers coûtent cher à la compta. L'étoile de taille, c'est 7 blocs. Réfléchis avant de tout ranger."]],mission:"Envoie le 2e colis, puis le 3e, puis le 1er. Pour l'étoile : 7 blocs au plus.",expectKind:"colis",palette:["envoyer","recevoir","ranger"],places:4,example:[4,7,1],gen:s=>s.distinct(3,1,9),expected:s=>[s[1],s[2],s[0]],logic:["G54","G57"],etoiles:{taille:7,vitesse:4},visa:"CHAINE",gags:["G02","G10","G47","G48","G49","G50","G52","G54","G57"],solution:["a = recevoir()","envoyer(recevoir())","envoyer(recevoir())","envoyer(a)"],declencheurs:{G02:["envoyer(recevoir()"],G10:["envoyer(a)","a = recevoir()"],G47:xt(["envoyer(recevoir())"],4),G48:["a = recevoir()","envoyer(recevoir())","envoyer(a)","envoyer(recevoir())"],G49:["a = recevoir()","envoyer(recevoir())","envoyer(recevoir())","envoyer(a)","envoyer(a)"],G50:["a = recevoir()","envoyer(recevoir())","envoyer(recevoir())"],G52:[],G54:["a = recevoir()","b = recevoir()","envoyer(a)","envoyer(recevoir())","envoyer(b)"],G57:xt(["envoyer(recevoir())"],3)},aides:["Le client veut : 2e, 3e, 1er.","Quel colis doit attendre ? Un seul, ou plusieurs ?","Seul le 1er attend. Les deux autres peuvent partir dès qu'ils arrivent.","a = recevoir(), puis deux fois envoyer(recevoir()), puis envoyer(a). Un seul casier : 7 blocs.","Toujours bloqué ? Appelle le prof."]},{id:"2.R",titre:"Dossier rouge : le tapis retourné",notion:"Quatre casiers, sans lampe",rouge:!0,parenLibre:!0,boite:[")","a","b","c","d"],sansLampe:!0,lancementsMax:3,histoire:[["lambda","Dossier rouge. Cinq colis, et le client les veut dans l'ordre inverse : le 5e d'abord, le 1er à la fin."],["gerard","La lampe est encore en panne. Et l'étagère n'a que quatre cases."],["lambda","Tu as droit à 3 essais ratés. Au 4e, je reprends le dossier."]],mission:"Envoie les 5 colis dans l'ordre inverse. 4 casiers au plus, 3 essais ratés au plus.",expectKind:"colis",palette:["envoyer","recevoir","ranger"],places:5,example:[2,9,4,7,1],gen:s=>s.distinct(5,1,9),expected:s=>s.slice().reverse(),logic:["G54"],etoiles:{taille:14,vitesse:9},visa:"RETOUR",gags:["G02","G10","G47","G48","G49","G50","G52","G54"],solution:["a = recevoir()","b = recevoir()","c = recevoir()","d = recevoir()","envoyer(recevoir())","envoyer(d)","envoyer(c)","envoyer(b)","envoyer(a)"],declencheurs:{G02:["envoyer(recevoir()"],G10:["a = recevoir()","envoyer(b)"],G47:xt(["envoyer(recevoir())"],6),G48:["a = recevoir()","b = recevoir()","c = recevoir()","d = recevoir()","envoyer(recevoir())","envoyer(a)","envoyer(b)","envoyer(c)","envoyer(d)"],G49:["a = recevoir()","b = recevoir()","c = recevoir()","d = recevoir()","envoyer(recevoir())","envoyer(d)","envoyer(c)","envoyer(b)","envoyer(a)","envoyer(a)"],G50:["a = recevoir()","b = recevoir()","c = recevoir()","d = recevoir()","envoyer(recevoir())","envoyer(d)"],G52:[],G54:xt(["envoyer(recevoir())"],5)},aides:["Le 5e part en premier, le 1er en dernier.","Combien de colis doivent attendre en même temps ? Ça fait combien de casiers ?","Quatre casiers a, b, c, d pour les quatre premiers. Le 5e part tout de suite.","Puis on vide à l'envers : envoyer(d), envoyer(c), envoyer(b), envoyer(a).","Toujours bloqué ? Appelle le prof."]}],vo=3,Nh=["Bonjour","Merci","Colis","Client","Lundi","Facture","Stylo","Carton","Bureau","Tampon","Agrafe","Dossier"],_o=(s,e)=>e[s.int(0,e.length-1)];function ux(s,e){const t=e.slice();for(let n=t.length-1;n>0;n--){const i=s.int(0,n);[t[n],t[i]]=[t[i],t[n]]}return t}const Uh={id:"chat",texte:"Le chat sort d'un tiroir (casier introuvable)",genre:"gag",python:"NameError"},Fh={id:"encre",texte:"L'encre déborde (guillemet pas fermé)",genre:"gag",python:"SyntaxError : unterminated string"},Oh={id:"kevin",texte:"Kevin est perplexe (ligne illisible)",genre:"gag",python:"SyntaxError : invalid syntax"},hx={id:"tapis",texte:"Le tapis emporte le stagiaire (tapis vide)",genre:"gag",python:"EOFError, comme input()"};function ar(s,e){let t;try{t=bh(s)}catch(o){if(!(o instanceof Ct))throw o;const a=o.gag==="G03"?"encre":"kevin";return{jetons:[a],explication:[`Ligne ${o.ligne+1} : ${a==="encre"?"le texte n'est jamais refermé, la lampe s'emballe":"Python ne sait pas lire cette ligne"}.`,"Python lit tout le programme avant d'exécuter la première ligne. Comme une ligne est illisible, rien ne s'exécute, même pas les lignes du dessus."]}}const n=Sh(t,e),i=[],r=[];for(const o of n.trace){if(o.act==="recevoir"){const a=n.trace[n.trace.indexOf(o)+1],l=a&&a.line===o.line&&(a.act==="envoyer"||a.act==="print");if((a==null?void 0:a.act)==="assign"&&a.line===o.line){const c=a.names[0];r.push(`Ligne ${o.line+1} : le colis ${Ut(o.value)} est rangé dans le casier ${c}${o.env[c]!==void 0?`, à la place de ${Ut(o.env[c])} (l'étiquette reste, le contenu change)`:""}.`)}else l||r.push(`Ligne ${o.line+1} : recevoir() prend le colis ${Ut(o.value)}. Il n'est pas envoyé.`)}if(o.act==="envoyer"&&(i.push(`colis:${Ut(o.value)}`),r.push(`Ligne ${o.line+1} : le colis ${Ut(o.value)} part chez le client.`)),o.act==="print"){const a=Ut(o.value);i.push(`feuille:${a}`);const l=n.trace[n.trace.indexOf(o)-1];r.push((l==null?void 0:l.act)==="recevoir"&&l.line===o.line?`Ligne ${o.line+1} : Gérard copie l'étiquette du colis ${a} et imprime son bordereau. Le colis, lui, ne part pas chez le client.`:`Ligne ${o.line+1} : Gérard imprime une feuille « ${a} ».`)}}if(n.error){const o=n.error.type==="NameError"?"chat":n.error.type==="TapisVide"?"tapis":"kevin";i.push(o),r.push(o==="chat"?`Ligne ${n.error.ligne+1} : ${n.error.nom} n'a pas de guillemets, c'est donc un nom de casier. Il n'existe pas : le programme s'arrête là. Les lignes du dessus ont déjà été exécutées.`:o==="tapis"?`Ligne ${n.error.ligne+1} : recevoir() alors que le tapis est vide. Le programme s'arrête là.`:`Ligne ${n.error.ligne+1} : erreur, le programme s'arrête.`)}return r.length||r.push("Rien ne sort."),{jetons:i,explication:r}}const kl=s=>({id:`colis:${Ut(s)}`,texte:Ut(s),genre:"colis"}),Bh=s=>({id:`feuille:${s}`,texte:s,genre:"feuille"});function dx(s){const e=s.distinct(4,1,9);let t;do{const i=s.int(3,4);t=Array.from({length:i},()=>s.int(0,1)?"envoyer(recevoir())":"recevoir()")}while(!t.some(i=>i.startsWith("envoyer"))||t.every(i=>i.startsWith("envoyer")));const n=ar(t,e);return{consigne:"Quels colis arrivent chez le client, dans l'ordre ? Clique-les dans l'ordre.",programme:t,tapis:e,jetons:e.map(kl),reponse:n.jetons,unique:!1,explication:n.explication}}function fx(s){const e=_o(s,Nh),t=s.int(1,e.length-1),n=e.slice(0,t),i=e.slice(t),r=_o(s,[`print("${e}")`,`print("${n}" "${i}")`,`print(${e})`,`print("${e})`,`print(${n}"${i}")`,`print("${n}"${i})`]),o=ar([r],[]),a={id:o.jetons[0].startsWith("feuille:")?o.jetons[0]:`feuille:${e}`,texte:`Il imprime une feuille « ${e} »`,genre:"feuille"};return{consigne:"Que se passe-t-il quand on lance cette ligne ?",programme:[r],tapis:[],jetons:[a,Uh,Fh,Oh],reponse:o.jetons,unique:!0,explication:o.explication}}function kh(s,e){const t=ux(s,Nh).slice(0,e?4:3),n=s.int(0,e?4:3),i=s.int(0,t.length-1),r=t.map((a,l)=>{const c=Math.max(1,Math.floor(a.length/2));return e&&l!==i&&s.int(0,2)===0?`print("${a.slice(0,c)}" "${a.slice(c)}")`:l!==i||n===0?`print("${a}")`:n===1?`print(${a})`:n===2?`print("${a})`:n===3?`print("${a}" ${a.slice(0,3).toLowerCase()})`:`print("${a.slice(0,c)}"${a.slice(c)}")`}),o=ar(r,[]);return{consigne:"Qu'est-ce qui sort de Gérard, dans l'ordre ? S'il y a un gag, termine par le gag.",programme:r,tapis:[],jetons:[...t.map(Bh),Uh,Fh,Oh],reponse:o.jetons,unique:!1,explication:o.explication}}function px(s){const e=s.distinct(5,1,9),t=s.int(4,5);let n;do n=Array.from({length:t},()=>_o(s,["envoyer(recevoir())","recevoir()","print(recevoir())"]));while(n.every(r=>r==="recevoir()"));s.int(0,4)===0&&n.push("envoyer(recevoir())");const i=ar(n,e);return{consigne:"Qu'est-ce qui sort, dans l'ordre ? envoyer( ) fait partir un colis chez le client. print( ) fait imprimer par Gérard le bordereau du colis : le colis, lui, ne part pas. S'il y a un gag, termine par le gag.",programme:n,tapis:e,jetons:[...e.map(kl),...e.map(r=>({...Bh(Ut(r)),texte:`Bordereau ${Ut(r)}`})),hx],reponse:i.jetons,unique:!1,explication:i.explication}}function zh(s){const e=s.distinct(5,1,9);let t;do{t=[];const i=new Set,r=s.int(4,5);let o=0;for(;t.length<r;){const a=s.int(0,5);if(a<=1&&o<5){const l=a?"b":"a";t.push(`${l} = recevoir()`),i.add(l),o++}else a===2&&o<5?(t.push("envoyer(recevoir())"),o++):a===3&&o<5?(t.push("recevoir()"),o++):i.size&&t.push(`envoyer(${_o(s,[...i])})`)}}while(!t.some(i=>/envoyer\([ab]\)/.test(i)));const n=ar(t,e);return{consigne:"Quels colis arrivent chez le client, dans l'ordre ? Un même colis peut partir plusieurs fois : clique-le autant de fois.",programme:t,tapis:e,jetons:e.map(kl),reponse:n.jetons,unique:!1,repetable:!0,explication:n.explication}}function mx(s,e){switch(s){case"1.5":return zh(e);case"2.1":case"2.2":case"2.3":case"2.4":case"2.5":case"2.R":return zh(e);case"1.1":return dx(e);case"1.2":return fx(e);case"1.3":return kh(e,!1);case"1.4":return px(e);default:return kh(e,!0)}}const gx=(s,e)=>e.length===s.reponse.length&&e.every((t,n)=>t===s.reponse[n]);function zl(s,e,t){const n=e.trim().toLowerCase().normalize("NFD").replace(/[^a-z]/g,"")+"|"+t;let i=7;for(const r of n)i=(i*31+r.charCodeAt(0))%9973;return`${s}-${String(10+i%90)}`}function vx(s,e,t){var r;const n=o=>o.toUpperCase().normalize("NFD").replace(/[^A-Z0-9]/g,""),i=n(s);return i?((r=t.find(o=>n(zl(o.visa,e,o.id))===i))==null?void 0:r.id)??null:null}const Gh=[[72,1],[74,1],[76,1],[72,1],[79,2],[76,1],[0,1],[77,1],[76,1],[74,1],[72,1],[71,2],[67,2],[72,1],[74,1],[76,1],[77,1],[79,1],[81,1],[79,1],[76,1],[74,1],[79,1],[71,1],[74,1],[72,2],[0,2],[76,1],[76,1],[77,1],[79,1],[84,2],[81,1],[79,1],[77,1],[77,1],[76,1],[74,1],[76,2],[72,2],[69,1],[71,1],[72,1],[74,1],[76,1],[74,1],[72,1],[71,1],[72,1],[67,1],[64,1],[67,1],[72,2],[0,2]],Hh=[48,48,53,55,48,53,55,48],Vh=s=>440*Math.pow(2,(s-69)/12);class _x{constructor(){te(this,"ctx",null);te(this,"minuterie",null);te(this,"prochaine",0);te(this,"pas",0);te(this,"muet",!1)}demarrer(e=220){if(this.muet||this.minuterie!==null)return;this.ctx??(this.ctx=new AudioContext),this.ctx.resume();const t=30/e;this.prochaine=this.ctx.currentTime+.05,this.pas=0;const n=Gh.reduce((a,[,l])=>a+l,0),i=[];let r=0;for(const[a,l]of Gh)i.push({t:r,m:a,d:l}),r+=l;const o=()=>{const a=this.ctx;for(;this.prochaine<a.currentTime+.2;){const l=this.pas%n,c=i.find(u=>u.t===l);if(c&&c.m&&this.note(Vh(c.m),this.prochaine,c.d*t*.8,"square",.07),l%2===0){const u=Math.floor(l/8)%Hh.length,h=Hh[u];this.note(Vh(l%4===0?h:h+7),this.prochaine,t*.7,"triangle",.16),l%4===2&&this.bruit(this.prochaine,.05)}this.prochaine+=t,this.pas++}};o(),this.minuterie=window.setInterval(o,50)}arreter(){this.minuterie!==null&&clearInterval(this.minuterie),this.minuterie=null}note(e,t,n,i,r){const o=this.ctx,a=o.createOscillator(),l=o.createGain();a.type=i,a.frequency.setValueAtTime(e,t),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(r,t+.01),l.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(l).connect(o.destination),a.start(t),a.stop(t+n+.02)}bruit(e,t){const n=this.ctx,i=n.createBuffer(1,Math.floor(n.sampleRate*t),n.sampleRate),r=i.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*(1-l/r.length);const o=n.createBufferSource(),a=n.createGain();a.gain.value=.08,o.buffer=i,o.connect(a).connect(n.destination),o.start(e)}choc(e){if(this.muet)return;this.ctx??(this.ctx=new AudioContext),this.ctx.resume();const t=this.ctx,n=t.currentTime,i=t.createOscillator(),r=t.createGain();i.type="square";const o=[520,390,300,230,180][e%5];i.frequency.setValueAtTime(o,n),i.frequency.exponentialRampToValueAtTime(o/3,n+.18),r.gain.setValueAtTime(.12,n),r.gain.exponentialRampToValueAtTime(.001,n+.22),i.connect(r).connect(t.destination),i.start(n),i.stop(n+.25);const a=Math.floor(t.sampleRate*.08),l=t.createBuffer(1,a,t.sampleRate),c=l.getChannelData(0);for(let d=0;d<a;d++)c[d]=(Math.random()*2-1)*(1-d/a);const u=t.createBufferSource(),h=t.createGain();u.buffer=l,h.gain.value=.18,u.connect(h).connect(t.destination),u.start(n)}imprimer(e){if(this.muet||e<150)return;this.ctx??(this.ctx=new AudioContext),this.ctx.resume();const t=this.ctx,n=t.currentTime,i=e/1e3,r=t.createOscillator(),o=t.createGain(),a=t.createOscillator(),l=t.createGain();r.type="sawtooth",r.frequency.value=95,a.type="square",a.frequency.value=9,l.gain.value=.035,a.connect(l).connect(o.gain),o.gain.setValueAtTime(.04,n),o.gain.setValueAtTime(.04,n+i-.05),o.gain.linearRampToValueAtTime(0,n+i);const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=900,r.connect(c).connect(o).connect(t.destination),r.start(n),a.start(n),r.stop(n+i),a.stop(n+i)}}const Ce=s=>document.getElementById(s),xo=new URLSearchParams(location.search).has("prof"),Wh="pyperasse-3d-v1";let Dt=(()=>{try{const s=JSON.parse(localStorage.getItem(Wh)??"null");if((s==null?void 0:s.v)===1)return s}catch{}return{v:1,niveaux:{},album:{},journal:[],vitesse:"normal",calme:!1}})();const wn=()=>{try{localStorage.setItem(Wh,JSON.stringify(Dt))}catch{}},Gt=s=>{var e;return(e=Dt.niveaux)[s]??(e[s]={fait:!1,etoiles:[!1,!1,!1],gags:[],aides:0,temps:0,essais:0,dernier:"",degats:0,serie:[]})},Be=new tx(Ce("scene"),Ce("calque")),Rn=new sx(Ce("tete")),mn=new _x,qh="pyperasse-muet";try{mn.muet=localStorage.getItem(qh)==="1"}catch{}Be.surChoc=s=>mn.choc(s),Be.surImpression=s=>mn.imprimer(s);let xe=Kt[0],wi=!1,Ri=!1,yo=0,Gl=0;const Te=new lx(Ce("programme"),Ce("palette"),{versScene:(s,e,t)=>(Be.assurerTuile(s.id,s.ch),e>=0&&!Be.surLaTable(e,t)?!1:Be.poserSurTable(s.id)),annuler3D:s=>{Be.assurerTuile(s.id,s.ch),Be.remettre(s.id)},changement:()=>Xh()}),bo=new Map;Ce("scene").addEventListener("pointerdown",s=>{if(wi||!Te.actif)return;const e=Be.tuileSous(s.clientX,s.clientY);if(e===null)return;const t=bo.get(e);t!==void 0&&(Be.retirerTuile(e),Te.commencerDepuis3D(s,{id:e,ch:t}))}),Ce("scene").addEventListener("pointermove",s=>{wi||(Ce("scene").style.cursor=Be.tuileSous(s.clientX,s.clientY)!==null?"grab":"default")});function Xh(){const s=Te.lignes();Ce("python").textContent=s.length?s.join(`
`):"# programme vide";const e=Ih(Te.blocs);Ce("compte").textContent=`${e} bloc${e>1?"s":""} · étoile : ${xe.etoiles.taille} au plus`}const Hl={pas:{nom:"Lettre par lettre",car:140,fact:1.8},lent:{nom:"Lent",car:140,fact:1.8},normal:{nom:"Normal",car:60,fact:1},turbo:{nom:"Turbo",car:12,fact:.25},direct:{nom:"Résultat direct",car:0,fact:.04}};function jh(){const s=Ce("vitesses");s.innerHTML="";for(const[e,t]of Object.entries(Hl)){const n=document.createElement("button");n.className=`vit${Dt.vitesse===e?" on":""}`,n.textContent=t.nom,n.onclick=()=>{Dt.vitesse=e,wn(),jh(),Be.vitesse=t.fact},s.appendChild(n)}Be.vitesse=Hl[Dt.vitesse].fact}function Vl(s){return s.gags.filter(e=>Gt(s.id).gags.includes(e)).length}const xx=s=>s.etoiles.map(e=>e?"★":"☆").join("");function yx(s){for(let e=Kt.indexOf(s)-1;e>=0;e--)if(!Kt[e].rouge)return Kt[e]}function bx(s){if(xo)return!0;if(!Dt.badge)return!1;const e=yx(s);return!e||Gt(e.id).fait&&!!Gt(e.id).controle}function Ci(){Mx();const s=Ce("cartes");s.innerHTML="";for(const e of Kt){const t=Gt(e.id),n=bx(e),i=document.createElement("button");i.className=`carte${n?"":" ferme"}${t.fait?" fait":""}${e.rouge?" rouge":""}`,i.disabled=!n;const r=Vl(e);i.innerHTML=`<b>${e.id}</b><span class="t">${e.titre}</span><span class="e">${t.fait?xx(t):""}</span><span class="g">Gags : ${r} sur ${e.gags.length}</span>${t.fait&&!t.controle?'<span class="g">Contrôle à passer</span>':""}${t.controle?'<span class="g">Visa obtenu</span>':""}${r===e.gags.length?'<span class="tampon-bet">Bêtisier complet</span>':""}`,i.onclick=()=>Es(e),s.appendChild(i)}Ce("menu").classList.remove("cache")}function Mx(){var i,r,o;const s=Ce("badge"),e=Dt.badge??"";s.innerHTML=e?`<span>Badge : <b>${e.replace(/</g,"")}</b></span> <button id="badge-change">Changer</button>
       <div class="code-niveau"><label>Code de niveau (noté sur ta fiche) : <input id="code-niveau" maxlength="20" placeholder="EXEMPLE-00"></label> <button id="code-ok">Reprendre</button> <span id="code-msg"></span></div>`:'<label>Ton badge de stagiaire (prénom et initiale du nom) : <input id="badge-nom" maxlength="24" placeholder="Lina B."></label> <button id="badge-ok">Valider</button>',(i=document.getElementById("badge-change"))==null||i.addEventListener("click",()=>{Dt.badge=void 0,wn(),Ci()}),(r=document.getElementById("badge-ok"))==null||r.addEventListener("click",()=>{const a=document.getElementById("badge-nom").value.trim();a.length<2||(Dt.badge=a,wn(),Ci())});const t=document.getElementById("code-niveau"),n=()=>{const a=vx(t.value,e,Kt);if(!a){Ce("code-msg").textContent="Code inconnu pour ce badge. Vérifie les lettres, le numéro et ton badge.";return}const l=Kt.findIndex(c=>c.id===a);Kt.slice(0,l+1).forEach(c=>{if(c.rouge&&c.id!==a)return;const u=Gt(c.id);u.fait=!0,u.controle=!0}),wn(),Ci(),Ce("code-msg").textContent=`Progression retrouvée jusqu'au niveau ${a}.`};if((o=document.getElementById("code-ok"))==null||o.addEventListener("click",n),t==null||t.addEventListener("keydown",a=>{a.key==="Enter"&&n()}),xo){s.insertAdjacentHTML("beforeend",'<div class="prof-codes">Mode prof. Codes visa du badge <input id="prof-badge" placeholder="Lina B."> <span id="prof-liste"></span></div>');const a=document.getElementById("prof-badge");a.oninput=()=>{Ce("prof-liste").textContent=Kt.map(l=>`${l.id} : ${zl(l.visa,a.value,l.id)}`).join(" · ")}}}async function Es(s){var n,i;xe=s,yo=0,Ce("menu").classList.add("cache"),As(),bo.clear();let e=0;(n=s.morceaux)==null||n.forEach((r,o)=>bo.set(o,r)),Te.blocs=(s.depart??[]).map(r=>{var a;const o=ox(r,100+e);return e+=r.length,(a=o.fente)==null||a.tuiles.forEach(l=>bo.set(l.id,l.ch)),o}),Gl=0,$h(s),Te.afficher(),Xh();const t=(((i=s.morceaux)==null?void 0:i.length)??0)+(s.depart?24:0);Be.preparer({places:s.places,colis:s.expectKind==="colis"?s.example:void 0,morceaux:s.morceaux,placesTable:t?s.depart?24:6:0}),Be.degats(Gt(s.id).degats),Ce("titre").textContent=`${s.id} · ${s.titre}`,Ce("mission").textContent=s.mission,Wl(),await Yh(s.histoire)}function $h(s){const e=Gt(s.id),t=s.impossible&&(e.revele||e.fait)?s.impossible:null;Te.parenLibre=!!s.parenLibre,Te.palette=[...s.palette,...(t==null?void 0:t.palette)??[]],Te.boite=[...s.boite??[],...(t==null?void 0:t.boite)??[]],Te.afficherPalette()}function Wl(){const s=Gt(xe.id),e=Vl(xe);Ce("gags").textContent=`Gags : ${e} sur ${xe.gags.length}${e===xe.gags.length?" · Bêtisier complet":""}`,Ce("degats").innerHTML=`Dégâts <span>${"■".repeat(s.degats)}${"□".repeat(4-s.degats)}</span>`,jl()}async function Yh(s){Te.actif=!1;for(const[e,t]of s)Be.effacerBulles(),Be.bulle(e,t).insertAdjacentHTML("afterbegin",`<b>${cx[e]}</b><br>`),await new Promise(i=>{const r=Ce("suite");r.classList.remove("cache"),r.onclick=()=>{r.classList.add("cache"),i()}});Be.effacerBulles(),Te.actif=!0}async function Sx(){var l;if(wi)return;wi=!0,Ri=!1,Te.actif=!1,document.body.classList.add("execution"),As();const s=Gt(xe.id),e=Te.lignes(),t=Ih(Te.blocs),n=W_(xe,e,Math.floor(Math.random()*1e9),t),i=e.join(`
`),r=t>0&&i!==s.dernier;r&&(s.essais++,s.dernier=i),wn();const o=Hl[Dt.vitesse];Te.effacerLecture(),Ce("phase").textContent=xe.sansLampe?"La lampe est en panne : Python lit le programme dans le noir...":"La lampe lit le programme...";const a=((l=n.error)==null?void 0:l.type)==="SyntaxError"?n.error.ligne:-1;if(xe.sansLampe&&await gt(500),xe.sansLampe||await Tx(e,o.car),a<0&&Be.lampe("repos"),Rn.fermer(),!Ri&&n.shown!==null){Ce("phase").textContent=n.shown===0?"Exécution sur l'exemple":`Le client mystère essaie ses colis (jeu n° ${n.shown+1})`;const c=n.results[n.shown];xe.expectKind==="colis"&&Be.preparer({places:xe.places,colis:c.inputs,placesTable:0});const u=Dt.vitesse==="turbo";Be.frenesie=u,u&&mn.demarrer();for(const h of c.trace){if(Ri)break;await Ex(h)}Ri||await Be.retour(),mn.arreter(),Be.frenesie=!1}Ce("phase").textContent="",Ri?So():await Ax(n,r),wi=!1,Te.actif=!0,document.body.classList.remove("execution")}const Mo=s=>`<code>${Te.codeVisible(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}</code>`;async function Ex(s){var r,o,a;const e=Be.vitesse,t=s.line,n=rr(s.value??null),i=l=>gt(l*e);switch(s.act){case"debut":Te.courante(t),Te.aDedans(t)&&(Te.expliquer(t,Te.codeVisible(t).includes(" = ")?`<b>Ligne ${t+1}</b> : avant de ranger quoi que ce soit, Python exécute ce qui est à droite du <code>=</code>.`:`<b>Ligne ${t+1}</b> : un appel est rangé dans un autre. Python exécute d'abord celui de l'intérieur.`),await i(900));break;case"recevoir":{const l=Te.aDedans(t);Te.avantAppel(t,"recevoir"),Te.expliquer(t,l?"D'abord <code>recevoir()</code> : le stagiaire va prendre le colis suivant sur le tapis.":"<code>recevoir()</code> tout seul : le stagiaire prend un colis. Personne ne s'en sert après."),await Be.jouer(s),l||(Te.expliquer(t,`Personne ne se sert du colis <b>${n}</b> : il va sur la table des oubliés. En Python, cette valeur est perdue.`),await Be.oublier()),l?(Te.rendu(t,n),Te.expliquer(t,`<code>recevoir()</code> a rendu le colis <b>${n}</b>. Il prend sa place dans la ligne : ${Mo(t)}`),await i(1300)):Te.consommer(t);break}case"envoyer":case"print":{Te.avantAppel(t,s.act);const l=Te.lireNom(t,n),c=s.act==="envoyer"?"le stagiaire pose le colis sur le tapis de départ.":l||/^print\(\d/.test(Te.codeVisible(t))?"Gérard copie l'étiquette du colis et imprime son bordereau de livraison. Le colis ne part pas.":"Gérard imprime une feuille.";Te.expliquer(t,`${l?`Le casier <b>${l}</b> contient <b>${n}</b>. `:""}Maintenant ${Mo(t)} : ${c}`),await Be.jouer(s),Te.consommer(t),Te.expliquer(t,s.act==="envoyer"?`${Mo(t)} : fait. Le colis part dans le tuyau.`:`${Mo(t)} : fait. La feuille est sortie.`),await i(500);break}case"assign":{const l=((r=s.names)==null?void 0:r[0])??"";await Be.jouer(s),await Be.ranger(l),Te.consommer(t),Te.expliquer(t,`Je range <b>${rr(s.env[l]??null)}</b> dans le casier <b>${l}</b>. Le casier garde son étiquette, seul le contenu change.`),await i(1100);break}case"erreur":Te.courante(t,!0),Te.expliquer(t,`<b>Erreur ligne ${t+1}</b> : ${((o=s.error)==null?void 0:o.type)==="TapisVide"?"le tapis est vide":`${((a=s.error)==null?void 0:a.type)??""}`}. Le programme s'arrête ici.`),await Be.jouer(s);break;default:await Be.jouer(s)}}async function Tx(s,e){const t=nx(s),n=Dt.vitesse==="pas";Rn.ouvrir(n);const i=async o=>{n?await Rn.attendreClic():e&&await gt(e*o)};let r=-1;for(const o of t.pas){if(Ri)break;o.k==="car"?(Te.lire(o.ligne,o.col,o.classe),Be.lampe(o.classe),Rn.car(o),(o.classe!=="espace"||n)&&await i(o.pensee?7:1)):o.k==="mot"?Rn.mot(o.mot):o.k==="note"?(Rn.penser(o.pensee),await i(10)):o.k==="ligne"?(Rn.penser(o.pensee,o.colle?"colle":"ok"),o.colle&&(r<0&&(r=o.ligne),Te.coller(r,o.ligne+1)),await i(10),o.colle||Rn.viderRuban()):(o.emballee&&(Te.emballer(o.ligne),Be.lampe("texte")),o.colle&&Te.coller(o.colle[0],o.colle[1]),Rn.penser(o.pensee,"erreur"),Be.lampe("erreur"),Te.courante(o.ligne,!0),n?await Rn.attendreClic("Voir ce qui se passe ▸"):await gt(Math.max(2600,e*30)))}}function So(){Te.effacerLecture(),Te.courante(-1),Be.lampe("repos"),xe.expectKind==="colis"&&Be.preparer({places:xe.places,colis:xe.example,placesTable:0})}async function Ax(s,e){var v,g;const t=Gt(xe.id);if(s.status==="ok"){await Be.reussite();const f=[s.blocks<=xe.etoiles.taille,s.steps<=xe.etoiles.vitesse,t.aides===0];t.etoiles=t.etoiles.map((P,R)=>P||f[R]),t.fait=!0;const m=t.serie;t.degats=0,t.serie=[],wn(),Be.degats(0),Wl();const b=Kt.indexOf(xe),x=Kt[b+1],T=t.controle||xo?[["Rejouer",()=>{As(),So()}],["Niveaux",()=>Ci()],...t.controle?[["Mon visa",()=>Kh()]]:[],...x?[["Niveau suivant",()=>void Es(x)]]:[]]:[["Rejouer",()=>{As(),So()}],["Passer le contrôle de Mme Lambda",()=>Eo()]];Ts(`
      <h2>Mission réussie</h2>
      ${xe.example.length?`<p>Le client mystère a vérifié ${s.results.length} jeux de colis : tout est bon.</p>`:""}
      <ul class="etoiles">
        <li>${f[0]?"★":"☆"} Taille : ${s.blocks} bloc(s), objectif ${xe.etoiles.taille} au plus</li>
        <li>${f[1]?"★":"☆"} Vitesse : ${s.steps} pas, objectif ${xe.etoiles.vitesse} au plus</li>
        <li>${f[2]?"★":"☆"} Sans aide</li>
      </ul>
      ${m.length?`<div class="constat"><b>Constat de M. Constat, l'assureur</b><br>${[...new Set(m)].map(P=>{var R;return`${P} · ${((R=Bl[P])==null?void 0:R.nom)??""}`}).join("<br>")}<br>Rosa a tout réparé. Encore.</div>`:""}
      ${t.controle?"":`<p class="nouveau">Avant le niveau suivant : le contrôle de Mme Lambda. ${vo} bonnes réponses d'affilée, sur un programme que tu n'as pas écrit.</p>`}
    `,T);return}const n=s.gag??"G46",i=Bl[n]??Bl.G46,r=xe.gags.includes(n),o=r&&!t.gags.includes(n);t.gags.includes(n)||t.gags.push(n),Dt.album[n]||(Dt.album[n]=xe.id),r||Dt.journal.push({niveau:xe.id,gag:n,date:new Date().toISOString().slice(0,10)}),t.serie.push(n);let a=!1;e&&t.degats<4&&(t.degats++,a=!0),xe.lancementsMax&&n!=="G52"&&yo++,xe.impossible&&n!=="G52"&&((v=s.error)==null?void 0:v.type)!=="SyntaxError"&&Gl++;const l=!!xe.impossible&&!t.revele&&!t.fait&&Gl>=xe.impossible.apres,c=!!xe.lancementsMax&&yo>xe.lancementsMax;wn(),await Be.gag(i.jeu),Be.degats(t.degats),Wl();const u=((g=s.error)==null?void 0:g.nom)??"",h=s.shown!==null?s.results[s.shown]:void 0,d=f=>f.length?f.map(m=>m.kind==="feuille"?`<span class="mini-feuille">${m.v===""?"&nbsp;":xe.expectKind==="colis"?`Bordereau ${m.v}`:m.v}</span>`:`<span class="mini-colis">${rr(m.v)}</span>`).join(" "):"(rien)",p=f=>f.replace(/\{nom\}/g,u);Ts(`
    <div class="gag-tete"><span class="num">${n}</span><h2>${i.nom}</h2></div>
    <p class="gag-scene">${p(i.scene)}</p>
    ${s.error?`<pre class="pyerr">${s.error.type==="TapisVide"?"Tapis vide":s.error.type}: ${s.error.msg}</pre>`:""}
    <p>${p(i.explique)}</p>
    ${!s.error&&h&&n!=="G52"?`<div class="compare">${h.inputs.length?`<b>Reçu</b><div>${h.inputs.map(f=>`<span class="mini-colis">${rr(f)}</span>`).join(" ")}</div>`:""}<b>Attendu</b><div>${d(h.expected)}</div><b>Obtenu</b><div>${d(h.out)}</div></div>`:""}
    ${o?`<p class="nouveau">Nouveau gag ! Gags : ${Vl(xe)} sur ${xe.gags.length}</p>`:""}
    ${r?"":'<p class="imprevu">Gag imprévu dans ce niveau : il est noté dans le journal du professeur.</p>'}
    ${a?`<p class="degat">Jauge des dégâts : ${Dh[t.degats].nom}. ${Dh[t.degats].texte}</p>`:""}
    ${xe.lancementsMax?`<p class="degat">Essais ratés : ${Math.min(yo,xe.lancementsMax+1)} sur ${xe.lancementsMax} permis.${c?" Mme Lambda reprend le dossier : tout est remis comme au début.":""}</p>`:""}
  `,[["Compris",()=>{As(),c?Es(xe):So(),l&&(t.revele=!0,wn(),Yh(xe.impossible.histoire).then(()=>$h(xe)))}]])}let lr=0;function ql(s){return s.genre==="colis"?`<span class="mini-colis">${s.texte}</span>`:s.genre==="feuille"?`<span class="mini-feuille">${s.texte}</span>`:`<span class="jeton-gag">${s.texte}${s.python?`<code class="jeton-py">${s.python}</code>`:""}</span>`}function Eo(s=!0){s&&(lr=0);const e=mx(xe.id,Eh(Math.floor(Math.random()*1e9))),t=[];Ts(`
    <h2>Contrôle de Mme Lambda</h2>
    <p class="serie">Bonnes réponses d'affilée : ${lr} sur ${vo}</p>
    <p>${e.consigne}</p>
    ${e.tapis.length?`<p class="ctl-tapis"><b>Tapis d'arrivée</b> (le premier à gauche) : ${e.tapis.map(a=>`<span class="mini-colis">${a}</span>`).join(" ")}</p>`:""}
    <ol class="ctl-prog">${e.programme.map(a=>`<li>${a.replace(/</g,"&lt;")}</li>`).join("")}</ol>
    <div class="ctl-rep" id="ctl-rep"></div>
    <div class="ctl-jetons" id="ctl-jetons"></div>
  `,[["Tout effacer",()=>{t.length=0,r()}],["Rendre la copie",()=>o()]]);const n=Ce("ctl-rep"),i=Ce("ctl-jetons");function r(){n.innerHTML=t.length?"":`<span class="vide">Ta réponse : clique les jetons ci-dessous, dans l'ordre.</span>`,t.forEach((a,l)=>{const c=document.createElement("button");c.className="jeton pris",c.innerHTML=ql(e.jetons.find(u=>u.id===a)),c.title="Retirer",c.onclick=()=>{t.splice(l,1),r()},n.appendChild(c)}),i.innerHTML="";for(const a of e.jetons){const l=document.createElement("button");l.className="jeton",l.innerHTML=ql(a),l.disabled=!e.repetable&&t.includes(a.id)||e.unique&&t.length>0,l.onclick=()=>{t.push(a.id),r()},i.appendChild(l)}}r();function o(){if(!t.length)return;const a=Gt(xe.id),l=d=>d.map(p=>ql(e.jetons.find(v=>v.id===p))).join(" ");if(gx(e,t)){if(lr++,lr>=vo){a.controle=!0,wn(),Kh();return}Eo(!1);return}lr=0,Ts(`
      <h2>Mme Lambda corrige</h2>
      <ol class="ctl-prog">${e.programme.map(d=>`<li>${d.replace(/</g,"&lt;")}</li>`).join("")}</ol>
      <div class="compare"><b>Ta réponse</b><div>${l(t)}</div><b>La bonne</b><div>${l(e.reponse)}</div></div>
      <ul class="ctl-explique">${e.explication.map(d=>`<li>${d}</li>`).join("")}</ul>
      <p>On repart de zéro : ${vo} bonnes réponses d'affilée.</p>
    `,[["Question suivante",()=>Eo(!0)]]);const c=Ce("carte").querySelector(".boutons button");let u=6;c.disabled=!0;const h=()=>{if(u<=0){c.disabled=!1,c.textContent="Question suivante";return}c.textContent=`Lis la correction (${u})`,u--,setTimeout(h,1e3)};h()}}function Kh(){const s=Kt.indexOf(xe),e=Kt[s+1];Ts(`
    <h2>Visa de Mme Lambda</h2>
    <p>Contrôle réussi. Recopie ce code sur ta fiche, dans la case du niveau ${xe.id}, puis réponds aux questions de la fiche pour ce niveau. Ce code sert aussi de mot de passe : sur un autre ordinateur, tape ton badge puis ce code, et tu reprends au niveau suivant.</p>
    <div class="visa">${zl(xe.visa,Dt.badge??"",xe.id)}</div>
    <p class="petit">Le code dépend de ton badge (${(Dt.badge??"").replace(/</g,"")}) : celui du voisin ne marchera pas sur ta fiche.</p>
  `,[["Niveaux",()=>Ci()],...e?[["Niveau suivant",()=>void Es(e)]]:[]])}function Ts(s,e){const t=Ce("carte");t.innerHTML=`<div class="carte-defile">${s}</div>`;const n=document.createElement("div");n.className="boutons";for(const[i,r]of e){const o=document.createElement("button");o.textContent=i,o.onclick=r,n.appendChild(o)}t.appendChild(n),t.classList.remove("cache")}function As(){Ce("carte").classList.add("cache")}const Jh=[3,6,9,13,17],Zh=[2,4,6,8,8];let Qh=Date.now();for(const s of["pointerdown","keydown"])document.addEventListener(s,()=>Qh=Date.now(),!0);const wx=s=>{const e=Gt(xe.id);return xo||e.temps>=Jh[s]*60*(xe.rouge?2:1)&&e.essais>=Zh[s]},Xl=()=>[0,1,2,3,4].filter(wx).length;function ed(){const s=Gt(xe.id),e=Xl();if(e>=5)return"Toutes les aides sont ouvertes.";const t=Math.max(0,Math.ceil((Jh[e]*60*(xe.rouge?2:1)-s.temps)/60)),n=Math.max(0,Zh[e]-s.essais);return`Prochaine aide dans ${[t?`${t} min de travail`:"",n?`${n} essai${n>1?"s":""} différent${n>1?"s":""}`:""].filter(Boolean).join(" et ")||"un instant"}.`}function jl(){Ce("aide").textContent=`Demander à Monique (${Gt(xe.id).aides}/${Xl()})`,Ce("aide-info").textContent=ed()}function td(){var n;const s=Gt(xe.id),e=Xl();let t=`<h2>Monique, la machine à café</h2><p>${e?"Un café, et je te dis ce que je sais.":"Essaie encore un peu. Je ne donne rien à ceux qui n'ont rien tenté."}</p>`;xe.aides.forEach((i,r)=>{r<s.aides?t+=`<p class="aide-ok"><b>Aide ${r+1} :</b> ${i}</p>`:r<e&&r===s.aides?t+=`<p class="aide-ok"><button id="ouvrir-aide">Ouvrir l'aide ${r+1}</button> (l'étoile « sans aide » sera perdue)</p>`:t+=`<p class="aide-non">Aide ${r+1} : pas encore disponible</p>`}),t+=`<p>${ed()}</p>`,Ts(t,[["Merci Monique",As]]),(n=document.getElementById("ouvrir-aide"))==null||n.addEventListener("click",()=>{s.aides++,wn(),jl(),td()})}setInterval(()=>{if(!Ce("menu").classList.contains("cache")||document.hidden||Date.now()-Qh>9e4)return;const s=Gt(xe.id);s.temps++,s.temps%10===0&&wn(),jl()},1e3),Ce("lancer").onclick=()=>void Sx(),Ce("stop").onclick=()=>{Ri=!0,Rn.liberer(),mn.arreter()};const nd=()=>{Ce("son").textContent=mn.muet?"♪ coupé":"♪"};Ce("son").onclick=()=>{mn.muet=!mn.muet,mn.muet&&mn.arreter();try{localStorage.setItem(qh,mn.muet?"1":"0")}catch{}nd()},nd(),Ce("aide").onclick=td,Ce("niveaux").onclick=()=>{wi||Ci()},Ce("vue-python").onclick=()=>Ce("python").classList.toggle("cache"),Ce("raz").onclick=()=>{wi||Es(xe).then(()=>{})},jh(),Ce("chargement").textContent="Ouverture des bureaux...",Be.charger().then(()=>{Ce("chargement").remove(),Ci()}),window.pyperasse={bureau:Be,editeur:Te,ouvrir:s=>Es(Kt[s]),sauv:()=>Dt,controle:()=>Eo()}})();
