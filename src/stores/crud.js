import { defineStore } from 'pinia'
import toJSON from './helper'
import router from '../router'
const apiUrl = 'https://dummyjson.com';

export const useCrudStore = defineStore('crud', {
  state: () => ({
    list: [],
    msg: {
      type: null,
      title: '',
      msg: ''
    },
    form: {
      title: '',
      description: '',
      price: '',
      discountPercentage: '',
      rating: '',
      stock: '',
      brand: '',
      category: '',
      thumbnail: '',
    }
  }),
  actions: {
    async fetchPosts() {
      this.list = []
      try {
        await fetch(`${apiUrl}/products`)
          .then(async (response) => {
            const jsonData = await toJSON(response.body);
            this.list = jsonData.products
          })
      } catch (error) {
        console.log(error);
      }
    },
    async PostStore(id) {
      try {
        const url = id ? `${apiUrl}/products/${id}` : `${apiUrl}/products/add`
        const method = id ? 'PUT' : 'POST'
        fetch(url, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        })
          .then(async (response) => {
            this.msg = {
              type: true,
              title: 'success',
              msg: await toJSON(response.body)
            }
          })
      } catch (error) {
        console.log(error);
      }
    },
    async PostEdit(id) {
      try {
        fetch(`${apiUrl}/products/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
          .then(async (response) => {
            const jsonData = await toJSON(response.body);
            this.form = {
              title: jsonData.title,
              description: jsonData.description,
              price: jsonData.price,
              discountPercentage: jsonData.discountPercentage,
              rating: jsonData.rating,
              stock: jsonData.stock,
              brand: jsonData.brand,
              category: jsonData.category,
              thumbnail: jsonData.thumbnail,
            }
          })
      } catch (error) {
        console.log(error);
      }
    },
    async PostDelete(id) {
      try {
        fetch(`${apiUrl}/products/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })
          .then(async (response) => {
            this.fetchPosts()
            this.msg = {
              type: true,
              title: 'success deleted',
              msg: await toJSON(response.body)
            }
          })
      } catch (error) {
        console.log(error);
      }
    },
    resetMsg() {
      this.msg = {
        type: null,
        title: '',
        msg: ''
      }
    }
  },
})
