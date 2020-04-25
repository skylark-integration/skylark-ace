/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";var e=require("../lib/oop"),t=require("./text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{token:"keyword.compiler.nsis",regex:/^\s*!(?:include|addincludedir|addplugindir|appendfile|cd|delfile|echo|error|execute|packhdr|pragma|finalize|getdllversion|gettlbversion|system|tempfile|warning|verbose|define|undef|insertmacro|macro|macroend|makensis|searchparse|searchreplace)\b/,caseInsensitive:!0},{token:"keyword.command.nsis",regex:/^\s*(?:Abort|AddBrandingImage|AddSize|AllowRootDirInstall|AllowSkipFiles|AutoCloseWindow|BGFont|BGGradient|BrandingText|BringToFront|Call|CallInstDLL|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|CreateDirectory|CreateFont|CreateShortCut|Delete|DeleteINISec|DeleteINIStr|DeleteRegKey|DeleteRegValue|DetailPrint|DetailsButtonText|DirText|DirVar|DirVerify|EnableWindow|EnumRegKey|EnumRegValue|Exch|Exec|ExecShell|ExecShellWait|ExecWait|ExpandEnvStrings|File|FileBufSize|FileClose|FileErrorText|FileOpen|FileRead|FileReadByte|FileReadUTF16LE|FileReadWord|FileWriteUTF16LE|FileSeek|FileWrite|FileWriteByte|FileWriteWord|FindClose|FindFirst|FindNext|FindWindow|FlushINI|GetCurInstType|GetCurrentAddress|GetDlgItem|GetDLLVersion|GetDLLVersionLocal|GetErrorLevel|GetFileTime|GetFileTimeLocal|GetFullPathName|GetFunctionAddress|GetInstDirError|GetLabelAddress|GetTempFileName|Goto|HideWindow|Icon|IfAbort|IfErrors|IfFileExists|IfRebootFlag|IfSilent|InitPluginsDir|InstallButtonText|InstallColors|InstallDir|InstallDirRegKey|InstProgressFlags|InstType|InstTypeGetText|InstTypeSetText|Int64Cmp|Int64CmpU|Int64Fmt|IntCmp|IntCmpU|IntFmt|IntOp|IntPtrCmp|IntPtrCmpU|IntPtrOp|IsWindow|LangString|LicenseBkColor|LicenseData|LicenseForceSelection|LicenseLangString|LicenseText|LoadLanguageFile|LockWindow|LogSet|LogText|ManifestDPIAware|ManifestSupportedOS|MessageBox|MiscButtonText|Name|Nop|OutFile|Page|PageCallbacks|PEDllCharacteristics|PESubsysVer|Pop|Push|Quit|ReadEnvStr|ReadINIStr|ReadRegDWORD|ReadRegStr|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|SectionGetFlags|SectionGetInstTypes|SectionGetSize|SectionGetText|SectionIn|SectionSetFlags|SectionSetInstTypes|SectionSetSize|SectionSetText|SendMessage|SetAutoClose|SetBrandingImage|SetCompress|SetCompressor|SetCompressorDictSize|SetCtlColors|SetCurInstType|SetDatablockOptimize|SetDateSave|SetDetailsPrint|SetDetailsView|SetErrorLevel|SetErrors|SetFileAttributes|SetFont|SetOutPath|SetOverwrite|SetRebootFlag|SetRegView|SetShellVarContext|SetSilent|ShowInstDetails|ShowUninstDetails|ShowWindow|SilentInstall|SilentUnInstall|Sleep|SpaceTexts|StrCmp|StrCmpS|StrCpy|StrLen|SubCaption|Unicode|UninstallButtonText|UninstallCaption|UninstallIcon|UninstallSubCaption|UninstallText|UninstPage|UnRegDLL|Var|VIAddVersionKey|VIFileVersion|VIProductVersion|WindowIcon|WriteINIStr|WriteRegBin|WriteRegDWORD|WriteRegExpandStr|WriteRegMultiStr|WriteRegNone|WriteRegStr|WriteUninstaller|XPStyle)\b/,caseInsensitive:!0},{token:"keyword.control.nsis",regex:/^\s*!(?:ifdef|ifndef|if|ifmacrodef|ifmacrondef|else|endif)\b/,caseInsensitive:!0},{token:"keyword.plugin.nsis",regex:/^\s*\w+::\w+/,caseInsensitive:!0},{token:"keyword.operator.comparison.nsis",regex:/[!<>]?=|<>|<|>/},{token:"support.function.nsis",regex:/(?:\b|^\s*)(?:Function|FunctionEnd|Section|SectionEnd|SectionGroup|SectionGroupEnd|PageEx|PageExEnd)\b/,caseInsensitive:!0},{token:"support.library.nsis",regex:/\${[\w\.:-]+}/},{token:"constant.nsis",regex:/\b(?:ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_HIDDEN|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HIDDEN|HKCC|HKCR(32|64)?|HKCU(32|64)?|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM(32|64)?|HKPD|HKU|IDABORT|IDCANCEL|IDD_DIR|IDD_INST|IDD_INSTFILES|IDD_LICENSE|IDD_SELCOM|IDD_UNINST|IDD_VERIFY|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|MB_YESNOCANCEL|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SW_HIDE|SW_SHOWDEFAULT|SW_SHOWMAXIMIZED|SW_SHOWMINIMIZED|SW_SHOWNORMAL|SYSTEM|TEMPORARY)\b/,caseInsensitive:!0},{token:"constant.library.nsis",regex:/\${(?:AtLeastServicePack|AtLeastWin7|AtLeastWin8|AtLeastWin10|AtLeastWin95|AtLeastWin98|AtLeastWin2000|AtLeastWin2003|AtLeastWin2008|AtLeastWin2008R2|AtLeastWinME|AtLeastWinNT4|AtLeastWinVista|AtLeastWinXP|AtMostServicePack|AtMostWin7|AtMostWin8|AtMostWin10|AtMostWin95|AtMostWin98|AtMostWin2000|AtMostWin2003|AtMostWin2008|AtMostWin2008R2|AtMostWinME|AtMostWinNT4|AtMostWinVista|AtMostWinXP|IsDomainController|IsNT|IsServer|IsServicePack|IsWin7|IsWin8|IsWin10|IsWin95|IsWin98|IsWin2000|IsWin2003|IsWin2008|IsWin2008R2|IsWinME|IsWinNT4|IsWinVista|IsWinXP)}/},{token:"constant.language.boolean.true.nsis",regex:/\b(?:true|on)\b/},{token:"constant.language.boolean.false.nsis",regex:/\b(?:false|off)\b/},{token:"constant.language.option.nsis",regex:/(?:\b|^\s*)(?:(?:un\.)?components|(?:un\.)?custom|(?:un\.)?directory|(?:un\.)?instfiles|(?:un\.)?license|uninstConfirm|admin|all|auto|both|bottom|bzip2|current|force|hide|highest|ifdiff|ifnewer|lastused|leave|left|listonly|lzma|nevershow|none|normal|notset|right|show|silent|silentlog|textonly|top|try|user|Win10|Win7|Win8|WinVista|zlib)\b/,caseInsensitive:!0},{token:"constant.language.slash-option.nsis",regex:/\b\/(?:a|BRANDING|CENTER|COMPONENTSONLYONCUSTOM|CUSTOMSTRING=|date|e|ENABLECANCEL|FILESONLY|file|FINAL|GLOBAL|gray|ifempty|ifndef|ignorecase|IMGID=|ITALIC|LANG=|NOCUSTOM|noerrors|NONFATAL|nonfatal|oname=|o|REBOOTOK|redef|RESIZETOFIT|r|SHORT|SILENT|SOLID|STRIKE|TRIM|UNDERLINE|utcdate|windows|x)\b/,caseInsensitive:!0},{token:"constant.numeric.nsis",regex:/\b(?:0(?:x|X)[0-9a-fA-F]+|[0-9]+(?:\.[0-9]+)?)\b/},{token:"entity.name.function.nsis",regex:/\$\([\w\.:-]+\)/},{token:"storage.type.function.nsis",regex:/\$\w+/},{token:"punctuation.definition.string.begin.nsis",regex:/`/,push:[{token:"punctuation.definition.string.end.nsis",regex:/`/,next:"pop"},{token:"constant.character.escape.nsis",regex:/\$\\./},{defaultToken:"string.quoted.back.nsis"}]},{token:"punctuation.definition.string.begin.nsis",regex:/"/,push:[{token:"punctuation.definition.string.end.nsis",regex:/"/,next:"pop"},{token:"constant.character.escape.nsis",regex:/\$\\./},{defaultToken:"string.quoted.double.nsis"}]},{token:"punctuation.definition.string.begin.nsis",regex:/'/,push:[{token:"punctuation.definition.string.end.nsis",regex:/'/,next:"pop"},{token:"constant.character.escape.nsis",regex:/\$\\./},{defaultToken:"string.quoted.single.nsis"}]},{token:["punctuation.definition.comment.nsis","comment.line.nsis"],regex:/(;|#)(.*$)/},{token:"punctuation.definition.comment.nsis",regex:/\/\*/,push:[{token:"punctuation.definition.comment.nsis",regex:/\*\//,next:"pop"},{defaultToken:"comment.block.nsis"}]},{token:"text",regex:/(?:!include|!insertmacro)\b/}]},this.normalizeRules()};n.metaData={comment:"\n\ttodo: - highlight functions\n\t",fileTypes:["nsi","nsh"],name:"NSIS",scopeName:"source.nsis"},e.inherits(n,t),exports.NSISHighlightRules=n});
//# sourceMappingURL=../sourcemaps/mode/nsis_highlight_rules.js.map
