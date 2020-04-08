import axios from 'axios'

const state = {
    cavaleiros:[]
};

const getters = {
    getCavaleiros:state=>state.cavaleiros,

    getCavaleirosById:(state)=>(id)=>state.cavaleiros.filter(cav=>cav.id === id)[0]
    
};

const mutations = {
    save_cm:(state, cavaleiros)=>state.cavaleiros = cavaleiros,

    save_cm_state:(state, cavaleiro)=>state.cavaleiros.push(cavaleiro),

    delete_cm_state:(state, id)=>state.cavaleiros=state.cavaleiros.filter(cav=>cav.id !== id),

    update_cm_state:(state, cavaleiro)=>{state.cavaleiros.filter(cav=>cav.id === cavaleiro.id)[0] = cavaleiro}
    
    

};

const actions = {
    load_cm:({commit})=>{
        axios.get('../object.json').then((resposta) => {commit('save_cm',resposta.data.cavaleiros)})
    },

    add_cm:({commit},cavaleiro)=>{
        cavaleiro.id = state.cavaleiros.map(cav=>cav.id).sort((a, b) => a - b)[state.cavaleiros.length-1]+1
        commit('save_cm_state', cavaleiro)
        
    },

    delete_cm:({commit},id)=>{
        commit('delete_cm_state', id)
    },

    edit_cm:({commit}, cavaleiro)=>{
        commit('update_cm_state', cavaleiro)
        
    }

    
};

export default {
    state,
    actions,
    getters,
    mutations
}


