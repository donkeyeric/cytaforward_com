function initFlashPic (incPage) {
	homeImgUrl1 = "/winbaidu/flash/1.jpg";
	homeImgtext1 = "¡°ĞÇ½àÃÎÍøwww.xjmw.net"
	homeImgLink1 = escape ("#");				
	
	homeImgUrl2 = "/winbaidu/flash/2.jpg";
	homeImgtext2 = "ĞÇ½àÃÎÍøwww.xjmw.net"
	homeImgLink2 = escape ("#");
	
	homeImgUrl3 = "/winbaidu/flash/3.jpg";
	homeImgtext3 = "ĞÇ½àÃÎÍøwww.xjmw.net"
	homeImgLink3 = escape ("#");
	
	homeImgUrl4 = "/winbaidu/flash/4.jpg";
	homeImgtext4 = "ĞÇ½àÃÎÍøwww.xjmw.net"
	homeImgLink4 = escape ("#");
	

        homeImgUrl5 = "/winbaidu/flash/5.jpg";
	homeImgtext5 = "ĞÇ½àÃÎÍøwww.xjmw.net"
	homeImgLink5 = escape ("#");
	

	

       /*ÓÃÓÚºÄ²ÄÎÄÒÇ*/
	csImgUrl1 = "/website/ad/2007/05/cs/HP01_390x145.jpg";
	csImgtext1 = "ĞÇ½àÃÎÍøwww.xjmw.net"
	csImgLink1 = escape ("www.xjmw.net");			
	csImgUrl2 = "/website/ad/2007/05/cs/staples_cd_holder_390x145.jpg";
	csImgtext2 = "ĞÇ½àÃÎÍøwww.xjmw.net"
	csImgLink2 = escape ("www.xjmw.net");
	/******************************************/
	
	/*ÓÃÓÚÉè±¸ÖÜ±ß*/
	mpImgUrl1 = "/website/ad/2007/05/mp/ir_390x145.jpg";
	mpImgtext1 = "ĞÇ½àÃÎÍøwww.xjmw.net"
	mpImgLink1 = escape ("/website/common/AccessingStat.aspx?originID=2F&redirectPath=/website/topic/ad_2007/05/machine/canon_ir_copier.asp");
	
	mpImgUrl2 = "/website/ad/2007/05/mp/Canon-IC-MF4122-390x145.jpg";
	mpImgtext2 = "ĞÇ½àÃÎÍøwww.xjmw.net"
	mpImgLink2 = escape ("/website/common/AccessingStat.aspx?originID=2G&redirectPath=/website/prod/prod_det.asp?productcode=01020608021");
	/******************************************/

	/*ÓÃÓÚ¼Ò¾ß¼Òµç*/
	faImgUrl1="/website/ad/2007/05/fa/olympic_390x145.jpg";
	faImgtext1="ĞÇ½àÃÎÍøwww.xjmw.net"
	faImgLink1=escape("/website/common/AccessingStat.aspx?originID=2H&redirectPath=http://media.staples.sh.cn/website/news/news_det.asp?PKID=746");			
		
	faImgUrl2="/website/ad/2007/05/fa/yadu_390x145.jpg";
	faImgtext2="ĞÇ½àÃÎÍøwww.xjmw.net"
	faImgLink2=escape("/website/common/AccessingStat.aspx?originID=2I&redirectPath=http://www.oa365.com/website/prod/prod_search_result.asp?QueryStringValue=[--][--]ÑÇ¶¼[--][--][--][--][--][--][--]&groupid=1037409&IfRepeatSearch=T");
	/******************************************/

	
		var pics = homeImgUrl1 + "|" + homeImgUrl2 + "|" + homeImgUrl3 + "|" + homeImgUrl4+ "|" + homeImgUrl5;
		var links = homeImgLink1 + "|" + homeImgLink2 + "|" + homeImgLink3 + "|" + homeImgLink4 + "|" + homeImgLink5;
		var texts = homeImgtext1 + "|" + homeImgtext2 + "|" + homeImgtext3 + "|" + homeImgtext4 + "|" + homeImgtext5;
	
	
	var focus_width = 654;
	var focus_height = 140;
	var text_height = 0;
	var swf_height = focus_height + text_height;
	
	document.write ("<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0\" width=\""+ focus_width + "\" height=\"" + swf_height + "\">");
	document.write ("<param name=\"allowScriptAccess\" value=\"sameDomain\"><param name=\"movie\" value=\"/winbaidu/PixViewer.swf\"><param name=\"quality\" value=\"high\"><param name=\"bgcolor\" value=\"#F0F0F0\">");
	document.write ("<param name=\"menu\" value=\"false\"><param name=\"wmode\" value=\"opaque\">");
	document.write ("<param name=\"FlashVars\" value=\"pics=" + pics + "&links=" + links + "&texts=" + texts + "&borderwidth=" + focus_width + "&borderheight=" + focus_height + "&textheight=" + text_height + "\">");
	document.write ("<embed src=\"/Website/Common/Flash/PixViewer.swf\" wmode=\"opaque\" FlashVars=\"pics=" + pics + "&links=" + links + "&texts=" + texts + "&borderwidth=" + focus_width + "&borderheight=" + focus_height + "&textheight=" + text_height + "\" menu=\"false\" bgcolor=\"#F0F0F0\" quality=\"high\" width=\"" + focus_width + "\" height=\"" + focus_height + "\" allowScriptAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />");
	document.write ("</object>");
}