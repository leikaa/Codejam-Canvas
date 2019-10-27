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
            item.addEventListener('click', function () {
                let url = this.dataset.url;
                let dataType = this.dataset.type;
                let colorType = this.dataset.color;
                const canvas = document.querySelector('.work-area-canvas-block__canvas');
                const ctx = canvas.getContext('2d');
                const canvasFrameSize = 512;

                if (dataType === 'json') {
                    getJsonData(url)
                        .then(function (data) {
                            let pixelSize = canvasFrameSize / data.length;
                            let colorFillTemplate;

                            data.forEach((row, i) => {
                                row.forEach((pixelColor, j) => {
                                    if (colorType === 'hex') {
                                        colorFillTemplate = `#${pixelColor}`
                                    } else if (colorType === 'rgba') {
                                        colorFillTemplate = `rgba(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]}, ${pixelColor[3]})`
                                    } else {
                                        console.log('unsupported color type');
                                    }

                                    ctx.fillStyle = colorFillTemplate;
                                    ctx.fillRect(i*pixelSize, j*pixelSize, pixelSize, pixelSize);
                                });
                            })
                        });
                } else if (dataType === 'image') {
                    let image = new Image();
                    image.addEventListener('load', function() {
                        ctx.drawImage(image, 0, 0, canvasFrameSize, canvasFrameSize)
                    });
                    image.src = url;
                } else {
                    console.log('wrong data type!')
                }
            })
        });
    })();
};
