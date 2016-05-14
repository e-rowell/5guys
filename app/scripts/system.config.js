(function() {
    System.config({
        packages: {
            app: {
                format: 'register',
                defaultExtension: 'js'
            },
            "node_modules/moment": {
                defaultExtension: 'js'
            }
        },
        paths: {
            "moment": "node_modules/moment/moment"
        }
    });
    System.import('app/main.js')
        .then(null, console.error.bind(console));
})();