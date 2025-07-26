// Navigation
function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// To-Do List
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.onclick = () => deleteTodo(index);
    li.appendChild(btn);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const value = todoInput.value.trim();
  if (value) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    loadTodos();
  }
}

function deleteTodo(index) {
  const todos = JSON.parse(localStorage.getItem('todos'));
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  loadTodos();
}

loadTodos();

// Product Listing
const products = [
  { name: 'Smartphone', category: 'electronics', price: 499, rating: 4.5 },
  { name: 'Jeans', category: 'clothing', price: 49, rating: 4.0 },
  { name: 'Laptop', category: 'electronics', price: 999, rating: 4.8 },
  { name: 'T-shirt', category: 'clothing', price: 19, rating: 4.1 }
];

function filterProducts() {
  const category = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('sortOption').value;

  let filtered = category === 'all' ? [...products] : products.filter(p => p.category === category);

  if (sort === 'price') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const container = document.getElementById('productContainer');
  container.innerHTML = '';
  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<strong>${p.name}</strong><br>Category: ${p.category}<br>Price: $${p.price}<br>Rating: ${p.rating}`;
    container.appendChild(div);
  });
}

filterProducts();
