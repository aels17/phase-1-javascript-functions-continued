function saturdayFun(activity = 'roller-skate') { 
        return `This Saturday, I want to ${activity}!`;
    }
    
saturdayFun ("bathe my dog");

function mondayWork(activity = 'go to the office') { 
    return `This Monday, I will ${activity}.`;
}

mondayWork("work from home");

function wrapAdjective(space) {
const innerFunction = function(talent = "special")  {
    return `You are ${space}${talent}${space}!`
}
return innerFunction;
}

wrapAdjective("%")("a dedicated programmer");
wrapAdjective("*")("a dedicated programmer");
wrapAdjective("||")("a dedicated programmer");