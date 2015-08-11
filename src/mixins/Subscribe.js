let Subscribe = {
  create(context) {
    context._AltMixinRegistry = context._AltMixinRegistry || [];
  },

  add(context, store, handler) {
    context._AltMixinRegistry.push(store.listen(handler));
  },

  destroy(context) {
    context._AltMixinRegistry.forEach((f) => { f(); });
    context._AltMixinRegistry = [];
  },

  listeners(context) {
    return context._AltMixinRegistry;
  }
};

module.exports = Subscribe;
