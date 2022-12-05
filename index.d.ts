import { VoidComponent } from "solid-js";

declare module "boring-avatars-solid" {
  export interface AvatarProps {
    size?: number | string;
    name?: string;
    square?: boolean;
    variant?: "marble" | "beam" | "pixel" | "sunset" | "ring" | "bauhaus";
    colors?: string[];
  }

  interface AvatarComponent {
    (props: AvatarProps, context?: any): VoidComponent | null;
  }

  const Avatar: AvatarComponent

  export default Avatar;
}
