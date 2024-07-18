export default function Router() {
  let listeners = [];
  let currentPath = location.hash.replace("#", "");
  let previousPath = null;

  const isMatch = (match, path) =>
    (match instanceof RegExp && path.match(match)) ||
    (typeof match === "function" && match(path)) ||
    (typeof match === "string" && match === path);

  const handleListener = ({ match, onEnter, onLeave }) => {
    const matchData = isMatch(match, currentPath);
    const args = { currentPath, previousPath, state: history.state, matchData };

    matchData && onEnter(args);
    onLeave && isMatch(match, previousPath) && onLeave(args);
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
    console.log({ currentPath, match });
    const listener = { id, match, onEnter, onLeave };
    listeners.push(listener);
    handleListener(listener);
    return () => {
      listener.filter((listener) => listener.id !== id);
    };
  };

  const go = (url, state) => {
    previousPath = currentPath;
    currentPath = url;

    location.hash = url;
    handleAllListeners();
  };

  window.addEventListener("hashchange", handleAllListeners);

  return { on, go };
}
