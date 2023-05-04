$(document).ready(function () {



	var boxCount = 0;

	let pros = document.querySelectorAll(".pro");
	window.addEventListener('scroll', () => {



		const here = window.innerHeight / 5*4;
		pros.forEach((pro,index)=>
		{
			const top = pro.getBoundingClientRect().top;
			if(top < here && !pro.classList.contains("bottomSlide") )
			{

				if(!pro.classList.contains("slideIn"))
				{
					boxCount++;

				}
				pro.classList.add("slideIn");

			}
			else if(pro.classList.contains("bottomSlide") && boxCount > index -1 )
			{
				if(!pro.classList.contains("slideIn"))
				{boxCount++;}
				pro.classList.add("slideIn");


			}
			else
			{
				if(pro.classList.contains("slideIn"))
				{
					boxCount--;
				}
				pro.classList.remove("slideIn")

			}
		})



	});





});


function slideAni()
{

}
function seeMore()
{

	if($('#dropDown').css('display') == 'none')
	{
		const height = window.innerHeight + 0.2 *  window.innerHeight;
		$('#dropDown').css('display' , "block");
		$('#dropDown').animate({'height' : height} , 1500);
	}
	else
	{

		setTimeout(function(){
			$('#dropDown').css('display' , "none");
		}, 1400);
		$('#dropDown').animate({'height' : "0"} , 1500)






	}


}

