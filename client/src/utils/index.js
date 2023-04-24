import {surpriseMePrompts} from "../constants";

export function getRandomPrompt(prompt){
    // get the random index 
    const randomIndex=Math.floor(Math.random() *5);
    
    const RandomPrompt= surpriseMePrompts[randomIndex];
    if(randomIndex === prompt) return getRandomPrompt(prompt)
    return RandomPrompt;

}