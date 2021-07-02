var title='Sinixt';
var sub ='<p>'+`Sinixt are Interior Salishan Peoples whose təmxʷúlaʔxʷ (traditional territory) lies in the Columbia Mountains. 
Their Sn-səlxcin Dialect reflects the globally unique Inland Temperate Rainforest of their homeland. 
Declared extinct for the purposes of the Indian Act by the Canadian government in 1956, 
Sinixt continue their work of resurgence from bureaucratic genocide through initiatives like this site, 
which offers information on their millennia-long and ongoing relationship to the land.`+'</p>';

var header=new Element('heading');
var titleEl=header.appendChild(new Element('h1', {html:title}));
var descriptionEl=header.appendChild(new Element('h2', {html:sub}));
 
 
 
 (new AjaxControlQuery(CoreAjaxUrlRoot, "user_function", {
		'widget': "dailyWord"
		
	})).addEvent('success',function(response){
	    
	       var word=response.word;
	       var english=response.english;
	       var description=response.description;
	       
	      var wotd= titleEl.appendChild(new Element('span', {html:'Sinixt word of the day'}));
	      var wordEl=wotd.appendChild(new Element('span',{html:word}));
	      
	      new UIPopover(mod.getElement(),{
            content:`<h2>`+word+`</h2>
            
            en: `+english+`
            definition: `+description+`
            
            `,
            anchor:UIPopover.AnchorAuto()
	      });
    });
	       
	    
	}).execute(); 
 
 
 
return header;