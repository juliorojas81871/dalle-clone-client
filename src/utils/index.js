import { surpriseMePrompts } from "../constants";

import FileSaver from 'file-saver';

export function getRandomPrompt() {
    const radomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[radomIndex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
} 

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}