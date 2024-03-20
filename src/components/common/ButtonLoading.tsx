import { Button } from "@nextui-org/react";

interface Props {
    content?: string,
    isLoading?: boolean
    colorType?: "default" | "primary" | "secondary" | "success",
    onClickBtn?: () => void,
    radius: "none" | "sm" | "md" | "lg" | "full" | undefined,
    disabled: boolean,
    type?: "button" | "submit" | "reset" | undefined,
    width?: string,
    height?: string,
    px?: string,
    py?: string
}

export default function ButtonLoading({content, isLoading, colorType, onClickBtn, radius, disabled, type, width, height, px, py}: Props) {
    return (
        <Button
            onClick={onClickBtn}
            isLoading={isLoading}
            isDisabled={disabled}
            type={type ? type : 'button'}
            radius={radius}
            color={colorType}
            className={`w-[${width}] h-[${height}] px-[${px}] py-[${py}]`}
            spinner={
                <svg
                    className="animate-spin h-5 w-5 text-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                    />
                </svg>
            }
        >
            {content}
        </Button>
    );
}