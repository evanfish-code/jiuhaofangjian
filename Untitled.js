var storyContent = {"inkVersion":21,"root":[["^“你醒了。”","\n",["ev",{"^->":"0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^……",{"->":"$r","var":true},null]}],["ev",{"^->":"0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^这是哪里？",{"->":"$r","var":true},null]}],["ev",{"^->":"0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-2","flg":18},{"s":["^你是谁？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.2.s"},[{"#n":"$r2"}],"\n",{"->":"nihaihaoma"},{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.3.s"},[{"#n":"$r2"}],"\n",{"->":"nalima"},{"->":"0.g-0"},{"#f":5}],"c-2":["ev",{"^->":"0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":"0.4.s"},[{"#n":"$r2"}],"\n",{"->":"nishishui"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"nishishui":[["^“哈？”","\n","^似乎是没料想到会被这样问，对方的语气有点震惊。空气中迎来一阵沉默，接着传来一声很轻的，有点无奈的笑，“你是认真还是在隐喻……你想我回答你什么？”","\n",["ev",{"^->":"nishishui.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^眼前赫然出现一张脸。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"nishishui.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"mianqianderen"},{"#f":5}]}],{"#f":1}],"nalima":[["^“哪里吗？我也不知道。”","\n","^对方的声音听起来有些丧气。等等。这声音好熟悉——虽然头很痛，眼睛也太不清楚，但是这声音曾经千百次地听过。","\n","^冷静，耐下心，可以想起来的。","\n",["ev",{"^->":"nalima.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^眼前赫然出现一张脸。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"nalima.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"mianqianderen"},{"#f":5}]}],{"#f":1}],"nihaihaoma":[["^“你还好吗？”","\n","^等等——好熟悉的声音。虽然脑袋疼得要炸掉了，但直觉不会错。这家伙绝对是熟人。那是谁呢？","\n",["ev",{"^->":"nihaihaoma.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^眼前赫然出现一张脸。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"nihaihaoma.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"mianqianderen"},{"#f":5}]}],{"#f":1}],"mianqianderen":[["^面前的人比想象中要高，但对方蹲下来，接下来视线从仰角变为水平。头发是黑色的，此刻不知为何有些凌乱。身上穿着件T恤，露出白皙的手臂来。他正歪着头作出端详的姿态，眼神里有洞寻、有试探，当然，好像还有更多的关心。","\n","^“你看起来好茫然噢。”那家伙的语气听不出轻重，“你还记得自己是谁吗？”","\n",["ev",{"^->":"mianqianderen.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^废话，当然记得。",{"->":"$r","var":true},null]}],["ev",{"^->":"mianqianderen.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^…… ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"mianqianderen.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"feihua"},"\n",{"#f":5}],"c-1":["ev",{"^->":"mianqianderen.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"chensi"},{"#f":5}]}],{"#f":1}],"chensi":[["^贫嘴不是目前来看最要紧的事。此刻最该做的是快把一切想起来。","\n","^眼前出现了一些破碎的片段……走马灯一般一幕幕开始在眼前闪现。就目前来说，什么是最重要的呢？","\n",["ev",{"^->":"chensi.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^一张考卷",{"->":"$r","var":true},null]}],["ev",{"^->":"chensi.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^一把吉他",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chensi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"kaojuan"},{"#f":5}],"c-1":["ev",{"^->":"chensi.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"jita"},{"#f":5}]}],{"#f":1}],"kaojuan":[["^眼前出现了一张试卷。非常漂亮的成绩，是数学满分。字写得也很漂亮，虽然看着稚嫩了点，猜想是来自于久远的学生时代。","\n","^旁边还躺着一张5分的试卷。虽然上面没几个对的答案，但字倒是也写得端正，看起来和满分的不像出自一个人之手——不过想也是，怎么可能是一个人呢？","\n","^“说好帮我补习咧？”","\n","^这时回忆的镜头偏转，紧挨着5分试卷的地方，出现了一张皱巴巴的脸。那家伙伸了伸拦腰打了个哈欠，语气有种大言不惭的美：“看来你教学的水平也不怎么样嘛。以后快别吹牛了，把早饭还我。”","\n","^这欠打的家伙看起来好眼熟——对了。他和眼前这人看起来几乎没什么差别。","\n",["ev",{"^->":"kaojuan.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^我好像想起自己是谁了。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"kaojuan.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"wohaoxiang"},{"#f":5}]}],{"#f":1}],"jita":[["^眼前出现了一把吉他。这是一把很漂亮的吉他，虽然上面有不少划痕，但看起来是被精心保养过的，琴头还闪闪发亮。再旁边有谱架，以及一些散乱的纸稿———画过一些符号，还有些随手记下的像是会议纪要的东西。","\n","^啊，对了。似乎是这样的。自己好像在玩乐队。","\n","^既然说到乐队，那么他一定是有伙伴的吧——这么想的话，眼前这家伙的面貌忽然清晰起来。","\n",["ev",{"^->":"jita.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^我好像想起自己是谁了。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"jita.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"wohaoxiang"},{"#f":5}]}],{"#f":1}],"feihua":[["^这算是什么问题？想不起来自己也太逊了。再仔细想想看。","\n","^面前的人太熟悉了……他看起来很亲近。对他有好多好多印象，如同海面上漂浮的，破碎的底片，一帧一帧涌动着，只是很模糊，要试图抓住才看得清具体。","\n",["ev",{"^->":"feihua.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^一张合影",{"->":"$r","var":true},null]}],["ev",{"^->":"feihua.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^一段像是昨天的回忆",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"feihua.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"heying"},{"#f":5}],"c-1":["ev",{"^->":"feihua.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"huiyi"},{"#f":5}]}],{"#f":1}],"heying":[["^看到了一张合影。照片看起来很旧了，有点泛黄，似乎并不属于手机时代，照片右下方有一串数字，大概是合影拍摄的日期。它来自于2005年12月6日。","\n","^那上面的两个人看起来很年轻，笑容也很灿烂。他们贴得很近，稍高一点的人看起来好像有些醉了，看着镜头的眼神泛着水光，有些飘忽，样子看起来傻傻的。他似乎并不擅长喝酒。","\n","^而旁边的人手里端着酒杯，眼睛并没有看向镜头的方向，反倒专注地看着醉醺醺的傻家伙。照片背后不知道被谁悄悄写下了“30”这个数字。","\n","^那个高高的人的脸，似乎是眼前这人的年轻版。那么旁边的人就是——","\n",["ev",{"^->":"heying.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^我好像想起自己是谁了。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"heying.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"wohaoxiang"},{"#f":5}]}],{"#f":1}],"huiyi":[["^这是一段昨天的回忆。环境转换到昨夜的录音室——似乎这个地方叫大鸡腿。面前的这个家伙又出现在昨晚的回忆中，大概是深夜，所以录音室中没有看到除了他之外的人。他没有讲话，正低头摆弄着电脑，这时你的手机传来一阵响动，他循声探过头来。","\n","^“要回家了吗？”几秒后他忽然这样问。","\n","^“是。”你听到自己回答。","\n","^“噢……”他转了转椅子，把头望向你，看了你一会之后笑了一下，说：“那，晚安。”","\n","^你走到门口准备收拾东西离开时突然听到一阵风声从上面传过来，似乎把房门吹开了。面前的家伙的脚步声此时响在稍远处的身后，他问“你明天会来吗？”，你一边上楼一边思考着回答，突然眼前一片漆黑，接着就失去了所有意识。","\n","^这么说的话，再醒来的时候好像就是在这里了。","\n",["ev",{"^->":"huiyi.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^我好像想起自己是谁了。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"huiyi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"wohaoxiang"},{"#f":5}]}],{"#f":1}],"wohaoxiang":[["^是这样吗？你确定吗？","\n","^那你是谁？","\n",["ev",{"^->":"wohaoxiang.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^我叫温尚翊。",{"->":"$r","var":true},null]}],["ev",{"^->":"wohaoxiang.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^我叫陈信宏。",{"->":"$r","var":true},null]}],["ev",{"^->":"wohaoxiang.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^我可能叫石锦航。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wohaoxiang.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"wenshangyi"},{"#f":5}],"c-1":["ev",{"^->":"wohaoxiang.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"chenxinhong"},{"#f":5}],"c-2":["ev",{"^->":"wohaoxiang.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"shijinhang"},{"#f":5}]}],{"#f":1}],"wenshangyi":[["^“那就好，我还以为你摔傻了。”陈信宏伸出手，把温尚翊从地上拉起来。“休息够了就赶紧来看看吧，我们好像被人关到什么地方了。”","\n",["ev",{"^->":"wenshangyi.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^环顾房间",{"->":"$r","var":true},null]}],["ev",{"^->":"wenshangyi.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^检查桌面",{"->":"$r","var":true},null]}],["ev",{"^->":"wenshangyi.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^嘘寒问暖",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wenshangyi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"huangufangjian"},{"#f":5}],"c-1":["ev",{"^->":"wenshangyi.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"jianchazhuomian"},{"#f":5}],"c-2":["ev",{"^->":"wenshangyi.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"xvhanwennuan"},{"#f":5}]}],{"#f":1}],"chenxinhong":[["^“……靠杯，惨了。”他一把把你从地上拉起来，捏着你的肩膀开始疯狂摇晃：“你是陈信宏那我是谁？我是谁？你清醒一下——！再想想看，你叫温尚翊，温——尚——翊！”","\n","^你被晃得魂不附体，但交错间似乎更多回忆涌回了脑海。是的，对面这家伙才是如假包换得陈信宏，而你叫温尚翊。你们……","\n","^“想起来了吗？”他打断了你的思绪。你——温尚翊——忙点点头，陈信宏终于长舒了一口气。“好险没有真的摔坏。休息够了就一起来看吧，我们好像被人关到什么地方了。”","\n",["ev",{"^->":"chenxinhong.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^环顾房间",{"->":"$r","var":true},null]}],["ev",{"^->":"chenxinhong.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^检查桌面",{"->":"$r","var":true},null]}],["ev",{"^->":"chenxinhong.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^嘘寒问暖",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chenxinhong.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"huangufangjian"},{"#f":5}],"c-1":["ev",{"^->":"chenxinhong.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"jianchazhuomian"},{"#f":5}],"c-2":["ev",{"^->":"chenxinhong.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"xvhanwennuan"},{"#f":5}]}],{"#f":1}],"shijinhang":[["^“……”对方的眉毛抖动，表情很无语：“好烂。别开玩笑了，快起来。”他把你——你真的不知道自己是谁吗，温尚翊？——从地上拉起来，“玩笑开够了就赶快来看一下，我们好像被人关到什么地方了。”","\n",["ev",{"^->":"shijinhang.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^环顾房间",{"->":"$r","var":true},null]}],["ev",{"^->":"shijinhang.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^检查桌面",{"->":"$r","var":true},null]}],["ev",{"^->":"shijinhang.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^嘘寒问暖",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"shijinhang.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"huangufangjian"},{"#f":5}],"c-1":["ev",{"^->":"shijinhang.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"jianchazhuomian"},{"#f":5}],"c-2":["ev",{"^->":"shijinhang.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"xvhanwennuan"},{"#f":5}]}],{"#f":1}],"huangufangjian":[["^这个房间陌生又熟悉。房间很狭小昏暗，只有角落的那把蓝色的椅子正上方有一盏小小的吊灯，它垂下来，发出黯淡的黄色光芒，把那盏椅子蒙蒙笼罩着，像场驱不散的阴影。另外值得注意的便是光秃秃的墙上悬挂着的一块液晶屏幕，只不过它目前黑漆漆的什么都没有。","\n","^“我醒来之后我们就都在这里了。门打不开，叫也没人回应。”","\n","^陈信宏的语气不似刚刚轻松，“我觉得是一场有预谋的绑架。你怎么看？”","\n",["ev",{"^->":"huangufangjian.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^我也觉得，你还记得什么被打晕之前的事吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"huangufangjian.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"dayun"},{"#f":5}]}],{"#f":1}],"jianchazhuomian":[["^桌上散落着很多揉皱的纸团，温尚翊走近打开，发现上面全是一些看不懂的符号，有些像画，有些又像没写完的字。另外桌上还摆着很多他们的专辑，从普通的CD唱片到黑胶应有尽有，专辑旁边还有一些他们的照片。","\n","^他们被绑架大概不是偶然。","\n",["ev",{"^->":"jianchazhuomian.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^你还记得什么被打晕之前的事吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"jianchazhuomian.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"dayun"},{"#f":5}]}],{"#f":1}],"xvhanwennuan":[["^“你没事吧？”","\n","^陈信宏摇摇头，“没事。我比你早醒来一些，然后就检查了房间。门是锁的，桌上有些我们的专辑，关我们的人我想大概是故意的。但我并没有找到摄像头，试图喊话也没有任何人回应。不知道对方到底是什么目的。”","\n",["ev",{"^->":"xvhanwennuan.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^你没事就好。还记得什么被打晕之前的事吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"xvhanwennuan.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"dayun"},{"#f":5}]}],{"#f":1}],"dayun":[["^“没什么印象了。”陈信宏皱眉深思，“昨晚你要离开大鸡腿的时候，我跟你讲话你没应，然后我就听到你倒地的声音。我上楼去看，发现你倒在门口，门是开着的，没有人。然后我走过去看你的状况，下一秒就也被打昏了，大概对方没有走，只是在门口等着。再之后我就醒过来，发现自己在这里了。”","\n","^温尚翊正想回答，身后却突然传来“滴答”的声响。他转过头去看，那块挂在墙上原本漆黑的屏幕突然自动打开了，十几秒后上方浮现出几行字：","\n","^“九号房间：","\n","^人物：A.陈信宏 B：温尚翊","\n","^目的：逃出房间","\n","^任务：","\n","^1.A和B接吻","\n","^2.A在B身上划出长度不小于5cm的伤口”","\n","^“……什么东西？”陈信宏睁大眼睛：“……漫画里的九号房间？”","\n",["ev",{"^->":"dayun.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^那是什么？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"dayun.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],"\n",{"->":"nashishenme"},{"#f":5}]}],{"#f":1}],"nashishenme":[["^“呃……”陈信宏吞吞吐吐地试图解释：“我有刷到过这样题材的作品。就是两个人会被关进某种规则限制的房间中，如果想要出去就要完成两个任务其中之一。一般第二种都是无法完成的，比如互相残杀的这种任务，用这样的方式来逼迫房间中的两个人互相亲近，然后……”","\n",["ev",{"^->":"nashishenme.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^然后？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"nashishenme.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"ranhou"},{"#f":5}]}],{"#f":1}],"ranhou":["^“……增进感情。”","\n","^说出这四个字的时候陈信宏刻意回避了温尚翊的目光。他重新投入到对屏幕上文字的研究中，像是试图参透什么：“所以这个背后的人其实是想我们完成第一条。也就是……接吻。”","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};