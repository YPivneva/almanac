/* eslint-disable */
function Router() {
  let listeners = [];
  let currentPath = location.pathname;
  let previousPath = null;
}

const createRender =
  (content) =>
  (...args) => {
    console.info(`${content} args=${JSON.stringify(args)}`);
    document.getElementById("root").innerHTML = `<h2>${content}</h2>`;
  };

const router = Router();
