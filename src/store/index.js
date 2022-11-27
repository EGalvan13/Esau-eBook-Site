import { createStore } from "vuex"
import { useRouter } from "vue-router"
const router = useRouter()

const store = createStore({
    state: {
        token: localStorage.getItem('TOKEN') || '',
        userInfo: JSON.parse(localStorage.getItem('UserInfo')) || {},
        bookList: JSON.parse(localStorage.getItem('BOOKS')) || []
    },
    actions: {
        onLogin ({ commit }, payload) {
            localStorage.setItem('TOKEN', payload.token)
            localStorage.setItem('UserInfo', JSON.stringify(payload.userData))
            router.push('/')
        },
        onFavoriteBook ({commit, state}, payload) {
            const books = state.bookList.map((book) => {
                if (Number(book.id) === Number(payload.id)) {
                    book.favorite = payload.favorite
                    return book
                }
                return book
            })
            commit('SET_BOOKS', books)
            return books
        } 
    },
    getters: {},
    mutations: {
        SET_BOOKS (state, payload) {
            state.bookList = payload
            console.log('state.bookList: ', state.bookList)
            localStorage.setItem("BOOKS", JSON.stringify(payload));
        },
    },
    modules: {}
})
export default store