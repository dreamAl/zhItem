
jQuery.fn.extend({
	checkBind:function($employeeCheckbox,$ubCheckBtn){
		// this; 是全选复选框
		$(this).click(function(){
			$employeeCheckbox.checkAll(this.checked);
		});


		$employeeCheckbox.click(()=>{
			$employeeCheckbox.fanCheck(this);
		});

		if($ubCheckBtn){
			$ubCheckBtn.click(()=>{
				$employeeCheckbox.uncheck();
				$employeeCheckbox.fanCheck(this);
			});	
		}
	},
	checkAll:function(isChecked){   
		this.attr("checked",isChecked);
	},
	uncheck:function(){
		this.each(function(){
			//this:循环过程中的每个DOM对象
			this.checked = !this.checked;
		});
	},
	fanCheck:function($leaderCheck){
		let isAllCheck = true;//假定全部选中
		this.each(function(){
			if(!this.checked){
				isAllCheck = false;
			}
		});
		$leaderCheck.attr("checked",isAllCheck);
	}
}); 