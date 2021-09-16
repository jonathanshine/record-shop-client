const serverUrl = 'http://localhost:5000';

export const getRecords = async () => {
  try {
    const data = await(await fetch(`${serverUrl}/records`)).json();
    return data;
  } catch (error) {
    return error;
  }
};

export const SignInUser = async (data) => {
  try {
    const res = await(await fetch(`${serverUrl}/users/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data )})).json();
    return res;
  } catch (error) {
    return error;
  }
};

export const SignUpUser = async (data) => {
  try {
    const res = await(await fetch(`${serverUrl}/users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    ).json();
    return res;
  } catch (error) {
    return error;
  }
};