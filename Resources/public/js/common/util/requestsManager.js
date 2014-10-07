
function requestManager(options) {

    this.options = options;
    this.result = null;
    var that = this;


    this.init = function() {
        // Pre treatment
        this.preRequest();

        $.ajax(
            that.options
        ).done(function() {

        })
        .fail(function() {

        })
        .always(function() {
            // Post treatment
            that.postRequest();
        });


    }

    this.preRequest = function() {
        mainLoader.init();
    }

    this.postRequest = function() {
        mainLoader.remove();
    }

    this.getResult = function() {
        return this.result;
    }

    this.init();
}