import * as React from "react";
import shaka from "shaka-player";

interface IVideoPlaybackConfigProps {
  url: string;
}

export class VideoPlayback extends React.Component<
  IVideoPlaybackConfigProps,
  any
> {
  private player: shaka.Player = null;

  componentDidMount() {
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();
    this.initPlayer();
  }

  render() {
    return (
      <div>
        <h2>Player</h2>
        <video
          ref="video"
          width="640"
          poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
          controls
          autoPlay
        />
      </div>
    );
  }

  initPlayer() {
    this.player = new shaka.Player(this.refs.video);

    this.player
      .load("https://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd")
      .then(function() {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded! ");
      })
      .catch(this.onError);

    // Listen for error events.
    this.player.addEventListener("error", this.onErrorEvent);
  }

  onErrorEvent(event: any) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }

  onError(error: any) {
    // Log the error.
    console.error("Error code", error.code, "object", error);
  }
}
