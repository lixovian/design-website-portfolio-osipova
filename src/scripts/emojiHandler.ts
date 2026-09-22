import emojis from '../assets/emojis/emoji.json'

export type EmojiId = keyof typeof emojis

export function emojiHandler(id: EmojiId): string {
    return emojis[id].content
}
