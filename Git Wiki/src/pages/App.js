import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    if (!currentRepo.includes('/')) {
      alert('Formato inválido. Use o formato "username/repository"');
      return;
    }

    try {
      const { data } = await api.get(`/repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }

      alert('Repositório já adicionado ou não encontrado');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Repositório não encontrado. Verifique o nome e tente novamente.');
      } else {
        alert('Erro ao buscar o repositório. Verifique sua conexão ou tente mais tarde.');
      }
    }
  };

  const handleRemoveRepo = (id) => {
    const updatedRepos = repos.filter(repo => repo.id !== id);
    setRepos(updatedRepos);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => (
        <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
