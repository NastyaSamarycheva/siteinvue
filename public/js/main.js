var app = new Vue({
        el: '#app',
        data: {
            newlist: '',
            items: []
        },
        methods: {
      onClickMe() {
        this.$emit('set-this-elsewhere', {
          name: this.newlist
        })
        this.newlist = ''
      }
    }
  });
