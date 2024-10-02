
using minimal_api.Dominio.Enuns;

namespace minimal_api.Dominio.DTOs
{
public class AdministradorDTO
    {
        public string Email { get;set; } = default!;
        public string Password { get;set; } = default!;
        public Perfil? Perfil { get;set; } = default!;
    }
}