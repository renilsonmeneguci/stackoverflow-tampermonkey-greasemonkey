// ==UserScript==
// @name         CleanChat-WhatsApp
// @namespace    stackuserflow-WhatsApp
// @version      0.1.2
// @description  Muda o visual do chat para algo mais simples
// @author       Guilherme Nascimento
// @subauthor    Renilson Andrade
// @match        *://chat.stackoverflow.com/rooms/*
// @match        *://chat.stackexchange.com/rooms/*
// @exclude      *://chat.stackoverflow.com/rooms/info/*
// @exclude      *://chat.stackexchange.com/rooms/info/*
// @grant        none
// ==/UserScript==

(function(doc) {
    'use strict';

    var custom = 'body { \
background: #f2f2f3 !important; \
} \
\
#container { \
padding: 10px !important; \
} \
\
.monologue .messages { \
padding: 15px 5px !important; \
border-radius: 4px !important; \
position: relative !important; \
background: #fff !important; \
border: 1px solid #e1e1e1 !important; \
} \
\
.monologue { \
margin-right: 13% !important; \
margin-bottom: 15px !important; \
position: relative !important; \
} \
.monologue .messages:after, .monologue .messages:before { \
right: 100% !important; \
top: 15px !important; \
border: solid transparent !important; \
content: " " !important; \
height: 0 !important; \
width: 0 !important; \
position: absolute !important; \
pointer-events: none !important; \
} \
\
.monologue .messages:after { \
border-color: rgba(227, 248, 255, 0) !important; \
border-right-color: #fff !important; \
border-width: 5px !important; \
margin-top: -5px !important; \
} \
.monologue .messages:before { \
border-color: rgba(208, 234, 243, 0) !important; \
border-right-color: #e1e1e1 !important; \
border-width: 6px !important; \
margin-top: -6px !important; \
} \
\
.mine { \
margin-left: 13% !important; \
margin-right: 0 !important; \
} \
\
.mine .signature { \
float: right !important; \
text-align: left !important; \
margin-right: 0 !important; \
} \
\
.mine .tiny-signature .avatar { \
float: left !important; \
margin: 0 !important; \
} \
\
.mine .messages { \
background: #beebff !important; \
border-color: #b0dae8 !important; \
} \
\
.mine .messages:after { \
border-color: rgba(227, 248, 255, 0) !important; \
border-left-color: #beebff !important; \
} \
.mine .messages:before { \
border-color: rgba(208, 234, 243, 0) !important; \
border-left-color: #b0dae8 !important; \
} \
\
.mine .messages:after { \
right: -10px !important; \
} \
\
.mine .messages:before { \
right: -12px !important; \
} \
.button { \
background: #5fba7d !important; \
text-shadow: none !important; \
box-shadow: none !important; \
padding: 5px 12px !important; \
border-radius: 3px !important; \
border: none !important; \
margin-left: 5px!important;\
min-width: 84px!important;\
} \
div.sidebar-widget{max-height:300px!important;}\
#cancel-editing-button{\
max-width: 84px !important;\
}\
#input-table td.chat-input { \
width: 398px !important; \
} \
#input { \
padding: 2px !important; \
width: 100% !important; \
background: transparent !important; \
border-color: transparent !important; \
outline: none !important; \
border: none !important; \
resize: none !important; \
-webkit-box-shadow: 0 -2px 0 #c0c0c0 !important; \
box-shadow: 0 -2px 0 #c0c0c0 inset !important; \
transition: all .5s !important; \
} \
#input:focus { \
-webkit-box-shadow: 0 -3px 0 #5fba7d !important; \
box-shadow: 0 -3px 0 #5fba7d inset !important; \
} \
#input-area { \
left: 20.2%!important;\
background: #fdfdfb !important; \
border-top: 1px #d8d1d1 solid !important; \
z-index: 6 !important; \
box-shadow: 0 0 55px rgba(0,0,0,.13) !important; \
} \
#input-table { \
width: 98% !important; \
} \
#sidebar { \
background: #fdfdfb !important; \
border-left: 1px #d8d1d1 solid !important; \
z-index: 7 !important; \
padding-right: 0 !important; \
} \
#input-area a { \
color: #4a825c !important; \
} \
\
.avatar img { \
border-radius: 4px !important; \
} \
\
#present-users > .present-user { \
margin: 0 2px 2px 0 !important; \
height: auto !important; \
} \
.monologue .tiny-signature .username { \
clear: both !important; \
overflow: visible !important; \
height: auto !important; \
min-height: 12px !important; \
} \
#footer-logo { \
background: #fdfdfb !important \
border-radius: 2px !important; \
} \
#footer-legal{\
display: none !important;\
}\
#input-table td.chat-input{\
width: 60%!important;\
}\
#footer-logo{\
display:none !important;\
}\
#sidebar{\
right: 79.9% !important;\
max-width: 20%!important;\
}\
#chat{\
left: 43% !important;\
}\
#present-users > .present-user{\
min-width: 99.5%!important;\
padding: 5px 0 0 0!important;\
box-shadow: 0 -2px 0 #5fba7d inset !important;\
cursor: pointer!important;\
}\
#present-users > .present-user:hover{\
background-color: #ceead4!important;\
}\
#present-users{\
overflow-y: scroll!important;\
max-height: 300px!important;\
}\
#getmore{\
margin-left: 50%!important;\
}\
p.user-name{\
position: relative!important;\
display: inline-block!important;\
top: -10px!important;\
height: 100%!important;\
}\
li > div.avatar{\
max-width: 50px!important;\
display: inline-block!important;\
margin-right: 15px!important;\
}\
::-webkit-scrollbar {\
width: 5px;\
}\
::-webkit-scrollbar-thumb {\
background: #5fba7d; \
}\
#chat-buttons{\
width: 300px!important;\
border-right-width: 200px!important;\
padding-right: 300px!important;\
}\
#chat-buttons button.button{\
width: 100px!important;\
}\
div.fl{display:none!important;}\
#searchbox{width: 50%!important;float:left!important;margin-left:19%!important;}\
#sidebar #info #roomtitle { \
text-shadow: none !important; \
text-align: center !important; \
}';

    function referenciar()
    {
        var user = this.getAttribute('data-user');
        var input = document.getElementById("input");
        input.value = '@' + user.replace(' ', '') + ' ';
        input.focus();
    }

    function createLabels()
    {
        var arr = doc.getElementsByClassName("present-user user-container");
        for (var i = 0, len = arr.length; i < len; i++) {
            var name = arr[i].childNodes[0].childNodes[0].title;
            var temp ='<p class="user-name">' +name+ '</p>';
            arr[i].insertAdjacentHTML('beforeend', temp);
            arr[i].setAttribute('data-user', name);
            arr[i].onclick = referenciar;
        }
    }

    function trigger()
    {
        var s = doc.createElement("style");
        s.textContent = custom;
        doc.head.appendChild(s);

        setTimeout(placeholder, 800);
        setTimeout(createLabels, 800);
    }

    function placeholder()
    {
        var input = document.getElementById("input");

        if (input && !input.placeholder) {
            input.placeholder = "Message...";
        }
    }


    //     function triggerObserver()
    //     {
    //         var valid = /(^|\s)present\-user($|\s)/;

    //         var observer = new MutationObserver(function(mutations)
    //                                             {
    //             mutations.forEach(function (mutation)
    //                               {
    //                 var el = mutation.target;

    //                 if (!el.definedAction && el.className && valid.test(el.className)) {
    //                     el.definedAction = true;
    //                     el.onclick = function() {
    //                         referenciar();
    //                     };
    //                 }
    //             });
    //         });

    //         var observado = document.getElementById("present-users");

    //         observer.observe(doc.body, {
    //             "subtree": true,
    //             "childList": true,
    //             "attributes": true
    //         });
    //     }


    if (/^(interactive|complete)$/i.test(doc.readyState)) {
        trigger();
        //triggerObserver();
    } else {
        doc.addEventListener('DOMContentLoaded', trigger);
        //doc.addEventListener("DOMContentLoaded", triggerObserver);
    }
})(document);
