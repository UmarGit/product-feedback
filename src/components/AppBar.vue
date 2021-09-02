<template>
  <header class="rounded">
    <div class="dropdown">
      <span class="dropdown-header">Sort By :</span>
      <span class="dropdown-item-selected" @click="menuOpenVote = !menuOpenVote"
        >&nbsp;{{ sortByVote }}
        <span
          :class="`mdi ${menuOpenVote ? 'mdi-chevron-up' : 'mdi-chevron-down'}`"
      /></span>
      <div class="dropdown-items" v-if="menuOpenVote">
        <div
          class="dropdown-item"
          v-for="(item, index) in sortByVotes"
          :key="index"
          @click="sort('votes', item)"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="dropdown">
      <span class="dropdown-header">Sort By :</span>
      <span
        class="dropdown-item-selected"
        @click="menuOpenCategory = !menuOpenCategory"
        >&nbsp;{{ sortByCategory }}
        <span
          :class="
            `mdi ${menuOpenCategory ? 'mdi-chevron-up' : 'mdi-chevron-down'}`
          "
      /></span>
      <div class="dropdown-items" v-if="menuOpenCategory">
        <div
          class="dropdown-item"
          v-for="(item, index) in sortByCategories"
          :key="index"
          @click="sort('category', item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppBar",
  data() {
    return {
      menuOpenVote: false,
      menuOpenCategory: false,
      sortByVotes: ["Most Upvotes", "Least Upvotes"],
      sortByCategories: ["frontend", "backend"],
    };
  },
  computed: {
    ...mapGetters(["sortByVote", "sortByCategory"]),
  },
  methods: {
    sort(sortBy, item) {
      let obj = {
        sortBy,
        item,
      };
      this.$emit("sort", obj);
      if (sortBy === "votes") {
        this.$store.commit("SORT_CARDS_BY_VOTES", item);
        this.menuOpenVote = !this.menuOpenVote;
      } else {
        this.$store.commit("SORT_CARDS_BY_CATEGORIES", item);
        this.menuOpenCategory = !this.menuOpenCategory;
      }
    },
  },
};
</script>

<style>
header {
  background-color: #373e68;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.dropdown {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-right: 20px;
}
.dropdown-header {
  color: lightgrey;
}

.dropdown-item-selected {
  cursor: pointer;
}

.dropdown-items {
  position: absolute;
  background-color: wheat;
  right: 0;
  top: 30px;
  border-radius: 8px;
  padding: 10px;
}

.dropdown-item {
  padding: 4px;
  border-radius: 4px;
}

.dropdown-item:hover {
  background: #f7b53c;
  cursor: pointer;
}
</style>
