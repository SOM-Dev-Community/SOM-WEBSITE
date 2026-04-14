import type { CSSProperties } from "react";
import HlsVideo from "hls-video-element/react";
import {
    MediaController,
    MediaControlBar,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlayButton,
    MediaMuteButton,
    MediaFullscreenButton,
    MediaLiveButton,
    MediaLoadingIndicator,
    MediaTimeRange,
} from "media-chrome/react";
import BroadcastLoaderIcon from "./broadcast_loader_icon";

const liveSource =
    "https://cdn-out1-los1.ceflixcdn.com/pcdltvapp/pcdltv/chunklist.m3u8";

const controllerStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    aspectRatio: "16 / 9",
    background:
        "radial-gradient(circle at top, rgba(147, 197, 253, 0.28), rgba(15, 23, 42, 0.96) 58%)",
};


export default function BroadcastPlayer() {
    return (
        <MediaController
            style={controllerStyle}
            defaultStreamType="live"
        >
            <HlsVideo
                slot="media"
                src={liveSource}
                preload="auto"
                autoplay
                playsInline
                crossOrigin=""
                defaultMuted
                muted
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
            <MediaLoadingIndicator
                id="broadcast_controls"
                slot="centered-chrome"
                loadingDelay={400}
                noAutohide={true}
            >
                <BroadcastLoaderIcon />
            </MediaLoadingIndicator>
            <MediaControlBar style={{ width: "100%" }} id="broadcast_controls">
                <MediaPlayButton />
                <MediaMuteButton />
                <MediaVolumeRange />
                <MediaTimeRange aria-disabled />
                <MediaTimeDisplay />
                <MediaLiveButton />
                <MediaFullscreenButton />
            </MediaControlBar>
        </MediaController>
    );
}
