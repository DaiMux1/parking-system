import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

import ticket from "./ticket";

Vue.use(Vuex);

export default function () {
    return new Vuex.Store({
        plugins: [createPersistedState({
            storage: window.sessionStorage,
        })],
        modules: {
            ticket,
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV,
    });
}