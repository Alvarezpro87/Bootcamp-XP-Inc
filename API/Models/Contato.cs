using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Contato
    {
        public int id { get; set; }
        public string Nome { get; set; }
        public String Telefone { get; set; }
        public Boolean Ativo { get; set; }
    }
}