import { useId } from "react";

type BroadcastLoaderIconProps = {
    slot?: string;
};

export default function BroadcastLoaderIcon({
    slot = "icon",
}: BroadcastLoaderIconProps) {
    const uniqueId = useId().replace(/:/g, "");
    const ringGradientId = `${uniqueId}-ring-gradient`;
    const coreGradientId = `${uniqueId}-core-gradient`;

    return (
        <svg
            slot={slot}
            viewBox="0 0 120 120"
            width="104"
            height="104"
            aria-hidden="true"
            style={{ overflow: "visible" }}
        >
            <defs>
                <linearGradient
                    id={ringGradientId}
                    x1="18"
                    y1="18"
                    x2="102"
                    y2="102"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" stopColor="#e0f2fe" />
                    <stop offset="55%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <radialGradient
                    id={coreGradientId}
                    cx="50%"
                    cy="40%"
                    r="70%"
                >
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                    <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.92" />
                </radialGradient>
            </defs>

            <circle
                cx="60"
                cy="60"
                r="30"
                fill="none"
                stroke="rgba(255, 255, 255, 0.16)"
                strokeWidth="4"
            />

            <circle
                cx="60"
                cy="60"
                r="30"
                fill="none"
                stroke={`url(#${ringGradientId})`}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="44 188"
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 60 60"
                    to="360 60 60"
                    dur="   "
                    repeatCount="indefinite"
                />
            </circle>

            <circle
                cx="60"
                cy="60"
                r="20"
                fill="none"
                stroke="rgba(191, 219, 254, 0.42)"
                strokeWidth="1.5"
            >
                <animate
                    attributeName="opacity"
                    values="0.15;0.45;0.15"
                    dur="1.6s"
                    repeatCount="indefinite"
                />
            </circle>

            <circle cx="60" cy="60" r="3.5" fill="#ef4444">
                <animate
                    attributeName="r"
                    values="3;4.2;3"
                    dur="1.2s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    );
}
