
var button=new Element('button', {

					html: 'Edit',
					style: "background-color:#EDC84C;",
					"class": "primary-btn add-document edit-document"

				});
				
   
        
        
            
        
        
			


 (new UIModalFormButton(button, application, item, {

					formOptions: {
						_template: "form"
					},
					formName: "documentForm",

				})).addEvent('complete', function() {

				    
				    
				    (new AjaxControlQuery(CoreAjaxUrlRoot, "get_configuration_field", {
                    		'widget': "documents",
                    		'field': "documents"
                    	})).addEvent('success',function(response){
                    	    
                    	    
                    	    var values=response.value;
                    	    if(!(values&&values.map)){
                    	        return;
                    	    }
                    
                             var files=values.map(function(v, i){
                                 
                                 if(i==item._getId()){
                                     return {
                            			    name:item.getName(),
                            			    description:item.getDescription()
                            			};
                                 }
                                 
                                 return v;
                                 
                                 
                             })  
                    
                    
                        (new AjaxControlQuery(CoreAjaxUrlRoot, "set_configuration_field", {
                    		'widget': "documents",
                    		'field': {
                    			"name":"documents",
                    			"value":files
                    		}
                    	})).addEvent('success',function(response){
                    
                    	}).execute();
                    
                    
                    }).execute();
				    
				    
				    
				    
				    
				    

				});
				
				return button;