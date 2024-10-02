
using minimal_api.Dominio.DTOs;
using minimal_api.Dominio.Entity;

namespace minimal_api.Infra.Interface
{
    public interface iVeiculoInterface
    {
        List<Veiculo> Todos(int? pagina = 1, string? nome = null, string? marca = null, string? ano = null);
        Veiculo? PorId(int id);
        void Cadastrar(Veiculo veiculo);
        void Atualizar(Veiculo veiculo);
        void Deletar(Veiculo veiculo);
        
    }
}