import { Poem } from '../interfaces'
import { sendMessage, delay } from './'


export async function sendPoem (poem: Poem, sender: number): Promise<boolean> {
  const { lines, title } = poem
  await sendMessage(title, sender)
  while (lines.length) {
    const line = lines[0]
    await sendMessage(line.text, sender)
    await delay(line.duration)
    lines.shift()
  }

  return true
}