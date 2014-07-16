
Polymer('beatsme-player', {
  playerData : '',
  playerIndex: 0,
  ready: function() {
    this.data='parent content';
  },
  play: function() {
    debugger;
    var that = this;
    var bam = new BeatsAudioManager("beatsme");

    bam.on("ready", handleReady);
    bam.on("error", handleError);
    function handleReady(value) {
        bam.clientId = that.clientId;
        bam.authentication = {
            access_token:that.accessToken,
            user_id:that.userId
        };
        bam.identifier = that.trackId;
        //bam.load();
    };
    function handleError(value) {
        switch(value){
            case "auth":
            // Beats Music API auth error (401)
            break;
            case "connectionfailure":
            // audio stream connection failure
            break;
            case "apisecurity":
            // Beats Music API crossdomain error
            break;
            case "streamsecurity":
            // audio stream crossdomain error
            break;
            case "streamio":
            // audio stream io error
            break;
            case "apiio":
            // Beats Music API io error getting track data
            break;
            case "flashversion":
            // flash version too low or not installed
            break;
        }
    };
  }
});
