export const updateLocalStorage = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  const remainingMilliseconds = 60 * 60 * 950;
  const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
  localStorage.setItem("expiryDate", expiryDate.toISOString());
  setAutoLogout(remainingMilliseconds);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiryDate");
  localStorage.removeItem("user");
  window.location.reload();
};

export const setAutoLogout = milliseconds => {
  if (milliseconds < 0) {
    logout();
  } else {
    setTimeout(() => {
      logout();
    }, milliseconds);
  }
};

export const loginOnRefresh = () => {
  try {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const expiryDate = localStorage.getItem("expiryDate");
    if (token) {
      setAutoLogout(new Date(expiryDate).getTime() - new Date().getTime());
    }
    return [token, user];
  } catch (error) {
    console.log(error);
  }
};
