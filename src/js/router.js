import { historyPage } from "./history";
import { homePage } from "./home";
import Template from "./createCalendar";

function Router() {
  let listeners = [];
  let currentPath = location.pathname;
  let previousPath = null;

  const isMatch = (match, path) =>
    (match instanceof RegExp && match.test(path)) ||
    (typeof match === "function" && match(path)) ||
    (typeof match === "string" && match === path);

  const handleListener = ({ match, onEnter, onLeave }) => {
    const args = { currentPath, previousPath, state: history.state };

    isMatch(match, currentPath) && onEnter(args);
    onLeave && isMatch(match, previousPath) && onLeave(args);
    if (currentPath === "/") {
      Template();
    }
  };

  const handleAllListeners = () => listeners.forEach(handleListener);

  const generateId = () => {
    const getRandomNumber = () =>
      Math.floor(Math.random() * listeners.length * 1000);
    const doesExist = (id) => listeners.find((listener) => listener.id === id);

    let id = getRandomNumber();
    while (doesExist(id)) {
      id = getRandomNumber();
    }
    return id;
  };

  const on = (match, onEnter, onLeave) => {
    const id = generateId();

    const listener = { id, match, onEnter, onLeave };
    listeners.push(listener);
    handleListener(listener);
    return () => {
      listener.filter((listener) => listener.id !== id);
    };
  };

  const go = (url, state) => {
    previousPath = currentPath;
    history.pushState(state, url, url);
    currentPath = location.pathname;

    handleAllListeners();
  };

  window.addEventListener("popstate", handleAllListeners);

  return { on, go };
}

const createRender =
  (content) =>
  (...args) => {
    document.getElementById("root").innerHTML = `${content}`;
  };

const router = Router();

router.on("/", createRender(`${homePage}`));
router.on("/history", createRender(`${historyPage}`));

document.body.addEventListener("click", (event) => {
  if (!event.target.matches("a")) {
    return;
  }
  event.preventDefault();
  let url = event.target.getAttribute("href");
  router.go(url);
});
