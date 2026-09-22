import {emojiHandler, type EmojiId} from "../../scripts/emojiHandler.ts";

export type PageHeaderProps = {
    title: string
    emoji: EmojiId
}

export function Header({title, emoji}: PageHeaderProps) {
    return (
        <header className="flex w-full items-baseline font-normal text-xl">
            <h1 className="m-0 shrink-0 font-normal text-inherit p-0">
                {title}
            </h1>

            <span className="mx-2 min-w-4 flex-1 border-b-2 border-current"/>

            <span className="m-0 p-0">{emojiHandler(emoji)}</span>
        </header>
    );
}
