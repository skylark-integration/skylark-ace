/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,r){"use strict";var n=e("../lib/oop"),u=e("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{include:"#comments"},{include:"#strings"},{include:"#base-prefix-declarations"},{include:"#string-language-suffixes"},{include:"#string-datatype-suffixes"},{include:"#relative-urls"},{include:"#xml-schema-types"},{include:"#rdf-schema-types"},{include:"#owl-types"},{include:"#qnames"},{include:"#punctuation-operators"}],"#base-prefix-declarations":[{token:"keyword.other.prefix.turtle",regex:/@(?:base|prefix)/}],"#comments":[{token:["punctuation.definition.comment.turtle","comment.line.hash.turtle"],regex:/(#)(.*$)/}],"#owl-types":[{token:"support.type.datatype.owl.turtle",regex:/owl:[a-zA-Z]+/}],"#punctuation-operators":[{token:"keyword.operator.punctuation.turtle",regex:/;|,|\.|\(|\)|\[|\]/}],"#qnames":[{token:"entity.name.other.qname.turtle",regex:/(?:[a-zA-Z][-_a-zA-Z0-9]*)?:(?:[_a-zA-Z][-_a-zA-Z0-9]*)?/}],"#rdf-schema-types":[{token:"support.type.datatype.rdf.schema.turtle",regex:/rdfs?:[a-zA-Z]+|(?:^|\s)a(?:\s|$)/}],"#relative-urls":[{token:"string.quoted.other.relative.url.turtle",regex:/</,push:[{token:"string.quoted.other.relative.url.turtle",regex:/>/,next:"pop"},{defaultToken:"string.quoted.other.relative.url.turtle"}]}],"#string-datatype-suffixes":[{token:"keyword.operator.datatype.suffix.turtle",regex:/\^\^/}],"#string-language-suffixes":[{token:["keyword.operator.language.suffix.turtle","constant.language.suffix.turtle"],regex:/(?!")(@)([a-z]+(?:\-[a-z0-9]+)*)/}],"#strings":[{token:"string.quoted.triple.turtle",regex:/"""/,push:[{token:"string.quoted.triple.turtle",regex:/"""/,next:"pop"},{defaultToken:"string.quoted.triple.turtle"}]},{token:"string.quoted.double.turtle",regex:/"/,push:[{token:"string.quoted.double.turtle",regex:/"/,next:"pop"},{token:"invalid.string.newline",regex:/$/},{token:"constant.character.escape.turtle",regex:/\\./},{defaultToken:"string.quoted.double.turtle"}]}],"#xml-schema-types":[{token:"support.type.datatype.xml.schema.turtle",regex:/xsd?:[a-z][a-zA-Z]+/}]},this.normalizeRules()};l.metaData={fileTypes:["ttl","nt"],name:"Turtle",scopeName:"source.turtle"},n.inherits(l,u),t.TurtleHighlightRules=l});
//# sourceMappingURL=../sourcemaps/mode/turtle_highlight_rules.js.map
