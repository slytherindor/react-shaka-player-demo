import * as React from "react";
import ShakaPlayer from "shaka-player-react";

interface IVideoPlaybackConfigProps {
  streamSource: string;
}

export class SPRVideoPlayback extends React.Component<
  IVideoPlaybackConfigProps,
  any
> {
  render() {
    return (
      <ShakaPlayer
        autoPlay
        src="https://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd"
      />
    );
  }
}
