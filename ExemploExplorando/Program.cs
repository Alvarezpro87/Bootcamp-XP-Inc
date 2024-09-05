using ExemploExplorando.Models;
Pessoa p1 = new Pessoa("Alexandre", "Frois");
Pessoa p2 = new Pessoa("Roberto", "Carlos");


Curso cursoDeIngles = new Curso
{
    Nome = "Ingles",
    Alunos = new List<Pessoa>()
   
   
};

cursoDeIngles.AdicionarAluno(p2);
cursoDeIngles.AdicionarAluno(p1);
cursoDeIngles.ListarAlunos();