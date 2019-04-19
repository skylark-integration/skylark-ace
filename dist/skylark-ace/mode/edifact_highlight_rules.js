/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,C){"use strict";var D=e("../lib/oop"),n=e("./doc_comment_highlight_rules").DocCommentHighlightRules,i=e("./text_highlight_rules").TextHighlightRules,I=function(){var e=this.createKeywordMapper({"variable.language":"this",keyword:"BY|SE|ON|INV|JP|UNOA","entity.name.segment":"ADR|AGR|AJT|ALC|ALI|APP|APR|ARD|ARR|ASI|ATT|AUT|BAS|BGM|BII|BUS|CAV|CCD|CCI|CDI|CDS|CDV|CED|CIN|CLA|CLI|CMP|CNI|CNT|COD|COM|COT|CPI|CPS|CPT|CST|CTA|CUX|DAM|DFN|DGS|DII|DIM|DLI|DLM|DMS|DOC|DRD|DSG|DSI|DTM|EDT|EFI|ELM|ELU|ELV|EMP|EQA|EQD|EQN|ERC|ERP|EVE|FCA|FII|FNS|FNT|FOR|FSQ|FTX|GDS|GEI|GID|GIN|GIR|GOR|GPO|GRU|HAN|HYN|ICD|IDE|IFD|IHC|IMD|IND|INP|INV|IRQ|LAN|LIN|LOC|MEA|MEM|MKS|MOA|MSG|MTD|NAD|NAT|PAC|PAI|PAS|PCC|PCD|PCI|PDI|PER|PGI|PIA|PNA|POC|PRC|PRI|PRV|PSD|PTY|PYT|QRS|QTY|QUA|QVR|RCS|REL|RFF|RJL|RNG|ROD|RSL|RTE|SAL|SCC|SCD|SEG|SEL|SEQ|SFI|SGP|SGU|SPR|SPS|STA|STC|STG|STS|TAX|TCC|TDT|TEM|TMD|TMP|TOD|TPL|TRU|TSR|UNB|UNZ|UNT|UGH|UGT|UNS|VLI","entity.name.header":"UNH","constant.language":"null|Infinity|NaN|undefined","support.function":""},"identifier");this.$rules={start:[{token:"punctuation.operator",regex:"\\+.\\+"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+"},{token:"punctuation.operator",regex:"\\:|'"},{token:"identifier",regex:"\\:D\\:"}]},this.embedRules(n,"doc-",[n.getEndRule("start")])};I.metaData={fileTypes:["edi"],keyEquivalent:"^~E",name:"Edifact",scopeName:"source.edifact"},D.inherits(I,i),t.EdifactHighlightRules=I});
//# sourceMappingURL=../sourcemaps/mode/edifact_highlight_rules.js.map
