import axios from "axios";

// export let resource = null;

export function fetchProfileData(username) {
  let profilePromise = fetchProfile(username);
  // resource = { profile: wrapPromise(profilePromise) };
  return {
    profile: wrapPromise(profilePromise)
  };
}

export function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

export function fetchProfile(username) {
  return axios
    .get(`/profile/${username}`)
    .then(res => res.data)
    .catch(err => console.log(err));
}
