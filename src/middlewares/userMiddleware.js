import axios from 'axios';
import { LOGIN, LOGOUT, setUser } from '../actions/user';
import toast from 'react-hot-toast';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = store.getState().user.loginForm;

      axios.post('http://localhost:3001/login', { email, password })
        .then((response) => {
          const { pseudo, token } = response.data;
          
          toast.success('Vous êtes connecté(e), bonne visite.');

          localStorage.setItem('user', JSON.stringify({
            pseudo,
            token,
          }));
          store.dispatch(setUser(pseudo, token));
        })
        .catch((error) => {
          console.error(error);
          toast.error('Une erreur est survenue, veuillez vérifier le mot de passe saisi.');
        });
      break;
    }

    case LOGOUT: {
      localStorage.removeItem('user');
      toast.success('Merci pour la visite, à bientôt');
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default userMiddleware;
