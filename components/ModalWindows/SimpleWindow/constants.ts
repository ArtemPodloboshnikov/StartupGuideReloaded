import { FormEvent, ReactNode } from "react";

type Props = {

    readonly color?: string,
    readonly className?: string,
    readonly children?: ReactNode,
    readonly onSubmit: (e?: FormEvent<HTMLFormElement> | undefined)=>void,
    readonly close: boolean,
    readonly setClose: any,
    readonly backMode?: boolean
}

export default Props;