goog.provide('com.wsscode.pathom.book.core.parser_counter_nested_example');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
com.wsscode.pathom.book.core.parser_counter_nested_example.join_walk_reader = (function com$wsscode$pathom$book$core$parser_counter_nested_example$join_walk_reader(p__53195){
var map__53197 = p__53195;
var map__53197__$1 = (((((!((map__53197 == null))))?(((((map__53197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53197):map__53197);
var env = map__53197__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53197__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.core.parser_counter_nested_example.join_walk_reader,(function (p1__53203_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-nested-example","counter","com.wsscode.pathom.book.core.parser-counter-nested-example/counter",-446887874).cljs$core$IFn$_invoke$arity$1(p1__53203_SHARP_),cljs.core.inc);
})], null)], null)], null));
com.wsscode.pathom.book.core.parser_counter_nested_example.parser = (function com$wsscode$pathom$book$core$parser_counter_nested_example$parser(env,tx){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__){
return (function (state_53211){
var state_val_53212 = (state_53211[(1)]);
if((state_val_53212 === (1))){
var inst_53207 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_53208 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.book.core.parser-counter-nested-example","counter","com.wsscode.pathom.book.core.parser-counter-nested-example/counter",-446887874),inst_53207);
var inst_53209 = (com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser.cljs$core$IFn$_invoke$arity$2(inst_53208,tx) : com.wsscode.pathom.book.core.parser_counter_nested_example.count_parser.call(null,inst_53208,tx));
var state_53211__$1 = state_53211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53211__$1,inst_53209);
} else {
return null;
}
});})(c__38971__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__){
return (function() {
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto____0 = (function (){
var statearr_53219 = [null,null,null,null,null,null,null];
(statearr_53219[(0)] = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto__);

(statearr_53219[(1)] = (1));

return statearr_53219;
});
var com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto____1 = (function (state_53211){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53211);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53220){if((e53220 instanceof Object)){
var ex__38928__auto__ = e53220;
var statearr_53225_53340 = state_53211;
(statearr_53225_53340[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53343 = state_53211;
state_53211 = G__53343;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto__ = function(state_53211){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto____1.call(this,state_53211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$core$parser_counter_nested_example$parser_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__))
})();
var state__38973__auto__ = (function (){var statearr_53262 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53262[(6)] = c__38971__auto__);

return statearr_53262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__))
);

return c__38971__auto__;
});

//# sourceMappingURL=com.wsscode.pathom.book.core.parser_counter_nested_example.js.map
