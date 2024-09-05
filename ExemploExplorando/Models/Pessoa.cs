using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploExplorando.Models
{
    
    public class Pessoa
    {
        public Pessoa(){

        }
        public Pessoa ( string nome, string sobrenome){

            Nome = nome;
            Sobrenome = sobrenome;
            NomeCompleto = $"{Nome} {Sobrenome}";

        }
        private string _nome;
        private string __sobrenome;
        public string Nome { 
            get => _nome.ToUpper();
            
            set{
                if(value != null && value.Length < 1){

                    throw new ArgumentException("Nome muito curto");

                }

                _nome = value;
            } 
            }
        public string Sobrenome{ 
            get => __sobrenome.ToUpper();
            
            set{
                if(value != null && value.Length < 1){

                    throw new ArgumentException("Nome muito curto");

                }

                __sobrenome = value;
            } 
            }

        public string NomeCompleto { get; }

        public void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {Nome} e tenho {Sobrenome} anos.");
        }
    }
}