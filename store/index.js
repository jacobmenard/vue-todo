import Vue from "vue"


export const state = () => ({
    todo: [],
    user: 'Menard'
})


//getters
export const getters = {
    todo(state) {

        return state.todo
    }
}


//actions
export const actions = {
    storeTodo({commit}, payload) {
        commit('STORE_TODO', payload)
    },

    checkItems({commit}, payload) {
        commit('CHANGE_TODO', payload)
    },

    removeItem({commit}) {
        commit('REMOVE_TODO')
    }
}


//mutations
export const mutations = {
    STORE_TODO(state, payload) {
        console.log(payload)
        state.todo.push(payload)
    },

    CHANGE_TODO(state, payload) {
        // Vue.set(state.todo, payload.idx, payload.data)
        state.todo[payload.idx].selected = !state.todo[payload.idx].selected

        
    },

    REMOVE_TODO(state) {

        var deleted = []
        for (let i = 0; i < state.todo.length; i++) {
            if (state.todo[i].selected) {
                deleted.push(i)
                state.todo[i].selected = false

            } 
        }

        console.log(deleted)
        var actual = 0
        deleted.forEach((item) => {
            state.todo.splice(item-actual, 1)
            actual+=1
            console.log(item)
        })

    }
}