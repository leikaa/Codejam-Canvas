window.onload = function () {
    (function () {
        let getJsonData = function (url) {
            return fetch(url).then(function(value) {
                console.log(value.json());
            }, function(reason) {
                console.log(reason);
            });
        };

        document.querySelectorAll('.work-area-right-panel-block-sizes__item').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                
                let data = this.dataset.data;
                console.log(data);
            })
        });
    })();
};
