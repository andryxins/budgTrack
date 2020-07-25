import axios from 'axios';

export const getUserTransactions = async () => {
  try {
    const userData = await axios.get('http://localhost:5000/userBudg');
    return userData;
  } catch (e) {
    console.log(e);
  }
};

export const authorisationRequest = async () => {
  try {
    const userData = await axios.get('http://localhost:5000/userInfo');
    return userData;
  } catch (e) {
    console.log(e);
  }
};

type isLoginUniqueParam = {
  login: string;
};

export const isLoginUnique = async (
  userLogin: isLoginUniqueParam,
): Promise<boolean> => {
  try {
    await axios.post('http://localhost:8080/auth/isUniqueLogin', userLogin);
    return true;
  } catch (e) {
    return false;
  }
};
