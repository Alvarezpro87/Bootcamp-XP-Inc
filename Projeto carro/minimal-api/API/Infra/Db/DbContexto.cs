using Microsoft.EntityFrameworkCore;
using minimal_api.Dominio.Entity;

namespace minimal_api.Infra.Db;

public class DbContexto : DbContext
{
    public DbContexto(DbContextOptions<DbContexto> options) : base(options)
    {
    }

    public DbSet<Administrador> Administradores { get; set; } = default!;
    public DbSet<Veiculo> Veiculos { get; set; } = default!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Administrador>().HasData(new Administrador{
            Id = 1,
            Email = "adm@Test.com",
            Password = "123456",
            Perfil = "Admin"
        }
        );

    }
}
