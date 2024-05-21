// Copyright (c) 2023, Xurpas Inc. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Xeed Chatbot", {
    
    refresh(frm) {
        frm.disable_save();
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        frm.doc.gpt_arr=[0][0];

        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        function appendChat(){
            var gpt_arr = new Array();
            for(var i = 0; i< frm.doc.json.length;++i){
                gpt_arr.push(frm.doc.json[i]);
              }
              
            // console.log('gpt_arr='+frm.doc.json);
            var qa= new Array(frm.doc.current_question,frm.doc.chatgpt_text);
            gpt_arr.push(qa);
            frm.doc.gpt_chat = gpt_arr;
            
        }

        function format_json(json){
            var result=""
            for (var i=0; i < json.length; i ++) {

                if(json[i][0] != null){
                    result+="<div style=\"display: flex; justify-content: flex-end;\"><p class=\"alert-dark\" style=\"width: 98%;\">"+
                    json[i][0]+
                    "</p></div>"
                }

                if(json[i][1] != null){
                    var output=json[i][1].replaceAll('\n','<br>');
                    
                    // console.log(output);
                    result+="<div style=\"display: flex; justify-content: flex-start;\"><p class=\"alert-primary\" style=\"width: 98%;\">"+
                    output+
                    "</p></div>"
                }

            }

            return result

        }

        frm.doc.gpt_session=generateString(10)

        frappe.realtime.on(frm.doc.gpt_session,(data)=>{
            // console.log("chatgpt data: ",data)
            
            frm.doc.chatgpt_text=frm.doc.chatgpt_text +data
            appendChat();
            // console.log("display text: ",frm.doc.gpt_chat)
            frm.set_df_property('display','options',format_json(frm.doc.gpt_chat));
        })

        frm.add_custom_button(
                __('Clear Chat'),function(){
                    show_greeting();
                }
            );

       function show_greeting(){
            
            var result="<div></div>"
            result+="<div style=\"display: flex; justify-content: flex-start;\"><p class=\"alert-primary\" style=\"width: 98%;\">"+
                "Hello, I'm your AI Assistant. How may I help you?"+
                "</p></div>"
            frm.doc.display=result;
            frm.doc.json=[];
            frm.set_df_property('display','options',frm.doc.display);
            console.log("Cleared Chat");
        
            
       };

      show_greeting();
      
	},

    
    send(frm){
        console.log("Send Pressed")
        frm.doc.chatgpt_text=''
        if (frm.doc.input !=null && frm.doc.input !=''){
            frm.doc.current_question=frm.doc.input;
            if (frm.doc.json==null)frm.doc.json=[];
            if (frm.doc.display == null ) frm.doc.display='';
            var input=frm.doc.input;
            frm.doc.display+="<div style=\"display: flex; justify-content: flex-end;\"><p class=\"alert-dark\" style=\"width: 98%;\">"+
                    input+
                    "</p></div>"+
                    "<div class=\"d-flex justify-content-center\">"+
                    "<div class=\"spinner-border text-primary\" role=\"status\">"+
                    "</div>"+
                    "</div>"

            frm.set_df_property('display','options',frm.doc.display);
            frm.doc.input=null
            frm.refresh_field("input")


            // frappe.call({method:'datamanagement.data_management.doctype.chat_gpt.chat_gpt.send', args:{
            //     'msg':frm.doc.input,
            //     'jsonStr':frm.doc.json
            // },

            frappe.call({method:'xeedchatbot.xeedchatbot.doctype.xeed_chatbot.xeed_chatbot.get_sid', args:{
 
            },
            callback:function(r){
                console.log('GUEST SID='+r.message)
            }
            })


            frappe.call({method:'xeedchatbot.xeedchatbot.doctype.xeed_chatbot.xeed_chatbot.ask_question', args:{
                'msg':input,
                'jsonStr':frm.doc.json,
                'gpt_session':frm.doc.gpt_session,
                'context':frm.doc.context
            },
            callback:function(r){
                frm.doc.json=r.message
                frm.doc.display=format_json(r.message)
                frm.set_df_property('display','options',frm.doc.display);
               
                //frm.refresh_field("display")
                // console.log(frm.doc.json)
            }
            })
        }

        function format_json(json){
            var result=""
            for (var i=0; i < json.length; i ++) {

                if(json[i][0] != null){
                    result+="<div style=\"display: flex; justify-content: flex-end;\"><p class=\"alert-dark\" style=\"width: 98%;\">"+
                    json[i][0]+
                    "</p></div>"
                }

                if(json[i][1] != null){
                    var output=json[i][1].replaceAll('\n','<br>');
                    
                    console.log(output);
                    result+="<div style=\"display: flex; justify-content: flex-start;\"><p class=\"alert-primary\" style=\"width: 98%;\">"+
                    output+
                    "</p></div>"
                }

            }

            return result

        }
    },


});

