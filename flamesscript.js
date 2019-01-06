function flames()
	{

        var x=document.getElementById('x').value;
        var y=document.getElementById("y").value
        z=x+y
	var decision=0;
	for (i=0;i<z.length;i++){
		var ch=z[i];
		var c=0;
		for (j=0;j<z.length;j++){
			if (ch==z[j]){
			c++;
				}
		}
		if(c==1){
		decision++;
		}
	}

		if(decision==3|decision==5|decision==14|decision==16|decision==18)
		{
			output="FRIENDS- You guys will be good FRIENDS for life time And friendship will help you in getting a life partner may you guys will get married";
		}
		else if(decision==8|decision==12|decision==13|decision==17)
		{
			output="AFFECTION- you guys have AFFECTION on each other.Soon these may change into love and then it will never end till your last breath";
		}
		else if(decision==6|decision==15|decision==11)
		{
			output="MARRIAGE- you guys are made for each other.Soon you guys going to get MARRIED soon";
		}
		else if(decision==2|decision==4|decision==7|decision==9|decision==10|decision==20)
		{
			output="ENEMY- you guys will be fighting like an Tom and Jerry.But you both will miss each other in the absence of anyone";
		}
		else if(decision==1|decision==19)
		{
			output="SISTER- you guys will be like brothers and sisters";
		}
		else
		{
			output="Stay positive, May god bless you :)";
		}
	
        document.getElementById("output").innerHTML=String(output);

	}

