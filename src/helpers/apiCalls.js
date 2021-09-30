const serverUrl = 'http://localhost:5000';

export const getRecords = async () => {
  try {
    const data = await(await fetch(`${serverUrl}/records`, { credentials: "include"})).json();
    return data;
  } catch (error) {
    return error;
  }
};

export const SignInUser = async (data) => {
  try {
    const res = await(await fetch(`${serverUrl}/users/login`, { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    })).json();
    return res;
  } catch (error) {
    return error;
  }
};

export const SignUpUser = async (data) => {
  try {
    const res = await(await fetch(`${serverUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    })).json();
    return res;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (data) => {
  console.log("DATA", data);

  try {
    const res = await(await fetch(`${serverUrl}/users/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart: data.cart }),
      credentials: "include"
    })
    ).json();
    return res;
  } catch (error) {
    return error;
  }
};

export const createOrder = async (data) => {
  try {
    const res = await (
      await fetch(`${serverUrl}/users/${data.userId}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify( data ),
        credentials: "include"
      })
    ).json();
    return res;
  } catch (error) {
    return error;
  }
}