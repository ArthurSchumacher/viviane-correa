interface ITitleProps {
    content: string;
    contentWarning?: string;
    center?: boolean;
    styles?: string;
}

export default function Title({ content, contentWarning, center, styles }: ITitleProps) {
    return (
        <h1 className={`w-full text-neutral-950 text-2xl sm:text-4xl ${styles} pb-12 px-4 ${center ? 'text-center' : null}`}>
            {content} 
            {
                contentWarning ? <span className="text-warning">{contentWarning}</span> : null
            }
        </h1>
    );
}