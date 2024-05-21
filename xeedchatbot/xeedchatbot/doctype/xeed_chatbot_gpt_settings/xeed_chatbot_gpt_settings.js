// Copyright (c) 2023, Xurpas AI Lab and contributors
// For license information, please see license.txt

frappe.ui.form.on("Xeed Chatbot GPT Settings", {
	refresh(frm) {

        frm.add_custom_button(
            __('Re-train Model'),function(){
             frappe.call({method:'xeedchatbot.xeedchatbot.doctype.xeed_chatbot_gpt_settings.xeed_chatbot_gpt_settings.train', args:{
                 },
             callback:function(r){
             }
             })
            }
        );

	},
});


