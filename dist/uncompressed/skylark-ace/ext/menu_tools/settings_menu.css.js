define([], function() { return "#ace_settingsmenu, #kbshortcutmenu {\r\n    background-color: #F7F7F7;\r\n    color: black;\r\n    box-shadow: -5px 4px 5px rgba(126, 126, 126, 0.55);\r\n    padding: 1em 0.5em 2em 1em;\r\n    overflow: auto;\r\n    position: absolute;\r\n    margin: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 9991;\r\n    cursor: default;\r\n}\r\n\r\n.ace_dark #ace_settingsmenu, .ace_dark #kbshortcutmenu {\r\n    box-shadow: -20px 10px 25px rgba(126, 126, 126, 0.25);\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n    color: black;\r\n}\r\n\r\n.ace_optionsMenuEntry:hover {\r\n    background-color: rgba(100, 100, 100, 0.1);\r\n    transition: all 0.3s\r\n}\r\n\r\n.ace_closeButton {\r\n    background: rgba(245, 146, 146, 0.5);\r\n    border: 1px solid #F48A8A;\r\n    border-radius: 50%;\r\n    padding: 7px;\r\n    position: absolute;\r\n    right: -8px;\r\n    top: -8px;\r\n    z-index: 100000;\r\n}\r\n.ace_closeButton{\r\n    background: rgba(245, 146, 146, 0.9);\r\n}\r\n.ace_optionsMenuKey {\r\n    color: darkslateblue;\r\n    font-weight: bold;\r\n}\r\n.ace_optionsMenuCommand {\r\n    color: darkcyan;\r\n    font-weight: normal;\r\n}\r\n.ace_optionsMenuEntry input, .ace_optionsMenuEntry button {\r\n    vertical-align: middle;\r\n}\r\n\r\n.ace_optionsMenuEntry button[ace_selected_button=true] {\r\n    background: #e7e7e7;\r\n    box-shadow: 1px 0px 2px 0px #adadad inset;\r\n    border-color: #adadad;\r\n}\r\n.ace_optionsMenuEntry button {\r\n    background: white;\r\n    border: 1px solid lightgray;\r\n    margin: 0px;\r\n}\r\n.ace_optionsMenuEntry button:hover{\r\n    background: #f0f0f0;\r\n}"; });