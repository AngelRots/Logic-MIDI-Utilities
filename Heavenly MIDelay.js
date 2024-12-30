var NeedsTimingInfo = true; 

/* MS-based and Tempo-based MIDI Delay with pitched up notes. */

function HandleMIDI(event)
{
    var daw = GetTimingInfo();

    event.trace();
    event.send();
    if(event instanceof Note)
    {
        var pitchShift = GetParameter("Incoming Note Pitch");
        var delayAmount = GetParameter("Delay Amount");
        var bpmDelay = GetParameter("Tempo Based Delay");
        var delayTime;

        if (bpmDelay > 0) {
            var quarterNoteDuration = 60000 / daw.tempo; 
            delayTime = quarterNoteDuration * (bpmDelay / 4); 
        } else {
            delayTime = delayAmount;
        }

        event.pitch += pitchShift;
        event.sendAfterMilliseconds(delayTime);
    }
}
//----------------------------------------------------
var PluginParameters = [
    {name:"Delay Amount", type:"log", numberOfSteps:2000, minValue:0, maxValue: 2000, unit:"ms", defaultValue:500},
    {name:"Incoming Note Pitch", type:"lin", numberOfSteps:16, minValue:0, maxValue: 24, defaultValue:7},
    {name:"Tempo Based Delay", type:"lin", numberOfSteps:16, minValue:0, maxValue: 16, unit:"quarters", defaultValue:0}
];
