<template>
  <div class="container">
    <!-- User Section -->
    <div>
      <h2 id="userHeading" class="display-4 mt-4 mb-4">Manage Users</h2>
      <AddUser :user="user" />
      <div class="table-responsive">
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
              <td><img :src="user.userProfile" alt="User Image" class="user-img"></td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userRole }}</td>
              <td class="d-flex gap-2">
                <updateUser :user="user" />
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
      <button class="btnAdd" data-bs-toggle="modal" data-bs-target="#addItem">Add Product</button>
      <div class="table-responsive">
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
              <td><img :src="product.prodURL" alt="Product Image" class="prod-img"></td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.Category }}</td>
              <td>{{ product.quantity }}</td>
              <td>R {{ product.amount }}</td>
              <td>{{ product.prodDesc || 'N/A' }}</td>
              <td class="d-flex gap-2">
                <updateProduct :product="product" />
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
import AddUser from "../store/index";
import updateUser from "../store/index";
import updateProduct from "../store/index";

export default {
  components: {
    AddUser,
    updateUser,
    updateProduct,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
    },
    deleteProduct(prodID) {
      this.$store.dispatch("deleteProduct", { id: prodID });
    },
  },
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

.btnAdd {
  float: right;
  background-color: rgb(94, 13, 126);
  padding: 10px 20px;
  color: white;
  margin: 10px 0;
  border: 1px solid rgb(154, 10, 152);
  border-radius: 5px;
  cursor: pointer;
}

.btnAdd:hover {
  background-color: rgb(49, 11, 53);
}

.btn {
  margin: 2px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-danger:hover {
  background-color: rgb(51, 21, 83);
  transform: translateY(-2px);
}

.d-flex.gap-2 {
  display: flex;
  gap: 10px;
}
</style>
