webpackJsonp([34],{"0cEE":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("LMZF"),t=function(){},a=e("KhCp"),_=e("kL+h"),i=e("tfJK"),o=e("drlO"),d=e("0nO6"),r=e("Un6q"),c=e("TMwh"),m=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/forms/textinput/form.html").subscribe(function(n){l=n.text()},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/forms/textinput/form.text").subscribe(function(l){n=l.text()},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=u._1({encapsulation:2,styles:[],data:{}});function h(l){return u._27(0,[(l()(),u._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(3,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),u._2(4,4243456,null,0,_.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function p(l){return u._27(0,[(l()(),u._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(2,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),u._2(3,4243456,null,0,_.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function f(l){return u._27(0,[(l()(),u._25(-1,null,["\n    "])),(l()(),u._3(1,0,null,null,251,"amexio-card",[["header","true"]],null,null,null,i._41,i.f)),u._2(2,114688,null,0,o.g,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(4,0,null,0,2,"amexio-header",[],null,null,null,i._46,i.k)),u._2(5,114688,null,0,o.q,[],null,null),(l()(),u._25(-1,0,["\n         Text Input \n      "])),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(8,0,null,1,243,"amexio-body",[],null,null,null,i._38,i.c)),u._2(9,114688,null,0,o.d,[],null,null),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u._25(-1,null,["Text input component has been created with different configurable attributes for validation (min/max length,\n          allow blank, custom regex), custom error message, help, custom styles."])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(14,0,null,0,236,"amexio-tab-view",[],null,null,null,i._55,i.t)),u._2(15,5357568,null,1,o.D,[u.B],null,null),u._23(603979776,1,{queryTabs:1}),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(18,0,null,0,158,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i._56,i.u)),u._2(19,114688,[[1,4]],0,o.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(21,0,null,0,42,"amexio-row",[],null,null,null,i._52,i.q)),u._2(22,1163264,null,0,o.A,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(24,0,null,0,18,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,i._43,i.h)),u._2(25,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(27,0,null,0,14,"amexio-card",[["header","true"]],null,null,null,i._41,i.f)),u._2(28,114688,null,0,o.g,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(30,0,null,0,2,"amexio-header",[],null,null,null,i._46,i.k)),u._2(31,114688,null,0,o.q,[],null,null),(l()(),u._25(-1,0,["\n                     Basic Text Field \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(34,0,null,1,6,"amexio-body",[],null,null,null,i._38,i.c)),u._2(35,114688,null,0,o.d,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(37,0,null,0,2,"amexio-text-input",[["field-label","Name"],["icon-feedback","true"],["name","name"],["place-holder","Enter name"]],null,null,null,i._91,i._3)),u._22(5120,null,d.f,function(l){return[l]},[o._28]),u._2(39,114688,null,0,o._28,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(44,0,null,0,18,"amexio-column",[],[[8,"className",0]],null,null,i._43,i.h)),u._2(45,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(47,0,null,0,14,"amexio-card",[],null,null,null,i._41,i.f)),u._2(48,114688,null,0,o.g,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(50,0,null,0,2,"amexio-header",[],null,null,null,i._46,i.k)),u._2(51,114688,null,0,o.q,[],null,null),(l()(),u._25(-1,0,["\n                     Input Without Label and Icon feedback \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(54,0,null,1,6,"amexio-body",[],null,null,null,i._38,i.c)),u._2(55,114688,null,0,o.d,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(57,0,null,0,2,"amexio-text-input",[["has-label","false"],["icon-feedback","false"],["name","name"],["place-holder","Enter name"]],null,null,null,i._91,i._3)),u._22(5120,null,d.f,function(l){return[l]},[o._28]),u._2(59,114688,null,0,o._28,[],{placeholder:[0,"placeholder"],iconfeedback:[1,"iconfeedback"],haslabel:[2,"haslabel"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(65,0,null,0,42,"amexio-row",[],null,null,null,i._52,i.q)),u._2(66,1163264,null,0,o.A,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(68,0,null,0,18,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,i._43,i.h)),u._2(69,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(71,0,null,0,14,"amexio-card",[],null,null,null,i._41,i.f)),u._2(72,114688,null,0,o.g,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(74,0,null,0,2,"amexio-header",[],null,null,null,i._46,i.k)),u._2(75,114688,null,0,o.q,[],null,null),(l()(),u._25(-1,0,["\n                     Min/Max Validations \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(78,0,null,1,6,"amexio-body",[],null,null,null,i._38,i.c)),u._2(79,114688,null,0,o.d,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(81,0,null,0,2,"amexio-text-input",[["allow-blank","false"],["enable-popover","true"],["error-msg","Please enter last name"],["field-label","Name"],["icon-feedback","true"],["max-error-msg","Maximum 10 char allowed"],["max-length","10"],["min-length","1"],["minerror-msg","Minimum 1 char required"],["name","name"],["place-holder","Enter name"]],null,null,null,i._91,i._3)),u._22(5120,null,d.f,function(l){return[l]},[o._28]),u._2(83,114688,null,0,o._28,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],maxerrormsg:[5,"maxerrormsg"],placeholder:[6,"placeholder"],iconfeedback:[7,"iconfeedback"],enablepopover:[8,"enablepopover"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(88,0,null,0,18,"amexio-column",[],[[8,"className",0]],null,null,i._43,i.h)),u._2(89,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(91,0,null,0,14,"amexio-card",[],null,null,null,i._41,i.f)),u._2(92,114688,null,0,o.g,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(94,0,null,0,2,"amexio-header",[],null,null,null,i._46,i.k)),u._2(95,114688,null,0,o.q,[],null,null),(l()(),u._25(-1,0,["\n                     Disabled Text Field \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(98,0,null,1,6,"amexio-body",[],null,null,null,i._38,i.c)),u._2(99,114688,null,0,o.d,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(101,0,null,0,2,"amexio-text-input",[["disabled","true"],["field-label","Name"],["name","name"],["place-holder","Enter name"]],null,null,null,i._91,i._3)),u._22(5120,null,d.f,function(l){return[l]},[o._28]),u._2(103,114688,null,0,o._28,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],disabled:[2,"disabled"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(109,0,null,0,42,"amexio-row",[],null,null,null,i._52,i.q)),u._2(110,1163264,null,0,o.A,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(112,0,null,0,18,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,i._43,i.h)),u._2(113,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(115,0,null,0,14,"amexio-card",[["header","true"]],null,null,null,i._41,i.f)),u._2(116,114688,null,0,o.g,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(118,0,null,0,2,"amexio-header",[],null,null,null,i._46,i.k)),u._2(119,114688,null,0,o.q,[],null,null),(l()(),u._25(-1,0,["\n                     Font Styling \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(122,0,null,1,6,"amexio-body",[],null,null,null,i._38,i.c)),u._2(123,114688,null,0,o.d,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(125,0,null,0,2,"amexio-text-input",[["field-label","Name"],["font-style","italic"],["icon-feedback","true"],["name","name"],["place-holder","Enter name"]],null,null,null,i._91,i._3)),u._22(5120,null,d.f,function(l){return[l]},[o._28]),u._2(127,114688,null,0,o._28,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"],fontstyle:[3,"fontstyle"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(132,0,null,0,18,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,i._43,i.h)),u._2(133,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(135,0,null,0,14,"amexio-card",[["header","true"]],null,null,null,i._41,i.f)),u._2(136,114688,null,0,o.g,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(138,0,null,0,2,"amexio-header",[],null,null,null,i._46,i.k)),u._2(139,114688,null,0,o.q,[],null,null),(l()(),u._25(-1,0,["\n                     Font Size & Family Styling \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(142,0,null,1,6,"amexio-body",[],null,null,null,i._38,i.c)),u._2(143,114688,null,0,o.d,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(145,0,null,0,2,"amexio-text-input",[["name","name"]],null,null,null,i._91,i._3)),u._22(5120,null,d.f,function(l){return[l]},[o._28]),u._2(147,114688,null,0,o._28,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"],fontsize:[3,"fontsize"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(153,0,null,0,22,"amexio-row",[],null,null,null,i._52,i.q)),u._2(154,1163264,null,0,o.A,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(156,0,null,0,18,"amexio-column",[],[[8,"className",0]],null,null,i._43,i.h)),u._2(157,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(159,0,null,0,14,"amexio-card",[],null,null,null,i._41,i.f)),u._2(160,114688,null,0,o.g,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(162,0,null,0,2,"amexio-header",[],null,null,null,i._46,i.k)),u._2(163,114688,null,0,o.q,[],null,null),(l()(),u._25(-1,0,["\n                     Input with Pattern \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(166,0,null,1,6,"amexio-body",[],null,null,null,i._38,i.c)),u._2(167,114688,null,0,o.d,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(169,0,null,0,2,"amexio-text-input",[["name","name"]],null,null,null,i._91,i._3)),u._22(5120,null,d.f,function(l){return[l]},[o._28]),u._2(171,114688,null,0,o._28,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"],pattern:[3,"pattern"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(178,0,null,0,44,"amexio-tab",[["title","API Reference"]],null,null,null,i._56,i.u)),u._2(179,114688,[[1,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,[" \n            "])),(l()(),u._3(181,0,null,0,23,"amexio-datagrid",[["title","Properties"]],null,null,null,i._103,i._15)),u._2(182,1425408,null,1,o._44,[o.Y,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,2,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(185,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),u._2(186,49152,[[2,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,3,{headerTemplate:0}),u._23(335544320,4,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(190,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),u._2(191,49152,[[2,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,5,{headerTemplate:0}),u._23(335544320,6,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(195,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),u._2(196,49152,[[2,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,7,{headerTemplate:0}),u._23(335544320,8,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(200,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),u._2(201,49152,[[2,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,9,{headerTemplate:0}),u._23(335544320,10,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(206,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(208,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,i._103,i._15)),u._2(209,1425408,null,1,o._44,[o.Y,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),u._23(603979776,11,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(212,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),u._2(213,49152,[[11,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,12,{headerTemplate:0}),u._23(335544320,13,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(217,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),u._2(218,49152,[[11,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,14,{headerTemplate:0}),u._23(335544320,15,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n            \n          "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(224,0,null,0,21,"amexio-tab",[["title","Source"]],null,null,null,i._56,i.u)),u._2(225,114688,[[1,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(227,0,null,0,17,"amexio-vertical-tab-view",[],null,null,null,i._58,i.w)),u._2(228,5357568,null,1,o.I,[u.B],null,null),u._23(603979776,16,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(231,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,i._56,i.u)),u._2(232,114688,[[16,4]],0,o.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,h)),u._2(235,16384,null,0,r.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(238,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,i._56,i.u)),u._2(239,114688,[[16,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,p)),u._2(242,16384,null,0,r.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(247,0,null,0,2,"amexio-tab",[["title","Live"]],null,null,null,i._56,i.u)),u._2(248,114688,[[1,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n           Work in Progress\n          "])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._25(-1,0,["\n      "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,"6"),l(n,28,0,"true"),l(n,31,0),l(n,35,0),l(n,39,0,"Name","Enter name","true"),l(n,45,0,6),l(n,48,0,!0),l(n,51,0),l(n,55,0),l(n,59,0,"Enter name","false","false"),l(n,66,0),l(n,69,0,"6"),l(n,72,0,!0),l(n,75,0),l(n,79,0),l(n,83,0,"Name","1","10","false","Please enter last name","Maximum 10 char allowed","Enter name","true",!0),l(n,89,0,6),l(n,92,0,!0),l(n,95,0),l(n,99,0),l(n,103,0,"Name","Enter name","true"),l(n,110,0),l(n,113,0,"6"),l(n,116,0,"true"),l(n,119,0),l(n,123,0),l(n,127,0,"Name","Enter name","true","italic"),l(n,133,0,"6"),l(n,136,0,"true"),l(n,139,0),l(n,143,0),l(n,147,0,"Name","Enter name",!0,"large"),l(n,154,0),l(n,157,0,6),l(n,160,0,!0),l(n,163,0),l(n,167,0),l(n,171,0,"Name","Enter name",!0,"[a-z]"),l(n,179,0,"API Reference"),l(n,182,0,"Properties","assets/apireference/forms/textinput.json","get","properties",!1,!1),l(n,186,0,"Name","name",!1,"string",15),l(n,191,0,"Type","type",!1,"string",10),l(n,196,0,"Default","default",!1,"string",10),l(n,201,0,"Description","description",!1,"string",65),l(n,209,0,"Events","assets/apireference/forms/textinput.json","get","events",!1),l(n,213,0,"Name","name",!1,"string",20),l(n,218,0,"Description","description",!1,"string",80),l(n,225,0,"Source"),l(n,228,0),l(n,232,0,"HTML",!0),l(n,235,0,e.htmlCode),l(n,239,0,"Type Script"),l(n,242,0,e.typeScriptCode),l(n,248,0,"Live")},function(l,n){l(n,24,0,u._16(n,25).colclass),l(n,44,0,u._16(n,45).colclass),l(n,68,0,u._16(n,69).colclass),l(n,88,0,u._16(n,89).colclass),l(n,112,0,u._16(n,113).colclass),l(n,132,0,u._16(n,133).colclass),l(n,156,0,u._16(n,157).colclass)})}var x=u.Z("text-demo",m,function(l){return u._27(0,[(l()(),u._3(0,0,null,null,1,"text-demo",[],null,null,null,f,s)),u._2(1,49152,null,0,m,[c.e],null,null)],null,null)},{},{},[]),b=e("UHIZ");e.d(n,"TextDemoModuleNgFactory",function(){return g});var g=u._0(t,[],function(l){return u._12([u._13(512,u.j,u.W,[[8,[x]],[3,u.j],u.v]),u._13(4608,r.n,r.m,[u.s,[2,r.u]]),u._13(4608,d.n,d.n,[]),u._13(4608,c.c,c.c,[]),u._13(4608,c.h,c.b,[]),u._13(5120,c.j,c.k,[]),u._13(4608,c.i,c.i,[c.c,c.h,c.j]),u._13(4608,c.g,c.a,[]),u._13(5120,c.e,c.l,[c.i,c.g]),u._13(4608,o.a,o.a,[]),u._13(512,r.b,r.b,[]),u._13(512,d.k,d.k,[]),u._13(512,d.d,d.d,[]),u._13(512,c.f,c.f,[]),u._13(512,_.b,_.b,[]),u._13(512,o.r,o.r,[]),u._13(512,o.p,o.p,[]),u._13(512,o._34,o._34,[]),u._13(512,o.v,o.v,[]),u._13(512,o.y,o.y,[]),u._13(512,o.l,o.l,[]),u._13(512,o.J,o.J,[]),u._13(512,b.m,b.m,[[2,b.r],[2,b.k]]),u._13(512,t,t,[]),u._13(1024,b.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})}});