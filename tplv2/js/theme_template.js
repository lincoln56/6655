﻿template('feed_template', '{each blog as data i} <div class="box" id="blog_{data.bid}"> {include tpl_header_define(\'header\') data} {include tpl_feed_define(data.type) data} {if data.show_reply ==1} {include tpl_header_define(\'infooter\') data} {else} {include tpl_header_define(\'footer\') data} {/if} <div class="clear"></div> </div> {/each}');
template('tmpl_model_header', '<div class="date"><div class="month">{time_y}</div><div class="day">{time_d}</div></div> <div class="title" id="box_title"><a href="{b_url}">{if top ==1}[\u7f6e\u9876]{/if}{if title != null}{title}{/if}</a></div>');
template('tmpl_model_1', '<div id="feedText_{bid}" class="content"> <div class="text_area_all"> <p> {if attr.length >0} {each attr as img i} {if i <1} <img src="{img}" style="float:left; padding-right:5px"/>{/if} {/each} {/if} {body}</p> <div class="clear"></div> </div> </div>');
template('tmpl_model_2', '<div id="feedText_{bid}" class="content"> {if attr.length > 0} {each attr as m i} {if m.type == \'local\'} <div class="album" id="swf_cover_{bid}_{i}"> <div class="cover"> <div class="cover_img"></div> <img src="{m.img}"/> </div> <div class="cover_title">{m.title} - {m.author}</div> <div class="cover_fun"><a href="javascrpt:void(0)" onclick="window.location.href={urlpath()}/{m.url}"><span class="download">\u4e0b\u8f7d\u97f3\u4e50</span></a></div> <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="340" height="33"> <param name="movie" value="{flashpath(m.url)}" /> <param name="quality" value="high" /> <param value="transparent" name="wmode" /> <embed src="{flashpath(m.url)}" width="340" height="33" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed> </object> </div> {/if} {if m.type == \'xiamisearch\' || m.type == \'xiami\'} <div class="album"> <div class="cover"> <div class="cover_img"></div> <img src="{m.img}" /> </div> {if m.title != \'null\' && m.author != \'null\'} <div class="cover_title"> <a href="{h_url}">{m.title} {m.author}</a> </div> {/if} <div class="cover_fun"> <a href="{m.url}" target="_blank"><span class="eject">\u5f39\u51fa\u64ad\u653e</span></a> </div> {if m.type == \'xiami\'} <embed src="http://www.xiami.com/widget/0_{m.pid}/singlePlayer.swf" type="application/x-shockwave-flash" width="340" height="33" wmode="transparent"></embed> {else} <embed src="{m.pid}" type="application/x-shockwave-flash" width="340" height="33" wmode="transparent"></embed> {/if} </div> {/if} {if m.type == \'yinyuetai\'} <div class="video w240" id="swf_cover_{bid}_{i}"> <div class="video_bg"> <div class="video_song">{m.title}</div> <div class="video_name">{m.author}</div> <a href="javascript:" onclick="load_swf(\'yinyuetai\',{bid},{i},\'{m.title}\',\'{m.pid}\')"> <div class="video_play"></div><img src="index.php?c=blog&a=getyytimg&src={m.img}" /> </a> </div> </div> <div style="display:none" id="swf_play_{bid}_{i}"></div> {/if} {/each} {/if} {if body} <div class="text_area"> <p>{body}</p> </div> {/if} </div>');
template('tmpl_model_3', '<div id="feedText_{bid}" class="content"> <div class="text_area_all"> {if attr.count ==1} <div id="imagelist_1_a" class="imagelist wSet"> <div class="img_top"> <li> <a href="javascript:void(0)"><img degree="0" src="{attr.img[0].url}" title="{attr.img[0].desc}" /></a> </li> </div> </div> {/if} {if attr.count == 2} <div id="imagelist_2_a" class="imagelist wSet"> <div class="img_two"> {each attr.img as img i} {if i < 2} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> </div> {/if} {if attr.count == 3} <div id="imagelist_3_a" class="imagelist wSet"> <div class="img_top"><li><a href="javascript:void(0)"><img degree="0" src="{attr.img[0].url}" title="{attr.img[0].desc}" /></a></li></div> <div class="img_two"> {each attr.img as img i} {if i > 0} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> </div> {/if} {if attr.count == 4} <div id="imagelist_4_a" class="imagelist wSet"> <div class="img_top"><li><a href="javascript:void(0)"><img degree="0" src="{attr.img[0].url}" title="{attr.img[0].desc}" /></a></li></div> <div class="img_three"> {each attr.img as img i} {if i >= 1} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> </div> {/if} {if attr.count == 5} <div id="imagelist_5_a" class="imagelist wSet"> <div class="img_two"> {each attr.img as img i} {if i >= 0 && i < 2} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_three"> {each attr.img as img i} {if i >=2 && i < 5} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> </div> {/if} {if attr.count == 6} <div id="imagelist_6_a" class="imagelist wSet"> <div class="img_three"> {each attr.img as img i} {if i >= 0 && i < 3} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_two"> {each attr.img as img i} {if i >=3 && i <= 4} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_top"><li><a href="javascript:void(0)"><img degree="0" src="{attr.img[5].url}" title="{attr.img[5].desc}" /></a></li></div> </div> {/if} {if attr.count == 7} <div id="imagelist_7_a" class="imagelist wSet"> <div class="img_top"><li><a href="javascript:void(0)"><img degree="0" src="{attr.img[0].url}" title="{attr.img[0].desc}" /></a></li></div> <div class="img_three"> {each attr.img as img i} {if i >= 1 && i <= 3} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_three"> {each attr.img as img i} {if i >=4 && i < 7} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> </div> {/if} {if attr.count == 8} <div id="imagelist_8_a" class="imagelist wSet"> <div class="img_two"> {each attr.img as img i} {if i >= 0 && i < 2} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_three"> {each attr.img as img i} {if i >=2 && i < 8} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> </div> {/if} {if attr.count ==9} <div id="imagelist_9_a" class="imagelist wSet"> <div class="img_three"> {each attr.img as img i} {if i >= 0 && i < 3} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_two"> {each attr.img as img i} {if i >=3 && i < 5} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_three"> {each attr.img as img i} {if i >= 5 && i < 8} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_top"><li><a href="javascript:void(0)"><img degree="0" src="{attr.img[8].url}" title="{attr.img[8].desc}" /></a></li></div> </div> {/if} {if attr.count >=10} <div id="imagelist_9_a" class="imagelist wSet"> <div class="img_two"> {each attr.img as img i} {if i >=0 && i < 2} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_three"> {each attr.img as img i} {if i >= 2 && i < 5} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_two"> {each attr.img as img i} {if i >=5 && i < 7} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> <div class="img_three"> {each attr.img as img i} {if i >= 7 && i < 10} <li><a href="javascript:void(0)"><img degree="0" src="{img.url}" title="{img.desc}" /></a></li> {/if} {/each} </div> </div> {/if}	{if body} 	<div class="text_area">	<p>{body}</p></div>	{/if} </div> </div>');
template('tmpl_model_4', '<div id="feedText_{bid}" class="content"> {if attr.length>0} {each attr as v i} <div class="video w240" id="swf_cover_{bid}_{i}"> <div class="video_bg"> <div class="video_title">{v.title}</div> <a href="javascript:;" onclick="load_swf(\'yinyuetai\',{bid},{i},\'{v.title}\',\'{v.pid}\')"> <div class="video_play"></div> {if v.type == \'yinyuetai\'} <img src="index.php?c=blog&a=getyytimg&src={v.img}" /> {else} <img src="{v.img}" /> {/if} </a> </div> </div> <div style="display:none;" id="swf_play_{bid}_{i}"></div> {/each} {/if} <div class="text_area"> {if body}<p>{body}</p>{/if} </div> </div>');
template('tmpl_model_6', '<div id="feedText_{bid}" class="content"> {if attr.length>0} {each attr as v i} <div class="movie"> <div class="mov_img"> <div class="score">{v.average}</div> <div class="mov_yy"></div> <a href="{b_url}" target="_blank"><img src="{v.img}" /></a> {if v.movie} <div class="mov_play"><a href="{v.movie}" target="_blank">\u64ad\u653e\u9884\u544a\u7247</a></div> {/if} </div> <div class="mov_info"> <li class="mov_title">\u7535\u5f71\u540d\u79f0:<font>{v.title}</font></li> <li>\u5bfc\u6f14:<font>{v.directe}</font></li> <li>\u4e3b\u6f14:<font>{each v.starring as g i}<b>{g}</b>{/each}</font></li> <li>\u7c7b\u578b:<font>{each v.genre as g i}<b>{g}</b>{/each}</font></li> <li>\u4e0a\u6620\u65e5\u671f:<font>{v.initialReleaseDate}</font></li> <li>\u65f6\u957f:<font>{v.runtime}</font></li> </div> <div class="clear"></div> </div> {/each} {/if} <div class="text_area"> {if body}<p>{body}</p>{/if} </div> </div>');
template('tmpl_model_footer', '<div class="footer"> {if more == 1} <div class="more"><a href="{b_url}">\u672a\u5b8c,\u7ee7\u7eed\u9605\u8bfb\u2192</a></div> {/if} {if tag.length >0} <div class="tag"> {each tag as t i} <a href="index.php?c=blog&a=tag&tag={t}">#{t}</a> {/each} </div> {/if} <div class="fun"> {if uid == myuid()} <span class="delete"><a href="javascript:void(0)" onclick="delblogs({bid})" title="\u5220\u9664"></a></span> {/if} {if uid == myuid() && repto == null} <span class="edit"><a href="index.php?c=post&a=edit&id={bid}&model={type}" title="\u7f16\u8f91"></a></span> {/if} {if uid != myuid()} <span class="reblog"><a href="javascript:void(0)" onclick="repblog({bid})" title="\u8f6c\u8f7d"></a></span> {/if} <span class="reply"> <a href="javascript:void(0)" onclick="indexPostTab(\'comment\',{bid})" id="comment_btn_{bid}" title="\u56de\u590d"> {if replaycount > 0} <em>{replaycount}</em>{/if} </a> </span> {if feedcount > 0} <span class="hotnum"> <a href="javascript:void(0)" onclick="indexPostTab(\'feeds\',{bid})" title="\u70ed\u5ea6" id="hid_btn_{bid}"> {if feedcount > 0} <em>{feedcount}</em>{/if} </a> </span> {/if} {if uid != myuid()} {if likeid == null} <span class="nolike" id=like_{bid}"> {else} <span class="like" id=like_{bid}"> {/if} <a href="javascript:void(0)" likeid="{bid}" class="dolike" title="\u559c\u6b22"></a> </span> {/if} </div> </div> <div class="clear"></div> <form class="autoTxtCount" action="" method="get" onsubmit="return false;"> <div id="comment_{bid}" style="display:none"> <div class="reply_list"> <div class="reply_btn"> <button type="submit" class="btn" onclick="sendReplay({bid});">\u53d1\u5e03</button> </div> <div class="reply_input"> <div class="limit_text" ><span class="tips">140</span></div> <textarea id="replyInput_{bid}"></textarea> <input type="hidden" id="replyTo_{bid}" /> </div> <div class="clear"></div> <div id="commentLoading_{bid}" class="s_loading"></div> <div class="reply_comment"> <div class="clear"></div> </div> </div> <div id="comment_paging_{bid}" class="paging"></div> </div> </form> <div id="feeds_{bid}" class="none"> <div class="reply_list"> <div id="hit_loading_{bid}" class="sf_loading"></div> </div> <div id="feeds_paging_{bid}" class="paging"></div> </div>');
template('tmpl_info_footer', '<div class="footer"> {if tag.length >0} <div class="tag"> {each tag as t i} <a href="index.php?c=blog&a=tag&tag={t}">#{t}</a> {/each} </div> {/if} <div class="fun"> {if uid == myuid()} <span class="delete"><a href="javascript:void(0)" onclick="delblogs({bid})" title="\u5220\u9664"></a></span> {/if} {if uid == myuid() && repto == null} <span class="edit"><a href="index.php?c=post&a=edit&id={bid}&model={type}" title="\u7f16\u8f91"></a></span> {/if} {if uid != myuid()} <span class="reblog"><a href="javascript:void(0)" onclick="repblog({bid})" title="\u8f6c\u8f7d"></a></span> {/if} {if uid != myuid()} {if likeid == null} <span class="nolike" id=like_{bid}"> {else} <span class="like" id=like_{bid}"> {/if} <a href="javascript:void(0)" likeid="{bid}" class="dolike" title="\u559c\u6b22"></a> </span> {/if} </div> </div> <div class="clear"></div> <div id="feeds_{bid}" class="none"> <div class="reply_list"> <div id="hit_loading_{bid}" class="sf_loading"></div> </div> <div id="feeds_paging_{bid}" class="paging"></div> </div>');
template('tmpl_model_info_reply', '<form class="autoTxtCount" action="" method="get" onsubmit="return false;"> <div id="comment_{bid}"> <div class="reply_list"> <div class="reply_btn"> <button type="submit" class="btn" onclick="sendReplay({bid});">\u53d1\u5e03</button> </div> <div class="reply_input"> <div class="limit_text" ><span class="tips">140</span></div> <textarea id="replyInput_{bid}"></textarea> <input type="hidden" id="replyTo_{bid}" /> </div> <div class="clear"></div> <div id="commentLoading_{bid}" class="s_loading"></div> <div class="reply_comment"> <div class="clear"></div> </div> </div> <div id="comment_paging_{bid}" class="paging"></div> </div> </form>');
template('tmpl_reply', '{each body as d i} <div id="commentList_{d.id}" class="commentList"> <div class="reply_fun"> <li class="fun_del_{d.del_flag}"><a href="javascript:;" onclick="delrep({d.id})"><span></span></a></li> <li class="fun_rpy_{d.rep_flag}"><a href="javascript:;" onclick="replyto({d.bid},\'{d.user.username}\',{d.uid})"><span></span></a></li> </div> <div class="reply_avatar"> <a target="_blank" href="{d.h_url}"><img title="{d.user.username}" alt="{d.user.username}" src="{d.h_img}"></a> </div> <div class="reply_content"> <a target="_blank" href="{d.h_url}">{d.user.username}</a>{d.msg}<span>({d.time})</span> </div> <div class="clear"></div> </div> {/each}');
