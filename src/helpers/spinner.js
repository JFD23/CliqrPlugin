import { SafeString } from 'handlebars/runtime'

function spinnerFn({ hash }) {
    const size = hash.size ? parseInt(hash.size, 10) : 32
    const spinner = `<svg xmlns="http://www.w3.org/2000/svg" class="cliqr--spinner" width="${size}" height="${size}" viewbox="0 0 32 32"><path opacity=".25" d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"/></path></svg>`
    return new SafeString(spinner)
}

export default spinnerFn
