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
import { cn } from "@/lib/utils";
import {
  dark_glassmorphism,
} from "./layout/header/constants";

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
                autoplay={true}
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
            <MediaControlBar className={cn(dark_glassmorphism, "")} style={{ width: "100%" }} id="broadcast_controls">
                <MediaPlayButton className="bg-transparent" />
                <MediaMuteButton className="bg-transparent" />
                <MediaVolumeRange className="bg-transparent" />
                {/* <MediaTimeRange aria-disabled className="bg-transparent" /> */}
                {/* <MediaTimeDisplay className="bg-transparent ml-auto" /> */}
                <MediaLiveButton className="bg-transparent ml-auto" />
                <MediaFullscreenButton className="bg-transparent" />
            </MediaControlBar>
        </MediaController>
    );
}
