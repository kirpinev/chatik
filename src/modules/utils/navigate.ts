export const navigate = (location, router, path) => {
  if (
    window.location.pathname === '/' ||
    window.location.pathname === '/chat'
  ) {
    router.go('/chat');
  } else if (
    Object.values(path).every(currPath => window.location.pathname !== currPath)
  ) {
    router.go('/not-found');
  } else {
    router.go(window.location.pathname);
  }
};
