const serverUrl = 'http://localhost:5000';

export const getRecords = async () => {
  try {
    const data = await(await fetch(`${serverUrl}/records`)).json();
    return data;
  } catch (error) {
    return error;
  }
};
