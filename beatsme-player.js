
Polymer('beatsme-player', {
  playerData : '',
  ready: function() {
    this.data='parent content';
  },
  ajaxResponse: function(event, response) {
            console.log(response);
  }
});
