import { surpriseMePrompts } from "../constants";

export function getRandomPrompt() {
    const radomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[radomIndex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
} 