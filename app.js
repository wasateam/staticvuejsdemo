var app = new Vue({
  el: '#app',
  data: {
    state: {
      search: ''
    },
    headers: [
      {
        label: "ID",
        value: "id",
      },
      {
        label: "Name",
        value: "name",
      },
      {
        label: "Content",
        value: "content",
      },
    ],
    items: [
      {
        id: 1,
        name: "丁丁",
        content: "Hi",
      },
      {
        id: 2,
        name: "小波",
        content: "Hi",
      },
      {
        id: 3,
        name: "迪西",
        content: "Hi",
      },
      {
        id: 4,
        name: "拉拉",
        content: "Hi",
      },
    ],
  },
  methods: {
    $_onRemoveColumn() {
      this.items.splice(0, 1)
    }
  }
})