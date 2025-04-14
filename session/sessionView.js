export const buildUnauthorizedSession = () => {
  return `
      <a href="./login.html">Login</a>
      <a href="./register.html">Create account</a>
    `;
}

export const buildAuthorizedSession = () => {
  return `
      <a href="./create-product.html">Create Product</a>
      <button class="logout">Logout</button>
    `;
}