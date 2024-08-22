<template>
    <div class="container">
      <!-- User Management Section -->
      <div>
        <h2 id="userHeading" class="display-4 mt-4 mb-4">Manage Users</h2>
        <AddUser :user="user" />
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>User ID</th>
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
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.gender }}</td>
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
  
      <!-- Product Management Section -->
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
                <th>Brand</th>
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
                <td><img :src="product.prodImg" alt="Product Image" class="prod-img"></td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.prodBrand }}</td>
                <td>{{ product.prodCat }}</td>
                <td>{{ product.prodQuantity }}</td>
                <td>R {{ product.prodAmount }}</td>
                <td>{{ product.prodDesc }}</td>
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
  import AddUser from "../components/AddUser.vue";
//   import AddProduct from "../components/AddProduct.vue";
  import updateUser from "../components/UpdateUserModal.vue";
  import updateProduct from "../components/UpdateProduct.vue";
  
  export default {
    components: {
      AddUser,
    //   AddProduct,
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
    border: 1px solid rgb(39, 142, 86);
  }
  
  .prod-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  
  .btnAdd {
    float: right;
    background-color: midnightblue;
    padding: 10px 20px;
    color: white;
    margin: 10px 0;
    border: 1px solid midnightblue;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btnAdd:hover {
    background-color: darkblue;
  }
  
  .btn {
    margin: 2px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .btn-danger:hover {
    background-color: darkred;
    transform: translateY(-2px);
  }
  
  .d-flex.gap-2 {
    display: flex;
    gap: 10px;
  }
  </style>
  