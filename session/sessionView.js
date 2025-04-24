export const buildUnauthorizedSession = () => {
  return `
    <a class="btn btn-outline-primary" href="./login.html">Login</a>
    <a class="btn btn-outline-success" href="./register.html">Create account</a>
  `;
}

export const buildAuthorizedSession = () => {
  return `
    <a class="btn btn-primary" href="./create-product.html">Create Product</a>
    <button class="btn btn-danger logout">Logout</button>
  `;
}