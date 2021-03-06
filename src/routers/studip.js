import Backbone from 'backbone'
import Radio from 'backbone.radio'
import showError from '../error'
import { userRole } from '../utils'
import ArchiveView from '../views/archive/view'
import * as TaskGroups from '../views/task-groups/index'
import * as Tasks from '../views/tasks/index'
import * as Votings from '../views/votings/index'
import * as fetchers from './studip-fetcher'

let currentView

const changeToPage = function(view, selector) {
    if (currentView) {
        currentView.$el.hide()
        currentView.destroy()
    }
    currentView = view
    Backbone.$(window).scrollTop(0)
    Backbone.$(selector).prepend(view.$el)
    view.render()
}

const StudipRouter = Backbone.Router.extend({
    initialize(options) {
        this.selector = options.selector
        this.store = options.store
    },

    routes: {
        '': 'redirectByAuthorization',

        'task-groups': 'taskGroups',
        'task-groups/show/:id': 'taskGroup',
        'task-group/edit/:id': 'taskGroupEdit',

        'task/show/:id': 'task',
        'task/create/:id': 'taskCreate',
        'task/edit/:id': 'taskEdit',

        'compare/:v1/:v2': 'votingCompare',

        'voting/:id': 'voting',

        archive: 'archive'
    },

    routeHandler(fetcher, id, view, useCollection = 'model', ...rest) {
        Radio.channel('layout').request('show:loading')
        return fetcher(id)
            .then(response => {
                Radio.channel('layout').request('hide:loading')
                const page = new view({ [useCollection]: response, store: this.store })
                return changeToPage(page, this.selector)
            })
            .catch(error => {
                const status = error && error.status
                if (status === 403) {
                    Radio.channel('layout').request('hide:loading')
                    return this.navigate('', { trigger: true, replace: true })
                }
                showError('Could not route URL', error)
                throw error
            })
    },

    // ROUTE: ''
    redirectByAuthorization() {
        if (userRole('student')) {
            this.navigate('archive', { trigger: true, replace: true })
        } else {
            if (this.store.taskGroups.size() === 1) {
                this.navigate(`task-groups/show/${this.store.taskGroups.first().id}`, { trigger: true, replace: true })
            } else {
                this.navigate('task-groups', { trigger: true, replace: true })
            }
        }
    },

    // ROUTE: '#task-groups'
    taskGroups() {
        this.routeHandler(() => Promise.resolve(this.store.taskGroups), null, TaskGroups.IndexView, 'collection')
    },

    // ROUTE: '#task-groups/show/:id'
    taskGroup(id) {
        this.routeHandler(fetchers.fetchTaskGroup, id, TaskGroups.ShowView)
    },

    // ROUTE: '#task-group/edit/:id'
    taskGroupEdit(id) {
        this.routeHandler(fetchers.fetchTaskGroup, id, TaskGroups.EditView)
    },

    // ROUTE: '#task/show/:id'
    task(id) {
        this.routeHandler(fetchers.fetchTask, id, Tasks.ShowView)
    },

    // ROUTE: '#task/create/:id'
    taskCreate(id) {
        this.routeHandler(fetchers.fetchTaskGroup, id, Tasks.CreateView)
    },

    // ROUTE: '#task/edit/:id'
    taskEdit(id) {
        this.routeHandler(fetchers.fetchTask, id, Tasks.EditView)
    },

    // ROUTE: '#voting/:id'
    voting(id) {
        this.routeHandler(fetchers.fetchVoting, id, Votings.ShowView)
    },

    // ROUTE: '#compare/:v1/:v2'
    votingCompare(v1, v2) {
        this.routeHandler(fetchers.fetchTwoVotings, [v1, v2], Votings.CompareView, 'votings')
    },

    // ROUTE: '#archive'
    archive() {
        this.routeHandler(fetchers.fetchLastVotings, null, ArchiveView, 'collection', '#nav_cliqr_archive')
    }
})

export default StudipRouter
