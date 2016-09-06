import Backbone from 'backbone'
import _ from 'underscore'

const actionMap = {
    create: 'create',
    update: 'update',
    delete: 'destroy',
    read: 'show'
}

const TaskGroup = Backbone.Model.extend({

    sync(method, model, options) {
        _.extend(options, {
            url: typeof model.url === 'function' ? model.url(actionMap[method]) : void 0
        });
        return Backbone.sync(method, model, options)
    },

    url(action) {
        let id = this.id != null ? '/' + this.id : ''
        return cliqr.config.PLUGIN_URL + ('task_groups/' + action + id + '?cid=') + cliqr.config.CID
    }
})

export default TaskGroup