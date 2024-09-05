using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemplosFundamentos.models
{
    public class Calculadora
    {
        public void Somar(int a, int b)
        {
            Console.WriteLine($"{a} + {b} = {a + b}");
        }
         public void Subtrarir(int a, int b)
        {
            Console.WriteLine($"{a} - {b} = {a - b}");
        }

          public void Multiplicar(int a, int b)
        {
            Console.WriteLine($"{a} * {b} = {a * b}");
        }
            public void Dividr(int a, int b)
        {
            Console.WriteLine($"{a} / {b} = {a / b}");
        }
    }
}