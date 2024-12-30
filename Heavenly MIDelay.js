var NeedsTimingInfo = true; 

/* MS-based MIDI Delay with pitched up notes. */

function HandleMIDI(event)
{

 var daw = GetTimingInfo()

	event.trace();
	event.send();
	if(event instanceof Note)
	{
	event.pitch += GetParameter("Incoming Note Pitch"); 
	event.sendAfterMilliseconds(GetParameter("Delay Amount"))

	
	}
}
//----------------------------------------------------
var PluginParameters = [

{name:"Delay Amount", type:"log", numberOfSteps:100,
minValue:0, maxValue: 2000, unit:"ms", defaultValue:500},

{name:"Incoming Note Pitch", type:"lin", numberOfSteps:16,
minValue:0, maxValue: 24, defaultValue:7},

];
