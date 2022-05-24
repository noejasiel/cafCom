const usr = {
  auth: false,
  usr: null,
  typeUsr: "cliente",
};

const setUsr = (name) => {
  alert("HOLA");
  console.log(name);
  usr.usr = name;
};

const setAuth = () => {
  usr.auth = !usr.auth;
};

export default usr;
export { setUsr };
export { setAuth };
