//var NeedsTimingInfo = true; 

/* MS-based MIDI Delay with pitched up notes. */

function HandleMIDI(event)
{

 //var daw = GetTimingInfo()
 var paramExt1 = GetParameter("Incoming Note Pitch")
 var paramExt2 = GetParameter("Delay Amount")

	event.trace();
	event.send();
	if(event instanceof Note)
	{
	event.pitch += paramExt1;
	event.sendAfterMilliseconds(paramExt2);
	//event.trace();

	
	}
}
//----------------------------------------------------
var PluginParameters = [

{name:"Delay Amount", type:"log", numberOfSteps:2000,
minValue:0, maxValue: 2000, unit:"ms", defaultValue:500},

{name:"Incoming Note Pitch", type:"lin", numberOfSteps:16,
minValue:0, maxValue: 24, defaultValue:7},

];

