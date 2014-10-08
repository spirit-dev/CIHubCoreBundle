function requestManager(options, doneAction, failAction) {

    this.options = options;
    this.doneAction = doneAction;
    this.failAction = failAction;
    this.result = null;
    this.finished = false;
    var that = this;


    this.init = function () {
        // Pre treatment
        this.preRequest();

        if (this.preventErrors()) {
            $.ajax(
                that.options
            )
                .done(function (data) {
                    that.result = {
                        issue: 200,
                        content: data
                    }
                    that.doneAction();
                })
                .fail(function (xhr, ajaxOptions, thrownErorr) {
                    switch (xhr.status) {
                        case 406:
                            console.log("406 Request error : "+xhr.status);
                            break
                        case 404:
                            console.log("Server not recheable");
                            break
                    }
                    that.failAction();
                })
                .always(function () {
                    // Post treatment
                    that.postRequest();
                });
        }

    }

    this.preventErrors = function() {
        // TODO checker les erreurs possibles
        return true;
    }

    this.preRequest = function () {
        mainLoader.init();
    }

    this.postRequest = function () {
        mainLoader.remove();
        this.finished = true;
    }

    this.getResult = function () {
        return this.result;
    }
    
    this.finished = function() {
        return this.finished;
    }

    this.init();
}