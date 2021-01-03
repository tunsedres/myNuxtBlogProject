export default function ({ store, redirect, req }) {
    store.dispatch('initAuth', req)
}