const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@': 'src',
        '@views': 'src/views',
        '@assets': 'src/assets',
        '@styles': 'src/styles',
        '@components': 'src/components',
        '@config': 'src/config',
        '@actions': 'src/actions',
        '@reducers': 'src/reducers',
        '@services': 'src/services',
    }) (config);

    return config;
}