export default {
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageSize: 12,
      pageRange: 3,
      pageCount: 0,
      allItems: [],
      items: []
    };
  },
  methods: {
    pageChangeHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`);
      this.items = this.allItems[page - 1] || this.allItems[0];
    },
    setupPagination(allItems) {
      this.allItems = chunk(allItems, this.pageSize);
      this.pageCount = this.allItems.length;
      this.items = this.allItems[this.page - 1] || this.allItems[0];
    }
  }
};


function chunk(array, size) {
	const temp = [];
  for (let i = 0; i < array.length; i+=size) {
    temp.push(array.slice(i, i + size));
  }
  return temp;
}
