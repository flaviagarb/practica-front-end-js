export const buildUnauthorizedSession = () => {
  return `
    <a class="btn btn-light text-dark" href="./login.html">Login</a>
    <a class="btn btn-light text-dark" href="./register.html">Signup</a>
  `;
}

export const buildAuthorizedSession = () => {
  return `
    <a href="/create-product.html" class="btn btn-light text-dark">Create Product</a>
    <button class="btn btn-danger logout">
      <i class="bi bi-box-arrow-right me-2"></i> Logout
    </button>
  `;
}