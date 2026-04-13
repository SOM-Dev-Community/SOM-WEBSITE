import ReactPlayer from "react-player";
import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlaybackRateButton,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
    MediaFullscreenButton,
    MediaLiveButton,
    MediaLoadingIndicator,
} from "media-chrome/react";

const live_source = "https://cdn-out1-los1.ceflixcdn.com/pcdltvapp/pcdltv/chunklist.m3u8  "


export default function BroadcastPlayer() {
    return (
        <MediaController
            style={{
                width: "100%",
                aspectRatio: "16/9",
            }}
        >
            <ReactPlayer
                slot="media"
                src={live_source}
                controls={false}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            ></ReactPlayer>
            <MediaLoadingIndicator
                id="broadcast_controls"
                slot="centered-chrome"
                loadingDelay={1000}
            >
                {/* <svg slot="icon" viewBox="-12 -15 48 60">
                    <path d="M0 0h4v10H0z">
                        <animateTransform
                            attributeType="xml"
                            attributeName="transform"
                            type="translate"
                            values="0 0; 0 20; 0 0"
                            begin="0"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path d="M10 0h4v10h-4z">
                        <animateTransform
                            attributeType="xml"
                            attributeName="transform"
                            type="translate"
                            values="0 0; 0 20; 0 0"
                            begin="0.2s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path d="M20 0h4v10h-4z">
                        <animateTransform
                            attributeType="xml"
                            attributeName="transform"
                            type="translate"
                            values="0 0; 0 20; 0 0"
                            begin="0.4s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg> */}
            </MediaLoadingIndicator>
            <MediaControlBar id="broadcast_controls">
                <MediaPlayButton />
                <MediaTimeRange />
                <MediaTimeDisplay />
                <MediaMuteButton />
                <MediaVolumeRange />
                <MediaLiveButton />
                <MediaFullscreenButton />
            </MediaControlBar>
        </MediaController>
    );
}