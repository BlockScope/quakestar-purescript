(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5L+5":function(n,t,e){"use strict";var o,r,a,i,u,c,s,l,f=e("JH5H"),h=e("YKFa"),m=e("Z/IS"),d=e("6nUn"),p=e("XSw5"),b=e("H2/w"),y=e("aa8G"),w=e("aOgf"),g=e("6g2T"),x=e("bP3h"),v=e("pMgY"),S=e("xhm4"),L=e("7HZk"),H=e("sfHK"),R=e("h+YZ"),C=e("z85V"),E=e("LQUV"),I=function(){function n(){}return n.value=new n,n}(),N=function(){function n(){}return n.value=new n,n}(),T=function(n){if(n instanceof I)return"Demo";if(n instanceof N)return"Boundaries";throw new Error("Failed pattern match at Lumi.Components.Example (line 31, column 18 - line 33, column 29): "+[n.constructor.name])},F=function(n){return E.URL("#"+(n.location.pathname+(n.location.search+n.location.hash)))},k=(new d.Eq((function(n){return function(t){return n instanceof I&&t instanceof I||n instanceof N&&t instanceof N}})),L.createComponent("Example")),q=(r=C.css({backgroundColor:"#f7f6f4"}),a=C.css({justifyContent:"center",boxSizing:"border-box",marginBottom:"32px"}),i=C.css({border:"1px solid rgba(0, 0, 255, 0.6)",boxShadow:"0 0 40px rgba(0, 0, 255, 0.4)"}),u=C.css({margin:20,background:f.cssStringHSLA(w.colors.white),border:"1px solid rgba(0, 0, 255, 0)",alignItems:"flex-start"}),c=function(n){return function(t){return g.column({style:C.mergeStyles([u,n instanceof N?i:C.css({})]),children:[t]})}},s=function(n){return function(t){return function(n){return function(t){return g.column({children:t,style:function(){if(n instanceof I)return a;if(n instanceof N)return C.mergeStyles([a,r]);throw new Error("Failed pattern match at Lumi.Components.Example (line 114, column 13 - line 119, column 18): "+[n.constructor.name])}()})}}(n)([c(n)(function(){if(n instanceof I)return t;if(n instanceof N)return t;throw new Error("Failed pattern match at Lumi.Components.Example (line 105, column 13 - line 107, column 37): "+[n.constructor.name])}())])}},l=function(n){return function(t){return{content:function(e){return s(n)(t)},id:x.TabId(y.toLower(T(n))),label:T(n),count:b.Nothing.value,testId:b.Nothing.value}}},o=S.withRouter(L.toReactComponent()(h.identity(h.categoryFn))(k)({render:function(n){return t=n.props,x.tabs({currentLocation:F(t),navigate:b.Nothing.value,queryKey:"example",selectedTabStyle:C.css({}),style:C.css({height:0,boxShadow:"none"}),tabStyle:C.css({display:"none"}),tabs:[l(I.value)(t.children),l(N.value)(t.children)],useHash:!0});var t}})),function(n){return L.element(o)({children:n})}),J=function(){var n=function(n){return{content:function(n){return L.empty},id:x.TabId(y.toLower(T(n))),label:T(n),count:b.Nothing.value,testId:b.Nothing.value}};return function(n){return L.element(n)({children:L.empty})}(S.withRouter(L.toReactComponent()(h.identity(h.categoryFn))(k)({render:function(t){return e=t.props,x.tabs({currentLocation:F(e),navigate:new b.Just((function(n){var t=x.urlParts(n),o=t.path+(t.query+(t.hash.path+t.hash.query)),r=b.fromMaybe("")(p.flip(m.index)(1)(y.split("#")(o)));return function(){return e.history.push(E.URL(r))}})),queryKey:"example",selectedTabStyle:C.css({boxShadow:"none"}),style:C.css({boxShadow:"none"}),tabStyle:C.css({}),tabs:[n(I.value),n(N.value)],useHash:!0});var e}})))}();n.exports={exampleStyleToggle:J,example:q,exampleCode:function(n){return v.text({children:[R.pre_([R.code_([H.text(n)])])],className:v.body.className,color:v.body.color,style:v.body.style,tag:v.body.tag,testId:v.body.testId})}}},Hiah:function(n,t,e){"use strict";t.withRouter=e("Ty5D").withRouter},xhm4:function(n,t,e){"use strict";var o=e("Hiah");n.exports={withRouter:o.withRouter}}}]);