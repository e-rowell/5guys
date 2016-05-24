(function() {
    System.config({
        packages: {
            "app": {
                format: 'register',
                defaultExtension: 'js'
            },
            "node_modules/moment": {
                defaultExtension: 'js'
            }
        },
        paths: {
            "moment": "node_modules/moment/moment"
        },
        map: {
            moment: 'node_modules/moment/moment.js'
        }
    });
    System.import('app/main')
        .then(null, console.error.bind(console));
})();