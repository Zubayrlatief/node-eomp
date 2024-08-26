<template>
  <div class="container">
    <!-- User Section -->
    <div>
      <h2 id="userHeading" class="display-4 mt-4 mb-4">Manage Users</h2>
      <form @submit.prevent="addUser">
        <input v-model="newUser.firstName" placeholder="First Name" required />
        <input v-model="newUser.lastName" placeholder="Last Name" required />
        <input v-model="newUser.email" placeholder="Email" type="email" required />
        <input v-model="newUser.age" placeholder="Age" type="number" required />
        <select v-model="newUser.gender">
          <option value="" disabled>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select v-model="newUser.role">
          <option value="" disabled>Role</option>
          <option>User</option>
          <option>Admin</option>
        </select>
        <button type="submit" class="btn btn-primary">Add User</button>
      </form>
      <div class="table-responsive mt-4">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Profile Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td><img :src="user.userProfile" alt="User Image" class="user-img" /></td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role }}</td>
              <td class="d-flex gap-2">
                <button class="btn btn-danger" @click="deleteUser(user.userID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Product Section -->
    <div class="mt-5">
      <h2 id="productHeading" class="display-4 mb-4">Manage Products</h2>
      <form @submit.prevent="addProduct">
        <input v-model="newProduct.prodName" placeholder="Product Name" required />
        <input v-model="newProduct.category" placeholder="Category" required />
        <input v-model="newProduct.quantity" placeholder="Quantity" type="number" required />
        <input v-model="newProduct.amount" placeholder="Price" type="number" required />
        <textarea v-model="newProduct.prodDesc" placeholder="Description"></textarea>
        <button type="submit" class="btn btn-primary">Add Product</button>
      </form>
      <div class="table-responsive mt-4">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.prodID">
              <td>{{ product.prodID }}</td>
              <td><img :src="product.prodURL" alt="Product Image" class="prod-img" /></td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.quantity }}</td>
              <td>R {{ product.amount }}</td>
              <td>{{ product.prodDesc || 'N/A' }}</td>
              <td class="d-flex gap-2">
                <button class="btn btn-danger" @click="deleteProduct(product.prodID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data() {
    return {
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        age: null,
        gender: '',
        role: ''
      },
      newProduct: {
        prodName: '',
        category: '',
        quantity: null,
        amount: null,
        prodDesc: ''
      }
    };
  },
  computed: {
    users() {
      return this.$store.getters.allUsers;
    },
    products() {
      return this.$store.getters.recentProducts;
    },
  },
  methods: {
    async addUser() {
      try {
        await this.$store.dispatch("addUser", this.newUser);
        this.resetUserForm();
      } catch (error) {
        console.error("Failed to add user:", error);
      }
    },
    async deleteUser(userID) {
      try {
        await this.$store.dispatch("deleteUser", userID);
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    },
    async addProduct() {
      try {
        await this.$store.dispatch("addProduct", this.newProduct);
        this.resetProductForm();
      } catch (error) {
        console.error("Failed to add product:", error);
      }
    },
    async deleteProduct(prodID) {
      try {
        await this.$store.dispatch("deleteProduct", prodID);
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
    },
    resetUserForm() {
      this.newUser = {
        firstName: '',
        lastName: '',
        email: '',
        age: null,
        gender: '',
        role: ''
      };
    },
    resetProductForm() {
      this.newProduct = {
        prodName: '',
        category: '',
        quantity: null,
        amount: null,
        prodDesc: ''
      };
    }
  },
  created() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchProducts');
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

#userHeading,
#productHeading {
  margin-bottom: 20px;
}

.table {
  border: 1px solid rgb(63, 15, 103);
}

.user-img,
.prod-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.btn-primary {
  margin-top: 10px;
}

.d-flex.gap-2 {
  display: flex;
  gap: 10px;
}
</style>
