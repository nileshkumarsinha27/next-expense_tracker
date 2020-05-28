const setCookie = (cname, cvalue, extime) => {
  const encodedCvalue = encodeURIComponent(cvalue);
  let expires = '';
  if (extime) {
    const d = new Date();
    d.setTime(d.getTime() + extime * 1000);
    expires = `expires=${d.toGMTString()}`;
  }
  document.cookie = `${cname}=${encodedCvalue};path=/;${expires}`;
};

const getCookie = cname => {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return decodeURIComponent(c.substring(name.length, c.length));
    }
  }
  return '';
};

const deleteCookie = cname => {
  document.cookie = `${cname}=;path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
};

module.exports = {
  get: getCookie,
  set: setCookie,
  delete: deleteCookie
};
