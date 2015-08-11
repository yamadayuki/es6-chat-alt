import Subscribe from "./Subscribe.js";

let ListenerMixin = {
  componentWillMount() {
    Subscribe.create(this);
  },

  componentWillUnmount() {
    Subscribe.destroy(this);
  },

  listenTo(store, handler) {
    Subscribe.add(this, store, handler);
  },

  listenToMany(stores, handler) {
    stores.forEach((store) => {
      this.listenTo(store, handler);
    }, this);
  },

  getListeners() {
    return Subscribe.listeners(this);
  }
};

module.exports = ListenerMixin;
