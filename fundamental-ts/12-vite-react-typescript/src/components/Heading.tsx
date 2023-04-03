import { ReactElement } from "react";

// define type HeadingProps 
type HeadingProps = { title: string }; 

export default function Heading({ title }: HeadingProps): ReactElement {
    return (
        <h1>{title}</h1>
    )
}