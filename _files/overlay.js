google.maps.__gjsload__('overlay', function(_){var nya=function(){},LB=function(a){a.NA=a.NA||new nya;return a.NA},oya=function(a){this.Eg=new _.an(()=>{const b=a.NA;if(a.getPanes()){if(a.getProjection()){if(!b.Hg&&a.onAdd)a.onAdd();b.Hg=!0;a.draw()}}else{if(b.Hg)if(a.onRemove)a.onRemove();else a.remove();b.Hg=!1}},0)},qya=function(a,b){const c=LB(a);let d=c.Fg;d||(d=c.Fg=new oya(a));_.hc(c.Eg||[],_.Kk);var e=c.Ig=c.Ig||new _.kra;const f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");e.bindTo("projection",
b);e.bindTo("projectionTopLeft",f);e=c.Kg=c.Kg||new pya(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=()=>_.bn(d.Eg);c.Eg=[_.Ik(a,"panes_changed",e),_.Ik(f,"zoom_changed",e),_.Ik(f,"offset_changed",e),_.Ik(b,"projection_changed",e),_.Ik(f,"projectioncenterq_changed",e)];_.bn(d.Eg);b instanceof _.pl?(_.El(b,"Ox"),_.M(b,148440)):b instanceof _.Vl&&(_.El(b,"Oxs"),_.M(b,181451))},rya=function(a){const b=
LB(a);var c=b.Ig;c&&c.unbindAll();(c=b.Kg)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Eg&&b.Eg.forEach(d=>{_.Kk(d)});b.Eg=null;b.Fg&&(_.cn(b.Fg.Eg),b.Fg=null)},wya=function(a){if(a){var b=a.getMap();if(sya(a)!==b&&b&&b instanceof _.pl){const c=b.__gm;c.overlayLayer?a.__gmop=new tya(b,a,c.overlayLayer):c.Fg.then(({ah:d})=>{const e=new uya(b,d);d.Ii(e);c.overlayLayer=e;vya(a);wya(a)})}}},vya=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.Eg.unbindAll(),b.Eg.set("panes",
null),b.Eg.set("projection",null),b.Hg.Ql(b),b.Fg&&(b.Fg=!1,b.Eg.onRemove?b.Eg.onRemove():b.Eg.remove()))}},sya=function(a){return(a=a.__gmop)?a.map:null},xya=function(a,b){a.Eg.get("projection")!=b&&(a.Eg.bindTo("panes",a.map.__gm),a.Eg.set("projection",b))},pya=class extends _.Xk{constructor(a){super();this.projection=a}changed(a){a!=="outProjection"&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.Nj(this.get("zoom"))),a===!this.get("outProjection")&&this.set("outProjection",
a?this.projection:null))}};var MB={};_.Ja(oya,_.Xk);MB.Vl=function(a){if(a){var b=a.getMap();(LB(a).Jg||null)!==b&&(b&&qya(a,b),LB(a).Jg=b)}};MB.Ql=function(a){rya(a);delete LB(a).Jg};MB.lN=nya;var NB={},tya=class{constructor(a,b,c){this.map=a;this.Eg=b;this.Hg=c;this.Fg=!1;_.El(this.map,"Ox");_.M(this.map,148440);c.Vl(this)}draw(){this.Fg||(this.Fg=!0,this.Eg.onAdd&&this.Eg.onAdd());this.Eg.draw&&this.Eg.draw()}},uya=class{constructor(a,b){this.Ig=a;this.Hg=b;this.Eg=null;this.Fg=[]}dispose(){}Wh(a,b,c,d,e,f,g,h){const k=this.Eg=this.Eg||new _.sy(this.Ig,this.Hg,()=>{});k.Wh(a,b,c,d,e,f,g,h);for(const m of this.Fg)xya(m,k),m.draw()}Vl(a){this.Fg.push(a);this.Eg&&xya(a,this.Eg);this.Hg.refresh()}Ql(a){_.rc(this.Fg,
a)}};NB.Vl=wya;NB.Ql=vya;_.Aj("overlay",{vC:function(a){if(a){(0,MB.Ql)(a);(0,NB.Ql)(a);var b=a.getMap();b&&(b instanceof _.pl?(0,NB.Vl)(a):(0,MB.Vl)(a))}},preventMapHitsFrom:a=>{_.pu(a,{Nl:({event:b})=>{_.xs(b.Eg)},kk:b=>_.au(b),Fq:b=>_.bu(b),pl:b=>_.bu(b),Dk:b=>_.cu(b)}).rs(!0)},preventMapHitsAndGesturesFrom:a=>{a.addEventListener("click",_.Gk);a.addEventListener("contextmenu",_.Gk);a.addEventListener("dblclick",_.Gk);a.addEventListener("mousedown",_.Gk);a.addEventListener("mousemove",_.Gk);a.addEventListener("MSPointerDown",
_.Gk);a.addEventListener("pointerdown",_.Gk);a.addEventListener("touchstart",_.Gk);a.addEventListener("wheel",_.Gk)}});});
