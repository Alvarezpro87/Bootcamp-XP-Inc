
using minimal_api.Dominio.DTOs;
using minimal_api.Dominio.Entity;

namespace minimal_api.Infra.Interface
{
    public interface iAdministradorInterface
    {
        Administrador? Login(LoginDTO loginDTO);
        Administrador Incluir(Administrador administrador);
        Administrador? BuscaPorId(int id);
        List<Administrador> Todos(int? pagina);
    }
}