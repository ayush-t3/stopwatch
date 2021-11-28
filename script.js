function setTime()
{
	timerDiv.innerText = (parseInt(time / 3600) < 10 ? "0" : "") +
	parseInt(time / 3600) + ":" + (parseInt((time / 60) % 60) < 10 ? "0" : "") +
	parseInt((time / 60) % 60) + ":" + (parseInt((time) % 60) < 10 ? "0" : "") +
	parseInt((time) % 60)
}

function start()
{
	if (!timerOn)
	{
		timerId = setInterval(() =>
		{
			time = time + 0.1;
			setTime();
		}, 100);
		document.getElementById('start').setAttribute('disabled', true);
		document.getElementById('stop').removeAttribute('disabled');
		document.getElementById('pause').removeAttribute('disabled');
		timerOn = true;
	}
}

function stop()
{
	document.getElementById('start').removeAttribute('disabled');
	document.getElementById('pause').setAttribute('disabled', true);
	document.getElementById('pause').innerText = "pause";
	document.getElementById('stop').setAttribute('disabled', true)
	; clearInterval(timerId);
	time = 0;
	setTime();
	timerOn = false;
}

function pause()
{
	if (timerOn)
	{
		clearInterval(timerId);
		timerOn = false;
		document.getElementById('pause').innerText = "continue"
	}
	else
	{
		document.getElementById('pause').innerText = "pause"
		start()
	}
}
let time = 0;
let timerOn = false;
let timerDiv = document.getElementById('time');
document.getElementById('pause').setAttribute('disabled', true);
document.getElementById('stop').setAttribute('disabled', true);
setTime();
let timerId; 
/*var start=document.getElementById('start'); var stp=document.getElementById('stop'); var pause=document.getElementById('pause'); var p=document.getElementById('time'); let time = 0; let timerOn = false; let timerId; setTime(); function setTime() { p.innerText = (parseInt(time/3600)<10?"0":"") + parseInt(time/3600)+":"+(parseInt((time/60)%60)<10?"0":"")+parseInt((time/60)%60)+":"+(parseInt((time)%60)<10?"0":"")+parseInt((time)%60) } function star(){ start.disabled=true; stp.disabled=false; pause.disabled=false; if (!timerOn) { timerId = setInterval(() => { time = time + 0.1; setTime(); }, 100); timerOn=true; } }; pause.addEventListener('click',function(){ if(timerOn){ clearInterval(timerId); pause.innerText='continue'; timerOn=false; } else{ pause.innerText='pause'; star(); } }); stp.addEventListener('click',function(){ clearInterval(timerId); start.disabled=false; stp.disabled=true; pause.disabled=true; time=0; setTime(); timerOn=false; });*/