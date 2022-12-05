import { Match, mergeProps, Switch } from 'solid-js'
import { AvatarProps } from './types'
import AvatarBauhaus from './AvatarBauhaus'
import AvatarBeam from './AvatarBeam'
import AvatarMarble from './AvatarMarble'
import AvatarPixel from './AvatarPixel'
import AvatarRing from './AvatarRing'
import AvatarSunset from './AvatarSunset'


const Avatar = (props: AvatarProps) => {
    const opts = mergeProps({
        variant: 'marble',
        colors: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
        name: 'Clara Barton',
        square: false,
        title: false,
        size: 40,
    }, props);

    return (
        <Switch>
            <Match when={opts.variant === "pixel"}>
                <AvatarPixel {...opts} />
            </Match>

            <Match when={opts.variant === "marble"}>
                <AvatarMarble {...opts} />
            </Match>

            <Match when={opts.variant === "bauhaus"}>
                <AvatarBauhaus {...opts} />
            </Match>

            <Match when={opts.variant === "beam"}>
                <AvatarBeam {...opts} />
            </Match>

            <Match when={opts.variant === "ring"}>
                <AvatarRing {...opts} />
            </Match>

            <Match when={opts.variant === "sunset"}>
                <AvatarSunset {...opts} />
            </Match>
        </Switch>
    )
    // switch (opts.variant) {
    //     case "pixel":
    //         return <AvatarPixel {...opts} />

    //     case "marble":
    //         return <AvatarMarble {...opts} />
    //     default:
    //         break;
    // }
}

export default Avatar;