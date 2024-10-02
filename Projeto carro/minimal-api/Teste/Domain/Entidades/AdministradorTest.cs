

using minimal_api.Dominio.Entity;

namespace Teste.Domain.Entidades
{
    [TestClass]
   
    public class AdministradorTest
    {
        [TestMethod]
        public void TestarGetSetPropriedades()
        {
            //arrange
            var adm = new Administrador();
            //act
            adm.Id = 1;
            adm.Email = "email";
            adm.Password = "123456";
            adm.Perfil = "Admin";
            

            //assert
            Assert.AreEqual(1, adm.Id);
            Assert.AreEqual(adm.Email, "email");
            Assert.AreEqual(adm.Password, "123456");
            Assert.AreEqual(adm.Perfil, "Admin");
        }
    }
}