
Polymer('beatsme-player', {
<<<<<<< HEAD
=======
  playerData : '',
>>>>>>> abfd3590184ab6df50b3db6824eb2c577dc84ea0
  ready: function() {
    this.data='parent content';
  },
  ajaxResponse: function(event, response) {
<<<<<<< HEAD
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
        var item = response.response.data[that.playerIndex];
        bam.identifier = this.trackId;
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
=======
            console.log(response);
>>>>>>> abfd3590184ab6df50b3db6824eb2c577dc84ea0
  }
});
