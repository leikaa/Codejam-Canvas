window.onload = function () {
    (function () {
        let getJsonData = function (url) {
            return fetch(url).then(function (value) {
                return value.json();
            }, function (reason) {
                return console.log(reason);
            });
        };

        document.querySelectorAll('.work-area-right-panel-block-sizes__item').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                let url = this.dataset.url;
                let dataType = this.dataset.type;
                const canvas = document.querySelector('.work-area-canvas-block__canvas');
                const ctx = canvas.getContext('2d');

                if (dataType === 'json') {
                    getJsonData(url)
                        .then(function (data) {
                            console.log(data);
                        });
                }
            })
        });
    })();
};
