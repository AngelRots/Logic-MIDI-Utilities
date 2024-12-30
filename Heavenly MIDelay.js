// =========================
//        VARIABLES
// =========================

var NeedsTimingInfo = true; 

// =========================
//       DIVISIONS
// =========================

var DIVISIONS = [											
    "1/64t",	
    "1/64",   
    "1/32t", 
    "1/32",  
    "1/16t",   
    "1/16",  
    "1/8T",   
    "1/8",    
    "1/4t",	 
    "1/4",   
    "1/2t",  
    "1/2",   
    "1/1",   
];

// =========================
//         TIMES
// =========================

var TIMES = [ 												 
    0.04166666666667,									
    0.0625,
    0.08333333333333,
    0.125,
    0.16666666666667,
    0.25,
    0.33333333333333,
    0.5,
    0.66666666666667,
    1,
    1.33333333333333,
    2,
    4,
];

// =========================
//      HANDLE MIDI
// =========================

function HandleMIDI(event)
{
    var daw = GetTimingInfo();
   
    event.trace();
    event.send();
    if(event instanceof Note)
    {
        var pitchShift = GetParameter("Incoming Note Pitch");
        var delayAmountIndex = GetParameter("Delay Amount");
        var delayTime;

        if (delayAmountIndex >= 0 && delayAmountIndex < TIMES.length) {
            var quarterNoteDuration = 60000 / daw.tempo; 
            delayTime = quarterNoteDuration * TIMES[delayAmountIndex]; 
        } else {
            delayTime = 0;
        }

        event.pitch += pitchShift;
        event.sendAfterMilliseconds(delayTime);
    }
}

// =========================
//   PLUGIN PARAMETERS
// =========================

var PluginParameters = [
    {
        name: "Delay Amount",
        type: "menu",
        valueStrings: DIVISIONS,
        defaultValue: 5
    },
    {
        name: "Incoming Note Pitch",
        type: "lin",
        numberOfSteps: 16,
        minValue: 0,
        maxValue: 24,
        defaultValue: 7
    }
];
