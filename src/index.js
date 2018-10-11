module.exports = {
    /**
     * Add gtag.js script to document& expose gtag & gtagConfig
     * functions on window object.
     *
     * @param {String}  trackingId
     * @param {Boolean} [anonymizeIp]
     * @param {Object}  [initialConfig]
     */
    add: (trackingId, anonymizeIp = true, initialConfig = {}) => {
        const elem = document.createElement('script')
        elem.type = 'text/javascript'
        elem.async = true
        elem.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`

        const exists = document.querySelector(`script[src="${elem.src}"]`)

        // Don't add script twice
        if (exists) {
            return
        }

        // Insert script before first <script> element
        const script = document.getElementsByTagName('script')[0]
        script.parentNode.insertBefore(elem, script)

        window.dataLayer = window.dataLayer || []

        window.gtag = function() {
            window.dataLayer.push(arguments)
        }

        window.gtagConfig = function(options) {
            options = Object.assign({}, options, {
                anonymize_ip: anonymizeIp
            })

            window.gtag('config', trackingId, options)
        }

        window.gtag('js', new Date())
        window.gtagConfig(initialConfig)
    }
}
