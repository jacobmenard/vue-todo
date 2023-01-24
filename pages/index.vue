<template>
  <v-card width="600" :elevation="7" class="todo-container pa-6 ma-auto">
    <span>Checklist</span>

    <div class="d-flex mt-2">
      <v-btn elevation="2" class="mr-2" rounded>Pending</v-btn>
      <v-btn elevation="2" rounded @click="completeTask(todo)">Completed</v-btn>
    </div>

    <div class="list-display my-3">
      <v-list>
        
        <v-checkbox v-for="(item, i) in todo" :key="`checkbox${i}`" :label="`${item.title}`" :value="item.selected" :checked="item.selected" class="mt-1" :class="{'checked' : item.selected}" hide-details="false" @change="getChecked(item, i)"></v-checkbox>
      </v-list>
    </div>

    <div class="d-flex">
      <v-text-field
        label="Input items"
        solo
        class="mr-2"
        v-model="todoTitle"
      ></v-text-field>
      <v-btn elevation="2" color="primary" rounded @click="getStoredTodo()">Add Item</v-btn>
    </div>
  </v-card>
</template>

<style lang="scss">
.todo-container {
  .list-display {
    min-height: 150px;
  }

  .v-input--checkbox {
    &.checked {
      .v-label {
        text-decoration: line-through;
      }
    }
  }
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      todoTitle: '',
      todoCheckbox: {}
    }
  },
  computed: {
    ...mapGetters(['todo']),
  },

  methods: {
    ...mapActions(['storeTodo', 'checkItems', 'removeItem']),

    getStoredTodo() {
      this.storeTodo({title: this.todoTitle, status: 'pending', selected: false})
    },

    getChecked(data, idx) {
      this.checkItems({data: data, idx: idx})
    },

    completeTask() {
      this.removeItem()
    }
  }
}
</script>