// See https://aka.ms/new-console-template for more information
using ExemplosFundamentos.models;


 int opcao = 0;
 bool exibirMenu = true;

while (exibirMenu){
    Console.Clear();
    Console.WriteLine("Escolha uma opção: ");
    Console.WriteLine("1 - Cadastrar Cliente ");
    Console.WriteLine("2 - Buscar Cliente ");
    Console.WriteLine("3 - Apagar Cliente ");
    Console.WriteLine("4 - Encerrar Cliente ");

    opcao = int.Parse(Console.ReadLine());
    switch (opcao){
        case 1:
            Console.WriteLine("Cadastrando cliente");
            break;
        case 2:
            Console.WriteLine("Buscando cliente");
            break;
        case 3:
            Console.WriteLine("Apagando cliente");
            break;
        case 4:
            Console.WriteLine("Encerrando cliente");
            exibirMenu = false;           
            break;
        default:
            Console.WriteLine("Opção inválida");
            break;
    }
}

