(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"2u0t":function(e,t,n){"use strict";var a,o,i=n("NL7e"),r=n("jPEo"),u=n("YKFa"),s=n("CO8c"),l=n("6nUn"),c=n("XSw5"),f=n("ll6l"),d=n("h9OF"),m=n("H2/w"),p=n("W+DG"),S=n("U4xy"),y=n("RqP8"),v=n("Qku0"),w=n("+rx9"),h=n("a0EN"),b=n("5JIH"),g=n("eCv0"),D=n("DkUo"),C=n("SZBU"),x=n("6g2T"),N=n("yWHo"),R=n("5L+5"),I=n("nk6E"),z=n("JBeR"),q=n("GUtV"),F=n("E4q/"),P=n("+0be"),V=n("pYS8"),J=n("jILx"),M=n("kC5b"),k=n("ocSL"),L=n("pMgY"),E=n("5oVf"),W=n("R8Br"),H=n("4hQm"),G=n("bqfS"),_=n("eAL6"),A=n("6pQh"),B=n("7HZk"),U=n("avNA"),T=n("z85V"),O=n("vKy7"),Q=n("O43b"),Y=function(){function e(){}return e.value=new e,e}(),j=function(){function e(){}return e.value=new e,e}(),K=function(){function e(){}return e.value=new e,e}(),Z=function(){function e(e){this.value0=e}return e.create=function(t){return new e(t)},e}(),X=function(){function e(){}return e.value=new e,e}(),$=function(){function e(e){this.value0=e}return e.create=function(t){return new e(t)},e}(),ee=function(){function e(e){this.value0=e}return e.create=function(t){return new e(t)},e}(),te=function(e){return m.fromMaybe(A.Flat.value)("Flat"===e?new m.Just(A.Flat.value):"Gently"===e?new m.Just(A.Gentle.value):"Steep"===e?new m.Just(A.Steep.value):"VerySteep"===e?new m.Just(A.VerySteep.value):m.Nothing.value)},ne=function(e){return"Sand"===e?new m.Just(A.Sand.value):"Gravel"===e?new m.Just(A.Gravel.value):"Clay"===e?new m.Just(A.Clay.value):"Rock"===e?new m.Just(A.Rock.value):m.Nothing.value},ae=f.map(q.functorFormBuilder)((function(e){return{foundationSoil:ne(e)}}))(I.indent("What is the foundation soil?")(P.Required.value)(I.focus((function(e){return d.prop(new v.IsSymbol((function(){return"foundationSoil"})))()()(v.SProxy.value)(e)}))(F.validated(F.canValidateAny)(F.nonNull("Foundation soil"))(I.select(u.identity(u.categoryFn))(i.pure(m.applicativeMaybe))([{label:"Sand",value:"Sand"},{label:"Gravel",value:"Gravel"},{label:"Clay",value:"Clay"},{label:"Rock",value:"Rock"},{label:"Not sure",value:"Unknown"}]))))),oe=function(e){return"NotProne"===e?new m.Just(A.NotProne.value):"ModeratelyProne"===e?new m.Just(A.ModeratelyProne.value):"HighlyProne"===e?new m.Just(A.HighlyProne.value):m.Nothing.value},ie=f.map(q.functorFormBuilder)((function(e){return{liquifaction:oe(e)}}))(I.indent("How liquifaction-prone is your site?")(P.Required.value)(I.focus((function(e){return d.prop(new v.IsSymbol((function(){return"liquifaction"})))()()(v.SProxy.value)(e)}))(F.validated(F.canValidateAny)(F.nonNull("Liquifaction prone"))(I.select(u.identity(u.categoryFn))(i.pure(m.applicativeMaybe))([{label:"Not Prone",value:"NotProne"},{label:"Moderately Prone",value:"ModeratelyProne"},{label:"Highly Prone",value:"HighlyProne"},{label:"Not sure",value:"Unknown"}]))))),re=D.withContent(W.column)([H.sectionHeader(D.withContent(H.strong)("A few final words about the results")),D.withContent(H.paragraph)([D.withContent(H.text)("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue ligula et odio rutrum, eu imperdiet ante laoreet. Cras mollis faucibus urna, eu luctus ligula condimentum ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus et mi mattis, maximus urna id, luctus neque. Sed non lorem molestie nibh suscipit condimentum id quis enim. Nunc tortor elit, posuere eu metus sed, finibus sagittis est. Fusce dapibus lacus vitae augue vulputate, in convallis lectus congue. ")]),D.withContent(W.row)([H.paragraph(H.emphasized(D.withContent(_._flex)([D.withContent(H.text)("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue ligula et odio rutrum, eu imperdiet ante laoreet. Cras mollis faucibus urna, eu luctus ligula condimentum ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus et mi mattis, maximus urna id, luctus neque. Sed non lorem molestie nibh suscipit condimentum id quis enim. Nunc tortor elit, posuere eu metus sed, finibus sagittis est. Fusce dapibus lacus vitae augue vulputate, in convallis lectus congue. ")]))),J.hspace(J.S16.value),N.flexDivider_,J.hspace(J.S16.value),W.column(D.withContent(_._flex)([D.withContent(H.paragraph_)("Vestibulum eu arcu eget lectus interdum maximus feugiat sed velit. Integer ullamcorper urna quis cursus mattis. Nam vel hendrerit purus. Aliquam fringilla dictum nunc at ornare. Morbi ornare blandit tincidunt. Etiam sodales fringilla libero, vitae pulvinar sapien luctus ac. Proin condimentum vitae risus id vestibulum. Sed sed turpis leo. Quisque ligula leo, facilisis eget metus ullamcorper, aliquet mollis tortor. Donec purus metus, maximus rutrum nunc eget, rhoncus tempor erat. Sed efficitur tellus id velit ullamcorper, ut dignissim neque pretium. Sed id metus porta, efficitur est non, vulputate sapien.")]))])]),ue=G.style_(O.css()({fontStyle:O.str("normal")})),se=f.map(q.functorFormBuilder)((function(e){return{steepness:te(e)}}))(I.indent("How steep is your site?")(P.Required.value)(I.focus((function(e){return d.prop(new v.IsSymbol((function(){return"steepness"})))()()(v.SProxy.value)(e)}))(F.validated(F.canValidateAny)(F.nonNull("Steepness"))(I.select(u.identity(u.categoryFn))(i.pure(m.applicativeMaybe))([{label:"Flat",value:"Flat"},{label:"Gentle Slope",value:"Gentle"},{label:"Steep",value:"Steep"},{label:"Very Steep",value:"VerySteep"}]))))),le=r.bind(E.bindWizard)(E.step(Y.value)(I.focus((function(e){return d.prop(new v.IsSymbol((function(){return"firstStep"})))()()(v.SProxy.value)(e)}))(se)))((function(e){return r.bind(E.bindWizard)(E.step(j.value)(I.focus((function(e){return d.prop(new v.IsSymbol((function(){return"secondStep"})))()()(v.SProxy.value)(e)}))(ae)))((function(t){return r.bind(E.bindWizard)(E.step(K.value)(I.focus((function(e){return d.prop(new v.IsSymbol((function(){return"thirdStep"})))()()(v.SProxy.value)(e)}))(ie)))((function(n){return i.pure(E.applicativeWizard)({text:"I know now that your site is "+y.show(A.showSteepness)(e.steepness)+", your foundation soil is "+y.show(m.showMaybe(A.showFoundationSoil))(t.foundationSoil)+", your site is "+y.show(m.showMaybe(A.showProne))(n.liquifaction)+" to liquifaction."})}))}))})),ce=new l.Eq((function(e){return function(t){return e instanceof Y&&t instanceof Y||(e instanceof j&&t instanceof j||e instanceof K&&t instanceof K)}})),fe=(a=function(e){return function(t){if(t instanceof Z)return e.setState((function(n){return{formData:t.value0(e.state.formData),wizardStep:n.wizardStep,result:n.result}}));if(t instanceof X){var n=E.stepIdentifier(e.state.wizardStep);if(n instanceof m.Just&&n.value0 instanceof Y)return e.setState((function(e){return{formData:{firstStep:F.setModified(F.modifyValidatedRecord()(g.mapRecordWithIndexCons(new v.IsSymbol((function(){return"steepness"})))(g.constMapping(F.modifyValidated(F.modifyValidatedIdentity)))(g.mapRecordWithIndexNil)()()))(e.formData.firstStep),secondStep:e.formData.secondStep,thirdStep:e.formData.thirdStep},wizardStep:e.wizardStep,result:e.result}}));if(n instanceof m.Just&&n.value0 instanceof j)return e.setState((function(e){return{formData:{firstStep:e.formData.firstStep,secondStep:F.setModified(F.modifyValidatedRecord()(g.mapRecordWithIndexCons(new v.IsSymbol((function(){return"foundationSoil"})))(g.constMapping(F.modifyValidated(F.modifyValidatedIdentity)))(g.mapRecordWithIndexNil)()()))(e.formData.secondStep),thirdStep:e.formData.thirdStep},wizardStep:e.wizardStep,result:e.result}}));if(n instanceof m.Just&&n.value0 instanceof K)return e.setState((function(e){return{formData:{firstStep:e.formData.firstStep,secondStep:e.formData.secondStep,thirdStep:F.setModified(F.modifyValidatedRecord()(g.mapRecordWithIndexCons(new v.IsSymbol((function(){return"liquifaction"})))(g.constMapping(F.modifyValidated(F.modifyValidatedIdentity)))(g.mapRecordWithIndexNil)()()))(e.formData.thirdStep)},wizardStep:e.wizardStep,result:e.result}}));if(n instanceof m.Nothing)return i.pure(h.applicativeEffect)(w.unit);throw new Error("Failed pattern match at Lumi.Components.Examples.HouseCheck (line 58, column 11 - line 62, column 33): "+[n.constructor.name])}if(t instanceof $)return e.setState((function(e){return{formData:e.formData,wizardStep:t.value0,result:e.result}}));if(t instanceof ee)return e.setState((function(e){return{formData:e.formData,wizardStep:e.wizardStep,result:new m.Just(t.value0)}}));throw new Error("Failed pattern match at Lumi.Components.Examples.HouseCheck (line 53, column 7 - line 68, column 51): "+[t.constructor.name])}},o={formData:z.formDefaults(z.formDefaultsRecord()(z.formDefaultsRecordCons(new v.IsSymbol((function(){return"firstStep"})))(z.formDefaultsRecord()(z.formDefaultsRecordCons(new v.IsSymbol((function(){return"steepness"})))(z.formDefaultsValidated(z.formDefaultsMaybe))(z.formDefaultsRecordNil)()()))(z.formDefaultsRecordCons(new v.IsSymbol((function(){return"secondStep"})))(z.formDefaultsRecord()(z.formDefaultsRecordCons(new v.IsSymbol((function(){return"foundationSoil"})))(z.formDefaultsValidated(z.formDefaultsMaybe))(z.formDefaultsRecordNil)()()))(z.formDefaultsRecordCons(new v.IsSymbol((function(){return"thirdStep"})))(z.formDefaultsRecord()(z.formDefaultsRecordCons(new v.IsSymbol((function(){return"liquifaction"})))(z.formDefaultsValidated(z.formDefaultsMaybe))(z.formDefaultsRecordNil)()()))(z.formDefaultsRecordNil)()())()())()())),result:m.Nothing.value,wizardStep:E.liftStep(le)},B.make()(B.createComponent("WizardExample"))({initialState:o,render:function(e){return x.column_([R.example(x.column({style:T.css({alignSelf:"stretch"}),children:function(){if(e.state.result instanceof m.Nothing)return[E.wizard({step:e.state.wizardStep,value:e.state.formData,onChange:(l=a(e),function(e){return l(Z.create(e))}),forceTopLabels:!1,inlineTable:!1,formProps:{readonly:!1}}),V.row({style:T.css({justifyContent:"flex-end"}),children:(o=E.previousStep(e.state.wizardStep),i=E.resumeStep(e.state.wizardStep)({readonly:!1})(e.state.formData),r=m.maybe(!1)(s.isRight)(i),[C.button({accessibilityLabel:C.secondary.accessibilityLabel,color:C.secondary.color,onPress:m.maybe(b.mkEffectFn1(p.mempty(p.monoidFn(h.monoidEffect(p.monoidUnit)))))((t=U.capture(u.identity(Q.categoryBuilder)),n=a(e),function(e){return t(c.const(n($.create(e))))}))(o),size:C.secondary.size,style:C.secondary.style,testId:C.secondary.testId,title:"Back",type:C.secondary.type,buttonState:m.isNothing(o)?C.Disabled.value:C.Enabled.value}),C.button({accessibilityLabel:C.primary.accessibilityLabel,color:C.primary.color,onPress:U.capture_(function(){if(i instanceof m.Nothing)return a(e)(X.value);if(i instanceof m.Just&&i.value0 instanceof s.Left)return a(e)(new $(i.value0.value0));if(i instanceof m.Just&&i.value0 instanceof s.Right)return a(e)(new ee(i.value0.value0));throw new Error("Failed pattern match at Lumi.Components.Examples.HouseCheck (line 107, column 39 - line 110, column 81): "+[i.constructor.name])}()),size:C.primary.size,style:T.css({marginLeft:"12px"}),testId:C.primary.testId,title:r?"Submit":"Next",type:C.primary.type,buttonState:C.primary.buttonState})])})];var t,n,o,i,r,l;if(e.state.result instanceof m.Just)return[V.row({style:T.css({fontFamily:"Lucida Console, monospace"}),children:[k.statusSlat({data:[{label:"Strength",content:"★☆☆☆☆",status:S.notNull(M.Active.value)},{label:"Strength",content:"100",status:S.null},{label:"Damage",content:"★★☆☆☆",status:S.notNull(M.Warning.value)},{label:"Damage",content:"26",status:S.null}]})]}),L.p_("Congratulations! You made it through to the end! The scores and ratings show on screen apply to your house - as described by your answers."),L.p_(e.state.result.value0.text),V.row({style:T.css({margin:"1em"}),children:[]}),re];throw new Error("Failed pattern match at Lumi.Components.Examples.HouseCheck (line 75, column 17 - line 148, column 22): "+[e.state.result.constructor.name])}()}))])}})(w.unit));e.exports={OnChange:Z,SetModified:X,SetWizardStep:$,Finalize:ee,docs:fe,parseSteep:te,parseSoil:ne,parseProne:oe,FirstStep:Y,SecondStep:j,ThirdStep:K,exampleWizard:le,firstStepForm:se,secondStepForm:ae,thirdStepForm:ie,notes:re,nonItalic:ue,eqStep:ce}}}]);