      function plus1(w){
		    var  initial=document.getElementById("initial1").value;//获取输入框内的字符串
		    var  a=parseFloat(initial);//将获取的字符串转换为数字
		    	a++;
		        document.getElementById("initial1").value=a;//输出单击事件结果
		        var unitprice=document.getElementById("unitprice1").innerHTML//获取单价
		        if(!isNaN(unitprice)){//判断单价是否合法
		                var b=parseFloat(unitprice);//转换为数字
		                document.getElementById("resule1").innerHTML=(a*b).toFixed(2);//结果输出到小计
		        }
		        //通过按钮找到选择标签
		        var bb=w.parentNode.previousSibling.previousSibling.previousSibling.childNodes[0];
		        var checked=bb.checked;//判断标签是否被中
		        var money=document.getElementById("money").innerHTML//获取总价
		        var amount=document.getElementById("amount").innerHTML//获取商品总数
		        if(checked){
	    		document.getElementById("money").innerHTML=(parseFloat(money)+parseFloat(unitprice)).toFixed(2);//总价
	    		document.getElementById("amount").innerHTML=(parseInt(amount)+1);//数量
	    	}
		}
	    function subtract1(w){
		    var  initial=document.getElementById("initial1").value;//获取输入框内的字符串
		    var  a=parseFloat(initial);//将获取的字符串转换为数字
		    var  m=a-1;
		    if(a>1){
		    	    a--;
		    	    document.getElementById("initial1").value=a;//输出单击事件结果
		            var unitprice=document.getElementById("unitprice1").innerHTML//获取单价
		            if(!isNaN(unitprice)){//判断单价是否合法
		                    var b=parseFloat(unitprice);//转换为数字
		                    document.getElementById("resule1").innerHTML=(a*b).toFixed(2);//输出结果
		                   }
		    }else{
		            alert("数量最低为1");
		            document.getElementById("initial1").value=1;//更改输入框内容
		    }
		    //通过按钮找到选择标签
		        var bb=w.parentNode.previousSibling.previousSibling.previousSibling.childNodes[0];
		        var checked=bb.checked;//判断标签是否被中
		        var money=document.getElementById("money").innerHTML//获取总价
		        var amount=document.getElementById("amount").innerHTML//获取总数
		        if(checked){
		        	if(a>1){
		        		document.getElementById("money").innerHTML=(parseFloat(money)-parseFloat(unitprice)).toFixed(2);//总价
		        		document.getElementById("amount").innerHTML=(parseInt(amount)-1);//数量
		        	}
		        	if(m==1){
		        		document.getElementById("money").innerHTML=(parseFloat(money)-parseFloat(unitprice)).toFixed(2);//总价
		        		document.getElementById("amount").innerHTML=(parseInt(amount)-1);//数量
		        	}
	    	}
		    
		}
	    function import1(w){
	    	var initial=document.getElementById("initial1").value;//获取输入的内容
	    	if(isNaN(initial)){
	    		alert("输入的数量不合法")
	    		a=document.getElementById("initial1").value=1;
	    	}else{
	    		var a=parseFloat(initial);//把获取的字符串转换成数字
	    		if (a<1) {
	    			alert("输入的数量不合法")
	    		    a=document.getElementById("initial1").value=1;
	    		}
	    	}
	    	var unitprice=document.getElementById("unitprice1").innerHTML//获取单价
	    	if(!isNaN(unitprice)){//判断单价是否合法
		            var b=parseFloat(unitprice);//转换为数字
		            document.getElementById("resule1").innerHTML=(a*b).toFixed(2);//输出结果
		           }
	    }
		function plus2(w){
		    var  initial=document.getElementById("initial2").value;//获取输入框内的字符串
		    var  a=parseInt(initial);//将获取的字符串转换为数字
		    	a++;
		        document.getElementById("initial2").value=a;//输出单击事件结果
		        var unitprice=document.getElementById("unitprice2").innerHTML//获取单价
		        if(!isNaN(unitprice)){//判断单价是否合法
		                var b=parseInt(unitprice);//转换为数字
		                document.getElementById("resule2").innerHTML=(a*b).toFixed(2);//输出结果
		        }
		        //通过按钮找到选择标签
		        var bb=w.parentNode.previousSibling.previousSibling.previousSibling.childNodes[0];
		        var checked=bb.checked;//判断标签是否被中
		        var money=document.getElementById("money").innerHTML//获取总价
		        var amount=document.getElementById("amount").innerHTML//获取商品总数
		        if(checked){
	    		document.getElementById("money").innerHTML=(parseFloat(money)+parseFloat(unitprice)).toFixed(2);//总价
	    		document.getElementById("amount").innerHTML=(parseInt(amount)+1);//数量
	    	}
		}
	    function subtract2(w){
		    var  initial=document.getElementById("initial2").value;//获取输入框内的字符串
		    var  a=parseInt(initial);//将获取的字符串转换为数字
		    var  m=a-1;
		    if(a>1){
		    	    a--;
		    	    document.getElementById("initial2").value=a;//输出单击事件结果
		            var unitprice=document.getElementById("unitprice2").innerHTML//获取单价
		            if(!isNaN(unitprice)){//判断单价是否合法
		                    var b=parseInt(unitprice);//转换为数字
		                    document.getElementById("resule2").innerHTML=(a*b).toFixed(2);//输出结果
		                   }
		    }else{
		            alert("数量最低为1");
		            document.getElementById("initial2").value=1;//更改输入框内容
		            }
		    //通过按钮找到选择标签
		        var bb=w.parentNode.previousSibling.previousSibling.previousSibling.childNodes[0];
		        var checked=bb.checked;//判断标签是否被中
		        var money=document.getElementById("money").innerHTML//获取总价
		        var amount=document.getElementById("amount").innerHTML//获取总数
		        if(checked){
		        	if(a>1){
		        		document.getElementById("money").innerHTML=(parseFloat(money)-parseFloat(unitprice)).toFixed(2);//总价
		        		document.getElementById("amount").innerHTML=(parseInt(amount)-1);//数量
		        	}
		        	if(m==1){
		        		document.getElementById("money").innerHTML=(parseFloat(money)-parseFloat(unitprice)).toFixed(2);//总价
		        		document.getElementById("amount").innerHTML=(parseInt(amount)-1);//数量
		        	}
	    	}
		    
		}
	    function import2(w){
	    	var initial=document.getElementById("initial2").value;//获取输入的内容
	    	if(isNaN(initial)){
	    		alert("输入的数量不合法")
	    		a=document.getElementById("initial2").value=1;
	    	}else{
	    		var a=parseInt(initial);//把获取的字符串转换成数字
	    		if (a<1) {
	    			alert("输入的数量不合法")
	    		    a=document.getElementById("initial2").value=1;
	    		}
	    	}
	    	var unitprice=document.getElementById("unitprice2").innerHTML//获取单价
	    	if(!isNaN(unitprice)){//判断单价是否合法
		            var b=parseInt(unitprice);//转换为数字
		            document.getElementById("resule2").innerHTML=(a*b).toFixed(2);//输出结果
		           }
	    }
	    function plus3(w){
		    var  initial=document.getElementById("initial3").value;//获取输入框内的字符串
		    var  a=parseInt(initial);//将获取的字符串转换为数字
		    	a++;
		        document.getElementById("initial3").value=a;//输出单击事件结果
		        var unitprice=document.getElementById("unitprice3").innerHTML//获取单价
		        if(!isNaN(unitprice)){//判断单价是否合法
		                var b=parseInt(unitprice);//转换为数字
		                document.getElementById("resule3").innerHTML=(a*b).toFixed(2);//输出结果
		        }
		        //通过按钮找到选择标签
		        var bb=w.parentNode.previousSibling.previousSibling.previousSibling.childNodes[0];
		        var checked=bb.checked;//判断标签是否被中
		        var money=document.getElementById("money").innerHTML//获取总价
		        var amount=document.getElementById("amount").innerHTML//获取商品总数
		        if(checked){
	    		document.getElementById("money").innerHTML=(parseFloat(money)+parseFloat(unitprice)).toFixed(2);//总价
	    		document.getElementById("amount").innerHTML=(parseInt(amount)+1);//数量
	    	}
		}
	    function subtract3(w){
		    var  initial=document.getElementById("initial3").value;//获取输入框内的字符串
		    var  a=parseInt(initial);//将获取的字符串转换为数字
		    var  m=a-1;
		    if(a>1){
		    	    a--;
		    	    document.getElementById("initial3").value=a;//输出单击事件结果
		            var unitprice=document.getElementById("unitprice3").innerHTML//获取单价
		            if(!isNaN(unitprice)){//判断单价是否合法
		                    var b=parseInt(unitprice);//转换为数字
		                    document.getElementById("resule3").innerHTML=(a*b).toFixed(2);//输出结果
		                   }
		    }else{
		            alert("数量最低为1");
		            document.getElementById("initial3").value=1;//更改输入框内容
		            }
		    //通过按钮找到选择标签
		        var bb=w.parentNode.previousSibling.previousSibling.previousSibling.childNodes[0];
		        var checked=bb.checked;//判断标签是否被中
		        var money=document.getElementById("money").innerHTML//获取总价
		        var amount=document.getElementById("amount").innerHTML//获取总数
		        if(checked){
		        	if(a>1){
		        		document.getElementById("money").innerHTML=(parseFloat(money)-parseFloat(unitprice)).toFixed(2);//总价
		        		document.getElementById("amount").innerHTML=(parseInt(amount)-1);//数量
		        	}
		        	if(m==1){
		        		document.getElementById("money").innerHTML=(parseFloat(money)-parseFloat(unitprice)).toFixed(2);//总价
		        		document.getElementById("amount").innerHTML=(parseInt(amount)-1);//数量
		        	}
	    	}
		    
		}
	    function import3(w){
	    	var initial=document.getElementById("initial3").value;//获取输入的内容
	    	if(isNaN(initial)){
	    		alert("输入的数量不合法")
	    		a=document.getElementById("initial3").value=1;
	    	}else{
	    		var a=parseInt(initial);//把获取的字符串转换成数字
	    		if (a<1) {
	    			alert("输入的数量不合法")
	    		    a=document.getElementById("initial3").value=1;
	    		}
	    	}
	    	var unitprice=document.getElementById("unitprice3").innerHTML//获取单价
	    	if(!isNaN(unitprice)){//判断单价是否合法
		            var b=parseInt(unitprice);//转换为数字
		            document.getElementById("resule3").innerHTML=(a*b).toFixed(2);//输出结果
		           }
	    }
	    function checkall(w){//选择全选时
	    	var money=0;//价格计算结果
	    	var amount=0;//选择的商品总数
	    	var each=document.getElementsByName("each");//待选择的每一项
	    	var checkl=document.getElementById("check").checked;//全选的状态
	    	for(var a in each){
	    		each[a].checked=checkl;//调整待选项的状态
	    	}
	    	//获取复选框的状态判断是否被选择
	    	if (checkl) {
	    		//获取每个商品的数量和小计
	    		for (var a=0;a<each.length;a++) {
	    			var sum=document.getElementsByName("resule")[a].innerHTML;//获取每一个被选择的商品的小计
	    			var initial=document.getElementsByName("initial")[a].value;//每一个商品的数量
	    			var sums=parseFloat(sum);//把获取的字符串转换成数字
	    			var initials=parseInt(initial);
	    			money=money+sums;//计算总价
	    			amount=amount+initials//计算数量
	    		}
	    		document.getElementById("money").innerHTML=money+"";//输出总价
	    		document.getElementById("amount").innerHTML=amount+"";//输出数量
	    	} else{
	    	    document.getElementById("money").innerHTML="0";//总价归零
	    	    document.getElementById("amount").innerHTML="0";//数量归零
	    	}
	    }
	    function total(a){//单选时计算总价和数量并判断是否全选
	    	var  money=document.getElementById("money").innerHTML;//获取初始总金额
	    	var  amount=document.getElementById("amount").innerHTML;//获取初始商品数量
	    	var  checked=a.checked;//获取当前是否被选择
	    	var each=document.getElementsByName("each");//待选的每一项
	    	var checkl=document.getElementById("check").checked;//全选的状态
	    	//通过关系找小计标签
	    	var  aa=a.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0];
	    	var  aaa=aa.innerHTML;//获取标签内容;
	    	aaa=parseFloat(aaa);//把得到的字符串转换为数字
	    	//通过关系找到数量标签
	    	var  bb=a.parentNode.nextSibling.nextSibling.nextSibling.childNodes[1];
	    	var  bbb=bb.value;//获取数量标签内容
	    	bbb=parseInt(bbb);
	    	if(checked){
	    		document.getElementById("money").innerHTML=(parseFloat(money)+aaa).toFixed(2);//总价
	    		document.getElementById("amount").innerHTML=(parseInt(amount)+bbb);//数量
	    		var u=0;//计算被选中的商品种类数量
	    		for(var a=0;a<each.length;a++){
	    			if(each[a].checked==true){
	    				u++;
	    				if(u==3){
	    					document.getElementById("check").checked=true;//改变全选的状态
	    				}
	    			}
	    		}
	    	}else{
	    		document.getElementById("money").innerHTML=(parseFloat(money)-aaa).toFixed(2);//总价
	    		document.getElementById("amount").innerHTML=(parseInt(amount)-bbb);//数量
	    	    document.getElementById("check").checked=false;//改变全选的状态
	    	}
	    }
