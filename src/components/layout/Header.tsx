import {emojiHandler, type EmojiId} from "../../scripts/emojiHandler.ts";

export type PageHeaderProps = {
    title: string
    emoji: EmojiId
}

export function Header({title, emoji}: PageHeaderProps) {
    return (
        <header className="flex w-full items-baseline font-normal text-lg sm:text-xl">
            <h1 className="m-0 shrink-0 font-normal text-inherit p-0">
                {title}
            </h1>

            <span className="mx-1 min-w-4 flex-1 border-b-2 border-current sm:mx-2"/>

            <span className="m-0 shrink-0 select-none whitespace-nowrap p-0">{emojiHandler(emoji)}</span>
        </header>
    );
}
