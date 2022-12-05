export type AvatarProps = {
    variant?: "pixel" | "bauhaus" | "ring" | "beam" | "sunset" | "marble";
    name: string;
    title?: string;
    square?: boolean;
    size?: number | string;
    colors: string[];
}
